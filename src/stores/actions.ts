export const ADD_HEAD = '@ADD_HEAD'
export type HeadType = {
  title: string
  themeColor?: string
  description?: string
  icon?: string
}

export const addHead = (payload: HeadType) => ({
  type: ADD_HEAD,
  payload
})

export type AddHeadType = ReturnType<typeof addHead>

export type ActionType = AddHeadType
