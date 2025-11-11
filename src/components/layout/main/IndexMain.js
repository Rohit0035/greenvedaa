import CounterUp2 from "@/components/sections/counters/CounterUp2";
import AboutHome from "@/components/sections/custom/AboutHome";
import GreenVedaaManifesto from "@/components/sections/custom/GreenVedaaManifesto";
import HeroGridVideo from "@/components/sections/custom/HeroGridVideo";
import NotificationOfferModal from "@/components/sections/custom/OfferNotificationModal";
import ProductHome from "@/components/sections/custom/ProductHome";
import HotDeal3 from "@/components/sections/hot-deals/HotDeal3";
import Testimonials3 from "@/components/sections/testimonils/Testimonials3";
import Video from "@/components/sections/videos/Video";

const IndexMain = () => {
  return (
    <main>
      <HeroGridVideo/>
      <GreenVedaaManifesto/>
      <AboutHome/>
      <ProductHome/>
      <CounterUp2/>
      <HotDeal3 />
      <Video />
      <Testimonials3 />
      <NotificationOfferModal/>
    </main>
  );
};

export default IndexMain;
