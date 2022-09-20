import React, { useEffect, useState } from 'react';
import CityAside from '../components/City/CityAside';
import CityMenu from '../components/City/CityMenu';
import PhoneAside from '../components/City/PhoneAside';
import { CityConvert } from '../func/convert';
import { apiCity } from '../func/WebAPI';

const CityPage = () => {
  const [weatherData, setWeatherData] = useState([]);
  const [weatherItem, setWeatherItem] = useState(false);
  const [phoneAsideOpen, setPhoneAsideOpen] = useState(false);

  function handleSetWeatherItem(city, name) {
    const item = weatherData.find((item) => item.locationName === city);
    setWeatherItem({ ...item, es__name: name });
  }

  useEffect(() => {
    async function getData() {
      try {
        const Data = (await apiCity()).data.records.location;
        setWeatherData(CityConvert(Data));
      } catch (error) {
        console.log(error);
      }
    }
    getData();
  }, []);

  return (
    <>
      <main className="city container">
        <CityMenu
          handleSetWeatherItem={handleSetWeatherItem}
          weatherData={weatherData}
          setPhoneAsideOpen={setPhoneAsideOpen}
        />
        <CityAside weatherItem={weatherItem} />
      </main>
      <PhoneAside
        weatherItem={weatherItem}
        phoneAsideOpen={phoneAsideOpen}
        setPhoneAsideOpen={setPhoneAsideOpen}
      />
    </>
  );
};

export default CityPage;
