const year=document.querySelector('#year')
const days=document.querySelector('#days')
const hours=document.querySelector('#hours')
const minutes=document.querySelector('#minutes')
const seconds=document.querySelector('#seconds')



//делаем расчеты
const currentYear=new Date().getFullYear()//узнаем текущее число и берем годик
const nextHb=new Date(`May 29 ${currentYear} 00:00:00`)//добавляем нужную дату с интерполяцией 


function updateCounter(){
const currentTime = new Date()
const diff=nextHb-currentTime//разница между текущей датой и нужной 

const daysLeft=Math.floor(diff/1000/60/60/24)//перевод в дни
const hoursLeft=Math.floor(diff/1000/60/60)%24//подсчет часов с округлением 
const minutesLeft=Math.floor(diff/1000/60)%24//подсчет минут с округлением 
const secondsLeft=Math.floor(diff/1000)%24//подсчет секунд с округлением






days.innerText=daysLeft
hours.innerText=hoursLeft<10?'0'+hoursLeft:hoursLeft
minutes.innerText=minutesLeft<10?'0'+minutesLeft:minutesLeft
seconds.innerText=secondsLeft<10?'0'+secondsLeft:secondsLeft
}
updateCounter()

setInterval(updateCounter, 1000)


year.innerText=currentYear //записываем текущий код