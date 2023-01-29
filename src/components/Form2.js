import React from "react";
import { useState } from "react";
import { Container, Row, Col, Table } from "reactstrap";
import "../style/Form2.css";

const Form2 = () => {
  const [inputarr, setinputarr] = useState([]);
  const [inputdata, setinputdata] = useState({
    name: "",
    email: "",
    phone: "",
  });

  function changeHandle(e) {
    setinputdata({ ...inputdata, [e.target.name]: e.target.value });
  }

  let { name, email, phone } = inputdata;
  function addinputdata(e) {
    e.preventDefault();
    setinputarr([...inputarr, { name, email, phone }]);
    console.log(inputarr.length);
    console.log(inputdata);
    setinputdata({ name: "", email: "", phone: "" });
  }

  return (
    <div className="form2">
      <form>
        <div>
          <Container className="form-items">
            <Col xs="12" md="12">
              <div className="form2-btn">
                <button onClick={addinputdata} className="addrow-btn ">
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
                onChange={changeHandle}
              />
            </Col>

            <Col xs="12" md="12" className="form2-input">
              <input
                value={inputdata.email || ""}
                autoComplete="off"
                name="email"
                type="email"
                placeholder="email"
                onChange={changeHandle}
              />
            </Col>

            <Col xs="12" md="12" className="form2-input">
              <input
                value={inputdata.phone || ""}
                autoComplete="off"
                name="phone"
                type="text"
                placeholder="phone"
                onChange={changeHandle}
              />
            </Col>
          </Container>

          {
            inputarr.length  > 0  && (<Container className="form-display">
            <Col xs="12" md="12">
              <div className="form2-btn">
                <button className="editrow-btn">Edit</button>
              </div>
            </Col>
            
            {
               inputarr.map((item,i)=>(
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
  
                      <tbody>
                        <tr>
                          <td> {item.name}</td>
                          <td> {item.email} </td>
                          <td> {item.phone} </td>
                        </tr>
                      </tbody>
                    </Table>
                  </Col>
                  <Col md="2">
                    <button className="deleterow-btn">Delete</button>
                  </Col>
                </div>
              </Row>
              ))
            }
          </Container>)
          }
        </div>
      </form>
    </div>
  );
};

export default Form2;
