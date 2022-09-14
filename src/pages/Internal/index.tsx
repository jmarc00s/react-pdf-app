import { PDFViewer } from "components/PDFViewer";
import React from "react";
import lorem from "assets/lorem.pdf";

export const Internal = () => {
  return (
    <section>
      <h1 className="text-lg text-center pb-4">PDF loaded by assets</h1>
      <PDFViewer file={lorem} />
    </section>
  );
};
