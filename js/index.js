function switchTabProducts(id) {
    $('.tab-'+id).addClass('active');
    $('.tab-'+id).siblings().removeClass('active');
    $('.content').addClass('d-none')
    $('#'+id).removeClass('d-none');

}