import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import profilePic from "../../assets/images/profile-pic.jpg";
import useNewApi from "../../CustomHooks/useNewApi";

const DisplayProducts = () => {
  const [value, setValue] = useState(null);
  const { getData, apiData } = useNewApi();

  useEffect(() => {
    getData("product");
    setValue(apiData);
    // console.log(apiData);
  }, [apiData]);

  // useEffect(() => {
  //   getData("product");
  // }, []);

  // console.log(value);

  return (
    <>
      {value?.data ? (
        <div className="container mt-5">
          <div className="row">
            {value.data.map((item) => {
              return (
                <div className="col-4 mt-4">
                  <div className="card">
                    <Link to={`/products/${item.id}`}>
                      <img
                        className="card-img mb-3"
                        src={profilePic}
                        // src={item.image}
                        alt="Denim Jeans"
                      />
                    </Link>
                    <h2>{item.name}</h2>
                    <h4 className="text-end me-4 text-primary">
                      Stock : {item.quantity}
                    </h4>
                    <p className="text-start card-description">
                      {item.description}
                    </p>
                    <p>
                      <button className="btn btn-primary">Add to Cart</button>
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      ) : (
        <h2>Loading....</h2>
      )}
    </>
  );
};

export default DisplayProducts;
