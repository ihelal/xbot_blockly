/**
 * This work is licensed under the Creative Commons 
 * Attribution-ShareAlike 3.0 Unported License. To 
 * view a copy of this license, 
 * visit http://creativecommons.org/licenses/by-sa/3.0/ 
 * or send a letter to Creative Commons, PO Box 1866, tur
 * Mountain View, CA 94042, USA.
*/

/**
 * @fileoverview Blocks for xbot.
 * @author contact@ihelal.com (Ibrahim Helal)
*/
'use strict';

goog.provide('Blockly.Blocks.xbot_sensors');
goog.require('Blockly.Blocks');

/**
 * Common HSV hue for all blocks in this category.
 */
Blockly.Blocks.xbot_sensors.HUE = 260;

Blockly.Blocks['front_ultrasonic'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("front_ultrasonic ")
    this.setPreviousStatement(true);
    this.setNextStatement(true);    
    this.setColour(65);
    this.setTooltip('');
    this.setHelpUrl('');
  }
};