import React from "react";
import ReactStars from "react-rating-stars-component";

export default function ProductCard({
  name,
  image,
  description,
  price,
  stock,
  rate,
}) {
  const startsConfig = {
    size: 30,
    value: 2.5,
    edit: false,
  };
  return (
    <div className="bg-white border rounded-lg overflow-hidden">
      <img
        src={image}
        alt="Producto"
        style={{ height: "200px", width: "100%" }}
      />
      <div className="p-6">
        <div className="text-gray-600 font-semibold tracking-wide text-xs uppercase">
          {stock} unidad(es) disponible(s)
        </div>
        <div className="font-semibold text-lg leading-tight truncate">
          {name}
        </div>
        <p>{description}</p>
        <div className="mt-1">
          <span className="text-gray-600 text-sm">$ </span>
          {price}
        </div>
        <div className="mt-2 flex items-center justify-between">
          <ReactStars {...startsConfig} />
          <a className="hover:cursor-pointer hover:text-yellow-300">
            <i
              className="fa fa-cart-plus"
              aria-hidden="true"
              style={{ fontSize: "20px" }}
            ></i>
          </a>
        </div>
      </div>
    </div>
  );
}
