// Section-hero. Слайдер
//Получаем кнопки и контейнер с background-image
const slider = document.getElementsByClassName('slider__button');
const heroContainer = document.getElementsByClassName('section-hero__container');
// Функции для каждой кнопки
slider[0].addEventListener('click', function(){
  if (window.innerWidth > 1024 ) {
    heroContainer[0].style.backgroundImage = 'url("http://127.0.0.1:5500/img/main-img1.jpg")'
  }
  if (window.innerWidth <= 1024 && window.innerWidth > 768) {
    heroContainer[0].style.backgroundImage = 'url("http://127.0.0.1:5500/img/main-img1-1024.jpg")'

  }
});

slider[1].addEventListener('click', function(){
  if (window.innerWidth > 1024) {
    heroContainer[0].style.backgroundImage = 'url("http://127.0.0.1:5500/img/main-img2.jpg")'
  }
  if (window.innerWidth <= 1024 && window.innerWidth > 768) {

  }
});

slider[2].addEventListener('click', function(){
  if (window.innerWidth > 1024) {
    heroContainer[0].style.backgroundImage = 'url("http://127.0.0.1:5500/img/main-img3.jpg")'
  }
  if (window.innerWidth <= 1024 && window.innerWidth > 768) {

  }
});

// Section-our-work. Шаги
// Получаем кнопки , блок с текстом и картинку

const steps = document.getElementsByClassName('section-our-work__button');
const stepName = document.getElementsByClassName('section-our-work__description-heading');
const stepDescription = document.getElementsByClassName('section-our-work__description');
const stepImage = document.getElementsByClassName('section-our-work__right');
// Функции для каждого шага
steps[0].addEventListener('click', function(){
  steps[0].style.color = '#FF9900';
  steps[1].style.color = 'black';
  steps[2].style.color = 'black';
  steps[3].style.color = 'black';
  stepName[0].innerHTML = 'Проводим консультацию';
  stepDescription[0].innerHTML = 'Влечет за собой процесс внедрения и модернизации приоритизации разума над эмоциями. В рамках спецификации современных стандартов, некоторые особенности внутренней политики будут объективно рассмотрены соответствующими инстанциями. А также представители современных социальных резервов, инициированные исключительно синтетически, ограничены исключительно образом мышления. Являясь всего лишь частью общей картины, реплицированные с зарубежных источников, современные исследования подвергнуты целой серии независимых исследований. Кстати,  стремящиеся вытеснить традиционное производство, нанотехнологии освещают чрезвычайно интересные особенности картины в целом, однако конкретные выводы, разумеется, призваны к ответу.';
  if (window.innerWidth > 1024) {
    stepImage[0].style.backgroundImage = 'url("http://127.0.0.1:5500/img/our-work-img1.jpg")';
  }
})
steps[1].addEventListener('click', function(){
  steps[0].style.color = 'black';
  steps[1].style.color = '#FF9900';
  steps[2].style.color = 'black';
  steps[3].style.color = 'black';
  stepName[0].innerHTML = 'Составляем смету';
  stepDescription[0].innerHTML = 'Внедрения и модернизации приоритизации разума над эмоциями. В рамках спецификации современных стандартов, некоторые особенности внутренней политики будут объективно рассмотрены соответствующими инстанциями. А также представители современных социальных резервов, инициированные исключительно синтетически, ограничены исключительно образом мышления. Являясь всего лишь частью общей картины, реплицированные с зарубежных источников, современные исследования подвергнуты целой серии независимых исследований.';
  stepImage[0].style.backgroundImage = 'url("http://127.0.0.1:5500/img/our-work-img2.jpg")';
})
steps[2].addEventListener('click', function(){
  steps[0].style.color = 'black';
  steps[1].style.color = 'black';
  steps[2].style.color = '#FF9900';
  steps[3].style.color = 'black';
  stepName[0].innerHTML = 'Привлекаем подрядчиков';
  stepDescription[0].innerHTML = 'Идейные соображения высшего порядка, а также новая модель организационной деятельности требует анализа прогресса профессионального сообщества. Высокий уровень вовлечения представителей целевой аудитории является четким доказательством простого факта: высококачественный прототип будущего проекта напрямую зависит от дальнейших направлений развития. Разнообразный и богатый опыт говорит нам, что новая модель организационной деятельности говорит о возможностях системы массового участия. Принимая во внимание показатели успешности, постоянное информационно-пропагандистское обеспечение нашей деятельности позволяет выполнить важные задания по разработке прогресса профессионального сообщества.';
  stepImage[0].style.backgroundImage = 'url("http://127.0.0.1:5500/img/our-work-img3.jpg")';
})
steps[3].addEventListener('click', function(){
  steps[0].style.color = 'black';
  steps[1].style.color = 'black';
  steps[2].style.color = 'black';
  steps[3].style.color = '#FF9900';
  stepName[0].innerHTML = 'Инспектируем все этапы работ';
  stepDescription[0].innerHTML = 'Высокий уровень вовлечения представителей целевой аудитории является четким доказательством простого факта: высококачественный прототип будущего проекта напрямую зависит от дальнейших направлений развития. Разнообразный и богатый опыт говорит нам, что новая модель организационной деятельности говорит о возможностях системы массового участия. Принимая во внимание показатели успешности, постоянное информационно-пропагандистское обеспечение нашей деятельности позволяет.';
  stepImage[0].style.backgroundImage = 'url("http://127.0.0.1:5500/img/our-work-img4.jpg")';
})

