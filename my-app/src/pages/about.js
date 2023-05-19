import net2 from "../images/net2.jpg";

const About = () => {
  return (
    <div className="About">
      <p>
        <span className="first-letter">M</span>e olemme joukko kalastuksesta ja ympäristöasioista kiinnostuneita vaikuttajia ja 
        haluamme lisätä tietoisuutta kalakantojen vähenemisestä ja edistää kestävää kalastusta. 
        Tavoitteenamme on varmistaa, että tulevat sukupolvet voivat nauttia terveistä ja monimuotoisista luonnosta.
        <br /><br />
        </p><p>
        Olemme avoimia yhteistyölle ja ideoille. Jos sinulla on ehdotuksia, haluat osallistua 
        kampanjoihimme tai tarvitset lisätietoja kalakantojen vähenemisestä, älä epäröi ottaa 
        meihin yhteyttä. Yhdessä voimme tehdä muutoksen ja turvata tulevaisuuden kalakannat!
        <br /><br />
        </p><p>
        Sähköposti: yoowassaa@h0tmale.com
        <br /><br />
        Puhelinnumero: 112
        <br /><br />
        </p><p>
        <br /><br />
        Kiitos, että olet mukana taistelussa kestävän kalastuksen puolesta!
      </p>
      <div class="image-container">
      <img src={net2} alt="Kuva 2" />
      </div>

    </div>
  );
};

export default About;
