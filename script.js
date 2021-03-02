const videoElement = document.getElementById('video');
const button = document.getElementById('button');
let checker = document.getElementById('checker');
// Prompt to select media screen, pass the video element, then play
async function selectMediaStream(){
    try{
        const mediaStream = await navigator.mediaDevices.getDisplayMedia(); /* This will create a prompt to share your screen for different applications, we need only a google tab having a video enabled*/
        videoElement.srcObject = mediaStream;
        videoElement.play();
    } catch(error){
        console.log("something went wrong: ", error);
    }
 }

 if('pictureInPictureEnabled' in document){
    button.addEventListener('click', async () => {
        if(document.pictureInPictureElement){
            button.disable = false;
            document.exitPictureInPicture().catch(e => console.log(e))
        } else{
            button.disable = true;
            video.requestPictureInPicture().catch(e => console.log(e))
        }
    })
}

//On Load
selectMediaStream();