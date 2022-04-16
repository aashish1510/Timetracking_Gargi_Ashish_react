import axios from 'axios'
import React, { useState } from 'react'
import { unstable_renderSubtreeIntoContainer } from 'react-dom'
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



export const Form = () => {
  var navigate = useNavigate()
  const [ProjectName, setProjectName] = useState('')

  const [Description, setDescription] = useState('')
  const [StartDate, setStartDate] = useState('')
  const [EndDate, setEndDate] = useState('')
  const [EstimatedHours, setEstimatedHours] = useState('')
  const [Technology, setTechnology] = useState('')


  const ProjectChangeHandler = (e) => {

    setProjectName(e.target.value)
  }

  const DescriptionChangeHandler = (e) => {
    setDescription(e.target.value)

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
  const TechnologyChangeHandler = (e) => {
    setTechnology(e.target.value)

  }
  const showtoast = async ()=>{

    await toast.success('🦄 Wow so easy!', {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      });
  }
  const submit = async (e) => {
    e.preventDefault()
    
   

    //window.location.href = "http://localhost:3000/Dashboard"
    
    await axios.post('http://localhost:4000/project', data).then(res => {
      if(res.status ==200){
        showtoast()
        setTimeout(() => {
          navigate("/Projects")
        }, 2000);
        
      }
      else{
        showtoast()
      }
      
    })
  }

  var data = {
    projectname: ProjectName,
    description: Description,
    startdate: StartDate,
    enddate: EndDate,
    estimatedhours: EstimatedHours,
    technology: Technology
  }

  return (
    <div>
      <form onSubmit={submit}>
        <div class="form-group">
          <label><b>Project-Name</b></label>
          <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter ProjectName" onChange={(e) => { ProjectChangeHandler(e) }} />
          {
            ProjectName != null && ProjectName.length > 0 && ProjectName.length < 6 ? "please check name" : null
          }
        </div>
        <div class="form-group">
          <label><b>Description</b></label>
          <input type="text" class="form-control" id="exampleInputPassword1" placeholder="Enter Description" onChange={(e) => { DescriptionChangeHandler(e) }} />
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
          <label ><b>Technology</b></label>
          <input type="text" class="form-control" id="exampleInputPassword1" placeholder="Enter Technology" onChange={(e) => { TechnologyChangeHandler(e) }} />
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
