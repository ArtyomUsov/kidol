import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToTop = () => {
	const { pathname } = useLocation();
	useEffect(() => {
		window.scrollTo(0, 0);
	}, [pathname]);

	// useEffect(() => {
	//     const handleBeforeUnload = (event) => {
	//       event.preventDefault();
	//       event.returnValue = '';
	//       window.scrollTo(0, 0);
	//     };

	//     window.addEventListener('beforeunload', handleBeforeUnload);

	//     return () => {
	//       window.removeEventListener('beforeunload', handleBeforeUnload);
	//     };
	//   }, []);
	// useEffect(() => {
	//     const handleBeforeUnload = (event: BeforeUnloadEvent) => {
	//       event.preventDefault();
	//       event.returnValue = '';
	//       window.scrollTo(0, 0);
	//     };

	//     window.addEventListener('beforeunload', handleBeforeUnload);

	//     return () => {
	//       window.removeEventListener('beforeunload', handleBeforeUnload);
	//     };
	//   }, [pathname]);
	// useEffect(() => {
	//   const unlisten = window.addEventListener('beforeunload', () => {
	//     window.scrollTo(0, 0);
	//   });
	//   return () => {
	//     window.removeEventListener('beforeunload', unlisten);
	//   };
	// }, [pathname]);

	return null;
};

export default ScrollToTop;
