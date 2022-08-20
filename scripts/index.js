;(() => {
    const dataName = document.querySelector('[data-name]')
    const qStr = window.location.search
    const urlParams = new URLSearchParams(qStr)
    const name = urlParams.get('name')
  
    dataName.textContent = `Welcome to Bulgari, ${name}`

    const notesClass = document.getElementsByClassName('notes')
    const notesTitleClass = document.getElementsByClassName('notes-title')
    
    notesTitleClass.style.color = '$primary-color'

    const headlineDiv = document.getElementById('headline')
    const div = document.createElement('div')
    const newAlert = document.createElement('button')
    
    newAlert.textContent = 'Shop'
    newAlert.style.border = '1px solid black'
    newAlert.style.color = 'white'
    newAlert.style.margin = '10px'
    newAlert.style.padding = '10px'
    newAlert.style.fontFamily = '$font-stack'
    newAlert.style.fontSize = '10px'

    div.appendChild(newAlert)
    headlineDiv.appendChild(div)

    const btnMessage = document.querySelector('#headline > div > button', sayMessage)
    btnMessage.addEventListener('click', sayMessage)

    function sayMessage() {
      alert('message')
    }


  })()

