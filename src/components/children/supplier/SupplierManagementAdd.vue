<template>
  <div class="supplierManagementAdd">
    <table class="table table-striped table-hover table-bordered table-responsive">
      <caption>供应商管理->新增供应商</caption>
      <thead>
        <tr>
          <th colspan="2"><span class="pull-left">基本信息</span><span class="pull-right">返回上一页</span></th>
        </tr>
      </thead>
      <tbody>
        <tr>-
          <td class="one"><span class="pull-left">用户名:</span></td>
          <td><input type="text" class="pull-left"/><label class="pull-left">(必填)</label></td>
        </tr>
        <tr>
          <td class="one"><span class="pull-left">密码:</span></td>
          <td><input type="password" class="pull-left"/><label class="pull-left">(必填-六位以上)</label></td>
        </tr>
        <tr>
          <td class="one"><span class="pull-left">确认密码</span></td>
          <td><input type="password" class="pull-left"/><label class="pull-left">(必填-六位以上)</label></td>
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
          <td class="one"><span class="pull-left">服务热线:</span></td>
          <td>
            <input type="text" class="pull-left" style="border-radius: 3px"/><label class="pull-left"></label>
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
</template>

<script>
  export default {
    name: 'SupplierManagementAdd'
  }
</script>
