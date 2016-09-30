
//drag
function drag(sClass){
	var aDiv=document.getElementsByClassName(sClass);
	for (var i = 0; i < aDiv.length; i++) {
		startDrag(aDiv[i]);
	}
}

function startDrag(oDiv){
	oDiv.onmousedown=function(ev){
		var oEvt=ev||event;
		var disX=oEvt.clientX-oDiv.offsetLeft;
		var disY=oEvt.clientY-oDiv.offsetTop;

		document.onmousemove=function(ev){
			var oEvt=ev||event;
			oDiv.style.left=oEvt.clientX-disX+"px";
			oDiv.style.top=oEvt.clientY-disY+"px";
		}

		document.onmouseup=function(){
			document.onmousemove=document.onmouseup=null;
			//释放
			oDiv.releaseCapture && oDiv.releaseCapture();	//释放截获
		}

		oDiv.setCapture&&oDiv.setCapture();
			return false;	//阻止默认

		if (oDiv.setCapture) {
			oDiv.setCapture();
		}

		return false;

	}

}