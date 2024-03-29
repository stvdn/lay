import React from "react";
import { Link } from "react-router-dom";

export default function Home() {
  const categories = { papeleria: "fa fa-book" };
  return (
    <div className="mt-10">
      <div className="flex justify-center w-0 md:w-full">
        <img src={require("../img/banner-home.jpg")} className="w-3/4 h-fit" />
      </div>

      <h1 className="ml-5 my-5 text-4xl text-gray-700">Categorias</h1>
      <div className="grid grid-cols-1 justify-items-center px-8  md:grid-cols-1 md:px-32">
        {Object.keys(categories).map((key, i) => (
          <span
            key={i}
            className="text-center outline-white outline  bg-gray-100 w-full p-5 hover:bg-gray-700 hover:text-white"
          >
            <i
              className={categories[key]}
              style={{ fontSize: 50, color: "#6b7280" }}
              aria-hidden="true"
            ></i>
            <Link to="/products" className="capitalize">
              {key}
            </Link>
          </span>
        ))}
      </div>
    </div>
  );
}
