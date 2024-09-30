/**
 * Hero component for displaying the main weather information.
 *
 * @description The Hero component presents the weather details for a specific location, including the address, current temperature, date, weather condition, and an associated weather icon. It also includes a search bar for user input.
 * @props {string} address - The address or location for which the weather is being displayed.
 * @props {string} temp - The current temperature at the specified location.
 * @props {string} date - The date corresponding to the weather information.
 * @props {string} condition - A brief description of the current weather condition (e.g., sunny, rainy).
 * @props {string} icon - The identifier for the weather icon representing the current condition.
 * @props {string} metric - The unit of measurement for the temperature (e.g., °C, °F).
 * @returns {JSX.Element} The rendered component displaying the weather information and search bar.
 */

import Image from 'next/image';
import { SearchBar } from '@weather-app/ui';
import { getWeatherIconURL } from 'apps/weather-app/utils';

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
