import React from "react";
import Link from "next/link";

type Props = {};

const Header = (props: Props) => {
  return (
    <div className="flex shadow-sm items-center justify-between p-4 ">
      <Link href="/" className="text-2xl text-black font-bold">
        Product store
      </Link>
      <Link href="/productCreate" className="text-black font-bold text-xl">
        Create your product
      </Link>
    </div>
  );
};

export default Header;
