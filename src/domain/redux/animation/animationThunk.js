import { createAsyncThunk } from "@reduxjs/toolkit";
import AnimationService from "./animationService";

export const fetchAnimations = createAsyncThunk(
  "animation/fetchAnimations",
  async (page) => {
    const animationService = new AnimationService();
    const animations = await animationService.findAll(page);
    // to make data serializable for Redux
    const animationJson = animations.map((animation) => {
      return {
          ...animation,
      };
    });
    return animationJson;
  },
);
