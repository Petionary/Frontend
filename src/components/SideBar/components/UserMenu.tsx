const UserMenu = () => {
  const styles = 'my-1 p-2 cursor-pointer hover:font-bold text-light';

  return (
    <div className="flex flex-col p-1 mx-auto text-center text-xs">
      <span className={styles}>마이페이지</span>
      <span className={styles}>쪽지</span>
      <span className={styles}>로그아웃</span>
    </div>
  );
};

export default UserMenu;
