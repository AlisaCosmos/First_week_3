# Курс Яндекс - Разработка интерфейсов: вёрстка и JavaScript  (JavaScript, часть 1: основы и функции (неделя 1))

## Задание: Реализовать функцию, которая увеличивает время на заданное колличество минут .
### Условия:
* На вход функция принимает 3 параметра: часы, минуты, интервал в минутах, на который нужно изменить время.
* Гарантируется, что любой из 3 параметров целое положительное число.
* Параметр часы принимает значение в диапазоне[0, 23].
* Параметр минуты принимает значение в диапазоне[0, 59].
* Прибавляемый интервал может быть больше 60 минут.
* Переход в следующие сутки должен корректно обрабатываться.
* Функция должна возвращать корректно отформатированное время: 1:2 –> 01:02