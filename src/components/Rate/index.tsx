import { ReactComponent as Full } from '../../assets/icon_rate_full.svg';
import { ReactComponent as Half } from '../../assets/icon_rate_half.svg';
import { ReactComponent as Empty } from '../../assets/icon_rate_empty.svg';

interface RateProps {
  rate: number;
  reviews?: object[];
  list?: boolean;
  grade_only?: boolean;
  size?: 'sm' | 'md';
}

const Rate = ({ rate, reviews, grade_only, size = 'sm', list = false }: RateProps) => {
  const decimal = Number((rate % 1).toFixed(1));
  const integer = rate - decimal;
  const starSize = size === 'md' ? 'w-[1.875rem] h-[1.875rem]' : '';

  const rates = [];

  for (let i = 0; i < integer; i++) {
    rates.push('full');
  }

  if (decimal < 0.5) {
    rates.push('empty');
  } else {
    rates.push('half');
  }

  if (rates.length < 5) {
    for (let j = 0; j < 5 - rates.length; j++) {
      rates.push('empty');
    }
  }

  return (
    <div className={`flex items-center ${list ? 'absolute bottom-[0.94rem] right-[0.88rem]' : ''}`}>
      <span className="flex mr-[0.38rem]">
        {rates.map((star, idx) => {
          if (star === 'full') return <Full key={idx} className={`fill-primary ${starSize}`} />;
          if (star === 'half') return <Half key={idx} className={`${starSize}`} />;
          else return <Empty key={idx} className={`fill-[#eeeeee] ${starSize}`} />;
        })}
      </span>
      <span
        className={`${
          list
            ? 'text-[0.875rem] font-[400] leading-[1.625rem] text-white'
            : 'text-[1.5rem] text-gray-70 font-[600] tracking-[0.06rem]'
        }`}
      >
        {!grade_only && rate.toFixed(1)}
        {reviews && `(${reviews.length})`}
      </span>
    </div>
  );
};

export default Rate;
