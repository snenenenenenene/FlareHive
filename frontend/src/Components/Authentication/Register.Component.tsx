import {useState} from 'react';
import axios from 'axios';
import { useHistory } from "react-router";
import { Link } from 'react-router-dom';

export default function Register() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const history = useHistory();

  const login = (e : any) => {
    e.preventDefault();
    if (email === "admin" && password === "admin") {
      console.log("Logged in!")
      const user = {
        email: email,
        password: password,
        authenticated: true,
      }
      localStorage.setItem('user', JSON.stringify(user));
      history.push(`/home`);
      return '';
    }
    axios.post(`${process.env.REACT_APP_API_URL}/register`, 
    {
      email: email,
      password: password
    })
    .then(response => {
      console.log(response)
    })
    .catch(error => {
      console.log(error)
    })
  }

  return (
    <div className="login-container">
      <div>
      <form className="login-form" onSubmit={e => login(e)}>
        <div>
        <h1>Welcome!</h1>
        <p>Meet people from hives all around the world.</p>
        <p>Share your interests &amp; find new like-minded bees.</p>
      </div>
        <div>
        <input className="login-input" onChange={e => setEmail(e.target.value)} placeholder="EMAIL" ></input>
        </div>
        <div>
        <input className="login-input" onChange={e => setPassword(e.target.value)} placeholder="PASSWORD" ></input>
        </div>
        <div>
        <button className="login-button" type="submit" onClick={e => login(e)}>REGISTER</button>
        </div>
        <div className="login-redirect">
          Go to 
      <Link to="/login"> Login</Link>
      </div>
      </form>
      </div>
    </div>
  );
}
