import { FC, useState, FormEvent } from "react";
import logo from "./icons/logo-main.png";
import {
  faCarSide,
  faArrowsSpin,
  faMedal,
  faSearch
} from "@fortawesome/free-solid-svg-icons";
import Optional from "./Optional";
import CartItem from "./CartItem";


import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import TotalItems from "./TotalItems";
import { useSelector } from "react-redux";
import { selectUser } from "../../../../pages/Customeraccount/featurnes/useSlice";

const SearchBar: FC = () => {
  const [searchValue, setSearchValue] = useState<String>("");

  const {isLogin} = useSelector(selectUser); 

  const navigate = useNavigate();

  const search = () => {
    navigate("/search", { state: { searchValue } });
  }

  const handleSearch = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    navigate("/best-sellers", { state: { searchValue } });
  };

  const handleEnterSearch = (e: any) => {
    if(e.code === "Enter") {
      search()
    }
  }

  return (
    <>
      <div className="flex justify-between items-center mb-4">
        <NavLink to="/">
          <img className="w-60 h-16" src={logo} alt="logo" />
        </NavLink>
        <div className="search relative hidden lg:flex">
          <form onSubmit={handleSubmit} className="w-full">
            <input
              type="text"
              className="search-input pl-4 pr-24 py-1 border h-10 w-full rounded-full"
              placeholder="Search"
              onChange={(e) => setSearchValue(e.target.value)}
              onKeyDown = {handleEnterSearch}
            />
            <button className="btn-search w-15 h-10 p-1 absolute right-0 rounded-r-3xl hover:bg-gray-300">
            <Optional  icon={faSearch} />
            </button>
          </form>
        </div>
        <div className="optinals items-center hidden sm:flex">
          <Optional  icon={faCarSide} textBold="FREE" textLight="SHIPPING" />
          <Optional  icon={faArrowsSpin} textBold="100%" textLight="SECURE" />
          <Optional  icon={faMedal} textBold="100%" textLight="AUTHENTIC" />
        </div>
        <div className="cart sm:hidden relative">
          <NavLink to="/cart">
            {isLogin && <TotalItems />} 
            <CartItem />
          </NavLink>
        </div>
      </div>
      <div className="search-mobile px-2 py-4 flex lg:hidden">
        <input
          type="text"
          className="search-input pl-4 pr-24 py-1 border h-full w-full rounded"
          placeholder="Search Value"
        />
        <button className="btn-search bg-9c6711 w-20 p-1 absolute right-4 rounded-r">
          Search
        </button>
      </div>
    </>
  );
};

export default SearchBar;
