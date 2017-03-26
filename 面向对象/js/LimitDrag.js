function LimitDrag(id){
	Drag.call(this,id);
}

for(var i in Drag.prototype){
	LimitDrag.prototype[i] = Drag.prototype[i];

}

LimitDrag.prototype.fnMove = function (ev){
	var oEvt = ev||event,
	l = oEvt.clientX - this.disX,
	t = oEvt.clientY - this.disY,
	clientW = document.documentElement.clientWidth,
	clientH = document.documentElement.clientHeight,
	offW = this.oDiv.offsetWidth,
	offH = this.oDiv.offsetHeight;


	if (l<50) {
		l = 0;
	}else if (l>clientW-offW-50) {
		l = clientW-offW;
	}

	if (t<50) {
		t = 0;
	}else if (t>clientH-offH-50) {
		t = clientH-offH;
	}


	this.oDiv.style.left = l + 'px';
	this.oDiv.style.top = t + 'px';
}
