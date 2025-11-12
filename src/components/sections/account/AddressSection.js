"use client";
import React, { useState } from "react";
import Link from "next/link";
import { Row, Col } from "reactstrap";
import AddressCard from "./AddressCard";
import AddressModal from "./AddressModal";

const AddressSection = () => {
  const [addresses, setAddresses] = useState([
    {
      id: 1,
      type: "Billing",
      name: "Rohit verma",
      address: "22, Park Street, Ballygunge",
      city: "Kolkata",
      state: "West Bengal",
      pincode: "700017",
      phone: "+91 98301 24567",
      isSelected: true,
    },
    {
      id: 2,
      type: "Shipping",
      name: "Ananya Sharma",
      address: "A-45, Sector 62",
      city: "Noida",
      state: "Uttar Pradesh",
      pincode: "201301",
      phone: "+91 98765 11223",
      isSelected: false,
    },
  ]);

  const [modalOpen, setModalOpen] = useState(false);
  const [editingAddress, setEditingAddress] = useState(null);

  const toggleModal = () => setModalOpen(!modalOpen);

  const handleAdd = () => {
    setEditingAddress(null);
    toggleModal();
  };

  const handleEdit = (address) => {
    setEditingAddress(address);
    toggleModal();
  };

  const handleSave = (newAddress) => {
    if (editingAddress) {
      setAddresses((prev) =>
        prev.map((a) => (a.id === editingAddress.id ? { ...a, ...newAddress } : a))
      );
    } else {
      setAddresses((prev) => [...prev, { id: Date.now(), type: "Custom", ...newAddress }]);
    }
  };

  const handleSelect = (id) => {
    setAddresses((prev) =>
      prev.map((a) => ({ ...a, isSelected: a.id === id }))
    );
  };

  return (
    <div className="ltn__myaccount-tab-content-inner">
      <p className="text-over">
        The following addresses will be used on the checkout page by default.
        <span>
          <Link href="#" onClick={(e) => { e.preventDefault(); handleAdd(); }} style={{ float: "right" }} className="text-success">
            Add Address
          </Link>
        </span>
      </p>

      <Row>
        {addresses.map((addr) => (
          <Col md="6" key={addr.id} className="mb-4">
            <AddressCard
              title={`${addr.type} Address`}
              addressData={addr}
              onEdit={handleEdit}
              onSelect={handleSelect}
            />
          </Col>
        ))}
      </Row>

      <AddressModal
        isOpen={modalOpen}
        toggle={toggleModal}
        onSave={handleSave}
        editingAddress={editingAddress}
      />
    </div>
  );
};

export default AddressSection;
