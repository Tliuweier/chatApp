<template>
  <div id="moments">
    <theader1 :path="path"></theader1>
          <div class="home-pic">
            <div class="home-pic-base">
              <div class="top-pic">
                <div class="top-pic-inner">
                  <img :src="myInfo.avator">
                </div>
              </div>
              <div class="top-name _ellipsis">{{myInfo.name}}</div>
            </div>
          </div>


    <div class=" moments__post weui-cell">
      <div class="weui-cell__hd">
        <img src="/static/tx.jpg">
      </div>
      <div class="weui-cell__bd">
        <!-- 人名链接 -->
        <a class="title">
          <span>习近平</span>
        </a>
        <!-- post内容 -->
        <p id="paragraph" class="paragraph">测试1,测试，测试，测试，测试。。。。。。。。</p>
        <!-- 伸张链接 -->
        <!-- <a id="paragraphExtender" class="paragraphExtender">显示全文</a> -->
        <!-- 相册 -->
        <div class="thumbnails my-gallery">
          <figure itemprop="associatedMedia" itemscope itemtype="http://schema.org/ImageObject" class="thumbnail">
            <a href="https://sinacloud.net/vue-wechat/images/headers/yehua.jpg" itemprop="contentUrl" data-size="400x400">
              <img src="https://sinacloud.net/vue-wechat/images/headers/yehua.jpg" itemprop="thumbnail" alt="Image description" />
            </a>
            <figcaption itemprop="caption description">Image 01</figcaption>
          </figure>

          <figure itemprop="associatedMedia" itemscope itemtype="http://schema.org/ImageObject" class="thumbnail">
            <a href="https://sinacloud.net/vue-wechat/images/headers/zhenji.jpg" itemprop="contentUrl" data-size="400x400">
              <img src="https://sinacloud.net/vue-wechat/images/headers/zhenji.jpg" itemprop="thumbnail" alt="Image description" />
            </a>
            <figcaption itemprop="caption description">Image 02</figcaption>
          </figure>
          <figure itemprop="associatedMedia" itemscope itemtype="http://schema.org/ImageObject" class="thumbnail">
            <a href="https://sinacloud.net/vue-wechat/images/headers/zhenji.jpg" itemprop="contentUrl" data-size="400x400">
              <img src="https://sinacloud.net/vue-wechat/images/headers/zhenji.jpg" itemprop="thumbnail" alt="Image description" />
            </a>
            <figcaption itemprop="caption description">Image 02</figcaption>
          </figure>
        </div>
        <!-- 资料条 -->
        <div class="toolbar">
          <p class="timestamp">17小时前</p>
          <div>
            <div id="actionMenu" class="actionMenu slideIn">
              <p class="actionBtn" id="btnLike"><i class="icon icon-96"></i></p>
              <p class="actionBtn" id="btnComment"><i class="icon icon-3"></i></p>
            </div>
          </div>
          <span class="actiongTriangle"></span>
          <span id="actionToggle" class="actionToggle">..</span>
        </div>
        <!-- 赞／评论区 -->
        <p class="liketext">
          <span class="iconfont icon-dianzanb"></span>
          <span class="nickname">夜华</span>,
          <span class="nickname">孙尚香</span>
        </p>
      </div>
      <!-- 结束 post -->
    </div>
    <div class="weui-cell moments__post">
      <div class="weui-cell__hd">
        <img src="/static/images/header/header01.png">
      </div>
      <div class="weui-cell__bd">
        <!-- 人名链接 -->
        <a class="title">
          <span>X小明</span>
        </a>
        <!-- post内容 -->
        <p id="paragraph" class="paragraph">weui目前是比较好用的ui,在微信和手机中表现非常好。weui目前是比较好用的ui,在微信和手机中表现非常好</p>
        <!-- 伸张链接 -->
        <!-- <a id="paragraphExtender" class="paragraphExtender">显示全文</a> -->
        <!-- 相册 -->
        <div class="thumbnails my-gallery">
          <figure itemprop="associatedMedia" itemscope itemtype="" class="thumbnail">
            <a href="/static/tx.jpg" itemprop="contentUrl" data-size="400x400">
              <img src="/static/tx.jpg" itemprop="thumbnail" alt="Image description" />
            </a>
            <figcaption itemprop="caption description">Image 01</figcaption>
          </figure>
          <figure itemprop="associatedMedia" itemscope itemtype="" class="thumbnail">
            <a href="/static/tx.jpg" itemprop="contentUrl" data-size="400x400">
              <img src="/static/tx.jpg" itemprop="thumbnail" alt="Image description" />
            </a>
            <figcaption itemprop="caption description">Image 01</figcaption>
          </figure>
          <figure itemprop="associatedMedia" itemscope itemtype="" class="thumbnail">
            <a href="/static/tx.jpg" itemprop="contentUrl" data-size="400x400">
              <img src="/static/tx.jpg" itemprop="thumbnail" alt="Image description" />
            </a>
            <figcaption itemprop="caption description">Image 01</figcaption>
          </figure>
          <figure itemprop="associatedMedia" itemscope itemtype="http://schema.org/ImageObject" class="thumbnail">
            <a href="https://sinacloud.net/vue-wechat/images/headers/baiqian.jpg" itemprop="contentUrl" data-size="400x400">
              <img src="https://sinacloud.net/vue-wechat/images/headers/baiqian.jpg" itemprop="thumbnail" alt="Image description" />
            </a>
            <figcaption itemprop="caption description">Image 03</figcaption>
          </figure>
          <figure itemprop="associatedMedia" itemscope itemtype="http://schema.org/ImageObject" class="thumbnail">
            <a href="https://sinacloud.net/vue-wechat/images/headers/baiqian.jpg" itemprop="contentUrl" data-size="400x400">
              <img src="https://sinacloud.net/vue-wechat/images/headers/baiqian.jpg" itemprop="thumbnail" alt="Image description" />
            </a>
            <figcaption itemprop="caption description">Image 04</figcaption>
          </figure>
        </div>
        <!-- 资料条 -->
        <div class="toolbar">
          <p class="timestamp">17小时前</p>
          <div>
            <div id="actionMenu" class="actionMenu slideIn">
              <p class="actionBtn" id="btnLike"><i class="icon icon-96"></i></p>
              <p class="actionBtn" id="btnComment"><i class="icon icon-3"></i></p>
            </div>
          </div>
          <span class="actiongTriangle"></span>
          <span id="actionToggle" class="actionToggle">..</span>
        </div>
        <!-- 赞／评论区 -->
        <p class="liketext">
          <span class="iconfont icon-dianzanb"></span><span class="nickname">T小卡</span>,<span class="nickname">习近平</span>
        </p>
        <p class="likeComment">
          <span>ANTHONY：这么先进，和我家的那台一样，打个电话，照样有饭吃，一键式，还带做菜功能，还能洗碗聊天晾衣服</span>
          <span>☆Sanly☆:远程？还有洗米放水功能？</span>
        </p>


      </div>
      <!-- 结束 post -->
    </div>





    <!-- PhotoSwipe插件需要的元素， 一定要有类名 pswp -->
    <div class="pswp" tabindex="-1" role="dialog" aria-hidden="true">
      <div class="pswp__bg"></div>
      <div class="pswp__scroll-wrap">
        <div class="pswp__container">
          <div class="pswp__item"></div>
          <div class="pswp__item"></div>
          <div class="pswp__item"></div>
        </div>
        <!-- 预览区域顶部的默认UI，可以修改 -->
        <div class="pswp__ui pswp__ui--hidden">
          <div class="pswp__top-bar">
            <!--  与图片相关的操作 -->
            <div class="pswp__counter"></div>
            <button class="pswp__button pswp__button--close" title="Close (Esc)"></button>
            <!--将分享按钮去掉 -->
            <!--<button class="pswp__button pswp__button--share" title="Share"></button>-->
            <button class="pswp__button pswp__button--fs" title="Toggle fullscreen"></button>
            <button class="pswp__button pswp__button--zoom" title="Zoom in/out"></button>
            <div class="pswp__preloader">
              <div class="pswp__preloader__icn">
                <div class="pswp__preloader__cut">
                  <div class="pswp__preloader__donut"></div>
                </div>
              </div>
            </div>
          </div>
          <div class="pswp__share-modal pswp__share-modal--hidden pswp__single-tap">
            <div class="pswp__share-tooltip"></div>
          </div>
          <button class="pswp__button pswp__button--arrow--left" title="Previous (arrow left)"></button>
          <button class="pswp__button pswp__button--arrow--right" title="Next (arrow right)"></button>
          <div class="pswp__caption">
            <div class="pswp__caption__center"></div>
          </div>
        </div>
      </div>
    </div>

  </div>
