const music = document.getElementById("loveMusic");
const volume = document.getElementById("volume");
console.log(music, volume);

music.volume = volume.value / 100;

volume.addEventListener("input", function () {
  music.volume = this.value / 100;
});
