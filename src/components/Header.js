import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router";
import { useContext } from "react";
import UserContext from "../utils/userContext";
import { useSelector } from "react-redux"; // Corrected import statement for useSelector

const Header = () => {
  const userContextValue = useContext(UserContext); // Access the context value
  const loggedInUserName = userContextValue?.loggedInUserName; // Access the specific property
  const item = useSelector((store) => store.cart.items);
  return (
    <div className="header">
      <div className="imglogo">
        <img className="header_logo" src={LOGO_URL} alt="Google Logo" />
      </div>
      <div className="nav-bar">
        <ul className="nav-bar_list">
          <li>
            <Link to="">Search</Link>
          </li>
          <li>
            <Link to="/offers">Offers</Link>
          </li>
          <li>
            <Link to="/help"> Help</Link>
          </li>
          <li>
            <Link to="/grocery"> Grocery</Link>
          </li>
          <li>{loggedInUserName}</li>
          <li>
            <Link to="/cart"> Cart {item?.length} items</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
