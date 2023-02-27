import React from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import axios from "axios";

const RegisterForm = () => {
  //Requête envoyé a l'envoie du formulaire, creation d'un utilisateur
  const handleSubmit = async (values) => {
    try {
      const response = await axios.post(
        "http://localhost:3000/api/createUser",
        values
      );
      console.log("Server response:", response.data);
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
        <Form>
          <div>
            <label htmlFor="email">Email</label>
            <Field type="email" name="email" />
            <ErrorMessage name="email" component="div" />
          </div>
          <div>
            <label htmlFor="password">Password</label>
            <Field type="password" name="password" />
            <ErrorMessage name="password" component="div" />
          </div>
          <div>
            <label htmlFor="name">Name</label>
            <Field type="text" name="name" />
            <ErrorMessage name="name" component="div" />
          </div>
          <div>
            <label htmlFor="surname">Surname</label>
            <Field type="text" name="surname" />
            <ErrorMessage name="surname" component="div" />
          </div>
          <div>
            <label htmlFor="nickname">Nickname</label>
            <Field type="text" name="nickname" />
            <ErrorMessage name="nickname" component="div" />
          </div>
          <div>
            <label htmlFor="phoneNumber">Phone Number</label>
            <Field type="tel" name="phoneNumber" />
            <ErrorMessage name="phoneNumber" component="div" />
          </div>
          <div>
            <label htmlFor="address">Address</label>
            <Field type="text" name="address" />
            <ErrorMessage name="address" component="div" />
          </div>
          <div>
            <label htmlFor="birthday">Birthday</label>
            <Field type="date" name="birthday" />
            <ErrorMessage name="birthday" component="div" />
          </div>
          <button type="submit" disabled={isSubmitting}>
            Submit
          </button>
        </Form>
      )}
    </Formik>
  );
};

export default RegisterForm;
