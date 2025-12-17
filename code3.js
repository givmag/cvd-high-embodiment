gdjs.Modulo_323Code = {};
gdjs.Modulo_323Code.localVariables = [];
gdjs.Modulo_323Code.idToCallbackMap = new Map();
gdjs.Modulo_323Code.GDTextBoxBackgroundObjects1= [];
gdjs.Modulo_323Code.GDTextBoxBackgroundObjects2= [];
gdjs.Modulo_323Code.GDTextBoxTextObjects1= [];
gdjs.Modulo_323Code.GDTextBoxTextObjects2= [];
gdjs.Modulo_323Code.GDNextButtonObjects1= [];
gdjs.Modulo_323Code.GDNextButtonObjects2= [];
gdjs.Modulo_323Code.GDTextBoxBackground2Objects1= [];
gdjs.Modulo_323Code.GDTextBoxBackground2Objects2= [];
gdjs.Modulo_323Code.GDTextBoxText2Objects1= [];
gdjs.Modulo_323Code.GDTextBoxText2Objects2= [];
gdjs.Modulo_323Code.GDHandRObjects1= [];
gdjs.Modulo_323Code.GDHandRObjects2= [];
gdjs.Modulo_323Code.GDHandLObjects1= [];
gdjs.Modulo_323Code.GDHandLObjects2= [];
gdjs.Modulo_323Code.GDPassoObjects1= [];
gdjs.Modulo_323Code.GDPassoObjects2= [];
gdjs.Modulo_323Code.GDStep1Objects1= [];
gdjs.Modulo_323Code.GDStep1Objects2= [];
gdjs.Modulo_323Code.GDStep2Objects1= [];
gdjs.Modulo_323Code.GDStep2Objects2= [];
gdjs.Modulo_323Code.GDStep3Objects1= [];
gdjs.Modulo_323Code.GDStep3Objects2= [];
gdjs.Modulo_323Code.GDStep4Objects1= [];
gdjs.Modulo_323Code.GDStep4Objects2= [];
gdjs.Modulo_323Code.GDStep5Objects1= [];
gdjs.Modulo_323Code.GDStep5Objects2= [];
gdjs.Modulo_323Code.GDStep6Objects1= [];
gdjs.Modulo_323Code.GDStep6Objects2= [];


