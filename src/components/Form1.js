import React, { useState } from "react";
import { Container, Row, Col } from "reactstrap";
import "../style/Form1.css";

const Form1 = () => {
  const [formval, setFormval] = useState([
    {
      name: "",
      email: "",
      phone: "",
      pancard: "",
    },
  ]);

  const addRow = () => {
    setFormval([...formval, { name: "", email: "", phone: "", pancard: "" }]);
  };

  const deleteRow = (i) => {
    const newForm = [...formval];
    newForm.splice(i, 1);
    setFormval(newForm);
  };

  const onHandle = (e, i) => {
    let newForm = [...formval];
    newForm[i][e.target.name] = e.target.value;
    setFormval(newForm);
  };

  const formvalidation = (formval) => {
    const data = [...formval];
    const re = /\S+@\S+\.\S+/;
   
    for (let index = 0; index < data.length; index++) {
      // const element = data[index];

      if (data[index].name == "") {
        data[index].nameCheck = "name required";
        data[index].namelengthCheck = "";
      } else if (data[index].name.length < 4) {
        data[index].namelengthCheck = "name should be greater than 10";
        data[index].nameCheck = "";
      } else {
        data[index].nameCheck = "";
        data[index].namelengthCheck = "";
      }

      if (data[index].email == "") {
        data[index].emailCheck = "email required";
        data[index].emailFormat = "";
      } else if (!re.test(data[index].email)) {
        data[index].emailFormat = "invalid Email";
        data[index].emailCheck = "";
      } else {
        data[index].emailCheck = "";
        data[index].emailFormat = "";
      }

        if(data[index].phone.length < 10){
            data[index].phonelengthCheck = "phone Number should be 10 digits"
            data[index].phoneCheck = "";
        } 
        else if(data[index].phone == ""){
            data[index].phoneCheck = "number required";
            data[index].phonelengthCheck =""
        }

        else{
            data[index].phonelengthCheck = ""
            data[index].phoneCheck =""
        }

       if(data[index].pancard == ""){
        data[index].pancardCheck ="number required"

       }else{
        data[index].pancardCheck= ""
       }

    }

    setFormval(data);
  };

  const onsubmit = (e) => {
    e.preventDefault();
    console.log("submitData", formval);
    formvalidation(formval);
  };

  return (
    <div className="form1">
      <form onSubmit={onsubmit}>
        {formval.map((item, i) => (
          <Container key={i} className="form-items">
            <Row>
              <Col md="2" className="form-item">
                <input
                  name="name"
                  type="text"
                  id="Name"
                  placeholder="name"
                  value={item.name || ""}
                  onChange={(e) => onHandle(e, i)}
                />
                <div className="name-validation">
                  {item.nameCheck}
                  {item.namelengthCheck}
                </div>
              </Col>

              <Col md="2" className="form-item">
                <input
                  name="email"
                  type="email"
                  id="email"
                  placeholder="email"
                  value={item.email || ""}
                  onChange={(e) => onHandle(e, i)}
                />
                <div className="name-validation">
                  {item.emailCheck}
                  {item.emailFormat}{" "}
                </div>
              </Col>

              <Col md="2" className="form-item">
                <input
                  type="digits"
                  id="phone"
                  name="phone"
                  placeholder="Mobile"
                  pattern="[789][0-9]{9}"
                  value={item.phone || ""}
                  onChange={(e) => onHandle(e, i)}
                />
                <div className="name-validation">
                   {item.phonelengthCheck}{item.phoneCheck}
                </div>
              </Col>

              <Col md="2" className="form-item">
                <input
                  name="pancard"
                  type="text"
                  id="pancard"
                  placeholder="pancard"
                  value={item.pancard || ""}
                  onChange={(e) => onHandle(e, i)}
                />
                 <div className="name-validation">
                   {item.pancardCheck} 
                </div>
              </Col>

              <Col md="4" className="form-item">
                <button onClick={addRow} className="addrow-btn">
                  Add Row
                </button>
                {i == 0 ? (
                  ""
                ) : (
                  <button onClick={deleteRow} className="deleterow-btn">
                    Remove Row
                  </button>
                )}
              </Col>
            </Row>

            <Col className="submit" md="12">
              <button className="submit-btn" type="submit">
                SAVE
              </button>
            </Col>
          </Container>
        ))}
      </form>
    </div>
  );
};

export default Form1;
