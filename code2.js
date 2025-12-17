gdjs.Modulo_322Code = {};
gdjs.Modulo_322Code.localVariables = [];
gdjs.Modulo_322Code.idToCallbackMap = new Map();
gdjs.Modulo_322Code.GDTextBoxBackgroundObjects1= [];
gdjs.Modulo_322Code.GDTextBoxBackgroundObjects2= [];
gdjs.Modulo_322Code.GDTextBoxBackgroundObjects3= [];
gdjs.Modulo_322Code.GDTextBoxIntroObjects1= [];
gdjs.Modulo_322Code.GDTextBoxIntroObjects2= [];
gdjs.Modulo_322Code.GDTextBoxIntroObjects3= [];
gdjs.Modulo_322Code.GDNextButtonObjects1= [];
gdjs.Modulo_322Code.GDNextButtonObjects2= [];
gdjs.Modulo_322Code.GDNextButtonObjects3= [];
gdjs.Modulo_322Code.GDHands1Objects1= [];
gdjs.Modulo_322Code.GDHands1Objects2= [];
gdjs.Modulo_322Code.GDHands1Objects3= [];
gdjs.Modulo_322Code.GDHandRpointObjects1= [];
gdjs.Modulo_322Code.GDHandRpointObjects2= [];
gdjs.Modulo_322Code.GDHandRpointObjects3= [];
gdjs.Modulo_322Code.GDHandRObjects1= [];
gdjs.Modulo_322Code.GDHandRObjects2= [];
gdjs.Modulo_322Code.GDHandRObjects3= [];
gdjs.Modulo_322Code.GDHandLObjects1= [];
gdjs.Modulo_322Code.GDHandLObjects2= [];
gdjs.Modulo_322Code.GDHandLObjects3= [];
gdjs.Modulo_322Code.GDFastFoodObjects1= [];
gdjs.Modulo_322Code.GDFastFoodObjects2= [];
gdjs.Modulo_322Code.GDFastFoodObjects3= [];
gdjs.Modulo_322Code.GDTableObjects1= [];
gdjs.Modulo_322Code.GDTableObjects2= [];
gdjs.Modulo_322Code.GDTableObjects3= [];
gdjs.Modulo_322Code.GDChairObjects1= [];
gdjs.Modulo_322Code.GDChairObjects2= [];
gdjs.Modulo_322Code.GDChairObjects3= [];
gdjs.Modulo_322Code.GDCigaretteObjects1= [];
gdjs.Modulo_322Code.GDCigaretteObjects2= [];
gdjs.Modulo_322Code.GDCigaretteObjects3= [];
gdjs.Modulo_322Code.GDRedZoneObjects1= [];
gdjs.Modulo_322Code.GDRedZoneObjects2= [];
gdjs.Modulo_322Code.GDRedZoneObjects3= [];
gdjs.Modulo_322Code.GDWaterBottleObjects1= [];
gdjs.Modulo_322Code.GDWaterBottleObjects2= [];
gdjs.Modulo_322Code.GDWaterBottleObjects3= [];
gdjs.Modulo_322Code.GDTextBoxIntro2Objects1= [];
gdjs.Modulo_322Code.GDTextBoxIntro2Objects2= [];
gdjs.Modulo_322Code.GDTextBoxIntro2Objects3= [];
gdjs.Modulo_322Code.GDTextBoxBackground2Objects1= [];
gdjs.Modulo_322Code.GDTextBoxBackground2Objects2= [];
gdjs.Modulo_322Code.GDTextBoxBackground2Objects3= [];
gdjs.Modulo_322Code.GDNewTextObjects1= [];
gdjs.Modulo_322Code.GDNewTextObjects2= [];
gdjs.Modulo_322Code.GDNewTextObjects3= [];
gdjs.Modulo_322Code.GDFruitObjects1= [];
gdjs.Modulo_322Code.GDFruitObjects2= [];
gdjs.Modulo_322Code.GDFruitObjects3= [];
gdjs.Modulo_322Code.GDSuccessFeedbackObjects1= [];
gdjs.Modulo_322Code.GDSuccessFeedbackObjects2= [];
gdjs.Modulo_322Code.GDSuccessFeedbackObjects3= [];
gdjs.Modulo_322Code.GDDebugTextObjects1= [];
gdjs.Modulo_322Code.GDDebugTextObjects2= [];
gdjs.Modulo_322Code.GDDebugTextObjects3= [];


