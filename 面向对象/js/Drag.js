	function Drag(id) {
		var _this = this;
		this.oDiv = document.getElementById(id);
		this.disX = 0;
		this.disY = 0;

		this.oDiv.onmousedown = function(ev){
			 _this.fnDown(ev);
			 return false;
		}
		

	}

	Drag.prototype.fnDown = function (ev){
		var _this = this;
		var oEvt = ev || event;
		this.disX = oEvt.clientX - this.oDiv.offsetLeft;
		this.disY = oEvt.clientY - this.oDiv.offsetTop;

		this.oDiv.setCapture && this.oDiv.setCapture();

		document.onmousemove = function(ev){
			_this.fnMove(ev);
		}

		document.onmouseup = function(){
			_this.fnUp();
		}

		
	}


	Drag.prototype.fnMove = function (ev){
		var oEvt = ev||event;

		this.oDiv.style.left = oEvt.clientX - this.disX + 'px';
		this.oDiv.style.top = oEvt.clientY - this.disY + 'px';
	}

	Drag.prototype.fnUp = function (){
		document.onmousemove = document.onmouseup = null;
		this.oDiv.releaseCapture && this.oDiv.releaseCapture();
	}
