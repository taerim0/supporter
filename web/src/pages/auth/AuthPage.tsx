import { useNavigate, useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';


const AuthPage = () => {
    const navigation = useNavigate();
    const location = useLocation();

    const [mode, setMode] = useState<string>();
    setMode(location.state);

    const [ID, setID] = useState();
    const [PW, setPW] = useState();
    const [PWC, setPWC] = useState();

    useEffect(() => {
        fetch("https://localhost:3000/auth/login_status", {
            credentials: 'include',
        })
        .then((res) => res.json())
        .then((json) => {
            if (json.login_status === 'isloggedin') {
                setMode("Log Out");
            }
            else {
                if (mode === undefined)
                    setMode("Log In");
            }
        })
    })

    if (mode === "Log In") {
        return (
            <div>
                로그인
            </div>
        )
    }
    else if (mode === "Register") {
        return (
            <div>
                회원가입
            </div>
        )
    }
    else {
        return (
            <div>
                로그아웃
            </div>
        )
    }
};

export default AuthPage;