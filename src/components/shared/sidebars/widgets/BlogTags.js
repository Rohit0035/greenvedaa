"use client";
import makePath from "@/libs/makePath";
import { useCommonContext } from "@/providers/CommonContext";
import Link from "next/link";
import React from "react";

const BlogTags = () => {
  const { currentPath, tag: currentTag } = useCommonContext();

  // ✅ Updated tags list
  const tags = [
    "Makhana (raw)",
    "Honey",
    "Rice",
    "Pulses",
    "Maize",
    "Vermicompost",
    "Spices",
    "Mustard",
    "Coriander",
    "Flaxseed",
    "Haldi / Turmeric",
  ];

  return (
    <div className="widget ltn__tagcloud-widget">
      <h4 className="ltn__widget-title ltn__widget-title-border">
        Popular Tags
      </h4>
      <ul>
        {tags?.map((tag, idx) => (
          <li key={idx}>
            <Link
              href={`${currentPath ? currentPath : "/blogs"}?tag=${makePath(tag)}`}
              className={currentTag === makePath(tag) ? "active" : ""}
            >
              {tag}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BlogTags;
