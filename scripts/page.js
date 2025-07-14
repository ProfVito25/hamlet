//=========================================
// File name: page_NNNNN.js
//-----------------------------------------
// Project : QuizFaber 4.1.9
// Licence : GNU General Public License v3.0
// Author  : Luca Galli
// Email   : info@quizfaber.com
//-----------------------------------------
// Script for NNNNN-th question
//=========================================

var allInitQuestionFunctions = new Array (
    InitQuestion1,
    InitQuestion2,
    InitQuestion3,
    InitQuestion4,
    InitQuestion5,
    InitQuestion6,
    InitQuestion7,
    InitQuestion8,
    InitQuestion9,
    InitQuestion10,
    InitQuestion11,
    InitQuestion12,
    InitQuestion13,
    InitQuestion14,
    InitQuestion15,
    InitQuestion16,
    InitQuestion17,
    InitQuestion18,
    InitQuestion19,
    InitQuestion20,
    InitQuestion21,
    InitQuestion22,
    InitQuestion23,
    InitQuestion24,
    InitQuestion25,
    InitQuestion26,
    InitQuestion27,
    InitQuestion28,
    InitQuestion29,
    InitQuestion30,
    InitQuestion31,
    InitQuestion32,
    InitQuestion33,
    InitQuestion34,
    InitQuestion35,
    InitQuestion36,
    InitQuestion37,
    InitQuestion38,
    InitQuestion39,
    InitQuestion40,
    InitQuestion41,
    InitQuestion42,
    InitQuestion43,
    InitQuestion44,
    InitQuestion45,
    InitQuestion46,
    InitQuestion47,
    InitQuestion48,
    InitQuestion49,
    InitQuestion50,
    InitQuestion51,
    InitQuestion52,
    InitQuestion53,
    InitQuestion54,
    InitQuestion55,
    InitQuestion56,
    InitQuestion57,
    InitQuestion58,
    InitQuestion59,
    InitQuestion60,
    InitQuestion61,
    InitQuestion62,
    InitQuestion63,
    InitQuestion64,
    InitQuestion65,
    InitQuestion66,
    InitQuestion67,
    InitQuestion68,
    InitQuestion69,
    InitQuestion70,
    InitQuestion71,
    InitQuestion72,
    InitQuestion73,
    InitQuestion74,
    InitQuestion75,
    InitQuestion76,
    InitQuestion77,
    InitQuestion78,
    InitQuestion79,
    InitQuestion80,
    InitQuestion81,
    InitQuestion82,
    InitQuestion83,
    InitQuestion84,
    InitQuestion85,
    InitQuestion86,
    InitQuestion87,
    InitQuestion88,
    InitQuestion89,
    InitQuestion90,
    InitQuestion91,
    InitQuestion92,
    InitQuestion93,
    InitQuestion94,
    InitQuestion95,
    InitQuestion96,
    InitQuestion97,
    InitQuestion98,
    InitQuestion99,
    InitQuestion100,
    InitQuestion101,
);



$(document).ready(function ()
{
	const questionIndex = 0;
	const questionTime = 0;

	PageLoad(questionIndex, questionTime);

	
});

$(window).on("beforeunload", function ()
{
	PageUnload();
	window.scrollTo(0, 0);
});

$(window).on("scroll", function ()
{
	PageOnScroll();
});


