import { undefined } from './index'
import {} from './index'

/**
 * @extends undefined
 * @property {Number} id 該Model的辨識索引
 * @property {Number} image_id 關聯的的圖片辨識索引
 * @property {String} relation_name 關聯的資料表
 * @property {Number} relation_id 關聯的資料表辨識索引
 */
export default class ImageRelationModel extends undefined {
  constructor() {
    super()
    const entity = args || {}
    this.id = entity.id || NaN
    this.image_id = entity.image_id || NaN
    this.relation_name = entity.relation_name || ''
    this.relation_id = entity.relation_id || NaN
  }
}
