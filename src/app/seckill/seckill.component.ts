import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-seckill",
  templateUrl: "./seckill.component.html",
  styleUrls: ["./seckill.component.scss"]
})
export class SeckillComponent implements OnInit {
  int_hours: any;
  int_minutes: any;
  int_seconds: any;
  data = {
    seckill: [
      {
        name: "xxx",
        price: 998,
        discountPrice: 299,
        pic: "/assets/images/home/icon1.png"
      },
      {
        name: "xxx",
        price: 998,
        discountPrice: 299,
        pic: "/assets/images/home/icon2.png"
      },
      {
        name: "xxx",
        price: 998,
        discountPrice: 299,
        pic: "/assets/images/home/icon3.png"
      },
      {
        name: "xxx",
        price: 998,
        discountPrice: 299,
        pic: "/assets/images/home/icon4.png"
      },
      {
        name: "xxx",
        price: 998,
        discountPrice: 299,
        pic: "/assets/images/home/icon5.png"
      },
      {
        name: "xxx",
        price: 998,
        discountPrice: 299,
        pic: "/assets/images/home/icon6.png"
      },
      {
        name: "xxx",
        price: 998,
        discountPrice: 299,
        pic: "/assets/images/home/icon7.png"
      },
      {
        name: "xxx",
        price: 998,
        discountPrice: 299,
        pic: "/assets/images/home/icon8.png"
      },
      {
        name: "xxx",
        price: 998,
        discountPrice: 299,
        pic: "/assets/images/home/icon9.png"
      }
    ]
  };
  show_time() {
    let time_start = new Date().getTime();
    let time_end = new Date(1582264800000).getTime();
    1582351200000;
    //console.log(time_start, time_end);
    let time_distance = time_end - time_start;
    let t = 0;
    if (time_distance == 0) {
      t = time_end;
      time_start = t;
      time_end = time_end + 86400000;
      this.show_time();
      return false;
    }
    // 天
    let int_day = Math.floor(time_distance / 86400000);
    time_distance -= int_day * 86400000;
    // 时
    this.int_hours = Math.floor(time_distance / 3600000);
    if (this.int_hours < 10) {
      this.int_hours = "0" + this.int_hours;
    }
    time_distance -= this.int_hours * 3600000;
    // 分
    this.int_minutes = Math.floor(time_distance / 60000);
    if (this.int_minutes < 10) {
      this.int_minutes = "0" + this.int_minutes;
    }
    time_distance -= this.int_minutes * 60000;
    // 秒
    this.int_seconds = Math.floor(time_distance / 1000);
    if (this.int_seconds < 10) {
      this.int_seconds = "0" + this.int_seconds;
    }
  }

  constructor() {}

  ngOnInit() {
    this.show_time();
  }

  ngAfterViewInit(): void {
    setInterval(() => {
      this.show_time();
    }, 1000);
  }
}
