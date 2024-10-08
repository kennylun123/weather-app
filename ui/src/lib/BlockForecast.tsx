/**
 * BlockForecast component for displaying a weather forecast block.
 *
 * @description The BlockForecast component displays the weather forecast for a specific date, including the weather icon, condition, and temperature range.
 * @props {string} date - The date for which the forecast is being displayed.
 * @props {string} icon - The identifier for the weather icon.
 * @props {string} condition - The weather condition description (e.g., sunny, cloudy).
 * @props {string} tempMax - The maximum temperature for the day.
 * @props {string} tempMin - The minimum temperature for the day.
 * @props {string} metric - The unit of measurement for the temperature (e.g., °C, °F).
 */

import { getWeatherIconURL } from 'apps/weather-app/utils';
import Image from 'next/image';

export interface BlockForecastProps {
  date: string;
  icon: string;
  condition: string;
  tempMax: string;
  tempMin: string;
  metric: string;
}

export function BlockForecast({
  date,
  icon,
  condition,
  tempMax,
  tempMin,
  metric,
}: BlockForecastProps) {
  const matchedIcon = getWeatherIconURL(icon);
  return (
    <div className="flex-1 min-w-max flex flex-col items-center rounded-xl p-4 bg-primary-default text-center">
      <div className="md:text-md text-lg">{date}</div>
      <Image
        src={matchedIcon}
        alt={'weather icon'}
        width={100}
        height={100}
        className="-mt-2"
      />
      <div className="text-xs">{condition}</div>
      <div className="flex w-full justify-between space-x-6 text-sm mt-4">
        <span>
          {tempMax}
          {metric}
        </span>
        <span className="text-white/70">
          {tempMin}
          {metric}
        </span>
      </div>
    </div>
  );
}

export default BlockForecast;
