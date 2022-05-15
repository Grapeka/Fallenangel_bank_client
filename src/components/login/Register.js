import Axios from "axios";

import React, { useState } from "react";

function Register({ Register }) {
  const [Prefix, setPrefix] = useState("");
  const [FName, setFName] = useState("");
  const [LName, setLName] = useState("");
  const [Phone, setPhone] = useState("");
  const [Gender, setGender] = useState("");
  const [DOB, setDOB] = useState("");
  const [CitizenID, setCitizenID] = useState("");
  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");
  const [Address, setAddress] = useState("");
  const [Pin, setPin] = useState("");

  const [Member, setMember] = useState([]);
  const [conFirm, setConFirm] = useState(false);

  const require = () => {};

  const [conPass, setconPass] = useState({ Password: "" });

  const [errorRegis, setErrorRegis] = useState("");

  const submitHandle = (e) => {
    e.preventDefault();
  };

  //valid not blank

  const CheckVerify = () => {
    let ps1 = conPass.Password;
    let ps2 = Password;

    //console.log(ps1)
    //console.log(ps2)

    if (ps1 !== ps2) {
      console.log("Password not match");
      setErrorRegis("Password not match");
      setTimeout(() => {
        setconPass({ Password: "" });
        setPassword("");
      }, 10);
    } else {
      if (
        Prefix != "" &&
        FName != "" &&
        LName != "" &&
        Phone != "" &&
        Gender != "" &&
        DOB != "" &&
        CitizenID != "" &&
        Email != "" &&
        Password != "" &&
        conPass.Password != "" &&
        Address != "" &&
        Prefix != "undefine" &&
        Pin != ""
      ) {
        console.log("form complete");
        addMember();
      } else {
        console.log("Fill in the blank");
      }
    }
  };

  //addMember();

  const getMemers = () => {
    Axios.get("http://localhost:3001/customer").then((response) => {
      setMember(response.data);
    });
  };

  const addMember = () => {
    Axios.post("http://localhost:3001/create", {
      prefix: Prefix,
      fName: FName,
      lName: LName,
      phoneNumber: Phone,
      gender: Gender,
      dob: DOB,
      citizenid: CitizenID,
      email: Email,
      password: Password,
      address: Address,
      pin: Pin,
    }).then(() => {
      setMember([
        ...Member,
        {
          prefix: Prefix,
          fName: FName,
          lName: LName,
          phoneNumber: Phone,
          gender: Gender,
          dob: DOB,
          citizenid: CitizenID,
          email: Email,
          password: Password,
          address: Address,
          pin: Pin,
        },
      ]);
    });
  };

  const [Step, setStep] = useState(0);

  const nextStep = () => {
    setStep(Step + 1);
    if (Step <= 1) {
      console.log(Step);
    } else {
      console.log("commit");
    }
  };

  return (
    <div>
      <form onSubmit={submitHandle}>
        <div className="form-inner">
          <h2>Register</h2>
          <div className="error">{errorRegis}</div>

          <div className="form-group">
            <label htmlFor="Prefix"> Prefix:</label>
            <select
              type="text"
              name="Prefix"
              id="Prefix"
              onChange={(e) => {
                setPrefix(e.target.value);
              }}
              value={Prefix}
            >
              <option value="undefine">select</option>
              <option value="Mr.">Mr.</option>
              <option value="Mrs.">Mrs.</option>
              <option value="Ms">Ms.</option>
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="FName">Full name:</label>
            <input
              type="text"
              name="FName"
              id="FName"
              onChange={(e) => {
                setFName(e.target.value);
              }}
            />
          </div>
          <div className="form-group">
            <label htmlFor="LName">Last name:</label>
            <input
              type="text"
              name="LName"
              id="LName"
              onChange={(e) => {
                setLName(e.target.value);
              }}
            />
          </div>

          <div className="form-group">
            <label htmlFor="Gender">Gender:</label>
            <select
              type="text"
              name="Gender"
              id="Gender"
              onChange={(e) => {
                setGender(e.target.value);
              }}
            >
              <option value="U">Unspecified</option>
              <option value="M">Male</option>
              <option value="F">Female</option>
            </select>

            <label htmlFor="DOB">Date of birth:</label>
            <input
              type="date"
              name="DOB"
              id="DOB"
              onChange={(e) => {
                setDOB(e.target.value);
              }}
            />
            <label htmlFor="CitizenID">CitizenID:</label>
            <input
              type="text"
              name="CitizenID"
              id="CitizenID"
              onChange={(e) => {
                setCitizenID(e.target.value);
              }}
            />
          </div>
          <div className="form-group">
            <label htmlFor="Phone">Phone Number</label> &nbsp;
            <input
              type="tel"
              name="Phone"
              id="Phone"
              onChange={(e) => {
                setPhone(e.target.value);
              }}
              value={Phone}
            />
          </div>
          <div className="form-group">
            <label htmlFor="Address">Address</label> &nbsp;
            <textarea
              type="text"
              name="Address"
              id="Address"
              onChange={(e) => {
                setAddress(e.target.value);
              }}
            />
          </div>

          <div className="form-group">
            <label htmlFor="Email">E-mail</label>
            <input
              type="email"
              name="Email"
              id="Email"
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
            <label htmlFor="Password">Password</label>
            <input
              type="password"
              name="Password"
              id="Password"
              onChange={(e) => {
                setPassword(e.target.value);
              }}
              value={Password}
            />

            <label htmlFor="Con-Password">Confirm Password</label>
            <input
              type="password"
              name="Con-Password"
              id="Con-Password"
              onChange={(e) => {
                setconPass({ Password: e.target.value });
              }}
              value={conPass.Password}
            />
          </div>
          <div className="form-group">
            <label htmlFor="Pin">Pin</label>
            <input
              type="password"
              name="Pin"
              id="Pin"
              onChange={(e) => {
                setPin(e.target.value);
              }}
            />
          </div>

          <button id="nextstep" onClick={nextStep}>
            Next
          </button>

          <input
            type="checkbox"
            name="Check"
            id="Check"
            checked={conFirm}
            onChange={(e) => {
              setConFirm(e.target.checked);
            }}
          />

          <input
            type="submit"
            id="Submit"
            value="Confirm"
            onClick={CheckVerify}
            disabled={!conFirm}
          />
        </div>
      </form>
    </div>
  );
}

export default Register;
