import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { unstable_renderSubtreeIntoContainer } from 'react-dom'
import { useNavigate, useParams } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



export const Moduleform = () => {

  var navigate = useNavigate()
  var id= useParams().id1
  const [ModuleName, setModuleName] = useState('')

  const [Project, setProject] = useState([])
  const [projectid, setprojectid] = useState('')
  const [StartDate, setStartDate] = useState('')
  const [EndDate, setEndDate] = useState('')
  const [EstimatedHours, setEstimatedHours] = useState('')
  const [UtilisedHours, setUtilisedHours] = useState('')

  const getproject =async()=>{
   await axios.get("http://localhost:4000/project").then((res)=>{
setProject(res.data.data)
console.log(res.data.data);
    })
  }
  useEffect(() => {
    
  getproject()
    
    
  }, [])
  


  const ModuleChangeHandler = (e) => {

    setModuleName(e.target.value)
  }

  const ProjectChangeHandler = (e) => {

    console.log(e.target.value)
    setprojectid(e.target.value)

  }
  const StartDateChangeHandler = (e) => {
    setStartDate(e.target.value)

  }
  const EndDateChangeHandler = (e) => {
    setEndDate(e.target.value)

  }
  const EstimatedHoursChangeHandler = (e) => {
    setEstimatedHours(e.target.value)

  }
  const UtilisedHoursChangeHandler = (e) => {
    setUtilisedHours(e.target.value)

  }
//   const showtoast = async ()=>{

//     await toast.success('🦄 Wow so easy!', {
//       position: "top-center",
//       autoClose: 5000,
//       hideProgressBar: false,
//       closeOnClick: true,
//       pauseOnHover: true,
//       draggable: true,
//       progress: undefined,
//       });
//   }
  const submit =  (e) => {
    e.preventDefault()
    
   

    //window.location.href = "http://localhost:3000/Dashboard"
    
    axios.post('http://localhost:4000/module', data).then(res => {
    //   if(res.status ==200){
    //     showtoast()
    //     setTimeout(() => {
    //       navigate("/Dashboard")
    //     }, 2000);
        
    //   }
    //   else{
    //     showtoast()
    //   }
      
    console.log(res.data.data);
   // window.location.href ="http://localhost:3000/ProjectModules/6238a03619d54feed03cf22e"
    })
  }

  var data = {
    modulename: ModuleName,
    project:projectid,
    startdate: StartDate,
    enddate: EndDate,
    estimatedhours: EstimatedHours,
    utilisedhours: UtilisedHours
  }

  return (
    <div>
      <form onSubmit={submit}>
        <div class="form-group">
          <label><b>Module-Name</b></label>
          <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter ModuleName" onChange={(e) => { ModuleChangeHandler(e) }} />
        
        </div>
        <div class="form-group">
          <label><b>Project</b></label>
        <select class="form-control" onChange={ProjectChangeHandler}>
          {
            Project.map((row)=>{
              return(
                <option value={row._id}>{row.projectname}</option>
              )
            })
          }
        </select>
        </div>
        <div class="form-group">
          <label><b>StartDate</b></label>
          <input type="date" class="form-control" id="exampleInputPassword1" placeholder="" onChange={(e) => { StartDateChangeHandler(e) }} />
        </div>
        <div class="form-group">
          <label ><b>EndDate</b></label>
          <input type="date" class="form-control" id="exampleInputPassword1" placeholder="" onChange={(e) => { EndDateChangeHandler(e) }} />
        </div>
        <div class="form-group">
          <label ><b>EstimatedHours</b></label>
          <input type="number" class="form-control" id="exampleInputPassword1" placeholder="Enter Estimated Hours" onChange={(e) => { EstimatedHoursChangeHandler(e) }} />
        </div>
        <div class="form-group">
          <label ><b>UtilisedHours</b></label>
          <input type="text" class="form-control" id="exampleInputPassword1" placeholder="Enter utilisedhours" onChange={(e) => { UtilisedHoursChangeHandler(e) }} />
        </div>
        <button type="submit" class="btn btn-primary" >Submit</button>
        <ToastContainer
          position="top-center"
          autoClose={false}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />

      </form>
    </div>
  )
}
