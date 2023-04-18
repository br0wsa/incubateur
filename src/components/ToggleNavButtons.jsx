import React, { useContext, useMemo, useCallback, memo } from "react";
import { useNavigate } from "react-router-dom";

// React Context
import { AuthContext } from "../domain/store/provider/contexts";

import { Button, ButtonGroup } from "@adobe/react-spectrum";

function ToggleNavButtons() {
  const navigate = useNavigate();

  const { auth, setAuth, isAuthenticated, login, logout } =
    useContext(AuthContext);

  const handleConnectClick = useCallback(() => {
    navigate("/login");
  }, [navigate]);

  const handleDisconnectClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const handleSubClick = useCallback(() => {
    navigate("/signup");
  }, [navigate]);

  const handleAccountClick = useCallback(() => {
    navigate("/account");
  }, [navigate]);

  const connectButton = useMemo(
    () => (
      <Button variant="primary" onPress={handleConnectClick}>
        Se connecter
      </Button>
    ),
    [handleConnectClick],
  );

  const disconnectButton = useMemo(
    () => (
      <Button variant="primary" onPress={handleDisconnectClick}>
        Se déconnecter
      </Button>
    ),
    [handleDisconnectClick],
  );

  const subButton = useMemo(
    () => (
      <Button variant="primary" onPress={handleSubClick}>
        S'enregistrer
      </Button>
    ),
    [handleSubClick],
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
