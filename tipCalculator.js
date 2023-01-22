var classes = {
    body: 'body',
    containerDiv: 'container-div',
    titleDiv: 'title-div',
    title: 'title',
    main: 'main',
    divLeft: 'div-left',
    divRight: 'div-right',
    divLeftP: 'div-left-p',
    bill: 'bill',
    selectTip: 'select-tip',
    tipPercent5: 'tip-percent-5',
    tipPercent10: 'tip-percent-10',
    tipPercent15: 'tip-percent-15',
    tipPercent25: 'tip-percent-25',
    tipPercent50: 'tip-percent-50',
    tipPercentStyles: 'tip-percent-styles',
    tipPercentP: 'tip-percent-p',
    custom: 'custom',
    customP: 'custom-p',
    people: 'people',
    tipAmount: 'tip-amount',
    tipAmountP: 'tip-amount-p',
    personP: 'person-p',
    count1: 'count-1',
    count2: 'count-2',
    reset: 'reset',
    resetP: 'reset-p',
    total: 'total',
    inputBill: 'input-bill',
    inputPeople: 'input-people',
    billCantBe: 'bill-cant-be',
    cantBe1: 'cant-be-1',
    cantBe2: 'cant-be-2',
    cantBe3: 'cant-be-3',
}

var selectors = {};

Object.keys(classes).forEach(function (key) {
    selectors[key] = '.' + classes[key];
});

