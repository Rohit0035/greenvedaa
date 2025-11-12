"use client";
import React, { useState, useEffect } from "react";
import {
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  Form,
  FormGroup,
  Input,
  Label,
  Row,
  Col,
} from "reactstrap";

const AddressModal = ({ isOpen, toggle, onSave, editingAddress }) => {
  const [formData, setFormData] = useState({
    name: "",
    address: "",
    city: "",
    state: "",
    pincode: "",
    phone: "",
  });

  useEffect(() => {
    if (editingAddress) {
      setFormData(editingAddress);
    } else {
      setFormData({
        name: "",
        address: "",
        city: "",
        state: "",
        pincode: "",
        phone: "",
      });
    }
  }, [editingAddress]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave(formData);
    toggle();
  };

  return (
    <Modal isOpen={isOpen} toggle={toggle} centered size="lg">
      <ModalHeader toggle={toggle}>
        {editingAddress ? "Edit Address" : "Add New Address"}
      </ModalHeader>
      <Form onSubmit={handleSubmit}>
        <ModalBody style={{ backgroundColor: "#f7f5eb" }}>
          <Row>
            <Col lg="6" sm="12">
              <FormGroup>
                <Label>Full Name</Label>
                <Input
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Enter your full name"
                  required
                />
              </FormGroup>
            </Col>

            <Col lg="6" sm="12">
              <FormGroup>
                <Label>Phone</Label>
                <Input
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="Enter mobile number"
                  required
                />
              </FormGroup>
            </Col>

            <Col lg="6" sm="12">
              <FormGroup>
                <Label>Address</Label>
                <Input
                  name="address"
                  value={formData.address}
                  onChange={handleChange}
                  placeholder="House No, Street, Area"
                  required
                />
              </FormGroup>
            </Col>

            <Col lg="6" sm="12">
              <FormGroup>
                <Label>City</Label>
                <Input
                  name="city"
                  value={formData.city}
                  onChange={handleChange}
                  placeholder="Enter city"
                />
              </FormGroup>
            </Col>

            <Col lg="6" sm="12">
              <FormGroup>
                <Label>State</Label>
                <Input
                  name="state"
                  value={formData.state}
                  onChange={handleChange}
                  placeholder="Enter state"
                />
              </FormGroup>
            </Col>

            <Col lg="6" sm="12">
              <FormGroup>
                <Label>Pincode</Label>
                <Input
                  name="pincode"
                  value={formData.pincode}
                  onChange={handleChange}
                  placeholder="Enter pincode"
                />
              </FormGroup>
            </Col>
          </Row>
        </ModalBody>

        <ModalFooter>
          <Button className="theme-btn-1 btn btn-effect-1" type="submit">
            {editingAddress ? "Update" : "Save"}
          </Button>
        </ModalFooter>
      </Form>
    </Modal>
  );
};

export default AddressModal;
