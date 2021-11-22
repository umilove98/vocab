import React from 'react';
import AuthTemplate from '../components/auth/AuthTemplate';

const ProfileEditPage = () => {
  return (
    <AuthTemplate>
      <ProfileEditForm type="profileEdit" />
    </AuthTemplate>
  );
};

export default ProfileEditPage;
