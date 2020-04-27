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

goog.provide('Blockly.Blocks.xbot_accessories');
goog.require('Blockly.Blocks.colour');
goog.require('Blockly.Blocks');

/**
 * Common HSV hue for all blocks in this category.
 */
Blockly.Blocks.xbot_accessories.HUE = 200;

Blockly.Blocks['led'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("LED, Turn on")
        .appendField(new Blockly.FieldTextInput("1"), "PIXEL_NUM")
        .appendField("pixel(s),at ")
        .appendField(new Blockly.FieldTextInput("50"), "LED_BRIGHTNESS")
        .appendField("% Brightness and ")
        .appendField(new Blockly.FieldTextInput("RED"), "LED_COLOR")
        .appendField("color");
    this.setPreviousStatement(true);
    this.setNextStatement(true);    
    this.setColour(100);
    this.setTooltip('');
    this.setHelpUrl('');
  }
};