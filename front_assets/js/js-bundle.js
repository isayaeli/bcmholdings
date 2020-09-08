! function s(a, r, l) {
    function c(t, e) {
        if (!r[t]) {
            if (!a[t]) {
                var o = "function" == typeof require && require;
                if (!e && o) return o(t, !0);
                if (u) return u(t, !0);
                var n = new Error("Cannot find module '" + t + "'");
                throw n.code = "MODULE_NOT_FOUND", n
            }
            var i = r[t] = {
                exports: {}
            };
            a[t][0].call(i.exports, function(e) {
                return c(a[t][1][e] || e)
            }, i, i.exports, s, a, r, l)
        }
        return r[t].exports
    }
    for (var u = "function" == typeof require && require, e = 0; e < l.length; e++) c(l[e]);
    return c
}({
    1: [function(e, t, o) {


        var animationLoader = {
            loaderManBottom: function() {
                $('.loader_man').addClass('bottom');
            },
            loaderManRight: function() {
                $('.loader_man').addClass('right');
            },
            loaderLogo: function() {
                $('.loader_logo').addClass('right');
            },
            loaderFull: function() {
                $('.loader').addClass('full');
            },
            loaderAnimationPages: function() {
                $('.animation_loader').addClass('z-index');
            },
            loaderContainer: function() {
                $('.container').addClass('z-index');
            },
            loaderHeader: function() {
                $('header').addClass('z-index');
            },
            loader: function() {
                animationLoader.loaderManBottom();
                setTimeout(function() {
                    animationLoader.loaderFull();
                }, 1000);
                setTimeout(function() {
                    animationLoader.loaderManRight();
                    animationLoader.loaderLogo();
                    animationLoader.loaderContainer();
                    animationLoader.loaderHeader();
                }, 1500);
                setTimeout(function() {
                    animationLoader.loaderAnimationPages();
                }, 2000)
            }
        };
        var headerFunctions = {
            headerButton: function() {
                $('#burger').toggleClass('open');
                $('.header_menu').toggleClass('active');
            },
            headerOpen: function() {
                $('header').addClass('active');
                $('#burger').addClass('open');
                $('.header_menu').addClass('active');
            },
            headerClose: function() {
                $('.header_list , .header_footer').removeClass('active');
                $('#burger').removeClass('open');
                $('.header_menu').removeClass('active');
            },
            headerAnimateShow: function() {
                setTimeout(function() {
                    $('.header_list , .header_footer').addClass('active');
                }, 200)
                setTimeout(function() {
                    $('.header_list li').each((index, element) => {
                        setTimeout(() => element.classList.add('animate'), 200 * index);
                    });
                }, 300);
                
            },
            headerAnimateClose: function() {
                setTimeout(function() {
                    $('header').removeClass('active');
                }, 800)
                setTimeout(function() {
                    $('.header_list li').each((index, element) => {
                        setTimeout(() => element.classList.remove('animate'), 10 * index)
                    });
                }, 200);
            }
        };
        var sidebarFunctions = {
            sidebarMobileActive: function() {
                $('aside').addClass('active');
            },
            sidebarMobileDefault: function() {
                $('aside').removeClass('active');
            }
        };
        var animationIndex = {
            animationPhotoCenter: function() {
                $('.sections_wrap_photos').addClass('center');
            },
            animationPhotoCenterRemove: function() {
                $('.sections_wrap_photos').removeClass('center');
            },
            animationPhotoCenterTop: function() {
                $('.sections_wrap_photos').addClass('center_top');
            },
            animationPhotoCenterTopRemove: function() {
                $('.sections_wrap_photos').removeClass('center_top');
            },
            animationPhotoBottom: function() {
                $('.sections_wrap_photos').addClass('bottom');
            },
            animationPhotoBottomRemove: function() {
                $('.sections_wrap_photos').removeClass('bottom');
            },

            animationPhotoshareholders: function() {
                $('.sections_wrap_photos').addClass('shareholders');
            },

            animationPhotoshareholdersRemove: function() {
                $('.sections_wrap_photos').removeClass('shareholders');
            },

            animationPhotoClose: function() {
                $('.sections_wrap_photos').addClass('none');
            },
            animationPhotoShow: function() {
                $('.sections_wrap_photos').removeClass('none');
            },
            animatePhotoBackground: function() {
                $('.section_photo').addClass('active');
            },
            animateBackgroundWhite: function() {
                document.getElementsByClassName('grid')['0'].classList.add("white");
            },
            animateBackgroundWhiteRemove: function() {
                document.getElementsByClassName('grid')['0'].classList.remove('white');
            },
            
            animateCardRemove: function() {
                $('.section_photo_card').removeClass('active');
            }
        };
        var popupFunctions = {
            openPopup: function() {
                $('body').addClass('overflow');
                $('.container').addClass('left');
                $('.animation_loader').addClass('left');
                $('.popup').addClass('active');
                $('.popup .content').addClass('active');

                $('.popup.active .popup_bg').css({
                    'left':'-100vw'
                });

            },
            closePopup: function() {
                setTimeout(function() {
                    $('body').removeClass('overflow');
                    $('.container').removeClass('left');
                    $('.animation_loader').removeClass('left');
                    $('.popup').removeClass('active');
                }, 300);

                setTimeout(function() {
                    $('.popup .popup_bg').css({
                        'left':'0%'
                    });
                }, 1100);

                $('.popup .content').removeClass('active');
            }
        };
        animationLoader.loader();
        
        $(document).on('click', 'a[name="popup-open"]', function(e) {
            localStorage.setItem('openPopup', $(this).html());
        });

        $(document).mouseup(function(e) {
            var block = $("header");
            if (!block.is(e.target) && block.has(e.target).length === 0) {
                $('.header_button').removeClass('active');
                headerFunctions.headerClose();
                headerFunctions.headerAnimateClose();
            }
        });
        $(document).on('click', '.popup_handle_investment_shareholders ', function(e) {
            if ($(this).hasClass('shareholders_person')) {
                var needle = $(this).data('needle');
                var item = gInvshareholders.find(function(x) {
                    return x.name == needle
                }) || null;
                if (item) {
                    $('#name').html(item.name);
                    $('#position').html(item.position);
                    $('#left_subtitle').html('<a href="' + item.left_subtitle_link + '">' + item.left_subtitle + '</a>');
                    $('#left_text_with_link').html(item.left_text_with_link);
                    $('#left_text_with_link').attr('href', item.left_text_link);
                    $('#link_to_linkedin').attr('href', item.link_to_linkedin);
                    $('#blockquote_description').html(item.blockquote_description);
                    $('#description').html(item.description);
                }
            }
        });
        $(document).on('click', '.popup_handle_shareholders', function(e) {
            if ($(this).hasClass('shareholders_person')) {
                var needle = $(this).data('needle');
                var item = gFundshareholders.find(function(x) {
                    return x.name == needle
                }) || null;
                if (item) {
                    $('#name').html(item.name);
                    $('#position').html(item.position);
                    $('#left_subtitle').html(item.left_subtitle);
                    $('#left_subtitle').html('<a href="' + item.left_subtitle_link + '">' + item.left_subtitle + '</a>');
                    $('#left_text_with_link').html(item.left_text_with_link);
                    $('#left_text_with_link').attr('href', item.left_text_link);
                    $('#link_to_linkedin').attr('href', item.link_to_linkedin);
                    $('#blockquote_description').html(item.blockquote_description);
                    $('#description').html(item.description);
                }
            }
        });
        $(document).on('click', '.popup_handle_partner', function(e) {
            if ($(this).hasClass('partners_slide')) {
                var needle = $(this).data('needle');
                var item = gPartner.find(function(x) {
                    return x.name == needle
                }) || null;
                if (item) {
                    $('#name').html(item.name);
                    $('#position').html(item.position);
                    $('#left_subtitle').html('<a href="' + item.left_subtitle_link + '">' + item.left_subtitle + '</a>');
                    $('#left_text_with_link').html(item.left_text_with_link);
                    $('#left_text_with_link').attr('href', item.left_text_link);
                    $('#link_to_linkedin').attr('href', item.link_to_linkedin);
                    $('#blockquote_description').html(item.blockquote_description);
                    $('#description').html(item.description);
                }
            }
        });
        $(document).on('click', '.popup_handle_portfilio', function(e) {
            if ($(this).hasClass('investors_info')) {
                var needle = $(this).data('needle');
                var item = ginvestors.find(function(x) {
                    return x.needle == needle
                }) || null;
                if (item) {
                    $('#company_name').html(item.company);
                    $('#short_description').html(item.small_description);
                    $('#established').html(item.established);
                    $('#founder').html(item.founder);
                    $('#link').html(item.link);
                    $('#link').attr('href', item.link);
                    $('#blockquote').html(item.blockquote);
                    $('#description').html(item.description);
                    $('#popup_slider').html('');
                    item.images.forEach(function(itemm, i, arr) {
                        $('#popup_slider').append('<div class="popup_slide">' +
                            '<img src="' + itemm.image + '" alt="">' +
                            '</div>');
                    });
                }
            }
        });

        $(document).ready(function() {
            $('.header_button').click(function() {
                $(this).toggleClass('active');
                if ($(this).hasClass('active')) {
                    headerFunctions.headerOpen();
                    headerFunctions.headerAnimateShow();
                } else {
                    headerFunctions.headerClose();
                    headerFunctions.headerAnimateClose();
                }
            });
            $('.open_popup').click(function() {
                popupFunctions.openPopup();
                $.fn.fullpage.setMouseWheelScrolling(false);
                $.fn.fullpage.setAllowScrolling(false);
                setTimeout(function() {
                    $('#popup_slider').slick({
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        arrows: true,
                        fade: true,
                        prevArrow: '.popup_nav_prev',
                        nextArrow: '.popup_nav_next',
                        responsiveWidth: 768
                    })
                }, 1000)
            });
            $('.shareholders_page .open_popup').click(function() {
                startProgressbar(true);
                popupFunctions.openPopup();
                $.fn.fullpage.setMouseWheelScrolling(false);
                $.fn.fullpage.setAllowScrolling(false);
                setTimeout(function() {
                    $('#popup_slider').slick({
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        arrows: true,
                        fade: true,
                        prevArrow: '.popup_nav_prev',
                        nextArrow: '.popup_nav_next',
                        responsiveWidth: 768
                    });
                }, 1000)
            });
            $('.popup_clouse, .popup_bg').click(function() {
                popupFunctions.closePopup();
                $.fn.fullpage.setMouseWheelScrolling(true);
                $.fn.fullpage.setAllowScrolling(true);
                setTimeout(function() {
                    $('#popup_slider').slick('unslick');
                }, 1000)
            });
            $(".form_input").focus(function() {
                $(this).parent().siblings(".form_title").addClass("top");
                $(this).parent().parent('label').addClass('focus');
            });
            $(".form_input").focusout(function() {
                if ($(this).val() === "") {
                    $(this).parent().siblings(".form_title").removeClass("top");
                    $(this).parent().parent('label').removeClass('focus');
                }
            });
            $('.contact #submit').click(function() {
                setTimeout(function() {
                    $('.wpcf7-form-control').each(function(a) {
                        $(this).parent().siblings('.button_error').removeClass('block');
                        if ($(this).hasClass('wpcf7-not-valid')) {
                            $(this).parent().siblings('.button_error').addClass('block');
                        }
                    })
                }, 500)
            });
            $('.button_error').click(function() {
                $(this).siblings('.wpcf7-form-control-wrap').find('.wpcf7-form-control').val("");
            })


            // if ($(window).width() < 500) {
            //     $('.sidebar_link[data-href^="#"]').on('click', function(e) {
            //         $('.sidebar_link').removeClass('active');
            //         $(this).addClass('active');
            //         MobileSidebar();
            //     });

            //     function sidebarActiveLink(link = '') {
            //         $('.sidebar_nav').append('<div id="activeLink"></div>');
            //         if (link != '') {
            //             var left = $('.sidebar_link[data-href="#' + link + '"]').parent().position().left;
            //             var width = $('.sidebar_link[data-href="#' + link + '"]').width();
            //         } else {
            //             var left = $('.sidebar_nav li.active a').parent('li').position().left;
            //             var width = $('.sidebar_nav li.active a').width();
            //         }
            //         $('#activeLink').animate({
            //             'left': left,
            //             'width': width
            //         })
            //     }
            // } else {
            //     $('.sidebar_nav').append('<span id="activeLink"></span>');

            //     function sidebarActiveLink(link = '') {
            //         if (link != '') {
            //             var top = $('.sidebar_link[data-href="#' + link + '"]').parent().position().top;
            //             var height = $('.sidebar_link[data-href="#' + link + '"]').height();
            //         } else {
            //             // var top = $('.sidebar_nav li.active a').parent().position().top;
            //             // var height = $('.sidebar_nav li.active a').height();
            //         }
            //         $('#activeLink').animate({
            //             'top': top,
            //             'height': height
            //         });
            //     }
            // }

            $('.content_link').on('click', function() {
                $('.contact_tab').removeClass('active');
                $('#contact_form').addClass('active');
            });
            $('#contact_back').on('click', function(tab_event) {
                tab_event.preventDefault();
                $('.contact_tab').removeClass('active');
                $('#contact_info').addClass('active');
            });
            let pageName = $('#wrapper').attr('class');
            switch (pageName) {
                case 'home_page':
                    function aboutCounter() {
                        $('.about_item span').each(function() {
                            var $this = $(this),
                                countTo = $this.attr('data-count');
                            $({
                                countNum: $this.text()
                            }).animate({
                                countNum: countTo
                            }, {
                                duration: 2000,
                                easing: 'linear',
                                step: function() {
                                    $this.text(Math.floor(this.countNum));
                                },
                                complete: function() {
                                    $this.text(this.countNum);
                                }
                            });
                        });
                    }
                    $('#home_content').fullpage({
                        sectionSelector: 'section',
                        anchors: ['home', 'about', 'investors', 'shareholders', 'contact'],
                        menu: '#home_menu',
                        slidesNavigation: true,
                        scrollOverflow: true,
                        normalScrollElements: 'aside .sidebar',
                        responsiveWidth: 768,
                        scrollingSpeed: 700,
                        fitToSectionDelay: 700,
                        onLeave: function (origin, destination, direction, nextIndex) {
                            // sidebarActiveLink();
                            MobileSidebar(destination.anchor);
                            // clouseRotate();
                            if (destination.anchor == 'home') {
                                // Жовтий бакграунд
                                animationIndex.animateBackgroundWhiteRemove();
                                // Маска скрола (Показати) 
                                animationIndex.animationPhotoShow();
                                // Видалити всі стани маски
                                animationIndex.animationPhotoCenterTopRemove();
                                animationIndex.animationPhotoCenterRemove();
                                animationIndex.animationPhotoBottomRemove();
                                // Видалити появу картинки 
                                // animationIndex.animateCardRemove();
                            } else if (destination.anchor == 'about'){
                                // Білий бакграунд
                                animationIndex.animateBackgroundWhite();
                                // Показати монету на секції
                                animationIndex.animatePhotoBackground();
                                // Додати бакграунд масці
                                animationIndex.animationPhotoShow();
                                // Cirle animation
                                //animationIndex.animationPhotoCenterTop();
                                // Видалити необхідні стани масціки
                                animationIndex.animationPhotoCenterRemove();
                                animationIndex.animationPhotoBottomRemove();
                                // Видалити бакшраун маски
                                setTimeout(function () {
                                    animationIndex.animationPhotoClose();
                                }, 1000);
                                aboutCounter();
                            } else if (destination.anchor == 'investors'){
								// Білий бакграунд
                                animationIndex.animateBackgroundWhite();
                                // Показати монету на секції
                                animationIndex.animatePhotoBackground();
                                // Додати бакграунд масці
                                animationIndex.animationPhotoShow();
                                // Додати необхідний стан масці
                                //animationIndex.animationPhotoBottom();
                                // Видалити необхідні стани масціки
                                animationIndex.animationPhotoCenterRemove();
                                animationIndex.animationPhotoCenterTopRemove();
                                // Видалити бакшраун маски
                                setTimeout(function () {
                                    animationIndex.animationPhotoClose();
                                }, 1000);
                            } else if (destination.anchor == 'shareholders'){
                                
								// Білий бакграунд
                                animationIndex.animateBackgroundWhite();
                                // Показати монету на секції
                                animationIndex.animatePhotoBackground();
                                // Додати бакграунд масці
                                animationIndex.animationPhotoShow();
                                // Додати необхідний стан масці
                                //animationIndex.animationPhotoCenter();
                                // Видалити необхідні стани масціки
                                animationIndex.animationPhotoBottomRemove();
                                animationIndex.animationPhotoCenterTopRemove();
                                // Видалити бакшраун маски
                                setTimeout(function () {
                                    animationIndex.animationPhotoClose();
                                }, 1000);
								
								
                            } else if (destination.anchor == 'contact'){
                                // Жовтий бакграунд
                                animationIndex.animateBackgroundWhiteRemove();
                                // Маска скрола (Показати) 
                                animationIndex.animationPhotoShow();
                                // Видалити всі стани маски
                                animationIndex.animationPhotoCenterTopRemove();
                                animationIndex.animationPhotoCenterRemove();
                                animationIndex.animationPhotoBottomRemove();
                            }
                        },
                        afterLoad: function (origin,destination,anchor,anchorLink, index) {
                            // alert('step 6');
                            // sidebarActiveLink();
                        }
                    });
                    const homeVideo = Plyr.setup('.investors_video_frame', {});
                    $('.investors_slide').each(function(i) {
                        i += 1;
                        var num = i;
                        if (num < 10) {
                            num = '0' + num
                        }
                        $('#nav_investors_slider .all').html(num);
                    });
                    $('#investors_slider').slick({
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        arrows: true,
                        infinite: true,
                        prevArrow: '.investors_nav_prev',
                        nextArrow: '.investors_nav_next',
                        responsive: [{
                            breakpoint: 768,
                            settings: {
                                variableWidth: true,
                                touchMove: false,
                                swipe: false,
                                fade: true
                            }
                        }, ]
                    }).on('beforeChange', function(event, slick, currentSlide, nextSlide) {
                        homeVideo[currentSlide].pause();
                    });
                    // if ($(window).width() <= 500) {
                    //     $('.section_photo_card').click(function() {
                    //         $(this).toggleClass('rotate');
                    //     });
                    // }
                    initSlideNavinvestors('investors_slider');

                    function initSlideNavinvestors(slideId) {
                        $('#' + slideId).on('init reInit afterChange', function(event, slick, currentSlide, nextSlide) {
                            currentSlide++;
                            let current = LdgZero2(currentSlide);
                            $('#nav_' + slideId + ' .current').text(current)
                        });
                    }

                    function LdgZero2(n) {
                        return "0".substring(n >= 10) + n;
                    }

                    // $('.section_photo_card').hover(function(){



                    //     $(this).addClass('rotate');
                    //     $(this).unbind('mouseenter mouseleave');

                    //     setTimeout(function() {
                    //         $('.section_photo_card').removeClass('rotate');
                    //         $('.section_photo_card').bind('mouseenter mouseleave');
                    //     }, 4000);
                    // });


                    $('.section_photo_card').bind('mouseenter mouseleave click', onPlayClick);

                    function clouseRotate(){
                        $('.section_photo_card').removeClass('rotate');
                        $('.section_photo_card').bind('mouseenter mouseleave click');
                    }

                    function onPlayClick(){
                        $(this).addClass('rotate');
                        $(this).unbind('mouseenter mouseleave click', onPlayClick, animationIndex.animationPhotoClose());

                        setTimeout(function(){
                            $('.section_photo_card').removeClass('rotate');
                        }, 4000);
                        setTimeout(function(){
                            $('.section_photo_card').bind('mouseenter mouseleave click', onPlayClick, animationIndex.animationPhotoClose());
                        }, 5000);
                    }
                
                    break;

                case 'blog_page':

                    setTimeout(function() {
                        $('.animation_loader').addClass('remove');
                    }, 2400);

                    $('#blog_content').fullpage({
                        sectionSelector: 'section',
                        anchors: ['stories', 'question', 'videos'],
                        menu: '#blog_menu',
                        normalScrollElements: 'aside .sidebar',
                        autoScrolling: false,
                        responsiveWidth: 768,
                        onLeave: function(origin, destination, direction) {
                            MobileSidebar(destination.anchor);
                            var leavingSection = this;
                            if (origin.index == 0 && direction == 'down') {
                                animationIndex.animateBackgroundWhite();
                            }
                        },
                        afterLoad: function(origin, destination, anchor, anchorLink, index) {
                            animationIndex.animateBackgroundWhite();
                        },
                        afterResponsive: function(destination, isResponsive) {
                            if ($(window).width() <= 500) {
                                MobileSidebar(destination.anchor);
                                setTimeout(function() {
                                    animationIndex.animateBackgroundWhite();
                                }, 100);
                            }
                        }
                    });
                    if ($(window).width() <= 500) {
                        $('.question_item_title').click(function() {
                            $(this).parent().siblings('.question_item').find('.question_item_content').slideUp();
                            $(this).parent().siblings('.question_item').find('.question_button').removeClass('active');
                            $(this).siblings('.question_item_content').slideToggle();
                            $(this).find('.question_button').toggleClass('active');
                        });
                    } else {
                        $('.question_item_title').click(function() {
                            $(this).parent().siblings('.question_item').find('.question_item_content').slideUp();
                            $(this).parent().siblings('.question_item').find('.question_button').removeClass('active')
                            $(this).siblings('.question_item_content').slideToggle();
                            $(this).find('.question_button').toggleClass('active');
                        });
                    }
                    $('.stories_slide').each(function(i) {
                        i += 1;
                        var num = i;
                        if (num < 10) {
                            num = '0' + num
                        }
                        $('#nav_stories_slider .all').html(num);
                    });
                    if ($("#stories_slider").find('.stories_slide').length > 1) {
                        $('#stories_slider').slick({
                            slidesToShow: 2,
                            slidesToScroll: 1,
                            arrows: true,
                            prevArrow: '.stories_nav_prev',
                            nextArrow: '.stories_nav_next',
                            responsiveWidth: 768,
                            pauseOnHover: false,
                            autoplay: true,
                            autoplaySpeed: 5000,
                            responsive: [{
                                breakpoint: 500,
                                settings: {
                                    slidesToShow: 2
                                }
                            }]
                        })
                    }
                    $('.video_slide').each(function(i) {
                        i += 1;
                        var num = i;
                        window.num = num;
                        if (num < 10) {
                            num = '0' + num
                        }
                        $('#nav_video_slider .all').html(num);
                    });
                    const blogVideo = Plyr.setup('.blog_video_frame', {});
                    $('div.video_slide_photo').on('click', function() {
                        let parent = $(this).parents('.slick-slide');
                        if (!parent.hasClass('slick-current')) {
                            let slickIndex = parent.data('slick-index');
                            $('#video_slider').slick('slickGoTo', slickIndex);
                            if (window.num <= slickIndex) {
                                blogVideo[0].play();
                            }
                        }
                    })
                    if ($("#video_slider").find('.video_slide').length > 1) {
                        $('#video_slider').slick({
                            slidesToShow: 2,
                            slidesToScroll: 1,
                            arrows: true,
                            prevArrow: '.video_nav_prev',
                            nextArrow: '.video_nav_next',
                            responsive: [{
                                breakpoint: 500,
                                settings: 'unslick'
                            }]
                        }).on('beforeChange', function(event, slick, currentSlide, nextSlide) {
                            blogVideo[currentSlide].stop();
                        })
                    }
                    initSlideNav('stories_slider');
                    initSlideNav('video_slider');

                    function initSlideNav(slideId) {
                        $('#' + slideId).on('init reInit afterChange', function(event, slick, currentSlide, nextSlide) {
                            currentSlide++;
                            let current = LdgZero(currentSlide);
                            $('#nav_' + slideId + ' .current').text(current)
                        });
                    }

                    function LdgZero(n) {
                        return "0".substring(n >= 10) + n;
                    }

                    if($(window).width() < 500){
                        $('.sidebar_link').on('click', function(){
                            customMobileLink()
                        });
                    } 
                    break;
                
                case 'story_page':
                    $('#story_content').fullpage({
                        sectionSelector: 'section',
                        anchors: ['stories', 'question', 'videos'],
                        menu: '#blog_menu',
                        scrollOverflow: true,
                        scrollOverflowReset: true,
                        normalScrollElements: 'aside .sidebar',
                        responsiveWidth: 768,
                        scrollingSpeed: 600,
                        fitToSectionDelay: 600,
                        onLeave: function(origin, destination, direction) {
                            var leavingSection = this;
                            if (origin.index == 0 && direction == 'down') {
                                animationIndex.animateBackgroundWhite();
                            }
                        },
                        afterLoad: function(origin) {
                            setTimeout(function() {
                                animationIndex.animateBackgroundWhite();
                            }, 1500);
                        },
                        afterResponsive: function(isResponsive) {
                            if ($(window).width() <= 500) {
                                $('#story_content').fullpage.setAutoScrolling(false);
                            }
                        }
                    });
                    $('.stories_slide').each(function(i) {
                        i += 1;
                        var num = i;
                        if (num < 10) {
                            num = '0' + num
                        }
                        $('#nav_stories_slider .all').html(num);
                    });
                    $('#stories_slider').slick({
                        slidesToShow: 2,
                        slidesToScroll: 1,
                        arrows: true,
                        prevArrow: '.stories_nav_prev',
                        nextArrow: '.stories_nav_next',
                        responsiveWidth: 768,
                        pauseOnHover: false,
                        autoplay: false,
                        autoplaySpeed: 5000,
                        responsive: [{
                            breakpoint: 500,
                            settings: {
                                slidesToShow: 1
                            }
                        }]
                    });

                    if($(window).width() < 500){
                        $('.sidebar_link').on('click', function(){
                            customMobileLink()
                        });
                    } 
                    break;

                case 'manifestoInfo_page':

                    setTimeout(function() {
                        $('.animation_loader').addClass('remove');
                    }, 2400);

                    $('#manifestoInfo_content').fullpage({
                        sectionSelector: 'section',
                        anchors: ['manifesto', 'big_companies', 'experience', 'our_nature'],
                        menu: '#manifesto_menu',
                        slidesNavigation: true,
                        normalScrollElements: 'aside .sidebar',
                        autoScrolling: false,
                        onLeave: function(origin, destination, direction, anchor) {
                            MobileSidebar(destination.anchor);
                            if (destination.anchor == 'manifesto') {
                                animationIndex.animateBackgroundWhiteRemove();
                            } else if (destination.anchor == 'big_companies') {
                                animationIndex.animateBackgroundWhite(); 
                                animationIndex.animationPhotoShow();
                                // Видалити всі стани маски
                                animationIndex.animationPhotoshareholdersRemove();  
                            } else if (destination.anchor == 'experience') {
                                animationIndex.animateBackgroundWhite();
                            } else if (destination.anchor == 'our_nature') {
                                animationIndex.animateBackgroundWhite();
                            }
                        },
                        afterLoad: function(origin, destination, anchor, anchorLink, index) {
                            if (destination.anchor == 'big_companies') {
                            } else if (destination.anchor == 'experience') {
                            } else if (destination.anchor == 'our_nature') {
                                manifestoSlider.slick('slickSetOption', {
                                    autoplay: false,
                                    autoplaySpeed: 1000
                                }, true);
                            }
                        }
                    });

                    $(window).scroll(function(){
                        var heightManifesto = $('.manifesto').height();
                            heightScroll = heightManifesto/2;

                        $(".title-3").each(function(a){
                            console.log($(this).offset().top )
                            if($(this).offset().top <= $(window).scrollTop() + heightScroll) {
                                $(this).addClass("active");
                            }else{
                                $(this).removeClass("active");
                            }
                        });
                    });    

                    const manifestoSlider = $('#manifesto_slider')
                    manifestoSlider.slick({
                        slidesToShow: 2,
                        slidesToScroll: 1,
                        arrows: true,
                        prevArrow: '.manifesto_nav_prev',
                        nextArrow: '.manifesto_nav_next',
                        variableWidth: true,
                        pauseOnHover: false,
                        responsive: [{
                            breakpoint: 500,
                            settings: {
                                variableWidth: false,
                                slidesToShow: 1
                            }
                        }]
                    });

                    $('.manifesto_joker').bind('mouseenter mouseleave click', hoverJoker);

                    function hoverJoker(){
                        $('.manifesto_joker img').addClass('animate');
                        $('.manifesto_joker').unbind('mouseenter mouseleave click', hoverJoker);

                        setTimeout(function(){
                            $('.manifesto_joker img').removeClass('animate');
                        }, 2000);
                        setTimeout(function(){
                            $('.manifesto_joker').bind('mouseenter mouseleave click', hoverJoker);
                        }, 2100);
                    }

                    if($(window).width() < 500){
                        $('.sidebar_link').on('click', function(){
                            customMobileLink()
                        });
                    } 
                    break;

                case 'shareholders_page':
                    $('.shareholders_page .open_popup').click(function() {
                        startProgressbar(true);
                        popupFunctions.openPopup();
                        $.fn.fullpage.setMouseWheelScrolling(false);
                        $.fn.fullpage.setAllowScrolling(false);
                        setTimeout(function() {
                            $('#popup_slider').slick({
                                slidesToShow: 1,
                                slidesToScroll: 1,
                                arrows: true,
                                fade: true,
                                prevArrow: '.popup_nav_prev',
                                nextArrow: '.popup_nav_next',
                                responsiveWidth: 768
                            })
                        }, 1000)
                    });
                    var time = 1;
                    var $bar, $partner_slider, isPause, tick, percentTime;
                    $partner_slider = $('#partners_slider');
                    $partner_slider.slick({
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        autoplay: false,
                        autoplaySpeed: 5000,
                        arrows: true,
                        infinite: true,
                        prevArrow: '.partners_slider_prev',
                        nextArrow: '.partners_slider_next',
                        fade: true,
                        pauseOnHover: false,
                    });
                    $('.partners_slide').each(function(b) {
                        b += 1;
                        var numPartners = b;
                        if (numPartners < 10) {
                            numPartners = '0' + numPartners
                        }
                        $('.partners_slider_count .all').html(numPartners);
                    });
                    initSlideNavPartner('partners_slider');

                    function initSlideNavPartner(slideId) {
                        $('#' + slideId).on('init reInit afterChange', function(event, slick, currentSlide, nextSlide) {
                            currentSlide++;
                            let current = LdgZero(currentSlide);
                            $('.partners_slider_count .current').text(current)
                        });
                    };

                    function LdgZero(n) {
                        return "0".substring(n >= 10) + n;
                    };
                    $bar = $('.partners_slider_line');

                    function startProgressbar(pause = false) {
                        resetProgressbar();
                        percentTime = 0;
                        isPause = pause || false;
                        tick = setInterval(interval, 30);
                    }

                    function interval() {
                        if (isPause === false) {
                            percentTime += 1 / (time + 0.7);
                            $bar.css({
                                width: percentTime + "%"
                            });
                            if (percentTime >= 100) {
                                $partner_slider.slick('slickNext');
                                startProgressbar();
                            }
                        }
                    }

                    function resetProgressbar() {
                        $bar.css({
                            width: 0 + '%'
                        });
                        clearTimeout(tick);
                    }

                    startProgressbar();
                    $('.partners_slider_next, .partners_slider_prev').click(function() {
                        startProgressbar();
                    });

                    let top = $('.partners_slide_content').offset().top;
                    let left = $('.partners_slide_content').offset().left;

                    $('#shareholders_content').fullpage({
                        sectionSelector: 'section',
                        anchors: ['shareholdersInfo', 'partners', 'shareholders', 'investment_shareholders'],
                        menu: '#blog_menu',
                        slidesNavigation: true,
                        scrollOverflow: true,
                        normalScrollElements: 'aside .sidebar',
                        responsiveWidth: 768,
                        scrollingSpeed: 700,
                        fitToSectionDelay: 700,
                        // responsiveWidth: 768,
                        onLeave: function(origin, destination, direction) {
                            // sidebarActiveLink();
                            MobileSidebar(destination.anchor);
                            var leavingSection = this;

                            if (destination.anchor == 'shareholdersInfo') {
                                // Жовтий бакграунд
                                animationIndex.animateBackgroundWhiteRemove();
                                // Маска скрола (Показати) 
                                animationIndex.animationPhotoShow();
                                // Видалити всі стани маски
                                animationIndex.animationPhotoshareholdersRemove();
                                // Видалити появу картинки 
                                // animationIndex.animateCardRemove();
                            } else if (destination.anchor == 'partners'){
                                // Білий бакграунд
                                animationIndex.animateBackgroundWhite();
                                // Показати монету на секції
                                animationIndex.animatePhotoBackground();
                                // Додати бакграунд масці
                                animationIndex.animationPhotoShow();
                                // Додати необхідний стан масці
                                animationIndex.animationPhotoshareholders();
                                // Видалити бакшраун маски
                                setTimeout(function () {
                                    animationIndex.animationPhotoClose();
                                }, 1000);

                                $('.sections_wrap_photos').css({
                                    'left': left,
                                    'top': top/8.7
                                })
                            } else if(destination.anchor == 'shareholders'){

                                // Білий бакграунд
                                animationIndex.animateBackgroundWhite();    
                                // Маска скрола (Показати) 
                                animationIndex.animationPhotoShow();
                                // Видалити всі стани маски
                                animationIndex.animationPhotoshareholdersRemove();   
                                    
                            }else if(destination.anchor == 'investment_shareholders'){

                                // Білий бакграунд
                                animationIndex.animateBackgroundWhite();    
                                // Маска скрола (Показати) 
                                animationIndex.animationPhotoShow();
                                // Видалити всі стани маски
                                animationIndex.animationPhotoshareholdersRemove();       
                            }

                        },
                        afterLoad: function(origin) {
                            // sidebarActiveLink();
                            var loc = location.hash
                            switch (loc) {
                                case '#shareholdersInfo':
                                    animationIndex.animateBackgroundWhiteRemove();
                                    break;
                                case '#partners':
                                    $partner_slider.slick('slickGoTo', 0);
                                    startProgressbar();
                                    break;
                            }
                        },
                    });

                    $('.popup_clouse, .popup_bg').click(function() {
                        popupFunctions.closePopup();
                        $.fn.fullpage.setMouseWheelScrolling(true);
                        $.fn.fullpage.setAllowScrolling(true);
                        setTimeout(function() {
                            $('#popup_slider').slick('unslick')
                        }, 1000)
                        startProgressbar()
                    });
                    setTimeout(function() {
                        if (localStorage.openPopup != undefined) {
                            let need = $('#partners_slider [data-needle="' + localStorage.openPopup + '"]');
                            if (need.length) {
                                $('#partners_slider').slick('slickGoTo', need.data('slick-index'));
                                $('#partners_slider div.slick-active a.open_popup').click();
                            } else {
                                $('.investment_shareholders [data-needle="' + localStorage.openPopup + '"]').click();
                                popupFunctions.openPopup();
                            }
                            localStorage.removeItem('openPopup');
                        };
                    }, 2000);
                    if($(window).width() < 500){
                        $('.sidebar_link').on('click', function(){
                            customMobileLink()
                        });
                    } 
                    break;
                
                case 'error404_page':
                    $('#error404_content').fullpage({
                        sectionSelector: 'section',
                        menu: '#blog_menu',
                        scrollOverflow: true,
                        scrollOverflowReset: true,
                        normalScrollElements: 'aside .sidebar',
                        onLeave: function(origin, destination, direction) {
                            var leavingSection = this;
                        },
                        afterLoad: function(origin) {
                            animationIndex.animateBackgroundWhite();
                        }
                    });

                    setTimeout(function() {
                        $('.manifesto_joker img').addClass('load');
                        setTimeout(function() {
                            $('.manifesto_joker img').removeClass('load');
                        }, 1750)
                    }, 2000);


                    $('.manifesto_joker').bind('mouseenter mouseleave click', hoverJoker);

                    function hoverJoker(){
                        $('.manifesto_joker img').addClass('animate');
                        $('.manifesto_joker').unbind('mouseenter mouseleave click', hoverJoker);

                        setTimeout(function(){
                            $('.manifesto_joker img').removeClass('animate');
                        }, 2000);
                        setTimeout(function(){
                            $('.manifesto_joker').bind('mouseenter mouseleave click', hoverJoker);
                        }, 2100);
                    }


                    break;
            }

            function MobileSidebar(activeLink) {
                let a;
                if (!activeLink) {
                    a = '.sidebar_nav li.active';
                } else {
                    a = '.sidebar_nav a[data-href="#' + activeLink + '"]';
                }
                var myScrollPos = $(a).offset().left +
                    $(a).outerWidth(true) / 2 +
                    $('.sidebar').scrollLeft() -
                    $('.sidebar').width() / 2 - 25;
                $('.sidebar').scrollLeft(myScrollPos);
                if (myScrollPos > 5) {
                    $('.sidebar').addClass('center')
                } else if (myScrollPos > 280) {
                    $('.sidebar').removeClass('center');
                    $('.sidebar').addClass('right');
                } else {
                    $('.sidebar').removeClass('center');
                    $('.sidebar').removeClass('right');
                }
            }

            function customMobileLink(){
                setTimeout(function() {    
                    $('.sidebar_link').each(function(e){
                        let href = $(this).attr('href');
                        if(href != undefined){
                            $(this).attr('href', href.split('/').pop())  
                        }
                    });
                }, 800);
            }
        });
        $(window).scroll(function() {
            if (jQuery(window).scrollTop() > 10) {
                sidebarFunctions.sidebarMobileActive();
            } else {
                sidebarFunctions.sidebarMobileDefault();
            }
        });
    }, {}]
}, {}, [1]);