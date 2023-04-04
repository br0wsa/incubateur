import React from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import AuthService from "../services/auth.services";
import { useNavigate } from "react-router-dom";

const LoginForm = () => {
  //Requête envoyé a l'envoie du formulaire, connexion d'un utilisateur

  const navigate = useNavigate();

  const handleSubmit = async (values) => {
    try {
      const response = await AuthService.login(values);
      console.log(response);
      if (response.status === 200) {
        navigate("/");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div className="h-screen flex flex-col justify-center align-center">
    <Formik className="h-full"
      initialValues={{
        email: "",
        password: "",
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
          </div >
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
    </div>
  );
};

export default LoginForm;
