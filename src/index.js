const {app, BrowserWindow, ipcMain } = require('electron')

const {join} = require("path")

app.whenReady().then(function(){

    // Aqui programaremos nossa aplicação

    const janela = new BrowserWindow({

        autoHideMenuBar: true, // Esconde o menu
        frame: false, // Ignora qualquer estilização que venha por padrão do S.O
        icon: join(__dirname,"./public/icon.png"),
        minHeight: 600,
        minWidth: 512,
        resizable: false,
        title: "Repositório de Programas",
        webPreferences: {
            preload: join(__dirname, "preload.js")
        }


    })

    janela.loadFile(  join(__dirname,"public/PaginaInicio.html")  )


})