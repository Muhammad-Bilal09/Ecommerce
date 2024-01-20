import React from 'react'

export default function Register() {
  return (
    <>
    <div className="cotainer">
        <div className="row">
            <div className="col">
                <div className="card mt-5 w-50" >
                    <div className="card-body">
                        <h1 className="card-title text-center">Register</h1>
                      <input type="email" className='form-control' placeholder='enter your email' />
                      <input type="password" className='mt-2 form-control' placeholder='enter your password' />
                    <button className='mt-2 form-control btn btn-danger '>Register Now</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}
