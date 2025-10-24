import React from "react";
import DropdownItem from "./DropdownItem";

const HomeDropdown = ({ items = [] }) => {
  // if items is empty or undefined, nothing will render — no error
  if (!Array.isArray(items) || items.length === 0) return null;

  return (
    <ul
      className={`sub-menu menu-pages-img-show ${
        items[0]?.title ? "ltn__sub-menu-col-2" : ""
      }`}
    >
      {items.map(({ title, path, dropdownItems = [] }, idx) =>
        dropdownItems.map((dropdownItem, subIdx) => (
          <li key={`${idx}-${subIdx}`}>
            <DropdownItem item={dropdownItem} />
          </li>
        ))
      )}
    </ul>
  );
};

export default HomeDropdown;
