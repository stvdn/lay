import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function Cart() {
  const productsAPI = [
    {
      name: "Papel premium",
      category: "Bazar",
      quantity: 2,
      price: 2.3,
      image:
        "https://img.lakeshorelearning.com/is/image/OCProduction/ta50ac_g?wid=800&fmt=jpeg&qlt=85,1&pscan=auto&op_sharpen=0&resMode=sharp2&op_usm=1,0.65,6,0",
    },
    {
      name: "Papel premium",
      category: "Bazar",
      quantity: 2,
      price: 2.3,
      image:
        "https://img.lakeshorelearning.com/is/image/OCProduction/ta50ac_g?wid=800&fmt=jpeg&qlt=85,1&pscan=auto&op_sharpen=0&resMode=sharp2&op_usm=1,0.65,6,0",
    },
    {
      name: "Papel premium",
      category: "Bazar",
      quantity: 2,
      price: 2.3,
      image:
        "https://img.lakeshorelearning.com/is/image/OCProduction/ta50ac_g?wid=800&fmt=jpeg&qlt=85,1&pscan=auto&op_sharpen=0&resMode=sharp2&op_usm=1,0.65,6,0",
    },
    {
      name: "Papel premium",
      category: "Bazar",
      quantity: 2,
      price: 2.3,
      image:
        "https://img.lakeshorelearning.com/is/image/OCProduction/ta50ac_g?wid=800&fmt=jpeg&qlt=85,1&pscan=auto&op_sharpen=0&resMode=sharp2&op_usm=1,0.65,6,0",
    },
  ];
  const [productsPrice, setProductsPrice] = useState(0);
  const [deliveryPrice, setDeliveryPrice] = useState(10);
  const [products, setProducts] = useState(productsAPI);

  useEffect(() => {
    let totalPrice = 0;
    products.forEach((product) => {
      totalPrice += product.price * product.quantity;
    });
    setProductsPrice(parseFloat(totalPrice.toFixed(3).slice(0, -1)));
  }, []);

  const updateQuantity = (index, change) => {
    let productsUpdate = [...products];
    productsUpdate[index].quantity += change;
    change > 0
      ? updateTotalPrice(productsUpdate[index].price)
      : updateTotalPrice(-productsUpdate[index].price);
    setProducts(productsUpdate);
  };

  const updateTotalPrice = (change) => {
    setProductsPrice(
      parseFloat((productsPrice + change).toFixed(3).slice(0, -1))
    );
  };

  return (
    <div className="flex flex-col md:flex-row w-full items-center">
      <div className="w-3/4 bg-white px-10 py-10 m-10 shadow-md">
        <div className="flex flex-col md:flex-row justify-between border-b pb-8">
          <h1 className="font-semibold text-2xl">Carrito</h1>
          <h2 className="font-semibold text-2xl underline decoration-wavy">
            3 Producto(s)
          </h2>
        </div>
        <div className="flex mt-10 mb-5 justify-center">
          <h3 className="font-semibold text-gray-600 text-xs uppercase w-2/5">
            Detalles
          </h3>
          <h3 className="hidden font-semibold text-center text-gray-600 text-xs uppercase md:block w-1/5 text-center">
            Cantidad
          </h3>
          <h3 className="hidden font-semibold text-center text-gray-600 text-xs uppercase md:block w-1/5 text-center">
            Precio
          </h3>
          <h3 className="hidden font-semibold text-center text-gray-600 text-xs uppercase md:block w-1/5 text-center">
            Total
          </h3>
        </div>
        {products.map((product, index) => {
          return (
            <div
              key={index}
              className="flex items-center hover:bg-gray-100 -mx-8 px-6 py-5"
            >
              <div className="flex w-[initial] md:w-2/5">
                <div className="w-20">
                  <img className="h-24" src={product.image} alt="" />
                </div>
                <div className="flex flex-col justify-between ml-4 flex-grow">
                  <span className="font-bold text-sm">{product.name}</span>
                  <span className="text-red-500 text-xs">
                    {product.category}
                  </span>
                  <a className="font-semibold hover:text-red-500 text-gray-500 text-xs">
                    Eliminar
                  </a>
                </div>
              </div>
              <div className="flex justify-center w-1/5">
                <a
                  onClick={() => {
                    updateQuantity(index, -1);
                  }}
                >
                  <svg
                    className="fill-current text-gray-600 w-3"
                    viewBox="0 0 448 512"
                  >
                    <path d="M416 208H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h384c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z" />
                  </svg>
                </a>
                <input
                  className="mx-2 border text-center w-8"
                  type="text"
                  value={product.quantity}
                />
                <a
                  onClick={() => {
                    updateQuantity(index, 1);
                  }}
                >
                  <svg
                    className="fill-current text-gray-600 w-3"
                    viewBox="0 0 448 512"
                  >
                    <path d="M416 208H272V64c0-17.67-14.33-32-32-32h-32c-17.67 0-32 14.33-32 32v144H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h144v144c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32V304h144c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z" />
                  </svg>
                </a>
              </div>
              <span className="text-center font-semibold text-sm hidden w-1/5 md:block ">
                ${product.price.toFixed(3).slice(0, -1)}
              </span>
              <span className="text-center w-1/5 font-semibold text-sm">
                ${(product.price * product.quantity).toFixed(3).slice(0, -1)}
              </span>
            </div>
          );
        })}
      </div>

      <div
        id="summary"
        className="w-3/4 md:w-1/4 px-8 py-10 m-2 md:m-10 shadow-md"
      >
        <h1 className="font-semibold text-2xl border-b pb-8">Factura</h1>
        <div className="flex justify-between mt-10 mb-5">
          <span className="font-semibold text-sm uppercase">
            {products.length} producto(s)
          </span>
          <span className="font-semibold text-sm">${productsPrice}</span>
        </div>
        <div>
          <label className="font-medium inline-block mb-3 text-sm uppercase">
            Envío
          </label>
          <select className="block p-2 text-gray-600 w-full text-sm">
            <option>Envío estándar - $10.00</option>
          </select>
        </div>
        <div className="border-t mt-8">
          <div className="flex font-semibold justify-between py-6 text-sm uppercase">
            <span>Total</span>
            <span>${parseFloat(productsPrice) + deliveryPrice}</span>
          </div>
          <button className="bg-gray-500 font-semibold hover:bg-yellow-500 py-3 text-sm text-white uppercase w-full">
            Comprar
          </button>
        </div>
      </div>
    </div>
  );
}
