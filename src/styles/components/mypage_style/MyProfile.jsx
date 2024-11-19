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
    background-color: var(--gray);
    border-radius: 8px;
    box-shadow: 0 19px 38px rgba(0, 0, 0, 0.3), 0 15px 12px rgba(0, 0, 0, 0.22);
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
    background-color: #fff;
    color: #000;
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
`;

export const ProfileInput = styled.input`
    border: 1px solid #bbb;
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


