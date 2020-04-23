function Movie_OnStart(){
StackTrace="On Start";
SoundPlay("cancion",true);

}

function Frame__0_0(ID){
StackTrace="Scene 1 Frame 0";
VideoSetVolume("video",0);

}

function Frame__0_1(ID){
StackTrace="Scene 1 Frame 1";
Pause();

}

function Frame__1_0(ID){
StackTrace="Scene 2 Frame 0";
Pause();

}

function boton1_OnClick(){
StackTrace="boton 1.On Click";
VideoSetVolume("video",0);
SoundPlay("efecto",false);

}

function boton1_OnRelease(){
StackTrace="boton 1.On Release";
VideoSetVolume("video",100);
SoundPlay("efecto",false);
}

function botón2_OnClick(){
StackTrace="botón 2.On Click";
VideoPause("video");
SoundPlay("efecto",false);
}

function botón2_OnRelease(){
StackTrace="botón 2.On Release";
VideoResume("video");
SoundPlay("efecto",false);
}

function boton3_OnClick(){
StackTrace="boton 3.On Click";
GotoSceneName("Escena Sonido");
SoundPlay("efecto",false);
}

function boton4_OnClick(){
StackTrace="boton 4.On Click";
SoundPause("cancion");
SoundPlay("efecto",false);
}

function boton4_OnRelease(){
StackTrace="boton 4.On Release";
SoundResume("cancion");
SoundPlay("efecto",false);
}

function boton5_OnClick(){
StackTrace="boton 5.On Click";
GotoSceneName("Escena Video");
SoundPlay("efecto",false);
}

