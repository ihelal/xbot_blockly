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

goog.provide('Blockly.Blocks.xbot_connections');
goog.require('Blockly.Blocks.colour');
goog.require('Blockly.Blocks');

/**
 * Common HSV hue for all blocks in this category.
 */
Blockly.Blocks.xbot_connections.HUE = 20;

Blockly.Blocks['pair_controller'] = {
  /**
 * Block for numeric value.
 * @this Blockly.Block
 */
init: function() {
  this.appendDummyInput()
      .appendField("Pair controller"); 
  this.setColour(Blockly.Blocks.xbot_sensors.HUE);
  this.setTooltip('');
  this.setHelpUrl('');
}
};