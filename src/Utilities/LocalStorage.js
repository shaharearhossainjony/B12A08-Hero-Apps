export const loadInstalledAppList = () => {
  try {
    const apps = localStorage.getItem('appList')
    return apps ? JSON.parse(apps) : []
  } catch (err) {
    console.log(err)
    return []
  }
}

export const updateInstalledAppList = (app) => {
  const appList = loadInstalledAppList()
  try {
    const isDuplicate = appList.some(p => p.id === app.id)
    if (isDuplicate) return
    const updatedAppList = [...appList, app]
    localStorage.setItem('appList', JSON.stringify(updatedAppList))
  } catch (err) {
    console.log(err)
  }
}

export const removeFromAppList = (id) => {
  const appList = loadInstalledAppList()
  try {
    const updatedAppList = appList.filter(p => p.id !== id)
    localStorage.setItem('appList', JSON.stringify(updatedAppList))
  } catch (err) {
    console.log(err)
  }
}
