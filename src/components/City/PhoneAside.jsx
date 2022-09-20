import React from 'react';
import AsideTableItem from './Item/AsideTableItem';

const PhoneAside = ({ weatherItem, setPhoneAsideOpen, phoneAsideOpen }) => {
  return (
    <>
      {phoneAsideOpen && (
        <aside
          className="phone__aside"
          onClick={() => {
            setPhoneAsideOpen(false);
          }}
        >
          {weatherItem && (
            <article className="phone__container">
              <section className="phone__title">
                <h1>{weatherItem.es__name}</h1>
                <h2>{weatherItem.locationName}</h2>
              </section>
              <ul className="phone__temp">
                <li className="temp__icon">
                  <img
                    src={`../Weather/images/icon/weather/${weatherItem.Wx}.svg`}
                    alt=""
                  />
                </li>
                <li className="temp__content">
                  <h1>TEMPERATURE</h1>
                  <p>
                    {weatherItem.MaxT} <span>°C</span>
                  </p>
                </li>
              </ul>
              <section className="phone__table">
                <h1>
                  TOMORROW <span>09.15</span>
                </h1>
                <table>
                  <tbody>
                    <tr className="icon">
                      <th></th>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                    </tr>
                    {weatherItem.time.map((item, index) => (
                      <AsideTableItem item={item} key={index} />
                    ))}
                  </tbody>
                </table>
              </section>
            </article>
          )}
        </aside>
      )}
    </>
  );
};

export default PhoneAside;
