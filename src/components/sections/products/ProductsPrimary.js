"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import {
  Offcanvas,
  OffcanvasHeader,
  OffcanvasBody,
  Button,
  Collapse,
} from "reactstrap";

import ProductCardPrimary from "@/components/shared/cards/ProductCardPrimary";
import Nodata from "@/components/shared/no-data/Nodata";
import Pagination from "@/components/shared/paginations/Pagination";
import ShopDataShowing from "@/components/shared/products/ShopDataShowing";
import ShopShortSelect from "@/components/shared/products/ShopShortSelect";
import ProductSidebar from "@/components/shared/sidebars/ProductSidebar";
import usePagination from "@/hooks/usePagination";
import filterItems from "@/libs/filterItems";
import { useCommonContext } from "@/providers/CommonContext";
import { FaArrowUp } from "react-icons/fa";

const ProductsPrimary = ({ isSidebar, currentTapId }) => {
  const [arrangeInput, setArrangeInput] = useState("default");
  const [currentTab, setCurrentTab] = useState(currentTapId ? currentTapId : 0);
  const [filterOpen, setFilterOpen] = useState(false);

  const toggleFilter = () => setFilterOpen(!filterOpen);

  const { filteredProducts } = useCommonContext();
  const limit =
    currentTab === 1
      ? isSidebar === false
        ? 4
        : 7
      : isSidebar === false
      ? 16
      : 21;

  const arrangedProducts = filterItems(
    filteredProducts,
    arrangeInput,
    arrangeInput
  );

  const {
    currentItems,
    totalItems,
    currentpage,
    setCurrentpage,
    paginationItems,
    currentPaginationItems,
    showMore,
    totalPages,
    handleCurrentPage,
    firstItem,
    lastItem,
  } = usePagination(arrangedProducts, limit, 5);

  useEffect(() => {
    setCurrentpage(0);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentTab]);

  return (
    <div className="ltn__product-area ltn__product-gutter mb-120">
      <div className="container">
        <div className="row">
          {isSidebar === false ? (
            ""
          ) : (
            <div className="col-lg-3 d-none d-lg-block">
              <ProductSidebar />
            </div>
          )}

          <div
            className={`${isSidebar === false ? "col-lg-12" : "col-lg-9"}  ${
              isSidebar === "left" ? "order-lg-2 " : ""
            }`}
          >
            {!totalPages ? <Nodata text={"No Product Found!"} /> : ""}

            <div
              className={`ltn__shop-options ${!totalPages ? "no-data" : ""}`}
            >
              <ul>
                <li>
                  {isSidebar === "left" || isSidebar === false ? (
                    <ShopShortSelect setArrangeInput={setArrangeInput} />
                  ) : (
                    <ShopDataShowing
                      limit={limit}
                      totalItems={totalItems}
                      firstItem={firstItem}
                      lastItem={lastItem}
                    />
                  )}
                </li>
                <li>
                  {isSidebar === "left" || isSidebar === false ? (
                    <ShopDataShowing
                      limit={limit}
                      totalItems={totalItems}
                      firstItem={firstItem}
                      lastItem={lastItem}
                    />
                  ) : (
                    <ShopShortSelect setArrangeInput={setArrangeInput} />
                  )}
                </li>
              </ul>
            </div>

            <div className="tab-content">
              <div
                className={`tab-pane fade ${
                  currentTab === 0 ? " active " : ""
                }`}
                id="liton_product_1"
              >
                <div className="ltn__product-tab-content-inner ltn__product-grid-view">
                  <div className="row">
                    {currentItems?.map((product, idx) => (
                      <div
                        className={`${
                          isSidebar === false ? "col-xl-3 col-lg-4" : "col-xl-4"
                        }  col-sm-6 col-6`}
                        key={idx}
                      >
                        <ProductCardPrimary product={product} />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {totalPages > 1 ? (
              <Pagination
                totalPages={totalPages}
                currentPaginationItems={currentPaginationItems}
                showMore={showMore}
                items={paginationItems}
                currenIndex={currentpage}
                handleCurrentPage={handleCurrentPage}
              />
            ) : (
              ""
            )}
          </div>
        </div>
      </div>

      {/* === Mobile Bottom Buttons === */}
      <div className="d-lg-none px-2 d-flex justify-content-around align-items-center fixed-bottom bg-white border-top shadow-sm py-2">
        <Button
          className="theme-btn-1 btn btn-effect-1 w-50"
          onClick={toggleFilter}
        >
          <i className="fas fa-filter me-2"></i> Filter
        </Button>
        <Button
          href="/"
          className="theme-btn-1 btn btn-effect-1 w-50"
        >
          <FaArrowUp className="me-2 "/> Back to Home
        </Button>
      </div>

      {/* === Filter Sidebar (Offcanvas) === */}
      <Offcanvas isOpen={filterOpen} toggle={toggleFilter} direction="start">
        <OffcanvasHeader toggle={toggleFilter}>Filter Products</OffcanvasHeader>
        <OffcanvasBody>
          <ProductSidebar />
        </OffcanvasBody>
      </Offcanvas>
    </div>
  );
};

export default ProductsPrimary;
