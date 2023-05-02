import React, { useCallback, useState, useContext } from "react";
import { useNavigate, Link as ReactLink } from "react-router-dom";
import {
  Button,
  ActionButton,
  Dialog,
  DialogTrigger,
  Divider,
  Form,
  TextField,
  ButtonGroup,
  Checkbox,
  Footer,
  ContextualHelp,
  Text,
  Link,
  Content,
  Heading,
} from "@adobe/react-spectrum";
// React Context
import { AuthContext } from "../domain/store/provider/contexts";

export default function RegisterButton() {
  const { isAuthenticated, login } = useContext(AuthContext);
  let [mail, setMail] = useState("");
  let [pseudo, setPseudo] = useState("");
  let isMailValid = React.useMemo(
    () => /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(mail),
    [mail],
  );
  let isPseudoValid = React.useMemo(
    () => /^[a-zA-Z0-9]{1,9}$/.test(pseudo),
    [pseudo],
  );
  const [isChecked, setIsChecked] = useState({
    age: false,
    terms: false,
    legal: false,
  });

  const navigate = useNavigate();

  const handleSubClick = useCallback(() => {
    const { age, terms, legal } = isChecked;
    if (age && terms && legal && !isAuthenticated) {
      navigate("/");
      login(pseudo, mail);
      console.log("Successful register without supabase authentication");
    } else {
      console.error("Invalid credentials");
    }
  }, [navigate, isChecked, isAuthenticated, mail, pseudo]);

  const handleCheckboxChange = useCallback((value, name) => {
    setIsChecked((prev) => ({ ...prev, [name]: value }));
  }, []);

  return (
    <DialogTrigger type="modal">
      <ActionButton isQuiet>S'enregistrer</ActionButton>
      {(close) => (
        <Dialog>
          <Heading>Créer un nouveau compte</Heading>
          <Divider />
          <Content>
            <Form>
              <TextField
                isRequired
                necessityIndicator="icon"
                label="Renseigne simplement un Pseudo"
                validationState={isPseudoValid ? "valid" : "invalid"}
                autoFocus
                value={pseudo}
                onChange={setPseudo}
              />
              <TextField
                isRequired
                necessityIndicator="icon"
                label="Ton email"
                validationState={isMailValid ? "valid" : "invalid"}
                autoFocus
                value={mail}
                onChange={setMail}
              />
              <Checkbox
                isRequired
                necessityIndicator="icon"
                isSelected={isChecked.age}
                onChange={(value) => handleCheckboxChange(value, "age")}
              >
                J'ai plus de 18 ans et je suis capable
              </Checkbox>
              <Checkbox
                isRequired
                necessityIndicator="icon"
                isSelected={isChecked.terms}
                onChange={(value) => handleCheckboxChange(value, "terms")}
              >
                J'ai lu les conditions générales d'utilisation
              </Checkbox>
              <Checkbox
                isRequired
                necessityIndicator="icon"
                isSelected={isChecked.legal}
                onChange={(value) => handleCheckboxChange(value, "legal")}
              >
                J'ai lu les mentions légales
              </Checkbox>
            </Form>
          </Content>
          <ButtonGroup>
            <Button
              variant="secondary"
              style="fill"
              onPress={close}
              aria-label="Je décide de ne plus créer de compte"
            >
              Cancel
            </Button>
            <Button
              variant="secondary"
              style="outline"
              onPress={handleSubClick}
              autoFocus
              aria-label="Je décide créer un compte"
            >
              Confirm
            </Button>
          </ButtonGroup>
          <Footer>
            <ReactLink to="legal">Mentions Légales</ReactLink>
            <ReactLink to="terms">Conditions Générales d'utilisation</ReactLink>
            <ContextualHelp variant="help">
              <Heading level={2}>Qu'est-ce qu'un Magik Link ?</Heading>
              <Content>
                <Text>
                  Magik Link est un système d'authentification sans mot de passe
                  qui vous permet de vous connecter à notre application en
                  cliquant sur un lien unique envoyé par e-mail ou par SMS. Ce
                  système rend l'authentification plus simple et plus sécurisée.
                  Pour en savoir plus sur Magik Link, vous pouvez consulter le
                  site web de{" "}
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
          </Footer>
        </Dialog>
      )}
    </DialogTrigger>
  );
}
