import React from 'react'
import { Table, TableHead, TableBody, TableRow, TableCell, TableContainer, Paper } from '@mui/material';
import Visibility from '@mui/icons-material/Visibility';
import { useNavigate } from 'react-router-dom';
export default function Dashboard() {
  const navigate = useNavigate();
  const tabledata =[
    {
      "name": "Rupesh",
      "market": "St jacobs Farmers market",
      "status": "completed",
      "date": "2024-10-01"
    },
    {
      "name": "Bob",
      "market": "Kitchener market",
      "status": "in progress",
      "date": "2024-10-15"
    },
    {
      "name": "Charlie",
      "market": "Yes market",
      "status": "completed",
      "date": "2024-10-05"
    },
    {
      "name": "Diana",
      "market": "Amiri market",
      "status": "in progress",
      "date": "2024-10-12"
    },{
      "name": "Alice",
      "market": "Walmart",
      "status": "completed",
      "date": "2024-10-01"
    },
    {
      "name": "Bob",
      "market": "No frills",
      "status": "in progress",
      "date": "2024-10-15"
    },
    {
      "name": "Charlie",
      "market": "Costco",
      "status": "completed",
      "date": "2024-10-05"
    },
    {
      "name": "Diana",
      "market": "SEO Optimization",
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
          <TableCell>Market</TableCell>
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
