// Copyright (c) 2022 Johanna Liu All rights reserved
//
// Created by: Johanna Liu
// Created on: Mar 2022
// This file contains the JS functions for index.html

/**
 * Do basic math.
 */
function doMathClicked() {
  // this function does basic math
  
  document.getElementById('multiply-math').innerHTML = '<p>The area is: ' + (4 * 5 ) + ' cm² </p>'
  document.getElementById('add-math').innerHTML = '<p>The perimeter is: ' + (2 * (4 + 5)) +' cm </p>'
}