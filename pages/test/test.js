import Prismic from "prismic-javascript";

const Test = props => {
    console.log(props)
    return (

        <div className={styles.skills}>
        <LeftContainer>
          <Head title="Cheyenne Mangum | Skills" />
          <Menu />
          <Name data={props.homeData} />

        <div>
            <Button href={props.resumeData.resume_file.url} target="_blank">
                Download Resume!!!!!!!
        </Button>
        </div>
        </LeftContainer>
        <RightContainer homeData={props.homeData} />
      </div>

    )
};

//Async get data from Prismic
Test.getInitialProps = async () => {
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

    const testData = await api.query(
        Prismic.Predicates.at("document.type", "ok")
    );

    const projectsData = await api.query(
        Prismic.Predicates.at("document.type", "projects")
    );

    return {
        homeData: homeData.results[0].data,
        resumeData: resumeData.results[0].data,
        skillsData: skillsData.results[0].data,
        testData: testData.results[0].data,
        projectsData: projectsData.results[0].data
    };
};

export default Test