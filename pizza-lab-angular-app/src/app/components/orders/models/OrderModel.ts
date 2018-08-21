import { OrderProductModel } from './OrderProductModel'

export class OrderModel {
  _id: string
  creatorId: string
  products: OrderProductModel[]
  date: Date
  status: string
}
