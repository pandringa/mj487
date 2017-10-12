$window = $(window);
var controller = new ScrollMagic.Controller();


var h = -1 * $window.height();


/***********************************************
**              HOME ANIMATIONS               **
************************************************/

// Movement between home-1 and home-2
new ScrollMagic.Scene({
  triggerElement: '.slide.home-2',
  duration: $window.height() + 100,
  offset: -0.5*$window.height()
})
.setTween(new TimelineMax ()
  .add([
    TweenMax.to(".ground", 1, {x: -1500}),
    TweenMax.to("img.laptop", 1, {y: -100}),
    TweenMax.to(".cloud-1", 1, {x: -100, y: h/8}),
    TweenMax.to(".cloud-2", 1, {x: -200, y: h/8}),
    TweenMax.to(".cloud-3", 1, {x: 0, y: h/4}),
    TweenMax.to(".cloud-4", 1, {x: 0, y: h/4}),
    TweenMax.to(".cloud-5", 1, {x: 0, y: h/4}),
    TweenMax.to(".cloud-6", 1, {x: 100, y: h/8}),
    TweenMax.to(".cloud-7", 1, {x: 50, y: h/16}),
    TweenMax.to(".server", 1, {css: {opacity: 1, scale: 1}}),
  ]))
.setPin('img.laptop', {pushFollowers: false})
.addIndicators()
.addTo(controller);

// Make arrow appear slightly later
new ScrollMagic.Scene({
  triggerElement: '.slide.home-2 .slide-inner',
  duration: 100
})
.setTween(new TweenMax.to('.arrow', 1, {opacity: 1}))
.addIndicators()
.addTo(controller);

// Hide Arrow and Laptop
new ScrollMagic.Scene({
  triggerElement: '.slide.home-3',
  duration: 250,
  offset: -0.5*$window.height() + 100
})
.setTween(new TimelineMax ()
  .add([
    // TweenMax.to(".cloud-1", 1, {y: h/1.5, ease: Linear.EaseNone}),
    // TweenMax.to(".cloud-2", 1, {y: h/1.5, ease: Linear.EaseNone}),
    // TweenMax.to(".cloud-3", 1, {y: h/1.5, ease: Linear.EaseNone}),
    // TweenMax.to(".cloud-4", 1, {y: h/1.5, ease: Linear.EaseNone}),
    // TweenMax.to(".cloud-5", 1, {y: h/1.5, ease: Linear.EaseNone}),
    // TweenMax.to(".cloud-6", 1, {y: h/1.5, ease: Linear.EaseNone}),
    // TweenMax.to(".cloud-7", 1, {y: h/1.5, ease: Linear.EaseNone}),
    TweenMax.to(".arrow", 1, {css: {opacity: 0}}),
    TweenMax.to(".laptop", 1, {css: {opacity: 0}}),
  ]))
.addIndicators()
.addTo(controller);

// Show fufillment center
new ScrollMagic.Scene({
  triggerElement: '.slide.home-3',
  duration: $window.height()/2,
})
.setTween(new TimelineMax ()
  .add([
    TweenMax.to(".fufillment-center", 1, {y: -1 * $('.fufillment-center').height()}),
  ]))
.addIndicators()
.addTo(controller);

// Show arrow
new ScrollMagic.Scene({
  triggerElement: '.slide.home-3',
  offset: $window.height()/4,
  duration: $window.height()/4
})
.setTween(new TimelineMax ()
  .add([
    TweenMax.to(".fufillment-arrow", 1, {css: {opacity: 1}}),
  ]))
.addIndicators()
.addTo(controller);

// Hide arrow, server, clouds, and fufillment center
new ScrollMagic.Scene({
  triggerElement: '.slide.home-3',
  offset: 3*$window.height()/4,
  duration: $window.height()/2
})
.setTween(new TimelineMax ()
  .add([
    TweenMax.to(".cloud-1", 1, {y: h/2, ease: Linear.EaseNone}),
    TweenMax.to(".cloud-2", 1, {y: h/2, ease: Linear.EaseNone}),
    TweenMax.to(".cloud-3", 1, {y: h/2, ease: Linear.EaseNone}),
    TweenMax.to(".cloud-4", 1, {y: h/2, ease: Linear.EaseNone}),
    TweenMax.to(".cloud-5", 1, {y: h/2, ease: Linear.EaseNone}),
    TweenMax.to(".cloud-6", 1, {y: h/2, ease: Linear.EaseNone}),
    TweenMax.to(".cloud-7", 1, {y: h/2, ease: Linear.EaseNone}),
    TweenMax.to(".fufillment-arrow", 1, {css: {opacity: 0}}),
    TweenMax.to(".server", 1, {y: h/2, ease: Linear.EaseNone})
  ]))