gdjs.Modulo_322Code.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("Chair"), gdjs.Modulo_322Code.GDChairObjects1);
gdjs.copyArray(runtimeScene.getObjects("Cigarette"), gdjs.Modulo_322Code.GDCigaretteObjects1);
gdjs.copyArray(runtimeScene.getObjects("FastFood"), gdjs.Modulo_322Code.GDFastFoodObjects1);
gdjs.copyArray(runtimeScene.getObjects("Fruit"), gdjs.Modulo_322Code.GDFruitObjects1);
gdjs.copyArray(runtimeScene.getObjects("WaterBottle"), gdjs.Modulo_322Code.GDWaterBottleObjects1);
{for(var i = 0, len = gdjs.Modulo_322Code.GDCigaretteObjects1.length ;i < len;++i) {
    gdjs.Modulo_322Code.GDCigaretteObjects1[i].returnVariable(gdjs.Modulo_322Code.GDCigaretteObjects1[i].getVariables().getFromIndex(1)).setNumber((gdjs.Modulo_322Code.GDCigaretteObjects1[i].getPointX("")));
}
}
{for(var i = 0, len = gdjs.Modulo_322Code.GDCigaretteObjects1.length ;i < len;++i) {
    gdjs.Modulo_322Code.GDCigaretteObjects1[i].returnVariable(gdjs.Modulo_322Code.GDCigaretteObjects1[i].getVariables().getFromIndex(0)).setNumber((gdjs.Modulo_322Code.GDCigaretteObjects1[i].getPointY("")));
}
}
{runtimeScene.getScene().getVariables().getFromIndex(12).setNumber((( gdjs.Modulo_322Code.GDCigaretteObjects1.length === 0 ) ? 0 :gdjs.Modulo_322Code.GDCigaretteObjects1[0].getPointX("")));
}
{runtimeScene.getScene().getVariables().getFromIndex(11).setNumber((( gdjs.Modulo_322Code.GDCigaretteObjects1.length === 0 ) ? 0 :gdjs.Modulo_322Code.GDCigaretteObjects1[0].getPointY("")));
}
{runtimeScene.getScene().getVariables().getFromIndex(9).setNumber((( gdjs.Modulo_322Code.GDChairObjects1.length === 0 ) ? 0 :gdjs.Modulo_322Code.GDChairObjects1[0].getPointX("")));
}
{runtimeScene.getScene().getVariables().getFromIndex(8).setNumber((( gdjs.Modulo_322Code.GDChairObjects1.length === 0 ) ? 0 :gdjs.Modulo_322Code.GDChairObjects1[0].getPointY("")));
}
{runtimeScene.getScene().getVariables().getFromIndex(6).setNumber((( gdjs.Modulo_322Code.GDFastFoodObjects1.length === 0 ) ? 0 :gdjs.Modulo_322Code.GDFastFoodObjects1[0].getPointX("")));
}
{runtimeScene.getScene().getVariables().getFromIndex(5).setNumber((( gdjs.Modulo_322Code.GDFastFoodObjects1.length === 0 ) ? 0 :gdjs.Modulo_322Code.GDFastFoodObjects1[0].getPointY("")));
}
{runtimeScene.getScene().getVariables().getFromIndex(4).setNumber((( gdjs.Modulo_322Code.GDWaterBottleObjects1.length === 0 ) ? 0 :gdjs.Modulo_322Code.GDWaterBottleObjects1[0].getPointX("")));
}
{runtimeScene.getScene().getVariables().getFromIndex(3).setNumber((( gdjs.Modulo_322Code.GDWaterBottleObjects1.length === 0 ) ? 0 :gdjs.Modulo_322Code.GDWaterBottleObjects1[0].getPointY("")));
}
{runtimeScene.getScene().getVariables().getFromIndex(2).setNumber((( gdjs.Modulo_322Code.GDFruitObjects1.length === 0 ) ? 0 :gdjs.Modulo_322Code.GDFruitObjects1[0].getPointX("")));
}
{runtimeScene.getScene().getVariables().getFromIndex(1).setNumber((( gdjs.Modulo_322Code.GDFruitObjects1.length === 0 ) ? 0 :gdjs.Modulo_322Code.GDFruitObjects1[0].getPointY("")));
}
}

}


};gdjs.Modulo_322Code.mapOfGDgdjs_9546Modulo_9595322Code_9546GDNextButtonObjects2Objects = Hashtable.newFrom({"NextButton": gdjs.Modulo_322Code.GDNextButtonObjects2});
gdjs.Modulo_322Code.mapOfGDgdjs_9546Modulo_9595322Code_9546GDNextButtonObjects1Objects = Hashtable.newFrom({"NextButton": gdjs.Modulo_322Code.GDNextButtonObjects1});
gdjs.Modulo_322Code.eventsList1 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("NextButton"), gdjs.Modulo_322Code.GDNextButtonObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.Modulo_322Code.mapOfGDgdjs_9546Modulo_9595322Code_9546GDNextButtonObjects2Objects, runtimeScene, true, true);
if (isConditionTrue_0) {
gdjs.copyArray(gdjs.Modulo_322Code.GDHandRObjects1, gdjs.Modulo_322Code.GDHandRObjects2);

gdjs.copyArray(runtimeScene.getObjects("HandRpoint"), gdjs.Modulo_322Code.GDHandRpointObjects2);
{for(var i = 0, len = gdjs.Modulo_322Code.GDHandRObjects2.length ;i < len;++i) {
    gdjs.Modulo_322Code.GDHandRObjects2[i].hide(false);
}
}
{for(var i = 0, len = gdjs.Modulo_322Code.GDHandRpointObjects2.length ;i < len;++i) {
    gdjs.Modulo_322Code.GDHandRpointObjects2[i].hide();
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("NextButton"), gdjs.Modulo_322Code.GDNextButtonObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.Modulo_322Code.mapOfGDgdjs_9546Modulo_9595322Code_9546GDNextButtonObjects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
/* Reuse gdjs.Modulo_322Code.GDHandRObjects1 */
gdjs.copyArray(runtimeScene.getObjects("HandRpoint"), gdjs.Modulo_322Code.GDHandRpointObjects1);
{for(var i = 0, len = gdjs.Modulo_322Code.GDHandRObjects1.length ;i < len;++i) {
    gdjs.Modulo_322Code.GDHandRObjects1[i].hide();
}
}
{for(var i = 0, len = gdjs.Modulo_322Code.GDHandRpointObjects1.length ;i < len;++i) {
    gdjs.Modulo_322Code.GDHandRpointObjects1[i].hide(false);
}
}
{for(var i = 0, len = gdjs.Modulo_322Code.GDHandRpointObjects1.length ;i < len;++i) {
    gdjs.Modulo_322Code.GDHandRpointObjects1[i].setX((gdjs.Modulo_322Code.GDHandRpointObjects1[i].getPointX("")) + (runtimeScene.getScene().getVariables().getFromIndex(16).getAsNumber() - (gdjs.Modulo_322Code.GDHandRpointObjects1[i].getPointX(""))) * runtimeScene.getScene().getVariables().getFromIndex(14).getAsNumber());
}
}
{for(var i = 0, len = gdjs.Modulo_322Code.GDHandRpointObjects1.length ;i < len;++i) {
    gdjs.Modulo_322Code.GDHandRpointObjects1[i].setY((gdjs.Modulo_322Code.GDHandRpointObjects1[i].getPointY("")) + (runtimeScene.getScene().getVariables().getFromIndex(15).getAsNumber() - (gdjs.Modulo_322Code.GDHandRpointObjects1[i].getPointY(""))) * runtimeScene.getScene().getVariables().getFromIndex(14).getAsNumber());
}
}
}

}


};gdjs.Modulo_322Code.mapOfGDgdjs_9546Modulo_9595322Code_9546GDNextButtonObjects1Objects = Hashtable.newFrom({"NextButton": gdjs.Modulo_322Code.GDNextButtonObjects1});
gdjs.Modulo_322Code.mapOfGDgdjs_9546Modulo_9595322Code_9546GDNextButtonObjects1Objects = Hashtable.newFrom({"NextButton": gdjs.Modulo_322Code.GDNextButtonObjects1});
gdjs.Modulo_322Code.mapOfGDgdjs_9546Modulo_9595322Code_9546GDCigaretteObjects2Objects = Hashtable.newFrom({"Cigarette": gdjs.Modulo_322Code.GDCigaretteObjects2});
gdjs.Modulo_322Code.mapOfGDgdjs_9546Modulo_9595322Code_9546GDRedZoneObjects2Objects = Hashtable.newFrom({"RedZone": gdjs.Modulo_322Code.GDRedZoneObjects2});
gdjs.Modulo_322Code.mapOfGDgdjs_9546Modulo_9595322Code_9546GDCigaretteObjects1Objects = Hashtable.newFrom({"Cigarette": gdjs.Modulo_322Code.GDCigaretteObjects1});
gdjs.Modulo_322Code.mapOfGDgdjs_9546Modulo_9595322Code_9546GDRedZoneObjects1Objects = Hashtable.newFrom({"RedZone": gdjs.Modulo_322Code.GDRedZoneObjects1});
gdjs.Modulo_322Code.eventsList2 = function(runtimeScene) {

{

gdjs.copyArray(gdjs.Modulo_322Code.GDCigaretteObjects1, gdjs.Modulo_322Code.GDCigaretteObjects2);

gdjs.copyArray(runtimeScene.getObjects("RedZone"), gdjs.Modulo_322Code.GDRedZoneObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Modulo_322Code.mapOfGDgdjs_9546Modulo_9595322Code_9546GDCigaretteObjects2Objects, gdjs.Modulo_322Code.mapOfGDgdjs_9546Modulo_9595322Code_9546GDRedZoneObjects2Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("SuccessFeedback"), gdjs.Modulo_322Code.GDSuccessFeedbackObjects2);
{runtimeScene.getScene().getVariables().getFromIndex(13).setNumber(1);
}
{for(var i = 0, len = gdjs.Modulo_322Code.GDSuccessFeedbackObjects2.length ;i < len;++i) {
    gdjs.Modulo_322Code.GDSuccessFeedbackObjects2[i].hide(false);
}
}
{for(var i = 0, len = gdjs.Modulo_322Code.GDSuccessFeedbackObjects2.length ;i < len;++i) {
    gdjs.Modulo_322Code.GDSuccessFeedbackObjects2[i].getBehavior("Text").setText("Success!");
}
}
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "FeedbackTimer");
}
}

}


{

/* Reuse gdjs.Modulo_322Code.GDCigaretteObjects1 */
gdjs.copyArray(runtimeScene.getObjects("RedZone"), gdjs.Modulo_322Code.GDRedZoneObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Modulo_322Code.mapOfGDgdjs_9546Modulo_9595322Code_9546GDCigaretteObjects1Objects, gdjs.Modulo_322Code.mapOfGDgdjs_9546Modulo_9595322Code_9546GDRedZoneObjects1Objects, true, runtimeScene, false);
if (isConditionTrue_0) {
/* Reuse gdjs.Modulo_322Code.GDCigaretteObjects1 */
gdjs.copyArray(runtimeScene.getObjects("SuccessFeedback"), gdjs.Modulo_322Code.GDSuccessFeedbackObjects1);
{for(var i = 0, len = gdjs.Modulo_322Code.GDSuccessFeedbackObjects1.length ;i < len;++i) {
    gdjs.Modulo_322Code.GDSuccessFeedbackObjects1[i].hide(false);
}
}
{for(var i = 0, len = gdjs.Modulo_322Code.GDSuccessFeedbackObjects1.length ;i < len;++i) {
    gdjs.Modulo_322Code.GDSuccessFeedbackObjects1[i].getBehavior("Text").setText("Try again!");
}
}
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "FeedbackTimer");
}
{for(var i = 0, len = gdjs.Modulo_322Code.GDCigaretteObjects1.length ;i < len;++i) {
    gdjs.Modulo_322Code.GDCigaretteObjects1[i].getBehavior("Tween").addObjectPositionTween2("ReturnCigarette", runtimeScene.getScene().getVariables().getFromIndex(12).getAsNumber(), runtimeScene.getScene().getVariables().getFromIndex(11).getAsNumber(), "linear", 0.5, false);
}
}
}

}


};gdjs.Modulo_322Code.mapOfGDgdjs_9546Modulo_9595322Code_9546GDChairObjects2Objects = Hashtable.newFrom({"Chair": gdjs.Modulo_322Code.GDChairObjects2});
gdjs.Modulo_322Code.mapOfGDgdjs_9546Modulo_9595322Code_9546GDRedZoneObjects2Objects = Hashtable.newFrom({"RedZone": gdjs.Modulo_322Code.GDRedZoneObjects2});
gdjs.Modulo_322Code.mapOfGDgdjs_9546Modulo_9595322Code_9546GDChairObjects1Objects = Hashtable.newFrom({"Chair": gdjs.Modulo_322Code.GDChairObjects1});
gdjs.Modulo_322Code.mapOfGDgdjs_9546Modulo_9595322Code_9546GDRedZoneObjects1Objects = Hashtable.newFrom({"RedZone": gdjs.Modulo_322Code.GDRedZoneObjects1});
gdjs.Modulo_322Code.eventsList3 = function(runtimeScene) {

{

gdjs.copyArray(gdjs.Modulo_322Code.GDChairObjects1, gdjs.Modulo_322Code.GDChairObjects2);

gdjs.copyArray(runtimeScene.getObjects("RedZone"), gdjs.Modulo_322Code.GDRedZoneObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Modulo_322Code.mapOfGDgdjs_9546Modulo_9595322Code_9546GDChairObjects2Objects, gdjs.Modulo_322Code.mapOfGDgdjs_9546Modulo_9595322Code_9546GDRedZoneObjects2Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("SuccessFeedback"), gdjs.Modulo_322Code.GDSuccessFeedbackObjects2);
{runtimeScene.getScene().getVariables().getFromIndex(10).setNumber(1);
}
{for(var i = 0, len = gdjs.Modulo_322Code.GDSuccessFeedbackObjects2.length ;i < len;++i) {
    gdjs.Modulo_322Code.GDSuccessFeedbackObjects2[i].hide(false);
}
}
{for(var i = 0, len = gdjs.Modulo_322Code.GDSuccessFeedbackObjects2.length ;i < len;++i) {
    gdjs.Modulo_322Code.GDSuccessFeedbackObjects2[i].getBehavior("Text").setText("Success!");
}
}
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "FeedbackTimer");
}
}

}


