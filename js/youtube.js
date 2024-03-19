//IFrame player API https://developers.google.com/youtube/iframe_api_reference?hl=ko 진행사항참조

let tag = document.createElement('script');

tag.src = "https://www.youtube.com/iframe_api";
let firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

let player;
function onYouTubeIframeAPIReady() {
  player = new YT.Player('player', {
    // height: '360',
    // width: '640',
    videoId: '9ekEOfDxiqU',
    playerVars:{       
      autoplay: true,     
      loop: true,      
      playlist:'9ekEOfDxiqU' 
    },
    events: {
      onReady:function (event) {
        event.target.mute();  
      }
    }
  });}