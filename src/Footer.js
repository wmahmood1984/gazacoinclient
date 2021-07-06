import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import logo from './img/hr-1200x-01.png'

export default function Footer() {
    const address = "0xC67666c16c85860Fbc8da22ae631BA8914f13FBB"
    return (
        <div>
            <div>
                <img style={{width:"70px",height:"70px"}} src={logo}></img>
            </div>
            <p>Contract address<a>{address}</a></p>
            <p>Copyright ©"Gaza Coin 2021". All rights reserved.</p>
        </div>
    )
}
