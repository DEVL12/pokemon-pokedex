import {
  BsArrowRight,
  BsArrowLeft,
  BsArrowUp,
  BsArrowDown,
} from "react-icons/bs";
import { AiFillHeart } from "react-icons/ai";

const Buttons = (context) => {
  const { ChangePokemon, setShowFavorites } = context;
  return [
    {
      class_name_button: "btn-pokedex btn-lateral next-pokemon",
      icon: <BsArrowRight />,
      Call_back_button: () => ChangePokemon({ value: 1, context }),
    },
    {
      class_name_button: "btn-pokedex btn-lateral previous-pokemon",
      icon: <BsArrowLeft />,
      Call_back_button: () => ChangePokemon({ value: -1, context }),
    },
    {
      class_name_button: "btn-pokedex btn-vertical next-evolution-pokemon",
      icon: <BsArrowUp />,
      Call_back_button: () => alert("Boton para arriba"),
    },
    {
      class_name_button: "btn-pokedex btn-vertical previous-evolution-pokemon",
      icon: <BsArrowDown />,
      Call_back_button: () => alert("Boton para abajo"),
    },
    {
      class_name_button: "btn-pokedex add-favorite",
      icon: <AiFillHeart />,
      Call_back_button: () => alert("Boton para favorito"),
    },
    {
      class_name_button: "see-favorites",
      icon: <></>,
      Call_back_button: () => setShowFavorites(true),
    },
  ];
};

export { Buttons };