</template>


<style lang="scss" scoped>
  #moments{
    background:#fff;
    .home-pic{
      width: 100%;
      margin-top: -90px;
      position: relative;
      height: 370px;
      z-index: 5;
      background-size: cover;
      margin-bottom: 20px;
      background: url("../assets/bg.jpeg") no-repeat center center;
    }
    .home-pic-base{
      position:absolute;
      left:0;
      bottom: -22px;
      width: 100%;
      height: 70px;
      padding: 0 15px;
    }
    .home-pic-base .top-pic {
      width: 140px;
      height: 140px;
      padding: 3px;
      -webkit-transform: scale(0.5);
      -ms-transform: scale(0.5);
      transform: scale(0.5);
      -webkit-transform-origin: 100% 0%;
      -ms-transform-origin: 100% 0%;
      transform-origin: 100% 0%;
      background-color: #ffffff;
      border: 1px solid #cccccc;
      float: right
    }
    .home-pic-base .top-name {
      position: absolute;
      left: 20px;
      right: 105px;
      top: 10px;
      font-size: 20px;
      text-align: right;
      color: #ffffff;
      overflow: hidden
    }
    .top-pic-inner {
      width: 100%;
      height: 100%
    }
    .top-pic-inner img {
      width: 100%
    }
    .moments__post{
      background: #fff;
      display: block;
      border-bottom: 1px solid #f2eeee;
    }
    .moments__post::before {
      content: none
    }
    .moments__post .weui-cell__hd{
      display: table-cell;
      vertical-align: top;
      min-width: 45px;
    }
    .moments__post .weui-cell__hd img {
      width: 45px !important
    }
    .moments__post .weui-cell__bd {
      font-size: 15px;
      display: table-cell;
      padding-left: 10px
    }
    .moments__post .weui-cell__bd .paragraphExtender {
      margin: 5px auto;
      display: -webkit-box;
      display: -webkit-flex;
      display: -ms-flexbox;
      display: flex
    }
    .moments__post .title {
      color: #094dcc
    }
    .moments__post .thumbnails {
      width: 100%;
      display: -webkit-box;
      display: -webkit-flex;
      display: -ms-flexbox;
      display: flex;
      -webkit-flex-wrap: wrap;
      -ms-flex-wrap: wrap;
      flex-wrap: wrap
    }
    .moments__post .thumbnails .thumbnail {
      width: 80px;
      height: 80px;
      margin: 3px;
      margin-left: 0px;
      background: #757575;
      overflow: hidden
    }
    .moments__post .thumbnails .thumbnail img {
      width: 100%;
      height: 100%
    }
    .moments__post .toolbar {
      position: relative;
      display: -webkit-box;
      display: -webkit-flex;
      display: -ms-flexbox;
      display: flex;
      -webkit-box-align: center;
      -webkit-align-items: center;
      -ms-flex-align: center;
      align-items: center
    }
    .moments__post .toolbar .timestamp {
      color: #757575;
      font-size: 13px
    }
    .moments__post .actionMenu {
      position: absolute;
      height: 40px;
      background-color: #4e5156;
      border-radius: 5px;
      z-index: 5;
      top: -10px;
      right: 20px;
      display: none;
      -webkit-justify-content: space-around;
      -ms-flex-pack: distribute;
      justify-content: space-around;
      -webkit-box-align: center;
      -webkit-align-items: center;
      -ms-flex-align: center;
      align-items: center
    }
    .moments__post .actiongTriangle{
      width: 0;
      height: 0;
      right: 15px;
      position: absolute;
      content: "";
      border-width: 4px 4px 5px 0 ;
      border-color: transparent #92abd4 transparent transparent ;
      border-style: solid
    }
    .moments__post .actionToggle {
      width: 15px;
      height: 15px;
      background: #92abd4;
      margin-left: auto;
      border-radius: 1px;
      position: absolute;
      right: 0;
      display: -webkit-box;
      display: -webkit-flex;
      display: -ms-flexbox;
      display: flex;
      -webkit-box-align: center;
      -webkit-align-items: center;
      -ms-flex-align: center;
      align-items: center;
      -webkit-box-pack: center;
      -webkit-justify-content: center;
      -ms-flex-pack: center;
      justify-content: center
    }
    .moments__post .liketext {
      margin-top: 10px;
      width: 100%;
      background-color: #f3f3f5;
      position: relative;
      display: -webkit-box;
      display: -webkit-flex;
      display: -ms-flexbox;
      display: flex;
      -webkit-box-align: center;
      -webkit-align-items: center;
      -ms-flex-align: center;
      align-items: center;
      -webkit-flex-wrap: wrap;
      -ms-flex-wrap: wrap;
      flex-wrap: wrap
    }
    .moments__post .liketext .nickname {
      color: #094dcc;
      font-size: 13px
    }
    .moments__post .likeComment{
      width: 100%;
      background-color: #f3f3f5;
      border-top: 1px solid #f2eeee;
      position: relative;
      display: -webkit-box;
      display: -webkit-flex;
      display: -ms-flexbox;
      display: flex;
      -webkit-box-align: center;
      -webkit-align-items: center;
      -ms-flex-align: center;
      align-items: center;
      -webkit-flex-wrap: wrap;
      -ms-flex-wrap: wrap;
      flex-wrap: wrap
    }
  }
