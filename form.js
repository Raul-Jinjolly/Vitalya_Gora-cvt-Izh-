;
$(document).ready(function(){
  var form = $('.options__js-form');
  var interest = form.find('#interest-value');
  var ul = $('.profile__jslist');
  var activeClass = 'child-interest-active';

  function appendChild (child, parent, content) {
    var textVal = content.val();
    if(!textVal) return;
    child.text(textVal);
    child.prependTo(parent);
    child.addClass('child-interest');
  };

  function changeColorActiveLi (elem) {
    elem.removeClass(activeClass);
    elem.addClass(activeClass);
  };

  function turnOfActiveLi (elem) {
    elem.removeClass(activeClass);
  }

  form.on('submit', function() {
    event.preventDefault ? event.preventDefault():(event.returnValue = false);
    var li = $('<li class="profile__jsli"></li>');
    appendChild(li, ul, interest);
    form.get(0).reset();

  li.on('mouseover mouseout click', function (event) {
    var self = $(this);
    if(event.type == 'mouseover') changeColorActiveLi(self);
    if (event.type == 'mouseout') turnOfActiveLi(self);
    if (event.type == 'click') self.remove();
    });
  })

  form.validate({
    rules: {
      area: {
        required: true,
        minlength: 3,
        maxlength: 12
      }
    },
    messages : {
      area: {
        required: "Это поле обязательно для заполнения",
        minlength: "Значение должно содержать минимум 3 символа",
        maxlength: "Значение должно содержать максимум 12 символов"
      }
    }
})

});



