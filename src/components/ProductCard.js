import React from "react";
import ReactStars from "react-rating-stars-component";
import { useDispatch } from "react-redux";
import { notifySuccess } from "../services/notification";
import { addToCart } from "../slices/cartSlice";

export default function ProductCard({ product: { id, data } }) {
  const dispatch = useDispatch();
  const startsConfig = {
    size: 30,
    value: 2.5,
    edit: false,
  };

  const addCart = (data) => {
    data.quantity = 1;
    dispatch(addToCart(data));
    notifySuccess("Producto agregrado!");
  };

  return (
    <div className="bg-white border rounded-lg overflow-hidden">
      <img
        src={data.image}
        alt="Producto"
        style={{ height: "200px", width: "100%" }}
      />
      <div className="p-6 flex flex-col">
        <div className="text-gray-600 font-semibold tracking-wide text-xs uppercase">
          {data.stock} unidad(es) disponible(s)
        </div>
        <div className="font-semibold text-lg leading-tight truncate">
          {data.name}
        </div>
        <div>{data.description}</div>
        <div className="mt-2 flex items-center justify-between">
          <span className="text-green-500 text-xl">$ {data.price}</span>
          <a
            onClick={() => {
              addCart(data);
            }}
            className="hover:cursor-pointer hover:text-yellow-300"
          >
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
