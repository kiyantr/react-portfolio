import { Fragment } from "react";
import { Row, Col } from "react-bootstrap";

function PetProjects() {
  const data = [
    {
      time: "Sep 2024- Oct 2024",
      name: "Next CRM",
      detail: `I developed multi tenants SSO app, manage multi merchant, switch login multiple users.`,
      technologies: `NextJS v14, NextAuth v4, ReactJS, Tailwind css, Social Login (Google, Facebook, Telegram), MongoDb, Redis cache, Memory cache, Github Action deploy to Azure WebApp.`,
      className: "project border-bottom",
      // link: "https://sumo-america-trading.com/",
      // shortLink: "developing ...",
      first: true,
    },
    {
      time: "Jul 2024- Sep 2024",
      name: "Trakle",
      detail: `Background job call data Binance to Analyze and calculate EMA, RSI, auto trade, Bot auto send announcement to telegram channel, chat BOT with OpenAI, create promt auto renew message to telegram channel, use apexchart draw chart.`,
      technologies: `NestJS, Task schedule, OpenAI, Chat GPT model-4o, TelegramBot, MongoDb, docker.`,
      className: "project border-bottom",
	  //   link: "https://sumo-america-trading.com/",
      // shortLink: "developing ...",
      // first: true,
    },
    {
      time: "Feb 2024- Mar 2024",
      name: "Telegram mini app",
      detail: `Build telegram mini app allow user connect TON wallet and send token amount.`,
      technologies: `ReactJS, Jetton, Vite, TelegramBot.`,
      className: "project border-bottom",
	    link: "https://t.me/degon_ido_482765_bot",
      shortLink: "https://t.me/degon_ido_482765_bot",
      // first: true,
    },
    {
      time: "Dec 2022- Feb 2023",
      name: "SumoTour",
      detail: `Project to book tours in Japan, manage users, and send emails when tours become available.
			I used Nestjs build Backend and ReactJS build Front-end, use mongoDb license free, use mailgun to send email
			to user, deploy to contabo VPS with docker and use nginx to reverse proxy, use Cloudflare to map DNS and
			https vertificate.`,
      technologies: `NestJS, MongoDb, ReactJS.`,
      link: "https://sumo-america-trading.com/",
      shortLink: "https://sumo-america-trading.com",
    },
  ];

  return (
    <Fragment>
      {data.map((d, index) => (
        <Row key={`project_${d.name}_${index}`}>
          <Col lg={3} xs={12}>
            {/* <Row>
              <Col xs={12} className="bold">
                {d.time}
              </Col>
            </Row> */}
            <Row>
              {/* <Col xs={4}>Name</Col> */}
              <Col className="bold">{d.time}</Col>
            </Row>
            <Row>
              <Col xs={4}>Project</Col>
              <Col className="bold">{d.name}</Col>
            </Row>
          </Col>
          <Col className={d.className}>
            <Row>
              {d.link ? (
                <>
                  <div className="bold">
                    Link: <a href={d.link}>{d.shortLink}</a>
                  </div>
                </>
              ) : (
                <></>
              )}
              <div className="bold">DESCRIPTION</div>
              <div>{d.detail}</div>
              <div className="details bold">TECHNOLOGIES</div>
              <div>{d.technologies}</div>
            </Row>
          </Col>
        </Row>
      ))}
    </Fragment>
  );
}

export default PetProjects;
