import "react-pdf/dist/Page/AnnotationLayer.css";

import { Document, Page } from "react-pdf/dist/entry.webpack";
import React, { useState } from "react";

import { device } from "../../style/DeviceSizes";
import { pdfjs } from "react-pdf";
import styled from "styled-components";
import { theme } from "../../style/theme";

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;
export default function Cv({ file }) {
  const [pages, setPages] = useState([]);
  const width = window.innerWidth / 1200;

  const onDocumentLoadSuccess = ({ numPages }) => {
    const newArray = [];
    for (let i = 0; i < numPages; i++) {
      newArray.push(i + 1);
    }
    setPages(newArray);
  };
  return (
    <>
      <DownloadLink href={file} target="_blank">
        Download
      </DownloadLink>
      <Pdf file={file} onLoadSuccess={onDocumentLoadSuccess}>
        {pages.map((pageNum) => {
          return <PdfPage scale={width} key={pageNum} pageNumber={pageNum} />;
        })}
      </Pdf>
    </>
  );
}

const Pdf = styled(Document)`
  margin: 0;
  display: flex;
  flex-direction: column;

  align-self: center;
  width: 100%;
  @media ${device.mobileL} {
    margin: 5%;
  }
`;
const PdfPage = styled(Page)`
  margin-top: 5%;
  box-shadow: 0 0px 1px rgba(0, 0, 0, 0.12), 0 0px 2px rgba(0, 0, 0, 0.12),
    0 0px 4px rgba(0, 0, 0, 0.12), 0 0px 8px rgba(0, 0, 0, 0.12),
    0 0px 16px rgba(0, 0, 0, 0.12);
  align-self: center;
`;

const DownloadLink = styled.a`
  font-family: JetBrainsMono;
  text-decoration: none;
  color: ${theme.text};
  :hover {
    color: ${theme.primaryContrast};
  }
  align-self: center;
  margin-top: 10px;
`;