{

/* Reuse gdjs.Modulo_322Code.GDChairObjects1 */
gdjs.copyArray(runtimeScene.getObjects("RedZone"), gdjs.Modulo_322Code.GDRedZoneObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Modulo_322Code.mapOfGDgdjs_9546Modulo_9595322Code_9546GDChairObjects1Objects, gdjs.Modulo_322Code.mapOfGDgdjs_9546Modulo_9595322Code_9546GDRedZoneObjects1Objects, true, runtimeScene, false);
if (isConditionTrue_0) {
/* Reuse gdjs.Modulo_322Code.GDChairObjects1 */
gdjs.copyArray(runtimeScene.getObjects("SuccessFeedback"), gdjs.Modulo_322Code.GDSuccessFeedbackObjects1);
{for(var i = 0, len = gdjs.Modulo_322Code.GDSuccessFeedbackObjects1.length ;i < len;++i) {
    gdjs.Modulo_322Code.GDSuccessFeedbackObjects1[i].hide(false);
}
}
{for(var i = 0, len = gdjs.Modulo_322Code.GDSuccessFeedbackObjects1.length ;i < len;++i) {
    gdjs.Modulo_322Code.GDSuccessFeedbackObjects1[i].getBehavior("Text").setText("Try again!");
}
}
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "FeedbackTimer");
}
{for(var i = 0, len = gdjs.Modulo_322Code.GDChairObjects1.length ;i < len;++i) {
    gdjs.Modulo_322Code.GDChairObjects1[i].getBehavior("Tween").addObjectPositionTween2("ReturnChair", runtimeScene.getScene().getVariables().getFromIndex(9).getAsNumber(), runtimeScene.getScene().getVariables().getFromIndex(8).getAsNumber(), "linear", 0.5, false);
}
}
}

}


};gdjs.Modulo_322Code.mapOfGDgdjs_9546Modulo_9595322Code_9546GDFastFoodObjects2Objects = Hashtable.newFrom({"FastFood": gdjs.Modulo_322Code.GDFastFoodObjects2});
gdjs.Modulo_322Code.mapOfGDgdjs_9546Modulo_9595322Code_9546GDRedZoneObjects2Objects = Hashtable.newFrom({"RedZone": gdjs.Modulo_322Code.GDRedZoneObjects2});
gdjs.Modulo_322Code.mapOfGDgdjs_9546Modulo_9595322Code_9546GDFastFoodObjects1Objects = Hashtable.newFrom({"FastFood": gdjs.Modulo_322Code.GDFastFoodObjects1});
gdjs.Modulo_322Code.mapOfGDgdjs_9546Modulo_9595322Code_9546GDRedZoneObjects1Objects = Hashtable.newFrom({"RedZone": gdjs.Modulo_322Code.GDRedZoneObjects1});
gdjs.Modulo_322Code.eventsList4 = function(runtimeScene) {

{

gdjs.copyArray(gdjs.Modulo_322Code.GDFastFoodObjects1, gdjs.Modulo_322Code.GDFastFoodObjects2);

gdjs.copyArray(runtimeScene.getObjects("RedZone"), gdjs.Modulo_322Code.GDRedZoneObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Modulo_322Code.mapOfGDgdjs_9546Modulo_9595322Code_9546GDFastFoodObjects2Objects, gdjs.Modulo_322Code.mapOfGDgdjs_9546Modulo_9595322Code_9546GDRedZoneObjects2Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("SuccessFeedback"), gdjs.Modulo_322Code.GDSuccessFeedbackObjects2);
{runtimeScene.getScene().getVariables().getFromIndex(7).setNumber(1);
}
{for(var i = 0, len = gdjs.Modulo_322Code.GDSuccessFeedbackObjects2.length ;i < len;++i) {
    gdjs.Modulo_322Code.GDSuccessFeedbackObjects2[i].hide(false);
}
}
{for(var i = 0, len = gdjs.Modulo_322Code.GDSuccessFeedbackObjects2.length ;i < len;++i) {
    gdjs.Modulo_322Code.GDSuccessFeedbackObjects2[i].getBehavior("Text").setText("Success!");
}
}
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "FeedbackTimer");
}
}

}


