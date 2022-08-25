import React from "react";
import "./ButtonsPokedex.css";

const ButtonPokedex = ({ buttons }) => {
  return buttons.map(({ class_name_button, icon, Call_back_button }) => (
    <button
      key={class_name_button}
      className={class_name_button}
      onClick={Call_back_button}
    >
      {icon}
    </button>
  ));
};

export { ButtonPokedex };
