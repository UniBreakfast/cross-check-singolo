export const criteria = [
  {
    type: "title",
    title: "Общие требования"
  },
  {
    id: 0,
    status: "main",
    text: "Pепозиторий singolo <strong>не существует</strong>, или <strong>в нем не присутствуют</strong> index.html и style.css файлы",
    mod: -100
  },
  {
    id: 1,
    text: "В коммитах, или в ветках с коммитами, файлы singolo1.html и singolo1.сss <strong>отсутствуют до 24.02.2020</strong>",
    mod: -10
  },
  {
    id: 2,
    text: "В коммитах, или в ветках с коммитами, файлы singolo2.html и singolo2.сss <strong>отсутствуют до 02.03.2020</strong>",
    mod: -10
  },
  {
    id: 3,
    text: "В коммитах, или в ветках с коммитами, файлы singolo3.html и singolo3.сss или index.html и style.css <strong>отсутствуют до 09.03.2020</strong>",
    mod: -10
  },
  {
    id: 4,
    text: "В Firefox есть <strong>сильное отклонение</strong> (<strong>т.е. бросается в глаза</strong>) от той же страницы, открытой в Google Chrome",
    mod: -5
  },
  {
    id: 5,
    text: 'Изображения, шрифты <u>свалены в одну кучу в корне репозитория</u>, а не помещены в отдельную папку (например "assets")',
    mod: -5
  },
  {
    id: 6,
    text: 'На странице отсутствует семейство шрифтов Lato. <strong>Шрифты не подключены в html</strong> путем добавления ссылки на cdn с ними <strong>либо не хранятся в папке assets</strong>',
    i: "Важно, чтобы при проверке шрифт действительно соотвествовал своему семейству. Это можно проверить в инструментах разработчика или в стилях, посмотрев свойство font-family или font",
    mod: -5
  },
  {
    type: "title",
    title: "Макет (технические требования)"
  },
  {
    id: 7,
    text: 'Несоотвествие снимку макета, наложенному на страницу. Визуальные отличия элементов <strong>Header</strong> составляют более двух пикселей (2px)',
    mod: -3,
    i: "Если нарушение UI происходит в одном блоке, и съезжают со своего места все остальные, то при переходе проверки на следующий блок, мы его выравниваем с наложенным изображением. ! Исключение составляет сам текст, а именно ширина слов и отступ между буквами. Их не учитываем при сопоставлении"
  },
  {
    id: 8,
    text: 'Несоотвествие снимку макета, наложенному на страницу. Визуальные отличия элементов секции <strong>Slider</strong> составляют более двух пикселей (2px)',
    mod: -3,
    i: "Если нарушение UI происходит в одном блоке, и съезжают со своего места все остальные, то при переходе проверки на следующий блок, мы его выравниваем с наложенным изображением. ! Исключение составляет сам текст, а именно ширина слов и отступ между буквами. Их не учитываем при сопоставлении"
  },
  {
    id: 9,
    text: 'Несоотвествие снимку макета, наложенному на страницу. Визуальные отличия элементов секции <strong>Services</strong> составляют более двух пикселей (2px)',
    mod: -3,
    i: "Если нарушение UI происходит в одном блоке, и съезжают со своего места все остальные, то при переходе проверки на следующий блок, мы его выравниваем с наложенным изображением. ! Исключение составляет сам текст, а именно ширина слов и отступ между буквами. Их не учитываем при сопоставлении"
  },
  {
    id: 10,
    text: 'Несоотвествие снимку макета, наложенному на страницу. Визуальные отличия элементов секции <strong>Portfolio</strong> составляют более двух пикселей (2px)',
    mod: -3,
    i: "Если нарушение UI происходит в одном блоке, и съезжают со своего места все остальные, то при переходе проверки на следующий блок, мы его выравниваем с наложенным изображением. ! Исключение составляет сам текст, а именно ширина слов и отступ между буквами. Их не учитываем при сопоставлении"
  },
  {
    id: 11,
    text: 'Несоотвествие снимку макета, наложенному на страницу. Визуальные отличия элементов секции <strong>About</strong> составляют более двух пикселей (2px)',
    mod: -3,
    i: "Если нарушение UI происходит в одном блоке, и съезжают со своего места все остальные, то при переходе проверки на следующий блок, мы его выравниваем с наложенным изображением. ! Исключение составляет сам текст, а именно ширина слов и отступ между буквами. Их не учитываем при сопоставлении"
  },
  {
    id: 12,
    text: 'Несоотвествие снимку макета, наложенному на страницу. Визуальные отличия элементов секции <strong>Form</strong> составляют более двух пикселей (2px)',
    mod: -3,
    i: "Если нарушение UI происходит в одном блоке, и съезжают со своего места все остальные, то при переходе проверки на следующий блок, мы его выравниваем с наложенным изображением. ! Исключение составляет сам текст, а именно ширина слов и отступ между буквами. Их не учитываем при сопоставлении"
  },
  {
    id: 13,
    text: 'Несоотвествие снимку макета, наложенному на страницу. Визуальные отличия элементов <strong>Footer</strong> составляют более двух пикселей (2px)',
    mod: -3,
    i: "Если нарушение UI происходит в одном блоке, и съезжают со своего места все остальные, то при переходе проверки на следующий блок, мы его выравниваем с наложенным изображением. ! Исключение составляет сам текст, а именно ширина слов и отступ между буквами. Их не учитываем при сопоставлении"
  },
  {
    id: 14,
    text: 'Текст <u>в местах, где находится несколько строк</u>, <strong>должен быть растянут равномерно на ширину блока</strong>. Отсутствует свойство text-align: justify в секции <strong>Services</strong>',
    mod: -3,
    i: "Исключение составляет сам текст, а именно ширина слов и отступ между буквами. Их не учитываем при сопоставлении"
  },
  {
    id: 15,
    text: 'Текст <u>в местах, где находится несколько строк</u>, <strong>должен быть растянут равномерно на ширину блока</strong>. Отсутствует свойство text-align: justify в секции <strong>About</strong>',
    mod: -3,
    i: "Исключение составляет сам текст, а именно ширина слов и отступ между буквами. Их не учитываем при сопоставлении"
  },
  {
    id: 16,
    text: 'Текст <u>в местах, где находится несколько строк</u>, <strong>должен быть растянут равномерно на ширину блока</strong>. Отсутствует свойство text-align: justify в секции <strong>Get a Quote</strong>',
    mod: -3,
    i: "Исключение составляет сам текст, а именно ширина слов и отступ между буквами. Их не учитываем при сопоставлении"
  },
  {
    id: 17,
    text: 'Внизу <u>как минимум одной из секций</u> (<strong>кроме Footer</strong>) отсутствует небольшая линия другого цвета',
    mod: -3
  },
  {
    id: 18,
    text: 'Панель навигации без интерактивных стилей, при наведении на элементы меню ничего не происходит',
    mod: -3
  },
  {
    id: 19,
    text: 'Логотип лежит в простом элементе "< div >" вместо двух элементов, одного с ::after или картинки',
    mod: -3
  },
  {
    id: 20,
    text: 'На странице отсутствует элемент "< h1 >", либо на нём есть свойство display: none',
    mod: -3
  },
  {
    id: 21,
    text: 'Стрелки слайдера без интерактивных стилей, при наведении на стрелки ничего не происходит',
    mod: -3
  },
  {
    id: 22,
    text: 'Изображения, части изображений с телефонами или моделирующие их блоки находятся не на своем месте',
    mod: -3
  },
  {
    id: 23,
    text: 'Изображения, части изображений с телефонами или моделирующие их блоки расположены слоями с нарушением порядка z-index',
    mod: -3
  },
  {
    id: 24,
    text: 'Трёхколоночный макет в секции <strong>Services</strong> снизу реализован без display: flex либо grid',
    mod: -3
  },
  {
    id: 25,
    text: 'В секции <strong>Services</strong> при добавлении избыточного текста в текстовую ячейку (<u>ниже подзаголовков</u>) текст, выходящий за размеры по макету, не скрыт',
    mod: -3
  },
  {
    id: 26,
    text: 'Отсутствуют интерактивные стили кнопок навигации в <strong>Portfolio</strong>. При наведении на кнопки All, Artwork и т.д. ничего не происходит',
    mod: -3
  },
  {
    id: 27,
    text: 'Четырёхколоночный макет с изображениями <u>должен иметь строгие отступы между элементами</u>. Сетка не соотвествует наложенному изображнию, имеет неверные размеры или отступы',
    mod: -3,
    i: "Важно, чтобы сетка полностью соотвествовала наложенному изображнию."
  },
  {
    id: 28,
    text: 'Четырёхколоночный макет с изображениями реализован посредством "< table >"',
    mod: -3
  },
  {
    id: 29,
    text: 'При добавлении в сетку с изображениями элементов за 12-м (проверяя, добавляем их сами) следющие за 12-м отображаются на странице - не реализовано ограничение видимых двенадцатью показанными в макете',
    mod: -3
  },
  {
    id: 31,
    text: 'При увеличении длины значения <u>элемента с именем</u> в секции <strong>About</strong> (сами дописываем очень длинный текст) текст видимым образом выходит за пределы строки блока или переносится на следующую строку',
    mod: -3
  },
  {
    id: 31,
    text: 'Трёхколоночный макет в секции <strong>About</strong> снизу реализован без display: flex либо grid',
    mod: -3
  },
  {
    id: 32,
    text: 'Социальные иконки в секции <strong>About</strong> без интерактивных стилей, при наведении на логотипы соц.сетей ничего не происходит',
    mod: -3
  },
  {
    id: 33,
    text: 'В секции <strong>Get a Quote</strong> отсутствует тэг "< form >"',
    mod: -3
  },
  {
    id: 34,
    text: 'Внутри тэга "< form >" отсутствует кнопка <strong>Submit</strong>, или она реализована не с помощью "< button >" или "< input >"',
    mod: -3
  },
  {
    id: 35,
    text: 'Не выполняется валидация обоих полей ввода с отметкой Required в макете, или указан неправильный тип "< input >", или отсутствуют необходимые атрибуты, или при пропуске/вводе невалидных значений форма отправляется без ожидаемых замечаний',
    mod: -3
  },
  {
    id: 36,
    text: 'Номер телефона в блоке <strong>Contacts</strong> не реализован ссылкой, работающей с префиксом tel:',
    mod: -3
  },
  {
    id: 37,
    text: 'Электронная почта в блоке <strong>Contacts</strong> не реализована ссылкой, работающей с префиксом mailto:',
    mod: -3
  },
  {
    id: 38,
    text: 'Символ "копирайт" в Footer-e (©) не реализован как текстовый и/или не выделяется и не не копируется',
    mod: -3
  },
  {
    id: 39,
    text: 'Социальные иконки в Footer-e без интерактивных стилей, при наведении на логотипы соц.сетей ничего не происходит',
    mod: -3
  },
]
