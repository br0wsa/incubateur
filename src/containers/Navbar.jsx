import React, { useContext } from "react";

import HomeCinemaIcon from "../components/HomeCinemaIcon";
import Labels from "../components/Labels";
import Search from "../components/Search";
import ToggleNavButtons from "../components/ToggleNavButtons";
import { Flex, Header, View, Grid } from "@adobe/react-spectrum";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

export default function Navbar() {
  return (
    <>
      <Header marginBottom="size-300">
        <Grid
          height="100%"
          justifyItems="center"
          alignItems="center"
          justifyContent="space-evenly"
          gap="size-100"
          areas={{
            XS: ["logo sub", "nav nav"],
            S: ["logo sub", "nav nav"],
            M: ["logo sub", "nav nav"],
            L: ["logo nav sub", "logo nav sub"],
            XL: ["logo nav sub", "logo nav sub"],
            XXL: ["logo nav sub", "logo nav sub"],
          }}
          columns={{
            XS: ["1fr", "1fr"],
            S: ["1fr", "1fr"],
            M: ["1fr", "1fr"],
            L: ["1fr", "2fr", "1fr"],
            XL: ["1fr", "2fr", "1fr"],
            XXL: ["1fr", "2fr", "1fr"],
          }}
          rows={{
            XS: ["size-1000", "size-1000"],
            S: ["size-900", "size-900"],
            M: ["size-800", "size-800"],
            L: ["size-700", "size-700"],
            XL: ["size-600", "size-600"],
            XXL: ["size-500", "size-500"],
          }}
        >
          <View gridArea="logo" marginTop="size-200">
            <Link to="/" aria-label="Accueil">
              <HomeCinemaIcon aria-label="Logo" size="XXL" />
            </Link>
          </View>
          <View gridArea="sub">
            <ToggleNavButtons />
          </View>

          <View
            marginTop="size-200"
            marginBottom="size-100"
            gridArea="nav"
            order={{ XS: 3, S: 3, M: 2 }}
          >
            <Flex direction="column" gap="size-100" alignItems="center">
              <Search
                alignSelf="center"
                maxWidth="size-800"
                marginBottom="size-200"
              />
              <Labels alignSelf="center" maxWidth="size-800" />
            </Flex>
          </View>
        </Grid>
      </Header>
    </>
  );
}
