import React from "react";

export default function SalesHistory() {
  return (
    <div>
      <h1 className="text-5xl text-center mt-5">Historial ventas</h1>
      <div className="border  rounded mt-5 flex p-4 justify-between items-center flex-wrap shadow-md mx-10">
        <img
          src="https://images-na.ssl-images-amazon.com/images/I/41KufN65f8L.jpg"
          className="w-12"
        />
        <div className="w-2/3">
          <h3 className="text-lg font-medium">Black Jacket XL</h3>
          <p className="text-gray-600 text-xs">
            Sold by <b>Aashir Khan</b>
          </p>
          <h4 className="text-red-700 text-xs font-bold mt-1">
            Only 2 left in stock
          </h4>
        </div>
        <div>
          <h4 className="text-3xl font-medium">
            <sup className="text-lg text-purple-800">$</sup> 89
          </h4>
          <h5 className="text-sm font-bold text-purple-800">60% OFF</h5>
        </div>
      </div>
    </div>
  );
}
