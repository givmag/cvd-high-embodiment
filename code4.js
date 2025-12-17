gdjs.Modulo_324Code = {};
gdjs.Modulo_324Code.localVariables = [];
gdjs.Modulo_324Code.idToCallbackMap = new Map();
gdjs.Modulo_324Code.GDTextBoxBackgroundObjects1= [];
gdjs.Modulo_324Code.GDTextBoxBackgroundObjects2= [];
gdjs.Modulo_324Code.GDTextBoxTextObjects1= [];
gdjs.Modulo_324Code.GDTextBoxTextObjects2= [];
gdjs.Modulo_324Code.GDNextButtonObjects1= [];
gdjs.Modulo_324Code.GDNextButtonObjects2= [];
gdjs.Modulo_324Code.GDBreathObjects1= [];
gdjs.Modulo_324Code.GDBreathObjects2= [];
gdjs.Modulo_324Code.GDFillerObjects1= [];
gdjs.Modulo_324Code.GDFillerObjects2= [];


gdjs.Modulo_324Code.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Breath"), gdjs.Modulo_324Code.GDBreathObjects1);
gdjs.copyArray(runtimeScene.getObjects("NextButton"), gdjs.Modulo_324Code.GDNextButtonObjects1);
{for(var i = 0, len = gdjs.Modulo_324Code.GDNextButtonObjects1.length ;i < len;++i) {
    gdjs.Modulo_324Code.GDNextButtonObjects1[i].hide();
}
}
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "ShowNextButtonTimer");
}
{for(var i = 0, len = gdjs.Modulo_324Code.GDBreathObjects1.length ;i < len;++i) {
    gdjs.Modulo_324Code.GDBreathObjects1[i].getBehavior("Animation").resumeAnimation();
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "ShowNextButtonTimer") >= 30;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(15344852);
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("NextButton"), gdjs.Modulo_324Code.GDNextButtonObjects1);
{for(var i = 0, len = gdjs.Modulo_324Code.GDNextButtonObjects1.length ;i < len;++i) {
    gdjs.Modulo_324Code.GDNextButtonObjects1[i].hide(false);
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("NextButton"), gdjs.Modulo_324Code.GDNextButtonObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Modulo_324Code.GDNextButtonObjects1.length;i<l;++i) {
    if ( gdjs.Modulo_324Code.GDNextButtonObjects1[i].IsClicked(null) ) {
        isConditionTrue_0 = true;
        gdjs.Modulo_324Code.GDNextButtonObjects1[k] = gdjs.Modulo_324Code.GDNextButtonObjects1[i];
        ++k;
    }
}
gdjs.Modulo_324Code.GDNextButtonObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Modulo 5", false);
}
}

}


};

gdjs.Modulo_324Code.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Modulo_324Code.GDTextBoxBackgroundObjects1.length = 0;
gdjs.Modulo_324Code.GDTextBoxBackgroundObjects2.length = 0;
gdjs.Modulo_324Code.GDTextBoxTextObjects1.length = 0;
gdjs.Modulo_324Code.GDTextBoxTextObjects2.length = 0;
gdjs.Modulo_324Code.GDNextButtonObjects1.length = 0;
gdjs.Modulo_324Code.GDNextButtonObjects2.length = 0;
gdjs.Modulo_324Code.GDBreathObjects1.length = 0;
gdjs.Modulo_324Code.GDBreathObjects2.length = 0;
gdjs.Modulo_324Code.GDFillerObjects1.length = 0;
gdjs.Modulo_324Code.GDFillerObjects2.length = 0;

gdjs.Modulo_324Code.eventsList0(runtimeScene);
gdjs.Modulo_324Code.GDTextBoxBackgroundObjects1.length = 0;
gdjs.Modulo_324Code.GDTextBoxBackgroundObjects2.length = 0;
gdjs.Modulo_324Code.GDTextBoxTextObjects1.length = 0;
gdjs.Modulo_324Code.GDTextBoxTextObjects2.length = 0;
gdjs.Modulo_324Code.GDNextButtonObjects1.length = 0;
gdjs.Modulo_324Code.GDNextButtonObjects2.length = 0;
gdjs.Modulo_324Code.GDBreathObjects1.length = 0;
gdjs.Modulo_324Code.GDBreathObjects2.length = 0;
gdjs.Modulo_324Code.GDFillerObjects1.length = 0;
gdjs.Modulo_324Code.GDFillerObjects2.length = 0;


return;

}

gdjs['Modulo_324Code'] = gdjs.Modulo_324Code;