{

/* Reuse gdjs.Modulo_322Code.GDFastFoodObjects1 */
gdjs.copyArray(runtimeScene.getObjects("RedZone"), gdjs.Modulo_322Code.GDRedZoneObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Modulo_322Code.mapOfGDgdjs_9546Modulo_9595322Code_9546GDFastFoodObjects1Objects, gdjs.Modulo_322Code.mapOfGDgdjs_9546Modulo_9595322Code_9546GDRedZoneObjects1Objects, true, runtimeScene, false);
if (isConditionTrue_0) {
/* Reuse gdjs.Modulo_322Code.GDFastFoodObjects1 */
gdjs.copyArray(runtimeScene.getObjects("SuccessFeedback"), gdjs.Modulo_322Code.GDSuccessFeedbackObjects1);
{for(var i = 0, len = gdjs.Modulo_322Code.GDSuccessFeedbackObjects1.length ;i < len;++i) {
    gdjs.Modulo_322Code.GDSuccessFeedbackObjects1[i].hide(false);
}
}
{for(var i = 0, len = gdjs.Modulo_322Code.GDSuccessFeedbackObjects1.length ;i < len;++i) {
    gdjs.Modulo_322Code.GDSuccessFeedbackObjects1[i].getBehavior("Text").setText("Try again!");
}
}
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "FeedbackTimer");
}
{for(var i = 0, len = gdjs.Modulo_322Code.GDFastFoodObjects1.length ;i < len;++i) {
    gdjs.Modulo_322Code.GDFastFoodObjects1[i].getBehavior("Tween").addObjectPositionTween2("ReturnFastFood", runtimeScene.getScene().getVariables().getFromIndex(6).getAsNumber(), runtimeScene.getScene().getVariables().getFromIndex(5).getAsNumber(), "linear", 0.5, false);
}
}
}

}


};gdjs.Modulo_322Code.mapOfGDgdjs_9546Modulo_9595322Code_9546GDWaterBottleObjects2Objects = Hashtable.newFrom({"WaterBottle": gdjs.Modulo_322Code.GDWaterBottleObjects2});
gdjs.Modulo_322Code.mapOfGDgdjs_9546Modulo_9595322Code_9546GDRedZoneObjects2Objects = Hashtable.newFrom({"RedZone": gdjs.Modulo_322Code.GDRedZoneObjects2});
gdjs.Modulo_322Code.mapOfGDgdjs_9546Modulo_9595322Code_9546GDWaterBottleObjects1Objects = Hashtable.newFrom({"WaterBottle": gdjs.Modulo_322Code.GDWaterBottleObjects1});
gdjs.Modulo_322Code.mapOfGDgdjs_9546Modulo_9595322Code_9546GDRedZoneObjects1Objects = Hashtable.newFrom({"RedZone": gdjs.Modulo_322Code.GDRedZoneObjects1});
gdjs.Modulo_322Code.eventsList5 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("RedZone"), gdjs.Modulo_322Code.GDRedZoneObjects2);
gdjs.copyArray(gdjs.Modulo_322Code.GDWaterBottleObjects1, gdjs.Modulo_322Code.GDWaterBottleObjects2);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Modulo_322Code.mapOfGDgdjs_9546Modulo_9595322Code_9546GDWaterBottleObjects2Objects, gdjs.Modulo_322Code.mapOfGDgdjs_9546Modulo_9595322Code_9546GDRedZoneObjects2Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("SuccessFeedback"), gdjs.Modulo_322Code.GDSuccessFeedbackObjects2);
/* Reuse gdjs.Modulo_322Code.GDWaterBottleObjects2 */
{for(var i = 0, len = gdjs.Modulo_322Code.GDSuccessFeedbackObjects2.length ;i < len;++i) {
    gdjs.Modulo_322Code.GDSuccessFeedbackObjects2[i].hide(false);
}
}
{for(var i = 0, len = gdjs.Modulo_322Code.GDSuccessFeedbackObjects2.length ;i < len;++i) {
    gdjs.Modulo_322Code.GDSuccessFeedbackObjects2[i].getBehavior("Text").setText("Error!");
}
}
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "FeedbackTimer");
}
{for(var i = 0, len = gdjs.Modulo_322Code.GDWaterBottleObjects2.length ;i < len;++i) {
    gdjs.Modulo_322Code.GDWaterBottleObjects2[i].getBehavior("Tween").addObjectPositionTween2("ReturnWaterBottle", runtimeScene.getScene().getVariables().getFromIndex(4).getAsNumber(), runtimeScene.getScene().getVariables().getFromIndex(3).getAsNumber(), "linear", 0.5, false);
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("RedZone"), gdjs.Modulo_322Code.GDRedZoneObjects1);
/* Reuse gdjs.Modulo_322Code.GDWaterBottleObjects1 */

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Modulo_322Code.mapOfGDgdjs_9546Modulo_9595322Code_9546GDWaterBottleObjects1Objects, gdjs.Modulo_322Code.mapOfGDgdjs_9546Modulo_9595322Code_9546GDRedZoneObjects1Objects, true, runtimeScene, false);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("SuccessFeedback"), gdjs.Modulo_322Code.GDSuccessFeedbackObjects1);
/* Reuse gdjs.Modulo_322Code.GDWaterBottleObjects1 */
{for(var i = 0, len = gdjs.Modulo_322Code.GDSuccessFeedbackObjects1.length ;i < len;++i) {
    gdjs.Modulo_322Code.GDSuccessFeedbackObjects1[i].hide(false);
}
}
{for(var i = 0, len = gdjs.Modulo_322Code.GDSuccessFeedbackObjects1.length ;i < len;++i) {
    gdjs.Modulo_322Code.GDSuccessFeedbackObjects1[i].getBehavior("Text").setText("Try again!");
}
}
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "FeedbackTimer");
}
{for(var i = 0, len = gdjs.Modulo_322Code.GDWaterBottleObjects1.length ;i < len;++i) {
    gdjs.Modulo_322Code.GDWaterBottleObjects1[i].getBehavior("Tween").addObjectPositionTween2("ReturnWaterBottle", runtimeScene.getScene().getVariables().getFromIndex(4).getAsNumber(), runtimeScene.getScene().getVariables().getFromIndex(3).getAsNumber(), "linear", 0.5, false);
}
}
}

}


};gdjs.Modulo_322Code.mapOfGDgdjs_9546Modulo_9595322Code_9546GDWaterBottleObjects2Objects = Hashtable.newFrom({"WaterBottle": gdjs.Modulo_322Code.GDWaterBottleObjects2});
gdjs.Modulo_322Code.mapOfGDgdjs_9546Modulo_9595322Code_9546GDRedZoneObjects2Objects = Hashtable.newFrom({"RedZone": gdjs.Modulo_322Code.GDRedZoneObjects2});
gdjs.Modulo_322Code.mapOfGDgdjs_9546Modulo_9595322Code_9546GDWaterBottleObjects1Objects = Hashtable.newFrom({"WaterBottle": gdjs.Modulo_322Code.GDWaterBottleObjects1});
gdjs.Modulo_322Code.mapOfGDgdjs_9546Modulo_9595322Code_9546GDRedZoneObjects1Objects = Hashtable.newFrom({"RedZone": gdjs.Modulo_322Code.GDRedZoneObjects1});
gdjs.Modulo_322Code.eventsList6 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("RedZone"), gdjs.Modulo_322Code.GDRedZoneObjects2);
gdjs.copyArray(gdjs.Modulo_322Code.GDWaterBottleObjects1, gdjs.Modulo_322Code.GDWaterBottleObjects2);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Modulo_322Code.mapOfGDgdjs_9546Modulo_9595322Code_9546GDWaterBottleObjects2Objects, gdjs.Modulo_322Code.mapOfGDgdjs_9546Modulo_9595322Code_9546GDRedZoneObjects2Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("SuccessFeedback"), gdjs.Modulo_322Code.GDSuccessFeedbackObjects2);
/* Reuse gdjs.Modulo_322Code.GDWaterBottleObjects2 */
{for(var i = 0, len = gdjs.Modulo_322Code.GDSuccessFeedbackObjects2.length ;i < len;++i) {
    gdjs.Modulo_322Code.GDSuccessFeedbackObjects2[i].hide(false);
}
}
{for(var i = 0, len = gdjs.Modulo_322Code.GDSuccessFeedbackObjects2.length ;i < len;++i) {
    gdjs.Modulo_322Code.GDSuccessFeedbackObjects2[i].getBehavior("Text").setText("Try again!");
}
}
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "FeedbackTimer");
}
{for(var i = 0, len = gdjs.Modulo_322Code.GDWaterBottleObjects2.length ;i < len;++i) {
    gdjs.Modulo_322Code.GDWaterBottleObjects2[i].getBehavior("Tween").addObjectPositionTween2("ReturnWaterBottle", runtimeScene.getScene().getVariables().getFromIndex(4).getAsNumber(), runtimeScene.getScene().getVariables().getFromIndex(3).getAsNumber(), "linear", 0.5, false);
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("RedZone"), gdjs.Modulo_322Code.GDRedZoneObjects1);
/* Reuse gdjs.Modulo_322Code.GDWaterBottleObjects1 */

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Modulo_322Code.mapOfGDgdjs_9546Modulo_9595322Code_9546GDWaterBottleObjects1Objects, gdjs.Modulo_322Code.mapOfGDgdjs_9546Modulo_9595322Code_9546GDRedZoneObjects1Objects, true, runtimeScene, false);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("SuccessFeedback"), gdjs.Modulo_322Code.GDSuccessFeedbackObjects1);
/* Reuse gdjs.Modulo_322Code.GDWaterBottleObjects1 */
{for(var i = 0, len = gdjs.Modulo_322Code.GDSuccessFeedbackObjects1.length ;i < len;++i) {
    gdjs.Modulo_322Code.GDSuccessFeedbackObjects1[i].hide(false);
}
}
{for(var i = 0, len = gdjs.Modulo_322Code.GDSuccessFeedbackObjects1.length ;i < len;++i) {
    gdjs.Modulo_322Code.GDSuccessFeedbackObjects1[i].getBehavior("Text").setText("Try again!");
}
}
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "FeedbackTimer");
}
{for(var i = 0, len = gdjs.Modulo_322Code.GDWaterBottleObjects1.length ;i < len;++i) {
    gdjs.Modulo_322Code.GDWaterBottleObjects1[i].getBehavior("Tween").addObjectPositionTween2("ReturnWaterBottle", runtimeScene.getScene().getVariables().getFromIndex(4).getAsNumber(), runtimeScene.getScene().getVariables().getFromIndex(3).getAsNumber(), "linear", 0.5, false);
}
}
}

}


};gdjs.Modulo_322Code.mapOfGDgdjs_9546Modulo_9595322Code_9546GDFruitObjects2Objects = Hashtable.newFrom({"Fruit": gdjs.Modulo_322Code.GDFruitObjects2});
gdjs.Modulo_322Code.mapOfGDgdjs_9546Modulo_9595322Code_9546GDRedZoneObjects2Objects = Hashtable.newFrom({"RedZone": gdjs.Modulo_322Code.GDRedZoneObjects2});
gdjs.Modulo_322Code.mapOfGDgdjs_9546Modulo_9595322Code_9546GDFruitObjects1Objects = Hashtable.newFrom({"Fruit": gdjs.Modulo_322Code.GDFruitObjects1});
gdjs.Modulo_322Code.mapOfGDgdjs_9546Modulo_9595322Code_9546GDRedZoneObjects1Objects = Hashtable.newFrom({"RedZone": gdjs.Modulo_322Code.GDRedZoneObjects1});
gdjs.Modulo_322Code.eventsList7 = function(runtimeScene) {

{

gdjs.copyArray(gdjs.Modulo_322Code.GDFruitObjects1, gdjs.Modulo_322Code.GDFruitObjects2);

gdjs.copyArray(runtimeScene.getObjects("RedZone"), gdjs.Modulo_322Code.GDRedZoneObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Modulo_322Code.mapOfGDgdjs_9546Modulo_9595322Code_9546GDFruitObjects2Objects, gdjs.Modulo_322Code.mapOfGDgdjs_9546Modulo_9595322Code_9546GDRedZoneObjects2Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
/* Reuse gdjs.Modulo_322Code.GDFruitObjects2 */
gdjs.copyArray(runtimeScene.getObjects("SuccessFeedback"), gdjs.Modulo_322Code.GDSuccessFeedbackObjects2);
{for(var i = 0, len = gdjs.Modulo_322Code.GDSuccessFeedbackObjects2.length ;i < len;++i) {
    gdjs.Modulo_322Code.GDSuccessFeedbackObjects2[i].hide(false);
}
}
{for(var i = 0, len = gdjs.Modulo_322Code.GDSuccessFeedbackObjects2.length ;i < len;++i) {
    gdjs.Modulo_322Code.GDSuccessFeedbackObjects2[i].getBehavior("Text").setText("Try again!");
}
}
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "FeedbackTimer");
}
{for(var i = 0, len = gdjs.Modulo_322Code.GDFruitObjects2.length ;i < len;++i) {
    gdjs.Modulo_322Code.GDFruitObjects2[i].getBehavior("Tween").addObjectPositionTween2("ReturnFruit", runtimeScene.getScene().getVariables().getFromIndex(2).getAsNumber(), runtimeScene.getScene().getVariables().getFromIndex(1).getAsNumber(), "linear", 0.5, false);
}
}
}

}


