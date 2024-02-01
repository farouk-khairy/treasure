function ExecuteScript(strId)
{
  switch (strId)
  {
      case "6SHwpyAbVhR":
        Script1();
        break;
      case "69qTOQlKyWp":
        Script2();
        break;
      case "6CVdxJK7D3K":
        Script3();
        break;
      case "6qvXbUw8Wgq":
        Script4();
        break;
  }
}

window.InitExecuteScripts = function()
{
var player = GetPlayer();
var object = player.object;
var addToTimeline = player.addToTimeline;
var setVar = player.SetVar;
var getVar = player.GetVar;
window.Script1 = function()
{
  var protractor = GetPlayer().GetVar("protractor");
GetPlayer().SetVar("protractor",!protractor);
}

window.Script2 = function()
{
  var ruler = GetPlayer().GetVar("ruler");
GetPlayer().SetVar("ruler",!ruler);
}

window.Script3 = function()
{
  var compass = GetPlayer().GetVar("compass");
GetPlayer().SetVar("compass",!compass);
}

window.Script4 = function()
{
  let playerMusic = GetPlayer().GetVar("endMusic");
GetPlayer().SetVar("endMusic",!playerMusic)
}

};
