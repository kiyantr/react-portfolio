import { Fragment } from 'react';
import { Row, Col } from 'react-bootstrap';

function Projects() {
  const data = [
    {
      time: 'Jun 2023 - Present',
      name: 'CTRWow - CXWow',
      company: 'DFOGPC',
      shutdown: 'Scale down',
      teamSize: 10,
      position: 'Senior backend',
      detail: `DFOGPC is a Canadian e-commerce company. I worked on two main projects: CTRWow and CxWow.

CTRWow: A drag-and-drop website builder that automates static website publishing using FTPS and S3 hosting.
CxWow: A customer service management platform that integrates AI (ChatGPT) for automatic request assignment, offering a customized solution similar to Atlassian for specific customer needs.`,
      technologies: [
        `CXWow: Microservices, Azure function nodejs: Express and Fastify, NextAuth v4 Login, MongoDb, Redis cache, Azure service bus, AI Model ChatGPT model 4, WebSocket, Mailgun, API Gateway.`,
        `CTRWow: Microservices, Azure function v4 .Net 6 and .Net 8 in-process model, MongoDb, Redis cache, Azure service bus, Azure Event, Azure Blob, API Gateway.`,
      ],
      contributed: [
        `Upgrade azure function v3 to v4.`,
        `Build OAuth by NextJS v14 and NextAuth v4`,
        `Nodejs Express, Fastify.`,
        `Upgrade .Net 3.1 and .Net 6 to .Net 8.`,
        `Migrate azure function in-process model to isolated model.`,
        `Create web socket push notification, send emails and chat real-time.`,
        `Create web socket push notification and chat real-time.`,
        `Collaborate with QC team and other teams.`,
        `Optimize cost equals scan search blob is unused to delete.`,
        `Improve performance with MongoAtlas, search index and some techniques to improve performance with DB.`,
        `Raise ideas improve product, performance and optimize cost.`,
        `Discuss with Canadian Project Manager to confirm requirements.`,
      ],
      first: true,
      className: 'border-bottom',
    },
    // {
    //   time: "Jun 2023 - Feb 2024",
    //   name: "WellBarrier",
    //   company: "Restaff",
    //   teamSize: 35,
    //   position: "Senior fullstack",
    //   detail: `WELLBARRIER is a web-based project
    // 	for drawing wells and barriers. It allows
    // 	users to drag and drop component to create a
    // 	well and move the elements on the well to
    // 	match reality. WELLBARRIER, drawings had to be done
    // 	by hand or scattered across multiple tools.
    // 	Engineers had to spend a lot of time drawing
    // 	and were often inaccurate across versions.
    // 	WELLBARRIER helps engineers save
    // 	time, improve the accuracy of drawings, and
    // 	ensure safety with barrier, monitoring, and
    // 	qualification systems. Most oil wells in the
    // 	world currently use WELLBARRIER.`,
    //   technologies: [
    //     `.Net 6, Multi Tenant.`,
    //     "Typescript, Nodejs, Javascript, ReactJS, Jest, Redux, d3js.",
    //     "MSSQL, Store procedure, Redis.",
    //   ],
    //   contributed: [
    //     `Init project Unit Test with xUnit.`,
    //     `Import user with excel.`,
    //     `Use d3js draw component and barrier.`,
    //     `Demo feature with foreign clients (Norway, India, China).`,
    //     `Refactor appsettings.`,
    //     `Fix bugs.`,
    //     `Review code prevent bug early.`,
    //   ],
    //   first: true,
    //   className: "border-bottom",
    // },
    {
      time: 'Apr 2022 - Apr 2023',
      name: 'Wallet',
      company: 'Extracy',
      teamSize: 6,
      position: 'Leader backend',
      shutdown: 'The company has ceased operations',
      detail: `Build Duende Identity to provide social login and OAuth2
			login with hybrid flow. Build microservices with .NET Core and
			NestJS. Import folders from Trust Wallet and filter and
			insert data. Use Web3 to read data from RPC and push
			notifications using Firebase. Build and host RabbitMQ to sync
			user data. Research and learn about smart contracts.
			Implement CI/CD using Jenkins, Docker, and Nginx. Use
			CentOS and VPS Contabo to host the project. Train new team
			members and assign tasks to them.`,
      technologies: [
        `.Net 7, Duende Identity, OAuth2`,
        `NodeJS (Nestjs), PDF lib, passport.`,
        `SQL, MongoDb, Firebase
			ReactJS, Web3, RabbitMQ.`,
        `Docker, nginx, jenkins.`,
      ],
      contributed: [
        `Init project and apply clean architecture.`,
        `Get data from CoinGecko, TrustWallet and store to data warehouse.`,
        `Implement social login with Duende Identity OAuth2 standard.`,
        `Social login facebook, twitter with web3.`,
        `Webhook discord, telegram.`,
        `Versioning API`,
        `Implement 2-Factor Authentication.`,
        `Setup and configs Nexus Sonatype store docker hub, configs Jenkins for CI/CD.`,
        `Deploy projects with docker.`,
        `Config Azure pipe-line and Azure webhook with Jenkins.`,
        `Config Azure permission.`,
        `Proxy with nginx.`,
        `Map DNS domain, config networks.`,
        `Mentor member.`,
      ],
      className: 'project border-bottom',
    },
    // {
    // 	time: "Apr 2022 - Feb 2023",
    // 	name: "Massion",
    // 	company: "Extracy",
    // 	teamSize: 6,
    // 	position: "Leader backend",
    // 	detail: `Build project structure using NestJS and MongoDB, design
    // 	the database, discuss features with PM, assign tasks to
    // 	team members, design authentication and authorization with
    // 	social login options including Apple, Google, Facebook, and
    // 	Twitter using OAuth2 PKCE flow, handle PDF certificate
    // 	generation, design APIs for the mobile team, train new team
    // 	members, set up keys and templates Mailgun for email, and
    // 	create a cron job worker to send emails every day at 1
    // 	AM,
    // 	Build CI/CD with jenkins, docker and nginx, use Cloudflare to
    // 	map DNS domain. manage VPS centos for dev env, and
    // 	ubuntu for prod env.`,
    // 	technologies: [`NodeJS (Nestjs), MongoDb, ReactJS, PDF lib, passport. `,`Mailgun,
    // 	Docker, nginx, jenkins`],
    // 	contributed: [
    // 		`Init project and apply clean architecture.`,
    // 		`Export PDF and embedded font, create PDF certificate.`,
    // 		`Versioning API`,
    // 		`Install and configs Nexus Sonatype store docker hub.`,
    // 		`Deploy projects with docker.`,
    // 		`Install and configs Jenkins for CI/CD.`,
    // 		`Config Azure pipe-line and Azure webhook with Jenkins.`,
    // 		`Proxy with nginx.`,
    // 		`Map DNS domain, config networks.`,
    // 		`Deploy single page to S3.`,
    // 		`Config MongoDb.`,
    // 		`Mentor member.`,
    // 	],
    // 	className: "project border-bottom",
    // },
    {
      time: 'Feb 2022 - Apr 2022',
      name: 'OBL Hub',
      company: 'Extracy',
      teamSize: 12,
      position: 'Leader backend',
      detail: `The main focus of backend coding is building the structure,
			coding APIs, and communicating with PM and B
			A to design
			the database. Setup S3 bucket. Implementing API
			authentication and authorization, custom JWT to adapt to
			the business, managing the team, and assigning tasks to
			team members, build core ReactJS, create docker and
			deploy web to VPS centos 7, setup nginx and jenkins.`,
      technologies: [
        `Typescript, .Net 6, SQL, ReactJS, S3, Onion Architeture, Docker, nginx, jenkins, XUnit.`,
      ],
      contributed: [
        `Init project and apply clean architecture.`,
        `Implement authorization and authentication grant type hydrid.`,
        `Install and configs Nexus Sonatype store docker hub.`,
        `Install and configs Jenkins for CI/CD.`,
        `Config Azure pipe-line and Azure webhook with Jenkins.`,
        `Proxy with nginx.`,
        `Map DNS domain, config networks.`,
        `Deploy single page to S3.`,
        `Discuss with BA to create tasks and assign to member.`,
        `Mentor member.`,
      ],
      className: 'project border-bottom',
    },
    {
      time: 'Dec 2021 - Feb 2022',
      name: 'FVC',
      company: 'Extracy (OneBlock Labs)',
      teamSize: 4,
      position: 'Backend developer',
      detail: `FVC is a web application for callers and investors. Callers can post their projects, and investors can review and provide capital. FVC's task is to manage the list of potential projects and schedule meetings for the two sides to meet.`,
      technologies: [
        `EF core 2.1, SQL, Store procedure, AWS S3, EC2, OneSignal.`,
      ],
      contributed: [
        `Maintain old project.`,
        `Implement feature worker.`,
        `Implement feature push notification to mobile use OneSignal.`,
        `Fix bug store procedure.`,
      ],
      className: 'project border-bottom',
    },
    // {
    // 	time: "Jul 2021 - Dec 2021",
    // 	name: "Transwap",
    // 	company: "Transwap",
    // 	teamSize: 50,
    // 	position: "Software engineer",
    // 	detail: `Transwap is a cross-border payment platform for businesses and everyday people who seek to make payments overseas while reducingFX costs and complexity. We offer the most competitive rates throughour proprietary online transaction portal and a wide network of FXPartners to enable our users to fulfil global payments at the lowest costefficiently.In addition to Swap’s online transaction portal, cross-borderpayments provided by Swap are also available on the NetworkedTrade Platform (“NTP”) Value Added Service (“VAS”) provider listing.As an NTP VAS provider, Swap is part of the vibrant tradeecosystem that is the NTP – a Singapore Government initiative. Weoffer a cost-effective and convenient solution to importers and exporters seeking to make or collect payments internationally.`,
    // 	technologies: [`Net Core 5, Microservice, SQL, Azure Devops, Azure Service bus, Mailgun, K8s, DDD, TDD, Onion Architecture, SignalR, XUnit, Moq, Proxy, Automapper, design pattern: CQRS, repository, proxy.`],
    // 	contributed: [
    // 		`Write Unit Test.`,
    // 		`Implement project notification.`,
    // 		`Implement SignalR.`,
    // 		`Implement feature related to transaction and touch core project.`,
    // 		`Fix bugs production with trade log in Application Insights.`,
    // 		`Discuss with BA Singaporean to get requirement.`,
    // 	],
    // 	className: "project border-bottom",
    // },
    {
      time: 'Dec 2019 - Jul 2021',
      name: 'US_Kaplan',
      company: 'Nashtech',
      teamSize: 28,
      position: 'Software engineer',
      detail: `Implement main feature is a Calculation Service to calculate
			the point for the Leaner, write unit tests for the code, call get
			data from GraphQL service, ensure that data works
			correctly, implement the design system from the team
			leader, improve UI performance, and report tasks to the
			team leader and PM.`,
      technologies: [
        `EF core 3.1, Table per hierarchy, SSO, Identity Server 4, OAuth2, GraphQL, microservice.`,
        `Typescript, ReactJS.`,
        'AWS services, S3, SNS, SQS.',
        'MySQL, DynamoDb, Redis cache, Memcached.',
        'design pattern: Singleton, Factory, CQRS, Builder, Mediator',
      ],
      contributed: [
        `Write Unit Test with NUnit.`,
        `Implement task.`,
        `Implement new API with GraphQL.`,
        `Involve build table table per hierarchy and calculate point.`,
        `Fix bugs.`,
      ],
      className: 'project border-bottom',
    },
    {
      time: 'Aug 2018 - Dec 2019',
      name: 'Milano-Coffee - VietCredit - RVezy',
      company: 'Futurify',
      teamSize: 8,
      position: 'Fullstack developer',
      detail: `Milano-Coffee is Project manage warehouse and sales, order drinks. VietCredit is project create a form for borrowers to register for loans. RVezy is an RV rental platform where you can book unique RV experiences with local motorhome and trailer owners. You can drive, tow, or get your RV delivered and set up practically anywhere across the U.S. and Canada.`,
      technologies: [
        `EF core 2.0, EF core 2.1, SQL, microservice, API gateway.`,
        'Angular js, Angular 7, SOAP, SQL.',
        `RabbitMQ, ElasticSearch, Fluent API.`,
      ],
      contributed: [
        `Implement API.`,
        `Implement Role and Permission.`,
        `Implement Paging.`,
        `Fix bugs.`,
        `Create form with angularjs allow user register for loans.`,
        `Validate form.`,
      ],
      //   className: "project border-bottom",
    },
    // {
    //   time: "Apr 2019 - May 2019",
    //   name: "VietCredit",
    //   company: "Futurify",
    //   teamSize: 4,
    //   position: "Fullstack developer",
    //   detail: `Create a form for borrowers to register for loans.`,
    //   technologies: [`DotNet core 2.0, Angular js, SOAP, SQL.`],
    //   contributed: [
    //     `Create form with angularjs allow user register for loans.`,
    //     `Validate form.`,
    //   ],
    //   className: "project border-bottom",
    // },
    // {
    //   time: "Aug 2018 - Apr 2019",
    //   name: "RVezy",
    //   company: "Futurify",
    //   teamSize: 4,
    //   position: "Fullstack developer",
    //   detail: `RVezy is an RV rental platform where you can book unique RV experiences with local motorhome and trailer owners. You can drive, tow, or get your RV delivered and set up practically anywhere across the U.S. and Canada.`,
    //   technologies: [
    //     `EF core 2.1, Angular js, SQL, RabbitMQ, ElasticSearch, Fluent API.`,
    //   ],
    //   contributed: [`Create API.`, `Maintain.`, `Fix bugs.`],
    //   className: "project",
    // },
  ];

  return (
    <Fragment>
      {data.map((d, index) => (
        <Row key={`project_${d.name}_${index}`}>
          <Col lg={3} xs={12} className={d['first'] ? '' : 'project-intro'}>
            <Row>
              {/* <Col md={5}>Time</Col> */}
              <Col xs={12} className='bold td-under'>
                {d.time}
              </Col>
            </Row>

            {d.shutdown && (
              <Row>
                <Col xs={12} className='pr-0'>
                  <b>({d.shutdown})</b>
                </Col>
              </Row>
            )}

            <Row>
              <Col xs={4} className='pr-0'>
                Company
              </Col>
              <Col xs={8} className='bold'>
                {d.company}
              </Col>
            </Row>

            <Row>
              <Col xs={4} className='pr-0'>
                Project
              </Col>
              <Col xs={8} className='bold'>
                {d.name}
              </Col>
            </Row>

            <Row>
              <Col xs={4} className='pr-0'>
                Position
              </Col>
              <Col xs={8} className='bold'>
                {d.position}
              </Col>
            </Row>
            <Row>
              <Col xs={4} className='pr-0'>
                Members
              </Col>
              <Col xs={8}>{d.teamSize}</Col>
            </Row>
          </Col>
          <Col lg={9} xs={12} className={d.className}>
            <Row>
              <div className='bold'>DESCRIPTION</div>
              <div className='summary'>{d.detail}</div>
              <div className='details bold'>TECHNOLOGIES</div>
              <div>
                <ul>
                  {d.technologies.map((technology, index) => (
                    <li key={`tech_${d.name}_${index}`}>{technology}</li>
                  ))}
                </ul>
              </div>
              <div className='details bold'>CONTRIBUTED</div>
              <div>
                <ul>
                  {d.contributed.map((contribute, index) => (
                    <li key={`contribute_${d.name}_${index}`}>{contribute}</li>
                  ))}
                </ul>
              </div>
            </Row>
          </Col>
        </Row>
      ))}
    </Fragment>
  );
}

export default Projects;
