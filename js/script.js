/*
quando il puntatore del mouse entra nel menu faccio aprire
il dropdown e la freccia della lingua va verso l'alto
*/
$('.ms_dropdown_link').mouseenter(
  function () {
    $(this).children('.ms_dropmenu').removeClass('ms_hidden')
    $('.ms_lang i').toggleClass('fa-angle-up')
    $('.ms_lang i').toggleClass('fa-angle-down')
  }
)
/*
quando il puntatore del mouse esce dal menu faccio chiudere
il dropdown e la freccia della lingua va verso il basso
*/
$('.ms_dropdown_link').mouseleave(
  function () {
    $(this).children('.ms_dropmenu').addClass('ms_hidden')
    $('.ms_lang i').toggleClass('fa-angle-up')
    $('.ms_lang i').toggleClass('fa-angle-down')
  }
)
/*
al click sull'elemento del menu faccio chiudere/aprire il dropdown
e andare in basso/in alto la freccia della lingua
*/
$('.ms_dropdown_link').click(
  function () {
    $(this).children('.ms_dropmenu').toggleClass('ms_hidden')
    $('.ms_lang i').toggleClass('fa-angle-up')
    $('.ms_lang i').toggleClass('fa-angle-down')
  }
)
