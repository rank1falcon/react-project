import './DetailsContent.css'
import {Link} from 'react-router-dom'
import featureleft from '../../assets/images/feature-left.jpg'
import featureright from '../../assets/images/feature-right.jpg'
import details01 from '../../assets/images/details-01.jpg'
import details02 from '../../assets/images/details-02.jpg'
import details03 from '../../assets/images/details-03.jpg'
import game01 from '../../assets/images/game-01.jpg'
import game02 from '../../assets/images/game-02.jpg'
import game03 from '../../assets/images/game-03.jpg'
import {FaStar,FaDownload,FaServer,FaGamepad} from 'react-icons/fa'


const DetailsContent = () => {
  return (
    <div className="container">
    <div className="row">
      <div className="col-lg-12">
        <div className="page-content">
          <div className="row">
            <div className="col-lg-12">
              <div className="feature-banner header-text">
                <div className="row">
                  <div className="col-lg-4">
                    <img src={featureleft} alt="" />
                  </div>
                  <div className="col-lg-8">
                    <div className="thumb">
                      <img src={featureright} alt="" />
                      <Link to="/" target="_blank"><i className="fa fa-play"></i></Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
         
          <div className="game-details">
            <div className="row">
              <div className="col-lg-12">
                <h2>Fortnite Details</h2>
              </div>
              <div className="col-lg-12">
                <div className="content">
                  <div className="row">
                    <div className="col-lg-6">
                      <div className="left-info">
                        <div className="left">
                          <h4>Fortnite</h4>
                          <span>Sandbox</span>
                        </div>
                        <ul>
                          <li><i><FaStar/></i> 4.8</li>
                          <li><i><FaDownload/></i> 2.3M</li>
                        </ul>
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="right-info">
                        <ul>
                          <li><i><FaStar/></i> 4.8</li>
                          <li><i><FaDownload/></i> 2.3M</li>
                          <li><i><FaServer /></i> 36GB</li>
                          <li><i><FaGamepad /></i> Action</li>
                        </ul>
                      </div>
                    </div>
                    <div className="col-lg-4">
                      <img src={details01} alt="" />
                    </div>
                    <div className="col-lg-4">
                      <img src={details02} alt="" />
                    </div>
                    <div className="col-lg-4">
                      <img src={details03} alt="" />
                    </div>
                    <div className="col-lg-12">
                      <p>Cyborg Gaming is free HTML CSS website template provided by TemplateMo. This is Bootstrap v5.2.0 layout. You can make a <Link to="/" target="_blank">small contribution via PayPal</Link> to info [at] templatemo.com and thank you for supporting. If you want to get the PSD source files, please contact us. Lorem ipsum dolor sit consectetur es dispic dipiscingei elit, sed doers eiusmod lisum hored tempor.</p>
                    </div>
                    <div className="col-lg-12">
                      <div className="main-border-button">
                        <Link to="/#">Download Fortnite Now!</Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        
          <div className="other-games">
            <div className="row">
              <div className="col-lg-12">
                <div className="heading-section">
                  <h4><em>Other Related</em> Games</h4>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="item">
                  <img src={game01} alt="" className="templatemo-item"/>
                  <h4>Dota 2</h4><span>Sandbox</span>
                  <ul>
                    <li><i><FaStar/></i> 4.8</li>
                    <li><i><FaDownload/></i> 2.3M</li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="item">
                  <img src={game02} alt="" className="templatemo-item"/>
                  <h4>Dota 2</h4><span>Sandbox</span>
                  <ul>
                    <li><i><FaStar/></i> 4.8</li>
                    <li><i><FaDownload/></i> 2.3M</li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="item">
                  <img src={game03} alt="" className="templatemo-item"/>
                  <h4>Dota 2</h4><span>Sandbox</span>
                  <ul>
                    <li><i><FaStar/></i> 4.8</li>
                    <li><i><FaDownload/></i> 2.3M</li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="item">
                  <img src={game02} alt="" className="templatemo-item"/>
                  <h4>Dota 2</h4><span>Sandbox</span>
                  <ul>
                    <li><i><FaStar/></i> 4.8</li>
                    <li><i><FaDownload/></i> 2.3M</li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="item">
                  <img src={game03} alt="" className="templatemo-item"/>
                  <h4>Dota 2</h4><span>Sandbox</span>
                  <ul>
                    <li><i><FaStar/></i> 4.8</li>
                    <li><i><FaDownload/></i> 2.3M</li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="item">
                  <img src={game01} alt="" className="templatemo-item"/>
                  <h4>Dota 2</h4><span>Sandbox</span>
                  <ul>
                    <li><i><FaStar/></i> 4.8</li>
                    <li><i><FaDownload/></i> 2.3M</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  </div>
  )
}

export default DetailsContent