const player = document.getElementById("player");
const obstacle = document.getElementById("obstacle");

player.classList.remove("jump");

let getPosition = (coordinate, type) => {
  pos = parseInt(
    window.getComputedStyle(type, null).getPropertyValue(coordinate)
  );
  return pos;
};

setInterval(() => {
  let diff = getPosition("left", obstacle) + getPosition("right", player);
  let playerTop = getPosition("top", player);
  if (diff < 30 && diff > -30 && playerTop >= 380) {
    alert("!! GAME OVER !!");
  }
}, 100);

document.addEventListener("keydown", (e) => {
  if (e.key === "ArrowUp") {
    player.classList.add("jump");
    console.log(getPosition("top", player), getPosition("top", obstacle));
    setTimeout(() => {
      player.classList.remove("jump");
    }, 600);
  } else if (e.key === "ArrowRight") {
    if (getPosition("left", player) < 700)
      player.style.left = getPosition("left", player) + 30 + "px";

    console.log(getPosition("left", obstacle) + getPosition("right", player));
  } else if (e.key === "ArrowLeft") {
    if (getPosition("left", player) > 30)
      player.style.left = getPosition("left", player) - 30 + "px";
    console.log(getPosition("left", obstacle) + getPosition("right", player));
  }
});
