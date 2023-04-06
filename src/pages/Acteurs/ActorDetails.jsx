import React from "react";
import { Link } from "react-router-dom";
import { Breadcrumbs, Item } from "@adobe/react-spectrum";

export default function ActorDetails() {
  return (
    <>
      <Breadcrumbs size="M">
        <Item key="LastRelease">
          <Link to="/">Accueil</Link>
        </Item>
        <Item key="ActorsList">
          <Link to="/actor">La liste des artites</Link>
        </Item>
        <Item key="ActorDetails">L'artiste en détail</Item>
      </Breadcrumbs>
      <div>ActorDetails</div>
    </>
  );
}
