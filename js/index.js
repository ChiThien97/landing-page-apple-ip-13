function switchTabProducts(id) {
    $('.tab-' + id).addClass('active');
    $('.tab-' + id).siblings().removeClass('active');
    $('.content').addClass('d-none')
    $('#' + id).removeClass('d-none');
}
$('.btn-comment').click(function(){
    $(this).addClass('active');
    $(this).siblings().removeClass('active');
    if( $(this).attr('data-source')=='facebook'){
        $('#facebook').show();
        $('#zalo').hide()
    }else{
        $('#facebook').hide();
        $('#zalo').show()
    }
})

var player = videojs('my_video_1');
player.play();

$(document).ready(function ($) {
    $('#my-form').submit(function (e) {
        e.preventDefault();
        var name = $('#name').val().trim();
        var phone = $('#phone').val().trim();
        var email = $('#email').val().trim();
        var regex = /((09|03|07|08|05)+([0-9]{8})\b)/i;
        if (phone.length > 10 || phone.length == 0) {
            alert("Quý khách vui lòng kiểm tra lại số điện thoại!");
        } else if (regex.test(phone) == false) {
            alert("Quý khách vui lòng kiểm tra lại số điện thoại!");
        } else {
            $.ajax({
                url: "https://docs.google.com/forms/u/0/d/e/1FAIpQLSeRkAVK4nx5I01ALRbFpyg2ymL7tI2hwOpOYkaPrWAN3CWPcg/formResponse",
                data: $('#my-form').serialize(),
                type: "POST",
                dataType: "json"
            });
            $('#name').addClass('d-none');
            $('#phone').addClass('d-none');
            $('#email').addClass('d-none');
            $('i.form-text').addClass('d-none');
            $('#my-form>button').addClass('d-none');
            $('#submit-success').removeClass('d-none');
        }
        return false;
    });
})
