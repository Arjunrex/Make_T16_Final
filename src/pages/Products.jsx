import { useContext, useEffect } from "react";
import { ProductContext } from "../context/ProductContext";
import useFetchProducts from "../hooks/useFetchProducts";
import ProductCard from "../components/ProductCard";
import Loader from "../components/Loader";

function Products() {
  const { state, dispatch } =
    useContext(ProductContext);

  const {
    data,
    loading,
    error,
  } = useFetchProducts(
    "https://fakestoreapi.com/products"
  );

  useEffect(() => {
    dispatch({
      type: "SET_PRODUCTS",
      payload: data,
    });
  }, [data]);

  if (loading) return <Loader />;

  if (error) return <h2>{error}</h2>;

  return (
    <div className="products">
      {state.products.map((product) => (
        <ProductCard
          key={product.id}
          product={product}
        />
      ))}
    </div>
  );
}

export default Products;