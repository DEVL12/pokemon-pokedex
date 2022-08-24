import React from "react";
import "./ButtonsPokedex.css";

const ButtonPokedex = ({ NameClass, Call_back, children }) => {
  return (
    <button className={NameClass} type="button" onClick={Call_back}>
      {children}
    </button>
  );
};

const GroupOfButtons = ({ buttons }) => {
  return buttons.map(({ class_name_button, icon, Call_back_button }) => (
    <ButtonPokedex
      key={class_name_button}
      NameClass={class_name_button}
      Call_back={Call_back_button}
    >
      {icon}
    </ButtonPokedex>
  ));
};

export { ButtonPokedex, GroupOfButtons };
