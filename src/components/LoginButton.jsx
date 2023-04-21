import React from "react";
import { ActionButton, DialogTrigger } from "@adobe/react-spectrum";
import LoginModal from "./LoginModal";

export default function LoginButton() {
  return (
    <DialogTrigger>
      <ActionButton isQuiet>Se connecter</ActionButton>
      {(close) => <LoginModal close={close} />}
    </DialogTrigger>
  );
}
