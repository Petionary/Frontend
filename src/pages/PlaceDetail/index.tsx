import useInput from '../../hooks/useInput';
import DetailContainer from './components/DetailContainer';
import DetailMenu from './components/DetailMenu';
import MapContainer from './components/MapContainer';
import ReviewContainer from './components/ReviewContainer';
import StoreInfoContainer from './components/StoreInfoContainer';

const mockPlace = {
  id: 1,
  name: '이름',
  postcode: '08035',
  address: '주소',
  detail_address: '상세주소',
  contact: '010-1234-5678',
  images: [
    // 이미지 src(string) 배열
    '',
    '',
    '',
  ],
  rate: 4.5,
  reviews: [
    {
      id: 1,
      author: '이름',
      images: ['', ''],
      posted_at: '등록일',
      rate: 4.5,
      userId: 1,
      user: {
        id: 1,
        name: '이름',
        profile: '',
      },
      content: '리뷰 내용',
    },
    {
      id: 2,
      author: '이름',
      posted_at: '등록일',
      rate: 4.5,
      userId: 1,
      user: {
        id: 1,
        name: '이름',
        profile: '',
      },
      content: '리뷰 내용 2',
    },
  ],
};

export type Tmock = typeof mockPlace;

const PlaceDetail = () => {
  const { input, handleInputChange } = useInput<{ menu: 'store' | 'map' | 'reviews' }>({
    menu: 'store',
  });

  const CONTENT: { [key: string]: JSX.Element } = {
    store: <StoreInfoContainer />,
    map: <MapContainer />,
    reviews: <ReviewContainer />,
  };

  return (
    <main className="flex flex-col items-center overflow-scroll">
      <DetailContainer place={mockPlace} />
      <DetailMenu curr_menu={input.menu} onClickMenu={handleInputChange} />
      {CONTENT[input.menu]}
    </main>
  );
};

export default PlaceDetail;
