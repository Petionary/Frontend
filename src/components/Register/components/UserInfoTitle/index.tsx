import FirstStepTitle from './components/FirstStepTitle';
import LastStepTitle from './components/LastStepTitle';
import SecondStepTitle from './components/SecondStepTitle';

const TITLES = [<FirstStepTitle key={0} />, <SecondStepTitle key={1} />, <LastStepTitle key={2} />];

interface UserInfoTitleProps {
  step: number;
}

const UserInfoTitle = ({ step }: UserInfoTitleProps) => {
  return <div className="w-full pl-[3.62rem]">{TITLES[step]}</div>;
};

export default UserInfoTitle;
