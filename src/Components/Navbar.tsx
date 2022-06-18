import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoffee } from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  return (
    <>
      <nav>
        <ul>
          <li>
            <FontAwesomeIcon icon={faCoffee} />
          </li>
          <li>
            <Link to="home">Home</Link>
          </li>
          <li>
            <Link to="about">About</Link>
          </li>
          <li>
            <Link to="contact">Contact</Link>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
