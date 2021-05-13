/* Validation form */
ValidationFormSelf("validation-newsletter");
ValidationFormSelf("validation-cart");
ValidationFormSelf("validation-user");
ValidationFormSelf("validation-contact");

/* Exists */
$.fn.exists = function() {
    return this.length;
};
NN_FRAMEWORK.Loading = function() {
    $(window).load(function() {

        setTimeout(function(){
            $('.mask').addClass('hideg');
            $('#loading').fadeOut();
        },1000);
        
    });
};
/* Paging ajax */
if ($(".paging-product").exists()) {
    loadPagingAjax("ajax/ajax_product.php?perpage=8", '.paging-product');
};

/* Paging category ajax */
if ($(".paging-product-category").exists()) {
    $(".paging-product-category").each(function() {
        var list = $(this).data("list");
        loadPagingAjax("ajax/ajax_product.php?perpage=8&idList=" + list, '.paging-product-category-' + list);
    })
};
NN_FRAMEWORK.PostTin=function(){
    $('#btnSendNoLogin').bootstrapValidator({
        feedbackIcons: {
            valid: 'glyphicon glyphicon-ok',
            invalid: 'glyphicon glyphicon-remove',
            validating: 'glyphicon glyphicon-refresh'
        },
        fields: {
            name: {
                message: messages.home_value,
                validators: {
                    notEmpty: {
                        message: messages.register_username
                    },

                }
            },
            phone: {
                validators: {
                    notEmpty: {
                        message: messages.register_phone
                    },
                    stringLength: {
                        min: 10,
                        message: messages.register_phone_Length
                    },
                    digits: {
                        message: messages.register_phone_quy_dinh
                    }

                }
            },
            email: {
                validators: {
                    notEmpty: {
                        message: messages.register_email_empty
                    },
                    emailAddress: {
                        message: messages.register_email_sai_dinh_dang
                    }
                }
            },
            ten_vi: {
                message: messagesbds.home_value,
                validators: {
                    notEmpty: {
                        message: messagesbds.bds_ten
                    },

                    stringLength: {
                        min: 10,
                        message: messagesbds.bds_ten_toida
                    },

                }
            },
            price: {
                message: messagesbds.home_value,
                validators: {
                    notEmpty: {
                        message: messagesbds.home_value
                    },

                }
            },
            city: {
                message: messagesbds.home_value,
                validators: {
                    notEmpty: {
                        message: messagesbds.bds_tinh
                    },

                }
            },
            district: {
                message: messagesbds.home_value,
                validators: {
                    notEmpty: {
                        message: messagesbds.bds_quan
                    },

                }
            },
            ward: {
                message: messagesbds.home_value,
                validators: {
                    notEmpty: {
                        message: messagesbds.bds_xa
                    },

                }
            },
            houseNumber: {
                message: messagesbds.home_value,
                validators: {
                    notEmpty: {
                        message: messagesbds.bds_sonha
                    },

                }
            },
            fullAddress: {
                message: messagesbds.home_value,
                validators: {
                    notEmpty: {
                        message: messagesbds.bds_diachi
                    },

                }
            },
            requirePost: {
                message: messagesbds.home_value,
                validators: {
                    notEmpty: {
                        message: messagesbds.bds_dongy
                    },

                }
            }

        }
    });

    $("#filer_input2").filer({
        limit: 10,
        maxSize: 124,
        extensions: ["jpg","png","jpeg","JPG","PNG","JPEG","Png"],
        changeInput: '<div class="jFiler-input-dragDrop"><div class="jFiler-input-inner"><div class="jFiler-input-icon"><i class="icon-jfi-cloud-up-o"></i></div><div class="jFiler-input-text"><h3>Kéo và thả hình vào đây</h3> <span style="display:inline-block; margin: 15px 0">hoặc</span></div><a class="jFiler-input-choose-btn blue">Chọn hình</a></div></div>',
        showThumbs: true,
        theme: "dragdropbox", 
        dragDrop: {
            dragEnter: null,
            dragLeave: null,
            drop: null,
            dragContainer: null,
        },

        files: null,
        addMore: false,
        allowDuplicates: true,
        clipBoardPaste: true,
        excludeName: null,
        beforeRender: null,
        afterRender: null,
        beforeShow: null,
        beforeSelect: null,
        onSelect: null,
        afterShow: null,
        onEmpty: null,
        options: null,
        dialogs: {
            alert: function(text) {
                return alert(text);
            },
            confirm: function (text, callback) {
                confirm(text) ? callback() : null;
            }
        },
        captions: {
            button: "Thêm hình",
            feedback: "Vui lòng chọn hình ảnh",
            feedback2: "Những hình đã được chọn",
            drop: "Kéo hình vào đây để upload",
            removeConfirmation: "Bạn muốn loại bỏ hình ảnh này ?",
            errors: {
                filesLimit: "Chỉ được upload mỗi lần {{fi-limit}} hình ảnh",
                filesType: "Chỉ hỗ trợ tập tin là hình ảnh có định dạng: {{fi-extensions}}",
                filesSize: "Hình {{fi-name}} có kích thước quá lớn. Vui lòng upload hình ảnh có kích thước tối đa {{fi-maxSize}} MB.",
                filesSizeAll: "Những hình ảnh bạn chọn có kích thước quá lớn. Vui lòng chọn những hình ảnh có kích thước tối đa {{fi-maxSize}} MB."
            }
        },
        templates: {
            box: '<ul class="jFiler-items-list jFiler-items-grid"></ul>',
            item: '<li class="jFiler-item">\
            <div class="jFiler-item-container">\
            <div class="jFiler-item-inner">\
            <div class="jFiler-item-thumb">\
            <div class="jFiler-item-status"></div>\
            <div class="jFiler-item-thumb-overlay">\
            <div class="jFiler-item-info">\
            <div style="display:table-cell;vertical-align: middle;">\
            <span class="jFiler-item-title"><b title="{{fi-name}}">{{fi-name}}</b></span>\
            <span class="jFiler-item-others">{{fi-size2}}</span>\
            </div>\
            </div>\
            </div>\
            {{fi-image}}\
            </div>\
            <div class="jFiler-item-assets jFiler-row">\
            <ul class="list-inline pull-left">\
            <li>{{fi-progressBar}}</li>\
            </ul>\
            <ul class="list-inline pull-right">\
            <li><a class="icon-jfi-trash jFiler-item-trash-action"></a></li>\
            </ul>\
            </div>\
            </div>\
            </div>\
            </li>',
            itemAppend: '<li class="jFiler-item">\
            <div class="jFiler-item-container">\
            <div class="jFiler-item-inner">\
            <div class="jFiler-item-thumb">\
            <div class="jFiler-item-status"></div>\
            <div class="jFiler-item-thumb-overlay">\
            <div class="jFiler-item-info">\
            <div style="display:table-cell;vertical-align: middle;">\
            <span class="jFiler-item-title"><b title="{{fi-name}}">{{fi-name}}</b></span>\
            <span class="jFiler-item-others">{{fi-size2}}</span>\
            </div>\
            </div>\
            </div>\
            {{fi-image}}\
            </div>\
            <div class="jFiler-item-assets jFiler-row">\
            <ul class="list-inline pull-left">\
            <li><span class="jFiler-item-others">{{fi-icon}}</span></li>\
            </ul>\
            <ul class="list-inline pull-right">\
            <li><a class="icon-jfi-trash jFiler-item-trash-action"></a></li>\
            </ul>\
            </div>\
            </div>\
            </div>\
            </li>',
            progressBar: '<div class="bar"></div>',
            itemAppendToEnd: false,
            canvasImage: true,
            removeConfirmation: true,
            _selectors: {
                list: '.jFiler-items-list',
                item: '.jFiler-item',
                progressBar: '.bar',
                remove: '.jFiler-item-trash-action'
            }
        },
    });


};
function DeleteTin($id){
    if(confirm("Bạn có chắc chắn muốn xóa bất động sản này không?")){
        $.ajax({
            url:"account/delete-tin",
            type:'POST',
            dataType: 'json',
            data:({id:$id}),
            success:function(data){
                $("#itembds-"+$id).remove();
            }
        });
    }
};

