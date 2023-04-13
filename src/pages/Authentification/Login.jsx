import React from "react";
import { Link as RouterLink } from "react-router-dom";

import {
  Breadcrumbs,
  Item,
  Heading,
  Content,
  Text,
  Divider,
  ContextualHelp,
  Footer,
  Link,
} from "@adobe/react-spectrum";

export default function Login() {
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
            <RouterLink to="/">Accueil</RouterLink>
          </Item>
          <Item key="Login">Se connecter</Item>
        </Breadcrumbs>
        <Heading level={1}> Se connecter </Heading>
        <ContextualHelp variant="help">
          <Heading level={2}>Qu'est-ce qu'un Magik Link ?</Heading>
          <Content>
            <Text>
              Magik Link est un système d'authentification sans mot de passe qui
              vous permet de vous connecter à notre application en cliquant sur
              un lien unique envoyé par e-mail ou par SMS. Ce système rend
              l'authentification plus simple et plus sécurisée. Pour en savoir
              plus sur Magik Link, vous pouvez consulter le site web de{" "}
              <Link>
                <a href="https://supabase.io" target="_blank">
                  Supabase.io
                </a>
              </Link>
            </Text>
          </Content>

          <Footer>
            <Link>
              <a href="https://supabase.com/docs" target="_blank">
                Magik Link Documentation
              </a>
            </Link>
          </Footer>
        </ContextualHelp>

        <Text>
          Notre application utilise un système d'authentification sans mot de
          passe appelé Magik Link. Cela signifie que lorsque vous souhaitez vous
          connecter, vous recevrez un lien unique par e-mail ou par SMS. En
          cliquant sur ce lien, vous serez automatiquement connecté à notre
          application sans avoir besoin de saisir un nom d'utilisateur et un mot
          de passe. Cela rend l'authentification plus simple pour vous et
          renforce également la sécurité de notre application. Si vous avez des
          questions sur l'utilisation de Magik Link, n'hésitez pas à nous
          contacter.
        </Text>
        <Divider size="S" marginY="size-100" />
      </Content>
    </>
  );
}
