import { FC } from 'react';
import type { RootState } from '../../app/store/index';
import { useAppSelector, useAppDispatch } from '../../shared/hook';
import { increment, decrement } from '../../app/store/slices/counterSlice';

const Counter: FC = () => {
  const count = useAppSelector((state: RootState) => state.counter.value);
  const dispatch = useAppDispatch();

  return (
    <div className='counter'>
      <button
        aria-label='Increment value'
        onClick={() => dispatch(decrement())}
      >
        decrement
      </button>
      <span>{count}</span>
      <button
        aria-label='Increment value'
        onClick={() => dispatch(increment())}
      >
        increment
      </button>
    </div>
  )
}

export default Counter;