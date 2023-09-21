import { ReactComponent as Full } from '../../assets/icon_rate_full.svg';
import { ReactComponent as Half } from '../../assets/icon_rate_half.svg';
import { ReactComponent as Empty } from '../../assets/icon_rate_empty.svg';

const Rate = ({ rate }: { rate: number }) => {
  const decimal = Number((rate % 1).toFixed(1));
  const integer = rate - decimal;

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
    <div className="flex items-center absolute bottom-[0.94rem] right-[0.88rem]">
      <span className="flex mr-[0.38rem]">
        {rates.map(star => {
          if (star === 'full') return <Full />;
          if (star === 'half') return <Half />;
          else return <Empty />;
        })}
      </span>
      <span className="text-[0.875rem] font-[400] leading-[1.625rem] text-white">
        {rate.toFixed(1)}
      </span>
    </div>
  );
};

export default Rate;
