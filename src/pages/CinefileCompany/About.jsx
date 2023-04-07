import React from "react";
import { Link } from "react-router-dom";
import { Breadcrumbs, Item } from "@adobe/react-spectrum";

export default function About() {
  return (
    <>
      <Breadcrumbs size="M">
        <Item key="LastRelease">
          <Link to="/">Accueil</Link>
        </Item>
        <Item key="Signup">S'enregistrer</Item>
      </Breadcrumbs>
      <div>About</div>
    </>
  );
}