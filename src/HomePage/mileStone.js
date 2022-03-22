import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import "./mileStone.css";

const MileStone = () => {
  return (
    <>
      <div className="mile-stone-outer">
        <div className="roadmap-two-heading-outer">
          <h3 className=" mile-stone-heading">MileStones</h3>
        </div>
        <VerticalTimeline>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{
              background: "transparent",
              color: "#fff",
              border: "none",
            }}
            iconStyle={{ background: "#58ACFF", color: "#fff" }}
          >
            <h3 className="vertical-timeline-element-title">MileStone One</h3>
            <p>Lorem Ipsm</p>
            <p>Lorem Ipsm</p>
            <p>
              Lorem Ipsm Lorem IpsmLorem IpsmLorem IpsmLorem IpsmLorem IpsmLorem
              IpsmLorem
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{
              background: "transparent",
              color: "#fff",
              border: "none",
            }}
            iconStyle={{ background: "#58ACFF", color: "#fff" }}
          >
            <h3 className="vertical-timeline-element-title">MileStone Two</h3>
            <p>
              Lorem Ipsm Lorem IpsmLorem IpsmLorem IpsmLorem IpsmLorem IpsmLorem
              IpsmLorem IpsmLorem IpsmLorem IpsmLorem IpsmLorem IpsmLorem Ipsm
            </p>
          </VerticalTimelineElement>
        </VerticalTimeline>
      </div>
    </>
  );
};
export default MileStone;
