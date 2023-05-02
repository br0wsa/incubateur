import React, { useContext } from "react";
import {
  Well,
  Heading,
  View,
  StatusLight,
  Badge,
  Flex,
} from "@adobe/react-spectrum";

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
      <View
        borderWidth="thin"
        borderColor="dark"
        borderRadius="medium"
        padding="size-250"
        marginY="size-250"
      >
        <Flex direction="column" marginY="size-250">
          <Heading level={2}>Status</Heading>
          {userStatus}
          <Heading level={2}>Pseudo</Heading>
          <Well role="section" aria-labelledby="pseudo">
            {pseudo}
          </Well>
          <PseudoEdit />
          <Heading level={2}>Email</Heading>
          <Well role="section" aria-labelledby="email">
            {email}
          </Well>
          <EmailEdit />
        </Flex>
      </View>
      <Flex justifyContent="end">
          <AccountDelete />
      </Flex>
    </View>
  );
}
