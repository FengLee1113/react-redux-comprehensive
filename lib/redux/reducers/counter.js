var _ = require('lodash')
import actions from '../action'

module.exports = function (state = {}, action = {}) {
  if (action.type === actions.COUNTER) {
    return _.assign({}, state, _.zipObject([action.key],[action.value]))
  }
  return state
}