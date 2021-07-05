$(document).ready(function() {
  $('#gui').click(function() {
    nhantin();
  
  });
});
function doEnter_nhantin(evt){
    var key;
    if(evt.keyCode == 13 || evt.which == 13){
        nhantin(evt);
    }
}
function nhantin(evt) {      

    var hoten = $('.dangkymail #hotendk').val();
    var email = $('.dangkymail #emaildk').val();
    var dienthoai = $('.dangkymail #sdtdk').val();
    var noidung = $('.dangkymail #noidungdk').val();
    
    if(hoten==''){
        alert(xinnhaphoten);
        $('.dangkymail #hotendk').focus();
    }else if(email==''){
        alert(xinnhapemail);
        $('#emaildk').focus();
        return false;
    }else if (!check_email(email)){
        alert(checkemail);
        $('#emaildk').focus();
        return false;
    }else if(dienthoai==''){
        alert('Bạn chưa nhập số điện thoại');
        $('.dangkymail #sdtdk').focus();
    }else if (!isPhone($('#sdtdk'),checkdienthoai)){
        $('#sdtdk').focus();
        return false;
    }else if(noidung==''){
        alert(xinnhapnoidung);
        $('.dangkymail #noidungdk').focus();
    }
        else {
            $.ajax ({
                type: "POST",
                url: "ajax/dangky_email.php",
                data: {email:email,dienthoai:dienthoai,hoten:hoten,noidung:noidung},
                success: function(result) { 
                    if(result==0){
                        $('.dangkymail #emaildk1').attr('value','');
                        $('.dangkymail #emaildk1').focus();
                        alert(dangkythanhcong);
                    } else if(result==1){
                        alert(emaildaduocdangky);
                        $('.dangkymail #emaildk1').focus();
                    } else if(result==2){
                        alert(dangkykhongthanhcong);
                    }else if(result==4){
                        alert(count_dangky);
                    }

                }
            });
        }     
    
}      

$(document).ready(function(){
  $('.chay_tintuc').slick({
    vertical:true,//Chay dọc
    slidesToShow: 5,    //Số item hiển thị
    slidesToScroll: 1, //Số item cuộn khi chạy
    autoplay:true,  //Tự động chạy
    autoplaySpeed:3000,  //Tốc độ chạy
    speed:1000,//Tốc độ chuyển slider
    arrows:false, //Hiển thị mũi tên
    dots:false,  //Hiển thị dấu chấm
  });
});

////trangchitietsp////

$(document).ready(function(){
  $('.chayhinhcon').slick({
    //vertical:true,//Chay dọc
    slidesToShow: 4,    //Số item hiển thị
    slidesToScroll: 1, //Số item cuộn khi chạy
    autoplay:false,  //Tự động chạy
    autoplaySpeed:3000,  //Tốc độ chạy
    speed:1000,//Tốc độ chuyển slider
    arrows:false, //Hiển thị mũi tên
    dots:false,  //Hiển thị dấu chấm
  });
});
// map_nho

////tintuc
$(document).ready(function(){
  $('.chaytintuc').slick({
    vertical:true,//Chay dọc
    slidesToShow: 4,    //Số item hiển thị
    slidesToScroll: 1, //Số item cuộn khi chạy
    autoplay:true,  //Tự động chạy
    autoplaySpeed:3000,  //Tốc độ chạy
    speed:1000,//Tốc độ chuyển slider
    arrows:false, //Hiển thị mũi tên
    dots:false,  //Hiển thị dấu chấm
  });
});

///chon video
$(document).ready(function(){
    $('.slick_video a').click(function(){
        var $id = $(this).attr('href');
        if($id!=''){
          $(".content_video iframe").attr("src",$id);
      }
        return false;
    });
});   
///chayvideocon
$(document).ready(function(){
  $('.slick_video').slick({
    vertical:true,//Chay dọc
    slidesToShow: 3,    //Số item hiển thị
    slidesToScroll: 1, //Số item cuộn khi chạy
    autoplay:true,  //Tự động chạy
    autoplaySpeed:3000,  //Tốc độ chạy
    speed:1000,//Tốc độ chuyển slider
    arrows:false, //Hiển thị mũi tên
    dots:false,  //Hiển thị dấu chấm
  });
});
///doitac
$(document).ready(function(){
  $('.chaydoitac').slick({
    //vertical:true,//Chay dọc
    slidesToShow: 7,    //Số item hiển thị
    slidesToScroll: 1, //Số item cuộn khi chạy
    autoplay:true,  //Tự động chạy
    autoplaySpeed:3000,  //Tốc độ chạy
    speed:1000,//Tốc độ chuyển slider
    arrows:true, //Hiển thị mũi tên
    dots:false,  //Hiển thị dấu chấm
  });
});
$(document).ready(function(){
  $('.chay_sanphambanchay').slick({
    vertical:true,//Chay dọc
    slidesToShow: 4,    //Số item hiển thị
    slidesToScroll: 1, //Số item cuộn khi chạy
    autoplay:true,  //Tự động chạy
    autoplaySpeed:3000,  //Tốc độ chạy
    speed:1000,//Tốc độ chuyển slider
    arrows:false, //Hiển thị mũi tên
    dots:false,  //Hiển thị dấu chấm
  });
});