function DeletePhoto($id){
    if(confirm("Bạn có chắc chắn muốn hình bất động sản này không?")){
        $.ajax({
            url:"account/delete-photo",
            type:'POST',
            dataType: 'json',
            data:({id:$id}),
            success:function(data){
                if(data.success=="1"){
                    $("#Itemphoto-"+$id).remove();
                }
                
            }
        });
    }
};
NN_FRAMEWORK.Login = function() {
    $(".flash-message").hide();
    $(".group-header").click(function() {
        if (!$(".group-header").hasClass("open")) {
            $(this).addClass("open");
        } else {
            $(this).removeClass("open");
        }
    });
    $(".span-eyes").unbind("click"), $(".span-eyes").on("click", function() {
        $(this).parent().find("input").each(function() {
            "password" == $(this).attr("type") ? $(this).attr("type", "text") : $(this).attr("type", "password")
        });
    });
    $("#forgot-password").click(function() {
        $("#popup-login").modal("hide");
        $("#popup-forgot-password").modal();
    });


    $('#form-login').bootstrapValidator({
        message: messages.home_value,
        feedbackIcons: {
            valid: 'glyphicon glyphicon-ok',
            invalid: 'glyphicon glyphicon-remove',
            validating: 'glyphicon glyphicon-refresh'
        },
        fields: {
            acount: {
                validators: {
                    notEmpty: {
                        message: messages.login_email_empty
                    },
                    emailAddress: {
                        message: messages.login_email_sai_dinh_dang
                    }
                }
            },
            password: {

                validators: {
                    notEmpty: {
                        message: messages.home_value
                    },
                    regexp: {
                        regexp: /^[a-zA-Z0-9_]+$/,
                        message: messages.login_password_quy_dinh
                    }
                }
            }
        }
    }).on('success.form.bv', function(e) {
        e.preventDefault();
        var $form = $(e.target);
        loadajax();
        Hideloadajax();
        var bv = $form.data('bootstrapValidator');
        initAjax({
            url: "account/dang-nhap",
            data: $("#form-login").serialize(),
            dataType: 'json',
            success: function(data) {
                $(".flash-message").show();
                if (data.error.stt) {
                    if (data.error.input) {
                        $.each(data.error.data, function(i, content) {
                            intializePopover({
                                ele: $("." + i + "-input"),
                                content: content
                            });
                        });
                    } else {
                        if (data.error.msg) {

                            setTimeout(function() {
                                $(".flash-message .modal-title.error").remove();
                                $(".flash-message").hide();
                            }, 2000);

                            $("#popup-login .flash-message").html('<p class="modal-title error">' + data.error.msg + '</p>');
                        }
                    }
                } else {
                    $(".flash-message").hide();
                    //  ShowNotify(data.success,true);
                    setTimeout(function() {
                        location.reload();
                    }, 2000);

                }
                return false;
            }
        });
        return false;
    });

    $('#form-register').bootstrapValidator({
        feedbackIcons: {
            valid: 'glyphicon glyphicon-ok',
            invalid: 'glyphicon glyphicon-remove',
            validating: 'glyphicon glyphicon-refresh'
        },
        fields: {
            fullname: {
                message: messages.home_value,
                validators: {
                    notEmpty: {
                        message: messages.register_username
                    },

                }
            },
            phone: {
                validators: {
                    notEmpty: {
                        message: messages.register_phone
                    },
                    stringLength: {
                        min: 10,
                        message: messages.register_phone_Length
                    },
                    digits: {
                        message: messages.register_phone_quy_dinh
                    }

                }
            },
            email: {
                validators: {
                    notEmpty: {
                        message: messages.register_email_empty
                    },
                    emailAddress: {
                        message: messages.register_email_sai_dinh_dang
                    }
                }
            },
            password: {
                validators: {
                    notEmpty: {
                        message: messages.register_password_empty
                    },
                    different: {
                        field: 'email',
                        message: messages.register_password_different_email
                    },
                    stringLength: {
                        min: 8,
                        message: messages.register_password_quy_dinh
                    }
                }
            },

        }
    }).on('success.form.bv', function(e) {
        e.preventDefault();
        var $form = $(e.target);
        var bv = $form.data('bootstrapValidator');
        initAjax({
            url: "account/dang-ky",
            data: $("#form-register").serialize(),
            dataType: 'json',
            success: function(data) {
                if (data.error.stt) {
                    $.each(data.error.data, function(i, content) {
                        intializePopover({
                            ele: $("." + i + "-input"),
                            content: content
                        });
                    });
                } else {

                    ShowNotify(data.success, true);
                    setTimeout(function() {
                        location.reload();
                    }, 4000);
                }
                return false;
            }
        });
        return false;
    });

    $('#forgotPassword').bootstrapValidator({
        feedbackIcons: {
            valid: 'glyphicon glyphicon-ok',
            invalid: 'glyphicon glyphicon-remove',
            validating: 'glyphicon glyphicon-refresh'
        },
        fields: {

            forgot_email: {
                validators: {
                    notEmpty: {
                        message: messages.register_email_empty
                    },
                    emailAddress: {
                        message: messages.register_email_sai_dinh_dang
                    }
                }
            }
        }
    }).on('success.form.bv', function(e) {
        e.preventDefault();
        var $form = $(e.target);
        var bv = $form.data('bootstrapValidator');
        initAjax({
            url: "account/quen-mat-khau",
            data: $("#forgotPassword").serialize(),
            dataType: 'json',
            success: function(data) {

                if (data.error.stt) {
                    $.each(data.error.data, function(i, content) {
                        intializePopover({
                            ele: $("." + i + "-input"),
                            content: content
                        });
                    });
                } else {
                    setTimeout(function() {
                        location.reload();
                    }, 4000);
                }
                return false;
            }
        });
        return false;
    });


    $('#form-user-change-pass').bootstrapValidator({
        feedbackIcons: {
            valid: 'glyphicon glyphicon-ok',
            invalid: 'glyphicon glyphicon-remove',
            validating: 'glyphicon glyphicon-refresh'
        },
        fields: {
            user_pass_old: {
                validators: {
                    notEmpty: {
                        message:  messages.change_password_old
                    },

                }
            },
            user_pass: {
                validators: {
                    notEmpty: {
                        message: messages.change_password_new
                    },
                    different: {
                        field: 'email',
                        message: messages.register_password_different_email
                    },
                    stringLength: {
                        min: 8,
                        message: messages.register_password_quy_dinh
                    }

                }
            },
            user_repass: {
                validators: {
                    notEmpty: {
                        message:messages.change_password_new_xn
                    }
                }
            },
        }
    }).on('success.form.bv', function(e) {
        e.preventDefault();
        var $form = $(e.target);
        var bv = $form.data('bootstrapValidator');
        initAjax({
            url: "account/doi-mat-khau",
            data: $("#form-user-change-pass").serialize(),
            dataType: 'json',
            success: function(data) {

                $(".flash-message").show();

                if (data.error.stt) {

                    if (data.error.input) {

                        $.each(data.error.data, function(i, content) {
                            intializePopover({
                                ele: $("." + i + "-input"),
                                content: content
                            });
                        });
                    } else {
                        if (data.error.msg) {

                            setTimeout(function() {
                                $(".flash-message .modal-title.error").remove();
                                $(".flash-message").hide();
                            }, 2000);

                            $("#popup-login .flash-message").html('<p class="modal-title error">' + data.error.msg + '</p>');
                        }
                    }
                } else {
                    $(".flash-message").hide();
                    setTimeout(function() {
                        location.reload();
                    }, 2000);

                }
                return false;
            }
        });
        return false;
    });




    $("#city").change(function(){
        $id=$("#city option:selected").val();

        initAjax({
            url:'account/load-district',
            dataType:'json',
            data:({id:$id}),
            success:function(data){
                $("#district option:not(:first)").remove();
                console.log(data);
                $.each(data,function(index,item){
                    $("#district").append("<option value="+item.id+">"+item.ten+"</option>");
                });
            }
        });
    });
    $("#district").change(function(){
        $id=$("#district option:selected").val();

        initAjax({
            url:'account/load-ward',
            dataType:'json',
            data:({id:$id}),
            success:function(data){
                $("#ward option:not(:first)").remove();
                console.log(data);
                $.each(data,function(index,item){
                    $("#ward").append("<option value="+item.id+">"+item.ten+"</option>");
                });
            }
        });
    });


    function intializePopover(option) {
        option = $.extend({
            ele: "",
            title: "Thông báo",
            content: "",
        }, option);
        option.ele.popover({
            'placement': 'top',
            title: option.title,
            content: option.content
        }).show();
        option.ele.popover('show')
        option.ele.click(function() {
            $(this).popover('hide');
        });
        $(document).on('click', function(event) {
            option.ele.popover('dispose');
        });


        option.ele.focus();
    }

    function initAjax(options) {
        var defaults = {
            url: '',
            type: 'post',
            data: null,
            dataType: 'html',
            error: function(e) {
                console.log(e)
            },
            success: function() {
                return false;
            },
            beforeSend: function() {},
        };
        var options = $.extend({}, defaults, options);
        $.ajax({
            url: options.url,
            data: options.data,
            success: options.success,
            error: options.error,
            type: options.type,
            dataType: options.dataType,

        });


    }

    function loadajax() {
        setTimeout(function() {
            $("#loadding-ajax").show();
        }, 100);
    }

    function Hideloadajax() {
        setTimeout(function() {
            $("#loadding-ajax").hide();
        }, 2000);
    }
    $("#isOwner").click(function(){

        if($('#isOwner').is(":checked")){
            $("#infos-owner").css({"display":"none"});
        }else{
            $("#infos-owner").css({"display":"block"});
        }
    });
    $("input[name='listingType']").click(function(){
        $val=parseInt($(this).val());
        
        if($val!=1){
            $(".propertyType-buy").css({"display":"none"});
            $(".propertyType-rent").css({"display":"block"});
        }else{

           $(".propertyType-buy").css({"display":"block"});
           $(".propertyType-rent").css({"display":"none"});
       }
   });
    if($(".price").exists()){
        var n = parseInt($(".price").val().replace(/\D/g,''),10);
        $(".price").val(n.toLocaleString());
        $(".price").keyup(function(){
            var n = parseInt($(this).val().replace(/\D/g,''),10);
            $(this).val(n.toLocaleString());
            
        });
    }
    


};


