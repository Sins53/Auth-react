import React from "react";
import { FaTrashAlt } from "react-icons/fa";

const DelModal = (props) => {
  return (
    <div>
      <i data-bs-toggle="modal" data-bs-target="#DelModal">
        <FaTrashAlt />
      </i>

      <div
        className="modal fade DelModal"
        id="DelModal"
        tabindex="-1"
        aria-labelledby="DelModalLabel"
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
              <h3>Are you sure you want to delete?</h3>
            </div>
            <div className="modal-footer">
              <div className="text-end DelModal-footer">
                <button className="btn btn-danger">Delete</button>
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
