import {UserType} from "../HW8";

export type sortTypeAT = {
    type: 'SORT'
    payload: string
}


export type sortAge = {
    type: 'CHECK-AGE'
    payload: number
}

type defaultAction = sortTypeAT |  sortAge

export const homeWorkReducer = (state: UserType[], action: defaultAction): UserType[] => { // need to fix any
    switch (action.type) {
        case 'SORT':
            const copyState = [...state]
            copyState.sort((a, b) => {
                if (a.name > b.name) {
                    return 1
                } else if (a.name < b.name) {
                    return -1
                } else {
                    return 0
                }
            })
            return action.payload === 'up' ?  copyState : copyState.reverse()
        case "CHECK-AGE":
            return [...state].filter( s => s.age >= 18)
        default:
            return state
    }
}