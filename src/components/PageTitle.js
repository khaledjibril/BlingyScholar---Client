// src/components/PageTitle.js
import React from "react";
import { Helmet } from "react-helmet";

const PageTitle = ({ title }) => (
  <Helmet>
    <title>{title}</title>
  </Helmet>
);

export default PageTitle;