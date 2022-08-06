import './index.css'

const NavBar = props => {
  const {score, time} = props

  return (
    <nav className="nav-bar">
      <ul className="nav-left">
        <li>
          <img
            src="https://assets.ccbp.in/frontend/react-js/match-game-website-logo.png"
            alt="website logo"
            className="logo"
          />
        </li>
      </ul>
      <ul className="nav-right">
        <li>
          <p className="score">
            Score: <span>{score}</span>
          </p>
        </li>
        <li className="nav-timer">
          <img
            src="https://assets.ccbp.in/frontend/react-js/match-game-timer-img.png"
            alt="timer"
            className="timer-img"
          />
          <p className="time">{time} sec</p>
        </li>
      </ul>
    </nav>
  )
}

export default NavBar
