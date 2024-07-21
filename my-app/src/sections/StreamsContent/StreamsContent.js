import './StreamsContent.css'
import {FaStar, FaDownload} from 'react-icons/fa'
import featured01 from '../../assets/images/featured-01.jpg'
import featured02 from '../../assets/images/featured-02.jpg'
import featured03 from '../../assets/images/featured-03.jpg'
import avatar01 from '../../assets/images/avatar-01.jpg'
import avatar02 from '../../assets/images/avatar-02.jpg'
import avatar03 from '../../assets/images/avatar-03.jpg'
import avatar04 from '../../assets/images/avatar-04.jpg'
import stream05 from '../../assets/images/stream-05.jpg'
import stream06 from '../../assets/images/stream-06.jpg'
import stream07 from '../../assets/images/stream-07.jpg'
import stream08 from '../../assets/images/stream-08.jpg'





const StreamsContent = () => {
  return (
    <>
    <div class="container">
    <div class="row">
      <div class="col-lg-12">
        <div class="page-content">

          <div class="row">
            <div class="col-lg-8">
              <div class="featured-games header-text">
                <div class="heading-section">
                  <h4><em>Live</em> Streams</h4>
                </div>
                <div class="owl-features owl-carousel">
                  <div class="item">
                    <div class="thumb">
                      <img src={featured01} alt=""/>
                      <div class="hover-effect">
                        <h6>2.4K Streaming</h6>
                      </div>
                    </div>
                    <h4>CS-GO<br/><span>249K Downloads</span></h4>
                    <ul>
                      <li><i><FaStar/></i> 4.8</li>
                      <li><i><FaDownload/></i> 2.3M</li>
                    </ul>
                  </div>
                  <div class="item">
                    <div class="thumb">
                      <img src={featured02} alt=""/>
                      <div class="hover-effect">
                        <h6>2.4K Streaming</h6>
                      </div>
                    </div>
                    <h4>Gamezer<br/><span>249K Downloads</span></h4>
                    <ul>
                      <li><i><FaStar/></i> 4.8</li>
                      <li><i><FaDownload/></i> 2.3M</li>    
                    </ul>
                  </div>
                  <div class="item">
                    <div class="thumb">
                      <img src={featured03} alt=""/>
                      <div class="hover-effect">
                        <h6>2.4K Streaming</h6>
                      </div>
                    </div>
                    <h4>Island Rusty<br/><span>249K Downloads</span></h4>
                    <ul>
                      <li><i><FaStar/></i> 4.8</li>
                      <li><i><FaDownload/></i> 2.3M</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-lg-4">
              <div class="top-streamers">
                <div class="heading-section">
                  <h4><em>Top</em> Streamers</h4>
                </div>
                <ul>
                  <li>
                    <span>01</span>
                    <img src={avatar01} alt="" />
                    <h6><i class="fa fa-check"></i> LahutaM</h6>
                    <div class="main-button">
                      <a href="/#">Follow</a>
                    </div>
                  </li>
                  <li>
                    <span>02</span>
                    <img src={avatar02} alt="" />
                    <h6><i class="fa fa-check"></i> Kengan</h6>
                    <div class="main-button">
                      <a href="/#">Follow</a>
                    </div>
                  </li>
                  <li>
                    <span>03</span>
                    <img src={avatar03} alt="" />
                    <h6><i class="fa fa-check"></i> Areluwa</h6>
                    <div class="main-button">
                      <a href="/#">Follow</a>
                    </div>
                  </li>
                  <li>
                    <span>04</span>
                    <img src={avatar04} alt="" />
                    <h6><i class="fa fa-check"></i> Omeg</h6>
                    <div class="main-button">
                      <a href="/#">Follow</a>
                    </div>
                  </li>
                  <li>
                    <span>05</span>
                    <img src={avatar01} alt="" />
                    <h6><i class="fa fa-check"></i> GangTeam</h6>
                    <div class="main-button">
                      <a href="/#">Follow</a>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
      
          <div class="live-stream">
            <div class="col-lg-12">
              <div class="heading-section">
                <h4><em>Most Popular</em> Live Stream</h4>
              </div>
            </div>
            <div class="row">
              <div class="col-lg-3 col-sm-6">
                <div class="item">
                  <div class="thumb">
                    <img src={stream05} alt=""/>
                    <div class="hover-effect">
                      <div class="content">
                        <div class="live">
                          <a href="/#">Live</a>
                        </div>
                        <ul>
                          <li><a href="/#"><i class="fa fa-eye"></i> 1.2K</a></li>
                          <li><a href="/#"><i class="fa fa-gamepad"></i> CS-GO</a></li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div class="down-content">
                    <div class="avatar">
                      <img src={avatar01} alt=""/>
                    </div>
                    <span><i class="fa fa-check"></i> Kengan Omeg</span>
                    <h4>Just Talking With Fans</h4>
                  </div> 
                </div>
              </div>
              <div class="col-lg-3 col-sm-6">
                <div class="item">
                  <div class="thumb">
                    <img src={stream06} alt=""/>
                    <div class="hover-effect">
                      <div class="content">
                        <div class="live">
                          <a href="/#">Live</a>
                        </div>
                        <ul>
                          <li><a href="/#"><i class="fa fa-eye"></i> 1.2K</a></li>
                          <li><a href="/#"><i class="fa fa-gamepad"></i> CS-GO</a></li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div class="down-content">
                    <div class="avatar">
                      <img src={avatar02} alt=""/>
                    </div>
                    <span><i class="fa fa-check"></i> LahutaMalc</span>
                    <h4>CS-GO 36 Hours Live Stream</h4>
                  </div> 
                </div>
              </div>
              <div class="col-lg-3 col-sm-6">
                <div class="item">
                  <div class="thumb">
                    <img src={stream07} alt=""/>
                    <div class="hover-effect">
                      <div class="content">
                        <div class="live">
                          <a href="/#">Live</a>
                        </div>
                        <ul>
                          <li><a href="/#"><i class="fa fa-eye"></i> 1.2K</a></li>
                          <li><a href="/#"><i class="fa fa-gamepad"></i> CS-GO</a></li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div class="down-content">
                    <div class="avatar">
                      <img src={avatar03} alt=""/>
                    </div>
                    <span><i class="fa fa-check"></i> Areluwa</span>
                    <h4>Maybe Nathej Allnight Chillin'</h4>
                  </div> 
                </div>
              </div>
              <div class="col-lg-3 col-sm-6">
                <div class="item">
                  <div class="thumb">
                    <img src={stream08} alt=""/>
                    <div class="hover-effect">
                      <div class="content">
                        <div class="live">
                          <a href="/#">Live</a>
                        </div>
                        <ul>
                          <li><a href="/#"><i class="fa fa-eye"></i> 1.2K</a></li>
                          <li><a href="/#"><i class="fa fa-gamepad"></i> CS-GO</a></li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div class="down-content">
                    <div class="avatar">
                      <img src={avatar04} alt=""/>
                    </div>
                    <span><i class="fa fa-check"></i> NewGangTeam</span>
                    <h4>Live Streaming Till Morning</h4>
                  </div> 
                </div>
              </div>
              <div class="col-lg-3 col-sm-6">
                <div class="item">
                  <div class="thumb">
                    <img src={stream07} alt=""/>
                    <div class="hover-effect">
                      <div class="content">
                        <div class="live">
                          <a href="/#">Live</a>
                        </div>
                        <ul>
                          <li><a href="/#"><i class="fa fa-eye"></i> 1.2K</a></li>
                          <li><a href="/#"><i class="fa fa-gamepad"></i> CS-GO</a></li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div class="down-content">
                    <div class="avatar">
                      <img src={avatar01} alt=""/>
                    </div>
                    <span><i class="fa fa-check"></i> Kengan Omeg</span>
                    <h4>Just Talking With Fans</h4>
                  </div> 
                </div>
              </div>
              <div class="col-lg-3 col-sm-6">
                <div class="item">
                  <div class="thumb">
                    <img src={stream08} alt=""/>
                    <div class="hover-effect">
                      <div class="content">
                        <div class="live">
                          <a href="/#">Live</a>
                        </div>
                        <ul>
                          <li><a href="/#"><i class="fa fa-eye"></i> 1.2K</a></li>
                          <li><a href="/#"><i class="fa fa-gamepad"></i> CS-GO</a></li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div class="down-content">
                    <div class="avatar">
                      <img src={avatar02} alt="" />
                    </div>
                    <span><i class="fa fa-check"></i> LahutaMalc</span>
                    <h4>CS-GO 36 Hours Live Stream</h4>
                  </div> 
                </div>
              </div>
              <div class="col-lg-3 col-sm-6">
                <div class="item">
                  <div class="thumb">
                    <img src={stream05} alt=""/>
                    <div class="hover-effect">
                      <div class="content">
                        <div class="live">
                          <a href="/#">Live</a>
                        </div>
                        <ul>
                          <li><a href="/#"><i class="fa fa-eye"></i> 1.2K</a></li>
                          <li><a href="/#"><i class="fa fa-gamepad"></i> CS-GO</a></li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div class="down-content">
                    <div class="avatar">
                      <img src={avatar03} alt=""/>
                    </div>
                    <span><i class="fa fa-check"></i> Areluwa</span>
                    <h4>Maybe Nathej Allnight Chillin'</h4>
                  </div> 
                </div>
              </div>
              <div class="col-lg-3 col-sm-6">
                <div class="item">
                  <div class="thumb">
                    <img src={stream06} alt=""/>
                    <div class="hover-effect">
                      <div class="content">
                        <div class="live">
                          <a href="/#">Live</a>
                        </div>
                        <ul>
                          <li><a href="/#"><i class="fa fa-eye"></i> 1.2K</a></li>
                          <li><a href="/#"><i class="fa fa-gamepad"></i> CS-GO</a></li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div class="down-content">
                    <div class="avatar">
                      <img src={avatar04} alt=""/>
                    </div>
                    <span><i class="fa fa-check"></i> NewGangTeam</span>
                    <h4>Live Streaming Till Morning</h4>
                  </div> 
                </div>
              </div>
              <div class="col-lg-12">
                <div class="main-button">
                  <a href="streams.html">Load More Streams</a>
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

export default StreamsContent