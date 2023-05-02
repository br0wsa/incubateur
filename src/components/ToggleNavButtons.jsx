import React, { useContext, useMemo, useCallback, memo } from "react";
import { useNavigate } from "react-router-dom";

// React Context
import { AuthContext } from "../domain/store/provider/contexts";

import { Button, ButtonGroup } from "@adobe/react-spectrum";
import LoginButton from "./LoginButton";
import RegisterButton from "./RegisterButton";

function ToggleNavButtons() {
  const navigate = useNavigate();
  const { isAuthenticated, logout } = useContext(AuthContext);

  const handleDisconnectClick = useCallback(() => {
    if (isAuthenticated) {
      navigate("/");
      logout();
      console.log("Successful logout without supabase authentication");
    } else {
      console.error("Invalid credentials");
    }
    navigate("/");
  }, [isAuthenticated, navigate, logout]);

  const handleAccountClick = useCallback(() => {
    navigate("/account");
  }, [navigate]);

  // IF NOT CONNECTED
  const connectButton = useMemo(() => <LoginButton />);
  const subButton = useMemo(() => <RegisterButton />);

  // IF CONNECTED
  const disconnectButton = useMemo(
    () => (
      <Button variant="primary" onPress={handleDisconnectClick}>
        Se déconnecter
      </Button>
    ),
    [handleDisconnectClick],
  );

  const accountButton = useMemo(
    () => (
      <Button variant="primary" onPress={handleAccountClick}>
        Mon Compte
      </Button>
    ),
    [handleAccountClick],
  );

  return useMemo(
    () => (
      <ButtonGroup orientation="vertical" align="end">
        {isAuthenticated ? disconnectButton : connectButton}
        {isAuthenticated ? accountButton : subButton}
      </ButtonGroup>
    ),
    [
      isAuthenticated,
      disconnectButton,
      connectButton,
      accountButton,
      subButton,
    ],
  );
}

export default memo(ToggleNavButtons);
