import { createAction } from "@reduxjs/toolkit"

// export const setContacts=(newItem)=>{
//     return({
//         type:types.SETCONTACTS,
//         payload:newItem
//     })
// }
export const setContacts=createAction("phonebook/setcontacts")
export const setFilter=createAction("phonebook/setfilter")

// export const setFilter=value=>{
//     return({
//         type:types.FILTER,
//         payload:value
//     })
// }