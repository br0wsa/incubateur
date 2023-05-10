import React, { useState } from "react";
import {
  Button,
  Content,
  Dialog,
  DialogTrigger,
  SearchField,
} from "@adobe/react-spectrum";
import Search from "@spectrum-icons/workflow/Search";
import { v4 as uuidv4 } from "uuid";
import SearchCards from "../components/SearchCards";
import SearchMultiService from "../domain/TMDBService/serviceMulti";

const searchService = new SearchMultiService();

export default function MediaSearch() {
  const [currentText, setCurrentText] = useState("");
  const [medias, setMedias] = useState([]);

  const handleSearch = async () => {
    try {
      const data = await searchService.findAll({
        query: currentText ?? "last release",
      });
      setMedias(data);
    } catch (error) {
      console.error(error);
    }
  };

  const handleClear = () => {
    setCurrentText("");
  };

  const handleChange = (value) => {
    setCurrentText(value);
  };

  return (
    <>
      <DialogTrigger>
        <Button variant="secondary" aria-label="Ouvre la fenêtre de recherche">
          <Search />
        </Button>
        <Dialog isDismissable>
          <Content bottom="size-100">
            <SearchField
              autoFocus
              position="relative"
              width="100%"
              onClear={handleClear}
              onChange={handleChange}
              onSubmit={handleSearch}
              label="Faire une recherche..."
              value={currentText}
            />

            {medias.map((media) => (
              <SearchCards key={uuidv4()} media={media} />
            ))}
          </Content>
        </Dialog>
      </DialogTrigger>
    </>
  );
}
