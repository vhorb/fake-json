
export interface Attendee {
  userId: number
  access: [
    "view",
    "modify",
    "sign",
    "execute"
  ]
  formAccess: [
    "view",
    "execute",
    "execute_view"
  ]
}

export interface MySchema {
  id: string | number
  title: string
  description: string
  startDate: number
  endDate: number
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
