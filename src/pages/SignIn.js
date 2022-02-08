import React from "react";
import { Link } from "react-router-dom";
import Input from "../components/Input";

export default function SignIn() {
  return (
    <div>
      <h1 className="text-5xl text-center mt-5">Iniciar sesión</h1>
      <div className="flex flex-col justify-center items-center mt-10">
        <Input label="Email" />
        <Input label="Contraseña" />
      </div>
      <div className="flex flex-col items-center justify-center mt-10">
        <button className="w-40 focus:outline-none border border-transparent py-2 px-5 rounded-lg shadow-sm text-center text-white bg-gray-500 hover:bg-yellow-500 font-medium">
          Ingresar
        </button>
        <Link to="/sign-up">
          <button className="w-32 focus:outline-none border border-transparent py-2 px-5 rounded-lg shadow-sm text-center text-white bg-gray-500 hover:bg-yellow-500 font-medium mt-5">
            Registrarse
          </button>
        </Link>
      </div>
    </div>
  );
}