.addIndicators()
.addTo(controller);

/***********************************************
**           WAREHOUSE ANIMATIONS             **
************************************************/

// Transition to warehouse colors
new ScrollMagic.Scene({
  triggerElement: "#warehouse",
  duration: 200,
  offset: -100
})
.setTween(new TimelineMax ()
  .add([
    TweenMax.to(".fufillment-center", 1, {css: {scale: 10, opacity: 0, top: '50%'}}),
    new TweenMax.to('body', 1, {backgroundColor: '#848484'})
  ]))
.addIndicators()
.addTo(controller);

// Show Kiva Robot
new ScrollMagic.Scene({
  triggerElement: ".slide.warehouse-1",
  duration: $window.height()/2,
})
.setTween(new TimelineMax ()
  .add([
    new TweenMax.to(".robot", 1, {css: {
      bezier:{
        type: 'thru',
        curviness: 2,
        autoRotate: false,
        values: [
            {
                left: 200,
                top: 100,
            },
            {
                left: 800,
                top: 200,
            },
            {
                left: 995,
                top: 475,
            }
        ],
      }}
    })
  ]))
.addIndicators()
.addTo(controller);

// Pin shelf
new ScrollMagic.Scene({
  triggerElement: ".slide.warehouse-1",
  duration: $window.height(),
  offset: $window.height()/2
})
.setPin('.single-shelf')
.addIndicators()
.addTo(controller)

// Move robot, introduce bin
new ScrollMagic.Scene({
  triggerElement: ".slide.warehouse-2",
  duration: $window.height() / 2,
  offset: $window.height() / 2,
})
.setTween(new TimelineMax ()
  .add([
    new TweenMax.to(".robot", 1, {css: {
      bezier:{
        type: 'thru',
        curviness: 1.25,
        autoRotate: false,
        values: [
            {
                left: 1100,
                top: 555,
            },
            {
              left: 1400,
              top: 525
            },
            {
              left: 1500,
              top: 500
            },
        ]
      }}
    }),
    new TweenMax.to(".crate", 1, {css: {
      bezier:{
        type: 'thru',
        curviness: 1.25,
        autoRotate: false,
        values: [
            {
                left: 200,
                top: 700,
            },
            {
              left: 1000,
              top: 825
            },
            {
              left: 900,
              top: 1000
            },
        ]
      }}
    }),
  ]))
.addIndicators()
.addTo(controller)


//Introduce Box, Hide Bin
new ScrollMagic.Scene({
  triggerElement: ".slide.warehouse-2",
  duration: $window.height() / 2,
  offset: $window.height() / 2,
})
.setTween(new TimelineMax ()
  .add([
    new TweenMax.to(".fufillment-center", 1, {css: {scale: 10, opacity: 0, top: '50%'}}),
    new TweenMax.to('body', 1, {backgroundColor: '#848484'})
  ]))
.addIndicators()
.addTo(controller);

// Move box, transition through colors
new ScrollMagic.Scene({
  triggerElement: ".slide.warehouse-3",
  duration: $window.height(),
  offset: $window.height()/2
})
.setTween(new TimelineMax ()
  .to(".box", 2, {css: {
    bezier:{
      type: 'thru',
      curviness: 1,
      autoRotate: false,
      values: [
          {
            left: 900,
            top: 600
          },
          {
            left: 400,
            top: 700
          },
          {
            left: $('.truck-1').offset().left - 65,
            top: 800
          },
      ],
    }}
  })
  .to(".box", 1, {css: {scale: 0.5, top: 1150}})
  .to(".box", 0.01, {css: {opacity: 0}})
  .addCallback(function(){
    $('.box .open').toggleClass('active');
    $('.box .closed').toggleClass('active');
  }, 0.25)
  .addCallback(function(){
    $('.box .closed').toggleClass('active');
    $('.box .labeled').toggleClass('active');
  }, 0.5)
)
.addIndicators()
.addTo(controller);

// Pin truck
var truckPin = $('.regional-center').offset().top - 50 - $('.truck.truck-1').offset().top;
new ScrollMagic.Scene({
  triggerElement: ".truck.truck-1",
  duration: truckPin,
  offset: -40
})
.setPin(".truck.truck-1")
.addIndicators()
.addTo(controller);

