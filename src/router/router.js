import App from '../App'
//懒加载路由 详细：https://router.vuejs.org/zh-cn/advanced/lazy-loading.html
const TopicList = r => require.ensure([], () => r(require('../pages/topicList')), 'TopicList')
const About = r => require.ensure([], () => r(require('../pages/about')), 'About')
const Login = r => require.ensure([], () => r(require('../pages/login')), 'Login')
const Message = r => require.ensure([], () => r(require('../pages/message')), 'Message')
const Topic = r => require.ensure([], () => r(require('../pages/topic')), 'Topic')
const NewTopic = r => require.ensure([], () => r(require('../pages/newTopic')), 'NewTopic')
const User = r => require.ensure([], () => r(require('../pages/user')), 'User')


export default [{
    path: '/',
    component: App, //顶层路由，对应index.html
    children: [ //二级路由。对应App.vue
        {
            path: '',
            redirect: {
                name: 'list'
            }
        }, {
            path: '/list',
            name: 'list',
            component: TopicList
        }, {
            path: '/topic/:id',
            name: 'topic',
            component: Topic
        }, {
            path: '/create',
            name: 'create',
            component: NewTopic,
            meta: {
                requiresAuth: true
            }
        }, {
            path: '/login',
            name: 'login',
            component: Login
        }, {
            path: '/user/:loginname',
            name: 'user',
            component: User
        }, {
            path: '/message',
            name: 'message',
            component: Message,
            meta: {
                requiresAuth: true
            }
        }, {
            path: '/about',
            name: 'about',
            component: About
        }, {
            path: '*',
            component: TopicList
        }
    ]
}]