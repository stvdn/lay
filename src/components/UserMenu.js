import React, { Fragment, useEffect, useState } from "react";
import { Menu, Transition } from "@headlessui/react";
import { Link } from "react-router-dom";
import { doc, getDoc, getFirestore } from "firebase/firestore";
import { useDispatch, useSelector } from "react-redux";
import { signIn } from "../features/signIn/signInSlice";
import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";
import { notifyError, notifySuccess } from "../services/notification";
import { ToastContainer } from "react-toastify";

export default function UserMenu() {
  const dispatch = useDispatch();
  const auth = getAuth();
  const [signInStatus, setSignInStatus] = useState(false);
  const menuItemsLogged = [
    {
      title: "Perfil",
      icon: "fa fa-user",
      page: "profile",
    },
    {
      title: "Historial compras",
      icon: "fa fa-history",
      page: "purchase-history",
    },
    {
      title: "Historial ventas",
      icon: "fa fa-history",
      page: "sales-history",
    },
    {
      title: "Publicar",
      icon: "fa fa-handshake-o",
      page: "upload-product",
    },
    {
      title: "Cerrar sesión",
      icon: "fa fa-sign-out",
      page: "",
    },
  ];
  const menuItemsNotLogged = [
    {
      title: "Iniciar sesión",
      icon: "fa fa-user",
      page: "sign-in",
    },
    {
      title: "Registrarse",
      icon: "fa fa-user",
      page: "sign-up",
    },
  ];

  useEffect(() => {
    const getCurrentUser = () => {
      onAuthStateChanged(auth, async (user) => {
        if (user) {
          const db = getFirestore();
          const docRef = doc(db, "users", user.uid);
          const docSnap = await getDoc(docRef);
          dispatch(
            signIn({
              signIn: true,
              userId: user.uid,
              userData: docSnap.data(),
              verifiedUser: user.emailVerified,
            })
          );
          setSignInStatus(true);
        } else {
          dispatch(
            signIn({
              signIn: false,
              userId: "",
              userData: {},
              verifiedUser: false,
            })
          );
        }
      });
    };
    getCurrentUser();
  }, [signInStatus]);

  return (
    <Menu as="div" className="relative inline-block text-left">
      <ToastContainer />
      <div>
        <Menu.Button>
          <a className="hover: cursor-pointer hover:text-yellow-500">
            {signInStatus ? (
              <i
                className="fa fa-user-circle mx-6"
                aria-hidden="true"
                style={{ fontSize: "30px" }}
              ></i>
            ) : (
              <i
                className="fa fa-sign-in mx-6"
                aria-hidden="true"
                style={{ fontSize: "30px" }}
              ></i>
            )}
          </a>
        </Menu.Button>
      </div>
      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="absolute right-0 w-56 mt-2 origin-top-right bg-white divide-y divide-gray-100 rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
          <div className="px-1 py-1 ">
            {signInStatus
              ? menuItemsLogged.map((item, index) => {
                  return (
                    <MenuItem
                      title={item.title}
                      icon={item.icon}
                      key={index}
                      page={item.page}
                      setSignInStatus={setSignInStatus}
                    />
                  );
                })
              : menuItemsNotLogged.map((item, index) => {
                  return (
                    <MenuItem
                      title={item.title}
                      icon={item.icon}
                      key={index}
                      page={item.page}
                    />
                  );
                })}
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  );
}

function MenuItem({ title, icon, page, setSignInStatus }) {
  if (title === "Cerrar sesión") {
    const auth = getAuth();
    const signOutUser = () => {
      signOut(auth)
        .then(() => {
          setSignInStatus(false);
          notifySuccess("Te esperamos");
        })
        .catch((error) => {
          notifyError(error);
        });
    };
    return (
      <Menu.Item>
        {({ active }) => (
          <button
            className={`${
              active ? "bg-yellow-500 text-white" : "text-gray-900"
            } group flex rounded-md items-center w-full px-2 py-2 text-sm`}
            onClick={() => signOutUser()}
          >
            {active ? (
              <i
                className={icon}
                aria-hidden="true"
                style={{ marginRight: "10px" }}
              ></i>
            ) : (
              <i
                className={icon}
                aria-hidden="true"
                style={{ marginRight: "10px" }}
              ></i>
            )}
            {title}
          </button>
        )}
      </Menu.Item>
    );
  }
  return (
    <Menu.Item>
      {({ active }) => (
        <Link to={page}>
          <button
            className={`${
              active ? "bg-yellow-500 text-white" : "text-gray-900"
            } group flex rounded-md items-center w-full px-2 py-2 text-sm`}
          >
            {active ? (
              <i
                className={icon}
                aria-hidden="true"
                style={{ marginRight: "10px" }}
              ></i>
            ) : (
              <i
                className={icon}
                aria-hidden="true"
                style={{ marginRight: "10px" }}
              ></i>
            )}
            {title}
          </button>
        </Link>
      )}
    </Menu.Item>
  );
}
