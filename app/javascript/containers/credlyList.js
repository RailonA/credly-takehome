import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { requestCredlyInfo } from '../helpers/requests';

const CredlyList = () => {
  const credlyData = useSelector((state) => state.credly);
  
  console.log(credlyData);
  
  const dispatch = useDispatch();
  
  useEffect(() => {
    requestCredlyInfo(dispatch);
  }, [dispatch]);

  return (
  <div>
    <div>
      <p>Credly List Info Card</p>
    </div>
  </div>
  );
};

export default CredlyList;
