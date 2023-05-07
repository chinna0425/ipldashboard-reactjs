import {Component} from 'react'
import TeamCard from '../TeamCard'
import './index.css'

class Home extends Component {
  state = {cardItems: []}

  componentDidMount() {
    this.getthecarditems()
  }

  getthecarditems = async () => {
    const response = await fetch('https://apis.ccbp.in/ipl')
    const data = await response.json()
    const {teams} = data
    const updateddata = teams.map(eachitem => ({
      id: eachitem.id,
      name: eachitem.name,
      teamImageUrl: eachitem.team_image_url,
    }))
    this.setState({cardItems: updateddata})
  }

  render() {
    const {cardItems} = this.state
    return (
      <div className="home-container">
        <div className="logo-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/ipl-logo-img.png"
            className="dashboard-logo"
            alt="ipl logo"
          />
          <h1 className="home-heading">IPL Dashboard</h1>
        </div>
        <ul className="home-unorderedlist">
          {cardItems.map(eachi => (
            <TeamCard eachcard={eachi} key={eachi.id} />
          ))}
        </ul>
      </div>
    )
  }
}
export default Home
