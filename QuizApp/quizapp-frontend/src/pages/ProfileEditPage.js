import React from 'react';
import AuthTemplate from '../components/auth/AuthTemplate';
import ProfileEditForm from '../containers/auth/ProfileEditForm';

const ProfileEditPage = () => {
  return (
    <AuthTemplate>
      <ProfileEditForm type="profileEdit" />
    </AuthTemplate>
  );
};

export default ProfileEditPage;
