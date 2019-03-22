const questions = [{
    question: "1. Who ran the first four-minute mile?",
    answer: ["Hicham El Guerrouj", "Roger Bannister", "Kenenisa Bekele", "Jesse Owens"],
    correct: "Roger Bannister"
  },
  {
    question: "2. In tennis, what follows a deuce?",
    answer: ["Advantage", "Love", "Set", "30"],
    correct: "Advantage"
  },
  {
    question: "3. How many holes does a standard golf course have?",
    answer: ["9", "10", "15", "18"],
    correct: "18"
  },
  {
    question: "4. What is the name of the prize awarded the National Hockey League champions?",
    answer: ["NHL Champion Trophy", "Gretzky Gold Medal", "Prized Puck", "The Stanley Cup"],
    correct: "The Stanley Cup"
  },
  {
    question: "5. Wayne Gretzky has the most goals scored amongst all NHL players. How many did he score?",
    answer: ["892", "894", "984", "1032"],
    correct: "894"
  },
  {
    question: "6. What sport was the first to be made an event in the Winter Olympic Games?",
    answer: ["Figure skating", "Hockey", "Ski Jump", "Curling"],
    correct: "Figure skating"
  },
  {
    question: "7. When was the first Super Bowl played?",
    answer: ["1957", "1963", "1967", "1975"],
    correct: "1967"
  }
];

var intervalId;
var clockRunning = false;
var time = 11;
var q = 0;
var score = 0;

const startTimer = () => {
  if (!clockRunning) {
    $('.hidden').show();
    $('.answer').show();
    intervalId = setInterval(decrement, 1000);
    clockRunning = true;
    decrement();
  }
}

const decrement = () => {
  time--;
  $("#time-left").text(time);
  if (time === 0) {
    setTimeout(outOfTime, 1);
  }
}

const outOfTime = () => {
  $("#question").html("Out Of Time!<br>The correct answer was: " + questions[q].correct);
  $(".answer").hide();
  clockRunning = false;
  clearInterval(intervalId);
  setTimeout(nextQ, 2500);
}

const nextQ = () => {
  if (q < 6) {
    q++;
    time = 11;
    paste(q);
    startTimer();
  } else {
    $("#question").html(`You got ${score} out of 7 questions correct!`);
    $("#again").show();
  }
}

const paste = q => {
  $("#question").text(questions[q].question);

  $("#answer-one").text("A: " + questions[q].answer[0]);

  $("#answer-two").text("B: " + questions[q].answer[1]);

  $("#answer-three").text("C: " + questions[q].answer[2]);

  $("#answer-four").text("D: " + questions[q].answer[3]);
}

const checkAnswer = pick => {
  if (questions[q].answer[pick] === questions[q].correct) {
    $("#question").text("You got it!");
    score++;
  } else {
    $("#question").html("Bummmer!<br>The correct answer was: " + questions[q].correct);
  }
}

$(document).ready(function() {

  $(".hidden").hide();

  $("#again").hide();

  $("#start").click(function() {
    $('#start').hide();
    paste(q);
    startTimer();
  });

  $("#answer-one").click(function() {
    $(".answer").hide();
    clockRunning = false;
    clearInterval(intervalId);
    checkAnswer(0);
    setTimeout(nextQ, 2500);
  });

  $("#answer-two").click(function() {
    $(".answer").hide();
    clockRunning = false;
    clearInterval(intervalId);
    checkAnswer(1);
    setTimeout(nextQ, 2500);
  });

  $("#answer-three").click(function() {
    $(".answer").hide();
    clockRunning = false;
    clearInterval(intervalId);
    checkAnswer(2);
    setTimeout(nextQ, 2500);
  });

  $("#answer-four").click(function() {
    $(".answer").hide();
    clockRunning = false;
    clearInterval(intervalId);
    checkAnswer(3);
    setTimeout(nextQ, 2500);
  });

  $("#again").click(function() {
    $("#again").hide();
    clockRunning = false;
    clearInterval(intervalId);
    time = 11;
    q = 0;
    score = 0;
    paste(q);
    startTimer();
  });

});
