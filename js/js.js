$(function(){
	var WW=$(window).width();
	$('.section1').css({'left':function(i){
		return i*WW;
	}})
	$(window).resize(function(){
		WW=$(window).width();
		$('.section1').css({'left':function(i){
			return i*WW;
		}})
	})
	move = (function(){
		var num = 1;
		return function(){
			$('.dian li').removeClass('btn');
			$('.dian li').eq(num).addClass('btn');
			var off = -num*WW;
			$('.section1').css({'transform':'translateX('+off+'px)'});
			num+=1;
			if(num === 3){
				num =  0;
			}
		}
	})();

	var t = setInterval(move,3000);
	//闭包 函数在定义时会记录下可见区域内的变量
	//     从近到远形成链，成为作用域链
	//     函数在调用时，整个链上的变量都是可见状态
	//     链的近端会覆盖远端变量
	//常见用法： 消除全局变量
	//           传递临时状态
	$('.dian li').each(function(i){
		$(this).data('a',i);
	})
	$('.dian li').click(function(){
		clearInterval(t);
		$('.dian li').removeClass('btn');
		$(this).addClass('btn');
		var off=-$(this).data('a')*WW;
		$('.section1').css({'transform':'translateX('+off+'px)'});
	})
})