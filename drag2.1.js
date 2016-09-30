function drag(sClass){
	var aDiv=document.getElementsByClassName(sClass);
	for (var i = 0; i < aDiv.length; i++) {
		startDrag(aDiv[i]);
	}
}

function startDrag(obj){
	obj.onmousedown=function(ev){
		var oEvt=ev||event;
		var disX=oEvt.clientX-obj.offsetLeft;
		var disY=oEvt.clientY-obj.offsetTop;
		document.onmousemove=function(ev){
			var oEvt=ev||event;
			obj.style.left=oEvt.clientX-disX+'px';
			obj.style.top=oEvt.clientY-disY+'px';
		}
		document.onmouseup=function(){
			document.onmousemove=document.onmouseup=null;//性能考虑
			obj.releaseCapture&&obj.releaseCapture();
		}

		obj.setCapture&& obj.setCapture();	//事件截获
		
		return false; //阻止默认
		
	}
}