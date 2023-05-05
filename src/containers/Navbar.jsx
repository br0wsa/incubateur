import React from "react";
import { Link } from "react-router-dom";

import HomeCinemaIcon from "../components/HomeCinemaIcon";
import Labels from "../components/Labels";
import Search from "../components/Search";
import ToggleNavButtons from "../components/ToggleNavButtons";

// hooks for positioning
import useSticky from "../utils/useSticky";

import { Flex, Header, View, Grid, Text } from "@adobe/react-spectrum";

export default function Navbar() {
  const isSticky = useSticky();

  return (
    <>
      <Header
        top="static-size-0"
        zIndex="7"
        position={isSticky ? "sticky" : "static"}
        height={{
          XS: "size-1000",
          S: "size-1000",
          M: "size-1000",
          L: "size-1000",
          XL: "size-1000",
          XXL: "size-1000",
        }}
      >
        <View colorVersion={6} backgroundColor="gray-100">
          <Grid
            height="100%"
            justifyItems="center"
            alignItems="center"
            justifyContent="space-between"
            columns={["1fr", "1fr", "1fr"]}
          >
            <View marginTop="size-100">
              <Flex>
                <Link to="/" aria-label="Accueil">
                  <HomeCinemaIcon aria-label="Logo" size="XL" />
                </Link>
                <Text>CinéFile</Text>
              </Flex>
            </View>

            <View>
              <Flex>
                <Search />
              </Flex>
            </View>

            <View>
              <ToggleNavButtons />
            </View>
          </Grid>
        </View>
      </Header>
      {/* <Labels alignSelf="center" maxWidth="size-800" /> */}
    </>
  );
}
