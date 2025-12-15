import "./CheckoutHeader.css";
import logo from "../../assets/images/logo.png";
import mobileLogo from "../../assets/images/mobile-logo.png";

function checkoutHeader() {
  return (
    <div className="checkout-header">
      <div className="header-content">
        <div className="checkout-header-left-section">
          <a href="/">
            <img className="logo" src={logo} />
            <img className="mobile-logo" src={mobileLogo} />
          </a>
        </div>

        <div className="checkout-header-middle-section">
          Checkout (
          <a className="return-to-home-link" href="/">
            3 items
          </a>
          )
        </div>

        <div className="checkout-header-right-section">
          <img src="images/icons/checkout-lock-icon.png" />
        </div>
      </div>
    </div>
  );
}

export default checkoutHeader;
