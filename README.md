# react-tasks


SPA для постановки задач по проектам и контроля их исполнения.  


## Структура:  
	- Dashboard  
	- Проекты  
		- Задачи  
	- Лог  
	- Пользователи  
	- Настройки  
	- Регистрация  
	- Логин  
  
### Проект:  
 - Название  
 - Описание  
 - Тип  
 - URL  
  
### Задача:  
 - Название  
 - Описание  
 - Тип  
 	- Таск  
 	- Баг  
 - Приоритет  
    - Высокий  
    - Средний  
    - Низкий  
 - Исполнитель  
 - Кто поставил  
  
### Пользователь:  
 - Имя  
 - Фамилия  
 - Никнейм  
 - Почта  
 - Роль  
    - Администратор  
    - Проджект-менеджер  
    - Разработчик  
  
  
  
После входа Пользователя в приложения показываем Dashboard со списками Проектов и Задач, связанных с Пользователем. 
Примерный вид – https://gitlab.com/sofika_1/react-tasks/blob/master/desktop.png 
  
  
#### Проекты.  
  
Список проектов, связанных с Пользователем, с возможностью редактирования, просмотра и удаления проектов (если это позволяют права).   
При выборе проекта переходим на страницу Проекта и показываем список Задач, связанных с пользователем. Также с возможностью редактирования, просмотра и удаления.  
  
  
#### Лог.  
  
Страница отображающая хронологию взаимодействия Пользователей с Проектами и Задачами.  
  
  
#### Пользователи.  
  
Раздел доступен только для Администратора и Проджект-менеджера. Содержит список Пользовательей, связанных с Администратором и Проджект-менеджером с возможностью редактирования, просмотра и удаления их аккаунтов.  
  
  
#### Настройки.  
  
Раздел позволяет управлять аккаутном текущего Позьзователя. Позволяет просмотривать, редактировать (в том числе сбрасывать пароль), и удалять собственный аккаунт.  
  
  















