import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Footer } from "@adobe/react-spectrum";
import {
  Item,
  TabList,
  TabPanels,
  Tabs,
  Text,
  ContextualHelp,
  Heading,
  Content,
  ActionButton,
} from "@adobe/react-spectrum";
import { TextField, Label, Input } from "react-aria-components";

// React Context
import { AuthContext } from "../domain/store/provider/contexts";
import Edit from "@spectrum-icons/workflow/Edit";

export default function FooterContainer() {
  const { auth, setAuth, isAuthenticated, login, logout } =
    useContext(AuthContext);

  return (
    <Footer>
      <Tabs>
        <TabList
          aria-label="Pied de page"
          defaultSelectedKey="1"
          density="compact"
        >
          <Item id="1">Nous contacter</Item>
          <Item id="2">Consulter les CGU</Item>
          <Item id="3">A propos</Item>
          <Item id="4">Glossaire</Item>
          <Item id="5">Mentions légales</Item>
        </TabList>
        <TabPanels>
          <Item id="1">
            <Text>
              Contactez la Team CinéFile en utilisant le lien suivant :{" "}
            </Text>
            <Link to="/contact">contact.</Link>
            <br />
            {isAuthenticated && (
              <label>
                <TextField>
                  <Label>Laissez votre avis : </Label>
                  <Input />
                  <br />
                  <ActionButton
                    margin="size-150"
                    aria-label="Publier votre avis"
                  >
                    <Edit />
                    <Text>Publier</Text>
                  </ActionButton>
                  <ContextualHelp>
                    <Heading>🧭 Vos avis</Heading>
                    <Content>
                      Cher utilisateur, nous apprécions grandement votre intérêt
                      pour notre application. Nous sommes constamment à la
                      recherche de moyens pour améliorer votre expérience sur
                      notre site et vos commentaires sont précieux pour nous.
                      Nous vous encourageons donc à partager vos suggestions
                      d'amélioration, vos avis ou vos commentaires en utilisant
                      la fonctionnalité ci-dessous. Veuillez noter que tous les
                      commentaires seront soumis à une modération afin de
                      garantir un environnement respectueux et constructif pour
                      tous les utilisateurs. Nous sommes impatients de vous
                      entendre et de continuer à améliorer notre plateforme pour
                      mieux répondre à vos besoins. Merci de votre participation
                      !
                    </Content>
                  </ContextualHelp>
                </TextField>
              </label>
            )}
            <br />
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
              Consultez notre <Link to="/glossary">glossaire</Link> pour
              comprendre les termes techniques utilisés sur notre site Web.
            </Text>
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
    </Footer>
  );
}
