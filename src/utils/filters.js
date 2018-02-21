exports.capitalize = str => {
  return str.charAt(0).toUpperCase() + str.slice(1)
}

exports.formatSize = size => {
  if (size > 1024 * 1024 * 1024 * 1024) {
    return (size / 1024 / 1024 / 1024 / 1024).toFixed(2) + ' TB'
  } else if (size > 1024 * 1024 * 1024) {
    return (size / 1024 / 1024 / 1024).toFixed(2) + ' GB'
  } else if (size > 1024 * 1024) {
    return (size / 1024 / 1024).toFixed(2) + ' MB'
  } else if (size > 1024) {
    return (size / 1024).toFixed(2) + ' KB'
  }
  return size.toString() + ' B'
}

exports.formatDate = dateStr => {
  const obj = dateStr ? new Date(dateStr) : new Date()

  const options = { year: 'numeric', month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric' }
  return obj.toLocaleDateString('us-en', options)
}

exports.customTime = item => {
  if (item === null) {
    return ''
  }

  let nowTime = new Date().getTime()
  let minuteTime = 60 * 1000
  let hourTime = 60 * minuteTime
  let dayTime = 24 * hourTime
  let monthTime = dayTime * 30
  let yearTime = monthTime * 12

  let publishTime = new Date(item + 'Z').getTime()
  let historyTime = parseInt(nowTime) - parseInt(publishTime)
  let descTime
  if (historyTime >= yearTime) {
    //  按年算
    descTime = parseInt(historyTime / yearTime) + '年前'
  } else if (historyTime < yearTime && historyTime >= monthTime) {
    //  按月算
    descTime = parseInt(historyTime / monthTime) + '月前'
  } else if (historyTime < monthTime && historyTime >= dayTime) {
    //  按天算
    descTime = parseInt(historyTime / dayTime) + '天前'
  } else if (historyTime < dayTime && historyTime >= hourTime) {
    //  按小时算
    descTime = parseInt(historyTime / hourTime) + '小时前'
  } else if (historyTime < hourTime && historyTime >= minuteTime) {
    //  按分钟算
    descTime = parseInt(historyTime / minuteTime) + '分钟前'
  } else {
    descTime = '刚刚'
  }
  return descTime
}