{

/* Reuse gdjs.Modulo_322Code.GDFruitObjects1 */
gdjs.copyArray(runtimeScene.getObjects("RedZone"), gdjs.Modulo_322Code.GDRedZoneObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Modulo_322Code.mapOfGDgdjs_9546Modulo_9595322Code_9546GDFruitObjects1Objects, gdjs.Modulo_322Code.mapOfGDgdjs_9546Modulo_9595322Code_9546GDRedZoneObjects1Objects, true, runtimeScene, false);
if (isConditionTrue_0) {
/* Reuse gdjs.Modulo_322Code.GDFruitObjects1 */
gdjs.copyArray(runtimeScene.getObjects("SuccessFeedback"), gdjs.Modulo_322Code.GDSuccessFeedbackObjects1);
{for(var i = 0, len = gdjs.Modulo_322Code.GDSuccessFeedbackObjects1.length ;i < len;++i) {
    gdjs.Modulo_322Code.GDSuccessFeedbackObjects1[i].hide(false);
}
}
{for(var i = 0, len = gdjs.Modulo_322Code.GDSuccessFeedbackObjects1.length ;i < len;++i) {
    gdjs.Modulo_322Code.GDSuccessFeedbackObjects1[i].getBehavior("Text").setText("Try again!");
}
}
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "FeedbackTimer");
}
{for(var i = 0, len = gdjs.Modulo_322Code.GDFruitObjects1.length ;i < len;++i) {
    gdjs.Modulo_322Code.GDFruitObjects1[i].getBehavior("Tween").addObjectPositionTween2("ReturnFruit", runtimeScene.getScene().getVariables().getFromIndex(2).getAsNumber(), runtimeScene.getScene().getVariables().getFromIndex(1).getAsNumber(), "linear", 0.5, false);
}
}
}

}


};gdjs.Modulo_322Code.mapOfGDgdjs_9546Modulo_9595322Code_9546GDWaterBottleObjects1Objects = Hashtable.newFrom({"WaterBottle": gdjs.Modulo_322Code.GDWaterBottleObjects1});
gdjs.Modulo_322Code.mapOfGDgdjs_9546Modulo_9595322Code_9546GDRedZoneObjects1Objects = Hashtable.newFrom({"RedZone": gdjs.Modulo_322Code.GDRedZoneObjects1});
gdjs.Modulo_322Code.mapOfGDgdjs_9546Modulo_9595322Code_9546GDFruitObjects1Objects = Hashtable.newFrom({"Fruit": gdjs.Modulo_322Code.GDFruitObjects1});
gdjs.Modulo_322Code.mapOfGDgdjs_9546Modulo_9595322Code_9546GDRedZoneObjects1Objects = Hashtable.newFrom({"RedZone": gdjs.Modulo_322Code.GDRedZoneObjects1});
gdjs.Modulo_322Code.mapOfGDgdjs_9546Modulo_9595322Code_9546GDCigaretteObjects1Objects = Hashtable.newFrom({"Cigarette": gdjs.Modulo_322Code.GDCigaretteObjects1});
gdjs.Modulo_322Code.mapOfGDgdjs_9546Modulo_9595322Code_9546GDRedZoneObjects1Objects = Hashtable.newFrom({"RedZone": gdjs.Modulo_322Code.GDRedZoneObjects1});
gdjs.Modulo_322Code.mapOfGDgdjs_9546Modulo_9595322Code_9546GDFastFoodObjects1Objects = Hashtable.newFrom({"FastFood": gdjs.Modulo_322Code.GDFastFoodObjects1});
gdjs.Modulo_322Code.mapOfGDgdjs_9546Modulo_9595322Code_9546GDRedZoneObjects1Objects = Hashtable.newFrom({"RedZone": gdjs.Modulo_322Code.GDRedZoneObjects1});
gdjs.Modulo_322Code.mapOfGDgdjs_9546Modulo_9595322Code_9546GDChairObjects1Objects = Hashtable.newFrom({"Chair": gdjs.Modulo_322Code.GDChairObjects1});
gdjs.Modulo_322Code.mapOfGDgdjs_9546Modulo_9595322Code_9546GDRedZoneObjects1Objects = Hashtable.newFrom({"RedZone": gdjs.Modulo_322Code.GDRedZoneObjects1});
gdjs.Modulo_322Code.mapOfGDgdjs_9546Modulo_9595322Code_9546GDNextButtonObjects1Objects = Hashtable.newFrom({"NextButton": gdjs.Modulo_322Code.GDNextButtonObjects1});
gdjs.Modulo_322Code.eventsList8 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("HandR"), gdjs.Modulo_322Code.GDHandRObjects1);
gdjs.copyArray(runtimeScene.getObjects("HandRpoint"), gdjs.Modulo_322Code.GDHandRpointObjects1);
gdjs.copyArray(runtimeScene.getObjects("NextButton"), gdjs.Modulo_322Code.GDNextButtonObjects1);
gdjs.copyArray(runtimeScene.getObjects("SuccessFeedback"), gdjs.Modulo_322Code.GDSuccessFeedbackObjects1);
gdjs.copyArray(runtimeScene.getObjects("TextBoxBackground2"), gdjs.Modulo_322Code.GDTextBoxBackground2Objects1);
gdjs.copyArray(runtimeScene.getObjects("TextBoxIntro"), gdjs.Modulo_322Code.GDTextBoxIntroObjects1);
gdjs.copyArray(runtimeScene.getObjects("TextBoxIntro2"), gdjs.Modulo_322Code.GDTextBoxIntro2Objects1);
{for(var i = 0, len = gdjs.Modulo_322Code.GDNextButtonObjects1.length ;i < len;++i) {
    gdjs.Modulo_322Code.GDNextButtonObjects1[i].hide();
}
}
{/* Unknown object - skipped. */}
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "ShowNextButtonTimer");
}
{/* Unknown object - skipped. */}
{runtimeScene.getScene().getVariables().getFromIndex(16).setNumber(gdjs.evtTools.input.getCursorX(runtimeScene, "UI", 0));
}
{runtimeScene.getScene().getVariables().getFromIndex(15).setNumber(gdjs.evtTools.input.getCursorY(runtimeScene, "UI", 0));
}
{for(var i = 0, len = gdjs.Modulo_322Code.GDHandRObjects1.length ;i < len;++i) {
    gdjs.Modulo_322Code.GDHandRObjects1[i].hide(false);
}
}
{for(var i = 0, len = gdjs.Modulo_322Code.GDHandRpointObjects1.length ;i < len;++i) {
    gdjs.Modulo_322Code.GDHandRpointObjects1[i].hide();
}
}
{for(var i = 0, len = gdjs.Modulo_322Code.GDTextBoxIntro2Objects1.length ;i < len;++i) {
    gdjs.Modulo_322Code.GDTextBoxIntro2Objects1[i].hide();
}
}
{for(var i = 0, len = gdjs.Modulo_322Code.GDTextBoxIntroObjects1.length ;i < len;++i) {
    gdjs.Modulo_322Code.GDTextBoxIntroObjects1[i].hide(false);
}
}
{for(var i = 0, len = gdjs.Modulo_322Code.GDSuccessFeedbackObjects1.length ;i < len;++i) {
    gdjs.Modulo_322Code.GDSuccessFeedbackObjects1[i].hide();
}
}
{for(var i = 0, len = gdjs.Modulo_322Code.GDTextBoxBackground2Objects1.length ;i < len;++i) {
    gdjs.Modulo_322Code.GDTextBoxBackground2Objects1[i].hide();
}
}
{runtimeScene.getScene().getVariables().getFromIndex(0).setNumber(0);
}

