"use client";
import makePath from "@/libs/makePath";
import { useCommonContext } from "@/providers/CommonContext";
import Link from "next/link";
import React from "react";

const ProductQuantities = () => {
  const { currentPath, size: currentQuantity } = useCommonContext();

  // ✅ Updated quantity options
  const quantities = [
    "250g",
    "500g",
    "750g",
    "1kg",
    "2kg",
    "5kg",
    "10kg",
    "250ml",
    "500ml",
    "750ml",
    "1L",
    "2L",
    "5L",
  ];

  return (
    <div className="widget ltn__tagcloud-widget ltn__size-widget">
      <h4 className="ltn__widget-title ltn__widget-title-border">
        Product Quantity
      </h4>
      <ul>
        {quantities?.map((quantity, idx) => (
          <li key={idx}>
            <Link
              href={`${currentPath ? currentPath : "/shop"}?size=${makePath(
                quantity
              )}`}
              className={currentQuantity === makePath(quantity) ? "active" : ""}
            >
              {quantity}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductQuantities;
