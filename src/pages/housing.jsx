import React from "react";
import { useParams } from "react-router-dom";
import Carousel from "../components/carousel/carousel.jsx";
import HousingInfos from "../components/housing/housing_infos.jsx";
import Tags from "../components/tags/tags.jsx";
import Stars from "../components/rating/rating.jsx";
import Host from "../components/host/host.jsx";
import Collapse from "../components/collapse/collapse.jsx";
import logements from "../data/logements.json";
import Error404 from "./error.jsx";

export default function Housing() {
  // Get the id from the url
  const { id } = useParams();

  // Find the logement with the id from the url
  const selectedLogement = logements.find((logement) => logement.id === id);

  if (!selectedLogement) {
    return <Error404 />;
  }

  return (
    <div className="housing">
      <div className="housing__content">
        <Carousel pictures={selectedLogement.pictures} />
        <HousingInfos
          title={selectedLogement.title}
          location={selectedLogement.location}
        />
        <Tags tags={selectedLogement.tags} />
        <Stars rating={selectedLogement.rating} />
        <Host
          name={selectedLogement.host.name}
          picture={selectedLogement.host.picture}
        />
        <div className="collapses">
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
    </div>
  );
}
