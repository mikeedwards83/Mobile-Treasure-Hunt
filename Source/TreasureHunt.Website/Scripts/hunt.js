
var questions =
[
{
    question: "Something",
    answer: "cats",
    lat: "51.37757",
    long: "-2.356964"
},
{
    question: "Something 2",
    answer: "cats 3",
    lat: "51.37757",
    long: "-1.356964"
}

];

$(function () {
    var options = {
        distanceContainer: $("#distanceContainer"),
        questionContainer: $("#questionContainer"),
        correctContainer: $("#correctContainer"),
        distance: $("#distance"),
        question: $("#question"),
        answer: $("#answer"),
        button: $("#submit"),
        mistake: $("#mistake"),
        nextButton: $("#next")
    };

    var state = {
        currentQuestion: 0
    };

    function SetupDistance() {
        options.questionContainer.css("display", "none");
        options.correctContainer.css("display", "none");
        options.distanceContainer.css("display", "block");
        options.distance.text("Calculating");
        CoordUpdate();
    }

    function CoordUpdate() {

        if (navigator.geolocation) {
            var updateTimer = navigator.geolocation.watchPosition(success, error, { enableHighAccuracy: true, maximumAge: 5000 });
        } else {
            error('not supported');
        }
    }
    function error(msg) {
        alert(msg);
    }

    function success(position) {
        var p1 = new LatLon(position.coords.latitude, position.coords.longitude);

        var currentQ = questions[state.currentQuestion];
        var p2 = new LatLon(currentQ.lat, currentQ.long);

        var dist = p1.distanceTo(p2) * 1000;
        options.distance.text(dist);
        if (dist < 50) {
            SetupQuestion(0);
        }
    }
    function SetupQuestion() {
        options.distanceContainer.css("display", "none");
        options.questionContainer.css("display", "block");
        options.mistake.css("display", "none");
        var currentQ = questions[state.currentQuestion];

        options.question.text(currentQ.question);
    }
    function AnswerQuestion() {
        var currentQ = questions[state.currentQuestion];
        var answer = options.answer.val();
        answer = jQuery.trim(answer);
        if (answer == currentQ.answer) {
            state.currentQuestion = state.currentQuestion + 1;
            CorrectAnimation();
            if (state.currentQuestion == questions.length) {
                $.mobile.changePage("/Complete");
            }
        } else {
            options.mistake.css("display", "block");
        }
    }

    function CorrectAnimation() {
        options.distanceContainer.css("display", "none");
        options.questionContainer.css("display", "none");
        options.correctContainer.css("opacity", "0");
        options.correctContainer.css("display", "block");

        options.correctContainer.animate({
            opacity: 100
        }, 15000);

    }

    function Next() {
        SetupDistance();
    }


    options.button.click(function () { AnswerQuestion() });
    options.nextButton.click(function () { SetupDistance() });

    SetupDistance();
    SetupQuestion();
    //  CorrectAnimation();

});
