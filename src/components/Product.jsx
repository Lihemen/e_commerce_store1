import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { add_to_cart, remove_from_cart, clear_cart } from "../redux/action";
import { Link, useParams } from "react-router-dom";
import Skeleton from "react-loading-skeleton";

const Product = () => {
  const [product, setProduct] = useState([]);
  const { productId } = useParams();
  const [loading, setLoading] = useState(false);

  const dispatch = useDispatch();

  const add_product = (product) => {
    dispatch(add_to_cart(product));
  };

  const remove_product = (product) => {
    dispatch(remove_from_cart(product));
  };

  useEffect(() => {
    const getProduct = async () => {
      setLoading(true);
      const response = await fetch(
        `https://fakestoreapi.com/products/${productId}`
      );
      if (!response) {
        setProduct([]);
        setLoading(true);
      }
      setProduct(await response.json());
      setLoading(false);
    };

    getProduct();
  }, []);

  const Loading = () => {
    return (
      <>
        <div className="col-md-6">
          <Skeleton height={400} />
        </div>
        <div className="col-md-6" style={{ lineHeight: 2 }}>
          <Skeleton height={50} width={300} />
          <Skeleton height={75} />
          <Skeleton height={25} width={150} />
          <Skeleton height={50} width={300} />
          <Skeleton height={150} />
          <Skeleton height={50} width={100} />
        </div>
      </>
    );
  };

  const ShowProduct = () => {
    return (
      <>
        <div className="col-md-6">
          <img
            src={product.image}
            alt={product.title}
            height="400px"
            width="400px"
          />
        </div>
        <div className="col-md-6">
          <h4 className="text-uppercase tex-black-50">{product.category}</h4>
          <h1 className="dispaly-5">{product.title}</h1>
          <p className="lead fw-bolder">
            Rating {product.rating && product.rating.rate}
            <i className="fa fa-star"></i>
          </p>
          <h3 className="display-6 fw-bold my-4">${product.price} </h3>
          <p className="lead">{product.description}</p>
          <button
            className="btn btn-outline-dark px-4 py-2"
            onClick={() => add_product(product)}
          >
            Add to Cart
          </button>
          <Link to="../cart" className="btn btn-dark mx-3 py-2">
            Go to Cart
          </Link>
        </div>
      </>
    );
  };

  return (
    <>
      <div className="container py-5 ">
        <div className="row py-2">
          {loading ? <Loading /> : <ShowProduct />}
        </div>
      </div>
    </>
  );
};

export default Product;
