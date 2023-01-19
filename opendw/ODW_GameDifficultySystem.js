//===========================================================================
// Open Digital World - Game Difficulty System Plugin v1.0.0
//===========================================================================

/*:
 * @target MZ
 * @plugindesc [v1.0.0] - Manage the difficulty level of the game.
 * @author Open Digital World
 * @url https://opendigitalworld.itch.io/rmmz-game-difficulty-system-plugin
 *
 * @help
 *------------------------------------------------------------------------------
 * Open Digital World - Game Difficulty System Plugin
 *------------------------------------------------------------------------------
 *
 * This plugin allows you to set the difficulty level of your game. You can then
 * use this value to change the damage formulas or adapt the game narrative to
 * your needs.
 *
 *------------------------------------------------------------------------------
 * How to use it?
 *------------------------------------------------------------------------------
 *
 * 1. Configure your plugin:
 *    - <Difficulty Level Option>: The label of the difficulty level option.
 *    - <Default Difficulty Level>: The default difficulty level at the
 *      beginning of the game.
 *    - <Changeable Difficulty Level>: The indicator if the difficulty level can
 *      be changed during an active game.
 *    - <Difficulty Levels>: The list of all the difficulty levels available in
 *      the game, in the form of a list of terms to be arranged ideally in
 *      chronological order of difficulty levels, from the easiest to the most
 *      difficult.
 *
 * 2. Use the following functions as Script Call in your game:
 *    - ODW.GDS.getCurrentLevel()
 *    - ODW.GDS.getCurrentLabel()
 *
 * 3. Or use the following plugin commands in your game:
 *    - <Change Difficulty Level>
 *
 *------------------------------------------------------------------------------
 * You use VisuMZ_1_OptionsCore plugin?
 *------------------------------------------------------------------------------
 *
 * Follow the instructions below to configure the difficulty option in your
 * game. Only the parameters to be changed are shown. The others can remain at
 * their default values.
 *
 * Symbol: difficultyLevel
 *    - JS Text:
 *       return ODW.GDS.getOption();
 * Functions:
 *    - JS Enable:
 *       return ODW.GDS.canChangeLevel();
 *    - JS Draw Option:
 *       // Declare Constants
 *       const index = arguments[1];
 *       const title = this.commandName(index);
 *       const rect = this.itemLineRect(index);
 *       const halfWidth = rect.width / 2;
 *       // Draw Command Name
 *       this.resetFontSettings();
 *       this.changePaintOpacity(true);
 *       this.drawTextEx(title, rect.x, rect.y, halfWidth, "left");
 *       // Draw Status Text
 *       this.drawText(this.statusText(index), rect.x + halfWidth, rect.y, halfWidth, "center");
 *    - JS Process OK:
 *       // Perform Actions
 *       this.processOk();
 *    - JS Cursor Right:
 *       // Perform Actions
 *       this.cursorRight();
 *    - JS Cursor Left:
 *       // Perform Actions
 *       this.cursorLeft();
 * Data:
 *    - JS Default Value:
 *       // Declare Constants
 *       const symbol = arguments[1];
 *       // Perform Actions
 *       ConfigManager[symbol] = ODW.GDS.getDefaultLevel();
 *
 *------------------------------------------------------------------------------
 * Terms of Use - License MIT
 *------------------------------------------------------------------------------
 *
 * Copyright (c) 2021 Open Digital World / Public Productions
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 *------------------------------------------------------------------------------
 * Version history
 *------------------------------------------------------------------------------
 *
 * 21.10.2021 v1.0.0 - Initial release.
 *
 *------------------------------------------------------------------------------
 * Overrides of core functions
 *------------------------------------------------------------------------------
 *
 * New property:
 *   - ConfigManager.difficultyLevel
 *
 * New functions:
 *   - ConfigManager.readDifficultyLevel
 *
 *------------------------------------------------------------------------------
 * Known incompatibilities with other plugins
 *------------------------------------------------------------------------------
 *
 * None.
 *
 *------------------------------------------------------------------------------
 *
 *
 * @param option
 * @text Difficulty Level Option
 * @desc The label of the difficulty level option.
 * @type string
 * @default Difficulty Level
 *
 * @param defaultLevel
 * @text Default Difficulty Level
 * @desc The default difficulty level at the beginning of the game.
 * @type number
 * @default 0
 *
 * @param changeableLevel
 * @text Changeable Difficulty Level
 * @desc The indicator if the difficulty level can be changed during an active game.
 * @type boolean
 * @default false
 *
 * @param levels
 * @text Difficulty Levels
 * @desc The list of all difficulty levels available in the game.
 * @type string[]
 * @default ["Normal"]
 *
 * @command changeDifficultyLevel
 * @text Change Difficulty Level
 * @desc The command to change the current difficulty level.

 * @arg newLevel
 * @text New Difficulty Level
 * @desc The new difficulty level to apply.
 * @type number
 *
 */

var Imported = Imported || {};
Imported.ODW_GameDifficultySystem = true;

var ODW = ODW || {};
ODW.GDS = ODW.GDS || {};
ODW.GDS.pluginName = "ODW_GameDifficultySystem";
ODW.GDS.pluginVersion = [1, 0, 0];

