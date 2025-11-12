"use client";
import React from "react";
import { Container, Row, Col, Card, CardBody } from "reactstrap";

const TermsMain = () => {
  return (
    <div className="pb-5">
      <Container>
        <Row className="justify-content-center">
          <Col lg="12">
            <Card className="border-0" data-aos="zoom-in">
              <CardBody>
                <h2 className="mb-3 text-start text-success fw-bold">
                  Terms & Conditions
                </h2>

                <section className="mb-4">
                  <h5 className="fw-bold mb-3 text-dark">1. Introduction</h5>
                  <p>
                    Welcome to <strong>GreenVedaa</strong>. These Terms &
                    Conditions (“Terms”) govern your access to and use of our
                    website, products, and services. By accessing or purchasing
                    from our site, you agree to comply with and be bound by
                    these Terms.
                  </p>
                </section>

                <section className="mb-4">
                  <h5 className="fw-bold mb-3 text-dark">
                    2. Eligibility & Account Responsibility
                  </h5>
                  <p>
                    To use our website or make a purchase, you must be at least
                    18 years old. You are responsible for maintaining the
                    confidentiality of your account and password and for all
                    activities that occur under your account.
                  </p>
                </section>

                <section className="mb-4">
                  <h5 className="fw-bold mb-3 text-dark">
                    3. Products & Services
                  </h5>
                  <p>
                    GreenVedaa offers a range of wellness and natural products.
                    We make every effort to display accurate product information
                    including descriptions, images, and prices. However,
                    unintentional errors may occur, and we reserve the right to
                    correct them without prior notice.
                  </p>
                  <p>
                    All products are intended for personal use only and not for
                    resale. Unauthorized commercial use may result in account
                    suspension.
                  </p>
                </section>

                <section className="mb-4">
                  <h5 className="fw-bold mb-3 text-dark">
                    4. Orders, Payments & Pricing
                  </h5>
                  <ul>
                    <li>
                      All orders are subject to availability and acceptance.
                    </li>
                    <li>
                      Prices listed on the website are inclusive of applicable
                      taxes unless stated otherwise.
                    </li>
                    <li>
                      Payments are processed securely through trusted gateways
                      such as Razorpay or Paytm. We do not store any card
                      details.
                    </li>
                  </ul>
                </section>

                <section className="mb-4">
                  <h5 className="fw-bold mb-3 text-dark">5. Shipping & Delivery</h5>
                  <p>
                    Orders are typically dispatched within 1–3 business days.
                    Delivery timelines depend on your location and courier
                    partner. We are not liable for delays caused by logistics or
                    unforeseen circumstances.
                  </p>
                </section>

                <section className="mb-4">
                  <h5 className="fw-bold mb-3 text-dark">6. Returns & Refunds</h5>
                  <p>
                    We accept returns only for damaged, defective, or incorrect
                    products. Requests must be raised within 48 hours of
                    delivery. Refunds (if approved) will be processed to the
                    original payment method within 5–7 working days.
                  </p>
                </section>

                <section className="mb-4">
                  <h5 className="fw-bold mb-3 text-dark">
                    7. Intellectual Property
                  </h5>
                  <p>
                    All website content, including text, logos, graphics, and
                    product images, is the property of GreenVedaa and protected
                    under Indian copyright laws. You may not reproduce,
                    distribute, or modify any material without written consent.
                  </p>
                </section>

                <section className="mb-4">
                  <h5 className="fw-bold mb-3 text-dark">
                    8. Limitation of Liability
                  </h5>
                  <p>
                    GreenVedaa shall not be held liable for any indirect,
                    incidental, or consequential damages arising from the use or
                    inability to use our products or services. Our liability, in
                    any case, shall be limited to the amount paid for the
                    product.
                  </p>
                </section>

                <section className="mb-4">
                  <h5 className="fw-bold mb-3 text-dark">9. User Conduct</h5>
                  <p>
                    You agree not to use our site for unlawful activities or to
                    upload malicious content. Misuse of the platform may lead to
                    suspension or legal action.
                  </p>
                </section>

                <section className="mb-4">
                  <h5 className="fw-bold mb-3 text-dark">10. Governing Law</h5>
                  <p>
                    These Terms shall be governed by and construed in accordance
                    with the laws of India. Any disputes shall be subject to the
                    jurisdiction of courts located in Kolkata, West Bengal.
                  </p>
                </section>

                <section className="mb-4">
                  <h5 className="fw-bold mb-3 text-dark">
                    11. Modifications to Terms
                  </h5>
                  <p>
                    GreenVedaa reserves the right to modify or update these
                    Terms at any time without prior notice. Updates will be
                    reflected on this page with a revised effective date.
                  </p>
                </section>

                <section>
                  <h5 className="fw-bold mb-3 text-dark">12. Contact Us</h5>
                  <p>
                    For any questions regarding these Terms & Conditions, please
                    contact us:
                  </p>
                  <address className="bg-light p-3 rounded border">
                    <p className="mb-1 fw-bold text-success">GreenVedaa Customer Care</p>
                    <p className="mb-1">Email: support@greenvedaa.in</p>
                    <p className="mb-1">Phone: +91 12345 67890</p>
                    <p>Address: 22 Park Street, Ballygunge, Kolkata, India</p>
                  </address>
                </section>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default TermsMain;
