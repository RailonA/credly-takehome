import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { requestMarvelsInfo, requestCredlyInfo } from '../helpers/requests';

const HeroList = () => {
  const heroData = useSelector((state) => state.marvel.marvelsCollection);
  const credlyData = useSelector((state) => state.credly.requestCredlyInfo);
  console.log(credlyData);
  
  const dispatch = useDispatch();

  useEffect(() => {
    //  dispatch(requestMarvelsInfo);
    requestCredlyInfo(dispatch);
    requestMarvelsInfo(dispatch);
  }, [dispatch]);

  return (

<div>
    <div>
      <p>Hero Card</p>
    </div>
    <div>
      {
      heroData.map((hero) => (
        <div key={hero.id} className="d-flex col-sm-4 m-4">
          <img src={hero.thumbnail.path+'/portrait_incredible.jpg'}/>
          <p>{ hero.name }</p>
        </div>
      ))
      }
    </div>
  </div>
  );
};

export default HeroList;
