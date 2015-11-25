$( document ).ready(function() {

/*

	Content Toggler

*/

$('.toggle-content-trigger').on('click',function (e) {
    e.preventDefault();
});

$(".toggle-content-trigger").click(function () {
	$(this).toggleClass('active-button');
  var toggled_content_container_id = $(this).attr("href");
  $(toggled_content_container_id).slideToggle();
});

/*

	Typed

*/

$(function(){

    $("#typed").typed({
        strings: ["web applications", "web apps", "etc etc etc", "<a href='contact-us'>get in touch</a>"],
        typeSpeed: 190,
        backDelay: 700,
        loop: false,
        contentType: 'html', // or text
        // defaults to false for infinite loop
        loopCount: false,

    });

});

/*

    Flexslider

*/

$('.flexslider').flexslider({
animation: "fade"
});

/*

    Fancybox

*/


$(".fancybox").fancybox();

$(".various").fancybox({ maxWidth	: 800, maxHeight	: 600, fitToView	: false, width	: '70%', height	: '70%', autoSize	: false, closeClick	: false, openEffect	: 'none', closeEffect	: 'none' });

});
