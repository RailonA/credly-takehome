import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchHeros } from '../helpers/request';

const HeroList = () => {
  const heroData = useSelector((state) => state.marvels.marvelsCollection);
  
  console.log(heroData);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchHeros());
  }, []);

  return (

<div>
    <div className="d-flex flex-wrap  justify-content-center">
      <p>Prints the hero list</p>
    </div>
</div>
  );
};

export default HeroList;
