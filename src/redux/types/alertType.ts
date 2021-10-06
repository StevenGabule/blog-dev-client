import { IAlert } from '../../utils/Types'

export const ALERT = 'ALERT'

export interface IAlertType {
  type: typeof ALERT
  payload: IAlert
}