{ //Subevents
gdjs.Modulo_322Code.eventsList0(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("HandR"), gdjs.Modulo_322Code.GDHandRObjects1);
{runtimeScene.getScene().getVariables().getFromIndex(16).setNumber(gdjs.evtTools.input.getCursorX(runtimeScene, "UI", 0));
}
{runtimeScene.getScene().getVariables().getFromIndex(15).setNumber(gdjs.evtTools.input.getCursorY(runtimeScene, "UI", 0));
}
{for(var i = 0, len = gdjs.Modulo_322Code.GDHandRObjects1.length ;i < len;++i) {
    gdjs.Modulo_322Code.GDHandRObjects1[i].setX(gdjs.evtTools.input.getCursorX(runtimeScene, "UI", 0));
}
}
{for(var i = 0, len = gdjs.Modulo_322Code.GDHandRObjects1.length ;i < len;++i) {
    gdjs.Modulo_322Code.GDHandRObjects1[i].setY(gdjs.evtTools.input.getCursorY(runtimeScene, "UI", 0));
}
}

{ //Subevents
gdjs.Modulo_322Code.eventsList1(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("NextButton"), gdjs.Modulo_322Code.GDNextButtonObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.Modulo_322Code.mapOfGDgdjs_9546Modulo_9595322Code_9546GDNextButtonObjects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(15185060);
}
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("HandRpoint"), gdjs.Modulo_322Code.GDHandRpointObjects1);
/* Reuse gdjs.Modulo_322Code.GDNextButtonObjects1 */
{for(var i = 0, len = gdjs.Modulo_322Code.GDHandRpointObjects1.length ;i < len;++i) {
    gdjs.Modulo_322Code.GDHandRpointObjects1[i].getBehavior("Tween").addObjectPositionYTween2("TapDownHand", (gdjs.Modulo_322Code.GDHandRpointObjects1[i].getPointY("")) + 5, "easeOutQuad", 0.07, false);
}
}
{for(var i = 0, len = gdjs.Modulo_322Code.GDNextButtonObjects1.length ;i < len;++i) {
    gdjs.Modulo_322Code.GDNextButtonObjects1[i].getBehavior("Tween").addObjectScaleTween3("TapDownButton", 0.95, "easeOutQuad", 0.07, false, true);
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("NextButton"), gdjs.Modulo_322Code.GDNextButtonObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.Modulo_322Code.mapOfGDgdjs_9546Modulo_9595322Code_9546GDNextButtonObjects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(15186700);
}
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("HandRpoint"), gdjs.Modulo_322Code.GDHandRpointObjects1);
/* Reuse gdjs.Modulo_322Code.GDNextButtonObjects1 */
{for(var i = 0, len = gdjs.Modulo_322Code.GDHandRpointObjects1.length ;i < len;++i) {
    gdjs.Modulo_322Code.GDHandRpointObjects1[i].getBehavior("Tween").addObjectPositionYTween2("TapUpHand", (gdjs.Modulo_322Code.GDHandRpointObjects1[i].getPointY("")) - 5, "easeInQuad", 0.07, false);
}
}
{for(var i = 0, len = gdjs.Modulo_322Code.GDNextButtonObjects1.length ;i < len;++i) {
    gdjs.Modulo_322Code.GDNextButtonObjects1[i].getBehavior("Tween").addObjectScaleTween3("TapUpButton", 1, "easeInQuad", 0.07, false, true);
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Cigarette"), gdjs.Modulo_322Code.GDCigaretteObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Modulo_322Code.GDCigaretteObjects1.length;i<l;++i) {
    if ( gdjs.Modulo_322Code.GDCigaretteObjects1[i].getBehavior("Draggable").isDragged() ) {
        isConditionTrue_0 = true;
        gdjs.Modulo_322Code.GDCigaretteObjects1[k] = gdjs.Modulo_322Code.GDCigaretteObjects1[i];
        ++k;
    }
}
gdjs.Modulo_322Code.GDCigaretteObjects1.length = k;
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.Modulo_322Code.eventsList2(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "FeedbackTimer") > 1;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("SuccessFeedback"), gdjs.Modulo_322Code.GDSuccessFeedbackObjects1);
{for(var i = 0, len = gdjs.Modulo_322Code.GDSuccessFeedbackObjects1.length ;i < len;++i) {
    gdjs.Modulo_322Code.GDSuccessFeedbackObjects1[i].hide();
}
}
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "FeedbackTimer");
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Chair"), gdjs.Modulo_322Code.GDChairObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Modulo_322Code.GDChairObjects1.length;i<l;++i) {
    if ( gdjs.Modulo_322Code.GDChairObjects1[i].getBehavior("Draggable").isDragged() ) {
        isConditionTrue_0 = true;
        gdjs.Modulo_322Code.GDChairObjects1[k] = gdjs.Modulo_322Code.GDChairObjects1[i];
        ++k;
    }
}
gdjs.Modulo_322Code.GDChairObjects1.length = k;
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.Modulo_322Code.eventsList3(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("FastFood"), gdjs.Modulo_322Code.GDFastFoodObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Modulo_322Code.GDFastFoodObjects1.length;i<l;++i) {
    if ( gdjs.Modulo_322Code.GDFastFoodObjects1[i].getBehavior("Draggable").isDragged() ) {
        isConditionTrue_0 = true;
        gdjs.Modulo_322Code.GDFastFoodObjects1[k] = gdjs.Modulo_322Code.GDFastFoodObjects1[i];
        ++k;
    }
}
gdjs.Modulo_322Code.GDFastFoodObjects1.length = k;
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.Modulo_322Code.eventsList4(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("WaterBottle"), gdjs.Modulo_322Code.GDWaterBottleObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Modulo_322Code.GDWaterBottleObjects1.length;i<l;++i) {
    if ( gdjs.Modulo_322Code.GDWaterBottleObjects1[i].getBehavior("Draggable").isDragged() ) {
        isConditionTrue_0 = true;
        gdjs.Modulo_322Code.GDWaterBottleObjects1[k] = gdjs.Modulo_322Code.GDWaterBottleObjects1[i];
        ++k;
    }
}
gdjs.Modulo_322Code.GDWaterBottleObjects1.length = k;
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.Modulo_322Code.eventsList5(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("WaterBottle"), gdjs.Modulo_322Code.GDWaterBottleObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Modulo_322Code.GDWaterBottleObjects1.length;i<l;++i) {
    if ( gdjs.Modulo_322Code.GDWaterBottleObjects1[i].getBehavior("Draggable").isDragged() ) {
        isConditionTrue_0 = true;
        gdjs.Modulo_322Code.GDWaterBottleObjects1[k] = gdjs.Modulo_322Code.GDWaterBottleObjects1[i];
        ++k;
    }
}
gdjs.Modulo_322Code.GDWaterBottleObjects1.length = k;
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.Modulo_322Code.eventsList6(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Fruit"), gdjs.Modulo_322Code.GDFruitObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Modulo_322Code.GDFruitObjects1.length;i<l;++i) {
    if ( gdjs.Modulo_322Code.GDFruitObjects1[i].getBehavior("Draggable").isDragged() ) {
        isConditionTrue_0 = true;
        gdjs.Modulo_322Code.GDFruitObjects1[k] = gdjs.Modulo_322Code.GDFruitObjects1[i];
        ++k;
    }
}
gdjs.Modulo_322Code.GDFruitObjects1.length = k;
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.Modulo_322Code.eventsList7(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("RedZone"), gdjs.Modulo_322Code.GDRedZoneObjects1);
gdjs.copyArray(runtimeScene.getObjects("WaterBottle"), gdjs.Modulo_322Code.GDWaterBottleObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Modulo_322Code.mapOfGDgdjs_9546Modulo_9595322Code_9546GDWaterBottleObjects1Objects, gdjs.Modulo_322Code.mapOfGDgdjs_9546Modulo_9595322Code_9546GDRedZoneObjects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Modulo_322Code.GDWaterBottleObjects1.length;i<l;++i) {
    if ( gdjs.Modulo_322Code.GDWaterBottleObjects1[i].getBehavior("Draggable").isDragged() ) {
        isConditionTrue_0 = true;
        gdjs.Modulo_322Code.GDWaterBottleObjects1[k] = gdjs.Modulo_322Code.GDWaterBottleObjects1[i];
        ++k;
    }
}
gdjs.Modulo_322Code.GDWaterBottleObjects1.length = k;
}
if (isConditionTrue_0) {
/* Reuse gdjs.Modulo_322Code.GDWaterBottleObjects1 */
{for(var i = 0, len = gdjs.Modulo_322Code.GDWaterBottleObjects1.length ;i < len;++i) {
    gdjs.Modulo_322Code.GDWaterBottleObjects1[i].getBehavior("Tween").addObjectPositionTween2("ReturnWaterBottle", runtimeScene.getScene().getVariables().getFromIndex(4).getAsNumber(), runtimeScene.getScene().getVariables().getFromIndex(3).getAsNumber(), "easeOutQuad", 0.3, false);
}
}
{for(var i = 0, len = gdjs.Modulo_322Code.GDWaterBottleObjects1.length ;i < len;++i) {
    gdjs.Modulo_322Code.GDWaterBottleObjects1[i].activateBehavior("Draggable", false);
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Fruit"), gdjs.Modulo_322Code.GDFruitObjects1);
gdjs.copyArray(runtimeScene.getObjects("RedZone"), gdjs.Modulo_322Code.GDRedZoneObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Modulo_322Code.mapOfGDgdjs_9546Modulo_9595322Code_9546GDFruitObjects1Objects, gdjs.Modulo_322Code.mapOfGDgdjs_9546Modulo_9595322Code_9546GDRedZoneObjects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Modulo_322Code.GDFruitObjects1.length;i<l;++i) {
    if ( gdjs.Modulo_322Code.GDFruitObjects1[i].getBehavior("Draggable").isDragged() ) {
        isConditionTrue_0 = true;
        gdjs.Modulo_322Code.GDFruitObjects1[k] = gdjs.Modulo_322Code.GDFruitObjects1[i];
        ++k;
    }
}
gdjs.Modulo_322Code.GDFruitObjects1.length = k;
}
if (isConditionTrue_0) {
/* Reuse gdjs.Modulo_322Code.GDFruitObjects1 */
{for(var i = 0, len = gdjs.Modulo_322Code.GDFruitObjects1.length ;i < len;++i) {
    gdjs.Modulo_322Code.GDFruitObjects1[i].getBehavior("Tween").addObjectPositionTween2("ReturnFruit", runtimeScene.getScene().getVariables().getFromIndex(2).getAsNumber(), runtimeScene.getScene().getVariables().getFromIndex(1).getAsNumber(), "easeOutQuad", 0.3, false);
}
}
{for(var i = 0, len = gdjs.Modulo_322Code.GDFruitObjects1.length ;i < len;++i) {
    gdjs.Modulo_322Code.GDFruitObjects1[i].activateBehavior("Draggable", false);
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Fruit"), gdjs.Modulo_322Code.GDFruitObjects1);
gdjs.copyArray(runtimeScene.getObjects("WaterBottle"), gdjs.Modulo_322Code.GDWaterBottleObjects1);
{for(var i = 0, len = gdjs.Modulo_322Code.GDWaterBottleObjects1.length ;i < len;++i) {
    gdjs.Modulo_322Code.GDWaterBottleObjects1[i].activateBehavior("Draggable", true);
}
}
{for(var i = 0, len = gdjs.Modulo_322Code.GDFruitObjects1.length ;i < len;++i) {
    gdjs.Modulo_322Code.GDFruitObjects1[i].activateBehavior("Draggable", true);
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Chair"), gdjs.Modulo_322Code.GDChairObjects1);
gdjs.copyArray(runtimeScene.getObjects("Cigarette"), gdjs.Modulo_322Code.GDCigaretteObjects1);
gdjs.copyArray(runtimeScene.getObjects("FastFood"), gdjs.Modulo_322Code.GDFastFoodObjects1);
gdjs.copyArray(runtimeScene.getObjects("RedZone"), gdjs.Modulo_322Code.GDRedZoneObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Modulo_322Code.mapOfGDgdjs_9546Modulo_9595322Code_9546GDCigaretteObjects1Objects, gdjs.Modulo_322Code.mapOfGDgdjs_9546Modulo_9595322Code_9546GDRedZoneObjects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Modulo_322Code.mapOfGDgdjs_9546Modulo_9595322Code_9546GDFastFoodObjects1Objects, gdjs.Modulo_322Code.mapOfGDgdjs_9546Modulo_9595322Code_9546GDRedZoneObjects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Modulo_322Code.mapOfGDgdjs_9546Modulo_9595322Code_9546GDChairObjects1Objects, gdjs.Modulo_322Code.mapOfGDgdjs_9546Modulo_9595322Code_9546GDRedZoneObjects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(0).getAsNumber() == 0);
}
}
}
}
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(0).setNumber(1);
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(0).getAsNumber() == 1);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(15216588);
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("TextBoxBackground"), gdjs.Modulo_322Code.GDTextBoxBackgroundObjects1);
gdjs.copyArray(runtimeScene.getObjects("TextBoxBackground2"), gdjs.Modulo_322Code.GDTextBoxBackground2Objects1);
gdjs.copyArray(runtimeScene.getObjects("TextBoxIntro"), gdjs.Modulo_322Code.GDTextBoxIntroObjects1);
gdjs.copyArray(runtimeScene.getObjects("TextBoxIntro2"), gdjs.Modulo_322Code.GDTextBoxIntro2Objects1);
{for(var i = 0, len = gdjs.Modulo_322Code.GDTextBoxBackgroundObjects1.length ;i < len;++i) {
    gdjs.Modulo_322Code.GDTextBoxBackgroundObjects1[i].hide();
}
}
{for(var i = 0, len = gdjs.Modulo_322Code.GDTextBoxIntroObjects1.length ;i < len;++i) {
    gdjs.Modulo_322Code.GDTextBoxIntroObjects1[i].hide();
}
}
{for(var i = 0, len = gdjs.Modulo_322Code.GDTextBoxBackground2Objects1.length ;i < len;++i) {
    gdjs.Modulo_322Code.GDTextBoxBackground2Objects1[i].hide(false);
}
}
{for(var i = 0, len = gdjs.Modulo_322Code.GDTextBoxIntro2Objects1.length ;i < len;++i) {
    gdjs.Modulo_322Code.GDTextBoxIntro2Objects1[i].hide(false);
}
}
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "NextButtonTimer");
}
}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("DebugText"), gdjs.Modulo_322Code.GDDebugTextObjects1);
{for(var i = 0, len = gdjs.Modulo_322Code.GDDebugTextObjects1.length ;i < len;++i) {
    gdjs.Modulo_322Code.GDDebugTextObjects1[i].getBehavior("Text").setText(gdjs.evtTools.common.toString(runtimeScene.getScene().getVariables().getFromIndex(0).getAsNumber()));
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "NextButtonTimer") >= 2;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("NextButton"), gdjs.Modulo_322Code.GDNextButtonObjects1);
{for(var i = 0, len = gdjs.Modulo_322Code.GDNextButtonObjects1.length ;i < len;++i) {
    gdjs.Modulo_322Code.GDNextButtonObjects1[i].hide(false);
}
}
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "NextButtonTimer");
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("NextButton"), gdjs.Modulo_322Code.GDNextButtonObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.Modulo_322Code.mapOfGDgdjs_9546Modulo_9595322Code_9546GDNextButtonObjects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(15219596);
}
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("HandRpoint"), gdjs.Modulo_322Code.GDHandRpointObjects1);
/* Reuse gdjs.Modulo_322Code.GDNextButtonObjects1 */
{for(var i = 0, len = gdjs.Modulo_322Code.GDHandRpointObjects1.length ;i < len;++i) {
    gdjs.Modulo_322Code.GDHandRpointObjects1[i].getBehavior("Tween").addObjectPositionYTween2("TapUpHand", (gdjs.Modulo_322Code.GDHandRpointObjects1[i].getPointY("")) - 5, "easeInQuad", 0.07, false);
}
}
{for(var i = 0, len = gdjs.Modulo_322Code.GDNextButtonObjects1.length ;i < len;++i) {
    gdjs.Modulo_322Code.GDNextButtonObjects1[i].getBehavior("Tween").addObjectScaleTween3("TapUpButton", 1, "easeInQuad", 0.07, false, true);
}
}
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Modulo 3", false);
}
}

}


};

