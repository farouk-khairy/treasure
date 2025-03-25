window.InitUserScripts = function()
{
var player = GetPlayer();
var object = player.object;
var once = player.once;
var addToTimeline = player.addToTimeline;
var setVar = player.SetVar;
var getVar = player.GetVar;
var update = player.update;
var pointerX = player.pointerX;
var pointerY = player.pointerY;
var showPointer = player.showPointer;
var hidePointer = player.hidePointer;
var slideWidth = player.slideWidth;
var slideHeight = player.slideHeight;
window.Script4 = function()
{
  const ruler1 = object('6rPWiTogfRT');
ruler1.rotation = getVar('degrees');


}

window.Script5 = function()
{
  hidePointer();
const pointer = object('6hrt5FA1q3j');
update(() => {
  pointer.x = pointerX() - pointer.width / 2;
  pointer.y = pointerY() - pointer.height / 2;
});
}

};
