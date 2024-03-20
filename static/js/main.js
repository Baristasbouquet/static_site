const mapFrame = document.getElementById('map-frame');
let mapFrameHeight = Math.round((mapFrame.offsetWidth * 0.75));
if (mapFrameHeight < 400) {
    mapFrameHeight = 400
};
mapFrame.height = `${mapFrameHeight}`