/* Back to top */
NN_FRAMEWORK.BackToTop = function() {
    $(window).scroll(function() {
        if (!$('.scrollToTop').length) $("body").append('<div class="scrollToTop"><img src="' + GOTOP + '" alt="Go Top"/></div>');
        if ($(this).scrollTop() > 100) $('.scrollToTop').fadeIn();
        else $('.scrollToTop').fadeOut();
    });

    $('body').on("click", ".scrollToTop", function() {
        $('html, body').animate({
            scrollTop: 0
        }, 800);
        return false;
    });
};
/* Mmenu */
NN_FRAMEWORK.Mmenu = function() {
    $menu = $("#main-nav").clone();
    $menu.removeAttr("id");
    $menu.find(".no-index").remove();
    $("#responsive-menu .content").append($menu);
    $("#responsive-menu .content").append('<div class="clearfix"></div>');
    $menu = $("#responsive-menu .content ul");
    $menu.find("li").each(function() {
        if ($(this).find("ul").length) {
            $(this).addClass("has-child");
            $(this).find("a").first().append("<span class='toggle-menu'><i class='fas fa-angle-down'></i></span>");
        }
    });
    $("#responsive-menu .toggle-menu").click(function() {
        $(this).find("i").toggleClass("fa-angle-down");
        $(this).find("i").toggleClass("fa-angle-up");
        if (!$(this).hasClass("active")) {
            $(this).parent().parent().find("ul").first().slideDown();
            $(this).addClass("active");
        } else {
            $(this).parent().parent().find("ul").first().slideUp();
            $(this).removeClass("active");
        }
        return false;
    });
    $("#responsive-menu .title").click(function() {
        $list = $(this).next().next().find("ul").first();
        console.log($list.is(":visible"));

        if ($list.is(":visible")) {
            $list.slideUp();
        } else {

            $list.slideDown();
        }
    });
    $("#responsive-menu").attr("data-top", $("#responsive-menu").offset().top);
    $(window).scroll(function() {
        $top = $(window).scrollTop();
        $ele = $("#responsive-menu").attr("data-top");
        if ($top > $ele) {
            //$("#responsive-menu").css({position:"fixed"});
        } else {
            //  $("#responsive-menu").css({position:"relative"});
        }

    });


    $(".title-rpmenu").click(function() {
        $("body").css({
            "overflow-x": "hidden"
        });
        $("#responsive-menu,#xmen").css({
            'transition': 'all 0.7s ease-in-out',
            'transform': 'translateX(300px)'
        });
        $(".title-rpmenu").fadeOut();

        return false;
    });

    $("#responsive-menu button.close,#nav-page-wrapper,#xmen").click(function() {
        $("#responsive-menu,#xmen").css({
            'transform': 'translateX(0px)'
        });
        setTimeout(function() {
            $(".title-rpmenu").fadeIn();
            $("body").css({
                "overflow-x": "auto"
            })
        }, 1000);
    });
};