gdjs.Modulo_322Code.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Modulo_322Code.GDTextBoxBackgroundObjects1.length = 0;
gdjs.Modulo_322Code.GDTextBoxBackgroundObjects2.length = 0;
gdjs.Modulo_322Code.GDTextBoxBackgroundObjects3.length = 0;
gdjs.Modulo_322Code.GDTextBoxIntroObjects1.length = 0;
gdjs.Modulo_322Code.GDTextBoxIntroObjects2.length = 0;
gdjs.Modulo_322Code.GDTextBoxIntroObjects3.length = 0;
gdjs.Modulo_322Code.GDNextButtonObjects1.length = 0;
gdjs.Modulo_322Code.GDNextButtonObjects2.length = 0;
gdjs.Modulo_322Code.GDNextButtonObjects3.length = 0;
gdjs.Modulo_322Code.GDHands1Objects1.length = 0;
gdjs.Modulo_322Code.GDHands1Objects2.length = 0;
gdjs.Modulo_322Code.GDHands1Objects3.length = 0;
gdjs.Modulo_322Code.GDHandRpointObjects1.length = 0;
gdjs.Modulo_322Code.GDHandRpointObjects2.length = 0;
gdjs.Modulo_322Code.GDHandRpointObjects3.length = 0;
gdjs.Modulo_322Code.GDHandRObjects1.length = 0;
gdjs.Modulo_322Code.GDHandRObjects2.length = 0;
gdjs.Modulo_322Code.GDHandRObjects3.length = 0;
gdjs.Modulo_322Code.GDHandLObjects1.length = 0;
gdjs.Modulo_322Code.GDHandLObjects2.length = 0;
gdjs.Modulo_322Code.GDHandLObjects3.length = 0;
gdjs.Modulo_322Code.GDFastFoodObjects1.length = 0;
gdjs.Modulo_322Code.GDFastFoodObjects2.length = 0;
gdjs.Modulo_322Code.GDFastFoodObjects3.length = 0;
gdjs.Modulo_322Code.GDTableObjects1.length = 0;
gdjs.Modulo_322Code.GDTableObjects2.length = 0;
gdjs.Modulo_322Code.GDTableObjects3.length = 0;
gdjs.Modulo_322Code.GDChairObjects1.length = 0;
gdjs.Modulo_322Code.GDChairObjects2.length = 0;
gdjs.Modulo_322Code.GDChairObjects3.length = 0;
gdjs.Modulo_322Code.GDCigaretteObjects1.length = 0;
gdjs.Modulo_322Code.GDCigaretteObjects2.length = 0;
gdjs.Modulo_322Code.GDCigaretteObjects3.length = 0;
gdjs.Modulo_322Code.GDRedZoneObjects1.length = 0;
gdjs.Modulo_322Code.GDRedZoneObjects2.length = 0;
gdjs.Modulo_322Code.GDRedZoneObjects3.length = 0;
gdjs.Modulo_322Code.GDWaterBottleObjects1.length = 0;
gdjs.Modulo_322Code.GDWaterBottleObjects2.length = 0;
gdjs.Modulo_322Code.GDWaterBottleObjects3.length = 0;
gdjs.Modulo_322Code.GDTextBoxIntro2Objects1.length = 0;
gdjs.Modulo_322Code.GDTextBoxIntro2Objects2.length = 0;
gdjs.Modulo_322Code.GDTextBoxIntro2Objects3.length = 0;
gdjs.Modulo_322Code.GDTextBoxBackground2Objects1.length = 0;
gdjs.Modulo_322Code.GDTextBoxBackground2Objects2.length = 0;
gdjs.Modulo_322Code.GDTextBoxBackground2Objects3.length = 0;
gdjs.Modulo_322Code.GDNewTextObjects1.length = 0;
gdjs.Modulo_322Code.GDNewTextObjects2.length = 0;
gdjs.Modulo_322Code.GDNewTextObjects3.length = 0;
gdjs.Modulo_322Code.GDFruitObjects1.length = 0;
gdjs.Modulo_322Code.GDFruitObjects2.length = 0;
gdjs.Modulo_322Code.GDFruitObjects3.length = 0;
gdjs.Modulo_322Code.GDSuccessFeedbackObjects1.length = 0;
gdjs.Modulo_322Code.GDSuccessFeedbackObjects2.length = 0;
gdjs.Modulo_322Code.GDSuccessFeedbackObjects3.length = 0;
gdjs.Modulo_322Code.GDDebugTextObjects1.length = 0;
gdjs.Modulo_322Code.GDDebugTextObjects2.length = 0;
gdjs.Modulo_322Code.GDDebugTextObjects3.length = 0;

