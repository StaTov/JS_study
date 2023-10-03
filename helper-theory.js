// 'use strict'


///////////////////////////////////////////////----------DOM----------////////////////////////////////////////////////////

const element = document.createElement('div')

//НАВИГАЦИЯ

//  живые коллекции
document.getElementById('id') // получить елемент по id или null
document.getElementsByName('name')  // получить дочерние элементы по имени в ввиде перебираемого псевдо массива или пустую коллекцию
document.getElementsByTagName('div')  // получить дочерние элементы по имени тега в ввиде перебираемого псевдо массива или пустую коллекцию
document.getElementsByClassName('.className') // получить дочерние элементы по имени класса в ввиде перебираемого псевдо массива или пустую коллекцию
// не живые коллекции
document.querySelector('css_selector') // получить элемент по селектору или null
document.querySelectorAll('css_selector') // получить коллекцию элементов во селектору или пустую коллекцию


//СОЗДАНИЕ ЕЛЕМЕНТА
var elem = document.createElement('div') // создает елемент
var elem = document.createTextNode('text')  // создает текстовый узел
var elem = document.createComment('text')  // создает узел-комментарий

//ВСТАВКА узлов В document
elem.append('string', node)     // вставляет элемент/текст после дочерних элементов
elem.prepend('string', node)   // вставляет элемент/текст перед дочерними элементами
elem.before('string', node)   // вставляет элемент/текст перед elem
elem.after('string', node)   // вставляет элемент/текст после elem
elem.replaceWith('string', node)  // удаляет elem и вставляет вместо него

//ВСТАВКА фрагментов HTML
elem.innerHTML = 'string'   // вставить содержимое
elem.textContent = 'string' // вставить текстовый контент
elem.insertAdjacentHTML('position', 'text') // вставляет содержимое по position

/*
beforbegin
afterbegin
beforend
afterend
*/

//Клонирование узлов 
elem.cloneNode(true) // клонирует узел; true - глубокий клон

//УДАЛЕНИЕ узлов
elem.remove() // удалить текущий узел

//РАБОТА С АТТРИБУТАМИ
element.hasAttribute() // проверить есть ли аттрибут
element.getAttribute() // получить значение аттрибута
element.setAttribute() // назначить аттрибут
element.removeAttribute() //удалить атрибут

element.attributes  // список аттрибутов

//РАБОТА С КЛАССМИ
element.classList.add('class') // назначить класс элементу
element.classList.remove('class') //удалить класс у элемента
element.classList.toggle('class') // если нет класса - назначить, если есть - удалить
element.classList.contains('class') // true если элемент обладает классом

//РАБОТА СО СТИЛЯМИ
elem.style.fontSize = '24px' // установит стиль
elem.style.fontSize = null  // удалить стиль
elem.style.cssText = 'prop1: value; prop2: value2' // установить сразу много сss для элемента (перезаписывает старые)
elem.setAttribute('style', 'prop1: value1; prop2: value2...')  // установить сразу много сss для элемента

window.getComputedStyle(elem, 'pseudoString') // плучить объект со стилями ключ: значение

//ПОЛЕЗНЫЕ МЕТОДЫ
elem.matches('css_celetor') // true, если элемент соотвтетсвует селектору
elem.closest('css_selector') // возвращает элемент или родителя у которого есть селектор или null
elem.contains(elem1) // true если elem1 дочерний для elem

/////////////////////////////////////////////////////---------MAP // SET -----------////////////////////////////////////////////////////////////

//map - так же как и  объект хранит данные в паре ключ значение/ отличие - ключи могут быть чем угодно, даже объектами!

//Методы

let map = new Map()                    // создать коллекцию
map.set(key, value)                   // добавить по ключу значение
map.get(key)                         // значение по ключу или undefined
map.has(key)                        // true/false - есть ли ключ
map.delete(key)                    // удалить по ключу
map.clear()                       // очистить коллекцию
map.size()                       // кол-во елементов

// перебор

map.keys()            // итерируемый объект по ключам
map.values()         // итерируемый объект по значениям
map.entries()       // итерируемый объект ключ/значение  - поумолчанию в цикле for of
map.forEach((value, key, map) => console.log(value))      // метод перебора

// инициализация map
let map1 = new Map([['1', 'hello'], ['age', 46]]) // передать массив пар ключ/значение
let map2 = new Map(Object.entries(obj))          // из обычного объекта

// set - множество значений, где каждое значение может появиться один раз

let set = new Set()  // в качестве аргумента итерируемый объект - массив
set.add(value)      // добавляет значение и возвращает set, если значение повторное, то ничего не добавлет
set.delete(value)       // удаляет и возвращает true иначе false
set.has(value)         // true/false если значение есть
set.clear()           // очистить коллекцию
set.size()           // колличество элементов

//перебор

set.keys()           // массив значений
set.values()        // массив значений для обратной совместимости
set.entries()      // [[value, value]] для обратной совместимости
set.forEach((value, value1, set) => console.log(value))

//// ---- WeakMap 
// 1. ключи должны быть объектами, а не примитивами
// 2. ключи удляются из WeakMap, если на ключ нет ссылки в коде
// 3. не поддерживаются методы перебора
// 4. Доступные методы get, set, delete, has

//// ---- WeakSet
// 1. Значения - объекты
// 2. Значения удаляются, если нет на них другой ссылки
// 3. не поддерживаются методы перебора
// 4. Доступные методы get, add, has, delete


////////////////////////////////////////////////---- ServerSentEvents----/////////////////////////////////////////////

// Способ установить соедениене с сервером и получать события
// Особенности: 
//  1. Сообщения однонаправленые, т е отправляет только сервер.
//  2. только текст
//  3. Использеуся HTTP протокол

let source = new EventSource(url, [credentials]); // credentials - объект с единственным свойством withCredentials: true

source.CONNECTING = 0; // подключение или переподключение
source.OPEN = 1;       // подключено
source.CLOSED = 2;     // подключение закрыто

source.close()             // закрыть соединение



/////////////////////////======-------GIT-------========///////////////////////

//git add -p  <file name>                    //предлагает варианты добавления измененных строк кода в индекс
//git commit -a или --all                   //добавляет изменения раннее отслеживаемых файлов в репозиторий  
//git commit <path>                        //добавялет коммит без add
//git rm -r <directory>                   //удаляет дерикторию из рабочего каталога и вносит изменения в индекс (rm -r src  + git add src)
//git rm -r --cached <directory>         //удаляет дерикторию только из staged и она становится Untracked files
//git mv <old> <new>                    // переименовывает файл и добавляет его в индекс

//работа с ветками

//git branch                                //показать ветку
//git branch -v                            //информация о ветке
//git checkout -f <branch_name>           //при незакоммиченых изменениях перезатрет их
//git checkout -f HEAD                   // затереть все незакоммиченные эксперименты)
//git branch -f master <id_commit>      // передвинуть ветку master на указанный коммит или создать ветку(не работает, если HEAD на этой ветке)
//git checkout -B master <id_commit>   // тоже самое (работает, если HEAD на этой ветке, не привередливый)
//git checkout <id_commit> file_name ... // восстанавливает предыдущую версию файла
//git reflog <name_branch>              // выведет лог для ветки или для HEAD
//git checkout -                    // вернуться на предыдущую ветку
//git clean -dxf                   // удалить все неотслеживаемые файлы и дериктории, включая гит игнор. 
//git reset --hard + git clean -dxf  // удалить отслеживаемые и неотслеживаемые файлы 