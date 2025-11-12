import React from "react";
import { Card, CardBody } from "reactstrap";
import Link from "next/link";

const AddressCard = ({ title, addressData, onEdit, onSelect }) => {
  return (
    <Card
      className={`small bg-light cursor-pointer ${addressData.isSelected ? "border-success shadow-sm" : ""}`}
      onClick={() => onSelect(addressData.id)}
    >
      <CardBody>
        <h4>
          {title}{" "}
          <small style={{ float: "right" }}>
            <Link href="#" onClick={(e) => { e.preventDefault(); onEdit(addressData); }} className="text-success">
              Edit
            </Link>
          </small>
        </h4>
        <address className="h-100">
          <p className="fw-bold mb-1">{addressData.name}</p>
          <p className="mb-1">
            {addressData.address} <br />
            {addressData.city}, {addressData.state} – {addressData.pincode}
          </p>
          <p className="mb-0">📞 {addressData.phone}</p>
        </address>
      </CardBody>
    </Card>
  );
};

export default AddressCard;