function setStyle () {
    $(selectors.myCustomStyleClass).remove();

    var css =
    '*{' +
        'margin: 0;' +
        'padding: 0;' +
        'box-sizing: border-box;' +
        'text-decoration: none;' +
        'list-style-type: none;'+
        'font-family: "Space Mono", monospace;' +
        'font-size: 24px;' +
        '}' +
    classes.body + '{' +
        'background: #C5E4E7;' +
        '}' +
    selectors.containerDiv + '{' +
        'width: 1440px;' +
        'height: 1440px;' +
        'margin: auto;' +
        '}' +
    selectors.titleDiv + '{' +
        'display: flex;' +
        'justify-content: center;' +
        'margin-top: 175px;' +
        'margin-bottom: 100px;' +
        '}' +
    selectors.title + '{' +
        'width: 100px;' +
        'letter-spacing: 10px;' +
        'color: #00494D;' +
        '}' +
    selectors.main + '{' +
        'width: 920px;' +
        'border-radius: 25px;' +
        'background-color: #FFFFFF;' +
        'padding: 30px 30px 30px 50px;' +
        'display: flex;' +
        'justify-content: center;' +
        'margin: auto;' +
        '}' +
    selectors.divLeft + '{' +
        'width: 375px;' +
        'margin-right: 50px;' +
        '}' +
    selectors.billCantBe + '{' +
        'display: flex;' +
        'justify-content: space-between;' +
        '}' +
    selectors.divLeftP + '{' +
        'font-size: 18px;' +
        'color: #737E80;' +
        'margin-bottom: 10px;' +
        '}' +
    selectors.cantBe1 + '{' +
        'font-size: 18px;' +
        'color: #FF7C7C;' +
        'margin-bottom: 10px;' +
        '}' +
    selectors.cantBe2 + '{' +
        'font-size: 18px;' +
        'color: #FF7C7C;' +
        'margin-bottom: 10px;' +
        '}' +
    selectors.cantBe3 + '{' +
        'font-size: 18px;' +
        'color: #FF7C7C;' +
        'margin-bottom: 10px;' +
        '}' +
    selectors.bill + '{' +
        'background-color: #F1F9FC;' +
        'height: 50px;' +
        'border-radius: 5px;' +
        'margin-bottom: 45px;' +
        'display: flex;' +
        'justify-content: space-between;' +
        'align-items: center;' +
        'padding: 0 20px;' +
        '}' +
    selectors.inputBill + '{' +
        'background-color: #F1F9FC;' +
        'height: 45px;' +
        'border: none;' +
        'outline: none;' +  
        'border-radius: 5px;' +
        'text-align: right;' +
        'caret-color: #20C4AB;' +
        'font-size: 20px;' +
        'color: #00474B;' +
        '}' +
    selectors.inputBill + ':hover {' +
        'cursor: pointer;' +
        '}' +
    selectors.inputBill + '::placeholder{' +
        'color: #7F9C9F;' +
        '}' +
    selectors.inputPeople + '{' +
        'background-color: #F1F9FC;' +
        'height: 45px;' +
        'border: none;' +
        'outline: none;' +
        'border-radius: 5px;' +
        'text-align: right;' +
        'caret-color: #20C4AB;' +
        'font-size: 20px;' +
        'color: #00474B;' +
        '}' +
    selectors.inputPeople + ':hover {' +
        'cursor: pointer;' +
        '}' +
    selectors.inputPeople + '::placeholder{' +
        'color: #7F9C9F;' +
        '}' +
    selectors.selectTip + '{' +
        'height: 110px;' +
        'margin-top: 10px;' +
        'margin-bottom: 45px;' +
        'display: flex;' +
        'flex-wrap: wrap;' +
        'justify-content: space-between;' +
        '}' +
    selectors.tipPercentStyles + '{' +
        'width: 115px;' +
        'height: 45px;' +
        'display: flex;' +
        'justify-content: center;' +
        'align-items: center;' +
        'border-radius: 5px;' +
        'background-color: #00474B;' +
        '}' +
    selectors.tipPercentStyles + ':hover {' +
        'cursor: pointer;' +
        'background-color: #20C4AB;' +
        '}' +
    selectors.tipPercentP + '{' +
        'font-size: 24px;' +
        'color: #FFFFFF;' +
        '}' +
    selectors.custom + '{' +
        'width: 115px;' +
        'height: 45px;' +
        'padding: 15px 5px;' +
        'caret-color: #20C4AB;' +
        'font-size: 20px;' +
        'color: #00474B;' +
        'text-align: center;' +
        'outline: none;' +
        'border: none;' +
        'border-radius: 5px;' +
        'background-color: #F1F9FC;' +
        '}' +
    selectors.custom + ':hover {' +
        'cursor: pointer;' +
        '}' +
    selectors.people + '{' +
        'background-color: #F1F9FC;' +
        'height: 50px;' +
        'border-radius: 5px;' +
        'margin-bottom: 45px;' +
        'display: flex;' +
        'justify-content: space-between;' +
        'align-items: center;' +
        'padding: 0 20px;' +
        '}' +
    selectors.inputPeople + '{' +
        'caret-color: #20C4AB;' +
        'font-size: 20px;' +
        'color: #00474B;' +
        '}' +
    selectors.divRight + '{' +
        'width: 415px;' +
        'background-color: #00474B;' +
        'border-radius: 15px;' +
        'padding: 60px 40px 40px 40px;' +
        '}'+
    selectors.tipAmount + '{' +
        'display: flex;' +
        'justify-content: space-between;' +
        'margin-bottom: 60px;' +
        '}' +
    selectors.tipAmountP + '{' +
        'font-size: 18px;' +
        'color: #FFFFFF;' +
        '}' +
    selectors.personP + '{' +
        'font-size: 14px;' +
        'color: #578386;' +
        '}' +
    selectors.count1 + '{' +
        'font-size: 50px;' +
        'color: #20C4AB;' +
        'line-height: 85%;' +
        '}' +
    selectors.count2 + '{' +
        'font-size: 50px;' +
        'color: #20C4AB;' +
        'line-height: 85%;' +
        '}' +
    selectors.total + '{' +
        'display: flex;' +
        'justify-content: space-between;' +
        'margin-bottom: 150px;' +
        '}' +
    selectors.reset + '{' +
        'background-color: #0D686D;' +
        'height: 55px;' +
        'border-radius: 5px;' +
        'display: flex;' +
        'justify-content: center;' +
        'align-items: center;' +
        '}' +
    selectors.reset + ':hover {' +
        'cursor: pointer;' +
        '}' +
    selectors.resetP + '{' +
        'font-size: 24px;' +
        'color: #076066;' +
        '}'
        
        $('<style/>').html(css).addClass(classes.myCustomStyleClass).appendTo('head');
}

