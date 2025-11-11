import CartPrimary from "@/components/sections/cart/CartPrimary";
import CommonBreadcrumb from "@/components/sections/custom/CommonBreadcrumb";
import HeroPrimary from "@/components/sections/hero-banners/HeroPrimary";
import React from "react";

const CartMain = () => {
  return (
    <main>
      <CommonBreadcrumb title="Cart" label="Home"/>
      <CartPrimary />
    </main>
  );
};

export default CartMain;
