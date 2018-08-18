import { Action } from '@ngrx/store'

export const GET_REQUEST_BEGIN = '[HTTP] GET_REQUEST_BEGIN'
export const GET_REQUEST_END = '[HTTP] GET_REQUEST_END'

export class GetRequestBegin implements Action {
  readonly type: string = GET_REQUEST_BEGIN
}

export class GetRequestEnd implements Action {
  readonly type: string = GET_REQUEST_END
}
