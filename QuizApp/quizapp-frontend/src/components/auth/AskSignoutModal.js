import AskModal from '../common/AskModal';

const AskSignoutModal = ({ visible, onConfirm, onCancel }) => {
  return (
    <AskModal
      visible={visible}
      title="회원 탈퇴"
      description="정말로 탈퇴하시겠습니까?"
      confirmText="탈퇴"
      onConfirm={onConfirm}
      onCancel={onCancel}
    />
  );
};

export default AskSignoutModal;
