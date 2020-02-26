import Prismic from "prismic-javascript";
import { RichText } from "prismic-reactjs";

import Name from "@components/Name";
import Head from "@components/Head";
import Menu from "@components/Menu";
// import Bio from "@components/Bio";
import LeftContainer from "@components/LeftContainer";
import RightContainer from "@components/RightContainer";

import styles from "./styles.scss";

const Skills = props => (
  <div className={styles.skills}>
    <LeftContainer>
      <Head title="Cheyenne Mangum | Skills" />
      <Menu />
      <Name data={props.homeData} />
      <div className={styles.container}>
        {RichText.render(props.skillsData.skills)}
      </div>
    </LeftContainer>
    <RightContainer homeData={props.homeData} />
  </div>
);

//Async get data from Prismic
Skills.getInitialProps = async () => {
  const apiEndpoint = "https://cheyennem-com.cdn.prismic.io/api/v2";
  const api = await Prismic.api(apiEndpoint);

  const homeData = await api.query(
    Prismic.Predicates.at("document.type", "home")
  );

  const resumeData = await api.query(
    Prismic.Predicates.at("document.type", "resume")
  );

  const skillsData = await api.query(
    Prismic.Predicates.at("document.type", "skills")
  );

  return {
    homeData: homeData.results[0].data,
    resumeData: resumeData.results[0].data,
    skillsData: skillsData.results[0].data
  };
};

export default Skills;
