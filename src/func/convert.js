import { city } from '../libs/city';

export function CityConvert(Data) {
  function ItemConvert(data) {
    const locationName = data.locationName;
    function WxConvert(array) {
      function iconConvert(num) {
        if (num === 1) {
          return 'sun';
        }
        if (num === 2) {
          return 'sun-cloud';
        }
        if (num === 3) {
          return 'sun-cloud-2';
        }
        if (num === 19) {
          return 'sun-cloud-1';
        }
        if ([4, 5, 6, 7].includes(num)) {
          return 'cloud';
        }
        if ([8, 9, 10, 11, 20].includes(num)) {
          return 'rain-little';
        }
        if ([12, 13, 14].includes(num)) {
          return 'sun-rain-2';
        }
        if ([15, 16, 17, 18, 21, 22, 33, 34, 35, 36].includes(num)) {
          return 'lighting-rain';
        }
        if ([24, 25, 26, 27, 28].includes(num)) {
          return 'wind';
        }
        if ([23, 29, 30, 31, 32, 37, 38, 39, 40, 41, 42].includes(num)) {
          return 'rain-normal';
        }
      }
      return array.map((item) => {
        return iconConvert(item * 1);
      });
    }
    function CIconvert(array) {
      function iconConvert(state) {
        if (state === '舒適') {
          return 'green';
        }
        if (state === '舒適至悶熱') {
          return 'yellow';
        }
        return 'red';
      }
      return array.map((item) => {
        return iconConvert(item);
      });
    }

    const Wx = WxConvert(
      data.weatherElement
        .find((item) => item.elementName === 'Wx')
        .time.map((item) => item.parameter.parameterValue),
    );

    const PoP = data.weatherElement
      .find((item) => item.elementName === 'PoP')
      .time.map((item) => item.parameter.parameterName);

    const MinT = data.weatherElement
      .find((item) => item.elementName === 'MinT')
      .time.map((item) => item.parameter.parameterName);

    const CI = CIconvert(
      data.weatherElement
        .find((item) => item.elementName === 'CI')
        .time.map((item) => item.parameter.parameterName),
    );
    // const CI = data.weatherElement
    //   .find((item) => item.elementName === 'CI')
    //   .time.map((item) => item.parameter.parameterName);

    const MaxT = data.weatherElement
      .find((item) => item.elementName === 'MaxT')
      .time.map((item) => item.parameter.parameterName);

    const time1 = {
      time: '00-06',
      Wx: Wx[0],
      CI: CI[0],
      PoP: PoP[0],
      MaxT: MaxT[0],
      MinT: MinT[0],
    };

    const time2 = {
      time: '06-18',
      Wx: Wx[1],
      CI: CI[1],
      PoP: PoP[1],
      MaxT: MaxT[1],
      MinT: MinT[1],
    };

    const time3 = {
      time: '18-06',
      Wx: Wx[2],
      CI: CI[2],
      PoP: PoP[2],
      MaxT: MaxT[2],
      MinT: MinT[2],
    };

    const final = {
      locationName,
      Wx: Wx[2],
      MaxT: MaxT[2],
      time: [time1, time2, time3],
    };

    return final;
  }

  const weatherData = city.map((item) => {
    const weatherItem = ItemConvert(
      Data.find((weather) => weather.locationName === item.locationName),
    );
    return { ...item, ...weatherItem };
  });

  return weatherData;
}
