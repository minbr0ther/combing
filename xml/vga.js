var count=0;             // 전체 레코드 개수를 위한 전역 변수
var Doc;                 // XML 문서 DOM 복합 객체 참조를 위한 전역 변수
var i, tagList ='', company='', name='', minprice='', maxprice='';

$(document).ready(function() { 
	$('.btn-group > #vga').click(function() {
		$.ajax({
			url: 'xml/vga.xml', 
			type: 'get',
			dataType: 'xml',
			timeout: 1000,
			success: function(xmlDoc) {
				Doc=xmlDoc;						  // 전역변수 초기화	
				count = $(xmlDoc).find('vga').length;
				displayVga();					  // vga 정보를 표시	
			}, 
			error: function() {
				console.log("에러라능");
				$('body').html('<div>Error!!</div>');
			}
		});
	});
		
	// 부품 정보를 테이블로 표시			
	function displayVga() {
		$('#TableArea').empty();
		if(count >0){
			for(i = 0; i<count; i+=1){
				$record = $(Doc).find('vga').eq(i);
				tagList='<table class="listTable">';
				tagList += '<tr> <td> <img src="xml/'+$record.find('picture').text() + '"></td> </tr>';
				tagList += '<tr> <td class="model">' + $record.find('name').text() + '</td> </tr>';
				tagList += '<tr> <td class="price">' + $record.find('minprice').text() + ' ₩ </td> </tr>';
				tagList += '</table>';
				$('#TableArea').append(tagList);
			}
		};
	};	
});	
