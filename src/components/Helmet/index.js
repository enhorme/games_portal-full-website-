import React from "react";
import { Helmet } from "react-helmet";
import usePageTitle from "src/hooks/usePageTitle";

export default () => {
  const title = usePageTitle();
  return (
    <Helmet>
      <title>{title}</title>
    </Helmet>
  );
};
