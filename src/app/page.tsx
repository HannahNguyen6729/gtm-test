"use client";

import Template from "@/app/Template";
import { useEffect } from "react";
import { gtmPageView } from "@/lib/gtm";

export default function Home() {
  /*  useEffect(() => {
    const props = {
      page_title: "Home page",
    };
    gtmPageView(props);
  }, []); */

  return (
    <Template
      title={"Homepage"}
      nextPage={{ href: "/page2", label: "Page 2" }}
    />
  );
}
