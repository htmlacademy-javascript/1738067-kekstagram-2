const PICTURE_TEMPLATE = document.querySelector('#picture').content.querySelector('.picture'); // находим шаблон и сразу берём из него нужный блок <a>
const SIMILAR_LIST_FRAGMENTS = document.createDocumentFragment(); // контейнер пустышка
const PICTURES = document.querySelector('.pictures'); // блок, куда мы выгружаем контент

// функция по отрисовке загруженных фото
const displayPictures = function (objects) {

  let idCount = 0;
  // прогоняем по каждому элементу массива следующий код
  objects.forEach(({url, description, likes, comments}) => {
    const clonedTemplate = PICTURE_TEMPLATE.cloneNode(true); // копируем шаблон, чтобы добавлять в него элементы

    // находим нужные нам элементы для изменений
    const pictureLikes = clonedTemplate.querySelector('.picture__likes');
    const pictureComments = clonedTemplate.querySelector('.picture__comments');
    const pictureImage = clonedTemplate.querySelector('.picture__img');
    const commentsCount = comments.length; // тут из массива объектов.находимКомментарии.считаемДлиннуМассиваКомментариев

    // в клонированный шаблон выгружаем информацию из N элемента массива
    // берём src, alt — для картинок, textContent — для заполнения комментариями и отрисовки количества лайков
    clonedTemplate.id = idCount;
    pictureImage.src = url;
    pictureImage.alt = description;
    pictureComments.textContent = commentsCount;
    pictureLikes.textContent = likes;

    // добавляем всё в пустышку
    SIMILAR_LIST_FRAGMENTS.appendChild(clonedTemplate);
    ++idCount;
    // пустыку отправляем в отрисовку блоков
    PICTURES.appendChild(SIMILAR_LIST_FRAGMENTS);


  });

};


export {displayPictures};
