import React, { useEffect, useState, Fragment, useRef } from "react";
import { Link } from "react-router-dom";
import UserMenu from "./UserMenu";

export default function Header() {
  const [currentPath, setCurrentPath] = useState("");
  const [isInCart, setIsInCart] = useState(false);

  useEffect(() => {
    setCurrentPath(window.location.pathname);
    currentPath === "/cart" ? setIsInCart(true) : setIsInCart(false);
  }, [currentPath]);

  return (
    <nav className="flex flex-col p-5 bg-gray-100">
      <ul className="flex items-center">
        <img
          src={require("../img/logo.png")}
          height="200"
          width="200"
          className="w-0 md:w-[200px]"
        />
        <input
          className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 h-10  ml-5"
          type="text"
          placeholder="Buscar"
        />
        <UserMenu></UserMenu>
        <Link
          to="/cart"
          onClick={() => {
            setCurrentPath("/cart");
          }}
          className={`hover:cursor-pointer ${
            isInCart ? "text-yellow-500" : " hover:text-yellow-500"
          }`}
        >
          <i
            className="fa fa-shopping-cart"
            aria-hidden="true"
            style={{ fontSize: "30px" }}
          ></i>
        </Link>
      </ul>
      <ul className="flex mt-3">
        <li className="flex-1 mr-2">
          <HeaderLink
            currentPath={currentPath}
            page={""}
            setCurrentPath={setCurrentPath}
            title={"Inicio"}
          />
        </li>
        <li className="flex-1 mr-2">
          <HeaderLink
            currentPath={currentPath}
            page={"products"}
            setCurrentPath={setCurrentPath}
            title={"Productos"}
          />
        </li>
        <li className="text-center flex-1">
          <HeaderLink
            currentPath={currentPath}
            page={"about"}
            setCurrentPath={setCurrentPath}
            title={"Acerca de"}
          />
        </li>
      </ul>
    </nav>
  );
}

function HeaderLink({ currentPath, page, setCurrentPath, title }) {
  return (
    <Link
      className={`text-center block rounded py-2 px-4 hover:bg-yellow-500 ${
        currentPath === `/${page}`
          ? "bg-gray-500 text-white"
          : "bg-white  text-gray-700 hover:text-white"
      }`}
      to={`/${page}`}
      onClick={() => {
        setCurrentPath(`/${page}`);
      }}
    >
      {title.charAt(0).toUpperCase() + title.slice(1)}
    </Link>
  );
}
