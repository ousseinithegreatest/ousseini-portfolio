import React from "react";
import "../styles/Experience.css";
import {
    VerticalTimeline,
    VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

export const Experiences = () => {
    return (
        <div className="experience">
            <h2>My experience</h2>
            <VerticalTimeline lineColor="#00bd95" animate>
                <VerticalTimelineElement
                    className="vertical-timeline-element--education"
                    date="2017 - 2021"
                    contentStyle={{ color: "#00bd95", background: "#171c23" }}
                >
                    <h3 className="vertical-timeline-element-title">Sup De Co, Dakar</h3>
                    <p>Software engineering degree</p>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className="vertical-timeline-element--education"
                    date="2022 - 2023"
                    contentStyle={{ color: "#00bd95", background: "#171c23" }}

                >
                    <h3 className="vertical-timeline-element-title">Sup De Co, Dakar</h3>
                    <p>Master in electronic money and digital certification (in progress)</p>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className="vertical-timeline-element--education"
                    date="2021 (3 month)"
                    contentStyle={{ color: "#00bd95", background: "#171c23" }}
                >
                    <h3 className="vertical-timeline-element-title">
                        Flutter developper - Terinnova
                    </h3>
                    <h4 className="vertical-timeline-element-subtitle">Dakar, Senegal</h4>
                    <p>Creation of a telemedicine application</p>
                </VerticalTimelineElement>
            </VerticalTimeline>
        </div>
    );
};
