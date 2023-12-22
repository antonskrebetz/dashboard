import React from 'react';
import { Timeline } from 'antd';
import { carsData } from '../data/data';

export const CarsDashboardTable: React.FC = () => {
    const items = carsData
        .sort((a,b) => a.year - b.year)
        .map(car => ({children: `${car.year} ${car.brand} ${car.model} ${car.price}$`}));

    return <Timeline items={items} />
};