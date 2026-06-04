import React from "react";

export default function CoinImage({ src, name }) {
  return (
    <img
      src={src}
      alt={name}
      style={{ height: '30px', width: '30px', marginRight: '10px' }}
    />
  );
}
