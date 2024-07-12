import React, { useEffect, useState } from "react";

function LoadMore() {
  const [count, setCount] = useState(1);
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchProducts = async () => {
    try {
      setLoading(true);
      const response = await fetch(
        `https://dummyjson.com/products?limit=10&skip=${
          count * 10
        }`
      );
      const data = await response.json();
      //   setProducts([...products, ...data]);
      setProducts((prevProducts) => [...prevProducts, ...data.products]);
      console.log(data.products);
      setLoading(false);
    } catch (err) {
      setLoading(false);
      console.log("Error occurred while fetching products", err);
    }
  };

  useEffect(() => {
        fetchProducts();
  }, [count]);

  return (
    <div>
      {loading && <p>Loading Products!</p>}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: '1fr 1fr 1fr'
        }}
      >
        {products.map((item, index) => (
          <div key={index}>
            <img src={item.thumbnail} />
            <h2>{item.title}</h2>
            <h3>{item.price}</h3>
          </div>
        ))}
      </div>
      <button onClick={() => setCount(count + 1)}>Load More</button>
    </div>
  );
}

export default LoadMore;
