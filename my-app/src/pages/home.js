import pic1 from "../images/net2.jpg";
import pic2 from "../images/boat2.jpg";

const Home = () => {
  return (
    <div className="Home">
        <img src={pic2} alt="Kuva 1" />
      <p>
        <span className="first-letter">M</span>eret ovat elintärkeä osa planeettaamme, mutta ne ovat vakavassa vaarassa. 
        Liikakalastus uhkaa ekosysteemejämme ja meidän kaikkien tulevaisuutta. On aika kantaa vastuu teoistamme ja ryhtyä toimiin!
        <br /><br />
        </p>
        
        <p>
        Meret ovat yhteinen aarteemme, joka tarjoaa meille ravintoa, virkistystä ja työpaikkoja. Liikakalastus on kuitenkin vähentänyt näitä rikkauksia vähitellen, 
        mutta varmasti. Kalakantojen romahdus on johtanut lajien häviämiseen ja ekosysteemien epätasapainoon.
        </p>
        
        <p>
        <br /><br />
        Katastrofin estämisen ensimmäinen askel on tiedon lisääminen. Kun ymmärrämme liikakalastuksen vaikutukset, 
        voimme ryhtyä tehokkaisiin vastatoimiin katastrofin torjumiseksi. 
        Kampanjasivustomme tarjoaa sinulle tietoa liikakalastuksesta ja sen 
        haitallisista seurauksista.
        <br /><br />
        </p>
        
        <p>
        Vaikutusmahdollisuutemme eivät pääty tiedon hankkimiseen. Haluamme kannustaa sinua osallistumaan. 
        Yksilön teot voivat luoda suuren muutoksen. Voit aloittaa pienistä teoista omassa arjessasi, kuten 
        valitsemalla vastuullisesti pyydettyä kalaa, valitsemalla sertifioituja tuotteita ja välttämällä uhanalaisia lajeja. Voit myös tukea kestävää 
        kalastusta äänestämiskäyttäytymisellä.
        </p>

       

    </div>
  );
};

export default Home;
