import React, { useEffect } from 'react';

interface UseOutsideClickParams {
  ref: React.RefObject<HTMLDivElement>;
  // eslint-disable-next-line @typescript-eslint/no-unsafe-function-type
  callback: Function;
}

export const useOutsideClick = ({ ref, callback }: UseOutsideClickParams) => {
  useEffect(() => {
    const listener = (event: any) => {
      if (!ref.current || ref.current.contains(event.target)) {
        return;
      }
      callback(event);
    };

    document.addEventListener('mousedown', listener);
    document.addEventListener('touchstart', listener);

    return () => {
      document.removeEventListener('mousedown', listener);
      document.removeEventListener('touchstart', listener);
    };
  }, [ref, callback]);
};
