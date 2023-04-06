import React from "react";
import { Link } from "react-router-dom";
import { Breadcrumbs, Item } from "@adobe/react-spectrum";

export default function Dashboard() {
  return (
    <>
      <Breadcrumbs size="M">
        <Item key="LastRelease">
          <Link to="/">Accueil</Link>
        </Item>
        <Item key="Dashboard">Votre tableau de bord</Item>
      </Breadcrumbs>
      <div>Dashboard</div>
    </>
  );
}
