import { useEffect, useRef } from 'react';

const useOutsideClick = close => {
  // Creating a reference for the DOM element
  const ref = useRef(null);

  useEffect(() => {
    // Function to handle click outside the referenced element
    const handleOutsideClick = e => {
      // Checking if clicked element is outside the referenced element
      if (ref.current && !ref.current.contains(e.target)) close();
    };
    // Adding event listener for click outside the element
    document.addEventListener('click', handleOutsideClick, true);

    return () => {
      // Removing the event listener when the component unmounts
      document.removeEventListener('click', handleOutsideClick, true);
    };
  }, [close]);

  // Returning the reference to the DOM element
  return ref;
};

export default useOutsideClick;
