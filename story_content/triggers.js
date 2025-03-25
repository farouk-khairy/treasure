function ExecuteScript(strId)
{
  switch (strId)
  {
      case "5dMMc8S8LBM":
        Script1();
        break;
      case "6HJnzqkG5zu":
        Script2();
        break;
      case "5YDVenTRHa6":
        Script3();
        break;
      case "68w7jlYHuSQ":
        Script4();
        break;
      case "5giIJoRZqKK":
        Script5();
        break;
  }
}

window.InitExecuteScripts = function()
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
window.Script1 = function()
{
  const target = object('5xk6O6LeWB2');
const duration = 1250;
const easing = 'ease-out';
const id = '6Al8qgec9TE';
const pulseAmount = 0.03;
player.addForTriggers(
id,
target.animate([
{ scale: '1' }, { scale: `${1 + pulseAmount}` },
{ scale: '1' }, { scale: `${1 + pulseAmount}` },
{ scale: '1' }
],
  { fill: 'forwards', duration, easing }
)
);
}

window.Script2 = function()
{
  const target = object('6BZgyDCqACa');
const duration = 1250;
const easing = 'ease-out';
const id = '5qiQ9OQ4ujx';
const pulseAmount = 0.03;
player.addForTriggers(
id,
target.animate([
{ scale: '1' }, { scale: `${1 + pulseAmount}` },
{ scale: '1' }, { scale: `${1 + pulseAmount}` },
{ scale: '1' }
],
  { fill: 'forwards', duration, easing }
)
);
}

window.Script3 = function()
{
  player.once(() => {
const target = object('6HWPkcDfaJ1');
const duration = 2000;
const easing = 'ease-out';
const id = '6303t8hmbr7';
const shrinkAmount = 0.3;
const delay = 0;
addToTimeline(
target.animate([
{ scale: `${1 - shrinkAmount}` }
],
  { fill: 'forwards', delay, duration, easing }
), id
);
});
}

};
