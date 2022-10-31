import { useDispatch, useSelector } from 'react-redux';
import { Button } from 'shared/Button/Button';

import { getCounterValue } from '../model/selectors/getCounterValue/getCounterValue';
import { counterActions } from '../model/slice/counterSlice';

export const Counter = () => {
  const counterValue = useSelector(getCounterValue);
  const dispatch = useDispatch();

  const inc = () => {
    dispatch(counterActions.increment());
  };
  const dec = () => {
    dispatch(counterActions.decrement());
  };

  return (
    <div>
      <h1>{counterValue}</h1>
      <Button onClick={inc}>inc</Button>
      <Button onClick={dec}>dec</Button>
    </div>
  );
};
