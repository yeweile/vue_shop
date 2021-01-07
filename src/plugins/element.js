import Vue from 'vue'
import { Button } from 'element-ui'
import {Form,FormItem} from 'element-ui'
import { Input } from 'element-ui'
// 导入弹框提示组件
import { Message } from 'element-ui'
// 导入home页面的组件
import {Container,Header,Aside,Main} from 'element-ui'
import {Menu,Submenu,MenuItemGroup,MenuItem} from 'element-ui'
// 导入users页面的组件
import {
  Breadcrumb,
  BreadcrumbItem,
  Card,
  Row,
  Col,
  Table,
  TableColumn,
  Switch,
  Tooltip,
  Pagination,
  Dialog,
  MessageBox
  
} from 'element-ui'

import { from } from 'core-js/fn/array'
Vue.use(Button)
Vue.use(Form)
Vue.use(FormItem)
Vue.use(Container)
Vue.use(Input)
Vue.use(Header)
Vue.use(Aside)
Vue.use(Main)
Vue.use(Menu)
Vue.use(Submenu)
Vue.use(MenuItemGroup)
Vue.use(MenuItem)
Vue.use(Breadcrumb)
Vue.use(BreadcrumbItem)
Vue.use(Card)
Vue.use(Row)
Vue.use(Col)
Vue.use(Table)
Vue.use(TableColumn)
Vue.use(Switch)
Vue.use(Tooltip)
Vue.use(Pagination)
Vue.use(Dialog)
Vue.prototype.$message = Message
Vue.prototype.$confirm = MessageBox.confirm

