document.addEventListener("deviceready", onDeviceReady, false);
document.getElementById("takePictureBtn").onclick = takePicture;
document.getElementById("pickPictureBtn").onclick = pickPicture;

var srcType;
var options;

function onDeviceReady() {}

function takePicture() {
  srcType = Camera.PictureSourceType.CAMERA;
  options = setOptions(srcType);
  getImage();
}

function pickPicture() {
  srcType = Camera.PictureSourceType.SAVEDPHOTOALBUM;
  options = setOptions(srcType);
  getImage();
}

function getImage(selection) {
  navigator.camera.getPicture(function cameraSuccess(imageUri) {
    displayImage(imageUri);
  }, function cameraError(error) {
    console.debug("Unable to obtain picture: " + error, "app");
  }, options);
}


function setOptions(srcType) {
    var options = {
        quality: 100,
        destinationType: Camera.DestinationType.FILE_URI,
        // In this app, dynamically set the picture source, Camera or photo gallery
        sourceType: srcType,
        encodingType: Camera.EncodingType.JPEG,
        mediaType: Camera.MediaType.PICTURE,
        correctOrientation: true  //Corrects Android orientation quirks
    }
    return options;
}

function displayImage(imgUri) {
    var imageElement = document.getElementById("displayedImage");
    imageElement.src = imgUri;
}
