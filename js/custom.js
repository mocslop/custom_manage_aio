	jQuery(document).ready(function(){
	// SCROLL TO DIV
		jQuery(window).scroll(function(){
			if(jQuery(this).scrollTop()>500){
				jQuery('.scrolltop').fadeIn();
			}
			else{
				jQuery('.scrolltop').fadeOut();
			}
		});
		jQuery('.scrolltop').click(function (){
		    jQuery('html, body').animate({
		      scrollTop: jQuery("header").offset().top
		    }, 1000);
		 }); 
	
		var width = jQuery(window).width();


		jQuery('body').append('<div class="show_menu_tg">Menu</div>\
			<div class="menu_tg"><h3>Menu </h3>\
			<ul>\
			<li><a href="index.html"> Trang chủ </a> </li>\
			<li><a href="bang_gia_hosting.html"> Bảng giá hosting</a> </li>\
			<li><a href="bang_gia_domain.html"> Bảng giá domain </a> </li>\
			<li><a href="lichsugiaodich.html"> Lịch sử giao dịch </a> </li>\
			<li><a href="naptien.html"> Nạp tiền </a> </li>\
			<li><a href="order_cart1.html"> Order Cart 1 </a> </li>\
			<li><a href="order_cart2.html">  Order Cart 2 </a> </li>\
			<li><a href="dangnhap.html">  Đăng nhập </a> </li>\
			<li><a href="baovetaikhoan.html">  Bảo vệ tài khoản </a> </li>\
			<li><a href="quanlytenmien.html">  Quản lý tên miền </a> </li>\
			<li><a href="cauhinh_mail1.html">  Cấu hình mail 1</a> </li>\
			<li><a href="cauhinh_mail2.html">  Cấu hình mail 2</a> </li>\
			</ul>\
			</div>');
		jQuery('.show_menu_tg').click(function(){
			jQuery('.menu_tg').toggle(300);
		});

		jQuery('.click-ul-tog').click(function(e){
			jQuery(this).find('.ul-tog').slideToggle(300).click(function(e_ul){
				e_ul.stopPropagation();
			});
			jQuery('.click-ul-tog').not(this).find('.ul-tog').hide();
		});

		// SHOP POPUP
			jQuery(" .ip_popup").click(function(e){
				jQuery('.popup_register').stop(true,true).fadeIn('300').find('.close_popup').click(function(){jQuery('.popup_register').stop(true,true).fadeOut('300');
			});
				jQuery('.popup_register').find('.content_popup').show();
				e.preventDefault();
			});
		jQuery(document).click(function(event) {
 		 //if you click on anything except the modal itself or the "open modal" link, close the modal
  		if (!jQuery(event.target).closest(".content_popup, .ip_popup, .ul-tog , .click-ul-tog").length) {
  			jQuery("body").find(".content_popup, .ul-tog").hide();
  				jQuery(".popup").fadeOut(300);
  			}
		});

	

		jQuery('.btn_chart ul li').click(function(e){
			jQuery(this).addClass('active').siblings().removeClass('active');
			e.preventDefault();
		});

		jQuery('ul.tab_change_domain li , .tab_change_hosting_parent li, ul.tab_change_bvtk li').click(function(){
		var tab_id = jQuery(this).attr('data-tab');
		jQuery('ul.tab_change_domain li, .tab_change_hosting_parent li,ul.tab_change_bvtk li').removeClass('current');
		jQuery('.tab-content').removeClass('current');
		jQuery(this).addClass('current');
		jQuery('.tab_change_hosting_child>li:first-child').addClass('current').siblings().removeClass('current');
		jQuery("#"+tab_id).addClass('current');
		jQuery('.tab_change_hosting_child+.tab-child-content').addClass('current');
		});

		jQuery('ul.tab_change_hosting_child li').click(function(){
		var tab_id = jQuery(this).attr('data-tab');
		jQuery('ul.tab_change_hosting_child li').removeClass('current');
		jQuery('.tab-child-content').removeClass('current');
		jQuery(this).addClass('current');
		jQuery("#"+tab_id).addClass('current');
		});
		

		jQuery('.icon_collapse_click').click(function(){
				jQuery(".menu-fixed").toggleClass('to_left');
				jQuery('.menu-fixed h3,.menu-fixed>ul>li>a:nth-child(1),.icon_collapse_click i.fa-bars').toggleClass('hide');
				jQuery('.menu-fixed>ul>li>a:nth-child(2),.menu-fixed ul>li p,.icon_collapse_click i.fa-arrows-alt').toggleClass('show');
				jQuery('#content').toggleClass('content_to_left');
		});

		// MENU MOBILE
		if(width<1100){
			jQuery('.menu-fixed>ul').addClass('menu');
			jQuery('.menu-fixed').addClass('menu_mobile_full');
		}
		jQuery(".icon_mobile_click").click(function(){
			jQuery(this).fadeOut(300);
			jQuery(".menu-fixed").addClass('menu_show').stop().animate({left: "0px"},260);
			jQuery(".close_menu, .bg_opacity").show();
		});
		jQuery(".close_menu").click(function(){
			jQuery(".icon_mobile_click").fadeIn(300);
			jQuery(".menu-fixed").animate({left: "-260px"},260).removeClass('menu_show');
			jQuery(this).hide();
			jQuery('.bg_opacity').hide();
		});
		jQuery('.bg_opacity').click(function(){
			jQuery(".menu-fixed").animate({left: "-260px"},260).removeClass('menu_show');
			jQuery("#page_wrapper").removeClass('page_wrapper_active');
			jQuery('.close_menu').hide();
			jQuery(this).hide();
			jQuery('.icon_mobile_click').fadeIn(300);
		});
		jQuery(".menu-fixed ul li a").click(function(){
			jQuery(".icon_mobile_click").fadeIn(300);
			jQuery("#page_wrapper").removeClass('page_wrapper_active');
		});
		jQuery('ul.menu').children().has('ul.sub-menu').click(function(){
			jQuery(this).children('ul').slideToggle();
			jQuery(this).siblings().has('ul.sub-menu').find('ul.sub-menu').slideUp();
		}).children('ul').children().click(function(event){event.stopPropagation()});
		jQuery('ul.menu').children().find('ul.sub-menu').children().has('ul.sub-menu').click(function(){
			jQuery(this).find('ul.sub-menu').slideToggle();
		});
		jQuery('ul.menu li').has('ul.sub-menu').click(function(event){
			jQuery(this).toggleClass('editBefore_mobile');
		});
		jQuery('ul.menu').children().has('ul.sub-menu').addClass('menu-item-has-children');
		jQuery('ul.menu li').click(function(){
			$(this).addClass('active').siblings().removeClass('active, editBefore_mobile');
		});



		    jQuery('.bottom-line').click(function(e){
               jQuery(this).find('.xo-ra').slideToggle();
               jQuery(this).find('input').prop('checked' , function(index,attr){
                   return attr == true ? null : 'checked';
               });
               jQuery('.bottom-line').not(this).find('.xo-ra').slideUp();

               jQuery(this).find('.xo-ra').click(function(e){
                e.stopPropagation();
            });
           }) ;
	});
