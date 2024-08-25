import { MENUS } from "../constant/menu";

function Header({ onMenuClick, pageIndex }) {
  return (
    <div className="header">
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
