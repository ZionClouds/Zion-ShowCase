import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Button from "@mui/material/Button";
import ElevatedButton from "../components/ElevatedButton";
import GradientCardComponent from "../components/Card";
import ElevatedButtonWhite from "../components/ElevatedButtonWhite";
import ElevatedButtonRounded from "../components/ElevatedButtonRounded";
import OutlineButton from "../components/OutlineButton";
import FloatingActionButton from "../components/FloatingActionButtonGradient";
import FABWhite from "../components/FABWhite";
import FABBlack from "../components/FABBlack";
import FABWhiteRounded from "../components/FABWhiteRounded";
import BlackHeader from "../components/HeaderBlack";
import BlackFooter from "../components/FooterBlack";
import RocketLaunchIcon from "@mui/icons-material/RocketLaunch";
import SendIcon from "@mui/icons-material/Send";
import CodeIcon from "@mui/icons-material/Code"; // Material UI Icon for </>
import ContentCopyIcon from "@mui/icons-material/ContentCopy"; // Copy Icon
import GradientCard from "../components/GradientCard";
import TextField from "../components/TextField";
import WhiteHeader from "../components/HeaderWhite";
import GradientWhiteHeader from "../components/HeaderWhiteGradient";
import Play from "@mui/icons-material/PlayCircleFilled";
import RightArrow from "@mui/icons-material/ArrowForwardIos";
import "../App.css";

