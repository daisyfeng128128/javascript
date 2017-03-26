function getStyle(obj,attr){
	return obj.currentStyle ? obj.currentStyle[attr] : getComputedStyle(obj)[attr];

}
function move(obj,attr,dir,target,endFn) {
	dir=parseInt(getStyle(obj,attr))<target ? dir : -dir;

	clearInterval(obj.timer);
	obj.timer=setInterval(function(){

		var speed=parseInt(getStyle(obj,attr))+dir;

    	if (speed > target && dir >0 || speed < target && dir <0) {
    		speed=target;
    	}

    	if (speed==target) {
    		clearInterval(obj.timer);

    		// if (endFn) {
    		// 	endFn()
    		// }
    		endFn && endFn();
    	}

		obj.style[attr]=speed+"px";
	},40)

}
