import HomeDropdown from "./HomeDropdown";
import CommonDropdown from "./CommonDropdown";
import PagesDropdown from "./PagesDropdown";
import NavItem from "./NavItem";
import Link from "next/link";
import { useHeaderContex } from "@/providers/HeaderContex";
import Logo from "./Logo";

const Navbar = () => {
  const { headerStyle, headerSize, isNavbarAppointmentBtn, isTextWhite } =
    useHeaderContex();

  const navItemsRaw = [
    {
      name: "Home",
      path: "/",
      dropdown: null,
      dropdownSection: [],
    },
    {
      name: "Shop",
      path: "#",
      dropdown: null,
      dropdownSection: [
        {
          title: null,
          path: "#",
          dropdownItems: [
            { name: "Snacks", path: "/snacks" },
            { name: "Wellness", path: "/wellness" },
            { name: "Powders", path: "/powders" },
            { name: "Ritual Kits", path: "/ritualkits" },
          ],
        },
      ],
    },

    {
      name: "Conscious Journal",
      path: "/conscious",
      dropdown: null,
      dropdownSection: [],
    },
    {
      name: "About",
      path: "#",
      dropdown: null,
      dropdownSection: [],
    },
    {
      name: "Tribe",
      path: "#",
      dropdown: null,
      dropdownSection: [],
    },
    {
      name: "Contact",
      path: "#",
      dropdown: null,
    },
  ];

  const navItems = navItemsRaw?.map((navItem, idx) => ({
    ...navItem,
    dropdown:
      idx === 0 ? (
        <HomeDropdown items={navItem?.dropdownSection} /> // ✅ fixed prop name
      ) : idx > 0 && idx < 4 ? (
        <CommonDropdown items={navItem?.dropdownSection} />
      ) : idx === 4 ? (
        <PagesDropdown items={navItem?.dropdownSection} /> // ✅ fixed here too
      ) : null,
  }));

  return (
    <div
      className={`col header-menu-column ${headerStyle === 2 || isTextWhite
        ? "menu-color-white"
        : headerStyle === 5
          ? "justify-content-center align-items-center"
          : ""
        }`}
    >
      {headerStyle === 5 ? <Logo sticky={true} /> : ""}
      <div
        className={`header-menu ${headerStyle === 5 ? "header-menu-2" : "d-none d-xl-block"
          } `}
      >
        <nav className="d-flex justify-content-between ">
          <div className="serch mt-3">
            <div className="input-group">
              <input type="search" placeholder="serach.." className="px-2 py-2" style={{ border: '1px solid#cccccc42', width: '280px' }} />
              <button className="btn btn-light">
                <i className="fas fa-search text-dark opecity-10"/>
              </button>
            </div>

          </div>
          <div className="ltn__main-menu">
            <ul>
              {navItems?.map((item, idx) => (
                <NavItem key={idx} item={item} />
              ))}
              {(isNavbarAppointmentBtn ||
                headerSize === "lg" ||
                headerStyle === 2 ||
                headerStyle === 4) && (
                  <li className="special-link text-uppercase">
                    {/* <Link href="/contact">GET A Quote</Link> */}
                  </li>
                )}
            </ul>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
