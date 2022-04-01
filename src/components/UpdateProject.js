import { useEffect, useState } from "react"
import React from "react"
import axios from "axios"
import { useParams } from "react-router-dom"

export const UpdateProject = () => {
  var id = useParams().id

  const [data, setdata] = useState('')
  const [projectname, setprojectname] = useState(data.projectname)
  const [description, setdescription] = useState(data.description)
  const [startdate, setstartdate] = useState(data.startdate)
  const [enddate, setenddate] = useState(data.enddate)
  const [estimatedhours, setestimatedhours] = useState(data.estimatedhours)
  const [technology, settechnology] = useState(data.technology)


  const getData = () => {
    axios.get(`http://localhost:4000/project/${id}`).then(res => {
      setdata(res.data.data)
      console.log(res.data.data);
    })
  }
  useEffect(() => {


    getData()


  }, [])
  const update = () => {
    var updateData = {
      projectname: projectname,
      description: description,
      startdate: startdate,
      enddate: enddate,
      estimatedhours: estimatedhours,
      technology: technology,
      projectid:id


    }
    axios.put(`http://localhost:4000/project`, updateData).then(res => {
      alert('updated successfully')
    })

  }



  return (
    <div>

      <form onSubmit={update}>
        <div class="form-group">
          <label><b>Project-Name</b></label>
          <input type="text" class="form-control" id="exampleInputEmail1" defaultValue={data.projectname} onChange={(e) => setprojectname(e.target.value)} />

        </div>
        <div class="form-group">
          <label><b>Description</b></label>
          <input type="text" class="form-control" id="exampleInputPassword1" defaultValue={data.description} onChange={(e) => setdescription(e.target.value)} />
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
          <label ><b>EstimatedHours</b></label>
          <input type="number" class="form-control" id="exampleInputPassword1" defaultValue={data.estimatedhours} onChange={(e) => setestimatedhours(e.target.value)} />
        </div>
        <div class="form-group">
          <label ><b>Technology</b></label>
          <input type="text" class="form-control" id="exampleInputPassword1" defaultValue={data.technology} onChange={(e) => settechnology(e.target.value)} />
        </div>
        <button type="submit" class="btn btn-primary">Submit</button>
      </form>
    </div>
  )
}
