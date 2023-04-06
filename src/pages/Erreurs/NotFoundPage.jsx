import React from "react";
import { Link } from "react-router-dom";
import { Breadcrumbs, Item } from "@adobe/react-spectrum";
export default function NotFoundPage() {
  return (
    <>
      <Breadcrumbs size="M">
        <Item key="LastRelease">
          <Link to="/">Accueil</Link>
        </Item>
        <Item key="NotFoundPage">La page est inexistante</Item>
      </Breadcrumbs>
      <div>NotFoundPage</div>
    </>
  );
}
