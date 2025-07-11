/* eslint-disable @typescript-eslint/no-unused-vars */
import { useEffect, useState } from 'react';

// Example of a generic input to a function and a generic output
// takes generic type T and returns a value of type T
export function useDebounce<T>(value: T, delay: number) {
  // State and setters for debounced value
  const [debouncedValue, setDebouncedValue] = useState(value);
  useEffect(
    () => {
      // Update debounced value after delay
      const handler = setTimeout(() => {
        setDebouncedValue(value);
      }, delay);
      // Cancel the timeout if value changes (also on delay change or unmount)
      // This is how we prevent debounced value from updating if value is changed ...
      // .. within the delay period. Timeout gets cleared and restarted.
      return () => {
        clearTimeout(handler);
      };
    },
    [value, delay] // Only re-call effect if value or delay changes
  );
  return debouncedValue;
}

const MyComponent = () => {
  const stringInput: string = 'value';
  const debouncedValue = useDebounce(stringInput, 10);
  const debouncedValue2 = useDebounce(10, 10);
  return <div>{debouncedValue}</div>;
};

type StateUpdateFunction<State> = (
  newState: State | ((oldState: State) => State)
) => void;

/**
 * Maintain a local, mutable copy of a given prop that responds
 * to changes in the prop's value
 *
 * @param propValue The prop that you wish to mirror
 * @param initialStateValue The initial value for the local state
 */
// Takes a prop value of generic type T and returns a tuple with a value of type T and a function that takes a new state of type T
function usePropState<T>(
  propValue: T,
  initialStateValue?: T
): [T, StateUpdateFunction<T>] {
  const initialValue =
    initialStateValue === undefined ? propValue : initialStateValue;
  const [localCopy, setLocalCopy] = useState<T>(initialValue);
  useEffect(() => setLocalCopy(propValue), [propValue]);
  return [localCopy, setLocalCopy];
}

const MyComponent2 = ({ propValue }: { propValue: string }) => {
  const [localCopy, setLocalCopy] = usePropState(propValue);

  useEffect(() => {
    setLocalCopy('string');
  }, [setLocalCopy]);
  return <div>{localCopy}</div>;
};
