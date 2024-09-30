import Image from 'next/image';
import { SearchBar } from '@weather-app/ui';
import { getWeatherIconURL } from 'apps/weather-app/utils';

/* eslint-disable-next-line */
export interface HeroProps {
  address: string;
  temp: string;
  date: string;
  condition: string;
  icon: string;
  metric: string;
}

export function Hero({
  address,
  temp,
  date,
  condition,
  icon,
  metric,
}: HeroProps) {
  const matchedIcon = getWeatherIconURL(icon);
  return (
    <div className="hero">
      <SearchBar />
      <div className="hero__result-container">
        <h2 className="md:text-[2.5rem] text-[3rem] md:mt-6">{address}</h2>
        <div className="md:text-xl text-2xl mt-4">{date}</div>
        <Image
          src={matchedIcon}
          alt={'weather icon'}
          width={200}
          height={200}
          className="-mt-6 -mb-4"
        />
        <div className="md:text-7xl text-[7rem] flex items-center">
          {temp}
          <span className="md:text-3xl text-4xl text-white/70">{metric}</span>
        </div>
        <div className="md:text-3xl text-4xl mt-8">{condition}</div>
      </div>
    </div>
  );
}

export default Hero;
