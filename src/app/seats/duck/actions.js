import types from './types'

const add = item => ({
    type: types.ADD_SEATS, item
})
const addDefault = item => ({
    type: types.ADD_DEFAULT_SEATS, item
})
const removeDefault = item => ({
    type: types.REMOVE_DEFAULT_SEATS, item
})

export default {
    add,
    addDefault,
    removeDefault
}