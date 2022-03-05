<script>
export default {
  props: {
    btn: {
      type: Object,
      required: false,
      default() {
        return {
          class: 'btn',
          // <button> attributes
          tag: 'button',
          autofocus: false,
          disabled: false,
          type: 'button',
          // <a> attributes
          name: 'default button',
          label: 'button',
          href: 'http://www.google.com',
          title: 'button',
          target: '_self',
        }
      },
    },
  },
  // doc: https://vuejs.org/v2/guide/render-function.html
  render(createElement) {
    const btnId = this.btn.name
      .toLowerCase()
      .replace(/\W+/g, '-')
      .replace(/(^-|-$)/g, '')

    return createElement(
      this.btn.tag,
      {
        attrs: {
          autofocus: this.btn.tag === 'button' ? this.btn.autofocus : null,
          disabled: this.btn.tag === 'button' ? this.btn.disabled : null,
          type: this.btn.tag === 'button' ? this.btn.type : null,
          name: this.btn.tag === 'button' ? btnId : null,
          value: this.btn.tag === 'button' ? btnId : null,
          id: this.btn.tag === 'a' ? btnId : null,
          href: this.btn.tag === 'a' ? this.btn.href : null,
          target: this.btn.tag === 'a' ? this.btn.target : null,
          title: this.btn.tag === 'a' ? this.btn.title : null,
          class: this.btn.class,
          rel: this.btn.tag === 'a' && this.btn.target === '_blank' ? 'noopener noreferer' : null
        },
      },
      this.btn.label
    )
  },
}
</script>
