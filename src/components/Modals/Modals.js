import React, { useContext } from "react";
import { Loading } from "./Loading/Loading";
import { Alert } from "./Alert/Alert";
import { Favorites } from "./Favorites/Favorites";
import { PokedexContext } from "../../context/index";

const Modals = () => {
  const {
    loading,
    error,
    setError,
    alertFavorite,
    setAlertFavorite,
    showFavorites,
  } = useContext(PokedexContext);

  return (
    <>
      {loading && <Loading />}
      {error.show && (
        <Alert 
          dataAlert={{data: error, state_data: setError, class_alert: "alert-error"}}
        />
      )}
      {alertFavorite.show && (
        <Alert
          dataAlert={{data: alertFavorite, state_data: setAlertFavorite, class_alert: "alert-favorite"}}
        />
      )}
      {showFavorites && <Favorites />}
    </>
  );
};

export { Modals };
