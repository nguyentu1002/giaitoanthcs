jQuery.noConflict();
function openweb(p_strLink)
{
	if(p_strLink)
	{
		window.location.href = p_strLink;
	}
}

function setCookie(cname, cvalue, exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    var expires = "expires="+ d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

function getCookie(cname) {
    var name = cname + "=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(';');
    for(var i = 0; i <ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}

function doSearch(input_id, input_type)
{
	var strKey = document.getElementById(input_id).value;
	if(strKey=='')
	{
		alert("Vui lòng nhập từ khóa!");
		document.getElementById(input_id).focus();
		return false;
	}
	var strKeyOrigin = strKey;
	var strKeyNoVN = locdau(jQuery.trim(strKey));
	strKey = strKey.replace(/\s+/g, '+').toLowerCase();//chuyen khoang trang thanh dau +
	var txtModuleSearch = document.getElementById(input_type).value;
	if(txtModuleSearch=='hoi-dap')
		var strURL = DOMAIN + "tim-kiem/hoi-dap/" + jQuery.trim(strKey.replace("tag:","")) + ".html";
	else if(txtModuleSearch=='tu-lieu')
		var strURL = DOMAIN + "tim-kiem/tu-lieu/" + jQuery.trim(strKey.replace("tag:","")) + ".html";
	else
		var strURL = DOMAIN + "tim-kiem/bai-hoc/" + jQuery.trim(strKey.replace("tag:","")) + ".html";
	window.location.href = strURL;
}

function locdau(str)
{
  str= str.toLowerCase();
  str= str.replace(/à|á|ạ|ả|ã|â|ầ|ấ|ậ|ẩ|ẫ|ă|ằ|ắ|ặ|ẳ|ẵ/g,"a");
  str= str.replace(/è|é|ẹ|ẻ|ẽ|ê|ề|ế|ệ|ể|ễ/g,"e");
  str= str.replace(/ì|í|ị|ỉ|ĩ/g,"i");
  str= str.replace(/ò|ó|ọ|ỏ|õ|ô|ồ|ố|ộ|ổ|ỗ|ơ|ờ|ớ|ợ|ở|ỡ/g,"o");
  str= str.replace(/ù|ú|ụ|ủ|ũ|ư|ừ|ứ|ự|ử|ữ/g,"u");
  str= str.replace(/ỳ|ý|ỵ|ỷ|ỹ/g,"y");
  str= str.replace(/đ/g,"d");
  str= str.replace(/!|@|%|\^|\*|\(|\)|\+|\=|\<|\>|\?|\/|,|\.|\:|\;|\'| |\"|\&|\#|\[|\]|~|$|_/g,"-");
/* tìm và thay thế các kí tự đặc biệt trong chuỗi sang kí tự - */
  str= str.replace(/-+-/g,"-"); //thay thế 2- thành 1-
  str= str.replace(/^\-+|\-+$/g,"");
//cắt bỏ ký tự - ở đầu và cuối chuỗi
  return str;
}

var isScrollLeft = 1;
var intPosScrollDF = -1;
var hCateCol	= 0;

var $strLinkHrefModalAlert = ""; //-- link khi tat modal
jQuery(function($){
	///--- new
	var mobile_max_width =  767; // Media max width for mobile
  var main_navigation = jQuery('.main-navigation');
  var navigation_menu = jQuery('.main-navigation .navigation-menu');
  var stite_header    = jQuery( '.wrapheader' );
	// Initialise Menu Toggle
  $('.nav-toggle').on('click', function(e)
  {
      e.preventDefault();
      jQuery('#nav-toggle').toggleClass('nav-is-visible');
      main_navigation.toggleClass('nav-is-visible');
      navigation_menu.toggleClass("onepress-menu-mobile");
      jQuery('.header-widget').toggleClass("header-widget-mobile");
      if ( navigation_menu.hasClass( 'onepress-menu-mobile' ) && jQuery( window).width() <= mobile_max_width )
      {
          var h = jQuery( window).height( ) - stite_header.height();
          navigation_menu.css( {
              "max-height": h,
              "overflow": 'auto',
				 			"z-index": '1000'
          });
					main_navigation.css( {
						//top : stite_header.height(),
						top : '0px',
					});
					jQuery("body").addClass("hidden-y");

    	}
      else
      {
        navigation_menu.removeAttr( 'style' );
        main_navigation.removeAttr( 'style' );
				jQuery("body").removeClass("hidden-y");
      }
  });

	$('#site-navigation').on('click', function(e){
		if (!jQuery(e.target).parents().andSelf().is('.navigation-menu')) {
			e.preventDefault();
			jQuery('#nav-toggle').toggleClass('nav-is-visible');
			main_navigation.toggleClass('nav-is-visible');
			navigation_menu.toggleClass("onepress-menu-mobile");
			jQuery('.header-widget').toggleClass("header-widget-mobile");
			if ( navigation_menu.hasClass( 'onepress-menu-mobile' ) && jQuery( window).width() <= mobile_max_width ) {
				var h = jQuery( window).height( ) - stite_header.height();
				navigation_menu.css( {
					"max-height": h,
					 "overflow": 'auto',
					 "z-index": '1000'
				});
				main_navigation.css( {
					//top : stite_header.height(),
					top : '0px',
				});
				jQuery("body").addClass("hidden-y");


			} else {
				navigation_menu.removeAttr( 'style' );
				main_navigation.removeAttr( 'style' );
				jQuery("body").removeClass("hidden-y");
			}
		}
	})

    jQuery( window).resize( function(){
        if ( navigation_menu.hasClass( 'onepress-menu-mobile' ) && jQuery( window).width() <= mobile_max_width ) {
            var h = jQuery( window).height( ) - stite_header.height();
            navigation_menu.css( {
                "max-height": h,
                overflow: 'auto',
            });
			main_navigation.css( {
				top : stite_header.height(),
			});
			jQuery("body").addClass("hidden-y");
        } else {
			jQuery('#nav-toggle').removeClass('nav-is-visible');
			main_navigation.removeClass('nav-is-visible');
			navigation_menu.removeClass("onepress-menu-mobile");
            navigation_menu.removeAttr( 'style' );
			 main_navigation.removeAttr( 'style' );
			jQuery("body").removeClass("hidden-y");
        }
    } );

    jQuery('.onepress-menu li.menu-item-has-children, .onepress-menu li.page_item_has_children').each( function() {
        jQuery(this).prepend('<div class="nav-toggle-subarrow"><i class="fa fa-angle-down"></i></div>');
    });

    jQuery('.nav-toggle-subarrow, .nav-toggle-subarrow .nav-toggle-subarrow').click(
        function () {
            jQuery(this).parent().toggleClass("nav-toggle-dropdown");
        }
    );
	// END Initialise Menu Toggle


	if ( jQuery('.cate-col-right').length && jQuery('.cate-col-left').length)
	{
		var hRight = jQuery('.cate-col-right').height() + parseInt(jQuery('.cate-col-right').css("padding-top").replace("px", "")) + parseInt(jQuery('.cate-col-right').css("padding-bottom").replace("px", ""));
		var hLeft = jQuery('.cate-col-left').height() + parseInt(jQuery('.cate-col-left').css("padding-top").replace("px", "")) + parseInt(jQuery('.cate-col-left').css("padding-bottom").replace("px", ""));

		//console.log("hRight ="+hRight);console.log("hLeft ="+hLeft);

		if (hRight <= hLeft)
		{
			jQuery('.cate-col-right').css("min-height", hLeft+"px");
			isScrollLeft = 0;
		}
	}

	if ( jQuery('.box-scroll-left').length )
	{
		intPosScrollDF  = jQuery('.box-scroll-left').offset().top;
	}

	jQuery('.list-timeline .item[data-scroll="true"]').click(function(){
		var id = jQuery(this).attr("data-id");
		var scroll_top =  jQuery('.list-content-chuong li[data-id="'+id+'"]').offset().top;
		console.log("id="+id);
		console.log("scroll_top="+scroll_top);
		jQuery('html,body').animate({ scrollTop: scroll_top }, 'slow');
	});

	jQuery( window ).resize(function() {
		if (jQuery('.box-scroll-left').length )
		{
			intPosScrollDF  = jQuery('.box-scroll-left').offset().top;
		}
	});

	intPosFooter = 0;
	if ( jQuery('#boxfooter').length )
  	intPosFooter = jQuery('#boxfooter').offset().top;

  if ( jQuery('#break_300x60').length )
  	intPosFooter = jQuery('#break_300x60').offset().top;

	$(window).on('scroll', function()
	{
		var scroll_top = jQuery(window).scrollTop();
		//console.log("scroll_top = "+scroll_top);
		//console.log("intPosScrollDF = "+intPosScrollDF);

		if ( jQuery('.box-scroll-left').length && jQuery(window).width()>767 )
		{
			//if (scroll_top >= intPosScrollDF && isScrollLeft)
      if (scroll_top >= intPosScrollDF && isScrollLeft && ((scroll_top+800) < intPosFooter))
			{
				jQuery('#scroll-left').addClass("is-scroll-abs");
        jQuery('#scroll-left2').addClass("is-scroll-abs");

				var top = scroll_top - (intPosScrollDF - 50);
        var top2 = top + 380;
				jQuery('#scroll-left').css("top",top+"px");
        jQuery('#scroll-left2').css("top",top2+"px");
         //console.log(scroll_top+'/sc2='+(scroll_top+800)+'/intPosFooter1='+intPosFooter);
			}
			else
			{
				jQuery('#scroll-left').removeClass("is-scroll-abs");
				jQuery('#scroll-left').css("top","0px");
        jQuery('#scroll-left2').css("top","380px");
			}
		}
	});

	$("#modalAlert").on('hidden.bs.modal', function ()
	{
		if ($strLinkHrefModalAlert == "reload")
		{
			window.location.href = window.location.href;
		}
		else if ($strLinkHrefModalAlert != "")
		{
			window.location.href = $strLinkHrefModalAlert;
		}
    });

	jQuery('.left-collapse .cate-title').click(function(e){
		//jQuery(this).parent(".left-collapse").toggleClass("open");
		console.log("111111");
		e.stopPropagation();

		var parent = jQuery(this).closest('.left-collapse');

		if(parent.hasClass('open')) {
			parent.removeClass('open');
			jQuery("body").removeClass("hidden-y");

		}
		else{
			parent.addClass('open');
			jQuery("body").addClass("hidden-y");
		}
	});

	jQuery('.left-collapse .cate-col-left').click(function(e){
		if (!jQuery(e.target).parents().andSelf().is('.scroll-left ')) {
			var parent = jQuery(this).closest('.left-collapse');

			if(parent.hasClass('open')) {
				parent.removeClass('open');
				jQuery("body").removeClass("hidden-y");

			}
			else{
				parent.addClass('open');
				jQuery("body").addClass("hidden-y");
			}
		}
	});

	jQuery('.content-fck,.dCP,.box-activity,.list-content-cauhoi').bind('copy paste',function(e) {
		e.preventDefault();
		return false;
	});

});

//-- faq
function updateFollowFaq(obj)
{
	intFaqID = jQuery(obj).attr("data-id");
	if (intFaqID > 0)
	{
		jQuery.ajax({
			type: "POST",
			url: DOMAIN + "hoidap/followfaq",
			data: {	id : intFaqID },
			success: function(data)
			{
				isFollow = jQuery(obj).attr("data-follow");
				intNumFollow = parseInt(jQuery(obj).attr("data-value"));
				strTitle = jQuery(obj).attr("title");

				//console.log(data);
				if(data==1)
				{
					isModalAlert = 0;
					if (isFollow==1)
					{
						isFollow = 0;
						intNumFollow = intNumFollow - 1;
						strTitle = "Bấm nút này để theo dõi câu hỏi này.";
						strContent = "Bạn đã hủy theo dõi câu hỏi này.";
						jQuery(obj).removeClass("i-answer");
						jQuery(obj).children('input[type="checkbox"]').prop("checked", false);
						isModalAlert = 1;
					}
					else
					{
						isFollow = 1;
						intNumFollow = intNumFollow + 1;
						strTitle = "Bấm nút này hủy theo dõi câu hỏi này.";
						strContent = "Bạn đang theo dõi câu hỏi này.";
						jQuery(obj).addClass("i-answer");
						jQuery(obj).children('input[type="checkbox"]').prop("checked", true);
					}

					if (intNumFollow<0)
					{
						intNumFollow = 0;
					}

					jQuery(obj).attr("data-value", intNumFollow);
					jQuery(obj).children('.faq_num_follow').html(intNumFollow);

					jQuery(obj).attr("data-follow", isFollow);
					jQuery(obj).attr("title", strTitle);




					if (isModalAlert == 1)
					{
						modalAlert(strContent, "Thông báo", "", "");
					}


					//window.location.href = window.location.href;
					return true;
				}
				else
				{
					modalAlert('Bạn theo dõi câu hỏi không thành công. Vui lòng tải lại trang.', "Thông báo", "", "reload");
					//window.location.href = window.location.href;
					return false;
				}
			}
		})
		.fail(function() {
			modalAlert('Bạn theo dõi câu hỏi không thành công. Vui lòng tải lại trang.', "Thông báo", "", "reload");
			//window.location.href = window.location.href;
			return false;
		});
	}
}
//-- END faq

//-- add faq
function loadSlSubject(elmentsl, codeSubject)
{
	if (elmentsl != "")
	{
		jQuery.ajax({
			type: "POST",
			url: DOMAIN + "hoidap/loadslsubject",
			data: {	code : codeSubject },
			success: function(data)
			{
				jQuery('#'+elmentsl).html(data);
			}
		})
		.fail(function() {
			//modalAlert('Không load dc danh sách lớp học box thêm câu hỏi.', "Thông báo", "", "reload");
			return false;
		});
	}

}

function loadSlGrade(elmentsl, codeGrade)
{
	if (elmentsl != "")
	{
		jQuery.ajax({
			type: "POST",
			url: DOMAIN + "hoidap/loadslgrade",
			data: {	code : codeGrade },
			success: function(data)
			{
				jQuery('#'+elmentsl).html(data);
			}
		})
		.fail(function() {
			//modalAlert('Không load dc danh sách lớp học box thêm câu hỏi.', "Thông báo", "", "reload");
			return false;
		});
	}

}

function loadSLLession(elmentsl, codeSubject, codeGrade, value)
{
	if (elmentsl != "" && codeSubject != "" && codeGrade != "")
	{
		jQuery.ajax({
			type: "POST",
			url: DOMAIN + "hoidap/loadsllession",
			data: {	s_code : codeSubject
					, g_code : codeGrade
					, l_id : value
			},
			success: function(data)
			{
				if (data == "-1")
				{
					var parent = jQuery('#'+elmentsl).closest('.form-group');
					parent.addClass("hidden");
					jQuery('#'+elmentsl).html("");
					console.log(parent);
				}
				else
				{
					var parent = jQuery('#'+elmentsl).closest('.form-group');
					parent.removeClass("hidden");
					jQuery('#'+elmentsl).html(data);
				}
			}
		})
		.fail(function() {
			//modalAlert('Không load dc danh sách bài học box thêm câu hỏi.', "Thông báo", "", "reload");
			return false;
		});
	}

}
//-- END add faq


//-- faqans
function reloadListFaqans(intFaqansID, valueSort)
{
	if (intFaqansID > 0)
	{
		jQuery.ajax({
			type: "POST",
			url: DOMAIN + "hoidap/boxfaqanslist",
			data: {
				id 	: intFaqansID
				, o : 	valueSort
			},
			success: function(data)
			{
				//console.log(data);
				jQuery("#list-answer-box-"+intFaqansID).html(data);
			}
		})
		.fail(function() {
			//modalAlert('Bạn Like câu trả lời không thành công. Vui lòng tải lại trang.', "Thông báo", "", "reload");
			//window.location.href = window.location.href;
			//return false;
		});
	}

}


function updateLikeFaqans(obj)
{
	intFaqansID = jQuery(obj).attr("data-id");
	if (intFaqansID > 0)
	{
		jQuery.ajax({
			type: "POST",
			url: DOMAIN + "hoidap/likefaqans",
			data: {	id : intFaqansID },
			success: function(data)
			{
				isLike = jQuery(obj).attr("data-like");
				intNumLike = parseInt(jQuery(obj).attr("data-value"));
				strTitle = jQuery(obj).attr("title");

				//console.log(data);
				if(data==1)
				{
					if (isLike==1)
					{
						isLike = 0;
						intNumLike = intNumLike - 1;
						strTitle = "Bấm nút này để theo dõi câu hỏi này.";
						strContent = "Bạn đã hủy Like câu trả lời này.";
						jQuery(obj).removeClass("i-answer");
						//jQuery(obj).children('input[type="checkbox"]').prop("checked", false);
					}
					else
					{
						isLike = 1;
						intNumLike = intNumLike + 1;
						strTitle = "Bấm nút này hủy theo dõi câu hỏi này.";
						strContent = "Bạn đã Like câu trả lời này.";
						jQuery(obj).addClass("i-answer");
						//jQuery(obj).children('input[type="checkbox"]').prop("checked", true);
					}

					if (intNumLike<0)
					{
						intNumLike = 0;
					}

					jQuery(obj).attr("data-value", intNumLike);
					jQuery(obj).children('.faq_num_like').html(intNumLike);

					jQuery(obj).attr("data-like", isLike);
					jQuery(obj).attr("title", strTitle);

					//modalAlert(strContent, "Thông báo", "", "");
					//window.location.href = window.location.href;
					return true;
				}
				else
				{
					modalAlert('Bạn Like câu trả lời không thành công. Vui lòng tải lại trang.', "Thông báo", "", "reload");
					//window.location.href = window.location.href;
					return false;
				}
			}
		})
		.fail(function() {
			modalAlert('Bạn Like câu trả lời không thành công. Vui lòng tải lại trang.', "Thông báo", "", "reload");
			//window.location.href = window.location.href;
			return false;
		});
	}
}

function showEditFaqAnswer(intFaqAnswerID)
{
	jQuery(".list-answer-box .item-answer[data-id="+intFaqAnswerID+"]").addClass("is-edit");
	var strDataDefault = jQuery(".list-answer-box .item-answer #answer-content-"+intFaqAnswerID).html();

	var p_intEditorID = "edit_faq_answer_"+intFaqAnswerID;
	jQuery("#"+p_intEditorID).html(strDataDefault);

	//console.log(strDataDefault);
	loadFCK(p_intEditorID);
}

function closeEditFaqAnswer(intFaqAnswerID)
{
	jQuery(".list-answer-box .item-answer[data-id="+intFaqAnswerID+"]").removeClass("is-edit");
	var p_intEditorID = "edit_faq_answer_"+intFaqAnswerID;
	var strDataDefault = jQuery(".list-answer-box .item-answer #answer-content-"+intFaqAnswerID).data();
	//var strDataDefault = "";
	closeFCK(p_intEditorID);
}

function editFaqAnswer(intFaqAnswerID)
{
	var p_intEditorID = "edit_faq_answer_"+intFaqAnswerID;
	faq_answer  = CKEDITOR.instances[p_intEditorID].getData();

	faq_answer = faq_answer.trim();

	if( getLengthFCK(faq_answer) < 10)
	{
		//alert();

		modalAlert('Vui lòng nhập nội dung câu trả lời ít nhất 10 kí tự!', "Thông báo", "Đóng", "");	// strContent, strTitle, strBtn, strLinkHref

		CKEDITOR.instances[p_intEditorID].focus();
		return false;
	}
	else
	{
		console.log(faq_answer);
		jQuery.ajax({
			type: "POST",
			url: DOMAIN + "hoidap/editfaqanswer",
			data: {	id_ans : intFaqAnswerID
					, ans_content : faq_answer },
			success: function(data)
			{
				console.log(data);
				if(data==1)
				{
					modalAlert('Bạn đã sửa câu trả lời thành công.', "Sửa câu hỏi thành công", "", "reload");
					//window.location.href = window.location.href;
					return true;
				}
				else
				{
					modalAlert('Bạn sửa câu trả lời thất bại. Vui lòng thử lại sau', "Sửa câu hỏi thất bại", "", "reload");
					//window.location.href = window.location.href;
					return false;
				}
			}
		});
	}
	return false;
}
//-- END faqans

//-- modal
function modalAlert(strContent, strTitle, strBtn, strLinkHref)	//-- modal thong bao
{
	if (strContent != "")
	{
		$strLinkHref = "";
		if(strLinkHref != "")
		{
			$strLinkHrefModalAlert = strLinkHref;
		}

		//-- df
		jQuery('#modalAlert .modal-title').html("Thông báo");
		jQuery('#modalAlert .modal-footer .i-btn').html("Đóng");

		jQuery('#modalAlert .modal-body .i-content').html(strContent);
		if (strTitle != "")
		{
			jQuery('#modalAlert .modal-title').html(strTitle);
		}
		if (strBtn != "")
		{
			jQuery('#modalAlert .modal-footer .i-btn').html(strBtn);
		}

		jQuery("#modalAlert").modal({
			show: true,
		});
		//jQuery("#modalAlert").modal();

	}
}

function dangnhapsudung()
{
	//var $htmlModalDangnhapsudung = '<div class="modal fade bs-example-modal-sm" id="ModalDangnhapsudung" role="dialog"><div class="modal-dialog modal-sm"><div class="modal-content"><div class="modal-header"><button type="button" class="close" data-dismiss="modal">&times;</button><h4 class="modal-title">Modal Header</h4></div><div class="modal-body"><p>Some text in the modal.</p></div><div class="modal-footer"><button type="button" class="btn btn-default" data-dismiss="modal">Close</button></div></div></div></div>';
	//jQuery('body').append($htmlModalDangnhapsudung);

    jQuery("#modal-dangnhap-sudung").modal({
		show: true,
	});
}
//-- END modal


//-- FCK
function loadFCK(p_intEditorID, p_width, p_height)
{
	if(p_width=='')  p_width='100%';
	if(p_height=='') p_height='120';
	var editorquestion = CKEDITOR.replace( p_intEditorID, {
		on: {
			instanceReady: function() {
				this.document.appendStyleSheet( STATIC+'templates/version1/default/css/bootstrap-3.3.5/css/bootstrap.min.css' );
				this.document.appendStyleSheet( STATIC+'templates/version1/default/css/bootstrap-3.3.5/css/bootstrap-theme.min.css' );
				this.document.appendStyleSheet( STATIC+'templates/version1/default/css/general.css' );
				this.document.appendStyleSheet( STATIC+'templates/version1/default/css/reset.css' );
				this.document.appendStyleSheet( STATIC+'templates/version1/default/css/style.css' );
				}
			},
		width: p_width,
		height: p_height,
		toolbar : [
					['EqnEditor','Bold','Italic','Underline','RemoveFormat','-','Subscript','Superscript','NumberedList','BulletedList','Link','Unlink']
					, ['Image','Smiley','SpecialChar']
				  ],
		});
}
function closeFCK(p_intEditorID, strDataDefault)
{
	if ( CKEDITOR.instances[p_intEditorID] )
	{
		if (strDataDefault !="")
		{
			CKEDITOR.instances[p_intEditorID].setData(strDataDefault);
		} else
		{
			CKEDITOR.instances[p_intEditorID].setData("");
		}

		//CKEDITOR.instances[p_intEditorID].setData("");

		CKEDITOR.instances[p_intEditorID].destroy();
	}

}

function getLengthFCK(fck_content)
{
	fck_content = fck_content.trim();
	//console.log("value="+value);

	fck_content = strip_tags(fck_content);
	fck_content = fck_content.replace(/&nbsp;/g,"");
	fck_content = fck_content.replace(/&nbsp;/g,"");
	fck_content = fck_content.replace(/ /g,"");
	fck_content = fck_content.trim();

	return fck_content.length;

}
//-- END FCK

function strip_tags (input, allowed) { // eslint-disable-line camelcase
  //  discuss at: http://locutus.io/php/strip_tags/
  // original by: Kevin van Zonneveld (http://kvz.io)
  // improved by: Luke Godfrey
  // improved by: Kevin van Zonneveld (http://kvz.io)
  //    input by: Pul
  //    input by: Alex
  //    input by: Marc Palau
  //    input by: Brett Zamir (http://brett-zamir.me)
  //    input by: Bobby Drake
  //    input by: Evertjan Garretsen
  // bugfixed by: Kevin van Zonneveld (http://kvz.io)
  // bugfixed by: Onno Marsman (https://twitter.com/onnomarsman)
  // bugfixed by: Kevin van Zonneveld (http://kvz.io)
  // bugfixed by: Kevin van Zonneveld (http://kvz.io)
  // bugfixed by: Eric Nagel
  // bugfixed by: Kevin van Zonneveld (http://kvz.io)
  // bugfixed by: Tomasz Wesolowski
  //  revised by: Rafał Kukawski (http://blog.kukawski.pl)
  //   example 1: strip_tags('<p>Kevin</p> <br /><b>van</b> <i>Zonneveld</i>', '<i><b>')
  //   returns 1: 'Kevin <b>van</b> <i>Zonneveld</i>'
  //   example 2: strip_tags('<p>Kevin <img src="someimage.png" onmouseover="someFunction()">van <i>Zonneveld</i></p>', '<p>')
  //   returns 2: '<p>Kevin van Zonneveld</p>'
  //   example 3: strip_tags("<a href='http://kvz.io'>Kevin van Zonneveld</a>", "<a>")
  //   returns 3: "<a href='http://kvz.io'>Kevin van Zonneveld</a>"
  //   example 4: strip_tags('1 < 5 5 > 1')
  //   returns 4: '1 < 5 5 > 1'
  //   example 5: strip_tags('1 <br/> 1')
  //   returns 5: '1  1'
  //   example 6: strip_tags('1 <br/> 1', '<br>')
  //   returns 6: '1 <br/> 1'
  //   example 7: strip_tags('1 <br/> 1', '<br><br/>')
  //   returns 7: '1 <br/> 1'

  // making sure the allowed arg is a string containing only tags in lowercase (<a><b><c>)
  allowed = (((allowed || '') + '').toLowerCase().match(/<[a-z][a-z0-9]*>/g) || []).join('')

  var tags = /<\/?([a-z][a-z0-9]*)\b[^>]*>/gi
  var commentsAndPhpTags = /<!--[\s\S]*?-->|<\?(?:php)?[\s\S]*?\?>/gi

  return input.replace(commentsAndPhpTags, '').replace(tags, function ($0, $1) {
    return allowed.indexOf('<' + $1.toLowerCase() + '>') > -1 ? $0 : ''
  })
}

function isMobile()
{
	//var isMobile= false;
	if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|ipad|iris|kindle|Android|Silk|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(navigator.userAgent)
  || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(navigator.userAgent.substr(0,4)))
		{
			return true;
		}
		else
		{
			return false;
		}
}

function answerwarn(obj)
{
  intFaqansID = jQuery(obj).attr("data-id");
  if (intFaqansID > 0)
  {
    jQuery.ajax({
      type: "POST",
      url: DOMAIN + "hoidap/warnfaqans",
      data: { id : intFaqansID },
      success: function(data)
      {
        isLike = jQuery(obj).attr("data-like");
        intNumLike = parseInt(jQuery(obj).attr("data-value"));
        strTitle = jQuery(obj).attr("title");
        //console.log(data);
        if(data==1)
        {
          if (isLike==1)
          {
            isLike = 0;
            intNumLike = intNumLike - 1;
            strTitle = "Bấm nút này để theo dõi câu hỏi này.";
            strContent = "Bạn đã hủy báo cáo sai phạm câu trả lời này.";
            jQuery(obj).removeClass("i-answer-warn");
          }
          else
          {
            isLike = 1;
            intNumLike = intNumLike + 1;
            strTitle = "Bấm nút này hủy theo dõi câu hỏi này.";
            strContent = "Bạn đã báo cáo sai phạm câu trả lời này.";
            jQuery(obj).addClass("i-answer-warn");
          }

          if (intNumLike<0)
          {
            intNumLike = 0;
          }

          jQuery(obj).attr("data-value", intNumLike);
          jQuery(obj).children('.faq_num_like').html(intNumLike);

          jQuery(obj).attr("data-like", isLike);
          jQuery(obj).attr("title", strTitle);
          //modalAlert(strContent, "Thông báo", "", "");
          //window.location.href = window.location.href;
          return true;
        }
        else
        {
          modalAlert('Bạn báo sai phạm câu trả lời không thành công. Vui lòng tải lại trang.', "Thông báo", "", "reload");
          //window.location.href = window.location.href;
          return false;
        }
      }
    })
    .fail(function() {
      modalAlert('Bạn báo sai phạm câu trả lời không thành công. Vui lòng tải lại trang.', "Thông báo", "", "reload");
      //window.location.href = window.location.href;
      return false;
    });
  }
}

function qaqwarn(obj)
{
  intFaqID = jQuery(obj).attr("data-id");
  if (intFaqID > 0)
  {
    jQuery.ajax({
      type: "POST",
      url: DOMAIN + "hoidap/warnfaq",
      data: { id : intFaqID },
      success: function(data)
      {
        isLike = jQuery(obj).attr("data-like");
        intNumLike = parseInt(jQuery(obj).attr("data-value"));
        //console.log(data);
        if(data==1)
        {
          if (isLike==1)
          {
            isLike = 0;
            strContent = "Bạn đã hủy báo cáo sai phạm câu hỏi này.";
            jQuery(obj).removeClass("i-answer-warn");
          }
          else
          {
            isLike = 1;
            strContent = "Bạn đã báo cáo sai phạm câu hỏi này.";
            jQuery(obj).addClass("i-answer-warn");
          }

          jQuery(obj).attr("data-value", intNumLike);
          jQuery(obj).children('.faq_num_like').html(intNumLike);

          jQuery(obj).attr("data-like", isLike);
          //modalAlert(strContent, "Thông báo", "", "");
          //window.location.href = window.location.href;
          return true;
        }
        else
        {
          modalAlert('Bạn báo sai phạm câu hỏi không thành công. Vui lòng tải lại trang.', "Thông báo", "", "reload");
          //window.location.href = window.location.href;
          return false;
        }
      }
    })
    .fail(function() {
      modalAlert('Bạn báo sai phạm câu hỏi không thành công. Vui lòng tải lại trang.', "Thông báo", "", "reload");
      //window.location.href = window.location.href;
      return false;
    });
  }
}

