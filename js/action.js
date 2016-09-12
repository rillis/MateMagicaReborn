// JavaScript Document
var dead=false;
function posicaoInicial(){
		document.getElementById("inicio").style.left='0px';
		document.getElementById("um").style.left='100%';
		document.getElementById("dois").style.left='200%';
		document.getElementById("tres").style.left='300%';
		document.getElementById("quatro").style.left='400%';
		document.getElementById("cinco").style.left='500%';
		document.getElementById("seis").style.left='600%';
		document.getElementById("sete").style.left='700%';
		document.getElementById("oito").style.left='800%';
		document.getElementById("nove").style.left='900%';
		document.getElementById("dez").style.left='1000%';
}
function rolarEsquerda(n){
	if(n==0){
		document.getElementById("inicio").style.left="-100%";
		document.getElementById("um").style.left="0px";
		document.getElementById("dois").style.left="100%";
		document.getElementById("tres").style.left="200%";
		document.getElementById("quatro").style.left="300%";
		document.getElementById("cinco").style.left="400%";
		document.getElementById("seis").style.left="500%";
		document.getElementById("sete").style.left="600%";
		document.getElementById("oito").style.left="700%";
		document.getElementById("nove").style.left="800%";
		document.getElementById("dez").style.left="900%";
	}else if(n==1){
		document.getElementById("inicio").style.left="-200%";
		document.getElementById("um").style.left="-100%";
		document.getElementById("dois").style.left="0px";
		document.getElementById("tres").style.left="100%";
		document.getElementById("quatro").style.left="200%";
		document.getElementById("cinco").style.left="300%";
		document.getElementById("seis").style.left="400%";
		document.getElementById("sete").style.left="500%";
		document.getElementById("oito").style.left="600%";
		document.getElementById("nove").style.left="700%";
		document.getElementById("dez").style.left="800%";
	}else if(n==2){
		document.getElementById("inicio").style.left="-300%";
		document.getElementById("um").style.left="-200%";
		document.getElementById("dois").style.left="-100%";
		document.getElementById("tres").style.left="0px";
		document.getElementById("quatro").style.left="100%";
		document.getElementById("cinco").style.left="200%";
		document.getElementById("seis").style.left="300%";
		document.getElementById("sete").style.left="400%";
		document.getElementById("oito").style.left="500%";
		document.getElementById("nove").style.left="600%";
		document.getElementById("dez").style.left="700%";
	}else if(n==3){
		document.getElementById("inicio").style.left="-400%";
		document.getElementById("um").style.left="-300%";
		document.getElementById("dois").style.left="-200%";
		document.getElementById("tres").style.left="-100%";
		document.getElementById("quatro").style.left="0px";
		document.getElementById("cinco").style.left="100%";
		document.getElementById("seis").style.left="200%";
		document.getElementById("sete").style.left="300%";
		document.getElementById("oito").style.left="400%";
		document.getElementById("nove").style.left="500%";
		document.getElementById("dez").style.left="600%";
	}else if(n==4){
		document.getElementById("inicio").style.left="-500%";
		document.getElementById("um").style.left="-400%";
		document.getElementById("dois").style.left="-300%";
		document.getElementById("tres").style.left="-200%";
		document.getElementById("quatro").style.left="-100%";
		document.getElementById("cinco").style.left="0px";
		document.getElementById("seis").style.left="100%";
		document.getElementById("sete").style.left="200%";
		document.getElementById("oito").style.left="300%";
		document.getElementById("nove").style.left="400%";
		document.getElementById("dez").style.left="500%";
	}else if(n==5){
		document.getElementById("inicio").style.left="-600%";
		document.getElementById("um").style.left="-500%";
		document.getElementById("dois").style.left="-400%";
		document.getElementById("tres").style.left="-300%";
		document.getElementById("quatro").style.left="-200%";
		document.getElementById("cinco").style.left="-100%";
		document.getElementById("seis").style.left="0px";
		document.getElementById("sete").style.left="100%";
		document.getElementById("oito").style.left="200%";
		document.getElementById("nove").style.left="300%";
		document.getElementById("dez").style.left="400%";
	}else if(n==6){
		document.getElementById("inicio").style.left="-700%";
		document.getElementById("um").style.left="-600%";
		document.getElementById("dois").style.left="-500%";
		document.getElementById("tres").style.left="-400%";
		document.getElementById("quatro").style.left="-300%";
		document.getElementById("cinco").style.left="-200%";
		document.getElementById("seis").style.left="-100%";
		document.getElementById("sete").style.left="0px";
		document.getElementById("oito").style.left="100%";
		document.getElementById("nove").style.left="200%";
		document.getElementById("dez").style.left="300%";
	}else if(n==7){
		document.getElementById("inicio").style.left="-800%";
		document.getElementById("um").style.left="-700%";
		document.getElementById("dois").style.left="-600%";
		document.getElementById("tres").style.left="-500%";
		document.getElementById("quatro").style.left="-400%";
		document.getElementById("cinco").style.left="-300%";
		document.getElementById("seis").style.left="-200%";
		document.getElementById("sete").style.left="-100%";
		document.getElementById("oito").style.left="0px";
		document.getElementById("nove").style.left="100%";
		document.getElementById("dez").style.left="200%";
	}else if(n==8){
		document.getElementById("inicio").style.left="-900%";
		document.getElementById("um").style.left="-800%";
		document.getElementById("dois").style.left="-700%";
		document.getElementById("tres").style.left="-600%";
		document.getElementById("quatro").style.left="-500%";
		document.getElementById("cinco").style.left="-400%";
		document.getElementById("seis").style.left="-300%";
		document.getElementById("sete").style.left="-200%";
		document.getElementById("oito").style.left="-100%";
		document.getElementById("nove").style.left="0px";
		document.getElementById("dez").style.left="100%";
	}else if(n==9){
		document.getElementById("inicio").style.left="-1000%";
		document.getElementById("um").style.left="-900%";
		document.getElementById("dois").style.left="-800%";
		document.getElementById("tres").style.left="-700%";
		document.getElementById("quatro").style.left="-600%";
		document.getElementById("cinco").style.left="-500%";
		document.getElementById("seis").style.left="-400%";
		document.getElementById("sete").style.left="-300%";
		document.getElementById("oito").style.left="-200%";
		document.getElementById("nove").style.left="-100%";
		document.getElementById("dez").style.left="0px";
	}
}
function aparecerOnlyDead(n,n2){
	if(n2==1){
		document.getElementById("a"+n).style.backgroundColor="#0F3";
		document.getElementById("b"+n).style.backgroundColor="#F03";
		document.getElementById("c"+n).style.backgroundColor="#F03";
		document.getElementById("d"+n).style.backgroundColor="#F03";
	}else if(n2==2){
		document.getElementById("b"+n).style.backgroundColor="#0F3";
		document.getElementById("a"+n).style.backgroundColor="#F03";
		document.getElementById("c"+n).style.backgroundColor="#F03";
		document.getElementById("d"+n).style.backgroundColor="#F03";
	}else if(n2==3){
		document.getElementById("c"+n).style.backgroundColor="#0F3";
		document.getElementById("a"+n).style.backgroundColor="#F03";
		document.getElementById("b"+n).style.backgroundColor="#F03";
		document.getElementById("d"+n).style.backgroundColor="#F03";
	}
	else if(n2==4){
		document.getElementById("d"+n).style.backgroundColor="#0F3";
		document.getElementById("a"+n).style.backgroundColor="#F03";
		document.getElementById("b"+n).style.backgroundColor="#F03";
		document.getElementById("c"+n).style.backgroundColor="#F03";
	}
	document.getElementById("resolucao"+n).style.opacity="1";
}
function desaparecerOnlyDead(n){
		document.getElementById("a"+n).style.backgroundColor="#06C";
		document.getElementById("b"+n).style.backgroundColor="#06C";
		document.getElementById("c"+n).style.backgroundColor="#06C";
		document.getElementById("d"+n).style.backgroundColor="#06C";
	document.getElementById("resolucao"+n).style.opacity="0";
}