const front_page_div = document.getElementById('front-page')
front_page_div.classList.add('lightblue')
const front_page_header = 'TO DO LIST'
const front_page_text = 'Plan your tasks and go ahead, good luck!'
front_page_div.innerHTML = `<h1 class='p-9 text-center'>${front_page_header}</h1>
                            <h3 class='mt-1 text-center'>${front_page_text}</h3>
                            <div class='mt-1 p-1 flex'>
                                <button id='signUp' class='p-1 m-1 grey inline-block' onclick='create_signup_div()'>Sign Up</button>
                                <button id='signIn' class='p-1 m-1 grey inline-block' onclick='create_signin_div()'>Sign In</button>
                            </div>`

function create_signup_div() {
    front_page_div.classList.add('non-display')
    const signup_div = document.getElementById('signup-div')
    const signup_header = 'Please Sign Up Your Account'
    const firstName = 'First Name'
    const lastName = 'Last Name'
    const email = 'Your Email'
    const password = 'Set Your Password'
    const useTerm = 'Agree With Use Terms'
    const signup_form_button_text = 'Sign Up'
    signup_div.innerHTML = `<h1 class='text-center p-1'>${signup_header}</h1>
                            <form id='signup-form'>
                                <div class='half-wdt m-center' id='signup-1'>
                                    <label class='block'>${firstName}</label>
                                    <input class='p-1 block all-wdt' type='text'>
                                </div>
                                <div class='half-wdt m-center' id='signup-2'>
                                    <label class='block'>${lastName}</label>
                                    <input class='p-1 block all-wdt' type='text'>
                                </div>
                                <div class='half-wdt m-center' id='signup-3'>
                                    <label class='block'>${email}</label>
                                    <input class='p-1 block all-wdt' type='email'>
                                </div>
                                <div class='half-wdt m-center' id='signup-4'>
                                    <label class='block'>${password}</label>
                                    <input class='p-1 block all-wdt' type='password'>
                                </div>
                                <div class='half-wdt m-center' id='signup-5'>
                                    <input class='inline-block' type='checkbox'>
                                    <span class='m-1'>${useTerm}</span>
                                </div>
                                <button class='p-1 m-center block half-wdt' id='signup-form-but'>${signup_form_button_text}</button>
                            </form>
                            <h4 class='text-center' id='signup-error'></h4>`
    const firstName_input = document.getElementById('signup-1').children[1]
    firstName_input.addEventListener('keyup', handleName)
    firstName_input.addEventListener('blur', (e) => nameChecker(e))
    
    const lastName_input = document.getElementById('signup-2').children[1]
    lastName_input.addEventListener('keyup', handleName)
    lastName_input.addEventListener('blur', (e) => nameChecker(e))
    
    const email_input = document.getElementById('signup-3').children[1]
    email_input.addEventListener('keyup', handleEmail)
    email_input.addEventListener('blur', (e) => emailChecker(e))
    
    const password_input = document.getElementById('signup-4').children[1]
    password_input.addEventListener('keyup', handlePassword)
    password_input.addEventListener('blur', (e) => pwdChecker(e))

    const sign_up_button = document.getElementById('signup-form-but')
    sign_up_button.addEventListener('click', signUpHandle)
}


let nameTimer
let name_prev_value = ''
function handleName(e) {
    const name_value = e.target.value
    //every time when keyup, grabs e.target.value for validation check
    const name_label = e.target.parentNode.children[0]
    if(name_value && name_value !== name_prev_value) {
        name_prev_value =  name_value
        if(e.target.parentNode.id === 'signup-1') { name_label.innerText = 'First Name' }
        if(e.target.parentNode.id === 'signup-2') { name_label.innerText = 'Last Name' }
        name_label.classList.value = 'black'
        
        clearTimeout(nameTimer)//it means cancel timer
        nameTimer =  setTimeout(() => nameChecker(e), 1000)//if quickly keypress, keyup can't catch, this line of code will not run
    }
    if(!name_value) {
        clearTimeout(nameTimer)//always thinking about keyup action, canceled nameChecker
        name_prev_value = ''
        if(e.target.parentNode.id === 'signup-1') { name_label.innerText = 'First Name' }
        if(e.target.parentNode.id === 'signup-2') { name_label.innerText = 'Last Name' }
        name_label.classList.value = 'black'
    }
}

