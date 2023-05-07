import {Component} from 'react'
import LatestMatch from '../LatestMatch'
import MatchCard from '../MatchCard'
import './index.css'

class TeamMatches extends Component {
  state = {teamsListItem: []}

  componentDidMount() {
    this.getTeamMatches()
  }

  getTeamMatches = async () => {
    const response = await fetch('https://apis.ccbp.in/ipl/KKR')
    const data = await response.json()
    const latestdata = {
      teambannerurl: data.team_banner_url,
      recentmatches: data.recent_matches,
      latestmatchdetails: data.latest_match_details,
    }
    const {recentmatches, latestmatchdetails, teambannerurl} = latestdata
    const latestMatchDetails1 = {
      competingTeam: latestmatchdetails.competing_team,
      competingTeamLogo: latestmatchdetails.competing_team_logo,
      date: latestmatchdetails.date,
      firstInnings: latestmatchdetails.first_innings,
      id: latestmatchdetails.id,
      result: latestmatchdetails.result,
      venue: latestmatchdetails.venue,
      umpires: latestmatchdetails.umpires,
      manOfTheMatch: latestmatchdetails.man_of_the_match,
      matchStatus: latestmatchdetails.match_status,
      secondInnings: latestmatchdetails.second_innings,
    }
    const recentMatches1 = recentmatches.map(each => ({
      competingTeam: each.competing_team,
      competingTeamLogo: each.competing_team_logo,
      date: each.date,
      firstInnings: each.first_innings,
      id: each.id,
      manOfTheMatch: each.man_of_the_match,
      matchStatus: each.match_status,
      result: each.result,
      secondInnings: each.second_innings,
      umpires: each.umpires,
      venue: each.venue,
    }))
    const updateddata = {
      latestMatchDetails1,
      recentMatches1,
      teambannerurl,
    }
    this.setState({teamsListItem: updateddata})
  }

  render() {
    const {teamsListItem} = this.state
    const {latestMatchDetails1, recentMatches1, teambannerurl} = teamsListItem
    console.log(latestMatchDetails1)
    return (
      <div className="team-match-container">
        <div className="team-match-inner-container">
          <img src={teambannerurl} className="banner-image" alt="banner" />
          <LatestMatch datasend={{latestMatchDetails1}} />
        </div>
      </div>
    )
  }
}
export default TeamMatches
