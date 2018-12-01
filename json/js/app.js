data = '[{"airline":"Oceanic","status":"crashed","departure":{"iata":"SYD","time":"2004-09-22 14:55"}},{"airline":"Delta","status":"on_time","departure":{"iata":"JFK","time":"2018-04-26 12:34"},"arrival":{"iata":"SFO","time":"2018-04-26 18:55"}},{"airline":"American","status":"landed","departure":{"iata":"LAX","time":"2018-04-25 14:55"},"arrival":{"iata":"BOG","time":"2018-04-25 18:55"}}]'

$(document).ready(function(){
  vuelos = JSON.parse(data) //arreglo de objetos
    vuelos.forEach(function(vuelo){
      if (vuelo.arrival){
    	   $('tbody').append(`<tr><td>${vuelo.airline}</td><td>${vuelo.status}</td><td>${vuelo.departure.iata} ${vuelo.departure.time}</td><td>${vuelo.arrival.iata}</td>
        </tr>`)
    }else{
      $('tbody').append(`<tr><td>${vuelo.airline}</td><td>${vuelo.status}</td><td>${vuelo.departure.iata} ${vuelo.departure.time}</td><td></td>
     </tr>`)
    }
  })
})
