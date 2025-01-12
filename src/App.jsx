import React from "react";
import "aframe";
import "mind-ar/dist/mindar-image.prod.js";
import "mind-ar/dist/mindar-image-aframe.prod.js";

const App = () => {
  return (
    <div style={{ width: "100vw", height: "100vh" }}>
      <a-scene
        mindar-image="imageTargetSrc: /targets.mind; uiLoading: yes; uiScanning: yes; uiError: yes;"
        color-space="sRGB"
        embedded
        renderer="colorManagement: true, physicallyCorrectLights"
        vr-mode-ui="enabled: false"
        device-orientation-permission-ui="enabled: false"
      >
        <a-assets>
          <img id="overlay" src="/overlay.png" alt="Overlay" />
        </a-assets>

        <a-camera position="0 0 0" look-controls="enabled: false"></a-camera>

        <a-entity mindar-image-target="targetIndex: 0">
          <a-plane
            src="#overlay"
            position="0 0 0"
            height="0.552"
            width="1"
            rotation="0 0 0"
          ></a-plane>
        </a-entity>
      </a-scene>
    </div>
  );
};

export default App;
