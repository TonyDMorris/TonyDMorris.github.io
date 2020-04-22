import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Document, Page } from "react-pdf/dist/entry.webpack";
import "react-pdf/dist/Page/AnnotationLayer.css";
import { pdfjs } from "react-pdf";
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;
export default function Cv({ file }) {
  const [pages, setPages] = useState([]);
  const [width, SetWidth] = useState(window.innerWidth / 1000);
  useEffect(() => {
    SetWidth(window.innerWidth / 1000);
  }, [window.innerWidth]);
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
        return <Page scale={width} key={pageNum} pageNumber={pageNum} />;
      })}
    </Pdf>
  );
}

const Pdf = styled(Document)``;
