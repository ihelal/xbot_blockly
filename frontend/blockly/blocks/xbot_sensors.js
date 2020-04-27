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
Blockly.Blocks.xbot_sensors.HUE = 20;

Blockly.Blocks['initialize_ultrasonic'] = {
  /**
 * Block for numeric value.
 * @this Blockly.Block
 */
init: function() {
  this.appendDummyInput()
      .appendField("Initialize")
      .appendField(new Blockly.FieldDropdown([["FRONT", "FRONT"], ["BACK", "BACK"], ["RIGHT", "RIGHT"],["LEFT", "LEFT"]]), "us_side")
      .appendField("Ultrasonic");   
  this.setColour(Blockly.Blocks.xbot_sensors.HUE);
  this.setTooltip('');
  this.setHelpUrl('');
}
};

Blockly.Blocks.xbot_sensors.HUE = 20;

Blockly.Blocks['initialize_encoder'] = {
  /**
 * Block for numeric value.
 * @this Blockly.Block
 */
init: function() {
  this.appendDummyInput()
      .appendField("Initialize")
      .appendField(new Blockly.FieldDropdown([["FRONT_RIGHT", "FRONT_RIGHT"], ["FRONT_LEFT", "FRONT_LEFT"], ["BACK_RIGHT", "BACK_RIGHT"],["BACK_LEFT", "BACK_LEFT"]]), "en_side")
      .appendField("Encoder");   
  this.setColour(Blockly.Blocks.xbot_sensors.HUE);
  this.setTooltip('');
  this.setHelpUrl('');
}
};

Blockly.Blocks['get_ultrasonic'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Get ")
        .appendField(new Blockly.FieldDropdown([["FRONT", "FRONT"], ["BACK", "BACK"], ["RIGHT", "RIGHT"],["LEFT", "LEFT"]]), "get_us_side")
        .appendField("ultrasonic value");
    this.setColour(Blockly.Blocks.xbot_sensors.HUE);
    this.setOutput(true, 'Number');

    // Assign 'this' to a variable for use in the tooltip closure below.
    var thisBlock = this;

    // Number block is trivial.  Use tooltip of parent block if it exists.
    this.setTooltip(function() {
      var parent = thisBlock.getParent();
      return (parent && parent.tooltip) || Blockly.Msg.MATH_NUMBER_TOOLTIP;
    });
    this.setHelpUrl(Blockly.Msg.MATH_NUMBER_HELPURL);
  }
};

Blockly.Blocks['get_encoder'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Get ")
        .appendField(new Blockly.FieldDropdown([["FRONT_RIGHT", "FRONT_RIGHT"], ["FRONT_LEFT", "FRONT_LEFT"], ["BACK_RIGHT", "BACK_RIGHT"],["BACK_LEFT", "BACK_LEFT"]]), "get_en_side")
        .appendField("encoder value");
    this.setColour(Blockly.Blocks.xbot_sensors.HUE);
    this.setOutput(true, 'Number');
    // Assign 'this' to a variable for use in the tooltip closure below.
    var thisBlock = this;

    // Number block is trivial.  Use tooltip of parent block if it exists.
    this.setTooltip(function() {
      var parent = thisBlock.getParent();
      return (parent && parent.tooltip) || Blockly.Msg.MATH_NUMBER_TOOLTIP;
    });
    this.setHelpUrl(Blockly.Msg.MATH_NUMBER_HELPURL);
  }
};