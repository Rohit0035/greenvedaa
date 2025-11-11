import Image from "next/image";

const Adress = () => {
  return (
    <div className="ltn__contact-address-area  pb-5" data-aos="zoom-in">
      <div className="container">
        <div className="row">
          <div className="col-lg-4" data-aos="zoom-in">
            <div className="ltn__contact-address-item ltn__contact-address-item-3 bg-success-subtle bg-opacity-75 h-100">
              <div className="ltn__contact-address-icon mb-3">
                <Image
                  src="/img/icons/10.png"
                  width={84}
                  height={82}
                  alt="Icon Image"
                />
              </div>
              <h3>Email Address</h3>
              <p className="mb-0">
                info@mail.com <br />
                info@mail.com
              </p>
            </div>
          </div>
          <div className="col-lg-4" data-aos="zoom-in">
            <div className="ltn__contact-address-item ltn__contact-address-item-3 bg-info-subtle bg-opacity-75 h-100">
              <div className="ltn__contact-address-icon mb-3">
                <Image
                  src="/img/icons/11.png"
                  width={84}
                  height={82}
                  alt="Icon Image"
                />
              </div>
              <h3>Phone Number</h3>
              <p className="mb-0">
                +0123-456789 <br /> +0123-456789
              </p>
            </div>
          </div>
          <div className="col-lg-4" data-aos="zoom-in">
            <div className="ltn__contact-address-item ltn__contact-address-item-3 bg-warning-subtle bg-opacity-75 h-100">
              <div className="ltn__contact-address-icon mb-3">
                <Image
                  src="/img/icons/12.png"
                  width={84}
                  height={82}
                  alt="Icon Image"
                />
              </div>
              <h3>Office Address</h3>
              <p className="mb-0">
                18/A, Lorem Ipsum Text <br />
                
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Adress;
