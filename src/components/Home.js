import React, { useState } from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import { NavLink } from 'react-router-dom'

export const Home = () => {

    const [inpval, setInpval] = useState({
        name: "",
        email: "",
        password: "",
        confirmpassword: ""
    })
    const [data,setData] = useState([]);
    console.log(inpval);

     const getdata = (e) => {
         //console.log(e.target.value);
         const { value, name } = e.target;
         //console.log(value,name);
         setInpval(() => {
            return {
                ...inpval,
                [name]: value
            }
        })
    }
 
    const addData = (e) => {
        e.preventDefault();

    const { name, email, password, confirmpassword } = inpval;

    if (name === "") {
        alert(' name field is required!');
    } else if (email === "") {
        alert('email field is required!');
    } else if (!email.includes("@")) {
         alert('Please enter valid email addres');
    } else if (password === "") {
        alert('password field is reqiured!');
   } else if (password.length < 5) {
        alert('password length greater five');
   } else if (confirmpassword === "") {
    alert('Confirm Password field is required');
} else if (password !== confirmpassword) {
     alert('Password and Confirm Password do not match!!!!');
}

    else {
       console.log("data added succesfully");
       localStorage.setItem("useryoutube",JSON.stringify([...data,inpval]));
   }
}

  return (
    <>
        <div className='Container mt-3'>
            <section >
                <div className='left_data'>
                    <h3 className="ms-5 col-rg-4">Sign Up</h3>
                    
                       <Form>
                            <Form.Group className=" ms-5 mb-3 col-lg-4" controlId="formBasicEmail">
                               <Form.Control required type="text" name='name' onChange={getdata} placeholder="Your Name" />
                           </Form.Group>

                           <Form.Group className="ms-5 mb-3 col-lg-4" controlId="formBasicEmail">
                              <Form.Control required type="email" name='email' onChange={getdata} placeholder="Enter email" />
                           </Form.Group>

                           <Form.Group className="mb-3 ms-5 col-lg-4" controlId="formBasicEmail">
                              <Form.Control required type="password" name='password' onChange={getdata} placeholder="Password" />
                           </Form.Group>

                           <Form.Group className="mb-3 ms-5 col-lg-4" controlId="formBasicPassword">
                              <Form.Control required type="password" name='confirmpassword' onChange={getdata} placeholder="Confirm Password" />
                           </Form.Group>
                            
                            <Button className=' ms-5 'onClick={addData} variant='primary' type='submit'>Submit</Button>
                        </Form>
                        <p className='mt-3 ms-5'>Already Have an Account <span><NavLink to='/login'>Sign In</NavLink></span> </p>
                </div>
            </section>
        </div>
    </>
  )
}
export default Home