import React, { useState } from 'react'
import { Alert, Button, Form } from 'react-bootstrap'
import { getUser, login } from '../../api/user';
import { useStore } from '../../store';
import { userLogin } from '../../store/user/actions';
import { useNavigate } from 'react-router-dom';


const LoginForm = () => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState(null)
    const { dispatchUser } = useStore();
    const navigate = useNavigate();

    const handleLogin = async(e) => {
        e.preventDefault();

        if (!email) {
            setError("Please enter your email")
            return
        }
        if (!password) {
            setError("Please enter your password")
            return
        }

        const payload = { email, password }//backende gidecek obje

       
        try {
            const resAuth= await login(payload);
            const { token } = resAuth;//login olduktan sonra response ile token geliyor
            localStorage.setItem("token", token);
            //normalde şifrelenerek saklanır

            const resUser = await getUser();//gelen user bilgisini merkezi state de saklayacağız
            dispatchUser(userLogin(resUser));
            navigate("/", {replace: true})//replace true yaparsak geriye dönmesini engelleriz,yani login sayfasına geri dönmeyecek

        } catch (error) {
            setError(error.message)
        }        
    }

  return (
    <Form noValidate onSubmit={handleLogin}>
        {error? <Alert variant='danger'>{error}</Alert> : null}
        <Form.Group className="mb-3" >
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="name@example.com"
            value={email} 
            onChange={(e) => setEmail(e.target.value)} />
        </Form.Group>

        <Form.Group className="mb-3" >
            <Form.Label>Password</Form.Label>
            <Form.Control type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)} />
        </Form.Group>

        <Button variant="primary" type="submit">Login</Button>

    </Form>
  )
}

export default LoginForm