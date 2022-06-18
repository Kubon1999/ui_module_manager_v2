import {
  faBarsProgress,
  faBox,
  faTableList,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../Assets/Styles/LeftMenu.css";
const LeftMenu = () => {
  return (
    <div className="leftMenu">
      <ul>
        <li>
          <FontAwesomeIcon icon={faBox} />
          Modules
        </li>
        <li>
          <FontAwesomeIcon icon={faBarsProgress} />
          Project
        </li>
        <li>
          <FontAwesomeIcon icon={faTableList} />
          Versions
        </li>
      </ul>
    </div>
  );
};
export default LeftMenu;
