/**
 * This work is licensed under the Creative Commons 
 * Attribution-ShareAlike 3.0 Unported License. To 
 * view a copy of this license, 
 * visit http://creativecommons.org/licenses/by-sa/3.0/ 
 * or send a letter to Creative Commons, PO Box 1866, 
 * Mountain View, CA 94042, USA.
*/

/**
 * @fileoverview Blocks for Dabit-Turtlebot3.
 * @author cosmo@dabitindustries.com (Cosmo Borsky)
 * @author aravind@dabitindustries.com (Aravind Krishnan)
*/
'use strict';

goog.provide('Blockly.Python.xbot_picker');
goog.require('Blockly.Python');

Blockly.Python['move_xy'] = function(block) {

  var X_POS = block.getFieldValue('X_POS');
  var Y_POS = block.getFieldValue('Y_POS');
  var MAN_SPEED = block.getFieldValue('MAN_SPEED');

  var code = "";
  code += "X_POS = \"" + X_POS.toString() + "\"\n";
  code += "Y_POS = \"" + Y_POS.toString() + "\"\n";
  code += "MAN_SPEED = \"" + MAN_SPEED.toString() + "\"\n";
  code += Blockly.readPythonFile("../blockly/generators/python/scripts/xbot_picker/move_xy.py");
  return code;

};

Blockly.Python['move_joint'] = function(block) {

  var JOINT_NUM = block.getFieldValue('JOINT_NUM');
  var JOINT_ANGLE = block.getFieldValue('JOINT_ANGLE');

  var code = "";
  code += "JOINT_NUM = \"" + JOINT_NUM.toString() + "\"\n";
  code += "JOINT_ANGLE = \"" + JOINT_ANGLE.toString() + "\"\n";
  code += Blockly.readPythonFile("../blockly/generators/python/scripts/xbot_picker/move_joint.py");
  return code;

};

Blockly.Python['home'] = function(block) {
    
    var code = "";
    code += Blockly.readPythonFile("../blockly/generators/python/scripts/xbot_picker/home.py");
    return code;

};