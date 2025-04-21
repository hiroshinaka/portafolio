import React from 'react';
import {VerticalTimeline, VerticalTimelineElement} from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import timelineItems from '../../data/index.json';

export default function Timeline() {
    return(
        <section className="timeline--section" id="Timeline">
            <div className="timeline--container-box">
                <div className="timeline--container">
                    <h2>My Journey</h2>
                    <VerticalTimeline>
                        {timelineItems?.timelineItems?.map((item, index) => (
                            <VerticalTimelineElement
                            className="vertical-timeline-element--work"
                            date={item.date}
                            iconStyle={{background: '#fff', color: '#000'}}
                            icon={<img src={item.icon} alt={item.title} className="timeline-icon-img"/>}
                            key={index}
                            contentArrowStyle={{borderRight: '7px solid  #3498db'}}
                            >
                                <h3 className="vertical-timeline-element-title">{item.title}</h3>
                                <h4 className="vertical-timeline-element-subtitle">{item.location}</h4>
                                <p>{item.details}</p>
                            </VerticalTimelineElement>
                        ))}
                    </VerticalTimeline>
                </div>
            </div>
        </section>
    )
}

<div className="mx-auto">
<h2 className='section--heading'>My Journey</h2>

</div>