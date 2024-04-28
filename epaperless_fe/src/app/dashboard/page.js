"use client";

import Layout from "@/app/components/layout";
import Content from "@/app/dashboard/content";

const Dashboard = () => {
  return <Layout workspace={<Content />} />;
};

export default Dashboard;
