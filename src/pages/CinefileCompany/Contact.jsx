import React from "react";
import { Link } from "react-router-dom";
import { Breadcrumbs, Item } from "@adobe/react-spectrum";
export default function Contact() {

  return (
    <>
      <Breadcrumbs size="M">
        <Item key="LastRelease">
          <Link to="/">Accueil</Link>
        </Item>
        <Item key="Contact">Contact</Item>
      </Breadcrumbs>
      <div>Contact</div>
    </>
  );
}
