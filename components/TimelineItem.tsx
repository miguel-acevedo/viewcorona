import * as React from 'react'
import Popup from "reactjs-popup";

import Modal from 'react-bootstrap/Modal';

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
        {/* 
        <div className="timeline-img-header">
          <h2>Card Title</h2>
        </div>
        */}
          <h2 className="event-title">{data.title}</h2>
          <div className="date">{data.date}</div>
          <p>{data.text}</p>
          {/* <h3>Total Cases: <span className="case_count">{data.cases_count.toLocaleString()}</span></h3> */}


  <Popup trigger={<a className="bnt-more twitter-modal" href="javascript:void(0)">View Tweets</a>} modal>
    {close => (
    <div className="modal-dialog" role="document">
    <div className="modal-content">
      <div className="modal-header">
        <h5 className="modal-title">Tweets from {data.range}</h5>
        <button type="button" onClick={close} className="close" data-dismiss="modal" aria-label="Close">
          <span className="exit-modal" aria-hidden="true">&times;</span>
        </button>
      </div>
      <div className="modal-body">
        <Twitter data={data.twitter}/>
      </div>
      {/*
      <div className="modal-footer">
        <button type="button" className="btn btn-primary">Save changes</button>
        <button type="button" onClick={() => {
            console.log("modal closed ");
            close();
          }} className="btn btn-secondary" data-dismiss="modal">Close</button>
      </div>
        */}
    </div>
  </div>
    )}
  </Popup>

        </div>
        <div className="twitter-card timeline-content js--fadeInRight col-xs-6">
          <div className="tweet-date">Tweets from {data.range}</div>
          <div className="tab-content scroll-box" id="pills-tabContent">
            <Twitter data={data.twitter}/>
          </div>
          {/* <a className="bnt-more" href="javascript:void(0)">More</a> */}
        </div>
      </div>
    </div>
)

export default TimelineItem