import React, { useEffect } from "react";
import Input from "../../components/Input";
import { useSelector, useDispatch } from "react-redux";
import { useForm } from "react-hook-form";

export default function Profile() {
  const user = useSelector((state) => state.signIn.userData);
  const {
    register,
    getValues,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  useEffect(() => {
    reset(user);
  }, []);

  const updateUser = (data) => {};

  return (
    <div>
      <h1 className="text-5xl text-center mt-5">Perfil</h1>
      <form
        onSubmit={handleSubmit()}
        className="grid grid-cols-1 md:grid-cols-2 mt-10 gap-10 mx-10"
      >
        <Input
          label="nombre"
          name="name"
          register={register}
          validations={{
            required: "Este campo es obligatorio",
          }}
          errors={errors}
        />
        <Input
          label="apellido"
          name="lastName"
          register={register}
          validations={{
            required: "Este campo es obligatorio",
          }}
          errors={errors}
        />
        <Input
          label="identificación"
          name="identification"
          register={register}
          validations={{
            required: "Este campo es obligatorio",
          }}
          errors={errors}
        />
        <Input
          label="ciudad"
          name="city"
          register={register}
          validations={{
            required: "Este campo es obligatorio",
          }}
          errors={errors}
        />
        <Input
          label="dirección"
          name="direction"
          register={register}
          validations={{
            required: "Este campo es obligatorio",
          }}
          errors={errors}
        />
        <Input
          label="referencia"
          name="houseReference"
          register={register}
          validations={{
            required: "Este campo es obligatorio",
          }}
          errors={errors}
        />
        <Input
          label="correo electrónico"
          name="email"
          register={register}
          validations={{
            required: "Este campo es obligatorio",
          }}
          errors={errors}
        />
        <Input
          label="contraseña"
          name="password"
          register={register}
          validations={{
            required: "Este campo es obligatorio",
          }}
          errors={errors}
        />
      </form>
      <div className="flex justify-center">
        <button className="w-32 focus:outline-none border border-transparent py-2 px-5 rounded-lg shadow-sm text-center text-white bg-gray-500 hover:bg-yellow-500 font-medium">
          Editar
        </button>
      </div>
    </div>
  );
}
