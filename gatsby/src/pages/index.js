import React from 'react';
import { ItemGrid } from '../components/ItemGrid';
import { LoadingGrid } from '../components/LoadingGrid';
import { HomePageGrid } from '../styles/Grids';
import useLatestData from '../utils/useLatestData';

const CurrentSlicemasters = ({ slicemasters }) => (
  <div>
    <h3 className="center">
      <span className="mark tilt">Slicemasters On</span>
    </h3>
    <p>Currently slicing, ready to slice you up!</p>
    {!slicemasters && <LoadingGrid count={4} />}
    {slicemasters && !slicemasters?.length && (
      <p>No one is working right now!</p>
    )}
    {slicemasters?.length && <ItemGrid items={slicemasters} />}
  </div>
);
const CurrentSlices = ({ slices }) => (
  <div>
    <h3 className="center">
      <span className="mark tilt">Hot Slices</span>
    </h3>
    <p>Come buy, by the slice!</p>
    {!slices && <LoadingGrid count={4} />}
    {slices && !slices?.length && <p>No current slices yet!</p>}
    {slices?.length && <ItemGrid items={slices} />}
  </div>
);

const HomePage = () => {
  const { slicemasters, slices } = useLatestData();
  return (
    <div className="center">
      <h1>Best Pizza on Island!</h1>
      <p>Open from 11am - 11pm Every day!</p>
      <HomePageGrid>
        <CurrentSlicemasters slicemasters={slicemasters} />
        <CurrentSlices slices={slices} />
      </HomePageGrid>
    </div>
  );
};

export default HomePage;
