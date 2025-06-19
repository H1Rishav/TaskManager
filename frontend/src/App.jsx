
import { Route, Router, Routes } from 'react-router-dom'
import './App.css'

function App() {

  return (
    <div>
      <Router>
        <Routes>
          <Route path="/login" element={<Login/>}/>
          <Route path="/signUp" element={<SignUp/>}/>

          <Route element={<PrivateRoute allowedRoutes={["admin"]}/>}>
             <Route path="/admin/dashboard" element={<Dashboard/>}/>
             <Route path="/admin/tasks" element={<ManageTasks/>}/>
             <Route path="/admin/create-task" element={<CreateTask/>}/>
             <Route path="/admin/users" element={<ManageUsers/>}/>
          </Route>


          <Route element={<PrivateRoute allowedRoutes={["admin"]}/>}>
             <Route path="/user/dashboard" element={<UserDashboard/>}/>
             <Route path="/user/tasks" element={<MyTasks/>}/>
             <Route path="/user/task-details/:id" element={<ViewTaskDetails/>}/>
         
          </Route>

          
        </Routes>
      </Router>

    </div>

  )
}

export default App
