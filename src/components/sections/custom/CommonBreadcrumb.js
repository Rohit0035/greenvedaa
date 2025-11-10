"use client";
import React from "react";
import { Breadcrumb, BreadcrumbItem } from "reactstrap";
import Link from "next/link";

const CommonBreadcrumb = ({ title = "Page Title", label = "Home", path = "/" }) => {
    return (
        <section>
            <div className="common-breadcrumb bg-light ">
                <div className="container">
                    {/* <h3 className="mb-2 fw-semibold">{title}</h3> */}

                    <Breadcrumb listClassName="bg-transparent p-0 m-0">
                        <BreadcrumbItem>
                            <Link href={path} className="text-decoration-none text-muted">
                                {label}
                            </Link>
                        </BreadcrumbItem>
                        <BreadcrumbItem active className="text-success fw-semibold">
                            {title}
                        </BreadcrumbItem>
                    </Breadcrumb>
                </div>
                {/* Title */}

            </div>
        </section>

    );
};

export default CommonBreadcrumb;
