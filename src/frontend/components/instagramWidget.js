import React, { useEffect } from 'react';
import { Container } from 'react-bootstrap';

const InstagramWidget = () => {
  useEffect(() => {
    const scriptId = "EmbedSocialHashtagScript";

    if (document.getElementById(scriptId)) {
      return;
    }

    const script = document.createElement("script");
    script.id = scriptId;
    script.src = "https://embedsocial.com/cdn/ht.js";

    document.getElementsByTagName("head")[0].appendChild(script);

    return () => {
      // Cleanup: remove the script when the component is unmounted
      const scriptElement = document.getElementById(scriptId);
      if (scriptElement) {
        document.getElementsByTagName("head")[0].removeChild(scriptElement);
      }
    };
  }, []);

  return (
    <>
    <section className='instgram-section'>
      <Container>
        
    <div className="text-center">
      <h1>Instagram / #Luxuryhotelsbrand</h1>
    </div>
    <div className="embedsocial-hashtag" data-ref="ce1b21c005de07a4bdd3dea5c99063d161d7105f">
      {/* <a
        className="feed-powered-by-es feed-powered-by-es-feed-new"
        href="https://embedsocial.com/social-media-aggregator/"
        target="_blank"
        title="Widget by EmbedSocial"
      >
        Widget by EmbedSocial<span>→</span>
      </a> */}
    </div>
    
    </Container>
    </section>
    </>
  );
};

export default InstagramWidget;