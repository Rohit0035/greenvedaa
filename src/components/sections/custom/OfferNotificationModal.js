"use client";
import { useEffect, useState } from "react";
import { Modal, ModalHeader, ModalBody, Button } from "reactstrap";
import Image from "next/image";

const OfferNotificationModal = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    // Open only when page is reloaded or refreshed
    const navType =
      performance.navigation?.type ||
      performance.getEntriesByType("navigation")[0]?.type;

    if (navType === 1 || navType === "reload") {
      setIsOpen(true);
    }
  }, []);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <Modal isOpen={isOpen} toggle={toggle} centered>
      <ModalHeader toggle={toggle} className="border-0 pb-0"></ModalHeader>
      <ModalBody className="text-center">
        <div className="mb-3">
          <Image
            src="https://images.unsplash.com/photo-1607083205623-72e382b0b4d6?auto=format&fit=crop&w=600&q=80"
            alt="Offer Banner"
            width={600}
            height={350}
            className="img-fluid rounded mb-3"
          />
        </div>

        <h4 className="font-weight-bold text-dark mb-2">
          🎉 Exclusive Offer Just for You!
        </h4>
        <p className="text-secondary mb-4">
          Enjoy <strong>30% OFF</strong> on your first purchase.  
          Don’t miss out — offer valid for a limited time only!
        </p>

        <Button color="danger" className="px-4 py-2 rounded-pill" onClick={toggle}>
          🛍️ Shop Now
        </Button>
      </ModalBody>
    </Modal>
  );
};

export default OfferNotificationModal;
