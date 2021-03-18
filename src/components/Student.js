import React from 'react'
import StudentItem from './StudentItem';


  const Students = ({ students }) => {
   
      return (
        <div style={userStyle}>
          {students.map(student => (
           <StudentItem key={student.id} student={student} />
          ))}
        </div>
      )
  
   
  
}


const userStyle = {
  display :'grid',
  gridTemplateColumns: 'repeat(3, 1fr)',
  gridGap: '1rem'
}
export default Students;
