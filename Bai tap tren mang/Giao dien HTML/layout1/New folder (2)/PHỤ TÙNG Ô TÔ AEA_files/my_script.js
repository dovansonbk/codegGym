// $(document).ready(function() { 
//    $(".menu_sub1").mCustomScrollbar({})
  
// });
//fixmenu
$(document).ready(function() {
    $(window).scroll(function() {
        if($(window).scrollTop() > 160) {
            $('#menu').addClass('fixmenu');
        } else {
            $('#menu').removeClass('fixmenu');
        }
    });   
});
$(".icon_search").click(function(){
    if(!$('#timkiem').hasClass("active_search")){
      $('#timkiem').addClass("active_search");
    }else{
      $('#timkiem').removeClass("active_search");
    }
    return false;
});

// hover-menu
$(document).ready(function() { 
	$("#menu ul li").hover(function(){
		$(this).find('ul:first').css({visibility: "visible",display: "none"}).show(300); 
		},function(){ 
		  $(this).find('ul:first').css({visibility: "hidden"});
		}); 
	$("#menu ul li").hover(function(){
			$(this).find('>a').addClass('active2'); 
		},function(){ 
			$(this).find('>a').removeClass('active2'); 
		}); 
});  
// hover-menu
///menudanhmuc
$(document).ready(function() { 
	$("#danhmuc ul li").hover(function(){
		$(this).find('ul:first').css({visibility: "visible",display: "none"}).show(300); 
		},function(){ 
		$(this).find('ul:first').css({visibility: "hidden"});
		}); 
	
});

////mobi
function doEnter2(evt){
  var key;
  if(evt.keyCode == 13 || evt.which == 13){
    onSearch2(evt);
  }
}
function onSearch2(evt) {     
  var keyword2 = document.getElementById("keyword2").value;
  if(keyword2=='' || keyword2==nhaptukhoatimkiem)
  {
    alert(nhaptukhoatimkiem);
  }
  else{
    location.href = "tim-kiem.html&keywords="+keyword2;
    loadPage(document.location);      
  }
} 
///dektop
function doEnter1(evt){
  var key;
  if(evt.keyCode == 13 || evt.which == 13){
    onSearch1(evt);
  }
}
function onSearch1(evt) {     
  var keyword1 = document.getElementById("keyword1").value;
  if(keyword1=='' || keyword1==nhaptukhoatimkiem)
  {
    alert(nhaptukhoatimkiem);
  }
  else{
    location.href = "tim-kiem.html&keywords="+keyword1;
    loadPage(document.location);      
  }
} 

$(document).ready(function($) {
  $('.nut_tim').click(function(){
    onSearch1();
  });
});
//masory-hinhanh
if(com=='thu-vien'){

    $(document).ready(function() {
        $('#gallery-wrap').imagesLoaded( function() {
	        $('#gallery-wrap').masonry({ 
	          itemSelector: '.loaded',
	           horizontalOrder: true,
	        });   
    	});
 	});

    $(document).ready(function($) {
       !(function(){
            // finally, initialize photobox on all retrieved images
            $('#grid').photobox('a', { thumbs:true, loop:false });
            // using setTimeout to make sure all images were in the DOM, before the history.load() function is looking them up to match the url hash
        })();
    }); 

}

////////menu

// $(function() {
//     $('.hien_menu').click(function(){
//       $('nav#menu_mobi').css({height: "auto"});
//     });
//     $('nav#menu_mobi').mmenu({
//       extensions  : [ 'effect-slide-menu', 'pageshadow' ],
//       searchfield : true,
//       counters  : true,
//       navbar    : {
//         title   : 'Menu'
//       },
//       navbars   : [
//         {
//           position  : 'top',
//           content   : [ 'searchfield' ]
//         }, {
//           position  : 'top',
//           content   : [
//             'prev',
//             'title',
//             'close'
//           ]
//         }, {
//           position  : 'bottom',
//           content   : [
//             '<a>Online :'+tongxem+'</a>',
//             '<a>Tổng : '+tong+'</a>'
//           ]
//         }
//       ]
//     });
//   });
////

$(document).ready(function(){
			$("#i-dc0").addClass("i-map-at");
			$("#map_canvas0").addClass("zit");
	});
function map(s,sl){
	$(document).ready(function(){
		for(i=0;i<sl;i++)
		{
			$("#i-dc"+i).removeClass("i-map-at");
			$("#i-dc"+s).addClass("i-map-at");
			$("#map_canvas"+i).removeClass("zit");
			$("#map_canvas"+s).addClass("zit");
		}
	});
}
// =============Tab
$(document).ready(function(e) {
    $('#tabs a').click(function(e) {
            var id = $(this).attr('href');
            $('#tabs li').removeClass('active');
            $(this).parent().addClass('active');
            $('#tab-2').css('position','relative');
            $('#tab-2').css('opacity','1');
            $('#tab-1,#tab-2,#tab-3,#tab-4,#tab-5,#tab-6,#tab-7').slideUp(500);
            $('#'+id).slideDown(500);
            return false;
        });
});
function isEmpty(el,text){
    //var el = document.getElementById(id);
    var str = el.value;
    
    if (str != "")
        while (str.charAt(0) == " ")
            str = str.substr(1, str.length);
    
    //return str == "" ? true : false;
    if(str != "") return false;
    if(typeof(text) != 'undefined') alert(text);
    el.value = '';
    el.focus();
    return true;
}

function isNumber(el, text){
    //var el = document.getElementById(id);
    var str = "0123456789";
    for(var j=0; j < el.val().length; j++){
        if(str.indexOf(el.val().charAt(j))==-1){
            if( typeof(text) != 'undefined' )
                alert(text);
            el.val() = '';
            el.focus(); 
            return false;
        }
    }
    return true;
}

