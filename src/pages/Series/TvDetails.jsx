import React from "react";
import { Link } from "react-router-dom";
import { Breadcrumbs, Item } from "@adobe/react-spectrum";
export default function TvDetails() {
  return (
    <>
      <Breadcrumbs size="M">
        <Item key="LastRelease">
          <Link to="/">Accueil</Link>
        </Item>
        <Item key="TvList">
          <Link to="/tv">La liste des séries</Link>
        </Item>
        <Item key="TvDetails">La série en détail</Item>
      </Breadcrumbs>
      <div>TvDetails</div>
    </>
  );
}
