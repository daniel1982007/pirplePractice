const root = document.getElementById('root')
const signUp = document.getElementById('signUp')
const signIn = document.getElementById('signIn')

signUp.addEventListener('click', handleSignUp)
signIn.addEventListener('click', handleSignIn)

const wrapper = document.querySelector('.wrapper')

let signUpDiv
let signUpHeader
let signUp_form
let first_name_div
let last_name_div
let signUp_email_div
let pwd_div
let check_box_div
let spantext
let sign_up_button
let signUp_error_message
function handleSignUp() {
    wrapper.classList.add('non-display')
    signUpDiv = document.createElement('div')
    signUpDiv.classList.add('wrapper')
    signUpDiv.id = 'signup-form'
    root.appendChild(signUpDiv)

    signUpHeader = document.createElement('h1')
    signUpHeader.innerText = 'Please Sign Up'
    signUpHeader.classList.add('text-center', 'p-1')
    signUpDiv.appendChild(signUpHeader)

    signUp_form = document.createElement('form')
    signUpDiv.appendChild(signUp_form)

    for(let i=0; i<5; i++) {
        const div = document.createElement('div')
        div.classList.add('half-wdt', 'm-center')
        div.id = i+1
        const label = document.createElement('label')
        label.classList.add('block')
        const input = document.createElement('input')
        input.classList.add('p-1', 'block', 'all-wdt')
        div.appendChild(label)
        div.appendChild(input)
        signUp_form.appendChild(div)   
    } 

    first_name_div = document.getElementById('1')
    first_name_div.childNodes[0].innerText = 'First Name'
    first_name_div.childNodes[1].type = 'text'
    first_name_div.childNodes[1].addEventListener('keyup', handleName)

    last_name_div = document.getElementById('2')
    last_name_div.childNodes[0].innerText = 'Last Name'
    last_name_div.childNodes[1].type = 'text'
    last_name_div.childNodes[1].addEventListener('keyup', handleName)

    signUp_email_div = document.getElementById('3')
    signUp_email_div.childNodes[0].innerText = 'Email'
    signUp_email_div.childNodes[1].type = 'email'
    signUp_email_div.childNodes[1].addEventListener('keyup', handleEmail)

    pwd_div = document.getElementById('4')
    pwd_div.childNodes[0].innerText = 'Password'
    pwd_div.childNodes[1].type = 'password'
    pwd_div.childNodes[1].addEventListener('keyup', handlePassword)

    check_box_div = document.getElementById('5')
    check_box_div.childNodes[1].type = 'checkbox'
    check_box_div.childNodes[1].classList.value = 'inline-block'
    spantext = document.createElement('span')
    spantext.classList.add('m-1')
    spantext.innerText = 'I agree the term of use'
    check_box_div.appendChild(spantext)

    sign_up_button = document.createElement('button')
    sign_up_button.innerText = 'Sign Up'
    sign_up_button.classList.add('p-1', 'm-center', 'block', 'half-wdt')
    sign_up_button.addEventListener('click', signUphandle)
    signUp_form.appendChild(sign_up_button)

    signUp_error_message = document.createElement('h4')
    signUp_error_message.id = 'signup-error'
    signUp_error_message.classList.add('text-center')
    signUp_error_message.innerText = ''
    signUpDiv.appendChild(signUp_error_message)

}

//let hasError = false

//name field handler
let nameLabel
let nameTimer
let name_prev_value = ''
function handleName(e) {
    const current_value = e.target.value
    nameLabel = e.target.parentNode.childNodes[0]
    if(current_value && current_value !== name_prev_value) {
        name_prev_value =  current_value
        if(e.target.parentNode.id === '1') { nameLabel.innerText = 'First Name' }
        if(e.target.parentNode.id === '2') { nameLabel.innerText = 'Last Name' }

        nameLabel.classList.value = 'black'
        clearTimeout(nameTimer)//when use cleartimeout, settimeout function are continuously refreshed every single time of key stroke
        nameTimer =  setTimeout(() => nameChecker(current_value), 1000)
    }
    if(!current_value) {
        name_prev_value = ''
        if(e.target.parentNode.id === '1') { nameLabel.innerText = 'First Name' }
        if(e.target.parentNode.id === '2') { nameLabel.innerText = 'Last Name' }
        nameLabel.classList.value = 'black'
    }
}

