import {Component} from 'react'
import {Redirect} from 'react-router-dom'
import Cookies from 'js-cookie'

class Login extends Component {
  onLogin = async (event) => {
    event.preventDefault()
    const url = "https://apis.ccbp.in/login"
    const userData = {
      message: 'Missing Authentication Token',
    }
    const options = {
      method: 'POST',
      body: JSON.stringify(userData),
    }
    const response = await fetch(url)
    const data = await response.json()
    if (response.ok === true) {
      console.log(data.jwt_token)
    }
  }

  onSuccess = jwtToken => {
    Cookies.set('jwt_token', jwtToken, {expires: 1})
    return <Redirect to="/" />
  }

  render() {
    return (
      <form onSubmit={this.onLogin}>
        <h1>Please Login</h1>
        <button type="submit">Login with sample creds</button>
      </form>
    )
  }
}
export default Login
