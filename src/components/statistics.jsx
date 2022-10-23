import React from 'react';

import { StatList } from './statrendelement';

export const Statistics = ({title, statsDate}) => {
  
  return (<div>
    {title && <h2>{title}</h2>}
 <ul class="stat-list">
    <StatList statsDate={statsDate} />
  </ul>
  </div>);
};

  
    