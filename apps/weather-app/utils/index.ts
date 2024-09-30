export const fetchWeather = async ({
  address,
  metric,
}: {
  address: string;
  metric: string;
}) => {
  // Default query
  address = address || 'brighton';
  metric = metric || 'uk';

  try {
    const response = await fetch(
      `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${address}?unitGroup=${metric}&elements=datetime%2Cname%2Ctempmax%2Ctempmin%2Ctemp%2Chumidity%2Ccloudcover%2Csunrise%2Csunset%2Cconditions%2Cicon&include=days%2Ccurrent&key=${process.env.WEATHER_API_KEY}`,
      {
        method: 'GET',
        headers: {},
      }
    );
    // temp: empty result handling
    if (!response.ok) {
      return {
        address: [`No result`],
        days: [
          {
            datetime: new Date(),
            temp: '0',
            tempmax: '0',
            tempmin: '0',
            humidity: '0',
            cloudcover: '0',
            sunrise: '0',
            sunset: '0',
            conditions: '--',
            icon: 'clear-day',
          },
          {
            datetime: new Date(),
            temp: '0',
            tempmax: '0',
            tempmin: '0',
            humidity: '0',
            cloudcover: '0',
            sunrise: '0',
            sunset: '0',
            conditions: '--',
            icon: 'clear-day',
          },
          {
            datetime: new Date(),
            temp: '0',
            tempmax: '0',
            tempmin: '0',
            humidity: '0',
            cloudcover: '0',
            sunrise: '0',
            sunset: '0',
            conditions: '--',
            icon: 'clear-day',
          },
          {
            datetime: new Date(),
            temp: '0',
            tempmax: '0',
            tempmin: '0',
            humidity: '0',
            cloudcover: '0',
            sunrise: '0',
            sunset: '0',
            conditions: '--',
            icon: 'clear-day',
          },
          {
            datetime: new Date(),
            temp: '0',
            tempmax: '0',
            tempmin: '0',
            humidity: '0',
            cloudcover: '0',
            sunrise: '0',
            sunset: '0',
            conditions: '--',
            icon: 'clear-day',
          },
          {
            datetime: new Date(),
            temp: '0',
            tempmax: '0',
            tempmin: '0',
            humidity: '0',
            cloudcover: '0',
            sunrise: '0',
            sunset: '0',
            conditions: '--',
            icon: 'clear-day',
          },
        ],
        status: response.status,
      };
    }
    const result = await response.json();
    console.log(result);
    return result;
  } catch (error) {
    console.error('Fetching Error:', error);
  }
};

export const getWeatherIconURL = (icon: string) => {
  // Match the API icon with custom icon
  if (icon.startsWith('snow')) {
    if (icon.includes('day')) {
      icon = '/assets/snowy-1.svg';
    } else {
      icon = '/assets/snowy-6.svg';
    }
  } else if (icon.startsWith('thunder')) {
    icon = '/assets/thunder.svg';
  } else if (icon.startsWith('rain')) {
    icon = '/assets/rainy-6.svg';
  } else if (icon.startsWith('showers')) {
    if (icon.includes('day')) {
      icon = '/assets/rainy-1.svg';
    } else {
      icon = '/assets/rainy-5.svg';
    }
  } else if (icon == 'fog' || icon == 'wind' || icon == 'cloudy') {
    // We don't have fog & windy icon yet, temporary set to cloudy
    icon = '/assets/cloudy.svg';
  } else if (icon.startsWith('partly-cloudy')) {
    if (icon.includes('day')) {
      icon = '/assets/cloudy-day-2.svg';
    } else {
      icon = '/assets/cloudy-night-2.svg';
    }
  } else if (icon.startsWith('clear')) {
    if (icon.includes('day')) {
      icon = '/assets/day.svg';
    } else {
      icon = '/assets/night.svg';
    }
  }
  return icon;
};

export const getFormattedDate = (dateStr: string) => {
  const date = new Date(dateStr);

  const today = new Date();
  const tomorrow = new Date(today);
  tomorrow.setDate(today.getDate() + 1);

  // Directly return when date is tomorrow
  if (date.getDate() == tomorrow.getDate()) {
    return 'Tomorrow';
  }

  // Define the formatting options
  const options: Intl.DateTimeFormatOptions = {
    weekday: 'short',
    month: 'short',
    day: '2-digit',
  };

  // Format the date using toLocaleDateString
  return date.toLocaleDateString(undefined, options);
};

export const getFormattedTime = (timeStr: string) => {
  // Check if sunrise is a valid time string
  let formattedTime;
  if (timeStr) {
    formattedTime = timeStr.replace(/^0?(\d+):(\d+):\d+$/, '$1:$2');
  } else {
    formattedTime = '0';
  }
  return formattedTime;
};