function nameChecker(ev) {
    //2 senarios(keyup and blur)
    const rgx = /^[A-Z][a-z]+$/
    const name_label = ev.target.parentNode.children[0]

    let error
    if(!ev.target.value) { //if tab-out with null str, keyup triggers anyway, but because of !value, keyup event ends
        //this means blur triggered
        error = 'Please enter name'
        name_label.innerText = error
        name_label.classList.value = 'red'
    } else if(!rgx.test(ev.target.value)) {
        //this block means blur event happened or keyup timer ends
        error = 'Not valid (First letter uppercase, others lowercase)'
        name_label.innerText = error
        name_label.classList.value = 'red'
        name_prev_value = ''
    } else if(rgx.test(ev.target.value)) {
        //no need clear Timer, because when blur happened, focus changed,
        //tab is also a key, after striking tab, keyup fires anyway, but input value not changed, so timer won't run
        if(ev.target.parentNode.id === 'signup-1') { name_label.innerText = 'First Name' }
        if(ev.target.parentNode.id === 'signup-2') { name_label.innerText = 'Last Name' }
        name_label.classList.value = 'black'
        name_prev_value = ''
    }
}

//email field handler
let emailTimer
let email_prev_value = ''
function handleEmail(e) {
    const email_value = e.target.value
    const email_label = e.target.parentNode.children[0]

    if(email_value && email_value !== email_prev_value) {
        clearTimeout(emailTimer)
        emailTimer = setTimeout(() => emailChecker(e), 1000)
        email_prev_value = email_value
        email_label.innerText = 'Email'
        email_label.classList.value = 'black'
    } 
    if(!email_value) {
        clearTimeout(emailTimer)
        email_prev_value = ''
        email_label.innerText = 'Email'
        email_label.classList.value = 'black'
    }
}

//fetch localstorage data
function emailChecker(ev) {
    const email_label = ev.target.parentNode.children[0]
    const rgx = /^\w+@[a-zA-Z0-9]+\.[a-zA-Z]{2,3}$/
    const data = localStorage.getItem('usersData')
    let error
    if(!ev.target.value) {
        error = 'Please enter email'
        email_label.innerText = error
        email_label.classList.value = 'red'
    } else if(!rgx.test(ev.target.value)) {
        error = 'Not valid email. For example: abc@abc.abc'
        email_label.classList.value = 'red'
        email_label.innerText = error
        email_prev_value = ''
    } else {
        //check localstorage if email has been registered
        if(data) {
            const usersDataArr = JSON.parse(data)
            for(let userData of usersDataArr) {
                if(userData.email === ev.target.value) {
                    error = 'This email has been registered, choose another email for registration'
                    email_label.classList.value = 'red'
                    email_label.innerText = error
                    email_prev_value = ''
                    break
                }
            }
        }
    }
}

//password field handler
let pwdTimer
let pwd_prev_value = ''
function handlePassword(e) {
    const pwd_value = e.target.value
    const pwd_label = e.target.parentNode.children[0]
    if(pwd_value && pwd_value !== pwd_prev_value) {
        //password + black
        pwd_prev_value = pwd_value
        pwd_label.innerText = 'Password'
        pwd_label.classList.value = 'black'
        clearTimeout(pwdTimer)
        pwdTimer = setTimeout(() => pwdChecker(e), 1000)
    }
    if(!pwd_value) {
        //password + black
        clearTimeout(pwdTimer)
        pwd_prev_value = pwd_value
        pwd_label.innerText = 'Password'
        pwd_label.classList.value = 'black'
    }
}

