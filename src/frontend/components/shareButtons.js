import React, { useEffect } from 'react';

const ShareThisButtons = () => {
  useEffect(() => {
    // Create a script element
    const script = document.createElement('script');

    // Set the script source to the ShareThis script with your property and product information
    script.src = 'https://platform-api.sharethis.com/js/sharethis.js#property=624cc84206b42700194289cc&product=inline-share-buttons';
    script.async = true;

    // Append the script to the document body
    document.body.appendChild(script);

    // Clean up the script when the component unmounts
    return () => {
      document.body.removeChild(script);
    };
  }, []); // The empty dependency array ensures the effect runs only once when the component mounts

  return (
    <div className="sharethis-inline-share-buttons"></div>
  );
};

export default ShareThisButtons;