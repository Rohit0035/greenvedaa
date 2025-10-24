import Blogs2 from "@/components/sections/blogs/Blogs2";
import AboutHome from "@/components/sections/custom/AboutHome";
import GreenVedaaManifesto from "@/components/sections/custom/GreenVedaaManifesto";
import ProductHome from "@/components/sections/custom/ProductHome";
import Features4 from "@/components/sections/features/Features4";
import Hero5 from "@/components/sections/hero-banners/Hero5";
import HotDeal3 from "@/components/sections/hot-deals/HotDeal3";
import FeaturedProducts from "@/components/sections/products/FeaturedProducts";
import Testimonials3 from "@/components/sections/testimonils/Testimonials3";
import Video from "@/components/sections/videos/Video";

const IndexMain = () => {
  return (
    <main>
      <Hero5 />
      <GreenVedaaManifesto/>
      <AboutHome/>
      {/* <Offer4 /> */}
      <ProductHome/>
      <HotDeal3 />
      <Video />
      <Testimonials3 />
    </main>
  );
};

export default IndexMain;
