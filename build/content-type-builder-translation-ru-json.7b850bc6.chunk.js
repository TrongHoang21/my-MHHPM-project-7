(self["webpackChunkmy_mhhpm_project_7"] = self["webpackChunkmy_mhhpm_project_7"] || []).push([[7186],{

/***/ 48961:
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('{"attribute.boolean":"Boolean","attribute.boolean.description":"Да или нет, 1 или 0, Истина или Ложь","attribute.component":"Компонент","attribute.component.description":"Компонент - группа полей, доступных для повторения или повторного использования","attribute.date":"Date","attribute.date.description":"Элемент управления датой и временем","attribute.datetime":"Datetime","attribute.dynamiczone":"Dynamic zone","attribute.dynamiczone.description":"Компоненты с динамическим редактированием","attribute.email":"Email","attribute.email.description":"Поле электронной почты с проверкой формата","attribute.enumeration":"Enumeration","attribute.enumeration.description":"Перечень значений, выбирается одно","attribute.json":"JSON","attribute.json.description":"Данные в формате JSON","attribute.media":"Media","attribute.media.description":"Аудио- видео- и прочие медиафайлы","attribute.null":" ","attribute.number":"Number","attribute.number.description":"Числа (integer, float, decimal)","attribute.password":"Password","attribute.password.description":"Поле пароля с шифрованием","attribute.relation":"Relation","attribute.relation.description":"Ссылка на какой-либо тип контента","attribute.richtext":"Rich text","attribute.richtext.description":"Элемент управления для редактирования текста с форматированием","attribute.text":"Text","attribute.text.description":"Маленький или длинный текст, например заголовок или описание","attribute.time":"Time","attribute.timestamp":"Timestamp","attribute.uid":"UID","attribute.uid.description":"Уникальный идентификатор","button.attributes.add.another":"Ещё поле","button.component.add":"Добавить компонент","button.component.create":"Создать компонент","button.model.create":"Создать новый тип контента","button.single-types.create":"Создать новый единичный тип","component.repeatable":"(повторяется)","components.componentSelect.no-component-available":"Вы уже добавили все имеющиеся группы полей","components.componentSelect.no-component-available.with-search":"Подходящих групп полей не найдено","components.componentSelect.value-component":"Выбрано компонентов - {number} (наберите для поиска)","components.componentSelect.value-components":"Компонентов выбрано - {number}","configurations":"конфигурации","contentType.collectionName.description":"Полезно, когда имя вашего типа контента и имя вашей таблицы различаются","contentType.collectionName.label":"Название коллекции","contentType.displayName.label":"Отображаемое имя","contentType.draftAndPublish.description":"Напишите черновую версию каждой записи перед публикацией","contentType.draftAndPublish.label":"Система черновиков/публикаций","contentType.kind.change.warning":"Вы только что изменили тип типа контента: API будет сброшен (маршруты, контроллеры и сервисы будут перезаписаны).","error.attributeName.reserved-name":"Это имя нельзя использовать в вашем типе контента, так как это может нарушить другие функции.","error.contentTypeName.reserved-name":"Это название зарезервировано и не может быть использовано в проекте","error.validation.enum-duplicate":"Повторяющиеся значения не допускаются","error.validation.enum-empty-string":"Не может быть пустой строкой","error.validation.minSupMax":"Не может выходить за ограничения","error.validation.regex":"Шаблон регулярного выражения недействителен","error.validation.relation.targetAttribute-taken":"Это имя существует в целевом объекте","form.attribute.component.option.add":"Добавление компонента","form.attribute.component.option.create":"Создание нового компонента","form.attribute.component.option.create.description":"Компонент предоставляется в разных типах и группах и будет доступен отовсюду","form.attribute.component.option.repeatable":"Повторяющийся компонент","form.attribute.component.option.repeatable.description":"Применимо для множественных вхождений (массивов) ингредиентов, мета-тегов и т.д.","form.attribute.component.option.reuse-existing":"Использовать существующий компонент","form.attribute.component.option.reuse-existing.description":"Использовать повторно созданный ранее компонент, чтобы обеспечить согласованность данных в разных типах контента.","form.attribute.component.option.single":"Одиночный компонент","form.attribute.component.option.single.description":"Применимо для группировки полей, таких как полный адрес, основная информация и т.д.","form.attribute.item.customColumnName":"Названия столбцов","form.attribute.item.customColumnName.description":"Может быть полезно переименовать названия столбцов для более читаемых ответов API.","form.attribute.item.date.type.date":"дата","form.attribute.item.date.type.datetime":"дата/время","form.attribute.item.date.type.time":"время","form.attribute.item.defineRelation.fieldName":"Название поля","form.attribute.item.enumeration.graphql":"Название поля в GraphQL","form.attribute.item.enumeration.graphql.description":"Позволяет переопределить название поля в GraphQL, сгенерированное по умолчанию","form.attribute.item.enumeration.placeholder":"Например:\\nутро\\nполдень\\nвечер","form.attribute.item.enumeration.rules":"Значения (одна линия на значение)","form.attribute.item.maximum":"Максимальное значение","form.attribute.item.maximumLength":"Максимальная длина","form.attribute.item.minimum":"Минимальное значение","form.attribute.item.minimumLength":"Минимальная длина","form.attribute.item.number.type":"Числовой формат","form.attribute.item.number.type.biginteger":"Большое целое (ex: 123456789)","form.attribute.item.number.type.decimal":"Десятичное (ex: 2.22)","form.attribute.item.number.type.float":"С плавающей точкой (ex: 3.33333333)","form.attribute.item.number.type.integer":"Целое (ex: 10)","form.attribute.item.privateField":"Закрытое поле","form.attribute.item.privateField.description":"Это поле не будет отображаться в ответе API","form.attribute.item.requiredField":"Обязательное поле","form.attribute.item.requiredField.description":"Вы не сможете создать запись, если это поле не заполнено","form.attribute.item.settings.name":"Настройки","form.attribute.item.text.regex":"Шаблон регулярного выражения","form.attribute.item.text.regex.description":"Текст регулярного выражения","form.attribute.item.uniqueField":"Уникальное поле","form.attribute.item.uniqueField.description":"Вы не сможете создать запись, если уже существует запись с таким значением","form.attribute.media.allowed-types":"Выберите разрешенные типы медиа","form.attribute.media.allowed-types.none":"Никто","form.attribute.media.allowed-types.option-files":"Файлы","form.attribute.media.allowed-types.option-images":"Изображения","form.attribute.media.allowed-types.option-videos":"Видео","form.attribute.media.option.multiple":"Множественные медиа","form.attribute.media.option.multiple.description":"Применимо для слайдеров и каруселей","form.attribute.media.option.single":"Одиночное медиа","form.attribute.media.option.single.description":"Применимо для аватаров, картинок профиля и пр.","form.attribute.settings.default":"Стандартное значение","form.attribute.text.option.long-text":"Большой текст","form.attribute.text.option.long-text.description":"Применимо для описания, биографии... (не учествует в поиске)","form.attribute.text.option.short-text":"Короткий текст","form.attribute.text.option.short-text.description":"Применимо для названий, заголовков, ссылок... (участвует в поиске)","form.button.add-components-to-dynamiczone":"Добавить компоненты в зону","form.button.add-field":"Еще поле","form.button.add-first-field-to-created-component":"Добавить первое поле в компонент","form.button.add.field.to.collectionType":"Добавить поле в коллекцию","form.button.add.field.to.component":"Добавить поле в компонент","form.button.add.field.to.contentType":"Добавить поле в тип контента","form.button.add.field.to.singleType":"Добавить поле в тип","form.button.cancel":"Отменить","form.button.collection-type.description":"Лучше всего подходит для нескольких экземпляров, таких как статьи, товары, комментарии и т.д.","form.button.configure-component":"настроить компонент","form.button.configure-view":"Настроить отображение","form.button.continue":"Продолжить","form.button.delete":"Удалить","form.button.finish":"Завершить","form.button.save":"Сохранить","form.button.select-component":"Выбрать компонент","form.button.single-type.description":"Лучше всего подходит для одного экземпляра, например, о нас, домашняя страница и т.д.","form.contentType.divider.draft-publish":"ЧЕРНОВИК/ПУБЛИКАЦИЯ","from":"из","menu.section.components.name.plural":"Компоненты","menu.section.components.name.singular":"Компонент","menu.section.models.name.plural":"Типы коллекций","menu.section.models.name.singular":"Тип коллекции","menu.section.single-types.name.plural":"Одиночные типы","menu.section.single-types.name.singular":"Одиночный тип","modalForm.attribute.form.base.name":"Имя","modalForm.attribute.form.base.name.description":"Пробелы в имени атрибута недопустимы","modalForm.attribute.form.base.name.placeholder":"e.g. Slug, SEO URL, Canonical URL","modalForm.attribute.target-field":"Добавленные поля","modalForm.attribute.text.type-selection":"Тип","modalForm.attributes.select-component":"Выбор компонента","modalForm.attributes.select-components":"Выбор компонентов","modalForm.component.header-create":"Создание компонента","modalForm.components.create-component.category.label":"Выберите категорию или введите имя новой","modalForm.components.icon.label":"Иконка","modalForm.editCategory.base.name.description":"Пробелы в имени категории недопустимы","modalForm.header-edit":"Редактирование {name}","modalForm.header.categories":"Категории","modalForm.singleType.header-create":"Создание одиночного типа","modalForm.sub-header.addComponentToDynamicZone":"Добавить компонент в динамическую зону","modalForm.sub-header.attribute.create":"Добавить новое поле типа {type}","modalForm.sub-header.attribute.create.step":"Добавить новый компонент ({step}/2)","modalForm.sub-header.attribute.edit":"Изменение {name}","modalForm.sub-header.chooseAttribute.collectionType":"Выбрать имя поля типа контента","modalForm.sub-header.chooseAttribute.component":"Выбрать имя поля компонента","modalForm.sub-header.chooseAttribute.singleType":"Выберите поле для вашего отдельного типа","modelPage.attribute.relation-polymorphic":"Связь (полиморфная)","modelPage.attribute.relationWith":"Связь с","none":"Никто","notification.info.autoreaload-disable":"Для использования этого плагина требуется функция автоматической загрузки. Запустите свой сервер с помощью `strapi develop`","notification.info.creating.notSaved":"Пожалуйста, сохраните изменения перед созданием нового компонента типа контента ","plugin.description.long":"Моделируйте структуру данных вашего API. Создавайте новые поля и связи всего за минуту. Файлы в вашем проекте создаются и обновляются автоматически.","plugin.description.short":"Моделируйте структуру данных вашего API.","popUpForm.navContainer.advanced":"Расширенные настройки","popUpForm.navContainer.base":"Базовые настройки","popUpWarning.bodyMessage.cancel-modifications":"Вы уверены, что хотите отменить изменения?","popUpWarning.bodyMessage.cancel-modifications.with-components":"Вы уверены, что хотите отменить сделанные изменения? Некоторые компоненты были созданы или изменены...","popUpWarning.bodyMessage.category.delete":"Вы уверены, что хотите удалить категорию? Все входящие в нее компоненты будут также удалены.","popUpWarning.bodyMessage.component.delete":"Вы уверены, что хотите удалить этот компонент?","popUpWarning.bodyMessage.contentType.delete":"Вы уверены, что хотите удалить этот тип контента?","popUpWarning.draft-publish.button.confirm":"Да, отключить","popUpWarning.draft-publish.message":"Если вы отключите систему черновиков/публикаций, ваши черновики будут удалены.","popUpWarning.draft-publish.second-message":"Вы уверены, что хотите отключить его?","prompt.unsaved":"Вы уверены, что хотите выйти? Все изменения будут потеряны.","relation.attributeName.placeholder":"Пример: автор, категория, тег","relation.manyToMany":"имеет и принадлежит многим","relation.manyToOne":"имеет много","relation.manyWay":"имеет много","relation.oneToMany":"принадлежит многим","relation.oneToOne":"имеет один и принадлежит одному","relation.oneWay":"имеет один","table.attributes.title.plural":"Полей - {number}","table.attributes.title.singular":"Поле - {number}"}');

/***/ })

}]);