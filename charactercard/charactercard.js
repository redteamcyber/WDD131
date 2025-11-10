class Character {
  constructor(name, charClass, level, health, image) {
    this.name = name;
    this.charClass = charClass;
    this.level = level;
    this.health = health;
    this.image = image;
  }

  attacked() {
    if (this.health > 0) {
      this.health -= 20;
      if (this.health <= 0) {
        this.health = 0;
        alert(`${this.name} has died 💀`);
      }
    }
    this.updateCard();
  }

  levelUp() {
    this.level += 1;
    this.updateCard();
  }

  updateCard() {
    document.getElementById("level").textContent = `Level: ${this.level}`;
    document.getElementById("health").textContent = `Health: ${this.health}`;
  }
}


const snortleblat = new Character("Snortleblat", "Swamp Beast Diplomat", 1, 100, "images/snortleblat.webp");


document.querySelector(".image").src = snortleblat.image;
document.querySelector(".name h2").textContent = snortleblat.name;
document.getElementById("class").textContent = snortleblat.charClass;
snortleblat.updateCard();


const buttons = document.querySelectorAll(".buttons button");
buttons[0].addEventListener("click", () => snortleblat.attacked());
buttons[1].addEventListener("click", () => snortleblat.levelUp());
