# Что необходимо сделать:
- ✅ 1. Обновлять страницу при добавлении статьи
- ✅ 2. Удаление
- ✅ 3. Редактирование 
- ❌ 4. Самостоятельное задание
#### Смотрите разницу в файле [/routes/admin.js](https://github.com/eXTrimeXT/Server/blob/main/routes/admin.js)
Прикол был вот тут:
``` 
// Контроллеры для админ панели
router.get('/', adminController.getArticleAll);
router.get('/:idArticle', adminController.getArticle);
router.post('/addArticle', adminController.addArticle);
router.post('/editArticle', adminController.editArticle);
router.post('/deleteArticle', adminController.deleteArticle);
```
Обратите внимание на `:`

# 4. Самостоятельное задание
#### 1. Создайте в корне эту папку, и в ней папку css. В ней создайте файл 1.css. Во всех файлах .ejs подключите стилевую таблицу:
- Придумайте простое оформление сайта, выделите формы рамками. 


#### 2. Создайте таблицу News, в которой разместите заголовок, описание и текст новости. На главной странице опубликуйте список новостей:
- Заголовок (активная ссылка) и описание. 
- При щелчке по заголовку открывается полный просмотр новости, включая текст.
Видео как создавалась таблица news
[Создание](https://github.com/eXTrimeXT/Server/blob/main/СозданиеТаблицыNews.mp4)
[Редактирование](https://github.com/eXTrimeXT/Server/blob/main/ЗабылAUO_в_ID.mp4)