const App = () => {
  return (
    <div className="bg-gray-50 min-h-screen text-gray-800">
      {/* Header */}
      <BlackHeader />

      {/* Hero Section */}
      <header className="bg-blue-900 text-white py-16 text-center hero-projects">
        <h1 className="hero-text" style={{ color: "black", fontSize: "5em" }}>Zion AI - Demo Projects Showcase</h1>
        <p className="text-xl mb-8 hero-text" style={{ color: "black", fontSize: "2em" }}>
          Explore our cutting-edge projects and their code repositories
        </p>
        <div className="flex justify-center gap-4 hero-text " style={{ display: "flex", justifyContent: "center" }}>
          <Button style={{ color: "black", backgroundColor: "white", padding: "12px 24px", borderRadius: "32px", fontSize: "20px", margin: "12px" }}>
            {/* <Play style={{ fontSize: "24px", margin: "12px" }} /> */}
            Contact Us
          </Button>
          {/* <Button style={{ color: "white", backgroundColor: "transparent", padding: "12px 24px", borderRadius: "32px", fontSize: "20px", margin: "12px", border: "2px solid white" }}>
            <RightArrow style={{ fontSize: "24px", margin: "12px" }} />
            Explore Projects
          </Button> */}
        </div>
      </header>

      {/* About Section */}
      {/* <section className="py-16 text-center about">
        <div className="max-w-4xl mx-auto">
          <div className="inline-block bg-blue-100 text-blue-900 rounded-full p-3 mb-6"></div>
          <h2 className="text-2xl font-bold mb-4 about" style={{ fontSize: "3.5em" }}>About Zion AI</h2>
          <p className="text-2xl mb-4 text-gray-600 about"
            style={{
              fontSize: "2em",
              margin: "0 auto",  // Center the <p> horizontally
              maxWidth: "60%",
              textAlign: "center"  // Align text in the center
            }}>
            At Zion AI, we specialize in crafting innovative DevOps and AI solutions that drive efficiency and
            excellence. Our goal is to simplify complex problems with intelligent tools and processes.
          </p>
        </div>
      </section> */}


      {/* Projects Section */}
      <section className="bg-gray-100 py-16 projects">
        <div className="max-w-6xl mx-auto px-4">
          {/* Center the heading */}
          <h2
            className="text-3xl font-bold text-center mb-12 project-text"
            style={{ fontSize: "3em" }}
          >
            Our Projects
          </h2>
          <p className="text-2xl font-bold mb-4 about" style={{ fontSize: "1.5em" }}>Explore our latest innovations and solutions</p>

          {/* Grid layout for the cards */}
          <div
            className="grid grid-cols-1 lg:grid-cols-3 gap-8 grid"
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(3, 1fr)", // Ensures 3 columns
              gap: "2em", // Adds space between cards
              justifyContent: "center", // Aligns the grid items horizontally
            }}
          >
            {[
              {
                title: "ZRedactor",
                description:
                  "Zredactor is a tool designed to automatically identify and redact sensitive information or Personally Identifiable Information (PII) from documents to ensure data privacy and compliance. It streamlines the process of safeguarding confidential data, making it ideal for businesses and organizations handling sensitive information.",
                tags: ["AI", "Analytics"],
                demoLink: "https://redactor-frontend-391657484843.us-central1.run.app/",
                codeLink: "https://github.com/ZionClouds/zredactor-v2",
              },
              {
                title: "Med Agent",
                description:
                  "MedAgent leverages workers to process doctor-patient conversations and agents powered by natural language processing models to generate clear and concise summaries of medical notes. This streamlined approach automates the extraction of key details, simplifying and enhancing the accuracy of medical documentation.",
                tags: ["AI", "Medical"],
                demoLink: "https://medflow-jagoh3evy7f-cafrontend.victoriouswave-a4fd2c3d.eastus2.azurecontainerapps.io",
                codeLink: "https://github.com/ZionClouds/ZionAIMedFlow/tree/easy-auth-UI",
              },
              {
                title: "Think Agent",
                description:
                  "Think Agent is a cutting-edge platform that seamlessly integrates and analyzes diverse data sources, providing actionable insights using advanced AI and machine learning techniques. It empowers businesses to make data-driven decisions with unparalleled efficiency and precision.",
                tags: ["ML", "Cloud"],
                demoLink: "https://datafusionaikt-tqzc-ca.bravepebble-57996cdf.eastus.azurecontainerapps.io",
                codeLink: "https://github.com/ZionClouds/ZionDataFusionAI",
              },
              {
                title: "ZRedactor",
                description:
                  "Zredactor is a tool designed to automatically identify and redact sensitive information or Personally Identifiable Information (PII) from documents to ensure data privacy and compliance. It streamlines the process of safeguarding confidential data, making it ideal for businesses and organizations handling sensitive information.",
                tags: ["AI", "Analytics"],
                demoLink: "https://redactor-frontend-391657484843.us-central1.run.app/",
                codeLink: "https://github.com/ZionClouds/zredactor-v2",
              },
              {
                title: "Med Agent",
                description:
                  "MedAgent leverages workers to process doctor-patient conversations and agents powered by natural language processing models to generate clear and concise summaries of medical notes. This streamlined approach automates the extraction of key details, simplifying and enhancing the accuracy of medical documentation.",
                tags: ["AI", "Medical"],
                demoLink: "https://medflow-jagoh3evy7f-cafrontend.victoriouswave-a4fd2c3d.eastus2.azurecontainerapps.io",
                codeLink: "https://github.com/ZionClouds/ZionAIMedFlow/tree/easy-auth-UI",
              },
              {
                title: "Think Agent",
                description:
                  "Think Agent is a cutting-edge platform that seamlessly integrates and analyzes diverse data sources, providing actionable insights using advanced AI and machine learning techniques. It empowers businesses to make data-driven decisions with unparalleled efficiency and precision.",
                tags: ["ML", "Cloud"],
                demoLink: "https://datafusionaikt-tqzc-ca.bravepebble-57996cdf.eastus.azurecontainerapps.io",
                codeLink: "https://github.com/ZionClouds/ZionDataFusionAI",
              },
            ].map((project, idx) => (
              <GradientCardComponent
                key={idx}
                title={project.title}
                description={project.description}
                tags={project.tags}
                demoLink={project.demoLink}
                codeLink={project.codeLink}
              />
            ))}
          </div>
        </div>
      </section>


      {/* Highlighted Project Section */}
      {/* <section className="bg-gradient-to-r from-blue-700 to-purple-700 text-white py-16 devops">
        <div className="mx-auto flex items-center px-4 gap-6 justify-center text-center devops-inner">
          <div className="devops-text">
            <h1 className="">DevOps in a Box</h1>
            <ul className="mb-6">
              <li>Automated CI/CD Pipeline Setup</li>
              <li>Container Orchestration</li>
              <li>Infrastructure as Code</li>
              <li>Monitoring & Analytics</li>
            </ul>
            <Button style={{ color: "black", backgroundColor: "white", padding: "12px 24px", borderRadius: "32px", fontSize: "20px", margin: "12px" }}>
              <Play style={{ fontSize: "24px", margin: "12px" }} />
              Watch Demo
            </Button>
          </div>
          <div className="devops-img">
            <img
              src="https://storage.googleapis.com/uxpilot-auth.appspot.com/4e2544e8d0-b036af8335de916660f0.png"
              alt="DevOps in a Box Dashboard"
              className="rounded-lg shadow-lg"
            />
          </div>
        </div>
      </section> */}

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default App;
