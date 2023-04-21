import React, { useCallback, useState } from "react";
import { useNavigate } from "react-router-dom";
import Book from "@spectrum-icons/workflow/Book";
import {
  Button,
  Flex,
  Text,
  Heading,
  Header,
  Link,
  Divider,
  Content,
  Form,
  TextField,
  ContextualHelp,
  Footer,
  ButtonGroup,
  Dialog,
} from "@adobe/react-spectrum";

export default function LoginModal({ close }) {
  const navigate = useNavigate();

  let [value, setValue] = useState("");

  let isValid = React.useMemo(
    () => /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(value),
    [value],
  );

  const handleConnectClick = useCallback(() => {
    isValid && navigate("/");
    console.log(value);
  }, [navigate]);

  return (
    <Dialog>
      <Heading>
        <Flex alignItems="center" gap="size-100">
          <Book size="S" />
          <Text>Se connecter</Text>
        </Flex>
      </Heading>
      <Header>
        <Link>
          <a href="https://supabase.com/docs" target="_blank">
            Magik Link Documentation
          </a>
        </Link>
      </Header>
      <Divider />
      <Content>
        <Form>
          <TextField
            label="Email"
            validationState={isValid ? "valid" : "invalid"}
            autoFocus
            value={value}
            onChange={setValue}
          />
        </Form>
      </Content>
      <Footer>
        <ContextualHelp variant="help">
          <Heading level={2}>Qu'est-ce qu'un Magik Link ?</Heading>
          <Content>
            <Text>
              Notre application utilise un système d'authentification sans mot
              de passe appelé Magik Link. Cela signifie que lorsque vous
              souhaitez vous connecter, vous recevrez un lien unique par e-mail
              ou par SMS. En cliquant sur ce lien, vous serez automatiquement
              connecté à notre application sans avoir besoin de saisir un nom
              d'utilisateur et un mot de passe. Cela rend l'authentification
              plus simple pour vous et renforce également la sécurité de notre
              application. Si vous avez des questions sur l'utilisation de Magik
              Link, n'hésitez pas à nous contacter.
            </Text>
            <Link>
              <a href="https://supabase.io" target="_blank">
                Supabase.io
              </a>
            </Link>
          </Content>

          <Footer>
            <Link>
              <a href="https://supabase.com/docs" target="_blank">
                Magik Link Documentation
              </a>
            </Link>
          </Footer>
        </ContextualHelp>
      </Footer>
      <ButtonGroup>
        <Button
          variant="secondary"
          style="fill"
          onPress={close}
          aria-label="Je ne me connecte plus"
        >
          Annuler
        </Button>
        <Button
          variant="secondary"
          style="outline"
          onPress={handleConnectClick}
          aria-label="Je décide de me connecter"
        >
          Se connecter
        </Button>
      </ButtonGroup>
    </Dialog>
  );
}