function pwdChecker(ev) {
    const pwd_label = ev.target.parentNode.children[0]
    if(!ev.target.value) {
        pwd_label.innerText = 'Please enter password'
        pwd_label.classList.value = 'red'
    } else if(ev.target.value.length < 8) {
        pwd_label.innerText = 'Password needs more than 7 symbols'
        pwd_label.classList.value = 'red'
    } else if(ev.target.value.length > 30) {
        pwd_label.innerText = 'Password needs less than 30 symbols'
        pwd_label.classList.value = 'red'
    } else if(ev.target.value.length >= 8 && ev.target.value.length <=30) {
        const rgx_upperCase = /[A-Z]/
        const rgx_lowerCase = /[a-z]/
        const rgx_number = /[0-9]/
        if(!rgx_upperCase.test(ev.target.value) ||!rgx_lowerCase.test(ev.target.value) || !rgx_number.test(ev.target.value)) {
            pwd_label.innerText = 'Password needs include at least uppercase lowercase letters and numbers. Any other symbol is optional'
            pwd_label.classList.value = 'red'
        }
    }  
}

function create_signin_div() {
    document.getElementById('front-page').classList.add('non-display')
    const signin_div = document.getElementById('signin-div')
    const signin_header = 'Please Log In'
    const email_text = 'Email'
    const password_text = 'Password'
    const button_text = 'Log In'
    signin_div.innerHTML = `<h1 class='text-center p-1'>${signin_header}</h1>
                            <form id='signin-form'>
                                <div id='signin-1' class='half-wdt m-center'>
                                    <label class='block'>${email_text}</label>
                                    <input class='block all-wdt p-1' type='email'>
                                </div>
                                <div id='signin-2' class='half-wdt m-center'>
                                    <label class='block'>${password_text}</label>
                                    <input class='block all-wdt p-1' type='password'>
                                </div>
                                <button id='log-in' class='block half-wdt p-1 m-center'>${button_text}</button>
                            </form>
                            <h3 class='red text-center m-center'></h3>`
    document.getElementById('log-in').addEventListener('click', signInHandle)
}

function signUpHandle(e) {
    e.preventDefault()
    let isFilled = false
    for(let i=1; i<=4; i++) {
        const inputValue = document.getElementById(`signup-${i}`).children[1].value
        if(inputValue) {
            isFilled = true
            continue
        } else {
            isFilled = false
            break
        }
    }
    const signup_form = document.getElementById('signup-form')
    const errorsLen = signup_form.querySelectorAll('.red').length
    const check_box = document.getElementById('signup-5').children[0]
    const signup_error_message = document.getElementById('signup-error')
    const value = document.getElementById('signup-form').children[2].children[1].value
    const usersData = JSON.parse(localStorage.getItem('usersData'))
    if(!isFilled) {
        signup_error_message.innerText = 'fill in all fields needed'
        signup_error_message.classList.add('red')
    } else if (errorsLen) {
        signup_error_message.innerText = 'please correct errors'
        signup_error_message.classList.add('red')
    } else if(!check_box.checked) {
        signup_error_message.innerText = 'please agree with term of use'
        signup_error_message.classList.add('red')
    } else if(usersData && usersData.some(user => user.email === value)) {
        signup_error_message.innerText = 'This email has been registered'
        signup_error_message.classList.add('red')
    } else { 
        document.getElementById('dashboard').classList.remove('non-display')
        document.getElementById('signup-div').classList.add('non-display')
        saveToLocalStorage()
        showDashboard()
    }
}

function signInHandle(e) {
    e.preventDefault()
    const email_value = e.target.parentNode.children[0].children[1].value
    const password_value = e.target.parentNode.children[1].children[1].value
    if(!email_value || !password_value) {
        e.target.parentNode.parentNode.children[2].innerText = 'Please enter your login email and password'
    } else if(!localStorage.getItem('usersData')) {
        e.target.parentNode.parentNode.children[2].innerText = 'Doesnot exist such user, please sign up firstly'
    } else {
        const usersDataArr = JSON.parse(localStorage.getItem('usersData'))
        for(let userData of usersDataArr) {
            if(userData.email === email_value && userData.password === password_value) {
                //code
                user_info = userData
                e.target.parentNode.parentNode.children[2].innerText = ''
                document.getElementById('signin-div').classList.add('non-display')
                document.getElementById('dashboard').classList.remove('non-display')
                showDashboard()
                return// 'return' it means end this whole function
            }
        }
        e.target.parentNode.parentNode.children[2].innerText = 'wrong login email or password'
    }
}

