import React from "react";
import Input from "../components/Input";
import { useForm } from "react-hook-form";
import { ToastContainer, toast } from "react-toastify";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import { signIn } from "../slices/signInSlice";
import { Link } from "react-router-dom";
import { notifyError, notifySuccess } from "../services/notification";
import { signInWithEmail } from "../services/firebase/fireauth";
import { getDocById } from "../services/firebase/firestore";

export default function SignIn() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const signInUser = (data) => {
    signInWithEmail(data)
      .then(async (userCredential) => {
        const userId = userCredential.user.uid;
        const userData = await getUserData(userId);
        dispatch(
          signIn({
            signIn: true,
            userId,
            userData,
            verifiedUser: userCredential.user.emailVerified,
          })
        );
        notifySuccess("Bienvenido!");
        navigate("/");
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        notifyError(errorMessage, error.code);
        reset();
      });
  };

  const getUserData = async (id) => {
    const docSnap = await getDocById(id);
    return docSnap.data();
  };

  return (
    <div className="mt-32">
      <ToastContainer />
      <h1 className="text-5xl text-center mt-5">Iniciar sesión</h1>
      <form onSubmit={handleSubmit(signInUser)}>
        <div className="flex flex-col  items-center mt-10">
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
        </div>
        <div className="flex flex-col justify-center items-center mt-10">
          <button className="w-32 focus:outline-none border border-transparent py-2 px-5 rounded-lg shadow-sm text-center text-white bg-gray-500 hover:bg-yellow-500 font-medium">
            Ingresar
          </button>
          <Link to="/sign-up">
            <button className="w-32 mt-8 focus:outline-none border border-transparent py-2 px-5 rounded-lg shadow-sm text-center text-white bg-gray-500 hover:bg-yellow-500 font-medium">
              Registrarme
            </button>
          </Link>
        </div>
      </form>
    </div>
  );
}