gdjs.Modulo_323Code.mapOfGDgdjs_9546Modulo_9595323Code_9546GDPassoObjects1Objects = Hashtable.newFrom({"Passo": gdjs.Modulo_323Code.GDPassoObjects1});
gdjs.Modulo_323Code.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("NextButton"), gdjs.Modulo_323Code.GDNextButtonObjects1);
gdjs.copyArray(runtimeScene.getObjects("Step2"), gdjs.Modulo_323Code.GDStep2Objects1);
gdjs.copyArray(runtimeScene.getObjects("Step3"), gdjs.Modulo_323Code.GDStep3Objects1);
gdjs.copyArray(runtimeScene.getObjects("Step4"), gdjs.Modulo_323Code.GDStep4Objects1);
gdjs.copyArray(runtimeScene.getObjects("Step5"), gdjs.Modulo_323Code.GDStep5Objects1);
gdjs.copyArray(runtimeScene.getObjects("Step6"), gdjs.Modulo_323Code.GDStep6Objects1);
gdjs.copyArray(runtimeScene.getObjects("TextBoxBackground"), gdjs.Modulo_323Code.GDTextBoxBackgroundObjects1);
gdjs.copyArray(runtimeScene.getObjects("TextBoxBackground2"), gdjs.Modulo_323Code.GDTextBoxBackground2Objects1);
gdjs.copyArray(runtimeScene.getObjects("TextBoxText"), gdjs.Modulo_323Code.GDTextBoxTextObjects1);
gdjs.copyArray(runtimeScene.getObjects("TextBoxText2"), gdjs.Modulo_323Code.GDTextBoxText2Objects1);
{for(var i = 0, len = gdjs.Modulo_323Code.GDTextBoxBackgroundObjects1.length ;i < len;++i) {
    gdjs.Modulo_323Code.GDTextBoxBackgroundObjects1[i].hide(false);
}
}
{for(var i = 0, len = gdjs.Modulo_323Code.GDTextBoxTextObjects1.length ;i < len;++i) {
    gdjs.Modulo_323Code.GDTextBoxTextObjects1[i].hide(false);
}
}
{for(var i = 0, len = gdjs.Modulo_323Code.GDNextButtonObjects1.length ;i < len;++i) {
    gdjs.Modulo_323Code.GDNextButtonObjects1[i].hide();
}
}
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "ShowNextButtonTimer");
}
{for(var i = 0, len = gdjs.Modulo_323Code.GDTextBoxBackground2Objects1.length ;i < len;++i) {
    gdjs.Modulo_323Code.GDTextBoxBackground2Objects1[i].hide();
}
}
{for(var i = 0, len = gdjs.Modulo_323Code.GDTextBoxText2Objects1.length ;i < len;++i) {
    gdjs.Modulo_323Code.GDTextBoxText2Objects1[i].hide();
}
}
{for(var i = 0, len = gdjs.Modulo_323Code.GDStep2Objects1.length ;i < len;++i) {
    gdjs.Modulo_323Code.GDStep2Objects1[i].hide();
}
}
{for(var i = 0, len = gdjs.Modulo_323Code.GDStep3Objects1.length ;i < len;++i) {
    gdjs.Modulo_323Code.GDStep3Objects1[i].hide();
}
}
{for(var i = 0, len = gdjs.Modulo_323Code.GDStep4Objects1.length ;i < len;++i) {
    gdjs.Modulo_323Code.GDStep4Objects1[i].hide();
}
}
{for(var i = 0, len = gdjs.Modulo_323Code.GDStep5Objects1.length ;i < len;++i) {
    gdjs.Modulo_323Code.GDStep5Objects1[i].hide();
}
}
{for(var i = 0, len = gdjs.Modulo_323Code.GDStep6Objects1.length ;i < len;++i) {
    gdjs.Modulo_323Code.GDStep6Objects1[i].hide();
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "ShowNextButtonTimer") >= 13;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("NextButton"), gdjs.Modulo_323Code.GDNextButtonObjects1);
{for(var i = 0, len = gdjs.Modulo_323Code.GDNextButtonObjects1.length ;i < len;++i) {
    gdjs.Modulo_323Code.GDNextButtonObjects1[i].hide(false);
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("NextButton"), gdjs.Modulo_323Code.GDNextButtonObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Modulo_323Code.GDNextButtonObjects1.length;i<l;++i) {
    if ( gdjs.Modulo_323Code.GDNextButtonObjects1[i].IsClicked(null) ) {
        isConditionTrue_0 = true;
        gdjs.Modulo_323Code.GDNextButtonObjects1[k] = gdjs.Modulo_323Code.GDNextButtonObjects1[i];
        ++k;
    }
}
gdjs.Modulo_323Code.GDNextButtonObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Modulo 4", false);
}
}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("HandR"), gdjs.Modulo_323Code.GDHandRObjects1);
{for(var i = 0, len = gdjs.Modulo_323Code.GDHandRObjects1.length ;i < len;++i) {
    gdjs.Modulo_323Code.GDHandRObjects1[i].setX(gdjs.evtTools.input.getCursorX(runtimeScene, "", 0));
}
}
{for(var i = 0, len = gdjs.Modulo_323Code.GDHandRObjects1.length ;i < len;++i) {
    gdjs.Modulo_323Code.GDHandRObjects1[i].setY(gdjs.evtTools.input.getCursorY(runtimeScene, "", 0));
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Passo"), gdjs.Modulo_323Code.GDPassoObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.Modulo_323Code.mapOfGDgdjs_9546Modulo_9595323Code_9546GDPassoObjects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(15292228);
}
}
}
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(0).add(1);
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(0).getAsNumber() == 1);
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Step1"), gdjs.Modulo_323Code.GDStep1Objects1);
gdjs.copyArray(runtimeScene.getObjects("Step2"), gdjs.Modulo_323Code.GDStep2Objects1);
gdjs.copyArray(runtimeScene.getObjects("Step3"), gdjs.Modulo_323Code.GDStep3Objects1);
gdjs.copyArray(runtimeScene.getObjects("Step4"), gdjs.Modulo_323Code.GDStep4Objects1);
gdjs.copyArray(runtimeScene.getObjects("Step5"), gdjs.Modulo_323Code.GDStep5Objects1);
gdjs.copyArray(runtimeScene.getObjects("Step6"), gdjs.Modulo_323Code.GDStep6Objects1);
{for(var i = 0, len = gdjs.Modulo_323Code.GDStep1Objects1.length ;i < len;++i) {
    gdjs.Modulo_323Code.GDStep1Objects1[i].hide(false);
}
}
{for(var i = 0, len = gdjs.Modulo_323Code.GDStep2Objects1.length ;i < len;++i) {
    gdjs.Modulo_323Code.GDStep2Objects1[i].hide();
}
}
{for(var i = 0, len = gdjs.Modulo_323Code.GDStep3Objects1.length ;i < len;++i) {
    gdjs.Modulo_323Code.GDStep3Objects1[i].hide();
}
}
{for(var i = 0, len = gdjs.Modulo_323Code.GDStep4Objects1.length ;i < len;++i) {
    gdjs.Modulo_323Code.GDStep4Objects1[i].hide();
}
}
{for(var i = 0, len = gdjs.Modulo_323Code.GDStep5Objects1.length ;i < len;++i) {
    gdjs.Modulo_323Code.GDStep5Objects1[i].hide();
}
}
{for(var i = 0, len = gdjs.Modulo_323Code.GDStep6Objects1.length ;i < len;++i) {
    gdjs.Modulo_323Code.GDStep6Objects1[i].hide();
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(0).getAsNumber() == 2);
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Step1"), gdjs.Modulo_323Code.GDStep1Objects1);
gdjs.copyArray(runtimeScene.getObjects("Step2"), gdjs.Modulo_323Code.GDStep2Objects1);
gdjs.copyArray(runtimeScene.getObjects("Step3"), gdjs.Modulo_323Code.GDStep3Objects1);
gdjs.copyArray(runtimeScene.getObjects("Step4"), gdjs.Modulo_323Code.GDStep4Objects1);
gdjs.copyArray(runtimeScene.getObjects("Step5"), gdjs.Modulo_323Code.GDStep5Objects1);
gdjs.copyArray(runtimeScene.getObjects("Step6"), gdjs.Modulo_323Code.GDStep6Objects1);
{for(var i = 0, len = gdjs.Modulo_323Code.GDStep2Objects1.length ;i < len;++i) {
    gdjs.Modulo_323Code.GDStep2Objects1[i].hide(false);
}
}
{for(var i = 0, len = gdjs.Modulo_323Code.GDStep1Objects1.length ;i < len;++i) {
    gdjs.Modulo_323Code.GDStep1Objects1[i].hide();
}
}
{for(var i = 0, len = gdjs.Modulo_323Code.GDStep3Objects1.length ;i < len;++i) {
    gdjs.Modulo_323Code.GDStep3Objects1[i].hide();
}
}
{for(var i = 0, len = gdjs.Modulo_323Code.GDStep4Objects1.length ;i < len;++i) {
    gdjs.Modulo_323Code.GDStep4Objects1[i].hide();
}
}
{for(var i = 0, len = gdjs.Modulo_323Code.GDStep5Objects1.length ;i < len;++i) {
    gdjs.Modulo_323Code.GDStep5Objects1[i].hide();
}
}
{for(var i = 0, len = gdjs.Modulo_323Code.GDStep6Objects1.length ;i < len;++i) {
    gdjs.Modulo_323Code.GDStep6Objects1[i].hide();
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(0).getAsNumber() == 3);
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Step1"), gdjs.Modulo_323Code.GDStep1Objects1);
gdjs.copyArray(runtimeScene.getObjects("Step2"), gdjs.Modulo_323Code.GDStep2Objects1);
gdjs.copyArray(runtimeScene.getObjects("Step3"), gdjs.Modulo_323Code.GDStep3Objects1);
gdjs.copyArray(runtimeScene.getObjects("Step4"), gdjs.Modulo_323Code.GDStep4Objects1);
gdjs.copyArray(runtimeScene.getObjects("Step5"), gdjs.Modulo_323Code.GDStep5Objects1);
gdjs.copyArray(runtimeScene.getObjects("Step6"), gdjs.Modulo_323Code.GDStep6Objects1);
{for(var i = 0, len = gdjs.Modulo_323Code.GDStep3Objects1.length ;i < len;++i) {
    gdjs.Modulo_323Code.GDStep3Objects1[i].hide(false);
}
}
{for(var i = 0, len = gdjs.Modulo_323Code.GDStep1Objects1.length ;i < len;++i) {
    gdjs.Modulo_323Code.GDStep1Objects1[i].hide();
}
}
{for(var i = 0, len = gdjs.Modulo_323Code.GDStep2Objects1.length ;i < len;++i) {
    gdjs.Modulo_323Code.GDStep2Objects1[i].hide();
}
}
{for(var i = 0, len = gdjs.Modulo_323Code.GDStep4Objects1.length ;i < len;++i) {
    gdjs.Modulo_323Code.GDStep4Objects1[i].hide();
}
}
{for(var i = 0, len = gdjs.Modulo_323Code.GDStep5Objects1.length ;i < len;++i) {
    gdjs.Modulo_323Code.GDStep5Objects1[i].hide();
}
}
{for(var i = 0, len = gdjs.Modulo_323Code.GDStep6Objects1.length ;i < len;++i) {
    gdjs.Modulo_323Code.GDStep6Objects1[i].hide();
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(0).getAsNumber() == 4);
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Step1"), gdjs.Modulo_323Code.GDStep1Objects1);
gdjs.copyArray(runtimeScene.getObjects("Step2"), gdjs.Modulo_323Code.GDStep2Objects1);
gdjs.copyArray(runtimeScene.getObjects("Step3"), gdjs.Modulo_323Code.GDStep3Objects1);
gdjs.copyArray(runtimeScene.getObjects("Step4"), gdjs.Modulo_323Code.GDStep4Objects1);
gdjs.copyArray(runtimeScene.getObjects("Step5"), gdjs.Modulo_323Code.GDStep5Objects1);
gdjs.copyArray(runtimeScene.getObjects("Step6"), gdjs.Modulo_323Code.GDStep6Objects1);
gdjs.copyArray(runtimeScene.getObjects("TextBoxBackground"), gdjs.Modulo_323Code.GDTextBoxBackgroundObjects1);
gdjs.copyArray(runtimeScene.getObjects("TextBoxBackground2"), gdjs.Modulo_323Code.GDTextBoxBackground2Objects1);
gdjs.copyArray(runtimeScene.getObjects("TextBoxText"), gdjs.Modulo_323Code.GDTextBoxTextObjects1);
gdjs.copyArray(runtimeScene.getObjects("TextBoxText2"), gdjs.Modulo_323Code.GDTextBoxText2Objects1);
{for(var i = 0, len = gdjs.Modulo_323Code.GDTextBoxTextObjects1.length ;i < len;++i) {
    gdjs.Modulo_323Code.GDTextBoxTextObjects1[i].hide();
}
}
{for(var i = 0, len = gdjs.Modulo_323Code.GDTextBoxBackgroundObjects1.length ;i < len;++i) {
    gdjs.Modulo_323Code.GDTextBoxBackgroundObjects1[i].hide();
}
}
{for(var i = 0, len = gdjs.Modulo_323Code.GDTextBoxText2Objects1.length ;i < len;++i) {
    gdjs.Modulo_323Code.GDTextBoxText2Objects1[i].hide(false);
}
}
{for(var i = 0, len = gdjs.Modulo_323Code.GDTextBoxBackground2Objects1.length ;i < len;++i) {
    gdjs.Modulo_323Code.GDTextBoxBackground2Objects1[i].hide(false);
}
}
{for(var i = 0, len = gdjs.Modulo_323Code.GDStep4Objects1.length ;i < len;++i) {
    gdjs.Modulo_323Code.GDStep4Objects1[i].hide(false);
}
}
{for(var i = 0, len = gdjs.Modulo_323Code.GDStep1Objects1.length ;i < len;++i) {
    gdjs.Modulo_323Code.GDStep1Objects1[i].hide();
}
}
{for(var i = 0, len = gdjs.Modulo_323Code.GDStep2Objects1.length ;i < len;++i) {
    gdjs.Modulo_323Code.GDStep2Objects1[i].hide();
}
}
{for(var i = 0, len = gdjs.Modulo_323Code.GDStep3Objects1.length ;i < len;++i) {
    gdjs.Modulo_323Code.GDStep3Objects1[i].hide();
}
}
{for(var i = 0, len = gdjs.Modulo_323Code.GDStep5Objects1.length ;i < len;++i) {
    gdjs.Modulo_323Code.GDStep5Objects1[i].hide();
}
}
{for(var i = 0, len = gdjs.Modulo_323Code.GDStep6Objects1.length ;i < len;++i) {
    gdjs.Modulo_323Code.GDStep6Objects1[i].hide();
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(0).getAsNumber() == 5);
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Step1"), gdjs.Modulo_323Code.GDStep1Objects1);
gdjs.copyArray(runtimeScene.getObjects("Step2"), gdjs.Modulo_323Code.GDStep2Objects1);
gdjs.copyArray(runtimeScene.getObjects("Step3"), gdjs.Modulo_323Code.GDStep3Objects1);
gdjs.copyArray(runtimeScene.getObjects("Step4"), gdjs.Modulo_323Code.GDStep4Objects1);
gdjs.copyArray(runtimeScene.getObjects("Step5"), gdjs.Modulo_323Code.GDStep5Objects1);
gdjs.copyArray(runtimeScene.getObjects("Step6"), gdjs.Modulo_323Code.GDStep6Objects1);
{for(var i = 0, len = gdjs.Modulo_323Code.GDStep5Objects1.length ;i < len;++i) {
    gdjs.Modulo_323Code.GDStep5Objects1[i].hide(false);
}
}
{for(var i = 0, len = gdjs.Modulo_323Code.GDStep1Objects1.length ;i < len;++i) {
    gdjs.Modulo_323Code.GDStep1Objects1[i].hide();
}
}
{for(var i = 0, len = gdjs.Modulo_323Code.GDStep2Objects1.length ;i < len;++i) {
    gdjs.Modulo_323Code.GDStep2Objects1[i].hide();
}
}
{for(var i = 0, len = gdjs.Modulo_323Code.GDStep3Objects1.length ;i < len;++i) {
    gdjs.Modulo_323Code.GDStep3Objects1[i].hide();
}
}
{for(var i = 0, len = gdjs.Modulo_323Code.GDStep4Objects1.length ;i < len;++i) {
    gdjs.Modulo_323Code.GDStep4Objects1[i].hide();
}
}
{for(var i = 0, len = gdjs.Modulo_323Code.GDStep6Objects1.length ;i < len;++i) {
    gdjs.Modulo_323Code.GDStep6Objects1[i].hide();
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(0).getAsNumber() == 6);
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Passo"), gdjs.Modulo_323Code.GDPassoObjects1);
gdjs.copyArray(runtimeScene.getObjects("Step1"), gdjs.Modulo_323Code.GDStep1Objects1);
gdjs.copyArray(runtimeScene.getObjects("Step2"), gdjs.Modulo_323Code.GDStep2Objects1);
gdjs.copyArray(runtimeScene.getObjects("Step3"), gdjs.Modulo_323Code.GDStep3Objects1);
gdjs.copyArray(runtimeScene.getObjects("Step4"), gdjs.Modulo_323Code.GDStep4Objects1);
gdjs.copyArray(runtimeScene.getObjects("Step5"), gdjs.Modulo_323Code.GDStep5Objects1);
gdjs.copyArray(runtimeScene.getObjects("Step6"), gdjs.Modulo_323Code.GDStep6Objects1);
{for(var i = 0, len = gdjs.Modulo_323Code.GDStep6Objects1.length ;i < len;++i) {
    gdjs.Modulo_323Code.GDStep6Objects1[i].hide(false);
}
}
{for(var i = 0, len = gdjs.Modulo_323Code.GDStep1Objects1.length ;i < len;++i) {
    gdjs.Modulo_323Code.GDStep1Objects1[i].hide();
}
}
{for(var i = 0, len = gdjs.Modulo_323Code.GDStep2Objects1.length ;i < len;++i) {
    gdjs.Modulo_323Code.GDStep2Objects1[i].hide();
}
}
{for(var i = 0, len = gdjs.Modulo_323Code.GDStep3Objects1.length ;i < len;++i) {
    gdjs.Modulo_323Code.GDStep3Objects1[i].hide();
}
}
{for(var i = 0, len = gdjs.Modulo_323Code.GDStep4Objects1.length ;i < len;++i) {
    gdjs.Modulo_323Code.GDStep4Objects1[i].hide();
}
}
{for(var i = 0, len = gdjs.Modulo_323Code.GDStep5Objects1.length ;i < len;++i) {
    gdjs.Modulo_323Code.GDStep5Objects1[i].hide();
}
}
{for(var i = 0, len = gdjs.Modulo_323Code.GDPassoObjects1.length ;i < len;++i) {
    gdjs.Modulo_323Code.GDPassoObjects1[i].hide();
}
}
}

}


};

gdjs.Modulo_323Code.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Modulo_323Code.GDTextBoxBackgroundObjects1.length = 0;
gdjs.Modulo_323Code.GDTextBoxBackgroundObjects2.length = 0;
gdjs.Modulo_323Code.GDTextBoxTextObjects1.length = 0;
gdjs.Modulo_323Code.GDTextBoxTextObjects2.length = 0;
gdjs.Modulo_323Code.GDNextButtonObjects1.length = 0;
gdjs.Modulo_323Code.GDNextButtonObjects2.length = 0;
gdjs.Modulo_323Code.GDTextBoxBackground2Objects1.length = 0;
gdjs.Modulo_323Code.GDTextBoxBackground2Objects2.length = 0;
gdjs.Modulo_323Code.GDTextBoxText2Objects1.length = 0;
gdjs.Modulo_323Code.GDTextBoxText2Objects2.length = 0;
gdjs.Modulo_323Code.GDHandRObjects1.length = 0;
gdjs.Modulo_323Code.GDHandRObjects2.length = 0;
gdjs.Modulo_323Code.GDHandLObjects1.length = 0;
gdjs.Modulo_323Code.GDHandLObjects2.length = 0;
gdjs.Modulo_323Code.GDPassoObjects1.length = 0;
gdjs.Modulo_323Code.GDPassoObjects2.length = 0;
gdjs.Modulo_323Code.GDStep1Objects1.length = 0;
gdjs.Modulo_323Code.GDStep1Objects2.length = 0;
gdjs.Modulo_323Code.GDStep2Objects1.length = 0;
gdjs.Modulo_323Code.GDStep2Objects2.length = 0;
gdjs.Modulo_323Code.GDStep3Objects1.length = 0;
gdjs.Modulo_323Code.GDStep3Objects2.length = 0;
gdjs.Modulo_323Code.GDStep4Objects1.length = 0;
gdjs.Modulo_323Code.GDStep4Objects2.length = 0;
gdjs.Modulo_323Code.GDStep5Objects1.length = 0;
gdjs.Modulo_323Code.GDStep5Objects2.length = 0;
gdjs.Modulo_323Code.GDStep6Objects1.length = 0;
gdjs.Modulo_323Code.GDStep6Objects2.length = 0;

gdjs.Modulo_323Code.eventsList0(runtimeScene);
gdjs.Modulo_323Code.GDTextBoxBackgroundObjects1.length = 0;
gdjs.Modulo_323Code.GDTextBoxBackgroundObjects2.length = 0;
gdjs.Modulo_323Code.GDTextBoxTextObjects1.length = 0;
gdjs.Modulo_323Code.GDTextBoxTextObjects2.length = 0;
gdjs.Modulo_323Code.GDNextButtonObjects1.length = 0;
gdjs.Modulo_323Code.GDNextButtonObjects2.length = 0;
gdjs.Modulo_323Code.GDTextBoxBackground2Objects1.length = 0;
gdjs.Modulo_323Code.GDTextBoxBackground2Objects2.length = 0;
gdjs.Modulo_323Code.GDTextBoxText2Objects1.length = 0;
gdjs.Modulo_323Code.GDTextBoxText2Objects2.length = 0;
gdjs.Modulo_323Code.GDHandRObjects1.length = 0;
gdjs.Modulo_323Code.GDHandRObjects2.length = 0;
gdjs.Modulo_323Code.GDHandLObjects1.length = 0;
gdjs.Modulo_323Code.GDHandLObjects2.length = 0;
gdjs.Modulo_323Code.GDPassoObjects1.length = 0;
gdjs.Modulo_323Code.GDPassoObjects2.length = 0;
gdjs.Modulo_323Code.GDStep1Objects1.length = 0;
gdjs.Modulo_323Code.GDStep1Objects2.length = 0;
gdjs.Modulo_323Code.GDStep2Objects1.length = 0;
gdjs.Modulo_323Code.GDStep2Objects2.length = 0;
gdjs.Modulo_323Code.GDStep3Objects1.length = 0;
gdjs.Modulo_323Code.GDStep3Objects2.length = 0;
gdjs.Modulo_323Code.GDStep4Objects1.length = 0;
gdjs.Modulo_323Code.GDStep4Objects2.length = 0;
gdjs.Modulo_323Code.GDStep5Objects1.length = 0;
gdjs.Modulo_323Code.GDStep5Objects2.length = 0;
gdjs.Modulo_323Code.GDStep6Objects1.length = 0;
gdjs.Modulo_323Code.GDStep6Objects2.length = 0;


return;

}

gdjs['Modulo_323Code'] = gdjs.Modulo_323Code;
