import React from "react";
import { Link } from "react-router-dom";
import "./index.css";

export default function Restaurants() {
  const restaurants = [
    {
      name: "Chick-fil-A",
      img: "https://upload.wikimedia.org/wikipedia/commons/9/9a/Chick-fil-A.jpg",
      path: "/restaurants/chick-fil-a",
    },
    {
      name: "Church's Chicken",
      img: "https://dnclcgcvl4f14.cloudfront.net/siila-cm/prd/1280w/7851-1686849773606.jpg",
      path: "/restaurants/church-chicken",
    },
    {
      name: "Raising Cane's",
      img: "https://eu-images.contentstack.com/v3/assets/bltea7aee2fca050a19/blt0f9dad6c8359cf2c/681a227282960b495410c35a/Raising_Cane_s_Exterior_700_by_400.jpg?width=1280&auto=webp&quality=80&disable=upscale",
      path: "/restaurants/raising-canes",
    },
    {
      name: "Popeyes",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFLtVk188txt7zfz2-iP9TexNLGYHQjcXndQ&s",
      path: "/restaurants/popeyes",
    },
    {
      name: "Zaxby's",
      img: "https://www.restaurantnews.com/wp-content/uploads/2022/12/Zaxbys-Opens-Newest-Restaurant-in-Tallahassee-Florida.jpg",
      path: "/restaurants/zaxbys",
    },
  ];

  return (
    <div className="restaurant-grid">
      {restaurants.map((r) => (
        <Link to={r.path} className="card" key={r.name}>
          <img src={r.img} alt={r.name} />
          <h3>{r.name}</h3>
        </Link>
      ))}
    </div>
  );
}
