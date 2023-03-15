import React from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import { useEffect, useState } from "react";

import AuthService from "../services/auth.services";

const RegisterForm = () => {
  const [isUsernameTaken, setIsUsernameTaken] = useState(false);
  //Requête envoyé a l'envoie du formulaire, creation d'un utilisateur
  const handleSubmit = async (values) => {
    try {
      await AuthService.signUp(values);
    } catch (error) {}
  };

  //Check si l'username existe déjà en BDD - check a chaque changement dans l'input
  const handleUsernameCheck = async (value) => {
    try {
      const response = await AuthService.checkUsername(value);
      if (response.status === 200) {
        setIsUsernameTaken(true);
      } else if (response.status === 404) {
        setIsUsernameTaken(false);
      }
    } catch (error) {}
  };

  return (
    <Formik
      initialValues={{
        email: "",
        password: "",
        name: "",
        surname: "",
        username: "",
        phoneNumber: "",
        address: "",
        birthday: "",
        terms: false, //conditions d'utilisations
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
        if (!values.username) {
          errors.username = "Requis";
        } else if (isUsernameTaken) {
          errors.username = "Ce pseudonyme est déjà utilisé";
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
        } else {
          //Vérifie si l'age n'est pas inférieur a 13 (valeur a reflechir)
          const birthDate = new Date(values.birthday);
          const age = new Date().getFullYear() - birthDate.getFullYear();
          if (age < 13) {
            errors.birthday =
              "Vous devez avoir au moins 13 ans pour utiliser nos services";
          }
        }

        if (!values.terms) {
          // add validation for terms
          errors.terms =
            "Vous devez accepter les termes et conditions pour continuer.";
        }

        return errors;
      }}
      onSubmit={handleSubmit}
    >
      {({ isSubmitting }) => (
        <Form className="max-w-sm mx-auto space-y-4">
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
              Mot de passe
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
              Nom
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
              Prénom
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
              htmlFor="username"
              className="block mb-2 text-gray-700 font-bold"
            >
              Pseudonyme
            </label>
            <Field
              type="text"
              name="username"
              className="w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              onKeyUp={(e) =>
                e.target.value && handleUsernameCheck(e.target.value)
              }
            />
            <ErrorMessage
              name="username"
              component="div"
              className="text-red-500 mt-2 text-sm"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="phoneNumber"
              className="block mb-2 text-gray-700 font-bold"
            >
              Numéro de téléphone
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
            <label
              htmlFor="address"
              className="block mb-2 text-gray-700 font-bold"
            >
              Adresse
            </label>
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
            <label
              htmlFor="birthday"
              className="block mb-2 text-gray-700 font-bold"
            >
              Date de naissance
            </label>
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

          <div className="mb-4">
            <label className="inline-flex items-center">
              <Field
                type="checkbox"
                name="terms"
                className="form-checkbox h-5 w-5 text-gray-600"
              />
              <span className="ml-2 text-gray-700">
                J'accepte les conditions d'utilisation
              </span>
            </label>
            <ErrorMessage
              name="terms"
              component="div"
              className="text-red-500 mt-2 text-sm"
            />
          </div>
          <button
            type="submit"
            disabled={isSubmitting}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
            S'inscrire
          </button>
        </Form>
      )}
    </Formik>
  );
};

export default RegisterForm;
