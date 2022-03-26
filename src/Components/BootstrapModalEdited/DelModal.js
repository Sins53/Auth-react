import { FaTrashAlt } from "react-icons/fa";

const DelModal = (props) => {
  const { url, id, name, setId } = props;
  const handleDelete = () => {
    setId(`${url}/${id}`);
  };

  const fixIt = name.split(" ");
  const fixedIt = fixIt.join("");
  // console.log(name);

  return (
    <div>
      <i data-bs-toggle="modal" data-bs-target={`#${fixedIt + url}`}>
        <FaTrashAlt />
      </i>

      <div
        className={`modal fade ${fixedIt + url}`}
        id={fixedIt + url}
        tabindex="-1"
        aria-labelledby={`${fixedIt + url}Label`}
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <div className="DelModal-header">
                <h3>
                  Delete <span className="text-uppercase">{url}</span>
                </h3>
              </div>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body text-center">
              <h3>Are you sure you want to delete? </h3>
              <h2 className="text-uppercase text-center text-danger">
                {props.name}
              </h2>
            </div>
            <div className="modal-footer">
              <div className={`text-end ${fixedIt + url}-footer`}>
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
