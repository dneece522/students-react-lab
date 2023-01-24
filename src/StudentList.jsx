import Student from "./Student"

const StudentList = (props) => {
  return (
    < >
      {props.students.map(student =>
        <div>
          <h3>This student's name is {student.name}, and here's a little bit about them:</h3>
          <p>{student.bio}</p> 
          <Student student={student}/>
        </div>
      )}
    </>
  )
}

export default StudentList