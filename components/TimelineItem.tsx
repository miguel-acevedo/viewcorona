import * as React from 'react'

import { Event } from '../interfaces'
import Twitter from '../components/Twitter'

type Props = {
  data: Event
}

// This item makes up each card in the timeline.
const TimelineItem: React.FunctionComponent<Props> = ({ data }) => (
    <div className="timeline-item">
      <div className="timeline-img"></div>

      <div className="row">
        <div className="timeline-content js--fadeInLeft timeline-left col-xs-6">
        <div className="timeline-img-header">
          <h2>Card Title</h2>
        </div>
          <h2>{data.title}</h2>
          <div className="date">{data.date}</div>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime ipsa ratione omnis alias cupiditate saepe atque totam aperiam sed nulla voluptatem recusandae dolor, nostrum excepturi amet in dolores. Alias, ullam.</p>
          <a className="bnt-more" href="javascript:void(0)">More</a>
        </div>
        <div className="timeline-content js--fadeInRight col-xs-6">
          <div className="date">1 MAY 2016</div>
          <ul className="nav nav-pills mb-3" id="pills-tab" role="tablist">
            <li className="nav-item">
              <a className="nav-link" id="pills-home-tab" data-toggle="pill" href="#pills-home" role="tab" aria-controls="pills-home" aria-selected="true">News</a>
            </li>
            <li className="nav-item">
              <a className="nav-link active" id="pills-profile-tab" data-toggle="pill" href="#pills-profile" role="tab" aria-controls="pills-profile" aria-selected="false">Tweets</a>
            </li>
          </ul>
          <div className="tab-content scroll-box" id="pills-tabContent">
            <div className="tab-pane fade" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab">
            <div className="card">
              <img className="card-img-top" src="..." alt="Card image cap" />
              <div className="card-body">
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              </div>
            </div>
              <div className="card">
    
                  <div className="card-body">
                    <h5 className="card-title">Special title treatment <span>@someuser</span></h5>
                    <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                    
                  </div>
                </div>
              <div className="card">
    
                  <div className="card-body">
                    <h5 className="card-title">Special title treatment <span>@someuser</span></h5>
                    <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                    
                  </div>
                </div>


            </div>
            <div className="tab-pane fade show active" id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab">
              <Twitter data={data.twitter}/>
            </div>
          </div>
          <a className="bnt-more" href="javascript:void(0)">More</a>
        </div>
      </div>
    </div>
)

export default TimelineItem