"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { useWishlistContext } from "@/providers/WshlistContext";
import { useCartContext } from "@/providers/CartContext";
import countDataLength from "@/libs/countDataLength";

const MobileMenu = () => {
  const { wishlistProducts } = useWishlistContext();
  const { cartProducts } = useCartContext();
  const totalCartProduct = countDataLength(cartProducts);
  const totalWishlistProduct = countDataLength(wishlistProducts);
  const navItems = [
    {
      name: "Home",
      path: "/",
      accordion: null,
    },
    {
      name: "Shop",
      path: "#",
      accordion: null,
      accordionItems: [
        {
          name: "Snacks",
          path: "/",
        },
        {
          name: "Wellness",
          path: "/",
        },
        {
          name: "Powders",
          path: "/",
        },
        {
          name: "Ritual Kits",
          path: "/",
        },

      ],
    },
    {
      name: "Conscious Journal",
      path: "/",
      accordion: null,
    },
    {
      name: "About",
      path: "/",
      accordion: null,
    },
    {
      name: "Tribe",
      path: "/",
      accordion: null,
    },
    {
      name: "Contact",
      path: "/",
      accordion: null,
    },
  ];
  return (
    <div
      id="ltn__utilize-mobile-menu"
      className="ltn__utilize ltn__utilize-mobile-menu"
    >
      <div className="ltn__utilize-menu-inner ltn__scrollbar">
        <div className="ltn__utilize-menu-head">
          <div className="site-logo">
            <Link href="/">
              <Image src="/img/common/veda-logo.png" alt="Logo" width={70} height={42} />
            </Link>
          </div>
          <button className="ltn__utilize-close">×</button>
        </div>
        <div className="ltn__utilize-menu">
          <ul>
            {navItems?.map(({ name, path, accordionItems }, idx) => (
              <li key={idx}>
                <Link href={path}>{name}</Link>
                {accordionItems ? (
                  <ul className="sub-menu">
                    {accordionItems?.map(
                      ({ name: name1, path: path1, label }, idx1) => (
                        <li key={idx1}>
                          <Link href={path1}>
                            {name1}{" "}
                            {label ? (
                              <span className="menu-item-badge">{label}</span>
                            ) : (
                              ""
                            )}
                          </Link>
                        </li>
                      )
                    )}
                  </ul>
                ) : (
                  ""
                )}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default MobileMenu;