gdjs.Modulo_322Code.eventsList8(runtimeScene);
gdjs.Modulo_322Code.GDTextBoxBackgroundObjects1.length = 0;
gdjs.Modulo_322Code.GDTextBoxBackgroundObjects2.length = 0;
gdjs.Modulo_322Code.GDTextBoxBackgroundObjects3.length = 0;
gdjs.Modulo_322Code.GDTextBoxIntroObjects1.length = 0;
gdjs.Modulo_322Code.GDTextBoxIntroObjects2.length = 0;
gdjs.Modulo_322Code.GDTextBoxIntroObjects3.length = 0;
gdjs.Modulo_322Code.GDNextButtonObjects1.length = 0;
gdjs.Modulo_322Code.GDNextButtonObjects2.length = 0;
gdjs.Modulo_322Code.GDNextButtonObjects3.length = 0;
gdjs.Modulo_322Code.GDHands1Objects1.length = 0;
gdjs.Modulo_322Code.GDHands1Objects2.length = 0;
gdjs.Modulo_322Code.GDHands1Objects3.length = 0;
gdjs.Modulo_322Code.GDHandRpointObjects1.length = 0;
gdjs.Modulo_322Code.GDHandRpointObjects2.length = 0;
gdjs.Modulo_322Code.GDHandRpointObjects3.length = 0;
gdjs.Modulo_322Code.GDHandRObjects1.length = 0;
gdjs.Modulo_322Code.GDHandRObjects2.length = 0;
gdjs.Modulo_322Code.GDHandRObjects3.length = 0;
gdjs.Modulo_322Code.GDHandLObjects1.length = 0;
gdjs.Modulo_322Code.GDHandLObjects2.length = 0;
gdjs.Modulo_322Code.GDHandLObjects3.length = 0;
gdjs.Modulo_322Code.GDFastFoodObjects1.length = 0;
gdjs.Modulo_322Code.GDFastFoodObjects2.length = 0;
gdjs.Modulo_322Code.GDFastFoodObjects3.length = 0;
gdjs.Modulo_322Code.GDTableObjects1.length = 0;
gdjs.Modulo_322Code.GDTableObjects2.length = 0;
gdjs.Modulo_322Code.GDTableObjects3.length = 0;
gdjs.Modulo_322Code.GDChairObjects1.length = 0;
gdjs.Modulo_322Code.GDChairObjects2.length = 0;
gdjs.Modulo_322Code.GDChairObjects3.length = 0;
gdjs.Modulo_322Code.GDCigaretteObjects1.length = 0;
gdjs.Modulo_322Code.GDCigaretteObjects2.length = 0;
gdjs.Modulo_322Code.GDCigaretteObjects3.length = 0;
gdjs.Modulo_322Code.GDRedZoneObjects1.length = 0;
gdjs.Modulo_322Code.GDRedZoneObjects2.length = 0;
gdjs.Modulo_322Code.GDRedZoneObjects3.length = 0;
gdjs.Modulo_322Code.GDWaterBottleObjects1.length = 0;
gdjs.Modulo_322Code.GDWaterBottleObjects2.length = 0;
gdjs.Modulo_322Code.GDWaterBottleObjects3.length = 0;
gdjs.Modulo_322Code.GDTextBoxIntro2Objects1.length = 0;
gdjs.Modulo_322Code.GDTextBoxIntro2Objects2.length = 0;
gdjs.Modulo_322Code.GDTextBoxIntro2Objects3.length = 0;
gdjs.Modulo_322Code.GDTextBoxBackground2Objects1.length = 0;
gdjs.Modulo_322Code.GDTextBoxBackground2Objects2.length = 0;
gdjs.Modulo_322Code.GDTextBoxBackground2Objects3.length = 0;
gdjs.Modulo_322Code.GDNewTextObjects1.length = 0;
gdjs.Modulo_322Code.GDNewTextObjects2.length = 0;
gdjs.Modulo_322Code.GDNewTextObjects3.length = 0;
gdjs.Modulo_322Code.GDFruitObjects1.length = 0;
gdjs.Modulo_322Code.GDFruitObjects2.length = 0;
gdjs.Modulo_322Code.GDFruitObjects3.length = 0;
gdjs.Modulo_322Code.GDSuccessFeedbackObjects1.length = 0;
gdjs.Modulo_322Code.GDSuccessFeedbackObjects2.length = 0;
gdjs.Modulo_322Code.GDSuccessFeedbackObjects3.length = 0;
gdjs.Modulo_322Code.GDDebugTextObjects1.length = 0;
gdjs.Modulo_322Code.GDDebugTextObjects2.length = 0;
gdjs.Modulo_322Code.GDDebugTextObjects3.length = 0;


return;

}

gdjs['Modulo_322Code'] = gdjs.Modulo_322Code;
