import {
  BsArrowRight,
  BsArrowLeft,
  BsArrowUp,
  BsArrowDown,
} from "react-icons/bs";
import { AiFillHeart, AiOutlineSearch } from "react-icons/ai";
import { CgClose } from "react-icons/cg";

const Buttons = (context, btn) => {
  const { ChangePokemon, setShowFavorites } = context;
  const all_bnts = [
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
      icon: "",
      Call_back_button: () => setShowFavorites(true),
    },
    {
      class_name_button: "close-favorite",
      icon: <CgClose />,
      Call_back_button: () => setShowFavorites(false),
    },
    {
      class_name_button: "search-button",
      icon: <AiOutlineSearch/>,
      Call_back_button: () => onsubmit,
    },
  ];

  return btn.map((num) => all_bnts[num]);
};

export { Buttons };
