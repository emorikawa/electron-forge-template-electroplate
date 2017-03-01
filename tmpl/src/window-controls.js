const {remote, ipcRenderer} = require('electron');

// TODO use React.

module.exports = function createWindowControls(root) {
  root.innerHTML = `
    <div id='electroplate-window-controls' style="position: absolute; display: flex; margin-top: 13px; margin-left: 13px;">
      <div id='electroplate-close' style="background: #fc615d; width: 12px; height: 12px; border-radius: 6px; box-shadow: 0 0 0.5px #dd4542; margin-right: 8px;"></div>
      <div id='electroplate-minimize' style="background: #fdbc40; width: 12px; height: 12px; border-radius: 6px; box-shadow: 0 0 0.5px #dba13f; margin-right: 8px;"></div>
      <div id='electroplate-fullscreen' style="background: #34c84a; width: 12px; height: 12px; border-radius: 6px; box-shadow: 0 0 0.5px #25a833; margin-right: 8px;"></div>
    </div>
  `

  const close = document.getElementById('electroplate-close')
  const minimize = document.getElementById('electroplate-minimize')
  const fullscreen = document.getElementById('electroplate-fullscreen')

  close.addEventListener("click", () => {
    remote.app.quit();
  })

  minimize.addEventListener("click", () => {
    ipcRenderer.send("minimize")
  })

  fullscreen.addEventListener("click", () => {
    ipcRenderer.send("maximize")
  })
}
