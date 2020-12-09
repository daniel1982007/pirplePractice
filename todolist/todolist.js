//front page
//sign up
//sign in
//dashboard
const root = document.getElementById('root')
//front page
const front_page = document.getElementById('front-page')
const signUp = document.getElementById('signUp')
const signIn = document.getElementById('signIn')
signUp.addEventListener('click', create_signup_div)
signIn.addEventListener('click', create_signin_div)

//create sign up block
const signUpDiv = document.createElement('div')
signUpDiv.classList.add('wrapper', 'non-display')
signUpDiv.id = 'signup-form'
root.appendChild(signUpDiv)

const signUpHeader = document.createElement('h1')
signUpHeader.innerText = 'Please Sign Up'
signUpHeader.classList.add('text-center', 'p-1')
signUpDiv.appendChild(signUpHeader)

const signUp_form = document.createElement('form')
signUpDiv.appendChild(signUp_form)
for(let i=0; i<5; i++) {
    const div = document.createElement('div')
    div.classList.add('half-wdt', 'm-center')
    div.id = `signup-${i+1}`
    const label = document.createElement('label')
    label.classList.add('block')
    const input = document.createElement('input')
    input.classList.add('p-1', 'block', 'all-wdt')
    div.appendChild(label)
    div.appendChild(input)
    signUp_form.appendChild(div)   
}

const first_name_div = document.getElementById('signup-1')
first_name_div.childNodes[0].innerText = 'First Name'
first_name_div.childNodes[1].type = 'text'
first_name_div.childNodes[1].addEventListener('keyup', handleName)
first_name_div.childNodes[1].addEventListener('blur', (e) => nameChecker(e.target.value, e.target.parentNode.id))

const last_name_div = document.getElementById('signup-2')
last_name_div.childNodes[0].innerText = 'Last Name'
last_name_div.childNodes[1].type = 'text'
last_name_div.childNodes[1].addEventListener('keyup', handleName)
last_name_div.childNodes[1].addEventListener('blur', (e) => nameChecker(e.target.value, e.target.parentNode.id))

const signUp_email_div = document.getElementById('signup-3')
signUp_email_div.childNodes[0].innerText = 'Email'
signUp_email_div.childNodes[1].type = 'email'
signUp_email_div.childNodes[1].addEventListener('keyup', handleEmail)
signUp_email_div.childNodes[1].addEventListener('blur', (e) => emailChecker(e.target.value, e.target.parentNode.id))

const pwd_div = document.getElementById('signup-4')
pwd_div.childNodes[0].innerText = 'Password'
pwd_div.childNodes[1].type = 'password'
pwd_div.childNodes[1].addEventListener('keyup', handlePassword)
pwd_div.childNodes[1].addEventListener('blur', (e) => pwdChecker(e.target.value, e.target.parentNode.id))

const check_box_div = document.getElementById('signup-5')
check_box_div.childNodes[1].type = 'checkbox'
check_box_div.childNodes[1].classList.value = 'inline-block'
const spantext = document.createElement('span')
spantext.classList.add('m-1')
spantext.innerText = 'I agree the term of use'
check_box_div.appendChild(spantext)

const sign_up_button = document.createElement('button')
sign_up_button.innerText = 'Sign Up'
sign_up_button.classList.add('p-1', 'm-center', 'block', 'half-wdt')
sign_up_button.addEventListener('click', signUphandle)
signUp_form.appendChild(sign_up_button)

const signUp_error_message = document.createElement('h4')
signUp_error_message.id = 'signup-error'
signUp_error_message.classList.add('text-center')
signUp_error_message.innerText = ''
signUpDiv.appendChild(signUp_error_message)

//create sign in block
const signInDiv = document.createElement('div')
signInDiv.classList.add('wrapper','non-display')
signInDiv.id = 'signin-form'
root.appendChild(signInDiv)

const headerText = document.createElement('h1')
headerText.innerText = 'Please Log In'
headerText.classList.add('text-center', 'p-1')
signInDiv.appendChild(headerText)

const signIn_form = document.createElement('form')
signInDiv.appendChild(signIn_form)

for(let i=1; i<=2; i++) {
    const div = document.createElement('div')
    div.classList.add('half-wdt', 'm-center')
    div.id = `signin-${i}`
    signIn_form.appendChild(div)
    const label = document.createElement('label')
    label.classList.add('block')
    const input = document.createElement('input')
    input.classList.add('block', 'all-wdt', 'p-1')
    div.appendChild(label)
    div.appendChild(input)
}

