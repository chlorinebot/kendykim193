jQuery(document).ready(function () { jQuery(window).scroll(function () { if (($(".home-dot").hasClass("set") == false) && (jQuery(this).scrollTop() > 3500)) { $(".home-dot").addClass("set"); $.ajax({ type: "GET", url: '/api/home/homeBlock.asmx/values?pid=' + 0 + "&setupKey=HOMEBLOCK_SLIDE_WITHDOT", success: function (data) { var json = $.parseJSON($(data).find("string").text()); if (json.data) { $(".home-dot").html(json.data); }; }, }); } }); });