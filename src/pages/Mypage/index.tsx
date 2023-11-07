import { useParams } from 'react-router-dom';
import SideMenu from './components/SideMenu';
import UserInfo from './components/UserInfo';
import PetInfo from './components/PetInfo';
import { IUser } from '../../utils/type';

const mock_user: IUser = {
  id: 1,
  name: '홍길동',
  gender: true,
  birth_date: '1990-01-01',
  profile_url:
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRzzuaQeHjSTieB11OnFn36uNsO0zNCKxM3Euo6fR9eKQ&s',
  nickname: '길동',
  contact: '010-1234-5678',
  postcode: '12345',
  address: '서울시 양천구 신정동',
  detailAddress: '1-1',
  pets: [
    {
      id: 1,
      name: '강아지',
      species: 'dog',
      detail_species: '푸들',
      birth_date: '2020-01-01',
      gender: 'male',
      about: '',
      imageSrc:
        'data:image/jpeg;base64,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',
    },
    {
      id: 2,
      name: '고양이',
      species: 'cat',
      detail_species: '길고양이',
      birth_date: '2020-01-01',
      gender: 'female',
      about: '',
      imageSrc:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRei4vyL7igfgidX-FRKo7CVzqbQYDJucYBDUtieq2Mow&s',
    },
    {
      id: 3,
      name: '강아지',
      species: 'dog',
      detail_species: '말티즈',
      birth_date: '2020-01-01',
      gender: 'female',
      about: '',
      imageSrc:
        'data:image/jpeg;base64,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',
    },
    {
      id: 4,
      name: '강아지',
      species: 'dog',
      detail_species: '말티즈',
      birth_date: '2020-01-01',
      gender: 'female',
      about: '',
      imageSrc:
        'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys/RD84QzQ5OjcBCgoKDQwNGg8PGjclHyU3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3N//AABEIAJMAZAMBIgACEQEDEQH/xAAbAAABBQEBAAAAAAAAAAAAAAADAAIEBQYBB//EADMQAAIBAwMCBAQGAgIDAAAAAAECAwAEERIhMQVBEyJRYQZxkaEUIzKBsfDB8UJSByRi/8QAGQEAAwEBAQAAAAAAAAAAAAAAAAEEAgUD/8QAHxEAAgICAwEBAQAAAAAAAAAAAAECEQMhBBJBMSIy/9oADAMBAAIRAxEAPwDQoNqcBk05U2p4XetngdRKKExSRcUUCgYkogGaQGBT0xnekMci7U7Bp4YYrgYGix0DxSwKLgUxl9KBAmFCdc1I0+tNZdqAImiuVIIFKgdkQe1EC0xFI3oqDNNmTqjeiKtcyBTskjasuRpRHqo7mnFBjY0EIxNFWM1m2OjoTPeiRx11IzRFUimrHQ0qRXBRCpNMK4p7CkIqKYwp2aY2/FCEwRXelSIOaVMyRwvlzSU4rokBUUSNO5pgMAyaPGtIoKSnTSGcnmEGlQPO+QvuccUYdQt4sQOFLg4Y+9Q+oTtAkcqprYZKqDjJwazFjLBfXz3Np4sepwzo5Plb29q5vJztTpP4dPi4Lhb9PQIofFQvEQy0ih/6mqToj3FjEPHkLvnDb7HncDtVhe/EK2wVihkDcqq5NbhzV1/RmfCd/kkMcChMaDZ/EENyHaNolVR+kMv39qfaXKXsImUg6hnbiqMeeOR0iXLglBWxYpKKcwoTErXueAmAzSpusGuUCIqRgcGjKcDFRUEik0ZAx5FCAMMnirbo1t+qWRQQOM1WR5xxV1Yk/hN9h7VjI6iemNWzKf8AkR1lsVOtlaJtWFO2O+azfTOpW9nAqSKykHyE+nse+9bO8Ft40niJr1Dg96wvxX0Lq8hgh6Yii0PKNp0qQfnkD5Z+1ceSc5bZ28bUYpVZeQ9WhfTpYAHnPben3N2tzE4hAIxjUeK84voOqWcksrYkSL9Zj2H0qR0br07RytHIyvHxG0RwB8+/1rCxSq1tHpOcE6emW0F9BbX8kVt0stc/8p2OkKO5r0XpyJBZxImD5RuODXm3Qo7jqnWYrxgpCt5kAwp+Y716zKqhUKrg6RsOKu4qSmzncuVxRGwzGuNGe9PJI4FMdm9K6BzhugD0pUFgxNKgAecnjFGVcc1HOSiOnei6iRjimIkKQBjHNXMEbJZebYkdqrenxeJKm2QOc1bzEhMD7V4Zn4UYY7s89+IlvoLr8RA6lVOdDZ3qrn+KbQ2Mq3MxhnK6QmNzt29/6K03XZhGzrIF2GTq20j1NecdSslvCJE0ETN5Y5Nj/uuRpSp/DsJycLX0f8KdcbqFxcg2xt7dSS+qXUXPGBkcd8+1aHpcvToJgILeKKRjmQLjz/sKwcXQphdSNGAixkbBzsCOQK2PSug6WSeKZ1nA2LNkNXpkcXL8GYOfSpmws7OESfiowul+Rjj5VcStkjGcAVRdFE7sFbDDOCQK0FzAY2GjdSKr4q2Q8p6BZ3FccqTjFNA82Sa6ShYgHeriE5pWlXNJ/wC1KgRW+MVPhr3GaMmXdd+1QpSvjZ4U/pNTIpVhAJGe9MRfdKiEcJbbUTR7htKk5BNDtZF/Cq52yKi6pmJcuoTPDDb6VFklsuxx0UnW0W6QwMCqtuzZxtWevbNWjsPwJRUaTyEpwCDp+/8AIzWlvGtrlJ1a4jlH6XII5/67fwKqLZYBMPDuQXUjOrG2f04+nFQzjsuhIqj0QxXniNrXJjIIJwex+fb61NbpkkMeEmaNBLkMN/DB9R6VajwbuKbWvHnCjfO2R/faihFMngsAY2QMjk7g+hPPfb96UYbHKZJ6CzKQs2kzKcNo4PuKub+TQgzyarrPTEFdo+Nvdfb3qwujHdWh0sM42NX4NVZBm2tFcvmyexpjjwT6mksjxRrtnH3pkzl2BLDUe1WEQ/zNvSqE8kwYjUKVAAhJDIwXVpwdqUXiSSFQQVBwV9agC4HLw4ZsacHirr4feEyATMHceuxWlJ0girZcuDHagEjZazd3fG6keBfEZU2cg4+npWi6lKMHAOMVmYrZfzZNOos3FczK23SOpipR2V34yK2RhJAsUYGI0XgCqDqHXLRLoxvAwCSo/iKMcEk1Y9cgujOzLNiMKTpUDb57VkuodMuVgWWaXdcqQdt8ZH3z96wkmbujU9J68sziG3jYtCPLnYaN8H3ziqy9+KuoROUTQkgcNGrqSGjPlGT2OR96N8OOjGNlUB1iKOo9Bx/faqrMF3NMspBVY10Z+ZJH1xTUQ7Jm6+GOty3Vpi6Vop/Y6gR/kf3NagSssYVBu9Yj4ahSGEKECkHMZPz4rcMSbYKIjqxs3pVODbJs+kRpCA+GIGO/ahxwKXMjOCAeKabbLF7gZA4IbvXIEOtgA7KD6VaQik/Daj4mS3tSoqQSNn8gnfmlQMzCyS+PgJJrG+Tx+1WNkn/vjQfzAcsTzVYILlo3IKzB206teCuBxzR41ktFkluHVZETKlWJ3z6egofwS00aPrF2yRMq4wo3Y1lrHrtos7wTyeYnAbOFLenzqp+L/iVLbw7dpHaQrmRj5cD5VhrycusV40hSHxMqRvsO+K5dOUrOo2oqj1HqikJKV1KCCc+u3NZP4se4isCzMDkg5ArSTSte2NtcWj+LA6hgTlc/MVkPj0zQdI1oqhdWnyngH+aMe5UE/wCbKqy66Lcs0bHUdiR6f0mi9NmjmvZGY5V3yQTsc7/zWLglZB3J7/vWh+HZ0fqcVs2cHjbYnt/mqckGlonxytnrnQpYvEGGyrn9GMYO1aKedmlMSxTNjkg7Y9hVF8OW8COAyhGJ8rEV3q93ddP6hINCyIz4RnAwQR2IG4H2JrPFd2a5a6ot/wAVauDbtLGpUbo25B9aKl2iAkt4ZVRqLEAY7b1Qzmze48mFbZQz5wMbYxt9OaAq21yWjgngWVtJlzEVJIOORvvt+1WkNmiHV4Qil5UjLDP5g3PvSqkksnnIeSKzJxgFU5A/elTFbKe5Sa1eR/H1SMiuoLEBM8YHYf5HFRr+PqFzFpXw2hVtSBJGwuMas4POST/ipcNzZu8ukzi4ILeMMPoOcnGf+O+4z229xfh4xmR5Y4zEcMxhGScYyQTtjbf2+oIoupfDlpfTy3MzRtJPse2ltgeON/rn50K6+GokAjS3MYEYMaSgkYHuRz7DvWhhM8IgR2BYDA/IHmz6+vfjijXCT26pL4kDArmF85AHPAPby4BI770uqH3ZOtp7Dp/w3ZWqN4zRRBFkC4y2Pt8vas38V/h+o9Nht4Azs7hwEOdh647DB+lWMWpotUizQsZPEWRoycgc+g29KenTII714Z2J8NFk8MpnI7afTY7gb78cVNHjVPs2VS5XaHVRPP16MCD+WoKjzD5c8+1TrTooknie1ZYDqwDzuBue39zW3n6ZBDMCLddXlIGDkeucHB4zvv8AxRrawKvGZJ4oyQThdiRng+bfcHH+6qaTJU5JlGsXXYdLpJDMVAOWYr5RnUBjg8Y39eKsri9v7+0ihubDwpE1RMkkwOs8E6h22PPajTRRiNFWU3CpgmYxYxv2ydtt8nOe+NqlW5RV8WR3SFmADNhsL2wRs3y+9eUcMIu0j1lnyTjUnorRaXOBKhGpV3Ukgr8jjO/zOfsZ8EFxodir6ZxhgD5X7NlTxntse9d/FNJcfk3cch04ARCCDwcb774oaTYttTX8DEAn8wDWvfGx577+9ep40Eljm1YEdxGV2OIi+r3yFPbA/alRYrnTGCiQaDuvipIzY7ZKgj71ygKM5dyujWUakaJY2ZwQDklt6LOTDDepEdKR6Sqjjlhx34HNKlTYemis7G1l6cJHgTUUGSo05z8qjC2gWDxUiRZHkZWZRjIBYDj5UqVJDYiip0yWVc6w0WCTnllB/k1FgurifqJSWaRlWEMBqxucZ/1SpUxeBrssFSAMwjPiKRqOcD35onTYYzdhGXWrA51nV7cntgDau0qAQU2cCRZVWBXUVOtvKd+N9uTxUO5iSDo9xPHq8RdZGpiwGBtsduwpUqQvAdrI56ZDcaiJBChBGwB37cdhUWB2mAeRiWWYRg//AC2QR9KVKgb+j7u5uI7qWJLiZUjbQgEh2A/elSpUMD//2Q==',
    },
  ],
};

const Mypage = () => {
  const MENU: { [key: string]: JSX.Element } = {
    user: <UserInfo user={mock_user} />,
    pet: <PetInfo petList={mock_user.pets} />,
  };

  const { menu } = useParams();
  return (
    <main className="px-[16.7vw] flex w-full h-[calc(100vh-100px)] bg-background">
      <SideMenu curr_menu={menu} />
      {MENU[menu as string]}
    </main>
  );
};

export default Mypage;
