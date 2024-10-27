import React, { ReactNode } from "react";

const noHeaderFooterLayout = ({ children }: { children: ReactNode }) => {
  return <div>{children}</div>;
};

export default noHeaderFooterLayout;
