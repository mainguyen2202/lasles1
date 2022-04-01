//  nhấn s

$(".customer-list").slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    dots:true,
    //  nhớ đồi "" thành dầu ` mới ra kết quả
    prevArrow: `<button type='button' class='slick-prev pull-left'><img src="./images1/arrow-left.svg"/></button>`,
    nextArrow: `<button type='button' class='slick-next pull-right'><img src="./images1/arrow-right.svg"/></button>`,  

     
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
          arrows: false // nó sẽ không hiển thị nút bấm
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
          arrows: false // nó sẽ không hiển thị nút bấm
        }
      },
      // {
      //   breakpoint: 600,
      //   settings: {
      //     slidesToShow: 2,
      //     slidesToScroll: 2
      //   }
      // },
      // {
      //   breakpoint: 480,
      //   settings: {
      //     slidesToShow: 1,
      //     slidesToScroll: 1
      //   }
      // }
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ]



      
  });

  // menu
  // click vaof menu
  const toggle=document.querySelector(".menu-toggle");
  const menu=document.querySelector(".menu");
  const activeClass="is-show";
  toggle.addEventListener("click",function(){
    menu.classList.add(activeClass);
  });

  // Tìm kiếm javascript div click outside
// click ra menu
  window.addEventListener('click', function(e){   
    if (!menu.contains(e.target) && ! e.target.matches(".menu-toggle")){
    menu.classList.remove(activeClass)
    }
  });
  
  