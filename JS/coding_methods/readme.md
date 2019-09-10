- 难点
没做过的， 难做的
分享？  小程序分享
onShareAppMessage()

- wx.setNavigationBarTitle('fff')
位置， App  navigationBar
1. title
 /detail/index?id=123|124 queryString
2. onload (options)
  this.setData({
    id: options.id
  })
  wx.request() 返回文章的详情
  生命周期拿id 参数，
  this.loadDetail()

  界面  怎么用
  <import src="">
  <scroll-view scroll-y="true" enable-back-to-top="true">
    <view class="wrapper">
      <view class="header">
        <view class="title">{{detailData.title}}</view>
        <view class="info-desc cf">
          <text class="info-desc-author fl"></text>
          <text class="info-desc-date fr"></text>
        </view>
      </view>
      <view class="content">
      <!-- html -> wxml  => wxParse -->
        <template is="wxParse" data="{wxParseData:article.nodes}"></template>
      </view>
    </view>
  <!-- 底栏 -->
    <view class="footer-bar">
    <!-- 弹性布局 -->
      <icon type="">
    </view>
  </scroll-view>