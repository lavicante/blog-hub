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
      <h1 data-testid='counter'>{counterValue}</h1>
      <Button data-testid='counter-btn-inc' onClick={inc}>
        inc
      </Button>
      <Button data-testid='counter-btn-dec' onClick={dec}>
        dec
      </Button>
    </div>
  );
};
