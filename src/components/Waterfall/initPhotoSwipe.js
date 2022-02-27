/* eslint-disable */
import { getChildNodesLength, getChildNodesOrdered } from './photoSwipePatch'

export const initPhotoSwipeFromDOM = function (gallerySelector, instance, PhotoSwipe, photoSwipeUIDefault) {
  console.log('initps...')

  // parse slide data (url, title, size ...) from DOM elements
  // (children of gallerySelector)
  const parseThumbnailElements = function (el) {
    let thumbElements = el.childNodes // this assume there is no more than one level
    // let thumbElements = getChildNodes(el)
    // let thumbElements = getChildNodes(document.querySelectorAll(gallerySelector)[0])
    thumbElements = getChildNodesOrdered(document.querySelectorAll(gallerySelector)[0])

    let numNodes = thumbElements.length
    let items = []
    let figureEl
    let linkEl
    let size
    let item

    for (let i = 0; i < numNodes; i++) {
      figureEl = thumbElements[i] // <figure> element

      // include only element nodes
      if (figureEl.nodeType !== 1) {
        continue
      }

      linkEl = figureEl.children[0] // <a> element
      size = linkEl.getAttribute('data-size').split('x')

      // create slide object
      item = {
        src: linkEl.getAttribute('href'),
        w: parseInt(size[0], 10),
        h: parseInt(size[1], 10),
        title: linkEl.getAttribute('title')
      }

      if (figureEl.children.length > 1) {
        // <figcaption> content
        item.title = figureEl.children[1].innerHTML
      }

      if (linkEl.children.length > 0) {
        // <img> thumbnail element, retrieving thumbnail url
        item.msrc = linkEl.children[0].getAttribute('src')
      }

      item.el = figureEl // save link to element for getThumbBoundsFn
      items.push(item)
    }

    return items
  }
  // find nearest parent element
  const closest = function closest (el, fn) {
    return el && (fn(el) ? el : closest(el.parentNode, fn))
  }
  // triggers when user clicks on thumbnail
  const onThumbnailsClick = function (e) {
    e = e || window.event
    e.preventDefault ? e.preventDefault() : (e.returnValue = false)
    let eTarget = e.target || e.srcElement

    // find root element of slide
    let clickedListItem = closest(eTarget, function (el) {
      // console.log(el.tagName && el.tagName.toUpperCase() === 'FIGURE', el.tagName)
      return el.tagName && el.tagName.toUpperCase() === 'FIGURE'
    })
    if (!clickedListItem) {
      return
    }
    // find index of clicked item by looping through all child nodes
    // alternatively, you may define index via data- attribute
    let clickedGallery = clickedListItem.parentNode

    // let childNodes = clickedListItem.parentNode.childNodes
    let childNodes = getChildNodesOrdered(document.querySelectorAll(gallerySelector)[0])

    let numChildNodes = childNodes.length
    let nodeIndex = 0
    let index
    for (let i = 0; i < numChildNodes; i++) {
      if (childNodes[i].nodeType !== 1) {
        continue
      }
      if (childNodes[i] === clickedListItem) {
        index = nodeIndex
        break
      }
      nodeIndex++
    }
    if (index >= 0) {
      // open PhotoSwipe if valid index found
      openPhotoSwipe(index, clickedGallery)
    }
    return false
  }
  // parse picture index and gallery index from URL (#&pid=1&gid=2)
  const photoswipeParseHash = function () {
    let hash = window.location.hash.substring(1)
    let params = {}

    if (hash.length < 5) {
      return params
    }

    let vars = hash.split('&')
    for (let i = 0; i < vars.length; i++) {
      if (!vars[i]) {
        continue
      }

      let pair = vars[i].split('=')
      if (pair.length < 2) {
        continue
      }

      params[pair[0]] = pair[1]
    }
    params.gid = parseInt('1', 10)
    // if (params.gid) {
    //   params.gid = parseInt(params.gid, 10)
    // }
    return params
  }
  const openPhotoSwipe = function (index, galleryElement, disableAnimation, fromURL) {
    let pswpElement = galleryElement.parentElement.parentElement.querySelector('.pswp') // Adapt default selector withe mansory-css plugin
    let gallery
    let options
    let items

    items = parseThumbnailElements(galleryElement)

    // define options (if needed)
    options = {
      // define gallery index (for URL)
      galleryUID: galleryElement.getAttribute('data-pswp-uid'),
      getThumbBoundsFn: function (index) {
        // See Options -> getThumbBoundsFn section of documentation for more info
        let thumbnail = items[index].el.getElementsByTagName('img')[0] // find thumbnail
        let pageYScroll = window.pageYOffset || document.documentElement.scrollTop
        let rect = thumbnail.getBoundingClientRect()
        return {
          x: rect.left,
          y: rect.top + pageYScroll,
          w: rect.width
        }
      }
    }

    // PhotoSwipe opened from URL
    if (fromURL) {
      if (options.galleryPIDs) {
        // parse real index when custom PIDs are used
        // http://photoswipe.com/documentation/faq.html#custom-pid-in-url
        for (let j = 0; j < items.length; j++) {
          if (items[j].pid === index) {
            options.index = j
            break
          }
        }
      } else {
        // in URL indexes start from 1
        options.index = parseInt(index, 10) - 1
      }
    } else {
      options.index = parseInt(index, 10)
    }
    // exit if index not found
    if (isNaN(options.index)) {
      return
    }
    if (disableAnimation) {
      options.showAnimationDuration = 0
    }
    // Pass data to PhotoSwipe and initialize it
    gallery = new PhotoSwipe(
      pswpElement,
      photoSwipeUIDefault,
      items,
      Object.assign(options, instance.options)
    )
    gallery.init()
  }

  // loop through all gallery elements and bind events
  const galleryElements = document.querySelectorAll(gallerySelector)

  for (let i = 0, l = galleryElements.length; i < l; i++) {
    galleryElements[i].setAttribute('data-pswp-uid', i + 1)
    galleryElements[i].onclick = onThumbnailsClick
  }

  // Parse URL and open gallery if it contains #&pid=3&gid=1
  let hashData = photoswipeParseHash()
  if (hashData.pid && hashData.gid) {
    openPhotoSwipe(
      hashData.pid,
      galleryElements[hashData.gid - 1],
      true,
      true
    )
  }
}