const signIn_email_div = document.getElementById('signin-1') //get is fetching, not create new
signIn_email_div.childNodes[0].innerText = 'Email'
signIn_email_div.childNodes[1].type = 'text'
const password_div = document.getElementById('signin-2')
password_div.childNodes[0].innerText = 'Password'
password_div.childNodes[1].type = 'password'

const sign_in_button = document.createElement('button')
sign_in_button.classList.add('block', 'half-wdt', 'p-1', 'm-center')
sign_in_button.innerText = 'Log In'
sign_in_button.addEventListener('click', signInHandle)
signIn_form.appendChild(sign_in_button)

const signIn_error_message = document.createElement('h3')
signIn_error_message.classList.add('red','text-center','m-center')
signIn_error_message.id = 'signin-error'
signInDiv.appendChild(signIn_error_message)

//create dashboard
const dashboard = document.createElement('div')
dashboard.classList.add('wrapper','non-display')
dashboard.id = 'dashboard'
root.appendChild(dashboard)

const dashboard_header = document.createElement('div')
dashboard_header.classList.add('lightblue', 'flex', 'space-between')
dashboard_header.id = 'dashboard-header'
dashboard.appendChild(dashboard_header)

const dashboard_header_title = document.createElement('h1')
dashboard_header_title.classList.add('text-center', 'p-1')
dashboard_header_title.innerText = 'DASHBOARD'
dashboard_header.appendChild(dashboard_header_title)

const dashboard_info = document.createElement('div')
dashboard_info.classList.add('flex')
dashboard_header.appendChild(dashboard_info)

const account = document.createElement('button')
account.innerText = 'ACCOUNT'
account.classList.add('block','p-1','m-1')
account.addEventListener('click', reset_account)
dashboard_info.appendChild(account)

const logout = document.createElement('button')
logout.innerText = 'LOG OUT'
logout.classList.add('block','p-1','m-1')
logout.addEventListener('click', log_out)
dashboard_info.appendChild(logout)

const create_new = document.createElement('button')
create_new.classList.add('block','m-center', 'p-1')
create_new.innerText = 'CREATE NEW TO DO LIST'
create_new.addEventListener('click', createNewTodolist)//when you use createNewTodolist(), it means run it now!
dashboard.appendChild(create_new)

const dashboard_welcomeText = document.createElement('h3')
dashboard_welcomeText.id = 'welcome-text'
dashboard_welcomeText.classList.add('p-3', 'text-center')
dashboard.appendChild(dashboard_welcomeText)

const dashboard_content = document.createElement('ul')
dashboard_content.classList.add('non-style')
dashboard_content.id = 'list-content'
dashboard.appendChild(dashboard_content)

const dashboard_inputDiv = document.createElement('div')
dashboard_inputDiv.classList.add('half-wdt', 'm-center')
dashboard.appendChild(dashboard_inputDiv)

const dashboard_inputLabel = document.createElement('label')
dashboard_inputLabel.classList.add('block','text-center','mb-1','bold')
dashboard_inputLabel.innerText = 'Enter your to-do-task'
dashboard_inputDiv.appendChild(dashboard_inputLabel)

const dashboard_inputField = document.createElement('input')
dashboard_inputField.type = 'text'
dashboard_inputField.classList.add('block', 'all-wdt', 'p-1')
dashboard_inputDiv.appendChild(dashboard_inputField)

const dashboard_submit_button = document.createElement('button')
dashboard_submit_button.innerText = 'SAVE'
dashboard_submit_button.classList.add('p-1','block','m-center')
dashboard_submit_button.addEventListener('click', handleTaskSubmit)
dashboard_inputDiv.appendChild(dashboard_submit_button)

const dashboard_submit_error = document.createElement('p')
dashboard_submit_error.classList.add('red','text-center')
dashboard_submit_error.innerText = ''
dashboard.appendChild(dashboard_submit_error)


function create_signup_div() {
    signUpDiv.classList.remove('non-display')
    front_page.classList.add('non-display')
}

function create_signin_div() {
    signInDiv.classList.remove('non-display')
    front_page.classList.add('non-display')
}

//let hasError = false

