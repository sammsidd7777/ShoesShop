import React from 'react'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'

const SingUp = () => {
  const navigate = useNavigate();

  async function signupHandler(e) {
    try {
      e.preventDefault()
      console.log("Form submission attempt")
      const name = e.target.name.value
      const email = e.target.email.value
      const phone = e.target.phone.value
      const password = e.target.password.value
      const userData = {name, email, phone, password}

      let response = await fetch("http://localhost:5200/user/signup", {
        method: "POST",
        headers: {
          "content-type": "application/json"
        },
        body: JSON.stringify(userData)
      }) 

      if(!response.ok){
        response = await response.json()
        throw new Error(response.message)
      }

      response = await response.json();
      navigate("/login")
      // console.log(response)
    } catch (error) {
      console.log(error.message)
    }



  }




  return (
    <div>




      <div className='login-page'>
        <div className='login-image'>

          <img src='https://narawear.com/assets/LoginImage-lh_t_JZT.jpg' alt=' ' />



        </div>
        <div className='login-deatils'>

          <h2>Welcome to</h2>
          <h1>Malkhani Store</h1>


          <form className='input' onSubmit={signupHandler}>
            <label>Your name*</label>
            <input name='name' type='text' id='' placeholder='Your name..' />

            <label>Phone Number*</label>
            <input name='phone' type='number' placeholder='password' />


            <label>Email Id*</label>
            <input type='email' name='email' id='email' placeholder='email' />

            <label>Password*</label>
            <input type='password' name='password' placeholder='password' />
            <div>
              <h5>By Signing in , I agree to Terms and Conditions and Privacy Policy</h5>
              <button>Singup</button>

            </div>
          </form>



          <p>Already have a account    <Link to={"/login"}> Login</Link></p>






        </div>



      </div>



    </div>
  )
}

export default SingUp