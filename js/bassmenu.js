window.onload = function() {

	
	var wrap = document.getElementById('wrap');
	var pic = document.getElementById('pic');
	var Li = document.getElementById('list').getElementsByTagName('li');
	var prev = document.getElementById('Prev');
	var next = document.getElementById('Next');
	var move = false; //没滚或滚到头
	var index = 0;
	var timer = null;
	next.onclick = function() { //右边的>
		if(move) { //如果滚动中
			return; //正在滚则退出函数
		} else { //没滚或滚到头
			index++; //index显示图向后播放

		}
		if(index >= Li.length) { //index处于倒数第二张“5”或倒数第一张图
			index = 0; //index回到第二张“1”
		}

		showlist(); //下面的点动	
		if(move == false) { //没滚
			animate(-1200); /*？？？？？？？？*/
		}
	}
	prev.onclick = function() { //左边的<
		if(move) { //如果滚动中
			return; //正在滚则退出函数
		} else { //判断其是否滚动完？     如果没滚
			index--; //index显示图向前播放
			if(index < 0) { //index处于第一张图
				index = Li.length - 1; //index处于倒数第二张“5”
			}
		}

		showlist(); //下面的点动	
		if(!move) { //判断其是否滚动完？     如果没滚
			animate(1200); /*？？？？？？？？*/
		}
	}
	for(var i = 0; i < Li.length; i++) { //选中全部下面的点
		Li[i].num = i; //所有Li[i].num = i;
		Li[i].onclick = function() { //下面的[i]点被点击触发事件函数
			if(this.className == "on") { //****如果有了on属性		
				return; //****则点击无效         
			}
			var offset = -1200 * (this.num - index); /*？？？？？？？？*/
			if(!move) { //没滚或滚到头						
				animate(offset); /*？？图片滚动事件？？*/

			}
			index = this.num; //？？index赋值为当前num
			showlist(); //下面的点动	
		}
	}
	//图片变换
	function animate(offset) { //js动画集
		move = true; //如果滚动中
		var newLeft = parseInt(pic.style.left) + offset;
		var time = 600 //位移总时间
		var interval = 20; //位移间隔时间
		var speed = offset / (time / interval); //每次位移量

		function go() { //****移动事件
			if((speed < 0 && parseInt(pic.style.left) > newLeft) || (speed > 0 && parseInt(pic.style.left) < newLeft)) {
				pic.style.left = parseInt(pic.style.left) + speed + 'px';
				setTimeout(go, interval);
			} else {
				move = false;
				pic.style.left = newLeft + 'px';
				if(newLeft > -1200) {
					pic.style.left = -6000 + 'px';
				}
				if(newLeft < -6000) {
					pic.style.left = -1200 + 'px';
				}
			}
		}
		go();
	}
	//圆点变换
	function showlist() {
		for(var i = 0; i < Li.length; i++) {
			Li[i].className = "";
		}
		Li[index].className = "on";
	}
	
	//****停止播放
	function stop() {
		clearInterval(timer);
	}
	wrap.onmouseover = stop;
	wrap.onmouseout = play;
	play();
	
			}