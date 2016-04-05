"use strict";
(function (d) {
  const IP = d.getElementById('e');
  const POP = d.getElementById('pop');
  var bound = false;

  /**
   * @return text in message input
   */
  function getText() {
    return IP.value;
  }

  text.onkeyup = function (bound) {
    if (getText().slice(-1) === ":" && bound == false) {
      Bind();
    } else {
      pairing();
    }

  };
  function bind() {
    bound = true;
    show();
    startSearch();
  }

  function startSearch(argument) {
    pairing();
  }

  function endSearch(argument) {
    bound = false;
    hide();
  }

  function pairing() {

  }

  function check() {

  }

  function show() {
    POP.style = 'display:block;';
  }

  function hide() {
    POP.style = 'display:none;';
  }

  /**
   * actually starts the message change to emoji characters
   * run these next parts in server not broswer
   * NOTE THIS IS NOT A SAFE WAY TO DO IT (binds <span> to message)
   */
  function checkSubmitedString() {
    let text = getText();
      let matches = text.match(/(?::)[^\s]*?(?=:)/g);
      for (let i = 0; i < matches.length; i++) {
        let match = matches[i];
        if (j[match]) doSomething();
      }
    }

})(document);
