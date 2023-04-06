import React from "react";
import { Link } from "react-router-dom";
import { Breadcrumbs, Item } from "@adobe/react-spectrum";

export default function LegalMentions() {
  return (
    <>
      <Breadcrumbs size="M">
        <Item key="LastRelease">
          <Link to="/">Accueil</Link>
        </Item>
        <Item key="LegalMentions">Les mentions légales</Item>
      </Breadcrumbs>
      <div>LegalMentions</div>
    </>
  );
}
