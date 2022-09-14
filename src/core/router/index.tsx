import React, { ReactElement } from "react";
import { Routes, Route } from "react-router-dom";
import { External } from "pages/External";
import { Internal } from "pages/Internal";

export const AppRouter = (): ReactElement => {
  return (
    <Routes>
      <Route index element={<Internal />} />
      <Route path="internal" element={<Internal />} />
      <Route path="external" element={<External />} />
    </Routes>
  );
};
