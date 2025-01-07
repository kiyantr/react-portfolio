import { Container, Row, Col } from "react-bootstrap";
import "./App.css";
import { MdEmail } from "react-icons/md";
import { FaBirthdayCake, FaPhoneAlt, FaLinkedin } from "react-icons/fa";
import { SiGooglestreetview } from "react-icons/si";
import certificate from "./certificate.jpg";
import Projects from "./resume/projects";
import PetProjects from "./resume/pet-projects";
import { SiLeetcode } from "react-icons/si";
import { GrContactInfo } from "react-icons/gr";
import WorkExperience from "./resume/work-experience";

function App() {
  const dateWork = Date.parse("2018-08-20");

  const experienceYear = Math.floor(
    (Date.now() - dateWork) / (1000 * 60 * 60 * 24 * 365)
  );
  return (
    <div className="App">
      <Container>
        <Row>
        <div className="name">TRAN VU KIET</div>
        <div className="position">FULLSTACK DEVELOPER</div>
          <Col lg={3} xs={12} style={{ paddingRight: 0 }}>
            {/* <Row className="justify-content-md-center">
              <div
                style={{ background: "white", width: 210, height: 115 }}
              ></div>
            </Row> */}
            <Row className="justify-content-md-center">
              {/* <Col md={12} xs={{ span: 6, offset: 3 }}> */}
              <Col md={12} xs={12}>
                <Row>
                  <Col sm={1} className="p0" xs={1}>
                    <MdEmail />
                  </Col>
                  <Col md={11} xs={11} className="p0">
                    <a href="mailto:tranvukietk15@gmail.com">
                      tranvukietk15@gmail.com
                    </a>
                  </Col>
                </Row>
                <Row>
                  <Col className="p0" xs={1}>
                    <FaBirthdayCake />
                  </Col>
                  <Col md={11} xs={11} className="p0">
                    Nov 1996
                  </Col>
                </Row>
                <Row>
                  <Col className="p0" xs={1}>
                    <FaPhoneAlt />
                  </Col>
                  <Col md={11} xs={11} className="p0">
                    <a href="tel:+84949845485">+84 949 845 485</a>
                  </Col>
                </Row>
                <Row>
                  <Col xs={1} className="p0">
                    <SiGooglestreetview />
                  </Col>
                  <Col md={11} xs={11} className="p0">
                    District 1, Ho Chi Minh City, VietNam
                  </Col>
                </Row>
                <Row>
                  <Col xs={1} className="p0">
                    <GrContactInfo />
                  </Col>
                  <Col md={11} xs={11} className="p0">
                    <a
                      href="https://resume.kiettranv.uk"
                      title="CV Tran Vu Kiet"
                    >
                      resume.kiettranv.uk
                    </a>
                  </Col>
                </Row>
                <Row>
                  <Col xs={1} className="p0">
                    <FaLinkedin />
                  </Col>
                  <Col md={11} xs={11} className="p0">
                    <a
                      href="https://www.linkedin.com/in/kiet-tran-555845129/"
                      title="linkedin tranvukiet"
                    >
                      linkedin.com/in/kiet-tran-555845129
                    </a>
                  </Col>
                </Row>
                <Row>
                  <Col xs={1} className="p0">
                    <SiLeetcode />
                  </Col>
                  <Col md={11} xs={11} className="p0">
                    <a
                      href="https://leetcode.com/tranvukietk15/"
                      title="Leetcode tranvukiet"
                    >
                      leetcode.com/tranvukietk15
                    </a>
                  </Col>
                </Row>
              </Col>
            </Row>
          </Col>
          <Col lg={9} xs={12} style={{ paddingRight: 0, paddingLeft: 20 }}>
            
            <div className="summary">
              Highly experienced full-stack developer with over{" "}
              {experienceYear + " "}
              years of experience building and maintaining web applications
              using NodeJS and .NET Core. Proven ability to design, develop, and
              implement high-performance, scalable, and maintainable web
              applications. Expertise in all aspects of the fullstack
              development process, including front-end development, back-end
              development, and DevOps. Strong understanding of NodeJS and .NET Core,
              ReactJS, TypeScript, and related web technologies.
              Experience with RESTful APIs, microservices architecture, and
              cloud platforms such as AWS or Azure. Excellent problem-solving
              and analytical skills. Ability to work independently and as part
              of a team. Strong communication skills and hard working.
              I am willing to learn new programming languages, looking for long term commitment.
            </div>
            {/* <div>
              Career path next 5 years: I want to become a technical specialist,
              aiming for a tech lead or solution architect position.
            </div> */}
            <div className="summary">Favorites: read books, algorithms, math, AI.</div>
            <div className="summary">Available for work immediately.</div>
            {/* <div>
              My goals: I am passionate about the crypto currency
							market and I see the huge potential of Web3. That is
							why I want to switch from Web2 programming to Web3
							programming. My goal is to become an expert in Web3
							technology in the future.
              My goals: working in global environment, where I can improve my
              english, coding skill and happily give my best.
            </div> */}
          </Col>
        </Row>
        <Row>
          <div className="title">Skills</div>
        </Row>
        {Skills()}
        <Row>
          <div className="title">Work experience</div>
        </Row>
        <WorkExperience />
        {/* <Row>
					<Col className="p0" xs={1}>1 of 3</Col>
					<Col>2 of 3</Col>
				</Row> */}
        <Row>
          <div className="title">Projects</div>
        </Row>
        <Projects />
        <Row>
          <div className="title">Pet Projects</div>
        </Row>
        <PetProjects />
        <Row>
          <div className="title">Education</div>
        </Row>
        <Row className="last">
          <Col lg={4} xs={12}>
            <Row>
              <Col xs={3}>School</Col>
              <Col xs={9} className="bold">
                MEKONG UNIVERSITY
              </Col>
            </Row>
            <Row>
              <Col xs={3}>Major</Col>
              <Col xs={9}>INFORMATION TECHNOLOGY</Col>
            </Row>
            <Row>
              <Col xs={3}>Time</Col>
              <Col xs={9}>Oct 2014- Aug 2018</Col>
            </Row>
            <Row>
              <Col xs={3}>GPA</Col>
              <Col xs={9}>3.1/4</Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </div>
  );

  function Skills() {
    const leftSkills = [
      {
        type: "Backend",
        skills: ["TypeScript NodeJS, NestJS, NextJS", "C# .NET core"],
        // certificate: certificate
      },
      {
        type: "FrontEnd",
        skills: ["ReactJS, Redux, Bootstrap, Tailwindcss"],
      },
      {
        type: "Database",
        skills: ["MSSQL, MySQL, MongoDb, Redis, Postgres, DynamoDb"],
      },
      {
        type: "Framework",
        skills: [
          "NestJS, NextJS v14, NextAuth v4",
          "Express, Fastify",
          ".NET core version: 3.1, 5, 6, 7, 8",
        ],
      },
    ];
    const rightSkills = [
      {
        type: "API",
        skills: ["REST API, GRAPHQL"],
      },
      {
        type: "Message broker",
        skills: ["Azure service bus, SNS - SQS, RabbitMQ"],
      },
      {
        type: "CI/CD",
        skills: ["Azure pipeline, Jenkins, Github Action"],
      },
      {
        type: "Hosting",
        skills: ["Cloudflare"],
      },
      {
        type: "VPS",
        skills: [
          "EC2, Azure AppService, Azure Function, Contabo, Physical server",
        ],
      },
    ];
    const generateSkills = (skills: Array<any>) =>
      skills.map((item, inx) => (
        <Row key={`${item.type}_${inx}`}>
          <Col md={4} sm={4} xs={5} className="bold">
            {item.type}
          </Col>
          <Col md={8} sm={8} xs={7} className={item.className ?? ""}>
            {item.skills.map((skill: any, i: number) => (
              <Row key={`skill_${i}`}>
                <Col md={12}>{skill}</Col>
              </Row>
            ))}
            {item.certificate && (
              <div className="review-container">
                <a
                  target="blank"
                  href="https://www.udemy.com/certificate/UC-107775f7-d760-4c79-997f-93695e16ed95/"
                  className="review-link"
                >
                  Solidity Certificate
                  <img
                    src={certificate}
                    alt="Review Image"
                    className="review-image"
                  />
                </a>
              </div>
            )}
          </Col>
        </Row>
      ));
    return (
      <Row>
        <Col md={12} lg={6}>
          {generateSkills(leftSkills)}
        </Col>
        <Col md={12} lg={6}>
          {generateSkills(rightSkills)}
        </Col>
      </Row>
    );
  }
}

export default App;
