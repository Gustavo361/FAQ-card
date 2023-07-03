const body = document.body
const questions = document.querySelectorAll('[data-question]')
const arrowDownImgs = document.querySelectorAll('#questions-container .arrow-img img');
const answers = document.querySelectorAll('[data-answer]')

body.addEventListener('click', (e)=> {
    const isClickInsideQuestions = Array.from(questions).some((question) => {
        return question.contains(e.target);
      })
    
      if (!isClickInsideQuestions) {
        questions.forEach((question) => {
          question.classList.remove('active');
        })
    
        answers.forEach((answer) => {
          answer.classList.remove('active');
        })

        arrowDownImgs.forEach((arrowDownImg) => {
            arrowDownImg.classList.remove('active')
        })
      }
})

questions.forEach((question, index) => {
    question.addEventListener('click', () => {
        const target = document.querySelector(question.dataset.question)
        questions.forEach((question, i) => {
            question.classList.remove('active');
            if (i === index) {
                arrowDownImgs[i].classList.add('active');
            } else {
                arrowDownImgs[i].classList.remove('active');
            }
        })
        answers.forEach(answer => {
            answer.classList.remove('active')
        })
        question.classList.add('active')
        target.classList.add('active')
    })
})
































// const questions = document.querySelector('a'),
//     answers = document.querySelector('')


// questions.forEach(question => {
//     question.addEventListener('click', () => {
//         const targetQuestion = document.querySelector(question.dataset.targetQuestion) //pega a unica questao clicada
//         // let targetAnswer

//         answers.forEach(answer => {
//             answer.classList.remove('active')
//         })

//         questions.forEach(question => {
//             question.classList.remove('active')
//         })

//         targetQuestion.classList.add('active')
//         question.classList.add('active')

//         console.log(targetQuestion)
//         console.log(answers)
        
//     })
// })


// tabs.forEach(tab => {
//     tab.addEventListener('click', () => {
//         const targetTab = document.querySelector(tab.dataset.tabTarget)
//         tabs.forEach(tab => {
//             tab.classList.remove('active')
//         })
//         tabContent.forEach(content => {
//             content.classList.remove('active')
//         })
//         targetTab.classList.add('active')
//         tab.classList.add('active')
//     })
// })

// data-tab-target.dataset.tabTarget
// topico - pega o VALOR do D.A. - tabs (data-tab-target) = #home / #pricing / #about
