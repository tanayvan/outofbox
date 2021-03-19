import React, { useState } from "react";

const postData = (body) => {
  return fetch(
    "https://w0vvxirghl.execute-api.ap-south-1.amazonaws.com/outofbox",

    {
      method: "POST",
      body: JSON.stringify(body),
    }
  )
    .then((response) => {
      return response.json();
    })
    .catch((err) => console.log(err));
};

export default function Contactus() {
  const [values, setValues] = useState({
    email: "",
    name: "",
    loading: false,
    errorMessage: "",
    number: "",
    success: false,
    error: false,
  });
  const handleSubmit = async (event) => {
    event.preventDefault();
    setValues({
      success: false,
      error: false,
      loading: true,
      errorMessage: "",
    });
    const body = {
      email: values.email,
      name: values.name,
      number: values.number,
    };
    if (values.name === "") {
      setValues({
        ...values,
        errorMessage: "Name is required",
        error: true,
        success: false,
      });
      return;
    }
    if (values.number === "") {
      setValues({
        ...values,
        errorMessage: "Number is required",
        error: true,
        success: false,
      });
      return;
    }
    console.log(body);
    postData(body)
      .then((data) => {
        console.log(data);
        if (data) {
          setValues({
            email: "",
            name: "",
            loading: false,
            errorMessage: "",
            number: "",
            success: true,
            error: false,
          });
        }
      })
      .catch((err) => {
        console.log(err);
      });
    setValues({
      loading: false,

      success: false,
      error: false,
    });
  };
  const handleChange = (name) => (event) => {
    setValues({ ...values, error: false, [name]: event.target.value });
  };
  return (
    <div style={{ backgroundColor: "#f9f6f7" }} className="p-3" id="contact-us">
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
            {values.success && (
              <div class="alert alert-success" role="alert">
                We will Call You Asap
              </div>
            )}
            {values.error && (
              <div class="alert alert-danger" role="alert">
                {values.errorMessage}
              </div>
            )}
            <div className="m-3" action="">
              <input
                type="text"
                class="form-control m-1 mt-3"
                placeholder="Enter Your Name Here"
                name="name"
                value={values.name}
                onChange={handleChange("name")}
              />
              <input
                type="email"
                class="form-control m-1 mt-3"
                placeholder="Enter Your Email  Here"
                name="email"
                value={values.email}
                onChange={handleChange("email")}
              />
              <input
                type="number"
                class="form-control m-1 mt-3"
                placeholder="Enter Your Phone Number Here"
                name="number"
                value={values.number}
                onChange={handleChange("number")}
              />
              <div className="d-grid gap-2 col-6 mx-auto">
                {values.loading ? (
                  <button
                    class="btn btn-outline-dark mx-2 color  m-1 mt-3 btn-block color"
                    type="button"
                    disabled
                  >
                    <span
                      class="spinner-border spinner-border-sm color m-1"
                      role="status"
                      aria-hidden="true"
                    ></span>
                    Submitting...
                  </button>
                ) : (
                  <button
                    class="btn btn-outline-dark mx-2 color  m-1 mt-3 btn-block"
                    onClick={handleSubmit}
                  >
                    Get A Call
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
