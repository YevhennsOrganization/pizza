import Link from "next/link";

const Navigation = () => {
  return (
    <nav>
      <Link href={"/pizza"}>Pizza</Link>
      <Link href={"/hotdog"}>Hot-Dog</Link>
    </nav>
  );
};

export default Navigation;
