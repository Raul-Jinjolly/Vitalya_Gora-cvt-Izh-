
;
$(document).ready(function(){

  var targetContent = $('.profile__right');
  var inputName = $('#profile__input');
  var inputPhone = $('#phone');
  var inputMail = $('#mail');
  var hiddenClass = 'hidden';

  
  targetContent.on('click', '.profile__value', function() {
    var $this = $(this);
    textToInput($this, inputName);

  inputName.on('blur keyup', function(e) {
    if(e.type == 'blur' || e.type == 'keyup' && e.keyCode == 13) {
          inputToText(inputName, $this);
        }
    setDataToLocalStorage('name', $this.text());
    })
  });

  targetContent.on('click', '.profile__phone', function() {
    var $this = $(this);
    textToInput($this, inputPhone);
    inputPhone.parent().removeClass(hiddenClass);

    inputPhone.on('blur keyup', function(e) {
      if(e.type == 'blur' || e.type == 'keyup' && e.keyCode == 13) {
        inputToText(inputPhone, $this);
        inputPhone.parent().addClass(hiddenClass);
      }
      setDataToLocalStorage('phone', $this.text());
    })
  });

  targetContent.on('click', '.profile__mail', function() {
    var $this = $(this);
    textToInput($this, inputMail);
    inputMail.parent().removeClass(hiddenClass);

    inputMail.on('blur keyup', function(e) {
      if(e.type == 'blur' || e.type == 'keyup' && e.keyCode == 13) {
        inputToText(inputMail, $this);
        inputMail.parent().addClass(hiddenClass);
      }
      setDataToLocalStorage('mail', $this.text());
    })
  });

  getDataOfLocalStorage('name', $('.profile__value'));
  getDataOfLocalStorage('phone', $('.profile__phone'));
  getDataOfLocalStorage('mail', $('.profile__mail'));

/******* Functions ********/

  function setDataToLocalStorage(key, value) {
    localStorage.setItem(key, value)
  }

  function getDataOfLocalStorage(key, elem) {
    if( localStorage.length > 0) {
        var value = localStorage.getItem(key);
        if(!value) return;    
        elem.text(value);
      }
  }

  function textToInput(elem, inp) {
  inp.val(elem.text());
  elem.addClass('hidden');
  inp.removeClass('hidden');
  }

  function inputToText(inp, elem) {
    var inpLen = inp.val().length;
    if(inpLen < 4 || inpLen > 23) {
          inp.val(elem.text());
    }
    elem.text(inp.val());
    inp.addClass(hiddenClass);
    elem.removeClass(hiddenClass);
  }
});
