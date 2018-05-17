<template>
  <div class="goodsAudit col-md-10">
    <div>
      <table class="table table-responsive table-bordered table-hover table-striped" >
        <tbody>
          <tr>
            <td class="one"><label class="pull-left">商品名称</label></td>
            <td><input type="text" class="pull-left"/></td>
          </tr>
          <tr>
            <td><label class="pull-left">商品标号(编码):</label></td>
            <td><input type="text" class="pull-left"/></td>
          </tr>
          <tr>
            <td><label class="pull-left">商品描述:</label></td>
            <td><input type="text" class="pull-left"/></td>
          </tr>
          <tr>
            <td><label class="pull-left">商品发布人:</label></td>
            <td><input type="text" class="pull-left"/></td>
          </tr>
          <tr>
            <td><label class="pull-left">商品分类:</label></td>
            <td><input type="text" class="pull-left"/></td>
          </tr>
          <tr>
            <td><label class="pull-left">当前状态:</label></td>
            <td>
              <div class="pull-left">
              <input type="radio"/>展示状态（在售）
              <input type="radio"/>已下架
              <input type="radio"/>已锁定
              <input type="radio"/>已结缘
              </div>
            </td>
          </tr>
          <tr>
            <td><label class="pull-left">商品描述:</label></td>
            <td><textarea class="pull-left"/></td>
          </tr>
          <tr>
            <td><label class="pull-left">商品详情:</label></td>
            <td><textarea class="pull-left"/></td>
          </tr>
          <tr>
            <td><label class="pull-left">商品星级(勿随意修改):</label></td>
            <td>
              <div class="pull-left">
                <input type="radio"/><span class="starts">☆☆☆☆☆</span>
                <input type="radio"/><span class="starts">★☆☆☆☆</span>
                <input type="radio"/><span class="starts">★★☆☆☆</span>
                <input type="radio"/><span class="starts">★★★☆☆</span>
                <input type="radio"/><span class="starts">★★★★☆</span>
                <input type="radio"/><span class="starts">★★★★★</span>
              </div>
            </td>
          </tr>
          <tr>
            <td><label class="pull-left">商品真是评价星级:</label></td>
            <td><input type="text" class="pull-left"/></td>
          </tr>
          <tr>
            <td><label class="pull-left">上传类别:</label></td>
            <td>
              <div class="pull-left">
                <input type="radio"/><span class="starts">新品</span>
                <input type="radio"/><span class="starts">名家</span>
                <input type="radio"/><span class="starts">精品</span>
                <input type="radio"/><span class="starts">翡翠</span>
                <input type="radio"/><span class="starts">热销</span>
                <input type="radio"/><span class="starts">珍珠</span>
                <input type="radio"/><span class="starts">彩宝</span>
              </div>
            </td>
          </tr>
          <tr rowspan="3">
            <td class="one" ><span class="pull-left">商品视频</span></td>
            <td>
              <label for="uploadFiles" class="btn btn-warning pull-left">
                选择视频
                <input type="file" multiple="multiple" id="uploadFiles" style="display: none"/>
              </label>
              <button class="btn btn-success pull-left">上传</button>
            </td>
          </tr>
          <tr rowspan="3">
            <td class="one" ><span class="pull-left">商品证书</span></td>
            <td>
              <label for="uploadFiles" class="btn btn-warning pull-left">
                选择证书
                <input type="file" multiple="multiple" id="uploadFiles1" style="display: none"/>
              </label>
              <button class="btn btn-success pull-left">上传</button>
            </td>
          </tr>
          <tr>
            <td><label class="pull-left">圈口大小:</label></td>
            <td>
              <div class="pull-left">
                <input type="radio"/><span class="starts">50-52mm</span>
                <input type="radio"/><span class="starts">52-54mm</span>
                <input type="radio"/><span class="starts">54-56mm</span>
                <input type="radio"/><span class="starts">56-58mm</span>
                <input type="radio"/><span class="starts">58-60mm</span>
                <input type="radio"/><span class="starts">60mm以上</span>
              </div>
            </td>
          </tr>
          <tr>
            <td><label class="pull-left">题材:</label></td>
            <td><input type="text" class="pull-left"/></td>
          </tr>
          <tr>
            <td><label class="pull-left">款式:</label></td>
            <td><input type="text" class="pull-left"/></td>
          </tr>
          <tr>
            <td><label class="pull-left">种水:</label></td>
            <td><input type="text" class="pull-left"/></td>
          </tr>
          <tr>
            <td><label class="pull-left">颜色:</label></td>
            <td><input type="text" class="pull-left"/></td>
          </tr><tr>
            <td><label class="pull-left">出厂价格:</label></td>
            <td><input type="text" class="pull-left"/></td>
          </tr><tr>
            <td><label class="pull-left">创始人价格:</label></td>
            <td><input type="text" class="pull-left"/></td>
          </tr>
          <tr>
            <td><label class="pull-left">旗舰店价格:</label></td>
            <td><input type="text" class="pull-left"/></td>
          </tr>
          <tr>
            <td><label class="pull-left">专卖店价格:</label></td>
            <td><input type="text" class="pull-left"/></td>
          </tr>
          <tr>
            <td><label class="pull-left">价格区间:</label></td>
            <td>
              <div class="pull-left">
                <input type="radio"/><span class="starts">1千以下</span>
                <input type="radio"/><span class="starts">1千-2千</span>
                <input type="radio"/><span class="starts">2千-3千</span>
                <input type="radio"/><span class="starts">3千-5千</span>
                <input type="radio"/><span class="starts">5千-1万</span>
                <input type="radio"/><span class="starts">1万-2万</span>
                <input type="radio"/><span class="starts">2万-3万</span>
                <input type="radio"/><span class="starts">3万-5万</span>
                <input type="radio"/><span class="starts">5万-10万</span>
                <input type="radio"/><span class="starts">10万以上</span>
              </div>
            </td>
          </tr>
          <tr>
            <td><label class="pull-left">图片类型:</label></td>
            <td>
              <div class="pull-left">
                <input type="radio"/><span class="starts">图片中只有一件</span>
                <input type="radio"/><span class="starts">图片中含有多件</span>
              </div>
            </td>
          </tr>
          <tr>
            <td class="one"><span class="pull-left">数量</span></td>
            <td>
              <div class="pull-left">
                <input type="radio"/><span class="starts">单件</span>
                <input type="radio"/><span class="starts">多件</span>
              </div>
            </td>
          </tr>
          <tr>
            <td class="one"><span class="pull-left">价格类型</span></td>
            <td>
              <div class="pull-left">
                <input type="radio"/><span class="starts">单件商品价</span>
                <input type="radio"/><span class="starts">多件商品价</span>
              </div>
            </td>
          </tr>
          <tr>
            <td class="one"><span class="pull-left">微信客服</span></td>
            <td>
              <input type="text" class="pull-left"/>
            </td>
          </tr>
          <tr>
            <td class="one"><span class="pull-left">电话客服</span></td>
            <td>
              <input type="text" class="pull-left"/>
            </td>
          </tr>
          <tr>
            <td class="one"><span class="pull-left">商品图片</span></td>
            <td>
              <span>这里展示图片</span>
            </td>
          </tr>
        </tbody>
        <tfoot>
        <tr>
          <td colspan="2"><button class="btn btn-success">注册</button><button class="btn btn-warning">重置</button></td>
        </tr>
        </tfoot>
      </table>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'GoodsAudit',
    data(){
      return{
        goodsId: this.$route.query.goodsId
      }
    }
  }
</script>

<style scoped>
  label{
    font-size: 15px;
  }

</style>
