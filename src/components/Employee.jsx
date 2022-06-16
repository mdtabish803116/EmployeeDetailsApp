import EmployeeForm from "./EmployeeForm";
import EmployeeList from "./EmployeeList";
import React from "react";

const Employee = () => {
const [employeeData , setEmployeeData] = React.useState([]);
const [employeeDetails , setEmployeeDetails] = React.useState({
      name : "",
      age : "",
      address : "",
      department : "",
      salary : "",
      maritalStatus : false
})

  const handleChange = (e) => {
    let {name , checked , value , type} = e.target;

     value = (type === "checkbox") ? checked : value

    setEmployeeDetails({...employeeDetails , [name] : value})
 
  }

    const getEmployeeData = () => {
        fetch(` http://localhost:3006/employeeDetails ` , {
        }).then((res) => res.json())
          .then((res) => setEmployeeData(res))
          .catch((err) => console.log(err));
    
    }

    React.useEffect(() => {
        getEmployeeData();
   } , [])

   

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch(` http://localhost:3006/employeeDetails ` , {
        method : "POST",
        body : JSON.stringify(employeeDetails),
        headers : {
            "Content-Type": "application/json"
        }
    }).then((res) => res.json())
      .then((res) => getEmployeeData())
      .catch((err) => console.log(err));

  }
     return(<>
            <EmployeeForm employeeDetails = {employeeDetails}
              handleChange = {handleChange}
              handleSubmit = {handleSubmit}/>
            <EmployeeList employeeData = {employeeData}/>
     </>)
}

export default Employee;