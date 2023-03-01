import React from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import axios from "axios";

import AuthService from "../services/auth.services";

const RegisterForm = () => {
  //Requête envoyé a l'envoie du formulaire, creation d'un utilisateur
  const handleSubmit = (values) => {
    try {
      AuthService.signUp(values);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <Formik
      initialValues={{
        email: "",
        password: "",
        name: "",
        surname: "",
        nickname: "",
        phoneNumber: "",
        address: "",
        birthday: "",
      }}
      validate={(values) => {
        const errors = {};
        if (!values.email) {
          errors.email = "Requis";
        } else if (
          !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
        ) {
          errors.email = "Addresse email invalide";
        }
        if (!values.password) {
          errors.password = "Requis";
        } else if (
          //Regex, vérifie si le champ password contient au moins 8 caractères, un symbole spécial et un chiffre
          !/^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,}$/i.test(
            values.password
          )
        ) {
          errors.password =
            "Le mot de passe doit contenir au minimum caractères, un nombre et un symbole spécial";
        }

        if (!values.name) {
          errors.name = "Requis";
        }
        if (!values.surname) {
          errors.surname = "Requis";
        }
        if (!values.nickname) {
          errors.nickname = "Requis";
        }
        if (!values.phoneNumber) {
          errors.phoneNumber = "Requis";
          //Regex qui vérifie si le numéro de tel est conforme au format francais
        } else if (!/^0[1-9]([-. ]?[0-9]{2}){4}$/.test(values.phoneNumber)) {
          errors.phoneNumber = "Numéro de téléphone invalide";
        }
        if (!values.address) {
          errors.address = "Requis";
        }
        if (!values.birthday) {
          errors.birthday = "Requis";
        }
        return errors;
      }}
      onSubmit={handleSubmit}
    >
      {({ isSubmitting }) => (
        <Form className="max-w-sm mx-auto">
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block mb-2 text-gray-700 font-bold"
            >
              Email
            </label>
            <Field
              type="email"
              name="email"
              className="w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
            <ErrorMessage
              name="email"
              component="div"
              className="text-red-500 mt-2 text-sm"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="password"
              className="block mb-2 text-gray-700 font-bold"
            >
              Password
            </label>
            <Field
              type="password"
              name="password"
              className="w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
            <ErrorMessage
              name="password"
              component="div"
              className="text-red-500 mt-2 text-sm"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="name"
              className="block mb-2 text-gray-700 font-bold"
            >
              Name
            </label>
            <Field
              type="text"
              name="name"
              className="w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
            <ErrorMessage
              name="name"
              component="div"
              className="text-red-500 mt-2 text-sm"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="surname"
              className="block mb-2 text-gray-700 font-bold"
            >
              Surname
            </label>
            <Field
              type="text"
              name="surname"
              className="w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
            <ErrorMessage
              name="surname"
              component="div"
              className="text-red-500 mt-2 text-sm"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="nickname"
              className="block mb-2 text-gray-700 font-bold"
            >
              Nickname
            </label>
            <Field
              type="text"
              name="nickname"
              className="w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
            <ErrorMessage
              name="nickname"
              component="div"
              className="text-red-500 mt-2 text-sm"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="phoneNumber"
              className="block mb-2 text-gray-700 font-bold"
            >
              Phone Number
            </label>
            <Field
              type="tel"
              name="phoneNumber"
              className="w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
            <ErrorMessage
              name="phoneNumber"
              component="div"
              className="text-red-500 mt-2 text-sm"
            />
          </div>

          <div>
            <label htmlFor="address">Address</label>
            <Field
              type="text"
              name="address"
              className="w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
            <ErrorMessage
              name="address"
              component="div"
              className="text-red-500 mt-2 text-sm"
            />
          </div>
          <div>
            <label htmlFor="birthday">Birthday</label>
            <Field
              type="date"
              name="birthday"
              className="w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
            <ErrorMessage
              name="birthday"
              component="div"
              className="text-red-500 mt-2 text-sm"
            />
          </div>
          <button
            type="submit"
            disabled={isSubmitting}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
            Submit
          </button>
        </Form>
      )}
    </Formik>
  );
};

export default RegisterForm;
