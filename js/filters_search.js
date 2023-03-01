
function captureData(){
  let inputSearch = document.getElementById(`search`)
  let checks = document.querySelectorAll(`.checks:checked`)
  console.log(checks);

  let data = {
    [inputSearch.name] : inputSearch.value,
    [checks[0].name]: []
  }  

  checks.forEach( each => data[checks[0].name].push(each.value) )
  console.log( data );
  }


let searchButton = document.getElementById(`searchButton`)
searchButton.addEventListener(`click`, (evento) => {
      evento.preventDefault()
      captureData()    }
  )
