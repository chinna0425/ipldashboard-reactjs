import './index.css'

const LatestMatch = props => {
  const {datasend} = props
  const {latestMatchDetails1} = datasend
  const {competingTeam, competingTeamLogo, date} = latestMatchDetails1

  /* while destructring the latestMatchDetails1 it is not working but without destructring it is printing in console */

  console.log(latestMatchDetails1)
  return (
    <div>
      <h1>Hello</h1>
    </div>
  )
}
export default LatestMatch

/* <div>
        <h1>{competingTeam}</h1>
        <p>{date}</p>
        <p>{venue}</p>
        <p>{result}</p>
      </div>
      <img src={competingTeamLogo} className="match-logo" />
      <div>
        <h1>First Innings</h1>
        <p>{firstInnings}</p>
        <h1>Second Innings</h1>
        <p>{secondInnings}</p>
        <h1>Man Of The Match</h1>
        <p>{manOfTheMatch}</p>
        <h1>Umpires</h1>
        <p>{umpires}</p>
      </div> */
