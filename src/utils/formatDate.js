import PropTypes from "prop-types";

/**
 * Formate une date en format texte avec le format spécifié
 * @param {string} dateToFormat - La date à formater au format ISO 8601
 * @returns {string} La date formatée au format texte avec le format spécifié
 */
export default function formatDate(dateToFormat) {
  const date = new Date(dateToFormat);
  const options = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  };
  return date.toLocaleDateString("fr-FR", options);
}

formatDate.propTypes = {
  /**
   * La date à formater au format ISO 8601
   */
  dateToFormat: PropTypes.string.isRequired,
};
