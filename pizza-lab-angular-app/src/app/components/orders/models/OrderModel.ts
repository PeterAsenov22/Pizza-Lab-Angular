import { OrderProductModel } from './OrderProductModel'

export class OrderModel {
  creatorId: string
  products: OrderProductModel[]
  date: Date
  status: string
}
