
function addMouseWheel(obj){
	var fn=function(){alert('ok')};
	if (navigator.userAgent.toLowerCase().indexOf('firefox')!=-1) {
		//给FF添加滚轮
		obj.addEventListener('DOMMouseScroll',fnWheel,false);
	}else{
		//给其他
		obj.onmousewheel=fnWheel;
	}

	function fnWheel(ev){
		var oEvt=ev||event;
		var down=false;
		if (oEvt.detail) {
			down=oEvt.detail>0?true:false;
		}else{
			down=oEvt.wheelDelta>0?false:true;
		}

		if(down){
			obj.style.height=obj.offsetHeight+10+'px';
		}else{
			obj.style.height=obj.offsetHeight-10+'px';
		};
		oEvt.preventDefault&&oEvt.preventDefault();
		return false;
	}
}