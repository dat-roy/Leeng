function generateHeader() {
	htmlCode = 
	   "<header class='header grid sticky' id='myHeader'> 																		\n\
			<nav class='header__navbar'>                                                                                        \n\
				<ul class='header__navbar-logo'>                                                                                \n\
					<li>                                                                                                        \n\
						<a href='index.html' id='logo'>                                                                         \n\
							<h1 class='responsive-font--logo'>LEENG</h1>                                                        \n\
						</a>                                                                                                    \n\
					</li>                                                                                                       \n\
				</ul>                                                                                                           \n\
				<ul class='header__navbar-list'>                                                                                \n\
					<li class='header__navbar-item'>                                                                            \n\
						<a href='' class='header__navbar__link'>Giới Thiệu</a>                                                  \n\
					</li>                                                                                                       \n\
					<li class='header__navbar-item'>                                                                            \n\
						<a href='course.html' class='header__navbar__link'>Khóa học</a>                                         \n\
					</li>                                                                                                       \n\
					<li class='header__navbar-item'>                                                                            \n\
						<a href='' class='header__navbar__link'>Blog</a>                                                        \n\
					</li>                                                                                                       \n\
				</ul>                                                                                                           \n\
																																\n\
				<div class='open__mobile-navbar'>                                                                               \n\
					<a href='javascript:void(0);' id='open__mobile-navbar__icon' onclick='openMobileNav()'>                     \n\
						<i class='fa fa-bars'></i>                                                                              \n\
						<!--&#9776;-->                                                                                          \n\
					</a>                                                                                                        \n\
				</div>                                                                                                          \n\
			</nav>                                                                                                              \n\
																																\n\
			<nav class='header__navbar--mobile'>                                                                                \n\
				<ul class='header__navbar-logo--mobile'>                                                                        \n\
					<li>                                                                                                        \n\
						<a href='index.html' id='logo--mobile'>                                                                 \n\
							<h1 class='responsive-font--logo'>LEENG</h1>                                                        \n\
						</a>                                                                                                    \n\
					</li>                                                                                                       \n\
					<li>                                                                                                        \n\
						<div class='close__mobile-navbar'>                                                                      \n\
							<a href='javascript:void(0);' id='close__mobile-navbar__icon' onclick='closeMobileNav()'>           \n\
								<i class='fa fa-close'></i>                                                                     \n\
								<!--&times;-->                                                                                  \n\
							</a>                                                                                                \n\
						</div>                                                                                                  \n\
					</li>                                                                                                       \n\
				</ul>                                                                                                           \n\
				<ul class='header__navbar-list--mobile'>                                                                        \n\
					<li class='header__navbar-item--mobile'>                                                                    \n\
						<a href='' class='header__navbar__link--mobile'>Giới Thiệu</a>                                          \n\
					</li>                                                                                                       \n\
					<li class='header__navbar-item--mobile'>                                                                    \n\
						<a href='course.html' class='header__navbar__link--mobile'>Khóa học</a>                                 \n\
					</li>                                                                                                       \n\
					<li class='header__navbar-item--mobile'>                                                                    \n\
						<a href='' class='header__navbar__link--mobile'>Blog</a>                                                \n\
					</li>                                                                                                       \n\
				</ul>                                                                                                           \n\
			</nav>                                                                                                         		\n\
		</header>                                                                                                                ";
	document.querySelector("body").insertAdjacentHTML("afterbegin",htmlCode);
}
generateHeader();

function generateFlashcardTab() {
	var index;
	for (index in FlashcardForm)
	{	
		var htmlCode = 
			"<div class='js-tab flashcard'> \n\
				<header class='tab__header'>Flashcard</header> \n\
				<div class='tab__body'> \n\
					<div class='flashcard__form' onclick = 'flipFlashcard()'> \n\
						<div class='flashcard__inner'> \n\
							<div class='flashcard__front'>	\n\
								<div class='flashcard__image'>"
								+	"<img src='" + FlashcardForm[index].front.imageSrc + "'>"
							+	"</div> \n\
								<div class='flashcard__word'> \n\
								<span class='word'>" + FlashcardForm[index].front.word + "</span>"
							+	"<span class='word_type'>" + FlashcardForm[index].front.wordType + "</span>"
							+	"<div class='pronunciation'> \n\
										<div class='speaker-button' onclick='playAudio(&#39;" + FlashcardForm[index].front.audioName + "&#39;)'></div> \n\
										<span class='phonetics'>" + FlashcardForm[index].front.phonetics + "</span> \n\
									</div>	\n\
									<span class='example'>"
										+ FlashcardForm[index].front.example +
									"</span> \n\
								</div> \n\
							</div> \n\
							<div class='flashcard__back'> \n\
								<span class='meaning'>" + FlashcardForm[index].back.meaning + "</span> \n\
							</div> \n\
						</div> \n\
					</div> \n\
				</div> \n\
				<div class='tab__footer'> \n\
					<div class='button-group'> \n\
						<button class='btn-next' onclick='nextTab()'>Next</button> \n\
					</div> \n\
				</div> \n\
			</div>";
		document.querySelector(".vocabulary-course").insertAdjacentHTML("beforeend",htmlCode);		

		var audioCode =
			"<audio id='" + FlashcardForm[index].front.audioName + "'>	\n\
				<source src='./assets/audio/" + FlashcardForm[index].front.audioName + ".mp3' type='audio/ogg'>	\n\
				Your browser does not support the audio element.	\n\
			</audio>";
		document.querySelector("body").insertAdjacentHTML("beforeend",audioCode);
	}
}
generateFlashcardTab();

