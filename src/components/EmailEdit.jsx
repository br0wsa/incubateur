import React, { useCallback, useContext, useMemo, useState } from "react";

import {
  ActionButton,
  Button,
  ButtonGroup,
  Content,
  Dialog,
  DialogTrigger,
  Divider,
  Form,
  Heading,
  TextField,
  Text,
} from "@adobe/react-spectrum";

import Edit from "@spectrum-icons/workflow/Edit";

import { AuthContext } from "../domain/store/provider/contexts";

export default function EmailEdit() {
  const { isAuthenticated, modifyUserEmail, email } = useContext(AuthContext);

  const [newEmail, setNewEmail] = useState("");

  const isEmailValid = useMemo(
    () => /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(newEmail),
    [newEmail],
  );

  const handleSave = useCallback(
    (close) => {
      if (isEmailValid && isAuthenticated) {
        modifyUserEmail(newEmail);
        console.log("Successful user's email modification without SUPABASE");
      } else {
        console.error("Invalid credentials");
      }
      close();
    },
    [isEmailValid, isAuthenticated, modifyUserEmail, newEmail],
  );

  const handleCancel = useCallback((close) => {
    close();
  }, []);

  return (
    <DialogTrigger id="email">
      <ActionButton>
        <Edit />
        <Text>Modifier</Text>
      </ActionButton>
      {(close) => (
        <Dialog>
          <Heading>Email</Heading>
          <Divider />
          <ButtonGroup>
            <Button variant="secondary" onPress={() => handleCancel(close)}>
              <Text>Cancel</Text>
            </Button>
            <Button
              autoFocus
              variant="accent"
              onPress={() => handleSave(close)}
              isDisabled={!isEmailValid || !isAuthenticated}
            >
              <Text>Save</Text>
            </Button>
          </ButtonGroup>
          <Content>
            <Form>
              <TextField
                label={`Modifier mon email : ${email}`}
                validationState={isEmailValid ? "valid" : "invalid"}
                autoFocus
                value={newEmail}
                onChange={setNewEmail}
              />
            </Form>
          </Content>
        </Dialog>
      )}
    </DialogTrigger>
  );
}
