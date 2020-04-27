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

goog.provide('Blockly.Blocks.xbot_picker');
goog.require('Blockly.Blocks');


/**
 * Common HSV hue for all blocks in this category.
 */
Blockly.Blocks.xbot_picker.HUE = 10;


Blockly.Blocks['move_xy'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Move to ")
        .appendField(new Blockly.FieldTextInput("1"), "X_POS")
        .appendField("X &")
        .appendField(new Blockly.FieldTextInput("1"), "Y_POS")
        .appendField("Y at")
        .appendField(new Blockly.FieldDropdown([["SLOW", "SLOW"], ["NORMAL", "NORMAL"], ["FAST", "FAST"]]), "MAN_SPEED")
        .appendField("Speed");
    this.setPreviousStatement(true);
    this.setNextStatement(true);    
    this.setColour(65);
    this.setTooltip('');
    this.setHelpUrl('');
  }
};

Blockly.Blocks['home'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Move to Home");
    this.setPreviousStatement(true);
    this.setNextStatement(true);    
    this.setColour(65);
    this.setTooltip('');
    this.setHelpUrl('');
  }
};

Blockly.Blocks['move_joint'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Move Joint ")
        .appendField(new Blockly.FieldTextInput("1"), "JOINT_NUM")
        .appendField(new Blockly.FieldTextInput("1"), "JOINT_ANGLE")
        .appendField("Degree(s)");
    this.setPreviousStatement(true);
    this.setNextStatement(true);    
    this.setColour(65);
    this.setTooltip('');
    this.setHelpUrl('');
  }
};