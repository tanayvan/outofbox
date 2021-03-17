import React from "react";

export default function Contactus() {
  return (
    <div style={{ backgroundColor: "#f9f6f7" }} className="p-3">
      <div className="display-5 mt-5 text-center color">Contact Us</div>
      <div className="container mt-4">
        <div
          className="row "
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <div className="col-lg-9">
            <form action="" className="m-3">
              <input
                type="text"
                class="form-control m-1 mt-3"
                placeholder="Enter Your Name Here"
              />
              <input
                type="email"
                class="form-control m-1 mt-3"
                placeholder="Enter Your Email Number Here"
              />
              <input
                type="number"
                class="form-control m-1 mt-3"
                placeholder="Enter Your Phone Number Here"
              />
              <div className="d-grid gap-2 col-6 mx-auto">
                <button
                  type="submit"
                  class="btn btn-outline-dark mx-2 color  m-1 mt-3 btn-block"
                >
                  Get A Call
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
