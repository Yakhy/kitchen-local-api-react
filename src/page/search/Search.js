import React, { useEffect } from "react";
import "./Search.css";
import ReciepeList from "../ReciepeList/ReciepeList";
import { useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import { useFetch } from "../../hooks/useFetch";

export default function Search() {
  const queryString = useLocation().search;
  const queryParams = new URLSearchParams(queryString);
  const query = queryParams.get("q");
  const { data, isPending, error } = useFetch(
    `http://localhost:3000/recipes?q=${query}`
  );

  return (
    <div>
      <h1 className="page-title">Request recipe "{query}"</h1>
      {isPending && <div className="loading">Loading ...</div>}
      {error && <div className="error"> {error}</div>}
      {data && <ReciepeList recipes={data} />}
    </div>
  );
}
