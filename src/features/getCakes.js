export const getCakes = async () => {
  const response = await fetch("https://www.new.przeslodka.pl/baza.json");

  if (!response.ok) {
    new Error(response.statusText);
  }

  return await response.json();
};
