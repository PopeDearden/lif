import '../../App.scss'
import Zoom from 'react-reveal/Zoom';

function Help() {

    return (

<div className="Solution">
          <Zoom>
      <h1>Here's how you can help!</h1>
      <a href="https://checkout.square.site/merchant/HCYYCPA084J1Z/checkout/5E7H3JQS2HCNRO2FMWAIPRVM" target="_blank" rel="noreferrer">

<div className="DonateButton">
  <h2>
    Donate
  </h2>
</div>
</a>
      <h2>3 main ways to support Light-It-Forward's mission to end extreme poverty:</h2>
      </Zoom>

      <div className="Row">

      <a href="https://checkout.square.site/merchant/HCYYCPA084J1Z/checkout/UIDJSJLALC4WDOCF3XEGSMF2" target="_blank" rel="noreferrer">
        <div className="Card">
          <h2>Humanitarian Aid</h2>
          <p>Help impoverished families have their basic human needs (Food, Water, Shelter) met.</p>
          <img src="https://cdn.shopify.com/s/files/1/0040/3786/9638/files/guatemalan_boy.jpg?v=1610500509" alt="Guatemalan Girl Studying"></img>
        </div>
   </a>
   <a href="https://checkout.square.site/merchant/HCYYCPA084J1Z/checkout/5E7H3JQS2HCNRO2FMWAIPRVM" target="_blank" rel="noreferrer">
        <div className="Card">
          <h2>Business Investment</h2>
          <p>Donate to help invest in current businesses and fund the creation of more!</p>
          <img src="https://cdn.shopify.com/s/files/1/0040/3786/9638/files/onecimo_profile.PNG?v=1582406484" alt="Guatemalan Girl Studying"></img>
        </div>
        </a>
        <a href="https://goodalways.com" target="_blank" rel="noreferrer">
        <div className="Card">
          <h2>Purchase Product</h2>
          <p>Purchase products from Good Always (goodalways.com). 100% of their profits help end extreme poverty!</p>
          <img src="https://cdn.shopify.com/s/files/1/0040/3786/9638/files/IMG_0306.JPG?v=1579496720" alt="Guatemalan Girl Studying"></img>
        </div>
        </a>
      </div>
    </div>

    );
}

export default Help;