/* Code generated function */
function InitQuestion1()
{
    const type = QMAKE_MULTIANS;
    const questionIndex = 0;
    var weight = DecodeNumber('kgn5XqG2Q/k=', 646, 0, 99999);
    var numOfAnswers = 4;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('kgn5XqG2Q/k=', 646, -1000, 1000),DecodeDecimal('depKc2BzJZU=', 646, -1000, 1000),DecodeDecimal('depKc2BzJZU=', 646, -1000, 1000));
    question.answers.length = 0;
    question.num = 1;
    question.isSingleAns = false;
    question.shortTextQuestion = "Who is the first character to see the ghost? ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('kgn5XqG2Q/k=', 648, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "Marcellus, the Danish soldier";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('9voGwk7Z8I0=', 650, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "Horatio, the scholar friend";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('I82rTX1aHpw=', 652, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, 1, 0, '');
    answer3.shortTextAnswer = "Bernardo, the first watchman";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('I82rTX1aHpw=', 654, -1, 1);
    if (valuation4 === -2) PrintWrongKeyword(questionIndex);
    var choice4 = GetMultipleAnswerChoice(questionIndex, 3);
    if (choice4 === 1) question.noChoice = false;
    var answer4 = new Answer(choice4, valuation4, 1, 0, '');
    answer4.shortTextAnswer = "Francisco, the palace guard";
    answer4.shortTextRemark = "";
    question.answers.push(answer4);
    return question;

}
/* Code generated function */
function InitQuestion2()
{
    const type = QMAKE_MULTIANS;
    const questionIndex = 1;
    var weight = DecodeNumber('1m8iBHlTXto=', 1015, 0, 99999);
    var numOfAnswers = 4;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('1m8iBHlTXto=', 1015, -1000, 1000),DecodeDecimal('BO6lZLEYgjs=', 1015, -1000, 1000),DecodeDecimal('BO6lZLEYgjs=', 1015, -1000, 1000));
    question.answers.length = 0;
    question.num = 2;
    question.isSingleAns = false;
    question.shortTextQuestion = "What is the ghost wearing when it appears?";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('1m8iBHlTXto=', 1017, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "A burial robe and chains";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('9TfRSJFTQ8Y=', 1019, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "A long and tattered cloak";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('dytQUkNA8v8=', 1021, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, 1, 0, '');
    answer3.shortTextAnswer = "Armor from recent battles";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('dytQUkNA8v8=', 1023, -1, 1);
    if (valuation4 === -2) PrintWrongKeyword(questionIndex);
    var choice4 = GetMultipleAnswerChoice(questionIndex, 3);
    if (choice4 === 1) question.noChoice = false;
    var answer4 = new Answer(choice4, valuation4, 1, 0, '');
    answer4.shortTextAnswer = "A crown and royal sash";
    answer4.shortTextRemark = "";
    question.answers.push(answer4);
    return question;

}
/* Code generated function */
function InitQuestion3()
{
    const type = QMAKE_MULTIANS;
    const questionIndex = 2;
    var weight = DecodeNumber('fZ/+uN3zbM8=', 1025, 0, 99999);
    var numOfAnswers = 4;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('fZ/+uN3zbM8=', 1025, -1000, 1000),DecodeDecimal('f98ktyAIz7E=', 1025, -1000, 1000),DecodeDecimal('f98ktyAIz7E=', 1025, -1000, 1000));
    question.answers.length = 0;
    question.num = 3;
    question.isSingleAns = false;
    question.shortTextQuestion = "Why is Denmark preparing for war?";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('fZ/+uN3zbM8=', 1027, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "The ghost ordered defense";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('+eV/Qcpqvr8=', 865, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "Fortinbras threatens invasion";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('+eV/Qcpqvr8=', 867, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, 1, 0, '');
    answer3.shortTextAnswer = "Claudius demands new land";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('NV6Vk6x6nzo=', 869, -1, 1);
    if (valuation4 === -2) PrintWrongKeyword(questionIndex);
    var choice4 = GetMultipleAnswerChoice(questionIndex, 3);
    if (choice4 === 1) question.noChoice = false;
    var answer4 = new Answer(choice4, valuation4, 1, 0, '');
    answer4.shortTextAnswer = "Norway has declared revenge";
    answer4.shortTextRemark = "";
    question.answers.push(answer4);
    return question;

}
/* Code generated function */
function InitQuestion4()
{
    const type = QMAKE_MULTIANS;
    const questionIndex = 3;
    var weight = DecodeNumber('+2duUYRgAFI=', 230, 0, 99999);
    var numOfAnswers = 4;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('+2duUYRgAFI=', 230, -1000, 1000),DecodeDecimal('K53bdm34EFo=', 230, -1000, 1000),DecodeDecimal('K53bdm34EFo=', 230, -1000, 1000));
    question.answers.length = 0;
    question.num = 4;
    question.isSingleAns = false;
    question.shortTextQuestion = "Who is Fortinbras?";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('+2duUYRgAFI=', 232, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "An ambassador from England";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('M7UZ0QE3rpA=', 234, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "Prince of Norway and warrior";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('M7UZ0QE3rpA=', 236, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, 1, 0, '');
    answer3.shortTextAnswer = "A noble in Claudius’s court";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('tHEezMneIWo=', 238, -1, 1);
    if (valuation4 === -2) PrintWrongKeyword(questionIndex);
    var choice4 = GetMultipleAnswerChoice(questionIndex, 3);
    if (choice4 === 1) question.noChoice = false;
    var answer4 = new Answer(choice4, valuation4, 1, 0, '');
    answer4.shortTextAnswer = "A ghost of Denmark’s past";
    answer4.shortTextRemark = "";
    question.answers.push(answer4);
    return question;

}
/* Code generated function */
function InitQuestion5()
{
    const type = QMAKE_MULTIANS;
    const questionIndex = 4;
    var weight = DecodeNumber('pP5YRFIB9UY=', 240, 0, 99999);
    var numOfAnswers = 4;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('pP5YRFIB9UY=', 240, -1000, 1000),DecodeDecimal('VxRXE0qBkeU=', 240, -1000, 1000),DecodeDecimal('VxRXE0qBkeU=', 240, -1000, 1000));
    question.answers.length = 0;
    question.num = 5;
    question.isSingleAns = false;
    question.shortTextQuestion = "How does Claudius justify marrying Gertrude? ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('pP5YRFIB9UY=', 242, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "It unites the royal bloodlines";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('YBhBVuaSunk=', 244, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "He loved her long before";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('qlkHvaPrbfE=', 246, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, 1, 0, '');
    answer3.shortTextAnswer = "It brings peace to the kingdom";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('tflM5nxkJPE=', 248, -1, 1);
    if (valuation4 === -2) PrintWrongKeyword(questionIndex);
    var choice4 = GetMultipleAnswerChoice(questionIndex, 3);
    if (choice4 === 1) question.noChoice = false;
    var answer4 = new Answer(choice4, valuation4, 1, 0, '');
    answer4.shortTextAnswer = "It balances mourning with joy";
    answer4.shortTextRemark = "";
    question.answers.push(answer4);
    return question;

}
/* Code generated function */
function InitQuestion6()
{
    const type = QMAKE_MULTIANS;
    const questionIndex = 5;
    var weight = DecodeNumber('TQ/Ct/hIVaQ=', 250, 0, 99999);
    var numOfAnswers = 4;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('TQ/Ct/hIVaQ=', 250, -1000, 1000),DecodeDecimal('evg+0qtgvbA=', 250, -1000, 1000),DecodeDecimal('evg+0qtgvbA=', 250, -1000, 1000));
    question.answers.length = 0;
    question.num = 6;
    question.isSingleAns = false;
    question.shortTextQuestion = "What advice does Claudius give Hamlet?";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('VIXJVh52n3Y=', 252, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "Stop mourning his father";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('kkn9i65X/xo=', 613, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "Return to Wittenberg quickly";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('dplwZL3NPyY=', 615, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, 1, 0, '');
    answer3.shortTextAnswer = "Prepare to rule the kingdom";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('MDhBi5n/ZAk=', 617, -1, 1);
    if (valuation4 === -2) PrintWrongKeyword(questionIndex);
    var choice4 = GetMultipleAnswerChoice(questionIndex, 3);
    if (choice4 === 1) question.noChoice = false;
    var answer4 = new Answer(choice4, valuation4, 1, 0, '');
    answer4.shortTextAnswer = "Investigate the ghost sighting";
    answer4.shortTextRemark = "";
    question.answers.push(answer4);
    return question;

}
/* Code generated function */
function InitQuestion7()
{
    const type = QMAKE_MULTIANS;
    const questionIndex = 6;
    var weight = DecodeNumber('LIcu6jpkmsE=', 619, 0, 99999);
    var numOfAnswers = 4;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('LIcu6jpkmsE=', 619, -1000, 1000),DecodeDecimal('hlF7bIE4I7Q=', 619, -1000, 1000),DecodeDecimal('hlF7bIE4I7Q=', 619, -1000, 1000));
    question.answers.length = 0;
    question.num = 7;
    question.isSingleAns = false;
    question.shortTextQuestion = "What is Hamlet's reaction to his mother's marriage?";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('LIcu6jpkmsE=', 621, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "He is relieved and hopeful";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('86cYbwQV/8Q=', 623, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "He is heartbroken and angry";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('86cYbwQV/8Q=', 625, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, 1, 0, '');
    answer3.shortTextAnswer = "He is content and quiet";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('0YJk4E+tyKo=', 463, -1, 1);
    if (valuation4 === -2) PrintWrongKeyword(questionIndex);
    var choice4 = GetMultipleAnswerChoice(questionIndex, 3);
    if (choice4 === 1) question.noChoice = false;
    var answer4 = new Answer(choice4, valuation4, 1, 0, '');
    answer4.shortTextAnswer = "He is jealous and bitter";
    answer4.shortTextRemark = "";
    question.answers.push(answer4);
    return question;

}
/* Code generated function */
function InitQuestion8()
{
    const type = QMAKE_MULTIANS;
    const questionIndex = 7;
    var weight = DecodeNumber('tip9s8PBIjw=', 465, 0, 99999);
    var numOfAnswers = 4;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('tip9s8PBIjw=', 465, -1000, 1000),DecodeDecimal('1apsWJj+Yig=', 465, -1000, 1000),DecodeDecimal('1apsWJj+Yig=', 465, -1000, 1000));
    question.answers.length = 0;
    question.num = 8;
    question.isSingleAns = false;
    question.shortTextQuestion = "What does Laertes warn Ophelia about?";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('tip9s8PBIjw=', 467, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "Ghosts haunting the palace";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('726aAhW0duo=', 469, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "Spies within the kingdom";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('TWsIvCSaF+Q=', 471, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, 1, 0, '');
    answer3.shortTextAnswer = "Hamlet’s ambition and lust";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('TWsIvCSaF+Q=', 473, -1, 1);
    if (valuation4 === -2) PrintWrongKeyword(questionIndex);
    var choice4 = GetMultipleAnswerChoice(questionIndex, 3);
    if (choice4 === 1) question.noChoice = false;
    var answer4 = new Answer(choice4, valuation4, 1, 0, '');
    answer4.shortTextAnswer = "Staying close to Gertrude";
    answer4.shortTextRemark = "";
    question.answers.push(answer4);
    return question;

}
/* Code generated function */
function InitQuestion9()
{
    const type = QMAKE_MULTIANS;
    const questionIndex = 8;
    var weight = DecodeNumber('UuL3SspfjGA=', 475, 0, 99999);
    var numOfAnswers = 4;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('UuL3SspfjGA=', 475, -1000, 1000),DecodeDecimal('ubaUdMnxe68=', 475, -1000, 1000),DecodeDecimal('ubaUdMnxe68=', 475, -1000, 1000));
    question.answers.length = 0;
    question.num = 9;
    question.isSingleAns = false;
    question.shortTextQuestion = "How does Polonius respond to Laertes's advice?";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('UuL3SspfjGA=', 477, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "He sends Laertes away";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('+H2l6gEOik0=', 479, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "He warns him of betrayal";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('atX8qzwANh8=', 840, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, 1, 0, '');
    answer3.shortTextAnswer = "He ignores it completely";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('MkRLcVKntOo=', 842, -1, 1);
    if (valuation4 === -2) PrintWrongKeyword(questionIndex);
    var choice4 = GetMultipleAnswerChoice(questionIndex, 3);
    if (choice4 === 1) question.noChoice = false;
    var answer4 = new Answer(choice4, valuation4, 1, 0, '');
    answer4.shortTextAnswer = "He adds his own counsel";
    answer4.shortTextRemark = "";
    question.answers.push(answer4);
    return question;

}
/* Code generated function */
function InitQuestion10()
{
    const type = QMAKE_MULTIANS;
    const questionIndex = 9;
    var weight = DecodeNumber('mh6ccENKRzk=', 680, 0, 99999);
    var numOfAnswers = 4;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('mh6ccENKRzk=', 680, -1000, 1000),DecodeDecimal('kc7LBuV4Mqw=', 680, -1000, 1000),DecodeDecimal('kc7LBuV4Mqw=', 680, -1000, 1000));
    question.answers.length = 0;
    question.num = 10;
    question.isSingleAns = false;
    question.shortTextQuestion = "What is Polonius's opinion of Hamlet's love?";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('G/wKQzBYPfs=', 682, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "It’s fleeting and false";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('G/wKQzBYPfs=', 684, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "It’s noble and true";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('elVTaC9UT+w=', 686, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, 1, 0, '');
    answer3.shortTextAnswer = "It’s sacred and eternal";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('z3iWdkrugsc=', 688, -1, 1);
    if (valuation4 === -2) PrintWrongKeyword(questionIndex);
    var choice4 = GetMultipleAnswerChoice(questionIndex, 3);
    if (choice4 === 1) question.noChoice = false;
    var answer4 = new Answer(choice4, valuation4, 1, 0, '');
    answer4.shortTextAnswer = "It’s accepted and welcomed";
    answer4.shortTextRemark = "";
    question.answers.push(answer4);
    return question;

}
/* Code generated function */
function InitQuestion11()
{
    const type = QMAKE_MULTIANS;
    const questionIndex = 10;
    var weight = DecodeNumber('lRxrQSYucHM=', 690, 0, 99999);
    var numOfAnswers = 4;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('lRxrQSYucHM=', 690, -1000, 1000),DecodeDecimal('NlkolXyfzF0=', 690, -1000, 1000),DecodeDecimal('NlkolXyfzF0=', 690, -1000, 1000));
    question.answers.length = 0;
    question.num = 11;
    question.isSingleAns = false;
    question.shortTextQuestion = "What does Polonius instruct Ophelia to do?";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('lRxrQSYucHM=', 692, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "Spy on Hamlet for the king";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('8jSwEcfONV4=', 694, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "Break off with Hamlet entirely";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('8jSwEcfONV4=', 696, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, 1, 0, '');
    answer3.shortTextAnswer = "Marry Hamlet without delay";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('p39bV9XJHPk=', 698, -1, 1);
    if (valuation4 === -2) PrintWrongKeyword(questionIndex);
    var choice4 = GetMultipleAnswerChoice(questionIndex, 3);
    if (choice4 === 1) question.noChoice = false;
    var answer4 = new Answer(choice4, valuation4, 1, 0, '');
    answer4.shortTextAnswer = "Move to another castle";
    answer4.shortTextRemark = "";
    question.answers.push(answer4);
    return question;

}
/* Code generated function */
function InitQuestion12()
{
    const type = QMAKE_MULTIANS;
    const questionIndex = 11;
    var weight = DecodeNumber('kawEDHBP9fs=', 700, 0, 99999);
    var numOfAnswers = 4;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('kawEDHBP9fs=', 700, -1000, 1000),DecodeDecimal('gRE+9y/cFuo=', 700, -1000, 1000),DecodeDecimal('gRE+9y/cFuo=', 700, -1000, 1000));
    question.answers.length = 0;
    question.num = 12;
    question.isSingleAns = false;
    question.shortTextQuestion = "Why is Horatio skeptical about the ghost? ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('kawEDHBP9fs=', 702, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "He thinks it’s a trick";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('jvOyLQt2jao=', 704, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "He believes it’s a demon";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('jbZ6M4zDTtY=', 706, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, 1, 0, '');
    answer3.shortTextAnswer = "He needs proof of spirits";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('jbZ6M4zDTtY=', 708, -1, 1);
    if (valuation4 === -2) PrintWrongKeyword(questionIndex);
    var choice4 = GetMultipleAnswerChoice(questionIndex, 3);
    if (choice4 === 1) question.noChoice = false;
    var answer4 = new Answer(choice4, valuation4, 1, 0, '');
    answer4.shortTextAnswer = "He never saw it before";
    answer4.shortTextRemark = "";
    question.answers.push(answer4);
    return question;

}
/* Code generated function */
function InitQuestion13()
{
    const type = QMAKE_MULTIANS;
    const questionIndex = 12;
    var weight = DecodeNumber('Q94g0T61lCw=', 1069, 0, 99999);
    var numOfAnswers = 4;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('Q94g0T61lCw=', 1069, -1000, 1000),DecodeDecimal('1abQU5uxLNY=', 1069, -1000, 1000),DecodeDecimal('1abQU5uxLNY=', 1069, -1000, 1000));
    question.answers.length = 0;
    question.num = 13;
    question.isSingleAns = false;
    question.shortTextQuestion = "How many times does the ghost appear in Act I?";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('Q94g0T61lCw=', 1071, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "Four times throughout the act";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('bsKDC0ItAQY=', 1073, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "Three times to different men";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('bsKDC0ItAQY=', 1075, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, 1, 0, '');
    answer3.shortTextAnswer = "Twice in the battlements";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('qmZF+QPvvIE=', 1077, -1, 1);
    if (valuation4 === -2) PrintWrongKeyword(questionIndex);
    var choice4 = GetMultipleAnswerChoice(questionIndex, 3);
    if (choice4 === 1) question.noChoice = false;
    var answer4 = new Answer(choice4, valuation4, 1, 0, '');
    answer4.shortTextAnswer = "Just once at the start";
    answer4.shortTextRemark = "";
    question.answers.push(answer4);
    return question;

}
/* Code generated function */
function InitQuestion14()
{
    const type = QMAKE_MULTIANS;
    const questionIndex = 13;
    var weight = DecodeNumber('H0XoTMThX3A=', 1079, 0, 99999);
    var numOfAnswers = 4;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('H0XoTMThX3A=', 1079, -1000, 1000),DecodeDecimal('A7jU8MXVqYY=', 1079, -1000, 1000),DecodeDecimal('A7jU8MXVqYY=', 1079, -1000, 1000));
    question.answers.length = 0;
    question.num = 14;
    question.isSingleAns = false;
    question.shortTextQuestion = "What does the ghost ask Hamlet to do?";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('H0XoTMThX3A=', 1081, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "Reveal his mother’s lies";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('4kuN8+WukCw=', 1083, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "Seek revenge for his death";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('4kuN8+WukCw=', 1085, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, 1, 0, '');
    answer3.shortTextAnswer = "Murder Claudius in secret";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('k05YgfPPor8=', 446, -1, 1);
    if (valuation4 === -2) PrintWrongKeyword(questionIndex);
    var choice4 = GetMultipleAnswerChoice(questionIndex, 3);
    if (choice4 === 1) question.noChoice = false;
    var answer4 = new Answer(choice4, valuation4, 1, 0, '');
    answer4.shortTextAnswer = "Flee Denmark at once";
    answer4.shortTextRemark = "";
    question.answers.push(answer4);
    return question;

}
/* Code generated function */
function InitQuestion15()
{
    const type = QMAKE_MULTIANS;
    const questionIndex = 14;
    var weight = DecodeNumber('dPCXU3Q92SM=', 448, 0, 99999);
    var numOfAnswers = 4;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('dPCXU3Q92SM=', 448, -1000, 1000),DecodeDecimal('2vuarPhBQGQ=', 448, -1000, 1000),DecodeDecimal('2vuarPhBQGQ=', 448, -1000, 1000));
    question.answers.length = 0;
    question.num = 15;
    question.isSingleAns = false;
    question.shortTextQuestion = "How was King Hamlet killed?";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('dPCXU3Q92SM=', 450, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "In battle with Fortinbras";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('mQIDXuXAl70=', 452, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "Poisoned in the ear while sleeping";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('mQIDXuXAl70=', 454, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, 1, 0, '');
    answer3.shortTextAnswer = "Stabbed by Claudius in the tower";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('c/qdVxPEaSM=', 456, -1, 1);
    if (valuation4 === -2) PrintWrongKeyword(questionIndex);
    var choice4 = GetMultipleAnswerChoice(questionIndex, 3);
    if (choice4 === 1) question.noChoice = false;
    var answer4 = new Answer(choice4, valuation4, 1, 0, '');
    answer4.shortTextAnswer = "Killed by a snake in the orchard";
    answer4.shortTextRemark = "";
    question.answers.push(answer4);
    return question;

}
/* Code generated function */
function InitQuestion16()
{
    const type = QMAKE_MULTIANS;
    const questionIndex = 15;
    var weight = DecodeNumber('wpVL6f1UTlM=', 294, 0, 99999);
    var numOfAnswers = 4;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('wpVL6f1UTlM=', 294, -1000, 1000),DecodeDecimal('im3Fqo+8daY=', 294, -1000, 1000),DecodeDecimal('im3Fqo+8daY=', 294, -1000, 1000));
    question.answers.length = 0;
    question.num = 16;
    question.isSingleAns = false;
    question.shortTextQuestion = "How does Hamlet respond to the ghost's request?";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('wpVL6f1UTlM=', 296, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "He confronts the queen";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('4o8ATfdfrCk=', 298, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "He refuses out of fear";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('3RI7RMjJvKw=', 300, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, 1, 0, '');
    answer3.shortTextAnswer = "He weeps and prays";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('7YRhb8ej9BI=', 302, -1, 1);
    if (valuation4 === -2) PrintWrongKeyword(questionIndex);
    var choice4 = GetMultipleAnswerChoice(questionIndex, 3);
    if (choice4 === 1) question.noChoice = false;
    var answer4 = new Answer(choice4, valuation4, 1, 0, '');
    answer4.shortTextAnswer = "He swears to remember";
    answer4.shortTextRemark = "";
    question.answers.push(answer4);
    return question;

}
/* Code generated function */
function InitQuestion17()
{
    const type = QMAKE_MULTIANS;
    const questionIndex = 16;
    var weight = DecodeNumber('l4yg1ahzAqg=', 304, 0, 99999);
    var numOfAnswers = 4;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('l4yg1ahzAqg=', 304, -1000, 1000),DecodeDecimal('OQDn0synOAk=', 304, -1000, 1000),DecodeDecimal('OQDn0synOAk=', 304, -1000, 1000));
    question.answers.length = 0;
    question.num = 17;
    question.isSingleAns = false;
    question.shortTextQuestion = "What does Hamlet ask his friends to do?";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('l4yg1ahzAqg=', 306, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "Speak with the ghost again";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('Sd/GwhGimmk=', 308, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "Follow him to Wittenberg";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('pCnBCSdGrYQ=', 310, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, 1, 0, '');
    answer3.shortTextAnswer = "Swear not to tell anyone";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('0zdBseDI5m0=', 671, -1, 1);
    if (valuation4 === -2) PrintWrongKeyword(questionIndex);
    var choice4 = GetMultipleAnswerChoice(questionIndex, 3);
    if (choice4 === 1) question.noChoice = false;
    var answer4 = new Answer(choice4, valuation4, 1, 0, '');
    answer4.shortTextAnswer = "Spy on Claudius for him";
    answer4.shortTextRemark = "";
    question.answers.push(answer4);
    return question;

}
/* Code generated function */
function InitQuestion18()
{
    const type = QMAKE_MULTIANS;
    const questionIndex = 17;
    var weight = DecodeNumber('/layUf5uTNc=', 673, 0, 99999);
    var numOfAnswers = 4;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('/layUf5uTNc=', 673, -1000, 1000),DecodeDecimal('LM7XgUB/0kA=', 673, -1000, 1000),DecodeDecimal('LM7XgUB/0kA=', 673, -1000, 1000));
    question.answers.length = 0;
    question.num = 18;
    question.isSingleAns = false;
    question.shortTextQuestion = "What does the ghost warn Hamlet about Gertrude?";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('/layUf5uTNc=', 675, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "She will betray him soon";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('ZKcKUStR3Z8=', 677, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "She plotted the murder";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('kc7LBuV4Mqw=', 679, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, 1, 0, '');
    answer3.shortTextAnswer = "Leave her fate to Heaven";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('kc7LBuV4Mqw=', 681, -1, 1);
    if (valuation4 === -2) PrintWrongKeyword(questionIndex);
    var choice4 = GetMultipleAnswerChoice(questionIndex, 3);
    if (choice4 === 1) question.noChoice = false;
    var answer4 = new Answer(choice4, valuation4, 1, 0, '');
    answer4.shortTextAnswer = "She knows the secret truth";
    answer4.shortTextRemark = "";
    question.answers.push(answer4);
    return question;

}
/* Code generated function */
function InitQuestion19()
{
    const type = QMAKE_MULTIANS;
    const questionIndex = 18;
    var weight = DecodeNumber('vvZitvrKXTc=', 1042, 0, 99999);
    var numOfAnswers = 4;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('vvZitvrKXTc=', 1042, -1000, 1000),DecodeDecimal('L4TEGfANnX4=', 1042, -1000, 1000),DecodeDecimal('L4TEGfANnX4=', 1042, -1000, 1000));
    question.answers.length = 0;
    question.num = 19;
    question.isSingleAns = false;
    question.shortTextQuestion = "How does Hamlet describe Denmark?";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('vvZitvrKXTc=', 1044, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "A prison of deception";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('9vldDl4ETYo=', 882, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "A garden overgrown with weeds";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('9vldDl4ETYo=', 884, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, 1, 0, '');
    answer3.shortTextAnswer = "A land cursed by sin";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('Sir8rpuA4DM=', 886, -1, 1);
    if (valuation4 === -2) PrintWrongKeyword(questionIndex);
    var choice4 = GetMultipleAnswerChoice(questionIndex, 3);
    if (choice4 === 1) question.noChoice = false;
    var answer4 = new Answer(choice4, valuation4, 1, 0, '');
    answer4.shortTextAnswer = "A kingdom of ghosts";
    answer4.shortTextRemark = "";
    question.answers.push(answer4);
    return question;

}
/* Code generated function */
function InitQuestion20()
{
    const type = QMAKE_MULTIANS;
    const questionIndex = 19;
    var weight = DecodeNumber('rGCFfiw26FI=', 888, 0, 99999);
    var numOfAnswers = 4;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('rGCFfiw26FI=', 888, -1000, 1000),DecodeDecimal('Umerg4axMLo=', 888, -1000, 1000),DecodeDecimal('Umerg4axMLo=', 888, -1000, 1000));
    question.answers.length = 0;
    question.num = 20;
    question.isSingleAns = false;
    question.shortTextQuestion = "What theme is introduced through the ghost's presence? ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('rGCFfiw26FI=', 890, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "Honor and social class";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('AnquPcJtEok=', 892, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "Revenge and the supernatural";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('AnquPcJtEok=', 894, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, 1, 0, '');
    answer3.shortTextAnswer = "Madness and isolation";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('q1nzNFyD5dI=', 896, -1, 1);
    if (valuation4 === -2) PrintWrongKeyword(questionIndex);
    var choice4 = GetMultipleAnswerChoice(questionIndex, 3);
    if (choice4 === 1) question.noChoice = false;
    var answer4 = new Answer(choice4, valuation4, 1, 0, '');
    answer4.shortTextAnswer = "Fate versus free will";
    answer4.shortTextRemark = "";
    question.answers.push(answer4);
    return question;

}
/* Code generated function */
function InitQuestion21()
{
    const type = QMAKE_MULTIANS;
    const questionIndex = 20;
    var weight = DecodeNumber('UtZN0PM7AJg=', 898, 0, 99999);
    var numOfAnswers = 4;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('UtZN0PM7AJg=', 898, -1000, 1000),DecodeDecimal('0f19DUneOs4=', 898, -1000, 1000),DecodeDecimal('0f19DUneOs4=', 898, -1000, 1000));
    question.answers.length = 0;
    question.num = 21;
    question.isSingleAns = false;
    question.shortTextQuestion = "Who sends Reynaldo to spy on Laertes?";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('UtZN0PM7AJg=', 900, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "Rosencrantz, under orders";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('mxz3PRjqn2Q=', 902, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "Hamlet, seeking allies abroad";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('zls101WASyI=', 904, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, 1, 0, '');
    answer3.shortTextAnswer = "Polonius, his cunning father";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('zls101WASyI=', 906, -1, 1);
    if (valuation4 === -2) PrintWrongKeyword(questionIndex);
    var choice4 = GetMultipleAnswerChoice(questionIndex, 3);
    if (choice4 === 1) question.noChoice = false;
    var answer4 = new Answer(choice4, valuation4, 1, 0, '');
    answer4.shortTextAnswer = "Claudius, the watchful king";
    answer4.shortTextRemark = "";
    question.answers.push(answer4);
    return question;

}
/* Code generated function */
function InitQuestion22()
{
    const type = QMAKE_MULTIANS;
    const questionIndex = 21;
    var weight = DecodeNumber('Kpr3hR+olWU=', 908, 0, 99999);
    var numOfAnswers = 4;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('Kpr3hR+olWU=', 908, -1000, 1000),DecodeDecimal('lyQo6OB6s4k=', 908, -1000, 1000),DecodeDecimal('lyQo6OB6s4k=', 908, -1000, 1000));
    question.answers.length = 0;
    question.num = 22;
    question.isSingleAns = false;
    question.shortTextQuestion = "What does Polonius instruct Reynaldo to do in Paris?";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('Kpr3hR+olWU=', 910, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "Recruit spies for Denmark";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('Nu8DNvwZgHg=', 912, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "Spread rumors about Laertes";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('Nu8DNvwZgHg=', 914, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, 1, 0, '');
    answer3.shortTextAnswer = "Deliver letters and gold";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('cmt6kJlWmEc=', 275, -1, 1);
    if (valuation4 === -2) PrintWrongKeyword(questionIndex);
    var choice4 = GetMultipleAnswerChoice(questionIndex, 3);
    if (choice4 === 1) question.noChoice = false;
    var answer4 = new Answer(choice4, valuation4, 1, 0, '');
    answer4.shortTextAnswer = "Observe Laertes from afar";
    answer4.shortTextRemark = "";
    question.answers.push(answer4);
    return question;

}
/* Code generated function */
function InitQuestion23()
{
    const type = QMAKE_MULTIANS;
    const questionIndex = 22;
    var weight = DecodeNumber('qMWi9LlsREg=', 277, 0, 99999);
    var numOfAnswers = 4;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('qMWi9LlsREg=', 277, -1000, 1000),DecodeDecimal('muocPaR75WY=', 277, -1000, 1000),DecodeDecimal('muocPaR75WY=', 277, -1000, 1000));
    question.answers.length = 0;
    question.num = 23;
    question.isSingleAns = false;
    question.shortTextQuestion = "What is Reynaldo's reaction to Polonius's plan?";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('qMWi9LlsREg=', 279, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "He eagerly agrees";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('HUnNc6hImJA=', 281, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "He warns against it";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('f34YTTR78HM=', 283, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, 1, 0, '');
    answer3.shortTextAnswer = "He shows confusion";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('f34YTTR78HM=', 285, -1, 1);
    if (valuation4 === -2) PrintWrongKeyword(questionIndex);
    var choice4 = GetMultipleAnswerChoice(questionIndex, 3);
    if (choice4 === 1) question.noChoice = false;
    var answer4 = new Answer(choice4, valuation4, 1, 0, '');
    answer4.shortTextAnswer = "He refuses in anger";
    answer4.shortTextRemark = "";
    question.answers.push(answer4);
    return question;

}
/* Code generated function */
function InitQuestion24()
{
    const type = QMAKE_MULTIANS;
    const questionIndex = 23;
    var weight = DecodeNumber('FibXKRr3LA8=', 482, 0, 99999);
    var numOfAnswers = 4;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('FibXKRr3LA8=', 482, -1000, 1000),DecodeDecimal('KgpdgkvHUyM=', 482, -1000, 1000),DecodeDecimal('KgpdgkvHUyM=', 482, -1000, 1000));
    question.answers.length = 0;
    question.num = 24;
    question.isSingleAns = false;
    question.shortTextQuestion = "How does Ophelia describe Hamlet's appearance in his mad scene?";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('J8lD4CWy6pc=', 484, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "Disheveled and ghostly pale";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('J8lD4CWy6pc=', 486, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "In armor and crown like a king";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('M3mqrHJFedk=', 488, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, 1, 0, '');
    answer3.shortTextAnswer = "Pale, trembling, and weeping";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('0QUgFszzLYY=', 490, -1, 1);
    if (valuation4 === -2) PrintWrongKeyword(questionIndex);
    var choice4 = GetMultipleAnswerChoice(questionIndex, 3);
    if (choice4 === 1) question.noChoice = false;
    var answer4 = new Answer(choice4, valuation4, 1, 0, '');
    answer4.shortTextAnswer = "Dressed all in blood and feathers";
    answer4.shortTextRemark = "";
    question.answers.push(answer4);
    return question;

}
/* Code generated function */
function InitQuestion25()
{
    const type = QMAKE_MULTIANS;
    const questionIndex = 24;
    var weight = DecodeNumber('1k/YPbIwLDM=', 492, 0, 99999);
    var numOfAnswers = 4;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('1k/YPbIwLDM=', 492, -1000, 1000),DecodeDecimal('1ioY6PuXGU8=', 492, -1000, 1000),DecodeDecimal('1ioY6PuXGU8=', 492, -1000, 1000));
    question.answers.length = 0;
    question.num = 25;
    question.isSingleAns = false;
    question.shortTextQuestion = "What conclusion does Polonius reach after Ophelia's report?";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('suGkSQXnCYs=', 494, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "Hamlet knows of Claudius’s crime";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('suGkSQXnCYs=', 496, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "The ghost has possessed Hamlet";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('211wRh6OoBg=', 498, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, 1, 0, '');
    answer3.shortTextAnswer = "Hamlet is faking madness";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('xEyfsoT8yTY=', 500, -1, 1);
    if (valuation4 === -2) PrintWrongKeyword(questionIndex);
    var choice4 = GetMultipleAnswerChoice(questionIndex, 3);
    if (choice4 === 1) question.noChoice = false;
    var answer4 = new Answer(choice4, valuation4, 1, 0, '');
    answer4.shortTextAnswer = "Hamlet’s madness is caused by love";
    answer4.shortTextRemark = "";
    question.answers.push(answer4);
    return question;

}
/* Code generated function */
function InitQuestion26()
{
    const type = QMAKE_MULTIANS;
    const questionIndex = 25;
    var weight = DecodeNumber('NnQE9VnH8EI=', 502, 0, 99999);
    var numOfAnswers = 4;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('NnQE9VnH8EI=', 502, -1000, 1000),DecodeDecimal('0HGk1UgcMjk=', 502, -1000, 1000),DecodeDecimal('0HGk1UgcMjk=', 502, -1000, 1000));
    question.answers.length = 0;
    question.num = 26;
    question.isSingleAns = false;
    question.shortTextQuestion = "Who are Rosencrantz and Guildenstern?";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('NnQE9VnH8EI=', 504, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "Soldiers guarding the ghost";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('xANS7MbZZhs=', 506, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "Servants in Gertrude’s court";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('+eV/Qcpqvr8=', 867, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, 1, 0, '');
    answer3.shortTextAnswer = "Royal cousins and noble spies";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('ReiwQvBKj5A=', 869, -1, 1);
    if (valuation4 === -2) PrintWrongKeyword(questionIndex);
    var choice4 = GetMultipleAnswerChoice(questionIndex, 3);
    if (choice4 === 1) question.noChoice = false;
    var answer4 = new Answer(choice4, valuation4, 1, 0, '');
    answer4.shortTextAnswer = "Hamlet’s childhood friends";
    answer4.shortTextRemark = "";
    question.answers.push(answer4);
    return question;

}
/* Code generated function */
function InitQuestion27()
{
    const type = QMAKE_MULTIANS;
    const questionIndex = 26;
    var weight = DecodeNumber('wCdFuIQRtwk=', 871, 0, 99999);
    var numOfAnswers = 4;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('wCdFuIQRtwk=', 871, -1000, 1000),DecodeDecimal('7M425HkKDFI=', 871, -1000, 1000),DecodeDecimal('7M425HkKDFI=', 871, -1000, 1000));
    question.answers.length = 0;
    question.num = 27;
    question.isSingleAns = false;
    question.shortTextQuestion = "What is the purpose of bringing Rosencrantz and Guildenstern to court?";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('wCdFuIQRtwk=', 873, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "To cheer up the queen";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('+JLcsSmPfQY=', 875, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "To find the cause of Hamlet’s madness";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('+JLcsSmPfQY=', 877, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, 1, 0, '');
    answer3.shortTextAnswer = "To replace Horatio and Marcellus";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('/zrnDXJN32M=', 879, -1, 1);
    if (valuation4 === -2) PrintWrongKeyword(questionIndex);
    var choice4 = GetMultipleAnswerChoice(questionIndex, 3);
    if (choice4 === 1) question.noChoice = false;
    var answer4 = new Answer(choice4, valuation4, 1, 0, '');
    answer4.shortTextAnswer = "To report on Norway’s army";
    answer4.shortTextRemark = "";
    question.answers.push(answer4);
    return question;

}
/* Code generated function */
function InitQuestion28()
{
    const type = QMAKE_MULTIANS;
    const questionIndex = 27;
    var weight = DecodeNumber('fVpBHRo1hiI=', 717, 0, 99999);
    var numOfAnswers = 4;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('fVpBHRo1hiI=', 717, -1000, 1000),DecodeDecimal('pm/GCpTG9fY=', 717, -1000, 1000),DecodeDecimal('pm/GCpTG9fY=', 717, -1000, 1000));
    question.answers.length = 0;
    question.num = 28;
    question.isSingleAns = false;
    question.shortTextQuestion = "How does Hamlet greet Rosencrantz and Guildenstern?";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('fVpBHRo1hiI=', 719, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "With threats and suspicion";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('vkQarsh4zVg=', 721, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "Warmly and without worry";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('5WhV0VGoNZA=', 723, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, 1, 0, '');
    answer3.shortTextAnswer = "Politely, then suspiciously";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('5WhV0VGoNZA=', 725, -1, 1);
    if (valuation4 === -2) PrintWrongKeyword(questionIndex);
    var choice4 = GetMultipleAnswerChoice(questionIndex, 3);
    if (choice4 === 1) question.noChoice = false;
    var answer4 = new Answer(choice4, valuation4, 1, 0, '');
    answer4.shortTextAnswer = "With laughter and jesting";
    answer4.shortTextRemark = "";
    question.answers.push(answer4);
    return question;

}
/* Code generated function */
function InitQuestion29()
{
    const type = QMAKE_MULTIANS;
    const questionIndex = 28;
    var weight = DecodeNumber('uKLTgnK+BFQ=', 727, 0, 99999);
    var numOfAnswers = 4;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('uKLTgnK+BFQ=', 727, -1000, 1000),DecodeDecimal('o0vkU/Kjq6g=', 727, -1000, 1000),DecodeDecimal('o0vkU/Kjq6g=', 727, -1000, 1000));
    question.answers.length = 0;
    question.num = 29;
    question.isSingleAns = false;
    question.shortTextQuestion = "What does Hamlet suspect about Rosencrantz and Guildenstern?";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('uKLTgnK+BFQ=', 729, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "They are planning to flee";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('ufydim/okKs=', 731, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "They are loyal to Ophelia";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('wp7pLUMSI6w=', 733, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, 1, 0, '');
    answer3.shortTextAnswer = "They are ghosts in disguise";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('o+I8KMeQ1To=', 453, -1, 1);
    if (valuation4 === -2) PrintWrongKeyword(questionIndex);
    var choice4 = GetMultipleAnswerChoice(questionIndex, 3);
    if (choice4 === 1) question.noChoice = false;
    var answer4 = new Answer(choice4, valuation4, 1, 0, '');
    answer4.shortTextAnswer = "They were sent to spy on him";
    answer4.shortTextRemark = "";
    question.answers.push(answer4);
    return question;

}
/* Code generated function */
function InitQuestion30()
{
    const type = QMAKE_MULTIANS;
    const questionIndex = 29;
    var weight = DecodeNumber('b4vBW4+Yat8=', 455, 0, 99999);
    var numOfAnswers = 4;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('b4vBW4+Yat8=', 455, -1000, 1000),DecodeDecimal('c/qdVxPEaSM=', 455, -1000, 1000),DecodeDecimal('c/qdVxPEaSM=', 455, -1000, 1000));
    question.answers.length = 0;
    question.num = 30;
    question.isSingleAns = false;
    question.shortTextQuestion = "Who is said to be arriving at Elsinore with a troupe of actors?";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('b4vBW4+Yat8=', 457, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "English ambassadors from York";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('ec7+nBdT+vk=', 459, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "Fortinbras and his soldiers";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('0YJk4E+tyKo=', 461, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, 1, 0, '');
    answer3.shortTextAnswer = "Traveling players from the city";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('0YJk4E+tyKo=', 463, -1, 1);
    if (valuation4 === -2) PrintWrongKeyword(questionIndex);
    var choice4 = GetMultipleAnswerChoice(questionIndex, 3);
    if (choice4 === 1) question.noChoice = false;
    var answer4 = new Answer(choice4, valuation4, 1, 0, '');
    answer4.shortTextAnswer = "Gertrude’s cousins from France";
    answer4.shortTextRemark = "";
    question.answers.push(answer4);
    return question;

}
/* Code generated function */
function InitQuestion31()
{
    const type = QMAKE_MULTIANS;
    const questionIndex = 30;
    var weight = DecodeNumber('tip9s8PBIjw=', 465, 0, 99999);
    var numOfAnswers = 4;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('tip9s8PBIjw=', 465, -1000, 1000),DecodeDecimal('1apsWJj+Yig=', 465, -1000, 1000),DecodeDecimal('1apsWJj+Yig=', 465, -1000, 1000));
    question.answers.length = 0;
    question.num = 31;
    question.isSingleAns = false;
    question.shortTextQuestion = "What is Hamlet's opinion of the players?";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('726aAhW0duo=', 467, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "They are honest and skilled";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('726aAhW0duo=', 469, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "They are false and vain";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('DxqkGDhqU2Y=', 471, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, 1, 0, '');
    answer3.shortTextAnswer = "They are spies in disguise";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('TWsIvCSaF+Q=', 473, -1, 1);
    if (valuation4 === -2) PrintWrongKeyword(questionIndex);
    var choice4 = GetMultipleAnswerChoice(questionIndex, 3);
    if (choice4 === 1) question.noChoice = false;
    var answer4 = new Answer(choice4, valuation4, 1, 0, '');
    answer4.shortTextAnswer = "They are too costly to house";
    answer4.shortTextRemark = "";
    question.answers.push(answer4);
    return question;

}
/* Code generated function */
function InitQuestion32()
{
    const type = QMAKE_MULTIANS;
    const questionIndex = 31;
    var weight = DecodeNumber('OOhCUkkycYw=', 1311, 0, 99999);
    var numOfAnswers = 4;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('OOhCUkkycYw=', 1311, -1000, 1000),DecodeDecimal('DvPtZ0YX4e8=', 1311, -1000, 1000),DecodeDecimal('DvPtZ0YX4e8=', 1311, -1000, 1000));
    question.answers.length = 0;
    question.num = 32;
    question.isSingleAns = false;
    question.shortTextQuestion = "What scene does Hamlet ask the First Player to perform?";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('OOhCUkkycYw=', 1313, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "The Fall of Troy ";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('vG+eMHl2Ivk=', 1315, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "The Death of Julius Caesar";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('g52XysczOkE=', 1317, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, 1, 0, '');
    answer3.shortTextAnswer = "The Coronation of Denmark";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('xyyfAn2GzhU=', 1319, -1, 1);
    if (valuation4 === -2) PrintWrongKeyword(questionIndex);
    var choice4 = GetMultipleAnswerChoice(questionIndex, 3);
    if (choice4 === 1) question.noChoice = false;
    var answer4 = new Answer(choice4, valuation4, 1, 0, '');
    answer4.shortTextAnswer = "The Murder of Priam ";
    answer4.shortTextRemark = "";
    question.answers.push(answer4);
    return question;

}
/* Code generated function */
function InitQuestion33()
{
    const type = QMAKE_MULTIANS;
    const questionIndex = 32;
    var weight = DecodeNumber('Jmf4mG5y/kw=', 1321, 0, 99999);
    var numOfAnswers = 4;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('Jmf4mG5y/kw=', 1321, -1000, 1000),DecodeDecimal('U9ZYhuPdusk=', 1321, -1000, 1000),DecodeDecimal('U9ZYhuPdusk=', 1321, -1000, 1000));
    question.answers.length = 0;
    question.num = 33;
    question.isSingleAns = false;
    question.shortTextQuestion = "How does the First Player perform the speech?";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('9bW0XOydUqY=', 1323, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "Passionately with deep emotion";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('9bW0XOydUqY=', 1325, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "Slowly with awkward pacing";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('W9hAPjoztZI=', 1327, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, 1, 0, '');
    answer3.shortTextAnswer = "Reluctantly and unprepared";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('cN9JuwDCHY4=', 1329, -1, 1);
    if (valuation4 === -2) PrintWrongKeyword(questionIndex);
    var choice4 = GetMultipleAnswerChoice(questionIndex, 3);
    if (choice4 === 1) question.noChoice = false;
    var answer4 = new Answer(choice4, valuation4, 1, 0, '');
    answer4.shortTextAnswer = "Loudly but without feeling";
    answer4.shortTextRemark = "";
    question.answers.push(answer4);
    return question;

}
/* Code generated function */
function InitQuestion34()
{
    const type = QMAKE_MULTIANS;
    const questionIndex = 33;
    var weight = DecodeNumber('lRxrQSYucHM=', 690, 0, 99999);
    var numOfAnswers = 4;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('lRxrQSYucHM=', 690, -1000, 1000),DecodeDecimal('NlkolXyfzF0=', 690, -1000, 1000),DecodeDecimal('NlkolXyfzF0=', 690, -1000, 1000));
    question.answers.length = 0;
    question.num = 34;
    question.isSingleAns = false;
    question.shortTextQuestion = "What is Hamlet's reaction to the Player's performance?";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('lRxrQSYucHM=', 692, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "He accuses him of falsehood";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('8jSwEcfONV4=', 694, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "He envies the actor’s emotion";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('8jSwEcfONV4=', 696, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, 1, 0, '');
    answer3.shortTextAnswer = "He applauds and cries";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('p39bV9XJHPk=', 698, -1, 1);
    if (valuation4 === -2) PrintWrongKeyword(questionIndex);
    var choice4 = GetMultipleAnswerChoice(questionIndex, 3);
    if (choice4 === 1) question.noChoice = false;
    var answer4 = new Answer(choice4, valuation4, 1, 0, '');
    answer4.shortTextAnswer = "He leaves without comment";
    answer4.shortTextRemark = "";
    question.answers.push(answer4);
    return question;

}
/* Code generated function */
function InitQuestion35()
{
    const type = QMAKE_MULTIANS;
    const questionIndex = 34;
    var weight = DecodeNumber('7sxw0KjhFv0=', 537, 0, 99999);
    var numOfAnswers = 4;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('7sxw0KjhFv0=', 537, -1000, 1000),DecodeDecimal('hnfsZZ6ZHhw=', 537, -1000, 1000),DecodeDecimal('hnfsZZ6ZHhw=', 537, -1000, 1000));
    question.answers.length = 0;
    question.num = 35;
    question.isSingleAns = false;
    question.shortTextQuestion = "What plan does Hamlet develop at the end of Act II?";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('7sxw0KjhFv0=', 539, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "To expose Polonius as a spy";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('av/Y6kSh4vE=', 541, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "To duel Laertes in public";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('nHKaV1pFeg0=', 543, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, 1, 0, '');
    answer3.shortTextAnswer = "To escape to England";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('u/mhQjJ+UNM=', 545, -1, 1);
    if (valuation4 === -2) PrintWrongKeyword(questionIndex);
    var choice4 = GetMultipleAnswerChoice(questionIndex, 3);
    if (choice4 === 1) question.noChoice = false;
    var answer4 = new Answer(choice4, valuation4, 1, 0, '');
    answer4.shortTextAnswer = "To use a play to reveal Claudius’s guilt";
    answer4.shortTextRemark = "";
    question.answers.push(answer4);
    return question;

}
/* Code generated function */
function InitQuestion36()
{
    const type = QMAKE_MULTIANS;
    const questionIndex = 35;
    var weight = DecodeNumber('4TbJQsdSG1c=', 547, 0, 99999);
    var numOfAnswers = 4;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('4TbJQsdSG1c=', 547, -1000, 1000),DecodeDecimal('hNskGNLGc5Y=', 547, -1000, 1000),DecodeDecimal('hNskGNLGc5Y=', 547, -1000, 1000));
    question.answers.length = 0;
    question.num = 36;
    question.isSingleAns = false;
    question.shortTextQuestion = "What is the name of the play Hamlet wants to use?";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('4TbJQsdSG1c=', 549, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "The Fall of Denmark";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('1+1BUZB86/A=', 551, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "The King's Conscience";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('YoUvnRvuYiA=', 553, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, 1, 0, '');
    answer3.shortTextAnswer = "The Poisoned Crown";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('l4ePwD/FQ9s=', 913, -1, 1);
    if (valuation4 === -2) PrintWrongKeyword(questionIndex);
    var choice4 = GetMultipleAnswerChoice(questionIndex, 3);
    if (choice4 === 1) question.noChoice = false;
    var answer4 = new Answer(choice4, valuation4, 1, 0, '');
    answer4.shortTextAnswer = "The Mousetrap";
    answer4.shortTextRemark = "";
    question.answers.push(answer4);
    return question;

}
/* Code generated function */
function InitQuestion37()
{
    const type = QMAKE_MULTIANS;
    const questionIndex = 36;
    var weight = DecodeNumber('lMBD67ZK34g=', 915, 0, 99999);
    var numOfAnswers = 4;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('lMBD67ZK34g=', 915, -1000, 1000),DecodeDecimal('TK40BwXNB1k=', 915, -1000, 1000),DecodeDecimal('TK40BwXNB1k=', 915, -1000, 1000));
    question.answers.length = 0;
    question.num = 37;
    question.isSingleAns = false;
    question.shortTextQuestion = "What emotion does Hamlet express in his soliloquy at the end of Act II?";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('lMBD67ZK34g=', 917, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "Joyful ambition";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('KiIE/e/6RFw=', 919, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "Frustrated self-loathing";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('KiIE/e/6RFw=', 921, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, 1, 0, '');
    answer3.shortTextAnswer = "Peaceful satisfaction";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('ek0Pa1N/LqA=', 923, -1, 1);
    if (valuation4 === -2) PrintWrongKeyword(questionIndex);
    var choice4 = GetMultipleAnswerChoice(questionIndex, 3);
    if (choice4 === 1) question.noChoice = false;
    var answer4 = new Answer(choice4, valuation4, 1, 0, '');
    answer4.shortTextAnswer = "Proud determination";
    answer4.shortTextRemark = "";
    question.answers.push(answer4);
    return question;

}
/* Code generated function */
function InitQuestion38()
{
    const type = QMAKE_MULTIANS;
    const questionIndex = 37;
    var weight = DecodeNumber('sk0W7mhc+tY=', 1284, 0, 99999);
    var numOfAnswers = 4;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('sk0W7mhc+tY=', 1284, -1000, 1000),DecodeDecimal('USOHfp5mu6Y=', 1284, -1000, 1000),DecodeDecimal('USOHfp5mu6Y=', 1284, -1000, 1000));
    question.answers.length = 0;
    question.num = 38;
    question.isSingleAns = false;
    question.shortTextQuestion = "What does Hamlet criticize himself for?";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('sk0W7mhc+tY=', 1286, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "Speaking without reason";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('7z/3M3mIcm8=', 1288, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "Trusting Horatio blindly";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('nNGz0omlvC8=', 1290, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, 1, 0, '');
    answer3.shortTextAnswer = "Loving Ophelia too much";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('p53dvu6td+A=', 1292, -1, 1);
    if (valuation4 === -2) PrintWrongKeyword(questionIndex);
    var choice4 = GetMultipleAnswerChoice(questionIndex, 3);
    if (choice4 === 1) question.noChoice = false;
    var answer4 = new Answer(choice4, valuation4, 1, 0, '');
    answer4.shortTextAnswer = "Not killing Claudius yet";
    answer4.shortTextRemark = "";
    question.answers.push(answer4);
    return question;

}
/* Code generated function */
function InitQuestion39()
{
    const type = QMAKE_MULTIANS;
    const questionIndex = 38;
    var weight = DecodeNumber('yTMMhY5ouRc=', 1294, 0, 99999);
    var numOfAnswers = 4;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('yTMMhY5ouRc=', 1294, -1000, 1000),DecodeDecimal('Mr6IG7lN6EY=', 1294, -1000, 1000),DecodeDecimal('Mr6IG7lN6EY=', 1294, -1000, 1000));
    question.answers.length = 0;
    question.num = 39;
    question.isSingleAns = false;
    question.shortTextQuestion = "What motivates Hamlet to use the play to test Claudius?";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('yTMMhY5ouRc=', 1296, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "He fears Gertrude’s wrath";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('J3BaCP0eAN4=', 1298, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "He wants physical proof of guilt";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('J3BaCP0eAN4=', 1300, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, 1, 0, '');
    answer3.shortTextAnswer = "He needs help from Horatio";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('MgtFTyJszE4=', 1139, -1, 1);
    if (valuation4 === -2) PrintWrongKeyword(questionIndex);
    var choice4 = GetMultipleAnswerChoice(questionIndex, 3);
    if (choice4 === 1) question.noChoice = false;
    var answer4 = new Answer(choice4, valuation4, 1, 0, '');
    answer4.shortTextAnswer = "He is told to by the ghost";
    answer4.shortTextRemark = "";
    question.answers.push(answer4);
    return question;

}
/* Code generated function */
function InitQuestion40()
{
    const type = QMAKE_MULTIANS;
    const questionIndex = 39;
    var weight = DecodeNumber('KnsCWc7ah6g=', 1141, 0, 99999);
    var numOfAnswers = 4;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('KnsCWc7ah6g=', 1141, -1000, 1000),DecodeDecimal('wP0Ikrs+moo=', 1141, -1000, 1000),DecodeDecimal('wP0Ikrs+moo=', 1141, -1000, 1000));
    question.answers.length = 0;
    question.num = 40;
    question.isSingleAns = false;
    question.shortTextQuestion = "What theme is reinforced by Hamlet's plan with the play?";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('KnsCWc7ah6g=', 1143, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "The decline of Danish politics";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('KJFd8NarqPc=', 1145, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "Madness as a noble pursuit";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('8pHFdl85qqs=', 1147, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, 1, 0, '');
    answer3.shortTextAnswer = "The power of revenge in war";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('A031G2izy+c=', 1149, -1, 1);
    if (valuation4 === -2) PrintWrongKeyword(questionIndex);
    var choice4 = GetMultipleAnswerChoice(questionIndex, 3);
    if (choice4 === 1) question.noChoice = false;
    var answer4 = new Answer(choice4, valuation4, 1, 0, '');
    answer4.shortTextAnswer = "The role of performance and deception";
    answer4.shortTextRemark = "";
    question.answers.push(answer4);
    return question;

}
/* Code generated function */
function InitQuestion41()
{
    const type = QMAKE_MULTIANS;
    const questionIndex = 40;
    var weight = DecodeNumber('oXNU9Nun+mY=', 509, 0, 99999);
    var numOfAnswers = 4;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('oXNU9Nun+mY=', 509, -1000, 1000),DecodeDecimal('awEWO5KkTlY=', 509, -1000, 1000),DecodeDecimal('awEWO5KkTlY=', 509, -1000, 1000));
    question.answers.length = 0;
    question.num = 41;
    question.isSingleAns = false;
    question.shortTextQuestion = "What does Claudius plan with Rosencrantz and Guildenstern in Act III?";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('gGmkE68Zpfs=', 511, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "To send Hamlet away to England";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('gGmkE68Zpfs=', 513, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "To protect Hamlet from madness";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('Lwr/CAQMmp0=', 515, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, 1, 0, '');
    answer3.shortTextAnswer = "To invite Hamlet to the throne";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('KZMkkQgxWzQ=', 517, -1, 1);
    if (valuation4 === -2) PrintWrongKeyword(questionIndex);
    var choice4 = GetMultipleAnswerChoice(questionIndex, 3);
    if (choice4 === 1) question.noChoice = false;
    var answer4 = new Answer(choice4, valuation4, 1, 0, '');
    answer4.shortTextAnswer = "To marry Hamlet to Ophelia";
    answer4.shortTextRemark = "";
    question.answers.push(answer4);
    return question;

}
/* Code generated function */
function InitQuestion42()
{
    const type = QMAKE_MULTIANS;
    const questionIndex = 41;
    var weight = DecodeNumber('80hHYeFo9eg=', 519, 0, 99999);
    var numOfAnswers = 4;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('80hHYeFo9eg=', 519, -1000, 1000),DecodeDecimal('bjRaRyONYtk=', 519, -1000, 1000),DecodeDecimal('bjRaRyONYtk=', 519, -1000, 1000));
    question.answers.length = 0;
    question.num = 42;
    question.isSingleAns = false;
    question.shortTextQuestion = "What do Rosencrantz and Guildenstern report to Claudius?";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('80hHYeFo9eg=', 521, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "Hamlet has confessed to murder";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('Iq4mcaYOzTw=', 523, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "Hamlet plans to leave Denmark";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('mb/QlOUKmAk=', 525, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, 1, 0, '');
    answer3.shortTextAnswer = "Hamlet is distracted but won’t say why";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('mb/QlOUKmAk=', 527, -1, 1);
    if (valuation4 === -2) PrintWrongKeyword(questionIndex);
    var choice4 = GetMultipleAnswerChoice(questionIndex, 3);
    if (choice4 === 1) question.noChoice = false;
    var answer4 = new Answer(choice4, valuation4, 1, 0, '');
    answer4.shortTextAnswer = "Hamlet still loves Ophelia deeply";
    answer4.shortTextRemark = "";
    question.answers.push(answer4);
    return question;

}
/* Code generated function */
function InitQuestion43()
{
    const type = QMAKE_MULTIANS;
    const questionIndex = 42;
    var weight = DecodeNumber('BPDyCmCouGw=', 725, 0, 99999);
    var numOfAnswers = 4;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('BPDyCmCouGw=', 725, -1000, 1000),DecodeDecimal('iSMnTUKCvfY=', 725, -1000, 1000),DecodeDecimal('iSMnTUKCvfY=', 725, -1000, 1000));
    question.answers.length = 0;
    question.num = 43;
    question.isSingleAns = false;
    question.shortTextQuestion = "What does Claudius ask Ophelia to do?";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('BPDyCmCouGw=', 727, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "Meet Hamlet in private chambers";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('uKLTgnK+BFQ=', 729, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "Leave court for a convent";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('ufydim/okKs=', 731, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, 1, 0, '');
    answer3.shortTextAnswer = "Return Hamlet’s letters publicly";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('wp7pLUMSI6w=', 733, -1, 1);
    if (valuation4 === -2) PrintWrongKeyword(questionIndex);
    var choice4 = GetMultipleAnswerChoice(questionIndex, 3);
    if (choice4 === 1) question.noChoice = false;
    var answer4 = new Answer(choice4, valuation4, 1, 0, '');
    answer4.shortTextAnswer = "Spy on Hamlet ";
    answer4.shortTextRemark = "";
    question.answers.push(answer4);
    return question;

}
/* Code generated function */
function InitQuestion44()
{
    const type = QMAKE_MULTIANS;
    const questionIndex = 43;
    var weight = DecodeNumber('FJHSftsnZFM=', 735, 0, 99999);
    var numOfAnswers = 4;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('FJHSftsnZFM=', 735, -1000, 1000),DecodeDecimal('2veigODxx8U=', 735, -1000, 1000),DecodeDecimal('2veigODxx8U=', 735, -1000, 1000));
    question.answers.length = 0;
    question.num = 44;
    question.isSingleAns = false;
    question.shortTextQuestion = "What does the famous “To be or not to be” soliloquy reveal?";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('FJHSftsnZFM=', 737, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "Hamlet’s hatred for Claudius";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('6N70VV0VALU=', 739, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "Hamlet’s fear of the afterlife";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('WX78GR6j0ek=', 1099, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, 1, 0, '');
    answer3.shortTextAnswer = "Hamlet’s plan to fake madness";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('s195SXEJjAM=', 1101, -1, 1);
    if (valuation4 === -2) PrintWrongKeyword(questionIndex);
    var choice4 = GetMultipleAnswerChoice(questionIndex, 3);
    if (choice4 === 1) question.noChoice = false;
    var answer4 = new Answer(choice4, valuation4, 1, 0, '');
    answer4.shortTextAnswer = "Hamlet’s desire to kill Polonius";
    answer4.shortTextRemark = "";
    question.answers.push(answer4);
    return question;

}
/* Code generated function */
function InitQuestion45()
{
    const type = QMAKE_MULTIANS;
    const questionIndex = 44;
    var weight = DecodeNumber('92EtTxVxXFg=', 1103, 0, 99999);
    var numOfAnswers = 4;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('92EtTxVxXFg=', 1103, -1000, 1000),DecodeDecimal('tA3xalE5uks=', 1103, -1000, 1000),DecodeDecimal('tA3xalE5uks=', 1103, -1000, 1000));
    question.answers.length = 0;
    question.num = 45;
    question.isSingleAns = false;
    question.shortTextQuestion = "How does Ophelia act during her staged encounter with Hamlet?";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('Q9BjQjwn39o=', 1105, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "Honest and sorrowful";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('Q9BjQjwn39o=', 1107, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "Bold and confrontational";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('cwxR7HxxUbQ=', 1109, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, 1, 0, '');
    answer3.shortTextAnswer = "Confused and playful";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('d42+mL+ZEMo=', 1111, -1, 1);
    if (valuation4 === -2) PrintWrongKeyword(questionIndex);
    var choice4 = GetMultipleAnswerChoice(questionIndex, 3);
    if (choice4 === 1) question.noChoice = false;
    var answer4 = new Answer(choice4, valuation4, 1, 0, '');
    answer4.shortTextAnswer = "Cold and indifferent";
    answer4.shortTextRemark = "";
    question.answers.push(answer4);
    return question;

}
/* Code generated function */
function InitQuestion46()
{
    const type = QMAKE_MULTIANS;
    const questionIndex = 45;
    var weight = DecodeNumber('ddycpnc7Qm4=', 950, 0, 99999);
    var numOfAnswers = 4;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('ddycpnc7Qm4=', 950, -1000, 1000),DecodeDecimal('I9ynL8JeZ20=', 950, -1000, 1000),DecodeDecimal('I9ynL8JeZ20=', 950, -1000, 1000));
    question.answers.length = 0;
    question.num = 46;
    question.isSingleAns = false;
    question.shortTextQuestion = "What is Hamlet's attitude toward Ophelia in their encounter?";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('ddycpnc7Qm4=', 952, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "Humorous and flirtatious ";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('R3fZMl/LlGw=', 954, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "Cruel and erratic";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('R3fZMl/LlGw=', 956, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, 1, 0, '');
    answer3.shortTextAnswer = "Loving but hesitant";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('vDZjG0rFEEM=', 958, -1, 1);
    if (valuation4 === -2) PrintWrongKeyword(questionIndex);
    var choice4 = GetMultipleAnswerChoice(questionIndex, 3);
    if (choice4 === 1) question.noChoice = false;
    var answer4 = new Answer(choice4, valuation4, 1, 0, '');
    answer4.shortTextAnswer = "Silent and withdrawn";
    answer4.shortTextRemark = "";
    question.answers.push(answer4);
    return question;

}
/* Code generated function */
function InitQuestion47()
{
    const type = QMAKE_MULTIANS;
    const questionIndex = 46;
    var weight = DecodeNumber('Jtdwm5CmDVI=', 960, 0, 99999);
    var numOfAnswers = 4;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('Jtdwm5CmDVI=', 960, -1000, 1000),DecodeDecimal('2Eh16Bw+FBM=', 960, -1000, 1000),DecodeDecimal('2Eh16Bw+FBM=', 960, -1000, 1000));
    question.answers.length = 0;
    question.num = 47;
    question.isSingleAns = false;
    question.shortTextQuestion = "What command does Hamlet give to Ophelia?";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('Jtdwm5CmDVI=', 962, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "\"Speak not of this again.\"";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('j9Xaq/wFekw=', 964, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "\"Go to thy brother and warn him.\"";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('FqPTv0uOBcw=', 966, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, 1, 0, '');
    answer3.shortTextAnswer = "\"Trust no man in Denmark.\"";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('wgf+RLg1MwE=', 968, -1, 1);
    if (valuation4 === -2) PrintWrongKeyword(questionIndex);
    var choice4 = GetMultipleAnswerChoice(questionIndex, 3);
    if (choice4 === 1) question.noChoice = false;
    var answer4 = new Answer(choice4, valuation4, 1, 0, '');
    answer4.shortTextAnswer = "\"Get thee to a nunnery.\"";
    answer4.shortTextRemark = "";
    question.answers.push(answer4);
    return question;

}
/* Code generated function */
function InitQuestion48()
{
    const type = QMAKE_MULTIANS;
    const questionIndex = 47;
    var weight = DecodeNumber('q4sxHSOHTWg=', 970, 0, 99999);
    var numOfAnswers = 4;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('q4sxHSOHTWg=', 970, -1000, 1000),DecodeDecimal('9DENVk/aAPE=', 970, -1000, 1000),DecodeDecimal('9DENVk/aAPE=', 970, -1000, 1000));
    question.answers.length = 0;
    question.num = 48;
    question.isSingleAns = false;
    question.shortTextQuestion = "What conclusion does Claudius reach after observing Hamlet?";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('q4sxHSOHTWg=', 972, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "Hamlet is planning his wedding";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('iLGo0V5e1LE=', 974, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "Hamlet is truly mad with love";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('Bnke+Fc16gQ=', 976, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, 1, 0, '');
    answer3.shortTextAnswer = "Hamlet is too dangerous to stay";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('Bnke+Fc16gQ=', 978, -1, 1);
    if (valuation4 === -2) PrintWrongKeyword(questionIndex);
    var choice4 = GetMultipleAnswerChoice(questionIndex, 3);
    if (choice4 === 1) question.noChoice = false;
    var answer4 = new Answer(choice4, valuation4, 1, 0, '');
    answer4.shortTextAnswer = "Hamlet still mourns his father";
    answer4.shortTextRemark = "";
    question.answers.push(answer4);
    return question;

}
/* Code generated function */
function InitQuestion49()
{
    const type = QMAKE_MULTIANS;
    const questionIndex = 48;
    var weight = DecodeNumber('Ittp0tXpuXk=', 697, 0, 99999);
    var numOfAnswers = 4;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('Ittp0tXpuXk=', 697, -1000, 1000),DecodeDecimal('p39bV9XJHPk=', 697, -1000, 1000),DecodeDecimal('p39bV9XJHPk=', 697, -1000, 1000));
    question.answers.length = 0;
    question.num = 49;
    question.isSingleAns = false;
    question.shortTextQuestion = "What is the play within the play called by Hamlet?";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('gRE+9y/cFuo=', 699, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "The Mousetrap";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('gRE+9y/cFuo=', 701, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "The Player's Revenge";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('M138WoWmTDs=', 703, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, 1, 0, '');
    answer3.shortTextAnswer = "The Fall of the King";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('53TNIpjoc+A=', 705, -1, 1);
    if (valuation4 === -2) PrintWrongKeyword(questionIndex);
    var choice4 = GetMultipleAnswerChoice(questionIndex, 3);
    if (choice4 === 1) question.noChoice = false;
    var answer4 = new Answer(choice4, valuation4, 1, 0, '');
    answer4.shortTextAnswer = "The Prince’s Warning";
    answer4.shortTextRemark = "";
    question.answers.push(answer4);
    return question;

}
/* Code generated function */
function InitQuestion50()
{
    const type = QMAKE_MULTIANS;
    const questionIndex = 49;
    var weight = DecodeNumber('eI/FZAo0Ils=', 707, 0, 99999);
    var numOfAnswers = 4;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('eI/FZAo0Ils=', 707, -1000, 1000),DecodeDecimal('jbZ6M4zDTtY=', 707, -1000, 1000),DecodeDecimal('jbZ6M4zDTtY=', 707, -1000, 1000));
    question.answers.length = 0;
    question.num = 50;
    question.isSingleAns = false;
    question.shortTextQuestion = "Why does Hamlet stage the play?";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('nQU/zagWE1U=', 709, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "To catch Claudius's conscience";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('hNskGNLGc5Y=', 548, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "To test Horatio’s loyalty";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('DWJ6NhWkCMo=', 550, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, 1, 0, '');
    answer3.shortTextAnswer = "To impress the Danish court";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('WsnGuKiFONo=', 552, -1, 1);
    if (valuation4 === -2) PrintWrongKeyword(questionIndex);
    var choice4 = GetMultipleAnswerChoice(questionIndex, 3);
    if (choice4 === 1) question.noChoice = false;
    var answer4 = new Answer(choice4, valuation4, 1, 0, '');
    answer4.shortTextAnswer = "To mock Gertrude publicly";
    answer4.shortTextRemark = "";
    question.answers.push(answer4);
    return question;

}
/* Code generated function */
function InitQuestion51()
{
    const type = QMAKE_MULTIANS;
    const questionIndex = 50;
    var weight = DecodeNumber('FUllmQyACQM=', 554, 0, 99999);
    var numOfAnswers = 4;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('FUllmQyACQM=', 554, -1000, 1000),DecodeDecimal('Ajisz1bDNAg=', 554, -1000, 1000),DecodeDecimal('Ajisz1bDNAg=', 554, -1000, 1000));
    question.answers.length = 0;
    question.num = 51;
    question.isSingleAns = false;
    question.shortTextQuestion = "How does Claudius react to the murder scene in the play?";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('Vi/JlEu3tCc=', 556, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "He stops the play and storms out";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('Vi/JlEu3tCc=', 558, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "He laughs and claps loudly";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('YSKXHtU1gXk=', 560, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, 1, 0, '');
    answer3.shortTextAnswer = "He declares Hamlet heir to the throne";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('xVQCaZVchmM=', 562, -1, 1);
    if (valuation4 === -2) PrintWrongKeyword(questionIndex);
    var choice4 = GetMultipleAnswerChoice(questionIndex, 3);
    if (choice4 === 1) question.noChoice = false;
    var answer4 = new Answer(choice4, valuation4, 1, 0, '');
    answer4.shortTextAnswer = "He falls asleep during the scene";
    answer4.shortTextRemark = "";
    question.answers.push(answer4);
    return question;

}
/* Code generated function */
function InitQuestion52()
{
    const type = QMAKE_MULTIANS;
    const questionIndex = 51;
    var weight = DecodeNumber('G3tqrw5Sv4k=', 564, 0, 99999);
    var numOfAnswers = 4;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('G3tqrw5Sv4k=', 564, -1000, 1000),DecodeDecimal('F8s65LTlk/4=', 564, -1000, 1000),DecodeDecimal('F8s65LTlk/4=', 564, -1000, 1000));
    question.answers.length = 0;
    question.num = 52;
    question.isSingleAns = false;
    question.shortTextQuestion = "What does Hamlet ask Horatio to do during the play?";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('vgOv/XH1EkU=', 566, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "Watch Claudius for signs of guilt";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('vgOv/XH1EkU=', 568, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "Keep Ophelia away from Claudius";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('U/JmqWNmz8g=', 570, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, 1, 0, '');
    answer3.shortTextAnswer = "Signal the ghost if it returns";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('o/KH2j3jqwY=', 931, -1, 1);
    if (valuation4 === -2) PrintWrongKeyword(questionIndex);
    var choice4 = GetMultipleAnswerChoice(questionIndex, 3);
    if (choice4 === 1) question.noChoice = false;
    var answer4 = new Answer(choice4, valuation4, 1, 0, '');
    answer4.shortTextAnswer = "Take notes on the play’s meaning";
    answer4.shortTextRemark = "";
    question.answers.push(answer4);
    return question;

}
/* Code generated function */
function InitQuestion53()
{
    const type = QMAKE_MULTIANS;
    const questionIndex = 52;
    var weight = DecodeNumber('GsvL3lr+J3k=', 933, 0, 99999);
    var numOfAnswers = 4;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('GsvL3lr+J3k=', 933, -1000, 1000),DecodeDecimal('45V/7XHhm/8=', 933, -1000, 1000),DecodeDecimal('45V/7XHhm/8=', 933, -1000, 1000));
    question.answers.length = 0;
    question.num = 53;
    question.isSingleAns = false;
    question.shortTextQuestion = "How does Gertrude react to Hamlet after the play?";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('GsvL3lr+J3k=', 935, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "She praises his intelligence";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('Mr6IG7lN6EY=', 1295, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "She invites him to her chambers";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('csRbWQA2P64=', 1297, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, 1, 0, '');
    answer3.shortTextAnswer = "She demands an explanation";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('MeJ0OeKKuqc=', 1299, -1, 1);
    if (valuation4 === -2) PrintWrongKeyword(questionIndex);
    var choice4 = GetMultipleAnswerChoice(questionIndex, 3);
    if (choice4 === 1) question.noChoice = false;
    var answer4 = new Answer(choice4, valuation4, 1, 0, '');
    answer4.shortTextAnswer = "She becomes fearful and ashamed";
    answer4.shortTextRemark = "";
    question.answers.push(answer4);
    return question;

}
/* Code generated function */
function InitQuestion54()
{
    const type = QMAKE_MULTIANS;
    const questionIndex = 53;
    var weight = DecodeNumber('zXXO3nYgI9Y=', 1301, 0, 99999);
    var numOfAnswers = 4;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('zXXO3nYgI9Y=', 1301, -1000, 1000),DecodeDecimal('1e3l+k05gy0=', 1301, -1000, 1000),DecodeDecimal('1e3l+k05gy0=', 1301, -1000, 1000));
    question.answers.length = 0;
    question.num = 54;
    question.isSingleAns = false;
    question.shortTextQuestion = "What does Claudius do after the play ends?";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('AUiKkSVwZDw=', 1303, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "Prays for forgiveness in private";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('dakJfn/Cs4c=', 1501, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "Sends Ophelia away to France";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('0YhOb8S45s4=', 1503, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, 1, 0, '');
    answer3.shortTextAnswer = "Orders Hamlet to be arrested ";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('hTI0bq334EM=', 1505, -1, 1);
    if (valuation4 === -2) PrintWrongKeyword(questionIndex);
    var choice4 = GetMultipleAnswerChoice(questionIndex, 3);
    if (choice4 === 1) question.noChoice = false;
    var answer4 = new Answer(choice4, valuation4, 1, 0, '');
    answer4.shortTextAnswer = "Declares war on Norway";
    answer4.shortTextRemark = "";
    question.answers.push(answer4);
    return question;

}
/* Code generated function */
function InitQuestion55()
{
    const type = QMAKE_MULTIANS;
    const questionIndex = 54;
    var weight = DecodeNumber('2JY+m07WtxA=', 1507, 0, 99999);
    var numOfAnswers = 4;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('2JY+m07WtxA=', 1507, -1000, 1000),DecodeDecimal('jthH7Fd7qIE=', 1507, -1000, 1000),DecodeDecimal('jthH7Fd7qIE=', 1507, -1000, 1000));
    question.answers.length = 0;
    question.num = 55;
    question.isSingleAns = false;
    question.shortTextQuestion = "What does Hamlet decide while Claudius is praying?";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('2JY+m07WtxA=', 1509, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "To challenge him to a duel";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('BQYSfCYthiw=', 1511, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "To expose him in front of all";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('F8/Cbvy+ud8=', 1513, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, 1, 0, '');
    answer3.shortTextAnswer = "To wait before killing him";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('hzFMdNYUOfg=', 710, -1, 1);
    if (valuation4 === -2) PrintWrongKeyword(questionIndex);
    var choice4 = GetMultipleAnswerChoice(questionIndex, 3);
    if (choice4 === 1) question.noChoice = false;
    var answer4 = new Answer(choice4, valuation4, 1, 0, '');
    answer4.shortTextAnswer = "To forgive his uncle at last";
    answer4.shortTextRemark = "";
    question.answers.push(answer4);
    return question;

}
/* Code generated function */
function InitQuestion56()
{
    const type = QMAKE_MULTIANS;
    const questionIndex = 55;
    var weight = DecodeNumber('l5UJ2dBFa7E=', 712, 0, 99999);
    var numOfAnswers = 4;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('l5UJ2dBFa7E=', 712, -1000, 1000),DecodeDecimal('SKYa7B8P4wM=', 712, -1000, 1000),DecodeDecimal('SKYa7B8P4wM=', 712, -1000, 1000));
    question.answers.length = 0;
    question.num = 56;
    question.isSingleAns = false;
    question.shortTextQuestion = "Why doesn't Hamlet kill Claudius during the prayer?";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('w5aYGQAe7Tc=', 714, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "He wants Claudius to die in sin";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('w5aYGQAe7Tc=', 716, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "He pities him in that moment";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('pm/GCpTG9fY=', 718, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, 1, 0, '');
    answer3.shortTextAnswer = "He is stopped by Horatio";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('907NlOB+06s=', 720, -1, 1);
    if (valuation4 === -2) PrintWrongKeyword(questionIndex);
    var choice4 = GetMultipleAnswerChoice(questionIndex, 3);
    if (choice4 === 1) question.noChoice = false;
    var answer4 = new Answer(choice4, valuation4, 1, 0, '');
    answer4.shortTextAnswer = "He fears immediate punishment";
    answer4.shortTextRemark = "";
    question.answers.push(answer4);
    return question;

}
/* Code generated function */
function InitQuestion57()
{
    const type = QMAKE_MULTIANS;
    const questionIndex = 56;
    var weight = DecodeNumber('JDG1kL7fzOU=', 722, 0, 99999);
    var numOfAnswers = 4;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('JDG1kL7fzOU=', 722, -1000, 1000),DecodeDecimal('48vJovMOw4w=', 722, -1000, 1000),DecodeDecimal('48vJovMOw4w=', 722, -1000, 1000));
    question.answers.length = 0;
    question.num = 57;
    question.isSingleAns = false;
    question.shortTextQuestion = "Whom does Hamlet kill in Gertrude's room?";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('JDG1kL7fzOU=', 724, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "Laertes in a jealous rage";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('iSMnTUKCvfY=', 726, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "Claudius hiding in the shadows";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('o0vkU/Kjq6g=', 728, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, 1, 0, '');
    answer3.shortTextAnswer = "Rosencrantz by mistake";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('2Ct+Nhgj8MY=', 730, -1, 1);
    if (valuation4 === -2) PrintWrongKeyword(questionIndex);
    var choice4 = GetMultipleAnswerChoice(questionIndex, 3);
    if (choice4 === 1) question.noChoice = false;
    var answer4 = new Answer(choice4, valuation4, 1, 0, '');
    answer4.shortTextAnswer = "Polonius behind the arras";
    answer4.shortTextRemark = "";
    question.answers.push(answer4);
    return question;

}
/* Code generated function */
function InitQuestion58()
{
    const type = QMAKE_MULTIANS;
    const questionIndex = 57;
    var weight = DecodeNumber('kw6ihNwko1I=', 732, 0, 99999);
    var numOfAnswers = 4;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('kw6ihNwko1I=', 732, -1000, 1000),DecodeDecimal('aZ5t2INzHZM=', 732, -1000, 1000),DecodeDecimal('aZ5t2INzHZM=', 732, -1000, 1000));
    question.answers.length = 0;
    question.num = 58;
    question.isSingleAns = false;
    question.shortTextQuestion = "What does Gertrude believe about the death in her chamber?";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('kw6ihNwko1I=', 734, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "Polonius planned the whole thing";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('2veigODxx8U=', 736, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "Hamlet acted in self-defense";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('tGHoxi/KH5g=', 738, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, 1, 0, '');
    answer3.shortTextAnswer = "Hamlet is truly insane now";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('WX78GR6j0ek=', 1099, -1, 1);
    if (valuation4 === -2) PrintWrongKeyword(questionIndex);
    var choice4 = GetMultipleAnswerChoice(questionIndex, 3);
    if (choice4 === 1) question.noChoice = false;
    var answer4 = new Answer(choice4, valuation4, 1, 0, '');
    answer4.shortTextAnswer = "The ghost commanded Hamlet";
    answer4.shortTextRemark = "";
    question.answers.push(answer4);
    return question;

}
/* Code generated function */
function InitQuestion59()
{
    const type = QMAKE_MULTIANS;
    const questionIndex = 58;
    var weight = DecodeNumber('KkwVKaoWHyw=', 1101, 0, 99999);
    var numOfAnswers = 4;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('KkwVKaoWHyw=', 1101, -1000, 1000),DecodeDecimal('UaiTBxI9ESk=', 1101, -1000, 1000),DecodeDecimal('UaiTBxI9ESk=', 1101, -1000, 1000));
    question.answers.length = 0;
    question.num = 59;
    question.isSingleAns = false;
    question.shortTextQuestion = "What does the ghost tell Hamlet during the bedroom scene?";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('92EtTxVxXFg=', 1103, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "To spare Gertrude from harm";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('92EtTxVxXFg=', 1105, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "To marry Ophelia soon";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('Q9BjQjwn39o=', 1107, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, 1, 0, '');
    answer3.shortTextAnswer = "To kill Claudius immediately";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('cwxR7HxxUbQ=', 1109, -1, 1);
    if (valuation4 === -2) PrintWrongKeyword(questionIndex);
    var choice4 = GetMultipleAnswerChoice(questionIndex, 3);
    if (choice4 === 1) question.noChoice = false;
    var answer4 = new Answer(choice4, valuation4, 1, 0, '');
    answer4.shortTextAnswer = "To confess to the murder";
    answer4.shortTextRemark = "";
    question.answers.push(answer4);
    return question;

}
/* Code generated function */
function InitQuestion60()
{
    const type = QMAKE_MULTIANS;
    const questionIndex = 59;
    var weight = DecodeNumber('1XNL3GeL55s=', 1306, 0, 99999);
    var numOfAnswers = 4;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('1XNL3GeL55s=', 1306, -1000, 1000),DecodeDecimal('0HMcRnQb9Eo=', 1306, -1000, 1000),DecodeDecimal('0HMcRnQb9Eo=', 1306, -1000, 1000));
    question.answers.length = 0;
    question.num = 60;
    question.isSingleAns = false;
    question.shortTextQuestion = "How does Gertrude react to seeing the ghost?";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('rN19Im68Fkw=', 1308, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "She cannot see the ghost";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('rN19Im68Fkw=', 1310, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "She chases it from the room";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('DvPtZ0YX4e8=', 1312, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, 1, 0, '');
    answer3.shortTextAnswer = "She speaks directly to it";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('nHH1/j0NIUE=', 1314, -1, 1);
    if (valuation4 === -2) PrintWrongKeyword(questionIndex);
    var choice4 = GetMultipleAnswerChoice(questionIndex, 3);
    if (choice4 === 1) question.noChoice = false;
    var answer4 = new Answer(choice4, valuation4, 1, 0, '');
    answer4.shortTextAnswer = "She faints in horror";
    answer4.shortTextRemark = "";
    question.answers.push(answer4);
    return question;

}
/* Code generated function */
function InitQuestion61()
{
    const type = QMAKE_MULTIANS;
    const questionIndex = 60;
    var weight = DecodeNumber('yMze2EbkPFw=', 1316, 0, 99999);
    var numOfAnswers = 4;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('yMze2EbkPFw=', 1316, -1000, 1000),DecodeDecimal('g52XysczOkE=', 1316, -1000, 1000),DecodeDecimal('g52XysczOkE=', 1316, -1000, 1000));
    question.answers.length = 0;
    question.num = 61;
    question.isSingleAns = false;
    question.shortTextQuestion = "What does Claudius immediately worry about after Polonius's death?";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('yMze2EbkPFw=', 1318, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "That Gertrude will reveal everything";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('Y5Yth6pRuLY=', 678, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "That Laertes will flee the country";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('UMygQNjdoyY=', 680, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, 1, 0, '');
    answer3.shortTextAnswer = "That Hamlet will confess the truth";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('G/wKQzBYPfs=', 682, -1, 1);
    if (valuation4 === -2) PrintWrongKeyword(questionIndex);
    var choice4 = GetMultipleAnswerChoice(questionIndex, 3);
    if (choice4 === 1) question.noChoice = false;
    var answer4 = new Answer(choice4, valuation4, 1, 0, '');
    answer4.shortTextAnswer = "That the people will turn against him";
    answer4.shortTextRemark = "";
    question.answers.push(answer4);
    return question;

}
/* Code generated function */
function InitQuestion62()
{
    const type = QMAKE_MULTIANS;
    const questionIndex = 61;
    var weight = DecodeNumber('elVTaC9UT+w=', 684, 0, 99999);
    var numOfAnswers = 4;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('elVTaC9UT+w=', 684, -1000, 1000),DecodeDecimal('yjvt+7a3nm4=', 684, -1000, 1000),DecodeDecimal('yjvt+7a3nm4=', 684, -1000, 1000));
    question.answers.length = 0;
    question.num = 62;
    question.isSingleAns = false;
    question.shortTextQuestion = "What is Claudius's plan for Hamlet after the murder?";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('elVTaC9UT+w=', 686, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "To imprison him for treason";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('z3iWdkrugsc=', 688, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "To have him tried by the court";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('hTvuyIPci7c=', 1527, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, 1, 0, '');
    answer3.shortTextAnswer = "To exile him with Ophelia";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('GcdXXMg+LZY=', 1529, -1, 1);
    if (valuation4 === -2) PrintWrongKeyword(questionIndex);
    var choice4 = GetMultipleAnswerChoice(questionIndex, 3);
    if (choice4 === 1) question.noChoice = false;
    var answer4 = new Answer(choice4, valuation4, 1, 0, '');
    answer4.shortTextAnswer = "To send him to England at once";
    answer4.shortTextRemark = "";
    question.answers.push(answer4);
    return question;

}
/* Code generated function */
function InitQuestion63()
{
    const type = QMAKE_MULTIANS;
    const questionIndex = 62;
    var weight = DecodeNumber('4WPnwO+3rW0=', 1531, 0, 99999);
    var numOfAnswers = 4;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('4WPnwO+3rW0=', 1531, -1000, 1000),DecodeDecimal('utYtmXu1hDM=', 1531, -1000, 1000),DecodeDecimal('utYtmXu1hDM=', 1531, -1000, 1000));
    question.answers.length = 0;
    question.num = 63;
    question.isSingleAns = false;
    question.shortTextQuestion = "How does Hamlet respond when asked where Polonius's body is?";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('4WPnwO+3rW0=', 1533, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "He reveals it plainly";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('c20q/jIplOs=', 1535, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "He blames Rosencrantz";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('FmDadff+xtM=', 1537, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, 1, 0, '');
    answer3.shortTextAnswer = "He answers with riddles";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('FmDadff+xtM=', 1539, -1, 1);
    if (valuation4 === -2) PrintWrongKeyword(questionIndex);
    var choice4 = GetMultipleAnswerChoice(questionIndex, 3);
    if (choice4 === 1) question.noChoice = false;
    var answer4 = new Answer(choice4, valuation4, 1, 0, '');
    answer4.shortTextAnswer = "He admits to burying it";
    answer4.shortTextRemark = "";
    question.answers.push(answer4);
    return question;

}
/* Code generated function */
function InitQuestion64()
{
    const type = QMAKE_MULTIANS;
    const questionIndex = 63;
    var weight = DecodeNumber('E11al5BNHj0=', 1541, 0, 99999);
    var numOfAnswers = 4;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('E11al5BNHj0=', 1541, -1000, 1000),DecodeDecimal('klwoB+A5J4M=', 1541, -1000, 1000),DecodeDecimal('klwoB+A5J4M=', 1541, -1000, 1000));
    question.answers.length = 0;
    question.num = 64;
    question.isSingleAns = false;
    question.shortTextQuestion = "What does Hamlet call Rosencrantz when refusing to tell him the body's location?";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('E11al5BNHj0=', 1543, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "A rat that scurries for gold";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('3zzOuIzuiW0=', 904, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "A jester who dances for lies";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('zls101WASyI=', 906, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, 1, 0, '');
    answer3.shortTextAnswer = "A snake with two tongues";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('Kpr3hR+olWU=', 908, -1, 1);
    if (valuation4 === -2) PrintWrongKeyword(questionIndex);
    var choice4 = GetMultipleAnswerChoice(questionIndex, 3);
    if (choice4 === 1) question.noChoice = false;
    var answer4 = new Answer(choice4, valuation4, 1, 0, '');
    answer4.shortTextAnswer = "A sponge that soaks up the king's words";
    answer4.shortTextRemark = "";
    question.answers.push(answer4);
    return question;

}
/* Code generated function */
function InitQuestion65()
{
    const type = QMAKE_MULTIANS;
    const questionIndex = 64;
    var weight = DecodeNumber('7TlAUjTcRiQ=', 910, 0, 99999);
    var numOfAnswers = 4;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('7TlAUjTcRiQ=', 910, -1000, 1000),DecodeDecimal('v47LWnt+uDE=', 910, -1000, 1000),DecodeDecimal('v47LWnt+uDE=', 910, -1000, 1000));
    question.answers.length = 0;
    question.num = 65;
    question.isSingleAns = false;
    question.shortTextQuestion = "What fate does Claudius secretly plan for Hamlet in England? ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('Nu8DNvwZgHg=', 912, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "To have him put to death";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('Nu8DNvwZgHg=', 914, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "To exile him in disguise";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('TK40BwXNB1k=', 916, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, 1, 0, '');
    answer3.shortTextAnswer = "To have him crowned by the king";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('Ch6ICwhl1iI=', 918, -1, 1);
    if (valuation4 === -2) PrintWrongKeyword(questionIndex);
    var choice4 = GetMultipleAnswerChoice(questionIndex, 3);
    if (choice4 === 1) question.noChoice = false;
    var answer4 = new Answer(choice4, valuation4, 1, 0, '');
    answer4.shortTextAnswer = "To marry him to a foreign noble";
    answer4.shortTextRemark = "";
    question.answers.push(answer4);
    return question;

}
/* Code generated function */
function InitQuestion66()
{
    const type = QMAKE_MULTIANS;
    const questionIndex = 65;
    var weight = DecodeNumber('2/QRJiXN1MY=', 756, 0, 99999);
    var numOfAnswers = 4;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('2/QRJiXN1MY=', 756, -1000, 1000),DecodeDecimal('qz62NIixXj4=', 756, -1000, 1000),DecodeDecimal('qz62NIixXj4=', 756, -1000, 1000));
    question.answers.length = 0;
    question.num = 66;
    question.isSingleAns = false;
    question.shortTextQuestion = "Who carries the sealed letters that order Hamlet's execution?";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('2/QRJiXN1MY=', 758, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "Horatio and Laertes";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('9YKz69dU5Bw=', 760, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "The Norwegian ambassadors";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('3PanJoX898E=', 762, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, 1, 0, '');
    answer3.shortTextAnswer = "Fortinbras and his captain";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('b7+syVSdPG4=', 764, -1, 1);
    if (valuation4 === -2) PrintWrongKeyword(questionIndex);
    var choice4 = GetMultipleAnswerChoice(questionIndex, 3);
    if (choice4 === 1) question.noChoice = false;
    var answer4 = new Answer(choice4, valuation4, 1, 0, '');
    answer4.shortTextAnswer = "Rosencrantz and Guildenstern";
    answer4.shortTextRemark = "";
    question.answers.push(answer4);
    return question;

}
/* Code generated function */
function InitQuestion67()
{
    const type = QMAKE_MULTIANS;
    const questionIndex = 66;
    var weight = DecodeNumber('/zqgdyp/7yY=', 766, 0, 99999);
    var numOfAnswers = 4;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('/zqgdyp/7yY=', 766, -1000, 1000),DecodeDecimal('3pTFrmAUTKw=', 766, -1000, 1000),DecodeDecimal('3pTFrmAUTKw=', 766, -1000, 1000));
    question.answers.length = 0;
    question.num = 67;
    question.isSingleAns = false;
    question.shortTextQuestion = "What does Hamlet reflect on after meeting Fortinbras's captain?";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('/zqgdyp/7yY=', 768, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "The nobility of revenge";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('E6mIiRkdKv4=', 770, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "The fate of Denmark’s youth";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('nhzB67Cpowc=', 1131, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, 1, 0, '');
    answer3.shortTextAnswer = "His own inaction and delay";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('nhzB67Cpowc=', 1133, -1, 1);
    if (valuation4 === -2) PrintWrongKeyword(questionIndex);
    var choice4 = GetMultipleAnswerChoice(questionIndex, 3);
    if (choice4 === 1) question.noChoice = false;
    var answer4 = new Answer(choice4, valuation4, 1, 0, '');
    answer4.shortTextAnswer = "The cost of foreign war";
    answer4.shortTextRemark = "";
    question.answers.push(answer4);
    return question;

}
/* Code generated function */
function InitQuestion68()
{
    const type = QMAKE_MULTIANS;
    const questionIndex = 67;
    var weight = DecodeNumber('irX6lNu7c/E=', 1135, 0, 99999);
    var numOfAnswers = 4;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('irX6lNu7c/E=', 1135, -1000, 1000),DecodeDecimal('Q3CUCx1x8d0=', 1135, -1000, 1000),DecodeDecimal('Q3CUCx1x8d0=', 1135, -1000, 1000));
    question.answers.length = 0;
    question.num = 68;
    question.isSingleAns = false;
    question.shortTextQuestion = "What does Hamlet resolve at the end of his soliloquy in Act III, Scene 4?";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('irX6lNu7c/E=', 1137, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "To escape to another country";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('8eQB7fBH76E=', 1139, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "To delay revenge no longer";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('8eQB7fBH76E=', 1141, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, 1, 0, '');
    answer3.shortTextAnswer = "To warn his mother again";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('KnsCWc7ah6g=', 1143, -1, 1);
    if (valuation4 === -2) PrintWrongKeyword(questionIndex);
    var choice4 = GetMultipleAnswerChoice(questionIndex, 3);
    if (choice4 === 1) question.noChoice = false;
    var answer4 = new Answer(choice4, valuation4, 1, 0, '');
    answer4.shortTextAnswer = "To confess all to the court";
    answer4.shortTextRemark = "";
    question.answers.push(answer4);
    return question;

}
/* Code generated function */
function InitQuestion69()
{
    const type = QMAKE_MULTIANS;
    const questionIndex = 68;
    var weight = DecodeNumber('+0Jkh4pkSaY=', 1504, 0, 99999);
    var numOfAnswers = 4;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('+0Jkh4pkSaY=', 1504, -1000, 1000),DecodeDecimal('hTI0bq334EM=', 1504, -1000, 1000),DecodeDecimal('hTI0bq334EM=', 1504, -1000, 1000));
    question.answers.length = 0;
    question.num = 69;
    question.isSingleAns = false;
    question.shortTextQuestion = "What mental state is Ophelia in after Polonius's death?";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('+0Jkh4pkSaY=', 1506, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "Silent and unresponsive";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('jthH7Fd7qIE=', 1508, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "Calm but vengeful ";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('IHTF3re1Y10=', 1510, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, 1, 0, '');
    answer3.shortTextAnswer = "Delirious and incoherent";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('IHTF3re1Y10=', 1512, -1, 1);
    if (valuation4 === -2) PrintWrongKeyword(questionIndex);
    var choice4 = GetMultipleAnswerChoice(questionIndex, 3);
    if (choice4 === 1) question.noChoice = false;
    var answer4 = new Answer(choice4, valuation4, 1, 0, '');
    answer4.shortTextAnswer = "Peaceful and resolved";
    answer4.shortTextRemark = "";
    question.answers.push(answer4);
    return question;

}
/* Code generated function */
function InitQuestion70()
{
    const type = QMAKE_MULTIANS;
    const questionIndex = 69;
    var weight = DecodeNumber('6z7dk/+mmTg=', 1514, 0, 99999);
    var numOfAnswers = 4;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('6z7dk/+mmTg=', 1514, -1000, 1000),DecodeDecimal('F8/Cbvy+ud8=', 1514, -1000, 1000),DecodeDecimal('F8/Cbvy+ud8=', 1514, -1000, 1000));
    question.answers.length = 0;
    question.num = 70;
    question.isSingleAns = false;
    question.shortTextQuestion = "What does Ophelia sing about in her madness?";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('6z7dk/+mmTg=', 1516, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "Death and Danish royalty";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('Z6I/2ZSV90Y=', 1518, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "Gardens and fairies ";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('5kQrI9QXQN8=', 1356, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, 1, 0, '');
    answer3.shortTextAnswer = "War and foreign lands";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('6X/QcltnkAc=', 1358, -1, 1);
    if (valuation4 === -2) PrintWrongKeyword(questionIndex);
    var choice4 = GetMultipleAnswerChoice(questionIndex, 3);
    if (choice4 === 1) question.noChoice = false;
    var answer4 = new Answer(choice4, valuation4, 1, 0, '');
    answer4.shortTextAnswer = "Lost love and betrayal";
    answer4.shortTextRemark = "";
    question.answers.push(answer4);
    return question;

}
/* Code generated function */
function InitQuestion71()
{
    const type = QMAKE_MULTIANS;
    const questionIndex = 70;
    var weight = DecodeNumber('gSJMQ9mG4CI=', 1360, 0, 99999);
    var numOfAnswers = 4;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('gSJMQ9mG4CI=', 1360, -1000, 1000),DecodeDecimal('qkjwH5yOKYg=', 1360, -1000, 1000),DecodeDecimal('qkjwH5yOKYg=', 1360, -1000, 1000));
    question.answers.length = 0;
    question.num = 71;
    question.isSingleAns = false;
    question.shortTextQuestion = "How does Claudius respond to Ophelia's madness?";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('I3tFVusRFro=', 1362, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "He says her grief is dangerous";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('I3tFVusRFro=', 1364, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "He blames Gertrude for it";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('b36CcDeJ77s=', 1366, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, 1, 0, '');
    answer3.shortTextAnswer = "He ignores her completely";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('BPDyCmCouGw=', 727, -1, 1);
    if (valuation4 === -2) PrintWrongKeyword(questionIndex);
    var choice4 = GetMultipleAnswerChoice(questionIndex, 3);
    if (choice4 === 1) question.noChoice = false;
    var answer4 = new Answer(choice4, valuation4, 1, 0, '');
    answer4.shortTextAnswer = "He sends her to a convent";
    answer4.shortTextRemark = "";
    question.answers.push(answer4);
    return question;

}
/* Code generated function */
function InitQuestion72()
{
    const type = QMAKE_MULTIANS;
    const questionIndex = 71;
    var weight = DecodeNumber('ufydim/okKs=', 729, 0, 99999);
    var numOfAnswers = 4;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('ufydim/okKs=', 729, -1000, 1000),DecodeDecimal('b09zrl/4BN0=', 729, -1000, 1000),DecodeDecimal('b09zrl/4BN0=', 729, -1000, 1000));
    question.answers.length = 0;
    question.num = 72;
    question.isSingleAns = false;
    question.shortTextQuestion = "What does Laertes do upon returning to Elsinore?";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('aZ5t2INzHZM=', 731, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "Demands justice for his father";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('aZ5t2INzHZM=', 733, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "Pleads for Hamlet’s return";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('wp7pLUMSI6w=', 735, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, 1, 0, '');
    answer3.shortTextAnswer = "Banishes Ophelia from court";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('FJHSftsnZFM=', 737, -1, 1);
    if (valuation4 === -2) PrintWrongKeyword(questionIndex);
    var choice4 = GetMultipleAnswerChoice(questionIndex, 3);
    if (choice4 === 1) question.noChoice = false;
    var answer4 = new Answer(choice4, valuation4, 1, 0, '');
    answer4.shortTextAnswer = "Crowns himself as king";
    answer4.shortTextRemark = "";
    question.answers.push(answer4);
    return question;

}
/* Code generated function */
function InitQuestion73()
{
    const type = QMAKE_MULTIANS;
    const questionIndex = 72;
    var weight = DecodeNumber('5cX8+K2oRZI=', 1098, 0, 99999);
    var numOfAnswers = 4;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('5cX8+K2oRZI=', 1098, -1000, 1000),DecodeDecimal('WX78GR6j0ek=', 1098, -1000, 1000),DecodeDecimal('WX78GR6j0ek=', 1098, -1000, 1000));
    question.answers.length = 0;
    question.num = 73;
    question.isSingleAns = false;
    question.shortTextQuestion = "How does Claudius calm Laertes's anger?";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('5cX8+K2oRZI=', 1100, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "By accusing Gertrude instead";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('UaiTBxI9ESk=', 1102, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "By promising him money";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('eq4l+CRfI60=', 1104, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, 1, 0, '');
    answer3.shortTextAnswer = "By promising revenge together";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('eq4l+CRfI60=', 1106, -1, 1);
    if (valuation4 === -2) PrintWrongKeyword(questionIndex);
    var choice4 = GetMultipleAnswerChoice(questionIndex, 3);
    if (choice4 === 1) question.noChoice = false;
    var answer4 = new Answer(choice4, valuation4, 1, 0, '');
    answer4.shortTextAnswer = "By blaming Hamlet directly";
    answer4.shortTextRemark = "";
    question.answers.push(answer4);
    return question;

}
/* Code generated function */
function InitQuestion74()
{
    const type = QMAKE_MULTIANS;
    const questionIndex = 73;
    var weight = DecodeNumber('0xhdO1MPUWE=', 1108, 0, 99999);
    var numOfAnswers = 4;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('0xhdO1MPUWE=', 1108, -1000, 1000),DecodeDecimal('cwxR7HxxUbQ=', 1108, -1000, 1000),DecodeDecimal('cwxR7HxxUbQ=', 1108, -1000, 1000));
    question.answers.length = 0;
    question.num = 74;
    question.isSingleAns = false;
    question.shortTextQuestion = "What news shocks Laertes during his conversation with Claudius?";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('0xhdO1MPUWE=', 1110, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "That Fortinbras invaded";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('GtUGnwqlGJs=', 948, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "That Hamlet has confessed ";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('rEzNo7uVud0=', 950, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, 1, 0, '');
    answer3.shortTextAnswer = "That the ghost returned";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('CaE7/wNg24U=', 952, -1, 1);
    if (valuation4 === -2) PrintWrongKeyword(questionIndex);
    var choice4 = GetMultipleAnswerChoice(questionIndex, 3);
    if (choice4 === 1) question.noChoice = false;
    var answer4 = new Answer(choice4, valuation4, 1, 0, '');
    answer4.shortTextAnswer = "That Ophelia is dead";
    answer4.shortTextRemark = "";
    question.answers.push(answer4);
    return question;

}
/* Code generated function */
function InitQuestion75()
{
    const type = QMAKE_MULTIANS;
    const questionIndex = 74;
    var weight = DecodeNumber('R3fZMl/LlGw=', 954, 0, 99999);
    var numOfAnswers = 4;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('R3fZMl/LlGw=', 954, -1000, 1000),DecodeDecimal('2zlt7xOhyus=', 954, -1000, 1000),DecodeDecimal('2zlt7xOhyus=', 954, -1000, 1000));
    question.answers.length = 0;
    question.num = 75;
    question.isSingleAns = false;
    question.shortTextQuestion = "How did Ophelia die, according to Gertrude?";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('R3fZMl/LlGw=', 956, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "She was murdered in the woods";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('vDZjG0rFEEM=', 958, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "She fell from a high tower";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('Jtdwm5CmDVI=', 960, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, 1, 0, '');
    answer3.shortTextAnswer = "She drowned while picking flowers";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('Jtdwm5CmDVI=', 962, -1, 1);
    if (valuation4 === -2) PrintWrongKeyword(questionIndex);
    var choice4 = GetMultipleAnswerChoice(questionIndex, 3);
    if (choice4 === 1) question.noChoice = false;
    var answer4 = new Answer(choice4, valuation4, 1, 0, '');
    answer4.shortTextAnswer = "She drank poison by accident";
    answer4.shortTextRemark = "";
    question.answers.push(answer4);
    return question;

}
/* Code generated function */
function InitQuestion76()
{
    const type = QMAKE_MULTIANS;
    const questionIndex = 75;
    var weight = DecodeNumber('9bW0XOydUqY=', 1323, 0, 99999);
    var numOfAnswers = 4;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('9bW0XOydUqY=', 1323, -1000, 1000),DecodeDecimal('WwD6Eb0Nn6Y=', 1323, -1000, 1000),DecodeDecimal('WwD6Eb0Nn6Y=', 1323, -1000, 1000));
    question.answers.length = 0;
    question.num = 76;
    question.isSingleAns = false;
    question.shortTextQuestion = "What is the plan Claudius proposes to kill Hamlet?";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('W9hAPjoztZI=', 1325, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "A duel with Laertes using poison";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('W9hAPjoztZI=', 1327, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "A trap in the throne room";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('cN9JuwDCHY4=', 1329, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, 1, 0, '');
    answer3.shortTextAnswer = "An ambush in England";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('0fkPfKbMGpg=', 1331, -1, 1);
    if (valuation4 === -2) PrintWrongKeyword(questionIndex);
    var choice4 = GetMultipleAnswerChoice(questionIndex, 3);
    if (choice4 === 1) question.noChoice = false;
    var answer4 = new Answer(choice4, valuation4, 1, 0, '');
    answer4.shortTextAnswer = "A staged robbery on the road";
    answer4.shortTextRemark = "";
    question.answers.push(answer4);
    return question;

}
/* Code generated function */
function InitQuestion77()
{
    const type = QMAKE_MULTIANS;
    const questionIndex = 76;
    var weight = DecodeNumber('xsHK9mlxWkc=', 1169, 0, 99999);
    var numOfAnswers = 4;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('xsHK9mlxWkc=', 1169, -1000, 1000),DecodeDecimal('GNfyE14ppkg=', 1169, -1000, 1000),DecodeDecimal('GNfyE14ppkg=', 1169, -1000, 1000));
    question.answers.length = 0;
    question.num = 77;
    question.isSingleAns = false;
    question.shortTextQuestion = "What will Laertes use in the duel to ensure Hamlet's death?";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('xsHK9mlxWkc=', 1171, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "A false surrender trick";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('zjYwUOubGRg=', 1173, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "A poisoned blade tip";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('zjYwUOubGRg=', 1175, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, 1, 0, '');
    answer3.shortTextAnswer = "A hidden blade beneath his cloak";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('JzQkw/9y/Lw=', 1177, -1, 1);
    if (valuation4 === -2) PrintWrongKeyword(questionIndex);
    var choice4 = GetMultipleAnswerChoice(questionIndex, 3);
    if (choice4 === 1) question.noChoice = false;
    var answer4 = new Answer(choice4, valuation4, 1, 0, '');
    answer4.shortTextAnswer = "A second attacker in disguise";
    answer4.shortTextRemark = "";
    question.answers.push(answer4);
    return question;

}
/* Code generated function */
function InitQuestion78()
{
    const type = QMAKE_MULTIANS;
    const questionIndex = 77;
    var weight = DecodeNumber('1xEMmwTubCk=', 1538, 0, 99999);
    var numOfAnswers = 4;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('1xEMmwTubCk=', 1538, -1000, 1000),DecodeDecimal('FmDadff+xtM=', 1538, -1000, 1000),DecodeDecimal('FmDadff+xtM=', 1538, -1000, 1000));
    question.answers.length = 0;
    question.num = 78;
    question.isSingleAns = false;
    question.shortTextQuestion = "What backup plan does Claudius prepare in case the blade fails? ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('1xEMmwTubCk=', 1540, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "A crossbow in the balcony";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('klwoB+A5J4M=', 1542, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "A guard hidden in the room";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('ltnCNCgffd0=', 1544, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, 1, 0, '');
    answer3.shortTextAnswer = "A poison cup for Hamlet";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('ltnCNCgffd0=', 1546, -1, 1);
    if (valuation4 === -2) PrintWrongKeyword(questionIndex);
    var choice4 = GetMultipleAnswerChoice(questionIndex, 3);
    if (choice4 === 1) question.noChoice = false;
    var answer4 = new Answer(choice4, valuation4, 1, 0, '');
    answer4.shortTextAnswer = "A collapsing stage trap";
    answer4.shortTextRemark = "";
    question.answers.push(answer4);
    return question;

}
/* Code generated function */
function InitQuestion79()
{
    const type = QMAKE_MULTIANS;
    const questionIndex = 78;
    var weight = DecodeNumber('lyQo6OB6s4k=', 907, 0, 99999);
    var numOfAnswers = 4;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('lyQo6OB6s4k=', 907, -1000, 1000),DecodeDecimal('xhZLagBxQlc=', 907, -1000, 1000),DecodeDecimal('xhZLagBxQlc=', 907, -1000, 1000));
    question.answers.length = 0;
    question.num = 79;
    question.isSingleAns = false;
    question.shortTextQuestion = "What does Claudius say about Gertrude and the poison? ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('lyQo6OB6s4k=', 909, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "She helped him choose the cup";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('UhpfHi4OGzg=', 911, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "She is unaware of the poison plan";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('UhpfHi4OGzg=', 913, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, 1, 0, '');
    answer3.shortTextAnswer = "She must drink first to test it";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('l4ePwD/FQ9s=', 915, -1, 1);
    if (valuation4 === -2) PrintWrongKeyword(questionIndex);
    var choice4 = GetMultipleAnswerChoice(questionIndex, 3);
    if (choice4 === 1) question.noChoice = false;
    var answer4 = new Answer(choice4, valuation4, 1, 0, '');
    answer4.shortTextAnswer = "She will deliver it to Hamlet";
    answer4.shortTextRemark = "";
    question.answers.push(answer4);
    return question;

}
/* Code generated function */
function InitQuestion80()
{
    const type = QMAKE_MULTIANS;
    const questionIndex = 79;
    var weight = DecodeNumber('ysfYr1lDXfo=', 917, 0, 99999);
    var numOfAnswers = 4;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('ysfYr1lDXfo=', 917, -1000, 1000),DecodeDecimal('Ch6ICwhl1iI=', 917, -1000, 1000),DecodeDecimal('Ch6ICwhl1iI=', 917, -1000, 1000));
    question.answers.length = 0;
    question.num = 80;
    question.isSingleAns = false;
    question.shortTextQuestion = "What central theme is reinforced in Act IV? ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('KiIE/e/6RFw=', 919, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "Madness and manipulation";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('KiIE/e/6RFw=', 921, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "Love as a source of strength";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('B3BgfDXeg24=', 1759, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, 1, 0, '');
    answer3.shortTextAnswer = "Joy through political alliance";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('Xj9gknzcC1w=', 1761, -1, 1);
    if (valuation4 === -2) PrintWrongKeyword(questionIndex);
    var choice4 = GetMultipleAnswerChoice(questionIndex, 3);
    if (choice4 === 1) question.noChoice = false;
    var answer4 = new Answer(choice4, valuation4, 1, 0, '');
    answer4.shortTextAnswer = "Nature overcoming corruption";
    answer4.shortTextRemark = "";
    question.answers.push(answer4);
    return question;

}
/* Code generated function */
function InitQuestion81()
{
    const type = QMAKE_MULTIANS;
    const questionIndex = 80;
    var weight = DecodeNumber('epbtyUI0s0A=', 1122, 0, 99999);
    var numOfAnswers = 4;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('epbtyUI0s0A=', 1122, -1000, 1000),DecodeDecimal('UC8VU2ZBwpQ=', 1122, -1000, 1000),DecodeDecimal('UC8VU2ZBwpQ=', 1122, -1000, 1000));
    question.answers.length = 0;
    question.num = 81;
    question.isSingleAns = false;
    question.shortTextQuestion = "Where does Act V begin?";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('epbtyUI0s0A=', 1124, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "In the palace throne room";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('kpEvQJfM/60=', 1126, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "On a ship returning to Denmark";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('lldIHQ/s2OA=', 1128, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, 1, 0, '');
    answer3.shortTextAnswer = "At a church near Elsinore";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('sPZtgYHgFIo=', 1130, -1, 1);
    if (valuation4 === -2) PrintWrongKeyword(questionIndex);
    var choice4 = GetMultipleAnswerChoice(questionIndex, 3);
    if (choice4 === 1) question.noChoice = false;
    var answer4 = new Answer(choice4, valuation4, 1, 0, '');
    answer4.shortTextAnswer = "In a graveyard near the castle";
    answer4.shortTextRemark = "";
    question.answers.push(answer4);
    return question;

}
/* Code generated function */
function InitQuestion82()
{
    const type = QMAKE_MULTIANS;
    const questionIndex = 81;
    var weight = DecodeNumber('oK44qsIs6kg=', 1491, 0, 99999);
    var numOfAnswers = 4;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('oK44qsIs6kg=', 1491, -1000, 1000),DecodeDecimal('rUcD19WhwEU=', 1491, -1000, 1000),DecodeDecimal('rUcD19WhwEU=', 1491, -1000, 1000));
    question.answers.length = 0;
    question.num = 82;
    question.isSingleAns = false;
    question.shortTextQuestion = "What are the gravediggers debating at the start of the act?";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('oK44qsIs6kg=', 1493, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "Whether Ophelia’s death was suicide";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('HN1y8UL1EE0=', 1495, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "If Fortinbras should invade";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('vTiDR2R1pU4=', 1497, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, 1, 0, '');
    answer3.shortTextAnswer = "Whether Hamlet is still mad";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('vTiDR2R1pU4=', 1499, -1, 1);
    if (valuation4 === -2) PrintWrongKeyword(questionIndex);
    var choice4 = GetMultipleAnswerChoice(questionIndex, 3);
    if (choice4 === 1) question.noChoice = false;
    var answer4 = new Answer(choice4, valuation4, 1, 0, '');
    answer4.shortTextAnswer = "How Claudius came to power";
    answer4.shortTextRemark = "";
    question.answers.push(answer4);
    return question;

}
/* Code generated function */
function InitQuestion83()
{
    const type = QMAKE_MULTIANS;
    const questionIndex = 82;
    var weight = DecodeNumber('0YhOb8S45s4=', 1501, 0, 99999);
    var numOfAnswers = 4;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('0YhOb8S45s4=', 1501, -1000, 1000),DecodeDecimal('OjHJEBMGyUY=', 1501, -1000, 1000),DecodeDecimal('OjHJEBMGyUY=', 1501, -1000, 1000));
    question.answers.length = 0;
    question.num = 83;
    question.isSingleAns = false;
    question.shortTextQuestion = "What joke does the First Gravedigger make about grave ownership?";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('0YhOb8S45s4=', 1503, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "That the dead pay no taxes";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('mPQ3pZYTA7A=', 1505, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "That the grave belongs to no one";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('55F+tHxdAek=', 1343, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, 1, 0, '');
    answer3.shortTextAnswer = "That only kings lie there forever";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('uwB00ZxDX/M=', 1345, -1, 1);
    if (valuation4 === -2) PrintWrongKeyword(questionIndex);
    var choice4 = GetMultipleAnswerChoice(questionIndex, 3);
    if (choice4 === 1) question.noChoice = false;
    var answer4 = new Answer(choice4, valuation4, 1, 0, '');
    answer4.shortTextAnswer = "That the grave is his until the end";
    answer4.shortTextRemark = "";
    question.answers.push(answer4);
    return question;

}
/* Code generated function */
function InitQuestion84()
{
    const type = QMAKE_MULTIANS;
    const questionIndex = 83;
    var weight = DecodeNumber('vSRNuAa+9rY=', 1347, 0, 99999);
    var numOfAnswers = 4;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('vSRNuAa+9rY=', 1347, -1000, 1000),DecodeDecimal('UbbO60UpC7Q=', 1347, -1000, 1000),DecodeDecimal('UbbO60UpC7Q=', 1347, -1000, 1000));
    question.answers.length = 0;
    question.num = 84;
    question.isSingleAns = false;
    question.shortTextQuestion = "Who was Yorick, the man whose skull Hamlet holds?";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('vSRNuAa+9rY=', 1349, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "A noble who served Polonius";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('LVdJOfIGR6U=', 1351, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "A Danish soldier killed in battle";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('G6mkYUT+R4c=', 1353, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, 1, 0, '');
    answer3.shortTextAnswer = "A servant who betrayed the king";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('gOD3Il/RO0Q=', 1714, -1, 1);
    if (valuation4 === -2) PrintWrongKeyword(questionIndex);
    var choice4 = GetMultipleAnswerChoice(questionIndex, 3);
    if (choice4 === 1) question.noChoice = false;
    var answer4 = new Answer(choice4, valuation4, 1, 0, '');
    answer4.shortTextAnswer = "A former court jester Hamlet knew";
    answer4.shortTextRemark = "";
    question.answers.push(answer4);
    return question;

}
/* Code generated function */
function InitQuestion85()
{
    const type = QMAKE_MULTIANS;
    const questionIndex = 84;
    var weight = DecodeNumber('7NntC90KrgM=', 1716, 0, 99999);
    var numOfAnswers = 4;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('7NntC90KrgM=', 1716, -1000, 1000),DecodeDecimal('HJ75SPRpKmo=', 1716, -1000, 1000),DecodeDecimal('HJ75SPRpKmo=', 1716, -1000, 1000));
    question.answers.length = 0;
    question.num = 85;
    question.isSingleAns = false;
    question.shortTextQuestion = "What does Hamlet reflect on while holding the skull?";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('7NntC90KrgM=', 1718, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "The fate of noblemen";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('4f5qitk/P+Y=', 1720, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "The pain of losing Ophelia";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('qU1CwVltAGs=', 1722, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, 1, 0, '');
    answer3.shortTextAnswer = "The inevitability of death";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('qU1CwVltAGs=', 1724, -1, 1);
    if (valuation4 === -2) PrintWrongKeyword(questionIndex);
    var choice4 = GetMultipleAnswerChoice(questionIndex, 3);
    if (choice4 === 1) question.noChoice = false;
    var answer4 = new Answer(choice4, valuation4, 1, 0, '');
    answer4.shortTextAnswer = "His father’s murder";
    answer4.shortTextRemark = "";
    question.answers.push(answer4);
    return question;

}
/* Code generated function */
function InitQuestion86()
{
    const type = QMAKE_MULTIANS;
    const questionIndex = 85;
    var weight = DecodeNumber('E5Joy8yUDQk=', 1562, 0, 99999);
    var numOfAnswers = 4;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('E5Joy8yUDQk=', 1562, -1000, 1000),DecodeDecimal('FvIvJJerCCc=', 1562, -1000, 1000),DecodeDecimal('FvIvJJerCCc=', 1562, -1000, 1000));
    question.answers.length = 0;
    question.num = 86;
    question.isSingleAns = false;
    question.shortTextQuestion = "Who is buried during the graveyard scene?";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('E5Joy8yUDQk=', 1564, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "Laertes ";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('Xpa01GSKzbM=', 1566, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "Queen Gertrude";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('1h5yjj/eBZY=', 1568, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, 1, 0, '');
    answer3.shortTextAnswer = "Ophelia";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('1h5yjj/eBZY=', 1570, -1, 1);
    if (valuation4 === -2) PrintWrongKeyword(questionIndex);
    var choice4 = GetMultipleAnswerChoice(questionIndex, 3);
    if (choice4 === 1) question.noChoice = false;
    var answer4 = new Answer(choice4, valuation4, 1, 0, '');
    answer4.shortTextAnswer = "Polonius";
    answer4.shortTextRemark = "";
    question.answers.push(answer4);
    return question;

}
/* Code generated function */
function InitQuestion87()
{
    const type = QMAKE_MULTIANS;
    const questionIndex = 86;
    var weight = DecodeNumber('gm2i6+f/Atg=', 931, 0, 99999);
    var numOfAnswers = 4;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('gm2i6+f/Atg=', 931, -1000, 1000),DecodeDecimal('XzRtcDmRl6E=', 931, -1000, 1000),DecodeDecimal('XzRtcDmRl6E=', 931, -1000, 1000));
    question.answers.length = 0;
    question.num = 87;
    question.isSingleAns = false;
    question.shortTextQuestion = "Why is there doubt about Ophelia's burial?";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('gm2i6+f/Atg=', 933, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "Her body was never found";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('GsvL3lr+J3k=', 935, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "Hamlet forbade the service";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('yFi8BbzqDGM=', 937, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, 1, 0, '');
    answer3.shortTextAnswer = "The king refused a proper burial";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('y0Q0JkthhZc=', 939, -1, 1);
    if (valuation4 === -2) PrintWrongKeyword(questionIndex);
    var choice4 = GetMultipleAnswerChoice(questionIndex, 3);
    if (choice4 === 1) question.noChoice = false;
    var answer4 = new Answer(choice4, valuation4, 1, 0, '');
    answer4.shortTextAnswer = "She may have taken her own life";
    answer4.shortTextRemark = "";
    question.answers.push(answer4);
    return question;

}
/* Code generated function */
function InitQuestion88()
{
    const type = QMAKE_MULTIANS;
    const questionIndex = 87;
    var weight = DecodeNumber('IrMdr00ajtE=', 941, 0, 99999);
    var numOfAnswers = 4;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('IrMdr00ajtE=', 941, -1000, 1000),DecodeDecimal('gJulcVKdnXg=', 941, -1000, 1000),DecodeDecimal('gJulcVKdnXg=', 941, -1000, 1000));
    question.answers.length = 0;
    question.num = 88;
    question.isSingleAns = false;
    question.shortTextQuestion = "How does Laertes react at Ophelia's grave?";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('IrMdr00ajtE=', 943, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "He falls silent and weeps";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('ob4V7tPfe04=', 945, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "He runs from the scene in grief";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('13GXG9ikKGI=', 947, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, 1, 0, '');
    answer3.shortTextAnswer = "He leaps into the grave with her";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('13GXG9ikKGI=', 949, -1, 1);
    if (valuation4 === -2) PrintWrongKeyword(questionIndex);
    var choice4 = GetMultipleAnswerChoice(questionIndex, 3);
    if (choice4 === 1) question.noChoice = false;
    var answer4 = new Answer(choice4, valuation4, 1, 0, '');
    answer4.shortTextAnswer = "He accuses Hamlet of her death";
    answer4.shortTextRemark = "";
    question.answers.push(answer4);
    return question;

}
/* Code generated function */
function InitQuestion89()
{
    const type = QMAKE_MULTIANS;
    const questionIndex = 88;
    var weight = DecodeNumber('DvPtZ0YX4e8=', 1310, 0, 99999);
    var numOfAnswers = 4;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('DvPtZ0YX4e8=', 1310, -1000, 1000),DecodeDecimal('sXYKi+TLACc=', 1310, -1000, 1000),DecodeDecimal('sXYKi+TLACc=', 1310, -1000, 1000));
    question.answers.length = 0;
    question.num = 89;
    question.isSingleAns = false;
    question.shortTextQuestion = "What does Hamlet do during the funeral?";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('DvPtZ0YX4e8=', 1312, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "Attacks Claudius with a dagger";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('nHH1/j0NIUE=', 1314, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "Offers a eulogy for Ophelia";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('yMze2EbkPFw=', 1316, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, 1, 0, '');
    answer3.shortTextAnswer = "Declares his love and fights Laertes";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('yMze2EbkPFw=', 1318, -1, 1);
    if (valuation4 === -2) PrintWrongKeyword(questionIndex);
    var choice4 = GetMultipleAnswerChoice(questionIndex, 3);
    if (choice4 === 1) question.noChoice = false;
    var answer4 = new Answer(choice4, valuation4, 1, 0, '');
    answer4.shortTextAnswer = "Leaves the graveyard quietly";
    answer4.shortTextRemark = "";
    question.answers.push(answer4);
    return question;

}
/* Code generated function */
function InitQuestion90()
{
    const type = QMAKE_MULTIANS;
    const questionIndex = 89;
    var weight = DecodeNumber('U9ZYhuPdusk=', 1320, 0, 99999);
    var numOfAnswers = 4;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('U9ZYhuPdusk=', 1320, -1000, 1000),DecodeDecimal('xyyfAn2GzhU=', 1320, -1000, 1000),DecodeDecimal('xyyfAn2GzhU=', 1320, -1000, 1000));
    question.answers.length = 0;
    question.num = 90;
    question.isSingleAns = false;
    question.shortTextQuestion = "How does Claudius respond to the fight at the funeral?";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('U9ZYhuPdusk=', 1322, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "He orders Hamlet arrested again";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('3ATOwj0Keok=', 1160, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "He separates them and offers peace";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('Ka0aldPsd6w=', 1162, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, 1, 0, '');
    answer3.shortTextAnswer = "He scolds Laertes for overreacting";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('r/LXwakmYko=', 1164, -1, 1);
    if (valuation4 === -2) PrintWrongKeyword(questionIndex);
    var choice4 = GetMultipleAnswerChoice(questionIndex, 3);
    if (choice4 === 1) question.noChoice = false;
    var answer4 = new Answer(choice4, valuation4, 1, 0, '');
    answer4.shortTextAnswer = "He encourages Laertes to remain angry";
    answer4.shortTextRemark = "";
    question.answers.push(answer4);
    return question;

}
/* Code generated function */
function InitQuestion91()
{
    const type = QMAKE_MULTIANS;
    const questionIndex = 90;
    var weight = DecodeNumber('QZj5fvsFXII=', 1166, 0, 99999);
    var numOfAnswers = 4;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('QZj5fvsFXII=', 1166, -1000, 1000),DecodeDecimal('TOfMpOJdezU=', 1166, -1000, 1000),DecodeDecimal('TOfMpOJdezU=', 1166, -1000, 1000));
    question.answers.length = 0;
    question.num = 91;
    question.isSingleAns = false;
    question.shortTextQuestion = "What does Hamlet explain to Horatio about Rosencrantz and Guildenstern?";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('QZj5fvsFXII=', 1168, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "He gave them new letters of peace";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('GNfyE14ppkg=', 1170, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "He forgave them before leaving";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('E51xThYWwKE=', 1172, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, 1, 0, '');
    answer3.shortTextAnswer = "He had them executed in England";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('E51xThYWwKE=', 1174, -1, 1);
    if (valuation4 === -2) PrintWrongKeyword(questionIndex);
    var choice4 = GetMultipleAnswerChoice(questionIndex, 3);
    if (choice4 === 1) question.noChoice = false;
    var answer4 = new Answer(choice4, valuation4, 1, 0, '');
    answer4.shortTextAnswer = "He let them escape with the pirates";
    answer4.shortTextRemark = "";
    question.answers.push(answer4);
    return question;

}
/* Code generated function */
function InitQuestion92()
{
    const type = QMAKE_MULTIANS;
    const questionIndex = 91;
    var weight = DecodeNumber('DswLq8LG2ic=', 1535, 0, 99999);
    var numOfAnswers = 4;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('DswLq8LG2ic=', 1535, -1000, 1000),DecodeDecimal('M3KSbG/bnwo=', 1535, -1000, 1000),DecodeDecimal('M3KSbG/bnwo=', 1535, -1000, 1000));
    question.answers.length = 0;
    question.num = 92;
    question.isSingleAns = false;
    question.shortTextQuestion = "How did Hamlet survive the trip to England?";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('DswLq8LG2ic=', 1537, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "A storm forced the ship back early";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('FmDadff+xtM=', 1539, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "Horatio arrived and saved him";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('E11al5BNHj0=', 1541, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, 1, 0, '');
    answer3.shortTextAnswer = "Pirates rescued him during a sea battle";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('E11al5BNHj0=', 1543, -1, 1);
    if (valuation4 === -2) PrintWrongKeyword(questionIndex);
    var choice4 = GetMultipleAnswerChoice(questionIndex, 3);
    if (choice4 === 1) question.noChoice = false;
    var answer4 = new Answer(choice4, valuation4, 1, 0, '');
    answer4.shortTextAnswer = "He escaped by swimming to shore";
    answer4.shortTextRemark = "";
    question.answers.push(answer4);
    return question;

}
/* Code generated function */
function InitQuestion93()
{
    const type = QMAKE_MULTIANS;
    const questionIndex = 92;
    var weight = DecodeNumber('K68XHzK46O0=', 1545, 0, 99999);
    var numOfAnswers = 4;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('K68XHzK46O0=', 1545, -1000, 1000),DecodeDecimal('ltnCNCgffd0=', 1545, -1000, 1000),DecodeDecimal('ltnCNCgffd0=', 1545, -1000, 1000));
    question.answers.length = 0;
    question.num = 93;
    question.isSingleAns = false;
    question.shortTextQuestion = "What does Osric deliver to Hamlet?";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('K68XHzK46O0=', 1547, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "News of Ophelia’s secret lover";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('+4Nj2+cgAow=', 1908, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "A challenge to a fencing match";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('+4Nj2+cgAow=', 1910, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, 1, 0, '');
    answer3.shortTextAnswer = "A warning about Fortinbras";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('7AdIGM47nOM=', 1912, -1, 1);
    if (valuation4 === -2) PrintWrongKeyword(questionIndex);
    var choice4 = GetMultipleAnswerChoice(questionIndex, 3);
    if (choice4 === 1) question.noChoice = false;
    var answer4 = new Answer(choice4, valuation4, 1, 0, '');
    answer4.shortTextAnswer = "A letter of pardon from Claudius";
    answer4.shortTextRemark = "";
    question.answers.push(answer4);
    return question;

}
/* Code generated function */
function InitQuestion94()
{
    const type = QMAKE_MULTIANS;
    const questionIndex = 93;
    var weight = DecodeNumber('6sLy//f7sI0=', 1914, 0, 99999);
    var numOfAnswers = 4;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('6sLy//f7sI0=', 1914, -1000, 1000),DecodeDecimal('WjAxir7EOpE=', 1914, -1000, 1000),DecodeDecimal('WjAxir7EOpE=', 1914, -1000, 1000));
    question.answers.length = 0;
    question.num = 94;
    question.isSingleAns = false;
    question.shortTextQuestion = "What is Osric's role in the court?";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('6sLy//f7sI0=', 1916, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "A soldier loyal to Fortinbras";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('hpmuggiyx9A=', 1918, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "A foolish, flattering courtier";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('hpmuggiyx9A=', 1920, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, 1, 0, '');
    answer3.shortTextAnswer = "A priest who blesses the duel";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('IV/O24fYPFk=', 1922, -1, 1);
    if (valuation4 === -2) PrintWrongKeyword(questionIndex);
    var choice4 = GetMultipleAnswerChoice(questionIndex, 3);
    if (choice4 === 1) question.noChoice = false;
    var answer4 = new Answer(choice4, valuation4, 1, 0, '');
    answer4.shortTextAnswer = "A servant of Gertrude";
    answer4.shortTextRemark = "";
    question.answers.push(answer4);
    return question;

}
/* Code generated function */
function InitQuestion95()
{
    const type = QMAKE_MULTIANS;
    const questionIndex = 94;
    var weight = DecodeNumber('mh1nQo4fero=', 1760, 0, 99999);
    var numOfAnswers = 4;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('mh1nQo4fero=', 1760, -1000, 1000),DecodeDecimal('Xj9gknzcC1w=', 1760, -1000, 1000),DecodeDecimal('Xj9gknzcC1w=', 1760, -1000, 1000));
    question.answers.length = 0;
    question.num = 95;
    question.isSingleAns = false;
    question.shortTextQuestion = "What type of duel is arranged between Hamlet and Laertes?";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('wxx3p7p+fE8=', 1762, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "A sword fight with poison";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('wxx3p7p+fE8=', 1764, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "A competition of archery";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('kOFeoFAsXRM=', 1766, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, 1, 0, '');
    answer3.shortTextAnswer = "A verbal contest of wit";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('uA6+uq8d+pk=', 1768, -1, 1);
    if (valuation4 === -2) PrintWrongKeyword(questionIndex);
    var choice4 = GetMultipleAnswerChoice(questionIndex, 3);
    if (choice4 === 1) question.noChoice = false;
    var answer4 = new Answer(choice4, valuation4, 1, 0, '');
    answer4.shortTextAnswer = "A race across the castle grounds";
    answer4.shortTextRemark = "";
    question.answers.push(answer4);
    return question;

}
/* Code generated function */
function InitQuestion96()
{
    const type = QMAKE_MULTIANS;
    const questionIndex = 95;
    var weight = DecodeNumber('wy9VWQPwBJk=', 1770, 0, 99999);
    var numOfAnswers = 4;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('wy9VWQPwBJk=', 1770, -1000, 1000),DecodeDecimal('rQHQAXHgfLY=', 1770, -1000, 1000),DecodeDecimal('rQHQAXHgfLY=', 1770, -1000, 1000));
    question.answers.length = 0;
    question.num = 96;
    question.isSingleAns = false;
    question.shortTextQuestion = "What does Claudius prepare for Hamlet during the duel?";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('wy9VWQPwBJk=', 1772, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "A forged will and testament";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('bQ/bXLm7xNY=', 1774, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "A fake injury to distract him";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('8+KDUGZ7KKQ=', 1776, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, 1, 0, '');
    answer3.shortTextAnswer = "A poisoned helmet";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('MgtFTyJszE4=', 1137, -1, 1);
    if (valuation4 === -2) PrintWrongKeyword(questionIndex);
    var choice4 = GetMultipleAnswerChoice(questionIndex, 3);
    if (choice4 === 1) question.noChoice = false;
    var answer4 = new Answer(choice4, valuation4, 1, 0, '');
    answer4.shortTextAnswer = "A poisoned drink in a goblet";
    answer4.shortTextRemark = "";
    question.answers.push(answer4);
    return question;

}
/* Code generated function */
function InitQuestion97()
{
    const type = QMAKE_MULTIANS;
    const questionIndex = 96;
    var weight = DecodeNumber('8eQB7fBH76E=', 1139, 0, 99999);
    var numOfAnswers = 4;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('8eQB7fBH76E=', 1139, -1000, 1000),DecodeDecimal('Zcev7SjOlw8=', 1139, -1000, 1000),DecodeDecimal('Zcev7SjOlw8=', 1139, -1000, 1000));
    question.answers.length = 0;
    question.num = 97;
    question.isSingleAns = false;
    question.shortTextQuestion = "Who drinks the poison intended for Hamlet?";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('8eQB7fBH76E=', 1141, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "Horatio";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('KnsCWc7ah6g=', 1143, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "Laertes";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('KJFd8NarqPc=', 1145, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, 1, 0, '');
    answer3.shortTextAnswer = "Claudius himself";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('8K28ONVyaQk=', 1147, -1, 1);
    if (valuation4 === -2) PrintWrongKeyword(questionIndex);
    var choice4 = GetMultipleAnswerChoice(questionIndex, 3);
    if (choice4 === 1) question.noChoice = false;
    var answer4 = new Answer(choice4, valuation4, 1, 0, '');
    answer4.shortTextAnswer = "Gertrude";
    answer4.shortTextRemark = "";
    question.answers.push(answer4);
    return question;

}
/* Code generated function */
function InitQuestion98()
{
    const type = QMAKE_MULTIANS;
    const questionIndex = 97;
    var weight = DecodeNumber('A031G2izy+c=', 1149, 0, 99999);
    var numOfAnswers = 4;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('A031G2izy+c=', 1149, -1000, 1000),DecodeDecimal('+KRrfuBJxRI=', 1149, -1000, 1000),DecodeDecimal('+KRrfuBJxRI=', 1149, -1000, 1000));
    question.answers.length = 0;
    question.num = 98;
    question.isSingleAns = false;
    question.shortTextQuestion = "What happens to Laertes during the duel?";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('gfBabEYzv0A=', 1151, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "He is wounded by his own blade";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('C7FuLIFt9w4=', 990, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "He escapes to Norway";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('Xs2q/0ELifM=', 992, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, 1, 0, '');
    answer3.shortTextAnswer = "He is unscathed and wins";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('iuHBs0IhnQs=', 994, -1, 1);
    if (valuation4 === -2) PrintWrongKeyword(questionIndex);
    var choice4 = GetMultipleAnswerChoice(questionIndex, 3);
    if (choice4 === 1) question.noChoice = false;
    var answer4 = new Answer(choice4, valuation4, 1, 0, '');
    answer4.shortTextAnswer = "He is killed by Hamlet’s guards";
    answer4.shortTextRemark = "";
    question.answers.push(answer4);
    return question;

}
/* Code generated function */
function InitQuestion99()
{
    const type = QMAKE_MULTIANS;
    const questionIndex = 98;
    var weight = DecodeNumber('VVYrZI0CUL4=', 996, 0, 99999);
    var numOfAnswers = 4;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('VVYrZI0CUL4=', 996, -1000, 1000),DecodeDecimal('C9xR64s21Go=', 996, -1000, 1000),DecodeDecimal('C9xR64s21Go=', 996, -1000, 1000));
    question.answers.length = 0;
    question.num = 99;
    question.isSingleAns = false;
    question.shortTextQuestion = "What does Laertes do before dying?";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('e3bBYryFfEs=', 998, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "Asks Hamlet for forgiveness";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('e3bBYryFfEs=', 1000, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "Escapes through a secret door";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('uB7W1dfF64g=', 1002, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, 1, 0, '');
    answer3.shortTextAnswer = "Names Fortinbras as king";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('gSJMQ9mG4CI=', 1362, -1, 1);
    if (valuation4 === -2) PrintWrongKeyword(questionIndex);
    var choice4 = GetMultipleAnswerChoice(questionIndex, 3);
    if (choice4 === 1) question.noChoice = false;
    var answer4 = new Answer(choice4, valuation4, 1, 0, '');
    answer4.shortTextAnswer = "Accuses Horatio of treason";
    answer4.shortTextRemark = "";
    question.answers.push(answer4);
    return question;

}
/* Code generated function */
function InitQuestion100()
{
    const type = QMAKE_MULTIANS;
    const questionIndex = 99;
    var weight = DecodeNumber('b36CcDeJ77s=', 1364, 0, 99999);
    var numOfAnswers = 4;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('b36CcDeJ77s=', 1364, -1000, 1000),DecodeDecimal('NG70kc0525g=', 1364, -1000, 1000),DecodeDecimal('NG70kc0525g=', 1364, -1000, 1000));
    question.answers.length = 0;
    question.num = 100;
    question.isSingleAns = false;
    question.shortTextQuestion = "Who becomes ruler of Denmark at the end of the play?";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('b36CcDeJ77s=', 1366, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "Horatio the scholar";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('tckX0wvNe1c=', 1368, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "Claudius’s nephew";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('H9BACjwVY5I=', 1370, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, 1, 0, '');
    answer3.shortTextAnswer = "Fortinbras of Norway";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('H9BACjwVY5I=', 1372, -1, 1);
    if (valuation4 === -2) PrintWrongKeyword(questionIndex);
    var choice4 = GetMultipleAnswerChoice(questionIndex, 3);
    if (choice4 === 1) question.noChoice = false;
    var answer4 = new Answer(choice4, valuation4, 1, 0, '');
    answer4.shortTextAnswer = "Laertes’s younger brother";
    answer4.shortTextRemark = "";
    question.answers.push(answer4);
    return question;

}
/* Code generated function */
function InitQuestion101()
{
    var choice, valuation;
    const type = QMAKE_FILLGAP;
    const questionIndex = 100;
    var weight = DecodeNumber('T8C/Fy+S6u0=', 1570, 0, 99999);
    var numOfAnswers = 20;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('dgTlAfFLx58=', 1570, -1000, 1000),DecodeDecimal('ipRBQwJExlc=', 1570, -1000, 1000),DecodeDecimal('ipRBQwJExlc=', 1570, -1000, 1000));
    question.num = 101;
    question.answers.length = 0;
    question.shortTextQuestion = "Complete the summaury with the correct missing words.";
    question.noChoice = false;
    choice = $('#idGap101_0').val();
    if ((choice == null) || (choice === '')) question.noChoice=true;
    valuation = new Array(3);
    valuation[0] = unescape(DecodeString('nweha/9OjcI='));
    valuation[1] = unescape(DecodeString('R6gDthw3Nfo='));
    valuation[2] = unescape(DecodeString('zadF9fHoEnQ='));
    var answer0 = new Answer(choice,valuation,1,0,'');
    question.answers.push(answer0);
    choice = $('#idGap101_1').val();
    if ((choice == null) || (choice === '')) question.noChoice=true;
    valuation = new Array(1);
    valuation[0] = unescape(DecodeString('jCvbxQi/O4w='));
    var answer1 = new Answer(choice,valuation,1,0,'');
    question.answers.push(answer1);
    choice = $('#idGap101_2').val();
    if ((choice == null) || (choice === '')) question.noChoice=true;
    valuation = new Array(1);
    valuation[0] = unescape(DecodeString('RgE9ZZYAXjM='));
    var answer2 = new Answer(choice,valuation,1,0,'');
    question.answers.push(answer2);
    choice = $('#idGap101_3').val();
    if ((choice == null) || (choice === '')) question.noChoice=true;
    valuation = new Array(1);
    valuation[0] = unescape(DecodeString('a5agKtTMxTk='));
    var answer3 = new Answer(choice,valuation,1,0,'');
    question.answers.push(answer3);
    choice = $('#idGap101_4').val();
    if ((choice == null) || (choice === '')) question.noChoice=true;
    valuation = new Array(1);
    valuation[0] = unescape(DecodeString('Ij86Bf4bjo4='));
    var answer4 = new Answer(choice,valuation,1,0,'');
    question.answers.push(answer4);
    choice = $('#idGap101_5').val();
    if ((choice == null) || (choice === '')) question.noChoice=true;
    valuation = new Array(1);
    valuation[0] = unescape(DecodeString('paStYLW/qWg='));
    var answer5 = new Answer(choice,valuation,1,0,'');
    question.answers.push(answer5);
    choice = $('#idGap101_6').val();
    if ((choice == null) || (choice === '')) question.noChoice=true;
    valuation = new Array(1);
    valuation[0] = unescape(DecodeString('RgE9ZZYAXjM='));
    var answer6 = new Answer(choice,valuation,1,0,'');
    question.answers.push(answer6);
    choice = $('#idGap101_7').val();
    if ((choice == null) || (choice === '')) question.noChoice=true;
    valuation = new Array(1);
    valuation[0] = unescape(DecodeString('vjHJV5Zy2U0='));
    var answer7 = new Answer(choice,valuation,1,0,'');
    question.answers.push(answer7);
    choice = $('#idGap101_8').val();
    if ((choice == null) || (choice === '')) question.noChoice=true;
    valuation = new Array(1);
    valuation[0] = unescape(DecodeString('YcnBy2T6ZNw='));
    var answer8 = new Answer(choice,valuation,1,0,'');
    question.answers.push(answer8);
    choice = $('#idGap101_9').val();
    if ((choice == null) || (choice === '')) question.noChoice=true;
    valuation = new Array(1);
    valuation[0] = unescape(DecodeString('ZvRkMyQTdRk='));
    var answer9 = new Answer(choice,valuation,1,0,'');
    question.answers.push(answer9);
    choice = $('#idGap101_10').val();
    if ((choice == null) || (choice === '')) question.noChoice=true;
    valuation = new Array(1);
    valuation[0] = unescape(DecodeString('iAmYS0GNKcQ='));
    var answer10 = new Answer(choice,valuation,1,0,'');
    question.answers.push(answer10);
    choice = $('#idGap101_11').val();
    if ((choice == null) || (choice === '')) question.noChoice=true;
    valuation = new Array(1);
    valuation[0] = unescape(DecodeString('VPoSS7Td1H8='));
    var answer11 = new Answer(choice,valuation,1,0,'');
    question.answers.push(answer11);
    choice = $('#idGap101_12').val();
    if ((choice == null) || (choice === '')) question.noChoice=true;
    valuation = new Array(1);
    valuation[0] = unescape(DecodeString('zucXHgg83uF/x+Fk'));
    var answer12 = new Answer(choice,valuation,1,0,'');
    question.answers.push(answer12);
    choice = $('#idGap101_13').val();
    if ((choice == null) || (choice === '')) question.noChoice=true;
    valuation = new Array(1);
    valuation[0] = unescape(DecodeString('anrfq5m73ok='));
    var answer13 = new Answer(choice,valuation,1,0,'');
    question.answers.push(answer13);
    choice = $('#idGap101_14').val();
    if ((choice == null) || (choice === '')) question.noChoice=true;
    valuation = new Array(1);
    valuation[0] = unescape(DecodeString('IBeTe4hlgCM='));
    var answer14 = new Answer(choice,valuation,1,0,'');
    question.answers.push(answer14);
    choice = $('#idGap101_15').val();
    if ((choice == null) || (choice === '')) question.noChoice=true;
    valuation = new Array(1);
    valuation[0] = unescape(DecodeString('YcnBy2T6ZNw='));
    var answer15 = new Answer(choice,valuation,1,0,'');
    question.answers.push(answer15);
    choice = $('#idGap101_16').val();
    if ((choice == null) || (choice === '')) question.noChoice=true;
    valuation = new Array(1);
    valuation[0] = unescape(DecodeString('18xMSckBOGY='));
    var answer16 = new Answer(choice,valuation,1,0,'');
    question.answers.push(answer16);
    choice = $('#idGap101_17').val();
    if ((choice == null) || (choice === '')) question.noChoice=true;
    valuation = new Array(1);
    valuation[0] = unescape(DecodeString('jDrHN1gNvMKv7T73'));
    var answer17 = new Answer(choice,valuation,1,0,'');
    question.answers.push(answer17);
    choice = $('#idGap101_18').val();
    if ((choice == null) || (choice === '')) question.noChoice=true;
    valuation = new Array(1);
    valuation[0] = unescape(DecodeString('jCvbxQi/O4w='));
    var answer18 = new Answer(choice,valuation,1,0,'');
    question.answers.push(answer18);
    choice = $('#idGap101_19').val();
    if ((choice == null) || (choice === '')) question.noChoice=true;
    valuation = new Array(1);
    valuation[0] = unescape(DecodeString('PUJaz3i3aRk='));
    var answer19 = new Answer(choice,valuation,1,0,'');
    question.answers.push(answer19);
    return question;

}


/* Code generated function */
function ClearQuestion1()
{
    const questionIndex = 0;
    ClearMultipleAnswerChoice(questionIndex,0);
    ClearMultipleAnswerChoice(questionIndex,1);
    ClearMultipleAnswerChoice(questionIndex,2);
    ClearMultipleAnswerChoice(questionIndex,3);

}
/* Code generated function */
function ClearQuestion2()
{
    const questionIndex = 1;
    ClearMultipleAnswerChoice(questionIndex,0);
    ClearMultipleAnswerChoice(questionIndex,1);
    ClearMultipleAnswerChoice(questionIndex,2);
    ClearMultipleAnswerChoice(questionIndex,3);

}
/* Code generated function */
function ClearQuestion3()
{
    const questionIndex = 2;
    ClearMultipleAnswerChoice(questionIndex,0);
    ClearMultipleAnswerChoice(questionIndex,1);
    ClearMultipleAnswerChoice(questionIndex,2);
    ClearMultipleAnswerChoice(questionIndex,3);

}
/* Code generated function */
function ClearQuestion4()
{
    const questionIndex = 3;
    ClearMultipleAnswerChoice(questionIndex,0);
    ClearMultipleAnswerChoice(questionIndex,1);
    ClearMultipleAnswerChoice(questionIndex,2);
    ClearMultipleAnswerChoice(questionIndex,3);

}
/* Code generated function */
function ClearQuestion5()
{
    const questionIndex = 4;
    ClearMultipleAnswerChoice(questionIndex,0);
    ClearMultipleAnswerChoice(questionIndex,1);
    ClearMultipleAnswerChoice(questionIndex,2);
    ClearMultipleAnswerChoice(questionIndex,3);

}
/* Code generated function */
function ClearQuestion6()
{
    const questionIndex = 5;
    ClearMultipleAnswerChoice(questionIndex,0);
    ClearMultipleAnswerChoice(questionIndex,1);
    ClearMultipleAnswerChoice(questionIndex,2);
    ClearMultipleAnswerChoice(questionIndex,3);

}
/* Code generated function */
function ClearQuestion7()
{
    const questionIndex = 6;
    ClearMultipleAnswerChoice(questionIndex,0);
    ClearMultipleAnswerChoice(questionIndex,1);
    ClearMultipleAnswerChoice(questionIndex,2);
    ClearMultipleAnswerChoice(questionIndex,3);

}
/* Code generated function */
function ClearQuestion8()
{
    const questionIndex = 7;
    ClearMultipleAnswerChoice(questionIndex,0);
    ClearMultipleAnswerChoice(questionIndex,1);
    ClearMultipleAnswerChoice(questionIndex,2);
    ClearMultipleAnswerChoice(questionIndex,3);

}
/* Code generated function */
function ClearQuestion9()
{
    const questionIndex = 8;
    ClearMultipleAnswerChoice(questionIndex,0);
    ClearMultipleAnswerChoice(questionIndex,1);
    ClearMultipleAnswerChoice(questionIndex,2);
    ClearMultipleAnswerChoice(questionIndex,3);

}
/* Code generated function */
function ClearQuestion10()
{
    const questionIndex = 9;
    ClearMultipleAnswerChoice(questionIndex,0);
    ClearMultipleAnswerChoice(questionIndex,1);
    ClearMultipleAnswerChoice(questionIndex,2);
    ClearMultipleAnswerChoice(questionIndex,3);

}
/* Code generated function */
function ClearQuestion11()
{
    const questionIndex = 10;
    ClearMultipleAnswerChoice(questionIndex,0);
    ClearMultipleAnswerChoice(questionIndex,1);
    ClearMultipleAnswerChoice(questionIndex,2);
    ClearMultipleAnswerChoice(questionIndex,3);

}
/* Code generated function */
function ClearQuestion12()
{
    const questionIndex = 11;
    ClearMultipleAnswerChoice(questionIndex,0);
    ClearMultipleAnswerChoice(questionIndex,1);
    ClearMultipleAnswerChoice(questionIndex,2);
    ClearMultipleAnswerChoice(questionIndex,3);

}
/* Code generated function */
function ClearQuestion13()
{
    const questionIndex = 12;
    ClearMultipleAnswerChoice(questionIndex,0);
    ClearMultipleAnswerChoice(questionIndex,1);
    ClearMultipleAnswerChoice(questionIndex,2);
    ClearMultipleAnswerChoice(questionIndex,3);

}
/* Code generated function */
function ClearQuestion14()
{
    const questionIndex = 13;
    ClearMultipleAnswerChoice(questionIndex,0);
    ClearMultipleAnswerChoice(questionIndex,1);
    ClearMultipleAnswerChoice(questionIndex,2);
    ClearMultipleAnswerChoice(questionIndex,3);

}
/* Code generated function */
function ClearQuestion15()
{
    const questionIndex = 14;
    ClearMultipleAnswerChoice(questionIndex,0);
    ClearMultipleAnswerChoice(questionIndex,1);
    ClearMultipleAnswerChoice(questionIndex,2);
    ClearMultipleAnswerChoice(questionIndex,3);

}
/* Code generated function */
function ClearQuestion16()
{
    const questionIndex = 15;
    ClearMultipleAnswerChoice(questionIndex,0);
    ClearMultipleAnswerChoice(questionIndex,1);
    ClearMultipleAnswerChoice(questionIndex,2);
    ClearMultipleAnswerChoice(questionIndex,3);

}
/* Code generated function */
function ClearQuestion17()
{
    const questionIndex = 16;
    ClearMultipleAnswerChoice(questionIndex,0);
    ClearMultipleAnswerChoice(questionIndex,1);
    ClearMultipleAnswerChoice(questionIndex,2);
    ClearMultipleAnswerChoice(questionIndex,3);

}
/* Code generated function */
function ClearQuestion18()
{
    const questionIndex = 17;
    ClearMultipleAnswerChoice(questionIndex,0);
    ClearMultipleAnswerChoice(questionIndex,1);
    ClearMultipleAnswerChoice(questionIndex,2);
    ClearMultipleAnswerChoice(questionIndex,3);

}
/* Code generated function */
function ClearQuestion19()
{
    const questionIndex = 18;
    ClearMultipleAnswerChoice(questionIndex,0);
    ClearMultipleAnswerChoice(questionIndex,1);
    ClearMultipleAnswerChoice(questionIndex,2);
    ClearMultipleAnswerChoice(questionIndex,3);

}
/* Code generated function */
function ClearQuestion20()
{
    const questionIndex = 19;
    ClearMultipleAnswerChoice(questionIndex,0);
    ClearMultipleAnswerChoice(questionIndex,1);
    ClearMultipleAnswerChoice(questionIndex,2);
    ClearMultipleAnswerChoice(questionIndex,3);

}
/* Code generated function */
function ClearQuestion21()
{
    const questionIndex = 20;
    ClearMultipleAnswerChoice(questionIndex,0);
    ClearMultipleAnswerChoice(questionIndex,1);
    ClearMultipleAnswerChoice(questionIndex,2);
    ClearMultipleAnswerChoice(questionIndex,3);

}
/* Code generated function */
function ClearQuestion22()
{
    const questionIndex = 21;
    ClearMultipleAnswerChoice(questionIndex,0);
    ClearMultipleAnswerChoice(questionIndex,1);
    ClearMultipleAnswerChoice(questionIndex,2);
    ClearMultipleAnswerChoice(questionIndex,3);

}
/* Code generated function */
function ClearQuestion23()
{
    const questionIndex = 22;
    ClearMultipleAnswerChoice(questionIndex,0);
    ClearMultipleAnswerChoice(questionIndex,1);
    ClearMultipleAnswerChoice(questionIndex,2);
    ClearMultipleAnswerChoice(questionIndex,3);

}
/* Code generated function */
function ClearQuestion24()
{
    const questionIndex = 23;
    ClearMultipleAnswerChoice(questionIndex,0);
    ClearMultipleAnswerChoice(questionIndex,1);
    ClearMultipleAnswerChoice(questionIndex,2);
    ClearMultipleAnswerChoice(questionIndex,3);

}
/* Code generated function */
function ClearQuestion25()
{
    const questionIndex = 24;
    ClearMultipleAnswerChoice(questionIndex,0);
    ClearMultipleAnswerChoice(questionIndex,1);
    ClearMultipleAnswerChoice(questionIndex,2);
    ClearMultipleAnswerChoice(questionIndex,3);

}
/* Code generated function */
function ClearQuestion26()
{
    const questionIndex = 25;
    ClearMultipleAnswerChoice(questionIndex,0);
    ClearMultipleAnswerChoice(questionIndex,1);
    ClearMultipleAnswerChoice(questionIndex,2);
    ClearMultipleAnswerChoice(questionIndex,3);

}
/* Code generated function */
function ClearQuestion27()
{
    const questionIndex = 26;
    ClearMultipleAnswerChoice(questionIndex,0);
    ClearMultipleAnswerChoice(questionIndex,1);
    ClearMultipleAnswerChoice(questionIndex,2);
    ClearMultipleAnswerChoice(questionIndex,3);

}
/* Code generated function */
function ClearQuestion28()
{
    const questionIndex = 27;
    ClearMultipleAnswerChoice(questionIndex,0);
    ClearMultipleAnswerChoice(questionIndex,1);
    ClearMultipleAnswerChoice(questionIndex,2);
    ClearMultipleAnswerChoice(questionIndex,3);

}
/* Code generated function */
function ClearQuestion29()
{
    const questionIndex = 28;
    ClearMultipleAnswerChoice(questionIndex,0);
    ClearMultipleAnswerChoice(questionIndex,1);
    ClearMultipleAnswerChoice(questionIndex,2);
    ClearMultipleAnswerChoice(questionIndex,3);

}
/* Code generated function */
function ClearQuestion30()
{
    const questionIndex = 29;
    ClearMultipleAnswerChoice(questionIndex,0);
    ClearMultipleAnswerChoice(questionIndex,1);
    ClearMultipleAnswerChoice(questionIndex,2);
    ClearMultipleAnswerChoice(questionIndex,3);

}
/* Code generated function */
function ClearQuestion31()
{
    const questionIndex = 30;
    ClearMultipleAnswerChoice(questionIndex,0);
    ClearMultipleAnswerChoice(questionIndex,1);
    ClearMultipleAnswerChoice(questionIndex,2);
    ClearMultipleAnswerChoice(questionIndex,3);

}
/* Code generated function */
function ClearQuestion32()
{
    const questionIndex = 31;
    ClearMultipleAnswerChoice(questionIndex,0);
    ClearMultipleAnswerChoice(questionIndex,1);
    ClearMultipleAnswerChoice(questionIndex,2);
    ClearMultipleAnswerChoice(questionIndex,3);

}
/* Code generated function */
function ClearQuestion33()
{
    const questionIndex = 32;
    ClearMultipleAnswerChoice(questionIndex,0);
    ClearMultipleAnswerChoice(questionIndex,1);
    ClearMultipleAnswerChoice(questionIndex,2);
    ClearMultipleAnswerChoice(questionIndex,3);

}
/* Code generated function */
function ClearQuestion34()
{
    const questionIndex = 33;
    ClearMultipleAnswerChoice(questionIndex,0);
    ClearMultipleAnswerChoice(questionIndex,1);
    ClearMultipleAnswerChoice(questionIndex,2);
    ClearMultipleAnswerChoice(questionIndex,3);

}
/* Code generated function */
function ClearQuestion35()
{
    const questionIndex = 34;
    ClearMultipleAnswerChoice(questionIndex,0);
    ClearMultipleAnswerChoice(questionIndex,1);
    ClearMultipleAnswerChoice(questionIndex,2);
    ClearMultipleAnswerChoice(questionIndex,3);

}
/* Code generated function */
function ClearQuestion36()
{
    const questionIndex = 35;
    ClearMultipleAnswerChoice(questionIndex,0);
    ClearMultipleAnswerChoice(questionIndex,1);
    ClearMultipleAnswerChoice(questionIndex,2);
    ClearMultipleAnswerChoice(questionIndex,3);

}
/* Code generated function */
function ClearQuestion37()
{
    const questionIndex = 36;
    ClearMultipleAnswerChoice(questionIndex,0);
    ClearMultipleAnswerChoice(questionIndex,1);
    ClearMultipleAnswerChoice(questionIndex,2);
    ClearMultipleAnswerChoice(questionIndex,3);

}
/* Code generated function */
function ClearQuestion38()
{
    const questionIndex = 37;
    ClearMultipleAnswerChoice(questionIndex,0);
    ClearMultipleAnswerChoice(questionIndex,1);
    ClearMultipleAnswerChoice(questionIndex,2);
    ClearMultipleAnswerChoice(questionIndex,3);

}
/* Code generated function */
function ClearQuestion39()
{
    const questionIndex = 38;
    ClearMultipleAnswerChoice(questionIndex,0);
    ClearMultipleAnswerChoice(questionIndex,1);
    ClearMultipleAnswerChoice(questionIndex,2);
    ClearMultipleAnswerChoice(questionIndex,3);

}
/* Code generated function */
function ClearQuestion40()
{
    const questionIndex = 39;
    ClearMultipleAnswerChoice(questionIndex,0);
    ClearMultipleAnswerChoice(questionIndex,1);
    ClearMultipleAnswerChoice(questionIndex,2);
    ClearMultipleAnswerChoice(questionIndex,3);

}
/* Code generated function */
function ClearQuestion41()
{
    const questionIndex = 40;
    ClearMultipleAnswerChoice(questionIndex,0);
    ClearMultipleAnswerChoice(questionIndex,1);
    ClearMultipleAnswerChoice(questionIndex,2);
    ClearMultipleAnswerChoice(questionIndex,3);

}
/* Code generated function */
function ClearQuestion42()
{
    const questionIndex = 41;
    ClearMultipleAnswerChoice(questionIndex,0);
    ClearMultipleAnswerChoice(questionIndex,1);
    ClearMultipleAnswerChoice(questionIndex,2);
    ClearMultipleAnswerChoice(questionIndex,3);

}
/* Code generated function */
function ClearQuestion43()
{
    const questionIndex = 42;
    ClearMultipleAnswerChoice(questionIndex,0);
    ClearMultipleAnswerChoice(questionIndex,1);
    ClearMultipleAnswerChoice(questionIndex,2);
    ClearMultipleAnswerChoice(questionIndex,3);

}
/* Code generated function */
function ClearQuestion44()
{
    const questionIndex = 43;
    ClearMultipleAnswerChoice(questionIndex,0);
    ClearMultipleAnswerChoice(questionIndex,1);
    ClearMultipleAnswerChoice(questionIndex,2);
    ClearMultipleAnswerChoice(questionIndex,3);

}
/* Code generated function */
function ClearQuestion45()
{
    const questionIndex = 44;
    ClearMultipleAnswerChoice(questionIndex,0);
    ClearMultipleAnswerChoice(questionIndex,1);
    ClearMultipleAnswerChoice(questionIndex,2);
    ClearMultipleAnswerChoice(questionIndex,3);

}
/* Code generated function */
function ClearQuestion46()
{
    const questionIndex = 45;
    ClearMultipleAnswerChoice(questionIndex,0);
    ClearMultipleAnswerChoice(questionIndex,1);
    ClearMultipleAnswerChoice(questionIndex,2);
    ClearMultipleAnswerChoice(questionIndex,3);

}
/* Code generated function */
function ClearQuestion47()
{
    const questionIndex = 46;
    ClearMultipleAnswerChoice(questionIndex,0);
    ClearMultipleAnswerChoice(questionIndex,1);
    ClearMultipleAnswerChoice(questionIndex,2);
    ClearMultipleAnswerChoice(questionIndex,3);

}
/* Code generated function */
function ClearQuestion48()
{
    const questionIndex = 47;
    ClearMultipleAnswerChoice(questionIndex,0);
    ClearMultipleAnswerChoice(questionIndex,1);
    ClearMultipleAnswerChoice(questionIndex,2);
    ClearMultipleAnswerChoice(questionIndex,3);

}
/* Code generated function */
function ClearQuestion49()
{
    const questionIndex = 48;
    ClearMultipleAnswerChoice(questionIndex,0);
    ClearMultipleAnswerChoice(questionIndex,1);
    ClearMultipleAnswerChoice(questionIndex,2);
    ClearMultipleAnswerChoice(questionIndex,3);

}
/* Code generated function */
function ClearQuestion50()
{
    const questionIndex = 49;
    ClearMultipleAnswerChoice(questionIndex,0);
    ClearMultipleAnswerChoice(questionIndex,1);
    ClearMultipleAnswerChoice(questionIndex,2);
    ClearMultipleAnswerChoice(questionIndex,3);

}
/* Code generated function */
function ClearQuestion51()
{
    const questionIndex = 50;
    ClearMultipleAnswerChoice(questionIndex,0);
    ClearMultipleAnswerChoice(questionIndex,1);
    ClearMultipleAnswerChoice(questionIndex,2);
    ClearMultipleAnswerChoice(questionIndex,3);

}
/* Code generated function */
function ClearQuestion52()
{
    const questionIndex = 51;
    ClearMultipleAnswerChoice(questionIndex,0);
    ClearMultipleAnswerChoice(questionIndex,1);
    ClearMultipleAnswerChoice(questionIndex,2);
    ClearMultipleAnswerChoice(questionIndex,3);

}
/* Code generated function */
function ClearQuestion53()
{
    const questionIndex = 52;
    ClearMultipleAnswerChoice(questionIndex,0);
    ClearMultipleAnswerChoice(questionIndex,1);
    ClearMultipleAnswerChoice(questionIndex,2);
    ClearMultipleAnswerChoice(questionIndex,3);

}
/* Code generated function */
function ClearQuestion54()
{
    const questionIndex = 53;
    ClearMultipleAnswerChoice(questionIndex,0);
    ClearMultipleAnswerChoice(questionIndex,1);
    ClearMultipleAnswerChoice(questionIndex,2);
    ClearMultipleAnswerChoice(questionIndex,3);

}
/* Code generated function */
function ClearQuestion55()
{
    const questionIndex = 54;
    ClearMultipleAnswerChoice(questionIndex,0);
    ClearMultipleAnswerChoice(questionIndex,1);
    ClearMultipleAnswerChoice(questionIndex,2);
    ClearMultipleAnswerChoice(questionIndex,3);

}
/* Code generated function */
function ClearQuestion56()
{
    const questionIndex = 55;
    ClearMultipleAnswerChoice(questionIndex,0);
    ClearMultipleAnswerChoice(questionIndex,1);
    ClearMultipleAnswerChoice(questionIndex,2);
    ClearMultipleAnswerChoice(questionIndex,3);

}
/* Code generated function */
function ClearQuestion57()
{
    const questionIndex = 56;
    ClearMultipleAnswerChoice(questionIndex,0);
    ClearMultipleAnswerChoice(questionIndex,1);
    ClearMultipleAnswerChoice(questionIndex,2);
    ClearMultipleAnswerChoice(questionIndex,3);

}
/* Code generated function */
function ClearQuestion58()
{
    const questionIndex = 57;
    ClearMultipleAnswerChoice(questionIndex,0);
    ClearMultipleAnswerChoice(questionIndex,1);
    ClearMultipleAnswerChoice(questionIndex,2);
    ClearMultipleAnswerChoice(questionIndex,3);

}
/* Code generated function */
function ClearQuestion59()
{
    const questionIndex = 58;
    ClearMultipleAnswerChoice(questionIndex,0);
    ClearMultipleAnswerChoice(questionIndex,1);
    ClearMultipleAnswerChoice(questionIndex,2);
    ClearMultipleAnswerChoice(questionIndex,3);

}
/* Code generated function */
function ClearQuestion60()
{
    const questionIndex = 59;
    ClearMultipleAnswerChoice(questionIndex,0);
    ClearMultipleAnswerChoice(questionIndex,1);
    ClearMultipleAnswerChoice(questionIndex,2);
    ClearMultipleAnswerChoice(questionIndex,3);

}
/* Code generated function */
function ClearQuestion61()
{
    const questionIndex = 60;
    ClearMultipleAnswerChoice(questionIndex,0);
    ClearMultipleAnswerChoice(questionIndex,1);
    ClearMultipleAnswerChoice(questionIndex,2);
    ClearMultipleAnswerChoice(questionIndex,3);

}
/* Code generated function */
function ClearQuestion62()
{
    const questionIndex = 61;
    ClearMultipleAnswerChoice(questionIndex,0);
    ClearMultipleAnswerChoice(questionIndex,1);
    ClearMultipleAnswerChoice(questionIndex,2);
    ClearMultipleAnswerChoice(questionIndex,3);

}
/* Code generated function */
function ClearQuestion63()
{
    const questionIndex = 62;
    ClearMultipleAnswerChoice(questionIndex,0);
    ClearMultipleAnswerChoice(questionIndex,1);
    ClearMultipleAnswerChoice(questionIndex,2);
    ClearMultipleAnswerChoice(questionIndex,3);

}
/* Code generated function */
function ClearQuestion64()
{
    const questionIndex = 63;
    ClearMultipleAnswerChoice(questionIndex,0);
    ClearMultipleAnswerChoice(questionIndex,1);
    ClearMultipleAnswerChoice(questionIndex,2);
    ClearMultipleAnswerChoice(questionIndex,3);

}
/* Code generated function */
function ClearQuestion65()
{
    const questionIndex = 64;
    ClearMultipleAnswerChoice(questionIndex,0);
    ClearMultipleAnswerChoice(questionIndex,1);
    ClearMultipleAnswerChoice(questionIndex,2);
    ClearMultipleAnswerChoice(questionIndex,3);

}
/* Code generated function */
function ClearQuestion66()
{
    const questionIndex = 65;
    ClearMultipleAnswerChoice(questionIndex,0);
    ClearMultipleAnswerChoice(questionIndex,1);
    ClearMultipleAnswerChoice(questionIndex,2);
    ClearMultipleAnswerChoice(questionIndex,3);

}
/* Code generated function */
function ClearQuestion67()
{
    const questionIndex = 66;
    ClearMultipleAnswerChoice(questionIndex,0);
    ClearMultipleAnswerChoice(questionIndex,1);
    ClearMultipleAnswerChoice(questionIndex,2);
    ClearMultipleAnswerChoice(questionIndex,3);

}
/* Code generated function */
function ClearQuestion68()
{
    const questionIndex = 67;
    ClearMultipleAnswerChoice(questionIndex,0);
    ClearMultipleAnswerChoice(questionIndex,1);
    ClearMultipleAnswerChoice(questionIndex,2);
    ClearMultipleAnswerChoice(questionIndex,3);

}
/* Code generated function */
function ClearQuestion69()
{
    const questionIndex = 68;
    ClearMultipleAnswerChoice(questionIndex,0);
    ClearMultipleAnswerChoice(questionIndex,1);
    ClearMultipleAnswerChoice(questionIndex,2);
    ClearMultipleAnswerChoice(questionIndex,3);

}
/* Code generated function */
function ClearQuestion70()
{
    const questionIndex = 69;
    ClearMultipleAnswerChoice(questionIndex,0);
    ClearMultipleAnswerChoice(questionIndex,1);
    ClearMultipleAnswerChoice(questionIndex,2);
    ClearMultipleAnswerChoice(questionIndex,3);

}
/* Code generated function */
function ClearQuestion71()
{
    const questionIndex = 70;
    ClearMultipleAnswerChoice(questionIndex,0);
    ClearMultipleAnswerChoice(questionIndex,1);
    ClearMultipleAnswerChoice(questionIndex,2);
    ClearMultipleAnswerChoice(questionIndex,3);

}
/* Code generated function */
function ClearQuestion72()
{
    const questionIndex = 71;
    ClearMultipleAnswerChoice(questionIndex,0);
    ClearMultipleAnswerChoice(questionIndex,1);
    ClearMultipleAnswerChoice(questionIndex,2);
    ClearMultipleAnswerChoice(questionIndex,3);

}
/* Code generated function */
function ClearQuestion73()
{
    const questionIndex = 72;
    ClearMultipleAnswerChoice(questionIndex,0);
    ClearMultipleAnswerChoice(questionIndex,1);
    ClearMultipleAnswerChoice(questionIndex,2);
    ClearMultipleAnswerChoice(questionIndex,3);

}
/* Code generated function */
function ClearQuestion74()
{
    const questionIndex = 73;
    ClearMultipleAnswerChoice(questionIndex,0);
    ClearMultipleAnswerChoice(questionIndex,1);
    ClearMultipleAnswerChoice(questionIndex,2);
    ClearMultipleAnswerChoice(questionIndex,3);

}
/* Code generated function */
function ClearQuestion75()
{
    const questionIndex = 74;
    ClearMultipleAnswerChoice(questionIndex,0);
    ClearMultipleAnswerChoice(questionIndex,1);
    ClearMultipleAnswerChoice(questionIndex,2);
    ClearMultipleAnswerChoice(questionIndex,3);

}
/* Code generated function */
function ClearQuestion76()
{
    const questionIndex = 75;
    ClearMultipleAnswerChoice(questionIndex,0);
    ClearMultipleAnswerChoice(questionIndex,1);
    ClearMultipleAnswerChoice(questionIndex,2);
    ClearMultipleAnswerChoice(questionIndex,3);

}
/* Code generated function */
function ClearQuestion77()
{
    const questionIndex = 76;
    ClearMultipleAnswerChoice(questionIndex,0);
    ClearMultipleAnswerChoice(questionIndex,1);
    ClearMultipleAnswerChoice(questionIndex,2);
    ClearMultipleAnswerChoice(questionIndex,3);

}
/* Code generated function */
function ClearQuestion78()
{
    const questionIndex = 77;
    ClearMultipleAnswerChoice(questionIndex,0);
    ClearMultipleAnswerChoice(questionIndex,1);
    ClearMultipleAnswerChoice(questionIndex,2);
    ClearMultipleAnswerChoice(questionIndex,3);

}
/* Code generated function */
function ClearQuestion79()
{
    const questionIndex = 78;
    ClearMultipleAnswerChoice(questionIndex,0);
    ClearMultipleAnswerChoice(questionIndex,1);
    ClearMultipleAnswerChoice(questionIndex,2);
    ClearMultipleAnswerChoice(questionIndex,3);

}
/* Code generated function */
function ClearQuestion80()
{
    const questionIndex = 79;
    ClearMultipleAnswerChoice(questionIndex,0);
    ClearMultipleAnswerChoice(questionIndex,1);
    ClearMultipleAnswerChoice(questionIndex,2);
    ClearMultipleAnswerChoice(questionIndex,3);

}
/* Code generated function */
function ClearQuestion81()
{
    const questionIndex = 80;
    ClearMultipleAnswerChoice(questionIndex,0);
    ClearMultipleAnswerChoice(questionIndex,1);
    ClearMultipleAnswerChoice(questionIndex,2);
    ClearMultipleAnswerChoice(questionIndex,3);

}
/* Code generated function */
function ClearQuestion82()
{
    const questionIndex = 81;
    ClearMultipleAnswerChoice(questionIndex,0);
    ClearMultipleAnswerChoice(questionIndex,1);
    ClearMultipleAnswerChoice(questionIndex,2);
    ClearMultipleAnswerChoice(questionIndex,3);

}
/* Code generated function */
function ClearQuestion83()
{
    const questionIndex = 82;
    ClearMultipleAnswerChoice(questionIndex,0);
    ClearMultipleAnswerChoice(questionIndex,1);
    ClearMultipleAnswerChoice(questionIndex,2);
    ClearMultipleAnswerChoice(questionIndex,3);

}
/* Code generated function */
function ClearQuestion84()
{
    const questionIndex = 83;
    ClearMultipleAnswerChoice(questionIndex,0);
    ClearMultipleAnswerChoice(questionIndex,1);
    ClearMultipleAnswerChoice(questionIndex,2);
    ClearMultipleAnswerChoice(questionIndex,3);

}
/* Code generated function */
function ClearQuestion85()
{
    const questionIndex = 84;
    ClearMultipleAnswerChoice(questionIndex,0);
    ClearMultipleAnswerChoice(questionIndex,1);
    ClearMultipleAnswerChoice(questionIndex,2);
    ClearMultipleAnswerChoice(questionIndex,3);

}
/* Code generated function */
function ClearQuestion86()
{
    const questionIndex = 85;
    ClearMultipleAnswerChoice(questionIndex,0);
    ClearMultipleAnswerChoice(questionIndex,1);
    ClearMultipleAnswerChoice(questionIndex,2);
    ClearMultipleAnswerChoice(questionIndex,3);

}
/* Code generated function */
function ClearQuestion87()
{
    const questionIndex = 86;
    ClearMultipleAnswerChoice(questionIndex,0);
    ClearMultipleAnswerChoice(questionIndex,1);
    ClearMultipleAnswerChoice(questionIndex,2);
    ClearMultipleAnswerChoice(questionIndex,3);

}
/* Code generated function */
function ClearQuestion88()
{
    const questionIndex = 87;
    ClearMultipleAnswerChoice(questionIndex,0);
    ClearMultipleAnswerChoice(questionIndex,1);
    ClearMultipleAnswerChoice(questionIndex,2);
    ClearMultipleAnswerChoice(questionIndex,3);

}
/* Code generated function */
function ClearQuestion89()
{
    const questionIndex = 88;
    ClearMultipleAnswerChoice(questionIndex,0);
    ClearMultipleAnswerChoice(questionIndex,1);
    ClearMultipleAnswerChoice(questionIndex,2);
    ClearMultipleAnswerChoice(questionIndex,3);

}
/* Code generated function */
function ClearQuestion90()
{
    const questionIndex = 89;
    ClearMultipleAnswerChoice(questionIndex,0);
    ClearMultipleAnswerChoice(questionIndex,1);
    ClearMultipleAnswerChoice(questionIndex,2);
    ClearMultipleAnswerChoice(questionIndex,3);

}
/* Code generated function */
function ClearQuestion91()
{
    const questionIndex = 90;
    ClearMultipleAnswerChoice(questionIndex,0);
    ClearMultipleAnswerChoice(questionIndex,1);
    ClearMultipleAnswerChoice(questionIndex,2);
    ClearMultipleAnswerChoice(questionIndex,3);

}
/* Code generated function */
function ClearQuestion92()
{
    const questionIndex = 91;
    ClearMultipleAnswerChoice(questionIndex,0);
    ClearMultipleAnswerChoice(questionIndex,1);
    ClearMultipleAnswerChoice(questionIndex,2);
    ClearMultipleAnswerChoice(questionIndex,3);

}
/* Code generated function */
function ClearQuestion93()
{
    const questionIndex = 92;
    ClearMultipleAnswerChoice(questionIndex,0);
    ClearMultipleAnswerChoice(questionIndex,1);
    ClearMultipleAnswerChoice(questionIndex,2);
    ClearMultipleAnswerChoice(questionIndex,3);

}
/* Code generated function */
function ClearQuestion94()
{
    const questionIndex = 93;
    ClearMultipleAnswerChoice(questionIndex,0);
    ClearMultipleAnswerChoice(questionIndex,1);
    ClearMultipleAnswerChoice(questionIndex,2);
    ClearMultipleAnswerChoice(questionIndex,3);

}
/* Code generated function */
function ClearQuestion95()
{
    const questionIndex = 94;
    ClearMultipleAnswerChoice(questionIndex,0);
    ClearMultipleAnswerChoice(questionIndex,1);
    ClearMultipleAnswerChoice(questionIndex,2);
    ClearMultipleAnswerChoice(questionIndex,3);

}
/* Code generated function */
function ClearQuestion96()
{
    const questionIndex = 95;
    ClearMultipleAnswerChoice(questionIndex,0);
    ClearMultipleAnswerChoice(questionIndex,1);
    ClearMultipleAnswerChoice(questionIndex,2);
    ClearMultipleAnswerChoice(questionIndex,3);

}
/* Code generated function */
function ClearQuestion97()
{
    const questionIndex = 96;
    ClearMultipleAnswerChoice(questionIndex,0);
    ClearMultipleAnswerChoice(questionIndex,1);
    ClearMultipleAnswerChoice(questionIndex,2);
    ClearMultipleAnswerChoice(questionIndex,3);

}
/* Code generated function */
function ClearQuestion98()
{
    const questionIndex = 97;
    ClearMultipleAnswerChoice(questionIndex,0);
    ClearMultipleAnswerChoice(questionIndex,1);
    ClearMultipleAnswerChoice(questionIndex,2);
    ClearMultipleAnswerChoice(questionIndex,3);

}
/* Code generated function */
function ClearQuestion99()
{
    const questionIndex = 98;
    ClearMultipleAnswerChoice(questionIndex,0);
    ClearMultipleAnswerChoice(questionIndex,1);
    ClearMultipleAnswerChoice(questionIndex,2);
    ClearMultipleAnswerChoice(questionIndex,3);

}
/* Code generated function */
function ClearQuestion100()
{
    const questionIndex = 99;
    ClearMultipleAnswerChoice(questionIndex,0);
    ClearMultipleAnswerChoice(questionIndex,1);
    ClearMultipleAnswerChoice(questionIndex,2);
    ClearMultipleAnswerChoice(questionIndex,3);

}
/* Code generated function */
function ClearQuestion101()
{
    ClearFillTheGap(101,0);
    ClearFillTheGap(101,1);
    ClearFillTheGap(101,2);
    ClearFillTheGap(101,3);
    ClearFillTheGap(101,4);
    ClearFillTheGap(101,5);
    ClearFillTheGap(101,6);
    ClearFillTheGap(101,7);
    ClearFillTheGap(101,8);
    ClearFillTheGap(101,9);
    ClearFillTheGap(101,10);
    ClearFillTheGap(101,11);
    ClearFillTheGap(101,12);
    ClearFillTheGap(101,13);
    ClearFillTheGap(101,14);
    ClearFillTheGap(101,15);
    ClearFillTheGap(101,16);
    ClearFillTheGap(101,17);
    ClearFillTheGap(101,18);
    ClearFillTheGap(101,19);

}