function generateListenQuizTab() {
	var index;
	for (index in ListenQuizForm)
	{
		var htmlCode = 
			"<div class='js-tab quiz listen-quiz'> \n\
				<header class='tab__header'>What can you hear?</header> \n\
				<div class='tab__body'> \n\
					<div class='audio-button' onclick='playAudio(&#39;" + ListenQuizForm[index].audioName +"&#39;)'></div> \n\
					<input type='text' class='listen-quiz-answer'> \n\
				</div> \n\
				<div class='tab__footer'> \n\
					<div class='button-group'> \n\
						<button class='btn-check' onclick='checkListenQuizAnswer(" + index + ")'>Check</button> \n\
						<button class='btn-next btn-disabled' onclick='nextTab()'> Next </button> \n\
					</div> \n\
				</div> \n\
			</div>";
		document.querySelector(".vocabulary-course").insertAdjacentHTML("beforeend",htmlCode);
	}
}
generateListenQuizTab();

function generateQuizTab() {
	var index;
	for (index in QuizForm)
	{
		var htmlCode = 
			"<div class='js-tab quiz'> \n\
				<header class='tab__header'>Quiz</header> \n\
				<div class='tab__body'> \n\
					<div class='quiz__question'>"
					+	QuizForm[index].question +
					"</div>	\n\
					<div class='quiz__choices'> \n\
						<input type='radio' id='A-" + index + "' name='quiz' value='A'> \n\
						<label for='A-" + index + "'>" + QuizForm[index].choices.A + "</label> \n\
						<input type='radio' id='B-" + index + "' name='quiz' value='B'> \n\
						<label for='B-" + index + "'>" + QuizForm[index].choices.B + "</label> \n\
						<input type='radio' id='C-" + index + "' name='quiz' value='C'> \n\
						<label for='C-" + index + "'>" + QuizForm[index].choices.C + "</label> \n\
						<input type='radio' id='D-" + index + "'name='quiz' value='D'> \n\
						<label for='D-" + index + "'>" + QuizForm[index].choices.D + "</label> \n\
					</div> \n\
				</div> \n\
				<div class='tab__footer'> \n\
					<div class='button-group'> \n\
						<button class='btn-check' onclick='checkQuizAnswer(" + index + ")'>Check</button> \n\
						<button class='btn-next btn-disabled' onclick='nextTab()'>Next</button> \n\
					</div> \n\
				</div> \n\
			</div>";
		document.querySelector(".vocabulary-course").insertAdjacentHTML("beforeend",htmlCode);
	}
}
generateQuizTab();

document.querySelector(".js-tab:last-child").classList.add("last-tab");


/* ____ Check Answer ____ */
function checkQuizAnswer(i) {
	var answerContainers = document.querySelector('.quiz .quiz__choices');
	var checkedChoice = (answerContainers.querySelector("input[type='radio']:checked")||{});
	var userAnswer = checkedChoice.value;
	var nextButton = document.querySelector(".btn-disabled");
	
	if (userAnswer == QuizForm[i].correctAnswer)
	{
		nextButton.classList.remove("btn-disabled");
		let c = answerContainers.querySelector("input[type='radio']:checked + label");

		checkedChoice.checked = false;
		c.style.backgroundColor = "#c8ffd5";
		c.style.border = "1px solid #3ae461";
	}
	else {
		let c = answerContainers.querySelector("input[type='radio']:checked + label");

		checkedChoice.checked = false;
		c.style.backgroundColor = "#ffd3d3";
		c.style.border = "1px solid #ff7e7f";
	}
}

function checkListenQuizAnswer(i) {
	var inputAnswer = document.getElementsByClassName("listen-quiz-answer");
	var nextButton = document.querySelector(".btn-disabled");
	if (inputAnswer[i].value.toLowerCase() == ListenQuizForm[i].key)
	{
		nextButton.classList.remove("btn-disabled");
		if (inputAnswer[i].classList.contains("wrong")) 
			inputAnswer[i].classList.remove("wrong");
		inputAnswer[i].classList.add("correct");
	}
	else {
		if (inputAnswer[i].classList.contains("correct")) 
			inputAnswer[i].classList.remove("correct");
		inputAnswer[i].classList.add("wrong");
	}
}	