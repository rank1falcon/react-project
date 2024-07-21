import './BrowseContent.css'
import {Link} from 'react-router-dom'
import featured01 from '../../assets/images/featured-01.jpg'
import featured02 from '../../assets/images/featured-02.jpg'
import featured03 from '../../assets/images/featured-03.jpg'

import game01 from '../../assets/images/game-01.jpg'
import game02 from '../../assets/images/game-02.jpg'
import game03 from '../../assets/images/game-03.jpg'

import {FaStar,FaDownload} from 'react-icons/fa'

import service01 from '../../assets/images/service-01.jpg'
import service02 from '../../assets/images/service-02.jpg'
import service03 from '../../assets/images/service-03.jpg'

import stream01 from '../../assets/images/stream-01.jpg'
import avatar01 from '../../assets/images/avatar-01.jpg'
import stream02 from '../../assets/images/stream-02.jpg'
import avatar02 from '../../assets/images/avatar-02.jpg'
import stream03 from '../../assets/images/stream-03.jpg'
import avatar03 from '../../assets/images/avatar-03.jpg'
import stream04 from '../../assets/images/stream-04.jpg'
import avatar04 from '../../assets/images/avatar-04.jpg'



const BrowseContent = () => {
  return (
    <>
    <div className="container">
    <div className="row">
      <div className="col-lg-12">
        <div className="page-content">

          <div className="row">
            <div className="col-lg-8">
              <div className="featured-games header-text">
                <div className="heading-section">
                  <h4><em>Featured</em> Games</h4>
                </div>
                <div className="owl-features owl-carousel">
                  <div className="item">
                    <div className="thumb">
                      <img src={featured01} alt=""/>
                      <div className="hover-effect">
                        <h6>2.4K Streaming</h6>
                      </div>
                    </div>
                    <h4>CS-GO<br/><span>249K Downloads</span></h4>
                    <ul>
                      <li><i><FaStar/></i> 4.8</li>
                      <li><i><FaDownload/></i> 2.3M</li>
                    </ul>
                  </div>
                  <div className="item">
                    <div className="thumb">
                      <img src={featured02} alt=""/>
                      <div className="hover-effect">
                        <h6>2.4K Streaming</h6>
                      </div>
                    </div>
                    <h4>Gamezer<br/><span>249K Downloads</span></h4>
                    <ul>
                      <li><i><FaStar /></i> 4.8</li>
                      <li><i><FaDownload /></i> 2.3M</li>
                    </ul>
                  </div>
                  <div className="item">
                    <div className="thumb">
                      <img src={featured03} alt=""/>
                      <div className="hover-effect">
                        <h6>2.4K Streaming</h6>
                      </div>
                    </div>
                    <h4>Island Rusty<br/><span>249K Downloads</span></h4>
                    <ul>
                      <li><i><FaStar /></i> 4.8</li>
                      <li><i><FaDownload/></i> 2.3M</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="top-downloaded">
                <div className="heading-section">
                  <h4><em>Top</em> Downloaded</h4>
                </div>
                <ul>
                  <li>
                    <img src={game01} alt="" className="templatemo-item"/>
                    <h4>Fortnite</h4>
                    <h6>Sandbox</h6>
                    <span><i><FaStar/></i> 4.9</span>
                    <span><i><FaDownload/></i> 2.2M</span>
                    <div className="download">
                      <a href="/#"><i><FaDownload/></i></a>
                    </div>
                  </li>
                  <li>
                    <img src={game02} alt="" className="templatemo-item"/>
                    <h4>CS-GO</h4>
                    <h6>Legendary</h6>
                    <span><i><FaStar/></i> 4.9</span>
                    <span><i><FaDownload/></i> 2.2M</span>
                    <div className="download">
                      <a href="/#"><i><FaDownload/></i></a>
                    </div>
                  </li>
                  <li>
                    <img src={game03} alt="" className="templatemo-item"/>
                    <h4>PugG</h4>
                    <h6>Battle Royale</h6>
                    <span><i><FaStar/></i> 4.9</span>
                    <span><i><FaDownload/></i> 2.2M</span>
                    <div className="download">
                      <Link to="/#"><i><FaDownload/></i></Link>
                    </div>
                  </li>
                </ul>
                <div className="text-button">
                  <Link to="/profile">View All Games</Link>
                </div>
              </div>
            </div>
          </div>
          
          <div className="start-stream">
            <div className="col-lg-12">
              <div className="heading-section">
                <h4><em>How To Start Your</em> Live Stream</h4>
              </div>
              <div className="row">
                <div className="col-lg-4">
                  <div className="item">
                    <div className="icon">
                      <img src={service01} alt="" />
                    </div>
                    <h4>Go To Your Profile</h4>
                    <p>Cyborg Gaming is free HTML CSS website template provided by TemplateMo. This is Bootstrap v5.2.0 layout.</p>
                  </div>
                </div>
                <div className="col-lg-4">
                  <div className="item">
                    <div className="icon">
                      <img src={service02} alt="" />
                    </div>
                    <h4>Live Stream Button</h4>
                    <p>If you wish to support us, you can make a <a href="/" target="_blank">small contribution via PayPal</a> to info [at] templatemo.com</p>
                  </div>
                </div>
                <div className="col-lg-4">
                  <div className="item">
                    <div className="icon">
                      <img src={service03} alt="" />
                    </div>
                    <h4>You Are Live</h4>
                    <p>You are not allowed to redistribute this template's downloadable ZIP file on any other template collection website.</p>
                  </div>
                </div>
                <div className="col-lg-12">
                  <div className="main-button">
                    <Link to="/profile">Go To Profile</Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
    
          <div className="live-stream">
            <div className="col-lg-12">
              <div className="heading-section">
                <h4><em>Most Popular</em> Live Stream</h4>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-3 col-sm-6">
                <div className="item">
                  <div className="thumb">
                    <img src={stream01} alt=""/>
                    <div className="hover-effect">
                      <div className="content">
                        <div className="live">
                          <Link to="/#">Live</Link>
                        </div>
                        <ul>
                          <li><Link to="/#"><i className="fa fa-eye"></i> 1.2K</Link></li>
                          <li><Link to="/#"><i className="fa fa-gamepad"></i> CS-GO</Link></li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="down-content">
                    <div className="avatar">
                      <img src={avatar01} alt="" />
                    </div>
                    <span><i className="fa fa-check"></i> KenganC</span>
                    <h4>Just Talking With Fans</h4>
                  </div> 
                </div>
              </div>
              <div className="col-lg-3 col-sm-6">
                <div className="item">
                  <div className="thumb">
                    <img src={stream02} alt=""/>
                    <div className="hover-effect">
                      <div className="content">
                        <div className="live">
                          <a href="/#">Live</a>
                        </div>
                        <ul>
                          <li><a href="/#"><i className="fa fa-eye"></i> 1.2K</a></li>
                          <li><a href="/#"><i className="fa fa-gamepad"></i> CS-GO</a></li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="down-content">
                    <div className="avatar">
                      <img src={avatar02} alt=""/>
                    </div>
                    <span><i className="fa fa-check"></i> LunaMa</span>
                    <h4>CS-GO 36 Hours Live Stream</h4>
                  </div> 
                </div>
              </div>
              <div className="col-lg-3 col-sm-6">
                <div className="item">
                  <div className="thumb">
                    <img src={stream03} alt=""/>
                    <div className="hover-effect">
                      <div className="content">
                        <div className="live">
                          <Link to="/#">Live</Link>
                        </div>
                        <ul>
                          <li><Link to="/#"><i className="fa fa-eye"></i> 1.2K</Link></li>
                          <li><Link to="/#"><i className="fa fa-gamepad"></i> CS-GO</Link></li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="down-content">
                    <div className="avatar">
                      <img src={avatar03} alt="" />
                    </div>
                    <span><i className="fa fa-check"></i> Areluwa</span>
                    <h4>Maybe Nathej Allnight Chillin'</h4>
                  </div> 
                </div>
              </div>
              <div className="col-lg-3 col-sm-6">
                <div className="item">
                  <div className="thumb">
                    <img src={stream04} alt=""/>
                    <div className="hover-effect">
                      <div className="content">
                        <div className="live">
                          <Link to="/#">Live</Link>
                        </div>
                        <ul>
                          <li><Link to="/#"><i className="fa fa-eye"></i> 1.2K</Link></li>
                          <li><Link to="/#"><i className="fa fa-gamepad"></i> CS-GO</Link></li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="down-content">
                    <div className="avatar">
                      <img src={avatar04} alt="" />
                    </div>
                    <span><i className="fa fa-check"></i> GangTm</span>
                    <h4>Live Streaming Till Morning</h4>
                  </div> 
                </div>
              </div>
              <div className="col-lg-12">
                <div className="main-button">
                  <Link to="/streams">Discover All Streams</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
    </>
  )
}

export default BrowseContent