(($) => {

	'use strict';

	/*
	 *------------------------------------------------------------------------------
	 * PLUGIN SETTINGS
	 *------------------------------------------------------------------------------
	 */

	const pluginParams = PluginManager.parameters(ODW.GDS.pluginName);

	// Declare plugin params.
	$._option = pluginParams.option;
	$._defaultLevel = parseInt(pluginParams.defaultLevel);
	$._changeableLevel = JSON.parse(pluginParams.changeableLevel);
	$._levels = JSON.parse(pluginParams.levels);

	/*
	 *------------------------------------------------------------------------------
	 * OPTION
	 *------------------------------------------------------------------------------
	 */

	/*
 	 * Return the label of the difficulty option.
 	 *
 	 * @return string
 	 */
 	$.getOption = function() {
 		return this._option;
 	};

	/*
	 *------------------------------------------------------------------------------
	 * DEFAULT LEVEL
	 *------------------------------------------------------------------------------
	 */

	/*
 	 * Return the default difficulty level.
 	 *
 	 * @return integer
 	 */
 	$.getDefaultLevel = function() {
 		return this._defaultLevel;
 	};

	/*
	 *------------------------------------------------------------------------------
	 * CHANGEABLE LEVEL
	 *------------------------------------------------------------------------------
	 */

	 /*
  	 * Return the indicator if the difficulty level can be changed.
  	 *
  	 * @return boolean
  	 */
  	$.canChangeLevel = function() {
		if (this.isGameActive()) {
			return this._changeableLevel === true;
		} else {
			return true;
		}
  	};

	/*
	 *------------------------------------------------------------------------------
	 * LEVEL
	 *------------------------------------------------------------------------------
	 */

	/*
	 * Return the current difficulty level.
	 *
	 * @return integer
	 */
	$.getCurrentLevel = function() {
		return ConfigManager["difficultyLevel"];
	};

	/*
	 * Return the previous difficulty level in the list.
	 *
	 * @return integer
	 */
	$.getPrevLevel = function() {
		let newLevel = ConfigManager["difficultyLevel"] - 1;
		if (newLevel < 0) {
			newLevel = this._levels.length - 1;
		}
		return newLevel;
	};

	/*
	 * Return the next difficulty level in the list.
	 *
	 * @return integer
	 */
	$.getNextLevel = function() {
		let newLevel = ConfigManager["difficultyLevel"] + 1;
		if (newLevel >= this._levels.length) {
			newLevel = 0;
		}
		return newLevel;
	};

	/*
	 * Update the current difficulty level.
	 *
	 * @param integer The new difficulty level
	 *
	 * @return void
	 */
	$.updateLevel = function(newLevel) {
		if (this._levels.length > 0) {
			if (newLevel < this._levels.length) {
				ConfigManager["difficultyLevel"] = newLevel;
				ConfigManager.save();
			} else {
				this.logErrorLevel(newLevel, "New level not found in configured levels.");
			}
		} else {
			this.logError("No levels configured.");
		}
	};

	/*
	 *------------------------------------------------------------------------------
	 * LABEL
	 *------------------------------------------------------------------------------
	 */

	/*
	 * Return the list of the difficulty level labels.
	 *
	 * @return array
	 */
	$.getLabels = function() {
		return this._levels;
	};

	/*
	 * Return the label for a specific difficulty level.
	 *
	 * @param integer The difficulty level
	 *
	 * @return string
	 */
	$.getLabel = function(level) {
		let levelLabel = '';
		if (this._levels.length > 0) {
			if (level < this._levels.length) {
				levelLabel = this._levels[level];
			} else {
				this.logErrorLevel(level, "No level label configured for this level index.");
			}
		} else {
			this.logError("No levels configured.");
		}
		return levelLabel;
	};

	/*
	 * Return the label for the current difficulty level.
	 *
	 * @return string
	 */
	$.getCurrentLabel = function() {
		return this.getLabel(this.getCurrentLevel());
	};

	/*
	 *------------------------------------------------------------------------------
	 * GAME
	 *------------------------------------------------------------------------------
	 */

	// Declare the current game activity.
 	$._isGameActive = false;

	/*
	 * Return the current game activity.
	 *
	 * @return boolean
	 */
	$.isGameActive = function() {
		return this._isGameActive;
	};

	/*
	 * Set the game as active.
	 *
	 * @return void
	 */
	$.setGameActive = function() {
		this._isGameActive = true;
	};

	/*
	 * Set the game as inactive.
	 *
	 * @return void
	 */
	$.setGameInactive = function() {
		this._isGameActive = false;
	};

	/*
	 *------------------------------------------------------------------------------
	 * LOG
	 *------------------------------------------------------------------------------
	 */

	/*
	 * Log the errors while processing a plugin parameters.
	 *
	 * @param string The error text
	 *
	 * @return void
	 */
	$.logError = function(error) {
		console.log("Plugin: " + this.pluginName + "\nError: " + error);
	};

	/*
	 * Log the errors while processing a difficulty level.
	 *
	 * @param integer The difficulty level that caused the error
	 * @param string  The error text
	 *
	 * @return void
	 */
	$.logErrorLevel = function(level, error) {
		console.log("Plugin: " + this.pluginName + "\nLevel: " + level + "\nError: " + error);
	};

})(ODW.GDS);

