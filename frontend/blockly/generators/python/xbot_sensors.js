/**
 * This work is licensed under the Creative Commons 
 * Attribution-ShareAlike 3.0 Unported License. To 
 * view a copy of this license, 
 * visit http://creativecommons.org/licenses/by-sa/3.0/ 
 * or send a letter to Creative Commons, PO Box 1866, 
 * Mountain View, CA 94042, USA.
*/

/**
 * @fileoverview Blocks for XBot.
 * @author contact@ihelal.com (Ibrahim Helal)
*/
'use strict';

goog.provide('Blockly.Python.xbot_sensors');
goog.require('Blockly.Python');

// Blockly.Python['circle_mode'] = function(block) {

//   var dropdown_direction = block.getFieldValue('direction');
//   var dropdown_speed = block.getFieldValue('speed');

//   var code = "";
//   code += "dropdown_direction = \"" + dropdown_direction.toString() + "\"\n";
//   code += "dropdown_speed = \"" + dropdown_speed.toString() + "\"\n";
//   code += Blockly.readPythonFile("../blockly/generators/python/scripts/turtlebot3/circle_mode.py");
//   return code;

// };

Blockly.Python['front_ultrasonic'] = function(block) {
    var code = "";
    code += Blockly.readPythonFile("../blockly/generators/python/scripts/xbot_sensors/ultrasonic.py");
    return code;
};
