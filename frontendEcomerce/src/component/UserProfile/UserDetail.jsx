import React, { useEffect, useState } from 'react'
// import { Navigate } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import Myprofileside from './userProfileSidebar/Myprofileside'
import {  } from "./UserDetail.css";

const UserDetail = () => {

  const [username, setUsername] = useState("")
  const [useremail, setUseremail] = useState("")
  const [usernumber, setUsernumber] = useState("")

  const fatch = async () => {

    try {
      const response = await fetch("http://localhost:5200/user/current", { credentials: "include" })
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);

      }
      const data = await response.json();
      console.log(data)
      setUsername(data.message.name)
      setUseremail(data.message.email)
      setUsernumber(data.message.phone)






    } catch (error) {
      console.log(error)
    }



  }



  useEffect(() => {
    fatch()
  }, [])


  return (
    <>
    <div className='profile'>

      <div>
        <Myprofileside />
      </div>


    <div className='user-info'>

        <h1>Personal details</h1>
      <div className='user-data'>
        <label>Name:</label>
        <input type="text" placeholder={username} disabled />

        </div>
        <div className='user-data'>
        <label>Your Gendar:</label>
          <p style={{display:"flex"
            ,alignItems:"center",gap:"1vw",
            fontSize:"1vw"
          }}>
            <label>male:</label>
            <input type="checkbox" placeholder='Male'/>
            <label>Female:</label>
            <input type="checkbox" placeholder='Female'/>
          </p>
          </div>

          <div className='user-data'>
          <label>Email:</label>
          <input type="text" placeholder={useremail} />

          </div>

          <div className='user-data'>
          <label>Mobile number:</label>
          <input type="number" placeholder={usernumber} />

          </div>
     


      

    </div>
    </div>
    </>
  )
}

export default UserDetail