import React from 'react';

const AsideTableItem = ({ item }) => {
  return (
    <tr>
      <th>
        <p>{item.time}</p>
        <span>
          <img src={`../Weather/images/icon/weather/${item.Wx}.svg`} alt="" />
        </span>
      </th>
      <td>
        {item.MaxT}
        <span>°C</span>
      </td>
      <td>
        {item.MinT}
        <span>°C</span>
      </td>
      <td>
        {item.PoP}
        <span>%</span>
      </td>
      <td>
        <img src={`../Weather/images/icon/status/${item.CI}.svg`} alt="" />
      </td>
    </tr>
  );
};

export default AsideTableItem;