/* Alt images */
NN_FRAMEWORK.AltImages = function() {
    $('img').each(function(index, element) {
        if (!$(this).attr('alt') || $(this).attr('alt') == '') {
            $(this).attr('alt', WEBSITE_NAME);
        }
    });
};

/* Fix menu */
NN_FRAMEWORK.FixMenu = function() {
    $(window).scroll(function() {
        if ($(window).scrollTop() >= $(".header").height()) $(".menu").css({
            position: "fixed",
            left: '0px',
            right: '0px',
            top: '0px',
            zIndex: '999'
        });
            else $(".menu").css({
                position: "relative"
            });
        });
};

/* Tools */
NN_FRAMEWORK.Tools = function() {
    if ($(".toolbar").exists()) {
        $(".footer").css({
            marginBottom: $(".toolbar").innerHeight()
        });
    }
};

/* Popup */
NN_FRAMEWORK.Popup = function() {
    if ($("#popup").exists()) {
        $('#popup').modal('show');
    }
};

/* Wow */
NN_FRAMEWORK.WowAnimation = function() {
    new WOW().init();
};



/* Toc */
NN_FRAMEWORK.Toc = function() {
    if ($(".toc-list").exists()) {
        $(".toc-list").toc({
            content: "div#toc-content",
            headings: "h2,h3,h4"
        });

        if (!$(".toc-list li").length) $(".meta-toc").hide();

        $('.toc-list').find('a').click(function() {
            var x = $(this).attr('data-rel');
            goToByScroll(x);
        });
    }
};

/* Simply scroll */
NN_FRAMEWORK.SimplyScroll = function() {
    if ($(".newshome-scroll").exists()) {
        $(".newshome-scroll").simplyScroll({
            orientation: 'vertical'
        });
    }
};

/* Tabs */
NN_FRAMEWORK.Tabs = function() {
    if ($(".ul-tabs-pro-detail").exists()) {
        $(".ul-tabs-pro-detail li").click(function() {
            var tabs = $(this).data("tabs");
            $(".content-tabs-pro-detail, .ul-tabs-pro-detail li").removeClass("active");
            $(this).addClass("active");
            $("." + tabs).addClass("active");
        });
    }
};

/* Photobox */
NN_FRAMEWORK.Photobox = function() {
    if ($(".album-gallery").exists()) {
        $('.album-gallery').photobox('a', {
            thumbs: true,
            loop: false
        });
    }
};

/* Datetime picker */
NN_FRAMEWORK.DatetimePicker = function() {
    if ($('#ngaysinh').exists()) {
        $('#ngaysinh').datetimepicker({
            timepicker: false,
            format: 'd/m/Y',
            formatDate: 'd/m/Y',
            minDate: '01/01/1950',
            maxDate: TIMENOW
        });
    }
};

