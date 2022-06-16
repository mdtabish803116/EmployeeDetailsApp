 import "./table.css";
 
 const EmployeeList = ({employeeData}) => {
    return (<div style = {{
             width : "80%",
             margin : "auto",
             marginTop : "50px",
             textAlign : "center",
             marginBottom : "50px"

    }}>
                <table>
                        <thead>
                                <tr>
                                    <th>Name</th>
                                     <th>Age</th>
                                    <th>department</th>
                                    <th>Address</th>
                                    <th>Salary</th>
                                   <th>Marital Status</th>
                                 </tr>
                               </thead>
                               <tbody>
                               {
                             employeeData.map((data) => {
                
                                     return (  <tr key = {data.id}>
                                             <td>{data.name}</td>
                                             <td>{data.age}</td>
                                             <td>{data.department}</td>
                                             <td>{data.address}</td>
                                             <td>{data.salary}</td>
                                             <td>{data.maritalStatus?"Married":"Un Married"}</td>
                                       </tr>)
                                 }) 
                              }
                              </tbody>
                           
                  </table>


    </div>)
 }

 export default EmployeeList