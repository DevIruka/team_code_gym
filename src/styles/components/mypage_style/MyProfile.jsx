import styled from 'styled-components'


export const ProfileWrap = styled.div`
    height : 100vh;
    display : flex;
    align-items: center;
    justify-content: center;
    padding: 40px 0px;
`;

export const StyledProfile = styled.div`
    width : 500px;
    background-color: #222;
    border-radius: 8px;
    box-shadow: 0 0 10px rgba(255, 234, 0, 0.8), 0 0 20px rgba(255, 234, 0, 0.6);
    padding: 20px;
    font-size: 14px;
    display: flex;
    flex-direction: column;
    overflow: hidden;
`;

export const ProfileTitle = styled.h3`
    font-size: 18px;
    font-weight: 600;
    margin-bottom: 15px;
`;

export const ProfileContext = styled.div`
    padding: 40px;
    border-radius: 8px;
    background-color: #282c34;
    color: #fff;
    font-size: 16px;
    line-height: 1.5;
    text-align: center;
`;

export const ProfileImgWrap = styled.div`
    border-radius: 50%;
    background-color: #bbb;
    font-size: 16px;
    width: 190px;
    height: 190px;
    display: inline-block;
    overflow: hidden;

    img{
        width: 200px;
        margin-left: -5px;
    }
`;

export const ProfileNickname = styled.p`
    margin-bottom: 30px;
    font-size: 40px; 
    font-weight: bold;
`;

export const ProfileInputWrap = styled.div`
    text-align: left;
    margin-bottom:20px;
`;

export const ProfileInput = styled.input`
    background-color: #222;
    border: 1px solid #3c3d37;
    color:#fff;
    border-radius: 4px;
    width: 100%;
    padding: 8px;
    box-sizing: border-box;
    margin-bottom: 30px;
`;

export const ProfileButton = styled.button`
    all:unset;
    min-width: 100px;
    font-weight:bold;
    color:#fff;
    padding:8px;
    background-color: #e5b200;
    border-radius :8px;
`;


