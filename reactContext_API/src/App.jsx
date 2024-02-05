import './App.css'
import UserContextProvider from './store/UserContextProvider'
import Login from './components/Login'
import Profile from './components/Profile'
function App() {
  

  return (
    <UserContextProvider>
     <div className="container">
      <Login />
      <Profile /> 
      </div> 
    </UserContextProvider>
  )
}

export default App
