<template>
  <div class="footer-class">
    <div class="main-content">
      <div class="division-class"></div>
      <p>校内链接</p>
      <div class="a-class">
        <a href="http://www.tju.edu.cn/" target="_blank">天津大学</a>
        <a href="http://zs.tju.edu.cn/" target="_blank">天津大学本科生招生网</a>
        <a href="http://www.lib.tju.edu.cn/" target="_blank">天津大学图书馆</a>
        <a href="http://gs.tju.edu.cn/" target="_blank">天津大学研究生院</a>
        <a href="http://me.tju.edu.cn/" target="_blank">天津大学机械工程学院</a>
        <a href="https://www.twt.edu.cn/" target="_blank">天津大学天外天</a>
      </div>
      <div class="division-class"></div>
      <p>设计名校</p>
      <div class="a-class">
        <a href="https://www.tudelft.nl/" target="_blank">Tudelft</a>
        <a href="https://www.bauhaus.eu/" target="_blank">Bauhaus</a>
        <a href="https://www.bauhaus.eu/" target="_blank">D-School</a>
        <a href="http://tjdi.tongji.edu.cn/" target="_blank"
          >同济大学设计创意学院</a
        >
        <a href="http://sodcn.jiangnan.edu.cn/" target="_blank"
          >江南大学设计学院</a
        >
        <a href="http://design.hnu.edu.cn/" target="_blank"
          >湖南大学设计艺术学院</a
        >
        <a href="https://www.ad.tsinghua.edu.cn/" target="_blank"
          >清华大学美术学院</a
        >
        <a href="https://designschool.sjtu.edu.cn/" target="_blank"
          >上海交通大学设计学院</a
        >
      </div>
      <div class="division-class"></div>
      <p>设计资源</p>
      <div class="a-class">
        <a href="https://www.behance.net/" target="_blank">Behance</a>
        <a href="https://www.pinterest.com/" target="_blank">Pintrest</a>
        <a href="https://thefwa.com/" target="_blank">FWA</a>
        <a href="https://www.uisdc.com/" target="_blank">优设</a>
        <a href="https://dribbble.com/" target="_blank">Dribble</a>
        <a href="http://www.billwang.net/" target="_blank">Billwang</a>
        <a href="https://www.vcg.com/" target="_blank">视觉中国</a>
      </div>
      <div class="division-class"></div>
      <div class="about-class">
        <p style="vertical-align: top">关于我们</p>
        <div class="content-class">
          <p>地址 / 中国·天津市津南区雅观路135号北洋园校区35教学楼</p>
          <p>电话 / 022-27402172</p>
          <p>邮箱 / idesign@tju.edu.cn</p>
          <p>邮编 / 300354</p>
        </div>

        <img src="../assets/img_QRCode.png" class="img-class" />
      </div>
    </div>
    <div class="bottom-class">
      <p>© 2021 天津大学机械工程学院机械工程系工业设计专业 版权所有</p>
      <p>
        Copyright © 2021 TianJin University Industrial Design . All Rights
        Reserved
      </p>
    </div>
  </div>
</template>
<script>
export default {
  name: "myFooter",
};
</script>
<style scoped>
.footer-class {
  width: 100%;
  position: relative;
  bottom: 0;
}
.main-content {
  width: 1264px;
  margin: auto;
  padding: 0 75px 80px 75px;
}
.main-content a {
  display: inline;
  text-decoration: none;
  margin: 0 10px;
  font-size: 15px;
  color: #6c6c6c;
  vertical-align: middle;
  white-space: nowrap;
}
.main-content p {
  position: absolute;
  color: #4e4e4e;
  font-size: 17px;
  font-weight: 700;
  display: inline;
  margin-right: 25px;
  vertical-align: middle;
}
.division-class {
  width: 100%;
  height: 1px;
  background-color: #e3e3e3;
  margin: 15px 0;
}
.about-class {
  position: relative;
  width: 100%;
}
.content-class {
  position: relative;
  top: 0;
  left: 80px;
  margin-right: 70px;
  display: inline-block;
}
.content-class p {
  position: relative;
  display: block;
  font-size: 15px;
  color: #6c6c6c;
  font-weight: 400;
  margin-bottom: 8px;
  margin-left: 6px;
}
.bottom-class {
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 70px;
  background-color: rgba(44, 51, 54, 0.96);
  font-size: 13px;
  color: white;
  text-align: center;
  padding: 10px 0;
}
.bottom-class p {
  margin: 5px;
}
.a-class {
  display: inline-block;
  position: relative;
  top: 0;
  left: 80px;
  margin-right: 70px;
}
.img-class {
  position: absolute;
  right: 0;
  bottom: 0;
  height: 100%;
}
@media screen and (max-width: 768px) {
  .main-content {
    padding: 0 15px 100px 15px;
  }
  .img-class {
    height: 70%;
  }
}
@media screen and (max-width: 1264px) {
  .main-content {
    width: 100%;
  }
  .main-content a {
    font-size: 13px;
  }
  .main-content p {
    font-size: 15px;
  }
  .content-class p {
    font-size: 13px;
    margin-bottom: 2px;
  }
  .bottom-class {
    font-size: 9px;
  }
  .a-class {
    top: -2px;
    left: 70px;
  }
  .content-class {
    left: 70px;
    display: inline-block;
  }
}
</style>