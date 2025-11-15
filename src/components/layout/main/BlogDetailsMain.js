import BlogDetailsPrimary from "@/components/sections/blog-details/BlogDetailsPrimary";
import CommonBreadcrumb from "@/components/sections/custom/CommonBreadcrumb";
import React from "react";

const BlogDetailsMain = () => {
  return (
    <main>
      <CommonBreadcrumb title="Blog Detail" label="Blog"/>
      <BlogDetailsPrimary />
    </main>
  );
};

export default BlogDetailsMain;
