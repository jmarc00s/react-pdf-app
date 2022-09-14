import React, { useState } from "react";
import { Document, Page } from "react-pdf";

interface PDFViewerProps {
  file: any;
}

export const PDFViewer = ({ file }: PDFViewerProps) => {
  const [numPages, setNumPages] = useState(0);
  const [selectedPage, setSelectedPage] = useState(1);

  const handleFileLoadSuccess = (loadSuccessData: any) => {
    const { numPages } = loadSuccessData;
    setNumPages(numPages);
    setSelectedPage(1);
  };

  const handlePreviousClick = () => {
    if (selectedPage > 1) setSelectedPage((prevPage) => prevPage - 1);
  };

  const handleNextClick = () => {
    if (selectedPage < numPages) setSelectedPage((prevPage) => prevPage + 1);
  };

  return (
    <Document file={file} onLoadSuccess={handleFileLoadSuccess}>
      <div className="flex w-full">
        {selectedPage > 1 && (
          <button
            className="hover:text-slate-300"
            onClick={handlePreviousClick}
          >
            Previous
          </button>
        )}
        <p className="text-center flex-1">
          Page {selectedPage} of {numPages}
        </p>
        {selectedPage < numPages && (
          <button className="hover:text-slate-300" onClick={handleNextClick}>
            Next
          </button>
        )}
      </div>
      <Page pageNumber={selectedPage} />
    </Document>
  );
};
