import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function HomePage() {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();
    const lowerQuery = query.toLowerCase();

    if (lowerQuery === "home") {
      navigate("/");
    } else {
      navigate(`/restaurants/${encodeURIComponent(query)}`);
    }
  };

  return (
    <>
      <h1 style={{ textAlign: "center", marginTop: "20px" }}>
        Find your next favorite spot to eat! Explore reviews from real visitors,
        discover new restaurants, and share your own tasty adventures. 🍽😋
      </h1>

      <form onSubmit={handleSearch}>
        <input
          placeholder="Begin typing... dramatic music plays 🎶"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          style={{
            position: "absolute",
            top: "20px",
            right: "20px",
            padding: "8px 12px",
            borderRadius: "8px",
            width: "280px",
          }}
        />
      </form>
      <img
        src="https://npr.brightspotcdn.com/dims4/default/1656f83/2147483647/strip/true/crop/1520x1139+0+0/resize/880x659!/quality/90/?url=https%3A%2F%2Fmedia.npr.org%2Fassets%2Fimg%2F2012%2F09%2F10%2Frestaurant-review-1f1ede4d672918ad61b6072191a48560445184ff.jpg"
        alt="Chain restaurants"
        style={{
          width: "50%",
          borderRadius: "14px",
          marginBottom: "20px",
          display: "block",
          marginLeft: "auto",
          marginRight: "auto",
        }}
      />
    </>
  );
}
