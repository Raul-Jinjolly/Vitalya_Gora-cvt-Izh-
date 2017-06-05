;
$(document).ready(function(){
  'use strict'
  var $tabs = $('.tabs__tab');
  var activeTab = 'tabs__tab--active';
  var $screen = $('.screen');
  var screenActiveClass = 'active';

  function changeActiveTab($clickedTab) {
    $tabs.removeClass(activeTab);
    $clickedTab.addClass(activeTab);
  }

  function showActiveScreen(dataAttribute) {
    var $aimScreen = $screen.filter('[data-content="' + dataAttribute + '"]');
    $screen.removeClass(screenActiveClass);
    $aimScreen.addClass(screenActiveClass);
  }

  $tabs.on('click',function() {
    var $this = $(this);
    if($this.hasClass(activeTab)) {
      return;
    }
    var currentDataAttribute = $this.data('target');

    changeActiveTab($this);
    showActiveScreen(currentDataAttribute);
  })
});
