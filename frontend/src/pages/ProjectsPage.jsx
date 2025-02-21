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
    const videoUrl = "https://zionvideostorage.blob.core.windows.net/video/Demo.mp4?sp=r&st=2025-01-28T13:13:39Z&se=2025-10-29T21:13:39Z&spr=https&sv=2022-11-02&sr=b&sig=%2Bkv%2BNvFqyGWyzeCKjeGgMIFU5CSHvnUqHbRHQXI%2FTHQ%3D";
    
  return (
    <div className="bg-gray-50 min-h-screen text-gray-800">
      {/* Header */}
      <Header />

      {/* Hero Section */}
      <header className="bg-blue-900 text-white py-16 text-center hero-projects">
        <h1 className="hero-text" style={{ color: "white", fontSize: "3em" }}>Zion AI - Demo Projects Showcase</h1>
        <p className="text-xl mb-8 hero-text" style={{ color: "white", fontSize: "1.5em" }}>
          Explore our cutting-edge projects and their code repositories
        </p>
        <div className="flex justify-center gap-4 hero-text " style={{ display: "flex", justifyContent: "center" }}>
          <Button target="_blank" href="https://zionai.com/demo/" style={{ color: "black", backgroundColor: "white", padding: "6px 20px", borderRadius: "32px", fontSize: "20px", margin: "12px" }}>
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
            style={{ fontSize: "2em" }}
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
              gap: "1.25em", // Adds space between cards
              justifyContent: "center", // Aligns the grid items horizontally
            }}
          >
            {[
              {
                title: "ZRedactor",
                description:
                  "Zredactor is a tool designed to automatically identify and redact sensitive information or Personally Identifiable Information (PII) from documents to ensure data privacy and compliance. It streamlines the process of safeguarding confidential data, making it ideal for businesses and organizations handling sensitive information.",
                tags: ["AI", "Security", "Redaction"],
                demoLink: "https://redactor-frontend-391657484843.us-central1.run.app/",
                codeLink: "https://github.com/ZionClouds/zredactor-v2",
              },
              {
                title: "Voice Agent",
                description:
                  "Voice Agent leverages workers to process doctor-patient conversations and agents powered by natural language processing models to generate clear and concise summaries of medical notes. This streamlined approach automates the extraction of key details, simplifying and enhancing the accuracy of medical documentation.",
                tags: ["AI", "Medical"],
                demoLink: "https://medflow-jagoh3evy7f-cafrontend.victoriouswave-a4fd2c3d.eastus2.azurecontainerapps.io",
                codeLink: "https://github.com/ZionClouds/ZionAIMedFlow-v2",
              },
              {
                title: "Think Agent",
                description:
                  "Think Agent is a cutting-edge platform that seamlessly integrates and analyzes diverse data sources, providing actionable insights using advanced AI and machine learning techniques. It empowers businesses to make data-driven decisions with unparalleled efficiency and precision.",
                tags: ["AI", "Analytics"],
                demoLink: "https://datafusionaikt-tqzc-ca.bravepebble-57996cdf.eastus.azurecontainerapps.io",
                codeLink: "https://github.com/ZionClouds/ZionDataFusionAI",
              },
              {
                title: "Knowledge Base",
                description:
                  "The ZionAI project showcases how to extract question & answer pairs out of documents using Generative AI. It provides an end-to-end demonstration of QA extraction and fine-tuning of a large language model (LLM) on Vertex AI. Along the way, the solution utilizes Document AI Character Recognition (OCR), Firestore, Vector Search, Vertex AI Studio, and Cloud Functions.",
                tags: ["AI", "LLM"],
                demoLink: "https://knowledge-base-app-848342910896.us-central1.run.app/",
                codeLink: "https://github.com/ZionClouds/ZionAI-GCP-Knowledge-Base",
              },
              {
                title: "Document Summarizer",
                description:
                  "The Zion AI Document Summarization project demonstrates an end-to-end process for summarizing a corpus of documents. The workflow includes raw document ingestion, text detection, and on-demand summarization using cutting-edge Zion AI services, such as AI Text Processing, Document AI OCR, and BigQuery for storage.",
                tags: ["AI", "LLM"],
                demoLink: "https://document-summarizer-app-848342910896.us-central1.run.app/",
                codeLink: "https://github.com/ZionClouds/ZionAI-GCP-Doc-Summarizer",
              },
              {
                title: "Knowledge Assistant",
                description:
                  "The ZionAI Knowledge Assistant demonstrates how to extract question-answer pairs and summaries from uploaded documents using Azure services. This end-to-end solution combines document processing, AI-powered search, and OpenAI models to deliver interactive answers to user queries, all accessible via a web or voice interface.",
                tags: ["Generative AI", "LLM"],
                demoLink: "https://zionai-knowledge-assistant.kindpond-7b48492d.eastus.azurecontainerapps.io/",
                codeLink: "https://github.com/ZionClouds/Zion-Knowledge-Assistant",
              },
              {
                title: "Reveal",
                description:
                  "The project, Zion Ai Reveal, is an interactive  application for dataset exploration and analysis. Users can upload CSV or Excel files, query the data via text or voice input, and receive responses powered by Azure OpenAI. The system dynamically suggests unique queries based on the dataset and provides visualizations and insights. It also features dropdown-style suggested queries for an enhanced user experience.",
                tags: ["AI", "Analytics", "Medical"],
                demoLink: "https://zionai-frontend.yellowsmoke-3c1df465.eastus.azurecontainerapps.io/",
                codeLink: "https://github.com/ZionClouds/RevealAI",
              },
              {
                title: "DevOps In A Box",
                description:
                  "DevOps in a Box is a project aimed at simplifying the creation and management of CI/CD pipelines. With a user-friendly drag-and-drop interface, users can easily configure and deploy pipelines without any prior knowledge of DevOps practices.",
                tags: ["SecOps", "DevOps", "CI/CD", "Automation"],
                demoLink: "https://devops-frontend-187517077947.us-central1.run.app/",
                codeLink: "https://github.com/ZionClouds/devops-in-a-box-backend",
              },
              {
                title: "ZSafe Docs",
                description:
                  "Validate whether given Material Safety Data Sheet Document is Compliant or not against OSHA standards.It will evaluate whole document and identifies anomalies if given document if it is Non-Compliant to OSHA Standard which will help users to rectify the anomalies and make the document Compliant to OSHA standards.This workflow uses cutting edge technologies like LLMs, Document AI OCR etc.",
                tags: ["AI", "LLM", "Compliance"],
                demoLink: "https://zsafedocs-frontend-424844719658.us-central1.run.app/",
                codeLink: "https://github.com/ZionClouds/zsafedocs-v2/tree/develop",
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
