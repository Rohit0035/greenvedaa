"use client";
import React from "react";
import {
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  Form,
  FormGroup,
  Label,
  Input,
} from "reactstrap";
import { FaEnvelope } from "react-icons/fa";

const ForgotPasswordModal = ({ isOpen, toggle }) => {
  return (
    <Modal isOpen={isOpen} toggle={toggle} centered>
      <ModalHeader toggle={toggle} className="border-0">
        Forgot Password
      </ModalHeader>
      <ModalBody>
        <div className="text-center mb-3">
          <div
            className="d-inline-flex align-items-center justify-content-center rounded-circle mb-3"
            style={{
              width: "60px",
              height: "60px",
              backgroundColor: "#e8f5e9",
            }}
          >
            <FaEnvelope size={28} color="#28a745" />
          </div>
          <p className="text-muted px-3">
            Enter your registered email below. We’ll send you a link to reset
            your password securely.
          </p>
        </div>

        <Form>
          <FormGroup>
            <Label for="resetEmail" className="fw-semibold">
              Email Address
            </Label>
            <Input
              id="resetEmail"
              name="email"
              type="email"
              placeholder="Enter your email"
              required
            />
          </FormGroup>
        </Form>
      </ModalBody>
      <ModalFooter className="border-0">
        <Button  className="theme-btn-1 btn btn-block w-100">
          Send Reset Link
        </Button>
      </ModalFooter>
    </Modal>
  );
};

export default ForgotPasswordModal;
