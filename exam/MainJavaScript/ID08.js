jQuery(document).ready(function () { jQuery(window).scroll(function () { if (($(".home-5news-horizontal").hasClass("set") == false) && (jQuery(this).scrollTop() > 400)) { $(".home-5news-horizontal").addClass("set"); $.ajax({ type: "GET", url: '/api/home/homeBlock.asmx/values?pid=' + 0 + "&setupKey=HOMEBLOCK_5NEWS_HORIZONTAL", success: function (data) { var json = $.parseJSON($(data).find("string").text()); if (json.data) { $(".home-5news-horizontal").html(json.data); }; }, }); } }); });