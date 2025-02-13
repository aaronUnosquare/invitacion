// configuracion para simplecount
simplyCountdown('#cuenta', {
  year: 2024, // required
  month: 7, // required
  day: 31, // required
  hours: 3, // Default is 0 [0-23] integer
  minutes: 0, // Default is 0 [0-59] integer
  seconds: 0, // Default is 0 [0-59] integer
  words: {
    //words displayed into the countdown
    days: { singular: 'D', plural: 'D' },
    hours: { singular: 'H', plural: 'H' },
    minutes: { singular: 'M', plural: 'M' },
    seconds: { singular: 'S', plural: 'S' },
  },
  plural: false, //use plurals
  inline: false, //set to true to get an inline basic countdown like : 24 days, 4 hours, 2 minutes, 5 seconds
  inlineClass: 'simply-countdown-inline', //inline css span class in case of inline = true
  // in case of inline set to false
  enableUtc: true, //Use UTC or not - default : false
  onEnd: function () {
    return;
  }, //Callback on countdown end, put your own function here
  refresh: 1000, // default refresh every 1s
  sectionClass: 'simply-section', //section css class
  amountClass: 'simply-amount', // amount css class
  wordClass: 'simply-word', // word css class
  zeroPad: false,
  countUp: false,
});

// configuracion del plugin glide
const config = {
  type: 'carousel',
  perView: 1,
  autoplay: 5000,
};

new Glide('.glide', config).mount();

const btnPlayPausa = document.getElementById('play-pausa');
const audio = document.getElementById('miAudio');
audio.currentTime = 29;

btnPlayPausa.addEventListener('click', event => {
  if (audio.paused) {
    audio.play();
  } else {
    audio.pause();
  }
});
