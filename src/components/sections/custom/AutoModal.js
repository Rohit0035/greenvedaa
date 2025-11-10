"use client";
import { useEffect } from "react";

const AutoModal = () => {
  useEffect(() => {
    if (typeof window !== "undefined" && window.bootstrap) {
      const modalEl = document.getElementById("auto_modal");
      const modal = new window.bootstrap.Modal(modalEl);

      const interval = setInterval(() => {
        modal.show();
      }, 5000);

      return () => clearInterval(interval);
    }
  }, []);

  return (
    <div className="modal fade" id="auto_modal" tabIndex="-1" aria-hidden="true">
      <div className="modal-dialog modal-md" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">Auto Modal</h5>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div className="modal-body">
            {/* Empty body — add content here if needed */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AutoModal;
