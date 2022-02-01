import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { requestMarvelsInfo } from '../helpers/requests';

const HeroList = () => {
  const heroData = useSelector((state) => state.marvel.marvelsCollection);
  
  console.log(heroData);
  
  const dispatch = useDispatch();

  // const renderHeros = heroData.map((results)=>(
  //   <div>
  //     {
  //     results.map((hero)=> (
  //       <p>{hero.id}</p>
  //     ))
  //     }
  //   </div>
  // ));

  useEffect(() => {
      dispatch(requestMarvelsInfo);
  }, [dispatch]);

  return (

<div>
    <div>
      <p>Prints the hero list</p>
      {/* <p>{renderHeros}</p> */}
    </div>
    <div>
      {
      heroData.map((hero) => (
        <div key={hero.id} className="d-flex col-sm-4 m-4">
          <p>{ hero.name }</p>
        </div>
      ))
      }
    </div>
  </div>
  );
};

export default HeroList;
