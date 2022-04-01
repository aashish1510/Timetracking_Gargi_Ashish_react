import logo from './logo.svg';
import './App.css';
import './css/app.css';
import './css/app.css.map';
import './components/Sidebar'
import { Dashboard } from './components/Dashboard';
import { Route, Routes } from 'react-router-dom';
import { Priority } from './components/Priority';
import { ProjectModules } from './components/ProjectModules';
import { Projects } from './components/Projects';
import { ProjectTeam } from './components/ProjectTeam';
import { Roles } from './components/Roles';
import { Status } from './components/Status';
import { Task } from './components/Task';
import { UserTask } from './components/UserTask';
import { User } from './components/User';
import { Form } from './components/Form';
import { UpdateProject } from './components/UpdateProject';
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
import { Moduleform } from './components/Moduleform';
import { UpdateModule } from './components/UpdateModule';
import { TaskForm } from './components/TaskForm';





function App() {
  return (
  <div>



  




<Routes>
  <Route path='' element={<Dashboard/>}></Route>
  <Route path='/Dashboard' element={<Dashboard/>}></Route>
  <Route path='/ProjectModules/:id' element={<ProjectModules/>}></Route>
  <Route path='/Projects' element={<Projects/>}></Route>
  <Route path='/ProjectTeam' element={<ProjectTeam/>}></Route>
  <Route path='/Roles' element={<Roles/>}></Route>
  <Route path='/Status' element={<Status/>}></Route>
  <Route path='/Task/:id' element={<Task/>}></Route>
  <Route path='/Users' element={<User/>}></Route>
  <Route path='/UserTask' element={<UserTask/>}></Route>
  <Route path='/Form' element={<Form/>}></Route>
  <Route path='/Priority' element={<Priority/>}></Route>
  <Route path='/update/:id' element={<UpdateProject/>}></Route>
  <Route path='/Moduleform' element={<Moduleform/>}></Route>
  <Route path='/ProjectModules/:id/module/:id1' element={<UpdateModule/>}></Route>
  <Route path='/TaskForm' element={<TaskForm/>}></Route>
  
  

  
  </Routes>
  </div>
  )
}

export default App;
