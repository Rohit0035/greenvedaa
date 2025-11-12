"use client";
import React from "react";
import { Container, Row, Col, Card, CardBody } from "reactstrap";

const PolicyMain = () => {
  return (
    <div className="pb-5">
      <Container>
        <Row className="justify-content-center">
          <Col lg="12">
            <Card className="border-0" data-aos="zoom-in">
              <CardBody className="">
                <h2 className="mb-3 text-start text-success fw-bold">
                  Privacy Policy
                </h2>

                <section className="mb-4">
                  <h5 className="fw-bold mb-3 text-dark">
                    1. Introduction
                  </h5>
                  <p>
                    Welcome to <strong>GreenvEDAA</strong>. We are committed to
                    protecting your personal information and your right to
                    privacy. This Privacy Policy explains how we collect, use,
                    and safeguard your data when you visit our website or make a
                    purchase from our store.
                  </p>
                </section>

                <section className="mb-4">
                  <h5 className="fw-bold mb-3 text-dark">
                    2. Information We Collect
                  </h5>
                  <ul>
                    <li>
                      <strong>Personal Information:</strong> Name, email
                      address, phone number, shipping and billing address.
                    </li>
                    <li>
                      <strong>Payment Information:</strong> Collected securely
                      via trusted payment gateways. We do not store your card
                      details.
                    </li>
                    <li>
                      <strong>Usage Data:</strong> Pages visited, browser type,
                      device information, and IP address to help improve our
                      website experience.
                    </li>
                  </ul>
                </section>

                <section className="mb-4">
                  <h5 className="fw-bold mb-3 text-dark">
                    3. How We Use Your Information
                  </h5>
                  <p>We use your information to:</p>
                  <ul>
                    <li>Process and deliver your orders</li>
                    <li>Provide customer support and respond to your queries</li>
                    <li>Send you order updates and promotional offers (only if you opt-in)</li>
                    <li>Improve our website and user experience</li>
                  </ul>
                </section>

                <section className="mb-4">
                  <h5 className="fw-bold mb-3 text-dark">
                    4. Sharing Your Information
                  </h5>
                  <p>
                    We do not sell or trade your personal information. We may
                    share data only with trusted service providers such as:
                  </p>
                  <ul>
                    <li>Payment gateways (Razorpay, Paytm, etc.)</li>
                    <li>Delivery partners (Delhivery, BlueDart, India Post)</li>
                    <li>IT and marketing support services under strict privacy agreements</li>
                  </ul>
                </section>

                <section className="mb-4">
                  <h5 className="fw-bold mb-3 text-dark">
                    5. Data Retention & Security
                  </h5>
                  <p>
                    We retain your data only as long as necessary to fulfill the
                    purposes mentioned above. We use SSL encryption and
                    industry-standard security practices to protect your data.
                  </p>
                </section>

                <section className="mb-4">
                  <h5 className="fw-bold mb-3 text-dark">
                    6. Cookies
                  </h5>
                  <p>
                    Our website uses cookies to enhance browsing experience,
                    analyze site traffic, and serve personalized content. You
                    can manage or disable cookies through your browser settings.
                  </p>
                </section>

                <section className="mb-4">
                  <h5 className="fw-bold mb-3 text-dark">
                    7. Your Rights
                  </h5>
                  <p>
                    You have the right to access, update, or delete your
                    personal information. To request any data changes, please
                    contact our support team.
                  </p>
                </section>

                <section className="mb-4">
                  <h5 className="fw-bold mb-3 text-dark">
                    8. Third-Party Links
                  </h5>
                  <p>
                    Our website may contain links to other sites. We are not
                    responsible for their privacy practices or content. We
                    recommend reviewing their policies before providing any
                    information.
                  </p>
                </section>

                <section className="mb-4">
                  <h5 className="fw-bold mb-3 text-dark">
                    9. Policy Updates
                  </h5>
                  <p>
                    We may update this Privacy Policy from time to time. Any
                    changes will be reflected on this page with a revised
                    “Effective Date.”
                  </p>
                </section>

                <section>
                  <h5 className="fw-bold mb-3 text-dark">
                    10. Contact Us
                  </h5>
                  <p>
                    If you have any questions or concerns about our Privacy
                    Policy, feel free to reach out to us:
                  </p>
                  <address className="bg-light p-3 rounded border">
                    <p className="mb-1 fw-bold text-success">GreenVedaa Customer Care</p>
                    <p className="mb-1">Email: support@greenvedaa.in</p>
                    <p className="mb-1">Phone: +91 12345 67890</p>
                    <p>Address: lorem dummy text</p>
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

export default PolicyMain;
