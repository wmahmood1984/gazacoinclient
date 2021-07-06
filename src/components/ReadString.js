import { number } from 'assert-plus'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { BuyFunction } from '../store/adoptSlice';
//import BigNumber from 'big-number'
import progress from '../img/progress.gif'

export default function ReadString(props) {

       

    const [Puramount,setPurAmount] = useState()
    const dispatch = useDispatch()

    const balance = useSelector((state)=>{
      return Number(state.adoptReducer.balance);
    });

    const address = useSelector((state)=>{
      return state.adoptReducer.address;
    });
    





   


    const web3 = useSelector((state)=>{
      return state.adoptReducer.web3;
    });
    



const setValue = (e) => {
  e.preventDefault()
  dispatch(BuyFunction({value: Puramount}))
  setPurAmount("")
  };

  const arrayAwait = useSelector((state)=>{
    return state.adoptReducer.arrayAwait;
  });




 

  const getSellTxStatus = () => {
    if(arrayAwait == null) return 

    else if (arrayAwait == true) return <div style={{fontFamily:"sans-serif",fontSize:"16px",lineHeight:"24px",textDecoration:"none solid rgb",textAlign:"center",wordSpacing:"0px",backgroundColor:"#020C2c",backgroundPosition:"0% 0%",color:"#FFFFFF",minHeight:"100px",width:"150px",margin:"0 570px", padding:"auto",display:"block",transform:"none",transition:"all 0s ease 0s", boxSizing:"border-box"}}>
      <p>Transaction is pending</p><br/><img style={{height:"70px"}} src={progress}></img></div>

    else if (arrayAwait == false) return <div style={{fontFamily:"sans-serif",fontSize:"16px",lineHeight:"24px",textDecoration:"none solid rgb",textAlign:"center",wordSpacing:"0px",backgroundColor:"#020C2c",backgroundPosition:"0% 0%",color:"#FFFFFF",minHeight:"50px",width:"150px",margin:"0 570px", padding:"auto",display:"block",transform:"none",transition:"all 0s ease 0s", boxSizing:"border-box"}}>
    <p>Transaction is Successful</p></div>

  };




    return (
        <div>

             
            <div style={{display:"flex"}}>
                
                <div style={{backgroundColor:"#020C2C", backgroundPosition:"0% 0%", color:"#FFFFFF", fontFamily:"sans-serif", fontSize:"16px", lineHeight:"24px", textDecoration:"none solid rgb(255,255,255)",textAlign:"center", wordSpacing:"0px", height:"220px", width:"1140px", margin:"200px 0 24px 24px", padding:"20px"}}>
                <h1 style={{margin:"1px"}}>{(balance/1000000000000000000).toFixed(0) }</h1><br/>
                <h2 style={{margin:"1px"}}>Your Gaza Coin Balance</h2><br/>
             

                </div>
           
                
                 
            </div>
            
            
            


                <div style={{backgroundColor:"#020C2C", backgroundPosition:"0% 0%", color:"#FFFFFF", fontFamily:"sans-serif", fontSize:"16px", lineHeight:"24px", textDecoration:"none solid rgb(255,255,255)",textAlign:"center", wordSpacing:"0px", height:"220px", width:"1140px", margin:"100px 0 24px 24px", padding:"20px"}}>
                <h2 style={{margin:"1px"}}>Buy Gaza Coins</h2><br/>
        
                <label> Amount of BNBs <br/>
                <input value={Puramount} type="value"            
                  onChange={({ target }) => {setPurAmount(target.value)}}/></label><br/>
               
                <button onClick={setValue}>BUY Gaza Coin</button>
               
                </div>
            
                

               

            <div>{getSellTxStatus()}</div> 
            

        
        </div>
    )
}

