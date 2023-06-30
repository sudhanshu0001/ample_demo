import React from 'react'

import Sidebar from '../../partials/Sidebar'
import Header from '../../partials/Header'
// import { BsCreditCardFill } from 'react-icons/bs'
// import {FaPencilAlt} from 'react-icons/fa'
// import {MdDeleteForever} from 'react-icons/md'

const TotalCase = () => {
  return (
    <div className="flex h-screen overflow-hidden">
    <Sidebar  />
    <div className="relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden">
    <Header  />

    <div className='p-3 container-fluid'>
     <div className=' container'>
     <div className="d-flex justify-content-end ">
    
    <input className='from-control' type="text" placeholder='Search Here...' />  
    <div className='ms-5'>
        From <input type="date" name="" id=""/> to <input type="date" name="" id="" />

    </div>
    <button className='create-admi-btn btn btn-primary ms-4'> Add New Case </button>
    </div>
    </div>
        <table className='table table-striped mt-4'>
        <thead>
                <th>Sno.</th>
                <th> Comapny name</th>
                <th>Verified by</th>
                <th>  Refere By </th>
                <th>  Policy No</th>
                <th>Customer Name</th>
                <th>Address</th>
                <th>City</th>
        </thead>
        <tbody className='tbody-lineHi'>
            <tr>
                <td>1</td>
                <td>Dashboard</td>
                <td>Super Admin</td>
                <td>dashboard</td>
                <td>ED65676</td>
                <td>Rahul Bathri</td>
                <td> 6/123 WWW Nagar</td>
                <td>Indore</td>
                {/* <td> <button className='edit-btn'> <i className='edit-icon'><FaPencilAlt/></i></button> </td>
                <td> <button className='delete-btn' onClick={()=>{confirm("Delete") }}> <i className='delete-icon'> <MdDeleteForever/></i> </button></td> */}
            </tr>

            <tr>
                <td>1</td>
                <td>Dashboard</td>
                <td>Super Admin</td>
                <td>dashboard</td>
                <td>ED65676</td>
                <td>Rahul Bathri</td>
                <td> 6/123 WWW Nagar</td>
                <td>Indore</td>
                {/* <td> <button className='edit-btn'> <i className='edit-icon'><FaPencilAlt/></i></button> </td>
                <td> <button className='delete-btn' onClick={()=>{confirm("Delete") }}> <i className='delete-icon'> <MdDeleteForever/></i> </button></td> */}
            </tr>

            <tr>
                <td>1</td>
                <td>Dashboard</td>
                <td>Super Admin</td>
                <td>dashboard</td>
                <td>ED65676</td>
                <td>Rahul Bathri</td>
                <td> 6/123 WWW Nagar</td>
                <td>Indore</td>
                {/* <td> <button className='edit-btn'> <i className='edit-icon'><FaPencilAlt/></i></button> </td>
                <td> <button className='delete-btn' onClick={()=>{confirm("Delete") }}> <i className='delete-icon'> <MdDeleteForever/></i> </button></td> */}
            </tr>
            <tr>
                <td>1</td>
                <td>Dashboard</td>
                <td>Super Admin</td>
                <td>dashboard</td>
                <td>ED65676</td>
                <td>Rahul Bathri</td>
                <td> 6/123 WWW Nagar</td>
                <td>Indore</td>
                {/* <td> <button className='edit-btn'> <i className='edit-icon'><FaPencilAlt/></i></button> </td>
                <td> <button className='delete-btn' onClick={()=>{confirm("Delete") }}> <i className='delete-icon'> <MdDeleteForever/></i> </button></td> */}
            </tr>
            <tr>
                <td>1</td>
                <td>Dashboard</td>
                <td>Super Admin</td>
                <td>dashboard</td>
                <td>ED65676</td>
                <td>Rahul Bathri</td>
                <td> 6/123 WWW Nagar</td>
                <td>Indore</td>
                {/* <td> <button className='edit-btn'> <i className='edit-icon'><FaPencilAlt/></i></button> </td>
                <td> <button className='delete-btn' onClick={()=>{confirm("Delete") }}> <i className='delete-icon'> <MdDeleteForever/></i> </button></td> */}
            </tr>

            <tr>
                <td>1</td>
                <td>Dashboard</td>
                <td>Super Admin</td>
                <td>dashboard</td>
                <td>ED65676</td>
                <td>Rahul Bathri</td>
                <td> 6/123 WWW Nagar</td>
                <td>Indore</td>
                {/* <td> <button className='edit-btn'> <i className='edit-icon'><FaPencilAlt/></i></button> </td>
                <td> <button className='delete-btn' onClick={()=>{confirm("Delete") }}> <i className='delete-icon'> <MdDeleteForever/></i> </button></td> */}
            </tr>
        </tbody>

        </table>
    </div>
    </div>
</div>
  )
}

export default TotalCase
