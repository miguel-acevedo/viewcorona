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
          <p>{data.text}</p>
          <h3>Total Cases: <span className="case_count">{data.cases_count}</span></h3>
          <a className="bnt-more" href="javascript:void(0)">View Tweets</a>
        </div>
        <div className="timeline-content js--fadeInRight col-xs-6">
          <div className="date">1 MAY 2016</div>
          <ul className="nav nav-pills mb-3" id="pills-tab" role="tablist">
            <li className="nav-item">
              <a className="nav-link" id="pills-home-tab" data-toggle="pill" href="#pillz" role="tab" aria-controls="pillz" aria-selected="true">News</a>
            </li>
            <li className="nav-item">
              <a className="nav-link active" id="pills-profile-tab" data-toggle="pill" href="#pillz-profile" role="tab" aria-controls="pillz-profile" aria-selected="false">Tweets</a>
            </li>
          </ul>
          <div className="tab-content scroll-box" id="pills-tabContent">
            <div className="tab-pane fade" id="pillz" role="tabpanel" aria-labelledby="pills-home-tab">

            <div className="card flex-md-row mb-4 box-shadow h-md-250">
                <div className="card-body d-flex flex-column align-items-start">
                  <strong className="publisher d-inline-block mb-2 text-primary">World</strong>
                  {/* <h3 className="mb-0">
                    <a className="text-dark" href="#">Featured post</a>
                    </h3> */}
                  <div className="article-date mb-1 text-muted">Nov 12</div>
                  <p className="card-text mb-auto">This is a wider card with supporting text below as a natural lead-in to additional content.</p>
                </div>
                <img className="card-img-right flex-auto d-none d-md-block" data-src="holder.js/200x250?theme=thumb" alt="Thumbnail [200x250]" src="data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22200%22%20height%3D%22250%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20200%20250%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_171048c3e81%20text%20%7B%20fill%3A%23eceeef%3Bfont-weight%3Abold%3Bfont-family%3AArial%2C%20Helvetica%2C%20Open%20Sans%2C%20sans-serif%2C%20monospace%3Bfont-size%3A13pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_171048c3e81%22%3E%3Crect%20width%3D%22200%22%20height%3D%22250%22%20fill%3D%22%2355595c%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%2256.1953125%22%20y%3D%22131%22%3EThumbnail%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E" data-holder-rendered="true" style={{width: "200px", height: "250px"}} />
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
            <div className="tab-pane fade show active" id="pillz-profile" role="tabpanel" aria-labelledby="pills-profile-tab">
              <Twitter data={data.twitter}/>
            </div>
          </div>
          {/* <a className="bnt-more" href="javascript:void(0)">More</a> */}
        </div>
      </div>
    </div>
)

export default TimelineItem