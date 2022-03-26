import React, { useEffect, useRef } from "react";
import useNewApi from "../../../CustomHooks/useNewApi";
import { AiOutlinePlus } from "react-icons/ai";

const ProductAdd = (props) => {
  const { name, url } = props;
  const { postData } = useNewApi();

  const pname = useRef(null);
  const pdescription = useRef(null);
  const pimg = useRef(null);
  const pqty = useRef(null);

  useEffect(() => {
    pimg.current.value =
      "https://betanews.com/wp-content/uploads/2014/11/front.jpg";
  }, []);

  const submitProduct = () => {
    var name = pname.current.value;
    var description = pdescription.current.value;
    var image = pimg.current.value;
    var qty = pqty.current.value;
    var quantity = Number(qty);
    // console.log(name, description, image, quantity);
    // console.log(typeof quantity);
    postData(url, { name, description, image, quantity });

    pname.current.value = "";
    pdescription.current.value = "";
    pimg.current.value =
      "https://betanews.com/wp-content/uploads/2014/11/front.jpg";
    pqty.current.value = "";
  };

  return (
    <>
      <>
        <button
          className="btn btn-primary"
          data-bs-toggle="modal"
          data-bs-target="#ProductModal"
        >
          <i>
            <AiOutlinePlus />
          </i>
          {" Add " + name}
        </button>

        <div
          className="modal fade ProductModal"
          id="ProductModal"
          tabindex="-1"
          aria-labelledby="ProductModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <div className="ProductModal-header">
                  <h3>{"Add " + props.name}</h3>
                </div>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div className="modal-body">
                <form>
                  <div className="container ProductModal-body text-start">
                    <div>
                      <div className="row mt-3">
                        <div className="col-4">
                          <label>Name</label>
                        </div>
                        <div className="col-8">
                          <input
                            ref={pname}
                            type="text"
                            placeholder="Enter Name"
                          />
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
                      <div className="row mt-3">
                        <div className="col-4">
                          <label>Image Link</label>
                        </div>
                        <div className="col-8">
                          <input
                            ref={pimg}
                            type="text"
                            placeholder="Enter Name"
                          />
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
              </div>
              <div className="modal-footer">
                <div className="text-end ProductModal-footer">
                  <button
                    className="btn btn-primary"
                    data-bs-dismiss="modal"
                    onClick={submitProduct}
                  >
                    Add
                  </button>
                  <button
                    className="btn btn-danger"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    </>
  );
};

export default ProductAdd;
