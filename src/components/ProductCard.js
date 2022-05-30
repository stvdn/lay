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
    data.id = id;
    dispatch(addToCart(data));
    notifySuccess("Producto agregrado!");
  };

  return (
    <React.Fragment>
      <div className="flex flex-col rounded-lg  border bg-white">
        <img
          src={data.image}
          alt="Producto"
          style={{ height: "200px", width: "100%" }}
          className="rounded"
        />

        <div className="p-6 flex flex-col h-full">
          <div className="text-gray-600 font-semibold tracking-wide text-xs uppercase">
            {data.stock} unidad(es) disponible(s)
          </div>
          <div className="font-semibold text-lg leading-tight truncate mt-2">
            {data.name}
          </div>
          <div className="mb-2 mt-2">{data.description}</div>
          {/*
<div>
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
              #photography
            </span>
          </div>
          */}

          <div className="flex justify-between mt-auto">
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
    </React.Fragment>
  );
}
