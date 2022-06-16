

const EmployeeForm = ({employeeDetails , handleChange , handleSubmit}) =>{
      const {name , age , address , department , salary , maritalStatus} = employeeDetails
      return(
            <div>
                    <h1>Employee Details</h1>
                   <form style = {{
                         width : "60%",
                         margin : "auto",
                         display : "flex",
                         flexDirection : "column"
                   }}>
                           <input type = "text"  
                           name = "name"
                           placeholder = "Enter Name" 
                           value = {name}
                           onChange = {handleChange}
                           /> 
                            <input type = "text"  
                           name = "age"
                           placeholder = "Enter Age" 
                           value = {age}
                           onChange = {handleChange}
                           /> 
                            <input type = "text"  
                           name = "address"
                           placeholder = "Enter Address" 
                           value = {address}
                           onChange = {handleChange}
                           /> 
                           <select name = "department" value = {department} onChange = {handleChange}>
                                 <option hidden >Choose Department</option>
                                 <option value = "Doctor">Doctor</option>
                                 <option value = "Engineer">Engineer</option>
                                 <option value = "Cricketer">Cricketer</option>
                                 <option value = "Teacher">Teacher</option>
                                 <option value = "Others">Others</option>
                           </select>
                            <input type = "text"  
                           name = "salary"
                           placeholder = "Enter Salary" 
                           value = {salary}
                           onChange = {handleChange}
                           /> 
                           <label>Marital Status : {" "}
                           <input type = "checkbox"
                            name = "maritalStatus"
                            value = {maritalStatus}
                            onChange = {handleChange}
                            />
                            </label>
                            <input type = "submit" value = "SUBMIT" onClick = {handleSubmit}/>
                    </form>
             </div>
      )
}

export default EmployeeForm;