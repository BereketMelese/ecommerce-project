import { NavLink, useNavigate, useSearchParams } from "react-router";
import logo from "../assets/images/logo-white.png";
import mobileLogo from "../assets/images/mobile-logo-white.png";

import "./Header.css";
import { useEffect, useState } from "react";

function Header({ cart }) {
  const [search, setSearch] = useState("");
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const searchText = searchParams.get("search");

  useEffect(() => {
    if (searchText !== null) {
      setSearch(searchText);
    }
  }, [searchText]);

  let totalQuantity = 0;
  cart.forEach((cartItem) => {
    totalQuantity += cartItem.quantity;
  });

  const handleInputChange = (e) => {
    const value = e.target.value;
    setSearch(value);
  };

  function searchProduct() {
    console.log(search);
    navigate(`/?search=${search}`);
  }
  return (
    <div className="header">
      <div className="left-section">
        <NavLink to="/" className="header-link">
          <img className="logo" src={logo} />
          <img className="mobile-logo" src={mobileLogo} />
        </NavLink>
      </div>

      <div className="middle-section">
        <input
          className="search-bar"
          type="text"
          placeholder="Search"
          value={search}
          onChange={handleInputChange}
          onKeyUp={(e) => {
            if (e.key === "Enter") {
              searchProduct();
            }
          }}
        />

        <button className="search-button" onClick={searchProduct}>
          <img className="search-icon" src="images/icons/search-icon.png" />
        </button>
      </div>

      <div className="right-section">
        <NavLink className="orders-link header-link" to="/orders">
          <span className="orders-text">Orders</span>
        </NavLink>

        <NavLink className="cart-link header-link" to="/checkout">
          <img className="cart-icon" src="images/icons/cart-icon.png" />
          <div className="cart-quantity">{totalQuantity}</div>
          <div className="cart-text">Cart</div>
        </NavLink>
      </div>
    </div>
  );
}

export default Header;