/* Search */
NN_FRAMEWORK.Search = function() {
    $("#form-xsearch").submit(function() {
        $k = $(this).find(".keyword").val();
        window.location.href = "tim-kiem?keyword=" + $k;
        return false;
    });
};

/* Videos */
NN_FRAMEWORK.Videos = function() {
    /* Fancybox */
    // $('[data-fancybox="something"]').fancybox({
    //     // transitionEffect: "fade",
    //     // transitionEffect: "slide",
    //     // transitionEffect: "circular",
    //     // transitionEffect: "tube",
    //     // transitionEffect: "zoom-in-out",
    //     // transitionEffect: "rotate",
    //     transitionEffect: "fade",
    //     transitionDuration: 800,
    //     animationEffect: "fade",
    //     animationDuration: 800,
    //     slideShow: {
    //         autoStart: true,
    //         speed: 3000
    //     },
    //     arrows: true,
    //     infobar: false,
    //     toolbar: false,
    //     hash: false
    // });

    if ($(".video").exists()) {
        $('[data-fancybox="video"]').fancybox({
            transitionEffect: "fade",
            transitionDuration: 800,
            animationEffect: "fade",
            animationDuration: 800,
            arrows: true,
            infobar: false,
            toolbar: true,
            hash: false
        });
    }
};

