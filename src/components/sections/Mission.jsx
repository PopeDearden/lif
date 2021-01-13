import '../../App.scss'
import Zoom from 'react-reveal/Zoom';

function Mission() {
  return (
    <div className="Mission">
      <Zoom>
        <div className="Title">
          <h2>What We Do</h2>
        </div>
        <div className="Bubble">
          <div className="TextBox">
            <h2><b id="highlight">Impoverished families in </b> rural <b id="highlight">Guatemala</b> don't have opportunities to create sustainiable income for their families.</h2>
          </div>
          <img id="BubbleImg" src="https://cdn.shopify.com/s/files/1/0040/3786/9638/files/santiago_profile.PNG?v=1582406484" alt="Impoverished children need education">
          </img>
          {/* <a href="https://checkout.square.site/merchant/WFJDHKBHCFDKF/checkout/3NBHFIZQ4XMHWIJV65M25T54" target="_blank" rel="noreferrer">

            <div className="DonateButton">
              <h2>
                Donate
              </h2>
            </div>
          </a> */}
        </div>
        <div className="Arrow">

        </div>
        <div className="Bubble">
          <img id="BubbleImgTwo" src="https://cdn.shopify.com/s/files/1/0040/3786/9638/files/Maria_weaving_bracelet.jpg?v=1605669995">

          </img>
          {/* <a href="https://colegiodelfuturo.com/" target="_blank" rel="noreferrer">

            <div className="LearnButton">
              <h2>Learn More</h2>
            </div>
          </a> */}
          <div className="TextBox">
            <h2> With your donations we help families create viable products and businesses to <b>produce sustainable income</b>.</h2>
          </div>
        </div>
        <div className="Arrow">

        </div>
        <div className="Bubble">
          <div className="TextBox">
            <h2>We market and sell these products directly and online through Good Always. <a href="https://goodalways.com" target="_blank" rel="noreferrer">
              (goodalways.com)
              </a>
              </h2>
          </div>
          <img id="BubbleImg" src="https://cdn.shopify.com/s/files/1/0040/3786/9638/files/Artisan_products_home.jpg?v=1609485248">

          </img>
          {/* <a href="https://checkout.square.site/merchant/WFJDHKBHCFDKF/checkout/3NBHFIZQ4XMHWIJV65M25T54" target="_blank" rel="noreferrer">

            <div className="DonateButton">
              <h2>
                Donate
              </h2>
            </div>
          </a> */}
        </div>
          <div className="Title">
          <h3>(Donations can also help provide <br></br>direct humanitarian aid to families.)</h3>
          </div>
      </Zoom>

    </div>
  );
}

export default Mission;
