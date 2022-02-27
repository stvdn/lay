import React, { useEffect, useState } from "react";
import ProductCard from "../components/ProductCard";
import {
  collection,
  query,
  onSnapshot,
  getFirestore,
} from "firebase/firestore";
import { useDispatch } from "react-redux";

export default function Products() {
  const [products, setProducts] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    const db = getFirestore();
    const q = query(collection(db, "products"));
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      setProducts([]);
      querySnapshot.forEach((doc) => {
        setProducts((oldProducts) => [
          ...oldProducts,
          { id: doc.id, data: doc.data() },
        ]);
      });
    });

    return () => unsubscribe();
  }, []);

  return (
    <div>
      <h1 className="text-5xl text-center mt-5">Productos</h1>
      <div className="grid grid-cols-[repeat(auto-fill,_minmax(15rem,_1fr))] gap-7 mx-7 mt-10">
        {products.length > 0 &&
          products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
      </div>
    </div>
  );
}
