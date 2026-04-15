import React, { useState } from "react";

const parsePrice = (price) =>
  Number(String(price).replace(/[^\d]/g, ""));

export default function ListingsTable({ data }) {
  const [location, setLocation] = useState("");
  const [minPrice, setMinPrice] = useState("");
  const [sortAsc, setSortAsc] = useState(true);

  let filtered = data.filter((item) => {
    const matchesLocation = location
      ? item.location?.toLowerCase().includes(location.toLowerCase())
      : true;

    const matchesPrice = minPrice
      ? parsePrice(item.price) >= Number(minPrice)
      : true;

    return matchesLocation && matchesPrice;
  });

  filtered.sort((a, b) =>
    sortAsc
      ? parsePrice(a.price) - parsePrice(b.price)
      : parsePrice(b.price) - parsePrice(a.price)
  );

  return (
    <div>
      <div style={{ marginBottom: 10 }}>
        <input
          placeholder="Location"
          onChange={(e) => setLocation(e.target.value)}
        />
        <input
          placeholder="Min Price"
          type="number"
          onChange={(e) => setMinPrice(e.target.value)}
        />
        <button onClick={() => setSortAsc(!sortAsc)}>
          Sort Price {sortAsc ? "↓" : "↑"}
        </button>
      </div>

      <table border="1" cellPadding="8">
        <thead>
          <tr>
            <th>Title</th>
            <th>Price</th>
            <th>Location</th>
            <th>link</th>
          </tr>
        </thead>
        <tbody>
          {filtered.map((item, i) => (
            <tr key={i}>
              <td>{item.title}</td>
              <td>{item.price}</td>
              <td>{item.location}</td>
              <td>{item.link}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}