import React, { useState } from "react";
import HeroBannner from "./HeroBannner";
import ApplyForm from "./ApplyForm";
import ProductOffer from "./ProductOffer";
import GrowingSection from "./GrowingSection";
import NewFrenchSection from "./NewFrenchSection";
import PrototypeSec from "./PrototypeSec";
import GetStartedSec from "./GetStartedSec";
import MeetFranchies from "./MeetFranchies";
import Research from "./Research";
import WoodSec from "./WoodSec";
import "./Body.css";

export default function Body(props) {
  return (
    <div id="et-main-area">
      <div id="main-content" className="body">
        <div
          id="post-5"
          className="post-5 page type-page status-publish hentry"
        >
          <div className="entry-content">
            <div className="et-l et-l--post">
              <div className="et_builder_inner_content et_pb_gutters3">
                <HeroBannner />
                <ApplyForm />
                <ProductOffer />
                <GrowingSection handleShow={props.handleShow} />
                <NewFrenchSection />
                <PrototypeSec />
                <GetStartedSec handleShow={props.handleShow} />
                <MeetFranchies />
                <Research />
                <WoodSec />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
