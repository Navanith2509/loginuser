// Write your JS code here
import {withRouter} from 'react-router-dom'

import Header from '../Header'
import LogoutButton from '../LogoutButton'

const About = () => {
  return (
    <div>
      <Header />
      <h1>About Route</h1>
      <LogoutButton />
    </div>
  )
}
export default withRouter(About)
