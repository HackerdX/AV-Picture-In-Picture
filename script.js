const videoElement = document.getElementById('video');
const button = document.getElementById('button')
// Prompt to select media screen, pass the video element, then play
async function selectMediaStream(){
    try{
        const mediaStream = await navigator.mediaDevices.getDisplayMedia(); /* This will create a prompt to share your screen for different applications, we need only a google tab having a video enabled*/

        console.log(mediaStream);   
        videoElement.srcObject = mediaStream;
        videoElement.onloadedmetadata = () => {
            videoElement.play();
        }

    } catch(error){
        console.log("something went wrong: ", error);
    }
 }

 button.addEventListener('click', async () => {
    // Disable button
    button.disable = true;

    // Start Picture in Picture
    await videoElement.requestPictureInPicture();

    // Enable button
    button.disable = false;
 })

//On Load
selectMediaStream();