import React, { memo, useContext, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../domain/store/provider/contexts";
import Crop from "@spectrum-icons/workflow/Crop";
import LogOut from "@spectrum-icons/workflow/LogOut";
import Chat from "@spectrum-icons/workflow/Chat";
import Settings from "@spectrum-icons/workflow/Settings";
import Dashboard from "@spectrum-icons/workflow/Dashboard";

import {
  MenuTrigger,
  Menu,
  Item,
  ActionButton,
  Text,
} from "@adobe/react-spectrum";

import ConnectButton from "./ConnectButton";

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

  const handleChatClick = useCallback(() => {
    navigate("/chat");
  }, [navigate]);

  const handleDashboardClick = useCallback(() => {
    navigate("/dashboard");
  }, [navigate]);

  const handleMenuAction = useCallback(
    (key) => {
      switch (key) {
        case "signout":
          handleDisconnectClick();
          break;
        case "account":
          handleAccountClick();
          break;
        case "chat":
          handleChatClick();
          break;
        case "dashboard":
          handleDashboardClick();
          break;
        default:
          break;
      }
    },
    [
      handleDisconnectClick,
      handleAccountClick,
      handleChatClick,
      handleDashboardClick,
    ],
  );

  return (
    <>
      {isAuthenticated && (
        <MenuTrigger>
          <ActionButton
            aria-label="menu de gestion de votre compte"
            textValue="Se connecter"
          >
            <Crop />
          </ActionButton>
          <Menu onAction={handleMenuAction}>
            <Item key="signout" textValue="Se déconnecter">
              <LogOut />
              <Text>Se déconnecter</Text>
            </Item>
            <Item key="dashboard" textValue="Mon tableau de bord">
              <Dashboard />
              <Text>Favoris</Text>
            </Item>
            <Item key="chat" textValue="Chat en ligne">
              <Chat />
              <Text>Chat en ligne</Text>
            </Item>
            <Item key="account" textValue="Mes informations">
              <Settings />
              <Text>Mes informations</Text>
            </Item>
          </Menu>
        </MenuTrigger>
      )}
      {!isAuthenticated && (
        <>
          <ConnectButton />
        </>
      )}
    </>
  );
}

export default memo(ToggleNavButtons);
