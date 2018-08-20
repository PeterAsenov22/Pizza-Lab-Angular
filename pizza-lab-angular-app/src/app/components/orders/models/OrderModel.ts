import { OrderProduct } from './OrderProduct'

export class OrderModel {
  creatorId: string
  products: OrderProduct[]
  date: Date
  status: string
}