let user_info
function saveToLocalStorage() {
    const data = localStorage.getItem('usersData')
    let usersData = JSON.parse(data)
    if(!usersData) { usersData = [] }
    const user_input = {
        first_name: document.getElementById('signup-1').children[1].value,
        last_name: document.getElementById('signup-2').children[1].value,
        email: document.getElementById('signup-3').children[1].value,
        password: document.getElementById('signup-4').children[1].value
    }
    usersData.push(user_input)
    // console.log(usersData)
    localStorage.setItem('usersData', JSON.stringify(usersData))
    user_info = user_input
}

function showDashboard() {
    const dashboard = document.getElementById('dashboard')
    const dashboard_title = 'DASHBOARD'
    const account_button_text = 'ACCOUNT'
    const logout_button_text = 'LOG OUT'
    const create_new_button_text = 'CREATE NEW TO DO LIST'
    const welcome_text = `Dear ${user_info.first_name}, Welcome, to the Dashboard...`
    const usersData = JSON.parse(localStorage.getItem('usersData'))
    const userData = usersData.filter(user => user.email === user_info.email)
    if(!userData[0].todolists) {userData[0].todolists = []}
    dashboard.innerHTML = `<div class='lightblue p-1 flex space-between' id='dashboard-header'>
                                <h1>${dashboard_title}</h1>
                                <div class='flex'>
                                    <button id='account-button' class='block p-1 m-1' onclick='reset_account()'>${account_button_text}</button>
                                    <button id='logout-button' class='block p-1 m-1' onclick='logout()'>${logout_button_text}</button>
                                </div>
                            </div>
                            <button id='create-new-list' class='block m-center p-1' onclick='create_new()'>${create_new_button_text}</button>
                            <h3 class='p-3 text-center' id='welcome-text'>${!userData[0].todolists || !userData[0].todolists.length ? welcome_text : ''}</h3>
                            <ul id='list-content'>
                                ${userData[0].todolists.map((list, index) => {
                                    return (
                                        `<li id=${index+1} class='p-1 non-style'>
                                            <div>
                                                <input type='checkbox'>
                                                <label class='m-1'>${list}</label>
                                            </div>
                                            <div class='non-display'>
                                                <input type='text' class='p-1'>
                                                <button class='p-1 m-1'>SAVE</button>
                                                <button class='p-1 m-1'>DELETE</button>
                                                <p class='red'></p>
                                            </div>
                                        </li>`
                                    )}).join('')}
                            </ul>`
    //addeventlistener to all necessary elements
    if(userData[0].todolists && userData[0].todolists.length) {
        for(let i=0; i<userData[0].todolists.length; i++) {
            document.getElementById(i+1).children[0].children[1].addEventListener('click', show_list_input)
            document.getElementById(i+1).children[1].children[0].addEventListener('blur', blurer)
            document.getElementById(i+1).children[1].children[1].addEventListener('click', updateList)
            document.getElementById(i+1).children[1].children[2].addEventListener('click', deleteList)
        }
    }
}

function reset_account() {
    document.getElementById('dashboard').classList.add('non-display')
    document.getElementById('signup-div').classList.remove('non-display')
    create_signup_div()
    document.getElementById('signup-1').children[1].value = user_info.first_name
    document.getElementById('signup-2').children[1].value = user_info.last_name
    document.getElementById('signup-3').children[1].value = user_info.email
    document.getElementById('signup-4').children[1].value = user_info.password
}

