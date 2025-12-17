gdjs.IntroCode = {};
gdjs.IntroCode.localVariables = [];
gdjs.IntroCode.idToCallbackMap = new Map();
gdjs.IntroCode.GDTextBoxBackgroundObjects1= [];
gdjs.IntroCode.GDTextBoxBackgroundObjects2= [];
gdjs.IntroCode.GDTextBoxBackgroundObjects3= [];
gdjs.IntroCode.GDTextBoxIntroObjects1= [];
gdjs.IntroCode.GDTextBoxIntroObjects2= [];
gdjs.IntroCode.GDTextBoxIntroObjects3= [];
gdjs.IntroCode.GDNextButtonObjects1= [];
gdjs.IntroCode.GDNextButtonObjects2= [];
gdjs.IntroCode.GDNextButtonObjects3= [];
gdjs.IntroCode.GDHands1Objects1= [];
gdjs.IntroCode.GDHands1Objects2= [];
gdjs.IntroCode.GDHands1Objects3= [];
gdjs.IntroCode.GDHandRpointObjects1= [];
gdjs.IntroCode.GDHandRpointObjects2= [];
gdjs.IntroCode.GDHandRpointObjects3= [];
gdjs.IntroCode.GDHandRObjects1= [];
gdjs.IntroCode.GDHandRObjects2= [];
gdjs.IntroCode.GDHandRObjects3= [];
gdjs.IntroCode.GDHandLObjects1= [];
gdjs.IntroCode.GDHandLObjects2= [];
gdjs.IntroCode.GDHandLObjects3= [];


