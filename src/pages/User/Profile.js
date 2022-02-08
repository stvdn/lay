import React from "react";
import Input from "../../components/Input";

export default function Profile() {
  const inputs = [{}];
  return (
    <div>
      <h1 className="text-5xl text-center mt-5">Perfil</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 mt-10 gap-10 mx-10">
        <Input label="Nombre" />
        <Input label="Apellido" />
        <Input label="Correo Electrónico" />
        <Input label="Contraseña" />
        <Input label="Confirmar contraseña" />
      </div>
      <div className="flex justify-center">
        <button className="w-32 focus:outline-none border border-transparent py-2 px-5 rounded-lg shadow-sm text-center text-white bg-gray-500 hover:bg-yellow-500 font-medium">
          Editar
        </button>
      </div>
    </div>
  );
}
