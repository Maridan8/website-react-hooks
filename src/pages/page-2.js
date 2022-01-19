import React from "react";
import Layout from "../components/layout/layout";
import SEO from "../components/layout/seo";
import UpdatesSection from "../components/sections/UpdatesSection";

function SecondPage() {
  return (
    <Layout>
      <SEO title="Page two" />
      <UpdatesSection />
    </Layout>
  );
}

export default SecondPage;
