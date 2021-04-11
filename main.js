const $arenas = document.querySelector(".arenas");
const $btn = document.querySelector(".button");

const player1 = {
  player: 1,
  name: "scorpion",
  hp: 100,
  img: "http://reactmarathon-api.herokuapp.com/assets/scorpion.gif",
  weapon: ["бита", "катана"],
  attack: function () {
    console.log(this.name + " Fight!!!");
  },
};

const player2 = {
  player: 2,
  name: "liukang",
  hp: 100,
  img: "http://reactmarathon-api.herokuapp.com/assets/liukang.gif",
  weapon: ["кулаки", "палец"],
  attack: function () {
    console.log(this.name + " Fight!!!");
  },
};

function crateElement(tag, className) {
  const $tag = document.createElement(tag);
  if (className) {
    $tag.classList.add(className);
  }

  return $tag;
}

function createPlayer(playerObj) {
  const $player = crateElement("div", "player" + playerObj.player);

  const $progressbar = crateElement("div", "progressbar");
  $player.appendChild($progressbar);

  const $character = crateElement("div", "character");
  $player.appendChild($character);

  const $life = crateElement("div", "life");
  $life.style.width = playerObj.hp + "%";
  $progressbar.appendChild($life);

  const $name = crateElement("div", "name");
  $name.innerText = playerObj.name;
  $progressbar.appendChild($name);

  const $img = crateElement("img");
  $img.src = playerObj.img;
  $character.appendChild($img);

  return $player;
}

function changeHP(player) {
  const rundomNumber = Math.ceil(Math.random() * 20);

  const $playerLife = document.querySelector(
    ".player" + player.player + " .life"
  );
  player.hp -= rundomNumber;

  if (player.hp <= 0) {
    player.hp = 0;
    $btn.disabled = true;
  }

  $playerLife.style.width = player.hp + "%";
  console.log(player.hp);

  if (player.hp <= 0) {
    $arenas.appendChild(playerLose(player.name));
  }
}

function playerLose(name) {
  const $loseTitle = crateElement("div", "loseTitle");
  $loseTitle.innerText = name + " lose";

  return $loseTitle;
}

function playerWins(name) {
  const $winsTitle = crateElement("div", "winsTitle");
  $winsTitle.innerText = name + " wins";

  return $winsTitle;
}

$btn.addEventListener("click", function () {
  changeHP(player1);
  changeHP(player2);
});

$arenas.appendChild(createPlayer(player1));

$arenas.appendChild(createPlayer(player2));
