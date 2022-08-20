import React from 'react'
import Navbar from '../../Comp/Navbar/Navbar'
import Sidebar from '../../Comp/Sidebar/Sidebar'
import DataTable from '../../Comp/DataTable/DataTable'
import './list.scss'
const List = ({title}) => {
  return (
    <div  className='userList'>
      <Sidebar/>
      <div className="listContainer">
        <Navbar />
        <DataTable title={title}  />
      </div>
    </div>
  )
}

export default List