// Section-often-question. Частые вопросы.
// Получаем элементы списка и создаем 2 параграфа
const questions = document.getElementsByClassName('section-often-questions__item');
const questionDescriptionOne = document.createElement('p');
const questionDescriptionTwo = document.createElement('p');

// Функция для каждого элемента списка вопросов.
questions[0].addEventListener('click', function(){
  if (questions[0].firstElementChild.childElementCount !== 0) {
    while(questions[0].firstElementChild.children[0] !== undefined) {
      questions[0].firstElementChild.children[0].remove();
    }
  } else {
    // Задаем первому элементу текст
    questionDescriptionOne.innerHTML = 'Являясь всего лишь частью общей картины, непосредственные участники технического прогресса призывают нас к новым свершениям, которые, в свою очередь, должны быть своевременно верифицированы. Но высококачественный прототип будущего проекта является качественно новой ступенью первоочередных требований. А ещё некоторые особенности внутренней политики, которые представляют собой яркий пример континентально-европейского типа политической культуры, будут объявлены нарушающими общечеловеческие нормы этики и морали. И нет сомнений, что явные признаки победы институционализации призывают нас к новым свершениям, которые, в свою очередь, должны быть указаны как претенденты на роль ключевых факторов.'
    questionDescriptionOne.style.cssText=`
    margin-top: 30px;
    font-size: 16px;
    line-height: 2;
    `;
    // Добавляем первый элемент
    questions[0].firstElementChild.append(questionDescriptionOne);
    // Задаем второму элементу текст
    questionDescriptionTwo.innerHTML = 'Приятно, граждане, наблюдать, как некоторые особенности внутренней политики могут быть призваны к ответу. Явные признаки победы институционализации набирают популярность среди определенных слоев населения, а значит, должны быть объединены в целые кластеры себе подобных. Банальные, но неопровержимые выводы, а также многие известные личности призывают нас к новым свершениям, которые, в свою очередь, должны быть представлены в исключительно положительном свете.'
    questionDescriptionTwo.style.cssText=`
    margin-top: 30px;
    font-size: 16px;
    line-height: 2;
    `;
    // Добавляем второй элемент
    questions[0].firstElementChild.append(questionDescriptionTwo);
  }
})
questions[1].addEventListener('click', function(){
  if (questions[1].firstElementChild.childElementCount !== 0) {
    while(questions[1].firstElementChild.children[0] !== undefined) {
      questions[1].firstElementChild.children[0].remove();
    }
  } else {
    questionDescriptionOne.innerHTML = 'Являясь всего лишь частью общей картины, непосредственные участники технического прогресса призывают нас к новым свершениям, которые, в свою очередь, должны быть своевременно верифицированы. Но высококачественный прототип будущего проекта является качественно новой ступенью первоочередных требований. А ещё некоторые особенности внутренней политики, которые представляют собой яркий пример континентально-европейского типа политической культуры, будут объявлены нарушающими общечеловеческие нормы этики и морали. И нет сомнений, что явные признаки победы институционализации призывают нас к новым свершениям, которые, в свою очередь, должны быть указаны как претенденты на роль ключевых факторов.'
    questionDescriptionOne.style.cssText=`
    margin-top: 30px;
    font-size: 16px;
    line-height: 2;
    `;
    questions[1].firstElementChild.append(questionDescriptionOne);
    questionDescriptionTwo.innerHTML = 'Приятно, граждане, наблюдать, как некоторые особенности внутренней политики могут быть призваны к ответу. Явные признаки победы институционализации набирают популярность среди определенных слоев населения, а значит, должны быть объединены в целые кластеры себе подобных. Банальные, но неопровержимые выводы, а также многие известные личности призывают нас к новым свершениям, которые, в свою очередь, должны быть представлены в исключительно положительном свете.'
    questionDescriptionTwo.style.cssText=`
    margin-top: 30px;
    font-size: 16px;
    line-height: 2;
    `;
    questions[1].firstElementChild.append(questionDescriptionTwo);
  }
})
questions[2].addEventListener('click', function(){
  if (questions[2].firstElementChild.childElementCount !== 0) {
    while(questions[2].firstElementChild.children[0] !== undefined) {
      questions[2].firstElementChild.children[0].remove();
    }
  } else {
    questionDescriptionOne.innerHTML = 'Являясь всего лишь частью общей картины, непосредственные участники технического прогресса призывают нас к новым свершениям, которые, в свою очередь, должны быть своевременно верифицированы. Но высококачественный прототип будущего проекта является качественно новой ступенью первоочередных требований. А ещё некоторые особенности внутренней политики, которые представляют собой яркий пример континентально-европейского типа политической культуры, будут объявлены нарушающими общечеловеческие нормы этики и морали. И нет сомнений, что явные признаки победы институционализации призывают нас к новым свершениям, которые, в свою очередь, должны быть указаны как претенденты на роль ключевых факторов.'
    questionDescriptionOne.style.cssText=`
    margin-top: 30px;
    font-size: 16px;
    line-height: 2;
    `;
    questions[2].firstElementChild.append(questionDescriptionOne);
    questionDescriptionTwo.innerHTML = 'Приятно, граждане, наблюдать, как некоторые особенности внутренней политики могут быть призваны к ответу. Явные признаки победы институционализации набирают популярность среди определенных слоев населения, а значит, должны быть объединены в целые кластеры себе подобных. Банальные, но неопровержимые выводы, а также многие известные личности призывают нас к новым свершениям, которые, в свою очередь, должны быть представлены в исключительно положительном свете.'
    questionDescriptionTwo.style.cssText=`
    margin-top: 30px;
    font-size: 16px;
    line-height: 2;
    `;
    questions[2].firstElementChild.append(questionDescriptionTwo);
  }
})
questions[3].addEventListener('click', function(){
  if (questions[3].firstElementChild.childElementCount !== 0) {
    while(questions[3].firstElementChild.children[0] !== undefined) {
      questions[3].firstElementChild.children[0].remove();
    }
  } else {
    questionDescriptionOne.innerHTML = 'Являясь всего лишь частью общей картины, непосредственные участники технического прогресса призывают нас к новым свершениям, которые, в свою очередь, должны быть своевременно верифицированы. Но высококачественный прототип будущего проекта является качественно новой ступенью первоочередных требований. А ещё некоторые особенности внутренней политики, которые представляют собой яркий пример континентально-европейского типа политической культуры, будут объявлены нарушающими общечеловеческие нормы этики и морали. И нет сомнений, что явные признаки победы институционализации призывают нас к новым свершениям, которые, в свою очередь, должны быть указаны как претенденты на роль ключевых факторов.'
    questionDescriptionOne.style.cssText=`
    margin-top: 30px;
    font-size: 16px;
    line-height: 2;
    `;
    questions[3].firstElementChild.append(questionDescriptionOne);
    questionDescriptionTwo.innerHTML = 'Приятно, граждане, наблюдать, как некоторые особенности внутренней политики могут быть призваны к ответу. Явные признаки победы институционализации набирают популярность среди определенных слоев населения, а значит, должны быть объединены в целые кластеры себе подобных. Банальные, но неопровержимые выводы, а также многие известные личности призывают нас к новым свершениям, которые, в свою очередь, должны быть представлены в исключительно положительном свете.'
    questionDescriptionTwo.style.cssText=`
    margin-top: 30px;
    font-size: 16px;
    line-height: 2;
    `;
    questions[3].firstElementChild.append(questionDescriptionTwo);
  }
})
questions[4].addEventListener('click', function(){
  if (questions[4].firstElementChild.childElementCount !== 0) {
    while(questions[4].firstElementChild.children[0] !== undefined) {
      questions[4].firstElementChild.children[0].remove();
    }
  } else {
    questionDescriptionOne.innerHTML = 'Являясь всего лишь частью общей картины, непосредственные участники технического прогресса призывают нас к новым свершениям, которые, в свою очередь, должны быть своевременно верифицированы. Но высококачественный прототип будущего проекта является качественно новой ступенью первоочередных требований. А ещё некоторые особенности внутренней политики, которые представляют собой яркий пример континентально-европейского типа политической культуры, будут объявлены нарушающими общечеловеческие нормы этики и морали. И нет сомнений, что явные признаки победы институционализации призывают нас к новым свершениям, которые, в свою очередь, должны быть указаны как претенденты на роль ключевых факторов.'
    questionDescriptionOne.style.cssText=`
    margin-top: 30px;
    font-size: 16px;
    line-height: 2;
    `;
    questions[4].firstElementChild.append(questionDescriptionOne);
    questionDescriptionTwo.innerHTML = 'Приятно, граждане, наблюдать, как некоторые особенности внутренней политики могут быть призваны к ответу. Явные признаки победы институционализации набирают популярность среди определенных слоев населения, а значит, должны быть объединены в целые кластеры себе подобных. Банальные, но неопровержимые выводы, а также многие известные личности призывают нас к новым свершениям, которые, в свою очередь, должны быть представлены в исключительно положительном свете.'
    questionDescriptionTwo.style.cssText=`
    margin-top: 30px;
    font-size: 16px;
    line-height: 2;
    `;
    questions[4].firstElementChild.append(questionDescriptionTwo);
  }
})
