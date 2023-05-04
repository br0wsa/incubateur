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
