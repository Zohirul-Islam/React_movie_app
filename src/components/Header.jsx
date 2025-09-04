import { NavLink } from "react-router-dom";
import logo from "../assets/logo.png";
import userIcon from '../assets/user.png'
const Header = () => {
  const navigation = [
    {
      label: "TV Shows",
      href: "tv",
    },
    {
      label: "Movies",
      href: "movie",
    },
  ];
  return (
    <header className="fixed top-0  w-full h-16 bg-neutral-600 opacity-75">
      <div className="container px-2 h-full flex items-center ">
        <img src={logo} alt="logo" width={120} />
        <nav className="flex items-center gap-1 ml-4">
          {navigation.map((nav, index) => (
            <div key={nav.label}>
              <NavLink className={({isActive})=>`px-3 hover:text-neutral-100 ${isActive && 'text-neutral-100'}`} to={nav.href}>{nav.label}</NavLink>
            </div>
          ))}
        </nav>
        <div className="ml-auto w-8 h-8 rounded-full overflow-hidden cursor-pointer active:scale-50 transition ">
            <img src={userIcon} alt="" className="w-full h-full" />
        </div>
      </div>
    </header>
  );
};

export default Header;
