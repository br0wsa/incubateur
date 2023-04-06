import React from "react";
import { Link } from "react-router-dom";
import { Breadcrumbs, Item } from "@adobe/react-spectrum";

export default function ActorsList() {
  return (
    <>
      <Breadcrumbs size="M">
        <Item key="home">
          <Link to="/">Accueil</Link>
        </Item>
        <Item key="actorsList">La liste des artistes</Item>
      </Breadcrumbs>
      <div>ActorsList</div>
    </>
  );
}
