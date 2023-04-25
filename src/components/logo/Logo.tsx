import Image from "next/image";
import Link from "next/link";

const Logo = () => {
  return (
    <Link href={"/"}>
      <Image src={"/logo.png"} alt="logo" width={96} height={96} />
      <p>XATA_MAGNATA</p>
    </Link>
  );
};

export default Logo;
