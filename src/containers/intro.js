import React from "react";
import Intro from "../components/intro";
import backvideo from "./../assets/finalcut.mp4";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import GitHubIcon from "@material-ui/icons/GitHub";
const IntroContainer = () => {
  return (
    <Intro.Container>
      <video
        autoPlay
        loop
        muted
        style={{
          position: "absolute",
          width: "100%",
          height: "100vh",
          zIndex: "-1",
          objectFit: "cover",
          top: "50%",
          left: "50%",
          transform: "translate(-50%,-50%)",

          // transform: [
          //   {
          //     rotate: "18",
          //   },
          // ],
        }}
      >
        <source src={backvideo} type="video/mp4" />
      </video>
      <Intro.NavContainer>
        <ul>
          <li>Home</li>
          <li>Projects</li>
          <li>Skills</li>
        </ul>
        <ul>
          <li>
            <LinkedInIcon style={{ fontSize: "2.4rem" }}></LinkedInIcon>
          </li>
          <li>
            <GitHubIcon style={{ fontSize: "2rem" }}></GitHubIcon>
          </li>
        </ul>
      </Intro.NavContainer>

      <Intro.TextContainer>
        <h1>Hi.</h1>
        <h1>I am Sahba</h1>
        <h2>Frontend Developer</h2>
      </Intro.TextContainer>
    </Intro.Container>
  );
};

export default IntroContainer;
