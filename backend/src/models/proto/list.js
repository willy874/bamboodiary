import DataModel from './data'
import { definePropertySet } from '../../library'
import { axiosInstance } from '../../api'

export default class ListModel {
  constructor(args) {
    const entity = (() => {
      if (args) {
        return typeof args === 'string' ? JSON.parse(args) : args
      }
      return {}
    })()
    const Model = entity.modelType || DataModel
    const api = entity.api || {}
    this.data = (entity.data && entity.data.map(p => new Model(p))) || []
    this.loading = entity.loading || false
    this.current_page = entity.current_page || 0
    this.last_page = entity.last_page || 0
    this.per_page = entity.per_page || 0
    this.from = entity.from || 0
    this.to = entity.to || 0
    this.total = entity.total || 0
    this.path = entity.path || ''
    definePropertySet.call(
      this,
      {
        entity,
        modelType: Model,
        primaryKey: entity.primaryKey || 'id',
        api,
      },
      {
        enumerable: false,
        writable: true,
      }
    )
  }

  setData(data) {
    const Model = this.modelType
    return data.map(
      p =>
        new Model({
          ...p,
          primaryKey: this.primaryKey,
          api: this.api,
        })
    )
  }

  /**
   * 設定 model property 值
   * @param {*} entity
   */
  set(entity) {
    Object.keys(entity).map(key => {
      if (key === 'data') {
        this[key] = this.setData(entity[key])
      } else {
        this[key] = entity[key]
      }
    })
  }

  setPages(args) {
    const entity = args || {}
    this.current_page = entity.current_page || 0
    this.last_page = entity.last_page || 0
    this.per_page = entity.per_page || 0
    this.from = entity.from || 0
    this.to = entity.to || 0
    this.total = entity.total || 0
    this.path = entity.path || ''
  }

  getPagination(page = '1', options = {}) {
    if (typeof page === 'object' && !('page' in page)) {
      console.warn('Is param not a query string.')
    }
    return axiosInstance({
      baseURL: '',
      query: typeof page === 'object' ? page : { page },
      ...options,
    }).get(this.path)
  }

  reflashData(page = '1', options = {}) {
    this.loading = false
    return new Promise((resolve, reject) => {
      this.getPagination(page, options)
        .then(res => {
          this.loading = true
          this.data = this.setData(res.data)
          resolve()
        })
        .catch(reject)
    })
  }

  pushData(page = '1', options = {}) {
    this.loading = false
    return new Promise((resolve, reject) => {
      this.getPagination(page, options)
        .then(res => {
          this.loading = true
          const Model = this.modelType
          res.data.forEach(p => {
            const targetModel = this.data.find(m => m[this.primaryKey] === p[this.primaryKey])
            if (targetModel) {
              targetModel.set(p)
            } else {
              this.data.push(
                new Model({
                  p,
                  primaryKey: this.primaryKey,
                  api: this.api,
                })
              )
            }
          })
          resolve()
        })
        .catch(reject)
    })
  }

  readList(options = {}) {
    this.loading = false
    return new Promise((resolve, reject) => {
      axiosInstance(options)
        .get(this.api.readList)
        .then(res => {
          this.loading = true
          this.set(res.data)
          resolve(res)
        })
        .catch(reject)
    })
  }
}
