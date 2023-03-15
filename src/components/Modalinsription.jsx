import { Formik } from "formik";

import React from "react";

const Modalinsription = () => {
  return (
    <div>
      <Formik
        // initialisation des valeurs du formulaire
        initialValues={{ nom: "", email: "", message: "" }}
        // fonction de validation du formulaire
        validate={(values) => {
          const errors = {};
          // vérifier si le champ nom est vide
          if (!values.nom) {
            errors.nom = "Le nom est requis";
          }
          // vérifier si le champ email est vide ou invalide
          if (!values.email) {
            errors.email = "L'email est requis";
          } else if (!isValidEmail(values.email)) {
            errors.email = "L'email est invalide";
          }
          // vérifier si le champ message est vide
          if (!values.message) {
            errors.message = "Le message est requis";
          }
          // retourner les erreurs éventuelles
          return errors;
        }}
        // fonction de soumission du formulaire
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            setSubmitting(false);
          }, 400);
        }}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
          isSubmitting,
        }) => (
          // le formulaire HTML
          <form onSubmit={handleSubmit}>
            <label htmlFor="nom">Nom</label>
            <input
              type="text"
              name="nom"
              // gestionnaire de changement pour mettre à jour la valeur du champ nom
              onChange={handleChange}
              // gestionnaire de sortie de focus pour mettre à jour l'état du champ nom
              onBlur={handleBlur}
              value={values.nom}
            />
            // afficher l'erreur si le champ nom est touché et comporte des
            erreurs
            {errors.nom && touched.nom && <div>{errors.nom}</div>}
            <label htmlFor="email">Email</label>
            <input
              type="email"
              name="email"
              // gestionnaire de changement pour mettre à jour la valeur du champ email
              onChange={handleChange}
              // gestionnaire de sortie de focus pour mettre à jour l'état du champ email
              onBlur={handleBlur}
              value={values.email}
            />
            // afficher l'erreur si le champ email est touché et comporte des
            erreurs
            {errors.email && touched.email && <div>{errors.email}</div>}
            <label htmlFor="message">Message</label>
            <textarea
              name="message"
              // gestionnaire de changement pour mettre à jour la valeur du champ message
              onChange={handleChange}
              // gestionnaire de sortie de focus pour mettre à jour l'état du champ message
              onBlur={handleBlur}
              value={values.message}
            />
            // afficher l'erreur si le champ message est touché et comporte des
            erreurs
            {errors.message && touched.message && <div>{errors.message}</div>}
            <button type="submit" disabled={isSubmitting}>
              Envoyer
            </button>
          </form>
        )}
      </Formik>
    </div>
  );
};

export default Modalinsription;
