const player1 = {
  name: "scorpion",
  hp: 85,
  img: "http://reactmarathon-api.herokuapp.com/assets/scorpion.gif",
  weapon: ["бита", "катана"],
  attack: function () {
    console.log(this.name + " Fight!!!");
  },
};

const player2 = {
  name: "liukang",
  hp: 60,
  img: "http://reactmarathon-api.herokuapp.com/assets/liukang.gif",
  weapon: ["кулаки", "палец"],
  attack: function () {
    console.log(this.name + " Fight!!!");
  },
};

function createPlayer(className, name, hp) {
  const $player = document.createElement("div");
  $player.classList.add(className);

  const $progressbar = document.createElement("div");
  $progressbar.classList.add("progressbar");
  $player.appendChild($progressbar);

  const $character = document.createElement("div");
  $character.classList.add("character");
  $player.appendChild($character);

  const $life = document.createElement("div");
  $life.classList.add("life");
  $life.style.width = `${hp}%`;
  $progressbar.appendChild($life);

  const $name = document.createElement("div");
  $name.classList.add("name");
  $name.innerText = name;
  $progressbar.appendChild($name);

  const $img = document.createElement("img");
  $img.src = "http://reactmarathon-api.herokuapp.com/assets/subzero.gif";
  $character.appendChild($img);

  const $arenas = document.querySelector(".arenas");
  $arenas.appendChild($player);
}

createPlayer("player1", "SCORPION", 50);

createPlayer("player2", "LIUKANG", 80);