/* jssor */
NN_FRAMEWORK.OwlPage = function() {
    if ($(".slider").exists()) {
        var jssor_1_SlideshowTransitions = [
            //Rotate Overlap
            {
                $Duration: 1800,
                x: 1,
                $Delay: 30,
                $Cols: 10,
                $Rows: 5,
                $Clip: 15,
                $During: {
                    $Left: [0.3, 0.7]
                },
                $Formation: $JssorSlideshowFormations$.$FormationStraightStairs,
                $Assembly: 260,
                $Easing: {
                    $Left: $JssorEasing$.$EaseInOutExpo,
                    $Clip: $JssorEasing$.$EaseInOutQuad
                },
                $Round: {
                    $Top: 0.8
                }
            }, {
                $Duration: 1800,
                x: 1,
                y: 0.2,
                $Delay: 30,
                $Cols: 10,
                $Rows: 5,
                $Clip: 15,
                $During: {
                    $Left: [0.3, 0.7],
                    $Top: [0.3, 0.7]
                },
                $Reverse: true,
                $Formation: $JssorSlideshowFormations$.$FormationStraightStairs,
                $Assembly: 2050,
                $Easing: {
                    $Left: $JssorEasing$.$EaseInOutSine,
                    $Top: $JssorEasing$.$EaseOutWave,
                    $Clip: $JssorEasing$.$EaseInOutQuad
                },
                $Round: {
                    $Top: 1.3
                }
            }, {
                $Duration: 1800,
                x: 1,
                y: 0.2,
                $Delay: 30,
                $Cols: 10,
                $Rows: 5,
                $Clip: 15,
                $During: {
                    $Left: [0.3, 0.7],
                    $Top: [0.3, 0.7]
                },
                $Reverse: true,
                $Formation: $JssorSlideshowFormations$.$FormationSwirl,
                $Assembly: 2050,
                $Easing: {
                    $Left: $JssorEasing$.$EaseInOutSine,
                    $Top: $JssorEasing$.$EaseOutWave,
                    $Clip: $JssorEasing$.$EaseInOutQuad
                },
                $Round: {
                    $Top: 1.3
                }
            }, {
                $Duration: 1500,
                x: 0.2,
                y: -0.1,
                $Delay: 150,
                $Cols: 12,
                $Formation: $JssorSlideshowFormations$.$FormationStraightStairs,
                $Assembly: 260,
                $Easing: {
                    $Left: $JssorEasing$.$EaseLinear,
                    $Top: $JssorEasing$.$EaseOutWave,
                    $Opacity: $JssorEasing$.$EaseLinear
                },
                $Opacity: 2,
                $Round: {
                    $Top: 2
                }
            }, {
                $Duration: 1800,
                x: 1,
                $Delay: 30,
                $Cols: 10,
                $Rows: 5,
                $Clip: 15,
                $During: {
                    $Left: [0.3, 0.7]
                },
                $SlideOut: true,
                $Formation: $JssorSlideshowFormations$.$FormationStraightStairs,
                $Assembly: 260,
                $Easing: {
                    $Left: $JssorEasing$.$EaseInOutExpo,
                    $Clip: $JssorEasing$.$EaseInOutQuad
                },
                $Round: {
                    $Top: 0.8
                }
            }, {
                $Duration: 1800,
                x: 1,
                y: 0.2,
                $Delay: 30,
                $Cols: 10,
                $Rows: 5,
                $Clip: 15,
                $During: {
                    $Left: [0.3, 0.7],
                    $Top: [0.3, 0.7]
                },
                $SlideOut: true,
                $Reverse: true,
                $Formation: $JssorSlideshowFormations$.$FormationSwirl,
                $Assembly: 2050,
                $Easing: {
                    $Left: $JssorEasing$.$EaseInOutSine,
                    $Top: $JssorEasing$.$EaseOutWave,
                    $Clip: $JssorEasing$.$EaseInOutQuad
                },
                $Round: {
                    $Top: 1.3
                }
            }, {
                $Duration: 1500,
                x: 0.2,
                y: -0.1,
                $Delay: 150,
                $Cols: 12,
                $SlideOut: true,
                $Formation: $JssorSlideshowFormations$.$FormationStraightStairs,
                $Assembly: 260,
                $Easing: {
                    $Left: $JssorEasing$.$EaseLinear,
                    $Top: $JssorEasing$.$EaseOutWave,
                    $Opacity: $JssorEasing$.$EaseLinear
                },
                $Opacity: 2,
                $Round: {
                    $Top: 2
                }
            }, {
                $Duration: 1800,
                x: 1,
                $Delay: 30,
                $Cols: 10,
                $Rows: 5,
                $Clip: 15,
                $During: {
                    $Left: [0.3, 0.7]
                },
                $Formation: $JssorSlideshowFormations$.$FormationStraightStairs,
                $Assembly: 260,
                $Easing: {
                    $Left: $JssorEasing$.$EaseInOutExpo,
                    $Clip: $JssorEasing$.$EaseInOutQuad
                },
                $Outside: true,
                $Round: {
                    $Top: 0.8
                }
            }, {
                $Duration: 1800,
                x: 1,
                y: 0.2,
                $Delay: 30,
                $Cols: 10,
                $Rows: 5,
                $Clip: 15,
                $During: {
                    $Left: [0.3, 0.7],
                    $Top: [0.3, 0.7]
                },
                $Reverse: true,
                $Formation: $JssorSlideshowFormations$.$FormationStraightStairs,
                $Assembly: 2050,
                $Easing: {
                    $Left: $JssorEasing$.$EaseInOutSine,
                    $Top: $JssorEasing$.$EaseOutWave,
                    $Clip: $JssorEasing$.$EaseInOutQuad
                },
                $Outside: true,
                $Round: {
                    $Top: 1.3
                }
            }, {
                $Duration: 1800,
                x: 1,
                y: 0.2,
                $Delay: 30,
                $Cols: 10,
                $Rows: 5,
                $Clip: 15,
                $During: {
                    $Left: [0.3, 0.7],
                    $Top: [0.3, 0.7]
                },
                $Reverse: true,
                $Formation: $JssorSlideshowFormations$.$FormationSwirl,
                $Assembly: 2050,
                $Easing: {
                    $Left: $JssorEasing$.$EaseInOutSine,
                    $Top: $JssorEasing$.$EaseOutWave,
                    $Clip: $JssorEasing$.$EaseInOutQuad
                },
                $Outside: true,
                $Round: {
                    $Top: 1.3
                }
            }, {
                $Duration: 1500,
                x: 0.2,
                y: -0.1,
                $Delay: 150,
                $Cols: 12,
                $Formation: $JssorSlideshowFormations$.$FormationStraightStairs,
                $Assembly: 260,
                $Easing: {
                    $Left: $JssorEasing$.$EaseLinear,
                    $Top: $JssorEasing$.$EaseOutWave,
                    $Opacity: $JssorEasing$.$EaseLinear
                },
                $Opacity: 2,
                $Outside: true,
                $Round: {
                    $Top: 2
                }
            }, {
                $Duration: 1800,
                x: 1,
                $Delay: 30,
                $Cols: 10,
                $Rows: 5,
                $Clip: 15,
                $During: {
                    $Left: [0.3, 0.7]
                },
                $SlideOut: true,
                $Formation: $JssorSlideshowFormations$.$FormationStraightStairs,
                $Assembly: 260,
                $Easing: {
                    $Left: $JssorEasing$.$EaseInOutExpo,
                    $Clip: $JssorEasing$.$EaseInOutQuad
                },
                $Outside: true,
                $Round: {
                    $Top: 0.8
                }
            }, {
                $Duration: 1800,
                x: 1,
                y: 0.2,
                $Delay: 30,
                $Cols: 10,
                $Rows: 5,
                $Clip: 15,
                $During: {
                    $Left: [0.3, 0.7],
                    $Top: [0.3, 0.7]
                },
                $SlideOut: true,
                $Reverse: true,
                $Formation: $JssorSlideshowFormations$.$FormationStraightStairs,
                $Assembly: 2050,
                $Easing: {
                    $Left: $JssorEasing$.$EaseInOutSine,
                    $Top: $JssorEasing$.$EaseOutWave,
                    $Clip: $JssorEasing$.$EaseInOutQuad
                },
                $Outside: true,
                $Round: {
                    $Top: 1.3
                }
            }, {
                $Duration: 1800,
                x: 1,
                y: 0.2,
                $Delay: 30,
                $Cols: 10,
                $Rows: 5,
                $Clip: 15,
                $During: {
                    $Left: [0.3, 0.7],
                    $Top: [0.3, 0.7]
                },
                $SlideOut: true,
                $Reverse: true,
                $Formation: $JssorSlideshowFormations$.$FormationSwirl,
                $Assembly: 2050,
                $Easing: {
                    $Left: $JssorEasing$.$EaseInOutSine,
                    $Top: $JssorEasing$.$EaseOutWave,
                    $Clip: $JssorEasing$.$EaseInOutQuad
                },
                $Outside: true,
                $Round: {
                    $Top: 1.3
                }
            }, {
                $Duration: 1500,
                x: 0.2,
                y: -0.1,
                $Delay: 150,
                $Cols: 12,
                $SlideOut: true,
                $Formation: $JssorSlideshowFormations$.$FormationStraightStairs,
                $Assembly: 260,
                $Easing: {
                    $Left: $JssorEasing$.$EaseLinear,
                    $Top: $JssorEasing$.$EaseOutWave,
                    $Opacity: $JssorEasing$.$EaseLinear
                },
                $Opacity: 2,
                $Outside: true,
                $Round: {
                    $Top: 2
                }
            }
            ];
            var options = {
            $AutoPlay: 1, //[Optional] Auto play or not, to enable slideshow, this option must be set to greater than 0. Default value is 0. 0: no auto play, 1: continuously, 2: stop at last slide, 4: stop on click, 8: stop on user navigation (by arrow/bullet/thumbnail/drag/arrow key navigation)
            $AutoPlaySteps: 1, //[Optional] Steps to go for each navigation request (this options applys only when slideshow disabled), the default value is 1
            $Idle: 2000, //[Optional] Interval (in milliseconds) to go for next slide since the previous stopped if the slider is auto playing, default value is 3000
            $PauseOnHover: 1, //[Optional] Whether to pause when mouse over if a slider is auto playing, 0 no pause, 1 pause for desktop, 2 pause for touch device, 3 pause for desktop and touch device, 4 freeze for desktop, 8 freeze for touch device, 12 freeze for desktop and touch device, default value is 1

            $ArrowKeyNavigation: 1, //[Optional] Steps to go for each navigation request by pressing arrow key, default value is 1.
            $SlideEasing: $Jease$.$OutQuint, //[Optional] Specifies easing for right to left animation, default value is $Jease$.$OutQuad
            $SlideDuration: 800, //[Optional] Specifies default duration (swipe) for slide in milliseconds, default value is 500
            $MinDragOffsetToSlide: 20, //[Optional] Minimum drag offset to trigger slide, default value is 20
            //$SlideWidth: 600,                                 //[Optional] Width of every slide in pixels, default value is width of 'slides' container
            //$SlideHeight: 300,                                //[Optional] Height of every slide in pixels, default value is height of 'slides' container
            $SlideSpacing: 0, //[Optional] Space between each slide in pixels, default value is 0
            $Cols: 1, //[Optional] Number of pieces to display (the slideshow would be disabled if the value is set to greater than 1), the default value is 1
            $Align: 0, //[Optional] The offset position to park slide (this options applys only when slideshow disabled), default value is 0.
            $UISearchMode: 1, //[Optional] The way (0 parellel, 1 recursive, default value is 1) to search UI components (slides container, loading screen, navigator container, arrow navigator container, thumbnail navigator container etc).
            $PlayOrientation: 1, //[Optional] Orientation to play slide (for auto play, navigation), 1 horizental, 2 vertical, 5 horizental reverse, 6 vertical reverse, default value is 1
            $DragOrientation: 1, //[Optional] Orientation to drag slide, 0 no drag, 1 horizental, 2 vertical, 3 either, default value is 1 (Note that the $DragOrientation should be the same as $PlayOrientation when $Cols is greater than 1, or parking position is not 0)
            $SlideshowOptions: {
                $Class: $JssorSlideshowRunner$,
                $Transitions: jssor_1_SlideshowTransitions,
                $TransitionsOrder: 1
            },
            $ArrowNavigatorOptions: { //[Optional] Options to specify and enable arrow navigator or not
                $Class: $JssorArrowNavigator$, //[Requried] Class to create arrow navigator instance
                $ChanceToShow: 2, //[Required] 0 Never, 1 Mouse Over, 2 Always
                $Steps: 1 //[Optional] Steps to go for each navigation request, default value is 1
            },

            $BulletNavigatorOptions: { //[Optional] Options to specify and enable navigator or not
                $Class: $JssorBulletNavigator$, //[Required] Class to create navigator instance
                $ChanceToShow: 2, //[Required] 0 Never, 1 Mouse Over, 2 Always
                $Steps: 1, //[Optional] Steps to go for each navigation request, default value is 1
                $Rows: 1, //[Optional] Specify lanes to arrange items, default value is 1
                $SpacingX: 12, //[Optional] Horizontal space between each item in pixel, default value is 0
                $SpacingY: 4, //[Optional] Vertical space between each item in pixel, default value is 0
                $Orientation: 1 //[Optional] The orientation of the navigator, 1 horizontal, 2 vertical, default value is 1
            }
        };



        var jssor_slider1 = new $JssorSlider$("jssor_1", options);

        //responsive code begin
        //you can remove responsive code if you don't want the slider scales while window resizing
        function ScaleSlider() {
            var parentWidth = jssor_slider1.$Elmt.parentNode.clientWidth;
            if (parentWidth) {
                jssor_slider1.$ScaleWidth(parentWidth);
            } else
            window.setTimeout(ScaleSlider, 30);
        }
        ScaleSlider();

        $(window).bind("load", ScaleSlider);
        $(window).bind("resize", ScaleSlider);
        $(window).bind("orientationchange", ScaleSlider);
        //responsive code end
    }



};

