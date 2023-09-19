import { IPlace } from '../../../../utils/type';
import Item from './components/Item';

const mock_place: IPlace[] = [
  {
    id: 1,
    name: '평양냉면 대동관',
    thumbnailSrc:
      'https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMzA5MDRfNjcg%2FMDAxNjkzODA1NTY2MTEz.cIL20y4X1yw2SemKx3w_b600W0C-iAkuoGlEbkZOYywg.FQIyty6nGZR16bEBc6uCxix30ptjHLb7x19DSI2_OLsg.JPEG.cds7479%2FIMG_2683.jpg',
    imageSrc: [
      'https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMzA5MDRfNjcg%2FMDAxNjkzODA1NTY2MTEz.cIL20y4X1yw2SemKx3w_b600W0C-iAkuoGlEbkZOYywg.FQIyty6nGZR16bEBc6uCxix30ptjHLb7x19DSI2_OLsg.JPEG.cds7479%2FIMG_2683.jpg',
    ],
    address: '서울 강서구 우장산로 120',
    detailAddress: '1층 대동관',
    postcode: '07685',
    contact: '02-2690-7288',
    rate: 4.3,
  },
  {
    id: 4,
    name: '평양냉면 대동관',
    thumbnailSrc:
      'https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMzA5MDRfNjcg%2FMDAxNjkzODA1NTY2MTEz.cIL20y4X1yw2SemKx3w_b600W0C-iAkuoGlEbkZOYywg.FQIyty6nGZR16bEBc6uCxix30ptjHLb7x19DSI2_OLsg.JPEG.cds7479%2FIMG_2683.jpg',
    imageSrc: [
      'https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMzA5MDRfNjcg%2FMDAxNjkzODA1NTY2MTEz.cIL20y4X1yw2SemKx3w_b600W0C-iAkuoGlEbkZOYywg.FQIyty6nGZR16bEBc6uCxix30ptjHLb7x19DSI2_OLsg.JPEG.cds7479%2FIMG_2683.jpg',
    ],
    address: '서울 강서구 우장산로 120',
    detailAddress: '1층 대동관',
    postcode: '07685',
    contact: '02-2690-7288',
    rate: 4.3,
  },
  {
    id: 2,
    name: '평양냉면 대동관',
    thumbnailSrc:
      'https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMzA5MDRfNjcg%2FMDAxNjkzODA1NTY2MTEz.cIL20y4X1yw2SemKx3w_b600W0C-iAkuoGlEbkZOYywg.FQIyty6nGZR16bEBc6uCxix30ptjHLb7x19DSI2_OLsg.JPEG.cds7479%2FIMG_2683.jpg',
    imageSrc: [
      'https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMzA5MDRfNjcg%2FMDAxNjkzODA1NTY2MTEz.cIL20y4X1yw2SemKx3w_b600W0C-iAkuoGlEbkZOYywg.FQIyty6nGZR16bEBc6uCxix30ptjHLb7x19DSI2_OLsg.JPEG.cds7479%2FIMG_2683.jpg',
    ],
    address: '서울 강서구 우장산로 120',
    detailAddress: '1층 대동관',
    postcode: '07685',
    contact: '02-2690-7288',
    rate: 4.3,
  },
  {
    id: 3,
    name: '평양냉면 대동관',
    thumbnailSrc:
      'https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMzA5MDRfNjcg%2FMDAxNjkzODA1NTY2MTEz.cIL20y4X1yw2SemKx3w_b600W0C-iAkuoGlEbkZOYywg.FQIyty6nGZR16bEBc6uCxix30ptjHLb7x19DSI2_OLsg.JPEG.cds7479%2FIMG_2683.jpg',
    imageSrc: [
      'https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMzA5MDRfNjcg%2FMDAxNjkzODA1NTY2MTEz.cIL20y4X1yw2SemKx3w_b600W0C-iAkuoGlEbkZOYywg.FQIyty6nGZR16bEBc6uCxix30ptjHLb7x19DSI2_OLsg.JPEG.cds7479%2FIMG_2683.jpg',
    ],
    address: '서울 강서구 우장산로 120',
    detailAddress: '1층 대동관',
    postcode: '07685',
    contact: '02-2690-7288',
    rate: 4.3,
  },
  {
    id: 5,
    name: '평양냉면 대동관',
    thumbnailSrc:
      'https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMzA5MDRfNjcg%2FMDAxNjkzODA1NTY2MTEz.cIL20y4X1yw2SemKx3w_b600W0C-iAkuoGlEbkZOYywg.FQIyty6nGZR16bEBc6uCxix30ptjHLb7x19DSI2_OLsg.JPEG.cds7479%2FIMG_2683.jpg',
    imageSrc: [
      'https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMzA5MDRfNjcg%2FMDAxNjkzODA1NTY2MTEz.cIL20y4X1yw2SemKx3w_b600W0C-iAkuoGlEbkZOYywg.FQIyty6nGZR16bEBc6uCxix30ptjHLb7x19DSI2_OLsg.JPEG.cds7479%2FIMG_2683.jpg',
    ],
    address: '서울 강서구 우장산로 120',
    detailAddress: '1층 대동관',
    postcode: '07685',
    contact: '02-2690-7288',
    rate: 4.3,
  },
];

const PlaceList = () => {
  return (
    <section className="py-[3rem] px-[16.1458vw] gap-y-[3rem] bg-background gap-x-[3.12rem] grid grid-cols-auto-fill-place z-0 place-items-center place-content-center">
      {mock_place.map(place => (
        <Item place={place} key={place.id} />
      ))}
    </section>
  );
};

export default PlaceList;

// grid grid-cols-auto-fill-cards gap-x-[3rem] justify-between w-[41.875vw] mt-[4.13rem]
