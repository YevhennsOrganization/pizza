import Link from "next/link";
import Logo from "../logo/Logo";
import Navigation from "../navigation/Navigation";
import IconButton from "@mui/material/IconButton";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";

const Header = () => {
  return (
    <header>
      <Logo />
      <a href="tel:+3805635435464">+380546132165</a>
      <Link href={"/cart"}>
        <AddShoppingCartIcon color="primary" />
      </Link>
      <Navigation />
    </header>
  );
};

export default Header;
