import React from "react";
import { Link } from "react-router-dom";
import { Breadcrumbs, Item } from "@adobe/react-spectrum";
export default function AnimationDetails() {
  return (
    <>
      <Breadcrumbs size="M">
        <Item key="LastRelease">
          <Link to="/">Accueil</Link>
        </Item>
        <Item key="AnimationList">
          <Link to="/animation">La liste des animations</Link>
        </Item>
        <Item key="AnimationDetails">L'animation en détail</Item>
      </Breadcrumbs>
      <div>AnimationDetails</div>
    </>
  );
}
