import Score from "./Score"

const Student = (props) => {
  return (
    < >
      <h4>Here are {props.student.name}'s scores:</h4>
      <Score scores={props.student.scores}/>
    </>
  )
}

export default Student