import Prismic from "prismic-javascript";

import Name from "@components/Name";
import Head from "@components/Head";
import Menu from "@components/Menu";
import Button from "@components/Button";
import WorkExperience from "@components/WorkExperience";
import Education from "@components/Education";
import LeftContainer from "@components/LeftContainer";
import RightContainer from "@components/RightContainer";

import styles from "./styles.scss";

const Resume = props => (
  <div className={styles.resume}>
    <LeftContainer>
      <Head title="Cheyenne Mangum | Experience" />
      <Menu />
      <Name data={props.homeData} />

      <div className={styles.label}>Work Experience</div>

      {props.resumeData.work_experience.map(item => {
        return <WorkExperience key={item.business_name} item={item} />;
      })}

      <div className={styles.label}>Education</div>

      {props.resumeData.education.map(item => {
        return <Education key={item.school_name} item={item} />;
      })}

      <br />
      <br />

      {props.resumeData.resume_file.url && (
        <Button href={props.resumeData.resume_file.url} target="_blank">
          Download Resume
        </Button>
      )}
    </LeftContainer>
    <RightContainer homeData={props.homeData} />
  </div>
);

//Async get data from Prismic
Resume.getInitialProps = async () => {
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

export default Resume;
