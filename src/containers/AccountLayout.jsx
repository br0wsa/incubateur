import React, { useContext } from "react";
import {
  Well,
  Heading,
  View,
  StatusLight,
  Badge,
  Flex,
} from "@adobe/react-spectrum";
import DarkModeSwitch from "../components/DarkModeSwitch";

// React Context
import { AuthContext, StatusContext } from "../domain/store/provider/contexts";
import AccountDelete from "../components/AccountDelete";
import PseudoEdit from "../components/PseudoEdit";
import EmailEdit from "../components/EmailEdit";

export default function AccountLayout() {
  const { status } = useContext(StatusContext);
  const { isAuthenticated, pseudo, email } = useContext(AuthContext);

  const userStatus =
    isAuthenticated && status.admin ? (
      <Badge variant="positive">Administrateur</Badge>
    ) : isAuthenticated && status.softBanned ? (
      <Badge variant="negative">Banni en douceur</Badge>
    ) : (
      <StatusLight variant="positive">Vous êtes en ligne</StatusLight>
    );

  return (
    <View>
      <Flex
        direction="row"
        gap="size-100"
        wrap="wrap"
        justifyContent="space-between"
        alignContent="center"
      >
        <View
          colorVersion={6}
          backgroundColor="fuchsia-100"
          borderWidth="thin"
          borderColor="dark"
          borderRadius="medium"
          padding="size-250"
          marginY="size-250"
          width="size-3000"
        >
          <Heading level={5}>Status</Heading>
          {userStatus}
        </View>

        <View
          colorVersion={6}
          backgroundColor="fuchsia-100"
          borderWidth="thin"
          borderColor="dark"
          borderRadius="medium"
          padding="size-250"
          marginY="size-250"
          width="size-3000"
        >
          <Heading level={5}>Pseudo</Heading>
          <Well role="section" aria-labelledby="pseudo" marginY="size-100">
            <Heading level={6}>{pseudo}</Heading>
          </Well>
          <PseudoEdit />
        </View>
        <View
          colorVersion={6}
          backgroundColor="fuchsia-100"
          borderWidth="thin"
          borderColor="dark"
          borderRadius="medium"
          padding="size-250"
          marginY="size-250"
          width="size-3000"
        >
          <Heading level={5}>Email</Heading>
          <Well role="section" aria-labelledby="email" marginY="size-100">
            <Heading level={6}>{email}</Heading>
          </Well>
          <EmailEdit />
        </View>
        <View
          colorVersion={6}
          backgroundColor="fuchsia-100"
          borderWidth="thin"
          borderColor="dark"
          borderRadius="medium"
          padding="size-100"
          marginY="size-250"
          width="size-3000"
        >
          <Heading level={5}>Thème</Heading>
          <Well marginY="size-100">Changer en mode sombre ou clair</Well>
          <DarkModeSwitch />
        </View>
      </Flex>

      <Flex justifyContent="end">
        <AccountDelete />
      </Flex>
    </View>
  );
}
