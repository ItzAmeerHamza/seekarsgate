import React,{useState} from 'react'
import Navbar from './Navbar'
import { Paper, Table, TableHead,Typography,Modal, TableContainer, TableRow, TableCell, TableBody, Button } from '@mui/material';
import { Container } from '@mui/system';
import Footer from '../Footer';
const Learners = () => {
    const ourCourses = [{
        name:"John Smith",
        releasedDate:"20-5-2023",
        city:"California",
        email:"johnsmith@gmail.com"
    },{
        name:"John Smith",
        releasedDate:"20-5-2023",
        city:"California",
        email:"johnsmith@gmail.com"
    },{
        name:"John Smith",
        releasedDate:"20-5-2023",
        city:"California",
        email:"johnsmith@gmail.com"
    },{
        name:"John Smith",
        releasedDate:"20-5-2023",
        city:"California",
        email:"johnsmith@gmail.com"
    },{
        name:"John Smith",
        releasedDate:"20-5-2023",
        city:"California",
        email:"johnsmith@gmail.com"
    },{
        name:"John Smith",
        releasedDate:"20-5-2023",
        city:"California",
        email:"johnsmith@gmail.com"
    },{
        name:"John Smith",
        releasedDate:"20-5-2023",
        city:"California",
        email:"johnsmith@gmail.com"
    }]
  return (
    <>
    <Navbar/>
    <Container maxWidth="lg" sx={{ textAlign: "center",mt:"20px" }}>
       <br/>
        
                    <TableContainer component={Paper}>
                        <Table>
                            <TableHead sx={{ background: "#1769aa" }}>
                                <TableRow>
                                    <TableCell><Typography color="white" variant="h6"><b>Name</b></Typography></TableCell>
                                    <TableCell><Typography color="white" variant="h6"><b>Joining Date</b></Typography></TableCell>
                                    <TableCell><Typography color="white" variant="h6"><b>City</b></Typography></TableCell>
                                    <TableCell><Typography color="white" variant="h6"><b>Email</b></Typography></TableCell>
                                    <TableCell><Typography color="white" variant="h6"><b>Remove Learner</b></Typography></TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>

                                {ourCourses.map((p) => {
                                    return (
                                        <>
                                            <TableRow>
                                                <TableCell><Typography>{p.name}</Typography></TableCell>
                                                <TableCell><Typography>{p.releasedDate}</Typography></TableCell>
                                                <TableCell><Typography>{p.city}</Typography></TableCell>
                                                <TableCell><Typography>{p.email}</Typography></TableCell>
                                                <TableCell><Typography><Button variant="contained" sx={{ background: "red" }}>Delete</Button></Typography></TableCell>
                                            </TableRow>
                                        </>
                                    )
                                })}

                            </TableBody>

                        </Table>
                    </TableContainer><br />

                </Container><br/><br/>
                <Footer/>
    </>
  )
}

export default Learners