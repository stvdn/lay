import React from "react";

export default function About() {
  return (
    <div>
      <h1 className="text-5xl text-center mt-5">Acerca de nosotros</h1>
      <div className="flex justify-center mt-10 flex-col md:flex-row">
        <img
          src={require("../img/banner-about.jpg")}
          alt="Equipo"
          className="w-4/4 mb-10 md:w-1/4 md:mb-0"
        />
        <p className="text-2xl mx-5">
          LIBRERÍA Y PAPELERÍA CENTRAL, es una empresa con más de 20 años de
          experiencia y trayectoria; que garantizan nuestro servicio, respaldo y
          calidad; contamos con el apoyo de personal calificado y gran calidad
          humana para ofrecer una excelente atención, beneficiando además a
          empresas del sector por medio de la comercialización de productos de
          las diferentes líneas en papelería, escolares y artículos de oficina.
          Contamos con una amplia variedad en libros de texto para educación
          infantil, primaria y secundaria, además de todo el material
          complementario para satisfacer las necesidades de nuestros
          estudiantes.
        </p>
      </div>
    </div>
  );
}