//===========================================================================
// DataManager
//===========================================================================

const ODW_GDS_DataManager_makeSaveContents = DataManager.makeSaveContents;
DataManager.makeSaveContents = function() {
	const contents = ODW_GDS_DataManager_makeSaveContents.call(this);
	contents.difficultyLevel = ConfigManager["difficultyLevel"];
	return contents;
};

const ODW_GDS_DataManager_extractSaveContents = DataManager.extractSaveContents;
DataManager.extractSaveContents = function(contents) {
	ODW_GDS_DataManager_extractSaveContents.call(this, contents);
	ConfigManager["difficultyLevel"] = contents.difficultyLevel;
};

//===========================================================================
// ConfigManager
//===========================================================================

// New property.
ConfigManager.difficultyLevel = ODW.GDS.getDefaultLevel();

const ODW_GDS_ConfigManager_makeData = ConfigManager.makeData;
ConfigManager.makeData = function() {
	const config = ODW_GDS_ConfigManager_makeData.call(this);
	config.difficultyLevel = this.difficultyLevel;
    return config;
};

const ODW_GDS_ConfigManager_applyData = ConfigManager.applyData;
ConfigManager.applyData = function(config) {
	ODW_GDS_ConfigManager_applyData.call(this, config);
	this.difficultyLevel = this.readDifficultyLevel(config, "difficultyLevel", ODW.GDS.getDefaultLevel());
};

// New function.
ConfigManager.readDifficultyLevel = function(config, name, defaultValue) {
    if (name in config) {
        return config[name];
    } else {
        return defaultValue;
    }
}

//===========================================================================
// PluginManager
//===========================================================================

PluginManager.registerCommand(ODW.GDS.pluginName, "changeDifficultyLevel", args => {
	const newLevel = parseInt(args.newLevel);
	ODW.GDS.updateLevel(newLevel);
});

//===========================================================================
// Scene_Title
//===========================================================================

const ODW_GDS_Scene_Title_start = Scene_Title.prototype.start;
Scene_Title.prototype.start = function() {
	ODW_GDS_Scene_Title_start.call(this);
	ODW.GDS.setGameInactive();
};

//===========================================================================
// Scene_Map
//===========================================================================

const ODW_GDS_Scene_Map_start = Scene_Map.prototype.start;
Scene_Map.prototype.start = function() {
	ODW_GDS_Scene_Map_start.call(this);
	ODW.GDS.setGameActive();
};

//===========================================================================
// Window_Options
//===========================================================================

const ODW_GDS_Window_Options_addGeneralOptions = Window_Options.prototype.addGeneralOptions;
Window_Options.prototype.addGeneralOptions = function() {
	this.addCommand(ODW.GDS.getOption(), "difficultyLevel", ODW.GDS.canChangeLevel());
	ODW_GDS_Window_Options_addGeneralOptions.call(this);
};

const ODW_GDS_Window_Options_statusText = Window_Options.prototype.statusText;
Window_Options.prototype.statusText = function(index) {
	const symbol = this.commandSymbol(index);
    const value = this.getConfigValue(symbol);
	if (symbol === "difficultyLevel") {
		return ODW.GDS.getLabel(value);
	} else {
		return ODW_GDS_Window_Options_statusText.apply(this, arguments);
	}
};

const ODW_GDS_Window_Options_processOk = Window_Options.prototype.processOk;
Window_Options.prototype.processOk = function() {
	const index = this.index();
    const symbol = this.commandSymbol(index);
	if (symbol === "difficultyLevel") {
		if (ODW.GDS.canChangeLevel()) {
			this.changeValue(symbol, ODW.GDS.getNextLevel());
		} else {
			this.playBuzzerSound();
		}
	} else {
		ODW_GDS_Window_Options_processOk.apply(this);
	}
};

const ODW_GDS_Window_Options_cursorRight = Window_Options.prototype.cursorRight;
Window_Options.prototype.cursorRight = function() {
	const index = this.index();
	const symbol = this.commandSymbol(index);
	if (symbol === "difficultyLevel") {
		if (ODW.GDS.canChangeLevel()) {
			this.changeValue(symbol, ODW.GDS.getNextLevel());
		} else {
			this.playBuzzerSound();
		}
	} else {
		ODW_GDS_Window_Options_cursorRight.apply(this);
	}
};

const ODW_GDS_Window_Options_cursorLeft = Window_Options.prototype.cursorLeft;
Window_Options.prototype.cursorLeft = function() {
	const index = this.index();
    const symbol = this.commandSymbol(index);
	if (symbol === "difficultyLevel") {
		if (ODW.GDS.canChangeLevel()) {
			this.changeValue(symbol, ODW.GDS.getPrevLevel());
		} else {
			this.playBuzzerSound();
		}
	} else {
		ODW_GDS_Window_Options_cursorLeft.apply(this);
	}
};
