import LoginForm from "../components/LoginForm.jsx";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function LoginPage() {
  const navigate = useNavigate()

  const handleLogin = async (event, FormData) => {
    event.preventDefault()

    //? Make a request to POST /api/auth with the data from formData.
    const res = await axios.post('/api/auth',FormData)

    //? If the response is {success: true}, then navigate to the /me page.
    if(res.data.success) {
      navigate('/me')
    }
  }

  return (
    <>
      <h1>Log In</h1>
      <LoginForm onLogin={handleLogin}/>
    </>
  );
}
