
export const COUNTER = 'COUNTER'

export function setCounter (key, value) {
  return {
    type: COUNTER,
    key,
    value
  }
}

export default exports
