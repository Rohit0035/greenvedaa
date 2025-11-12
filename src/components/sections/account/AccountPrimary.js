import Link from "next/link";
import React from "react";
import { Card, CardBody } from "reactstrap";
import AddressSection from "./AddressSection";

const AccountPrimary = () => {
  return (
    <div className="liton__wishlist-area pb-70">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            {/* <!-- PRODUCT TAB AREA START --> */}
            <div className="ltn__product-tab-area">
              <div className="container">
                <div className="row">
                  <div className="col-lg-4">
                    <div className="ltn__tab-menu-list mb-50">
                      <div className="nav">
                        <Link
                          className="active show st-tab-acc"
                          data-bs-toggle="tab"
                          href="#liton_tab_1_1"
                        >
                          Dashboard <i className="fas fa-home"></i>
                        </Link>
                        <Link data-bs-toggle="tab" href="#liton_tab_1_2" className="st-tab-acc">
                          Orders <i className="fas fa-file-alt"></i>
                        </Link>
                        <Link data-bs-toggle="tab" href="#liton_tab_1_3" className="st-tab-acc">
                          Downloads <i className="fas fa-arrow-down"></i>
                        </Link>
                        <Link data-bs-toggle="tab" href="#liton_tab_1_4" className="st-tab-acc">
                          address <i className="fas fa-map-marker-alt"></i>
                        </Link>
                        <Link data-bs-toggle="tab" href="#liton_tab_1_5" className="st-tab-acc">
                          Account Details <i className="fas fa-user"></i>
                        </Link>
                        <Link href="/login" className="st-tab-acc">
                          Logout <i className="fas fa-sign-out-alt"></i>
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-8">
                    <div className="tab-content">
                      <div
                        className="tab-pane fade active show"
                        id="liton_tab_1_1"
                      >
                        <div className="ltn__myaccount-tab-content-inner">
                          <p>
                            Hello <strong>UserName</strong> (not{" "}
                            <strong>UserName</strong>?{" "}
                            <small>
                              <Link href="/login">Log out</Link>
                            </small>{" "}
                            )
                          </p>
                          <p>
                            From your account dashboard you can view your{" "}
                            <span>recent orders</span>, manage your{" "}
                            <span>shipping and billing addresses</span>, and{" "}
                            <span>edit your password and account details</span>.
                          </p>
                        </div>
                      </div>
                      <div className="tab-pane fade" id="liton_tab_1_2">
                        <div className="ltn__myaccount-tab-content-inner">
                          <div className="table-responsive">
                            <table className="table table-striped table-hover align-middle border rounded-3 shadow-sm">
                              <thead className="table-success">
                                <tr>
                                  <th scope="col">#</th>
                                  <th scope="col">Date</th>
                                  <th scope="col">Status</th>
                                  <th scope="col">Total</th>
                                  <th scope="col" className="text-center">Action</th>
                                </tr>
                              </thead>
                              <tbody>
                                <tr>
                                  <td>1</td>
                                  <td>Jun 22, 2019</td>
                                  <td>
                                    <span className="badge bg-warning text-dark px-2 py-1 small">Pending</span>
                                  </td>
                                  <td>₹3000</td>
                                  <td className="text-center">
                                    <Link href="/cart" className="btn btn-sm btn-success text-white rounded-pill px-3">
                                      View
                                    </Link>
                                  </td>
                                </tr>
                                <tr>
                                  <td>2</td>
                                  <td>Nov 22, 2019</td>
                                  <td>
                                    <span className="badge bg-success px-2 py-1 small">Approved</span>
                                  </td>
                                  <td>₹200</td>
                                  <td className="text-center">
                                    <Link href="/cart" className="btn btn-sm btn-success text-white rounded-pill px-3">
                                      View
                                    </Link>
                                  </td>
                                </tr>
                                <tr>
                                  <td>3</td>
                                  <td>Jan 12, 2020</td>
                                  <td>
                                    <span className="badge bg-info text-dark px-2 py-1 small">On Hold</span>
                                  </td>
                                  <td>₹990</td>
                                  <td className="text-center">
                                    <Link href="/cart" className="btn btn-sm btn-success text-white rounded-pill px-3">
                                      View
                                    </Link>
                                  </td>
                                </tr>
                              </tbody>
                            </table>
                          </div>

                        </div>
                      </div>
                      <div className="tab-pane fade" id="liton_tab_1_3">
                        <div className="ltn__myaccount-tab-content-inner">
                          <div className="table-responsive">
                            <table className="table table-striped table-hover align-middle border rounded-3 shadow-sm small">
                              <thead className="table-success">
                                <tr>
                                  <th scope="col">Product</th>
                                  <th scope="col">Purchase Date</th>
                                  <th scope="col">License Expiry</th>
                                  <th scope="col" className="text-center">Invoice</th>
                                </tr>
                              </thead>
                              <tbody>
                                <tr>
                                  <td>GreenVedaa Herbal Hair Oil – 200ml Pack</td>
                                  <td>Oct 28, 2025</td>
                                  <td>
                                    <span className="badge bg-success px-3 py-2">Active</span>
                                  </td>
                                  <td className="text-center">
                                    <Link href="#" className="btn btn-sm btn-outline-success rounded-pill px-3">
                                      <i className="fas fa-file-invoice me-2"></i> Download Invoice
                                    </Link>
                                  </td>
                                </tr>

                                <tr>
                                  <td>GreenVedaa Organic Face Wash – Neem & Aloe Vera</td>
                                  <td>Sep 15, 2025</td>
                                  <td>
                                    <span className="badge bg-warning text-dark px-3 py-2">Expiring Soon</span>
                                  </td>
                                  <td className="text-center">
                                    <Link href="#" className="btn btn-sm btn-outline-success rounded-pill px-3">
                                      <i className="fas fa-file-invoice me-2"></i> Download Invoice
                                    </Link>
                                  </td>
                                </tr>

                                <tr>
                                  <td>GreenVedaa Combo – Shampoo + Conditioner Set</td>
                                  <td>Aug 12, 2025</td>
                                  <td>
                                    <span className="badge bg-danger px-3 py-2">Expired</span>
                                  </td>
                                  <td className="text-center">
                                    <Link href="#" className="btn btn-sm btn-outline-secondary rounded-pill px-3 disabled">
                                      <i className="fas fa-file-invoice me-2"></i> Expired
                                    </Link>
                                  </td>
                                </tr>
                              </tbody>
                            </table>
                          </div>

                        </div>
                      </div>
                      <div className="tab-pane fade" id="liton_tab_1_4">
                        <div className="ltn__myaccount-tab-content-inner">
                           <AddressSection />
                        </div>
                      </div>
                      <div className="tab-pane fade" id="liton_tab_1_5">
                        <div className="ltn__myaccount-tab-content-inner">
                          <p>
                            The following addresses will be used on the checkout
                            page by default.
                          </p>
                          <div className="ltn__form-box">
                            <form action="#">
                              <div className="row mb-50">
                                <div className="col-md-6">
                                  <label>First name:</label>
                                  <input type="text" name="ltn__name" />
                                </div>
                                <div className="col-md-6">
                                  <label>Last name:</label>
                                  <input type="text" name="ltn__lastname" />
                                </div>
                                <div className="col-md-6">
                                  <label>Display Name:</label>
                                  <input
                                    type="text"
                                    name="ltn__lastname"
                                    placeholder="Ethan"
                                  />
                                </div>
                                <div className="col-md-6">
                                  <label>Display Email:</label>
                                  <input
                                    type="email"
                                    name="ltn__lastname"
                                    placeholder="example@example.com"
                                  />
                                </div>
                              </div>
                              <fieldset>
                                <legend>Password change</legend>
                                <div className="row">
                                  <div className="col-md-12">
                                    <label>
                                      Current password (leave blank to leave
                                      unchanged):
                                    </label>
                                    <input type="password" name="ltn__name" />
                                    <label>
                                      New password (leave blank to leave
                                      unchanged):
                                    </label>
                                    <input
                                      type="password"
                                      name="ltn__lastname"
                                    />
                                    <label>Confirm new password:</label>
                                    <input
                                      type="password"
                                      name="ltn__lastname"
                                    />
                                  </div>
                                </div>
                              </fieldset>
                              <div className="btn-wrapper">
                                <button
                                  type="submit"
                                  className="btn theme-btn-1 btn-effect-1 text-uppercase"
                                >
                                  Save Changes
                                </button>
                              </div>
                            </form>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* <!-- PRODUCT TAB AREA END --> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AccountPrimary;
