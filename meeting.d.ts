type Access = "view" | "modify" | "sign" | "execute"
type FormAccess = "view" | "execute" | "execute_view"

export interface Attendee {
  userId: number
  access: Access
  formAccess: FormAccess
}

export interface Meeting {
  id: string | number
  title: string
  description: string
  startDate: Date
  endDate: Date
  attendees: Attendee[]
  parentId?: null | string | number
  locationId?: null | number
  process?: null | string
  readOnly?: boolean
  priorProbability?: null | number
  channelId?: null | number
  externalId?: null | string
  tags?: unknown[]
  form?: {
    id: number
    viewModel?: {
      [k: string]: unknown
    }
    [k: string]: unknown
  }
  formValue?: {
    [k: string]: unknown
  }
  [k: string]: unknown
}