function nameChecker(str) {
    const rgx = /^[A-Z][a-z]+$/
    if(!rgx.test(str)) {
        let error = 'Not valid. First letter should be capitalized.'
        nameLabel.innerText = error
        nameLabel.classList.value = 'red'
        name_prev_value = ''
    }
}

//email field handler
let emailTimer
let emailLabel
let email_prev_value = ''
function handleEmail(e) {
    const current_value = e.target.value
    emailLabel = e.target.parentNode.childNodes[0]

    if(current_value && current_value !== email_prev_value) {
        email_prev_value = current_value
        emailLabel.innerText = 'Email'
        emailLabel.classList.value = 'black'
        clearTimeout(emailTimer)
        emailTimer = setTimeout(() => emailChecker(current_value), 800)
    } 
    if(!current_value) {
        email_prev_value = ''
        emailLabel.innerText = 'Email'
        emailLabel.classList.value = 'black'
    }
}

//fetch localstorage data
function emailChecker(str) {
    const rgx = /^\w+@[a-zA-Z0-9]+\.[a-zA-Z]{2,3}$/
    const data = localStorage.getItem('usersData')
    if(!rgx.test(str)) {
        let error = 'Not valid email. For example: abc@abc.abc'
        emailLabel.classList.value = 'red'
        emailLabel.innerText = error
    } else {
        //check localstorage if email has been registered
        if(data) {
            const usersDataArr = JSON.parse(data)
            for(let userData of usersDataArr) {
                if(userData.email === str) {
                    let error = 'This email has been registered, choose another email for registration'
                    emailLabel.classList.value = 'red'
                    emailLabel.innerText = error
                    break
                }
            }
        }
    }
}

//password field handler
let pwdTimer
let pwd_prev_value = ''
let pwdLabel
function handlePassword(e) {
    const pwd = e.target.value
    pwdLabel = e.target.parentNode.childNodes[0]
    if(pwd && pwd !== pwd_prev_value) {
        //password + black
        pwd_prev_value = pwd
        pwdLabel.innerText = 'Password'
        pwdLabel.classList.value = 'black'
        clearTimeout(pwdTimer)
        pwdTimer = setTimeout(() => pwdChecker(pwd), 1000)
    }
    if(!pwd) {
        //password + black
        pwd_prev_value = pwd
        pwdLabel.innerText = 'Password'
        pwdLabel.classList.value = 'black'
    }
}