function setHtml () {
    $(selectors.containerDiv).remove();

    $('<div/>').addClass(classes.containerDiv).appendTo(classes.body);
    
    var htmlContent =
    '<div class="' + classes.titleDiv + '">' +
        '<div>' +
            '<p class="'+ classes.title +'">SPLI</p>' +
            '<p class="'+ classes.title +'">TTER</p>' +
        '</div>' +
    '</div>' +
    '<div class="'+ classes.main +'">' +
        '<div class="' + classes.divLeft + '">' +
            '<div class="' + classes.billCantBe + '">' +
                '<p class="' + classes.divLeftP + '">Bill</p>' +
                '<p class="' + classes.cantBe1 + '"></p>' +
            '</div>' +
            '<div class="' + classes.bill + '">' +
                '<svg xmlns="http://www.w3.org/2000/svg" width="11" height="17"><path fill="#9EBBBD" d="M6.016 16.328v-1.464c1.232-.08 2.22-.444 2.964-1.092.744-.648 1.116-1.508 1.116-2.58v-.144c0-.992-.348-1.772-1.044-2.34-.696-.568-1.708-.932-3.036-1.092V4.184c.56.144 1.012.4 1.356.768.344.368.516.816.516 1.344v.288h1.824v-.432c0-.448-.088-.876-.264-1.284a3.783 3.783 0 00-.744-1.116A4.251 4.251 0 007.54 2.9a5.324 5.324 0 00-1.524-.492V.872H4.288V2.36a5.532 5.532 0 00-1.416.324c-.448.168-.84.392-1.176.672-.336.28-.604.616-.804 1.008-.2.392-.3.844-.3 1.356v.144c0 .96.316 1.708.948 2.244.632.536 1.548.884 2.748 1.044v3.912c-.704-.16-1.248-.472-1.632-.936-.384-.464-.576-1.08-.576-1.848v-.288H.256v.576c0 .464.08.924.24 1.38.16.456.404.88.732 1.272.328.392.744.728 1.248 1.008s1.108.476 1.812.588v1.512h1.728zM4.288 7.424c-.688-.128-1.164-.332-1.428-.612-.264-.28-.396-.644-.396-1.092 0-.464.176-.832.528-1.104.352-.272.784-.448 1.296-.528v3.336zm1.728 5.712V9.344c.768.128 1.328.328 1.68.6.352.272.528.688.528 1.248 0 .544-.196.984-.588 1.32-.392.336-.932.544-1.62.624z"/></svg>' +
                '<input class="' + classes.inputBill + '" type="text" placeholder="0">' +
            '</div>' +
            '<div class="' + classes.billCantBe + '">' +
                '<p class="' + classes.divLeftP + '">Select Tip %</p>' +
                '<p class="' + classes.cantBe2 + '"></p>' +
            '</div>' +
            '<div class="' + classes.selectTip + '">' +
                '<div class="' + classes.tipPercent5 + ' ' + classes.tipPercentStyles + '"><p class="' + classes.tipPercentP + '">5%</p></div>' +
                '<div class="' + classes.tipPercent10 + ' ' + classes.tipPercentStyles + '"><p class="' + classes.tipPercentP + '">10%</p></div>' +
                '<div class="' + classes.tipPercent15 + ' ' + classes.tipPercentStyles + '"><p class="' + classes.tipPercentP + '">15%</p></div>' +
                '<div class="' + classes.tipPercent25 + ' ' + classes.tipPercentStyles + '"><p class="' + classes.tipPercentP + '">25%</p></div>' +
                '<div class="' + classes.tipPercent50 + ' ' + classes.tipPercentStyles + '"><p class="' + classes.tipPercentP + '">50%</p></div>' +
                '<input class="' + classes.custom + '" type="text" placeholder="Custom">' +            
            '</div>' +
            '<div class="' + classes.billCantBe + '">' +
                '<p class="' + classes.divLeftP + '">Number of People</p>' +
                '<p class="' + classes.cantBe3 + '"></p>' +
            '</div>' +
            '<div class="' + classes.people + '">' +
                '<svg xmlns="http://www.w3.org/2000/svg" width="13" height="16"><path fill="#9EBBBD" d="M9.573 7.729c.406 0 .784.07 1.126.209.342.14.639.33.881.569.232.227.438.503.614.82a5.1 5.1 0 01.407.949c.097.312.178.654.242 1.016.062.359.105.699.126 1.011.02.307.031.624.031.945 0 .836-.259 1.512-.768 2.01-.504.492-1.17.742-1.98.742H2.748c-.81 0-1.477-.25-1.98-.742C.259 14.76 0 14.084 0 13.248c0-.322.01-.64.032-.945.02-.312.063-.652.126-1.01.063-.363.144-.705.242-1.017.1-.323.238-.643.407-.948.176-.318.382-.594.613-.821.243-.238.54-.43.882-.57.342-.138.72-.208 1.125-.208.16 0 .313.067.61.265.183.123.397.264.636.421.204.134.48.259.822.372.333.11.671.167 1.005.167a3.19 3.19 0 001.006-.167c.341-.113.618-.238.822-.372l.636-.42c.296-.2.45-.266.61-.266zM6.598 0C7.63 0 8.522.38 9.252 1.129s1.1 1.666 1.1 2.724c0 1.06-.37 1.976-1.1 2.725-.73.75-1.623 1.13-2.654 1.13-1.03 0-1.924-.38-2.653-1.13-.73-.749-1.1-1.666-1.1-2.725 0-1.058.37-1.975 1.1-2.724C4.675.379 5.567 0 6.598 0z"/></svg>' +
                '<input class="' + classes.inputPeople + '" type="text" placeholder="0">' +
            '</div>' +
        '</div>' +
        '<div class="' + classes.divRight + '">' +
            '<div class="' + classes.tipAmount + '">' +
                '<div>' +
                    '<p class="' + classes.tipAmountP + '">Tip Amount</p>' +
                    '<p class="' + classes.personP + '">/ person</p>' +
                '</div>' +
                '<div>' +
                    '<p class="' + classes.count1 + '">$0.00</p>' +
                '</div>' +
            '</div>' +
            '<div class="' + classes.total + '">' +
                '<div>' +
                    '<p class="' + classes.tipAmountP + '">Total</p>' +
                    '<p class="' + classes.personP + '">/ person</p>' +
                '</div>' +
                '<div>' +
                    '<p class="' + classes.count2 + '">$0.00</p>' +
                '</div>' +
            '</div>' +

            '<div class="' + classes.reset + '"><p class="' + classes.resetP + '">RESET</p></div>' +
        '</div>' +
    '</div>'

    $(selectors.containerDiv).html(htmlContent);
}

