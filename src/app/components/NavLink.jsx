import Link from "next/link";

const NavLink = ({ href, title }) => {
  return (
    <Link
      href={href}
      className="block py-2 pl-3 pr-4 text-white dark:text-white sm:text-xl rounded md:p-0 dark:hover:drop-shadow-[0_0_10px_#03e9f4] hover:drop-shadow-[0_0_10px_#eb94cf] hover:text-[#eb94cf] dark:hover:text-[#03e9f4] transition-all duration-300 ease-in-out"
    >
      {title}
    </Link>
  );
};

export default NavLink;
