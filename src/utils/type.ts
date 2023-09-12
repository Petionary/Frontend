export interface IPlace {
  id: number;
  name: string;
  thumbnailSrc: string;
  imageSrc: string[];
  address: string;
  detailAddress: string;
  contact: string;
  postcode: string;
  rate: number;
}

export interface IUserProfile {
  nickname: string;
  contact: string;
  postcode: string;
  address: string;
  detailAddress: string;
}
export interface IUser extends IUserProfile {
  id: number;
  name: string;
  gender: string;
  birth_date: string;
  profile_url: string;
}
