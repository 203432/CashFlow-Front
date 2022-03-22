import React from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom'

const Login = () => {
    localStorage.removeItem('token')
    localStorage.removeItem('user_id')
    const navigate = useNavigate();
    const loginUser = () => {
        var postData = {
            username: document.getElementById('userL').value,
            password: document.getElementById('passL').value,
        }

        axios
            .post("http://localhost:8000/api/v1/login/", postData, {
                Headers: { 'Content-Type': 'application/json', },
            })
            .then(response => {
                localStorage.setItem('token', response.data.token)
                localStorage.setItem('user_id', response.data.user_id)
                //Redireccionamiento a el profile, con el id en la url
                alert('SE PUDOOOOO')
                navigate("/Home")
            }).catch(
                (error) => {
                    console.log(error.response.data);
                    alert('Hacen falta datos');
                }

            )
    }
    return (
        <div>
            <form>

                <div >

                    <input class="input is-info" type="text" autocomplete="off" id='userL' required />
                    <label>User</label>
                </div>

                <br /><br />

                <div >

                    <input class="input is-info" type="password" id='passL' required />
                    <label> Password</label>
                </div>
                

            </form>
            <header >
            <button onClick={loginUser}><span>Entrar</span></button>
          </header>
        </div>
    )
}

export default Login