# Что необходимо сделать:
- [x] 1. Обновлять страницу при добавлении статьи (ГОТОВО)
- [x] 2. Удаление
- [x] 3. Редактирование 
- [] 4. Самостоятельное задание
## Смотрите разницу в файле <https://github.com/eXTrimeXT/Server/blob/main/routes/admin.js> 
Прикол вот тут:
\``` 
// Контроллеры для админ панели
router.get('/', adminController.getArticleAll);
router.get('/:idArticle', adminController.getArticle);
router.post('/addArticle', adminController.addArticle);
router.post('/editArticle', adminController.editArticle);
router.post('/deleteArticle', adminController.deleteArticle);
\```
> Обратите внимание на `:`

## Создайте таблицу News, в которой разместите заголовок, описание и текст новости. На главной странице опубликуйте список новостей: заголовок (активная ссылка) и описание. При щелчке по заголовку открывается полный просмотр новости, включая текст.