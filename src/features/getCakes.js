export const getCakes = async () => {
  const response = await fetch("/przeslodka/baza.json");

  if (!response.ok) {
    new Error(response.statusText);
  }

  return await response.json();
};
