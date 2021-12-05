import React, { useState } from 'react'
import StudentData  from '../data/students.json'




function StudentDetail () {
    const [searchTerm, setSearchTerm] = useState("")
    const [showGrades, setGrades] = useState(false)
   let studentID

    return (
        <div className="mainparent">
        <input type="text" placeholder="Search by name" onChange={ event => {setSearchTerm(event.target.value)}}/>
{ StudentData.students.filter((studentDetail) => {
           if (searchTerm === "") {
             return studentDetail
           } else if (studentDetail.firstName.toLowerCase().includes(searchTerm.toLowerCase()) || studentDetail.lastName.toLowerCase().includes(searchTerm.toLowerCase()))
             return studentDetail
           }
         ).map((studentDetail, key) => {
            return  (
                
                <div className="child" key={key}>
                <img src={studentDetail.pic} alt="Student"></img>
                <h1>{studentDetail.firstName.toUpperCase()} {studentDetail.lastName.toUpperCase() } <button onClick={() => setGrades(!showGrades)}>+</button> </h1>
                <p>Email: {studentDetail.email}</p>
                <p>Company: {studentDetail.company}</p>
                <p>Skill: {studentDetail.skill}</p>
                <p>Average: {studentDetail.grades[0]}</p>
                
                
                {
                  showGrades?<div>
                  <p>Test 1: {studentDetail.grades[0]}</p>
                  <p>Test 2: {studentDetail.grades[1]}</p>
                  <p>Test 3: {studentDetail.grades[2]}</p>
                  <p>Test 4: {studentDetail.grades[3]}</p>
                  <p>Test 5: {studentDetail.grades[4]}</p>
                  <p>Test 6: {studentDetail.grades[5]}</p>
                  <p>Test 7: {studentDetail.grades[6]}</p>
                  <p>Test 8: {studentDetail.grades[7]}</p>
                  
                  </div>:null
                }   <hr></hr>  
                </div>     
         
)})}
    </div>
)}

export default StudentDetail;