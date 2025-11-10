import ShopMain from "@/components/layout/main/ShopMain";
import CommonBreadcrumb from "@/components/sections/custom/CommonBreadcrumb";
import PageWrapper from "@/components/shared/wrappers/PageWrapper";

const Shop = () => {
  return (
    <PageWrapper
      isNotHeaderTop={true}
      isHeaderRight={true}
      isTextWhite={true}
      isNavbarAppointmentBtn={true}
    >
       <CommonBreadcrumb title="Products" label="Shop"/>
      <ShopMain isSidebar="primary" />
    </PageWrapper>
  );
};

export default Shop;
