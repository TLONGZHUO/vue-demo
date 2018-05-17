import Vue from 'vue'
import Router from 'vue-router'
const Login = () => import('../html/Login')
const Index = () => import('../html/Index')
const SupplierManagement = () => import('../components/right/SupplierManagement')
const SupplierManagementUpdate = () => import('../components/children/supplier/SupplierManagementUpdate')
const SupplierManagementAdd = () => import('../components/children/supplier/SupplierManagementAdd')
const AgentManagement = () => import('../components/right/AgentManagement')
const GoodsManagement = () => import('../components/right/GoodsManagement')
const ClassManagement = () => import('../components/right/ClassManagement')
const AgentChildren = () => import('../components/children/AgentChildren')
const GoodsAudit = () => import('../components/children/GoodsAudit')
const IndexPic = () => import('../components/right/IndexPic')
const FileUpload = () => import('../components/common/FileUpload')
const PageTemplate = () => import('../components/common/PageTemplate')

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Login',
      component: Login
    },
    {
      path: '/index',
      name: 'Index',
      component: Index,
      children:[
        {
          path: '',
          name: 'IndexPic',
          component: IndexPic
        },
        {
          path: '/supplierManagement',
          name: 'SupplierManagement',
          component: SupplierManagement,
        },
        {
          path: '/supplierManagement/update',
          name: 'SupplierManagementUpdate',
          component: SupplierManagementUpdate
        },
        {
          path: '/supplierManagement/add',
          name: 'SupplierManagementAdd',
          component: SupplierManagementAdd
        },
        {
          path: '/agentManagement',
          name: 'AgentManagement',
          component: AgentManagement,
        },
        {
          path: '/agentManagement/agentChildren',
          name: 'AgentChildren',
          component: AgentChildren
        },
        {
          path: '/goodsManagement',
          name: 'GoodsManagement',
          component: GoodsManagement
        },
        {
          path: '/goodsManagement/audit',
          name: 'GoodsAudit',
          component: GoodsAudit
        },
        {
          path: '/classManagement',
          name: 'ClassManagement',
          component: ClassManagement
        },
        {
          path: '/fileUpload',
          name: 'FileUpload',
          component: FileUpload
        }
      ]
    }
  ]
})
