import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "../../api/axios";

const DetailPage = () => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState({});

  useEffect(() => {
    fetchData();
  }, [movieId]);

  const fetchData = async () => {
    const response = await axios.get(`/movie/${movieId}`);
    setMovie(response.data);
  };

  if (!movie) return null;

  return (
    <section>
      <img
        className="asdf"
        src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`}
        alt="modal__poster-img"
      />
    </section>
  );
};

export default DetailPage;
