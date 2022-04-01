import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'


export const UpdateModule = () => {
    
    var id = useParams().id
    var id1 = useParams().id1

    var navigate=useNavigate()

  const [data, setdata] = useState('')
  const [modulename, setmoduleName] = useState(data.modulename)
  
  const [startdate, setstartdate] = useState(data.startdate)
  const [enddate, setenddate] = useState(data.enddate)
  const [estimatedhours, setestimatedhours] = useState(data.estimatedhours)
  const [utilisedhours, setUtilisedHours] = useState(data.utilisedhours)


  const getData = () => {
    axios.get(`http://localhost:4000/module/${id1}`).then(res => {
      setdata(res.data.data)
      console.log(res.data.data);
    })
  }
  useEffect(() => {


    getData()


  }, [])
  const update = () => {
    var updateData = {
      modulename: modulename,
    
      startdate: startdate,
      enddate: enddate,
      estimatedhours: estimatedhours,
      utilisedhours: utilisedhours,
      moduleid:id1


    }
    axios.put(`http://localhost:4000/module`, updateData).then(res => {
      alert(id)
      
    })
    navigate(`/ProjectModules/${id}`)

  }
  return (
    <div>
<form onSubmit={update}>
        <div class="form-group">
          <label><b>Module-Name</b></label>
          <input type="text" class="form-control" id="exampleInputEmail1" defaultValue={data.modulename} onChange={(e) => setmoduleName(e.target.value)} />

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
          <label ><b>UtilisedHours</b></label>
          <input type="text" class="form-control" id="exampleInputPassword1" defaultValue={data.utilisedhours} onChange={(e) => setUtilisedHours(e.target.value)} />
        </div>
        <button type="submit" class="btn btn-primary">Submit</button>
      </form>

    </div>
  )
}
