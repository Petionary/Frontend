const PlaceItem = () => {
  return (
    <article className="w-[15rem] h-[8rem] bg-dark relative rounded-xl overflow-hidden">
      <div className="w-full h-full absolute bg-[url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSPuvD9dyBEWQb4zgRaa9Jf3-xUSNWZJzGk2K2D6zgHjA&s)] hover:opacity-20 z-10" />
      <div className="w-full h-full absolute flex flex-col p-5 text-white text-sm">
        <span>장소 이름</span>
        <span>주소</span>
        <span>전화번호</span>
      </div>
    </article>
  );
};

export default PlaceItem;
