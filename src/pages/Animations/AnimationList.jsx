import React from "react";
import { Link } from "react-router-dom";
import {
  Breadcrumbs,
  Item,
  Heading,
  Content,
  Text,
  Divider,
} from "@adobe/react-spectrum";
import CardsLayout from "../../containers/CardsLayout";
import { ANIMATION_DATA_TYPE } from "../../domain/redux/action-data";
export default function AnimationList() {
  return (
    <>
      <Content
              width={{
                XS: "95%",
                S: "95%",
                M: "80%",
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
          <Item key="AnimationList">La liste des animations</Item>
        </Breadcrumbs>
        <Heading level={1}>Les animations populaires</Heading>
        <Divider size="S" marginY="size-100" />
        <Text>
          Retrouvez les films d'animation qui ont fait vibrer votre enfance et
          ceux qui continuent de faire rêver les plus jeunes.
        </Text>
        <CardsLayout dataType={ANIMATION_DATA_TYPE} />
      </Content>
    </>
  );
}
