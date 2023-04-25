import React from "react";
import { Grid, View } from "@adobe/react-spectrum";

export const CardConfigs = {
  movie: {
    title: "Movie",
    render: (data) => (
      <View>
        <p>"Films"</p>
        <p>{data}</p>
      </View>
    ),
  },
  lastRelease: {
    render: (data) => (
      <View>
        <p>"Last Release"</p>
        <p>{data}</p>
      </View>
    ),
  },
  actor: {
    title: "Artistes",
    render: (data) => (
      <View>
        <p>"Artistes"</p>
        <p>{data}</p>
      </View>
    ),
  },
  animation: {
    title: "Animations",
    render: (data) => (
      <View>
        <p>"Animations"</p>
        <p>{data}</p>
      </View>
    ),
  },
  series: {
    title: "Series",
    render: (data) => (
      <View>
        <p>"Series"</p>
        <p>{data}</p>
      </View>
    ),
  },
};