var billVal;
var customVal = 0;
var peopleVal;

function enterKey () {

    function keyCode13 (){
        billVal = $(selectors.inputBill)[0].value;
        peopleVal = $(selectors.inputPeople)[0].value;

        if($(selectors.custom)[0].value !== ''){
            customVal = Math.round(parseFloat($(selectors.custom)[0].value)*100)/100;
        }

        console.log(billVal);
        console.log(customVal);
        console.log(peopleVal);

        if(billVal === ''){
            $(selectors.cantBe1).html("Can't be zero");
            $(selectors.bill).css('border' , '2px solid #FF7C7C');
        }
        if(peopleVal === ''){
            $(selectors.cantBe3).html("Can't be zero");
            $(selectors.people).css('border' , '2px solid #FF7C7C');
        }
        if(isNaN(billVal)){
            $(selectors.cantBe1).html("Should be number");
            $(selectors.bill).css('border' , '2px solid #FF7C7C');
        }
        if(isNaN(customVal)){
            $(selectors.cantBe2).html("Should be number");
            $(selectors.custom).css('border' , '2px solid #FF7C7C');
        }
        if(isNaN(peopleVal)){
            $(selectors.cantBe3).html("Should be number");
            $(selectors.people).css('border' , '2px solid #FF7C7C');
        }

        if(
            isNaN(billVal) === false &&
            isNaN(customVal) === false &&
            isNaN(peopleVal) === false &&
            billVal !== '' &&
            peopleVal !== ''
        ){
            billVal = Math.round(parseFloat($(selectors.inputBill)[0].value)*100)/100;
            peopleVal = Math.round(parseFloat($(selectors.inputPeople)[0].value)*100)/100;

            $(selectors.count1).html('$'+((billVal/100*customVal)/peopleVal).toFixed(2));
            $(selectors.count2).html('$'+ ((billVal+(billVal/100*customVal))/peopleVal).toFixed(2));

            $(selectors.cantBe1).html('');
            $(selectors.cantBe2).html('');
            $(selectors.cantBe3).html('');
            
            $(selectors.reset).css('background-color' , '#20C4AB');
            activateReset();
        }
    }

    $(selectors.inputBill).on("keydown",function search(e) { if(e.keyCode == 13) { keyCode13(); } });

    $(selectors.custom).on("keydown",function search(e) { if(e.keyCode == 13) { keyCode13(); } });

    $(selectors.inputPeople).on("keydown",function search(e) { if(e.keyCode == 13) { keyCode13(); } });
}

