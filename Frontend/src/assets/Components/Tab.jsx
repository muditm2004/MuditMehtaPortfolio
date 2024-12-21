import React, { useContext,useEffect } from 'react'
import {Provider} from '../Context/MyContext'
import { useNavigate,useLocation } from 'react-router-dom';


export default function Tab(props) {
    const {currentTab, setCurrentTab} = useContext(Provider)
    const navigate= useNavigate();
    const location = useLocation();
    
    function handleClick(e) {
        let tab=e.target.closest('.tab');

        setCurrentTab(tab.id);
        
        document.querySelectorAll('.tab').forEach((tab) => {
            tab.classList.remove('tabActive');   
        })
        tab.classList.add('tabActive');
        if (tab.id === 'AboutMe') {
            navigate('/')
        }
        else{
            navigate(`/${tab.id}`);
        }
           
        
    }


 

    useEffect(() => {
        document.querySelectorAll('.tab').forEach((tab) => {
            tab.classList.remove('tabActive');   
        })



        document.querySelector(`#${currentTab}`).classList.add('tabActive');
        
    }, []);

  return (
    <div className='tab' id={props.id} onClick={handleClick}>{props.icon} {props.tabName}</div>
  )
}
