import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { changeField, initializeForm, register } from '../../modules/auth';
import PEditForm from '../../components/auth/PEditForm';
import { check } from '../../modules/user';
import { withRouter } from 'react-router-dom';
import AuthActionButtons from '../../components/auth/AuthActionButtons';
import { signout } from '../../lib/api/auth';
import { update } from '../../lib/api/auth';

const ProfileEditForm = ({ history }) => {
  const [error, setError] = useState(null);
  const dispatch = useDispatch();
  const { form, auth, authError, user } = useSelector(({ auth, user }) => ({
    form: auth.register,
    auth: auth.auth,
    authError: auth.authError,
    user: user.user,
  }));

  const onSignout = async () => {
    try {
      await signout(user._id);
      history.push('/login');
      window.alert('탈퇴처리되었습니다');
    } catch (e) {
      console.log(e);
    }
  };

  //인풋 변경 이벤트 핸들러
  const onChange = (e) => {
    const { value, name } = e.target;
    dispatch(
      changeField({
        form: 'register',
        key: name,
        value,
      }),
    );
  };

  //폼 등록 이벤트 핸들러
  const onSubmit = async (e) => {
    e.preventDefault();
    const { password, passwordConfirm } = form;
    // 하나라도 비어 있다면
    if ([password, passwordConfirm].includes('')) {
      setError('빈 칸을 모두 입력하세요');
      return;
    }
    // 비밀번호가 일치하지 않는다면
    if (password !== passwordConfirm) {
      setError('비밀번호가 일치하지 않습니다.');
      return;
    }
    try {
      const id = user._id;
      await update({ id, password });
      history.push('/login');
      window.alert('수정되었습니다.');
    } catch (e) {
      console.log(e);
    }
    //dispatch(update({ password }));
  };

  //컴포넌트가 처음 랜더링될 때 form 을 초기화
  useEffect(() => {
    dispatch(initializeForm('register'));
  }, [dispatch]);

  return (
    <PEditForm
      type="register"
      form={form}
      onChange={onChange}
      onSubmit={onSubmit}
      error={error}
      actionButtons={<AuthActionButtons onSignout={onSignout} />}
    />
  );
};

export default withRouter(ProfileEditForm);
