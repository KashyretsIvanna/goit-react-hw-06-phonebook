import types from "./action-types"

export const setContacts=(newItem)=>{
    return({
        type:types.SETCONTACTS,
        payload:newItem
    })
}

export const setFilter=value=>{
    return({
        type:types.FILTER,
        payload:text
    })
}