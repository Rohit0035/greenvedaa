"use client";
import countDiscount from "@/libs/countDiscount";
import modifyAmount from "@/libs/modifyAmount";
import { useCartContext } from "@/providers/CartContext";
import { useProductContext } from "@/providers/ProductContext";
import { useWishlistContext } from "@/providers/WshlistContext";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const ProductCardPrimary = ({ product, isShowDisc }) => {
  const { title, price, disc, image, id, status, color, quantity } = product
    ? product
    : {};
  const { setCurrentProduct } = useProductContext();
  const { netPrice } = countDiscount(price, disc);
  const netPriceModified = modifyAmount(netPrice);
  const priceModified = modifyAmount(price);
  const { addProductToCart } = useCartContext();
  const { addProductToWishlist } = useWishlistContext();

  return (
    <div
      className="ltn__product-item ltn__product-item-3 text-center" data-aos="zoom-in"
      onMouseEnter={() => setCurrentProduct(product)}
    >
      <div className="product-img">
        <Link href={`/products/${id}`}>
          <Image src={image} alt="#" width={1000} height={1000} />
        </Link>
        {status || isShowDisc
          ? <div className="product-badge">
            <ul>
              {isShowDisc
                ? <li className="sale-badge">
                  -{disc}%
                </li>
                : status === "sale"
                  ? <li className="new-badge">
                    {status}
                  </li>
                  : <li className="sale-badge">
                    {status}
                  </li>}
            </ul>
          </div>
          : ""}
        <div className="product-hover-action">
          <ul>
            <li>
              <Link
                href="#"
                title="Quick View"
                data-bs-toggle="modal"
                data-bs-target="#quick_view_modal"
              >
                <i className="far fa-eye" />
              </Link>
            </li>{" "}
            <li>
              <Link
                onClick={e => {
                  e.preventDefault();
                  addProductToCart({ ...product, quantity: 1, color: color });
                }}
                href="#"
                title="Add to Cart"
                data-bs-toggle="modal"
                data-bs-target="#add_to_cart_modal"
              >
                <i className="fas fa-shopping-cart" />
              </Link>
            </li>{" "}
            <li>
              <Link
                onClick={e => {
                  e.preventDefault();
                  addProductToWishlist({ ...product, quantity: 1 });
                }}
                href="#"
                title="Wishlist"
                data-bs-toggle="modal"
                data-bs-target="#liton_wishlist_modal"
              >
                <i className="far fa-heart" />
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="product-info p-3 mt-1 text-start">
        <span className="badge bg-success ">{status}</span>
        <div className="product-ratting text-start">
          <ul>
            <li>
              <Link href="#">
                <i className="fas fa-star" />
              </Link>
            </li>{" "}
            <li>
              <Link href="#">
                <i className="fas fa-star" />
              </Link>
            </li>{" "}
            <li>
              <Link href="#">
                <i className="fas fa-star" />
              </Link>
            </li>{" "}
            <li>
              <Link href="#">
                <i className="fas fa-star-half-alt" />
              </Link>
            </li>{" "}
            <li>
              <Link href="#">
                <i className="far fa-star" />
              </Link>
            </li>
          </ul>
        </div>
        <h2 className="product-title text-start text-over fw-bold">
          <Link href={`/products/${id}`}>
            {title}
          </Link>
        </h2>
        <h6 className="text-start small text-over mb-1">
          Packed with 100% plant protein, our formula combines the best of soy, pea, brown rice, moringa, and wheatgrass to deliver a powerhouse of nutrition. Each ingredient is selected for its high protein content and nutritional value, ensuring that you get a diverse range of amino acids and nutrients essential for your body.
        </h6>
        <p className="qunatity text-start small mb-1">
          {quantity}
        </p>
        <div className="product-price text-start text-over">
          <span>₹{netPriceModified}</span> <del>₹{priceModified}</del>
        </div>
        <button className="theme-btn-1 btn btn-effect-1 w-100 ">
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductCardPrimary;
