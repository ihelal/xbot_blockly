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

Blockly.Python['initialize_ultrasonic'] = function(block) {
    var us_side = block.getFieldValue('us_side');
    var code = "";
    code += "us_side = \"" + us_side.toString() + "\"\n";
    code += Blockly.readPythonFile("../blockly/generators/python/scripts/xbot_sensors/ultrasonic.py");
    return code;
};

Blockly.Python['initialize_encoder'] = function(block) {
    var us_side = block.getFieldValue('en_side');
    var code = "";
    code += "en_side = \"" + us_side.toString() + "\"\n";
    code += Blockly.readPythonFile("../blockly/generators/python/scripts/xbot_sensors/ultrasonic.py");
    return code;
};

Blockly.Python['get_ultrasonic'] = function(block) {
    var us_side = block.getFieldValue('get_us_side');
    var code = "";
    code += "us_side = \"" + us_side.toString() + "\"\n";
    code += Blockly.readPythonFile("../blockly/generators/python/scripts/xbot_sensors/ultrasonic.py");
    return code;
};

Blockly.Python['get_encoder'] = function(block) {
    var encoder_side = block.getFieldValue('get_en_side');
    var code = "";
    code += "encoder_side = \"" + encoder_side.toString() + "\"\n";
    code += Blockly.readPythonFile("../blockly/generators/python/scripts/xbot_sensors/ultrasonic.py");
    return code;
};

Blockly.Python['initialize_toggle_button'] = function(block) {
    var code = "";
    code += Blockly.readPythonFile("../blockly/generators/python/scripts/xbot_sensors/ultrasonic.py");
    return code;
};

Blockly.Python['get_toggle_button'] = function(block) {
    var code = "";
    code += Blockly.readPythonFile("../blockly/generators/python/scripts/xbot_sensors/get_toggle_button.py");
    return code;
};