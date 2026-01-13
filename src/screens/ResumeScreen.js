// import React, { useState, useEffect } from "react";
// import { Document, Page, pdfjs } from "react-pdf";
// // import "react-pdf/dist/esm/Page/AnnotationLayer.css";
// import { Container } from "react-bootstrap";
// import styled from "styled-components";
// import Pdf from "../assets/updatedRuturajResume.pdf";
// import Button from "../components/Button";
// import TopButton from "../components/TopButton/TopButton";

// pdfjs.GlobalWorkerOptions.workerSrc = new URL(
//   "pdfjs-dist/build/pdf.worker.min.mjs",
//   import.meta.url
// ).toString();

// const resumeLink =
//   "https://raw.githubusercontent.com/Ruturajwork/resume/main/updatedRuturajResume.pdf";

// const HiddenAnnotationLayer = styled.div`
//   && {
//     .react-pdf__Page__textContent.textLayer {
//       display: none;
//     }
//   }
// `;
// const ButtonStyle1 = styled(Button)`
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   margin-bottom: 10px;
// `;
// const StyledPage = styled(Page)`
//   background-color: rgb(237, 249, 254) !important;

//   //   .react-pdf__Page__canvas {
//   //     width: 1309px !important;
//   //     height: auto !important;
//   //   }

//   //   @media (max-width: 1140px) {
//   //     .react-pdf__Page__canvas {
//   //       width: 800px !important;
//   //       height: auto !important;
//   //     }
//   //   }

//   //   @media (max-width: 912px) {
//   //     .react-pdf__Page__canvas {
//   //       width: 600px !important;
//   //       height: auto !important;
//   //     }
//   //   }
// `;

// const ResumeScreen = () => {
//   const [width, setWidth] = useState(800);
//   const [numPages, setNumPages] = useState();

//   const onDocumentLoadSuccess = ({ numPages }) => {
//     setNumPages(numPages);
//   };

//   useEffect(() => {
//     setWidth(window.innerWidth);
//   }, []);

//   let documentComponent = null;
//   let buttonWidth = null;
//   if (width > 469) {
//     buttonWidth = <ButtonStyle1 text={"Download Resume"} href={Pdf} />;
//   }
//   if (width > 469) {
//     documentComponent = (
//       <Document file={resumeLink} onLoadSuccess={onDocumentLoadSuccess}>
//         <StyledPage
//           pageNumber={1}
//           scale={
//             width > 1200
//               ? 1.8
//               : width > 1027
//               ? 1.9
//               : width > 900
//               ? 0.9
//               : width > 512
//               ? 0.6
//               : width > 600
//               ? 0.7
//               : width > 487
//               ? 0.6
//               : width > 469
//               ? 0.2
//               : 1.6
//           }
//         />
//       </Document>
//     );
//   }

//   return (
//     <Container>
//       <HiddenAnnotationLayer>
//         {buttonWidth}
//         {documentComponent}
//       </HiddenAnnotationLayer>
//       <ButtonStyle1 text={"Download Resume"} href={Pdf} />
//       <TopButton />
//     </Container>
//   );
// };

// export default ResumeScreen;
import React, { useState, useEffect } from "react";
import { Document, Page, pdfjs } from "react-pdf";
import { Container } from "react-bootstrap";
import styled from "styled-components";
import Pdf from "../assets/updatedRuturajResume.pdf";
import Button from "../components/Button";
import TopButton from "../components/TopButton/TopButton";

// PDF.js worker setup for CRA + ES modules (React-PDF v10+)
pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  "pdfjs-dist/build/pdf.worker.min.mjs",
  import.meta.url
).toString();

// Styled-components
const HiddenAnnotationLayer = styled.div`
  && {
    /* Hide text content layer */
    .react-pdf__Page__textContent.textLayer {
      display: none;
    }

    /* Hide annotation layer (links, highlights, etc) */
    .react-pdf__Page__annotations.annotationLayer {
      display: none !important;
      height: 0 !important;
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
`;

// Responsive scale function
const getScale = (width) => {
  if (width > 1200) return 1.8;
  if (width > 1027) return 1.9;
  if (width > 900) return 0.9;
  if (width > 600) return 0.7;
  if (width > 469) return 0.6;
  return 0.5;
};

const resumeLink =
  "https://raw.githubusercontent.com/Ruturajwork/resume/main/updatedRuturajResume.pdf";

const ResumeScreen = () => {
  const [width, setWidth] = useState(window.innerWidth);
  const [numPages, setNumPages] = useState(null);

  const onDocumentLoadSuccess = ({ numPages }) => {
    setNumPages(numPages);
  };

  // Update width on window resize
  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <Container>
      <HiddenAnnotationLayer>
        {width > 469 && <ButtonStyle1 text="Download Resume" href={Pdf} />}
        <Document file={resumeLink} onLoadSuccess={onDocumentLoadSuccess}>
          <StyledPage pageNumber={1} scale={getScale(width)} />
        </Document>
      </HiddenAnnotationLayer>
      {/* Always show download button at bottom */}
      <ButtonStyle1 text="Download Resume" href={Pdf} />
      <TopButton />
    </Container>
  );
};

export default ResumeScreen;
