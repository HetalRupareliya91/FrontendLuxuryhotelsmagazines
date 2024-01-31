import React from "react";
import AdamsBeach from "../../assets/img/whowithwork/Adams Beach.png";
import AlionBeach from "../../assets/img/whowithwork/Alion Beach.png";
import Amathus from "../../assets/img/whowithwork/Amathus.png";
import Aphrodite from "../../assets/img/whowithwork/Aphrodite Hills.png";
import Atlantica from "../../assets/img/whowithwork/Atlantica Aeneas.png";
import Ayii from "../../assets/img/whowithwork/Ayii Anargyri.png";
import Columbia from "../../assets/img/whowithwork/Columbia Beach.png";
import Coral from "../../assets/img/whowithwork/Coral Beach.png";
import Elysium from "../../assets/img/whowithwork/Elysium.png";
import FourSeasion from "../../assets/img/whowithwork/Four Seasons.png";
import Londa from "../../assets/img/whowithwork/Londa.png";
import Mediterranean from "../../assets/img/whowithwork/Mediterranean.png";
import Napa from "../../assets/img/whowithwork/Napa Mermaid.png";
import Nissi from "../../assets/img/whowithwork/Nissi Beach Resort.png";
import StRaphael from "../../assets/img/whowithwork/St Raphael.png";
import Apollonia from "../../assets/img/whowithwork/The Royal Apollonia.png";



function ClientLogo() {
    // Duplicate logos to create an infinite loop
    const logos = [AdamsBeach, AlionBeach, Amathus, Aphrodite, Atlantica, Ayii, Columbia, Coral, Elysium, FourSeasion, Mediterranean, Londa, Nissi,Napa, StRaphael, Apollonia,AdamsBeach, AlionBeach, Amathus, Aphrodite, Atlantica, Ayii, Columbia, Coral, Elysium, FourSeasion, Mediterranean, Londa, Nissi,Napa, StRaphael, Apollonia];

    return (
        <section className="spad clientlogosection">
            <h1 className="text-center mb-5">Who Are We Working With</h1>
            <div className="slider">
                {logos.map((logo, index) => (
                    <div className="item" key={index}>
                        <a href=""><img alt="logo" src={logo} /></a>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default ClientLogo;
