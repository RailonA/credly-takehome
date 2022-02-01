import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { requestMarvelsInfo } from '../helpers/requests';

const HeroList = () => {
  const heroData = useSelector((state) => state.marvel.marvelsCollection);
  
  console.log(heroData);
  
  const dispatch = useDispatch();

  useEffect(() => {
      dispatch(requestMarvelsInfo);
  }, [dispatch]);

  return (

<div>
    <div>
      <p>Hero Card</p>
      {/* <p>{renderHeros}</p> */}
    </div>
    <div>
      {
      heroData.map((hero) => (
        <div key={hero.id} className="d-flex col-sm-4 m-4">
          <img src={hero.thumbnail.path+'/portrait_xlarge.jpg'}/>
          <p>{ hero.name }</p>
          <p>{ hero.description }</p>
        </div>
      ))
      }
    </div>
  </div>
  );
};

export default HeroList;
