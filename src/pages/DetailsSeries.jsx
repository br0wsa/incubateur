import React from "react";
import ky from "ky";
import ComingSoon from "../assets/images/cs.png";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import DetailsCast from "../components/DetailsCast";
import ModalNote from "../components/ModalNote";

const DetailsSeries = () => {
  const [modalOn, setModalOn] = useState(false);
  const clicked = () => {
    setModalOn(true);
  };
  const [movie, setMovie] = useState([]);
  const [actors, setActors] = useState([]);
  const params = useParams();

  const fetchData = async () => {
    const movie = ky
      .get(
        `https://api.themoviedb.org/3/tv/${params.id}?api_key=836c908c992e085a541e9c67774163c7&language=fr-EU`
      )
      .json(); /* Recup film par ID*/
    const actors = ky
      .get(
        `https://api.themoviedb.org/3/tv/${params.id}/credits?api_key=836c908c992e085a541e9c67774163c7&language=fr-EU`
      )
      .json(); /* Recup Acteur par ID du film */

    const allData = await Promise.all([movie, actors]);
    console.log(allData);
    setMovie(allData[0]);
    setActors(allData[1]["cast"]);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      <div className="container m-auto mb-5 ">
        <h2 className="text-xl pb-5">
          <p>{movie.name}</p>
        </h2>
        <div className="flex">
          <img
            className="rounded-[8px] w-96"
            src={
              movie.backdrop_path == null
                ? ComingSoon
                : "https://image.tmdb.org/t/p/original" + movie.backdrop_path
            }
          />
          <div className=" mx-5 p-1 bg-shark-900 rounded-[8px] ">
            <p className="underline font-bold text-lg ">Synopsis:</p>
            <p>{movie.overview}</p>
            <hr className="my-5 border-1 border-[#86C232]" />
            <div className="flex justify-between pt-5">
              <p>{movie.origin_country}</p>
              <p>{movie.first_air_date}</p>
            </div>
          </div>
        </div>
        <div className=" container m-auto flex">
          <div className="flex">
            <div className="round duration-700 hover:scale-95 cursor-pointer">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                class="w-6 h-6"
              >
                <path d="M11.645 20.91l-.007-.003-.022-.012a15.247 15.247 0 01-.383-.218 25.18 25.18 0 01-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0112 5.052 5.5 5.5 0 0116.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 01-4.244 3.17 15.247 15.247 0 01-.383.219l-.022.012-.007.004-.003.001a.752.752 0 01-.704 0l-.003-.001z" />
              </svg>
            </div>
            <div
              onClick={clicked}
              className="round duration-700 hover:scale-95 cursor-pointer"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                class="w-6 h-6"
              >
                <path
                  fill-rule="evenodd"
                  d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                  clip-rule="evenodd"
                />
              </svg>
            </div>
          </div>
        </div>
        <div>
          <p>Temps moyen d'un épisode : {movie.episode_run_time} min</p>
          <p>{movie.number_of_seasons} Saison</p>
          <p className="underline font-bold text-lg ">Apparition :</p>
          <div className="actor flex gap-5 overflow-hidden  flex-wrap">
            {actors.map((actor) => (
              <DetailsCast key={actor.id} actor={actor} />
            ))}
          </div>
        </div>
      </div>
      {modalOn && <ModalNote setModalOn={setModalOn} />}
    </div>
  );
};

export default DetailsSeries;
