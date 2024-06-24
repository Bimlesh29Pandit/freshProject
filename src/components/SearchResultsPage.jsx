import React from "react";
import { useLocation } from "react-router-dom";

const SearchResultsPage = () => {
  const location = useLocation();
  const { breweries } = location.state;

  return (
    <div>
      <h2>Search Results</h2>
      <ul>
        {breweries.map((brewery) => (
          <li key={brewery.id}>
            <h3>{brewery.name}</h3>
            <p>
              {brewery.city}, {brewery.state}
            </p>
            <p>Type: {brewery.brewery_type}</p>
            <h4>Reviews:</h4>
            <ul>
              {brewery.reviews.map((review, index) => (
                <li key={index}>
                  <p>
                    <strong>{review.username}</strong>: {review.rating} -{" "}
                    {review.description}
                  </p>
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SearchResultsPage;
