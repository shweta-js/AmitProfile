import React from 'react';
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { MdWork, MdSchool } from 'react-icons/md';
import './Experience.css';
const Experience = () => {
  return (
    <section id="experience" className="experience-section">
      <h2 className="experience-title">Experience</h2>
      <VerticalTimeline>
        {/* 2023 – Present */}
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: '#A288A6', color: '#1C1D21' }}
          contentArrowStyle={{ borderRight: '7px solid #A288A6' }}
          date="2023 – Present"
          iconStyle={{ background: '#A288A6', color: '#fff' }}
          icon={<MdWork />}
        >
          <h3 className="vertical-timeline-element-title">Associate Engineer</h3>
          <h4 className="vertical-timeline-element-subtitle">Primesoft Solutions</h4>
          <p>
            Developed APIs, debugged Windows utilities, and collaborated in agile teams.
          </p>
        </VerticalTimelineElement>

        {/* 2022 */}
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: '#BB9BB0', color: '#1C1D21' }}
          contentArrowStyle={{ borderRight: '7px solid #BB9BB0' }}
          date="2022"
          iconStyle={{ background: '#BB9BB0', color: '#fff' }}
          icon={<MdWork />}
        >
          <h3 className="vertical-timeline-element-title">Python + AI/ML Intern</h3>
          <h4 className="vertical-timeline-element-subtitle">TECHNOLOGICS</h4>
          <p>
            Built models for Diabetic Retinopathy detection and Twitter sentiment analysis.
          </p>
        </VerticalTimelineElement>

        {/* 2021 */}
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: '#CCBCBC', color: '#1C1D21' }}
          contentArrowStyle={{ borderRight: '7px solid #CCBCBC' }}
          date="2021"
          iconStyle={{ background: '#CCBCBC', color: '#fff' }}
          icon={<MdWork />}
        >
          <h3 className="vertical-timeline-element-title">API Developer Intern</h3>
          <h4 className="vertical-timeline-element-subtitle">Fart Magazine</h4>
          <p>
            Created RESTful APIs for managing digital content and user interaction.
          </p>
        </VerticalTimelineElement>

        {/* <VerticalTimelineElement
          date="2023"
          iconStyle={{ background: '#1C1D21', color: '#fff' }}
          icon={<MdSchool />}
        /> */}
      </VerticalTimeline>
      
    </section>
  );
};

export default Experience;
