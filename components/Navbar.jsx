import Link from "next/link";
import { CiHeart, CiSearch } from "react-icons/ci";
import { FaFacebook, FaHeart, FaInstagram, FaTwitter } from "react-icons/fa";

const Navbar = () => {

  const navItems = [
    { label: "Home", url: "/" },
    { label: "About", url: "/" },
    { label: "My Blog", url: "/" },
    { label: "Contact", url: "/" },
    { label: <CiSearch />, url: "/" },
    {
      label: (
        <div className="flex gap-2">
          <FaInstagram />
          <FaTwitter />
          <FaFacebook />
        </div>
      ),
      url: "/",
    },
  ];

  return (
    <div>
      <section className="md:space-y-10 pt-10">
        <p className="text-center text-2xl font-roboto font-light tracking-widest max-md:hidden">
          EVERYTHING IS PERSONAL. INCLUDING THIS BLOG.
        </p>
        <h1 className="md:text-9xl text-7xl font-extrabold text-center font-playfair ">
          Zing
        </h1>
        <p className="text-center border-b text-xl font-roboto font-light tracking-widest md:hidden">
          EVERYTHING IS PERSONAL. INCLUDING THIS BLOG.
        </p>
      </section>

      <section className="border-t border-b px-25 mt-10 my-2 max-md:hidden">
        <div className="flex items-center justify-between border-x font-roboto font-light text-base">
          {navItems.map((items, index) => (
            <Link
              key={index}
              href={items.url}
              className="px-4 py-4 hover:text-purple-600"
            >
              <span>{items.label}</span>
            </Link>
          ))}
        </div>
      </section>

      
    </div>
  );
};

export default Navbar;
