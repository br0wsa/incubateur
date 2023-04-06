import React from "react";
import { Link } from "react-router-dom";
import { Breadcrumbs, Item } from "@adobe/react-spectrum";

export default function CGU() {
  return (
    <>
      <Breadcrumbs size="M">
        <Item key="LastRelease">
          <Link to="/">Accueil</Link>
        </Item>
        <Item key="CGU">Conditions Générales d'Utilisation</Item>
      </Breadcrumbs>
      <div>CGU</div>
    </>
  );
}
