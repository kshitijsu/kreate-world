import React, { useEffect, useState } from "react";
import Skeleton from "react-loading-skeleton";
import { NavLink } from "react-router-dom";
import Pagination from "./Pagination";

export default function Products() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [productsPerPage, setProductsPerPage] = useState(4);
  let componentMouted = true;

  const lastProductIndex = currentPage * productsPerPage;
  const firstProductIndex = lastProductIndex - productsPerPage;
  const currentProducts = data.slice(firstProductIndex, lastProductIndex);
  console.log(currentProducts);

  useEffect(() => {
    const getProducts = async () => {
      setLoading(true);
      const response = await fetch(`https://fakestoreapi.com/products`);
      if (componentMouted) {
        setData(await response.clone().json());
        setLoading(false);
      }
      return () => {
        componentMouted = false;
      };
    };
    getProducts();
  }, []);

  const Loading = () => {
    return (
      <>
        <div className="col-md-3">
          <Skeleton height={350} />
        </div>
        <div className="col-md-3">
          <Skeleton height={350} />
        </div>
        <div className="col-md-3">
          <Skeleton height={350} />
        </div>
        <div className="col-md-3">
          <Skeleton height={350} />
        </div>
      </>
    );
  };

  const ShowProducts = () => {
    return (
      <>
        {currentProducts.map((product) => {
          return (
            <>
              <div className="col-md-3 mb-4">
                <div className="card h-100 text-center p-4" key={product.id}>
                  <img
                    src={product.image}
                    alt={product.title}
                    className="card-img-top"
                  />
                  <div className="card-body">
                    <h5 className="card-title">
                      {product.title.substring(0, 12)} ...
                    </h5>
                    <p className="card-text lead fw-bold">
                      ₹ {product.price * 100}
                    </p>
                    <NavLink
                      to={`${product.id}`}
                      className="btn btn-outline-dark"
                    >
                      Buy Now
                    </NavLink>
                  </div>
                </div>
              </div>
            </>
          );
        })}
      </>
    );
  };

  return (
    <div>
      <div className="container my-5 py-5">
        <div className="row">
          <div className="col-12 mb-5">
            <h1
              className="display-6 fw-bolder text-center"
              style={{ color: "#c65e1e" }}
            >
              Latest Products
            </h1>
            <hr />
          </div>
        </div>
        <div className="row jsutify-content-center">
          {loading ? <Loading /> : <ShowProducts />}
        </div>
      </div>
      <Pagination
        totalProducts={data.length}
        productsPerPage={productsPerPage}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />
    </div>
  );
}
