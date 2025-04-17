import { Link } from "react-router-dom";
// Import styled components for styling
import {
  DivContainerTitleS,
  ImgTitleS,
  NavS,
  LinkS,
} from "../Styles/HeaderC.style";

// Header component for navigation and branding
const Header = () => {
  return (
    <header>
      {/* Container for the logo and navigation links */}
      <DivContainerTitleS>
        {/* App logo */}
        <ImgTitleS src="/main-logo.svg" />

        {/* Navigation bar */}
        <NavS style={{ backgroundColor: "rgba(250,250,250,1)" }}>
          {/* Link to the "Show Cats" ranking page */}
          <Link to={"/show-cats"}>
            <LinkS>Classement des chats</LinkS>
          </Link>

          {/* Link to the "Vote Cats" page */}
          <Link to={"/vote-cats"}>
            <LinkS>Choisir mon chat</LinkS>
          </Link>
        </NavS>
      </DivContainerTitleS>
    </header>
  );
};

export default Header;
