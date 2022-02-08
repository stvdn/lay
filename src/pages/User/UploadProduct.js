import React from "react";
import Input from "../../components/Input";

export default function UploadProduct() {
  return (
    <div>
      <h1 className="text-5xl text-center mt-5">Subir producto</h1>
      <div className="flex flex-col justify-center items-center mt-10">
        <div className="mx-auto w-32 h-32 mb-2 border  relative bg-gray-100 mb-4 shadow-inset">
          <img id="image" className="object-cover w-full h-32 rounded-full" />
        </div>

        <label
          htmlFor="fileInput"
          type="button"
          className="cursor-pointer inine-flex justify-between items-center focus:outline-none border py-2 px-4 rounded-lg shadow-sm text-left text-gray-600 bg-white hover:bg-gray-100 font-medium"
        >
          <i
            className="fa fa-file-image-o"
            style={{ marginRight: "10px" }}
            aria-hidden="true"
          ></i>
          Subir foto
        </label>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mx-10">
        <Input label="Nombre" />
        <Input label="Precio" />
        <Input label="Cantidad" />
        <Input label="Categoria" />
      </div>
      <div className="flex justify-center mt-10">
        <button className="w-32 focus:outline-none border border-transparent py-2 px-5 rounded-lg shadow-sm text-center text-white bg-gray-500 hover:bg-yellow-500 font-medium">
          Subir
        </button>
      </div>
    </div>
  );
}
