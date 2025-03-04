import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import './MainPage.css';
import Logo from './tempLogozz.png';

const MainPage = () => {
    const navigation = useNavigate();

    return (
        <div className="MainContainer">
            <div className="LogoBackground">
                
            </div>
            <div className="LogoBox">
                <img src={Logo} className='Logo' />
            </div>
            <div className="LoginBox">
                <div className="SignIn" onClick={()=>{navigation('/auth')}}>
                    <a>로그인쓰</a>
                </div>
                <div className="SignUp" onClick={()=>{navigation('/auth')}}>
                    <a>횐가입쓰</a>
                </div>
            </div>
            <div className="ContentsBox">코딩공부한걸기록하고공유할수있는싸이트가있따?뿌슝빠슝슝너무쩔잖아반드시이용해야겠는걸~~~</div>
        </div>
    )
};

export default MainPage;