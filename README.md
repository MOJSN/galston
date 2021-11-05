# Galston Box or Plinko simulator
A Galston box simulator to illustrate how tipping the box changes the distribution in the buckets.

Primarily, this is for illustrating how shifts in "forcing factors" effects weather and climate change - e.g. a change in the CO2 level causes the atmosphere to become warmer.

This is based, with thanks, on the [code](https://github.com/CodingTrain/website/tree/main/CodingChallenges/CC_062_plinko/P5) developed by Daniel Shiffman (see: https://thecodingtrain.com/) in his [episodes](https://thecodingtrain.com/CodingChallenges/062.1-plinko.html) on developing a Plinko emulator using [matter.js](https://brm.io/matter-js/). Please respect his [license](https://github.com/CodingTrain/website/blob/main/LICENSE) and that these modifications are under the same terms.

The main differences are:
* can tip the box at an angle
* modified the look and feel 
* altered the colours of the particles to represent which bucket they fall in - blue to red - to represent the idea of hotter/colder outcomes
* added stop/go buttons for the looping so that all the CPU isn't consumed

This is not the finest example of my programming skills! It is a fast modification of code developed in a training video - but, hey! It works!

You can see it working on the GitHub pages here https://mojsn.github.io/galston/

Note:
* to change the angle add an 'angle' parameter to the URL (in degrees), e.g. https://mojsn.github.io/galston/index.html?angle=10
* to change the angle or restart you have to refresh the page

Improvements that could be made:
* a clear/refresh button to restart the balls
* a slider to rotate the box in real-time





