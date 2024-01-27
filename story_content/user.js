function ExecuteScript(strId)
{
  switch (strId)
  {
      case "5aGKZ85EA7Q":
        Script1();
        break;
      case "5dPbYALoBpD":
        Script2();
        break;
      case "69kH4tWhzvq":
        Script3();
        break;
      case "5mcxjlvWWNZ":
        Script4();
        break;
  }
}

function Script1()
{
  var protractor = GetPlayer().GetVar("protractor");
GetPlayer().SetVar("protractor",!protractor);
}

function Script2()
{
  var ruler = GetPlayer().GetVar("ruler");
GetPlayer().SetVar("ruler",!ruler);
}

function Script3()
{
  var compass = GetPlayer().GetVar("compass");
GetPlayer().SetVar("compass",!compass);
}

function Script4()
{
  var checker = GetPlayer().GetVar("endMusic");
GetPlayer().SetVar("endMusic",!checker);
}

