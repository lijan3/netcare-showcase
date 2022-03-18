const boot = () => {
  const audio = new Audio("sound/startup.wav");
  audio.play();
  $('#startup').fadeOut(3000, () => {
    $('#desktop').fadeIn(3000);
  });
};

const currentTime = () => {
  const date = new Date()
  let hours = date.getHours();
  let session = 'AM';
  if(hours == 0){
    hours = 12;
  }
  if(hours > 12){
      hours = hours - 12;
      session = "PM";
  }
  $('#time').text(`${(hours)}:${("0" + date.getMinutes()).slice(-2)} ${session}`)
  setTimeout(currentTime, 30000)
}

$(document).ready(() => {
  // Desktop icons
  document.getElementById('my-computer').addEventListener('dblclick', function (e) {
    alert('My computer')
  });
  document.getElementById('the-internet').addEventListener('dblclick', function (e) {
    alert('The internet')
  });
})