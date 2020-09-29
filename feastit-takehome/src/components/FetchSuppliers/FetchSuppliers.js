import React, { useState, useEffect } from "react";
import DisplaySuppliers from "../ShowSuppliers/ShowSuppliers";

export default function FilterSuppliers() {
  const [error, setError] = useState(null);
  const [isLoading, setLoading] = useState(true);
  const [items, setItems] = useState([]);

  const url =
    "https://cors-anywhere.herokuapp.com/https://api-staging.feast-it.com/suppliers/browse/search/";

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then(
        (data) => {
          setItems([data]);
          setLoading(false);
        },
        (error) => {
          setLoading(false);
          setError(error);
        }
      );
  }, []);

  return (
    <div>
      {isLoading === false ? (
        <DisplaySuppliers items={items} />
      ) : (
        <div>Loading...</div>
      )}
      {error && <div>Error: {error.message}</div>}
    </div>
  );
}
