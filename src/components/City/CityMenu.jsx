import React from 'react';
import CityItem from './Item/CityItem';

const CityMenu = ({ weatherData, handleSetWeatherItem, setPhoneAsideOpen }) => {
  return (
    <article className="city__menu">
      <section className="menu__container">
        <h1>WEATHER FORECAST</h1>
        <h2>TAIWAN CITY</h2>
        <ul className="menu__list">
          {weatherData.map((item) => (
            <CityItem
              item={item}
              key={item.id}
              handleSetWeatherItem={handleSetWeatherItem}
              setPhoneAsideOpen={setPhoneAsideOpen}
            />
          ))}
        </ul>
      </section>
    </article>
  );
};

export default CityMenu;
