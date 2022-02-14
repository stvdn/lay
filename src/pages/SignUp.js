import React from "react";
import Input from "../components/Input";
import { useForm } from "react-hook-form";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { doc, setDoc, getFirestore } from "firebase/firestore";
import { ToastContainer, toast } from "react-toastify";
import { useNavigate } from "react-router";
import { useDispatch } from "react-redux";
import { signIn } from "../features/signIn/signInSlice";

export default function SignUp() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const notifySuccess = () =>
    toast.success("Bienvenid@!", {
      position: "top-right",
      autoClose: 1000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      onClose: () => {
        navigate("/");
      },
    });
  const notifyError = (message) =>
    toast.error(message, {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  const {
    register,
    getValues,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const registerUser = (data) => {
    const auth = getAuth();
    createUserWithEmailAndPassword(auth, data.email, data.password)
      .then((userCredential) => {
        const user = userCredential.user;
        createUserDoc(user.uid, data);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log("auth", errorCode, errorMessage);
        notifyError(errorMessage);
      });
  };

  const createUserDoc = async (docID, data) => {
    const dataWithoutCredentials = {
      name: data.name,
      lastName: data.lastName,
      identification: data.identification,
      city: data.city,
      direction: data.direction,
      houseReference: data.houseReference,
    };
    try {
      const db = getFirestore();
      await setDoc(doc(db, "users", docID), dataWithoutCredentials);
      dispatch(
        signIn({
          signIn: true,
          userId: docID,
          userData: dataWithoutCredentials,
        })
      );
      notifySuccess();
    } catch (error) {
      notifyError(error);
    }
  };

  return (
    <div>
      <ToastContainer />
      <h1 className="text-5xl text-center mt-5">Registro</h1>
      <form onSubmit={handleSubmit(registerUser)}>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mx-10">
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
          <Input
            label="confirmar contraseña"
            name="re-password"
            register={register}
            validations={{
              required: "Este campo es obligatorio",

              validate: {
                positive: () =>
                  getValues("password") === getValues("re-password") ||
                  "Las contraseñas deben ser las concidir.",
              },
            }}
            errors={errors}
          />
        </div>
        <div className="flex justify-center mt-10">
          <button className="w-32 focus:outline-none border border-transparent py-2 px-5 rounded-lg shadow-sm text-center text-white bg-gray-500 hover:bg-yellow-500 font-medium">
            Registrarme
          </button>
        </div>
      </form>
    </div>
  );
}
