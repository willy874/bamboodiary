import m from 'mithril'
import Layout from '../page/layout'
import * as Page from '../page'
import MainNavbar from './main-navbar'
import HeaderNavbar from './header-navbar'

//集中設定所有的 Route
export default class Control {
    constructor() {
        const RootRoute = [{
            name: '首頁',
            link: '/home',
            page: Layout(Page.Home),
        }]
        // this.node = <Array> => {'/route' : Component }  
        this.node = {
            RootRoute,
            MainNavbar,
            HeaderNavbar
        }
        this.exclude = ['/resume']
        
    }

    route() {
        const route = {}
        Object.keys(this.node).map(key => {
            const nodes = this.node[key]
            nodes.forEach(node=>{
                route[node.link] = node.page
            })
        })
        return route
    }
    routeSet(route) {
        const dom = this.headerDom.querySelectorAll('.page-switch')[0]
        dom.classList.remove('animateEnd')
        dom.classList.add('animateStart')
        dom.addEventListener('transitionend', () => {
            m.route.set(route)
            dom.classList.remove('animateStart')
            dom.classList.add('animateEnd')
        })
        
    }

}