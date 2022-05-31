import React from "react";
import Input from "../components/Input";
import { useForm } from "react-hook-form";
import { ToastContainer } from "react-toastify";
import { useLocation } from "react-router-dom";
import { useDispatch } from "react-redux";
import { signIn } from "../slices/signInSlice";
import { addDocWithId } from "../services/firebase/firestore";
import { createUserEmail } from "../services/firebase/fireauth";
import { notifyError, notifySuccess } from "../services/notification";

export default function SignUp() {
  const location = useLocation();
  const dispatch = useDispatch();
  const {
    register,
    getValues,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const checkUserEmail = (data) => {
    const { userEmail, userUID } = location.state;
    if (userEmail) {
      createUserDoc(userUID, data, userEmail);
    } else {
      registerUser(data);
    }
  };

  const registerUser = (data) => {
    createUserEmail(data)
      .then((userCredential) => {
        const user = userCredential.user;
        createUserDoc(user.uid, data, user.email);
      })
      .catch((error) => {
        const errorMessage = error.message;
        notifyError(errorMessage);
      });
  };

  const createUserDoc = async (docID, data, email) => {
    const dataWithoutCredentials = {
      name: data.name,
      lastName: data.lastName,
      identification: data.identification,
      city: data.city,
      direction: data.direction,
      houseReference: data.houseReference,
      email: email,
    };
    try {
      addDocWithId("users", docID, dataWithoutCredentials);
      dispatch(
        signIn({
          signIn: true,
          userId: docID,
          userData: dataWithoutCredentials,
        })
      );
      notifySuccess("Bienvenid@");
    } catch (error) {
      notifyError(error);
    }
  };

  return (
    <div>
      <ToastContainer />
      <h1 className="text-5xl text-center mt-5">Registro</h1>
      <form onSubmit={handleSubmit(checkUserEmail)}>
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
          {!location.state.userEmail && (
            <>
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
            </>
          )}
        </div>
        <div className="flex justify-center mt-10">
          <button
            type="submit"
            className="w-32 focus:outline-none border border-transparent py-2 px-5 rounded-lg shadow-sm text-center text-white bg-gray-500 hover:bg-yellow-500 font-medium"
          >
            Registrarme
          </button>
        </div>
      </form>
    </div>
  );
}
