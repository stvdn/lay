import React from "react";
import ProductCard from "../components/ProductCard";

export default function Products() {
  const products = [
    {
      name: "Papel",
      image:
        "https://img.lakeshorelearning.com/is/image/OCProduction/ta50ac_g?wid=800&fmt=jpeg&qlt=85,1&pscan=auto&op_sharpen=0&resMode=sharp2&op_usm=1,0.65,6,0",
      description:
        "Papel nuevo con muchos colores, cada uno tiene una textura suave y no corta.",
      price: 1.4,
      stock: 1,
      rate: 5,
    },
    {
      name: "Ropa",
      image:
        "data:image/jpeg;base64,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",
      description:
        "Papel nuevo con muchos colores, cada uno tiene una textura suave y no corta.",
      price: 1.4,
      stock: 1,
      rate: 5,
    },
    {
      name: "A",
      image:
        "https://img.lakeshorelearning.com/is/image/OCProduction/ta50ac_g?wid=800&fmt=jpeg&qlt=85,1&pscan=auto&op_sharpen=0&resMode=sharp2&op_usm=1,0.65,6,0",
      description:
        "Papel nuevo con muchos colores, cada uno tiene una textura suave y no corta.",
      price: 1.4,
      stock: 1,
      rate: 5,
    },
  ];

  return (
    <div>
      <h1 className="text-5xl text-center mt-5">Productos</h1>
      <div className="grid grid-cols-[repeat(auto-fill,_minmax(15rem,_1fr))] gap-7 mx-7 mt-10">
        {products.map(
          ({ name, image, description, price, stock, rate }, index) => (
            <ProductCard
              key={index}
              name={name}
              image={image}
              description={description}
              price={price}
              stock={stock}
              rate={rate}
            />
          )
        )}
      </div>
    </div>
  );
}