/* Owl pro detail */
NN_FRAMEWORK.OwlProDetail = function() {
    if ($(".owl-thumb-pro").exists()) {
        $('.owl-thumb-pro').owlCarousel({
            items: 4,
            lazyLoad: false,
            mouseDrag: true,
            touchDrag: true,
            margin: 10,
            smartSpeed: 250,
            nav: false,
            dots: false
        });
        $('.prev-thumb-pro').click(function() {
            $('.owl-thumb-pro').trigger('prev.owl.carousel');
        });
        $('.next-thumb-pro').click(function() {
            $('.owl-thumb-pro').trigger('next.owl.carousel');
        });
    }
};

/* Cart */
NN_FRAMEWORK.Cart = function() {

    $("a.popup-option-cancel").click(function(){
        $id=$(this).data("id");
        $("#orderCode").val($id);
    });
    $("#option-order input[name=option-cancel-order]").click(function(){
        $id_cancel=$(this).val();
        $madonhang=$("#orderCode").val();
        $.ajax({
            url:'account/update-status-order',
            type:'POST',
            dataType:'json',
            data:({id:$id_cancel,madonhang:$madonhang}),
            success:function(data){
                if(data.success==1){
                    setTimeout(function(){location.reload();},500);
                }
            }

        });
    });
    $("body").on("click", ".addcart", function() {
        var mau = ($(".color-pro-detail input:checked").val()) ? $(".color-pro-detail input:checked").val() : 0;
        var size = ($(".size-pro-detail input:checked").val()) ? $(".size-pro-detail input:checked").val() : 0;
        var id = $(this).data("id");
        var name = $(this).data("name");
        var action = $(this).data("action");
        var quantity = ($(".qty-pro").val()) ? $(".qty-pro").val() : 1;

        if (id) {
            $.ajax({
                url: 'ajax/ajax_cart.php',
                type: "POST",
                dataType: 'json',
                async: false,
                data: {
                    cmd: 'add-cart',
                    id: id,
                    mau: mau,
                    size: size,
                    quantity: quantity
                },
                success: function(result) {
                    if (action == 'addnow') {
                        $('.count-cart').html(result.max);
                        $.ajax({
                            url: 'ajax/ajax_cart.php',
                            type: "POST",
                            dataType: 'html',
                            async: false,
                            data: {
                                cmd: 'popup-cart'
                            },
                            success: function(result) {
                                $("#popup-cart .modal-body").html(result);
                                $('#popup-cart').modal('show');
                                ShowNotify("Thêm sản phẩm " + name + " vào giỏ hàng thành công..", true);
                            }
                        });
                    } else if (action == 'buynow') {
                        ShowNotify("Thêm sản phẩm " + name + " vào giỏ hàng thành công..", true);
                        setTimeout(function() {
                            window.location = CONFIG_BASE + "gio-hang";
                        }, 2000);

                    }
                }
            });
        }
    });

    $("body").on("click", ".del-procart", function() {
        if (confirm(LANG['delete_product_from_cart'])) {
            var code = $(this).data("code");
            var ship = $(".price-ship").val();

            $.ajax({
                type: "POST",
                url: 'ajax/ajax_cart.php',
                dataType: 'json',
                data: {
                    cmd: 'delete-cart',
                    code: code,
                    ship: ship
                },
                success: function(result) {
                    $('.count-cart').html(result.max);
                    if (result.max) {
                        $('.price-temp').val(result.temp);
                        $('.load-price-temp').html(result.tempText);
                        $('.price-total').val(result.total);
                        $('.load-price-total').html(result.totalText);
                        $(".procart-" + code).remove();
                    } else {
                        $(".wrap-cart").html('<a href="" class="empty-cart text-decoration-none"><i class="fa fa-cart-arrow-down"></i><p>' + LANG['no_products_in_cart'] + '</p><span>' + LANG['back_to_home'] + '</span></a>');
                    }
                }
            });
        }
    });

    $("body").on("click",".counter-procart",function(){
       var $button = $(this);
       var input = $button.parent().find("input");
       var id = input.data('pid');
       var code = input.data('code');
       var oldValue = $button.parent().find("input").val();
       if($button.text() == "+") quantity = parseFloat(oldValue) + 1;
       else if(oldValue > 1) quantity = parseFloat(oldValue) - 1;
       else quantity = 1;
       $button.parent().find("input").val(quantity);
       update_cart(id,code,quantity);
   });
    $("body").on("change", "input.quantity-procat", function() {
        var quantity = $(this).val();
        var id = $(this).data("pid");
        var code = $(this).data("code");
        update_cart(id, code, quantity);
    });

    if ($(".select-city-cart").exists()) {
        $(".select-city-cart").change(function() {
            var id = $(this).val();
            load_district(id);
            load_ship();
        });
    }

    if ($(".select-district-cart").exists()) {
        $(".select-district-cart").change(function() {
            var id = $(this).val();
            load_wards(id);
            load_ship();
        });
    }

    if ($(".select-wards-cart").exists()) {
        $(".select-wards-cart").change(function() {
            var id = $(this).val();
            load_ship(id);
        });
    }

    if ($(".payments-label").exists()) {
        $(".payments-label").click(function() {
            var payments = $(this).data("payments");
            $(".payments-cart .payments-label, .payments-info").removeClass("active");
            $(this).addClass("active");
            $(".payments-info-" + payments).addClass("active");
        });
    }

    if ($(".color-pro-detail").exists()) {
        $(".color-pro-detail").click(function() {
            $(".color-pro-detail").removeClass("active");
            $(this).addClass("active");

            var id_mau = $("input[name=color-pro-detail]:checked").val();
            var idpro = $(this).data('idpro');

            $.ajax({
                url: 'ajax/ajax_color.php',
                type: "POST",
                dataType: 'html',
                data: {
                    id_mau: id_mau,
                    idpro: idpro
                },
                success: function(result) {
                    if (result != '') {
                        $('.left-pro-detail').html(result);
                        MagicZoom.refresh("Zoom-1");
                        NN_FRAMEWORK.OwlProDetail();
                    }
                }
            });
        });
    }

    if ($(".size-pro-detail").exists()) {
        $(".size-pro-detail").click(function() {
            $(".size-pro-detail").removeClass("active");
            $(this).addClass("active");
        });
    }

    if ($(".quantity-pro-detail span").exists()) {
        $(".quantity-pro-detail span").click(function() {
            var $button = $(this);
            var oldValue = $button.parent().find("input").val();
            if ($button.text() == "+") {
                var newVal = parseFloat(oldValue) + 1;
            } else {
                if (oldValue > 1) var newVal = parseFloat(oldValue) - 1;
                else var newVal = 1;
            }
            $button.parent().find("input").val(newVal);
        });
    }

};

