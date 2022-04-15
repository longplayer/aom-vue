const addDeviceTypeClass = (isMobile) => {
  if (typeof document !== 'undefined') {
    document.body.classList.add(isMobile ? 'is-touch' : 'is-mouse')
  }
}

export default ({ app }, inject) => {
  inject('dom', {
    addDeviceTypeClass
  })
}
