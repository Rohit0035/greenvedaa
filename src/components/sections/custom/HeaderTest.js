"use client";

import Image from "next/image";
import Link from "next/link";
import {
  Container,
  Row,
  Col,
  Input,
  InputGroup,
  InputGroupText
} from "reactstrap";
import { FaSearch, FaUser, FaShoppingCart } from "react-icons/fa";
import logo from "../../../../public/img/common/logo-circle.png"

const HeaderTest = () => {
  return (
    <header
      className="py-3 shadow-sm"
      style={{ background: "#ffffff" }}
    >
      <Container>
        <Row className="align-items-center">
          
          {/* LEFT – Menu */}
          <Col md="5" className="d-flex justify-content-start">
            <nav className="d-flex gap-4 fw-bold">
              <Link href="/" className="text-dark">Home</Link>
              <Link href="/shop" className="text-dark">Shop</Link>
              <Link href="/about" className="text-dark">About</Link>
              <Link href="/journal" className="text-dark">Conscious Journal</Link>
              <Link href="/tribe" className="text-dark">Tribe</Link>
              <Link href="/contact" className="text-dark">Contact</Link>
            </nav>
          </Col>

          {/* CENTER – Logo */}
          <Col md="2" className="d-flex justify-content-center text-center">
            <Link href="/">
              <Image
                src={logo}
                width={70}
                height={70}
                alt="GreenVedaa Logo"
                className="rounded-circle"
                style={{ objectFit: "cover" }}
              />
            </Link>
          </Col>

          {/* RIGHT – Search bar, Cart, Profile */}
          <Col md="5" className="d-flex justify-content-end align-items-center gap-4">
            
            {/* Search bar */}
            <InputGroup style={{ maxWidth: "250px" }}>
              <Input placeholder="search.." className="rounded-start-pill" />
              <InputGroupText className="bg-light rounded-end-pill">
                <FaSearch />
              </InputGroupText>
            </InputGroup>

            {/* User Icon */}
            <Link
              href="/account"
              className="p-2 border rounded shadow-sm bg-white"
            >
              <FaUser size={18} />
            </Link>

            {/* Cart Icon */}
            <Link
              href="/cart"
              className="p-2 border rounded shadow-sm bg-white d-flex align-items-center gap-2"
            >
              <FaShoppingCart size={18} />
              <span className="fw-bold">4</span>
            </Link>
          </Col>
        </Row>
      </Container>
    </header>
  );
};

export default HeaderTest;
