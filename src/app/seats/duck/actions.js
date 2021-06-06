import types from './types'

const add = item => ({
    type: types.ADD_SEATS, item
})

export default {
    add
}