import { useEffect } from 'react';

function useDisableScroll(menuActivo) {
  useEffect(() => {
    const handleResize = () => {
      const isMobile = window.matchMedia('(min-width: 767px)').matches;
      if (isMobile) {
        document.body.style.overflowY = 'auto'; // Ensure scroll is enabled on larger screens
    } else {
        if (menuActivo) {
          document.body.style.overflowY = 'hidden';
        } else {
          document.body.style.overflowY = 'auto';
        }
      }
    };

    // Initial check
    handleResize();

    // Attach the resize listener
    window.addEventListener('resize', handleResize);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [menuActivo]);
}

export default useDisableScroll;
