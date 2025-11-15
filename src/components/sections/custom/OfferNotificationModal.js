"use client";
import { useEffect, useState } from "react";
import { Modal, ModalBody, Button } from "reactstrap";
import Image from "next/image";
import Link from "next/link";
import adsimg from "../../../../public/img/common/offerimg.png";

const OfferNotificationModal = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    // Detect page reload or refresh
    const navType =
      performance.navigation?.type ||
      performance.getEntriesByType("navigation")[0]?.type;

    if (navType === 1 || navType === "reload") {
      setIsOpen(true);
    }
  }, []);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <Modal
      isOpen={isOpen}
      toggle={toggle}
      centered
      className="p-0 border-0 modal-md"
    > 
      <ModalBody className="p-0 m-0 border-0 ">
        <Link href="/shop" onClick={toggle}>
          <Image
            src={adsimg}
            alt="Offer Advertisement"
            className="img-fluid w-100 h-100"
            style={{ objectFit: "cover" }}
          />
        </Link>

        <Button
          type="button"
          color="light"
          className="position-absolute top-0 end-0 m-2 rounded-circle"
          onClick={toggle}
        >
          ×
        </Button>
      </ModalBody>
    </Modal>
  );
};

export default OfferNotificationModal;
