import { createSlice } from "@reduxjs/toolkit";

const cakeSlice = createSlice({
  name: "cakes",
  initialState: {
    cakes: [
      {
        plik: "IMG_8702.jpg",
        tytuł: "Tort z kwiatami1",
        metaTITLE: "Tort z kwiatami - Przesłodka.pl",
        metaDESC:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus ultricies efficitur mi quis dignissim. Maecenas molestie eu quam ",
        opis: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus ultricies efficitur mi quis dignissim. Maecenas molestie eu quam a rutrum. Ut feugiat neque quis auctor rutrum.",
        podtytuł1: "Lorem",
        dodatkowyOpis1:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus ultricies efficitur mi quis dignissim. Maecenas molestie eu quam a rut",
        podtytuł2: "Ipsum",
        dodatkowyOpis2:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus ultricies efficitur mi quis dignissim. Maecenas molestie eu quam a rut",
        kategorie: ["torty weselne"],
        id: "1",
      },
      {
        plik: "IMG_8702.jpg",
        tytuł: "Tort z kwiatami2",
        metaTITLE: "Tort z kwiatami - Przesłodka.pl",
        metaDESC:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus ultricies efficitur mi quis dignissim. Maecenas molestie eu quam ",
        opis: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus ultricies efficitur mi quis dignissim. Maecenas molestie eu quam a rutrum. Ut feugiat neque quis auctor rutrum.",
        podtytuł1: "Lorem",
        dodatkowyOpis1:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus ultricies efficitur mi quis dignissim. Maecenas molestie eu quam a rut",
        podtytuł2: "Ipsum",
        dodatkowyOpis2:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus ultricies efficitur mi quis dignissim. Maecenas molestie eu quam a rut",
        kategorie: ["torty na roczek"],
        id: "2",
      },
      {
        plik: "IMG_8702.jpg",
        tytuł: "Tort z kwiatami3",
        metaTITLE: "Tort z kwiatami - Przesłodka.pl",
        metaDESC:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus ultricies efficitur mi quis dignissim. Maecenas molestie eu quam ",
        opis: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus ultricies efficitur mi quis dignissim. Maecenas molestie eu quam a rutrum. Ut feugiat neque quis auctor rutrum.",
        podtytuł1: "Lorem",
        dodatkowyOpis1:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus ultricies efficitur mi quis dignissim. Maecenas molestie eu quam a rut",
        podtytuł2: "Ipsum",
        dodatkowyOpis2:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus ultricies efficitur mi quis dignissim. Maecenas molestie eu quam a rut",
        kategorie: ["torty na imprezy firmowe"],
        id: "3",
      },
      {
        plik: "IMG_8702.jpg",
        tytuł: "Tort z kwiatami4",
        metaTITLE: "Tort z kwiatami - Przesłodka.pl",
        metaDESC:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus ultricies efficitur mi quis dignissim. Maecenas molestie eu quam ",
        opis: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus ultricies efficitur mi quis dignissim. Maecenas molestie eu quam a rutrum. Ut feugiat neque quis auctor rutrum.",
        podtytuł1: "Lorem",
        dodatkowyOpis1:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus ultricies efficitur mi quis dignissim. Maecenas molestie eu quam a rut",
        podtytuł2: "Ipsum",
        dodatkowyOpis2:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus ultricies efficitur mi quis dignissim. Maecenas molestie eu quam a rut",
        kategorie: ["torty na roczek"],
        id: "4",
      },
    ],
    sweetTable: [
      {
        plik: "IMG_8702.jpg",
        tytuł: "fsdj z kwiatami5",
        metaTITLE: "Tort z kwiatami - Przesłodka.pl",
        metaDESC:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus ultricies efficitur mi quis dignissim. Maecenas molestie eu quam ",
        opis: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus ultricies efficitur mi quis dignissim. Maecenas molestie eu quam a rutrum. Ut feugiat neque quis auctor rutrum.",
        podtytuł1: "Lorem",
        dodatkowyOpis1:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus ultricies efficitur mi quis dignissim. Maecenas molestie eu quam a rut",
        podtytuł2: "Ipsum",
        dodatkowyOpis2:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus ultricies efficitur mi quis dignissim. Maecenas molestie eu quam a rut",
        kategorie: ["torty na roczek"],
        id: "5",
      },
    ],
    categories: [
      "torty dziecięce",
      "torty urodzinowe",
      "torty weselne",
      "torty piętrowe",
      "torty kobiece",
      "torty na chrzciny",
      "torty na rocznicę",
      "torty na roczek",
      "torty męskie",
      "torty komunijne",
      "torty na imprezy firmowe",
    ],
  },
  reducers: {
    fetchCakes: () => {},
    setCakes: (state, { payload: cakes }) => {
      state.cakes = cakes;
    },
    setSweets: (state, { payload: sweets }) => {
      state.sweetTable = sweets;
    },
    setCategories: (state, { payload: categories }) => {
      state.categories = categories;
    },
  },
});

export const { fetchCakes, setCakes, setCategories, setSweets } =
  cakeSlice.actions;

export const selectCakeState = (state) => state.cakes;
export const selectCakes = (state) => selectCakeState(state).cakes;
export const selectSweetTable = (state) => selectCakeState(state).sweetTable;
export const selectCategories = (state) => selectCakeState(state).categories;

export const getCakeById = (state, taskID) =>
  selectCakes(state).find(({ tytuł }) => tytuł === taskID);

export const getSweetById = (state, taskID) =>
  selectSweetTable(state).find(({ tytuł }) => tytuł === taskID);

export const getCakesByCategory = (state, category) =>
  selectCakes(state).filter((tort) => tort.kategorie.includes(category));

export const selectFetchStatus = (state) =>
  selectCakeState(state).fetchingTasks;

export default cakeSlice.reducer;
