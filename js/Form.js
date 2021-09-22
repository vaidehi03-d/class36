class Form {
  constructor() {
    this.input = createInput("").attribute("placeholder", "Enter your name");
    this.playButton = createButton("Play");
    this.titleImg = createImg("./assets/title.png", "game title");
    this.greeting = createElement("h2");
  }
setElementPosition(){
  this.titleImg.position(120,160);
  this.input.position(width/2-110,height/2-80);
  this.playButton.position(width/2-90,height/2-20);
  this.greeting.position(width/2-300,height/2-100);

}

setElementsStyle(){
  this.titleImg.class("gameTitle");
  this.input.class("customInput");
  this.playButton.class("customButton");
  this.greeting.class("greeting");
}

display(){
  this.setElementPosition();
  this.setElementsStyle();
  this.handleMousePressed();
}

handleMousePressed(){
this.playButton.mousePressed(()=>{
  this.input.hide();
  this.playButton.hide();
  var message= `hey ${this.input.value()}
  </br>wait for another player to join...`;
});
}
  hide() {
    this.greeting.hide();
    this.playButton.hide();
    this.input.hide();
  }

}
