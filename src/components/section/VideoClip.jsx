import React from "react";
import { Player, ControlBar, VolumeMenuButton } from "video-react";

function VideoClip() {
    return (

<section className="team-section section-gap">
<div className="container">
  <div className="row justify-content-center">
    <div className="col-xl-5 col-lg-6">
      <div className="section-title text-center mb-50">
        <h2 className="title">
          Check our awsome <span>Videos.</span>
        </h2>
      </div>
    </div>
  </div>
  <div className="team-members team-member-slider row">
    <div className="col">
      <div className="team-member">
        <Player poster="/assets/img/poster/poster1.jpg">
          <source src="https://img10.ropose.com/video/ACCR3Kf/848_3-CompressedOutput_34_Web.org.mp4" />
          <ControlBar>
            <VolumeMenuButton disabled />
          </ControlBar>
        </Player>
        <div className="member-desc">
          <h5 className="name">Romada D. Darblin</h5>
        </div>
      </div>
    </div>
    <div className="col">
      <div className="team-member">
        <Player poster="/assets/img/poster/poster2.jpg">
          <source src="https://img10.ropose.com/video/ACCR3Kf/848_3-CompressedOutput_34_Web.org.mp4" />
          <ControlBar>
            <VolumeMenuButton disabled />
          </ControlBar>
        </Player>
        <div className="member-desc">
          <h5 className="name">Kilixer B. Brownila</h5>
        </div>
      </div>
    </div>
    <div className="col">
      <div className="team-member">
        <Player poster="/assets/img/poster/poster3.jpg">
          <source src="https://img10.ropose.com/video/ACCR3Kf/848_3-CompressedOutput_34_Web.org.mp4" />
          <ControlBar>
            <VolumeMenuButton disabled />
          </ControlBar>
        </Player>
        <div className="member-desc">
          <h5 className="name">Dumble Y. Yankies</h5>
        </div>
      </div>
    </div>
    <div className="col">
      <div className="team-member">
        <Player poster="/assets/img/poster/poster4.jpg">
          <source src="https://img10.ropose.com/video/ACCR3Kf/848_3-CompressedOutput_34_Web.org.mp4" />
          <ControlBar>
            <VolumeMenuButton disabled />
          </ControlBar>
        </Player>
        <div className="member-desc">
          <h5 className="name">Miranda H. Halim</h5>
        </div>
      </div>
    </div>
    <div className="col">
      <div className="team-member">
        <Player poster="/assets/img/poster/poster5.jpg">
          <source src="https://img10.ropose.com/video/ACCR3Kf/848_3-CompressedOutput_34_Web.org.mp4" />
          <ControlBar>
            <VolumeMenuButton disabled />
          </ControlBar>
        </Player>
        <div className="member-desc">
          <h5 className="name">Romada D. Darblin</h5>
        </div>
      </div>
    </div>
    <div className="col">
      <div className="team-member">
        <Player poster="/assets/img/poster/poster6.jpg">
          <source src="https://img10.ropose.com/video/ACCR3Kf/848_3-CompressedOutput_34_Web.org.mp4" />
          <ControlBar>
            <VolumeMenuButton disabled />
          </ControlBar>
        </Player>
        <div className="member-desc">
          <h5 className="name">Kilixer B. Brownila</h5>
        </div>
      </div>
    </div>
  </div>
</div>
</section>

    )}

    export default VideoClip