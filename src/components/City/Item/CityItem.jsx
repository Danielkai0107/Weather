import React from 'react';

const CityItem = ({ item, handleSetWeatherItem, setPhoneAsideOpen }) => {
  return (
    <li
      className="menu__list__item"
      onClick={() => {
        handleSetWeatherItem(item.locationName, item.es_name);
        setPhoneAsideOpen(true);
      }}
    >
      <article className="title">
        <section className="title__content">
          <p>{item.locationName}</p>
          <span>{item.es_name}</span>
        </section>
        <section className="title__icon">
          <img src={`../Weather/images/icon/weather/${item.Wx}.svg`} alt="" />
        </section>
      </article>
      <figure>
        <div className="mask"></div>
        <img src={`../Weather/images/city/${item.bgc}.jpg`} alt="" />
      </figure>
    </li>
  );
};

export default CityItem;
