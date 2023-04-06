import React from "react";
import { Link } from "react-router-dom";
import { Breadcrumbs, Item } from "@adobe/react-spectrum";
export default function MovieDetails() {
  return (
    <>
      <Breadcrumbs size="M">
        <Item key="LastRelease">
          <Link to="/">Accueil</Link>
        </Item>
        <Item key="MovieDetails">
          <Link to="/movie">La liste des films</Link>
        </Item>
        <Item key="MovieDetails">Le film en détail</Item>
      </Breadcrumbs>
      <div>MovieDetails</div>
    </>
  );
}
