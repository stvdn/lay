import React, { Fragment, useState } from "react";
import { Menu, Transition } from "@headlessui/react";
import { Link } from "react-router-dom";

export default function UserMenu() {
  const [user, setUser] = useState();
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
  return (
    <Menu as="div" className="relative inline-block text-left">
      <div>
        <Menu.Button>
          <a className="hover: cursor-pointer hover:text-yellow-500">
            <i
              className="fa fa-user-circle mx-6"
              aria-hidden="true"
              style={{ fontSize: "30px" }}
            ></i>
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
            {user
              ? menuItemsLogged.map((item, index) => {
                  return (
                    <MenuItem
                      title={item.title}
                      icon={item.icon}
                      key={index}
                      page={item.page}
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

function MenuItem({ title, icon, page }) {
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