// Move truck left
new ScrollMagic.Scene({
  triggerElement: ".slide.warehouse-4",
  duration: $window.height()/4,
  offset: 3*$window.height()/4
})
.setTween(new TimelineMax()
  .to(".truck.truck-1", 1, {css: {bezier:{
    type: 'thru',
    curviness: 2,
    autoRotate: false,
    values: [
        {
          x: 0,
          y: 50
        },
        {
          x: -200,
          y: 50
        }
    ]
}}}))
.addIndicators()
.addTo(controller);

/***********************************************
**             OUTSIDE ANIMATIONS             **
************************************************/

// Transition to outside colors
new ScrollMagic.Scene({
  triggerElement: "#outside",
  duration: 200,
  offset: -100
})
.setTween(new TimelineMax ()
  .add([
    new TweenMax.to('body', 1, {backgroundColor: '#5FB156'}),
    new TweenMax.to('.road', 1, {backgroundColor: '#848484'})
  ])
)
.addIndicators()
.addTo(controller);

// Plane Across Screen
new ScrollMagic.Scene({
  triggerElement: ".slide.outside-1",
  duration: $window.height()/2,
  offset: $window.height()/2
})
.setTween(new TweenMax.to('.plane', 1, {x: $window.width()+300}))
.addIndicators()
.addTo(controller);

// Drone leaving distribution center
var homex = $('.house').offset().left - $('.drone').offset().left + $('.house').width()/2 - 50;
var homey = $('.house').offset().top - $('.drone').offset().top + $('.house').height();
var curvePath = {css: {bezier:{
    type: 'thru',
    curviness: 2,
    autoRotate: false,
    values: [
        {
          x: 0,
          y: 50
        },
        {
          x: homex,
          y: homey-50
        },
        {
          x: homex,
          y: homey
        }
    ]
}}}
new ScrollMagic.Scene({
  triggerElement: ".slide.outside-2",
  duration: $window.height(),
  offset: $window.height()/2
})
.setTween(new TimelineMax ()
  .add([
    new TweenMax.to('.drone', 2, curvePath),
    new TweenMax.to('.drone-box', 2, curvePath)
  ])
  .to('.drone', 1, {css: {bezier:{
    type: 'thru',
    curviness: 1,
    timeResolution: 8,
    autoRotate: false,
    values: [
        {
          x: homex,
          y: homey-50
        },
        {
          x: $window.width()-400,
          y: homey-100
        }
    ]
  }}})
)
.addIndicators()
.addTo(controller);

/***********************************************
**             News Quiz                      **
************************************************/
$.ajax({
  method: 'GET',
  url: 'quiz.json',
  datatype: 'json'
})
.done(setUpQuiz)
.fail((error) => {
  console.log("Quiz didn't load or JSON is wrong");
});

function shuffle(arr){
  // From https://stackoverflow.com/questions/6274339/how-can-i-shuffle-an-array
  for (let i = arr.length; i; i--) {
    let j = Math.floor(Math.random() * i);
    [arr[i - 1], arr[j]] = [arr[j], arr[i - 1]];
  }
}

function setUpQuiz(questions) {
  for(let q of questions){
    shuffle(q.possible_answers)
  }
  $('#quiz-container').quiz(questions, [
    "You got zero out of four correct. Why don't you just <a href='#home'>scroll to the top</a> and read it again...",
    "You got one out of four correct. At least you learned <i>something</i>.",
    "You got two out of four correct. Not too shabby, but you've definitely got room to learn.",
    "You got three out of four correct. That's pretty good – consider yourself an Amazon Expert.",
    "You got four out of four correct: you're pretty much the next Jeff Bezos!"
  ], {});
  $('.how_you_did').hide();
  $('ul.quiz').prepend(`
    <li class="question_container row-fluid question_-1 current initial">
      <div class="center-container">
        <div class="centered">
          <h1 class="title">How well do you know how Amazon works?</h1>
          <button class="next">Start Quiz ></button>
        </div>
      </div>
    </li>
  `);
  $('ul.quiz').append(`
    <li class="question_container row-fluid question_${questions.length} answers">
      <div class="center-container">
        <div class="centered">
        </div>
      </div>
    </li>
  `)
  var currentSlide = -1;
  $('button.next').on('click', (evt) => {
    if(currentSlide == -1){
      $('.next.hidden').removeClass('hidden');
    }
    if(currentSlide == questions.length-2){
      $('.next-bottom').text('Finish >')
    }
    if(currentSlide == questions.length-1){
      $('.how_you_did').appendTo('li.answers .centered');
      $('.how_you_did').show();
      $('.next-bottom').addClass('hidden');
    }
    $('.question_'+currentSlide).addClass('previous');
    $('.question_'+currentSlide).removeClass('current');
    currentSlide ++;
    $('.question_'+currentSlide).addClass('current');
  });
}