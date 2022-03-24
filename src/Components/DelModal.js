import { useEffect, useState } from "react";
import { FaTrashAlt } from "react-icons/fa";
import useNewApi from "../CustomHooks/useNewApi";

const DelModal = (props) => {
  const { url, id, name, setId } = props;
  const { apiData, delData } = useNewApi();
  const handleDelete = () => {
    setId(`${url}/${id}`);
  };

  return (
    <div>
      <i data-bs-toggle="modal" data-bs-target={`#${props.name}`}>
        <FaTrashAlt />
      </i>

      <div
        className={`modal fade ${props.name}`}
        id={props.name}
        tabindex="-1"
        aria-labelledby={`${props.name}Label`}
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <div className="DelModal-header">header</div>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body text-center">
              <h3>Are you sure you want to delete? {props.name}</h3>
            </div>
            <div className="modal-footer">
              <div className={`text-end ${name}-footer`}>
                <button
                  className="btn btn-danger"
                  onClick={() => handleDelete()}
                  data-bs-dismiss="modal"
                >
                  Delete
                </button>
                <button
                  className="btn btn-secondary"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                  style={{ marginLeft: "2rem" }}
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DelModal;
