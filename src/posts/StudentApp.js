import React, { useState } from 'react'
import '../studentstyle.css'
import StudentDetail from './StudentDetail'
import StudentData  from '../data/students.json'

function StudentApp () {
  const [searchTerm, setSearchTerm] = useState("")

  return (
    <div className="wrapper">
      <div className="mainparent">
        <input type="text" placeholder="Search by name" onChange={event => {setSearchTerm(event.target.value)}}/>
        {StudentData.students.map((studentDetail, index) => (
          <div key={index}>
            <StudentDetail studentDetail={studentDetail}/>
            <hr/>
          </div>
        ))}
      </div>
    </div>
  )
}


export default StudentApp