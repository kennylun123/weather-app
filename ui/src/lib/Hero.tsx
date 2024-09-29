import Image from 'next/image';
import { SearchBar } from '@weather-app/ui';
import { getWeatherIconURL } from 'apps/weather-app/utils';

/* eslint-disable-next-line */
export interface HeroProps {
  address: string;
  temp: string;
  condition: string;
  icon: string;
}

export function Hero({ address, temp, condition, icon }: HeroProps) {
  const today = new Date().toLocaleDateString(undefined, {
    weekday: 'short',
    month: 'short',
    day: '2-digit',
  });

  const matchedIcon = getWeatherIconURL(icon);

  return (
    <div className="hero">
      <SearchBar />
      <div className="hero__result-container">
        <h2 className="sm:text-[3.5rem] text-[3rem] sm:mt-6">{address}</h2>
        <div className="sm:text-3xl text-2xl mt-4">{today}</div>
        <Image
          src={matchedIcon}
          alt={'weather icon'}
          width={200}
          height={200}
          className="-mt-6 -mb-4"
        />
        <div className="sm:text-[7rem] text-7xl flex items-center">
          {temp}
          <span className="sm:text-4xl text-3xl text-white/70">°C</span>
        </div>
        <div className="sm:text-4xl text-3xl mt-8">{condition}</div>
      </div>
    </div>
  );
}

export default Hero;
