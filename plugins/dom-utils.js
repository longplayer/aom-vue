const addDeviceTypeClass = (isMobile) => {
  if (typeof document !== 'undefined') {
    document.body.classList.add(isMobile ? 'is-touch' : 'is-mouse')
  }
}

const blockPageScroll = () => {
  if (typeof document !== 'undefined') {
    document.body.classList.toggle('pge-scroll-block')
  }
}

export default ({ app }, inject) => {
  inject('dom', {
    addDeviceTypeClass,
    blockPageScroll,
  })
}
