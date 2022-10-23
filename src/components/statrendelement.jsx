import PropTypes from "prop-types";
import React from 'react';

const StatCard = ({ label, percentage }) => {
  return (
    <div>
      <span class="label">{label}</span>
      <span class="percentage">{percentage}%</span>
    </div>
  );
};

StatCard.propTypes = {
  // id: PropTypes.string,
  label: PropTypes.string,
  percentage: PropTypes.number,
}

export const StatList = ({statsDate}) => {
  // console.log(statsAr)
  return (
  <div>
      {statsDate.map(el => (
        <li class="item" key={el.id}>
          <StatCard
            label={el.label}
            percentage={el.percentage}
             />
        </li>
      ))}
  </div>
);
};

