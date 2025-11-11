/* eslint-disable react-hooks/exhaustive-deps */
"use client";

import countDiscount from "@/libs/countDiscount";
import countTotalPrice from "@/libs/countTotalPrice";
import modifyAmount from "@/libs/modifyAmount";
import sliceText from "@/libs/sliceText";
import { useCartContext } from "@/providers/CartContext";
import { useProductContext } from "@/providers/ProductContext";
import { useWishlistContext } from "@/providers/WshlistContext";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Button, Input } from "reactstrap";
import { FaMinus, FaPlus } from "react-icons/fa";

const CartProduct = ({
  product,
  setUpdateProducts,
  updateProducts,
  setIsUpdate,
  isWishlist,
}) => {
  const { id, title, price, quantity: quantity1, image, disc } = product;

  // Contexts
  const { deleteProductFromCart, addProductToCart } = useCartContext();
  const { deleteProductFromWishlist } = useWishlistContext();
  const { setCurrentProduct } = useProductContext();

  // State
  const [quantity, setQuantity] = useState(quantity1);

  // Price Calculations
  const { netPrice } = countDiscount(price, disc);
  const totalPrice = countTotalPrice([{ ...product, quantity }]);
  const netPriceModified = modifyAmount(netPrice);
  const totalPiceModified = modifyAmount(totalPrice);

  // Update products when quantity changes
  useEffect(() => {
    if (!isWishlist) {
      const newUpdatedProducts = [...updateProducts]?.map((p) =>
        id === p?.id ? { ...p, quantity } : p
      );
      setUpdateProducts(newUpdatedProducts);
    }
  }, [quantity, isWishlist]);

  return (
    <tr onMouseEnter={() => setCurrentProduct(product)}>
      {/* Remove product */}
      <td
        className="cart-product-remove"
        onClick={() =>
          isWishlist
            ? deleteProductFromWishlist(id, title)
            : deleteProductFromCart(id, title)
        }
        style={{ cursor: "pointer" }}
      >
        x
      </td>

      {/* Product image */}
      <td className="cart-product-image">
        <Link href={`/products/${id}`}>
          <Image src={image} alt={title} height={1000} width={1000} />
        </Link>
      </td>

      {/* Product title */}
      <td className="cart-product-info">
        <h4>
          <Link href={`/products/${id}`}>{sliceText(title, 30)}</Link>
        </h4>
      </td>

      {/* Product price */}
      <td className="cart-product-price">₹{netPriceModified}</td>

      {/* Quantity Controls */}
      {isWishlist ? (
        <td className="cart-product-stock">In Stock</td>
      ) : (
        <td className="cart-product-quantity">
          <div
            className="d-flex align-items-center justify-content-center gap-2"
            style={{
              border: "1px solid #ddd",
              borderRadius: "6px",
              padding: "4px 8px",
              width: "120px",
            }}
          >
            <Button
              color="light"
              size="sm"
              className="p-1 me-0"
              onClick={() => {
                if (quantity > 1) {
                  setQuantity(quantity - 1);
                  setIsUpdate(true);
                }
              }}
            >
              <FaMinus size={12} />
            </Button>

            <Input
              type="text"
              value={quantity}
              className="text-center mb-0 p-0"
              bsSize="sm"
              onChange={(e) => {
                const val = parseInt(e.target.value);
                setQuantity(isNaN(val) || val < 1 ? 1 : val);
                setIsUpdate(true);
              }}
              style={{
                height:'40px'
              }}
            />

            <Button
              color="light"
              size="sm"
              className="p-1"
              onClick={() => {
                setQuantity(quantity + 1);
                setIsUpdate(true);
              }}
            >
              <FaPlus size={12} />
            </Button>
          </div>
        </td>
      )}

      {/* Add to Cart or Subtotal */}
      {isWishlist ? (
        <td
          className="cart-product-add-cart"
          onClick={() =>
            addProductToCart({
              ...product,
              quantity,
            })
          }
        >
          <Link
            className="btn btn-dark text-white"
            href="#"
            title="Add to Cart"
            data-bs-toggle="modal"
            data-bs-target="#add_to_cart_modal"
          >
            Add to Cart
          </Link>
        </td>
      ) : (
        <td className="cart-product-subtotal">${totalPiceModified}</td>
      )}
    </tr>
  );
};

export default CartProduct;
