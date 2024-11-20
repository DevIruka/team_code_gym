import React, { useState, useEffect } from 'react';
import supabase from '../../api/supabaseClient';
import { ProfileButton, ProfileContext, ProfileImgWrap, ProfileInput, ProfileInputWrap, ProfileNickname, ProfileWrap, StyledProfile } from '../../styles/components/mypage_style/MyProfile';
import defaultProfileImage from '../../assets/images/default.jpg';
import { useDispatch, useSelector } from 'react-redux';
import { uploadProfileImg } from '../../redux/slices/userImageSlice';

const EditProfile = () => {
    const [user, setUser] = useState(null);
    const [selectedFile, setSelectedFile] = useState(null); 
    const authId = useSelector((state) => state.userData); 
    const dispatch = useDispatch();
    
    useEffect(() => {
        if (authId) {
            const fetchUser = async () => {
                try {
                    const { data, error } = await supabase
                        .from('users')
                        .select('email, nickname, profile_image, user_id')
                        .eq('user_id', authId);

                    if (error) {
                        throw new Error(error.message);
                    }

                    const fetchedUser = data[0];  
                    if (fetchedUser) {
                        setUser(fetchedUser);
                    } else {
                        alert('사용자를 찾을 수 없습니다.');
                    }
                } catch (error) {
                    console.error('사용자 정보 가져오기 실패:', error);
                    alert('사용자 정보를 불러오는 데 실패했습니다.');
                }
            };

            fetchUser();
        }
    }, [authId]);

    
    const handleFileChange = (event) => {
        const file = event.target.files[0];
        if (file) {
            setSelectedFile(file); 
        }
    };

    
    const uploadProfileImage = async () => {
        if (selectedFile) {
            try {
                const filePath = `profile-images/${selectedFile.name}`;
                
                const { data, error } = await supabase.storage
                    .from('profile-images') // 버킷 이름
                    .upload(filePath, selectedFile);
                    
                if (error) {
                    throw new Error(error.message);
                }
                
                const { data : object, error: urlError } = supabase.storage
                    .from('profile-images')
                    .getPublicUrl(data.path);

                if (urlError) {
                    throw new Error(urlError.message);
                }

                await updateProfileImageInDB(object.publicUrl);
                alert('프로필 이미지가 성공적으로 업데이트되었습니다!');

                dispatch(uploadProfileImg(object.publicUrl));
                setUser((prevUser) => ({...prevUser, profile_image: object.publicUrl,}));
            } catch (error) {
                console.error('이미지 업로드 실패:', error.message);
                alert('이미지 업로드에 실패했습니다. 다시 시도해주세요.');
            }
        } else {
            alert('업로드할 이미지를 선택해주세요.');
        }
    };

    const updateProfileImageInDB = async (url) => {
        try {
            const { error } = await supabase
                .from('users')
                .update({ profile_image: url })
                .eq('user_id', authId);

            if (error) {
                throw new Error(error.message);
            }

            console.log('DB에서 프로필 이미지 업데이트 완료');
        } catch (error) {
            console.error('DB 업데이트 실패:', error.message);
        }
    };

    if (!user) {
        return <div>로딩 중...</div>;
    }

    return (
        <ProfileWrap>
            <StyledProfile>
                <ProfileContext>
                    <ProfileImgWrap>
                        <img
                            src={user.profile_image || defaultProfileImage}
                            alt="프로필 사진"
                        />
                    </ProfileImgWrap>
                    <ProfileNickname>{user.nickname}</ProfileNickname>
                    <ProfileInputWrap>
                        <p>이메일</p>
                        <ProfileInput type="email" value={user.email} readOnly />
                        <p>프로필 사진</p>
                        <input type="file" onChange={handleFileChange} />
                    </ProfileInputWrap>
                    <ProfileButton onClick={uploadProfileImage}>수정하기</ProfileButton>
                </ProfileContext>
            </StyledProfile>
        </ProfileWrap>
    );
};

export default EditProfile;
