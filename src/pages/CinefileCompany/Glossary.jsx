import React from "react";
import { Link } from "react-router-dom";
import { Breadcrumbs, Item } from "@adobe/react-spectrum";
export default function Glossary() {
  return (
    <>
      <Breadcrumbs size="M">
        <Item key="LastRelease">
          <Link to="/">Accueil</Link>
        </Item>
        <Item key="Glossary">Le glossaire</Item>
      </Breadcrumbs>
      <div>Glossary</div>
    </>
  );
}
