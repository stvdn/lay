import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

export default function Header() {
  const [currentPath, setCurrentPath] = useState("");
  useEffect(() => {
    setCurrentPath(window.location.pathname);
  }, []);
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
        <a className="hover: cursor-pointer hover:text-yellow-500">
          <i
            className="fa fa-user-circle mx-6"
            aria-hidden="true"
            style={{ fontSize: "30px" }}
          ></i>
        </a>
        <a className="hover: cursor-pointer hover:text-yellow-500">
          <i
            className="fa fa-shopping-cart"
            aria-hidden="true"
            style={{ fontSize: "30px" }}
          ></i>
        </a>
      </ul>
      <ul className="flex mt-3">
        <li className="flex-1 mr-2">
          <Link
            className={`text-center block rounded py-2 px-4 hover:bg-gray-700 ${
              currentPath === "/"
                ? "bg-gray-500 text-white"
                : "bg-white  text-gray-700 hover:text-white"
            }`}
            to="/"
            onClick={() => {
              setCurrentPath("/");
            }}
          >
            Inicio
          </Link>
        </li>
        <li className="flex-1 mr-2">
          <Link
            className={`text-center block rounded py-2 px-4 hover:bg-gray-700 ${
              currentPath === "/products"
                ? "bg-gray-500 text-white"
                : "bg-white  text-gray-700 hover:text-white"
            }`}
            to="/products"
            onClick={() => {
              setCurrentPath("/products");
            }}
          >
            Productos
          </Link>
        </li>
        <li className="text-center flex-1">
          <Link
            className={`text-center block rounded py-2 px-4 hover:bg-gray-700 ${
              currentPath === "/about"
                ? "bg-gray-500 text-white"
                : "bg-white  text-gray-700 hover:text-white"
            }`}
            to="/about"
            onClick={() => {
              setCurrentPath("/about");
            }}
          >
            Acerca de
          </Link>
        </li>
      </ul>
    </nav>
  );
}
