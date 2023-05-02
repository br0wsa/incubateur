import React, { useCallback, useContext } from "react";
import { useNavigate } from "react-router-dom";
import {
  Text,
  Button,
  AlertDialog,
  DialogTrigger,
} from "@adobe/react-spectrum";
import Delete from "@spectrum-icons/workflow/Delete";
import { AuthContext } from "../domain/store/provider/contexts";

export default function AccountDelete() {
  const navigate = useNavigate();
  const { isAuthenticated, logout } = useContext(AuthContext);

  const handleDeleteAccount = useCallback(() => {
    if (isAuthenticated) {
      logout();
      console.log("Successful FAKE logout without SUPABASE");
    }
    navigate("/");
  }, [isAuthenticated, logout, navigate]);

  return (
    <DialogTrigger>
      <Button
        aria-label="Supprimer mon compte"
        marginY="size-225"
        variant="negative"
      >
        <Delete />
        <Text>Supprimer mon compte</Text>
      </Button>
      <AlertDialog
        variant="destructive"
        title="Suppression de compte"
        primaryActionLabel="Supprimer"
        cancelLabel="Annuler"
        onPrimaryAction={handleDeleteAccount}
      >
        Cette action va supprimer définitivement votre compte. Continuer?
      </AlertDialog>
    </DialogTrigger>
  );
}
