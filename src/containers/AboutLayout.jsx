import React, { useState, useLayoutEffect } from "react";
import { fetchData } from "../utils/fetchJson";
import { Grid, View, Badge, Heading, Well, Link } from "@adobe/react-spectrum";

export default function AboutLayout() {
  const [nom, setNom] = useState("");
  const [description, setDescription] = useState("");
  const [version, setVersion] = useState("");
  const [url, setUrl] = useState("");
  const [licence, setLicence] = useState("");
  const [techs, setTechs] = useState([]);
  const [features, setFeatures] = useState([]);
  const [api, setApi] = useState({ source: "", bddlicence: "" });

  useLayoutEffect(() => {
    const fetchAbout = async () => {
      try {
        const data = await fetchData("aPropos.json");
        const {
          nom,
          description,
          version,
          url,
          licence,
          API,
          technologies_utilisées,
          fonctionnalités,
        } = data;
        setNom(nom);
        setDescription(description);
        setVersion(version);
        setUrl(url);
        setLicence(licence);
        setApi(API);
        setTechs(technologies_utilisées);
        setFeatures(fonctionnalités);
      } catch (error) {
        console.error(error);
      }
    };

    fetchAbout();
  }, []);

  return (
    <View>
      <Well role="information de l'application" aria-labelledby="nom">
        <Heading level={5} id="nom">
          {nom}
        </Heading>
        <br />
        <Heading level={6}>APP : {description}</Heading>
        <br />
        <Heading level={6}>VERSION : {version}</Heading>
        <br />
        <Heading level={6}>LICENCE : {licence}</Heading>
        <br />
        <Heading level={6}>
          INCUBATEUR : <Link>{url}</Link>
        </Heading>
      </Well>

      <Well role="technologies" aria-labelledby="technologies">
        <Heading level={5} id="technologies">
          Technologies utilisées
        </Heading>
        <Grid
          columns={{
            XS: ["1fr", "1fr", "1fr"],
            S: ["1fr", "1fr", "1fr"],
            M: ["1fr", "1fr", "1fr", "1fr"],
            L: ["1fr", "1fr", "1fr", "1fr"],
            XL: ["1fr", "1fr", "1fr", "1fr"],
            XXL: ["1fr", "1fr", "1fr", "1fr"],
          }}
          gap="size-100"
        >
          {techs.map((tech) => {
            return (
              <Badge variant="info" key={tech}>
                {tech}
              </Badge>
            );
          })}
        </Grid>
      </Well>
      <Well role="api" aria-labelledby="api">
        <Heading level={5} id="api">
          API
        </Heading>
        <br />
        <Heading level={6}>
          <Link>{api.source}</Link>
        </Heading>

        <br />
        <Heading level={6}>{api.bddlicence}</Heading>
      </Well>
      <Well role="fonctionnalites" aria-labelledby="fonctionnalites">
        <Heading level={5} id="fonctionnalites">
          Fonctionnalités
        </Heading>
        <Grid columns="1fr" gap="size-100">
          {features.map((feature) => {
            return (
              <Badge variant="purple" key={feature}>
                {feature}
              </Badge>
            );
          })}
        </Grid>
      </Well>
    </View>
  );
}
