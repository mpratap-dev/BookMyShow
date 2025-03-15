export const LANGUAGES = [
  {
    key: "hindi",
    value: "Hindi",
  },
  {
    key: "english",
    value: "English",
  },
  {
    key: "tamil",
    value: "Tamil",
  },
  {
    key: "telegu",
    value: "Telegu",
  },
  {
    key: "kannada",
    value: "Kannada",
  },
  {
    key: "malayalam",
    value: "Malayalam",
  },
];

export const getLanguageLabel = (key: string) => {
  const language = LANGUAGES.find((language) => language.key === key);
  return language?.value;
}