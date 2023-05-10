import React from "react";
import { Link } from "react-router-dom";

import HomeCinemaIcon from "../components/HomeCinemaIcon";
import ToggleNavButtons from "../components/ToggleNavButtons";
import MediaSearch from "../components/MediaSearch";
// hooks for positioning
import useSticky from "../utils/useSticky";

import { Flex, Header, View, Grid, Text, Button } from "@adobe/react-spectrum";

export default function Navbar() {
  const isSticky = useSticky();

  return (
    <>
      <Header
        // marginY="100"
        top="static-size-0"
        zIndex="7"
        position={isSticky ? "sticky" : "static"}
        height={{
          XS: "auto",
          S: "auto",
          M: "auto",
          L: "auto",
          XL: "auto",
          XXL: "auto",
        }}
      >
        <View colorVersion={6} backgroundColor="gray-100" width="auto">
          <Grid
            height="100%"
            // justifyItems="center"
            alignItems="center"
            justifyContent="space-between"
            columns={["1fr", "2fr"]}
          >
            <View
              marginTop="size-100"
              justifySelf="left"
              marginStart="size-200"
            >
              <Flex>
                <Link to="/" aria-label="Accueil">
                  <HomeCinemaIcon aria-label="Logo" size="XL" />
                </Link>
                <Text>CinéFile</Text>
              </Flex>
            </View>

            <View width="auto" justifySelf="right" marginEnd="size-200">
              <Flex gap="size-300">
                <MediaSearch />
                <ToggleNavButtons />
              </Flex>
            </View>
          </Grid>
        </View>
      </Header>
      {/* <Labels alignSelf="center" maxWidth="size-800" /> */}
    </>
  );
}
