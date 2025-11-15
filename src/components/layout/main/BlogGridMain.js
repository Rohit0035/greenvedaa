import BlogsGridPrimary from "@/components/sections/blogs/BlogsGridPrimary";
import CommonBreadcrumb from "@/components/sections/custom/CommonBreadcrumb";

const BlogGridMain = () => {
  return (
    <main>
       <CommonBreadcrumb title="Blogs"  label="Home"  />
      <BlogsGridPrimary />
    </main>
  );
};

export default BlogGridMain;
