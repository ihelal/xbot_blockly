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

goog.provide('Blockly.Python.xbot_accessories');
goog.require('Blockly.Python');

Blockly.Python['led'] = function(block) {
    var PIXEL_NUM = block.getFieldValue('PIXEL_NUM');
    var LED_BRIGHTNESS = block.getFieldValue('LED_BRIGHTNESS');
    var LED_COLOR = block.getFieldValue('LED_COLOR');
    
    var code = "";
    code += "PIXEL_NUM = \"" + PIXEL_NUM.toString() + "\"\n";
    code += "LED_BRIGHTNESS = \"" + LED_BRIGHTNESS.toString() + "\"\n";
    code += "LED_COLOR = \"" + LED_COLOR.toString() + "\"\n";
    code += Blockly.readPythonFile("../blockly/generators/python/scripts/xbot_accessories/led.py");
    return code;
};