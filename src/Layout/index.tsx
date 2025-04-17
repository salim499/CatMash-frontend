import { Outlet } from "react-router-dom";

// Import style
import { LayoutContainerS, DivContainerS } from "..//Styles/Layout.style";

// Import layout
import HeaderL from "./HeaderL";
import FooterL from "./FooterL";

const Layout = () => {
  return (
    <LayoutContainerS>
      {/* Header of the site */}
      <HeaderL />
      <DivContainerS>
        <Outlet />
      </DivContainerS>
      {/* Footer of the site */}
      <FooterL />
    </LayoutContainerS>
  );
};

export default Layout;
