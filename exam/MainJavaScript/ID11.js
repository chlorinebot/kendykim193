jQuery(document).ready(function () { jQuery(window).scroll(function () { if (($(".home-5news-vertical").hasClass("set") == false) && (jQuery(this).scrollTop() > 1000)) { $(".home-5news-vertical").addClass("set"); $.ajax({ type: "GET", url: '/api/home/homeBlock.asmx/values?pid=' + 0 + "&setupKey=HOMEBLOCK_5NEWS_VERTICAL", success: function (data) { var json = $.parseJSON($(data).find("string").text()); if (json.data) { $(".home-5news-vertical").html(json.data); }; }, }); } }); });