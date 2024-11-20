import React, { useEffect } from 'react'
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const useRedirectLogin = () => {
    const navigate = useNavigate();
    const loginCheck = useSelector((state) => state.login);    
    useEffect(() => {
        if(!loginCheck) {
            navigate('/login'); 
        }
    }, []);  
}

export default useRedirectLogin