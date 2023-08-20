import DetailContainer from './components/DetailContainer';
import MapContainer from './components/MapContainer';
import ReviewContainer from './components/ReviewContainer';

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
  return (
    <main className="flex flex-col items-center">
      <DetailContainer place={mockPlace} />
      <MapContainer />
      <ReviewContainer />
    </main>
  );
};

export default PlaceDetail;
