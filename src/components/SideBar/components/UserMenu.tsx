const UserMenu = () => {
  return (
    <div className="flex flex-col p-1 mx-auto text-center text-sm">
      <span className="my-1 p-2 cursor-pointer hover:font-bold text-light">마이페이지</span>
      <span className="my-1 p-2 cursor-pointer hover:font-bold text-light">쪽지</span>
      <span className="my-1 p-2 cursor-pointer hover:font-bold text-light">로그아웃</span>
    </div>
  );
};

export default UserMenu;
