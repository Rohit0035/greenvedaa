import CheckoutPrimary from "@/components/sections/checkout/CheckoutPrimary";
import CommonBreadcrumb from "@/components/sections/custom/CommonBreadcrumb";

const CheckoutMain = () => {
  return (
    <main>
      <CommonBreadcrumb title="Checkout" label="Home"/>
      <CheckoutPrimary />
    </main>
  );
};

export default CheckoutMain;
