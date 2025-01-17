$(document).ready(function () {
    const mainVisualSwiper = new Swiper(".main-visual-swiper", {
        pagination: {
            el: ".swiper-pagination",
        },
    });

    const mainCoachingSwiper = new Swiper('.main-coaching-swiper', {
        slidesPerView: 5,
        spaceBetween: 20,
        loop: true, 
        autoplay: {
            delay: 2000,
            disableOnInteraction: false,
        },
        speed: 800, 
    });

    const mainExpertSwiper = new Swiper('.main-expert-swiper', {
        spaceBetween: 40,
        loop: true, 
        autoplay: {
            delay: 0,
            disableOnInteraction: false,
        },
        speed: 5000, 
        freeMode: true,
        freeModeMomentum: true, 
        breakpoints: {
            1024: {
                slidesPerView: 5,
            },
            1440: {
                slidesPerView: 6,
            },
            1640: {
                slidesPerView: 7,
            },
        },
    });

    const mainReviewSwiper = new Swiper(".main-review-swiper", {
        pagination: {
            el: ".swiper-pagination",
        },
        spaceBetween: 20,
        loop: true, 
        autoplay: {
            delay: 3000,
            disableOnInteraction: false,
        },
        centeredSlides: true,
        breakpoints: {
            1024: {
                slidesPerView: 3,
            },
            1440: {
                slidesPerView: 4,
            }
        },
    });

    $('.tab').on('click', function() {
        const tabId = $(this).data('tab');

        $('.tab').removeClass('active');
        $(this).addClass('active');

        $('.tab-content').removeClass('active');
        $('#' + tabId).addClass('active');
    });

    let isHovered = false; // header 영역에 마우스가 있는지 추적

    // .header-menu > li > a에 hover 이벤트 추가
    $(".header-menu > li > a").hover(
        function () {
            isHovered = true; // 마우스가 header 영역 안에 있음
            $(this).parent("li").addClass("active"); // li에 .active 클래스 추가
            $(".header-submenu").stop(true, true).slideDown(); // 서브메뉴 보이기
        },
        function () {
            isHovered = false; // 마우스가 header를 벗어남 (이벤트 상태 유지 필요)
            setTimeout(() => {
                if (!isHovered) {
                    closeSubmenu();
                }
            }, 300);
        }
    );

    // 서브메뉴에 마우스를 올리면 유지되도록 설정
    $(".header-submenu").hover(
        function () {
            isHovered = true; // 마우스가 서브메뉴에 있음
            $(".header-submenu").stop(true, true).slideDown(); // 서브메뉴 유지
        },
        function () {
            isHovered = false; // 마우스가 서브메뉴를 벗어남
            setTimeout(() => {
                if (!isHovered) {
                    closeSubmenu();
                }
            }, 300);
        }
    );

    // .header 전체 영역에 마우스가 없을 경우 서브메뉴 닫기
    $(".header").hover(
        function () {
            isHovered = true; // 마우스가 header 안에 있음
        },
        function () {
            isHovered = false; // 마우스가 header를 벗어남
            setTimeout(() => {
                if (!isHovered) {
                    closeSubmenu();
                }
            }, 300);
        }
    );

    // 서브메뉴 닫기 함수
    function closeSubmenu() {
        $(".header-menu > li.active").removeClass("active"); // li에서 .active 클래스 제거
        $(".header-submenu").stop(true, true).slideUp(); // 서브메뉴 숨기기
    }
});