"use client";

import Template from "@/app/Template";
import { useEffect } from "react";
import { gtmPageView } from "@/lib/gtm";

type StaticParams = { slug: Array<string> };
export type Params = { params: StaticParams };

export default function Page({ params }: Params) {
  const slug = params.slug as unknown as string;

  useEffect(() => {
    if (slug) {
      const props = {
        page_title: slug,
      };
      gtmPageView(props);
    }
  }, [slug]);

  return <Template title={slug} nextPage={{ href: "/", label: "Home" }} />;
}
