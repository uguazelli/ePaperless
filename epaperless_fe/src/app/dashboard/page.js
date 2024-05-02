"use client";

import Layout from "@/app/components/layout";
import Content from "@/app/dashboard/content";
import useStore from "@/app/store";
import { useRouter } from "next/router";

const Dashboard = () => {
  const { setCurrentPage } = useStore();
  const router = useRouter();
  console.log(`Current page is: ${router.pathname}`);

  if (typeof window !== "undefined") {
    const pathParts = window.location.pathname.split("/");
    currentPage = pathParts[pathParts.length - 1];
    setCurrentPage("documents");
  }

  return <Layout workspace={<Content />} />;
};

export default Dashboard;
