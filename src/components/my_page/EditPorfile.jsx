import React from 'react';
import { useState, useEffect } from 'react';
import supabase from '../../api/supabaseClient';

const EditPorfile = () => {
    const [user, setUser] = useState(null);
    useEffect(() => {
        const fetchUser = async () => {
            try{
                const { data, error } = await supabase
                .from('user')
                .select('id, email, password, nickname');

                if(error){
                    throw new Error(error.message);
                }
                console.log('Fetched user:', data); // 디버깅용
                setUser(data ? data[0] : null);
            }catch(error){
                console.error('user에서 정보가져오기 실패함:', error);
                alert('사용자 정보를 불러오는 데 실패했습니다. 잠시 후 다시 시도해주세요.');
            }
        }
    
        fetchUser();
        }, []) 
    if (!user) {
        return <div>로딩 중...</div>;
    }

    return (
        <div>
            <p>아이디: {user.id}</p>
            <p>이메일: {user.email}</p>
            <p>패스워드:<input type="password" value={user.password} /></p>
            <p>닉네임: {user.nickname}</p>
        </div>
    )
}

export default EditPorfile