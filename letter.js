var Letter = function(let) {
  //make a charac property and set it to what you think makes second_instructor_demonstration
    this.charac = let;
    this.appear = false;
    this.letterRender = function() {
      if (this.appear === false) {
        return "-";
      } else {
        return this.charac;
      }
    }
  //make an appear property and set it to what makes sense                                          -- DONE

  //make a letterRender property and set it to a function that does what you think makes sense  -- DONE

};

//export the Letter constructor here
exports.Letter = Letter;