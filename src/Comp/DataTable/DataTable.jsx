import './dataTable.scss'
import { DataGrid } from '@mui/x-data-grid';
import {userRows,userColumns} from '../../dataTableSource'
import { Link, useLocation, } from 'react-router-dom';
import { useState } from 'react';

const DataTable=({title})=>{
  const [data , setData] = useState(userRows)

  const loc = useLocation()
  const handleDelete=(id)=>{
    const formattedData= data.filter((i )=> i.id !== id )
    setData(formattedData)
  }
  // console.log('/' +(title.toString().split(' ')[0].toLowerCase()) +'/new');
  const actionColumn =[
    {
      field: "action",
      headerName: "Action",
      width: 300,
      renderCell: (params) => {
        return (
          <div className="cellAction">
            <Link to='/users/test' className='link' >
            <div className="view">View  </div></Link>
            
            <div className="delete" onClick={()=>  handleDelete(params.id)  } >Delete </div>
          </div>
        );
      },
    },
  ]
  return (
    <div className='dataGrid' >
        {(loc.pathname === '/users' || loc.pathname === '/products') &&
        
        (
          <div className="top">
          <h2>{title}</h2>
          <Link to={'/' +(title.toString().split(' ')[0].toLowerCase()) +'/new'}>
          <button className='add' >Add New</button>
          </Link>
        </div>
        )}
     

        <DataGrid
         className='exactTable'
         sx={{fontSize: 15  }}
        rows={data}
        columns={userColumns.concat(actionColumn)  }
        pageSize={9}
        rowsPerPageOptions={[9]}
        checkboxSelection
        disableSelectionOnClick
        autoPageSize={true}
        autoHeight
        
        density={'standard'}
      />
    </div>
  )
}

export default DataTable
