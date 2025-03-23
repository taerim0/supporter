import { useNavigate, useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';


const AuthPage = () => {
    const navigation = useNavigate();
    const location = useLocation();

    const mode = location.state;

    const [ID, setID] = useState();
    const [PW, setPW] = useState();
    const [PWC, setPWC] = useState();

    useEffect(() => {
        fetch("https://localhost:3000/api/auth/auth_check", {
            credentials: 'include',
        })
        .then((res) => {res.json})
        .then((json) => {
            
        })
    })

    return (
        <div>
            디스 이즈 로긴
        </div>
    )
};

export default AuthPage;