/* eslint-disable */
const getChildNodes = function (container) {
  function recursor (container, list) {
    for (var i = 0; i < container.childNodes.length; i++) {
      var child = container.childNodes[i]

      if (child.tagName && child.tagName.toUpperCase() === 'FIGURE') {
        list.push(child)
      } else if (child.nodeType !== 3 && child.childNodes) {
        list = recursor(child, list)
      }
    }
    return list
  }

  const output = recursor(container, [])
  return output
}

const getChildNodesLength = function (container) {
  function recursor (container, index) {
    // console.log('>### INIT on : '+container.nodeType, container.childNodes)
    for (var i = 0; i < container.childNodes.length; i++) {
      var child = container.childNodes[i]

      if (child.tagName && child.tagName.toUpperCase() === 'FIGURE') {
        index++
      } else if (child.nodeType !== 3 && child.childNodes) {
        index = recursor(child, index)
      }
    }
    return index
  }

  const length = recursor(container, 0)
  return length
}

const getChildNodesOrdered = function (container) {
  // Adaptation to the mansonry-css plugin structure (colmuns detection)
  const array = []
  const out = []
  const cols = container.childNodes
  const childLenght = getChildNodesLength(container)

  for (let i = 0; i < cols.length; i++) {
    array.push([])
    for (let j = 0; j < childLenght; j++) {
      array[i] = cols[i].childNodes
    }
  }

  // return final output (ordered array)
  let n = 0
  let index = -1
  for (let x = 0; x < childLenght; x++) {
    if (x % cols.length > 0) {
      n++
    } else {
      n = 0
      index++
    }
    out.push(array[n][index])
  }
  return out
}

export {
  getChildNodes,
  getChildNodesLength,
  getChildNodesOrdered
}
