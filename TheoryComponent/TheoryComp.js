import "bootstrap/dist/css/bootstrap.min.css";
import { Container } from "react-bootstrap";
const TheoryComp = () => {
  return (
    <div>
      <Container>
        <h1>About DVWA</h1>
        <p>
          DVWA stands for "Damn Vulnerable Web Application", which is a web
          application platform designed for security professionals and
          developers to practice their skills in identifying and exploiting web
          application vulnerabilities. It is a PHP/MySQL-based platform that
          contains various vulnerabilities that simulate real-world attacks,
          such as SQL injection, cross-site scripting (XSS), command injection,
          and more. DVWA is designed to be easy to set up and use, with a simple
          and intuitive interface. It provides different security levels,
          ranging from low to high, which allows users to gradually increase the
          difficulty level as they become more proficient in identifying and
          exploiting vulnerabilities. The platform also includes helpful tools,
          such as a proxy tool, to assist users in analyzing web traffic and
          identifying potential vulnerabilities. DVWA is a valuable tool for
          security professionals, developers, and students to practice and
          improve their skills in identifying and mitigating web application
          vulnerabilities. It allows users to simulate real-world attacks in a
          safe and controlled environment, which helps them to better understand
          and defend against attacks in the real world.
        </p>
        <div className="ratio ratio-16x9">
          <iframe
            src="https://www.youtube.com/embed/PaB17Cc0dUg"
            title="About DVWA video"
            allowfullscreen
          ></iframe>
        </div>
      </Container>
    </div>
  );
};

export default TheoryComp;
