import React from "react";
import Error from "../components/error/error_404.jsx";

export default function Error404() {
  return (
    <div className="errorContainer">
      <Error
        title={"404"}
        text={"Oups! La page que vous demandez n'existe pas."}
        link={"Retourner sur la page d'accueil"}
      />
    </div>
  );
}
