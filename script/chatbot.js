$(document).ready(function(){
    $(document).on('click', '#letsChat', function () {
        $(this).prop("disabled", true);
        $('#chatBot').load('./components/chatbot.html', function() {
            $('.chatbot').css({
                "display": "block",
                "top": "100vh"
            }).animate({ top: "30vh" }, 500);

            setTimeout(function () {
                $('.chatbot-close').addClass('animate-rotate');
            }, 700);
            
            loadQuestions();
        });
    });

    $(document).on('input', '.chatbot-getname-input', function() {
        var inputName = $(this).val();

        $('.chatbot-getname-submit').show();

        if (!inputName) {
            $('.chatbot-getname-submit').fadeOut();
        }
    });

    $(document).on('click', '.chatbot-getname-submit', function(){
        let name = $('.chatbot-getname-input').val().trim();

        $('.chatbot-name').text(name);

        let storedNames = getLocalArrayNames();

        let namesArray = storedNames ? storedNames.split(", ") : [];
        if (!namesArray.includes(name)) {
            namesArray.push(name);
        }

        setLocalArrayNames(namesArray);

        setTimeout(()=>{
            $('.chatbot-getname').hide();
            $('.chatbot-content').css("display", "flex");
        }, 500);
    });

    let questions = [
        "Are you currently looking for job opportunities?",
        "Are you available for long-term collaboration?",
        "Have you worked on any mobile app designs?",
        "Have you worked with cross-functional teams?",
        "Can I submit a job opportunity for you to consider?",
        "Can you tell me about your experience in frontend development?"
    ];

    let allQuestions = [...questions];

    function loadQuestions() {
        $('.chatbot-content-buttons').find('.chatbot-content-buttons-questions').remove();

        if (questions.length === 0) {
            $('.chatbot-content-buttons').append(`<h4 class="chatbot-no-questions">If you have other questions, just message me!</h4>`);
        } else if (questions.length != 6 && questions.length != 0) {
            $('.chatbot-content-buttons-questions').css("margin-top", "1rem");
            $('.chatbot-content-buttons').append(`<h4 class="chatbot-ask-more">Ask more questions below</h4>`);
        }

        let questionList = $('<div class="chatbot-content-buttons-questions"></div>');
        questions.forEach(question => {
            questionList.append(`<h4 class="chatbot-content-buttons-questions-question">${question}</h4>`);
        });

        $('.chatbot-content-buttons').append(questionList);

        setTimeout(() => {
            $('.chatbot-content-buttons').animate({ scrollTop: $('.chatbot-content-buttons').prop("scrollHeight") }, 500);
        }, 100);
    }

    $(document).on('click', '.chatbot-content-buttons-questions-question', function(){
        let selectedText = $(this).text();

        $('.chatbot-content-buttons').append(`<h4 class="question-selected">${selectedText}</h4>`);

        questions = questions.filter(q => q !== selectedText);

        $('.chatbot-content-buttons-questions').fadeOut(300);
        $('.chatbot-content-try').fadeOut(300);
        $('.chatbot-ask-more').fadeOut(300);
        $('.chatbot-content-typing').fadeIn(300);

        setTimeout(function(){
            $('.chatbot-content-typing').fadeOut(300, function() {
                $('.chatbot-content-buttons').append(`<h4 class="chatbot-content-buttons-answer">${generateResponse(selectedText)}</h4>`); // Append answer below
                loadQuestions();
                $('.chatbot-content-buttons-questions').fadeIn(300);
            });
        }, 1500);
    });

    $(document).on('click', '.chatbot-close', function() {
        questions = [...allQuestions];
        $('#letsChat').prop("disabled", false);

        $('.chatbot').animate(
            { top: "100vh" }, // slide it down
            {
                duration: 800,
                complete: function () {
                    $(this).css("display", "none");
                }
            }
        );        
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