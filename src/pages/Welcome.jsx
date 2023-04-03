import Displaybody from "../components/Displaybody";
import Navmenu from "../components/Navmenu";

import React, { useEffect } from "react";
import { useSelector } from "react-redux";

const Acceuil = ({ movies, category, setCategory }) => {


  return (
    <div>
      <div className="bg-shark-bg">
        <Navmenu category={category} setCategory={setCategory} />
        <Displaybody movies={movies} category={category} />
      </div>
    </div>
  );
};

export default Acceuil;
