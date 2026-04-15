import React, { useEffect, useState } from "react";
import ListingsTable from "./ListingsTable";

const API_URL = "http://localhost:3000/api/listings";

export default function App() {
  const [listings, setListings] = useState([]);

  useEffect(() => {
    fetch(API_URL)
      .then((res) => res.json())
      .then((data) => setListings(data))
      .catch(() => {
        // fallback mock
        setListings([
          { title: "Mock House", price: "350,000", location: "Cairo", link: "https://example.com"}
        ]);
      });
  }, []);

  return (
    <div style={{ padding: 20 }}>
      <h2>Hidden Deals</h2>
      <ListingsTable data={listings} />
    </div>
  );
}