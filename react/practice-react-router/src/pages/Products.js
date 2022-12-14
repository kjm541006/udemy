import React from "react";
import { Link } from "react-router-dom";

const Products = () => {
  return (
    <section>
      <h1>Products Page</h1>
      <ul>
        <li>
          <Link to="/products/p1">Product1</Link>
        </li>
        <li>
          <Link to="/products/p2">Product2</Link>
        </li>
        <li>
          <Link to="/products/p3">Product3</Link>
        </li>
      </ul>
    </section>
  );
};

export default Products;
