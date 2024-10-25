import { useEffect, useState } from "react";
import { MENUS } from "../constant/menu";

function Header({ onMenuClick, pageIndex }) {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handleResize = () => {
    if (window.innerWidth < 768) {
      setIsMobile(true);
    } else {
      setIsMobile(false);
    }
  };
  return (
    <div className={`header${isMobile ? " mobile" : ""}`}>
      <div className="header-menu">
        {MENUS.map((menu, index) => {
          return (
            <div
              className={`header-menu-label ${
                index === pageIndex ? "active" : ""
              }`}
              key={index}
              onClick={() => onMenuClick(index)}
            >
              {menu}
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Header;
