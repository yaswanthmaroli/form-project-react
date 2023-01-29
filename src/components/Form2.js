import React from "react";
import { useState } from "react";
import { Container, Row, Col, Table } from "reactstrap";
import "../style/Form2.css";


const Form2 = () => {
  const [formerror, setformerror] = useState({});
  const [inputarr, setinputarr] = useState([]);
  const [edit, setEdit] = useState(false);

  const [inputdata, setinputdata] = useState({
    name: "",
    email: "",
    phone: "",
  });

  let contentEdit = (e) => {
    e.preventDefault();
    setEdit(!edit);
  };

  const changeHandle = (e) => {
    setinputdata({ ...inputdata, [e.target.name]: e.target.value });
  };

  const validateForm = () => {
    let err = {};

    if (inputdata.name === "") {
      err.name = "Name is required";
    }
    if (inputdata.email === "") {
      err.email = "email is required";
    }
    if (inputdata.name === "") {
      err.phone = "phone is required";
    }

    setformerror({ ...err });

    return Object.keys(err).length < 1;
  };

  let { name, email, phone } = inputdata;
  const addinputdata = (e) => {
    e.preventDefault();
    setinputarr([...inputarr, { name, email, phone }]);

    setinputdata({ name: "", email: "", phone: "" });

    console.log(inputarr.length);

    let isvalid = validateForm();
    console.log(isvalid);
    if (isvalid) {
      alert("submitted");
    } else {
      alert("invalid form");
    }
  };

  return (
    <div className="form2">
      <form onSubmit={addinputdata}>
        <div>
          <Container className="form-items">
            <Col xs="12" md="12">
              <div className="form2-btn">
                <button type="submit" className="addrow-btn ">
                  Save
                </button>
              </div>
            </Col>
            <Col xs="12" md="12" className="form2-input">
              <input
                value={inputdata.name || ""}
                autoComplete="off"
                name="name"
                type="text"
                placeholder="name"
                onChange={(e) => changeHandle(e)}
              />
              <div className="name-validation">
                <span>{formerror.name}</span>
              </div>
            </Col>

            <Col xs="12" md="12" className="form2-input">
              <input
                value={inputdata.email || ""}
                autoComplete="off"
                name="email"
                type="email"
                placeholder="email"
                onChange={(e) => changeHandle(e)}
              />
              <div className="name-validation">
                {" "}
                <span>{formerror.email}</span>
              </div>
            </Col>

            <Col xs="12" md="12" className="form2-input">
              <input
                value={inputdata.phone || ""}
                autoComplete="off"
                name="phone"
                type="text"
                placeholder="phone"
                onChange={(e) => changeHandle(e)}
              />
              <div className="name-validation">
                {" "}
                <span>{formerror.phone}</span>
              </div>
            </Col>
          </Container>

          {inputarr.length > 0 && (
            <Container className="form-display">
              <Col xs="12" md="12">
                <div className="form2-btn">
                  {edit ? (
                    <button className="editrow-btn" onClick={contentEdit}>
                      save
                    </button>
                  ) : (
                    <button className="editrow-btn " onClick={contentEdit}>
                      edit
                    </button>
                  )}
                </div>
              </Col>

              <Row>
                <div className="form-display-items">
                  <Col md="10">
                    <Table bordered>
                      <thead>
                        <tr>
                          <th> Name</th>
                          <th>Email</th>
                          <th>Mobile</th>
                        </tr>
                      </thead>

                      {inputarr.map((item, i) => (
                        <tbody>
                          <tr contentEditable={edit}>
                            <td> {item.name}</td>
                            <td> {item.email} </td>
                            <td> {item.phone} </td>
                          </tr>
                        </tbody>
                      ))}
                    </Table>
                  </Col>
                </div>
              </Row>
            </Container>
          )}
        </div>
      </form>
    </div>
  );
};

export default Form2;
