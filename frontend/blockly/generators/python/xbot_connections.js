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

goog.provide('Blockly.Python.xbot_connections');
goog.require('Blockly.Python');

Blockly.Python['pair_controller'] = function(block) {
    var code = "";
    code += Blockly.readPythonFile("../blockly/generators/python/scripts/xbot_connections/pair_controller.py");
    return code;
};