$(classes.body).attr('onclick' , 'clickFunction(event)');

function clickFunction (event){

    var clickedElement = event.target;

    if(clickedElement ===  $(selectors.inputBill)[0]){
        $(selectors.bill).css('border' , '2px solid #20C4AB');
    }
    else if(clickedElement !==  $(selectors.inputBill)[0]){
        $(selectors.bill).css('border' , 'none');
    }

    if(clickedElement ===  $(selectors.inputPeople)[0]){
        $(selectors.people).css('border' , '2px solid #20C4AB');
    }
    else if(clickedElement !==  $(selectors.inputPeople)[0]){
        $(selectors.people).css('border' , 'none');
    }

    if(clickedElement ===  $(selectors.custom)[0]){
        $(selectors.custom).css({'border' : '2px solid #20C4AB' , 'text-align' : 'right'});
        $(selectors.custom).attr({'placeholder' : ''});
    }
    else if(clickedElement !==  $(selectors.custom)[0]){
        $(selectors.custom).css({'border' : 'none' , 'text-align' : 'center'});
        $(selectors.custom).attr({'placeholder' : 'Custom'});
    }

    if(clickedElement === $(selectors.tipPercentP)[0] || clickedElement === $(selectors.tipPercent5)){
        customVal = 5;
        $(selectors.custom)[0].value = customVal;
    }
    if(clickedElement === $(selectors.tipPercentP)[1] || clickedElement === $(selectors.tipPercent10)){
        customVal = 10;
        $(selectors.custom)[0].value = customVal;
    }    
    if(clickedElement === $(selectors.tipPercentP)[2] || clickedElement === $(selectors.tipPercent15)){
        customVal = 15;
        $(selectors.custom)[0].value = customVal;
    }    
    if(clickedElement === $(selectors.tipPercentP)[3] || clickedElement === $(selectors.tipPercent25)){
        customVal = 25;
        $(selectors.custom)[0].value = customVal;
    }    
    if(clickedElement === $(selectors.tipPercentP)[4] || clickedElement === $(selectors.tipPercent50)){
        customVal = 50;
        $(selectors.custom)[0].value = customVal;
    }
}

function activateReset (){ $(selectors.reset).attr('onclick' , 'reset()'); }

function reset (){
    $(selectors.inputBill)[0].value = '';
    $(selectors.custom)[0].value = '';
    $(selectors.inputPeople)[0].value = '';

    billVal = 0;
    customVal = 0;
    peopleVal = 0;

    $(selectors.count1).html('$0.00');
    $(selectors.count2).html('$0.00');

    $(selectors.reset).css('background-color' , '#0D686D');
}

(function initialize(){
    setStyle();
    setHtml();
    enterKey();
    clickFunction();
})();