function ShowNotify($msg, $type) {
    var t;
    $cls = "error";
    if ($type == 1) {
        $cls = "success";
    }
    if (!$("body").find(".alert-box-container").length) {
        $("body").append("<div class='alert-box-container'></div>");
    }

    $clss = Math.floor((Math.random() * 999999) + 1);
    $msg = "<div class='cl_" + $clss + " " + $cls + "-box alert-box' style='opacity:0'> <div class='msg'>" + $msg + "</div> <p><a class='toggle-alert' href='#'>Toggle</a></p> </div>";
    $(".alert-box-container").append($msg);
    $(".cl_" + $clss).animate({
        opacity: 1
    });
    setTimeout(function() {
        $(".alert-box-container .alert-box").first().slideUp(function() {
            $(".alert-box-container .alert-box").first().remove();
        })
    }, 2000);
    $(".alert-box-container .toggle-alert").click(function() {
        $(this).parents(".alert-box").slideUp(function() {
            $(this).parents(".alert-box").remove();
        });
        return false;
    });
}
/* Ready */
$(document).ready(function() {
   // NN_FRAMEWORK.Loading();
   NN_FRAMEWORK.Tools();
   NN_FRAMEWORK.Popup();
   NN_FRAMEWORK.WowAnimation();
   NN_FRAMEWORK.AltImages();
   NN_FRAMEWORK.BackToTop();
    //NN_FRAMEWORK.FixMenu();
    NN_FRAMEWORK.Mmenu();
    NN_FRAMEWORK.OwlPage();
    NN_FRAMEWORK.OwlProDetail();
    NN_FRAMEWORK.Toc();
    NN_FRAMEWORK.Cart();
    NN_FRAMEWORK.SimplyScroll();
    NN_FRAMEWORK.Tabs();
    NN_FRAMEWORK.Videos();
    NN_FRAMEWORK.Photobox();
    NN_FRAMEWORK.Search();
    // NN_FRAMEWORK.DatetimePicker();
    // login resgirter
    NN_FRAMEWORK.Login();
    NN_FRAMEWORK.PostTin();

});