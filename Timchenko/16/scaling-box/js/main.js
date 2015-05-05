$(function(){
	scaleBox();
});

function scaleBox(){
	var holder = $('#wrapper');
	var holderPadding = (holder.outerWidth() - holder.width())/2;
	var block = $('.box');
	var blockCurrentWidth;
	var blockCurrentHeight;
	var blockNewWidth;
	var blockNewHeight;
	var btn = $('.btn')
	var btnPositionTop;
	var btnPositionLeft;
	var pos;
	var elem_left;
	var elem_top;
	var Xinner;
	var Yinner;


	btn.on("mousedown", function() {
		holder.on("mousemove", positionEleemt)
	});

	btn.on('mouseup', function(){
		holder.off("mousemove", positionEleemt)
	})

	function positionEleemt(e){
		// положение элемента
		pos = $(this).offset();
		elem_left = pos.left;
		elem_top = pos.top;
		// положение курсора внутри элемента
		Xinner = e.pageX - elem_left;
		Yinner = e.pageY - elem_top;
		console.log("X: " + Xinner + " Y: " + Yinner); // вывод результата в консоль

		moveBlock();
		searchValues();
	};

	function searchValues() {
		blockCurrentWidth = block.width();
		blockCurrentHeight = block.height();
		console.log('Block size: ' + blockCurrentWidth + ' x ' + blockCurrentHeight);
		btnPositionTop = btn.offset().top;
		btnPositionLeft = btn.offset().left;
	};
	



	function moveBlock(){
		blockNewWidth = blockCurrentWidth + (Xinner - blockCurrentWidth) - holderPadding + (btn.width() / 2);
		blockNewHeight = blockCurrentHeight + (Yinner - blockCurrentHeight) - holderPadding + (btn.height() / 2);

		block.width(blockNewWidth);
		block.height(blockNewHeight);
	};
};












