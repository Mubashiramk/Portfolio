import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import emotion from "../../Assets/Projects/emotion.png";
import editor from "../../Assets/Projects/codeEditor.png";
import covid from "../../Assets/covid.png";
import suicide from "../../Assets/Projects/suicide.png";
import bitsOfCode from "../../Assets/Projects/blog.png";
import myTeamDashboard from "../../Assets/dashboard.png";
import eventRegistration from "../../Assets/eventRegistration.png";
import tracker from "../../Assets/tracker.png";
import attendance from "../../Assets/attendance.png";
import colorChanger from "../../Assets/colorChanger.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={myTeamDashboard}
              isBlog={false}
              title="My Team Dashboard"
              description=" Dashboard created using React to keep track of Team member’s activities, and schedule tasks. It also allow the team member authentication and admin authentication. Included the calender, activity analysis tab and employee report generator."
              ghLink="https://github.com/Mubashiramk/MyTeamDashboard"
              demoLink="https://myteamdashboard-bb0e6.web.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={eventRegistration}
              isBlog={false}
              title="Event Registration App"
              description="Event registration app is a MERN stack project. Admin can add the events list, view the registered user, and edit the registered user data. User can login and add register. Backend is created using NodeJS, Express, and MongoDB."
              ghLink="https://github.com/Mubashiramk/Event-Registration-User"
              demoLink="https://github.com/Mubashiramk/Event-Registration-User-Backend"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={covid}
              isBlog={false}
              title="Covid Tracker"
              description="Covid dashboard created using React to keep track of country-wise Covid Active, Recovered, and Deceased
              status. Created a backend server to ingest the data from API. Graphical analysis of country wise covid-19 cases."
              ghLink="https://github.com/Mubashiramk/COVID19-Dashboard"
              demoLink="https://covid19dashboard-339da.web.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={tracker}
              isBlog={false}
              title="Expense Tracker"
              description="Expense tracker app to keep track of daily expenses and analyze the monthly and yearly expenses. Developed using React and Tailwind CSS."
              ghLink="https://github.com/Mubashiramk/Expense-Tracker"
              demoLink="https://myreact-646e7.web.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={attendance}
              isBlog={false}
              title="FingerPrint Attendance System"
              description="Developed and Deployed Fingerprint Attendance System for college. Fingerprint-based authentication and authorization system using Python (Django). Uploading the attendance in college official site RSMS."
              ghLink="https://github.com/Mubashiramk/AttendanceFingerprint"
              // demoLink="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley" <--------Please include a demo link here
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={colorChanger}
              isBlog={false}
              title="Color Changer"
              description="Developed color changing pattern using HTML, CSS, JAVASCRIPT."
              ghLink="https://github.com/Mubashiramk/colorchanger"
              demoLink="https://logocolorchange.web.app/"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
