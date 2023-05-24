const VideoElement = document.querySelector('video');
const startBtn = document.getElementById("startBtn");
const stopBtn = document.getElementById("stopBtn");
const VideoSelectionBtn = document.getElementById('VideoSelectBtn');
VideoSelectionBtn.onclick = getVideoSources;

const { desktopCapturer, remote } = require('electron');

const { Menu } = remote;

async function getVideoSources() {
    const inputSources = await desktopCapturer.getSources({
        types: ['window', 'screen']
    });

    const VideoOptionsMenu = Menu.buildFromTemplate(
        inputSources.map(source => {
            return {
                label: source.name,
                click: () => selectSource(source)
            }
        })
    )

    VideoOptionsMenu.popup();
}