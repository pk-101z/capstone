import React from "react";
import { Link } from "react-router-dom";
import restaurants from "../data/restaurants";

function Card({ r }) {
  return (
    <Link
      to={`/restaurant/${r.id}`}
      style={{ textDecoration: "none", color: "inherit" }}
    >
      <div
        style={{
          border: "1px solid #ddd",
          borderRadius: 8,
          padding: "1rem",
          width: 320,
          boxShadow: "0 2px 6px rgba(0,0,0,0.04)",
          cursor: "pointer",
          transition: "box-shadow 0.2s",
        }}
        onMouseEnter={(e) =>
          (e.currentTarget.style.boxShadow = "0 4px 12px rgba(0,0,0,0.12)")
        }
        onMouseLeave={(e) =>
          (e.currentTarget.style.boxShadow = "0 2px 6px rgba(0,0,0,0.04)")
        }
      >
        <h3 style={{ margin: "0 0 .25rem 0" }}>{r.name}</h3>
        <div style={{ color: "#666", fontSize: 14 }}>{r.address}</div>
        <div style={{ marginTop: ".5rem", fontSize: 13 }}>Hours: {r.hours}</div>
        <div style={{ marginTop: ".5rem", fontSize: 13 }}>
          Rating: {r.rating} ⭐
        </div>
        <div style={{ marginTop: ".75rem" }}>
          <strong>Menu</strong>
          <ul style={{ paddingLeft: "1rem", marginTop: ".25rem" }}>
            {r.menu.map((m, i) => (
              <li key={i}>
                {m.name} — {m.price}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Link>
  );
}

function RestaurantPage() {
  return (
    <div style={{ padding: "2rem" }}>
      <h2>Restaurants</h2>
      <p>Below are a few popular chicken chains. Click any to view details.</p>

      <div
        style={{
          display: "flex",
          gap: "1rem",
          flexWrap: "wrap",
          marginTop: "1rem",
        }}
      >
        {restaurants.map((r) => (
          <Card key={r.id} r={r} />
        ))}
      </div>
    </div>
  );
}

export default RestaurantPage;
