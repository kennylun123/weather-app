/**
 * Index component for rendering the main weather application page.
 * Tech stacks: NX monorepo, TypeScript, React, Next.js and Tailwind CSS
 *
 * @description The Index component fetches weather data based on the user's search parameters and displays the current weather information, metrics, day overview, and a 5-day forecast.
 * @props {Object} searchParams - The search parameters passed to the component.
 * @props {string} searchParams.address - The address for which the weather information is requested.
 * @props {string} searchParams.metric - The metric system used for temperature display (e.g., 'us' for Fahrenheit, 'uk' for Celsius).
 * @returns {JSX.Element} The rendered component containing the weather data and forecasts.
 * @method fetchWeather - Fetches the weather data based on the provided address and metric.
 * @method getFormattedDate - Formats the date for display.
 * @method getFormattedTime - Formats the time for display.
 *
 *  - Brief for the program flow:
 *  1: Fetch the required weather data in first load. Utilised with NextJS searchParams to manage the query.
 *  2: Use the search bar to search weather information for specific place. Show "No result" if input the invalid city name.
 *  3: Use the metric buttons to control the query of searchParams.
 *  4: Render the weather data on UI.
 *
 *  - Future improvement:
 *  ** Architectural Choices ** 
 *  1. Consider using a state management library (e.g., Redux or Zustand) to manage the application's state more effectively, particularly for larger applications.
 * 
 *  ** Data Sanitization & Validation **
 *  1. Try different attempt for 'no result' handling. Make a prompt to show message instead of override the existing data.
 * 
 *  ** Potential Performance Bottlenecks and Optimizations **
 *  1. Calculate the metrics in local to reduce the amount of fetch call in the future.

 *  ** Accessibility **
 *  1. Ensure all interactive elements (e.g., buttons, inputs) are keyboard navigable and have proper aria-labels to enhance accessibility for screen readers.
 *  2. Implement color contrast checks to ensure text is readable against background colors, improving accessibility for visually impaired users.
 *  3. Add a modern dark/light mode switcher for user perference.

 *  ** High Fault Tolerance **
 *  1. Implement error handling for the `fetchWeather` function to gracefully handle API errors and display user-friendly error messages.
 *  2. Use fallback data or loading states (e.g., React Skeleton) to enhance the user experience during network delays or failures.
 */

import {
  Hero,
  Metrics,
  BlockGeneric,
  BlockProgressBar,
  BlockForecast,
} from '@weather-app/ui';
import {
  fetchWeather,
  getFormattedDate,
  getFormattedTime,
} from 'apps/weather-app/utils';

export interface HomeProps {
  searchParams: {
    address: string;
    metric: string;
  };
}

export default async function Index({ searchParams }: HomeProps) {
  const result = await fetchWeather({
    address: searchParams.address || '',
    metric: searchParams.metric || '',
  });

  const { address, days, currentConditions } = result;
  const currentMetric = searchParams.metric === 'us' ? '°F' : '°C';

  // const isResultEmpty = typeof result !== "object" || result.length < 1 || !result;

  return (
    <main>
      <h1 className="sr-only">Weather app task</h1>
      <div className="flex md:flex-row flex-col">
        <Hero
          address={address[0].toUpperCase() + address.slice(1)}
          temp={String(currentConditions.temp)}
          date={getFormattedDate(new Date().toString())}
          condition={currentConditions.conditions}
          icon={currentConditions.icon}
          metric={currentMetric}
        />
        <div className="home">
          <Metrics />
          <div>
            <h3 className="md:text-xl text-2xl">Day Overview</h3>
            <div className="home__overview-grid">
              <BlockProgressBar
                title={'Humidity'}
                value={String(days[0].humidity)}
                barColor={'bg-light-green'}
              />
              <BlockProgressBar
                title={'Cloud Cover'}
                value={String(days[0].cloudcover)}
                barColor={'bg-light-yellow'}
              />
              <BlockGeneric
                title={'Max temp.'}
                value={String(days[0].tempmax)}
                metric={currentMetric}
              />
              <BlockGeneric
                title={'Min temp.'}
                value={String(days[0].tempmin)}
                metric={currentMetric}
              />
              <BlockGeneric
                title={'Sunrise'}
                value={getFormattedTime(days[0].sunrise)}
              />
              <BlockGeneric
                title={'Sunset'}
                value={getFormattedTime(days[0].sunset)}
              />
            </div>
          </div>
          <div className="mt-6">
            <h3 className="md:text-xl text-2xl">5 Days Forecast</h3>
            <div className="home__forecast-container">
              {days.slice(1, 6).map((day: any, index: any) => (
                <BlockForecast
                  key={index}
                  date={getFormattedDate(day.datetime)}
                  icon={day.icon}
                  condition={day.conditions}
                  tempMax={day.tempmax}
                  tempMin={day.tempmin}
                  metric={currentMetric}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
