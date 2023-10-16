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

export interface IPet {
  id: number;
  name: string;
  birth_date: string;
  gender: boolean;
  species: string;
  detail_species: string;
  about: string;
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
  gender: boolean;
  birth_date: string;
  profile_url: string;
  pets: IPet[];
}

export interface IReview {
  id?: number;
  author: string;
  profile_img: string;
  date: string;
  rate: number;
  content: string;
  imageURLs?: string[];
}
