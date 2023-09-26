import ABInput from '../components/ABInput'
import ABButton from '../components/ABButton'
import { useState } from "react";
import { fbLogin } from '../config/firebasemethod';
import { Link, useNavigate } from 'react-router-dom';



// interface user {
//   userName: string
//   email: string
//   password: string
// }

export default function Login() {
  const [model, setModel] = useState<any>({})

  const fillModel = (key: any, val: any) => {
    model[key] = val
    setModel({ ...model })
  }

  // const [model, setModel] = useState<user>({
  //   userName: "",
  //   email: "",
  //   password: "",
  // });
  // const fillModel = (key: keyof user, val: string) => {
  //   model[key] = val;
  //   setModel({ ...model })
  // }

  const navigate = useNavigate()


  const loginUser = () => {
    console.log(model)
    fbLogin(model).then(
      (res) => {
        console.log(res)
        navigate('/')
      })
      .catch((err) => {
        alert('Incorrect Email Or password')
      })
  }
  return (
    <>
      <div className="h-screen bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% flex justify-center items-center ">
        <div className='border border-black rounded-lg p-7 w-[25%]  text-center'>
          <div className='p-3'>
            <p className='text-5xl font-bold'>Login</p>
          </div>
          <div className='my-4'>
            <ABInput label='Email'
              value={model.email}
              onChange={(e: any) => { fillModel("email", e.target.value) }}
            />
          </div>
          <div className='my-4'>
            <ABInput label='Password'
              type='password'
              value={model.password}
              onChange={(e: any) => { fillModel("password", e.target.value) }}
            />
          </div>
          <div className='my-4 '>
            <ABButton
              onClick={loginUser}
              className='bg-gradient-to-r from-sky-400 to-blue-900 hover:from-lime-300 hover:to-green-800' label='Login' />
          </div>
          <div>
            <p className='py-3'>Are You New To App?</p>
            <Link className='font-bold text-lg' to={'/signup'}>  Sign Up</Link>
          </div>
        </div>
      </div>
    </>
  )
}