//name field handler
let nameTimer
let name_prev_value = ''
function handleName(e) {
    const name_value = e.target.value
    //every time when keyup, grabs e.target.value for validation check
    const name_label = e.target.parentNode.childNodes[0]
    if(name_value && name_value !== name_prev_value) {
        name_prev_value =  name_value
        if(e.target.parentNode.id === 'signup-1') { name_label.innerText = 'First Name' }
        if(e.target.parentNode.id === 'signup-2') { name_label.innerText = 'Last Name' }
        name_label.classList.value = 'black'
        
        clearTimeout(nameTimer)//it means cancel timer
        nameTimer =  setTimeout(() => nameChecker(name_value, e.target.parentNode.id), 1000)//if quickly keypress, keyup can't catch, this line of code will not run
    }
    if(!name_value) {
        clearTimeout(nameTimer)//always thinking about keyup action, canceled nameChecker
        name_prev_value = ''
        if(e.target.parentNode.id === 'signup-1') { name_label.innerText = 'First Name' }
        if(e.target.parentNode.id === 'signup-2') { name_label.innerText = 'Last Name' }
        name_label.classList.value = 'black'
    }
}

function nameChecker(str, id) {
    //2 senarios(keyup and blur)
    const rgx = /^[A-Z][a-z]+$/
    const name_label = document.getElementById(id).childNodes[0]

    let error
    if(!str) { //if tab-out with null str, keyup triggers anyway, but because of !value, keyup event ends
        //this means blur triggered
        error = 'Please enter name'
        name_label.innerText = error
        name_label.classList.value = 'red'
    } else if(!rgx.test(str)) {
        //this block means blur event happened or keyup timer ends
        error = 'Not valid (First letter uppercase, others lowercase)'
        name_label.innerText = error
        name_label.classList.value = 'red'
        name_prev_value = ''
    } else if(rgx.test(str)) {
        //no need clear Timer, because when blur happened, focus changed,
        //tab is also a key, after striking tab, keyup fires anyway, but input value not changed, so timer won't run
        if(id === 'signup-1') { name_label.innerText = 'First Name' }
        if(id === 'signup-2') { name_label.innerText = 'Last Name' }
        name_label.classList.value = 'black'
        name_prev_value = ''
    }
}

