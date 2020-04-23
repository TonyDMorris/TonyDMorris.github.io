import React, { useState } from "react";
import styled from "styled-components";
import { Document, Page } from "react-pdf/dist/entry.webpack";
import "react-pdf/dist/Page/AnnotationLayer.css";
import { pdfjs } from "react-pdf";
import { device } from "../../style/DeviceSizes";
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
    <Pdf file={file} onLoadSuccess={onDocumentLoadSuccess}>
      {pages.map((pageNum) => {
        return <PdfPage scale={width} key={pageNum} pageNumber={pageNum} />;
      })}
    </Pdf>
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

  align-self: center;
`;
