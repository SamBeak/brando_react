(function($, window, document){
    
    // 변수 중복 방지
    const wedding = {
        init(){
            this.header();
            this.section1();
            this.section2();
            this.section3();
        },
        header(){
            // 패럴럭스 구현
            // 스크롤 탑값이 아래로 내려가면 헤더에 on 클래스를 추가한다.
            // 스크롤 탑값이 위로 올라가면 헤더에 on 클래스를 삭제한다.            
            // console.log( `윈도우 스크롤 이벤트 $(window).scrollTop()  ${$(window).scrollTop()}` ); /* 스크롤 탑값 */
            // $(window).scrollTop() 값은 스크롤 이벤트가 발생 되어야만 동작한다.
            // $(window).resize(); // 창크기 높이 너비가 변하면 동작

            let newScroll = $(window).scrollTop();  // 새로운 스크롤값
            let oldScroll = newScroll;              // 이전 스크롤값   

            $(window).scroll(function(e){
                
                newScroll = $(window).scrollTop(); // 새로운 스크롤값
                   if(newScroll-oldScroll > 0 ){ // 스크롤값이 아래로 내려가면
                        $('#header').addClass('on'); // 헤더에 on 클래스를 추가.
                        $('#header').removeClass('off'); // 헤더에 off 클래스를 삭제.
                   }
                   if(newScroll-oldScroll < 0){ // 스크롤값이 위로 올라가면
                        $('#header').addClass('off'); // 헤더에 off 클래스를 추가.
                        $('#header').removeClass('on'); // 헤더에 on 클래스를 삭제.
                   }
                    

                oldScroll = newScroll; // 이전 스크롤값 갱신

            }); // 스크롤값이 변경되면 동작
        }
    }
    wedding.init();
})(jQuery, window, document); // 즉시 실행함수(IIFE)