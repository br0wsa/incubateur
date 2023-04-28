import React from "react";
import { Link } from "react-router-dom";
import useSticky from "../utils/useSticky";
import {
  Item,
  TabList,
  TabPanels,
  Tabs,
  Text,
  View,
  ActionButton,
  Footer,
} from "@adobe/react-spectrum";
import ArrowUp from "@spectrum-icons/workflow/ArrowUp";

export default function FooterContainer() {
  const isSticky = useSticky();

  const handleTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <Footer
      bottom="static-size-0"
      zIndex="7"
      position={isSticky ? "sticky" : "static"}
    >
      <View colorVersion="6" backgroundColor="gray-100">
        {isSticky && (
          <ActionButton
            position="fixed"
            bottom="size-3000"
            right="size-500"
            zIndex="7"
            onPress={handleTop}
            aria-label="aller en haut de la page"
          >
            <ArrowUp aria-label="image de flèche vers le haut" />
          </ActionButton>
        )}
        <Tabs>
          <TabList
            aria-label="Pied de page"
            defaultSelectedKey="1"
            density="compact"
          >
            <Item id="1">Glossaire</Item>
            <Item id="2">Consulter les CGU</Item>
            <Item id="3">A propos</Item>
            <Item id="4">Nous contacter</Item>
            <Item id="5">Mentions légales</Item>
          </TabList>
          <TabPanels>
            <Item id="1">
              <Text>
                Consultez notre <Link to="/glossary">glossaire</Link> pour
                comprendre les termes techniques utilisés sur notre site Web.
              </Text>
            </Item>
            <Item id="2">
              <Text>
                Veuillez consulter nos{" "}
                <Link to="/terms">conditions générales d'utilisation</Link> pour
                comprendre les règles et les limites de l'utilisation de notre
                site Web.
              </Text>
            </Item>
            <Item id="3">
              <Text>
                Pour en savoir plus sur notre application, veuillez consulter la
                page{" "}
              </Text>
              <Link to="/about">à propos.</Link>
            </Item>
            <Item id="4">
              <Text>
                Contactez la Team CinéFile en utilisant le lien suivant :{" "}
              </Text>
              <Link to="/contact">contact.</Link>
            </Item>
            <Item id="5">
              <Text>
                Veuillez consulter nos <Link to="/legal">mentions légales</Link>{" "}
                pour comprendre les règles régissant notre site Web et son
                utilisation.
              </Text>
            </Item>
          </TabPanels>
        </Tabs>
      </View>
    </Footer>
  );
}
