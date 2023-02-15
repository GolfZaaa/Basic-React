import React, { Fragment, useState } from "react";
import { Formik, Form, ErrorMessage, Field } from "formik";
import { ValidateContact } from "../../validate-form/ValidateContact";
import Select from "react-select";
import { NavLink } from "react-router-dom";

const options = [
  { value: "chocolate", label: "chocolate" },
  { value: "strawberry", label: "strawberry" },
  { value: "vanilla", label: "vanilla" },
];

const ShowEmp = () => {
  const [selectedOption, setSelectedOption] = useState(null);
  return (
    <div>
      <Fragment>
        <div className="form-group col-md-12 text-right">
          <NavLink to='/FormEm' >
            <button type="button" className="btn btn-outline-primary">
              เพิ่มใหม่
            </button>
          </NavLink>
        </div>

        <div className="card">
          <div className="card-header">คำค้นหาข้อมูล</div>
          <div className="card-body">
            {" "}
            <Formik
              enableReinitialize={true}
              initialValues={{
                email: "",
                password: "",
                status: "",
                message: "",
                name: "",
              }}
              validationSchema={ValidateContact}
              onSubmit={(values) => {
                let data = { ...values };
                console.log("data : " + JSON.stringify(data));
              }}
            >
              {({
                values,
                errors,
                touched,
                handleChange,
                handleBlur,
                handleSubmit,
                isSubmitting,
                setFieldValue,
              }) => (
                <Form onSubmit={handleSubmit} className="php-email-form">
                  <div className="row">
                    <div className="form-group col-md-12">
                      Status :
                      <Field
                        type="radio"
                        name="status"
                        value="นักศึกษา"
                        className={
                          errors.status && touched.status ? " is-invalid" : ""
                        }
                      />
                      <label>นักศึกษา</label>
                      <Field
                        type="radio"
                        name="status"
                        value="อาจารย์/บุคคลกร"
                        className={
                          errors.status && touched.status ? " is-invalid" : ""
                        }
                      />
                      <label>อาจารย์/บุคคลกร</label>
                      <Field
                        type="radio"
                        name="status"
                        value="บุคคลภายนอก"
                        className={
                          errors.status && touched.status ? " is-invalid" : ""
                        }
                      />
                      <ErrorMessage
                        name="status"
                        component="div"
                        className="invalid-feedback"
                      />
                      <label>บุคคลภายนอก</label>
                    </div>

                    <div className="row">
                      <div className="col-md-4">ชื่อ-นามสกุล</div>
                      <div className="col-md-4">ตำแหน่ง</div>
                      <div className="col-md-4">โครงการ</div>
                    </div>

                    <div className="form-group col-md-4">
                      <label htmlFor="name">Your Email</label>
                      <input
                        type="text"
                        name="email"
                        // onChange={handleChange}
                        onChange={(e) => {
                          setFieldValue(
                            "email",
                            e.target.value.replace(
                              /[^A-Za-z_.#?!@$%^&*0-9]/gi,
                              ""
                            )
                          );
                        }}
                        onBlur={handleBlur}
                        value={values.email}
                        className={
                          "form-control" +
                          (errors.email && touched.email ? " is-invalid" : "")
                        }
                        placeholder="Your email"
                      />
                      <ErrorMessage
                        name="email"
                        component="div"
                        className="invalid-feedback"
                      />
                    </div>
                    <div className="form-group col-md-4 mt-3 mt-md-0">
                      <label htmlFor="name">Your Password</label>
                      <Select
                        defaultValue={selectedOption}
                        onChange={setSelectedOption}
                        options={options}
                      />
                    </div>
                    <div className="form-group col-md-4 mt-3 mt-md-0">
                      <label htmlFor="name">Name</label>
                      <Select
                        defaultValue={selectedOption}
                        onChange={setSelectedOption}
                        options={options}
                      />
                      <ErrorMessage
                        name="name"
                        component="div"
                        className="invalid-feedback"
                      />
                    </div>

                    <div className="form-group col-md-12">
                      <label htmlFor="name">Message</label>
                      <textarea
                        type="text"
                        name="message"
                        rows={5}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.message}
                        className={
                          "form-control" +
                          (errors.message && touched.message
                            ? " is-invalid"
                            : "")
                        }
                        placeholder="message"
                      />
                      <ErrorMessage
                        name="message"
                        component="div"
                        className="invalid-feedback"
                      />
                    </div>
                    <div>
                      <button type="submit" class="btn btn-primary">
                        Submit
                      </button>
                      <button type="reset" class="btn btn-danger">
                        Reset
                      </button>
                    </div>
                  </div>
                </Form>
              )}
            </Formik>
          </div>
        </div>
        <table class="table">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">First</th>
              <th scope="col">Last</th>
              <th scope="col">Handle</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">1</th>
              <td>Mark</td>
              <td>Otto</td>
              <td>@mdo</td>
            </tr>
            <tr>
              <th scope="row">2</th>
              <td>Jacob</td>
              <td>Thornton</td>
              <td>@fat</td>
            </tr>
            <tr>
              <th scope="row">3</th>
              <td colspan="2">Larry the Bird</td>
              <td>@twitter</td>
            </tr>
          </tbody>
        </table>
      </Fragment>
    </div>
  );
};
export default ShowEmp;
