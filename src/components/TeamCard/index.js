import {Link} from 'react-router-dom'
import './index.css'

const TeamCard = props => {
  const {eachcard} = props
  const {id, name, teamImageUrl} = eachcard
  return (
    <Link to={`/team-matches/${id}`} className="link-item">
      <li className="list-item">
        <img src={teamImageUrl} alt="team" className="team-logo" />
        <h1 className="teamcard-heading">{name}</h1>
      </li>
    </Link>
  )
}
export default TeamCard
