jQuery(document).ready(function($){

    /* (function cookieShowingCheck() {
        if (!sessionStorage.cookieClick) {
            $(".footer_bottm .cookie").show();
        };
    })(); */

    function setCookie(name, value, days) {
        if (days) {
            var date = new Date();
            date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
            var expires = "; expires=" + date.toGMTString();
        } else expires = "";
        document.cookie = name + "=" + value + expires + "; path=/;domain=.infinox.com";
    }

    function getCookie(cname) {
        var name = cname + "=";
        var ca = document.cookie.split(';');
        for (var i = 0; i < ca.length; i++) {
            var c = ca[i].trim();
            if (c.indexOf(name) == 0) return c.substring(name.length, c.length);
        }
        return "";
    }
    function getPar(par) {
        //获取当前URL
        var local_url = document.location.href;
        //获取要取得的get参数位置
        var get = local_url.indexOf(par + "=");
        if (get == -1) {
            return false;
        }
        //截取字符串
        var get_par = local_url.slice(par.length + get + 1);
        //判断截取后的字符串是否还有其他get参数
        var nextPar = get_par.indexOf("&");
        if (nextPar != -1) {
            get_par = get_par.slice(0, nextPar);
        }
        return get_par;
    }

    $('.c1').show();
	$(".footers .top_right>a").click(function(){
		$('body,html').animate({scrollTop:0},'slow');
	})

	$('.footer_language>a').on('click',function(e){
        $('.language_icon').slideToggle();
        $(document).one('click',function(){
            $('.language_icon').hide();
        })
        e.stopPropagation();/*stopPropagation();方法可以阻止把事件分派到其他节点*/
    })

    //跳转对应语言
    var onff = true;
    var strUrl = window.location.href;
    var arrUrl = strUrl.split("/");
   /* $('.usa_languages').click(function() {
*/
        if (onff == true) {
            $('.footer_lan a').each(function(i, val) {
                // if (i < $('.language_icon a').length + 1) { //最后一项不加//去掉了 都加
                    var aHerf = $(this).attr('href');
                    var newHerf = '';
                    for (var i = 0; i < arrUrl.length; i++) {
                        if (arrUrl[i] == '' || i < 3) { //域名
                            continue;
                        }
                        if (i == 3) {
                            newHerf += aHerf+"/"; //语言 /en/
                        } else {
                            newHerf += arrUrl[i] + '/'; //拼接
                        }

                        $(this).attr('href',newHerf); //添加href
                    }
                // }
            })
        }
        onff = false;
/*    });*/

    // cookie_ip
    $(".footer_bottm .cookie .cookie_btn").click(function(){
        $.ajax({
            type:"get",
            url:"cookie_ip.php",
            async:true,
            success:function(data){
                $(".footer_bottm .cookie").hide();
                // sessionStorage.cookieClick = true;
            }
        });
    });


	$("#menu-head-menu-1 .menu-item").click(function(){
		$(this).children('.sub-menu').slideToggle();
	})

    $(".aligncenter").parent().addClass("tac");

	// $(".mainnav>.menu-item").hover(function(){
	// 	 $(this).children('.sub-menu').addClass('active');
	// })

	$('#mobile_header_btn').click(function(){
		$(".menu_head_two").slideToggle();
	})
    $('#menu-header-menu-1 .menu-item').click(function(){
        $(this).children('.sub-menu').slideToggle();
    })

	$(window).resize(function(){
		if($(window).width()>633){
			$(".menu_head_two").hide();
		}
        if($(".small").css('display') === 'block'){
            $('.f_block').show();
            $('.f_none').hide();
        }



	})
	$('.footer_bottm .f_block').click(function(){
		$('.small, .f_block').hide();
		$('.footer_bottm .big, .footer_bottm .f_none').show();
	})
	$('.footer_bottm .f_none').click(function(){
		$('.footer_bottm .big, .footer_bottm .f_none').hide();
		$('.small, .f_block').show();
	})
    $(window).resize(function(){
        if($(window).width()>683){
            $('.c1').hide();
            $('.big').show();
        }else{
            $('.c1').show();
            $('.c1 .small').show();
            $('.big').hide();
        }
    })


	$(".aligncenter").parent().addClass("tac");
    $(".alignright").parent().addClass("tar");
    $(".alignleft").parent().addClass("tal");

    $(".faq_tab .li_tab").click(function(){
		$(this).toggleClass("bground").parent().find(".li_tip").slideToggle("slow").parent().parent().find(".close_btn").toggleClass("li_right");
		$(".close_btn").on("click",function(){$(this).removeClass("li_right").parent().find(".li_center .li_tip").slideUp("slow").siblings().removeClass("bground");})
	})


    $(".page_table .tab_ul .tab_li").eq(0).addClass("weilei").parent().parent().parent().find(".table_main").eq(0).show();
	$(".page_table .tab_ul .tab_li").click(function(){
		if(!$(this).hasClass("weilei")){
			$(this).addClass("weilei").siblings().removeClass("weilei").parent().parent().parent().find(".table_main").hide().eq($(this).index()).fadeToggle("slow","linear");
		}
	})
    // $(".icr_table .inner .forex:first-child .icr_top_title").addClass('active').next().show();
    $(".icr_top_title").click(function(){
        var index = $(this).index();

        if($(this).hasClass('active')){
            $(this).removeClass('active').next().slideUp("slow");
        }else{
            $(this).addClass('active').next().slideDown("slow");
        }
    })
    $(".icr_table .inner .icr_table_bottom .icr_close").click(function(){
        $(this).parents('.icr_table_content').slideUp("slow").prev('.icr_top_title').removeClass('active')
    })




        function isTel(tel) {
            //大陆手机号码
            var p3 = /^1[3,5,7,8,9][0-9]{9}$/;
            // 台湾手机10位，都以09开头，如0932XXXXXX
            var p1 = /^0{0,1}9[0-9]{8}$/;
            // 台湾座机号码，县市区码2-3位数（以0开头），电话号码6-8位数。如02-88888888,089-666666
            var p2 = /^0{0,1}[0-9]{1,2}[0-9]{6,8}$/;
            return p1.test(tel) || p2.test(tel) || p3.test(tel);
        }

        function isEmail(email) {
            var pattern = /^[-_A-Za-z0-9]+([-_.][_A-Za-z0-9]+)*@([A-Za-z0-9]+[-.])+[A-Za-zd]{2,5}$/;
            return pattern.test(email);
        }

        $(".partner_form .form_wrap button").click(function(){
            var flag=0;
            var name=$("#Name").val();
            var email=$("#Email").val();
            var phone_pre=$("#phone_pre").val();
            var phone=$("#Phone").val();
            var country=$("#Country").val();


            if(name!="" && name.length>0 && name.length<40){
                $('#Name').parent().parent().find('.error').addClass("af").hide();
            }else{

                $('#Name').parent().parent().find('.error').show();
                flag=1;
            }

            if(email.length>0 && isEmail(email) ){
                $("#Email").parent().parent().find('.error').hide();
            }else{
                $("#Email").parent().parent().find('.error').show();
                flag=1;
            }

            if($("#Phone").val().length>0 && isTel($('#Phone').val())){
                $("#Phone").parent().parent().find('.error').hide();
            }else{
                $("#Phone").parent().parent().find('.error').show();
                flag=1;
            }

            if(country!=""){
                $("#Country").parent().parent().find('.error').hide();
            }else{
                $("#Country").parent().parent().find('.error').show();
                flag=1;
            }

            if(flag!=1){
                $(".partner_form button").text("Loading...");

            }else{
                return false;
            }

        })


    var unique_id='',
    affiliate_id='',
    creative_id='',
    Lead_Source='',
    utm_campaign='';
    if(getPar("unique_id")&&getPar("unique_id")!=""){
        unique_id=getPar("unique_id");
        setCookie("unique_id",unique_id,30);
    }
    unique_id=getCookie("unique_id");


    if(getPar("affiliate_id")&&getPar("affiliate_id")!=""){
        affiliate_id=getPar("affiliate_id");
        setCookie("affiliate_id",affiliate_id,30);
    }
    affiliate_id=getCookie("affiliate_id");


    if(getPar("creative_id")&&getPar("creative_id")!=""){
        creative_id=getPar("creative_id");
        setCookie("creative_id",creative_id,30);
    }
    creative_id=getCookie("creative_id");

    if(getPar("Lead_Source")&&getPar("Lead_Source")!=""){
        Lead_Source=getPar("Lead_Source");
        setCookie("Lead_Source",Lead_Source,30);
    }
    Lead_Source=getCookie("Lead_Source");

    if(getPar("utm_campaign")&&getPar("utm_campaign")!=""){
        utm_campaign=getPar("utm_campaign");
        setCookie("utm_campaign",utm_campaign,30);
    }
    utm_campaign=getCookie("utm_campaign");

    // var url=$('.login.login_btn a').attr('href');
    //var url = "https://myinfinox.infinox.com/en/register";
    var url;
    var lan = $('.login.login_btn a').attr('href').split("/")[3];
    if(lan == "en"){
        url = "https://myinfinox.infinox.com/en/register";
    }else if(lan =="it"){
        url = "https://myinfinox.infinox.com/it/register";
    }else if(lan =="es"){
        url = "https://myinfinox.infinox.com/es/register";
    }else if(lan =="de"){
        url = "https://myinfinox.infinox.com/de/register";
    }else if(lan =="pt"){
        url = "https://myinfinox.infinox.com/pt/register";
    }else if(lan =="cnt"){
        url = "https://myinfinox.infinox.com/cnt/register";
    }else if(lan =="cns"){
        url = "https://myinfinox.infinox.com/cns/register";
    }else if(lan =="ar"){
        url = "https://myinfinox.infinox.com/ar/register";
    }
if(lan.length == 2){
    if(unique_id!='' && unique_id!='null'){
        url+="?unique_id="+unique_id;
    }
    if(affiliate_id!='' && affiliate_id!='null'){
        if(url.length>41){
            url+="&affiliate_id="+affiliate_id;
        }else{
            url+="?affiliate_id="+affiliate_id;
        }
    }
    if(creative_id!='' && creative_id!='null'){
        if(url.length>41){
            url+="&creative_id="+creative_id;
        }else{
            url+="?creative_id="+creative_id;
        }
    }
    if(Lead_Source!='' && Lead_Source!='null'){
        if(url.length>41){
            url+="&Lead_Source="+Lead_Source;
        }else{
            url+="?Lead_Source="+Lead_Source;
        }
    }
    if(utm_campaign!='' && utm_campaign!='null'){
        if(url.length>41){
            url+="&utm_campaign="+utm_campaign;
        }else{
            url+="?utm_campaign="+utm_campaign;
        }
    }
}
if(lan.length == 3){
    if(unique_id!='' && unique_id!='null'){
        url+="?unique_id="+unique_id;
    }
    if(affiliate_id!='' && affiliate_id!='null'){
        if(url.length>42){
            url+="&affiliate_id="+affiliate_id;
        }else{
            url+="?affiliate_id="+affiliate_id;
        }
    }
    if(creative_id!='' && creative_id!='null'){
        if(url.length>42){
            url+="&creative_id="+creative_id;
        }else{
            url+="?creative_id="+creative_id;
        }
    }
    if(Lead_Source!='' && Lead_Source!='null'){
        if(url.length>42){
            url+="&Lead_Source="+Lead_Source;
        }else{
            url+="?Lead_Source="+Lead_Source;
        }
    }
    if(utm_campaign!='' && utm_campaign!='null'){
        if(url.length>42){
            url+="&utm_campaign="+utm_campaign;
        }else{
            url+="?utm_campaign="+utm_campaign;
        }
    }
}


    // $("a[href='https://myinfinox.infinox.com/en/register']").attr("href",url);
    $('.login.login_btn a').attr('href',url)

    $(".cookie_btn").click(function(){
        $(".cookie").hide();
    });
});

