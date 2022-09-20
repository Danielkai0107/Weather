import React from 'react';
import { iconInfo } from '../libs/iconInfo';

const InfoPage = () => {
  return (
    <main className="info container">
      <ul className="info__list">
        <h1>Icon Information</h1>
        {iconInfo.map((item) => (
          <li key={item.id}>
            <figure>
              <img src={`../Weather/images/icon/${item.icon}.svg`} alt="" />
            </figure>
            <span>{item.name}</span>
          </li>
        ))}
      </ul>
    </main>
  );
};

export default InfoPage;