</style>

<script>
  import PhotoSwipe from 'photoswipe'
  import PhotoSwipeUI_Default from 'photoswipe/dist/photoswipe-ui-default'
  import 'photoswipe/dist/photoswipe.css'
  import 'photoswipe/dist/default-skin/default-skin.css'
  import Theader1 from '../components/Header1.vue'
  export  default {
    components:{
      Theader1
    },
    data(){
      return{
          path:'',
          myInfo:{}
      }
    },created(){
      this.path = this.$router.history.current.path
      this.myInfo = JSON.parse(localStorage.getItem('userInfo'))
    },
    methods:{
      initPhotoSwipeFromDOM(gallerySelector) {
        var parseThumbnailElements = function (el) {
          var thumbElements = el.childNodes,
            numNodes = thumbElements.length,
            items = [],
            figureEl,
            linkEl,
            size,
            item
          for (var i = 0; i < numNodes; i++) {
            figureEl = thumbElements[i];
            if (figureEl.nodeType !== 1) {
              continue
            }
            linkEl = figureEl.children[0];
            size = linkEl.getAttribute('data-size').split('x')
            item = {
              src: linkEl.getAttribute('href'),
              w: parseInt(size[0], 10),
              h: parseInt(size[1], 10)
            };
            if (figureEl.children.length > 1) {
              item.title = figureEl.children[1].innerHTML
            }
            if (linkEl.children.length > 0) {
              item.msrc = linkEl.children[0].getAttribute('src')
            }
            item.el = figureEl
            items.push(item)
          }
          return items
        }
        var closest = function closest(el, fn) {
          return el && (fn(el) ? el : closest(el.parentNode, fn))
        }
        var onThumbnailsClick = function (e) {
          e = e || window.event
          e.preventDefault ? e.preventDefault() : e.returnValue = false
          var eTarget = e.target || e.srcElement
          var clickedListItem = closest(eTarget, function (el) {
            return (el.tagName && el.tagName.toUpperCase() === 'FIGURE')
          });

          if (!clickedListItem) {
            return;
          }
          var clickedGallery = clickedListItem.parentNode,
            childNodes = clickedListItem.parentNode.childNodes,
            numChildNodes = childNodes.length,
            nodeIndex = 0,
            index
          for (var i = 0; i < numChildNodes; i++) {
            if (childNodes[i].nodeType !== 1) {
              continue
            }
            if (childNodes[i] === clickedListItem) {
              index = nodeIndex
              break
            }
            nodeIndex++
          }

          if (index >= 0) {
            openPhotoSwipe(index, clickedGallery)
          }
          return false;
        }
        var photoswipeParseHash = function () {
          var hash = window.location.hash.substring(1),
            params = {}
          if (hash.length < 5) {
            return params;
          }
          var vars = hash.split('&');
          for (var i = 0; i < vars.length; i++) {
            if (!vars[i]) {
              continue
            }
            var pair = vars[i].split('=');
            if (pair.length < 2) {
              continue
            }
            params[pair[0]] = pair[1];
          }
          if (params.gid) {
            params.gid = parseInt(params.gid, 10)
          }
          return params
        }

        var openPhotoSwipe = function (index, galleryElement, disableAnimation, fromURL) {
          var pswpElement = document.querySelectorAll('.pswp')[0],
            gallery,
            options,
            items
          items = parseThumbnailElements(galleryElement);
          options = {
            history:false,
            galleryUID: galleryElement.getAttribute('data-pswp-uid'),
            getThumbBoundsFn: function (index) {
              var thumbnail = items[index].el.getElementsByTagName('img')[0],
                pageYScroll = window.pageYOffset || document.documentElement.scrollTop,
                rect = thumbnail.getBoundingClientRect()
              return { x: rect.left, y: rect.top + pageYScroll, w: rect.width }
            }

          }
          if (fromURL) {
            if (options.galleryPIDs) {
              for (var j = 0; j < items.length; j++) {
                if (items[j].pid == index) {
                  options.index = j
                  break
                }
              }
            } else {
              options.index = parseInt(index, 10) - 1
            }
          } else {
            options.index = parseInt(index, 10)
          }
          if (isNaN(options.index)) {
            return ''
          }
          if (disableAnimation) {
            options.showAnimationDuration = 0
          }

          gallery = new PhotoSwipe(pswpElement, PhotoSwipeUI_Default, items, options)
          gallery.init()
        }
        var galleryElements = document.querySelectorAll(gallerySelector)
        for (var i = 0, l = galleryElements.length; i < l; i++) {
          galleryElements[i].setAttribute('data-pswp-uid', i + 1)
          galleryElements[i].onclick = onThumbnailsClick
        }
        var hashData = photoswipeParseHash()
        if (hashData.pid && hashData.gid) {
          openPhotoSwipe(hashData.pid, galleryElements[hashData.gid - 1], true, true)
        }
      }
    },
    mounted() {
      this.initPhotoSwipeFromDOM('.my-gallery')
    }
  }
</script>
