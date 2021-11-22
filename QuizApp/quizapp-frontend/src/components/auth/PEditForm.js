import React, { useState, useCallback } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import palette from '../../lib/styles/palette';
import Button from '../common/Button';
import AskSignoutModal from './AskSignoutModal';

const AuthFormBlock = styled.div`
  h3 {
    margin: 0;
    color: ${palette.gray[8]};
    margin-bottom: 1rem;
  }
`;

const StyledInput = styled.input`
  font-size: 1rem;
  border: none;
  border-bottom: 1px solid ${palette.gray[5]};
  padding-bottom: 0.5rem;
  outline: none;
  width: 100%;
  &:focus {
    color: $oc-teal-7;
    border-bottom: 1px solid ${palette.gray[7]};
  }
  & + & {
    margin-top: 1rem;
  }
`;

const Footer = styled.div`
  margin-top: 2rem;
  text-align: right;
  a {
    color: #ff0000;
    text-decoration: none;
    &:hover {
      color: ${palette.gray[9]};
    }
  }
`;

const ButtonWithMarginTop = styled(Button)`
  margin-top: 1rem;
`;

/**
 * 에러를 보여 줍니다.
 */
const ErrorMessage = styled.div`
  color: red;
  text-align: center;
  font-size: 0.875rem;
  margin-top: 1rem;
`;

const PEditForm = ({ form, onChange, onSubmit, error, onSignout }) => {
  const [modal, setModal] = useState(false);
  const onSignoutClick = () => {
    setModal(true);
  };
  const onCancel = () => {
    setModal(false);
  };
  const onConfirm = () => {
    setModal(false);
    onSignout();
  };
  return (
    <AuthFormBlock>
      <h3>회원정보 수정</h3>
      <form onSubmit={onSubmit}>
        <StyledInput
          autoComplete="new-password"
          name="password"
          placeholder="신규 비밀번호"
          type="password"
          onChange={onChange}
          value={form.password}
        />
        <StyledInput
          autoComplete="new-password"
          name="passwordConfirm"
          placeholder="신규 비밀번호 확인"
          type="password"
          onChange={onChange}
          value={form.passwordConfirm}
        />
        {error && <ErrorMessage>{error}</ErrorMessage>}
        <ButtonWithMarginTop cyan fullWidth>
          회원정보 수정
        </ButtonWithMarginTop>
      </form>
      <Footer>
        <Button onClick={onSignoutClick}>회원탈퇴</Button>
        <AskSignoutModal
          visible={modal}
          onConfirm={onConfirm}
          onCancel={onCancel}
        />
      </Footer>
    </AuthFormBlock>
  );
};

export default PEditForm;
