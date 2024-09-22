
const pictures = document.querySelector('.pictures');
const pictureTemplate = document.querySelector('#picture').content.querySelector('.picture'); // находим шаблон и сразу берём из него нужный блок <a>
const similarListFragments = document.createDocumentFragment(); // контейнер пустышка
const filters = document.querySelector('.img-filters');

// функция по отрисовке загруженных фото
function displayPictures(objects) {
  // прогоняем по каждому элементу массива следующий код
  objects.forEach(({id, url, description, likes, comments}) => {
    const clonedTemplate = pictureTemplate.cloneNode(true); // копируем шаблон, чтобы добавлять в него элементы

    // находим нужные нам элементы для изменений
    const pictureLikes = clonedTemplate.querySelector('.picture__likes');
    const pictureComments = clonedTemplate.querySelector('.picture__comments');
    const pictureImage = clonedTemplate.querySelector('.picture__img');
    const commentsCount = comments.length; // тут из массива объектов.находимКомментарии.считаемДлиннуМассиваКомментариев

    // в клонированный шаблон выгружаем информацию из N элемента массива
    // берём src, alt — для картинок, textContent — для заполнения комментариями и отрисовки количества лайков
    clonedTemplate.id = id;
    pictureImage.src = url;
    pictureImage.alt = description;
    pictureComments.textContent = commentsCount;
    pictureLikes.textContent = likes;

    // добавляем всё в пустышку
    similarListFragments.appendChild(clonedTemplate);

    // пустыку отправляем в отрисовку блоков
    pictures.appendChild(similarListFragments);


  });

  filters.classList.remove('img-filters--inactive');
}

export {displayPictures};
