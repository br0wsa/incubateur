import React from "react";
import { Link } from "react-router-dom";
import { Breadcrumbs, Item } from "@adobe/react-spectrum";

export default function AnimationList() {
  return (
    <>
      <Breadcrumbs size="M">
        <Item key="LastRelease">
          <Link to="/">Accueil</Link>
        </Item>
        <Item key="AnimationList">La liste des animations</Item>
      </Breadcrumbs>
      <div>AnimationList</div>
    </>
  );
}
