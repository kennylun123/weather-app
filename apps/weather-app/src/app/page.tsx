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

  const { address, days } = result;
  const currentMetric = searchParams.metric === 'us' ? '°F' : '°C';

  // const isResultEmpty = typeof result !== "object" || result.length < 1 || !result;

  return (
    <main>
      <h1 className="sr-only">Weather app task</h1>
      <div className="flex md:flex-row flex-col">
        <Hero
          address={address[0].toUpperCase() + address.slice(1)}
          temp={String(days[0].temp)}
          date={getFormattedDate(days[0].datetime)}
          condition={days[0].conditions}
          icon={days[0].icon}
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
