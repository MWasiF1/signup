import React, { useState } from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import { useNavigate } from 'react-router-dom'

const Login = () => {
    const history = useNavigate();  

    const [inpval, setInpval] = useState({
        
        email: "",
        password: ""
        
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

        const getuserArr = localStorage.getItem("useryoutube");
        console.log(getuserArr);

    const { email, password} = inpval;

     if (email === "") {
        alert('email field is required!');
    } else if (!email.includes("@")) {
         alert('Please enter valid email addres');
    } else if (password === "") {
        alert('password field is reqiured!');
   } else if (password.length < 5) {
        alert('password length greater five');
   } 

    else {
        if (getuserArr && getuserArr.length) {
            const userdata = JSON.parse(getuserArr);
            const userlogin = userdata.filter((el, k) => {
                return el.email === email && el.password === password
            });

            if (userlogin.length === 0) {
                alert("invalid details")
            } else {
                console.log("user login succesfulyy");
                history("/details")

            }
        }
    }
   }


  return (
    <>
    <div className='Container mt-3'>
            <section >
                <div className='left_data'>
                    <h3 className="ms-5 col-rg-4">Sign In</h3>
                    
                       <Form>
                           
                           <Form.Group className="ms-5 mb-3 col-lg-4" controlId="formBasicEmail">
                              <Form.Control required type="email" name='email' onChange={getdata} placeholder="Enter email" />
                           </Form.Group>

                           <Form.Group className="mb-3 ms-5 col-lg-4" controlId="formBasicEmail">
                              <Form.Control required type="password" name='password' onChange={getdata} placeholder="Password" />
                           </Form.Group>
                            
                            <Button className=' ms-5 'onClick={addData} variant='primary' type='submit'>Submit</Button>
                       </Form>
                        
                </div>
            </section>
        </div>
    </>
  )
}
export default Login
