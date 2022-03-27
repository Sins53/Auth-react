import React, { useEffect, useRef, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import useNewApi from "../../CustomHooks/useNewApi";
import profilePic from "../../assets/images/profile-pic.jpg";

const SingleProduct = () => {
  const { id } = useParams();
  let navigate = useNavigate();

  const [displayModal, setDisplayModal] = useState("none");

  const pname = useRef(null);
  const pdescription = useRef(null);
  const pimg = useRef(null);
  const pqty = useRef(null);

  const [value, setValue] = useState(null);
  const { getData, apiData, delData, putData } = useNewApi();

  useEffect(() => {
    getData(`product/${id}`);
    setValue(apiData);
    // console.log(value);
    // console.log(apiData);
  }, [apiData]);

  const display = () => {
    setDisplayModal("block");

    pname.current.value = value.data.name;
    pdescription.current.value = value.data.description;
    pimg.current.value = value.data.image;
    pqty.current.value = value.data.quantity;
  };
  const close = () => {
    setDisplayModal("none");
  };

  const delProduct = () => {
    delData(`product/${id}`);
    navigate("/products");
  };

  const updateProduct = () => {
    var name = pname.current.value;
    var description = pdescription.current.value;
    var image = pimg.current.value;
    var qty = pqty.current.value;
    var quantity = Number(qty);
    var url = "product/" + value.data.id;
    // console.log(name, description, image, quantity);
    // console.log(typeof quantity);
    putData(url, { name, description, image, quantity });
    close();
  };

  return (
    <>
      {value?.data ? (
        <>
          <div className="SingleProduct mt-5">
            <div className="row justify-content-end SingleProduct-creator mt-5">
              <button className="col-1 btn btn-warning" onClick={display}>
                Update
              </button>
              <button className=" col-1 btn btn-danger " onClick={delProduct}>
                Delete
              </button>
            </div>
            <div className="row justify-content-center justify-content-between mt-5">
              <div className="col-8">
                <img className="SingleProduct-img" src={profilePic} alt="" />
              </div>
              <div className="col-3 d-flex align-items-center">
                <div>
                  <h2 className="text-primary mb-3">{value.data.name}</h2>
                  <h4 className="text-secondary text-end mb-3">
                    Stock Remaining: {value.data.quantity}
                  </h4>
                  <h4>Description : {value.data.description}</h4>
                  <button className="mt-4 SingleProduct-btn btn btn-primary">
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-5" style={{ display: displayModal }}>
            <form>
              <div className="container UpdateModal-body text-start mt-5">
                <div>
                  <div className="row mt-3">
                    <div className="col-4">
                      <label>Name</label>
                    </div>
                    <div className="col-8">
                      <input ref={pname} type="text" placeholder="Enter Name" />
                    </div>
                  </div>
                </div>
                <div>
                  <div className="row mt-4">
                    <div className="col-4">
                      <label>Description</label>
                    </div>
                    <div className="col-8">
                      <input
                        ref={pdescription}
                        type="text"
                        placeholder="Enter Description"
                      />
                    </div>
                  </div>
                </div>
                <div>
                  <div className="row mt-4">
                    <div className="col-4">
                      <label>Image Link</label>
                    </div>
                    <div className="col-8">
                      <input ref={pimg} type="text" placeholder="Enter Name" />
                    </div>
                  </div>
                </div>
                <div>
                  <div className="row mt-4">
                    <div className="col-4">
                      <label>Quantity</label>
                    </div>
                    <div className="col-8">
                      <input
                        ref={pqty}
                        type="number"
                        placeholder="Enter Quantity"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </form>

            <div className="mt-2 ProductUpdateForm">
              <button className="btn btn-primary" onClick={updateProduct}>
                Update
              </button>
              <button className="btn btn-danger" onClick={close}>
                Close
              </button>
            </div>
          </div>
        </>
      ) : (
        <h2> Loading....</h2>
      )}
    </>
  );
};

export default SingleProduct;
