import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css']
})
export class BannerComponent implements OnInit {

  constructor() { }
  banner = [
    {
      img: "assets/img/bg.jpg",
      subtitle: "Value in Cleanliness",
      title: "Making The Difference <br> That You Can See & Feel"
    }
    // {
    //   img: "assets/img/banner/banner.jpg",
    //   subtitle: "Making a Difference",
    //   title: "Making The Difference <br> That You Can See and Feel"
    // },
    // {
    //   img: "assets/img/banner/banner.jpg",
    //   subtitle: "Making a Difference",
    //   title: "Making The Difference <br> That You Can See and Feel"
    // }
  ];
  settings = {
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    speed: 500,
    arrows: true,
    fade: false,
    dots: false,
    swipe: true,
    adaptiveHeight: true,
    nextArrow: '<button class="slick-arrow next-arrow"><i class="fal fa-long-arrow-right"></i></button>',
    prevArrow: '<button class="slick-arrow prev-arrow"><i class="fal fa-long-arrow-left"></i></button>',
    responsive: [{
      breakpoint: 768,
      settings: {
        arrows: false
      }
    }]
  };

  ngOnInit(): void {
  }

}