function pwdChecker(str) {
    if(str.length < 8) {
        pwdLabel.innerText = 'Password needs more than 7 symbols'
        pwdLabel.classList.value = 'red'
    }
    if(str.length > 30) {
        pwdLabel.innerText = 'Password needs less than 30 symbols'
        pwdLabel.classList.value = 'red'
    }
    if(str.length >= 8 && str.length <=30) {
        const rgx_upperCase = /[A-Z]/
        const rgx_lowerCase = /[a-z]/
        const rgx_number = /[0-9]/
        if(!rgx_upperCase.test(str) ||!rgx_lowerCase.test(str) || !rgx_number.test(str)) {
            pwdLabel.innerText = 'Password needs include at least uppercase lowercase letters and numbers. Any other symbol is optional'
            pwdLabel.classList.value = 'red'
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
        const inputValue = document.getElementById(`${i}`).childNodes[1].value
        if(inputValue) {
            isFilled = true
            continue
        } else {
            isFilled = false
            break
        }
    }
    const errorsLen = document.querySelectorAll('.red').length
    const check_box = document.getElementById('5').childNodes[1]

    if(!isFilled) {
        signUp_error_message.innerText = 'fill in all fields needed'
        signUp_error_message.classList.add('red')
    } else if (errorsLen) {
        signUp_error_message.innerText = 'please correct errors'
        signUp_error_message.classList.add('red')
    } else if(!check_box.checked) {
        signUp_error_message.innerText = 'please agree with use term'
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
        first_name: document.getElementById('1').childNodes[1].value,
        last_name: document.getElementById('2').childNodes[1].value,
        email: document.getElementById('3').childNodes[1].value,
        password: document.getElementById('4').childNodes[1].value
    }
    usersData.push(user_input)
    // console.log(usersData)
    localStorage.setItem('usersData', JSON.stringify(usersData))
    user_info = user_input
}

let dashboard
let dashboard_header
let dashboard_welcomeText
let dashboard_content
let dashboard_inputDiv
let dashboard_inputLabel
let dashboard_inputField
let dashboard_submit_button
let dashboard_submit_error
function showDashboard() {
    dashboard = document.createElement('div')
    dashboard.classList.add('wrapper')
    root.appendChild(dashboard)

    dashboard_header = document.createElement('div')
    dashboard_header.classList.add('lightblue')
    dashboard.appendChild(dashboard_header)
    
    const title = document.createElement('h1')
    title.classList.add('text-center', 'p-1')
    title.innerText = 'DASHBOARD'
    dashboard_header.appendChild(title)
    const button = document.createElement('button')
    button.classList.add('block','m-center', 'p-1')
    button.innerText = 'CREATE NEW TO DO LIST'
    button.addEventListener('click', createNewTodolist)//when you use createNewTodolist(), it means run it now!
    dashboard_header.appendChild(button)

    dashboard_welcomeText = document.createElement('h3')
    dashboard_welcomeText.id = 'welcome-text'
    dashboard_welcomeText.classList.add('p-3', 'text-center')
    dashboard.appendChild(dashboard_welcomeText)

    dashboard_content = document.createElement('ul')
    dashboard_content.classList.add('non-style')
    dashboard_content.id = 'list-content'
    dashboard.appendChild(dashboard_content)

    dashboard_inputDiv = document.createElement('div')
    dashboard_inputDiv.classList.add('half-wdt', 'm-center')
    dashboard.appendChild(dashboard_inputDiv)

    dashboard_inputLabel = document.createElement('label')
    dashboard_inputLabel.classList.add('block','text-center','mb-1','bold')
    dashboard_inputLabel.innerText = 'Enter your to-do-task'
    dashboard_inputDiv.appendChild(dashboard_inputLabel)

    dashboard_inputField = document.createElement('input')
    dashboard_inputField.type = 'text'
    dashboard_inputField.classList.add('block', 'all-wdt', 'p-1')
    dashboard_inputDiv.appendChild(dashboard_inputField)

    dashboard_submit_button = document.createElement('button')
    dashboard_submit_button.innerText = 'SAVE'
    dashboard_submit_button.classList.add('p-1','block','m-center')
    dashboard_submit_button.addEventListener('click', handleTaskSubmit)
    dashboard_inputDiv.appendChild(dashboard_submit_button)

    dashboard_submit_error = document.createElement('p')
    dashboard_submit_error.classList.add('red','text-center')
    dashboard_submit_error.innerText = ''

    //show list items, showdashboard comes only when user registered or logged in, 
    //both of them localstorage has data
    const userdata = JSON.parse(localStorage.getItem('usersData')).filter(user => user.email === user_info.email)
    if(!userdata[0].todolists) {
        //show welcome to dashboard text
        dashboard_welcomeText.innerText = `Dear ${user_info.first_name}, Welcome, to the Dashboard...`
        dashboard_inputDiv.classList.add('non-display')
    } else {
        const usersData = JSON.parse(localStorage.getItem('usersData'))
        const userData = usersData.filter(user => user.email === user_info.email)
        const todolists_arr = userData[0].todolists
        
        //li tag append to ul
        todolists_arr.forEach(todolist => {
            const li = document.createElement('li')
            li.classList.add('p-1')
            const check = document.createElement('input')
            check.type = 'checkbox'
            li.appendChild(check)
            const label = document.createElement('label')
            label.classList.add('m-1')
            label.innerText = todolist
            li.appendChild(label)
            dashboard_content.appendChild(li)
        })
        dashboard_inputDiv.classList.add('non-display')
    }  
}

///////////////////////////////sign in, you don't need to get any info of e.target
let signInDiv
let headerText
let signIn_form
let signIn_email_div
let password_div
let sign_in_button
let signIn_error_message
function handleSignIn() {
    wrapper.classList.add('non-display')
    signInDiv = document.createElement('div')
    signInDiv.classList.add('wrapper')
    signInDiv.id = 'signin-form'
    root.appendChild(signInDiv)

    headerText = document.createElement('h1')
    headerText.innerText = 'Please Log In'
    headerText.classList.add('text-center', 'p-1')
    signInDiv.appendChild(headerText)

    signIn_form = document.createElement('form')
    signInDiv.appendChild(signIn_form)

    for(let i=1; i<=2; i++) {
        const div = document.createElement('div')
        div.classList.add('half-wdt', 'm-center')
        div.id = i
        signIn_form.appendChild(div)
        const label = document.createElement('label')
        label.classList.add('block')
        const input = document.createElement('input')
        input.classList.add('block', 'all-wdt', 'p-1')
        div.appendChild(label)
        div.appendChild(input)
    }

    signIn_email_div = document.getElementById('1') //get is fetching, not create new
    signIn_email_div.childNodes[0].innerText = 'Email'
    signIn_email_div.childNodes[1].type = 'text'
    password_div = document.getElementById('2')
    password_div.childNodes[0].innerText = 'Password'
    password_div.childNodes[1].type = 'password'

    sign_in_button = document.createElement('button')
    sign_in_button.classList.add('block', 'half-wdt', 'p-1', 'm-center')
    sign_in_button.innerText = 'Log In'
    sign_in_button.addEventListener('click', signInHandle)
    signIn_form.appendChild(sign_in_button)

    signIn_error_message = document.createElement('h3')
    signIn_error_message.classList.add('red','text-center','m-center')
    signIn_error_message.id = 'signin-error'
    signInDiv.appendChild(signIn_error_message)
}

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
                const data = JSON.parse(localStorage.getItem('usersData')).filter(user => user.email === email_input)
                user_info = data[0]
                signIn_error_message.innerText = ''
                signInDiv.classList.add('non-display')
                showDashboard()
                return// 'return' it means end this whole function
            }
        }
        signIn_error_message.innerText = 'wrong login email or password'
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
    if(!dashboard_inputField.value) {
        dashboard_submit_error.innerText = 'Enter your task'
    } else {
        dashboard_header.classList.remove('non-display')
        dashboard_inputDiv.classList.add('non-display')
        dashboard_content.classList.remove('non-display')
        dashboard_submit_error.innerText = ''
        
        const task = document.createElement('li')
        task.classList.add('p-1')
        dashboard_content.appendChild(task)
        const check = document.createElement('input')
        check.type = 'checkbox'
        task.appendChild(check)
        const label = document.createElement('label')
        label.classList.add('m-1')
        label.innerText = dashboard_inputField.value
        task.appendChild(label)

        //save data to localstorage
        const usersData = JSON.parse(localStorage.getItem('usersData'))
        const userData = usersData.filter(user => user.email === user_info.email)
        
        if(!userData[0].todolists) {
            userData[0].todolists = []
        }
        userData[0].todolists.push(label.innerText)
        localStorage.setItem('usersData', JSON.stringify(usersData))

    }
}