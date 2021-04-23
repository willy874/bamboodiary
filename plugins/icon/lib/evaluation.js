import $ from 'jquery'

$('.evaluation').each((index, el) => {
  const $el = $(el)
  const max = Number($el.attr('data-max'))
  const maxLevel = isNaN(max) && max ? max : 5
  const strLevel = $el.attr('data-level')
  const intLevel = (function () {
    const level = Number(strLevel.split('.')[0])
    if (isNaN(level) && level <= maxLevel) {
      return level
    }
    return 0
  })()
  const floatLevel = (function () {
    const level = Number('0.' + strLevel.split('.')[1])
    if (isNaN(level) && intLevel < maxLevel) {
      return level * 100
    }
    return 0
  })()
  const strIcon = $el.html()
  $(el).html(function () {
    return new Array(maxLevel).fill(strIcon).join('')
  })
  $(el)
    .children()
    .each((index, _el) => {
      const _$el = $(_el)
      if (index > intLevel) {
        _$el.css('color', 'transparent')
      } else {
        _$el.css('color', '#49c5b1')
      }
    })
  if (floatLevel) {
    $(el)
      .children()
      .last()
      .css('color', '#49c5b1')
      .css(
        'clip-path',
        `polygon(0 0, ${floatLevel}% 0, ${floatLevel}% 100%, 0% 100%)`
      )
  }
})
