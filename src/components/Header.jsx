import {  href, Link, NavLink, useNavigate } from "react-router-dom";
import logo from "../assets/logo.png";
import userIcon from "../assets/user.png";
import { IoSearch } from "react-icons/io5";
import { useEffect, useState } from "react";
import { IoMdHome } from "react-icons/io";
import { PiTelevisionFill } from "react-icons/pi";
import { BiSolidMoviePlay } from "react-icons/bi";
export const navigation = [
    {
      label: "TV Shows",
      href: "tv",
      icon:<PiTelevisionFill/>
    },
    {
      label: "Movies",
      href: "movie",
      icon:<BiSolidMoviePlay/>
    },
  ];
export const mobileNavigation = [
    {
    label:"Home",
    href:'/',
    icon:<IoMdHome/>
  },
  ...navigation,
  {
    label:'search',
    href:'search',
    icon:<IoSearch/>
  }
]

const Header = () => {
  const navigate = useNavigate()
  const [search,setSearch] = useState('')

  const onSubmitHandler =(e)=>{
    e.preventDefault()
  }
  useEffect(()=>{
    if(search){
      navigate(`/search?q=${search}`)
    }
    
  },[search])
  return (
    <header className="fixed top-0  w-full h-16 bg-neutral-600 opacity-75 z-40">
      <div className="container px-2 h-full flex items-center ">
        <Link to={'/'}>
        <img  src={logo} alt="logo" width={120} />
        </Link>
        <nav className="hidden lg:flex items-center gap-1 ml-5">
          {navigation.map((nav, index) => (
            
              <NavLink
              key={nav.label}
                className={({ isActive }) =>
                  `px-3 hover:text-neutral-100 ${
                    isActive && "text-neutral-100"
                  }`
                }
                to={nav.href}
              >
                {nav.label}
              </NavLink>
            
          ))}
        </nav>
        <div className="ml-auto flex items-center gap-5">
          <form onSubmit={onSubmitHandler} className="flex items-center gap-1">
            <input value={search} onChange={(e)=>setSearch(e.target.value)} type="text" placeholder="Search here..." className="bg-transparent px-4 py-1 outline-0 border-none hidden lg:block" />
            <button className="text-2xl text-white">
              <IoSearch />
            </button>
          </form>
          <div className=" w-8 h-8 rounded-full overflow-hidden cursor-pointer active:scale-50 transition ">
            <img src={userIcon} alt="" className="w-full h-full" />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
