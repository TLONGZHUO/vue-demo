<template>
  <!--TODO 没有设置数据的id无法取值-->
  <div class="supplierManagementUpdate">
    <table class="table table-hover table-bordered table-striped">
      <caption>供应商管理->供应商修改</caption>
      <thead>
        <tr>
          <th colspan="2"><span class="pull-left">供应商基本信息</span><span class="pull-right">返回上一页</span></th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td class="one"><span class="pull-left">用户名（标题、手机号）:</span></td>
          <td>
            <label class="pull-left" value="0">{{username}}</label>
          </td>
        </tr>
        <tr>
          <td class="one"><span class="pull-left">昵称:</span></td>
          <td>
            <input type="text" class="pull-left"/>
          </td>
        </tr>
        <tr>
          <td class="one"><span class="pull-left">用户类型:</span></td>
          <td><input type="radio" class="pull-left"/></td>
        </tr>
        <tr>
          <td class="one"><span class="pull-left">是否企业:</span></td>
          <td>
            <input type="radio" class="pull-left" value="0"/><label class="pull-left">个人</label>
            <input type="radio" class="pull-left" value="1"/><label class="pull-left">企业</label>
          </td>
        </tr>
        <tr>
          <td class="one"><span class="pull-left">是否免检:</span></td>
          <td>
            <input type="radio" class="pull-left" value="0"/><label class="pull-left">需要审核</label>
            <input type="radio" class="pull-left" value="1"/><label class="pull-left">免检</label>
          </td>
        </tr>
        <tr rowspan="3">
          <td class="one" ><span class="pull-left">头像</span></td>
          <td>
            <label for="uploadFiles" class="btn btn-warning pull-left">
              选择新头像
              <input type="file" multiple="multiple" id="uploadFiles" style="display: none" @click="removeSrc"/>
            </label>
            <button class="btn btn-success pull-left">上传</button>
          </td>
        </tr>
        <tr>
          <td class="one"><span class="pull-left">年龄:</span></td>
          <td>
            <input type="text" class="pull-left"/><label class="pull-left"></label>
          </td>
        </tr>
        <tr>
          <td class="one"><span class="pull-left">性别:</span></td>
          <td>
            <input type="radio" class="pull-left" value="0"/><label class="pull-left">男</label>
            <input type="radio" class="pull-left" value="1"/><label class="pull-left">女</label>
          </td>
        </tr>
        <tr>
          <td class="one"><span class="pull-left">手机号:</span></td>
          <td>
            <input type="text" class="pull-left"/><label class="pull-left"></label>
          </td>
        </tr>
        <tr>
          <td class="one"><span class="pull-left">微信号:</span></td>
          <td>
            <input type="text" class="pull-left"/><label class="pull-left"></label>
          </td>
        </tr>
        <tr>
          <td class="one"><span class="pull-left">真实姓名:</span></td>
          <td>
            <input type="text" class="pull-left"/><label class="pull-left"></label>
          </td>
        </tr>
        <tr>
          <td class="one"><span class="pull-left">个人身份证号:</span></td>
          <td>
            <input type="text" class="pull-left"/><label class="pull-left"></label>
          </td>
        </tr>
        <tr>
          <td class="one"><span class="pull-left">组织机构代码:</span></td>
          <td>
            <input type="text" class="pull-left"/><label class="pull-left"></label>
          </td>
        </tr>
        <tr>
          <td class="one"><span class="pull-left">社会统一信用代码:</span></td>
          <td>
            <input type="text" class="pull-left"/><label class="pull-left"></label>
          </td>
        </tr>
        <tr>
          <td class="one"><span class="pull-left">法人姓名:</span></td>
          <td>
            <input type="text" class="pull-left"/><label class="pull-left"></label>
          </td>
        </tr>
        <tr>
          <td class="one"><span class="pull-left">营业执照照片:</span></td>
          <td>
            <label for="uploadFiles" class="btn btn-warning pull-left">
              选择营业执照
              <input type="file" multiple="multiple" id="uploadFiles1" style="display: none" @click="removeSrc"/>
            </label>
            <button class="btn btn-success pull-left">上传</button>
          </td>
        </tr>
        <tr>
          <td class="one"><span class="pull-left">身份证反面:</span></td>
          <td>
            <label for="uploadFiles" class="btn btn-warning pull-left">
              选择身份证反面
              <input type="file" multiple="multiple" id="uploadFiles2" style="display: none" @click="removeSrc"/>
            </label>
            <button class="btn btn-success pull-left">上传</button>
          </td>
        </tr>
      </tbody>
      <tfoot>
        <tr>
          <td colspan="2"><button class="btn btn-success">提交</button><button class="btn btn-warning">重置</button></td>
        </tr>
      </tfoot>

    </table>
  </div>
</template>

<script>
  export default {
    name: 'SupplierManagementUpdate',
    data(){
      return {
        username: '佩奇'
      }
    }
  }
</script>
<style scoped>


</style>