gdjs.IntroCode.mapOfGDgdjs_9546IntroCode_9546GDNextButtonObjects2Objects = Hashtable.newFrom({"NextButton": gdjs.IntroCode.GDNextButtonObjects2});
gdjs.IntroCode.mapOfGDgdjs_9546IntroCode_9546GDNextButtonObjects1Objects = Hashtable.newFrom({"NextButton": gdjs.IntroCode.GDNextButtonObjects1});
gdjs.IntroCode.eventsList0 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("NextButton"), gdjs.IntroCode.GDNextButtonObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.IntroCode.mapOfGDgdjs_9546IntroCode_9546GDNextButtonObjects2Objects, runtimeScene, true, true);
if (isConditionTrue_0) {
gdjs.copyArray(gdjs.IntroCode.GDHandRObjects1, gdjs.IntroCode.GDHandRObjects2);

gdjs.copyArray(runtimeScene.getObjects("HandRpoint"), gdjs.IntroCode.GDHandRpointObjects2);
{for(var i = 0, len = gdjs.IntroCode.GDHandRObjects2.length ;i < len;++i) {
    gdjs.IntroCode.GDHandRObjects2[i].hide(false);
}
}
{for(var i = 0, len = gdjs.IntroCode.GDHandRpointObjects2.length ;i < len;++i) {
    gdjs.IntroCode.GDHandRpointObjects2[i].hide();
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("NextButton"), gdjs.IntroCode.GDNextButtonObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.IntroCode.mapOfGDgdjs_9546IntroCode_9546GDNextButtonObjects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
/* Reuse gdjs.IntroCode.GDHandRObjects1 */
gdjs.copyArray(runtimeScene.getObjects("HandRpoint"), gdjs.IntroCode.GDHandRpointObjects1);
{for(var i = 0, len = gdjs.IntroCode.GDHandRObjects1.length ;i < len;++i) {
    gdjs.IntroCode.GDHandRObjects1[i].hide();
}
}
{for(var i = 0, len = gdjs.IntroCode.GDHandRpointObjects1.length ;i < len;++i) {
    gdjs.IntroCode.GDHandRpointObjects1[i].hide(false);
}
}
{for(var i = 0, len = gdjs.IntroCode.GDHandRpointObjects1.length ;i < len;++i) {
    gdjs.IntroCode.GDHandRpointObjects1[i].setX((gdjs.IntroCode.GDHandRpointObjects1[i].getPointX("")) + (runtimeScene.getScene().getVariables().getFromIndex(2).getAsNumber() - (gdjs.IntroCode.GDHandRpointObjects1[i].getPointX(""))) * runtimeScene.getScene().getVariables().getFromIndex(0).getAsNumber());
}
}
{for(var i = 0, len = gdjs.IntroCode.GDHandRpointObjects1.length ;i < len;++i) {
    gdjs.IntroCode.GDHandRpointObjects1[i].setY((gdjs.IntroCode.GDHandRpointObjects1[i].getPointY("")) + (runtimeScene.getScene().getVariables().getFromIndex(1).getAsNumber() - (gdjs.IntroCode.GDHandRpointObjects1[i].getPointY(""))) * runtimeScene.getScene().getVariables().getFromIndex(0).getAsNumber());
}
}
}

}


};gdjs.IntroCode.mapOfGDgdjs_9546IntroCode_9546GDNextButtonObjects1Objects = Hashtable.newFrom({"NextButton": gdjs.IntroCode.GDNextButtonObjects1});
gdjs.IntroCode.mapOfGDgdjs_9546IntroCode_9546GDNextButtonObjects1Objects = Hashtable.newFrom({"NextButton": gdjs.IntroCode.GDNextButtonObjects1});
gdjs.IntroCode.eventsList1 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("HandR"), gdjs.IntroCode.GDHandRObjects1);
gdjs.copyArray(runtimeScene.getObjects("HandRpoint"), gdjs.IntroCode.GDHandRpointObjects1);
gdjs.copyArray(runtimeScene.getObjects("NextButton"), gdjs.IntroCode.GDNextButtonObjects1);
{for(var i = 0, len = gdjs.IntroCode.GDNextButtonObjects1.length ;i < len;++i) {
    gdjs.IntroCode.GDNextButtonObjects1[i].hide();
}
}
{/* Unknown object - skipped. */}
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "ShowNextButtonTimer");
}
{/* Unknown object - skipped. */}
{runtimeScene.getScene().getVariables().getFromIndex(2).setNumber(gdjs.evtTools.input.getCursorX(runtimeScene, "UI", 0));
}
{runtimeScene.getScene().getVariables().getFromIndex(1).setNumber(gdjs.evtTools.input.getCursorY(runtimeScene, "UI", 0));
}
{for(var i = 0, len = gdjs.IntroCode.GDHandRObjects1.length ;i < len;++i) {
    gdjs.IntroCode.GDHandRObjects1[i].hide(false);
}
}
{for(var i = 0, len = gdjs.IntroCode.GDHandRpointObjects1.length ;i < len;++i) {
    gdjs.IntroCode.GDHandRpointObjects1[i].hide();
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "ShowNextButtonTimer") >= 4;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("NextButton"), gdjs.IntroCode.GDNextButtonObjects1);
{for(var i = 0, len = gdjs.IntroCode.GDNextButtonObjects1.length ;i < len;++i) {
    gdjs.IntroCode.GDNextButtonObjects1[i].hide(false);
}
}
}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("HandR"), gdjs.IntroCode.GDHandRObjects1);
{runtimeScene.getScene().getVariables().getFromIndex(2).setNumber(gdjs.evtTools.input.getCursorX(runtimeScene, "UI", 0));
}
{runtimeScene.getScene().getVariables().getFromIndex(1).setNumber(gdjs.evtTools.input.getCursorY(runtimeScene, "UI", 0));
}
{for(var i = 0, len = gdjs.IntroCode.GDHandRObjects1.length ;i < len;++i) {
    gdjs.IntroCode.GDHandRObjects1[i].setX(runtimeScene.getScene().getVariables().getFromIndex(2).getAsNumber());
}
}
{for(var i = 0, len = gdjs.IntroCode.GDHandRObjects1.length ;i < len;++i) {
    gdjs.IntroCode.GDHandRObjects1[i].setY(runtimeScene.getScene().getVariables().getFromIndex(1).getAsNumber());
}
}

