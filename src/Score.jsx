const Score = (props) => {
  return (
    < >
      {props.scores.map(score => 
        <p>They scored a {score.score} on {score.date}.</p>  
      )}
    </>
  )
}

export default Score