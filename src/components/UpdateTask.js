import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Navigate, useNavigate, useParams } from 'react-router-dom'




export const UpdateTask = () => {
    var id = useParams().id
    var id1 = useParams().id1

   var navigate=useNavigate()
const [data, setdata] = useState('')
const [taskname, settaskname] = useState(data.taskname)
const [description, setDescription] = useState(data.discription)
const [startdate, setstartdate] = useState(data.startdate)
const [enddate, setenddate] = useState(data.enddate)
const [totalhours, settotalhours] = useState(data.totalhours)
const [utilisedhours, setutilisedhours] = useState(data.utilisedhours)


  const getData = () => {
    axios.get(`http://localhost:4000/task/${id}`).then(res => {
      setdata(res.data.data)
      console.log(res.data.data);
    })
  }
  useEffect(() => {


    getData()


  }, [])
  const update = () => {
    var updateData = {
      taskname:taskname ,
      discription:description,
      startdate: startdate,
      enddate: enddate,
      TotalHours: totalhours,
      utilisedhours: utilisedhours,
      taskid:id


    }
    axios.put(`http://localhost:4000/task`, updateData).then(res => {
      alert(id)
      
    })
    navigate(`/Task/${id}`)

  }
  return (
    <div>
<form onSubmit={update}>
        <div class="form-group">
          <label><b>Task-Name</b></label>
          <input type="text" class="form-control" id="exampleInputEmail1" defaultValue={data.taskname} onChange={(e) => settaskname(e.target.value)} />

        </div>
        <div class="form-group">
          <label><b>Description</b></label>
          <input type="text" class="form-control" id="exampleInputEmail1" defaultValue={data.discription} onChange={(e) => setDescription(e.target.value)} />

        </div>

        <div class="form-group">
          <label><b>StartDate</b></label>
          <input type="date" class="form-control" id="exampleInputPassword1" defaultValue={data.startdate} onChange={(e) => setstartdate(e.target.value)} />
        </div>
        <div class="form-group">
          <label ><b>EndDate</b></label>
          <input type="date" class="form-control" id="exampleInputPassword1" defaultValue={data.enddate} onChange={(e) => setenddate(e.target.value)} />
        </div>
        <div class="form-group">
          <label ><b>TotalHours</b></label>
          <input type="number" class="form-control" id="exampleInputPassword1" defaultValue={data.totalhours} onChange={(e) => settotalhours(e.target.value)} />
        </div>
        <div class="form-group">
          <label ><b>UtilisedHours</b></label>
          <input type="text" class="form-control" id="exampleInputPassword1" defaultValue={data.utilisedhours} onChange={(e) => setutilisedhours(e.target.value)} />
        </div>
        <button type="submit" class="btn btn-primary">Submit</button>
      </form>

    </div>
  )
}
