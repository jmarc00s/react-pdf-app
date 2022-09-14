import { PDFViewer } from "components/PDFViewer";
import React, { useEffect, useState } from "react";

export const External = () => {
  const url = "http://localhost:3000/pdf";

  return (
    <section>
      <h1 className="text-lg text-center pb-4">PDF loaded via API</h1>
      <PDFViewer file={url} />
    </section>
  );
};