function logout() {
    document.getElementById('dashboard').classList.add('non-display')
    document.getElementById('signin-div').classList.remove('non-display')
    document.getElementById('signin-form').reset()
}

function create_new() {
    document.getElementById('dashboard').classList.add('non-display')
    document.getElementById('create-new-div').classList.remove('non-display')
    const create_new_div = document.getElementById('create-new-div')
    const label_text = 'Enter Your To-do Item'
    const button_text = 'SAVE'
    const error_text = ''
    create_new_div.innerHTML = `<form>
                                    <label class='block text-center mt-1 mb-1 bold'>${label_text}</label>
                                    <input type='text' class='block half-wdt m-center p-1'>
                                    <button id='submit-new' class='p-1 block m-center'>${button_text}</button>
                                </form>
                                <p class='red text-center'>${error_text}</p>`
    document.getElementById('submit-new').addEventListener('click', handleTaskSubmit)
}

function show_list_input(e) {
    e.target.parentNode.parentNode.children[1].classList.remove('non-display')
    e.target.parentNode.parentNode.children[1].children[0].focus()
    e.target.parentNode.parentNode.children[1].children[3].innerText = ''
    e.target.parentNode.parentNode.children[1].children[0].value = e.target.innerText
    e.target.parentNode.classList.add('non-display')
}

function blurer(e) {
    if(!e.relatedTarget) {
        e.target.parentNode.classList.add('non-display')
        e.target.parentNode.parentNode.children[0].classList.remove('non-display')
    }
}

function updateList(e) {
    const value = e.target.parentNode.children[0].value
    const usersData = JSON.parse(localStorage.getItem('usersData'))
    const userData = usersData.filter(user => user.email === user_info.email)
    if(!value) {
        e.target.parentNode.children[3].innerText = 'Empty not allowed!'
    } else if(userData[0].todolists.includes(value)) {
        e.target.parentNode.children[3].innerText = 'This task already exists'
    } else {
        const id = e.target.parentNode.parentNode.id
        userData[0].todolists[id-1] = value
        localStorage.setItem(JSON.stringify(usersData))
        e.target.parentNode.classList.add('non-display')
        e.target.parentNode.parentNode.children[0].classList.remove('non-display')
        e.target.parentNode.parentNode.children[0].children[1].innerText = value
    }
}

function deleteList(e) {
    //update to localstorage
    const usersData = JSON.parse(localStorage.getItem('usersData'))
    const userData = usersData.filter(user => user.email === user_info.email)
    //get the index of todolist
    const index = e.target.parentNode.parentNode.id-1
    //delete a certain item in todolists array
    userData[0].todolists.splice(index, 1)
    //save to localstorage
    localStorage.setItem('usersData', JSON.stringify(usersData))
    //update to browser(remove child and update all children id)
    e.target.parentNode.parentNode.parentNode.removeChild(document.getElementById(index+1))
    //node.children is not array, it can't be looped
    const lists = document.getElementById('list-content').children
    const lists_arr = Array.from(lists)
    //update id of each child
    lists_arr.forEach((list, index) => list.id = index+1)
}

function handleTaskSubmit(e) {
    e.preventDefault()
    const value = e.target.parentNode.children[1].value
    const usersData = JSON.parse(localStorage.getItem('usersData'))
    const userData = usersData.filter(user => user.email === user_info.email)//userData is an array
    if(!value) {
        e.target.parentNode.parentNode.children[1].innerText = 'Enter Your Task'
        return
    } else if(!userData[0].todolists) {
        userData[0].todolists = []
        userData[0].todolists.push(value)
        localStorage.setItem('usersData', JSON.stringify(usersData))
    } else if(userData[0].todolists.includes(value)) {
        e.target.parentNode.parentNode.children[1].innerText = 'This Task already exists'
        return
    } else {
        userData[0].todolists.push(value)
        localStorage.setItem('usersData', JSON.stringify(usersData))
    }
    document.getElementById('dashboard').classList.remove('non-display')
    document.getElementById('create-new-div').classList.add('non-display')
    showDashboard()  
}

