import React, { useState } from "react";
import {
  MenuTrigger,
  ActionButton,
  Item,
  DialogContainer,
  Menu,
  Text,
} from "@adobe/react-spectrum";
import More from "@spectrum-icons/workflow/More";
import LoginModal from "./LoginModal";
import RegisterModal from "./RegisterModal";

export default function ConnectButton() {
  let [dialog, setDialog] = useState(null);

  return (
    <>
      <MenuTrigger>
        <ActionButton aria-label="Actions" textValue="Se connecter">
          <More />
        </ActionButton>
        <Menu onAction={setDialog}>
          <Item key="login">Se connecter</Item>
          <Item key="signup">S'enregistrer</Item>
        </Menu>
      </MenuTrigger>
      <DialogContainer onDismiss={() => setDialog(null)}>
        {dialog === "login" && <LoginModal />}
        {dialog === "signup" && <RegisterModal />}
      </DialogContainer>
    </>
  );
}
