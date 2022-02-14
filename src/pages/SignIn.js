import React from "react";
import Input from "../components/Input";
import { useForm } from "react-hook-form";
import { ToastContainer, toast } from "react-toastify";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import { signIn } from "../features/signIn/signInSlice";
import { doc, getDoc, getFirestore } from "firebase/firestore";
import { Link } from "react-router-dom";
import { notifyError, notifySuccess } from "../services/notification";

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
    const auth = getAuth();
    signInWithEmailAndPassword(auth, data.email, data.password)
      .then((userCredential) => {
        const userId = userCredential.user.uid;
        const userData = getUserData(userId);
        console.log(userData);
        dispatch(signIn({ signIn: true, userId, userData }));
        notifySuccess("Bienvenido!");
        navigate("/");
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        notifyError(errorMessage);
        reset();
      });
  };

  const getUserData = async (id) => {
    const db = getFirestore();
    const docRef = doc(db, "users", id);
    const docSnap = await getDoc(docRef);
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
