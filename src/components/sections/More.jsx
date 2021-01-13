import '../../App.scss'
import Zoom from 'react-reveal/Zoom';
function Hero() {
    return (
        <div className="More">
            <div id="timeline">
                <h1>Our Journey and Progress</h1>
                <p class="leader">Light It Forward Foundation is a 501(c)(3) Non-Profit Public Charity.</p>
                <div class="demo-card-wrapper">
                    <div class="demo-card demo-card--step1">
                        <div class="head">
                            <div class="number-box">
                                <span>01</span>
                            </div>
                            <h2><span class="small">8 different locations</span> 12 new Businesses</h2>
                        </div>
                        <div class="body">
                            <p>Using our innovative business model, in the past 7 years we have started 12 new businesses in 8 different locations in Guatemala.</p>      
                            <p><b>Benefits:</b></p>
                            <ul>
                                <li>Directly improved the lives of 500+ people and improving the lives of 1000’s more; through increased trade and more consistent income earning opportunities.</li>
                                <li>Children attending schools in their own villages – Better family nutrition – Improved living conditions.</li>
                            </ul>
                            <img src="https://cdn.shopify.com/s/files/1/0040/3786/9638/files/lif_journey_rafa.jpg?v=1610501339" alt="Graphic" />
                        </div>
                    </div>

                    <div class="demo-card demo-card--step2">
                        <div class="head">
                            <div class="number-box">
                                <span>02</span>
                            </div>
                            <h2><span class="small">All of our products are</span> Original Sourced</h2>
                        </div>
                        <div class="body">
                            <p>We original source all of our products. We work exclusively with the people who actually make the products; often meeting in their homes which are frequently located in remote villages. We literally pay our artists and craftsmen 2x to 5x more than they ask for their products.</p>
                            <p><b>Benefits:</b></p>
                            <ul>
                                <li>Self Reliance.</li>
                                <li>Higher Quality Products.</li>
                                <li>Improved Self Esteem.</li>
                                <li>Increase in Personal Education.</li>
                            </ul>
                            <img src="https://cdn.shopify.com/s/files/1/0040/3786/9638/files/lif_journey_weaving.jpg?v=1610501339" alt="Graphic" />
                        </div>
                    </div>

                    <div class="demo-card demo-card--step3">
                        <div class="head">
                            <div class="number-box">
                                <span>03</span>
                            </div>
                            <h2><span class="small">Central America</span> Networking</h2>
                        </div>
                        <div class="body">
                          <p>We have created strong social and business networking groups in Central America.</p>
                          <p><b>Benefits:</b></p>
                          <ul>
                              <li>Increased positive cultural impact.</li>
                              <li>Importation and exportation of products.</li>
                              <li>Working through governmental regulation.</li>
                              <li>Business to Business.</li>
                              <li>Increase in Light-It Forward Foundation’s productivity and acceptability in Guatemala.</li>
                          </ul>
                            <img src="https://cdn.shopify.com/s/files/1/0040/3786/9638/files/hands_together.jpg?v=1610501653" alt="Graphic" />
                        </div>
                    </div>

                    <div class="demo-card demo-card--step4">
                        <div class="head">
                            <div class="number-box">
                                <span>04</span>
                            </div>
                            <h2><span class="small">Legally functioning</span> Social Enterprise</h2>
                        </div>
                        <div class="body">
                            <p>We are establishing Light-It-Forward Foundation as a legally functioning Social Enterprise in Guatemala. This structure allows for a 100% distribution of profits.</p>
                            <p><b>Benefits:</b></p>
                            <ul>
                                <li>Legal, banking and accounting advantages.</li>
                                <li>Distribution of earnings and donations to non-profit organizations working in Central America.</li>
                            </ul>
                            <img src="https://cdn.shopify.com/s/files/1/0040/3786/9638/files/flag.jpg?v=1610501524" alt="Graphic" />
                        </div>
                    </div>

                    <div class="demo-card demo-card--step5">
                        <div class="head">
                            <div class="number-box">
                                <span>05</span>
                            </div>
                            <h2><span class="small">Co-Owners of</span>Good Always, LLC</h2>
                        </div>
                        <div class="body">
                            <p>Light-It-Forward owns Good Always, LLC with its sister organization 
                                
                            <a href="https://stonesoflight.org" rel="noreferrer" target="_blank">
                               <p> Stones of Light Education Foundation.</p>
                                </a>
                                This allows for Light-It-Forward to sell it's products online at  
                            <a href="https://goodalways.com" rel="noreferrer" target="_blank">
                                 <p>goodalways.com </p>
                                </a>
                                 and use the profits for humanitarian and job creation projects!
                            </p>
                            <p><b>Benefits</b></p>
                            <ul>
                                <li>Vertical integration of product supply to retail.</li>
                                <li>Building awareness of our artisans and products.</li>
                                <li>Creating a brand focused on helping impoverished people!</li>
                            </ul>
                            <a href="https://goodalways.com" rel="noreferrer" target="_blank">
                            <img id="Grow" src="https://cdn.shopify.com/s/files/1/0040/3786/9638/files/good_always_lake.jpg?v=1610501829" alt="Graphic" />
                            </a>
                        </div>
                    </div>

                </div>
            </div>
            <img id="map" src="https://cdn.shopify.com/s/files/1/0040/3786/9638/files/GOOD_ALWAYS_-_Focus_On_Job_Creation_Light_It_Forward.jpg?v=1582404162" alt="map of business locations"></img>
        </div>
    );
}

export default Hero;
