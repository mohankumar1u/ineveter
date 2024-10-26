import React from 'react'
import { Table, TableHead, TableBody, TableRow, TableCell, TableContainer, Paper } from '@mui/material';
import Visibility from '@mui/icons-material/Visibility';
import { useNavigate } from 'react-router-dom';
export default function Dashboard() {
  const navigate = useNavigate();
  const tabledata =[
    {
      "name": "Alice",
      "project": "Website Redesign",
      "status": "completed",
      "date": "2024-10-01"
    },
    {
      "name": "Bob",
      "project": "Mobile App",
      "status": "in progress",
      "date": "2024-10-15"
    },
    {
      "name": "Charlie",
      "project": "API Development",
      "status": "completed",
      "date": "2024-10-05"
    },
    {
      "name": "Diana",
      "project": "SEO Optimization",
      "status": "in progress",
      "date": "2024-10-12"
    },{
      "name": "Alice",
      "project": "Website Redesign",
      "status": "completed",
      "date": "2024-10-01"
    },
    {
      "name": "Bob",
      "project": "Mobile App",
      "status": "in progress",
      "date": "2024-10-15"
    },
    {
      "name": "Charlie",
      "project": "API Development",
      "status": "completed",
      "date": "2024-10-05"
    },
    {
      "name": "Diana",
      "project": "SEO Optimization",
      "status": "in progress",
      "date": "2024-10-12"
    }
  ]
  return (
    <div><TableContainer component={Paper}>
    <Table>
      <TableHead>
        <TableRow>
          <TableCell>Name</TableCell>
          <TableCell>Project</TableCell>
          <TableCell>Status</TableCell>
          <TableCell>Date</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {tabledata.map((row, index) => (
          <TableRow key={index}>
            <TableCell>{row.name}</TableCell>
            <TableCell>{row.project}</TableCell>
            <TableCell>{row.status}</TableCell>
            <TableCell>{row.date}</TableCell>
            <TableCell onClick={()=>{
              navigate('/analysis'); 
            }}><Visibility/></TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  </TableContainer></div>
  )
}