//email field handler
let emailTimer
let email_prev_value = ''
function handleEmail(e) {
    const email_value = e.target.value
    const email_label = e.target.parentNode.childNodes[0]

    if(email_value && email_value !== email_prev_value) {
        clearTimeout(emailTimer)
        emailTimer = setTimeout(() => emailChecker(email_value, e.target.parentNode.id), 1000)
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
function emailChecker(str, id) {
    const email_label = document.getElementById(id).childNodes[0]
    const rgx = /^\w+@[a-zA-Z0-9]+\.[a-zA-Z]{2,3}$/
    const data = localStorage.getItem('usersData')
    let error
    if(!str) {
        error = 'Please enter email'
        email_label.innerText = error
        email_label.classList.value = 'red'
    } else if(!rgx.test(str)) {
        error = 'Not valid email. For example: abc@abc.abc'
        email_label.classList.value = 'red'
        email_label.innerText = error
        email_prev_value = ''
    } else {
        //check localstorage if email has been registered
        if(data) {
            const usersDataArr = JSON.parse(data)
            for(let userData of usersDataArr) {
                if(userData.email === str) {
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
    const pwd_label = e.target.parentNode.childNodes[0]
    if(pwd_value && pwd_value !== pwd_prev_value) {
        //password + black
        pwd_prev_value = pwd_value
        pwd_label.innerText = 'Password'
        pwd_label.classList.value = 'black'
        clearTimeout(pwdTimer)
        pwdTimer = setTimeout(() => pwdChecker(pwd_value, e.target.parentNode.id), 1000)
    }
    if(!pwd_value) {
        //password + black
        clearTimeout(pwdTimer)
        pwd_prev_value = pwd_value
        pwd_label.innerText = 'Password'
        pwd_label.classList.value = 'black'
    }
}

function pwdChecker(str, id) {
    const pwd_label = document.getElementById(id).childNodes[0]
    if(!str) {
        pwd_label.innerText = 'Please enter password'
        pwd_label.classList.value = 'red'
    } else if(str.length < 8) {
        pwd_label.innerText = 'Password needs more than 7 symbols'
        pwd_label.classList.value = 'red'
    } else if(str.length > 30) {
        pwd_label.innerText = 'Password needs less than 30 symbols'
        pwd_label.classList.value = 'red'
    } else if(str.length >= 8 && str.length <=30) {
        const rgx_upperCase = /[A-Z]/
        const rgx_lowerCase = /[a-z]/
        const rgx_number = /[0-9]/
        if(!rgx_upperCase.test(str) ||!rgx_lowerCase.test(str) || !rgx_number.test(str)) {
            pwd_label.innerText = 'Password needs include at least uppercase lowercase letters and numbers. Any other symbol is optional'
            pwd_label.classList.value = 'red'
        }
    }  
}

function signUphandle(e) {
    e.preventDefault()
    signUp_error_message.innerText = ''
    signUp_error_message.classList.value = 'text-center'
    //all inputs should be filled in
    let isFilled = false
    for(let i=1; i<=4; i++) {
        const inputValue = document.getElementById(`signup-${i}`).childNodes[1].value
        if(inputValue) {
            isFilled = true
            continue
        } else {
            isFilled = false
            break
        }
    }
    const errorsLen = signUp_form.querySelectorAll('.red').length
    const check_box = document.getElementById('signup-5').childNodes[1]

    if(!isFilled) {
        signUp_error_message.innerText = 'fill in all fields needed'
        signUp_error_message.classList.add('red')
    } else if (errorsLen) {
        signUp_error_message.innerText = 'please correct errors'
        signUp_error_message.classList.add('red')
    } else if(!check_box.checked) {
        signUp_error_message.innerText = 'please agree with term of use'
        signUp_error_message.classList.add('red')
    } else {
        saveToLocalStorage()
        signUpDiv.classList.add('non-display')
        showDashboard()
    }
}

//if you use const usersData = [], every time when you refresh browser, 
//from top to bottom each line of code in js will run again, of course usersData array will be cleared!
let user_info
function saveToLocalStorage() {
    const data = localStorage.getItem('usersData')
    let usersData = JSON.parse(data)
    if(!usersData) { usersData = [] }
    const user_input = {
        first_name: document.getElementById('signup-1').childNodes[1].value,
        last_name: document.getElementById('signup-2').childNodes[1].value,
        email: document.getElementById('signup-3').childNodes[1].value,
        password: document.getElementById('signup-4').childNodes[1].value
    }
    usersData.push(user_input)
    // console.log(usersData)
    localStorage.setItem('usersData', JSON.stringify(usersData))
    user_info = user_input
}

function showDashboard() {
    //show list items, showdashboard comes only when user registered or logged in, 
    //both of them localstorage has data
    dashboard.classList.remove('non-display')
    dashboard_content.classList.remove('non-display')
    dashboard_content.innerHTML = ''
    const userdata = JSON.parse(localStorage.getItem('usersData')).filter(user => user.email === user_info.email)
    if(!userdata[0].todolists) {
        //show welcome to dashboard text
        dashboard_welcomeText.innerText = `Dear ${user_info.first_name}, Welcome, to the Dashboard...`
        dashboard_inputDiv.classList.add('non-display')
    } else {
        dashboard_welcomeText.innerText = ''
        const todolists_arr = userdata[0].todolists
        //li tag append to ul
        todolists_arr.forEach((todolist, index) => {
            const li = document.createElement('li')
            li.classList.add('p-1')
            li.id = index+1
            dashboard_content.appendChild(li)

            const divShow = document.createElement('div')
            li.appendChild(divShow)

            const check = document.createElement('input')
            check.type = 'checkbox'
            divShow.appendChild(check)
            const label = document.createElement('label')
            label.classList.add('m-1')
            label.innerText = todolist
            label.addEventListener('click', showListInInput)
            divShow.appendChild(label)

            const divUpdate = document.createElement('div')
            divUpdate.classList.add('non-display')
            li.appendChild(divUpdate)

            const input = document.createElement('input')
            input.type = 'text'
            input.classList.add('p-1')
            input.addEventListener('blur', (e) => {
                console.log(e.relatedTarget)
                if(e.relatedTarget === null) {
                    e.target.parentNode.classList.add('non-display')
                    e.target.parentNode.parentNode.childNodes[0].classList.remove('non-display')
                }   
            })
            const button = document.createElement('button')
            button.classList.add('p-1','m-1')
            button.innerText = 'Save'
            button.addEventListener('click', updateList)
            const error_update_text = document.createElement('p')
            error_update_text.classList.add('red')
            error_update_text.innerText = ''
            divUpdate.appendChild(input)
            divUpdate.appendChild(button)
            divUpdate.appendChild(error_update_text)

        })
        dashboard_inputDiv.classList.add('non-display')
    }  
}

///////////////////////////////sign in, you don't need to get any info of e.target
function signInHandle(e) {
    e.preventDefault()
    //email login checker
    const email_input = signIn_email_div.childNodes[1].value
    const password_input = password_div.childNodes[1].value
    if(!email_input || !password_input) {
        signIn_error_message.innerText = 'Please enter your login email and password'
    } else if(!localStorage.getItem('usersData')) {
        signIn_error_message.innerText = 'Doesnot exist such user, please sign up firstly'
    } else {
        const usersDataArr = JSON.parse(localStorage.getItem('usersData'))
        for(let userData of usersDataArr) {
            if(userData.email === email_input && userData.password === password_input) {
                //code
                user_info = userData
                signIn_error_message.innerText = ''
                signInDiv.classList.add('non-display')
                showDashboard()
                return// 'return' it means end this whole function
            }
        }
        signIn_error_message.innerText = 'wrong login email or password'
    }  
}

function showListInInput(e) {
    e.target.parentNode.classList.add('non-display')
    const updateDiv = e.target.parentNode.parentNode.childNodes[1]
    updateDiv.classList.remove('non-display')
    updateDiv.childNodes[0].value = e.target.innerText
    updateDiv.childNodes[0].focus()
    e.target.parentNode.parentNode.childNodes[1].childNodes[2].innerText = ''
}

function updateList(e) {
    //e.stopPropagation()
    //console.log(e)
    const value = e.target.parentNode.childNodes[0].value
    //check if value exists in localstorage
    const usersData = JSON.parse(localStorage.getItem('usersData'))
    const userData = usersData.filter(user => user.email === user_info.email)

    if(userData[0].todolists.includes(value)) {
        e.target.parentNode.childNodes[2].innerText = 'Your update is not valid, this task exists'
    } else {
        e.target.parentNode.classList.add('non-display')
        e.target.parentNode.parentNode.childNodes[0].classList.remove('non-display')
        e.target.parentNode.parentNode.childNodes[0].childNodes[1].innerText = value
        //save to local storage
        const index = e.target.parentNode.parentNode.id-1
        userData[0].todolists[index] = value
        localStorage.setItem('usersData', JSON.stringify(usersData))
        //data type passed by value and by reference
    }
}

function createNewTodolist() {
    dashboard_inputField.value = ''
    dashboard_header.classList.add('non-display')
    dashboard_welcomeText.classList.add('non-display')
    dashboard_content.classList.add('non-display')
    dashboard_inputDiv.classList.remove('non-display')


    //don't create new input and new button, create then while building dashboard, 
    //if you want to create new list, just show input and button fields, wrap them in a div.  
}

//todolist should be save to localstorage
function handleTaskSubmit() {
    //check the stored data if it exists
    const usersData = JSON.parse(localStorage.getItem('usersData'))
    const userData = usersData.filter(user => user.email === user_info.email)//remember the filter is not generating a new array, in memory it is not changed!

    if(!dashboard_inputField.value) {
        dashboard_submit_error.innerText = 'Enter your task'
        return
    } else if(!userData[0].todolists) {
        //save input to localstorage
        userData[0].todolists = []
        userData[0].todolists.push(dashboard_inputField.value)
        localStorage.setItem('usersData', JSON.stringify(usersData))
    } else if(userData[0].todolists.includes(dashboard_inputField.value)) {
        dashboard_submit_error.innerText = 'This task has been added:('
        return
    } else {
        //add input to content
        userData[0].todolists.push(dashboard_inputField.value)
        localStorage.setItem('usersData', JSON.stringify(usersData))
    }
    dashboard_header.classList.remove('non-display')
    dashboard_inputDiv.classList.add('non-display')
    dashboard_submit_error.innerText = ''
    showDashboard()

}

function log_out() {
    signInDiv.classList.remove('non-display')
    signIn_form.reset()
    dashboard.classList.add('non-display')
}

function reset_account() {
    dashboard.classList.add('non-display')
    signUpDiv.classList.remove('non-display')
    document.getElementById('signup-1').childNodes[1].value = user_info.first_name
    document.getElementById('signup-2').childNodes[1].value = user_info.last_name
    document.getElementById('signup-3').childNodes[1].value = user_info.email
    document.getElementById('signup-4').childNodes[1].value = user_info.password



}