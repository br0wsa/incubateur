import React from "react";
import { Link } from "react-router-dom";
import {
  Breadcrumbs,
  Item,
  Heading,
  Content,
  Text,
} from "@adobe/react-spectrum";
import ContactLayout from "../../containers/ContactLayout";

export default function Contact() {
  return (
    <>
      <Content
        width={{
          XS: "95%",
          S: "95%",
          M: "90%",
          L: "66%",
          XL: "66%",
          XXL: "66%",
        }}
        margin="auto"
      >
        <Breadcrumbs size="M">
          <Item key="LastRelease">
            <Link to="/">Accueil</Link>
          </Item>
          <Item key="Contact">Contact</Item>
        </Breadcrumbs>
        <Heading level={1}>Contactez nous</Heading>
        <Text>Contacter la team CinéFile.</Text>
        <ContactLayout />
      </Content>
    </>
  );
}
