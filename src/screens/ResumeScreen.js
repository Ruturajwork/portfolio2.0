import React, { useState, useEffect } from "react";
import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
import { Container } from "react-bootstrap";
import styled from "styled-components";
import Pdf from "../assets/Resume.pdf";
import Button from "../components/Button";
import TopButton from "../components/TopButton/TopButton";
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

const resumeLink =
  "https://raw.githubusercontent.com/Ruturajwork/resume/main/RuturajSalunkheResume.pdf";

const HiddenAnnotationLayer = styled.div`
  && {
    .react-pdf__Page__textContent.textLayer {
      display: none;
    }
  }
`;
const ButtonStyle1 = styled(Button)`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 10px;
`;
const StyledPage = styled(Page)`
  background-color: rgb(237, 249, 254) !important;

  //   .react-pdf__Page__canvas {
  //     width: 1309px !important;
  //     height: auto !important;
  //   }

  //   @media (max-width: 1140px) {
  //     .react-pdf__Page__canvas {
  //       width: 800px !important;
  //       height: auto !important;
  //     }
  //   }

  //   @media (max-width: 912px) {
  //     .react-pdf__Page__canvas {
  //       width: 600px !important;
  //       height: auto !important;
  //     }
  //   }
`;

const ResumeScreen = () => {
  const [width, setWidth] = useState(800);
  const [numPages, setNumPages] = useState();

  const onDocumentLoadSuccess = ({ numPages }) => {
    setNumPages(numPages);
  };

  useEffect(() => {
    setWidth(window.innerWidth);
  }, []);

  return (
    <Container>
      <HiddenAnnotationLayer>
        <ButtonStyle1 text={"Download Resume"} href={Pdf} />
        <Document file={resumeLink} onLoadSuccess={onDocumentLoadSuccess}>
          {/* <StyledPage pageNumber={1} scale={width > 786 ? 1.6 : 0.6} /> */}
          <StyledPage
            pageNumber={1}
            scale={
              width > 1200
                ? 1.6
                : width > 1027
                ? 1
                : width > 900
                ? 0.9
                : width > 512
                ? 0.6
                : width > 600
                ? 0.7
                : width > 487
                ? 0.4
                : width > 469
                ? 0.3
                : 1.6
            }
          />
        </Document>
      </HiddenAnnotationLayer>
      <ButtonStyle1 text={"Download Resume"} href={Pdf} />
      <TopButton />
    </Container>
  );
};

export default ResumeScreen;
