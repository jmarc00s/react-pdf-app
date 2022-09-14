import React, { ReactElement } from "react";

interface PageHeaderProps {
  children: string;
}

export const PageHeader = ({ children }: PageHeaderProps): ReactElement => {
  return <h1 className="text-lg text-center pb-4">{children}</h1>;
};
