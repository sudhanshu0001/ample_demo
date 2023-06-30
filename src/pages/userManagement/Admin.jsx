import React from 'react'
import Sidebar from '../../partials/Sidebar'
import Header from '../../partials/Header'
// import { BsCreditCardFill } from 'react-icons/bs'
import {FaPencilAlt} from 'react-icons/fa'
import {MdDeleteForever} from 'react-icons/md'

const Admin = () => {
  return (
    <div className="flex h-screen overflow-hidden">
        <Sidebar  />
        <div className="relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden">
        <Header  />

        <div className='p-3 container-fluid'>
         <div className='text-right container'>
        <button className='create-admi-btn btn btn-primary'> Create Admin </button>
        </div>
            <table className='table table-striped mt-4'>
            <thead>
                    <th>User Name</th>
                    <th> Email</th>
                    <th>Contact Number</th>
                    <th>  Status</th>
                    <th> Edit</th>
                    <th>Delete</th>
            </thead>
            <tbody className='tbody-lineHi'>
                <tr>
                    <td>rahul</td>
                    <td>rahul.bathri@mail.com</td>
                    <td>9512367891</td>
                    <td> <button className='btn btn-success'>Active</button></td>
                    <td> <button className='edit-btn'> <i className='edit-icon'><FaPencilAlt/></i></button> </td>
                    <td> <button className='delete-btn' onClick={()=>{confirm("Delete") }}> <i className='delete-icon'> <MdDeleteForever/></i> </button></td>
                </tr>

                <tr>
                   <td>Ankit</td>
                    <td>Ankit.sharma@mail.com</td>
                    <td>8712367845</td>
                    <td> <button className='btn btn-danger'>Deactive</button></td>
                    <td> <button className='edit-btn'> <i className='edit-icon'><FaPencilAlt/></i></button> </td>
                    <td> <button className='delete-btn' onClick={()=>{confirm("Delete") }}> <i className='delete-icon'> <MdDeleteForever/></i> </button></td>
                </tr>

                <tr>
                    <td>Shubham</td>
                    <td>Shubham.bathri@mail.com</td>
                    <td>7845123698</td>
                    <td> <button className='btn btn-success'>Active</button></td>
                    <td> <button className='edit-btn'> <i className='edit-icon'><FaPencilAlt/></i></button> </td>
                    <td> <button className='delete-btn' onClick={()=>{confirm("Delete") }}> <i className='delete-icon'> <MdDeleteForever/></i> </button></td>
                </tr>

                <tr>
                   <td>yash</td>
                    <td>yash.thakur@mail.com</td>
                    <td>7531426987</td>
                    <td> <button className='btn btn-success'>Active</button></td>
                    <td> <button className='edit-btn'> <i className='edit-icon'><FaPencilAlt/></i></button> </td>
                    <td> <button className='delete-btn' onClick={()=>{confirm("Delete") }}> <i className='delete-icon'> <MdDeleteForever/></i> </button></td>
                </tr>
                <tr>
                    <td>rahul</td>
                    <td>rahul.bathri@mail.com</td>
                    <td>9512367891</td>
                    <td> <button className='btn btn-success'>Active</button></td>
                    <td> <button className='edit-btn'> <i className='edit-icon'><FaPencilAlt/></i></button> </td>
                    <td> <button className='delete-btn' onClick={()=>{confirm("Delete") }}>  <i className='delete-icon'> <MdDeleteForever/></i> </button></td>
                </tr>

                <tr>
                   <td>Ankit</td>
                    <td>Ankit.sharma@mail.com</td>
                    <td>8712367845</td>
                    <td> <button className='btn btn-danger'>Deactive</button></td>
                    <td> <button className='edit-btn'> <i className='edit-icon'><FaPencilAlt/></i></button> </td>
                    <td> <button className='delete-btn' onClick={()=>{confirm("Delete") }}> <i className='delete-icon'> <MdDeleteForever/></i> </button></td>
                </tr>
            </tbody>

            </table>
        </div>
        </div>
    </div>

  )
}

export default Admin
