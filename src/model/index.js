import m from 'mithril'

export default class Model {
    constructor() {
        //作品集
        this.portfolio = []
        this.article = {
            blog: []
        }
    }
    modelCreate(){
        m.request({
            method: "GET",
            url: "./data/portfolio.json",
        }).then((response) => { this.portfolio = response })
        m.request({
            method: "GET",
            url: "./data/article.json",
        }).then((response) => { this.article = response })
    }
}