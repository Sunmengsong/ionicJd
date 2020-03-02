import { Component, ViewChild } from "@angular/core";
import { IonSlides } from "@ionic/angular";

@Component({
  selector: "app-tab1",
  templateUrl: "tab1.page.html",
  styleUrls: ["tab1.page.scss"]
})
export class Tab1Page {
  @ViewChild("s1", { static: false }) slide: IonSlides;

  data = {
    carouselItem: [
      {
        cid: 1,
        pic: "/assets/images/home/1.jpg.dpg"
      },
      {
        cid: 2,
        pic: "/assets/images/home/2.jpg.dpg"
      },
      {
        cid: 3,
        pic: "/assets/images/home/3.jpg.dpg"
      },
      {
        cid: 1,
        pic: "/assets/images/home/4.jpg.dpg"
      },
      {
        cid: 1,
        pic: "/assets/images/home/5.jpg.dpg"
      }
    ],
    icons: [
      { title: "京东超市", pic: "/assets/images/home/icon1.png" },
      { title: "数码电器", pic: "/assets/images/home/icon2.png" },
      { title: "京东服饰", pic: "/assets/images/home/icon3.png" },
      { title: "京东生鲜", pic: "/assets/images/home/icon4.png" },
      { title: "京东到家", pic: "/assets/images/home/icon5.png" },
      { title: "充值缴费", pic: "/assets/images/home/icon6.png" },
      { title: "9.9元拼", pic: "/assets/images/home/icon7.png" },
      { title: "领券中心", pic: "/assets/images/home/icon8.png" },
      { title: "赚钱", pic: "/assets/images/home/icon9.png" },
      { title: "PLUS会员", pic: "/assets/images/home/icon10.png" }
    ]
  };

  recomandData = {
    recomand: [
      {
        pid: 1,
        title:
          "小孩线衣线裤男女孩宝宝纯棉内衣套装儿童春秋薄长袖秋衣裤服 俊粉色公主 100(85-95cm)",
        price: 69,
        active: "",
        pic: "/assets/images/home/recomand/1.jpg"
      },
      {
        pid: 2,
        title:
          "铜一家 纯铜九龙笔筒 文房四宝办公室桌面高档装饰工艺品书房摆件 青铜色 九龙笔筒",
        price: 328,
        active: "满减",
        pic: "/assets/images/home/recomand/2.jpg"
      },
      {
        pid: 3,
        title:
          "恒洁卫浴HEGII 蹲便器冲水箱套装 便池蹲坑后进前排冲便器厕所蹲厕防臭节水套装 326B蹲便+611水箱(后进前排,含角阀软管",
        price: 699,
        active: "闪购",
        pic: "/assets/images/home/recomand/3.jpg"
      },
      {
        pid: 4,
        title:
          "鞋柜简易组装门口小鞋柜实木鞋架简易家用防尘简约现代门厅多功能 换鞋凳+抽屉二门",
        price: 849,
        active: "",
        pic: "/assets/images/home/recomand/4.jpg"
      },
      {
        pid: 5,
        title:
          "联想(Lenovo)M5900d商用办公台式电脑整机(AMD A4 4G 1T 键鼠 office 四年上门)19.5英寸",
        price: 1899,
        active: "",
        pic: "/assets/images/home/recomand/5.jpg"
      },
      {
        pid: 1,
        title:
          "小孩线衣线裤男女孩宝宝纯棉内衣套装儿童春秋薄长袖秋衣裤服 俊粉色公主 100(85-95cm)",
        price: 69,
        active: "",
        pic: "/assets/images/home/recomand/1.jpg"
      },
      {
        pid: 2,
        title:
          "铜一家 纯铜九龙笔筒 文房四宝办公室桌面高档装饰工艺品书房摆件 青铜色 九龙笔筒",
        price: 328,
        active: "满减",
        pic: "/assets/images/home/recomand/2.jpg"
      },
      {
        pid: 3,
        title:
          "恒洁卫浴HEGII 蹲便器冲水箱套装 便池蹲坑后进前排冲便器厕所蹲厕防臭节水套装 326B蹲便+611水箱(后进前排,含角阀软管",
        price: 699,
        active: "闪购",
        pic: "/assets/images/home/recomand/3.jpg"
      },
      {
        pid: 4,
        title:
          "鞋柜简易组装门口小鞋柜实木鞋架简易家用防尘简约现代门厅多功能 换鞋凳+抽屉二门",
        price: 849,
        active: "",
        pic: "/assets/images/home/recomand/4.jpg"
      },
      {
        pid: 5,
        title:
          "联想(Lenovo)M5900d商用办公台式电脑整机(AMD A4 4G 1T 键鼠 office 四年上门)19.5英寸",
        price: 1899,
        active: "",
        pic: "/assets/images/home/recomand/5.jpg"
      }
    ]
  };

  constructor() {}

  ngAfterViewInit(): void {
    this.slide.options = {
      autoplay: {
        // 自动滚动: true
        loop: true,
        // 用户触碰之后自动滚动失效: false
        disableOnInteraction: false
      }
    };
  }

  // 自带参数: 加载更多组件
  loadData(e) {
    // 请求结束后, 告诉控件  可以进行下一步操作
    e.target.complete();
    let data1 = this.recomandData.recomand;
    this.recomandData.recomand.concat(data1);
  }
}
