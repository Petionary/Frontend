import RecommendedItem from './RecommendedItem';
import RecommendedTitle from './RecommendedTitle';
import { IPlace } from '../../../../../utils/type';

interface RecommendedListProps {
  type: 'best' | 'new';
}

const mockPlace: IPlace = {
  id: 1,
  name: '닥터로빈 강서점',
  postcode: '07649',
  address: '서울 강서구 공항대로 396',
  contact: '02-1234-5678',
  rate: 4.32,
  detailAddress: '귀뚜라미보일러사옥빌딩 1층',
  thumbnailSrc:
    'https://search.pstatic.net/common/?src=https%3A%2F%2Fldb-phinf.pstatic.net%2F20230413_246%2F1681347314444WxMNQ_JPEG%2FDSC00562.jpg',
  imageSrc: [
    'https://search.pstatic.net/common/?src=https%3A%2F%2Fldb-phinf.pstatic.net%2F20230413_246%2F1681347314444WxMNQ_JPEG%2FDSC00562.jpg',
  ],
};

const RecommendedList = ({ type }: RecommendedListProps) => {
  return (
    <section className="flex flex-col justify-center h-[calc(100vh-100px)] w-[81.24rem] mx-auto snap-start snap-always">
      <RecommendedTitle type={type} />
      <div className="flex justify-between mt-10">
        <RecommendedItem place={mockPlace} />
      </div>
    </section>
  );
};

export default RecommendedList;
