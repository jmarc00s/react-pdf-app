import { PDFViewer } from "components/PDFViewer";
import React from "react";
import lorem from "assets/lorem.pdf";

export const Internal = () => {
  return <PDFViewer file={lorem} />;
};
