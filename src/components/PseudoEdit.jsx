import React, { useCallback, useState, useContext, useMemo } from "react";

// adobe spectrum
import {
  Text,
  Form,
  TextField,
  Heading,
  Dialog,
  ActionButton,
  Divider,
  Content,
  ButtonGroup,
  Button,
  DialogTrigger,
} from "@adobe/react-spectrum";

// icon
import Edit from "@spectrum-icons/workflow/Edit";

// React Context
import { AuthContext } from "../domain/store/provider/contexts";

export default function PseudoEdit() {
  const { isAuthenticated, modifyUserPseudo, pseudo } = useContext(AuthContext);

  const [newPseudo, setNewPseudo] = useState("");

  const isPseudoValid = useMemo(
    () => /^[a-zA-Z0-9]{1,33}$/.test(newPseudo),
    [newPseudo],
  );

  const handleSave = useCallback(
    (close) => {
      if (isPseudoValid && isAuthenticated) {
        modifyUserPseudo(newPseudo);
        console.log(
          "Successful FAKE user's pseudo modification without SUPABASE",
        );
      } else {
        console.error("Invalid credentials");
      }
      close();
    },
    [isPseudoValid, isAuthenticated, modifyUserPseudo, newPseudo],
  );

  const handleCancel = useCallback((close) => {
    close();
  }, []);

  return (
    <DialogTrigger id="pseudo">
      <ActionButton>
        <Edit /> <Text>Modifier</Text>
      </ActionButton>
      {(close) => (
        <Dialog>
          <Heading>Pseudo</Heading>
          <Divider />
          <ButtonGroup>
            <Button variant="secondary" onPress={() => handleCancel(close)}>
              Annuler
            </Button>
            <Button
              autoFocus
              variant="accent"
              onPress={() => handleSave(close)}
              disabled={!isPseudoValid || !isAuthenticated}
            >
              Modifier
            </Button>
          </ButtonGroup>
          <Content>
            <Form>
              <TextField
                label={`Modifier mon pseudo : ${pseudo}`}
                validationState={isPseudoValid ? "valid" : "invalid"}
                autoFocus
                value={newPseudo}
                onChange={setNewPseudo}
              />
            </Form>
          </Content>
        </Dialog>
      )}
    </DialogTrigger>
  );
}
