import React, { useState } from "react";
import Input from "../../components/Input";
import { useForm } from "react-hook-form";
import { addDocWithoutId } from "../../firebase/firestore";

export default function UploadProduct() {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm();
  const [image, setImage] = useState("");

  const uploadPhoto = (event) => {
    const fileImage = event.target.files[0];
    const imageURL = URL.createObjectURL(fileImage);
    setImage(imageURL);
  };

  const postProduct = async (data) => {
    console.log(data);
    const productId = await addDocWithoutId("products", data);
    console.log(productId);
  };

  return (
    <div>
      <form onSubmit={handleSubmit(postProduct)}>
        <h1 className="text-5xl text-center mt-5">Subir producto</h1>
        <div className="flex flex-col justify-center items-center mt-10">
          <div className="mx-auto w-44 h-52 mb-2 border relative bg-gray-100 mb-4 shadow-inset ">
            <img
              id="image"
              className="object-cover w-full h-full"
              src={image ? image : ""}
            />
          </div>
          <label
            htmlFor="fileInput"
            type="button"
            className="cursor-pointer inine-flex justify-between items-center focus:outline-none border py-2 px-4 rounded-lg shadow-sm text-left text-gray-600 bg-white hover:bg-gray-100 font-medium "
          >
            <i
              className="fa fa-file-image-o"
              style={{ marginRight: "10px" }}
              aria-hidden="true"
            ></i>
            Subir foto
          </label>
          <input
            type="file"
            className="hidden"
            id="fileInput"
            onChange={uploadPhoto}
            //{...register("image"), {
            // required: "Este campo es obligatorio",
            // }}
          />

          <p className="text-red-500 mt-2">
            {errors.image && errors.image.message}
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mx-10">
          <Input
            label="Nombre"
            name="name"
            register={register}
            validations={{
              required: "Este campo es obligatorio",
            }}
            errors={errors}
          />
          <Input
            label="Precio"
            name="price"
            register={register}
            validations={{
              required: "Este campo es obligatorio",
            }}
            errors={errors}
          />
          <Input
            label="Cantidad"
            name="stock"
            register={register}
            validations={{
              required: "Este campo es obligatorio",
            }}
            errors={errors}
          />
          <Input
            label="Categoria"
            name="category"
            register={register}
            validations={{
              required: "Este campo es obligatorio",
            }}
            errors={errors}
          />
        </div>
        <div className="flex justify-center mt-10">
          <button className="w-32 focus:outline-none border border-transparent py-2 px-5 rounded-lg shadow-sm text-center text-white bg-gray-500 hover:bg-yellow-500 font-medium">
            Subir
          </button>
        </div>
      </form>
    </div>
  );
}
