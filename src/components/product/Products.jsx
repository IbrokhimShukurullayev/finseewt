"use client"
import React, { useState, useEffect } from 'react';
import Image from 'next/image';

const Products = ({ data }) => {
  const [visibleCount, setVisibleCount] = useState(3);

  const handleSeeMore = () => {
    setVisibleCount(prevCount => prevCount + 3);
  };

  const visibleProducts = data?.products?.slice(0, visibleCount).map(el => (
    <div key={el.id} className="card">
      <div className="card__img">
        <Image width={405} height={318} src={el.images[0]} alt={el.title} />
      </div>
      <div className="card__body">
        <h3>By John Doe   l   Aug 23, 2021 </h3>
        <h2>{el.title}</h2>
        <p>{el.description}</p>
      </div>
    </div>
  ));

  return (
    <div className="container">
      <h5>Popular blogs</h5>
      <div className="row">
        {visibleProducts}
      </div>
      {visibleCount < data?.products?.length && (
        <button onClick={handleSeeMore}>See more</button>
      )}
    </div>
  );
};

export default Products;
