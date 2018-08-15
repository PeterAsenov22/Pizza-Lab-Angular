import { GET_ALL, ADD_REVIEW } from './products.actions'
import { ProductModel } from '../../../components/products/models/ProductModel'
import { ProductsState } from './products.state'

const initialState: ProductsState = {
  all: []
}

function syncProducts (state: ProductsState, products: ProductModel[]) {
  return Object.assign({}, state, {
    all: reconcile(state.all, products)
  })
}

function reconcile (oldData, newData) {
  const newDataById = {}
  for (const entry of newData) {
    newDataById[entry._id] = entry
  }

  const result = []
  for (const entry of oldData) {
    if (newDataById[entry._id]) {
      result.push(newDataById[entry._id])
      delete newDataById[entry._id]
    } else {
      result.push(entry)
    }
  }

  for (const entryId in newDataById) {
    result.push(newDataById[entryId])
  }

  return result
}

export function productsReducer (state: ProductsState = initialState, action) {
  switch (action.type) {
    case GET_ALL:
      return syncProducts(state, action.payload)
    case ADD_REVIEW:
      return syncProducts(state, [action.payload])
    default:
      return state
  }
}