{ //Subevents
gdjs.IntroCode.eventsList0(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("NextButton"), gdjs.IntroCode.GDNextButtonObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.IntroCode.mapOfGDgdjs_9546IntroCode_9546GDNextButtonObjects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(15077796);
}
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("HandRpoint"), gdjs.IntroCode.GDHandRpointObjects1);
/* Reuse gdjs.IntroCode.GDNextButtonObjects1 */
{for(var i = 0, len = gdjs.IntroCode.GDHandRpointObjects1.length ;i < len;++i) {
    gdjs.IntroCode.GDHandRpointObjects1[i].getBehavior("Tween").addObjectPositionYTween2("TapDownHand", (gdjs.IntroCode.GDHandRpointObjects1[i].getPointY("")) + 5, "easeOutQuad", 0.07, false);
}
}
{for(var i = 0, len = gdjs.IntroCode.GDNextButtonObjects1.length ;i < len;++i) {
    gdjs.IntroCode.GDNextButtonObjects1[i].getBehavior("Tween").addObjectScaleTween3("TapDownButton", 0.95, "easeOutQuad", 0.07, false, true);
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("NextButton"), gdjs.IntroCode.GDNextButtonObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.IntroCode.mapOfGDgdjs_9546IntroCode_9546GDNextButtonObjects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(15079548);
}
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("HandRpoint"), gdjs.IntroCode.GDHandRpointObjects1);
/* Reuse gdjs.IntroCode.GDNextButtonObjects1 */
{for(var i = 0, len = gdjs.IntroCode.GDHandRpointObjects1.length ;i < len;++i) {
    gdjs.IntroCode.GDHandRpointObjects1[i].getBehavior("Tween").addObjectPositionYTween2("TapUpHand", (gdjs.IntroCode.GDHandRpointObjects1[i].getPointY("")) - 5, "easeInQuad", 0.07, false);
}
}
{for(var i = 0, len = gdjs.IntroCode.GDNextButtonObjects1.length ;i < len;++i) {
    gdjs.IntroCode.GDNextButtonObjects1[i].getBehavior("Tween").addObjectScaleTween3("TapUpButton", 1, "easeInQuad", 0.07, false, true);
}
}
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Modulo 1", false);
}
}

}


};

gdjs.IntroCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.IntroCode.GDTextBoxBackgroundObjects1.length = 0;
gdjs.IntroCode.GDTextBoxBackgroundObjects2.length = 0;
gdjs.IntroCode.GDTextBoxBackgroundObjects3.length = 0;
gdjs.IntroCode.GDTextBoxIntroObjects1.length = 0;
gdjs.IntroCode.GDTextBoxIntroObjects2.length = 0;
gdjs.IntroCode.GDTextBoxIntroObjects3.length = 0;
gdjs.IntroCode.GDNextButtonObjects1.length = 0;
gdjs.IntroCode.GDNextButtonObjects2.length = 0;
gdjs.IntroCode.GDNextButtonObjects3.length = 0;
gdjs.IntroCode.GDHands1Objects1.length = 0;
gdjs.IntroCode.GDHands1Objects2.length = 0;
gdjs.IntroCode.GDHands1Objects3.length = 0;
gdjs.IntroCode.GDHandRpointObjects1.length = 0;
gdjs.IntroCode.GDHandRpointObjects2.length = 0;
gdjs.IntroCode.GDHandRpointObjects3.length = 0;
gdjs.IntroCode.GDHandRObjects1.length = 0;
gdjs.IntroCode.GDHandRObjects2.length = 0;
gdjs.IntroCode.GDHandRObjects3.length = 0;
gdjs.IntroCode.GDHandLObjects1.length = 0;
gdjs.IntroCode.GDHandLObjects2.length = 0;
gdjs.IntroCode.GDHandLObjects3.length = 0;

gdjs.IntroCode.eventsList1(runtimeScene);
gdjs.IntroCode.GDTextBoxBackgroundObjects1.length = 0;
gdjs.IntroCode.GDTextBoxBackgroundObjects2.length = 0;
gdjs.IntroCode.GDTextBoxBackgroundObjects3.length = 0;
gdjs.IntroCode.GDTextBoxIntroObjects1.length = 0;
gdjs.IntroCode.GDTextBoxIntroObjects2.length = 0;
gdjs.IntroCode.GDTextBoxIntroObjects3.length = 0;
gdjs.IntroCode.GDNextButtonObjects1.length = 0;
gdjs.IntroCode.GDNextButtonObjects2.length = 0;
gdjs.IntroCode.GDNextButtonObjects3.length = 0;
gdjs.IntroCode.GDHands1Objects1.length = 0;
gdjs.IntroCode.GDHands1Objects2.length = 0;
gdjs.IntroCode.GDHands1Objects3.length = 0;
gdjs.IntroCode.GDHandRpointObjects1.length = 0;
gdjs.IntroCode.GDHandRpointObjects2.length = 0;
gdjs.IntroCode.GDHandRpointObjects3.length = 0;
gdjs.IntroCode.GDHandRObjects1.length = 0;
gdjs.IntroCode.GDHandRObjects2.length = 0;
gdjs.IntroCode.GDHandRObjects3.length = 0;
gdjs.IntroCode.GDHandLObjects1.length = 0;
gdjs.IntroCode.GDHandLObjects2.length = 0;
gdjs.IntroCode.GDHandLObjects3.length = 0;


return;

}

gdjs['IntroCode'] = gdjs.IntroCode;
