import React from "react";
import { Disclosure } from "@headlessui/react";

export default function About() {
  return (
    <div>
      <h1 className="text-5xl text-center mt-5">Acerca de nosotros</h1>
      <div className="p-10">
        <Disclosure>
          {({ open }) => (
            <>
              <Disclosure.Button className="flex justify-between w-full px-4 py-2 text-sm font-medium text-left text-white bg-gray-500 rounded-lg hover:bg-yellow-500 focus:outline-none focus-visible:ring focus-visible:ring-yellow-500 focus-visible:ring-opacity-75">
                <span>What is your refund policy?</span>
                <i className="fa fa-arrow-down" aria-hidden="true"></i>
              </Disclosure.Button>
              <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-500">
                If you're unhappy with your purchase for any reason, email us
                within 90 days and we'll refund you in full, no questions asked.
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>
        <Disclosure as="div" className="mt-2">
          {({ open }) => (
            <>
              <Disclosure.Button className="flex justify-between w-full px-4 py-2 text-sm font-medium text-left text-white bg-gray-500 rounded-lg hover:bg-yellow-500 focus:outline-none focus-visible:ring focus-visible:ring-yellow-500 focus-visible:ring-opacity-75">
                <span>Do you offer technical support?</span>
                <i className="fa fa-arrow-down" aria-hidden="true"></i>
              </Disclosure.Button>
              <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-500">
                No.
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>
      </div>
    </div>
  );
}
