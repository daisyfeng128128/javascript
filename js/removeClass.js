function removeClass(obj,className){
	//若原来有class
	if (obj.className != "") {
		var arrClassName = obj.className.split(' '),
				  _index = arrIndex(arrClassName,className);

		if (_index != -1) {
			arrClassName.splice(_index,1);
			obj.className=arrClassName.join(' ');
		}
	}
}

function arrIndex(arr,v){
	for (var i = 0; i < arr.length; i++) {
		if (arr[i] == v) {
			return i;
		} 
		
	}

	return -1;
	
}