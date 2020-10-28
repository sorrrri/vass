let vh = window.innerHeight * 0.01;
document.documentElement.style.setProperty('--vh', `${vh}px`);

window.addEventListener('resize', () => {
  let vh = window.innerHeight * 0.01;
  document.documentElement.style.setProperty('--vh', `${vh}px`);
})


document.documentElement.addEventListener('touchstart', function (event) {
  if (event.touches.length > 1) {
    event.preventDefault();
  }
}, false);


window.addEventListener('resize', function (event) {
  location.reload()
});


const aside = document.querySelector('aside')

function setMyCookie() {
  asideToggleCookie = $('aside').hasClass('active') ? 'isActive' : 'notActive';
  asideSubmenuCookie = $('.sub-menu').hasClass('active') ? 'isActive' : 'notActive';
  $.cookie('asideToggleCookie', asideToggleCookie, {path: '/'});
  $.cookie('asideSubmenuCookie', asideSubmenuCookie, {path: '/'});
}

if ($.cookie('asideToggleCookie') == 'isActive') {
  $('aside').addClass('active');
} else {
  $('aside').removeClass('active');
}

const asideMenu = document.querySelector('.aside-toggle-menu')
const asideSubMenu = document.getElementsByClassName('sub-menu')

if (aside) {
  asideMenu.addEventListener('click', () => {
    aside.classList.toggle('active')
    location.reload()
    setMyCookie();
  })

  function openSubMenu(e) {
    const subMenu = e.target;
    subMenu.classList.toggle('active')
  }

  Array.from(asideSubMenu).forEach(asideSubMenu => asideSubMenu.addEventListener('click', openSubMenu))

}

const selectCategory = document.getElementsByName("select-category").value

if (selectCategory === "HOI") {
  console.log("test")
}

const tableDiagnosis = document.querySelector(".table-diagnosis")
const buttonAddDiagnosis = document.querySelector(".row-diagnosis .btn-plus")

function createDiagnosisElement() {
  console.log("test")
  const ul = document.createElement("ul");
  ul.setAttribute('class', 'row');
  ul.innerHTML =`
                          <li><input type="text" value="C46.2, C25.3"></li>
                          <li>Kaposi sarcoma of palate diplorioit of palate</li>
                          <li class="input-select">
                              <div>
                                  <input value="HOI" type="radio" name="select-diagnosis" id="diagnosis">
                                  <label for="diagnosis">주+부상병</label>
                              </div>
                              <div>
                                  <input value="VOI" type="radio" name="select-diagnosis" id="mainDiagnosis">
                                  <label for="mainDiagnosis">주상병</label>
                              </div>
                              <div>
                                  <input value="condition" type="radio" name="select-diagnosis" id="subDiagnosis">
                                  <label for="subDiagnosis">부상병</label>
                              </div>
                          </li>
                          <li>
                              <a class="delete">
                                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24">
                                      <path d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z"/>
                                  </svg>
                              </a>
                          </li>
`

  tableDiagnosis.appendChild(ul)
}

if (tableDiagnosis) {
  buttonAddDiagnosis.addEventListener("click", createDiagnosisElement)
}



const overlay = document.querySelector(".overlay")

const queryRefresh = document.querySelector(".btn-refresh")
const queryTextarea = document.querySelector(".query-textarea")
const modalActive = document.querySelector(".modal.active")
const modalQueryRefresh = document.querySelector(".modal-query-refresh")
const QueryRefreshSubmit = document.querySelector(".modal-query-refresh .btn-submit")
const QueryRefreshCancel = document.querySelector(".modal-query-refresh .btn-cancel")


function createListElement() {
  var li = document.createElement("li"); // creates an element "li"
  li.appendChild(document.createTextNode(input.value)); //makes text from input field the li text
  ul.appendChild(li); //adds li to ul
  input.value = ""; //Reset text input field
}

function hideModal() {
  overlay.classList.remove("active")
  modalQueryRefresh.classList.remove("active")

}

function addDiagnosisAfterClick() {

}

if (buttonAddDiagnosis) {
  buttonAddDiagnosis.addEventListener("click", addDiagnosisAfterClick)
}

if (queryRefresh) {
  queryRefresh.addEventListener('click', () => {
    overlay.classList.add("active")
    modalQueryRefresh.classList.add("active")
  })
  QueryRefreshSubmit.addEventListener('click', () => {
    overlay.classList.remove("active")
    modalQueryRefresh.classList.remove("active")
    queryTextarea.value = ""
  })
  QueryRefreshCancel.addEventListener('click', hideModal)
}