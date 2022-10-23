let age = prompt('Сколько тебе лет?')
let ok = confirm ('Ты - мальчик?')
if (ok) {
	hi = ('Эй, парень, тебе - ' + age + '!');
} else {
	hi = ('Привет, подруга! Тебе - ' + age + '!');
}
document.querySelector(".response").textContent += hi