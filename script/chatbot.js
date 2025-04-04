$(document).ready(function(){
    $('.chatbot-getname-submit').on('click', function(){
        let name = $('.chatbot-getname-input').val().trim();

        console.log("NAME", name);

        let storedNames = getLocalArrayNames();

        let namesArray = storedNames ? storedNames.split(", ") : [];
        if (!namesArray.includes(name)) {
            namesArray.push(name);
        }

        setLocalArrayNames(namesArray);

        $('.chatbot-getname-input').val("");
    })

    let questions = [
        "Are you currently looking for job opportunities?",
        "Are you available for long-term collaboration?",
        "Have you worked on any mobile app designs?",
        "Have you worked with cross-functional teams?",
        "Can I submit a job opportunity for you to consider?",
        "Can you tell me about your experience in frontend development?"
    ];

    let chatbotButtons = $('.chatbot-content-buttons');
    let chatbotTyping = $('.chatbot-content-typing');

    function loadQuestions() {
        chatbotButtons.find('.chatbot-content-buttons-questions').remove();

        if (questions.length === 0) {
            chatbotButtons.append(`<h4 class="chatbot-no-questions">If you have other questions, just message me!</h4>`);
        } else if (questions.length != 6 && questions.length != 0) {
            $('.chatbot-content-buttons-questions').css("margin-top", "1rem");
            chatbotButtons.append(`<h4 class="chatbot-ask-more">Ask more questions below</h4>`);
        }

        let questionList = $('<div class="chatbot-content-buttons-questions"></div>');
        questions.forEach(question => {
            questionList.append(`<h4 class="chatbot-content-buttons-questions-question">${question}</h4>`);
        });

        chatbotButtons.append(questionList);

        setTimeout(() => {
            chatbotButtons.animate({ scrollTop: chatbotButtons.prop("scrollHeight") }, 500);
        }, 100);
    }

    loadQuestions();

    chatbotButtons.on('click', '.chatbot-content-buttons-questions-question', function(){
        let selectedText = $(this).text();

        chatbotButtons.append(`<h4 class="question-selected">${selectedText}</h4>`);

        questions = questions.filter(q => q !== selectedText);

        $('.chatbot-content-buttons-questions').fadeOut(300);
        $('.chatbot-ask-more').fadeOut(300);
        chatbotTyping.fadeIn(300);

        setTimeout(function(){
            chatbotTyping.fadeOut(300, function() {
                chatbotButtons.append(`<h4 class="chatbot-content-buttons-answer">${generateResponse(selectedText)}</h4>`); // Append answer below
                loadQuestions(); // Reload remaining questions
                $('.chatbot-content-buttons-questions').fadeIn(300);
            });
        }, 1500);
    });

    function generateResponse(question) {
        let responses = {
            "Are you currently looking for job opportunities?": "I'm here to assist you with any job-related queries!",
            "Are you available for long-term collaboration?": "Yes! Let's discuss the possibilities.",
            "Have you worked on any mobile app designs?": "Yes, I have experience designing mobile apps with a focus on UI/UX.",
            "Have you worked with cross-functional teams?": "Absolutely! I enjoy collaborating with developers, designers, and stakeholders.",
            "Can I submit a job opportunity for you to consider?": "Of course! Please share the details.",
            "Can you tell me about your experience in frontend development?": "I specialize in frontend development with expertise in HTML, CSS, and JavaScript frameworks."
        };
        return responses[question] || "I'm not sure how to answer that, but I'd love to learn more!";
    }
});