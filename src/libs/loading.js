let loadingCount = 0
const startLoading = () => {
  console.log('xxx')
  // document.getElementById('loading').style.display = 'flex'
}

const endLoading = () => {
  console.log('yyy')
  // document.getElementById('loading').style.display = 'none'
}

export const showLoading = () => {
  if (loadingCount === 0) {
    startLoading()
  }
  loadingCount += 1
}

export const hideLoading = () => {
  if (loadingCount <= 0) {
    return
  }
  loadingCount -= 1
  if (loadingCount === 0) {
    endLoading()
  }
}
