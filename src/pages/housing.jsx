import React from "react";
import { useParams } from "react-router-dom";
// import Carrousel from "../components/carrousel/carrousel.jsx";
// import HousingInfos from "../components/housing/housing_infos.jsx";
import Tags from "../components/tags/tags.jsx";
import Stars from "../components/rating/rating.jsx";
import Host from "../components/host/host.jsx";
import Collapse from "../components/collapse/collapse.jsx";
import logements from "../data/logements.json";

export default function Housing() {
  const { id } = useParams();

  const selectedLogement = logements.find((logement) => logement.id === id);

  if (!selectedLogement) {
    return <div>Logement non trouvé</div>;
  }

  return (
    <div className="housing">
      <div className="housing__content">
        {/* <Carrousel /> */}
        {/* <HousingInfos /> */}
        <Tags tags={selectedLogement.tags} />
        <Stars rating={selectedLogement.rating} />
        <Host
          name={selectedLogement.host.name}
          picture={selectedLogement.host.picture}
        />
        <Collapse
          title="Description"
          description={selectedLogement.description}
        />
        <Collapse
          title="Equipements"
          description={selectedLogement.equipments}
        />
      </div>
    </div>
  );
}