function isPhone(el, text){
    //var el = document.getElementById(id);
    var str = "0123456789. ()-";
    var result = true;
    for(var j=0; j < el.val().length; j++){
        if(str.indexOf(el.val().charAt(j))==-1){
            result = false;
            break;
        }
    }
    if(el.val().length < 7) result = false;
    if(!result){    
        el.focus();
        if(typeof(text)!='undefined')   alert(text);
    }
    return result;
}

function check_email(email)
{
    emailRegExp = /^[_a-z0-9-]+(\.[_a-z0-9-]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.([a-z]){2,4})$/;
    return emailRegExp.test(email);
}

function isEmail(el, text){
    //var el = document.getElementById(id);
    emailRegExp = /^[_a-z0-9-]+(\.[_a-z0-9-]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.([a-z]){2,4})$/;
    if(!emailRegExp.test(el.value)){
        if(typeof(text)!='undefined')   alert(text);
        el.focus();
        return false;
    }
    return true;
}

function isEmail_2(s){   
  if (s=="") return true;//false;
  if(s.indexOf(" ")>0) return false;
  if(s.indexOf("@")==-1) return false;
  var i = 1;
  var sLength = s.length;
  if (s.indexOf(".")==-1) return false;
  if (s.indexOf("..")!=-1) return false;
  if (s.indexOf("@")!=s.lastIndexOf("@")) return false;
  if (s.lastIndexOf(".")==s.length-1) return false;
  var str="abcdefghikjlmnopqrstuvwxyz-@._"; 
  for(var j=0;j<s.length;j++)
    if(str.indexOf(s.charAt(j))==-1)
        return false;
  return true;
}

function compare(value_1, value_2){
    if(value_1 < value_2)
        return -1;
    if(value_1 > value_2)
        return 1;
    return 0;
}
///kiemtra lienhe

function recaptcha_callback(){
	 $('.btn_send_lienhe').prop("disabled", false);
	 $('.btn_send_lienhe').addClass('enable_buttom');
}

if(com=='lien-he'){
	function js_submit12(){
		if(isEmpty(document.getElementById('ten'),xinnhaphoten)){
			document.getElementById('ten').focus();
			return false;
		}
		if(isEmpty(document.getElementById('diachi'), xinnhapdiachi)){
			document.getElementById('diachi').focus();
			return false;
		}
		
		if(isEmpty(document.getElementById('dienthoai'), xinnhapdienthoai)){
			document.getElementById('dienthoai').focus();
			return false;
		}
		
		if(!isPhone($('#dienthoai'), checkdienthoai)){
			document.getElementById('dienthoai').focus();
			return false;
		}
		
		if(!check_email(document.frm.email.value)){
			alert(checkemail);
			document.frm.email.focus();
			return false;
		}
		
		if(isEmpty(document.getElementById('tieude'), xinnhaptieude)){
			document.getElementById('tieude').focus();
			return false;
		}
		
		if(isEmpty(document.getElementById('noidung'), xinnhapnoidung)){
			document.getElementById('noidung').focus();
			return false;
		}
		
		document.frm.submit();
	}
}

////chatf facebook
$(document).ready(function(){
  if($(window).innerWidth() > 992){
     $( '.taidat-messages' ).animate( { bottom: '180px' } ).animate( 
                { right: '-250px' }, 400,
                 function(){ $( '#taidat-facebook' ).css( 'opacity', 0 ) } );

     $( '#taidat-minimize' ).click( 
        function() {
         if( $( '#taidat-facebook' ).css( 'opacity' ) == 0 ) {
          $( '#taidat-facebook' ).css( 'opacity', 1 ); $( '.taidat-messages' ).animate( { right: '0' } ).animate( { bottom: '180' } );
           } else { 
            $( '.taidat-messages' ).animate( { bottom: '180px' } ).animate( 
                { right: '-250px' }, 400,
                 function(){ $( '#taidat-facebook' ).css( 'opacity', 0 ) } ); } } ) 
	}
	else{
	    $( '.taidat-messages' ).animate( { bottom: '180px' } ).animate( 
	                { right: '-250px' }, 400,
	                 function(){ $( '#taidat-facebook' ).css( 'opacity', 0 ) } );

	     $( '#taidat-minimize' ).click( 
	        function() {
	         if( $( '#taidat-facebook' ).css( 'opacity' ) == 0 ) {
	          $( '#taidat-facebook' ).css( 'opacity', 1 ); $( '.taidat-messages' ).animate( { right: '0' } ).animate( { bottom: '0' } );
	           } else { 
	            $( '.taidat-messages' ).animate( { bottom: '180px' } ).animate( 
	                { right: '-250px' }, 400,
	                 function(){ $( '#taidat-facebook' ).css( 'opacity', 0 ) } ); } } ) 
	 }

});

// PHƯƠNG THỨC LOAD KẾT QUẢ 
function goToByScroll(id_tab){
  $('html,body').animate({
      scrollTop: ($(id_tab).offset().top - 120)}, 500);
}
$(document).ready(function(){
  $.ajax
      ({
          type: "POST",
          url: "ajax_paging/ajax_paging.php",
          data: {page:1},
          success: function(msg)
          {
              $('.sanpham_tb').html(msg);         
          }
  });
  $.ajax
      ({
          type: "POST",
          url: "ajax_paging/ajax_paging2.php",
          data: {page:1},
          success: function(msg)
          {
              $('.sanpham_moi').html(msg);         
          }
  });
   $.ajax
      ({
          type: "POST",
          url: "ajax_paging/ajax_paging3.php",
          data: {page:1},
          success: function(msg)
          {
              $('.sanpham_banchay').html(msg);         
          }
  });
  
});