//=============================================================================
// VisuStella MZ - Events & Movement Core
// VisuMZ_1_EventsMoveCore.js
//=============================================================================

var Imported = Imported || {};
Imported.VisuMZ_1_EventsMoveCore = true;

var VisuMZ = VisuMZ || {};
VisuMZ.EventsMoveCore = VisuMZ.EventsMoveCore || {};
VisuMZ.EventsMoveCore.version = 1.00;

//=============================================================================
 /*:
 * @target MZ
 * @plugindesc [RPG Maker MZ] [Tier 1] [Version 1.00] [EventsMoveCore]
 * @author VisuStella
 * @url http://www.yanfly.moe/wiki/Events_and_Movement_Core_VisuStella_MZ
 * @orderAfter VisuMZ_0_CoreEngine
 *
 * @help
 * ============================================================================
 * Introduction
 * ============================================================================
 *
 * The Events & Movement Core plugin adds a lot of new functionality in terms
 * of event flexibility and movement options to RPG Maker MZ. These range from
 * adding in old capabilities from previous iterations of RPG Maker to more
 * mainstream techniques found in other game engines. Movement options are also
 * expanded to support 8-directional movement as well as sprite sheets provided
 * that the VisuStella 8 format is used.
 *
 * Features include all (but not limited to) the following:
 * 
 * - Event commands expanded upon to include old and new functions.
 * - Event templates for Copying Events, Morphing Events, and Spawning Events.
 * - 8-directional movement option available and sprite sheet support.
 * - Aesthetics for tilting the sprite when dashing and having shadows below.
 * - Pathfinding support for event movement through custom Move Route commands.
 * - Advanced switches and variable support to run code automatically.
 * - Turn regular Switches and Variables into Self Switches and Self Variables.
 * - Put labels and icons over events.
 * - Allow numerous ways to trigger events, through clicking, proximity, or by
 *   usage of Regions.
 * - Change the hitbox sizes of events to larger in any direction.
 * - Synchronize event movement options to move when player/other events move.
 * - The ability for the player to turn in place.
 *
 * ============================================================================
 * Requirements
 * ============================================================================
 *
 * This plugin is made for RPG Maker MZ. This will not work in other iterations
 * of RPG Maker.
 *
 * ------ Tier 1 ------
 *
 * This plugin is a Tier 1 plugin. Place it under other plugins of lower tier
 * value on your Plugin Manager list (ie: 0, 1, 2, 3, 4, 5). This is to ensure
 * that your plugins will have the best compatibility with the rest of the
 * VisuStella MZ library.
 *
 * ============================================================================
 * Features: Advanced Switches and Variables
 * ============================================================================
 *
 * Switches and variables can now run JavaScript code and return values
 * instantly. While at first glance, this may seem no different from using
 * the Control Variables event command's Script option, this can be used to
 * instantly set up Switch and/or Variable conditions for Parallel Common
 * Events, Event Page Conditions, Enemy Skill Conditions, and Troop Page
 * Conditions instantly without needing to make an event command to do so.
 *
 * ---
 *
 * <JS> code </JS>
 * - Used for: Switch and Variable names
 * - Replace 'code' with JavaScript code on what value to return.
 *
 * ---
 *
 * NOTE: Tagged Switches/Variables are mutually exclusive from one another.
 * You cannot tag them with <JS>, <Self>, or <Global> simultaneously.
 *
 * ============================================================================
 * Features: Self Switches and Variables
 * ============================================================================
 *
 * RPG Maker MZ by default has 4 Self Switches: A, B, C, D. For some types of
 * games, this isn't enough. This plugin gives you the ability convert regular
 * Switches into Self Switches so you could have more.
 *
 * Self Variables also do not exist in RPG Maker MZ by default. Just like with
 * Switches, you can turn regular Variables into Self Variables.
 *
 * ---
 *
 * <Self>
 * - Used for: Switch and Variable names
 * - Converts the Switch/Variable into a Self Switch/Variable.
 *
 * ---
 *
 * After, just use them like you would for normal Switches and Variables in an
 * event's page conditions. If the <Self> tag is present inside the Switch or
 * Variable's name, then it will use data unique to only that event.
 *
 * NOTE: Tagged Switches/Variables are mutually exclusive from one another.
 * You cannot tag them with <JS>, <Self>, or <Global> simultaneously.
 *
 * ============================================================================
 * Features: VisuStella-Style 8-Directional Sprite Sheets
 * ============================================================================
 *
 * This plugin provides support for the VisuStella-Style 8-Directional Sprite
 * Sheets, also know as VS8. VS8 sprite sheets offer support for walking
 * frames, dashing frames, carrying frames, and emotes.
 *
 * ---
 *
 * To designate a sprite sheet as VS8, simply add [VS8] to the filename.
 * Something like Actor1.png would become Actor1_[VS8].png.
 *
 * ---
 *
 * VS8 sprites are formatted as such. Each block below is a set of 3 frames.
 *
 * Walk Down    Walk DL     Dash Down   Dash DL
 * Walk Left    Walk DR     Dash Left   Dash DR
 * Walk Right   Walk UL     Dash Right  Dash UL
 * Walk Up      Walk UR     Dash Up     Dash UR
 *
 * Carry Down   Carry DL    Ladder      Emotes 3
 * Carry Left   Carry DR    Rope        Emotes 4
 * Carry Right  Carry UL    Emotes 1    Emotes 5
 * Carry Up     Carry UR    Emotes 2    Emotes 6
 *
 * ---
 *
 * Here are how each of the emote sets are grouped from left to right.
 *
 * Emotes 1: Item, Hmph, Victory
 * Emotes 2: Hurt, Kneel, Collapse
 * Emotes 3: !, ?, Music Note
 * Emotes 4: Heart, Anger, Sweat
 * Emotes 5: Cobweb, ..., Light Bulb
 * Emotes 6: Sleep0, Sleep1, Sleep2
 *
 * ---
 *
 * ============================================================================
 * Notetags and Comment Tags
 * ============================================================================
 *
 * The following are notetags that have been added through this plugin. These
 * notetags will not work with your game if this plugin is OFF or not present.
 *
 * Some of these are comment tags. Comment tags are used for events to mark and
 * affect individual event pages rather than the whole event.
 *
 * === Map Notetags ===
 *
 * The following notetags are used for maps only. While some of these options
 * are also available in the Plugin Parameters, some of these notetags extend
 * usage to specific maps marked by these notetags as well.
 *
 * ---
 *
 * <Diagonal Movement: On>
 * <Diagonal Movement: Off>
 *
 * - Used for: Map Notetags
 * - Turns on/off diagonal movement for those maps.
 * - If notetag isn't present, use Plugin Parameter setting.
 *
 * ---
 *
 * <type Allow Region: x>
 * <type Allow Region: x, x, x>
 *
 * <type Forbid Region: x>
 * <type Forbid Region: x, x, x>
 *
 * <type Dock Region: x>
 * <type Dock Region: x, x, x>
 *
 * - Used for: Map Notetags
 * - Replace 'type' with 'All', 'Walk', 'Player', 'Event', 'Vehicle', 'Boat',
 *   'Ship', or 'Airship'.
 * - 'Allow' notetag variants allow that type to pass through them no matter
 *   what other passability settings are in place.
 * - 'Forbid' notetag variants forbid that type from passing through at all.
 * - 'Dock' notetag variants allow vehicles to dock there. Boats and ships must
 *   face the region direction while airships must land directly on top.
 *
 * ---
 *
 * <Save Event Locations>
 *
 * - Used for: Maps Notetags
 * - Saves the locations of all events on the map so that when you return to
 *   that map at a later point, the events will be in the position they were
 *   last in.
 *
 * ---
 * 
 * === Page Comment Tags ===
 * 
 * The following comment tags are to be put inside of the pages of events,
 * troops, and common events for them to work!
 * 
 * ---
 * 
 * <Page Conditions>
 *   conditions
 *   conditions
 *   conditions
 * </Page Conditions>
 * 
 * - Used for: Map Event Page, Troop Page, and Common Event Page Comment Tags
 * - This allows you to create custom page conditions that utilize the
 *   Conditional Branch event command to see if the additional page conditions
 *   are met.
 * 
 * ---
 * 
 * <Conditions Met>
 * - Used for: Map Event Page, Troop Page, and Common Event Page Comment Tags
 * - If used between the <Page Conditions> and </Page Conditions> comment tag,
 *   upon reaching this part of event command list, the custom page conditions
 *   will be considered met.
 * 
 * ---
 * 
 * Example:
 * 
 * ◆Comment：<Page Conditions>
 * ◆If：Reid has equipped Potion Sword
 *   ◆Comment：If Reid has equipped the Potion Sword
 * ：       ：<Condition Met>
 *   ◆
 * ：End
 * ◆Comment：</Page Conditions>
 * 
 * If Reid has the "Potion Sword" weapon equipped, then the additional custom
 * page conditions are met and the event page will be present/active.
 * 
 * If this is a troop condition, the troop page event will activate.
 * 
 * If this is a common event, there will be a parallel common event active.
 * 
 * ---
 *
 * === Event and Event Page Notetags ===
 *
 * The following notetags have comment tag variants (with a few exceptions).
 * If a notetag is used for an event, it will affect the event constantly.
 * If a comment tag is used, it will only affect the page the comment tag is
 * on and only that page.
 *
 * ---
 *
 * <Activation Region: x>
 * <Activation Regions: x,x,x>
 *
 * - Used for: Event Notetags and Event Page Comment Tags
 * - Allows this event to be remotely activated as long as the player is
 *   standing within a tile marked by a designated region.
 * - Replace 'x' with the regions you wish to remotely activate this event in.
 *   - Action Button: Player must press OK while being in the region.
 *   - Player/Event Touch: Player must step onto the region.
 *   - Autorun/Parallel: Player be in the region.
 * - NOTE: This cannot be used with any other activation tags.
 *
 * ---
 *
 * <Activation Square: x>
 * <Activation Radius: x>
 * <Activation Row: x>
 * <Activation Column: x>
 *
 * - Used for: Event Notetags and Event Page Comment Tags
 * - Allows this event to be remotely activated as long as the player is
 *   within range of its activation type.
 * - Replace 'x' with a number stating the range in tiles.
 *   - Square: A square-shaped range with the event at the center.
 *   - Radius: A diamond-shaped range with the event at the center.
 *   - Row: Spans horizontally across the map. 'x' expands up and down.
 *   - Column: Spans vertically across the map. 'x' expands left and right.
 * - NOTE: This cannot be used with any other activation tags.
 *
 * ---
 *
 * <Always Update Movement>
 *
 * - Used for: Event Notetags and Event Page Comment Tags
 * - Events normally have to be within screen range for them to update their
 *   self movement. If this tag is present, the event is always updating.
 *
 * ---
 *
 * <Click Trigger>
 *
 * - Used for: Event Notetags and Event Page Comment Tags
 * - Allows this event to activate upon being clicked on with the mouse.
 *
 * ---
 *
 * <Copy Event: Map x, Event y>
 * <Copy Event: x, y>
 *
 * <Copy Event: template>
 *
 * - Used for: Event Notetags ONLY
 * - Makes this event copy all of the event settings from a different event
 *   that can be found on a different map (as long as that map is registered
 *   inside of Plugin Parameters => Event Template Settings => Preloaded Maps).
 * - Replace 'x' with a number representing the copied event's Map ID.
 * - Replace 'y' with a number representing the copied event's Event ID.
 * - For the 'template' variant, replace 'template' with the name of the
 *   template made in Plugin Parameters => Event Template Settings =>
 *   Event Template List.
 *
 * ---
 *
 * <Hitbox Left: x>
 * <Hitbox Right: x>
 * <Hitbox Up: x>
 * <Hitbox Down: x>
 *
 * - Used for: Event Notetags and Event Page Comment Tags
 * - Replace 'x' with a number to extend the hitbox of the event by that many
 *   tiles towards the listed direction.
 * - Use multiples of this notetag to extend them to different directions.
 *
 * ---
 *
 * <Icon: x>
 *
 * - Used for: Event Notetags and Event Page Comment Tags
 * - Replace 'x' with the Icon ID you wish to put above this event.
 * - This will not override any Icons designated to the ID through a
 *   Plugin Command.
 *
 * ---
 *
 * <Icon Buffer X: +x>
 * <Icon Buffer X: -x>
 *
 * <Icon Buffer Y: +x>
 * <Icon Buffer Y: -x>
 *
 * <Icon Buffer: +x, +y>
 * <Icon Buffer: -x, -y>
 *
 * - Used for: Event Notetags and Event Page Comment Tags
 * - Allows you to adjust the positions of the icon on the envent by buffers.
 * - Replace 'x' and 'y' with the values to adjust the position buffers by.
 *
 * ---
 *
 * <Icon Blend Mode: Normal>
 * <Icon Blend Mode: Additive>
 * <Icon Blend Mode: Multiply>
 * <Icon Blend Mode: Screen>
 *
 * - Used for: Event Notetags and Event Page Comment Tags
 * - Sets the blend mode for the icon on the event.
 *
 * ---
 *
 * <Label: text>
 *
 * - Used for: Event Notetags and Event Page Comment Tags
 * - Puts a label over the event's head displaying 'text'.
 * - Text codes can be used.
 *
 * ---
 *
 * <Label>
 * text
 * text
 * </Label>
 *
 * - Used for: Event Notetags and Event Page Comment Tags
 * - Puts a label over the event's head displaying 'text'.
 * - This can display multiple lines.
 * - Text codes can be used.
 *
 * ---
 *
 * <Label Range: x>
 *
 * - Used for: Event Notetags and Event Page Comment Tags
 * - Sets a range requirement for the player to be in order for the event's
 *   label to appear.
 * - Replace 'x' with a number value depicting the range in tiles.
 *
 * ---
 *
 * <Label Offset X: +x>
 * <Label Offset X: -x>
 *
 * <Label Offset Y: +x>
 * <Label Offset Y: -x>
 *
 * <Label Offset: +x, +y>
 * <Label Offset: -x, -y>
 *
 * - Used for: Event Notetags and Event Page Comment Tags
 * - Allows you to adjust the positions of the label on the envent by offsets.
 * - Replace 'x' and 'y' with the values to adjust the position offsets by.
 *
 * ---
 * 
 * <Move Only Region: x>
 * <Move Only Regions: x,x,x>
 * 
 * - Used for: Event Notetags and Event Page Comment Tags
 * - Sets the move range of this event to only the region(s) marked by the
 *   notetag(s) or comment tag(s).
 * - This will bypass terrain passability.
 * - This will not bypass event collision.
 * 
 * ---
 *
 * <Move Synch Target: Player>
 *
 * <Move Synch Target: Event x>
 *
 * - Used for: Event Notetags and Event Page Comment Tags
 * - Synchronizes the movement of this event with a target (either the player
 *   or another event). This event will only move whenever the synchronized
 *   target moves.
 * - For 'Event x' variant, replace 'x' with the ID of the event to synch to.
 *
 * ---
 *
 * <Move Synch Type: Random>
 * <Move Synch Type: Approach>
 * <Move Synch Type: Away>
 * <Move Synch Type: Custom>
 *
 * <Move Synch Type: Mimic>
 * <Move Synch Type: Reverse Mimic>
 *
 * <Move Synch Type: Mirror Horizontal>
 * <Move Synch Type: Mirror Vertical>
 *
 * - Used for: Event Notetags and Event Page Comment Tags
 * - Choose the type of movement the event will have if it is synchronized to
 *   a target.
 *   - Random: Move to a random position.
 *   - Approach: Approaches target.
 *   - Away: Flees from target.
 *   - Custom: Follows a custom move route.
 *   - Mimic: Imitates the target's movement style.
 *   - Reverse Mimic: Does the opposite of the target's movement.
 *   - Mirror Horizontal: Moves as if a mirror is placed horizontally.
 *   - Mirror Vertical: Moves as if a mirror is placed vertically.
 *
 * ---
 *
 * <Move Synch Delay: x>
 *
 * - Used for: Event Notetags and Event Page Comment Tags
 * - If this tag is present, the event will wait a bit after each move before
 *   moving again.
 * - Replace 'x' with the number of movement instances in between.
 *
 * ---
 *
 * <Save Event Location>
 *
 * - Used for: Event Notetags ONLY
 * - Saves the locations of the event on the map so that when you return to
 *   that map at a later point, the event will be in the position it was
 *   last in.
 *
 * ---
 *
 * <Hide Shadow>
 * - Used for: Event Notetags and Event Page Comment Tags
 * - Hides the shadow for the event.
 *
 * ---
 *
 * <Shadow Filename: filename>
 *
 * - Used for: Event Notetags and Event Page Comment Tags
 * - Replaces the shadow graphic used with 'filename' found in the
 *   img/system/ project folder.
 *
 * ---
 *
 * <Sprite Offset X: +x>
 * <Sprite Offset X: -x>
 *
 * <Sprite Offset Y: +x>
 * <Sprite Offset Y: -x>
 *
 * <Sprite Offset: +x, +y>
 * <Sprite Offset: -x, -y>
 *
 * - Used for: Event Notetags and Event Page Comment Tags
 * - Changes how much the event's sprite is visibly offset by.
 * - Replace 'x' and 'y' with numbers indicating the offset in pixels.
 *
 * ---
 *
 * <Step Pattern: Left to Right>
 * <Step Pattern: Right to Left>
 *
 * <Step Pattern: Spin Clockwise>
 * <Step Pattern: Spin CW>
 *
 * <Step Pattern: Spin CounterClockwise>
 * <Step Pattern: Spin CCW>
 * <Step Pattern: Spin AntiClockwise>
 * <Step Pattern: Spin ACW>
 *
 * - Used for: Event Notetags and Event Page Comment Tags
 * - Changes the way the event animates if a tag is present.
 *   - Left to Right: Makes the event sprite's step behavior go from frame 0 to
 *     1 to 2, then back to 0 instead of looping backward.
 *   - Right to Left: Makes the event sprite's step behavior go from frame 2 to
 *     1 to 0, then back to 2 instead of looping forward.
 *   - Spin Clockwise: Makes the event sprite's step behavior spin CW.
 *   - Spin CounterClockwise: Makes the event sprite's step behavior spin CCW.
 *
 * ---
 *
 * ============================================================================
 * Plugin Commands
 * ============================================================================
 *
 * The following are Plugin Commands that come with this plugin. They can be
 * accessed through the Plugin Command event command.
 *
 * ---
 *
 * Auto Movement: Events
 * - Allow/stop events from auto movement.
 *
 *   Value:
 *   - Allow events to move automatically?
 *
 * ---
 *
 * Call Event: Remote Activation
 * - Runs the page of a different event remotely.
 *
 *   Map ID:
 *   - Target event's map. Use 0 for current map.
 *   - You may use JavaScript code.
 *
 *   Event ID:
 *   - The ID of the event to remotely run.
 *   - You may use JavaScript code.
 *
 *   Page ID:
 *   - The page of the remote event to run.
 *   - You may use JavaScript code.
 *
 * ---
 *
 * Dash Enable: Toggle
 * - Enable/Disable Dashing on maps.
 *
 *   Value:
 *   - What do you wish to change dashing to?
 *
 * ---
 *
 * Event Icon: Change
 * - Change the icon that appears on an event.
 *
 *   Map ID:
 *   - The map the target map. Use 0 for current map.
 *   - You may use JavaScript code.
 *
 *   Event ID:
 *   - The ID of the target event.
 *   - You may use JavaScript code.
 *
 *   Icon Index:
 *   - Icon index used for the icon.
 *   - You may use JavaScript code.
 *
 *   Buffer X:
 *   - How much to shift the X position by?
 *   - You may use JavaScript code.
 *
 *   Buffer Y:
 *   - How much to shift the Y position by?
 *   - You may use JavaScript code.
 *
 *   Blend Mode:
 *   - What kind of blend mode do you wish to apply to the icon sprite?
 *
 * ---
 *
 * Event Icon: Delete
 * - Delete the icon that appears on an event.
 *
 *   Map ID:
 *   - The map the target map. Use 0 for current map.
 *   - You may use JavaScript code.
 *
 *   Event ID:
 *   - The ID of the target event.
 *   - You may use JavaScript code.
 *
 * ---
 *
 * Event Label: Refresh
 * - Refresh all Event Labels on screen.
 * - This is used to refresh page conditions for map changes that don't
 *   force a refresh.
 *
 * ---
 *
 * Event Label: Visible
 * - Change the visibility of Event Labels.
 *
 *   Visibility:
 *   - What do you wish to change visibility to?
 *
 * ---
 *
 * Event Location: Save
 * - Memorize an event's map location so it reappears there the next time the
 *   map is loaded.
 *
 *   Event ID:
 *   - The ID of the target event.
 *   - You may use JavaScript code.
 *
 * ---
 *
 * Event Location: Delete
 * - Deletes an event's saved map location.
 * - The event will reappear at its default location.
 *
 *   Map ID:
 *   - The map the target map. Use 0 for current map.
 *   - You may use JavaScript code.
 *   
 *   Event ID:
 *   - The ID of the target event.
 *   - You may use JavaScript code.
 *
 * ---
 *
 * Event Location: Create
 * - Creates a custom spawn location for a specific map's event so it appears
 *   there the next time the map is loaded.
 *
 *   Map ID:
 *   - The map the target map. Use 0 for current map.
 *   - You may use JavaScript code.
 *
 *   Event ID:
 *   - The ID of the target event.
 *   - You may use JavaScript code.
 *
 *   X Coordinate:
 *   - The X coordinate of the event.
 *   - You may use JavaScript code.
 *
 *   Y Coordinate:
 *   - The Y coordinate of the event.
 *   - You may use JavaScript code.
 *
 *   Direction:
 *   - The direction the event will be facing.
 *
 *   Optional:
 *
 *     Page ID:
 *     - The page of the event to set the move route to.
 *     - You may use JavaScript code.
 *
 *     Move Route Index:
 *     - The point in the move route for this event to be at if the page ID
 *       matches the rest of the page conditions.
 *
 * ---
 *
 * Morph Event: Change
 * - Runs the page of a different event remotely.
 *
 *   Step 1:
 *
 *     Map ID:
 *     - Target event's map. Use 0 for current map.
 *     - You may use JavaScript code.
 *
 *     Event ID:
 *     - The ID of the target event.
 *     - You may use JavaScript code.
 *
 *   Step 2:
 *
 *     Template Name:
 *     - Name of the target event template to morph into.
 *     - Ignored if this is called "Untitled".
 *
 *     Map ID:
 *     - Target event's map. Use 0 for current map.
 *     - You may use JavaScript code.
 *
 *     Event ID:
 *     - The ID of the target event.
 *     - You may use JavaScript code.
 *
 *     Preserve Morph:
 *     - Is the morph effect preserved?
 *     - Or does it expire upon leaving the map?
 *
 * ---
 *
 * Morph Event: Remove
 * - Remove the morph status of an event.
 *
 *   Map ID:
 *   - Target event's map. Use 0 for current map.
 *   - You may use JavaScript code.
 *
 *   Event ID:
 *   - The ID of the event to remotely run.
 *   - You may use JavaScript code.
 *
 *   Remove Preservation:
 *   - Also remove the preservation effect?
 *
 * ---
 *
 * Player Icon: Change
 * - Change the icon that appears on on the player.
 *
 *   Icon Index:
 *   - Icon index used for the icon.
 *   - You may use JavaScript code.
 *
 *   Buffer X:
 *   - How much to shift the X position by?
 *   - You may use JavaScript code.
 *
 *   Buffer Y:
 *   - How much to shift the Y position by?
 *   - You may use JavaScript code.
 *
 *   Blend Mode:
 *   - What kind of blend mode do you wish to apply to the icon sprite?
 *
 * ---
 *
 * Player Icon: Delete
 * - Delete the icon that appears on the player.
 *
 * ---
 *
 * Self Switch: A B C D
 * - Change the Self Switch of a different event.
 *
 *   Map ID:
 *   - The map the target map. Use 0 for current map.
 *   - You may use JavaScript code.
 *
 *   Event ID:
 *   - The ID of the target event.
 *   - You may use JavaScript code.
 *
 *   Letter:
 *   - Letter of the target event's Self Switch to change.
 *
 *   Value:
 *   - What value do you want to set the Self Switch to?
 *
 * ---
 *
 * Self Switch: Switch ID
 * - Change the Self Switch of a different event.
 *
 *   Map ID:
 *   - The map the target map. Use 0 for current map.
 *   - You may use JavaScript code.
 *
 *   Event ID:
 *   - The ID of the target event.
 *   - You may use JavaScript code.
 *
 *   Switch ID:
 *   - The ID of the target switch.
 *
 *   Value:
 *   - What value do you want to set the Self Switch to?
 *
 * ---
 *
 * Self Variable: Variable ID
 * - Change the Self Variable of a different event.
 *
 *   Map ID:
 *   - The map the target map. Use 0 for current map.
 *   - You may use JavaScript code.
 *
 *   Event ID:
 *   - The ID of the target event.
 *   - You may use JavaScript code.
 *
 *   Variable ID:
 *   - The ID of the target variable.
 *
 *   Value:
 *   - What value do you want to set the Self Switch to?
 *
 * ---
 *
 * Spawn Event: Spawn At X, Y
 * - Spawns desired event at X, Y location on the current map.
 *
 *   Step 1:
 *
 *     Template Name:
 *     - Name of the target event template to spawn as.
 *     - Ignored if this is called "Untitled".
 *
 *     Map ID:
 *     - Target event's map to be used as reference.
 *     - You may use JavaScript code.
 *
 *     Event ID:
 *     - The ID of the target event to be used as reference.
 *     - You may use JavaScript code.
 *
 *   Step 2:
 *
 *     X Coordinate:
 *     - Target Location to spawn at.
 *     - You may use JavaScript code.
 *
 *     Y Coordinate:
 *     - Target Location to spawn at.
 *     - You may use JavaScript code.
 *
 *     Check Event Collision:
 *     - Check collision with any other events and player?
 *
 *     Check Passability:
 *     - Check passability of the target location.
 *
 *     Preserve Spawn:
 *     - Is the spawned event preserved?
 *     - Or does it expire upon leaving the map?
 *
 * ---
 *
 * Spawn Event: Spawn At Region
 * - Spawns desired event at a random region-marked location on the
 *   current map.
 *
 *   Step 1:
 *
 *     Template Name:
 *     - Name of the target event template to spawn as.
 *     - Ignored if this is called "Untitled".
 *
 *     Map ID:
 *     - Target event's map to be used as reference.
 *     - You may use JavaScript code.
 *
 *     Event ID:
 *     - The ID of the target event to be used as reference.
 *     - You may use JavaScript code.
 *
 *   Step 2:
 *
 *     Region ID(s):
 *     - Pick region(s) to spawn this event at.
 *
 *     Check Event Collision:
 *     - Check collision with any other events and player?
 *
 *     Check Passability:
 *     - Check passability of the target location.
 *
 *     Preserve Spawn:
 *     - Is the spawned event preserved?
 *     - Or does it expire upon leaving the map?
 *
 * ---
 *
 * Spawn Event: Despawn Event ID
 * - Despawns the selected Event ID on the current map.
 *
 *   Event ID
 *   - The ID of the target event.
 *   - You may use JavaScript code.
 *
 * ---
 *
 * Spawn Event: Despawn At X, Y
 * - Despawns any spawned event(s) at X, Y location on the current map.
 *
 *   X Coordinate:
 *   - Target Location to despawn at.
 *   - You may use JavaScript code.
 *
 *   Y Coordinate:
 *   - Target Location to despawn at.
 *   - You may use JavaScript code.
 *
 * ---
 *
 * Spawn Event: Despawn Region(s)
 * - Despawns the selected Region(s).
 *
 *   Region ID(s)
 *   - Pick region(s) and despawn everything inside it.
 *
 * ---
 *
 * Spawn Event: Despawn Everything
 * - Despawns all spawned events on the current map.
 *
 * ---
 *
 * ============================================================================
 * Move Route Custom Commands
 * ============================================================================
 *
 * Some custom commands have been added to the "Set Movement Route" event
 * command. These can be accessed by pressing the "Script..." command and
 * typing in the following, which don't need to be in code form.
 *
 * Keep in mind that since these are custom additions and RPG Maker MZ does not
 * allow plugins to modify the editor, the "Preview" button will not factor in
 * the effects of these commands.
 *
 * ---
 * 
 * Animation: x
 * - Replace 'x' with the ID of the animation to play on moving unit.
 *
 * ---
 * 
 * Balloon: name
 * - Replace 'name' with any of the following to play a balloon on that the
 *   target moving unit.
 * - '!', '?', 'Music Note', 'Heart', 'Anger', 'Sweat', 'Cobweb', 'Silence',
 *   'Light Bulb', 'Sleep', 'User-Defined 1', 'User-Defined 2',
 *   'User-Defined 3', 'User-Defined 4', 'User-Defined 5'
 *
 * ---
 * 
 * Hug: Left
 * Hug: Right
 * - Causes the moving unit to hug the left/right side of the wall.
 *
 * ---
 * 
 * Index: x
 * - Replace 'x' with a number depicting the character index to change the
 *   moving unit's sprite to.
 *
 * ---
 * 
 * Index: +x
 * Index: -x
 * - Replace 'x' with the value to change the character index of the moving
 *   unit's sprite by.
 *
 * ---
 * 
 * Jump Forward: x
 * - Replace 'x' with the number of tiles for the unit to jump forward by.
 *
 * ---
 * 
 * Jump To: x, y
 * - Replace 'x' and 'y' with the coordinates for the unit to jump to.
 *
 * ---
 * 
 * Jump to Event: x
 * - Replace 'x' with the ID of the event for the unit to jump to.
 *
 * ---
 * 
 * Jump to Player
 * - Causes the moving unit to jump to the player.
 *
 * ---
 * 
 * Move Lower Left Until Stop
 * Move Down Until Stop
 * Move Lower Right Until Stop
 * Move Left Until Stop
 * Move Right Until Stop
 * Move Upper Left Until Stop
 * Move Up Until Stop
 * Move Upper Right Until Stop
 * - Causes the moving unit to move that direction until it hits a stop.
 *
 * ---
 * 
 * Move To: x, y
 * - Replace 'x' and 'y' with the map coordinates to move the unit to through
 *   pathfinding.
 * - This uses RPG Maker MZ's pathfinding algorithm. It is not perfect so do
 *   not expect the most optimal results.
 *
 * ---
 * 
 * Move to Event: x
 * - Replace 'x' with the ID of the event to move the unit to.
 * - This uses RPG Maker MZ's pathfinding algorithm. It is not perfect so do
 *   not expect the most optimal results.
 *
 * ---
 * 
 * Move to Player
 * - Moves the unit to the player.
 * - This uses RPG Maker MZ's pathfinding algorithm. It is not perfect so do
 *   not expect the most optimal results.
 *
 * ---
 * 
 * Move Lower Left: x
 * Move Down: x
 * Move Lower Right: x
 * Move Left: x
 * Move Right: x
 * Move Upper Left: x
 * Move Up: x
 * Move Upper Right: x
 * - Replace 'x' with the number of times to move the unit by in the designated
 *   direction on the map.
 *
 * ---
 * 
 * Opacity: x%
 * - Replace 'x' with the percentage to change the unit's sprite opacity to.
 *
 * ---
 * 
 * Opacity: +x
 * Opacity: -x
 * - Replace 'x' with the increment to change the unit's sprite opacity by.
 *
 * ---
 *
 * Pattern Lock: x
 * - Replace 'x' with the step pattern to lock the unit's sprite to.
 *
 * ---
 *
 * Pattern Unlock
 * - Removes pattern lock effect.
 *
 * ---
 * 
 * Pose: name
 * - If using a VS8 sprite, this will cause the unit to strike a pose.
 * - Replace 'name' with any the following:
 * - 'Item', 'Hmph', 'Victory', 'Hurt', 'Kneel', 'Collapse',
 *   '!', '?', 'Music Note', 'Heart', 'Anger', 'Sweat', 'Cobweb', 'Silence',
 *   'Light Bulb', 'Sleep'
 *
 * ---
 * 
 * Step Toward: x, y
 * - Replace 'x' and 'y' for the desired coordinates for the unit to take one
 *   step towards.
 * - This uses RPG Maker MZ's pathfinding algorithm. It is not perfect so do
 *   not expect the most optimal results.
 *
 * ---
 * 
 * Step Toward Event: x
 * - Replace 'x' with the ID of the event for the unit to take one step to.
 * - This uses RPG Maker MZ's pathfinding algorithm. It is not perfect so do
 *   not expect the most optimal results.
 *
 * ---
 * 
 * Step Toward Player
 * - Causes event to take one step towards the player.
 * - This uses RPG Maker MZ's pathfinding algorithm. It is not perfect so do
 *   not expect the most optimal results.
 *
 * ---
 * 
 * Step Away From: x, y
 * - Replace 'x' and 'y' for the desired coordinates for the unit to take one
 *   step away from.
 * - This uses RPG Maker MZ's pathfinding algorithm. It is not perfect so do
 *   not expect the most optimal results.
 *
 * ---
 * 
 * Step Away From Event: x
 * - Replace 'x' with the ID of the event for the unit to take one step from.
 * - This uses RPG Maker MZ's pathfinding algorithm. It is not perfect so do
 *   not expect the most optimal results.
 *
 * ---
 * 
 * Step Away From Player
 * - Causes event to take one step away from the player.
 * - This uses RPG Maker MZ's pathfinding algorithm. It is not perfect so do
 *   not expect the most optimal results.
 *
 * ---
 * 
 * Turn To: x, y
 * - Replace 'x' and 'y' for the coordinates to make the unit face towards.
 * - This supports 8 directional turning.
 *
 * ---
 * 
 * Turn to Event: x
 * - Replace 'x' with the ID of the event to turn the unit towards.
 * - This supports 8 directional turning.
 *
 * ---
 * 
 * Turn to Player
 * - Causes the unit to turn towards the player.
 * - This supports 8 directional turning.
 *
 * ---
 * 
 * Turn Away From: x, y
 * - Replace 'x' and 'y' for the coordinates to make the unit face away from.
 * - This supports 8 directional turning.
 *
 * ---
 * 
 * Turn Away From Event: x
 * - Replace 'x' with the ID of the event to turn the unit away from.
 * - This supports 8 directional turning.
 *
 * ---
 * 
 * Turn Away From Player
 * - Causes the unit to turn away from the player.
 * - This supports 8 directional turning.
 *
 * ---
 * 
 * Turn Lower Left
 * Turn Lower Right
 * Turn Upper Left
 * Turn Upper Right
 * - Causes the unit to turn to one of the diagonal directions.
 *
 * ---
 * 
 * Self Switch x: On
 * Self Switch x: Off
 * Self Switch x: Toggle
 * - Replace 'x' with 'A', 'B', 'C', 'D', or a <Self> Switch ID to adjust the
 *   unit's self switch.
 *
 * ---
 * 
 * Self Variable x: y
 * - Replace 'x' with a <Self> Variable ID to adjust the unit's self variable.
 * - Replace 'y' with a number value to set the self variable to.
 *
 * ---
 * 
 * Teleport To: x, y
 * - Replace 'x' and 'y' with the coordinates to instantly move the unit to.
 *
 * ---
 * 
 * Teleport to Event: x
 * - Replace 'x' with the ID of the event to instantly move the unit to.
 *
 * ---
 * 
 * Teleport to Player
 * - Instantly moves the unit to the player's location.
 *
 * ---
 * 
 * If none of the commands are detected above, then a script call will be ran.
 *
 * ---
 *
 * ============================================================================
 * Plugin Parameters: Event Label Settings
 * ============================================================================
 *
 * Event Labels are small windows created to display text over an event's head.
 * They're set up using the <Label> notetags and/or comment tags. Event Labels
 * are a great way to instantly relay information about the event's role to
 * the player.
 *
 * ---
 *
 * Event Labels
 * 
 *   Font Size:
 *   - The font size used for the Event Labels.
 * 
 *   Icon Size:
 *   - The size of the icons used in the Event Labels.
 * 
 *   Line Height:
 *   - The line height used for the Event Labels.
 * 
 *   Offset X:
 *   - Globally offset all labels horizontally by this amount.
 * 
 *   Offset Y:
 *   - Globally offset all labels vertically by this amount.
 * 
 *   Fade Speed:
 *   - Fade speed for labels.
 * 
 *   Visible Range:
 *   - Range the player has to be within the event to make its label visible.
 *
 * ---
 *
 * ============================================================================
 * Plugin Parameters: Event Icon Settings
 * ============================================================================
 *
 * Icons can be displayed over an event's head through the <Icon> notetags
 * and/or comment tags. These can be used for a variety of things such as
 * making them look like they're carrying an item or to indicate they have a
 * specific role.
 *
 * ---
 *
 * Event Icon
 * 
 *   Buffer X:
 *   - Default X position buffer for event icons.
 * 
 *   Buffer Y:
 *   - Default Y position buffer for event icons.
 * 
 *   Blend Mode:
 *   - Default blend mode for even icons.
 *     - 0 - Normal
 *     - 1 - Additive
 *     - 2 - Multiply
 *     - 3 - Screen
 *
 * ---
 *
 * ============================================================================
 * Plugin Parameters: Event Template Settings
 * ============================================================================
 *
 * Event Templates allow you to store specific maps and/or event data to bring
 * out on need while having a premade set base. They're similar to prefabs but
 * aren't things that can be altered individually as one setting for an event
 * template will serve as a blueprint for all of them that use them.
 *
 * Event Templates are used for the <Copy Event> notetags, the Morph Event and
 * Spawn Event Plugin Commands.
 *
 * ---
 *
 * Settings
 * 
 *   Preloaded Maps:
 *   - A list of all the ID's of the maps that will be preloaded to serve as
 *     template maps for this plugin.
 *
 * ---
 *
 * Templates
 * - A list of all the Event Templates used by this project. Used for notetags
 *   and Plugin Commands.
 * 
 *     Name:
 *     - Name of the template. It'll be used as anchor points for notetags and
 *       Plugin Commands.
 * 
 *     Map ID:
 *     - ID of the map the template event is stored on.
 *     - This will automatically add this ID to preloaded list.
 * 
 *     Event ID:
 *     - ID of the event the template event is based on.
 * 
 *     JavaScript:
 *       JS: Pre-Copy:
 *       JS: Post-Copy:
 *       JS: Pre-Morph:
 *       JS: Post-Morph:
 *       JS: Pre-Spawn:
 *       JS: Post-Spawn:
 *       - Code that's ran during certain circumstances.
 *       - The code will occur at the same time as the ones listed in the main
 *         Event Template Settings Plugin Parameters. However, the ones listed
 *         in these individual entries will only occur for these specific
 *         templates and only if the templates are used.
 *
 * ---
 *
 * JavaScript
 * 
 *   JS: Pre-Copy:
 *   JS: Post-Copy:
 *   JS: Pre-Morph:
 *   JS: Post-Morph:
 *   JS: Pre-Spawn:
 *   JS: Post-Spawn:
 *   - Code that's ran during certain circumstances.
 *   - These are global and are ran for all copies, morphs, and/or spawns.
 *
 * ---
 *
 * ============================================================================
 * Plugin Parameters: Movement Settings
 * ============================================================================
 *
 * These plugin parameters allow you to control how movement works in your
 * game, toggling it from 4-directional to 8-directional, setting up rules to
 * stop self-movement from events while an event or message is present, and
 * other aesthetics such as tilting the sprite while dashing, setting shadows
 * beneath the sprites, and allow for turning in place.
 *
 * ---
 *
 * 8 Directional Movement
 * 
 *   Enable:
 *   - Allow 8-directional movement by default? Players can move diagonally.
 * 
 *   Strict Collision:
 *   - Enforce strict collission rules where the player must be able to pass
 *     both cardinal directions?
 * 
 *   Favor Horizontal:
 *   - Favor horizontal if cannot pass diagonally but can pass both
 *     horizontally and vertically?
 * 
 *   Slower Diagonals?
 *   - Enforce a slower movement speed when moving diagonally?
 * 
 *     Speed Multiplier
 *     - What's the multiplier to adjust movement speed when moving diagonally?
 *
 * ---
 *
 * Automatic Movement
 * 
 *   Stop During Events:
 *   - Stop automatic event movement while events are running.
 * 
 *   Stop During Messages:
 *   - Stop automatic event movement while a message is running.
 *
 * ---
 *
 * Dash
 * 
 *   Dash Modifier:
 *   - Alters the dash speed modifier.
 * 
 *   Enable Dash Tilt?:
 *   - Tilt any sprites that are currently dashing?
 * 
 *     Tilt Left Amount:
 *     - Amount in radians when moving left (upper left, left, lower left).
 * 
 *     Tilt Right Amount:
 *     - Amount in radians when moving right (upper right, right, lower right).
 * 
 *     Tilt Vertical Amount:
 *     - Amount in radians when moving vertical (up, down).
 *
 * ---
 *
 * Shadows
 * 
 *   Show:
 *   - Show shadows on all events and player-related sprites.
 * 
 *   Default Filename:
 *   - Default filename used for shadows found in img/system/ folder.
 *
 * ---
 *
 * Turn in Place
 * 
 *   Enable:
 *   - When not dashing, player will turn in place before moving.
 *   - This only applies with keyboard inputs.
 * 
 *   Delay in Frames:
 *   - The number of frames to wait before moving.
 *
 * ---
 * 
 * Vehicle Speeds
 * 
 *   Boat Speed:
 *   - Allows you to adjust the base speed of the boat vehicle.
 * 
 *   Ship Speed:
 *   - Allows you to adjust the base speed of the ship vehicle.
 * 
 *   Airship Speed:
 *   - Allows you to adjust the base speed of the airship vehicle.
 * 
 * ---
 *
 * ============================================================================
 * Plugin Parameters: VisuStella 8-Dir Settings
 * ============================================================================
 *
 * These are settings for sprite sheets using the VS8 format.
 * For more information on the VS8 format, look in the help section above.
 *
 * ---
 *
 * Balloon Icon Settings
 * 
 *   Auto-Balloon Poses:
 *   - Automatically pose VS8 sprites when using balloon icons.
 * 
 *   Balloon Offset X:
 *   - Offset balloon icons on VS8 sprites by x pixels.
 * 
 *   Balloon Offset Y:
 *   - Offset balloon icons on VS8 sprites by y pixels.
 *
 * ---
 *
 * Icons
 * 
 *   Auto Buffer:
 *   - Automatically buffer the X and Y coordinates of VS8 sprites?
 * 
 *   Use Carry Pose:
 *   - Use the carry pose when moving with an icon overhead.
 *
 * ---
 *
 * ============================================================================
 * Plugin Parameters: Region Rulings
 * ============================================================================
 *
 * These settings allow you to decide the passability of the player, events,
 * and various vehicles through the usage of Regions.
 *
 * ---
 *
 * Allow Regions
 * 
 *   All Allow:
 *   Walk Allow:
 *   Player Allow:
 *   Event Allow:
 *   Vehicle Allow:
 *   Boat Allow:
 *   Ship Allow:
 *   Airship Allow:
 *   - Insert Region ID's where the affected unit type can enter.
 *   - Region ID's range from 0 to 255.
 *
 * ---
 *
 * Forbid Regions
 * 
 *   All Forbid:
 *   Walk Forbid:
 *   Player Forbid:
 *   Event Forbid:
 *   Vehicle Forbid:
 *   Boat Forbid:
 *   Ship Forbid:
 *   Airship Forbid:
 *   - Insert Region ID's where the affected unit type cannot enter.
 *   - Region ID's range from 0 to 255.
 *
 * ---
 *
 * Dock Regions
 * 
 *   Vehicle Dock:
 *   Boat Dock:
 *   Ship Dock:
 *   Airship Dock:
 *   - Insert Region ID's where the affected vehicle can dock
 *   - Region ID's range from 0 to 255.
 * 
 *   Only Region Dockable:
 *   - Vehicles are only able to dock at designated regions.
 *
 * ---
 *
 * ============================================================================
 * Plugin Parameters: Common Event on OK Button
 * ============================================================================
 *
 * These Plugin Parameters allow you to setup Common Events that activate using
 * Regions when pressing the OK button while standing on top of them or in
 * front of them. These let you create near universally interactable objects
 * using Regions, such as rivers to start up fishing events or locations to
 * places items on.
 *
 * ---
 *
 * Regions
 * 
 *   Regions 1 - 255:
 *   - Which Common Event does this region activate?
 *   - Use 0 to not activate any Common Events.
 *
 * ---
 *
 * Target Tile
 * 
 *   Target Tile:
 *   - Which tile should be checked for Common Event on OK Button?
 *     - Tile in front of player.
 *     - Tile player is standing on top of.
 *
 * ---
 *
 * ============================================================================
 * Plugin Parameters: Common Event on Touch
 * ============================================================================
 *
 * These Plugin Parameters allow you to setup Common Events that trigger when
 * stepping onto Region-marked tiles. These let you create custom effects that
 * will occur such as customized damage floors, traps, and/or events.
 *
 * ---
 *
 * Regions
 * 
 *   Regions 1 - 255:
 *   - Which Common Event does this region activate?
 *   - Use 0 to not activate any Common Events.
 *
 * ---
 *
 * ============================================================================
 * Plugin Parameters: Terrain Tag Settings
 * ============================================================================
 *
 * Terrain Tags are used in Database => Tilesets to mark certain tiles and
 * give them unique properties through terrain tags.
 *
 * ---
 *
 * Terrain Tag ID's
 * 
 *   Rope:
 *   - Which terrain tag number to use for ropes?
 *
 * ---
 *
 * ============================================================================
 * Terms of Use
 * ============================================================================
 *
 * 1. These plugins may be used in free or commercial games provided that they
 * have been acquired through legitimate means at VisuStella.com and/or any
 * other official approved VisuStella sources. Exceptions and special
 * circumstances that may prohibit usage will be listed on VisuStella.com.
 * 
 * 2. All of the listed coders found in the Credits section of this plugin must
 * be given credit in your games or credited as a collective under the name:
 * "VisuStella".
 * 
 * 3. You may edit the source code to suit your needs, so long as you do not
 * claim the source code belongs to you. VisuStella also does not take
 * responsibility for the plugin if any changes have been made to the plugin's
 * code, nor does VisuStella take responsibility for user-provided custom code
 * used for custom control effects including advanced JavaScript notetags
 * and/or plugin parameters that allow custom JavaScript code.
 * 
 * 4. You may NOT redistribute these plugins nor take code from this plugin to
 * use as your own. These plugins and their code are only to be downloaded from
 * VisuStella.com and other official/approved VisuStella sources. A list of
 * official/approved sources can also be found on VisuStella.com.
 *
 * 5. VisuStella is not responsible for problems found in your game due to
 * unintended usage, incompatibility problems with plugins outside of the
 * VisuStella MZ library, plugin versions that aren't up to date, nor
 * responsible for the proper working of compatibility patches made by any
 * third parties. VisuStella is not responsible for errors caused by any
 * user-provided custom code used for custom control effects including advanced
 * JavaScript notetags and/or plugin parameters that allow JavaScript code.
 *
 * 6. If a compatibility patch needs to be made through a third party that is
 * unaffiliated with VisuStella that involves using code from the VisuStella MZ
 * library, contact must be made with a member from VisuStella and have it
 * approved. The patch would be placed on VisuStella.com as a free download
 * to the public. Such patches cannot be sold for monetary gain, including
 * commissions, crowdfunding, and/or donations.
 *
 * ============================================================================
 * Credits
 * ============================================================================
 * 
 * If you are using this plugin, credit the following people in your game:
 * 
 * Team VisuStella
 * - Yanfly
 * - Arisu
 * - Olivia
 * - Irina
 *
 * ============================================================================
 * Changelog
 * ============================================================================
 *
 * Version 1.00:
 * - Finished Plugin!
 *
 * ============================================================================
 * End of Helpfile
 * ============================================================================
 *
 * @ --------------------------------------------------------------------------
 *
 * @command AutoMoveEvents
 * @text Auto Movement: Events
 * @desc Allow/stop events from auto movement.
 *
 * @arg Value:str
 * @text Value
 * @type select
 * @option Allow
 * @value Allow
 * @option Stop
 * @value Stop
 * @option Toggle
 * @value Toggle
 * @desc Allow events to move automatically?
 * @default Allow
 *
 * @ --------------------------------------------------------------------------
 *
 * @command CallEvent
 * @text Call Event: Remote Activation
 * @desc Runs the page of a different event remotely.
 *
 * @arg MapId:eval
 * @text Map ID
 * @desc Target event's map. Use 0 for current map.
 * You may use JavaScript code.
 * @default 0
 *
 * @arg EventId:eval
 * @text Event ID
 * @desc The ID of the event to remotely run.
 * You may use JavaScript code.
 * @default 1
 *
 * @arg PageId:eval
 * @text Page ID
 * @desc The page of the remote event to run.
 * You may use JavaScript code.
 * @default 1
 *
 * @ --------------------------------------------------------------------------
 *
 * @command DashEnableToggle
 * @text Dash Enable: Toggle
 * @desc Enable/Disable Dashing on maps.
 *
 * @arg Value:str
 * @text Value
 * @type select
 * @option Enable
 * @value Enable
 * @option Disable
 * @value Disable
 * @option Toggle
 * @value Toggle
 * @desc What do you wish to change dashing to?
 * @default Enable
 *
 * @ --------------------------------------------------------------------------
 *
 * @command EventIconChange
 * @text Event Icon: Change
 * @desc Change the icon that appears on an event.
 *
 * @arg MapId:eval
 * @text Map ID
 * @desc The map the target map. Use 0 for current map.
 * You may use JavaScript code.
 * @default 0
 *
 * @arg EventId:eval
 * @text Event ID
 * @parent MapId:eval
 * @desc The ID of the target event.
 * You may use JavaScript code.
 * @default 1
 *
 * @arg IconIndex:eval
 * @text Icon Index
 * @desc Icon index used for the icon.
 * You may use JavaScript code.
 * @default 1
 *
 * @arg IconBufferX:eval
 * @text Buffer X
 * @parent IconIndex:eval
 * @desc How much to shift the X position by?
 * You may use JavaScript code.
 * @default 0
 *
 * @arg IconBufferY:eval
 * @text Buffer Y
 * @parent IconIndex:eval
 * @desc How much to shift the Y position by?
 * You may use JavaScript code.
 * @default 12
 *
 * @arg IconBlendMode:num
 * @text Blend Mode
 * @parent IconIndex:eval
 * @type select
 * @option 0 - Normal
 * @value 0
 * @option 1 - Additive
 * @value 1
 * @option 2 - Multiply
 * @value 2
 * @option 3 - Screen
 * @value 3
 * @desc What kind of blend mode do you wish to apply to the icon sprite?
 * @default 0
 *
 * @ --------------------------------------------------------------------------
 *
 * @command EventIconDelete
 * @text Event Icon: Delete
 * @desc Delete the icon that appears on an event.
 *
 * @arg MapId:eval
 * @text Map ID
 * @desc The map the target map. Use 0 for current map.
 * You may use JavaScript code.
 * @default 0
 *
 * @arg EventId:eval
 * @text Event ID
 * @parent MapId:eval
 * @desc The ID of the target event.
 * You may use JavaScript code.
 * @default 1
 *
 * @ --------------------------------------------------------------------------
 *
 * @command EventLabelRefresh
 * @text Event Label: Refresh
 * @desc Refresh all Event Labels on screen.
 *
 * @ --------------------------------------------------------------------------
 *
 * @command EventLabelVisible
 * @text Event Label: Visible
 * @desc Change the visibility of Event Labels.
 *
 * @arg Visibility:str
 * @text Visibility
 * @type select
 * @option Visible
 * @value Visible
 * @option Hidden
 * @value Hidden
 * @option Toggle
 * @value Toggle
 * @desc What do you wish to change visibility to?
 * @default Visible
 *
 * @ --------------------------------------------------------------------------
 *
 * @command EventLocationSave
 * @text Event Location: Save
 * @desc Memorize an event's map location so it reappears there
 * the next time the map is loaded.
 *
 * @arg EventId:eval
 * @text Event ID
 * @desc The ID of the target event.
 * You may use JavaScript code.
 * @default 1
 *
 * @ --------------------------------------------------------------------------
 *
 * @command EventLocationDelete
 * @text Event Location: Delete
 * @desc Deletes an event's saved map location.
 * The event will reappear at its default location.
 *
 * @arg MapId:eval
 * @text Map ID
 * @desc The map the target map. Use 0 for current map.
 * You may use JavaScript code.
 * @default 0
 *
 * @arg EventId:eval
 * @text Event ID
 * @desc The ID of the target event.
 * You may use JavaScript code.
 * @default 1
 *
 * @ --------------------------------------------------------------------------
 *
 * @command EventLocationCreate
 * @text Event Location: Create
 * @desc Creates a custom spawn location for a specific map's event
 * so it appears there the next time the map is loaded.
 *
 * @arg MapId:eval
 * @text Map ID
 * @desc The map the target map. Use 0 for current map.
 * You may use JavaScript code.
 * @default 0
 *
 * @arg EventId:eval
 * @text Event ID
 * @parent MapId:eval
 * @desc The ID of the target event.
 * You may use JavaScript code.
 * @default 1
 *
 * @arg PosX:eval
 * @text X Coordinate
 * @parent MapId:eval
 * @desc The X coordinate of the event.
 * You may use JavaScript code.
 * @default 0
 *
 * @arg PosY:eval
 * @text Y Coordinate
 * @parent MapId:eval
 * @desc The Y coordinate of the event.
 * You may use JavaScript code.
 * @default 0
 *
 * @arg Direction:num
 * @text Direction
 * @parent MapId:eval
 * @type select
 * @option 1 - Lower Left
 * @value 1
 * @option 2 - Down
 * @value 2
 * @option 3 - Lower Right
 * @value 3
 * @option 4 - Left
 * @value 4
 * @option 6 - Right
 * @value 6
 * @option 7 - Upper Left
 * @value 7
 * @option 8 - Up
 * @value 8
 * @option 9 - Upper Right
 * @value 9
 * @desc The direction the event will be facing.
 * @default 2
 *
 * @arg Optional
 *
 * @arg PageId:eval
 * @text Page ID
 * @parent Optional
 * @desc The page of the event to set the move route to.
 * You may use JavaScript code.
 * @default 1
 *
 * @arg MoveRouteIndex:eval
 * @text Move Route Index
 * @parent Optional
 * @desc The point in the move route for this event to be at
 * if the page ID matches the rest of the page conditions.
 * @default 0
 *
 * @ --------------------------------------------------------------------------
 *
 * @command MorphEventTo
 * @text Morph Event: Change
 * @desc Runs the page of a different event remotely.
 *
 * @arg Step1
 * @text Step 1: To Be Changed
 *
 * @arg Step1MapId:eval
 * @text Map ID
 * @parent Step1
 * @desc Target event's map. Use 0 for current map.
 * You may use JavaScript code.
 * @default 0
 *
 * @arg Step1EventId:eval
 * @text Event ID
 * @parent Step1
 * @desc The ID of the target event.
 * You may use JavaScript code.
 * @default 1
 *
 * @arg Step2
 * @text Step 2: Change Into
 *
 * @arg TemplateName:str
 * @text Template Name
 * @parent Step2
 * @desc Name of the target event template to morph into.
 * Ignored if this is called "Untitled".
 * @default Untitled
 *
 * @arg Step2MapId:eval
 * @text Map ID
 * @parent Step2
 * @desc Target event's map. Use 0 for current map.
 * You may use JavaScript code.
 * @default 1
 *
 * @arg Step2EventId:eval
 * @text Event ID
 * @parent Step2
 * @desc The ID of the target event.
 * You may use JavaScript code.
 * @default 1
 *
 * @arg Step2Preserve:eval
 * @text Preserve Morph
 * @parent Step2
 * @type boolean
 * @on Preserve
 * @off Expires
 * @desc Is the morph effect preserved?
 * Or does it expire upon leaving the map?
 * @default true
 *
 * @ --------------------------------------------------------------------------
 *
 * @command MorphEventRemove
 * @text Morph Event: Remove
 * @desc Remove the morph status of an event.
 *
 * @arg MapId:eval
 * @text Map ID
 * @parent Step1
 * @desc Target event's map. Use 0 for current map.
 * You may use JavaScript code.
 * @default 0
 *
 * @arg EventId:eval
 * @text Event ID
 * @parent Step1
 * @desc The ID of the event to remotely run.
 * You may use JavaScript code.
 * @default 1
 *
 * @arg RemovePreserve:eval
 * @text Remove Preservation
 * @parent Step2
 * @type boolean
 * @on Remove
 * @off Contain
 * @desc Also remove the preservation effect?
 * @default true
 *
 * @ --------------------------------------------------------------------------
 *
 * @command PlayerIconChange
 * @text Player Icon: Change
 * @desc Change the icon that appears on on the player.
 *
 * @arg IconIndex:eval
 * @text Icon Index
 * @desc Icon index used for the icon.
 * You may use JavaScript code.
 * @default 1
 *
 * @arg IconBufferX:eval
 * @text Buffer X
 * @parent IconIndex:eval
 * @desc How much to shift the X position by?
 * You may use JavaScript code.
 * @default 0
 *
 * @arg IconBufferY:eval
 * @text Buffer Y
 * @parent IconIndex:eval
 * @desc How much to shift the Y position by?
 * You may use JavaScript code.
 * @default 12
 *
 * @arg IconBlendMode:num
 * @text Blend Mode
 * @parent IconIndex:eval
 * @type select
 * @option 0 - Normal
 * @value 0
 * @option 1 - Additive
 * @value 1
 * @option 2 - Multiply
 * @value 2
 * @option 3 - Screen
 * @value 3
 * @desc What kind of blend mode do you wish to apply to the icon sprite?
 * @default 0
 *
 * @ --------------------------------------------------------------------------
 *
 * @command PlayerIconDelete
 * @text Player Icon: Delete
 * @desc Delete the icon that appears on the player.
 *
 * @ --------------------------------------------------------------------------
 *
 * @command SelfSwitchABCD
 * @text Self Switch: A B C D
 * @desc Change the Self Switch of a different event.
 *
 * @arg MapId:eval
 * @text Map ID
 * @desc The map the target map. Use 0 for current map.
 * You may use JavaScript code.
 * @default 0
 *
 * @arg EventId:eval
 * @text Event ID
 * @desc The ID of the target event.
 * You may use JavaScript code.
 * @default 1
 *
 * @arg Letter:str
 * @text Letter
 * @type select
 * @option A
 * @value A
 * @option B
 * @value B
 * @option C
 * @value C
 * @option D
 * @value D
 * @desc Letter of the target event's Self Switch to change.
 * @default A
 *
 * @arg Break
 * @text -
 *
 * @arg Value:str
 * @text Value
 * @type select
 * @option ON
 * @value ON
 * @option OFF
 * @value OFF
 * @option Toggle
 * @value Toggle
 * @desc What value do you want to set the Self Switch to?
 * @default ON
 *
 * @ --------------------------------------------------------------------------
 *
 * @command SelfSwitchID
 * @text Self Switch: Switch ID
 * @desc Change the Self Switch of a different event.
 *
 * @arg MapId:eval
 * @text Map ID
 * @desc The map the target map. Use 0 for current map.
 * You may use JavaScript code.
 * @default 0
 *
 * @arg EventId:eval
 * @text Event ID
 * @desc The ID of the target event.
 * You may use JavaScript code.
 * @default 1
 *
 * @arg SwitchId:num
 * @text Switch ID
 * @type switch
 * @desc The ID of the target switch.
 * @default 1
 *
 * @arg Break
 * @text -
 *
 * @arg Value:str
 * @text Value
 * @type select
 * @option ON
 * @value ON
 * @option OFF
 * @value OFF
 * @option Toggle
 * @value Toggle
 * @desc What value do you want to set the Self Switch to?
 * @default ON
 *
 * @ --------------------------------------------------------------------------
 *
 * @command SelfVariableID
 * @text Self Variable: Variable ID
 * @desc Change the Self Variable of a different event.
 *
 * @arg MapId:eval
 * @text Map ID
 * @desc The map the target map. Use 0 for current map.
 * You may use JavaScript code.
 * @default 0
 *
 * @arg EventId:eval
 * @text Event ID
 * @desc The ID of the target event.
 * You may use JavaScript code.
 * @default 1
 *
 * @arg VariableId:num
 * @text Variable ID
 * @type variable
 * @desc The ID of the target variable.
 * @default 1
 *
 * @arg Break
 * @text -
 *
 * @arg Operation:str
 * @text Operation
 * @type select
 * @option = Set
 * @value =
 * @option + Add
 * @value +
 * @option - Subtract
 * @value -
 * @option * Multiply
 * @value *
 * @option / Divide
 * @value /
 * @option % Modulus
 * @value %
 * @desc Set the operation used.
 * @default =
 *
 * @arg Break2
 * @text -
 *
 * @arg Value:eval
 * @text Value
 * @desc Insert the value to modify the Self Variable by.
 * You may use JavaScript code.
 * @default 0
 *
 * @ --------------------------------------------------------------------------
 *
 * @command SpawnEventAtXY
 * @text Spawn Event: Spawn At X, Y
 * @desc Spawns desired event at X, Y location on the current map.
 *
 * @arg Step1
 * @text Step 1: Spawned Event
 *
 * @arg TemplateName:str
 * @text Template Name
 * @parent Step1
 * @desc Name of the target event template to spawn as.
 * Ignored if this is called "Untitled".
 * @default Untitled
 *
 * @arg MapId:eval
 * @text Map ID
 * @parent Step1
 * @desc Target event's map to be used as reference.
 * You may use JavaScript code.
 * @default 1
 *
 * @arg EventId:eval
 * @text Event ID
 * @parent Step1
 * @desc The ID of the target event to be used as reference.
 * You may use JavaScript code.
 * @default 1
 *
 * @arg Step2
 * @text Step 2: Location
 *
 * @arg PosX:eval
 * @text X Coordinate
 * @parent Step2
 * @type combo
 * @option $gamePlayer.frontX()
 * @option $gamePlayer.backX()
 * @option Math.randomInt($gameMap.width())
 * @option 0
 * @desc Target Location to spawn at.
 * You may use JavaScript code.
 * @default $gamePlayer.frontX()
 *
 * @arg PosY:eval
 * @text Y Coordinate
 * @parent Step2
 * @type combo
 * @option $gamePlayer.frontY()
 * @option $gamePlayer.backY()
 * @option Math.randomInt($gameMap.height())
 * @option 0
 * @desc Target Location to spawn at.
 * You may use JavaScript code.
 * @default $gamePlayer.frontY()
 *
 * @arg Collision:eval
 * @text Check Event Collision
 * @parent Step2
 * @type boolean
 * @on Check
 * @off Ignore
 * @desc Check collision with any other events and player?
 * @default true
 *
 * @arg Passability:eval
 * @text Check Passability
 * @parent Step2
 * @type boolean
 * @on Check
 * @off Ignore
 * @desc Check passability of the target location.
 * @default true
 *
 * @arg Preserve:eval
 * @text Preserve Spawn
 * @parent Step2
 * @type boolean
 * @on Preserve
 * @off Expires
 * @desc Is the spawned event preserved?
 * Or does it expire upon leaving the map?
 * @default true
 *
 * @ --------------------------------------------------------------------------
 *
 * @command SpawnEventAtRegion
 * @text Spawn Event: Spawn At Region
 * @desc Spawns desired event at a random region-marked location on the current map.
 *
 * @arg Step1
 * @text Step 1: Spawned Event
 *
 * @arg TemplateName:str
 * @text Template Name
 * @parent Step1
 * @desc Name of the target event template to spawn as.
 * Ignored if this is called "Untitled".
 * @default Untitled
 *
 * @arg MapId:eval
 * @text Map ID
 * @parent Step1
 * @desc Target event's map.
 * You may use JavaScript code.
 * @default 1
 *
 * @arg EventId:eval
 * @text Event ID
 * @parent Step1
 * @desc The ID of the target event.
 * You may use JavaScript code.
 * @default 1
 *
 * @arg Step2
 * @text Step 2: Location
 *
 * @arg Region:arraynum
 * @text Region ID(s)
 * @parent Step2
 * @type number[]
 * @min 0
 * @max 255
 * @desc Pick region(s) to spawn this event at.
 * @default ["1"]
 *
 * @arg Collision:eval
 * @text Check Event Collision
 * @parent Step2
 * @type boolean
 * @on Check
 * @off Ignore
 * @desc Check collision with any other events and player?
 * @default true
 *
 * @arg Passability:eval
 * @text Check Passability
 * @parent Step2
 * @type boolean
 * @on Check
 * @off Ignore
 * @desc Check passability of the target location.
 * @default true
 *
 * @arg Preserve:eval
 * @text Preserve Spawn
 * @parent Step2
 * @type boolean
 * @on Preserve
 * @off Expires
 * @desc Is the spawned event preserved?
 * Or does it expire upon leaving the map?
 * @default true
 *
 * @ --------------------------------------------------------------------------
 *
 * @command SpawnEventDespawnEventID
 * @text Spawn Event: Despawn Event ID
 * @desc Despawns the selected Event ID on the current map.
 *
 * @arg EventID:eval
 * @text Event ID
 * @type combo
 * @option $gameMap.firstSpawnedEventID()
 * @option $gameMap.lastSpawnedEventID()
 * @option 1001
 * @desc The ID of the target event.
 * You may use JavaScript code.
 * @default $gameMap.lastSpawnedEventID()
 *
 * @ --------------------------------------------------------------------------
 *
 * @command SpawnEventDespawnAtXY
 * @text Spawn Event: Despawn At X, Y
 * @desc Despawns any spawned event(s) at X, Y location on the current map.
 *
 * @arg PosX:eval
 * @text X Coordinate
 * @parent Step2
 * @type combo
 * @option $gamePlayer.frontX()
 * @option $gamePlayer.backX()
 * @option Math.randomInt($gameMap.width())
 * @option 0
 * @desc Target Location to despawn at.
 * You may use JavaScript code.
 * @default $gamePlayer.frontX()
 *
 * @arg PosY:eval
 * @text Y Coordinate
 * @parent Step2
 * @type combo
 * @option $gamePlayer.frontY()
 * @option $gamePlayer.backY()
 * @option Math.randomInt($gameMap.height())
 * @option 0
 * @desc Target Location to despawn at.
 * You may use JavaScript code.
 * @default $gamePlayer.frontY()
 *
 * @ --------------------------------------------------------------------------
 *
 * @command SpawnEventDespawnRegions
 * @text Spawn Event: Despawn Region(s)
 * @desc Despawns the selected Region(s) on the current map.
 *
 * @arg Region:arraynum
 * @text Region ID(s)
 * @parent Step2
 * @type number[]
 * @min 0
 * @max 255
 * @desc Pick region(s) and despawn everything inside it.
 * @default ["1"]
 *
 * @ --------------------------------------------------------------------------
 *
 * @command SpawnEventDespawnEverything
 * @text Spawn Event: Despawn Everything
 * @desc Despawns all spawned events on the current map.
 *
 * @ --------------------------------------------------------------------------
 *
 * @ ==========================================================================
 * @ Plugin Parameters
 * @ ==========================================================================
 *
 * @param BreakHead
 * @text --------------------------
 * @default ----------------------------------
 *
 * @param EventsMoveCore
 * @default Plugin Parameters
 *
 * @param ATTENTION
 * @default READ THE HELP FILE
 *
 * @param BreakSettings
 * @text --------------------------
 * @default ----------------------------------
 *
 * @param Label:struct
 * @text Event Label Settings
 * @type struct<Label>
 * @desc Choose settings regarding the Event Labels.
 * @default {"FontSize:num":"22","IconSize:num":"26","LineHeight:num":"30","OffsetX:num":"0","OffsetY:num":"12","OpacitySpeed:num":"16","VisibleRange:num":"30"}
 *
 * @param Icon:struct
 * @text Event Icon Settings
 * @type struct<Icon>
 * @desc Choose settings regarding the Event Icons.
 * @default {"BufferX:num":"0","BufferY:num":"12","BlendMode:num":"0"}
 *
 * @param Template:struct
 * @text Event Template Settings
 * @type struct<Template>
 * @desc Choose settings regarding Event Templates.
 * @default {"Settings":"","PreloadMaps:arraynum":"[\"1\"]","Prefabs":"","List:arraystruct":"[]","JavaScript":"","PreCopyJS:func":"\"// Declare Constants\\nconst mapId = arguments[1];\\nconst eventId = arguments[2];\\nconst target = arguments[3];\\nconst player = $gamePlayer;\\n\\n// Perform Actions\\n\"","PostCopyJS:func":"\"// Declare Constants\\nconst mapId = arguments[1];\\nconst eventId = arguments[2];\\nconst target = arguments[3];\\nconst player = $gamePlayer;\\n\\n// Perform Actions\\n\"","PreMorphJS:func":"\"// Declare Constants\\nconst mapId = arguments[1];\\nconst eventId = arguments[2];\\nconst target = arguments[3];\\nconst player = $gamePlayer;\\n\\n// Perform Actions\\n\"","PostMorphJS:func":"\"// Declare Constants\\nconst mapId = arguments[1];\\nconst eventId = arguments[2];\\nconst target = arguments[3];\\nconst player = $gamePlayer;\\n\\n// Perform Actions\\n\"","PreSpawnJS:func":"\"// Declare Constants\\nconst mapId = arguments[1];\\nconst eventId = arguments[2];\\nconst target = arguments[3];\\nconst player = $gamePlayer;\\n\\n// Perform Actions\\n\"","PostSpawnJS:func":"\"// Declare Constants\\nconst mapId = arguments[1];\\nconst eventId = arguments[2];\\nconst target = arguments[3];\\nconst player = $gamePlayer;\\n\\n// Perform Actions\\n\""}
 *
 * @param EventBreak
 * @text --------------------------
 * @default ----------------------------------
 *
 * @param Movement:struct
 * @text Movement Settings
 * @type struct<Movement>
 * @desc Change the rules regarding movement in the game.
 * @default {"Dir8":"","EnableDir8:eval":"true","StrictCollision:eval":"true","FavorHorz:eval":"true","SlowerSpeed:eval":"false","DiagonalSpeedMultiplier:num":"0.85","AutoMove":"","StopAutoMoveEvents:eval":"true","StopAutoMoveMessages:eval":"true","Dash":"","DashModifier:num":"+1.0","EnableDashTilt:eval":"true","TiltLeft:num":"-0.15","TiltRight:num":"0.15","TiltVert:num":"0.05","Shadows":"","ShowShadows:eval":"true","DefaultShadow:str":"Shadow1","TurnInPlace":"","EnableTurnInPlace:eval":"false","TurnInPlaceDelay:num":"10","Vehicle":"","BoatSpeed:num":"4.0","ShipSpeed:num":"5.0","AirshipSpeed:num":"6.0"}
 *
 * @param VS8:struct
 * @text VisuStella 8-Dir Settings
 * @type struct<VS8>
 * @desc Choose settings regarding VisuStella 8-Directional Sprites.
 * @default {"Balloons":"","AutoBalloon:eval":"true","BalloonOffsetX:num":"0","BalloonOffsetY:num":"12","Icons":"","AutoBuffer:eval":"true","CarryPose:eval":"true"}
 *
 * @param MovementBreak
 * @text --------------------------
 * @default ----------------------------------
 *
 * @param Region:struct
 * @text Region Rulings
 * @type struct<Region>
 * @desc Choose settings regarding regions.
 * @default {"Allow":"","AllAllow:arraynum":"[]","WalkAllow:arraynum":"[]","PlayerAllow:arraynum":"[]","EventAllow:arraynum":"[]","VehicleAllow:arraynum":"[]","BoatAllow:arraynum":"[]","ShipAllow:arraynum":"[]","AirshipAllow:arraynum":"[]","Forbid":"","AllForbid:arraynum":"[]","WalkForbid:arraynum":"[]","PlayerForbid:arraynum":"[]","EventForbid:arraynum":"[]","VehicleForbid:arraynum":"[]","BoatForbid:arraynum":"[]","ShipForbid:arraynum":"[]","AirshipForbid:arraynum":"[]","Dock":"","VehicleDock:arraynum":"[]","BoatDock:arraynum":"[]","BoatDockRegionOnly:eval":"false","ShipDock:arraynum":"[]","ShipDockRegionOnly:eval":"false","AirshipDock:arraynum":"[]","AirshipDockRegionOnly:eval":"false"}
 *
 * @param RegionOk:struct
 * @text Common Event on OK Button
 * @parent Region:struct
 * @type struct<RegionCommonEvent>
 * @desc Set Common Events that activate upon pressing the
 * OK button while standing on top of designated regions.
 * @default {"Region1:num":"0","Region2:num":"0","Region3:num":"0","Region4:num":"0","Region5:num":"0","Region6:num":"0","Region7:num":"0","Region8:num":"0","Region9:num":"0","Region10:num":"0","Region11:num":"0","Region12:num":"0","Region13:num":"0","Region14:num":"0","Region15:num":"0","Region16:num":"0","Region17:num":"0","Region18:num":"0","Region19:num":"0","Region20:num":"0","Region21:num":"0","Region22:num":"0","Region23:num":"0","Region24:num":"0","Region25:num":"0","Region26:num":"0","Region27:num":"0","Region28:num":"0","Region29:num":"0","Region30:num":"0","Region31:num":"0","Region32:num":"0","Region33:num":"0","Region34:num":"0","Region35:num":"0","Region36:num":"0","Region37:num":"0","Region38:num":"0","Region39:num":"0","Region40:num":"0","Region41:num":"0","Region42:num":"0","Region43:num":"0","Region44:num":"0","Region45:num":"0","Region46:num":"0","Region47:num":"0","Region48:num":"0","Region49:num":"0","Region50:num":"0","Region51:num":"0","Region52:num":"0","Region53:num":"0","Region54:num":"0","Region55:num":"0","Region56:num":"0","Region57:num":"0","Region58:num":"0","Region59:num":"0","Region60:num":"0","Region61:num":"0","Region62:num":"0","Region63:num":"0","Region64:num":"0","Region65:num":"0","Region66:num":"0","Region67:num":"0","Region68:num":"0","Region69:num":"0","Region70:num":"0","Region71:num":"0","Region72:num":"0","Region73:num":"0","Region74:num":"0","Region75:num":"0","Region76:num":"0","Region77:num":"0","Region78:num":"0","Region79:num":"0","Region80:num":"0","Region81:num":"0","Region82:num":"0","Region83:num":"0","Region84:num":"0","Region85:num":"0","Region86:num":"0","Region87:num":"0","Region88:num":"0","Region89:num":"0","Region90:num":"0","Region91:num":"0","Region92:num":"0","Region93:num":"0","Region94:num":"0","Region95:num":"0","Region96:num":"0","Region97:num":"0","Region98:num":"0","Region99:num":"0","Region100:num":"0","Region101:num":"0","Region102:num":"0","Region103:num":"0","Region104:num":"0","Region105:num":"0","Region106:num":"0","Region107:num":"0","Region108:num":"0","Region109:num":"0","Region110:num":"0","Region111:num":"0","Region112:num":"0","Region113:num":"0","Region114:num":"0","Region115:num":"0","Region116:num":"0","Region117:num":"0","Region118:num":"0","Region119:num":"0","Region120:num":"0","Region121:num":"0","Region122:num":"0","Region123:num":"0","Region124:num":"0","Region125:num":"0","Region126:num":"0","Region127:num":"0","Region128:num":"0","Region129:num":"0","Region130:num":"0","Region131:num":"0","Region132:num":"0","Region133:num":"0","Region134:num":"0","Region135:num":"0","Region136:num":"0","Region137:num":"0","Region138:num":"0","Region139:num":"0","Region140:num":"0","Region141:num":"0","Region142:num":"0","Region143:num":"0","Region144:num":"0","Region145:num":"0","Region146:num":"0","Region147:num":"0","Region148:num":"0","Region149:num":"0","Region150:num":"0","Region151:num":"0","Region152:num":"0","Region153:num":"0","Region154:num":"0","Region155:num":"0","Region156:num":"0","Region157:num":"0","Region158:num":"0","Region159:num":"0","Region160:num":"0","Region161:num":"0","Region162:num":"0","Region163:num":"0","Region164:num":"0","Region165:num":"0","Region166:num":"0","Region167:num":"0","Region168:num":"0","Region169:num":"0","Region170:num":"0","Region171:num":"0","Region172:num":"0","Region173:num":"0","Region174:num":"0","Region175:num":"0","Region176:num":"0","Region177:num":"0","Region178:num":"0","Region179:num":"0","Region180:num":"0","Region181:num":"0","Region182:num":"0","Region183:num":"0","Region184:num":"0","Region185:num":"0","Region186:num":"0","Region187:num":"0","Region188:num":"0","Region189:num":"0","Region190:num":"0","Region191:num":"0","Region192:num":"0","Region193:num":"0","Region194:num":"0","Region195:num":"0","Region196:num":"0","Region197:num":"0","Region198:num":"0","Region199:num":"0","Region200:num":"0","Region201:num":"0","Region202:num":"0","Region203:num":"0","Region204:num":"0","Region205:num":"0","Region206:num":"0","Region207:num":"0","Region208:num":"0","Region209:num":"0","Region210:num":"0","Region211:num":"0","Region212:num":"0","Region213:num":"0","Region214:num":"0","Region215:num":"0","Region216:num":"0","Region217:num":"0","Region218:num":"0","Region219:num":"0","Region220:num":"0","Region221:num":"0","Region222:num":"0","Region223:num":"0","Region224:num":"0","Region225:num":"0","Region226:num":"0","Region227:num":"0","Region228:num":"0","Region229:num":"0","Region230:num":"0","Region231:num":"0","Region232:num":"0","Region233:num":"0","Region234:num":"0","Region235:num":"0","Region236:num":"0","Region237:num":"0","Region238:num":"0","Region239:num":"0","Region240:num":"0","Region241:num":"0","Region242:num":"0","Region243:num":"0","Region244:num":"0","Region245:num":"0","Region246:num":"0","Region247:num":"0","Region248:num":"0","Region249:num":"0","Region250:num":"0","Region251:num":"0","Region252:num":"0","Region253:num":"0","Region254:num":"0","Region255:num":"0"}
 *
 * @param RegionOkTarget:str
 * @text Target Tile
 * @parent RegionOk:struct
 * @type select
 * @option Tile in front of player.
 * @value front
 * @option Tile player is standing on top of.
 * @value standing
 * @desc Which tile should be checked for
 * Common Event on OK Button?
 * @default front
 *
 * @param RegionTouch:struct
 * @text Common Event on Touch
 * @parent Region:struct
 * @type struct<RegionCommonEvent>
 * @desc Set Common Events that activate upon stepping the tiles
 * marked by the designated regions.
 * @default {"Region1:num":"0","Region2:num":"0","Region3:num":"0","Region4:num":"0","Region5:num":"0","Region6:num":"0","Region7:num":"0","Region8:num":"0","Region9:num":"0","Region10:num":"0","Region11:num":"0","Region12:num":"0","Region13:num":"0","Region14:num":"0","Region15:num":"0","Region16:num":"0","Region17:num":"0","Region18:num":"0","Region19:num":"0","Region20:num":"0","Region21:num":"0","Region22:num":"0","Region23:num":"0","Region24:num":"0","Region25:num":"0","Region26:num":"0","Region27:num":"0","Region28:num":"0","Region29:num":"0","Region30:num":"0","Region31:num":"0","Region32:num":"0","Region33:num":"0","Region34:num":"0","Region35:num":"0","Region36:num":"0","Region37:num":"0","Region38:num":"0","Region39:num":"0","Region40:num":"0","Region41:num":"0","Region42:num":"0","Region43:num":"0","Region44:num":"0","Region45:num":"0","Region46:num":"0","Region47:num":"0","Region48:num":"0","Region49:num":"0","Region50:num":"0","Region51:num":"0","Region52:num":"0","Region53:num":"0","Region54:num":"0","Region55:num":"0","Region56:num":"0","Region57:num":"0","Region58:num":"0","Region59:num":"0","Region60:num":"0","Region61:num":"0","Region62:num":"0","Region63:num":"0","Region64:num":"0","Region65:num":"0","Region66:num":"0","Region67:num":"0","Region68:num":"0","Region69:num":"0","Region70:num":"0","Region71:num":"0","Region72:num":"0","Region73:num":"0","Region74:num":"0","Region75:num":"0","Region76:num":"0","Region77:num":"0","Region78:num":"0","Region79:num":"0","Region80:num":"0","Region81:num":"0","Region82:num":"0","Region83:num":"0","Region84:num":"0","Region85:num":"0","Region86:num":"0","Region87:num":"0","Region88:num":"0","Region89:num":"0","Region90:num":"0","Region91:num":"0","Region92:num":"0","Region93:num":"0","Region94:num":"0","Region95:num":"0","Region96:num":"0","Region97:num":"0","Region98:num":"0","Region99:num":"0","Region100:num":"0","Region101:num":"0","Region102:num":"0","Region103:num":"0","Region104:num":"0","Region105:num":"0","Region106:num":"0","Region107:num":"0","Region108:num":"0","Region109:num":"0","Region110:num":"0","Region111:num":"0","Region112:num":"0","Region113:num":"0","Region114:num":"0","Region115:num":"0","Region116:num":"0","Region117:num":"0","Region118:num":"0","Region119:num":"0","Region120:num":"0","Region121:num":"0","Region122:num":"0","Region123:num":"0","Region124:num":"0","Region125:num":"0","Region126:num":"0","Region127:num":"0","Region128:num":"0","Region129:num":"0","Region130:num":"0","Region131:num":"0","Region132:num":"0","Region133:num":"0","Region134:num":"0","Region135:num":"0","Region136:num":"0","Region137:num":"0","Region138:num":"0","Region139:num":"0","Region140:num":"0","Region141:num":"0","Region142:num":"0","Region143:num":"0","Region144:num":"0","Region145:num":"0","Region146:num":"0","Region147:num":"0","Region148:num":"0","Region149:num":"0","Region150:num":"0","Region151:num":"0","Region152:num":"0","Region153:num":"0","Region154:num":"0","Region155:num":"0","Region156:num":"0","Region157:num":"0","Region158:num":"0","Region159:num":"0","Region160:num":"0","Region161:num":"0","Region162:num":"0","Region163:num":"0","Region164:num":"0","Region165:num":"0","Region166:num":"0","Region167:num":"0","Region168:num":"0","Region169:num":"0","Region170:num":"0","Region171:num":"0","Region172:num":"0","Region173:num":"0","Region174:num":"0","Region175:num":"0","Region176:num":"0","Region177:num":"0","Region178:num":"0","Region179:num":"0","Region180:num":"0","Region181:num":"0","Region182:num":"0","Region183:num":"0","Region184:num":"0","Region185:num":"0","Region186:num":"0","Region187:num":"0","Region188:num":"0","Region189:num":"0","Region190:num":"0","Region191:num":"0","Region192:num":"0","Region193:num":"0","Region194:num":"0","Region195:num":"0","Region196:num":"0","Region197:num":"0","Region198:num":"0","Region199:num":"0","Region200:num":"0","Region201:num":"0","Region202:num":"0","Region203:num":"0","Region204:num":"0","Region205:num":"0","Region206:num":"0","Region207:num":"0","Region208:num":"0","Region209:num":"0","Region210:num":"0","Region211:num":"0","Region212:num":"0","Region213:num":"0","Region214:num":"0","Region215:num":"0","Region216:num":"0","Region217:num":"0","Region218:num":"0","Region219:num":"0","Region220:num":"0","Region221:num":"0","Region222:num":"0","Region223:num":"0","Region224:num":"0","Region225:num":"0","Region226:num":"0","Region227:num":"0","Region228:num":"0","Region229:num":"0","Region230:num":"0","Region231:num":"0","Region232:num":"0","Region233:num":"0","Region234:num":"0","Region235:num":"0","Region236:num":"0","Region237:num":"0","Region238:num":"0","Region239:num":"0","Region240:num":"0","Region241:num":"0","Region242:num":"0","Region243:num":"0","Region244:num":"0","Region245:num":"0","Region246:num":"0","Region247:num":"0","Region248:num":"0","Region249:num":"0","Region250:num":"0","Region251:num":"0","Region252:num":"0","Region253:num":"0","Region254:num":"0","Region255:num":"0"}
 *
 * @param TerrainTag:struct
 * @text Terrain Tag Settings
 * @type struct<TerrainTag>
 * @desc Choose settings regarding terrain tags.
 * @default {"TerrainTag":"","Rope:num":"1"}
 *
 * @param BreakEnd1
 * @text --------------------------
 * @default ----------------------------------
 *
 * @param End Of
 * @default Plugin Parameters
 *
 * @param BreakEnd2
 * @text --------------------------
 * @default ----------------------------------
 *
 */
/* ----------------------------------------------------------------------------
 * Label Settings
 * ----------------------------------------------------------------------------
 */
/*~struct~Label:
 *
 * @param FontSize:num
 * @text Font Size
 * @type number
 * @min 1
 * @desc The font size used for the Event Labels.
 * @default 22
 *
 * @param IconSize:num
 * @text Icon Size
 * @type number
 * @min 1
 * @desc The size of the icons used in the Event Labels.
 * @default 26
 *
 * @param LineHeight:num
 * @text Line Height
 * @type number
 * @min 1
 * @desc The line height used for the Event Labels.
 * @default 26
 *
 * @param OffsetX:num
 * @text Offset X
 * @type number
 * @min 0
 * @desc Globally offset all labels horizontally by this amount.
 * @default 0
 *
 * @param OffsetY:num
 * @text Offset Y
 * @type number
 * @min 0
 * @desc Globally offset all labels vertically by this amount.
 * @default 12
 *
 * @param OpacitySpeed:num
 * @text Fade Speed
 * @type number
 * @min 1
 * @desc Fade speed for labels.
 * @default 16
 *
 * @param VisibleRange:num
 * @text Visible Range
 * @type number
 * @min 1
 * @desc Range the player has to be within the event to make its label visible.
 * @default 30
 *
 */
/* ----------------------------------------------------------------------------
 * Icon Settings
 * ----------------------------------------------------------------------------
 */
/*~struct~Icon:
 *
 * @param BufferX:num
 * @text Buffer X
 * @desc Default X position buffer for event icons.
 * @default 0
 *
 * @param BufferY:num
 * @text Buffer Y
 * @desc Default Y position buffer for event icons.
 * @default 12
 *
 * @param BlendMode:num
 * @text Blend Mode
 * @type select
 * @option 0 - Normal
 * @value 0
 * @option 1 - Additive
 * @value 1
 * @option 2 - Multiply
 * @value 2
 * @option 3 - Screen
 * @value 3
 * @desc Default blend mode for even icons.
 * @default 0
 *
 */
/* ----------------------------------------------------------------------------
 * Template Settings
 * ----------------------------------------------------------------------------
 */
/*~struct~Template:
 *
 * @param Settings
 *
 * @param PreloadMaps:arraynum
 * @text Preloaded Maps
 * @parent Settings
 * @type number[]
 * @desc A list of all the ID's of the maps that will be preloaded
 * to serve as template maps for this plugin.
 * @default ["1"]
 *
 * @param Templates
 *
 * @param List:arraystruct
 * @text Event Template List
 * @parent Templates
 * @type struct<EventTemplate>[]
 * @desc A list of all the Event Templates used by this project.
 * Used for notetags and Plugin Commands.
 * @default []
 *
 * @param JavaScript
 *
 * @param PreCopyJS:func
 * @text JS: Pre-Copy
 * @parent JavaScript
 * @type note
 * @desc Code that's ran before an event is copied.
 * This is global and is ran for all copied events.
 * @default "// Declare Constants\nconst mapId = arguments[1];\nconst eventId = arguments[2];\nconst target = arguments[3];\nconst player = $gamePlayer;\n\n// Perform Actions\n"
 *
 * @param PostCopyJS:func
 * @text JS: Post-Copy
 * @parent JavaScript
 * @type note
 * @desc Code that's ran after an event is copied.
 * This is global and is ran for all copied events.
 * @default "// Declare Constants\nconst mapId = arguments[1];\nconst eventId = arguments[2];\nconst target = arguments[3];\nconst player = $gamePlayer;\n\n// Perform Actions\n"
 *
 * @param PreMorphJS:func
 * @text JS: Pre-Morph
 * @parent JavaScript
 * @type note
 * @desc Code that's ran before an event is morphed.
 * This is global and is ran for all morphed events.
 * @default "// Declare Constants\nconst mapId = arguments[1];\nconst eventId = arguments[2];\nconst target = arguments[3];\nconst player = $gamePlayer;\n\n// Perform Actions\n"
 *
 * @param PostMorphJS:func
 * @text JS: Post-Morph
 * @parent JavaScript
 * @type note
 * @desc Code that's ran after an event is morphed.
 * This is global and is ran for all morphed events.
 * @default "// Declare Constants\nconst mapId = arguments[1];\nconst eventId = arguments[2];\nconst target = arguments[3];\nconst player = $gamePlayer;\n\n// Perform Actions\n"
 *
 * @param PreSpawnJS:func
 * @text JS: Pre-Spawn
 * @parent JavaScript
 * @type note
 * @desc Code that's ran before an event is spawned.
 * This is global and is ran for all spawned events.
 * @default "// Declare Constants\nconst mapId = arguments[1];\nconst eventId = arguments[2];\nconst target = arguments[3];\nconst player = $gamePlayer;\n\n// Perform Actions\n"
 *
 * @param PostSpawnJS:func
 * @text JS: Post-Spawn
 * @parent JavaScript
 * @type note
 * @desc Code that's ran after an event is spawned.
 * This is global and is ran for all spawned events.
 * @default "// Declare Constants\nconst mapId = arguments[1];\nconst eventId = arguments[2];\nconst target = arguments[3];\nconst player = $gamePlayer;\n\n// Perform Actions\n"
 *
 */
/* ----------------------------------------------------------------------------
 * Event Template
 * ----------------------------------------------------------------------------
 */
/*~struct~EventTemplate:
 *
 * @param Name:str
 * @text Name
 * @desc Name of the template. It'll be used as anchor points for
 * notetags and Plugin Commands.
 * @default Untitled
 *
 * @param MapID:num
 * @text Map ID
 * @parent Name:str
 * @type number
 * @min 1
 * @max 999
 * @desc ID of the map the template event is stored on.
 * This will automatically add this ID to preloaded list.
 * @default 1
 *
 * @param EventID:num
 * @text Event ID
 * @parent Name:str
 * @type number
 * @min 1
 * @max 999
 * @desc ID of the event the template event is based on.
 * @default 1
 *
 * @param JavaScript
 *
 * @param PreCopyJS:func
 * @text JS: Pre-Copy
 * @parent JavaScript
 * @type note
 * @desc Code that's ran before an event is copied.
 * This is local only for this template.
 * @default "// Declare Constants\nconst mapId = arguments[1];\nconst eventId = arguments[2];\nconst target = arguments[3];\nconst player = $gamePlayer;\n\n// Perform Actions\n"
 *
 * @param PostCopyJS:func
 * @text JS: Post-Copy
 * @parent JavaScript
 * @type note
 * @desc Code that's ran after an event is copied.
 * This is local only for this template.
 * @default "// Declare Constants\nconst mapId = arguments[1];\nconst eventId = arguments[2];\nconst target = arguments[3];\nconst player = $gamePlayer;\n\n// Perform Actions\n"
 *
 * @param PreMorphJS:func
 * @text JS: Pre-Morph
 * @parent JavaScript
 * @type note
 * @desc Code that's ran before an event is morphed.
 * This is local only for this template.
 * @default "// Declare Constants\nconst mapId = arguments[1];\nconst eventId = arguments[2];\nconst target = arguments[3];\nconst player = $gamePlayer;\n\n// Perform Actions\n"
 *
 * @param PostMorphJS:func
 * @text JS: Post-Morph
 * @parent JavaScript
 * @type note
 * @desc Code that's ran after an event is morphed.
 * This is local only for this template.
 * @default "// Declare Constants\nconst mapId = arguments[1];\nconst eventId = arguments[2];\nconst target = arguments[3];\nconst player = $gamePlayer;\n\n// Perform Actions\n"
 *
 * @param PreSpawnJS:func
 * @text JS: Pre-Spawn
 * @parent JavaScript
 * @type note
 * @desc Code that's ran before an event is spawned.
 * This is global and is ran for all spawned events.
 * @default "// Declare Constants\nconst mapId = arguments[1];\nconst eventId = arguments[2];\nconst target = arguments[3];\nconst player = $gamePlayer;\n\n// Perform Actions\n"
 *
 * @param PostSpawnJS:func
 * @text JS: Post-Spawn
 * @parent JavaScript
 * @type note
 * @desc Code that's ran after an event is spawned.
 * This is global and is ran for all spawned events.
 * @default "// Declare Constants\nconst mapId = arguments[1];\nconst eventId = arguments[2];\nconst target = arguments[3];\nconst player = $gamePlayer;\n\n// Perform Actions\n"
 *
 */
/* ----------------------------------------------------------------------------
 * Movement Settings
 * ----------------------------------------------------------------------------
 */
/*~struct~Movement:
 *
 * @param Dir8
 * @text 8 Directional Movement
 *
 * @param EnableDir8:eval
 * @text Enable
 * @parent Dir8
 * @type boolean
 * @on Enable
 * @off Disabled
 * @desc Allow 8-directional movement by default? Players can move diagonally.
 * @default true
 *
 * @param StrictCollision:eval
 * @text Strict Collision
 * @parent Dir8
 * @type boolean
 * @on Strict
 * @off Flexible
 * @desc Enforce strict collission rules where the player must be able to pass both cardinal directions?
 * @default true
 *
 * @param FavorHorz:eval
 * @text Favor Horizontal
 * @parent StrictCollision:eval
 * @type boolean
 * @on Horizontal
 * @off Vertical
 * @desc Favor horizontal if cannot pass diagonally but can pass both horizontally and vertically?
 * @default true
 *
 * @param SlowerSpeed:eval
 * @text Slower Diagonals?
 * @parent Dir8
 * @type boolean
 * @on Slower
 * @off Normal
 * @desc Enforce a slower movement speed when moving diagonally?
 * @default false
 *
 * @param DiagonalSpeedMultiplier:num
 * @text Speed Multiplier
 * @parent SlowerSpeed:eval
 * @desc What's the multiplier to adjust movement speed when moving diagonally?
 * @default 0.85
 *
 * @param AutoMove
 * @text Automatic Movement
 *
 * @param StopAutoMoveEvents:eval
 * @text Stop During Events
 * @parent AutoMove
 * @type boolean
 * @on Stop
 * @off Wander
 * @desc Stop automatic event movement while events are running.
 * @default true
 *
 * @param StopAutoMoveMessages:eval
 * @text Stop During Messages
 * @parent AutoMove
 * @type boolean
 * @on Stop
 * @off Wander
 * @desc Stop automatic event movement while a message is running.
 * @default true
 *
 * @param Dash
 * @text Dash
 *
 * @param DashModifier:num
 * @text Dash Modifier
 * @parent Dash
 * @desc Alters the dash speed modifier.
 * @default +1.0
 *
 * @param EnableDashTilt:eval
 * @text Enable Dash Tilt?
 * @parent Dash
 * @type boolean
 * @on Enable
 * @off Disabled
 * @desc Tilt any sprites that are currently dashing?
 * @default true
 *
 * @param TiltLeft:num
 * @text Tilt Left Amount
 * @parent EnableDashTilt:eval
 * @desc Amount in radians when moving left (upper left, left, lower left).
 * @default -0.15
 *
 * @param TiltRight:num
 * @text Tilt Right Amount
 * @parent EnableDashTilt:eval
 * @desc Amount in radians when moving right (upper right, right, lower right).
 * @default 0.15
 *
 * @param TiltVert:num
 * @text Tilt Vertical Amount
 * @parent EnableDashTilt:eval
 * @desc Amount in radians when moving vertical (up, down).
 * @default 0.05
 *
 * @param Shadows
 *
 * @param ShowShadows:eval
 * @text Show
 * @parent Shadows
 * @type boolean
 * @on Show
 * @off Don't Show
 * @desc Show shadows on all events and player-related sprites.
 * @default true
 *
 * @param DefaultShadow:str
 * @text Default Filename
 * @parent Shadows
 * @type file
 * @dir img/system/
 * @desc Default filename used for shadows found in img/system/ folder.
 * @default Shadow1
 *
 * @param TurnInPlace
 * @text Turn in Place
 *
 * @param EnableTurnInPlace:eval
 * @text Enable
 * @parent TurnInPlace
 * @type boolean
 * @on Turn in Place
 * @off Skip
 * @desc When not dashing, player will turn in place before moving.
 * This only applies with keyboard inputs.
 * @default false
 *
 * @param TurnInPlaceDelay:num
 * @text Delay in Frames
 * @parent TurnInPlace
 * @type number
 * @min 0
 * @desc The number of frames to wait before moving.
 * @default 10
 *
 * @param Vehicle
 * @text Vehicle Speeds
 *
 * @param BoatSpeed:num
 * @text Boat Speed
 * @parent Vehicle
 * @desc Allows you to adjust the base speed of the boat vehicle.
 * @default 4.0
 *
 * @param ShipSpeed:num
 * @text Ship Speed
 * @parent Vehicle
 * @desc Allows you to adjust the base speed of the ship vehicle.
 * @default 5.0
 *
 * @param AirshipSpeed:num
 * @text Airship Speed
 * @parent Vehicle
 * @desc Allows you to adjust the base speed of the airship vehicle.
 * @default 6.0
 *
 */
/* ----------------------------------------------------------------------------
 * Region Rulings
 * ----------------------------------------------------------------------------
 */
/*~struct~Region:
 *
 * @param Allow
 * @text Allow Regions
 *
 * @param AllAllow:arraynum
 * @text All Allow
 * @parent Allow
 * @type number[]
 * @min 0
 * @max 255
 * @desc Insert Region ID's where the player can enter.
 * Region ID's range from 0 to 255.
 * @default []
 *
 * @param WalkAllow:arraynum
 * @text Walk Allow
 * @parent Allow
 * @type number[]
 * @min 0
 * @max 255
 * @desc Insert Region ID's where walking units can enter.
 * Region ID's range from 0 to 255.
 * @default []
 *
 * @param PlayerAllow:arraynum
 * @text Player Allow
 * @parent WalkAllow:arraynum
 * @type number[]
 * @min 0
 * @max 255
 * @desc Insert Region ID's where the player can enter.
 * Region ID's range from 0 to 255.
 * @default []
 *
 * @param EventAllow:arraynum
 * @text Event Allow
 * @parent WalkAllow:arraynum
 * @type number[]
 * @min 0
 * @max 255
 * @desc Insert Region ID's where events can enter.
 * Region ID's range from 0 to 255.
 * @default []
 *
 * @param VehicleAllow:arraynum
 * @text Vehicle Allow
 * @parent Allow
 * @type number[]
 * @min 0
 * @max 255
 * @desc Insert Region ID's where any vehicle can enter.
 * Region ID's range from 0 to 255.
 * @default []
 *
 * @param BoatAllow:arraynum
 * @text Boat Allow
 * @parent VehicleAllow:arraynum
 * @type number[]
 * @min 0
 * @max 255
 * @desc Insert Region ID's where boats can enter.
 * Region ID's range from 0 to 255.
 * @default []
 *
 * @param ShipAllow:arraynum
 * @text Ship Allow
 * @parent VehicleAllow:arraynum
 * @type number[]
 * @min 0
 * @max 255
 * @desc Insert Region ID's where ships can enter.
 * Region ID's range from 0 to 255.
 * @default []
 *
 * @param AirshipAllow:arraynum
 * @text Airship Allow
 * @parent VehicleAllow:arraynum
 * @type number[]
 * @min 0
 * @max 255
 * @desc Insert Region ID's where airships can enter.
 * Region ID's range from 0 to 255.
 * @default []
 *
 * @param Forbid
 * @text Forbid Regions
 *
 * @param AllForbid:arraynum
 * @text All Forbid
 * @parent Forbid
 * @type number[]
 * @min 0
 * @max 255
 * @desc Insert Region ID's where the player cannot enter.
 * Region ID's range from 0 to 255.
 * @default []
 *
 * @param WalkForbid:arraynum
 * @text Walk Forbid
 * @parent Forbid
 * @type number[]
 * @min 0
 * @max 255
 * @desc Insert Region ID's where walking units cannot enter.
 * Region ID's range from 0 to 255.
 * @default []
 *
 * @param PlayerForbid:arraynum
 * @text Player Forbid
 * @parent WalkForbid:arraynum
 * @type number[]
 * @min 0
 * @max 255
 * @desc Insert Region ID's where the player cannot enter.
 * Region ID's range from 0 to 255.
 * @default []
 *
 * @param EventForbid:arraynum
 * @text Event Forbid
 * @parent WalkForbid:arraynum
 * @type number[]
 * @min 0
 * @max 255
 * @desc Insert Region ID's where events cannot enter.
 * Region ID's range from 0 to 255.
 * @default []
 *
 * @param VehicleForbid:arraynum
 * @text Vehicle Forbid
 * @parent Forbid
 * @type number[]
 * @min 0
 * @max 255
 * @desc Insert Region ID's where vehicles cannot enter.
 * Region ID's range from 0 to 255.
 * @default []
 *
 * @param BoatForbid:arraynum
 * @text Boat Forbid
 * @parent VehicleForbid:arraynum
 * @type number[]
 * @min 0
 * @max 255
 * @desc Insert Region ID's where ships cannot enter.
 * Region ID's range from 0 to 255.
 * @default []
 *
 * @param ShipForbid:arraynum
 * @text Ship Forbid
 * @parent VehicleForbid:arraynum
 * @type number[]
 * @min 0
 * @max 255
 * @desc Insert Region ID's where ships cannot enter.
 * Region ID's range from 0 to 255.
 * @default []
 *
 * @param AirshipForbid:arraynum
 * @text Airship Forbid
 * @parent VehicleForbid:arraynum
 * @type number[]
 * @min 0
 * @max 255
 * @desc Insert Region ID's where airships cannot enter.
 * Region ID's range from 0 to 255.
 * @default []
 *
 * @param Dock
 * @text Dock Regions
 *
 * @param VehicleDock:arraynum
 * @text Vehicle Dock
 * @parent Dock
 * @type number[]
 * @min 0
 * @max 255
 * @desc Insert Region ID's where any vehicle can dock.
 * Region ID's range from 0 to 255.
 * @default []
 *
 * @param BoatDock:arraynum
 * @text Boat Dock
 * @parent Dock
 * @type number[]
 * @min 0
 * @max 255
 * @desc Insert Region ID's where boats can dock.
 * Region ID's range from 0 to 255.
 * @default []
 *
 * @param BoatDockRegionOnly:eval
 * @text Only Region Dockable
 * @parent BoatDock:arraynum
 * @type boolean
 * @on At Regions Only
 * @off Default
 * @desc Boats can only dock at designated regions.
 * @default false
 *
 * @param ShipDock:arraynum
 * @text Ship Dock
 * @parent Dock
 * @type number[]
 * @min 0
 * @max 255
 * @desc Insert Region ID's where ships can dock.
 * Region ID's range from 0 to 255.
 * @default []
 *
 * @param ShipDockRegionOnly:eval
 * @text Only Region Dockable
 * @parent ShipDock:arraynum
 * @type boolean
 * @on At Regions Only
 * @off Default
 * @desc Ships can only dock at designated regions.
 * @default false
 *
 * @param AirshipDock:arraynum
 * @text Airship Dock
 * @parent Dock
 * @type number[]
 * @min 0
 * @max 255
 * @desc Insert Region ID's where airships can dock.
 * Region ID's range from 0 to 255.
 * @default []
 *
 * @param AirshipDockRegionOnly:eval
 * @text Only Region Dockable
 * @parent AirshipDock:arraynum
 * @type boolean
 * @on At Regions Only
 * @off Default
 * @desc Airships can only dock at designated regions.
 * @default false
 *
 */
/* ----------------------------------------------------------------------------
 * Region Common Events
 * ----------------------------------------------------------------------------
 */
/*~struct~RegionCommonEvent:
 *
 * @param Region1:num
 * @text Region 1
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region2:num
 * @text Region 2
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region3:num
 * @text Region 3
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region4:num
 * @text Region 4
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region5:num
 * @text Region 5
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region6:num
 * @text Region 6
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region7:num
 * @text Region 7
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region8:num
 * @text Region 8
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region9:num
 * @text Region 9
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region10:num
 * @text Region 10
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region11:num
 * @text Region 11
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region12:num
 * @text Region 12
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region13:num
 * @text Region 13
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region14:num
 * @text Region 14
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region15:num
 * @text Region 15
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region16:num
 * @text Region 16
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region17:num
 * @text Region 17
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region18:num
 * @text Region 18
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region19:num
 * @text Region 19
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region20:num
 * @text Region 20
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region21:num
 * @text Region 21
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region22:num
 * @text Region 22
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region23:num
 * @text Region 23
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region24:num
 * @text Region 24
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region25:num
 * @text Region 25
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region26:num
 * @text Region 26
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region27:num
 * @text Region 27
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region28:num
 * @text Region 28
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region29:num
 * @text Region 29
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region30:num
 * @text Region 30
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region31:num
 * @text Region 31
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region32:num
 * @text Region 32
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region33:num
 * @text Region 33
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region34:num
 * @text Region 34
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region35:num
 * @text Region 35
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region36:num
 * @text Region 36
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region37:num
 * @text Region 37
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region38:num
 * @text Region 38
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region39:num
 * @text Region 39
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region40:num
 * @text Region 40
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region41:num
 * @text Region 41
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region42:num
 * @text Region 42
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region43:num
 * @text Region 43
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region44:num
 * @text Region 44
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region45:num
 * @text Region 45
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region46:num
 * @text Region 46
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region47:num
 * @text Region 47
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region48:num
 * @text Region 48
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region49:num
 * @text Region 49
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region50:num
 * @text Region 50
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region51:num
 * @text Region 51
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region52:num
 * @text Region 52
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region53:num
 * @text Region 53
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region54:num
 * @text Region 54
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region55:num
 * @text Region 55
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region56:num
 * @text Region 56
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region57:num
 * @text Region 57
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region58:num
 * @text Region 58
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region59:num
 * @text Region 59
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region60:num
 * @text Region 60
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region61:num
 * @text Region 61
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region62:num
 * @text Region 62
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region63:num
 * @text Region 63
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region64:num
 * @text Region 64
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region65:num
 * @text Region 65
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region66:num
 * @text Region 66
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region67:num
 * @text Region 67
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region68:num
 * @text Region 68
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region69:num
 * @text Region 69
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region70:num
 * @text Region 70
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region71:num
 * @text Region 71
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region72:num
 * @text Region 72
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region73:num
 * @text Region 73
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region74:num
 * @text Region 74
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region75:num
 * @text Region 75
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region76:num
 * @text Region 76
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region77:num
 * @text Region 77
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region78:num
 * @text Region 78
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region79:num
 * @text Region 79
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region80:num
 * @text Region 70
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region81:num
 * @text Region 71
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region82:num
 * @text Region 72
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region83:num
 * @text Region 73
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region84:num
 * @text Region 74
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region85:num
 * @text Region 75
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region86:num
 * @text Region 76
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region87:num
 * @text Region 77
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region88:num
 * @text Region 78
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region89:num
 * @text Region 79
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region80:num
 * @text Region 80
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region81:num
 * @text Region 81
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region82:num
 * @text Region 82
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region83:num
 * @text Region 83
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region84:num
 * @text Region 84
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region85:num
 * @text Region 85
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region86:num
 * @text Region 86
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region87:num
 * @text Region 87
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region88:num
 * @text Region 88
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region89:num
 * @text Region 89
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region90:num
 * @text Region 80
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region91:num
 * @text Region 81
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region92:num
 * @text Region 82
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region93:num
 * @text Region 83
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region94:num
 * @text Region 84
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region95:num
 * @text Region 85
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region96:num
 * @text Region 86
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region97:num
 * @text Region 87
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region98:num
 * @text Region 88
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region99:num
 * @text Region 89
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region90:num
 * @text Region 90
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region91:num
 * @text Region 91
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region92:num
 * @text Region 92
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region93:num
 * @text Region 93
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region94:num
 * @text Region 94
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region95:num
 * @text Region 95
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region96:num
 * @text Region 96
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region97:num
 * @text Region 97
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region98:num
 * @text Region 98
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region99:num
 * @text Region 99
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region100:num
 * @text Region 100
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region101:num
 * @text Region 101
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region102:num
 * @text Region 102
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region103:num
 * @text Region 103
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region104:num
 * @text Region 104
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region105:num
 * @text Region 105
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region106:num
 * @text Region 106
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region107:num
 * @text Region 107
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region108:num
 * @text Region 108
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region109:num
 * @text Region 109
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region110:num
 * @text Region 110
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region111:num
 * @text Region 111
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region112:num
 * @text Region 112
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region113:num
 * @text Region 113
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region114:num
 * @text Region 114
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region115:num
 * @text Region 115
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region116:num
 * @text Region 116
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region117:num
 * @text Region 117
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region118:num
 * @text Region 118
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region119:num
 * @text Region 119
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region120:num
 * @text Region 120
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region121:num
 * @text Region 121
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region122:num
 * @text Region 122
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region123:num
 * @text Region 123
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region124:num
 * @text Region 124
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region125:num
 * @text Region 125
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region126:num
 * @text Region 126
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region127:num
 * @text Region 127
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region128:num
 * @text Region 128
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region129:num
 * @text Region 129
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region130:num
 * @text Region 130
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region131:num
 * @text Region 131
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region132:num
 * @text Region 132
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region133:num
 * @text Region 133
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region134:num
 * @text Region 134
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region135:num
 * @text Region 135
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region136:num
 * @text Region 136
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region137:num
 * @text Region 137
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region138:num
 * @text Region 138
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region139:num
 * @text Region 139
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region140:num
 * @text Region 140
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region141:num
 * @text Region 141
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region142:num
 * @text Region 142
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region143:num
 * @text Region 143
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region144:num
 * @text Region 144
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region145:num
 * @text Region 145
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region146:num
 * @text Region 146
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region147:num
 * @text Region 147
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region148:num
 * @text Region 148
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region149:num
 * @text Region 149
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region150:num
 * @text Region 150
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region151:num
 * @text Region 151
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region152:num
 * @text Region 152
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region153:num
 * @text Region 153
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region154:num
 * @text Region 154
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region155:num
 * @text Region 155
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region156:num
 * @text Region 156
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region157:num
 * @text Region 157
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region158:num
 * @text Region 158
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region159:num
 * @text Region 159
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region160:num
 * @text Region 160
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region161:num
 * @text Region 161
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region162:num
 * @text Region 162
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region163:num
 * @text Region 163
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region164:num
 * @text Region 164
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region165:num
 * @text Region 165
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region166:num
 * @text Region 166
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region167:num
 * @text Region 167
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region168:num
 * @text Region 168
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region169:num
 * @text Region 169
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region170:num
 * @text Region 170
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region171:num
 * @text Region 171
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region172:num
 * @text Region 172
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region173:num
 * @text Region 173
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region174:num
 * @text Region 174
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region175:num
 * @text Region 175
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region176:num
 * @text Region 176
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region177:num
 * @text Region 177
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region178:num
 * @text Region 178
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region179:num
 * @text Region 179
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region180:num
 * @text Region 170
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region181:num
 * @text Region 171
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region182:num
 * @text Region 172
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region183:num
 * @text Region 173
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region184:num
 * @text Region 174
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region185:num
 * @text Region 175
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region186:num
 * @text Region 176
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region187:num
 * @text Region 177
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region188:num
 * @text Region 178
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region189:num
 * @text Region 179
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region180:num
 * @text Region 180
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region181:num
 * @text Region 181
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region182:num
 * @text Region 182
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region183:num
 * @text Region 183
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region184:num
 * @text Region 184
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region185:num
 * @text Region 185
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region186:num
 * @text Region 186
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region187:num
 * @text Region 187
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region188:num
 * @text Region 188
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region189:num
 * @text Region 189
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region190:num
 * @text Region 180
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region191:num
 * @text Region 181
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region192:num
 * @text Region 182
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region193:num
 * @text Region 183
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region194:num
 * @text Region 184
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region195:num
 * @text Region 185
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region196:num
 * @text Region 186
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region197:num
 * @text Region 187
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region198:num
 * @text Region 188
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region199:num
 * @text Region 189
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region190:num
 * @text Region 190
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region191:num
 * @text Region 191
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region192:num
 * @text Region 192
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region193:num
 * @text Region 193
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region194:num
 * @text Region 194
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region195:num
 * @text Region 195
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region196:num
 * @text Region 196
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region197:num
 * @text Region 197
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region198:num
 * @text Region 198
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region199:num
 * @text Region 199
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region200:num
 * @text Region 200
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region201:num
 * @text Region 201
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region202:num
 * @text Region 202
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region203:num
 * @text Region 203
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region204:num
 * @text Region 204
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region205:num
 * @text Region 205
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region206:num
 * @text Region 206
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region207:num
 * @text Region 207
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region208:num
 * @text Region 208
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region209:num
 * @text Region 209
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region210:num
 * @text Region 210
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region211:num
 * @text Region 211
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region212:num
 * @text Region 212
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region213:num
 * @text Region 213
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region214:num
 * @text Region 214
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region215:num
 * @text Region 215
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region216:num
 * @text Region 216
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region217:num
 * @text Region 217
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region218:num
 * @text Region 218
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region219:num
 * @text Region 219
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region220:num
 * @text Region 220
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region221:num
 * @text Region 221
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region222:num
 * @text Region 222
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region223:num
 * @text Region 223
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region224:num
 * @text Region 224
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region225:num
 * @text Region 225
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region226:num
 * @text Region 226
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region227:num
 * @text Region 227
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region228:num
 * @text Region 228
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region229:num
 * @text Region 229
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region230:num
 * @text Region 230
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region231:num
 * @text Region 231
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region232:num
 * @text Region 232
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region233:num
 * @text Region 233
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region234:num
 * @text Region 234
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region235:num
 * @text Region 235
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region236:num
 * @text Region 236
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region237:num
 * @text Region 237
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region238:num
 * @text Region 238
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region239:num
 * @text Region 239
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region240:num
 * @text Region 240
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region241:num
 * @text Region 241
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region242:num
 * @text Region 242
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region243:num
 * @text Region 243
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region244:num
 * @text Region 244
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region245:num
 * @text Region 245
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region246:num
 * @text Region 246
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region247:num
 * @text Region 247
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region248:num
 * @text Region 248
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region249:num
 * @text Region 249
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region250:num
 * @text Region 250
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region251:num
 * @text Region 251
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region252:num
 * @text Region 252
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region253:num
 * @text Region 253
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region254:num
 * @text Region 254
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region255:num
 * @text Region 255
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 */
/* ----------------------------------------------------------------------------
 * Terrain Tag Settings
 * ----------------------------------------------------------------------------
 */
/*~struct~TerrainTag:
 *
 * @param TerrainTag
 * @text Terrain Tag ID's
 *
 * @param Rope:num
 * @text Rope
 * @parent TerrainTag
 * @type number
 * @min 0
 * @max 7
 * @desc Which terrain tag number to use for ropes?
 * @default 1
 *
 */
/* ----------------------------------------------------------------------------
 * VisuStella 8-Dir Settings
 * ----------------------------------------------------------------------------
 */
/*~struct~VS8:
 *
 * @param Balloons
 * @text Balloon Icon Settings
 *
 * @param AutoBalloon:eval
 * @text Auto-Balloon Poses
 * @parent Balloons
 * @type boolean
 * @on Auto
 * @off Manual
 * @desc Automatically pose VS8 sprites when using balloon icons.
 * @default true
 *
 * @param BalloonOffsetX:num
 * @text Balloon Offset X
 * @parent Balloons
 * @desc Offset balloon icons on VS8 sprites by x pixels.
 * @default 0
 *
 * @param BalloonOffsetY:num
 * @text Balloon Offset Y
 * @parent Balloons
 * @desc Offset balloon icons on VS8 sprites by y pixels.
 * @default 10
 *
 * @param Icons
 * 
 * @param AutoBuffer:eval
 * @text Auto Buffer
 * @parent Icons
 * @type boolean
 * @on Auto
 * @off Manual
 * @desc Automatically buffer the X and Y coordinates of
 * VS8 sprites?
 * @default true
 * 
 * @param CarryPose:eval
 * @text Use Carry Pose
 * @parent Icons
 * @type boolean
 * @on Carry Pose
 * @off Normal
 * @desc Use the carry pose when moving with an icon overhead.
 * @default true
 *
 */
//=============================================================================

const _0x4bc8=['mXrqj','forceDashing','Game_CharacterBase_initMembers','getDirectionFromPoint','switch1Id','copy','Window_Message_startMessage','findTargetSprite','VisibleEventLabels','left','Passability','mapId','process_VisuMZ_EventsMoveCore_Switches_Variables','_eventId','updateTilt','isRegionForbidPass','jumpHeight','isPreventSelfMovement','ItKZU','slJSE','processMoveRouteMoveTo','createIconSprite','Fsqre','setBackgroundType','initMoveSpeed','updateSelfMovement','Spriteset_Map_createShadow','_filename','updateOpacity','PreloadedMaps','characterIndexVS8','nkqYE','Window_ScrollText_startMessage','CVRcs','Game_Map_setupEvents','locate','Movement','_moveRoute','setupMorphEvent','contentsOpacity','Step1EventId','exit','_shadowGraphic','isTriggerIn','_type','Prcsk','rotation','%1DockRegionOnly','mQHTD','DZoJa','SILENCE','processMoveRouteStepToCharacter','qggUB','_moveSpeed','NOTE','isSaveEventLocations','ujGjn','hasCPCs','floor','Game_Vehicle_isLandOk','VUjRo','tIZNr','setAllowEventAutoMovement','_eventCopyData','EKNnL','EventLabelVisible','_eventSpawnData','pnnBA','away','target','includes','deleteSavedEventLocationKey','mirror\x20vert','SPIN\x20CLOCKWISE','requestBalloon','BufferY','processMoveSynchMimic','offsetX','clearSpriteOffsets','VVBpq','_eventMorphData','isOnLadder','FIxGe','Settings','isSpriteVS8dir','setMoveSpeed','HSgPO','event','drawIcon','moveForward','none','checkCPCsPresent','Kjats','LOVE','setValue','_moveSynch','EventForbid','setMoveRoute','JCRvy','pageId','updatePose','GUQEy','refresh','mirror\x20vertical','backY','Game_Player_isMapPassable','updateShadow','LiOIn','processMoveSynchMirrorHorz','isDashing','kxcFW','jhJGW','VariableId','_spriteOffsetY','BufferX','opacity','UKJIv','EVAL','deleteIconsOnEventsData','resizeWindow','All','_regionRules','map','VisuMZ_1_MessageCore','setupEventsMoveCoreNotetags','screenX','Game_Map_events','Game_Player_increaseSteps','add','processMoveRouteJumpToCharacter','frontY','IHWvK','ELCGW','determineCommonEventsWithCPC','Forbid','Scene_Boot_onDatabaseLoaded','roundYWithDirection','IconSet','version','hhPVU','command108','width','fRrIr','roundY','start','getInputDir8','pattern','rezih','makeDeepCopy','delay','processMoveRouteSelfVariable','moveStraight','isAdvancedSwitch','Achyh','switch2Id','SPIN\x20ANTICLOCKWISE','anchor','setupRegionRestrictions','CPCsMet','ARRAYEVAL','characterPatternY','moveSynchType','_inputTime','HEART','isValid','slice','Game_Event_refresh','ERROR:\x20Map\x20%1\x20has\x20not\x20been\x20preloaded\x20for\x20<Copy\x20Event>\x20usage.','determineEventOverload','cgpMx','isBoat','setupChild','jump','innerWidth','SPIN\x20CCW','despawnEverything','_labelWindows','defaultFontSize','mirror\x20horizontal','opacitySpeed','%1\x27s\x20version\x20does\x20not\x20match\x20plugin\x27s.\x20Please\x20update\x20it\x20in\x20the\x20Plugin\x20Manager.','dashSpeedModifier','log','Game_CharacterBase_update','VisuMZ_Setup_Preload_Map','OLrFD','njXqf','_activationProximity','MoveAllSynchTargets','SwitchId','horz\x20mirror','EventLocationCreate','TyEQK','_spriteset','setLastPluginCommandInterpreter','deleteIconsOnEventsDataKey','_spawnData','clamp','EventsMoveCore','DashingEnable','EventIconChange','xpMoM','Label','findProperPageIndex','height','LineHeight','ShowShadows','registerSelfTarget','removeMorph','reverseDir','LEFT\x20TO\x20RIGHT','max','updateVS8BalloonOffsets','ConvertParams','turnLeft90','offsetY','right','hasEventIcon','mirror\x20horz','setupCopyEvent','Rope','RegionOkTarget','EventID','mVLLV','parse','prototype','metCPC','createSpawnedEvent','SXYJW','SelfVariables','PreSpawnJS','isLabelVisible','SelfSwitches','PreCopyJS','moveSynchTarget','_addedHitbox','Direction','SpawnEventAtXY','USER-DEFINED\x202','Game_Event_updateSelfMovement','Game_Event_checkEventTriggerAuto','ARRAYSTRUCT','tpcAQ','processMoveSynchMirrorVert','MrKxt','HpTho','_callEventMap','Game_Message_add','%1\x20is\x20incorrectly\x20placed\x20on\x20the\x20plugin\x20list.\x0aIt\x20is\x20a\x20Tier\x20%2\x20plugin\x20placed\x20over\x20other\x20Tier\x20%3\x20plugins.\x0aPlease\x20reorder\x20the\x20plugin\x20list\x20from\x20smallest\x20to\x20largest\x20tier\x20numbers.','front','_periodicRefreshTimer','setWaitMode','jNhUU','checkEventTriggerThere','isMoveOnlyRegionPassable','Game_Vehicle_initMoveSpeed','Ship','GasxJ','PiSbh','page','createLabelWindowForTarget','conditions','GVVoE','USER-DEFINED\x205','_pose','Jemkr','Visible','processMoveRouteMoveToCharacter','yKPFV','list','abs','firstSpawnedEvent','onClickTrigger','IzxHM','Operation','Game_Player_checkEventTriggerHere','canPass','OffsetY','variables','startMessage','processMoveSynchRandom','executeMove','hasAdvancedSwitchVariable','isDashingAndMoving','COBWEB','directionOnLadderSpriteVS8dir','hideShadows','isPassableByAnyDirection','push','initialize','processMoveRouteHugWall','randomInt','startEncounterEffect','setImage','checkEventTriggerAuto','reverse\x20copy','isEventOverloaded','Value','SLEEP','setPattern','ZpTTX','jWfAC','isTargetEventValidForLabelWindow','ISWRv','spawnEventId','mCqJW','_commonEventId','EXCLAMATION','TiltVert','pos','value','prepareSpawnedEventAtXY','processMoveRouteTeleportToCharacter','ARRAYJSON','Game_CharacterBase_realMoveSpeed','BHZls','LOWER\x20RIGHT','DmEmn','setSelfValue','IconBufferX','LDFfA','create','isShadowShrink','Game_Event_meetsConditionsCPC','hMEVr','Game_Map_parallelCommonEvents','reverse\x20mimic','Game_Map_isDashDisabled','onDatabaseLoaded','NORMAL','%1%2','row','isAllowEventAutoMovement','TurnInPlaceDelay','processMoveSynch','BalloonOffsetY','processMoveRouteMoveRepeat','_commonEvents','IconSize','ZZZ','PageId','FavorHorz','Game_Event_event','addChild','AKGHx','cSgSY','mZQYl','sMzUQ','parent','_EventIcons','processDrawIcon','processMoveSynchReverseMimic','clear','checkActivationProximity','regionId','checkValidEventerMap','frameCount','ADDITIVE','createLabelWindows','jSAuQ','activationProximityDistance','isPressed','moveTowardPoint','checkEventsMoveCoreStringTags','Game_Troop_meetsConditionsCPC','PLLnX','RIGHT\x20TO\x20LEFT','replace','column','clearSelfTarget','Game_Event_initialize','shiftY','isAllowCharacterTilt','checkEventTriggerHere','JJYFS','initEventsMoveCoreEffects','Game_Player_getInputDirection','rqlbm','canStartLocalEvents','Game_Character_processMoveCommand','switch1Valid','nXyqF','isSpawnedEvent','direction','updatePatternEventsMoveCore','MULTIPLY','NzgXr','sstfn','CarryPose','status','isEventRunning','_spawnedEvents','splice','fzCWi','Game_CharacterBase_setDirection','LIGHTBULB','apply','CustomPageConditions','eraseEvent','HMPH','clearPose','LEFT','isNearTheScreen','Stop','boxWidth','WMdNO','_eventOverload','_selfTarget','_eventOverloadThreshold','deltaX','deleteEventLocation','Game_CharacterBase_moveStraight','cdMvy','processMoveRouteStepToPlayer','_saveEventLocations','key','rYuTG','isPassable','setDiagonalDirection','EventLabelRefresh','_transparent','DaqUt','clearDashing','OgPvm','isBigCharacter','iconIndex','LQuhh','padZero','COLLAPSE','createLowerLayer','isRegionAllowPass','isRunning','gozWY','IconIndex','YYUSD','getPose','lFIUB','VRNRY','pageIndex','turnRight90','vtTKP','itemPadding','moveByInput','FbGNn','isPlaytest','lastSpawnedEventID','_character','vehicle','VMSfj','Game_System_initialize','Game_Interpreter_updateWaitMode','autoEventIconBuffer','updatePeriodicRefresh','setupSaveEventLocations','visible','hasStepAnime','UVWIV','getInputDirection','Game_Switches_setValue','Step2MapId','DOWN','Collision','processMoveSynchCustom','Icon','clearStepPattern','Game_Player_executeMove','OIrrw','processMoveRouteAnimation','RBeSP','_encounterEffectDuration','WalkAllow','LIGHT\x20BULB','lDlkN','isLandOk','SpawnEventDespawnRegions','Game_Character_forceMoveRoute','hUZVW','EventTemplates','kVEBB','Disable','isBusy','WalkForbid','eventLabelsVisible','initMembers','filename','MkWRp','ZReke','AirshipSpeed','_cpc','jJMUL','savePreservedMorphEventDataKey','updateMove','isInVehicle','deltaXFrom','isShadowVisible','Map%1.json','NXcXG','Dock','moveDiagonally','random','toLowerCase','_vehicleType','setupDiagonalSupport','prepareSpawnedEventAtRegion','tQJiF','Name','Game_Temp_setDestination','General','MUSIC','_counter','VSQxj','_characterSprites','Rettk','player','_spawnPreserved','Game_Event_updateParallel','Tngje','SPIN\x20COUNTERCLOCKWISE','note','getPosingCharacterDirection','wKGQd','Game_CharacterBase_isDashing','deletePreservedMorphEventDataKey','checkRegionEventTrigger','VehicleAllow','USER-DEFINED\x203','setMovementSuccess','Game_Enemy_meetsSwitchCondition','%1\x20is\x20missing\x20a\x20required\x20plugin.\x0aPlease\x20install\x20%2\x20into\x20the\x20Plugin\x20Manager.','_duration','VICTORY','onChange','TxkXU','qWdmi','mGuEZ','roundX','_stepPattern','Game_CharacterBase_pattern','_callEventData','resetFontSettings','createShadows','searchLimit','initEventsMoveCoreSettings','USER-DEFINED\x204','variableValid','filter','Template','BalloonOffsetX','SelfSwitchID','loadCPC','vertical\x20mirror','HKKEw','Event','getPosingCharacterPattern','StrictCollision','uYtZZ','turnAwayFromCharacter','%1Allow','characterIndex','Game_Switches_value','updateMoveSynch','OffsetX','_forceDashing','_MapSpawnedEventData','ghYHH','BULB','RYqkm','setupPageSettings','getPreservedMorphEventData','SelfSwitchABCD','Game_Map_refresh','Game_Variables_setValue','xAMLu','_event','ddlGd','constructor','vert\x20mirror','MWhIK','NoEJy','fwPXT','Game_Interpreter_executeCommand','updateText','hasDragonbones','_spriteOffsetX','vxyUF','updatePosition','_alwaysUpdateMove','StopAutoMoveMessages','PlayerIconChange','meetActivationRegionConditions','hhrMx','StopAutoMoveEvents','processMoveRouteSetIndex','TiltRight','bitmap','IqXew','hdvyg','...','TerrainTag','AdvancedSwitches','forceMoveRoute','_PreservedEventMorphData','SPIN\x20ACW','Game_CharacterBase_screenY','pGXSl','return\x20%1','TemplateName','processMoveRouteTeleportTo','SpawnEventAtRegion','soWBY','updatePattern','Game_CharacterBase_moveDiagonally','parallelCommonEvents','MUSIC\x20NOTE','erase','getEventIconIndex','switch2Valid','Game_Map_event','VisibleRange','Game_SelfSwitches_setValue','Player','createCharacterShadow','MapId','concat','Ctaan','realMoveSpeed','radius','Region','CallEvent','Game_Player_isDashing','visibleRange','meetActivationProximityConditions','setBalloonPose','frontX','ROUTE_SCRIPT','isAirshipPassable','isNormalPriority','VYMvs','KNEEL','BEuBF','meetsCPC','_mapId','findDiagonalDirectionTo','LoFtT','airship','isEventTest','removeTemporaryMapSpawnedEvents','Toggle','eventId','AutoBalloon','reserveCommonEvent','setupSpawnedEvents','EventLocationDelete','update','findDirectionTo','name','labelWindowRange','type','switchId','processMoveRouteSelfSwitch','WumRP','isBattleTest','isAutoBufferIcon','startMapCommonEventOnOK','Opkoz','moveAwayFromCharacter','Nogkm','WYWsD','Game_Troop_meetsConditions','PostSpawnJS','Sprite_Character_characterPatternY','rCGCS','Game_Interpreter_PluginCommand','getEventIconData','_opacity','Vehicle','RegionTouch','code','_advancedSwitchVariable','isAnyEventStarting','requestRefresh','LOWER\x20LEFT','startCallEvent','turnAwayFromPoint','MoveRouteIndex','Cjuwe','ARRAYNUM','eventsXyNt','nUNQN','pages','DefaultShadow','setup','Game_Map_setup','DiagonalSpeedMultiplier','variableId','sYQNb','$callEventMap','process_VisuMZ_EventsMoveCore_LoadTemplateMaps','NFyDw','Sprite_Balloon_setup','LfOdy','PreMorphJS','BoatSpeed','STR','contents','Game_Player_checkEventTriggerThere','ITEM','_activationProximityAutoTriggerBypass','clearPageSettings','call','cbyzi','Map%1-Event%2','processMoveRouteJumpForward','moveTowardCharacter','_target','eventsXy','updateParallel','TlVko','command357','square','IconBlendMode','SELF\x20SWITCH\x20%1','_interpreter','PostCopyJS','AllForbid','isAdvancedVariable','clearEventCache','CWnOz','fontSize','description','events','yzMyj','_SavedEventLocations','LIGHT-BULB','paewI','advancedValue','initMembersEventsMoveCore','ifCgh','processMoveSynchAway','remove','processMoveRoutePatternLock','isDiagonalDirection','morphIntoTemplate','DashModifier','custom','initEventsMoveCore','JYcCR','ARRAYSTR','_moveRouteIndex','roundXWithDirection','text','%1Forbid','wwvnM','EpsRi','kqYVR','_lastPluginCommandInterpreter','_tilemap','Allow','deltaY','SYEoW','characterPatternYVS8','hasMoveOnlyRegions','executeCommand','Enable','startMapCommonEventOnOKTarget','SCREEN','removeChild','setPose','FontSize','round','createContents','getSavedEventLocation','JmZFF','Game_CharacterBase_direction','wYjDD','_saveEventLocation','Game_Map_update','MorphEventRemove','USER-DEFINED\x201','isMoving','isEventClickTriggered','fWtTJ','setDirection','Hidden','posEventsMoveCore','updateWaitMode','registerSelfEvent','processMoveRouteStepTo','executeMoveDir8','fjuZU','Game_SelfSwitches_value','deleteSavedEventLocation','getPosingCharacterIndex','pluginCommandCallEvent','Game_CommonEvent_isActive','setOpacity','setEventLabelsVisible','Scene_Map_startEncounterEffect','mimic','VS8','hyecM','despawnEventId','isShip','_data','useCarryPoseForIcons','absDistance','TeUYR','WQwWR','_shadowSprite','_diagonalSupport','_moveOnlyRegions','SpawnEventDespawnEventID','standing','saveEventLocation','split','QUESTION','bufferY','PreloadMaps','OFF','anzXO','_lastMovedDirection','ShipSpeed','dir8','_characterName','screenY','match','EventId','ShuyA','IconBufferY','parameters','autosaveEventLocation','processMoveRouteMoveUntilStop','mHJnQ','setupEventsMoveCoreCommentTags','EventAutoMovement','updateScale','_clickTrigger','veHZK','toUpperCase','%1Dock','isTurnInPlace','tgHxj','isDashingEnabled','_selfEvent','Sprite_Character_initMembers','template','_scene','_CPCs','jcPHM','TRUE','terrainTag','default','EnableTurnInPlace','down','zPeYr','moveRouteIndex','Game_CharacterBase_increaseSteps','setEventIconData','ByIUn','ANGER','IXHXY','activationRegionList','iconWidth','switches','ANNOYED','trim','canPassDiagonally','RIGHT','setFrame','Game_Event_findProperPageIndex','createSpawnedEventWithData','charAt','setDashingEnabled','_hidden','STRUCT','Game_Event_setupPageSettings','createSaveEventLocationData','NOGfm','region','requestAnimation','_labelWindow','NUM','EventLocationSave','shadowFilename','isSelfSwitch','lastSpawnedEvent','$preloadedMap_%1','isDestinationValid','deltaYFrom','processMoveCommand','zoomScale','Eaqsy','timer','format','_poseDuration','cMySC','Step2EventId','Game_Event_start','VehicleForbid','_characterIndex','length','isMapPassable','getSelfTarget','correctFacingDirection','setDestination','windowPadding','jzzGE','morphInto','processMoveRouteJumpTo','_comments','destinationX','OpacitySpeed','AutoMoveEvents','XGZyY','SWEAT','Game_Character_setMoveRoute','lastMovedDirection','_eventIcon','loadSystem','ship','shadowY','clearDestination','advancedFunc','SELF\x20VARIABLE\x20%1','createShadow','Step2Preserve','updateShadowChanges','Game_Variables_value','drawTextEx','turnTowardCharacter','setupEvents','isJumping','meetsConditions','isSupportDiagonalMovement','Region%1','mlQKu','mbOSB','bufferX','TBmAg','MapID','iPCQt','textSizeEx','AzjSi','activationProximityType','boat','_pattern','setupEventsMoveCoreEffects','BTFYs','isPosing','Game_Vehicle_isMapPassable','GhqKg','Game_CharacterBase_updatePattern','despawnAtXY','isAirship','_EventsMoveCoreSettings','isSelfVariable','isRegionDockable','labelWindowText','indexOf','SpawnEventDespawnAtXY','SPIN\x20CW','processMoveSynchApproach','updateEventIconSprite','characterName','setEventIconDataKey','posNt','PosY','qJxts','getMapSpawnedEventData','processMoveCommandEventsMoveCore','registerCommand','reverse','EnableDir8','distance','bTByU','Spriteset_Map_createLowerLayer','CPC','Game_Event_clearPageSettings','SlowerSpeed','PlayerAllow','checkEventTriggerEventsMoveCore','cAWxa','AdvancedVariables','xXovJ','moveAwayFromPoint','pIDoj','cdBXw','selfValue','isCollidedWithEvents','restoreSavedEventPosition','Game_Event_meetsConditions','isActive','Sprite_Character_update','regionList','startMapCommonEventOnTouch','scale','shadowX','RmOxW','meetsSwitchCondition','Step1MapId','bind','PJiao','GetMoveSynchTarget','fittingHeight','_patternLocked','some','mHJmg','lineHeight','Tibev','XDWaZ','updateEventsMoveCoreTagChanges','min','iconHeight','drawing','GtJHT','OoYSM','_pageIndex','FUNC','_needsPeriodicRefresh','loadDataFile','Game_CharacterBase_canPass','Game_CharacterBase_hasStepAnime','isDashDisabled','getLastPluginCommandInterpreter','EybZO','isTile','checkAdvancedSwitchVariablePresent','tNwfK','Game_CharacterBase_characterIndex','adjustDir8MovementSpeed','AllAllow','execute','_text','PosX','_eventIconSprite','UNTITLED','DashEnableToggle','blt','checkNeedForPeriodicRefresh','getDirectionToPoint','_eventCache','despawnRegions','VoLPH','OBLNY','iconSize','HURT','increaseSteps','setupSpawn','FastForwardKey','PostMorphJS','iQhji','EventAllow','Game_CharacterBase_screenX','hxnwy','hasClickTrigger','blendMode','Sprite_Balloon_updatePosition'];(function(_0x24bced,_0x4bc8bd){const _0x5c2820=function(_0x2f36e3){while(--_0x2f36e3){_0x24bced['push'](_0x24bced['shift']());}};_0x5c2820(++_0x4bc8bd);}(_0x4bc8,0xfe));const _0x5c28=function(_0x24bced,_0x4bc8bd){_0x24bced=_0x24bced-0x0;let _0x5c2820=_0x4bc8[_0x24bced];return _0x5c2820;};var label=_0x5c28('0x3e9'),tier=tier||0x0,dependencies=[],pluginData=$plugins[_0x5c28('0x123')](function(_0x1bad24){return _0x1bad24[_0x5c28('0x87')]&&_0x1bad24['description'][_0x5c28('0x369')]('['+label+']');})[0x0];VisuMZ[label][_0x5c28('0x376')]=VisuMZ[label][_0x5c28('0x376')]||{},VisuMZ[_0x5c28('0x3f8')]=function(_0x10de6d,_0x1a12dd){for(const _0x463d40 in _0x1a12dd){if(_0x463d40[_0x5c28('0x23b')](/(.*):(.*)/i)){if(_0x5c28('0x3a6')==='BBLqb'){function _0x45021f(){if(!_0x568ba3[_0x5c28('0x3e9')][_0x5c28('0x376')][_0x5c28('0x347')][_0x5c28('0x3f1')])return;for(const _0xe79ef of this[_0x5c28('0x101')]){this[_0x5c28('0x16f')](_0xe79ef);}}}else{const _0x4a5a9d=String(RegExp['$1']),_0x2e2564=String(RegExp['$2'])[_0x5c28('0x248')]()[_0x5c28('0x263')]();let _0x2c2742,_0x427244,_0xa9f8d4;switch(_0x2e2564){case _0x5c28('0x273'):_0x2c2742=_0x1a12dd[_0x463d40]!==''?Number(_0x1a12dd[_0x463d40]):0x0;break;case _0x5c28('0x1b0'):_0x427244=_0x1a12dd[_0x463d40]!==''?JSON[_0x5c28('0x403')](_0x1a12dd[_0x463d40]):[],_0x2c2742=_0x427244[_0x5c28('0x39d')](_0x866646=>Number(_0x866646));break;case _0x5c28('0x398'):_0x2c2742=_0x1a12dd[_0x463d40]!==''?eval(_0x1a12dd[_0x463d40]):null;break;case _0x5c28('0x3c2'):_0x427244=_0x1a12dd[_0x463d40]!==''?JSON['parse'](_0x1a12dd[_0x463d40]):[],_0x2c2742=_0x427244[_0x5c28('0x39d')](_0x2b7dd4=>eval(_0x2b7dd4));break;case'JSON':_0x2c2742=_0x1a12dd[_0x463d40]!==''?JSON[_0x5c28('0x403')](_0x1a12dd[_0x463d40]):'';break;case _0x5c28('0x3b'):_0x427244=_0x1a12dd[_0x463d40]!==''?JSON[_0x5c28('0x403')](_0x1a12dd[_0x463d40]):[],_0x2c2742=_0x427244['map'](_0x10525e=>JSON[_0x5c28('0x403')](_0x10525e));break;case _0x5c28('0x2fb'):_0x2c2742=_0x1a12dd[_0x463d40]!==''?new Function(JSON[_0x5c28('0x403')](_0x1a12dd[_0x463d40])):new Function('return\x200');break;case'ARRAYFUNC':_0x427244=_0x1a12dd[_0x463d40]!==''?JSON[_0x5c28('0x403')](_0x1a12dd[_0x463d40]):[],_0x2c2742=_0x427244[_0x5c28('0x39d')](_0x3e7a7d=>new Function(JSON[_0x5c28('0x403')](_0x3e7a7d)));break;case _0x5c28('0x1c1'):_0x2c2742=_0x1a12dd[_0x463d40]!==''?String(_0x1a12dd[_0x463d40]):'';break;case _0x5c28('0x1ed'):_0x427244=_0x1a12dd[_0x463d40]!==''?JSON[_0x5c28('0x403')](_0x1a12dd[_0x463d40]):[],_0x2c2742=_0x427244[_0x5c28('0x39d')](_0x28a89b=>String(_0x28a89b));break;case _0x5c28('0x26c'):_0xa9f8d4=_0x1a12dd[_0x463d40]!==''?JSON[_0x5c28('0x403')](_0x1a12dd[_0x463d40]):{},_0x10de6d[_0x4a5a9d]={},VisuMZ[_0x5c28('0x3f8')](_0x10de6d[_0x4a5a9d],_0xa9f8d4);continue;case _0x5c28('0x414'):_0x427244=_0x1a12dd[_0x463d40]!==''?JSON[_0x5c28('0x403')](_0x1a12dd[_0x463d40]):[],_0x2c2742=_0x427244[_0x5c28('0x39d')](_0x45b2a4=>VisuMZ[_0x5c28('0x3f8')]({},JSON[_0x5c28('0x403')](_0x45b2a4)));break;default:continue;}_0x10de6d[_0x4a5a9d]=_0x2c2742;}}}return _0x10de6d;},(_0x3c7955=>{const _0x1e02de=_0x3c7955[_0x5c28('0x191')];for(const _0x2809cb of dependencies){if(!Imported[_0x2809cb]){alert(_0x5c28('0x112')[_0x5c28('0x27f')](_0x1e02de,_0x2809cb)),SceneManager[_0x5c28('0x34c')]();break;}}const _0x18578a=_0x3c7955[_0x5c28('0x1db')];if(_0x18578a[_0x5c28('0x23b')](/\[Version[ ](.*?)\]/i)){if(_0x5c28('0x342')===_0x5c28('0x342')){const _0x1e7a17=Number(RegExp['$1']);_0x1e7a17!==VisuMZ[label][_0x5c28('0x3ad')]&&(alert(_0x5c28('0x3d7')[_0x5c28('0x27f')](_0x1e02de,_0x1e7a17)),SceneManager[_0x5c28('0x34c')]());}else{function _0x40dd94(){return _0x3bfd24[_0x5c28('0x404')]['command108'][_0x5c28('0x1c7')](this,_0xd37318),this['_comments'][_0x5c28('0x2ef')](_0x3ce215=>_0x3ce215[_0x5c28('0x23b')](/<(?:CONDITION|CONDITIONS) MET>/i))&&(this[_0x5c28('0xea')]=!![]),!![];}}}if(_0x18578a[_0x5c28('0x23b')](/\[Tier[ ](\d+)\]/i)){if('rCGCS'===_0x5c28('0x1a1')){const _0x175414=Number(RegExp['$1']);if(_0x175414<tier){if(_0x5c28('0x1dd')===_0x5c28('0x1dd'))alert(_0x5c28('0x41b')['format'](_0x1e02de,_0x175414,tier)),SceneManager[_0x5c28('0x34c')]();else{function _0x14ec0d(){const _0x273111=[_0x186b26[_0x5c28('0x183')],_0xf0f03e[_0x5c28('0x330')],_0x5c28('0x29d')[_0x5c28('0x27f')](_0x2f2d5e)];return _0x9fa0d4[_0x5c28('0x38')](_0x273111);}}}else tier=Math[_0x5c28('0x3f6')](_0x175414,tier);}else{function _0x23cbab(){const _0x2448e4=_0xd98e2c[_0x5c28('0xdf')][_0xce9fbd];if(!_0x2448e4)return;_0x2448e4[_0x5c28('0x19f')][_0x5c28('0x1c7')](this,_0x12b3f4,_0x5452ad,this);}}}VisuMZ[_0x5c28('0x3f8')](VisuMZ[label][_0x5c28('0x376')],_0x3c7955[_0x5c28('0x23f')]);})(pluginData),VisuMZ['OperateValues']=function(_0x122d82,_0x4e06e1,_0x1862e6){switch(_0x1862e6){case'=':return _0x4e06e1;break;case'+':return _0x122d82+_0x4e06e1;break;case'-':return _0x122d82-_0x4e06e1;break;case'*':return _0x122d82*_0x4e06e1;break;case'/':return _0x122d82/_0x4e06e1;break;case'%':return _0x122d82%_0x4e06e1;break;}return _0x122d82;},PluginManager[_0x5c28('0x2cc')](pluginData[_0x5c28('0x191')],_0x5c28('0x292'),_0x4f4a66=>{VisuMZ['ConvertParams'](_0x4f4a66,_0x4f4a66);switch(_0x4f4a66[_0x5c28('0x2b')]){case _0x5c28('0x1f7'):$gameSystem[_0x5c28('0x361')](!![]);break;case _0x5c28('0x95'):$gameSystem[_0x5c28('0x361')](![]);break;case _0x5c28('0x189'):$gameSystem[_0x5c28('0x361')](!$gameSystem[_0x5c28('0x4e')]());break;}}),PluginManager[_0x5c28('0x2cc')](pluginData['name'],'CallEvent',_0x58dd48=>{VisuMZ[_0x5c28('0x3f8')](_0x58dd48,_0x58dd48);const _0x1574ed={'mapId':_0x58dd48[_0x5c28('0x170')],'eventId':_0x58dd48[_0x5c28('0x23c')],'pageId':_0x58dd48[_0x5c28('0x56')]};if(_0x1574ed[_0x5c28('0x32e')]<=0x0)_0x1574ed['mapId']=$gameMap?$gameMap['mapId']():0x1;$gameTemp[_0x5c28('0x301')]()[_0x5c28('0x21b')](_0x1574ed);}),PluginManager['registerCommand'](pluginData[_0x5c28('0x191')],_0x5c28('0x30e'),_0x11a2bf=>{VisuMZ[_0x5c28('0x3f8')](_0x11a2bf,_0x11a2bf);switch(_0x11a2bf[_0x5c28('0x2b')]){case _0x5c28('0x1fd'):$gameSystem[_0x5c28('0x26a')](!![]);break;case _0x5c28('0xe1'):$gameSystem[_0x5c28('0x26a')](![]);break;case _0x5c28('0x189'):$gameSystem[_0x5c28('0x26a')](!$gameSystem['isDashingEnabled']());break;}}),PluginManager[_0x5c28('0x2cc')](pluginData[_0x5c28('0x191')],_0x5c28('0x3eb'),_0xe15782=>{VisuMZ['ConvertParams'](_0xe15782,_0xe15782),_0xe15782['MapId']=_0xe15782[_0x5c28('0x170')]||$gameMap['mapId'](),$gameSystem[_0x5c28('0x2c6')](_0xe15782[_0x5c28('0x170')],_0xe15782[_0x5c28('0x23c')],_0xe15782[_0x5c28('0xb3')],_0xe15782['IconBufferX'],_0xe15782[_0x5c28('0x23e')],_0xe15782[_0x5c28('0x1d2')]);}),PluginManager[_0x5c28('0x2cc')](pluginData['name'],'EventIconDelete',_0x44d88a=>{VisuMZ[_0x5c28('0x3f8')](_0x44d88a,_0x44d88a),_0x44d88a['MapId']=_0x44d88a[_0x5c28('0x170')]||$gameMap[_0x5c28('0x32e')](),$gameSystem['deleteIconsOnEventsDataKey'](_0x44d88a[_0x5c28('0x170')],_0x44d88a[_0x5c28('0x23c')]);}),PluginManager['registerCommand'](pluginData['name'],_0x5c28('0xa5'),_0x4a5535=>{if($gameMap){if(_0x5c28('0x28c')!==_0x5c28('0x28c')){function _0x432e51(){if(_0xc182f9)this[_0x5c28('0x215')](_0x26a778['x'],_0x3bea03['y']);}}else for(const _0x2916bb of $gameMap[_0x5c28('0x1dc')]()){if(_0x5c28('0x3b1')!==_0x5c28('0x35b'))_0x2916bb[_0x5c28('0x389')]();else{function _0x2c123f(){return this[_0x5c28('0x1f')]();}}}}}),PluginManager['registerCommand'](pluginData[_0x5c28('0x191')],_0x5c28('0x364'),_0x4956fc=>{VisuMZ[_0x5c28('0x3f8')](_0x4956fc,_0x4956fc);switch(_0x4956fc[_0x5c28('0x2b')]){case _0x5c28('0xc'):$gameSystem[_0x5c28('0x21e')](!![]);break;case _0x5c28('0x211'):$gameSystem[_0x5c28('0x21e')](![]);break;case _0x5c28('0x189'):$gameSystem['setEventLabelsVisible'](!$gameSystem['eventLabelsVisible']());break;}}),PluginManager['registerCommand'](pluginData['name'],_0x5c28('0x274'),_0x531dad=>{VisuMZ[_0x5c28('0x3f8')](_0x531dad,_0x531dad);if(!$gameMap)return;const _0xc05db3=$gameMap[_0x5c28('0x37a')](_0x531dad[_0x5c28('0x23c')]);if(_0xc05db3)_0xc05db3['saveEventLocation']();}),PluginManager[_0x5c28('0x2cc')](pluginData['name'],_0x5c28('0x18e'),_0xce1749=>{VisuMZ[_0x5c28('0x3f8')](_0xce1749,_0xce1749);const _0x2aa191=_0xce1749[_0x5c28('0x170')]||$gameMap['mapId'](),_0x5c1a21=_0xce1749['EventId'];$gameSystem[_0x5c28('0x36a')](_0x2aa191,_0x5c1a21);}),PluginManager['registerCommand'](pluginData['name'],_0x5c28('0x3e2'),_0x59d566=>{VisuMZ[_0x5c28('0x3f8')](_0x59d566,_0x59d566);const _0x13abe3=_0x59d566['MapId']||$gameMap['mapId'](),_0x4a951b=_0x59d566[_0x5c28('0x23c')]||0x1,_0x1b0e68=_0x59d566[_0x5c28('0x30b')]||0x0,_0xd09e09=_0x59d566[_0x5c28('0x2c8')]||0x0,_0x4e3709=_0x59d566[_0x5c28('0x40f')]||0x2,_0x590143=((_0x59d566[_0x5c28('0x56')]||0x1)-0x1)[_0x5c28('0x3e8')](0x0,0x13),_0x292f65=_0x59d566[_0x5c28('0x1ae')]||0x0;$gameSystem[_0x5c28('0x26e')](_0x13abe3,_0x4a951b,_0x1b0e68,_0xd09e09,_0x4e3709,_0x590143,_0x292f65);}),PluginManager['registerCommand'](pluginData['name'],'MorphEventTo',_0x19dad3=>{VisuMZ[_0x5c28('0x3f8')](_0x19dad3,_0x19dad3);if(!$gameMap)return;const _0xc46478=_0x19dad3[_0x5c28('0x29f')];_0x19dad3[_0x5c28('0x2e9')]=_0x19dad3['Step1MapId']||$gameMap[_0x5c28('0x32e')](),_0x19dad3[_0x5c28('0xcd')]=_0x19dad3[_0x5c28('0xcd')]||$gameMap[_0x5c28('0x32e')](),_0x19dad3['TemplateName']=_0x19dad3[_0x5c28('0x160')][_0x5c28('0x248')]()[_0x5c28('0x263')]();if(!_0xc46478&&_0x19dad3[_0x5c28('0x2e9')]!==$gameMap[_0x5c28('0x32e')]())return;if($gameMap['mapId']()===_0x19dad3['Step1MapId']){const _0x582ed8=$gameMap[_0x5c28('0x37a')](_0x19dad3[_0x5c28('0x34b')]);if(!_0x582ed8)return;_0x19dad3['TemplateName']!==_0x5c28('0x30d')?_0x582ed8['morphIntoTemplate'](_0x19dad3[_0x5c28('0x160')]):_0x582ed8[_0x5c28('0x28d')](_0x19dad3[_0x5c28('0xcd')],_0x19dad3[_0x5c28('0x282')]);}_0xc46478&&$gameSystem['savePreservedMorphEventDataKey'](_0x19dad3[_0x5c28('0x2e9')],_0x19dad3[_0x5c28('0x34b')],_0x19dad3[_0x5c28('0x160')],_0x19dad3['Step2MapId'],_0x19dad3[_0x5c28('0x282')]);}),PluginManager['registerCommand'](pluginData['name'],_0x5c28('0x20b'),_0x1e1c6c=>{VisuMZ['ConvertParams'](_0x1e1c6c,_0x1e1c6c);if(!$gameMap)return;_0x1e1c6c[_0x5c28('0x170')]=_0x1e1c6c[_0x5c28('0x170')]||$gameMap[_0x5c28('0x32e')]();if($gameMap[_0x5c28('0x32e')]()===_0x1e1c6c[_0x5c28('0x170')]){if(_0x5c28('0x31c')===_0x5c28('0x1d9')){function _0x106fa2(){_0xdabe0a[_0x5c28('0x3e9')][_0x5c28('0x1bd')][_0x5c28('0x1c7')](this,_0x53930b,_0x3b30cd),_0x3b1f73[_0x5c28('0x3e9')][_0x5c28('0x376')][_0x5c28('0x221')][_0x5c28('0x18b')]&&this[_0x5c28('0x1cc')]['_character'][_0x5c28('0x17a')](_0x26d910,this[_0x5c28('0x113')]);}}else{const _0x2723dd=$gameMap[_0x5c28('0x37a')](_0x1e1c6c[_0x5c28('0x23c')]);_0x2723dd[_0x5c28('0x3f3')]();}}_0x1e1c6c['RemovePreserve']&&$gameSystem[_0x5c28('0x10c')](_0x1e1c6c[_0x5c28('0x170')],_0x1e1c6c[_0x5c28('0x23c')]);}),PluginManager[_0x5c28('0x2cc')](pluginData[_0x5c28('0x191')],_0x5c28('0x14e'),_0x390355=>{VisuMZ['ConvertParams'](_0x390355,_0x390355),$gameSystem[_0x5c28('0x25b')]($gamePlayer,_0x390355[_0x5c28('0xb3')],_0x390355[_0x5c28('0x41')],_0x390355[_0x5c28('0x23e')],_0x390355[_0x5c28('0x1d2')]);}),PluginManager['registerCommand'](pluginData['name'],'PlayerIconDelete',_0x160082=>{VisuMZ['ConvertParams'](_0x160082,_0x160082),$gameSystem[_0x5c28('0x399')]($gamePlayer);}),PluginManager[_0x5c28('0x2cc')](pluginData[_0x5c28('0x191')],_0x5c28('0x13b'),_0x106245=>{VisuMZ[_0x5c28('0x3f8')](_0x106245,_0x106245),_0x106245[_0x5c28('0x170')]=_0x106245[_0x5c28('0x170')]||$gameMap[_0x5c28('0x32e')]();const _0x9db369=[_0x106245[_0x5c28('0x170')],_0x106245[_0x5c28('0x23c')],_0x106245['Letter']];switch(_0x106245[_0x5c28('0x2b')]){case'ON':$gameSelfSwitches[_0x5c28('0x381')](_0x9db369,!![]);break;case _0x5c28('0x234'):$gameSelfSwitches[_0x5c28('0x381')](_0x9db369,![]);break;case _0x5c28('0x189'):$gameSelfSwitches[_0x5c28('0x381')](_0x9db369,!$gameSelfSwitches[_0x5c28('0x38')](_0x9db369));break;}}),PluginManager[_0x5c28('0x2cc')](pluginData['name'],_0x5c28('0x126'),_0x21dd5f=>{VisuMZ[_0x5c28('0x3f8')](_0x21dd5f,_0x21dd5f),_0x21dd5f[_0x5c28('0x170')]=_0x21dd5f['MapId']||$gameMap[_0x5c28('0x32e')]();const _0x4a9d9b=[_0x21dd5f[_0x5c28('0x170')],_0x21dd5f['EventId'],'SELF\x20SWITCH\x20%1'[_0x5c28('0x27f')](_0x21dd5f[_0x5c28('0x3e0')])];switch(_0x21dd5f[_0x5c28('0x2b')]){case'ON':$gameSelfSwitches[_0x5c28('0x381')](_0x4a9d9b,!![]);break;case _0x5c28('0x234'):$gameSelfSwitches[_0x5c28('0x381')](_0x4a9d9b,![]);break;case _0x5c28('0x189'):$gameSelfSwitches[_0x5c28('0x381')](_0x4a9d9b,!$gameSelfSwitches[_0x5c28('0x38')](_0x4a9d9b));break;}}),PluginManager[_0x5c28('0x2cc')](pluginData[_0x5c28('0x191')],'SelfVariableID',_0x1f6f12=>{VisuMZ[_0x5c28('0x3f8')](_0x1f6f12,_0x1f6f12);const _0x4d6710=[_0x1f6f12[_0x5c28('0x170')],_0x1f6f12[_0x5c28('0x23c')],_0x5c28('0x29d')[_0x5c28('0x27f')](_0x1f6f12[_0x5c28('0x393')])];_0x1f6f12['MapId']=_0x1f6f12[_0x5c28('0x170')]||$gameMap[_0x5c28('0x32e')]();const _0x4c0b65=VisuMZ['OperateValues']($gameSelfSwitches[_0x5c28('0x38')](_0x4d6710),_0x1f6f12[_0x5c28('0x2b')],_0x1f6f12[_0x5c28('0x14')]);$gameSelfSwitches['setValue'](_0x4d6710,_0x4c0b65);}),PluginManager[_0x5c28('0x2cc')](pluginData['name'],_0x5c28('0x410'),_0x34c387=>{VisuMZ[_0x5c28('0x3f8')](_0x34c387,_0x34c387);const _0x14ca19={'template':_0x34c387[_0x5c28('0x160')],'mapId':_0x34c387['MapId'],'eventId':_0x34c387[_0x5c28('0x23c')],'x':_0x34c387['PosX'],'y':_0x34c387['PosY'],'spawnPreserved':_0x34c387[_0x5c28('0xa1')],'spawnEventId':$gameMap[_0x5c28('0x89')]['length']+0x3e8};$gameMap[_0x5c28('0x39')](_0x14ca19,_0x34c387[_0x5c28('0xcf')],_0x34c387['Passability']);}),PluginManager['registerCommand'](pluginData[_0x5c28('0x191')],_0x5c28('0x162'),_0x5983a1=>{VisuMZ[_0x5c28('0x3f8')](_0x5983a1,_0x5983a1);const _0x5b5cb3={'template':_0x5983a1[_0x5c28('0x160')],'mapId':_0x5983a1['MapId'],'eventId':_0x5983a1['EventId'],'x':-0x1,'y':-0x1,'spawnPreserved':_0x5983a1[_0x5c28('0xa1')],'spawnEventId':$gameMap[_0x5c28('0x89')][_0x5c28('0x286')]+0x3e8};$gameMap[_0x5c28('0xf9')](_0x5b5cb3,_0x5983a1[_0x5c28('0x175')],_0x5983a1[_0x5c28('0xcf')],_0x5983a1[_0x5c28('0x32d')]);}),PluginManager['registerCommand'](pluginData['name'],_0x5c28('0x22d'),_0x888c1a=>{VisuMZ[_0x5c28('0x3f8')](_0x888c1a,_0x888c1a),$gameMap['despawnEventId'](_0x888c1a[_0x5c28('0x401')]);}),PluginManager[_0x5c28('0x2cc')](pluginData[_0x5c28('0x191')],_0x5c28('0x2c1'),_0x387612=>{VisuMZ[_0x5c28('0x3f8')](_0x387612,_0x387612);const _0x18fe4e=_0x387612[_0x5c28('0x30b')],_0xc22c3b=_0x387612[_0x5c28('0x2c8')];$gameMap[_0x5c28('0x2ba')](_0x18fe4e,_0xc22c3b);}),PluginManager[_0x5c28('0x2cc')](pluginData[_0x5c28('0x191')],_0x5c28('0xdc'),_0xa2939=>{VisuMZ[_0x5c28('0x3f8')](_0xa2939,_0xa2939),$gameMap[_0x5c28('0x313')](_0xa2939[_0x5c28('0x175')]);}),PluginManager['registerCommand'](pluginData[_0x5c28('0x191')],'SpawnEventDespawnEverything',_0x3eb78a=>{VisuMZ['ConvertParams'](_0x3eb78a,_0x3eb78a),$gameMap[_0x5c28('0x3d2')]();}),VisuMZ[_0x5c28('0x3e9')][_0x5c28('0x3aa')]=Scene_Boot[_0x5c28('0x404')]['onDatabaseLoaded'],Scene_Boot[_0x5c28('0x404')][_0x5c28('0x4a')]=function(){VisuMZ[_0x5c28('0x3e9')]['Scene_Boot_onDatabaseLoaded']['call'](this),this[_0x5c28('0x1bb')](),this['process_VisuMZ_EventsMoveCore_Switches_Variables']();if(VisuMZ[_0x5c28('0x3e9')]['CustomPageConditions'])VisuMZ[_0x5c28('0x3e9')][_0x5c28('0x8f')][_0x5c28('0x23')]();},VisuMZ[_0x5c28('0x340')]=[],VisuMZ[_0x5c28('0xdf')]={},Scene_Boot[_0x5c28('0x404')][_0x5c28('0x1bb')]=function(){if(DataManager[_0x5c28('0x197')]()||DataManager['isEventTest']())return;const _0x4e7cf0=VisuMZ[_0x5c28('0x3e9')]['Settings'][_0x5c28('0x124')],_0x26cc46=_0x4e7cf0[_0x5c28('0x233')]['slice'](0x0);for(const _0x3fa1ab of _0x4e7cf0['List']){_0x3fa1ab[_0x5c28('0xfb')]=_0x3fa1ab['Name'][_0x5c28('0x248')]()[_0x5c28('0x263')](),VisuMZ[_0x5c28('0xdf')][_0x3fa1ab[_0x5c28('0xfb')]]=_0x3fa1ab;if(!_0x26cc46[_0x5c28('0x369')](_0x3fa1ab['MapID']))_0x26cc46['push'](_0x3fa1ab[_0x5c28('0x2ad')]);}for(const _0x4542f1 of _0x26cc46){if(_0x5c28('0x15e')!==_0x5c28('0x15e')){function _0x170091(){return this[_0x5c28('0x19b')](_0x355fd6);}}else{if(VisuMZ[_0x5c28('0x340')][_0x4542f1])continue;const _0x653f0c=_0x5c28('0xf1')[_0x5c28('0x27f')](_0x4542f1[_0x5c28('0xad')](0x3)),_0x45a54b=_0x5c28('0x278')[_0x5c28('0x27f')](_0x4542f1);DataManager[_0x5c28('0x2fd')](_0x45a54b,_0x653f0c),setTimeout(this[_0x5c28('0x3db')][_0x5c28('0x2ea')](this,_0x4542f1,_0x45a54b),0x64);}}},Scene_Boot['prototype'][_0x5c28('0x3db')]=function(_0x2dce23,_0x2a8a25){window[_0x2a8a25]?(VisuMZ['PreloadedMaps'][_0x2dce23]=window[_0x2a8a25],window[_0x2a8a25]=undefined):setTimeout(this[_0x5c28('0x3db')][_0x5c28('0x2ea')](this,_0x2dce23,_0x2a8a25),0x64);},VisuMZ[_0x5c28('0x159')]=[],VisuMZ[_0x5c28('0x40b')]=[],VisuMZ['AdvancedVariables']=[],VisuMZ['SelfVariables']=[],Scene_Boot[_0x5c28('0x404')][_0x5c28('0x32f')]=function(){for(let _0x387592=0x1;_0x387592<$dataSystem[_0x5c28('0x261')]['length'];_0x387592++){if($dataSystem[_0x5c28('0x261')][_0x387592][_0x5c28('0x23b')](/<JS>\s*([\s\S]*)\s*<\/JS>/i))VisuMZ[_0x5c28('0x159')]['push'](_0x387592);if($dataSystem[_0x5c28('0x261')][_0x387592]['match'](/<SELF>/i))VisuMZ[_0x5c28('0x40b')][_0x5c28('0x22')](_0x387592);}for(let _0x29610a=0x1;_0x29610a<$dataSystem[_0x5c28('0x18')]['length'];_0x29610a++){if($dataSystem['variables'][_0x29610a][_0x5c28('0x23b')](/<JS>\s*([\s\S]*)\s*<\/JS>/i))VisuMZ['AdvancedVariables'][_0x5c28('0x22')](_0x29610a);if($dataSystem['variables'][_0x29610a][_0x5c28('0x23b')](/<SELF>/i))VisuMZ['SelfVariables']['push'](_0x29610a);}},VisuMZ[_0x5c28('0x3e9')][_0x5c28('0x8f')]={},VisuMZ[_0x5c28('0x3e9')][_0x5c28('0x8f')][_0x5c28('0x23')]=function(){this[_0x5c28('0x1d4')]=new Game_CPCInterpreter(),this[_0x5c28('0x3a8')]();},VisuMZ[_0x5c28('0x3e9')]['CustomPageConditions'][_0x5c28('0x3a8')]=function(){this[_0x5c28('0x53')]=[];for(const _0x42982e of $dataCommonEvents){if(_0x5c28('0x150')===_0x5c28('0x150')){if(!_0x42982e)continue;VisuMZ[_0x5c28('0x3e9')][_0x5c28('0x8f')][_0x5c28('0x127')](_0x42982e);if(_0x42982e[_0x5c28('0x2d2')][_0x5c28('0x286')]>0x0)this[_0x5c28('0x53')][_0x5c28('0x22')](_0x42982e['id']);}else{function _0x1b15aa(){_0x107f15=this[_0x5c28('0x190')](_0x42756f,_0x5cfe50);}}}},VisuMZ['EventsMoveCore'][_0x5c28('0x8f')][_0x5c28('0x405')]=function(_0x10951e,_0x3ec63e){return this[_0x5c28('0x1d4')][_0x5c28('0x1b5')](_0x10951e,_0x3ec63e),this[_0x5c28('0x1d4')][_0x5c28('0x309')](),this[_0x5c28('0x1d4')]['_cpc'];},VisuMZ[_0x5c28('0x3e9')][_0x5c28('0x8f')][_0x5c28('0x127')]=function(_0x1f6331){let _0x5af01c=![];_0x1f6331[_0x5c28('0x2d2')]=[];for(const _0x22b298 of _0x1f6331['list']){if([0x6c,0x198][_0x5c28('0x369')](_0x22b298[_0x5c28('0x1a7')])){const _0x445621=_0x22b298[_0x5c28('0x23f')][0x0];if(_0x445621[_0x5c28('0x23b')](/<PAGE (?:CONDITION|CONDITIONS)>/i))_0x5af01c=!![];else _0x445621[_0x5c28('0x23b')](/<\/PAGE (?:CONDITION|CONDITIONS)>/i)&&(_0x5af01c=![]);}if(_0x5af01c){if(_0x5c28('0x3')==='GasxJ')_0x1f6331[_0x5c28('0x2d2')][_0x5c28('0x22')](_0x22b298);else{function _0x18531a(){_0x5e8e85[_0x3d1c40]['f']<_0x2fd0b7[_0x1c4990]['f']&&(_0x5c7e58=_0x4979c7);}}}}},DataManager[_0x5c28('0x3bb')]=function(_0x47d222){if(SceneManager[_0x5c28('0x250')][_0x5c28('0x141')]===Scene_Debug)return![];return VisuMZ['AdvancedSwitches'][_0x5c28('0x369')](_0x47d222);},DataManager[_0x5c28('0x1d7')]=function(_0x2e40be){if(SceneManager['_scene'][_0x5c28('0x141')]===Scene_Debug)return![];return VisuMZ[_0x5c28('0x2d8')][_0x5c28('0x369')](_0x2e40be);},DataManager['isSelfSwitch']=function(_0x890b6b){if(SceneManager[_0x5c28('0x250')][_0x5c28('0x141')]===Scene_Debug)return![];return VisuMZ[_0x5c28('0x40b')][_0x5c28('0x369')](_0x890b6b);},DataManager[_0x5c28('0x2bd')]=function(_0x53e4d0){if(SceneManager[_0x5c28('0x250')][_0x5c28('0x141')]===Scene_Debug)return![];return VisuMZ[_0x5c28('0x408')]['includes'](_0x53e4d0);},VisuMZ[_0x5c28('0x3e9')][_0x5c28('0xfc')]=Game_Temp[_0x5c28('0x404')][_0x5c28('0x28a')],Game_Temp['prototype'][_0x5c28('0x28a')]=function(_0x21672f,_0x528e81){if(this[_0x5c28('0x20e')](_0x21672f,_0x528e81))return;VisuMZ[_0x5c28('0x3e9')][_0x5c28('0xfc')]['call'](this,_0x21672f,_0x528e81);},Game_Temp['prototype'][_0x5c28('0x20e')]=function(_0x51c606,_0x41ab0f){const _0x49c74a=$gameMap[_0x5c28('0x1cd')](_0x51c606,_0x41ab0f);for(const _0x1cf9e4 of _0x49c74a){if(_0x1cf9e4&&_0x1cf9e4[_0x5c28('0x320')]()){if(_0x5c28('0x217')!=='CeBDH')return _0x1cf9e4[_0x5c28('0x12')](),!![];else{function _0x29d46c(){_0x519f98[_0x5c28('0x276')](_0x8ce00d)?this[_0x5c28('0x40')](_0x4f171b,_0x482dfc):_0x479a6f[_0x5c28('0x3e9')][_0x5c28('0xcc')][_0x5c28('0x1c7')](this,_0x1a32b1,_0x4727b4);}}}}return![];},Game_Temp[_0x5c28('0x404')]['setLastPluginCommandInterpreter']=function(_0x5c12b0){this[_0x5c28('0x1f5')]=_0x5c12b0;},Game_Temp[_0x5c28('0x404')][_0x5c28('0x301')]=function(){return this[_0x5c28('0x1f5')];},Game_Temp[_0x5c28('0x404')]['registerSelfTarget']=function(_0x44d4f3){this[_0x5c28('0x99')]=_0x44d4f3;},Game_Temp[_0x5c28('0x404')][_0x5c28('0x73')]=function(){this[_0x5c28('0x99')]=undefined;},Game_Temp[_0x5c28('0x404')][_0x5c28('0x288')]=function(){return this[_0x5c28('0x99')];},VisuMZ[_0x5c28('0x3e9')][_0x5c28('0xc3')]=Game_System[_0x5c28('0x404')]['initialize'],Game_System[_0x5c28('0x404')][_0x5c28('0x23')]=function(){VisuMZ[_0x5c28('0x3e9')]['Game_System_initialize'][_0x5c28('0x1c7')](this),this[_0x5c28('0x1eb')]();},Game_System['prototype'][_0x5c28('0x1eb')]=function(){this[_0x5c28('0x2bc')]={'DashingEnable':!![],'EventAutoMovement':!![],'VisibleEventLabels':!![]},this['_EventIcons']={},this[_0x5c28('0x135')]=[],this[_0x5c28('0x15b')]={},this[_0x5c28('0x1de')]={};},Game_System[_0x5c28('0x404')]['isDashingEnabled']=function(){if(this[_0x5c28('0x2bc')]===undefined)this[_0x5c28('0x1eb')]();if(this['_EventsMoveCoreSettings'][_0x5c28('0x3ea')]===undefined)this['initEventsMoveCore']();return this[_0x5c28('0x2bc')][_0x5c28('0x3ea')];},Game_System['prototype'][_0x5c28('0x26a')]=function(_0x250b59){if(this['_EventsMoveCoreSettings']===undefined)this['initEventsMoveCore']();if(this[_0x5c28('0x2bc')][_0x5c28('0x3ea')]===undefined)this['initEventsMoveCore']();this[_0x5c28('0x2bc')][_0x5c28('0x3ea')]=_0x250b59;},Game_System[_0x5c28('0x404')][_0x5c28('0x4e')]=function(){if(this['_EventsMoveCoreSettings']===undefined)this[_0x5c28('0x1eb')]();if(this[_0x5c28('0x2bc')][_0x5c28('0x244')]===undefined)this[_0x5c28('0x1eb')]();return this[_0x5c28('0x2bc')][_0x5c28('0x244')];},Game_System[_0x5c28('0x404')][_0x5c28('0x361')]=function(_0x50a21d){if(this[_0x5c28('0x2bc')]===undefined)this[_0x5c28('0x1eb')]();if(this[_0x5c28('0x2bc')][_0x5c28('0x244')]===undefined)this[_0x5c28('0x1eb')]();this[_0x5c28('0x2bc')][_0x5c28('0x244')]=_0x50a21d;},Game_System['prototype'][_0x5c28('0xe4')]=function(){if(this[_0x5c28('0x2bc')]===undefined)this[_0x5c28('0x1eb')]();if(this[_0x5c28('0x2bc')][_0x5c28('0x32b')]===undefined)this[_0x5c28('0x1eb')]();return this[_0x5c28('0x2bc')][_0x5c28('0x32b')];},Game_System['prototype'][_0x5c28('0x21e')]=function(_0x1dff1e){if(this[_0x5c28('0x2bc')]===undefined)this[_0x5c28('0x1eb')]();if(this[_0x5c28('0x2bc')][_0x5c28('0x32b')]===undefined)this[_0x5c28('0x1eb')]();this[_0x5c28('0x2bc')][_0x5c28('0x32b')]=_0x1dff1e;},Game_System['prototype'][_0x5c28('0x1a3')]=function(_0x28e3f1){if(this['_EventIcons']===undefined)this['initEventsMoveCore']();if(!_0x28e3f1)return null;if(_0x28e3f1===$gamePlayer){if(_0x5c28('0xde')===_0x5c28('0xde'))return this[_0x5c28('0x5f')]['Player'];else{function _0x329469(){_0x4bb90e[_0x5c28('0x3e7')]=_0xa97b7a;const _0x4340e8=new _0x26fb8f(_0x793af6['mapId'],_0x42467e[_0x5c28('0x18a')]);_0x4faf52['_spawnData']=_0x26d038,this['_spawnedEvents'][_0x5c28('0x22')](_0x4340e8),_0x4340e8[_0x5c28('0x319')](_0x3255b8),this[_0x5c28('0x1d8')]();}}}else{const _0x4a1a77=_0x5c28('0x1c9')[_0x5c28('0x27f')](_0x28e3f1[_0x5c28('0x183')],_0x28e3f1[_0x5c28('0x330')]);return this[_0x5c28('0x5f')][_0x4a1a77];}},Game_System[_0x5c28('0x404')][_0x5c28('0x25b')]=function(_0x21018e,_0x2e0a16,_0x4ab0d8,_0x2345c9,_0x3e387a){if(this[_0x5c28('0x5f')]===undefined)this['initEventsMoveCore']();const _0x3c425e=_0x21018e===$gamePlayer?_0x5c28('0x16e'):_0x5c28('0x1c9')[_0x5c28('0x27f')](_0x21018e[_0x5c28('0x183')],_0x21018e[_0x5c28('0x330')]);this['_EventIcons'][_0x3c425e]={'iconIndex':_0x2e0a16,'bufferX':_0x4ab0d8,'bufferY':_0x2345c9,'blendMode':_0x3e387a};},Game_System[_0x5c28('0x404')]['setEventIconDataKey']=function(_0x54fee5,_0x43e598,_0x175e8e,_0x111966,_0x1fe010,_0x24f4ac){if(this[_0x5c28('0x5f')]===undefined)this[_0x5c28('0x1eb')]();const _0x2e29bc='Map%1-Event%2'[_0x5c28('0x27f')](_0x54fee5,_0x43e598);this[_0x5c28('0x5f')][_0x2e29bc]={'iconIndex':_0x175e8e,'bufferX':_0x111966,'bufferY':_0x1fe010,'blendMode':_0x24f4ac};},Game_System['prototype'][_0x5c28('0x399')]=function(_0x12f2a6){if(this['_EventIcons']===undefined)this[_0x5c28('0x1eb')]();if(!_0x12f2a6)return null;_0x12f2a6===$gamePlayer?delete this[_0x5c28('0x5f')][_0x5c28('0x16e')]:this[_0x5c28('0x3e6')](_0x12f2a6[_0x5c28('0x183')],_0x12f2a6[_0x5c28('0x330')]);},Game_System[_0x5c28('0x404')][_0x5c28('0x3e6')]=function(_0x7fa9a7,_0x2e74f8){if(this['_EventIcons']===undefined)this['initEventsMoveCore']();const _0x2e8b93=_0x5c28('0x1c9')[_0x5c28('0x27f')](_0x7fa9a7,_0x2e74f8);delete this[_0x5c28('0x5f')][_0x2e8b93];},Game_System[_0x5c28('0x404')][_0x5c28('0x205')]=function(_0x39051c){if(this[_0x5c28('0x1de')]===undefined)this['initEventsMoveCore']();if(!_0x39051c)return null;const _0x2c5508=_0x5c28('0x1c9')['format'](_0x39051c['_mapId'],_0x39051c['_eventId']);return this[_0x5c28('0x1de')][_0x2c5508];},Game_System[_0x5c28('0x404')][_0x5c28('0x22f')]=function(_0x48770c){if(this[_0x5c28('0x1de')]===undefined)this[_0x5c28('0x1eb')]();if(!_0x48770c)return;const _0x395e23='Map%1-Event%2'['format'](_0x48770c[_0x5c28('0x183')],_0x48770c[_0x5c28('0x330')]);this['_SavedEventLocations'][_0x395e23]={'direction':_0x48770c[_0x5c28('0x81')](),'x':Math[_0x5c28('0x203')](_0x48770c['x']),'y':Math['round'](_0x48770c['y']),'pageIndex':_0x48770c[_0x5c28('0x2fa')],'moveRouteIndex':_0x48770c[_0x5c28('0x1ee')]};},Game_System[_0x5c28('0x404')][_0x5c28('0x219')]=function(_0x22a1fe){if(this[_0x5c28('0x1de')]===undefined)this['initEventsMoveCore']();if(!_0x22a1fe)return;this[_0x5c28('0x36a')](_0x22a1fe[_0x5c28('0x183')],_0x22a1fe['_eventId']);},Game_System[_0x5c28('0x404')][_0x5c28('0x36a')]=function(_0x3e485e,_0x1c5026){if(this[_0x5c28('0x1de')]===undefined)this[_0x5c28('0x1eb')]();const _0x21e863=_0x5c28('0x1c9')[_0x5c28('0x27f')](_0x3e485e,_0x1c5026);delete this[_0x5c28('0x1de')][_0x21e863];},Game_System[_0x5c28('0x404')][_0x5c28('0x26e')]=function(_0x112762,_0x40955e,_0x366b85,_0x1866c4,_0x747a43,_0x2d3d99,_0x4914bf){if(this[_0x5c28('0x1de')]===undefined)this[_0x5c28('0x1eb')]();const _0x5b3d24=_0x5c28('0x1c9')[_0x5c28('0x27f')](_0x112762,_0x40955e);this[_0x5c28('0x1de')][_0x5b3d24]={'direction':_0x747a43,'x':Math[_0x5c28('0x203')](_0x366b85),'y':Math[_0x5c28('0x203')](_0x1866c4),'pageIndex':_0x2d3d99,'moveRouteIndex':_0x4914bf};},Game_System[_0x5c28('0x404')]['getPreservedMorphEventData']=function(_0x1bc810){if(this[_0x5c28('0x15b')]===undefined)this['initEventsMoveCore']();if(!_0x1bc810)return;const _0x260fd2=_0x5c28('0x1c9')[_0x5c28('0x27f')](_0x1bc810[_0x5c28('0x183')],_0x1bc810[_0x5c28('0x330')]);return this[_0x5c28('0x15b')][_0x260fd2];},Game_System['prototype'][_0x5c28('0xec')]=function(_0x23c760,_0xaaf864,_0x35e87f,_0x35528c,_0x32780c){if(this[_0x5c28('0x15b')]===undefined)this[_0x5c28('0x1eb')]();const _0x4c1dcc='Map%1-Event%2'[_0x5c28('0x27f')](_0x23c760,_0xaaf864);this[_0x5c28('0x15b')][_0x4c1dcc]={'template':_0x35e87f,'mapId':_0x35528c,'eventId':_0x32780c};},Game_System['prototype'][_0x5c28('0x10c')]=function(_0x191a67,_0x2999be){if(this[_0x5c28('0x15b')]===undefined)this['initEventsMoveCore']();const _0x4af270='Map%1-Event%2'[_0x5c28('0x27f')](_0x191a67,_0x2999be);delete this[_0x5c28('0x15b')][_0x4af270];},Game_System[_0x5c28('0x404')][_0x5c28('0x2ca')]=function(_0x2e8715){if(this[_0x5c28('0x135')]===undefined)this['initEventsMoveCore']();return this[_0x5c28('0x135')][_0x2e8715]=this[_0x5c28('0x135')][_0x2e8715]||[],this[_0x5c28('0x135')][_0x2e8715];},Game_System[_0x5c28('0x404')][_0x5c28('0x188')]=function(_0x213059){const _0xd219bf=this[_0x5c28('0x2ca')](_0x213059);for(const _0x4a0560 of _0xd219bf){if(!_0x4a0560)continue;if(_0x4a0560[_0x5c28('0x104')])continue;const _0x33e48f=_0xd219bf[_0x5c28('0x2c0')](_0x4a0560);_0xd219bf[_0x33e48f]=null;}},VisuMZ[_0x5c28('0x3e9')][_0x5c28('0x41a')]=Game_Message['prototype'][_0x5c28('0x3a3')],Game_Message[_0x5c28('0x404')]['add']=function(_0x575763){VisuMZ[_0x5c28('0x3e9')][_0x5c28('0x41a')][_0x5c28('0x1c7')](this,_0x575763),this[_0x5c28('0x24d')]=$gameTemp[_0x5c28('0x288')]();},Game_Message[_0x5c28('0x404')][_0x5c28('0x214')]=function(){$gameTemp[_0x5c28('0x3f2')](this[_0x5c28('0x24d')]);},VisuMZ['EventsMoveCore'][_0x5c28('0x131')]=Game_Switches[_0x5c28('0x404')][_0x5c28('0x38')],Game_Switches[_0x5c28('0x404')][_0x5c28('0x38')]=function(_0x3709d3){if(DataManager[_0x5c28('0x3bb')](_0x3709d3)){if(_0x5c28('0x8')!==_0x5c28('0x8')){function _0x56aa6a(){this[_0x5c28('0x2fc')]=!![];return;}}else return!!this[_0x5c28('0x1e1')](_0x3709d3);}else{if(DataManager['isSelfSwitch'](_0x3709d3))return!!this[_0x5c28('0x2dd')](_0x3709d3);else{if(_0x5c28('0xb2')==='nfrym'){function _0x5ea069(){_0xd36bfe[_0x5c28('0xec')](_0x5243d6[_0x5c28('0x2e9')],_0x490138[_0x5c28('0x34b')],_0x525bbf[_0x5c28('0x160')],_0x303faa['Step2MapId'],_0x1f345e[_0x5c28('0x282')]);}}else return VisuMZ[_0x5c28('0x3e9')][_0x5c28('0x131')][_0x5c28('0x1c7')](this,_0x3709d3);}}},Game_Switches[_0x5c28('0x29c')]={},Game_Switches[_0x5c28('0x404')][_0x5c28('0x1e1')]=function(_0x30eed1){if(!Game_Switches[_0x5c28('0x29c')][_0x30eed1]){$dataSystem[_0x5c28('0x261')][_0x30eed1][_0x5c28('0x23b')](/<JS>\s*([\s\S]*)\s*<\/JS>/i);const _0x57b815=_0x5c28('0x15f')[_0x5c28('0x27f')](String(RegExp['$1']));Game_Switches['advancedFunc'][_0x30eed1]=new Function(_0x5c28('0x194'),_0x57b815);}const _0x130100=$gameTemp[_0x5c28('0x288')]()||this;return Game_Switches['advancedFunc'][_0x30eed1][_0x5c28('0x1c7')](_0x130100,_0x30eed1);},Game_Switches['prototype'][_0x5c28('0x2dd')]=function(_0x30a7b4){const _0x588bd7=$gameTemp['getSelfTarget']()||this;if(_0x588bd7[_0x5c28('0x141')]!==Game_Event)return VisuMZ[_0x5c28('0x3e9')][_0x5c28('0x131')][_0x5c28('0x1c7')](this,_0x30a7b4);else{const _0x12b1f6=[_0x588bd7[_0x5c28('0x183')],_0x588bd7['_eventId'],_0x5c28('0x1d3')[_0x5c28('0x27f')](_0x30a7b4)];return $gameSelfSwitches[_0x5c28('0x38')](_0x12b1f6);}},VisuMZ[_0x5c28('0x3e9')][_0x5c28('0xcc')]=Game_Switches[_0x5c28('0x404')][_0x5c28('0x381')],Game_Switches[_0x5c28('0x404')][_0x5c28('0x381')]=function(_0x3d4cc5,_0x36e52b){DataManager['isSelfSwitch'](_0x3d4cc5)?this[_0x5c28('0x40')](_0x3d4cc5,_0x36e52b):VisuMZ[_0x5c28('0x3e9')][_0x5c28('0xcc')][_0x5c28('0x1c7')](this,_0x3d4cc5,_0x36e52b);},Game_Switches[_0x5c28('0x404')][_0x5c28('0x40')]=function(_0x33627e,_0xbf2720){const _0xf3674b=$gameTemp['getSelfTarget']()||this;if(_0xf3674b[_0x5c28('0x141')]!==Game_Event)VisuMZ[_0x5c28('0x3e9')][_0x5c28('0xcc')][_0x5c28('0x1c7')](this,_0x33627e,_0xbf2720);else{if(_0x5c28('0x7b')===_0x5c28('0x3e3')){function _0x4e7ac1(){this['_activationProximityAutoTriggerBypass']=!![],_0x495764[_0x5c28('0x3e9')]['Game_Event_setupPageSettings'][_0x5c28('0x1c7')](this),this[_0x5c28('0x2b4')](),this[_0x5c28('0x1c5')]=![];}}else{const _0x1541de=[_0xf3674b[_0x5c28('0x183')],_0xf3674b['_eventId'],'SELF\x20SWITCH\x20%1'['format'](_0x33627e)];$gameSelfSwitches['setValue'](_0x1541de,_0xbf2720);}}},VisuMZ['EventsMoveCore'][_0x5c28('0x2a1')]=Game_Variables[_0x5c28('0x404')][_0x5c28('0x38')],Game_Variables[_0x5c28('0x404')][_0x5c28('0x38')]=function(_0xb5a2be){if(DataManager[_0x5c28('0x1d7')](_0xb5a2be)){if(_0x5c28('0x354')===_0x5c28('0x2b0')){function _0x570bcf(){if(this[_0x5c28('0x2bc')]===_0x286e84)this[_0x5c28('0x1eb')]();if(this[_0x5c28('0x2bc')][_0x5c28('0x3ea')]===_0x2d40a3)this[_0x5c28('0x1eb')]();this[_0x5c28('0x2bc')][_0x5c28('0x3ea')]=_0x2e2f9c;}}else return this[_0x5c28('0x1e1')](_0xb5a2be);}else{if(DataManager[_0x5c28('0x2bd')](_0xb5a2be))return this['selfValue'](_0xb5a2be);else{if(_0x5c28('0x5b')===_0x5c28('0x5b'))return VisuMZ[_0x5c28('0x3e9')]['Game_Variables_value']['call'](this,_0xb5a2be);else{function _0x34ed65(){if(_0x52568d===0x0||_0x41c1b1===0x0)return![];if(!_0x42755f['PreloadedMaps'][_0x181a6a])return _0x10a86f[_0x5c28('0xbe')]()&&_0x125283[_0x5c28('0x3d9')](_0x5c28('0x3ca')[_0x5c28('0x27f')](_0x1cb959)),![];return!![];}}}}},Game_Variables['advancedFunc']={},Game_Variables[_0x5c28('0x404')]['advancedValue']=function(_0x501a2c){if(!Game_Variables[_0x5c28('0x29c')][_0x501a2c]){$dataSystem['variables'][_0x501a2c][_0x5c28('0x23b')](/<JS>\s*([\s\S]*)\s*<\/JS>/i);const _0x412764=_0x5c28('0x15f')[_0x5c28('0x27f')](String(RegExp['$1']));Game_Variables[_0x5c28('0x29c')][_0x501a2c]=new Function(_0x5c28('0x1b8'),_0x412764);}const _0x325d8c=$gameTemp[_0x5c28('0x288')]()||this;return Game_Variables[_0x5c28('0x29c')][_0x501a2c][_0x5c28('0x1c7')](_0x325d8c,_0x501a2c);},Game_Variables[_0x5c28('0x404')][_0x5c28('0x2dd')]=function(_0x6fbf3c){const _0x3b6ac2=$gameTemp['getSelfTarget']()||this;if(_0x3b6ac2[_0x5c28('0x141')]!==Game_Event){if(_0x5c28('0x1e3')===_0x5c28('0x2eb')){function _0x3375b3(){if(this[_0x5c28('0x1de')]===_0x23159a)this[_0x5c28('0x1eb')]();if(!_0x45b81a)return;const _0xd7ed44=_0x5c28('0x1c9')['format'](_0x3244dc[_0x5c28('0x183')],_0x16805c[_0x5c28('0x330')]);this[_0x5c28('0x1de')][_0xd7ed44]={'direction':_0x10efd3[_0x5c28('0x81')](),'x':_0x2cf265[_0x5c28('0x203')](_0x31146b['x']),'y':_0x16e2f6['round'](_0x5926ab['y']),'pageIndex':_0x4389f6[_0x5c28('0x2fa')],'moveRouteIndex':_0x95bb9e['_moveRouteIndex']};}}else return VisuMZ[_0x5c28('0x3e9')][_0x5c28('0x2a1')][_0x5c28('0x1c7')](this,_0x6fbf3c);}else{const _0x3b0e41=[_0x3b6ac2['_mapId'],_0x3b6ac2[_0x5c28('0x330')],'SELF\x20VARIABLE\x20%1'['format'](_0x6fbf3c)];return $gameSelfSwitches[_0x5c28('0x38')](_0x3b0e41);}},VisuMZ['EventsMoveCore'][_0x5c28('0x13d')]=Game_Variables[_0x5c28('0x404')][_0x5c28('0x381')],Game_Variables[_0x5c28('0x404')][_0x5c28('0x381')]=function(_0x436c5b,_0x391abc){if(DataManager[_0x5c28('0x2bd')](_0x436c5b))this[_0x5c28('0x40')](_0x436c5b,_0x391abc);else{if(_0x5c28('0x1b9')!==_0x5c28('0x31f'))VisuMZ[_0x5c28('0x3e9')]['Game_Variables_setValue']['call'](this,_0x436c5b,_0x391abc);else{function _0x44ba21(){if(_0x2eab96['_scene'][_0x5c28('0x141')]===_0x5e9f5f)return![];return _0x53f0ac['SelfVariables'][_0x5c28('0x369')](_0x41588e);}}}},Game_Variables[_0x5c28('0x404')][_0x5c28('0x40')]=function(_0x121d08,_0x396187){const _0x243955=$gameTemp[_0x5c28('0x288')]()||this;if(_0x243955[_0x5c28('0x141')]!==Game_Event)VisuMZ[_0x5c28('0x3e9')]['Game_Variables_setValue'][_0x5c28('0x1c7')](this,_0x121d08,_0x396187);else{const _0x8fe827=[_0x243955[_0x5c28('0x183')],_0x243955[_0x5c28('0x330')],_0x5c28('0x29d')[_0x5c28('0x27f')](_0x121d08)];$gameSelfSwitches[_0x5c28('0x381')](_0x8fe827,_0x396187);}},VisuMZ[_0x5c28('0x3e9')][_0x5c28('0x218')]=Game_SelfSwitches['prototype'][_0x5c28('0x38')],Game_SelfSwitches[_0x5c28('0x404')][_0x5c28('0x38')]=function(_0x129175){if(_0x129175[0x2][_0x5c28('0x23b')](/SELF/i)){if('VSQxj'===_0x5c28('0x100'))return this['selfValue'](_0x129175);else{function _0x32a386(){if(!_0x3ec76a[_0x5c28('0x29c')][_0x30c14b]){_0x3b43ab[_0x5c28('0x261')][_0x3ab049][_0x5c28('0x23b')](/<JS>\s*([\s\S]*)\s*<\/JS>/i);const _0x21b70b=_0x5c28('0x15f')[_0x5c28('0x27f')](_0x3024df(_0x1ef530['$1']));_0x664563[_0x5c28('0x29c')][_0x3329bd]=new _0x564a1f(_0x5c28('0x194'),_0x21b70b);}const _0x1e439f=_0x195bd3['getSelfTarget']()||this;return _0x3755ff['advancedFunc'][_0x2fb29f]['call'](_0x1e439f,_0x126f04);}}}else{return VisuMZ[_0x5c28('0x3e9')][_0x5c28('0x218')][_0x5c28('0x1c7')](this,_0x129175);;}},Game_SelfSwitches[_0x5c28('0x404')]['selfValue']=function(_0x5a9d3a){return _0x5a9d3a[0x2][_0x5c28('0x23b')](/VAR/i)?this[_0x5c28('0x225')][_0x5a9d3a]||0x0:!!this['_data'][_0x5a9d3a];},VisuMZ[_0x5c28('0x3e9')][_0x5c28('0x16d')]=Game_SelfSwitches[_0x5c28('0x404')][_0x5c28('0x381')],Game_SelfSwitches[_0x5c28('0x404')][_0x5c28('0x381')]=function(_0x24f1c7,_0x4e8cdd){if(_0x24f1c7[0x2]['match'](/SELF/i))this['setSelfValue'](_0x24f1c7,_0x4e8cdd);else{if(_0x5c28('0x339')!==_0x5c28('0xa9'))VisuMZ[_0x5c28('0x3e9')][_0x5c28('0x16d')][_0x5c28('0x1c7')](this,_0x24f1c7,_0x4e8cdd);else{function _0x53f5f1(){return _0x13abdd['EventsMoveCore'][_0x5c28('0x218')][_0x5c28('0x1c7')](this,_0x1171b0);;}}}},Game_SelfSwitches[_0x5c28('0x404')]['setSelfValue']=function(_0x38b031,_0x38acf7){this[_0x5c28('0x225')][_0x38b031]=_0x38b031[0x2]['match'](/VAR/i)?_0x38acf7:!!_0x38acf7,this[_0x5c28('0x115')]();},VisuMZ[_0x5c28('0x3e9')][_0x5c28('0x111')]=Game_Enemy[_0x5c28('0x404')][_0x5c28('0x2e8')],Game_Enemy[_0x5c28('0x404')][_0x5c28('0x2e8')]=function(_0x132ed5){$gameTemp[_0x5c28('0x3f2')](this);const _0x13efff=VisuMZ[_0x5c28('0x3e9')][_0x5c28('0x111')][_0x5c28('0x1c7')](this,_0x132ed5);return $gameTemp[_0x5c28('0x73')](),_0x13efff;},VisuMZ[_0x5c28('0x3e9')][_0x5c28('0x19e')]=Game_Troop[_0x5c28('0x404')][_0x5c28('0x2a6')],Game_Troop[_0x5c28('0x404')]['meetsConditions']=function(_0x23f760){$gameTemp[_0x5c28('0x3f2')](this);const _0x17dee8=VisuMZ[_0x5c28('0x3e9')]['Game_Troop_meetsConditions'][_0x5c28('0x1c7')](this,_0x23f760);return $gameTemp[_0x5c28('0x73')](),_0x17dee8;},VisuMZ[_0x5c28('0x3e9')][_0x5c28('0x1b6')]=Game_Map[_0x5c28('0x404')][_0x5c28('0x1b5')],Game_Map[_0x5c28('0x404')][_0x5c28('0x1b5')]=function(_0x5a3c75){this[_0x5c28('0x188')](_0x5a3c75),VisuMZ[_0x5c28('0x3e9')][_0x5c28('0x1b6')][_0x5c28('0x1c7')](this,_0x5a3c75),this[_0x5c28('0x1d8')](),this['determineEventOverload'](),this[_0x5c28('0xf8')](),this[_0x5c28('0x3c0')](),this[_0x5c28('0xc7')](),this[_0x5c28('0x18d')]();},VisuMZ[_0x5c28('0x3e9')][_0x5c28('0x345')]=Game_Map[_0x5c28('0x404')][_0x5c28('0x2a4')],Game_Map['prototype']['setupEvents']=function(){VisuMZ[_0x5c28('0x3e9')][_0x5c28('0x345')][_0x5c28('0x1c7')](this),this['refreshIfNeeded']();},Game_Map[_0x5c28('0x9a')]=0xc8,Game_Map[_0x5c28('0x404')][_0x5c28('0x3cb')]=function(){const _0x3f5144=Game_Map['_eventOverloadThreshold'];this[_0x5c28('0x98')]=this['events']()[_0x5c28('0x286')]>_0x3f5144;if(this[_0x5c28('0x98')]&&$gameTemp[_0x5c28('0xbe')]()){}},Game_Map[_0x5c28('0x404')][_0x5c28('0x2a')]=function(){return this[_0x5c28('0x98')];},Game_Map[_0x5c28('0x404')]['clearEventCache']=function(){this[_0x5c28('0x312')]=undefined;},Game_Map[_0x5c28('0x404')][_0x5c28('0xf8')]=function(){this[_0x5c28('0x22b')]=VisuMZ['EventsMoveCore'][_0x5c28('0x376')]['Movement'][_0x5c28('0x2ce')];const _0x3dd70f=$dataMap[_0x5c28('0x108')]||'';if(_0x3dd70f[_0x5c28('0x23b')](/<DIAGONAL MOVEMENT: ON>/i))this['_diagonalSupport']=!![];if(_0x3dd70f[_0x5c28('0x23b')](/<DIAGONAL MOVEMENT: OFF>/i))this[_0x5c28('0x22b')]=!![];},Game_Map[_0x5c28('0x404')]['isSupportDiagonalMovement']=function(){if(this[_0x5c28('0x22b')]===undefined)this[_0x5c28('0xf8')]();return this[_0x5c28('0x22b')];},Game_Map[_0x5c28('0x404')]['roundXWithDirection']=function(_0x562c24,_0x21ab6c){if([0x1,0x4,0x7][_0x5c28('0x369')](_0x21ab6c))_0x562c24-=0x1;if([0x3,0x6,0x9][_0x5c28('0x369')](_0x21ab6c))_0x562c24+=0x1;return this['roundX'](_0x562c24);},Game_Map[_0x5c28('0x404')][_0x5c28('0x3ab')]=function(_0x585578,_0x545a2b){if([0x1,0x2,0x3][_0x5c28('0x369')](_0x545a2b))_0x585578+=0x1;if([0x7,0x8,0x9][_0x5c28('0x369')](_0x545a2b))_0x585578-=0x1;return this[_0x5c28('0x3b2')](_0x585578);},Game_Map[_0x5c28('0x404')][_0x5c28('0x227')]=function(_0x4d890d,_0x1f5bc9,_0xd93e8c,_0x52fb22){return Math[_0x5c28('0x3f6')](Math[_0x5c28('0x10')](this['deltaX'](_0x4d890d,_0xd93e8c)),Math[_0x5c28('0x10')](this[_0x5c28('0x1f8')](_0x1f5bc9,_0x52fb22)));},Game_Map[_0x5c28('0x404')][_0x5c28('0x3c0')]=function(){const _0x16b9ad=VisuMZ[_0x5c28('0x3e9')][_0x5c28('0x376')][_0x5c28('0x175')],_0x6df4d9={},_0x12bc1a=['Allow',_0x5c28('0x3a9'),_0x5c28('0xf3')],_0x399382=[_0x5c28('0x39b'),'Walk',_0x5c28('0x16e'),_0x5c28('0x12a'),_0x5c28('0x1a5'),'Boat',_0x5c28('0x2'),'Airship'];for(const _0x35891c of _0x12bc1a){if('ddlGd'===_0x5c28('0x140'))for(const _0x22316a of _0x399382){if(_0x5c28('0x102')===_0x5c28('0xe0')){function _0x28085a(){return this[_0x5c28('0x246')];}}else{const _0x406cf4=_0x5c28('0x4c')[_0x5c28('0x27f')](_0x22316a,_0x35891c);_0x16b9ad[_0x406cf4]&&(_0x6df4d9[_0x406cf4]=_0x16b9ad[_0x406cf4][_0x5c28('0x3c8')](0x0));}}else{function _0x15e323(){this[_0x5c28('0x272')][_0x5c28('0x1f0')]=_0x463e46(_0x48a0dc['$1'])['trim']();}}}const _0x351d7f=$dataMap[_0x5c28('0x108')]||'',_0x4875a1=_0x351d7f['match'](/<(.*) (.*) REGION:[ ]*(\d+(?:\s*,\s*\d+)*)>/i);if(_0x4875a1)for(const _0xe42dcb of _0x4875a1){_0xe42dcb[_0x5c28('0x23b')](/<(.*) (.*) REGION:[ ]*(\d+(?:\s*,\s*\d+)*)>/i);let _0x41de12=String(RegExp['$1'])[_0x5c28('0xf6')]()[_0x5c28('0x263')](),_0x40cd4f=String(RegExp['$1'])[_0x5c28('0xf6')]()[_0x5c28('0x263')]();const _0x8388b8=JSON[_0x5c28('0x403')]('['+RegExp['$3'][_0x5c28('0x23b')](/\d+/g)+']');_0x41de12=_0x41de12[_0x5c28('0x269')](0x0)[_0x5c28('0x248')]()+_0x41de12[_0x5c28('0x3c8')](0x1),_0x40cd4f=_0x40cd4f[_0x5c28('0x269')](0x0)[_0x5c28('0x248')]()+_0x40cd4f[_0x5c28('0x3c8')](0x1);const _0x1699c1=_0x5c28('0x4c')[_0x5c28('0x27f')](_0x41de12,_0x40cd4f);if(_0x6df4d9[_0x1699c1])_0x6df4d9[_0x1699c1]=_0x6df4d9[_0x1699c1][_0x5c28('0x171')](_0x8388b8);}this['_regionRules']=_0x6df4d9;},Game_Map[_0x5c28('0x404')][_0x5c28('0xb0')]=function(_0x158516,_0x206ed6,_0x536f7f,_0x3aa201){const _0x1dd2a3=this[_0x5c28('0x1ef')](_0x158516,_0x536f7f),_0x1a14cd=this[_0x5c28('0x3ab')](_0x206ed6,_0x536f7f),_0x225622=this['regionId'](_0x1dd2a3,_0x1a14cd),_0x4526ec=this[_0x5c28('0x39c')];if(_0x4526ec[_0x5c28('0x308')][_0x5c28('0x369')](_0x225622))return!![];else{if(_0x3aa201===_0x5c28('0x103'))return _0x4526ec[_0x5c28('0x2d5')]['includes'](_0x225622)||_0x4526ec[_0x5c28('0xd8')][_0x5c28('0x369')](_0x225622);else{if(_0x3aa201===_0x5c28('0x37a'))return _0x4526ec[_0x5c28('0x31d')][_0x5c28('0x369')](_0x225622)||_0x4526ec[_0x5c28('0xd8')][_0x5c28('0x369')](_0x225622);else{if(_0x4526ec[_0x5c28('0x10e')][_0x5c28('0x369')](_0x225622)){if(_0x5c28('0x155')===_0x5c28('0x116')){function _0x38f819(){return _0x5e9326>0x0?0x8:0x2;}}else return!![];}else{const _0x435ea9=_0x5c28('0x12f')['format'](_0x3aa201['charAt'](0x0)[_0x5c28('0x248')]()+_0x3aa201[_0x5c28('0x3c8')](0x1));if(_0x4526ec[_0x435ea9])return _0x4526ec[_0x435ea9]['includes'](_0x225622);}}}}return![];},Game_Map[_0x5c28('0x404')][_0x5c28('0x332')]=function(_0x4501c2,_0x459792,_0xb0b85,_0x2e49a5){const _0x36bae0=this[_0x5c28('0x1ef')](_0x4501c2,_0xb0b85),_0x5ebacb=this[_0x5c28('0x3ab')](_0x459792,_0xb0b85),_0x270ec6=this[_0x5c28('0x64')](_0x36bae0,_0x5ebacb),_0x5e51ac=this[_0x5c28('0x39c')];if(_0x5e51ac[_0x5c28('0x1d6')][_0x5c28('0x369')](_0x270ec6)){if(_0x5c28('0x235')===_0x5c28('0x235'))return!![];else{function _0x52fc01(){return _0x267c92>0x0?0x2:0x8;}}}else{if(_0x2e49a5===_0x5c28('0x103')){if(_0x5c28('0xba')==='mHyYA'){function _0x18889d(){_0x2deb3d[_0x5c28('0x3e9')][_0x5c28('0x13c')][_0x5c28('0x1c7')](this),this[_0x5c28('0x310')]();}}else return _0x5e51ac['PlayerForbid'][_0x5c28('0x369')](_0x270ec6)||_0x5e51ac[_0x5c28('0xe3')][_0x5c28('0x369')](_0x270ec6);}else{if(_0x2e49a5==='event'){if(_0x5c28('0x335')!==_0x5c28('0x335')){function _0x46b803(){const _0x20c60b=_0x6e9234(_0x126c95['$1']);if(_0x20c60b[_0x5c28('0x23b')](/PLAYER/i))this[_0x5c28('0x382')][_0x5c28('0x368')]=0x0;else _0x20c60b['match'](/EVENT[ ](\d+)/i)&&(this[_0x5c28('0x382')][_0x5c28('0x368')]=_0x4352eb(_0x379ecb['$1']));}}else return _0x5e51ac[_0x5c28('0x383')][_0x5c28('0x369')](_0x270ec6)||_0x5e51ac[_0x5c28('0xe3')][_0x5c28('0x369')](_0x270ec6);}else{if(_0x5e51ac[_0x5c28('0x284')][_0x5c28('0x369')](_0x270ec6)){if(_0x5c28('0x363')!==_0x5c28('0x363')){function _0x11036a(){return _0x40a7e7[_0x5c28('0x3e9')]['Game_Player_getInputDirection'][_0x5c28('0x1c7')](this);}}else return!![];}else{const _0x4010ac=_0x5c28('0x1f1')['format'](_0x2e49a5['charAt'](0x0)[_0x5c28('0x248')]()+_0x2e49a5[_0x5c28('0x3c8')](0x1));if(_0x5e51ac[_0x4010ac])return _0x5e51ac[_0x4010ac][_0x5c28('0x369')](_0x270ec6);}}}}return![];},Game_Map[_0x5c28('0x404')]['isRegionDockable']=function(_0xa71c4f,_0x2ca0ec,_0x47c616,_0x41a3e5){_0x47c616=_0x41a3e5===_0x5c28('0x186')?0x5:_0x47c616;const _0x1a6417=this[_0x5c28('0x1ef')](_0xa71c4f,_0x47c616),_0x48e99c=this[_0x5c28('0x3ab')](_0x2ca0ec,_0x47c616),_0x5a0202=this[_0x5c28('0x64')](_0x1a6417,_0x48e99c),_0x49da49=this[_0x5c28('0x39c')];if(_0x49da49['VehicleDock']['includes'](_0x5a0202))return!![];else{const _0x223242=_0x5c28('0x249')[_0x5c28('0x27f')](_0x41a3e5[_0x5c28('0x269')](0x0)['toUpperCase']()+_0x41a3e5['slice'](0x1));if(_0x49da49[_0x223242])return _0x49da49[_0x223242][_0x5c28('0x369')](_0x5a0202);}return![];},VisuMZ['EventsMoveCore'][_0x5c28('0x13c')]=Game_Map[_0x5c28('0x404')][_0x5c28('0x389')],Game_Map[_0x5c28('0x404')][_0x5c28('0x389')]=function(){VisuMZ[_0x5c28('0x3e9')][_0x5c28('0x13c')][_0x5c28('0x1c7')](this),this[_0x5c28('0x310')]();},Game_Map[_0x5c28('0x404')][_0x5c28('0x310')]=function(){this[_0x5c28('0x2fc')]=![];if(this[_0x5c28('0x1dc')]()[_0x5c28('0x2ef')](_0x47e9a3=>_0x47e9a3[_0x5c28('0x1c')]())){this[_0x5c28('0x2fc')]=!![];return;}if(this['events']()[_0x5c28('0x2ef')](_0x55b2d2=>_0x55b2d2[_0x5c28('0x35c')]())){this[_0x5c28('0x2fc')]=!![];return;}if(this[_0x5c28('0x53')][_0x5c28('0x2ef')](_0x3d63eb=>_0x3d63eb[_0x5c28('0x1c')]())){if(_0x5c28('0x418')===_0x5c28('0x418')){this[_0x5c28('0x2fc')]=!![];return;}else{function _0x242cb6(){this[_0x5c28('0x38d')]();}}}if(this[_0x5c28('0x53')][_0x5c28('0x2ef')](_0x168c64=>_0x168c64[_0x5c28('0x35c')]())){if('lLobO'!==_0x5c28('0x24b')){this['_needsPeriodicRefresh']=!![];return;}else{function _0x1f3953(){_0x38950c[_0x5c28('0x3e9')][_0x5c28('0x7d')]['call'](this,_0x459e33);}}}},VisuMZ[_0x5c28('0x3e9')][_0x5c28('0x20a')]=Game_Map[_0x5c28('0x404')][_0x5c28('0x18f')],Game_Map[_0x5c28('0x404')]['update']=function(_0x17ac45){this[_0x5c28('0xc6')](),VisuMZ[_0x5c28('0x3e9')]['Game_Map_update'][_0x5c28('0x1c7')](this,_0x17ac45);},Game_Map['prototype'][_0x5c28('0xc6')]=function(){if(!this[_0x5c28('0x2fc')])return;this[_0x5c28('0x41d')]=this[_0x5c28('0x41d')]||0x3c,this['_periodicRefreshTimer']--,this[_0x5c28('0x41d')]<=0x0&&(this[_0x5c28('0x1aa')](),this[_0x5c28('0x41d')]=0x3c);},VisuMZ['EventsMoveCore'][_0x5c28('0x49')]=Game_Map[_0x5c28('0x404')][_0x5c28('0x300')],Game_Map[_0x5c28('0x404')][_0x5c28('0x300')]=function(){if(!$gameSystem[_0x5c28('0x24c')]())return!![];return VisuMZ[_0x5c28('0x3e9')][_0x5c28('0x49')][_0x5c28('0x1c7')](this);},Game_Map[_0x5c28('0x404')][_0x5c28('0xc7')]=function(){this[_0x5c28('0xa0')]=![];const _0x50b5cc=$dataMap[_0x5c28('0x108')]||'';_0x50b5cc['match'](/<SAVE EVENT (?:LOCATION|LOCATIONS)>/i)&&(this[_0x5c28('0xa0')]=!![]);},Game_Map['prototype'][_0x5c28('0x35a')]=function(){if(this[_0x5c28('0xa0')]===undefined)this[_0x5c28('0xc7')]();return this[_0x5c28('0xa0')];},Game_Map[_0x5c28('0x404')]['removeTemporaryMapSpawnedEvents']=function(_0xfecc3e){_0xfecc3e!==this[_0x5c28('0x32e')]()&&$gamePlayer&&$gameSystem[_0x5c28('0x188')](_0xfecc3e);},Game_Map['prototype'][_0x5c28('0x18d')]=function(){this[_0x5c28('0x89')]=$gameSystem[_0x5c28('0x2ca')](this['mapId']()),this['_needsRefresh']=!![];},VisuMZ[_0x5c28('0x3e9')][_0x5c28('0x3a1')]=Game_Map[_0x5c28('0x404')]['events'],Game_Map[_0x5c28('0x404')]['events']=function(){if(this['_eventCache'])return this[_0x5c28('0x312')];const _0x572895=VisuMZ[_0x5c28('0x3e9')][_0x5c28('0x3a1')][_0x5c28('0x1c7')](this),_0x307a31=_0x572895[_0x5c28('0x171')](this[_0x5c28('0x89')]||[]);return this[_0x5c28('0x312')]=_0x307a31['filter'](_0x1186d3=>!!_0x1186d3),this['_eventCache'];},VisuMZ[_0x5c28('0x3e9')]['Game_Map_event']=Game_Map['prototype'][_0x5c28('0x37a')],Game_Map[_0x5c28('0x404')][_0x5c28('0x37a')]=function(_0x2ca58f){if(_0x2ca58f>=0x3e8)return _0x2ca58f-=0x3e8,this[_0x5c28('0x89')][_0x2ca58f];else{if('PMVJF'===_0x5c28('0x12d')){function _0x333979(){const _0x26bc8f=[_0x1ae1b1[_0x5c28('0x183')],_0x3452b7[_0x5c28('0x330')],'SELF\x20SWITCH\x20%1'[_0x5c28('0x27f')](_0x47b90a)];_0x431e13['setValue'](_0x26bc8f,_0x32e260);}}else return VisuMZ[_0x5c28('0x3e9')][_0x5c28('0x16b')][_0x5c28('0x1c7')](this,_0x2ca58f);}},Game_Map['prototype'][_0x5c28('0x90')]=function(_0x5bb41d){const _0x13ca74=this[_0x5c28('0x37a')](_0x5bb41d);if(_0x13ca74)_0x13ca74[_0x5c28('0x168')]();},Game_Map[_0x5c28('0x404')]['createSpawnedEventWithData']=function(_0x33718e){$gameTemp['_spawnData']=_0x33718e;const _0x316414=new Game_Event(_0x33718e[_0x5c28('0x32e')],_0x33718e['eventId']);$gameTemp['_spawnData']=undefined,this[_0x5c28('0x89')][_0x5c28('0x22')](_0x316414),_0x316414['setupSpawn'](_0x33718e),this[_0x5c28('0x1d8')]();},Game_Map[_0x5c28('0x404')]['prepareSpawnedEventAtXY']=function(_0x4ed05d,_0xbda59e,_0x5bc6bc){const _0x14083c=_0x4ed05d['x'],_0x4c1fe1=_0x4ed05d['y'];if(!this[_0x5c28('0x3c7')](_0x14083c,_0x4c1fe1))return;if(_0xbda59e){if(this[_0x5c28('0x1cd')](_0x14083c,_0x4c1fe1)['length']>0x0)return;if($gamePlayer['x']===_0x14083c&&$gamePlayer['y']===_0x4c1fe1)return;if(this[_0x5c28('0x2b2')]()[_0x5c28('0x2c7')](_0x14083c,_0x4c1fe1))return;if(this[_0x5c28('0x299')]()[_0x5c28('0x2c7')](_0x14083c,_0x4c1fe1))return;}if(_0x5bc6bc){if(!this[_0x5c28('0x21')](_0x14083c,_0x4c1fe1))return;}this[_0x5c28('0x268')](_0x4ed05d);},Game_Map[_0x5c28('0x404')][_0x5c28('0xf9')]=function(_0x192cce,_0x548b9a,_0x1347f3,_0x336a71){const _0x8284f8=[],_0x292db3=this['width'](),_0x47ca4d=this[_0x5c28('0x3ef')]();for(let _0x12c7a3=0x0;_0x12c7a3<_0x292db3;_0x12c7a3++){if(_0x5c28('0x136')!=='EeWtR')for(let _0x14de96=0x0;_0x14de96<_0x47ca4d;_0x14de96++){if(!_0x548b9a[_0x5c28('0x369')](this[_0x5c28('0x64')](_0x12c7a3,_0x14de96)))continue;if(!this[_0x5c28('0x3c7')](_0x12c7a3,_0x14de96))continue;if(_0x1347f3){if(_0x5c28('0x391')===_0x5c28('0x397')){function _0x3d7191(){_0x43a561[_0x5c28('0x3e9')][_0x5c28('0x3a2')][_0x5c28('0x1c7')](this),_0x2388bf[_0x5c28('0x3df')](0x0);}}else{if(this[_0x5c28('0x1cd')](_0x12c7a3,_0x14de96)['length']>0x0)continue;if($gamePlayer['x']===_0x12c7a3&&$gamePlayer['y']===_0x14de96)continue;if(this[_0x5c28('0x2b2')]()[_0x5c28('0x2c7')](_0x12c7a3,_0x14de96))continue;if(this['ship']()['posNt'](_0x12c7a3,_0x14de96))continue;}}if(_0x336a71){if(!this[_0x5c28('0x21')](_0x12c7a3,_0x14de96))continue;}_0x8284f8[_0x5c28('0x22')]([_0x12c7a3,_0x14de96]);}else{function _0x205fb6(){_0x398364['ConvertParams'](_0x36c31b,_0x4046bc);const _0x4c8641=_0x2b769f['MapId']||_0xe997b5[_0x5c28('0x32e')](),_0x4b55ed=_0x156a70[_0x5c28('0x23c')];_0x4d6568[_0x5c28('0x36a')](_0x4c8641,_0x4b55ed);}}}if(_0x8284f8[_0x5c28('0x286')]>0x0){if(_0x5c28('0x69')===_0x5c28('0x69')){const _0x11d4f8=_0x8284f8[Math[_0x5c28('0x25')](_0x8284f8[_0x5c28('0x286')])];_0x192cce['x']=_0x11d4f8[0x0],_0x192cce['y']=_0x11d4f8[0x1],this[_0x5c28('0x268')](_0x192cce);}else{function _0x380d8e(){_0x3ea678['ConvertParams'](_0x3dd001,_0x387b0f);const _0x4039a0={'mapId':_0x16abe1['MapId'],'eventId':_0x5d1d46[_0x5c28('0x23c')],'pageId':_0x477699[_0x5c28('0x56')]};if(_0x4039a0[_0x5c28('0x32e')]<=0x0)_0x4039a0[_0x5c28('0x32e')]=_0x1246c0?_0x3c2c2c[_0x5c28('0x32e')]():0x1;_0x9e678d[_0x5c28('0x301')]()[_0x5c28('0x21b')](_0x4039a0);}}}},Game_Map[_0x5c28('0x404')]['isPassableByAnyDirection']=function(_0xa3685b,_0x5b1f96){if(this[_0x5c28('0xa3')](_0xa3685b,_0x5b1f96,0x2))return!![];if(this[_0x5c28('0xa3')](_0xa3685b,_0x5b1f96,0x4))return!![];if(this[_0x5c28('0xa3')](_0xa3685b,_0x5b1f96,0x6))return!![];if(this['isPassable'](_0xa3685b,_0x5b1f96,0x8))return!![];return![];},Game_Map[_0x5c28('0x404')][_0x5c28('0x223')]=function(_0x33e731){if(_0x33e731<0x3e8)return;if(!this[_0x5c28('0x89')])return;const _0x416baa=this['event'](_0x33e731);_0x416baa[_0x5c28('0x346')](-0x1,-0x1),_0x416baa[_0x5c28('0x168')](),this[_0x5c28('0x89')][_0x33e731-0x3e8]=null,this['clearEventCache']();},Game_Map[_0x5c28('0x404')][_0x5c28('0x11')]=function(){for(const _0x287725 of this['_spawnedEvents']){if(_0x5c28('0xe7')!=='MkWRp'){function _0x2d194f(){return _0x393643[_0x5c28('0x3e9')]['Settings']['Label']['OpacitySpeed'];}}else{if(_0x287725)return _0x287725;}}return null;},Game_Map['prototype']['firstSpawnedEventID']=function(){const _0x189d8e=this[_0x5c28('0x11')]();return _0x189d8e?_0x189d8e['_eventId']:0x0;},Game_Map[_0x5c28('0x404')][_0x5c28('0x277')]=function(){const _0x1f024f=this[_0x5c28('0x89')]['slice'](0x0)[_0x5c28('0x2cd')]();for(const _0x479107 of _0x1f024f){if(_0x5c28('0x2db')!==_0x5c28('0x138')){if(_0x479107)return _0x479107;}else{function _0x7e1ffa(){this['_eventIcon'][_0x5c28('0xab')]=_0x16f893(_0x3c1896['$1']);}}}return null;},Game_Map[_0x5c28('0x404')][_0x5c28('0xbf')]=function(){const _0x402cbe=this[_0x5c28('0x277')]();return _0x402cbe?_0x402cbe[_0x5c28('0x330')]:0x0;},Game_Map[_0x5c28('0x404')][_0x5c28('0x2ba')]=function(_0x1d7e6e,_0x4c798d){const _0x25a9cf=this[_0x5c28('0x1cd')](_0x1d7e6e,_0x4c798d);for(const _0x549e53 of _0x25a9cf){if(!_0x549e53)continue;if(_0x549e53['isSpawnedEvent']())this[_0x5c28('0x223')](_0x549e53[_0x5c28('0x330')]);}},Game_Map['prototype'][_0x5c28('0x313')]=function(_0x3773ae){for(const _0x3ceebc of this['_spawnedEvents']){if(_0x5c28('0x117')===_0x5c28('0x2f0')){function _0x2c0802(){_0x414058!==this[_0x5c28('0x32e')]()&&_0x5d319a&&_0x4eb4b0['removeTemporaryMapSpawnedEvents'](_0x55af50);}}else{if(!_0x3ceebc)continue;_0x3773ae[_0x5c28('0x369')](_0x3ceebc['regionId']())&&this[_0x5c28('0x223')](_0x3ceebc[_0x5c28('0x330')]);}}},Game_Map['prototype'][_0x5c28('0x3d2')]=function(){for(const _0x4fd268 of this[_0x5c28('0x89')]){if(!_0x4fd268)continue;this[_0x5c28('0x223')](_0x4fd268['_eventId']);}},Game_CommonEvent[_0x5c28('0x404')][_0x5c28('0x1c')]=function(){const _0x56cb57=this[_0x5c28('0x37a')]();return this[_0x5c28('0x2e1')]()&&_0x56cb57['trigger']>=0x1&&DataManager[_0x5c28('0x3bb')](_0x56cb57[_0x5c28('0x194')]);},Game_CommonEvent[_0x5c28('0x404')][_0x5c28('0x35c')]=function(){return VisuMZ[_0x5c28('0x3e9')][_0x5c28('0x8f')][_0x5c28('0x53')][_0x5c28('0x369')](this[_0x5c28('0x34')]);},VisuMZ[_0x5c28('0x3e9')][_0x5c28('0x21c')]=Game_CommonEvent[_0x5c28('0x404')][_0x5c28('0x2e1')],Game_CommonEvent['prototype'][_0x5c28('0x2e1')]=function(){if(VisuMZ[_0x5c28('0x3e9')][_0x5c28('0x21c')][_0x5c28('0x1c7')](this)){if(_0x5c28('0x208')===_0x5c28('0x366')){function _0x31e11b(){this[_0x5c28('0x209')]=!![];}}else return!![];}else{if('slJSE'===_0x5c28('0x336'))return VisuMZ[_0x5c28('0x3e9')][_0x5c28('0x8f')][_0x5c28('0x405')](this[_0x5c28('0x37a')]()['CPC'],this[_0x5c28('0x34')]);else{function _0x4504e8(){this['updateRoutineMove']();}}}},VisuMZ[_0x5c28('0x3e9')]['Game_Map_parallelCommonEvents']=Game_Map[_0x5c28('0x404')][_0x5c28('0x166')],Game_Map[_0x5c28('0x404')][_0x5c28('0x166')]=function(){const _0x439ca6=VisuMZ[_0x5c28('0x3e9')][_0x5c28('0x47')]['call'](this),_0x939e4f=VisuMZ['EventsMoveCore'][_0x5c28('0x8f')]['_commonEvents'][_0x5c28('0x39d')](_0x2b3cd1=>$dataCommonEvents[_0x2b3cd1]);return _0x439ca6[_0x5c28('0x171')](_0x939e4f)[_0x5c28('0x123')]((_0x751818,_0x418079,_0x21c1a5)=>_0x21c1a5[_0x5c28('0x2c0')](_0x751818)===_0x418079);},VisuMZ['EventsMoveCore']['Game_CharacterBase_initMembers']=Game_CharacterBase[_0x5c28('0x404')]['initMembers'],Game_CharacterBase[_0x5c28('0x404')][_0x5c28('0xe5')]=function(){VisuMZ[_0x5c28('0x3e9')][_0x5c28('0x325')][_0x5c28('0x1c7')](this),this[_0x5c28('0x120')]();},Game_CharacterBase[_0x5c28('0x404')][_0x5c28('0x120')]=function(){this[_0x5c28('0x2ee')]=![],this[_0x5c28('0x92')](),this[_0x5c28('0xa8')](),this[_0x5c28('0x371')](),this[_0x5c28('0xd2')]();},Game_CharacterBase[_0x5c28('0x404')][_0x5c28('0x377')]=function(){if(this[_0x5c28('0x141')]===Game_Player&&this[_0x5c28('0xee')]()){if(_0x5c28('0x2ac')!==_0x5c28('0x2ac')){function _0x1448ff(){_0x3381ff[_0x5c28('0x340')][_0x13bb2a]=_0x4bcd8e[_0x2ee59c],_0x5e160c[_0x1d8df7]=_0x4b3ffb;}}else return this['vehicle']()[_0x5c28('0x2c5')]()[_0x5c28('0x23b')](/\[VS8\]/i);}else{if(Imported['VisuMZ_2_DragonbonesUnion']&&this[_0x5c28('0x148')]()){if(_0x5c28('0x1af')===_0x5c28('0x242')){function _0x448ed(){return _0x5c617f['isSupportDiagonalMovement']()?this['getInputDir8']():_0x45b8e2[_0x5c28('0x3e9')][_0x5c28('0x7a')][_0x5c28('0x1c7')](this);}}else return!![];}else return this[_0x5c28('0x2c5')]()[_0x5c28('0x23b')](/\[VS8\]/i);}},VisuMZ[_0x5c28('0x3e9')][_0x5c28('0x207')]=Game_CharacterBase['prototype'][_0x5c28('0x81')],Game_CharacterBase[_0x5c28('0x404')][_0x5c28('0x81')]=function(){if(this[_0x5c28('0x374')]()&&!this[_0x5c28('0x2a5')]()&&this['isSpriteVS8dir']())return this[_0x5c28('0x1f')]();else{if(this[_0x5c28('0x374')]()&&!this[_0x5c28('0x2a5')]())return 0x8;else return this[_0x5c28('0x2b6')]()&&this[_0x5c28('0x377')]()?this[_0x5c28('0x109')]():VisuMZ[_0x5c28('0x3e9')]['Game_CharacterBase_direction'][_0x5c28('0x1c7')](this);}},VisuMZ[_0x5c28('0x3e9')][_0x5c28('0x8c')]=Game_CharacterBase[_0x5c28('0x404')][_0x5c28('0x210')],Game_CharacterBase['prototype'][_0x5c28('0x210')]=function(_0x454d90){if(!this[_0x5c28('0x377')]())_0x454d90=this['correctFacingDirection'](_0x454d90);VisuMZ['EventsMoveCore'][_0x5c28('0x8c')][_0x5c28('0x1c7')](this,_0x454d90);},Game_CharacterBase['prototype'][_0x5c28('0x289')]=function(_0x32d65d){if(_0x32d65d===0x1)return this[_0x5c28('0x16')](this['_x'],this['_y'],0x4)?0x4:0x2;if(_0x32d65d===0x3)return this[_0x5c28('0x16')](this['_x'],this['_y'],0x6)?0x6:0x2;if(_0x32d65d===0x7)return this[_0x5c28('0x16')](this['_x'],this['_y'],0x4)?0x4:0x8;if(_0x32d65d===0x9)return this[_0x5c28('0x16')](this['_x'],this['_y'],0x6)?0x6:0x8;return _0x32d65d;},Game_CharacterBase[_0x5c28('0x404')]['isDiagonalDirection']=function(_0x47947e){return[0x1,0x3,0x5,0x7,0x9][_0x5c28('0x369')](_0x47947e);},Game_CharacterBase[_0x5c28('0x404')][_0x5c28('0x296')]=function(){return this['_lastMovedDirection']||0x0;},VisuMZ[_0x5c28('0x3e9')][_0x5c28('0x9d')]=Game_CharacterBase[_0x5c28('0x404')][_0x5c28('0x3ba')],Game_CharacterBase[_0x5c28('0x404')][_0x5c28('0x3ba')]=function(_0x4297bc){this['_lastMovedDirection']=_0x4297bc,VisuMZ[_0x5c28('0x3e9')][_0x5c28('0x9d')][_0x5c28('0x1c7')](this,_0x4297bc);},Game_CharacterBase[_0x5c28('0x404')][_0x5c28('0x216')]=function(_0x3c43cc){if(!this[_0x5c28('0x1e7')](_0x3c43cc))return this[_0x5c28('0x3ba')](_0x3c43cc);let _0x859832=0x0,_0x3f85cc=0x0;switch(_0x3c43cc){case 0x1:_0x859832=0x4,_0x3f85cc=0x2;break;case 0x3:_0x859832=0x6,_0x3f85cc=0x2;break;case 0x7:_0x859832=0x4,_0x3f85cc=0x8;break;case 0x9:_0x859832=0x6,_0x3f85cc=0x8;break;}if(VisuMZ[_0x5c28('0x3e9')][_0x5c28('0x376')][_0x5c28('0x347')][_0x5c28('0x12c')]){if(_0x5c28('0x1be')!==_0x5c28('0x1be')){function _0x5990b6(){this[_0x5c28('0x22a')]['scale']['x']=_0x2e7d9a['max'](0x0,this[_0x5c28('0x22a')][_0x5c28('0x2e5')]['x']-0.1),this[_0x5c28('0x22a')][_0x5c28('0x2e5')]['y']=_0x44a2f6[_0x5c28('0x3f6')](0x0,this[_0x5c28('0x22a')][_0x5c28('0x2e5')]['y']-0.1);}}else{if(!this[_0x5c28('0x16')](this['_x'],this['_y'],_0x859832))return this[_0x5c28('0x3ba')](_0x3f85cc);if(!this[_0x5c28('0x16')](this['_x'],this['_y'],_0x3f85cc)){if(_0x5c28('0x35f')!=='VUjRo'){function _0x27855d(){this[_0x5c28('0x1ac')]();}}else return this[_0x5c28('0x3ba')](_0x859832);}if(!this[_0x5c28('0x264')](this['_x'],this['_y'],_0x859832,_0x3f85cc)){let _0x3a147f=VisuMZ[_0x5c28('0x3e9')][_0x5c28('0x376')][_0x5c28('0x347')][_0x5c28('0x57')]?_0x859832:_0x3f85cc;return this[_0x5c28('0x3ba')](_0x3a147f);}}}this['_lastMovedDirection']=_0x3c43cc,this[_0x5c28('0xf4')](_0x859832,_0x3f85cc);},VisuMZ[_0x5c28('0x3e9')][_0x5c28('0x3c')]=Game_CharacterBase['prototype'][_0x5c28('0x173')],Game_CharacterBase[_0x5c28('0x404')][_0x5c28('0x173')]=function(){let _0x266dca=this['_moveSpeed'];return this[_0x5c28('0x390')]()&&(_0x266dca+=this[_0x5c28('0x3d8')]()),this[_0x5c28('0x307')](_0x266dca);},Game_CharacterBase[_0x5c28('0x404')][_0x5c28('0x3d8')]=function(){const _0x209756=VisuMZ[_0x5c28('0x3e9')][_0x5c28('0x376')][_0x5c28('0x347')];if(_0x209756[_0x5c28('0x1e9')]!==undefined){if(_0x5c28('0x129')!==_0x5c28('0x3ae'))return _0x209756[_0x5c28('0x1e9')];else{function _0x391376(){if(!this['_interpreter'])return;if(!this[_0x5c28('0x10d')](!![]))return;if(!this[_0x5c28('0x63')](!![]))return;_0x239540[_0x5c28('0x3e9')][_0x5c28('0x105')][_0x5c28('0x1c7')](this);}}}else{if(_0x5c28('0xbd')!==_0x5c28('0x2aa'))return VisuMZ[_0x5c28('0x3e9')]['Game_CharacterBase_realMoveSpeed'][_0x5c28('0x1c7')](this)-this[_0x5c28('0x358')];else{function _0x4d6e5f(){const _0x4980ff=_0x4cedaf(_0x2a115d['$1']);return this[_0x5c28('0x241')](_0x4980ff);}}}},Game_CharacterBase[_0x5c28('0x404')][_0x5c28('0x307')]=function(_0x451e4b){const _0x1be234=VisuMZ[_0x5c28('0x3e9')][_0x5c28('0x376')][_0x5c28('0x347')];if(!_0x1be234[_0x5c28('0x2d4')])return _0x451e4b;return[0x1,0x3,0x7,0x9]['includes'](this[_0x5c28('0x236')])&&(_0x451e4b*=_0x1be234[_0x5c28('0x1b7')]||0.01),_0x451e4b;},VisuMZ[_0x5c28('0x3e9')][_0x5c28('0x10b')]=Game_CharacterBase[_0x5c28('0x404')]['isDashing'],Game_CharacterBase[_0x5c28('0x404')][_0x5c28('0x390')]=function(){if(this[_0x5c28('0x134')])return!![];return VisuMZ['EventsMoveCore']['Game_CharacterBase_isDashing'][_0x5c28('0x1c7')](this);},Game_CharacterBase[_0x5c28('0x404')][_0x5c28('0x1d')]=function(){return this[_0x5c28('0x390')]();},VisuMZ['EventsMoveCore']['Game_CharacterBase_pattern']=Game_CharacterBase[_0x5c28('0x404')][_0x5c28('0x3b5')],Game_CharacterBase[_0x5c28('0x404')][_0x5c28('0x3b5')]=function(){if(this['isPosing']()){if(_0x5c28('0x2f8')!==_0x5c28('0x1f4'))return this[_0x5c28('0x12b')]();else{function _0x226283(){if(this[_0x5c28('0x2bc')]===_0x3eb5e9)this[_0x5c28('0x1eb')]();if(this[_0x5c28('0x2bc')][_0x5c28('0x32b')]===_0xd8a5e9)this[_0x5c28('0x1eb')]();return this[_0x5c28('0x2bc')][_0x5c28('0x32b')];}}}else return VisuMZ['EventsMoveCore'][_0x5c28('0x11b')][_0x5c28('0x1c7')](this);},VisuMZ[_0x5c28('0x3e9')][_0x5c28('0x25a')]=Game_CharacterBase[_0x5c28('0x404')][_0x5c28('0x318')],Game_CharacterBase[_0x5c28('0x404')][_0x5c28('0x318')]=function(){VisuMZ[_0x5c28('0x3e9')][_0x5c28('0x25a')]['call'](this),this[_0x5c28('0x92')]();},VisuMZ[_0x5c28('0x3e9')][_0x5c28('0x306')]=Game_CharacterBase['prototype'][_0x5c28('0x130')],Game_CharacterBase[_0x5c28('0x404')]['characterIndex']=function(){if(this[_0x5c28('0x377')]())return this[_0x5c28('0x341')]();return VisuMZ[_0x5c28('0x3e9')][_0x5c28('0x306')][_0x5c28('0x1c7')](this);},Game_CharacterBase['prototype'][_0x5c28('0x341')]=function(){const _0x67fb7d=this['direction']();if(this[_0x5c28('0x2a5')]()){if([0x2,0x4,0x6,0x8][_0x5c28('0x369')](_0x67fb7d))return 0x4;if([0x1,0x3,0x7,0x9][_0x5c28('0x369')](_0x67fb7d))return 0x5;}else{if(this['isOnLadder']())return 0x6;else{if(this[_0x5c28('0x2b6')]()){if(_0x5c28('0x2d9')!==_0x5c28('0x323'))return this['getPosingCharacterIndex']();else{function _0x414969(){return _0x3189a0>=0x3e8?(_0x45447a-=0x3e8,this[_0x5c28('0x89')][_0xdaa9bc]):_0x1ebfee['EventsMoveCore'][_0x5c28('0x16b')][_0x5c28('0x1c7')](this,_0x1b76f3);}}}else{if(this[_0x5c28('0x3fc')]()&&this['useCarryPoseForIcons']()){if([0x2,0x4,0x6,0x8][_0x5c28('0x369')](_0x67fb7d))return 0x4;if([0x1,0x3,0x7,0x9][_0x5c28('0x369')](_0x67fb7d))return 0x5;}else{if(this[_0x5c28('0x1d')]()){if([0x2,0x4,0x6,0x8][_0x5c28('0x369')](_0x67fb7d))return 0x2;if([0x1,0x3,0x7,0x9]['includes'](_0x67fb7d))return 0x3;}else{if(_0x5c28('0x258')===_0x5c28('0x156')){function _0x5f5671(){return this[_0x5c28('0x24')](_0x5c28('0x3fb'));}}else{if([0x2,0x4,0x6,0x8][_0x5c28('0x369')](_0x67fb7d))return 0x0;if([0x1,0x3,0x7,0x9][_0x5c28('0x369')](_0x67fb7d))return 0x1;}}}}}}},Game_CharacterBase[_0x5c28('0x404')][_0x5c28('0x226')]=function(){return VisuMZ['EventsMoveCore']['Settings']['VS8'][_0x5c28('0x86')];},Game_CharacterBase[_0x5c28('0x404')]['isOnRope']=function(){return this[_0x5c28('0x374')]()&&this[_0x5c28('0x254')]()===VisuMZ[_0x5c28('0x3e9')][_0x5c28('0x376')][_0x5c28('0x158')][_0x5c28('0x3ff')];},Game_CharacterBase[_0x5c28('0x404')][_0x5c28('0x1f')]=function(){return this['isOnRope']()?0x4:0x2;},VisuMZ[_0x5c28('0x3e9')][_0x5c28('0x3da')]=Game_CharacterBase['prototype'][_0x5c28('0x18f')],Game_CharacterBase[_0x5c28('0x404')][_0x5c28('0x18f')]=function(){VisuMZ[_0x5c28('0x3e9')][_0x5c28('0x3da')][_0x5c28('0x1c7')](this),this[_0x5c28('0x387')]();},Game_CharacterBase[_0x5c28('0x404')][_0x5c28('0x387')]=function(){this[_0x5c28('0x280')]=this[_0x5c28('0x280')]||0x0;if(this[_0x5c28('0x280')]>0x0){this[_0x5c28('0x280')]--;if(this['_poseDuration']<=0x0&&this[_0x5c28('0xa')]!==_0x5c28('0x55'))this[_0x5c28('0x92')]();}},VisuMZ[_0x5c28('0x3e9')][_0x5c28('0x165')]=Game_CharacterBase['prototype'][_0x5c28('0xf4')],Game_CharacterBase['prototype'][_0x5c28('0xf4')]=function(_0x1b5714,_0x28804f){VisuMZ[_0x5c28('0x3e9')][_0x5c28('0x165')][_0x5c28('0x1c7')](this,_0x1b5714,_0x28804f);if(this[_0x5c28('0x377')]())this[_0x5c28('0xa4')](_0x1b5714,_0x28804f);},Game_CharacterBase[_0x5c28('0x404')]['setDiagonalDirection']=function(_0x18d192,_0x5b2414){if(_0x18d192===0x4&&_0x5b2414===0x2)this[_0x5c28('0x210')](0x1);if(_0x18d192===0x6&&_0x5b2414===0x2)this['setDirection'](0x3);if(_0x18d192===0x4&&_0x5b2414===0x8)this[_0x5c28('0x210')](0x7);if(_0x18d192===0x6&&_0x5b2414===0x8)this[_0x5c28('0x210')](0x9);},VisuMZ[_0x5c28('0x3e9')][_0x5c28('0x2ff')]=Game_CharacterBase[_0x5c28('0x404')][_0x5c28('0xc9')],Game_CharacterBase[_0x5c28('0x404')][_0x5c28('0xc9')]=function(){if(this[_0x5c28('0x2b6')]()&&this[_0x5c28('0xb5')]()===_0x5c28('0x55'))return!![];return VisuMZ[_0x5c28('0x3e9')][_0x5c28('0x2ff')][_0x5c28('0x1c7')](this);},Game_CharacterBase['prototype'][_0x5c28('0x201')]=function(_0x21beb8,_0x50fb6f){this[_0x5c28('0x377')]()&&(this[_0x5c28('0xa')]=_0x21beb8[_0x5c28('0x248')]()['trim'](),this[_0x5c28('0x280')]=_0x50fb6f||Infinity);},Game_CharacterBase[_0x5c28('0x404')]['getPose']=function(){if(this[_0x5c28('0x377')]()){if(_0x5c28('0x1e0')!==_0x5c28('0x2e'))return(this[_0x5c28('0xa')]||'')[_0x5c28('0x248')]()[_0x5c28('0x263')]();else{function _0x5b78f4(){if(_0xb27cf4['isAdvancedSwitch'](_0x28b3e7))return!!this[_0x5c28('0x1e1')](_0x3b93e4);else return _0xc73b5f[_0x5c28('0x276')](_0x295d24)?!!this['selfValue'](_0x1a4eca):_0x5de70c[_0x5c28('0x3e9')][_0x5c28('0x131')][_0x5c28('0x1c7')](this,_0xac9f5a);}}}else{if(_0x5c28('0xb4')==='YYUSD')return''[_0x5c28('0x248')]()[_0x5c28('0x263')]();else{function _0x4c6929(){_0x4e56df['x']=0x0,_0x5a8040['y']=-this[_0x5c28('0x3ef')]+this[_0x5c28('0x3ef')]*0x2/0x5,this[_0x5c28('0xc0')][_0x5c28('0x3b5')]()!==0x1&&(_0x1dbfa3['y']+=0x1);}}}},Game_CharacterBase[_0x5c28('0x404')]['setBalloonPose']=function(_0x1ee035,_0x2be241){if(this[_0x5c28('0x377')]()){const _0x112982=['','EXCLAMATION',_0x5c28('0x231'),_0x5c28('0x167'),_0x5c28('0x3c6'),_0x5c28('0x25d'),_0x5c28('0x294'),_0x5c28('0x1e'),_0x5c28('0x355'),_0x5c28('0xd9'),_0x5c28('0x55'),'','','','',''][_0x1ee035];this[_0x5c28('0x201')](_0x112982,_0x2be241);}},Game_CharacterBase[_0x5c28('0x404')][_0x5c28('0x92')]=function(){this[_0x5c28('0xa')]='',this[_0x5c28('0x280')]=0x0;},Game_CharacterBase[_0x5c28('0x404')][_0x5c28('0x2b6')]=function(){return this[_0x5c28('0x377')]()&&!!this['_pose'];},Game_CharacterBase['prototype'][_0x5c28('0x21a')]=function(){const _0x55dafd=this['_pose'][_0x5c28('0x248')]();switch(this[_0x5c28('0xa')][_0x5c28('0x248')]()[_0x5c28('0x263')]()){case _0x5c28('0x1c4'):case _0x5c28('0x91'):case _0x5c28('0x114'):case _0x5c28('0x317'):case _0x5c28('0x180'):case'COLLAPSE':return 0x6;break;default:return 0x7;break;}},Game_CharacterBase['prototype'][_0x5c28('0x109')]=function(){switch(this[_0x5c28('0xa')][_0x5c28('0x248')]()){case _0x5c28('0x35'):case _0x5c28('0x231'):case _0x5c28('0x167'):return 0x2;break;case _0x5c28('0x3c6'):case _0x5c28('0x25d'):case _0x5c28('0x294'):return 0x4;break;case _0x5c28('0x1c4'):case _0x5c28('0x91'):case _0x5c28('0x114'):case _0x5c28('0x1e'):case _0x5c28('0x355'):case _0x5c28('0xd9'):return 0x6;break;case _0x5c28('0x317'):case _0x5c28('0x180'):case _0x5c28('0xae'):case _0x5c28('0x55'):return 0x8;break;default:return VisuMZ[_0x5c28('0x3e9')][_0x5c28('0x8c')][_0x5c28('0x1c7')](this);break;}},Game_CharacterBase[_0x5c28('0x404')][_0x5c28('0x12b')]=function(){switch(this['_pose']['toUpperCase']()){case _0x5c28('0x1c4'):case _0x5c28('0x317'):case _0x5c28('0x35'):case _0x5c28('0x3c6'):case _0x5c28('0x1e'):return 0x0;break;case'HMPH':case'KNEEL':case'QUESTION':case _0x5c28('0x25d'):case _0x5c28('0x355'):return 0x1;break;case _0x5c28('0x114'):case _0x5c28('0xae'):case'MUSIC\x20NOTE':case _0x5c28('0x294'):case'LIGHT\x20BULB':return 0x2;break;default:return VisuMZ['EventsMoveCore']['Game_CharacterBase_pattern'][_0x5c28('0x1c7')](this);break;}},Game_CharacterBase[_0x5c28('0x404')][_0x5c28('0x324')]=function(){this[_0x5c28('0x134')]=!![];},Game_CharacterBase[_0x5c28('0x404')]['clearDashing']=function(){this[_0x5c28('0x134')]=![];},Game_CharacterBase['prototype']['isShadowVisible']=function(){if(this[_0x5c28('0x303')]())return![];if(this['_isObjectCharacter'])return![];if(this[_0x5c28('0xa6')])return![];if(this[_0x5c28('0x239')]==='')return![];if(this[_0x5c28('0x141')]===Game_Vehicle)return![];return!![];},Game_CharacterBase[_0x5c28('0x404')][_0x5c28('0x44')]=function(){if(this[_0x5c28('0x374')]())return!![];if(this[_0x5c28('0x141')]===Game_Player&&this['isInVehicle']())return!![];return![];},Game_CharacterBase['prototype'][_0x5c28('0x275')]=function(){return VisuMZ[_0x5c28('0x3e9')][_0x5c28('0x376')][_0x5c28('0x347')][_0x5c28('0x1b4')];},Game_CharacterBase[_0x5c28('0x404')]['shadowX']=function(){return this[_0x5c28('0x3a0')]();},Game_CharacterBase[_0x5c28('0x404')][_0x5c28('0x29a')]=function(){return this['screenY']()+this[_0x5c28('0x75')]()+this[_0x5c28('0x333')]();},Game_Character[_0x5c28('0x404')][_0x5c28('0x184')]=function(_0x56a721,_0x4e5f50){const _0x5e5d5e=this[_0x5c28('0x11f')](),_0x5a58c9=$gameMap[_0x5c28('0x3b0')](),_0x178a53=[],_0x7e8b85=[],_0x3a4408=[],_0x239aeb={};let _0x333462=_0x239aeb;if(this['x']===_0x56a721&&this['y']===_0x4e5f50)return 0x0;_0x239aeb[_0x5c28('0x5e')]=null,_0x239aeb['x']=this['x'],_0x239aeb['y']=this['y'],_0x239aeb['g']=0x0,_0x239aeb['f']=$gameMap[_0x5c28('0x2cf')](_0x239aeb['x'],_0x239aeb['y'],_0x56a721,_0x4e5f50),_0x178a53[_0x5c28('0x22')](_0x239aeb),_0x7e8b85['push'](_0x239aeb['y']*_0x5a58c9+_0x239aeb['x']);while(_0x178a53[_0x5c28('0x286')]>0x0){if(_0x5c28('0x1f2')===_0x5c28('0xe8')){function _0x15f930(){if(!_0x4d90ec[_0x5c28('0x404')][_0x5c28('0x16')][_0x5c28('0x1c7')](this,_0x2815a4+_0x54a6b2,_0x47b846+_0x36b573,_0x4a1566))return![];}}else{let _0x629825=0x0;for(let _0x398b15=0x0;_0x398b15<_0x178a53['length'];_0x398b15++){_0x178a53[_0x398b15]['f']<_0x178a53[_0x629825]['f']&&(_0x629825=_0x398b15);}const _0x43d818=_0x178a53[_0x629825],_0x5f45e1=_0x43d818['x'],_0x4f849b=_0x43d818['y'],_0x7284d6=_0x4f849b*_0x5a58c9+_0x5f45e1,_0x1392b7=_0x43d818['g'];_0x178a53[_0x5c28('0x8a')](_0x629825,0x1),_0x7e8b85[_0x5c28('0x8a')](_0x7e8b85[_0x5c28('0x2c0')](_0x7284d6),0x1),_0x3a4408[_0x5c28('0x22')](_0x7284d6);if(_0x43d818['x']===_0x56a721&&_0x43d818['y']===_0x4e5f50){_0x333462=_0x43d818;break;}if(_0x1392b7>=_0x5e5d5e){if(_0x5c28('0x2f3')==='MEUQQ'){function _0xf503f1(){this[_0x5c28('0x11c')]=_0x460f70;const _0x233f79=_0x5c28('0xf1')[_0x5c28('0x27f')](_0x590362[_0x5c28('0x32e')][_0x5c28('0xad')](0x3));this['_callEventMap']=_0x5c28('0x1ba')+_0x23bac8[_0x5c28('0x66')]+'_'+this['eventId'](),_0x264f29[_0x5c28('0x2fd')](this[_0x5c28('0x419')],_0x233f79),_0x395494[this[_0x5c28('0x419')]]?this[_0x5c28('0x1ac')]():this[_0x5c28('0x41e')](_0x5c28('0x176'));}}else continue;}for(let _0x2cc609=0x1;_0x2cc609<0xa;_0x2cc609++){if(_0x5c28('0x388')!=='MGuSo'){if(_0x2cc609===0x5)continue;const _0x25476e=_0x2cc609,_0x4eaee5=[0x0,0x4,0x0,0x6,0x4,0x0,0x6,0x4,0x0,0x6][_0x2cc609],_0xac9b2e=[0x0,0x2,0x2,0x2,0x0,0x0,0x0,0x8,0x8,0x8][_0x2cc609],_0x26d978=$gameMap[_0x5c28('0x1ef')](_0x5f45e1,_0x25476e),_0x30aeac=$gameMap[_0x5c28('0x3ab')](_0x4f849b,_0x25476e),_0x59bbf4=_0x30aeac*_0x5a58c9+_0x26d978;if(_0x3a4408[_0x5c28('0x369')](_0x59bbf4))continue;if(this['constructor']===Game_Player&&VisuMZ[_0x5c28('0x3e9')][_0x5c28('0x376')][_0x5c28('0x347')][_0x5c28('0x12c')]){if(!this[_0x5c28('0x16')](_0x5f45e1,_0x4f849b,_0x4eaee5))continue;if(!this[_0x5c28('0x16')](_0x5f45e1,_0x4f849b,_0xac9b2e))continue;}if(!this['canPassDiagonally'](_0x5f45e1,_0x4f849b,_0x4eaee5,_0xac9b2e))continue;const _0x29f1bd=_0x1392b7+0x1,_0x5ae4fa=_0x7e8b85[_0x5c28('0x2c0')](_0x59bbf4);if(_0x5ae4fa<0x0||_0x29f1bd<_0x178a53[_0x5ae4fa]['g']){let _0x3dbba2={};if(_0x5ae4fa>=0x0)_0x3dbba2=_0x178a53[_0x5ae4fa];else{if('HdWLZ'===_0x5c28('0x38e')){function _0x3ea3cc(){_0xab8dfa['log'](_0x5c28('0x3ca')[_0x5c28('0x27f')](_0xfa5551));}}else _0x178a53[_0x5c28('0x22')](_0x3dbba2),_0x7e8b85[_0x5c28('0x22')](_0x59bbf4);}_0x3dbba2[_0x5c28('0x5e')]=_0x43d818,_0x3dbba2['x']=_0x26d978,_0x3dbba2['y']=_0x30aeac,_0x3dbba2['g']=_0x29f1bd,_0x3dbba2['f']=_0x29f1bd+$gameMap[_0x5c28('0x2cf')](_0x26d978,_0x30aeac,_0x56a721,_0x4e5f50),(!_0x333462||_0x3dbba2['f']-_0x3dbba2['g']<_0x333462['f']-_0x333462['g'])&&(_0x333462=_0x3dbba2);}}else{function _0x32784d(){_0x4849ce[0x2]=_0x5c28('0x1d3')[_0x5c28('0x27f')](_0x2811aa);}}}}}let _0x5521fe=_0x333462;while(_0x5521fe[_0x5c28('0x5e')]&&_0x5521fe['parent']!==_0x239aeb){if(_0x5c28('0x305')!=='fmjiT')_0x5521fe=_0x5521fe['parent'];else{function _0xeddfd8(){return _0x400a17[_0x5c28('0x1d')]();}}}const _0x4a9573=$gameMap[_0x5c28('0x9b')](_0x5521fe['x'],_0x239aeb['x']),_0x27cfbc=$gameMap['deltaY'](_0x5521fe['y'],_0x239aeb['y']);if(_0x4a9573<0x0&&_0x27cfbc>0x0)return 0x1;if(_0x4a9573>0x0&&_0x27cfbc>0x0)return 0x3;if(_0x4a9573<0x0&&_0x27cfbc<0x0)return 0x7;if(_0x4a9573>0x0&&_0x27cfbc<0x0)return 0x9;if(_0x27cfbc>0x0)return 0x2;if(_0x4a9573<0x0)return 0x4;if(_0x4a9573>0x0)return 0x6;if(_0x27cfbc<0x0)return 0x8;const _0x140e2a=this['deltaXFrom'](_0x56a721),_0xa54f0e=this['deltaYFrom'](_0x4e5f50);if(Math[_0x5c28('0x10')](_0x140e2a)>Math[_0x5c28('0x10')](_0xa54f0e)){if('vkAZR'!==_0x5c28('0x402'))return _0x140e2a>0x0?0x4:0x6;else{function _0x3b0fe7(){const _0x70539d=_0x13bd87[_0x5c28('0x2ec')](this[_0x5c28('0x40d')]());if(_0x70539d)return _0x70539d['realMoveSpeed']();}}}else{if(_0xa54f0e!==0x0){if(_0x5c28('0x385')!==_0x5c28('0x385')){function _0xb12900(){return this[_0x5c28('0x52')](0x9,_0x1a7d86(_0x56e602['$1']));}}else return _0xa54f0e>0x0?0x8:0x2;}}return 0x0;},VisuMZ[_0x5c28('0x3e9')][_0x5c28('0x2fe')]=Game_CharacterBase['prototype'][_0x5c28('0x16')],Game_CharacterBase[_0x5c28('0x404')][_0x5c28('0x16')]=function(_0x396d56,_0x1dd029,_0x1fd5df){if(this[_0x5c28('0xf7')]===_0x5c28('0x186'))return this[_0x5c28('0xc1')]()[_0x5c28('0x17d')](_0x396d56,_0x1dd029,_0x1fd5df);else{if(_0x5c28('0x84')===_0x5c28('0x84'))return VisuMZ[_0x5c28('0x3e9')][_0x5c28('0x2fe')][_0x5c28('0x1c7')](this,_0x396d56,_0x1dd029,_0x1fd5df);else{function _0x2556a7(){const _0x217c5e=_0x30df34[_0x5c28('0x2ec')](this[_0x5c28('0x40d')]());this[_0x5c28('0x216')](_0x217c5e[_0x5c28('0x296')]());}}}},Game_CharacterBase[_0x5c28('0x404')]['clearSpriteOffsets']=function(){this[_0x5c28('0x149')]=0x0,this['_spriteOffsetY']=0x0;},VisuMZ['EventsMoveCore'][_0x5c28('0x31e')]=Game_CharacterBase[_0x5c28('0x404')][_0x5c28('0x3a0')],Game_CharacterBase[_0x5c28('0x404')][_0x5c28('0x3a0')]=function(){return VisuMZ[_0x5c28('0x3e9')][_0x5c28('0x31e')][_0x5c28('0x1c7')](this)+(this[_0x5c28('0x149')]||0x0);},VisuMZ[_0x5c28('0x3e9')][_0x5c28('0x15d')]=Game_CharacterBase[_0x5c28('0x404')]['screenY'],Game_CharacterBase[_0x5c28('0x404')][_0x5c28('0x23a')]=function(){return VisuMZ[_0x5c28('0x3e9')][_0x5c28('0x15d')][_0x5c28('0x1c7')](this)+(this[_0x5c28('0x394')]||0x0);},Game_CharacterBase[_0x5c28('0x404')][_0x5c28('0xd2')]=function(){this[_0x5c28('0x11a')]='';},VisuMZ[_0x5c28('0x3e9')][_0x5c28('0x2b9')]=Game_CharacterBase[_0x5c28('0x404')][_0x5c28('0x164')],Game_CharacterBase[_0x5c28('0x404')][_0x5c28('0x164')]=function(){if(this[_0x5c28('0x2ee')])return;if(this[_0x5c28('0x82')]())return;VisuMZ[_0x5c28('0x3e9')][_0x5c28('0x2b9')][_0x5c28('0x1c7')](this);},Game_CharacterBase[_0x5c28('0x404')]['updatePatternEventsMoveCore']=function(){if(!this['hasStepAnime']()&&this['_stopCount']>0x0)return![];switch(String(this[_0x5c28('0x11a')])[_0x5c28('0x248')]()[_0x5c28('0x263')]()){case _0x5c28('0x3f5'):this[_0x5c28('0x2b3')]+=0x1;if(this[_0x5c28('0x2b3')]>0x2)this[_0x5c28('0x2d')](0x0);break;case _0x5c28('0x70'):this['_pattern']-=0x1;if(this['_pattern']<0x0)this[_0x5c28('0x2d')](0x2);break;case _0x5c28('0x36c'):case _0x5c28('0x2c2'):this[_0x5c28('0xb9')]();break;case _0x5c28('0x107'):case _0x5c28('0x3d1'):case _0x5c28('0x3be'):case _0x5c28('0x15c'):this[_0x5c28('0x3f9')]();break;default:return![];}return!![];},Game_CharacterBase[_0x5c28('0x404')]['getEventIconData']=function(){return $gameSystem[_0x5c28('0x1a3')](this);},Game_CharacterBase[_0x5c28('0x404')]['hasEventIcon']=function(){const _0x349516=this[_0x5c28('0x1a3')]();if(!_0x349516)return![];return _0x349516[_0x5c28('0xab')]>0x0;},Game_CharacterBase[_0x5c28('0x404')][_0x5c28('0x17b')]=function(){const _0x419342=this['direction']();return $gameMap[_0x5c28('0x1ef')](this['x'],_0x419342);},Game_CharacterBase[_0x5c28('0x404')][_0x5c28('0x3a5')]=function(){const _0x95cc51=this[_0x5c28('0x81')]();return $gameMap[_0x5c28('0x3ab')](this['y'],_0x95cc51);},Game_CharacterBase[_0x5c28('0x404')]['backX']=function(){const _0x419f0d=this['reverseDir'](this[_0x5c28('0x81')]());return $gameMap[_0x5c28('0x1ef')](this['x'],_0x419f0d);},Game_CharacterBase[_0x5c28('0x404')][_0x5c28('0x38b')]=function(){const _0x3637ee=this[_0x5c28('0x3f4')](this['direction']());return $gameMap[_0x5c28('0x3ab')](this['y'],_0x3637ee);},VisuMZ['EventsMoveCore'][_0x5c28('0x295')]=Game_Character[_0x5c28('0x404')][_0x5c28('0x384')],Game_Character[_0x5c28('0x404')][_0x5c28('0x384')]=function(_0x83049b){route=JsonEx[_0x5c28('0x3b7')](_0x83049b),VisuMZ[_0x5c28('0x3e9')][_0x5c28('0x295')][_0x5c28('0x1c7')](this,route);},VisuMZ[_0x5c28('0x3e9')][_0x5c28('0xdd')]=Game_Character[_0x5c28('0x404')]['forceMoveRoute'],Game_Character[_0x5c28('0x404')][_0x5c28('0x15a')]=function(_0x41f867){route=JsonEx[_0x5c28('0x3b7')](_0x41f867),VisuMZ[_0x5c28('0x3e9')][_0x5c28('0xdd')][_0x5c28('0x1c7')](this,route);},VisuMZ[_0x5c28('0x3e9')][_0x5c28('0x7d')]=Game_Character[_0x5c28('0x404')][_0x5c28('0x27b')],Game_Character['prototype'][_0x5c28('0x27b')]=function(_0x52a17c){const _0x59c76d=Game_Character,_0x56cddb=_0x52a17c[_0x5c28('0x23f')];if(_0x52a17c[_0x5c28('0x1a7')]===_0x59c76d[_0x5c28('0x17c')]){if(_0x5c28('0x46')===_0x5c28('0x46')){const _0x4e9258=_0x52a17c[_0x5c28('0x23f')][0x0];this[_0x5c28('0x2cb')](_0x52a17c,_0x4e9258);}else{function _0x477566(){_0x675793[0x2][_0x5c28('0x23b')](/SELF/i)?this[_0x5c28('0x40')](_0x30a1ab,_0x5392fc):_0x736f6a[_0x5c28('0x3e9')]['Game_SelfSwitches_setValue'][_0x5c28('0x1c7')](this,_0x4fa584,_0x5bef9f);}}}else VisuMZ[_0x5c28('0x3e9')]['Game_Character_processMoveCommand'][_0x5c28('0x1c7')](this,_0x52a17c);},Game_Character[_0x5c28('0x404')][_0x5c28('0x2cb')]=function(_0x458ef0,_0x298fcc){if(_0x298fcc[_0x5c28('0x23b')](/ANIMATION:[ ](\d+)/i)){if(_0x5c28('0x17f')!==_0x5c28('0xeb'))return this[_0x5c28('0xd5')](Number(RegExp['$1']));else{function _0x5239bb(){if([0x1,0x2,0x3][_0x5c28('0x369')](_0x340832))_0xd874c6+=0x1;if([0x7,0x8,0x9][_0x5c28('0x369')](_0x225346))_0x3b4d14-=0x1;return this[_0x5c28('0x3b2')](_0xdb4f23);}}}if(_0x298fcc[_0x5c28('0x23b')](/BALLOON:[ ](.*)/i))return this['processMoveRouteBalloon'](String(RegExp['$1']));if(_0x298fcc[_0x5c28('0x23b')](/HUG:[ ]LEFT/i))return this['processMoveRouteHugWall'](_0x5c28('0x32c'));if(_0x298fcc[_0x5c28('0x23b')](/HUG:[ ]RIGHT/i)){if('GugBR'!==_0x5c28('0x3bc'))return this[_0x5c28('0x24')](_0x5c28('0x3fb'));else{function _0x587bdb(){this['_poseDuration']=this[_0x5c28('0x280')]||0x0;if(this[_0x5c28('0x280')]>0x0){this[_0x5c28('0x280')]--;if(this[_0x5c28('0x280')]<=0x0&&this['_pose']!==_0x5c28('0x55'))this[_0x5c28('0x92')]();}}}}if(_0x298fcc[_0x5c28('0x23b')](/INDEX:[ ](\d+)/i))return this[_0x5c28('0x152')](Number(RegExp['$1']));if(_0x298fcc[_0x5c28('0x23b')](/INDEX:[ ]([\+\-]\d+)/i)){const _0x54acb2=this[_0x5c28('0x285')]+Number(RegExp['$1']);return this[_0x5c28('0x152')](_0x54acb2);}if(_0x298fcc[_0x5c28('0x23b')](/JUMP FORWARD:[ ](\d+)/i))return this[_0x5c28('0x1ca')](Number(RegExp['$1']));if(_0x298fcc['match'](/JUMP TO:[ ](\d+),[ ](\d+)/i))return this[_0x5c28('0x28e')](Number(RegExp['$1']),Number(RegExp['$2']));if(_0x298fcc[_0x5c28('0x23b')](/JUMP TO EVENT:[ ](\d+)/i)){if(_0x5c28('0x379')===_0x5c28('0x247')){function _0x1baddc(){_0x4af174[_0x5c28('0x3e9')][_0x5c28('0x325')][_0x5c28('0x1c7')](this),this['initEventsMoveCoreSettings']();}}else{const _0x4467a7=$gameEvents[_0x5c28('0x37a')](Number(RegExp['$1']));return this[_0x5c28('0x3a4')](_0x4467a7);}}if(_0x298fcc[_0x5c28('0x23b')](/JUMP TO PLAYER/i))return this[_0x5c28('0x3a4')]($gamePlayer);if(_0x298fcc[_0x5c28('0x23b')](/MOVE[ ](.*)[ ]UNTIL STOP/i)){const _0x114818=String(RegExp['$1']);return this[_0x5c28('0x241')](_0x114818);}if(_0x298fcc[_0x5c28('0x23b')](/MOVE TO:[ ](\d+),[ ](\d+)/i)){const _0x1f0950=Number(RegExp['$1']),_0x19f1ca=Number(RegExp['$2']);return this[_0x5c28('0x337')](_0x1f0950,_0x19f1ca);}if(_0x298fcc[_0x5c28('0x23b')](/MOVE TO EVENT:[ ](\d+)/i)){const _0x1691d2=$gameEvents['event'](Number(RegExp['$1']));return this[_0x5c28('0xd')](_0x1691d2);}if(_0x298fcc['match'](/MOVE TO PLAYER/i))return this['processMoveRouteMoveToCharacter']($gamePlayer);if(_0x298fcc[_0x5c28('0x23b')](/MOVE LOWER LEFT:[ ](\d+)/i))return this['processMoveRouteMoveRepeat'](0x1,Number(RegExp['$1']));if(_0x298fcc[_0x5c28('0x23b')](/MOVE DOWN:[ ](\d+)/i))return this['processMoveRouteMoveRepeat'](0x2,Number(RegExp['$1']));if(_0x298fcc['match'](/MOVE LOWER RIGHT:[ ](\d+)/i))return this[_0x5c28('0x52')](0x3,Number(RegExp['$1']));if(_0x298fcc['match'](/MOVE LEFT:[ ](\d+)/i))return this[_0x5c28('0x52')](0x4,Number(RegExp['$1']));if(_0x298fcc[_0x5c28('0x23b')](/MOVE RIGHT:[ ](\d+)/i))return this[_0x5c28('0x52')](0x6,Number(RegExp['$1']));if(_0x298fcc[_0x5c28('0x23b')](/MOVE UPPER LEFT:[ ](\d+)/i))return this[_0x5c28('0x52')](0x7,Number(RegExp['$1']));if(_0x298fcc[_0x5c28('0x23b')](/MOVE UP:[ ](\d+)/i))return this[_0x5c28('0x52')](0x8,Number(RegExp['$1']));if(_0x298fcc[_0x5c28('0x23b')](/MOVE UPPER RIGHT:[ ](\d+)/i))return this[_0x5c28('0x52')](0x9,Number(RegExp['$1']));if(_0x298fcc[_0x5c28('0x23b')](/OPACITY:[ ](\d+)([%％])/i)){const _0x3ce552=Math[_0x5c28('0x203')](Number(RegExp['$1'])/0x64*0xff);return this['setOpacity'](_0x3ce552[_0x5c28('0x3e8')](0x0,0xff));}if(_0x298fcc[_0x5c28('0x23b')](/OPACITY:[ ]([\+\-]\d+)([%％])/i)){const _0x2fcfb9=this[_0x5c28('0x1a4')]+Math['round'](Number(RegExp['$1'])/0x64*0xff);return this[_0x5c28('0x21d')](_0x2fcfb9[_0x5c28('0x3e8')](0x0,0xff));}if(_0x298fcc[_0x5c28('0x23b')](/OPACITY:[ ]([\+\-]\d+)/i)){const _0x3a22c3=this[_0x5c28('0x1a4')]+Number(RegExp['$1']);return this[_0x5c28('0x21d')](_0x3a22c3[_0x5c28('0x3e8')](0x0,0xff));}if(_0x298fcc[_0x5c28('0x23b')](/PATTERN LOCK:[ ](\d+)/i))return this[_0x5c28('0x1e6')](Number(RegExp['$1']));if(_0x298fcc[_0x5c28('0x23b')](/PATTERN UNLOCK/i)){if(_0x5c28('0xfa')!=='MdFXG')return this[_0x5c28('0x2ee')]=![];else{function _0x22a098(){if(!_0x3ce1f8[_0x5c28('0x29c')][_0x533159]){_0xf83f37[_0x5c28('0x18')][_0x13983a][_0x5c28('0x23b')](/<JS>\s*([\s\S]*)\s*<\/JS>/i);const _0x4bb899=_0x5c28('0x15f')['format'](_0x504d4f(_0x14f92b['$1']));_0xe5478a[_0x5c28('0x29c')][_0xa09d82]=new _0x3fba5d(_0x5c28('0x1b8'),_0x4bb899);}const _0x570012=_0x3d4f79[_0x5c28('0x288')]()||this;return _0xf5864f[_0x5c28('0x29c')][_0x52314e][_0x5c28('0x1c7')](_0x570012,_0x6c5018);}}}if(_0x298fcc['match'](/POSE:[ ](.*)/i)){const _0x197b5f=String(RegExp['$1'])[_0x5c28('0x248')]()[_0x5c28('0x263')]();return this[_0x5c28('0x201')](_0x197b5f);}if(_0x298fcc['match'](/STEP TOWARD:[ ](\d+),[ ](\d+)/i)){const _0x5eb79e=Number(RegExp['$1']),_0x476e24=Number(RegExp['$2']);return this[_0x5c28('0x215')](_0x5eb79e,_0x476e24);}if(_0x298fcc[_0x5c28('0x23b')](/STEP TOWARD EVENT:[ ](\d+)/i)){if(_0x5c28('0x145')===_0x5c28('0x145')){const _0x23feb3=$gameEvents[_0x5c28('0x37a')](Number(RegExp['$1']));return this[_0x5c28('0x356')](_0x23feb3);}else{function _0x56a3ef(){this[_0x5c28('0x37c')]();}}}if(_0x298fcc['match'](/STEP TOWARD PLAYER/i))return this[_0x5c28('0x9f')]($gamePlayer);if(_0x298fcc[_0x5c28('0x23b')](/STEP AWAY FROM:[ ](\d+),[ ](\d+)/i)){if(_0x5c28('0x85')===_0x5c28('0x85'))return this[_0x5c28('0x2da')](Number(RegExp['$1']),Number(RegExp['$2']));else{function _0x119a0f(){return _0x12c197[_0x5c28('0x3e9')]['Settings'][_0x5c28('0x347')][_0x5c28('0x1b4')];}}}if(_0x298fcc[_0x5c28('0x23b')](/STEP AWAY FROM EVENT:[ ](\d+)/i)){const _0x5877a6=$gameEvents[_0x5c28('0x37a')](Number(RegExp['$1']));return this[_0x5c28('0x19b')](_0x5877a6);}if(_0x298fcc[_0x5c28('0x23b')](/STEP AWAY FROM PLAYER/i)){if(_0x5c28('0xd6')===_0x5c28('0x3a7')){function _0x577eed(){return this[_0x5c28('0x3b9')](_0x34f07e['$1'],_0x217bc8['$2']);}}else return this[_0x5c28('0x19b')]($gamePlayer);}if(_0x298fcc[_0x5c28('0x23b')](/TURN TO:[ ](\d+),[ ](\d+)/i)){if('SYEoW'!==_0x5c28('0x1f9')){function _0x22ca3b(){const _0x9c3a6=_0x26aa67[_0x5c28('0x2ec')](this[_0x5c28('0x40d')]());this[_0x5c28('0x19b')](_0x9c3a6);}}else return this[_0x5c28('0x6c')](Number(RegExp['$1']),Number(RegExp['$2']));}if(_0x298fcc['match'](/TURN TO EVENT:[ ](\d+)/i)){if(_0x5c28('0x19a')!==_0x5c28('0x19a')){function _0xc63361(){return _0x200c06[_0x5c28('0x3e9')][_0x5c28('0x2fe')][_0x5c28('0x1c7')](this,_0x48d024,_0x449f06,_0x4f093e);}}else{const _0x3544f9=$gameEvents['event'](Number(RegExp['$1']));return this[_0x5c28('0x2a3')](_0x3544f9);}}if(_0x298fcc[_0x5c28('0x23b')](/TURN TO PLAYER/i))return this['turnTowardCharacter']($gamePlayer);if(_0x298fcc[_0x5c28('0x23b')](/TURN AWAY FROM:[ ](\d+),[ ](\d+)/i))return this[_0x5c28('0x1ad')](Number(RegExp['$1']),Number(RegExp['$2']));if(_0x298fcc[_0x5c28('0x23b')](/TURN AWAY FROM EVENT:[ ](\d+)/i)){if('qDXmW'===_0x5c28('0x392')){function _0x1ec877(){for(let _0x23df44=0x1;_0x23df44<_0x229432[_0x5c28('0x261')][_0x5c28('0x286')];_0x23df44++){if(_0xc41fa8[_0x5c28('0x261')][_0x23df44][_0x5c28('0x23b')](/<JS>\s*([\s\S]*)\s*<\/JS>/i))_0x2551c0[_0x5c28('0x159')][_0x5c28('0x22')](_0x23df44);if(_0x56a010[_0x5c28('0x261')][_0x23df44][_0x5c28('0x23b')](/<SELF>/i))_0x20b1bb[_0x5c28('0x40b')][_0x5c28('0x22')](_0x23df44);}for(let _0x42b2d5=0x1;_0x42b2d5<_0x3eba14['variables'][_0x5c28('0x286')];_0x42b2d5++){if(_0x26a218[_0x5c28('0x18')][_0x42b2d5][_0x5c28('0x23b')](/<JS>\s*([\s\S]*)\s*<\/JS>/i))_0x39eaeb[_0x5c28('0x2d8')]['push'](_0x42b2d5);if(_0x1061e7[_0x5c28('0x18')][_0x42b2d5]['match'](/<SELF>/i))_0x5bcdc4[_0x5c28('0x408')]['push'](_0x42b2d5);}}}else{const _0x4cc7a6=$gameEvents['event'](Number(RegExp['$1']));return this[_0x5c28('0x12e')](_0x4cc7a6);}}if(_0x298fcc['match'](/TURN AWAY FROM PLAYER/i))return this[_0x5c28('0x12e')]($gamePlayer);if(_0x298fcc[_0x5c28('0x23b')](/TURN LOWER LEFT/i)){if(_0x5c28('0x26f')===_0x5c28('0x3dd')){function _0x52aeeb(){this[_0x5c28('0x40')](_0x173d1f,_0x4842f6);}}else return this[_0x5c28('0x210')](0x1);}if(_0x298fcc[_0x5c28('0x23b')](/TURN LOWER RIGHT/i)){if(_0x5c28('0x196')===_0x5c28('0x19c')){function _0x2e43b4(){this['_shadowOpacity']=0xff;}}else return this[_0x5c28('0x210')](0x3);}if(_0x298fcc[_0x5c28('0x23b')](/TURN UPPER LEFT/i)){if(_0x5c28('0x31')===_0x5c28('0x31'))return this[_0x5c28('0x210')](0x7);else{function _0x27a804(){if(this[_0x5c28('0x134')])return!![];return _0x46b174[_0x5c28('0x3e9')][_0x5c28('0x10b')][_0x5c28('0x1c7')](this);}}}if(_0x298fcc[_0x5c28('0x23b')](/TURN UPPER RIGHT/i)){if(_0x5c28('0x3dc')!==_0x5c28('0x3dc')){function _0x20d770(){_0x4d4653[_0x5c28('0x2a7')]()?this[_0x5c28('0x216')](_0x1ce7de):_0x2e0f03[_0x5c28('0x3e9')][_0x5c28('0xd3')][_0x5c28('0x1c7')](this,_0x2d30a0);}}else return this[_0x5c28('0x210')](0x9);}if(_0x298fcc[_0x5c28('0x23b')](/SELF SWITCH[ ](.*):[ ](.*)/i)){if(_0x5c28('0x2f2')!==_0x5c28('0x2f2')){function _0x41e869(){this[_0x5c28('0x382')][_0x5c28('0x368')]=0x0;}}else return this[_0x5c28('0x195')](RegExp['$1'],RegExp['$2']);}if(_0x298fcc[_0x5c28('0x23b')](/SELF VARIABLE[ ](.*):[ ](.*)/i))return this[_0x5c28('0x3b9')](RegExp['$1'],RegExp['$2']);if(_0x298fcc[_0x5c28('0x23b')](/TELEPORT TO:[ ](\d+),[ ](\d+)/i))return this[_0x5c28('0x161')](Number(RegExp['$1']),Number(RegExp['$2']));if(_0x298fcc[_0x5c28('0x23b')](/TELEPORT TO EVENT:[ ](\d+)/i)){const _0x2eb705=$gameEvents['event'](Number(RegExp['$1']));return this[_0x5c28('0x3a')](_0x2eb705);}if(_0x298fcc[_0x5c28('0x23b')](/TELEPORT TO PLAYER/i)){if('tCbMC'!==_0x5c28('0xc2'))return this[_0x5c28('0x3a')]($gamePlayer);else{function _0x5157df(){if(!_0x458d5c&&_0x547b77[_0x5c28('0x88')]())return![];if(!_0x131d3d&&_0x3ef452['isAnyEventStarting']())return![];if([_0x5c28('0x37d'),_0x5c28('0x270')][_0x5c28('0x369')](this['activationProximityType']()))return!![];return _0x30a840[_0x5c28('0x179')](this);}}}try{if('jNhUU'!==_0x5c28('0x41f')){function _0x4f3753(){if(this[_0x5c28('0x14c')])return!![];return _0x506620[_0x5c28('0x404')][_0x5c28('0x94')]['call'](this);}}else VisuMZ[_0x5c28('0x3e9')][_0x5c28('0x7d')]['call'](this,_0x458ef0);}catch(_0x503b11){if($gameTemp[_0x5c28('0xbe')]())console['log'](_0x503b11);}},Game_Character[_0x5c28('0x404')][_0x5c28('0xd5')]=function(_0x2fb465){$gameTemp[_0x5c28('0x271')]([this],_0x2fb465);},Game_Character['prototype']['processMoveRouteBalloon']=function(_0x278a8d){let _0x2520ab=0x0;switch(_0x278a8d[_0x5c28('0x248')]()[_0x5c28('0x263')]()){case'!':case _0x5c28('0x35'):_0x2520ab=0x1;break;case'?':case _0x5c28('0x231'):_0x2520ab=0x2;break;case _0x5c28('0xfe'):case _0x5c28('0x359'):case _0x5c28('0x167'):case'MUSIC-NOTE':case'MUSICNOTE':_0x2520ab=0x3;break;case _0x5c28('0x3c6'):case _0x5c28('0x380'):_0x2520ab=0x4;break;case _0x5c28('0x25d'):_0x2520ab=0x5;break;case _0x5c28('0x294'):_0x2520ab=0x6;break;case'COBWEB':case _0x5c28('0x262'):_0x2520ab=0x7;break;case _0x5c28('0x355'):case _0x5c28('0x157'):_0x2520ab=0x8;break;case'LIGHT':case _0x5c28('0x137'):case _0x5c28('0xd9'):case _0x5c28('0x1df'):case _0x5c28('0x8d'):_0x2520ab=0x9;break;case'Z':case'ZZ':case _0x5c28('0x55'):case _0x5c28('0x2c'):_0x2520ab=0xa;break;case _0x5c28('0x20c'):_0x2520ab=0xb;break;case _0x5c28('0x411'):_0x2520ab=0xc;break;case _0x5c28('0x10f'):_0x2520ab=0xd;break;case _0x5c28('0x121'):_0x2520ab=0xe;break;case _0x5c28('0x9'):_0x2520ab=0xf;break;}$gameTemp[_0x5c28('0x36d')](this,_0x2520ab);},Game_Character[_0x5c28('0x404')][_0x5c28('0x24')]=function(_0x3f0a39){const _0xa92e29=[0x0,0x3,0x6,0x9,0x2,0x0,0x8,0x1,0x4,0x7],_0x53f3b4=[0x0,0x7,0x4,0x1,0x8,0x0,0x2,0x9,0x6,0x3],_0x562d08=this[_0x5c28('0x81')](),_0x4da0a9=(_0x3f0a39===_0x5c28('0x32c')?_0xa92e29:_0x53f3b4)[_0x562d08],_0x5f2d33=(_0x3f0a39===_0x5c28('0x32c')?_0x53f3b4:_0xa92e29)[_0x562d08];if(this[_0x5c28('0x16')](this['x'],this['y'],_0x4da0a9)){if(_0x3f0a39===_0x5c28('0x32c'))this[_0x5c28('0x3f9')]();else{if(_0x5c28('0xa2')!==_0x5c28('0x252'))this[_0x5c28('0xb9')]();else{function _0x130941(){if(_0x20d24f['match'](/<HITBOX[ ](.*?):[ ](\d+)>/i)){const _0x2465c3=_0x210d22(_0x113c64['$1'])[_0x5c28('0xf6')]()[_0x5c28('0x263')](),_0x361d97=_0x2c0081(_0x55887b['$2']);this['_addedHitbox'][_0x2465c3]=_0x361d97;}}}}}else{if(!this['canPass'](this['x'],this['y'],this[_0x5c28('0x81')]())){if(this[_0x5c28('0x16')](this['x'],this['y'],_0x5f2d33)){if(_0x3f0a39===_0x5c28('0x32c'))this[_0x5c28('0xb9')]();else{if('CxXua'!==_0x5c28('0x78'))this[_0x5c28('0x3f9')]();else{function _0x40970d(){return this[_0x5c28('0x297')];}}}}else this['turn180']();}}this[_0x5c28('0x16')](this['x'],this['y'],this[_0x5c28('0x81')]())&&this['moveForward']();},Game_Character['prototype'][_0x5c28('0x152')]=function(_0x3ab3e4){if(ImageManager[_0x5c28('0xaa')](this['_characterName']))return;_0x3ab3e4=_0x3ab3e4[_0x5c28('0x3e8')](0x0,0x7),this[_0x5c28('0x27')](this[_0x5c28('0x239')],_0x3ab3e4);},Game_Character['prototype'][_0x5c28('0x1ca')]=function(_0x2cebf0){switch(this[_0x5c28('0x81')]()){case 0x1:this[_0x5c28('0x3cf')](-_0x2cebf0,_0x2cebf0);break;case 0x2:this['jump'](0x0,_0x2cebf0);break;case 0x3:this[_0x5c28('0x3cf')](_0x2cebf0,_0x2cebf0);break;case 0x4:this[_0x5c28('0x3cf')](-_0x2cebf0,0x0);break;case 0x6:this[_0x5c28('0x3cf')](_0x2cebf0,0x0);break;case 0x7:this[_0x5c28('0x3cf')](-_0x2cebf0,-_0x2cebf0);break;case 0x8:this[_0x5c28('0x3cf')](0x0,-_0x2cebf0);break;case 0x9:this[_0x5c28('0x3cf')](_0x2cebf0,-_0x2cebf0);break;}},Game_Character[_0x5c28('0x404')][_0x5c28('0x28e')]=function(_0x1fcb7a,_0x28a9aa){const _0x5b7ed3=Math['round'](_0x1fcb7a-this['x']),_0x79be1b=Math[_0x5c28('0x203')](_0x28a9aa-this['y']);this['jump'](_0x5b7ed3,_0x79be1b);},Game_Character['prototype'][_0x5c28('0x3a4')]=function(_0x23da7d){if(_0x23da7d)this[_0x5c28('0x28e')](_0x23da7d['x'],_0x23da7d['y']);},Game_Character[_0x5c28('0x404')]['processMoveRouteStepTo']=function(_0xe1eb2,_0x1c7410){let _0x51f0b9=0x0;if($gameMap[_0x5c28('0x2a7')]()){if('xAMLu'===_0x5c28('0x13e'))_0x51f0b9=this[_0x5c28('0x184')](_0xe1eb2,_0x1c7410);else{function _0x20ebe4(){_0x34d700['reserveCommonEvent'](_0x41ea81[_0x3b6310]);}}}else{if(_0x5c28('0x2c9')!=='qJxts'){function _0x497589(){if([0x2,0x4,0x6,0x8][_0x5c28('0x369')](_0x164786))return 0x2;if([0x1,0x3,0x7,0x9]['includes'](_0xde2d81))return 0x3;}}else _0x51f0b9=this['findDirectionTo'](_0xe1eb2,_0x1c7410);}this[_0x5c28('0x216')](_0x51f0b9),this[_0x5c28('0x110')](!![]);},Game_Character[_0x5c28('0x404')][_0x5c28('0x356')]=function(_0x2ab297){if(_0x2ab297)this['processMoveRouteStepTo'](_0x2ab297['x'],_0x2ab297['y']);},Game_Character[_0x5c28('0x404')]['processMoveRouteStepFrom']=function(_0x5f5c09,_0x590548){const _0x3c760c=this[_0x5c28('0xef')](_0x5f5c09),_0x41b910=this[_0x5c28('0x27a')](_0x590548);},Game_Character[_0x5c28('0x404')][_0x5c28('0x241')]=function(_0x25255d){const _0x40646b=['',_0x5c28('0x1ab'),_0x5c28('0xce'),_0x5c28('0x3e'),_0x5c28('0x93'),'',_0x5c28('0x265'),'UPPER\x20LEFT','UP','UPPER\x20RIGHT'],_0x4bcc53=_0x40646b[_0x5c28('0x2c0')](_0x25255d[_0x5c28('0x248')]()['trim']());if(directioin<=0x0)return;this[_0x5c28('0x16')](this['x'],this['y'],_0x4bcc53)&&(this[_0x5c28('0x216')](_0x4bcc53),this[_0x5c28('0x1ee')]-=0x1);},Game_Character['prototype'][_0x5c28('0x337')]=function(_0x2a79f0,_0x4b3f94){this['processMoveRouteStepTo'](_0x2a79f0,_0x4b3f94);if(this['x']!==_0x2a79f0||this['y']!==_0x4b3f94)this['_moveRouteIndex']--;},Game_Character[_0x5c28('0x404')][_0x5c28('0xd')]=function(_0x3b665b){if(_0x3b665b)this['processMoveRouteMoveTo'](_0x3b665b['x'],_0x3b665b['y']);},Game_Character[_0x5c28('0x404')]['processMoveRouteMoveRepeat']=function(_0x504107,_0x11f97b){_0x11f97b=_0x11f97b||0x0;const _0x1f1df7={'code':0x1,'indent':null,'parameters':[]};_0x1f1df7['code']=[0x0,0x5,0x1,0x6,0x2,0x0,0x3,0x7,0x4,0x8][_0x504107],this[_0x5c28('0x348')][_0x5c28('0xf')][this[_0x5c28('0x1ee')]][_0x5c28('0x23f')][0x0]='';while(_0x11f97b--){if(_0x5c28('0x23d')!==_0x5c28('0x10a'))this[_0x5c28('0x348')][_0x5c28('0xf')][_0x5c28('0x8a')](this[_0x5c28('0x1ee')]+0x1,0x0,_0x1f1df7);else{function _0x36f529(){return this[_0x5c28('0x1a8')];}}}},Game_Character['prototype'][_0x5c28('0x1e6')]=function(_0x170869){this['_patternLocked']=!![],this[_0x5c28('0x2d')](_0x170869);},Game_Character[_0x5c28('0x404')][_0x5c28('0x195')]=function(_0x106014,_0x2cbf48){if(this===$gamePlayer)return;const _0x561462=[this['_mapId'],this[_0x5c28('0x330')],'A'];if(_0x106014[_0x5c28('0x23b')](/\b[ABCD]\b/i))_0x561462[0x2]=String(_0x106014)[_0x5c28('0x269')](0x0)[_0x5c28('0x248')]()['trim']();else{if('yKPFV'===_0x5c28('0xe'))_0x561462[0x2]=_0x5c28('0x1d3')['format'](_0x106014);else{function _0xfa8f2b(){return this[_0x5c28('0x3a0')]();}}}switch(_0x2cbf48['toUpperCase']()['trim']()){case'ON':case _0x5c28('0x253'):$gameSelfSwitches[_0x5c28('0x381')](_0x561462,!![]);break;case _0x5c28('0x234'):case'FALSE':$gameSelfSwitches[_0x5c28('0x381')](_0x561462,![]);break;case'Toggle':$gameSelfSwitches[_0x5c28('0x381')](_0x561462,!$gameSelfSwitches['value'](_0x561462));break;}},Game_Character[_0x5c28('0x404')][_0x5c28('0x3b9')]=function(_0x48bf9d,_0x397b58){if(this===$gamePlayer)return;const _0x18c158=[this[_0x5c28('0x183')],this[_0x5c28('0x330')],_0x5c28('0x29d')['format'](switchId)];$gameSelfSwitches[_0x5c28('0x381')](_0x18c158,Number(_0x397b58));},Game_Character['prototype'][_0x5c28('0x161')]=function(_0x31b027,_0x46d880){this[_0x5c28('0x346')](_0x31b027,_0x46d880);},Game_Character[_0x5c28('0x404')][_0x5c28('0x3a')]=function(_0x3ebb1f){if(_0x3ebb1f)this[_0x5c28('0x161')](_0x3ebb1f['x'],_0x3ebb1f['y']);},Game_Character[_0x5c28('0x404')][_0x5c28('0xb9')]=function(){switch(this[_0x5c28('0x81')]()){case 0x1:this[_0x5c28('0x210')](0x7);break;case 0x2:this['setDirection'](0x4);break;case 0x3:this[_0x5c28('0x210')](0x1);break;case 0x4:this[_0x5c28('0x210')](0x8);break;case 0x6:this[_0x5c28('0x210')](0x2);break;case 0x7:this[_0x5c28('0x210')](0x9);break;case 0x8:this[_0x5c28('0x210')](0x6);break;case 0x9:this['setDirection'](0x3);break;}},Game_Character[_0x5c28('0x404')][_0x5c28('0x3f9')]=function(){switch(this[_0x5c28('0x81')]()){case 0x1:this[_0x5c28('0x210')](0x3);break;case 0x2:this['setDirection'](0x6);break;case 0x3:this['setDirection'](0x9);break;case 0x4:this[_0x5c28('0x210')](0x2);break;case 0x6:this[_0x5c28('0x210')](0x8);break;case 0x7:this[_0x5c28('0x210')](0x1);break;case 0x8:this[_0x5c28('0x210')](0x4);break;case 0x9:this['setDirection'](0x7);break;}},Game_Character[_0x5c28('0x404')]['getDirectionToPoint']=function(_0x39a3f3,_0x168bf9,_0x39590d){const _0x4f2698=this[_0x5c28('0xef')](_0x39a3f3),_0x33f942=this[_0x5c28('0x27a')](_0x168bf9);if($gameMap[_0x5c28('0x2a7')]()){if(_0x39590d||this[_0x5c28('0x377')]()){if(_0x4f2698>0x0&&_0x33f942<0x0)return 0x1;if(_0x4f2698<0x0&&_0x33f942<0x0)return 0x3;if(_0x4f2698>0x0&&_0x33f942>0x0)return 0x7;if(_0x4f2698<0x0&&_0x33f942>0x0)return 0x9;}}if(Math[_0x5c28('0x10')](_0x4f2698)>Math[_0x5c28('0x10')](_0x33f942))return _0x4f2698>0x0?0x4:0x6;else{if(_0x33f942!==0x0){if(_0x5c28('0x417')==='MrKxt')return _0x33f942>0x0?0x8:0x2;else{function _0x1f1f9c(){return!![];}}}}return 0x0;},Game_Character[_0x5c28('0x404')]['getDirectionFromPoint']=function(_0x18d6bf,_0x4eaccc,_0x4dd181){const _0x1864e9=this[_0x5c28('0xef')](_0x18d6bf),_0x2fbf72=this[_0x5c28('0x27a')](_0x4eaccc);if($gameMap[_0x5c28('0x2a7')]()){if('EybZO'!==_0x5c28('0x302')){function _0x15c60a(){this[_0x5c28('0x1b')](_0x102e4d);}}else{if(_0x4dd181||this[_0x5c28('0x377')]()){if(_0x1864e9>0x0&&_0x2fbf72<0x0)return 0x9;if(_0x1864e9<0x0&&_0x2fbf72<0x0)return 0x7;if(_0x1864e9>0x0&&_0x2fbf72>0x0)return 0x3;if(_0x1864e9<0x0&&_0x2fbf72>0x0)return 0x1;}}}if(Math[_0x5c28('0x10')](_0x1864e9)>Math[_0x5c28('0x10')](_0x2fbf72)){if(_0x5c28('0x13')==='IzxHM')return _0x1864e9>0x0?0x6:0x4;else{function _0xe0bdf5(){if(_0x4978d3)this[_0x5c28('0x161')](_0xd5da07['x'],_0x5ea5a2['y']);}}}else{if(_0x2fbf72!==0x0)return _0x2fbf72>0x0?0x2:0x8;}return 0x0;},Game_Character[_0x5c28('0x404')][_0x5c28('0x6c')]=function(_0x198651,_0x29b08e){const _0x3ebe4a=this[_0x5c28('0x311')](_0x198651,_0x29b08e,!![]);if(_0x3ebe4a)this[_0x5c28('0x216')](_0x3ebe4a);},Game_Character[_0x5c28('0x404')][_0x5c28('0x2da')]=function(_0x366b77,_0x234c3f){const _0x78cac0=this['getDirectionFromPoint'](_0x366b77,_0x234c3f,!![]);if(_0x78cac0)this[_0x5c28('0x216')](_0x78cac0);},Game_Character[_0x5c28('0x404')]['turnTowardPoint']=function(_0x586329,_0xa9a188){const _0x3b1bca=this[_0x5c28('0x311')](_0x586329,_0xa9a188,![]);if(_0x3b1bca)this[_0x5c28('0x210')](_0x3b1bca);},Game_Character[_0x5c28('0x404')][_0x5c28('0x1ad')]=function(_0x4c8c6a,_0x104da0){const _0x299165=this[_0x5c28('0x326')](_0x4c8c6a,_0x104da0,![]);if(_0x299165)this[_0x5c28('0x210')](_0x299165);},Game_Character[_0x5c28('0x404')][_0x5c28('0x1cb')]=function(_0x4740f9){if(_0x4740f9)this['moveTowardPoint'](_0x4740f9['x'],_0x4740f9['y']);},Game_Character[_0x5c28('0x404')]['moveAwayFromCharacter']=function(_0x213c97){if(_0x213c97)this[_0x5c28('0x2da')](_0x213c97['x'],_0x213c97['y']);},Game_Character[_0x5c28('0x404')][_0x5c28('0x2a3')]=function(_0x4715f3){if(_0x4715f3)this['turnTowardPoint'](_0x4715f3['x'],_0x4715f3['y']);},Game_Character[_0x5c28('0x404')][_0x5c28('0x12e')]=function(_0x455f1e){if(_0x455f1e)this['turnAwayFromPoint'](_0x455f1e['x'],_0x455f1e['y']);},VisuMZ[_0x5c28('0x3e9')]['Game_Player_isDashing']=Game_Player[_0x5c28('0x404')][_0x5c28('0x390')],Game_Player[_0x5c28('0x404')]['isDashing']=function(){if(this[_0x5c28('0x134')])return!![];return VisuMZ[_0x5c28('0x3e9')][_0x5c28('0x177')][_0x5c28('0x1c7')](this);},Game_Player[_0x5c28('0x404')][_0x5c28('0x1d')]=function(){return this[_0x5c28('0x390')]()&&(this[_0x5c28('0x20d')]()||this['getInputDirection']()!==0x0&&this[_0x5c28('0x16')](this['_x'],this['_y'],this['getInputDirection']())||$gameTemp[_0x5c28('0x279')]());},VisuMZ[_0x5c28('0x3e9')][_0x5c28('0x7a')]=Game_Player[_0x5c28('0x404')][_0x5c28('0xcb')],Game_Player[_0x5c28('0x404')]['getInputDirection']=function(){return $gameMap['isSupportDiagonalMovement']()?this[_0x5c28('0x3b4')]():VisuMZ[_0x5c28('0x3e9')][_0x5c28('0x7a')][_0x5c28('0x1c7')](this);},Game_Player[_0x5c28('0x404')][_0x5c28('0x3b4')]=function(){return Input[_0x5c28('0x238')];},Game_Player[_0x5c28('0x404')][_0x5c28('0xbc')]=function(){if(!this[_0x5c28('0x20d')]()&&this['canMove']()){let _0x5701c1=this['getInputDirection']();if(_0x5701c1>0x0)$gameTemp[_0x5c28('0x29b')]();else{if($gameTemp[_0x5c28('0x279')]()){if('Ctaan'===_0x5c28('0x172')){const _0x3cc437=$gameTemp[_0x5c28('0x290')](),_0x5742e6=$gameTemp['destinationY']();if($gameMap[_0x5c28('0x2a7')]()){if(_0x5c28('0x360')!==_0x5c28('0x360')){function _0x3a9881(){return _0x5ee637>0x0?0x4:0x6;}}else _0x5701c1=this[_0x5c28('0x184')](_0x3cc437,_0x5742e6);}else{if(_0x5c28('0x1ec')!==_0x5c28('0x293'))_0x5701c1=this['findDirectionTo'](_0x3cc437,_0x5742e6);else{function _0x412e6a(){const _0x2a9857=_0x1b0471['x'],_0x510844=_0x3df0c3['y'];if(!this[_0x5c28('0x3c7')](_0x2a9857,_0x510844))return;if(_0x4b3896){if(this[_0x5c28('0x1cd')](_0x2a9857,_0x510844)['length']>0x0)return;if(_0x508813['x']===_0x2a9857&&_0x38679c['y']===_0x510844)return;if(this['boat']()[_0x5c28('0x2c7')](_0x2a9857,_0x510844))return;if(this[_0x5c28('0x299')]()['posNt'](_0x2a9857,_0x510844))return;}if(_0x42f92a){if(!this[_0x5c28('0x21')](_0x2a9857,_0x510844))return;}this[_0x5c28('0x268')](_0x122f25);}}}}else{function _0x496dea(){const _0x2be06a=this['event']()[_0x5c28('0x108')];if(_0x2be06a==='')return;this['checkEventsMoveCoreStringTags'](_0x2be06a);}}}}if(_0x5701c1>0x0){if('sdpqe'==='sdpqe'){this[_0x5c28('0x3c5')]=this[_0x5c28('0x3c5')]||0x0;if(this[_0x5c28('0x24a')]())this['setDirection'](_0x5701c1);else{if(_0x5c28('0x2f')===_0x5c28('0x37f')){function _0x2335e0(){const _0x420333=_0x33ef89(_0x167f6f['$1']),_0x2526d0=_0x191d8b(_0x2066aa['$2']);return this[_0x5c28('0x337')](_0x420333,_0x2526d0);}}else this[_0x5c28('0x1b')](_0x5701c1);}this[_0x5c28('0x3c5')]++;}else{function _0x149cf5(){this[_0x5c28('0x1cc')][_0x5c28('0xc0')][_0x5c28('0x17a')](_0x2a7a7f,this[_0x5c28('0x113')]);}}}else this[_0x5c28('0x3c5')]=0x0;}},Game_Player['prototype'][_0x5c28('0x24a')]=function(){const _0x3a9d38=VisuMZ[_0x5c28('0x3e9')][_0x5c28('0x376')][_0x5c28('0x347')];if(!_0x3a9d38[_0x5c28('0x256')])return![];if($gameTemp[_0x5c28('0x279')]())return![];if(this[_0x5c28('0x390')]()||this['isMoving']()||this[_0x5c28('0x374')]())return![];return this[_0x5c28('0x3c5')]<_0x3a9d38[_0x5c28('0x4f')];},VisuMZ[_0x5c28('0x3e9')][_0x5c28('0xd3')]=Game_Player[_0x5c28('0x404')][_0x5c28('0x1b')],Game_Player[_0x5c28('0x404')][_0x5c28('0x1b')]=function(_0x15ca60){if($gameMap[_0x5c28('0x2a7')]()){if(_0x5c28('0x5c')!==_0x5c28('0x5c')){function _0x25e644(){_0x50c1a2=_0x147549(_0x1dba4c['$1']),_0x11691b=_0x782553(_0x5e6296['$2']);}}else this[_0x5c28('0x216')](_0x15ca60);}else{if(_0x5c28('0x1bc')!==_0x5c28('0x1bc')){function _0xa6603c(){this['createLabelWindowForTarget'](_0x5da41f);}}else VisuMZ[_0x5c28('0x3e9')][_0x5c28('0xd3')]['call'](this,_0x15ca60);}},VisuMZ[_0x5c28('0x3e9')][_0x5c28('0x38c')]=Game_Player[_0x5c28('0x404')][_0x5c28('0x287')],Game_Player[_0x5c28('0x404')][_0x5c28('0x287')]=function(_0x584d77,_0x32b5d5,_0xa2c84a){if($gameMap['isRegionAllowPass'](_0x584d77,_0x32b5d5,_0xa2c84a,_0x5c28('0x103')))return!![];if($gameMap[_0x5c28('0x332')](_0x584d77,_0x32b5d5,_0xa2c84a,'player'))return![];return VisuMZ['EventsMoveCore'][_0x5c28('0x38c')][_0x5c28('0x1c7')](this,_0x584d77,_0x32b5d5,_0xa2c84a);},VisuMZ[_0x5c28('0x3e9')][_0x5c28('0x15')]=Game_Player[_0x5c28('0x404')]['checkEventTriggerHere'],Game_Player['prototype'][_0x5c28('0x77')]=function(_0x30185f){VisuMZ[_0x5c28('0x3e9')][_0x5c28('0x15')]['call'](this,_0x30185f);if(this[_0x5c28('0x7c')]()){this[_0x5c28('0x2d6')](_0x30185f);if(_0x30185f['includes'](0x0)&&this[_0x5c28('0x1fe')]()===_0x5c28('0x22e'))this[_0x5c28('0x199')](this['x'],this['y']);else(_0x30185f['includes'](0x1)||_0x30185f[_0x5c28('0x369')](0x2))&&this[_0x5c28('0x2e4')]();}},VisuMZ[_0x5c28('0x3e9')][_0x5c28('0x1c3')]=Game_Player['prototype'][_0x5c28('0x420')],Game_Player[_0x5c28('0x404')][_0x5c28('0x420')]=function(_0x6caf47){VisuMZ[_0x5c28('0x3e9')][_0x5c28('0x1c3')][_0x5c28('0x1c7')](this,_0x6caf47);if(this[_0x5c28('0x7c')]()&&_0x6caf47[_0x5c28('0x369')](0x0)&&this['startMapCommonEventOnOKTarget']()===_0x5c28('0x41c')){const _0x22d3a9=this['direction'](),_0x138d47=$gameMap[_0x5c28('0x1ef')](this['x'],_0x22d3a9),_0x45533e=$gameMap[_0x5c28('0x3ab')](this['y'],_0x22d3a9);this[_0x5c28('0x199')](_0x138d47,_0x45533e);}},Game_Player['prototype'][_0x5c28('0x2d6')]=function(_0x38cbe6){if($gameMap[_0x5c28('0x88')]())return;if($gameMap[_0x5c28('0x1a9')]())return;const _0xb6415d=$gameMap[_0x5c28('0x1dc')]();for(const _0x269e11 of _0xb6415d){if(_0x5c28('0x2ae')!==_0x5c28('0x2ae')){function _0x472166(){return _0x54abcb['EventsMoveCore'][_0x5c28('0x376')][_0x5c28('0x400')];}}else{if(!_0x269e11)continue;if(!_0x269e11[_0x5c28('0x34e')](_0x38cbe6))continue;if(this['meetActivationRegionConditions'](_0x269e11))return _0x269e11[_0x5c28('0x3b3')]();if(this[_0x5c28('0x179')](_0x269e11))return _0x269e11[_0x5c28('0x3b3')]();}}},Game_Player[_0x5c28('0x404')][_0x5c28('0x14f')]=function(_0x1d6cb4){if($gameMap[_0x5c28('0x88')]())return![];if($gameMap['isAnyEventStarting']())return![];return _0x1d6cb4[_0x5c28('0x25f')]()[_0x5c28('0x369')](this[_0x5c28('0x64')]());},Game_Player[_0x5c28('0x404')][_0x5c28('0x179')]=function(_0x5390cc){if($gameMap[_0x5c28('0x88')]())return![];if($gameMap[_0x5c28('0x1a9')]())return![];if([_0x5c28('0x37d'),_0x5c28('0x270')][_0x5c28('0x369')](_0x5390cc[_0x5c28('0x2b1')]()))return![];const _0xf3539c=_0x5390cc[_0x5c28('0x2b1')](),_0x1fdba1=_0x5390cc[_0x5c28('0x6a')]();switch(_0xf3539c){case _0x5c28('0x174'):const _0x5005ea=$gameMap[_0x5c28('0x2cf')](this['x'],this['y'],_0x5390cc['x'],_0x5390cc['y']);return _0x5390cc[_0x5c28('0x6a')]()>=_0x5005ea;break;case _0x5c28('0x1d1'):return _0x1fdba1>=Math[_0x5c28('0x10')](_0x5390cc[_0x5c28('0xef')](this['x']))&&_0x1fdba1>=Math[_0x5c28('0x10')](_0x5390cc[_0x5c28('0x27a')](this['y']));break;case _0x5c28('0x4d'):return _0x1fdba1>=Math[_0x5c28('0x10')](_0x5390cc[_0x5c28('0x27a')](this['y']));break;case _0x5c28('0x72'):return _0x1fdba1>=Math[_0x5c28('0x10')](_0x5390cc[_0x5c28('0xef')](this['x']));break;case _0x5c28('0x255'):return![];break;}},Game_Player[_0x5c28('0x404')][_0x5c28('0x199')]=function(_0x2b4969,_0xce7185){if($gameMap[_0x5c28('0x88')]())return;if($gameMap[_0x5c28('0x1a9')]())return;let _0x263a1e=VisuMZ[_0x5c28('0x3e9')][_0x5c28('0x376')]['RegionOk'],_0x13cb4d=$gameMap[_0x5c28('0x64')](_0x2b4969,_0xce7185);const _0x185c1b=_0x5c28('0x2a8')[_0x5c28('0x27f')](_0x13cb4d);if(_0x263a1e[_0x185c1b]){if(_0x5c28('0xb')!==_0x5c28('0x2b8'))$gameTemp[_0x5c28('0x18c')](_0x263a1e[_0x185c1b]);else{function _0x2726c6(){_0x5b940d[_0x5c28('0x404')][_0x5c28('0xed')][_0x5c28('0x1c7')](this),this[_0x5c28('0x240')]();}}}},Game_Player['prototype'][_0x5c28('0x1fe')]=function(){return VisuMZ[_0x5c28('0x3e9')][_0x5c28('0x376')][_0x5c28('0x400')];},Game_Player[_0x5c28('0x404')][_0x5c28('0x2e4')]=function(){if($gameMap[_0x5c28('0x88')]())return;if($gameMap[_0x5c28('0x1a9')]())return;let _0x39186a=VisuMZ[_0x5c28('0x3e9')][_0x5c28('0x376')][_0x5c28('0x1a6')];const _0x1c4891=_0x5c28('0x2a8')[_0x5c28('0x27f')](this[_0x5c28('0x64')]());if(_0x39186a[_0x1c4891]){if(_0x5c28('0x8b')!==_0x5c28('0x8b')){function _0x3c593e(){if(this[_0x5c28('0x40d')]()>=0x0){const _0x2cf550=_0x327b30[_0x5c28('0x2ec')](this['moveSynchTarget']());if(_0x2cf550)return _0x2cf550[_0x5c28('0x173')]();}return _0x51e2fe['prototype'][_0x5c28('0x173')][_0x5c28('0x1c7')](this);}}else $gameTemp[_0x5c28('0x18c')](_0x39186a[_0x1c4891]);}},VisuMZ[_0x5c28('0x3e9')][_0x5c28('0x3a2')]=Game_Player[_0x5c28('0x404')][_0x5c28('0x318')],Game_Player[_0x5c28('0x404')][_0x5c28('0x318')]=function(){VisuMZ[_0x5c28('0x3e9')][_0x5c28('0x3a2')][_0x5c28('0x1c7')](this),VisuMZ[_0x5c28('0x3df')](0x0);},Game_Follower[_0x5c28('0x404')]['isDashing']=function(){return $gamePlayer[_0x5c28('0x390')]();},Game_Follower[_0x5c28('0x404')][_0x5c28('0x1d')]=function(){return $gamePlayer[_0x5c28('0x1d')]();},Game_Follower[_0x5c28('0x404')][_0x5c28('0x173')]=function(){return $gamePlayer[_0x5c28('0x173')]();},VisuMZ[_0x5c28('0x3e9')]['Game_Vehicle_isMapPassable']=Game_Vehicle[_0x5c28('0x404')][_0x5c28('0x287')],Game_Vehicle[_0x5c28('0x404')]['isMapPassable']=function(_0x102e58,_0x4a3dac,_0x1b4072){if($gameMap['isRegionAllowPass'](_0x102e58,_0x4a3dac,_0x1b4072,this['_type']))return!![];if($gameMap[_0x5c28('0x332')](_0x102e58,_0x4a3dac,_0x1b4072,this[_0x5c28('0x34f')]))return![];return VisuMZ['EventsMoveCore'][_0x5c28('0x2b7')][_0x5c28('0x1c7')](this,_0x102e58,_0x4a3dac,_0x1b4072);},Game_Vehicle[_0x5c28('0x404')]['isAirshipPassable']=function(_0x51ee3c,_0x1bc37f,_0x31c049){if($gameMap['isRegionAllowPass'](_0x51ee3c,_0x1bc37f,_0x31c049,this[_0x5c28('0x34f')]))return!![];if($gameMap['isRegionForbidPass'](_0x51ee3c,_0x1bc37f,_0x31c049,this[_0x5c28('0x34f')]))return![];return VisuMZ[_0x5c28('0x3e9')][_0x5c28('0x2fe')]['call']($gamePlayer,_0x51ee3c,_0x1bc37f,_0x31c049);},VisuMZ[_0x5c28('0x3e9')][_0x5c28('0x35e')]=Game_Vehicle['prototype'][_0x5c28('0xdb')],Game_Vehicle['prototype'][_0x5c28('0xdb')]=function(_0x4d0eab,_0x57f313,_0xab9410){if($gameMap[_0x5c28('0x2be')](_0x4d0eab,_0x57f313,_0xab9410,this['_type']))return!![];const _0x5c9e14=this['_type'][_0x5c28('0x269')](0x0)[_0x5c28('0x248')]()+this['_type']['slice'](0x1),_0x3a53ed=_0x5c28('0x352')[_0x5c28('0x27f')](_0x5c9e14);return VisuMZ[_0x5c28('0x3e9')][_0x5c28('0x376')][_0x5c28('0x175')][_0x3a53ed]?![]:VisuMZ[_0x5c28('0x3e9')]['Game_Vehicle_isLandOk'][_0x5c28('0x1c7')](this,_0x4d0eab,_0x57f313,_0xab9410);},VisuMZ[_0x5c28('0x3e9')][_0x5c28('0x1')]=Game_Vehicle[_0x5c28('0x404')]['initMoveSpeed'],Game_Vehicle[_0x5c28('0x404')][_0x5c28('0x33b')]=function(){VisuMZ[_0x5c28('0x3e9')][_0x5c28('0x1')]['call'](this);const _0x1e7a9f=VisuMZ[_0x5c28('0x3e9')][_0x5c28('0x376')]['Movement'];if(this[_0x5c28('0x3cd')]()){if(_0x5c28('0x375')!==_0x5c28('0x9e')){if(_0x1e7a9f[_0x5c28('0x1c0')])this[_0x5c28('0x378')](_0x1e7a9f['BoatSpeed']);}else{function _0x3335ff(){const _0x576ae6=this[_0x5c28('0x3f4')](this[_0x5c28('0x81')]());return _0x3191d1[_0x5c28('0x3ab')](this['y'],_0x576ae6);}}}else{if(this[_0x5c28('0x224')]()){if(_0x1e7a9f[_0x5c28('0x237')])this[_0x5c28('0x378')](_0x1e7a9f[_0x5c28('0x237')]);}else{if(this[_0x5c28('0x2bb')]()){if(_0x1e7a9f[_0x5c28('0xe9')])this[_0x5c28('0x378')](_0x1e7a9f[_0x5c28('0xe9')]);}}}},VisuMZ[_0x5c28('0x3e9')][_0x5c28('0x74')]=Game_Event[_0x5c28('0x404')][_0x5c28('0x23')],Game_Event[_0x5c28('0x404')]['initialize']=function(_0x29d61e,_0x2a8d4a){VisuMZ['EventsMoveCore'][_0x5c28('0x74')][_0x5c28('0x1c7')](this,_0x29d61e,_0x2a8d4a),this['setupCopyEvent'](),this[_0x5c28('0x349')](),this[_0x5c28('0x2df')]();},VisuMZ[_0x5c28('0x3e9')][_0x5c28('0x58')]=Game_Event[_0x5c28('0x404')][_0x5c28('0x37a')],Game_Event[_0x5c28('0x404')][_0x5c28('0x37a')]=function(){if(this[_0x5c28('0x373')]!==undefined){const _0x28156b=this[_0x5c28('0x373')][_0x5c28('0x32e')],_0x39f0ed=this['_eventMorphData']['eventId'];return VisuMZ[_0x5c28('0x340')][_0x28156b][_0x5c28('0x1dc')][_0x39f0ed];}if(this[_0x5c28('0x362')]!==undefined){const _0x12c538=this['_eventCopyData'][_0x5c28('0x32e')],_0x47f845=this[_0x5c28('0x362')][_0x5c28('0x18a')];return VisuMZ[_0x5c28('0x340')][_0x12c538][_0x5c28('0x1dc')][_0x47f845];}if(this[_0x5c28('0x365')]!==undefined){const _0x504b31=this['_eventSpawnData'][_0x5c28('0x32e')],_0x2e265c=this[_0x5c28('0x365')][_0x5c28('0x18a')];return VisuMZ[_0x5c28('0x340')][_0x504b31][_0x5c28('0x1dc')][_0x2e265c];}if($gameTemp[_0x5c28('0x3e7')]!==undefined){const _0x2fd457=$gameTemp['_spawnData'][_0x5c28('0x32e')],_0x3cbcd4=$gameTemp[_0x5c28('0x3e7')][_0x5c28('0x18a')];return VisuMZ[_0x5c28('0x340')][_0x2fd457][_0x5c28('0x1dc')][_0x3cbcd4];}return VisuMZ['EventsMoveCore']['Game_Event_event'][_0x5c28('0x1c7')](this);},Game_Event[_0x5c28('0x404')][_0x5c28('0x65')]=function(_0x27d5f3,_0x200300){if(_0x27d5f3===0x0||_0x200300===0x0)return![];if(!VisuMZ[_0x5c28('0x340')][_0x27d5f3]){if($gameTemp[_0x5c28('0xbe')]()){if(_0x5c28('0xd4')===_0x5c28('0x27d')){function _0x54a58f(){_0x2759ec=_0x5b19c1(_0x3102f4['$1']),_0x2d74be=_0x4825e3(_0x17de65['$2']);}}else console['log'](_0x5c28('0x3ca')[_0x5c28('0x27f')](_0x27d5f3));}return![];}return!![];},VisuMZ[_0x5c28('0x3e9')]['Game_Event_start']=Game_Event[_0x5c28('0x404')]['start'],Game_Event[_0x5c28('0x404')][_0x5c28('0x3b3')]=function(){VisuMZ[_0x5c28('0x3e9')][_0x5c28('0x283')][_0x5c28('0x1c7')](this),Imported[_0x5c28('0x39e')]&&Input[_0x5c28('0x6b')](VisuMZ['MessageCore'][_0x5c28('0x376')][_0x5c28('0xfd')][_0x5c28('0x31a')])&&Input[_0x5c28('0x62')]();},Game_Event[_0x5c28('0x404')]['setupCopyEvent']=function(){const _0x204871=this['event']()[_0x5c28('0x108')];if(_0x204871==='')return;if(DataManager[_0x5c28('0x197')]()||DataManager[_0x5c28('0x187')]())return;const _0x30c43d=VisuMZ[_0x5c28('0x3e9')]['Settings'][_0x5c28('0x124')];let _0x473b43=null,_0x2b561c=0x0,_0x3f55b2=0x0;if(_0x204871[_0x5c28('0x23b')](/<COPY EVENT:[ ]MAP[ ](\d+),[ ]EVENT[ ](\d+)>/i)){if(_0x5c28('0xb7')===_0x5c28('0xb7'))_0x2b561c=Number(RegExp['$1']),_0x3f55b2=Number(RegExp['$2']);else{function _0x419c10(){_0x281c95[_0x5c28('0x3f8')](_0x370eba,_0x291019),_0x1834d6[_0x5c28('0x25b')](_0x2448a5,_0x6b0cc3[_0x5c28('0xb3')],_0x24231c['IconBufferX'],_0x678205[_0x5c28('0x23e')],_0x19cf81['IconBlendMode']);}}}else{if(_0x204871['match'](/<COPY EVENT:[ ](\d+),[ ](\d+)>/i))_0x2b561c=Number(RegExp['$1']),_0x3f55b2=Number(RegExp['$2']);else{if(_0x204871[_0x5c28('0x23b')](/<COPY EVENT:[ ](.*?)>/i)){const _0x1342d9=String(RegExp['$1'])['toUpperCase']()[_0x5c28('0x263')]();_0x473b43=VisuMZ['EventTemplates'][_0x1342d9];if(!_0x473b43)return;_0x2b561c=_0x473b43['MapID'],_0x3f55b2=_0x473b43[_0x5c28('0x401')];}}}if(!this[_0x5c28('0x65')](_0x2b561c,_0x3f55b2))return;_0x30c43d[_0x5c28('0x40c')][_0x5c28('0x1c7')](this,_0x2b561c,_0x3f55b2,this);if(_0x473b43)_0x473b43[_0x5c28('0x40c')][_0x5c28('0x1c7')](this,_0x2b561c,_0x3f55b2,this);this[_0x5c28('0x362')]={'mapId':_0x2b561c,'eventId':_0x3f55b2},this[_0x5c28('0x2fa')]=-0x2,this[_0x5c28('0x389')](),_0x30c43d[_0x5c28('0x1d5')][_0x5c28('0x1c7')](this,_0x2b561c,_0x3f55b2,this);if(_0x473b43)_0x473b43['PostCopyJS'][_0x5c28('0x1c7')](this,_0x2b561c,_0x3f55b2,this);$gameMap[_0x5c28('0x1d8')]();},Game_Event[_0x5c28('0x404')][_0x5c28('0x349')]=function(){const _0x2e84f1=$gameSystem[_0x5c28('0x13a')](this);if(!_0x2e84f1)return;const _0x4b4b8c=_0x2e84f1[_0x5c28('0x24f')]['toUpperCase']()[_0x5c28('0x263')]();if(_0x4b4b8c!==_0x5c28('0x30d'))this[_0x5c28('0x1e8')](_0x4b4b8c,!![]);else{if('rezih'===_0x5c28('0x3b6'))this[_0x5c28('0x28d')](_0x2e84f1[_0x5c28('0x32e')],_0x2e84f1[_0x5c28('0x18a')],!![]);else{function _0x3674cf(){_0x100d0c[_0x5c28('0x3f8')](_0x39aa2d,_0x86f8eb);if(!_0x2fb74d)return;const _0x4f6a49=_0x28d9eb[_0x5c28('0x37a')](_0x260399['EventId']);if(_0x4f6a49)_0x4f6a49[_0x5c28('0x22f')]();}}}},Game_Event[_0x5c28('0x404')][_0x5c28('0x28d')]=function(_0x57dcee,_0x3106e7,_0x4831b8){if(!this[_0x5c28('0x65')](_0x57dcee,_0x3106e7))return;const _0x14f0aa=VisuMZ[_0x5c28('0x3e9')][_0x5c28('0x376')][_0x5c28('0x124')];if(!_0x4831b8)_0x14f0aa[_0x5c28('0x1bf')][_0x5c28('0x1c7')](this,_0x57dcee,_0x3106e7,this);this['_eventMorphData']={'mapId':_0x57dcee,'eventId':_0x3106e7},this[_0x5c28('0x2fa')]=-0x2,this[_0x5c28('0x389')]();if(!_0x4831b8)_0x14f0aa[_0x5c28('0x31b')][_0x5c28('0x1c7')](this,_0x57dcee,_0x3106e7,this);this['clearEventCache']();},Game_Event[_0x5c28('0x404')]['morphIntoTemplate']=function(_0x1d8e5d,_0x3e61f8){_0x1d8e5d=_0x1d8e5d[_0x5c28('0x248')]()[_0x5c28('0x263')]();const _0x56f6a5=VisuMZ[_0x5c28('0xdf')][_0x1d8e5d];if(!_0x56f6a5)return;const _0x5becad=_0x56f6a5[_0x5c28('0x2ad')],_0xd50291=_0x56f6a5[_0x5c28('0x401')];if(!this['checkValidEventerMap'](_0x5becad,_0xd50291))return;if(!_0x3e61f8)_0x56f6a5[_0x5c28('0x1bf')][_0x5c28('0x1c7')](this,_0x5becad,_0xd50291,this);this[_0x5c28('0x28d')](_0x5becad,_0xd50291,_0x3e61f8);if(!_0x3e61f8)_0x56f6a5['PostMorphJS'][_0x5c28('0x1c7')](this,_0x5becad,_0xd50291,this);this[_0x5c28('0x1d8')]();},Game_Event[_0x5c28('0x404')][_0x5c28('0x3f3')]=function(){this[_0x5c28('0x373')]=undefined,this[_0x5c28('0x2fa')]=-0x2,this[_0x5c28('0x389')]();},Game_Event[_0x5c28('0x404')][_0x5c28('0x319')]=function(_0x2c2f94){const _0x2d7e04=VisuMZ[_0x5c28('0x3e9')][_0x5c28('0x376')]['Template'],_0x5efcd2=_0x2c2f94[_0x5c28('0x24f')]['toUpperCase']()[_0x5c28('0x263')](),_0x58529f=!['',_0x5c28('0x30d')][_0x5c28('0x369')](_0x5efcd2);let _0x1370b7=0x0,_0x4b8d55=0x0;if(_0x58529f){if(_0x5c28('0xf2')===_0x5c28('0xf2')){const _0x5dbef5=VisuMZ['EventTemplates'][_0x5efcd2];if(!_0x5dbef5)return;_0x1370b7=_0x5dbef5[_0x5c28('0x2ad')],_0x4b8d55=_0x5dbef5[_0x5c28('0x401')];}else{function _0x4e996a(){if(_0x4169b5[_0x5c28('0x88')]())return;if(_0x1dab35[_0x5c28('0x1a9')]())return;let _0x3c7fa7=_0x1809a8[_0x5c28('0x3e9')][_0x5c28('0x376')][_0x5c28('0x1a6')];const _0x125fff=_0x5c28('0x2a8')[_0x5c28('0x27f')](this[_0x5c28('0x64')]());_0x3c7fa7[_0x125fff]&&_0x570753[_0x5c28('0x18c')](_0x3c7fa7[_0x125fff]);}}}else _0x1370b7=_0x2c2f94[_0x5c28('0x32e')],_0x4b8d55=_0x2c2f94['eventId'];if(!this['checkValidEventerMap'](_0x1370b7,_0x4b8d55))return;if(_0x58529f){const _0x41be62=VisuMZ[_0x5c28('0xdf')][_0x5efcd2];_0x41be62['PreSpawnJS']['call'](this,_0x1370b7,_0x4b8d55,this);}_0x2d7e04[_0x5c28('0x409')][_0x5c28('0x1c7')](this,_0x1370b7,_0x4b8d55,this),this[_0x5c28('0x365')]=_0x2c2f94,this[_0x5c28('0x2fa')]=-0x2,this[_0x5c28('0x183')]=$gameMap[_0x5c28('0x32e')](),this[_0x5c28('0x330')]=_0x2c2f94[_0x5c28('0x32')],this['_spawnPreserved']=_0x2c2f94['spawnPreserved'],this[_0x5c28('0x346')](_0x2c2f94['x'],_0x2c2f94['y']),this[_0x5c28('0x210')](_0x2c2f94[_0x5c28('0x81')]),this['refresh']();if(_0x58529f){const _0x3e80b2=VisuMZ[_0x5c28('0xdf')][_0x5efcd2];if(!_0x3e80b2)return;_0x3e80b2[_0x5c28('0x19f')][_0x5c28('0x1c7')](this,_0x1370b7,_0x4b8d55,this);}_0x2d7e04[_0x5c28('0x19f')][_0x5c28('0x1c7')](this,_0x1370b7,_0x4b8d55,this);const _0x59d772=SceneManager[_0x5c28('0x250')];if(_0x59d772&&_0x59d772['_spriteset'])_0x59d772['_spriteset'][_0x5c28('0x406')](this);},Game_Event[_0x5c28('0x404')][_0x5c28('0x80')]=function(){return!!this[_0x5c28('0x365')];},VisuMZ['EventsMoveCore'][_0x5c28('0x3c9')]=Game_Event[_0x5c28('0x404')]['refresh'],Game_Event[_0x5c28('0x404')][_0x5c28('0x389')]=function(){VisuMZ['EventsMoveCore'][_0x5c28('0x3c9')][_0x5c28('0x1c7')](this),this[_0x5c28('0x2b4')]();},VisuMZ[_0x5c28('0x3e9')][_0x5c28('0x2d3')]=Game_Event[_0x5c28('0x404')][_0x5c28('0x1c6')],Game_Event[_0x5c28('0x404')][_0x5c28('0x1c6')]=function(){VisuMZ[_0x5c28('0x3e9')][_0x5c28('0x2d3')][_0x5c28('0x1c7')](this),this[_0x5c28('0x79')]();},VisuMZ[_0x5c28('0x3e9')][_0x5c28('0x26d')]=Game_Event[_0x5c28('0x404')]['setupPageSettings'],Game_Event['prototype'][_0x5c28('0x139')]=function(){this[_0x5c28('0x1c5')]=!![],VisuMZ[_0x5c28('0x3e9')]['Game_Event_setupPageSettings'][_0x5c28('0x1c7')](this),this['setupEventsMoveCoreEffects'](),this[_0x5c28('0x1c5')]=![];},Game_Event[_0x5c28('0x404')][_0x5c28('0x2b4')]=function(){if(!this[_0x5c28('0x37a')]())return;this['initEventsMoveCoreEffects'](),this[_0x5c28('0x39f')](),this[_0x5c28('0x243')](),this[_0x5c28('0x2f4')]();},Game_Event[_0x5c28('0x404')]['setupEventsMoveCoreNotetags']=function(){const _0x359a1c=this[_0x5c28('0x37a')]()[_0x5c28('0x108')];if(_0x359a1c==='')return;this[_0x5c28('0x6d')](_0x359a1c);},Game_Event[_0x5c28('0x404')][_0x5c28('0x243')]=function(){if(!this[_0x5c28('0x5')]())return;const _0x24d5cb=this['list']();let _0x3570fb='';for(const _0x408e33 of _0x24d5cb){if(_0x5c28('0x2d0')===_0x5c28('0x2d0')){if([0x6c,0x198]['includes'](_0x408e33[_0x5c28('0x1a7')])){if('BlIhr'===_0x5c28('0x281')){function _0x41cf02(){this[_0x5c28('0x13f')][_0x5c28('0x2bf')]()!==this[_0x5c28('0x30a')]&&(this['_text']=this['_event'][_0x5c28('0x2bf')](),this[_0x5c28('0x389')]());}}else{if(_0x3570fb!=='')_0x3570fb+='\x0a';_0x3570fb+=_0x408e33[_0x5c28('0x23f')][0x0];}}}else{function _0x47fbb8(){const _0x5df1a3=this[_0x5c28('0x37a')](_0x516674);if(_0x5df1a3)_0x5df1a3[_0x5c28('0x168')]();}}}this[_0x5c28('0x6d')](_0x3570fb);},Game_Event[_0x5c28('0x404')][_0x5c28('0x79')]=function(){const _0x17a631=VisuMZ[_0x5c28('0x3e9')][_0x5c28('0x376')];this[_0x5c28('0x3de')]={'type':'none','distance':0x0,'regionList':[]},this[_0x5c28('0x14c')]=![],this['_clickTrigger']=![],this[_0x5c28('0x40e')]={'up':0x0,'down':0x0,'left':0x0,'right':0x0},this['_eventIcon']={'iconIndex':0x0,'bufferX':_0x17a631[_0x5c28('0xd1')][_0x5c28('0x395')],'bufferY':_0x17a631[_0x5c28('0xd1')][_0x5c28('0x36e')],'blendMode':_0x17a631['Icon']['BlendMode']},this[_0x5c28('0x272')]={'text':'','visibleRange':_0x17a631['Label'][_0x5c28('0x16c')],'offsetX':_0x17a631[_0x5c28('0x3ed')][_0x5c28('0x133')],'offsetY':_0x17a631[_0x5c28('0x3ed')][_0x5c28('0x17')]},this[_0x5c28('0x22c')]=[],this[_0x5c28('0x382')]={'target':-0x1,'type':_0x5c28('0xf5'),'delay':0x1},this[_0x5c28('0x209')]=![],this[_0x5c28('0x34d')]={'visible':!![],'filename':_0x17a631[_0x5c28('0x347')][_0x5c28('0x1b4')]},this[_0x5c28('0x371')](),this[_0x5c28('0xd2')]();},Game_Event[_0x5c28('0x404')][_0x5c28('0x6d')]=function(_0x2a5096){if(_0x2a5096[_0x5c28('0x23b')](/<ACTIVATION[ ](?:REGION|REGIONS):[ ]*(\d+(?:\s*,\s*\d+)*)>/i))this[_0x5c28('0x3de')][_0x5c28('0x2e3')]=JSON[_0x5c28('0x403')]('['+RegExp['$1']['match'](/\d+/g)+']'),this[_0x5c28('0x3de')][_0x5c28('0x193')]=_0x5c28('0x270');else _0x2a5096['match'](/<ACTIVATION[ ](.*?):[ ](\d+)>/i)&&(type=String(RegExp['$1'])[_0x5c28('0xf6')]()['trim'](),this[_0x5c28('0x3de')]['type']=type,this[_0x5c28('0x3de')][_0x5c28('0x2cf')]=Number(RegExp['$2']));_0x2a5096['match'](/<ALWAYS UPDATE MOVEMENT>/i)&&(this[_0x5c28('0x14c')]=!![]);_0x2a5096[_0x5c28('0x23b')](/<CLICK TRIGGER>/i)&&(this[_0x5c28('0x246')]=!![]);const _0xeb713c=_0x2a5096[_0x5c28('0x23b')](/<HITBOX[ ](.*?):[ ](\d+)>/gi);if(_0xeb713c)for(const _0x2225bb of _0xeb713c){if(_0x5c28('0x19d')!==_0x5c28('0xa7')){if(_0x2225bb[_0x5c28('0x23b')](/<HITBOX[ ](.*?):[ ](\d+)>/i)){const _0xdfcad4=String(RegExp['$1'])[_0x5c28('0xf6')]()['trim'](),_0x59b652=Number(RegExp['$2']);this[_0x5c28('0x40e')][_0xdfcad4]=_0x59b652;}}else{function _0x18214e(){this['_shadowSprite'][_0x5c28('0x2e5')]['x']=_0x154ff1['min'](0x1,this[_0x5c28('0x22a')][_0x5c28('0x2e5')]['x']+0.1),this['_shadowSprite']['scale']['y']=_0x40b572[_0x5c28('0x2f5')](0x1,this[_0x5c28('0x22a')]['scale']['y']+0.1);}}}if(_0x2a5096[_0x5c28('0x23b')](/<ICON:[ ](\d+)>/i)){if(_0x5c28('0x3ec')===_0x5c28('0x3ec'))this[_0x5c28('0x297')][_0x5c28('0xab')]=Number(RegExp['$1']);else{function _0x49ff8f(){return this[_0x5c28('0x3de')]['distance']||0x0;}}}_0x2a5096[_0x5c28('0x23b')](/<ICON (?:BUFFER|OFFSET) X:[ ]([\+\-]\d+)>/i)&&(this[_0x5c28('0x297')][_0x5c28('0x2ab')]=Number(RegExp['$1']));_0x2a5096[_0x5c28('0x23b')](/<ICON (?:BUFFER|OFFSET) Y:[ ]([\+\-]\d+)>/i)&&(this[_0x5c28('0x297')][_0x5c28('0x232')]=Number(RegExp['$1']));_0x2a5096[_0x5c28('0x23b')](/<ICON (?:BUFFER|OFFSET):[ ]([\+\-]\d+),[ ]([\+\-]\d+)>/i)&&(this[_0x5c28('0x297')][_0x5c28('0x2ab')]=Number(RegExp['$1']),this[_0x5c28('0x297')][_0x5c28('0x232')]=Number(RegExp['$2']));if(_0x2a5096['match'](/<ICON BLEND MODE:[ ](.*?)>/i)){if(_0x5c28('0x228')!==_0x5c28('0x3d')){const _0x34035e=String(RegExp['$1'])['toUpperCase']()[_0x5c28('0x263')](),_0x1bf8e5=[_0x5c28('0x4b'),_0x5c28('0x67'),_0x5c28('0x83'),_0x5c28('0x1ff')];this[_0x5c28('0x297')][_0x5c28('0x321')]=_0x1bf8e5[_0x5c28('0x2c0')](_0x34035e)[_0x5c28('0x3e8')](0x0,0x3);}else{function _0x52c0ed(){return this[_0x5c28('0x34d')][_0x5c28('0xe6')];}}}_0x2a5096[_0x5c28('0x23b')](/<LABEL:[ ](.*?)>/i)&&(this[_0x5c28('0x272')][_0x5c28('0x1f0')]=String(RegExp['$1'])[_0x5c28('0x263')]());if(_0x2a5096[_0x5c28('0x23b')](/<LABEL>\s*([\s\S]*)\s*<\/LABEL>/i)){if(_0x5c28('0x372')===_0x5c28('0x357')){function _0xb2b2a1(){this['x']+=_0x47059c['EventsMoveCore'][_0x5c28('0x376')][_0x5c28('0x221')][_0x5c28('0x125')],this['y']+=_0x54ffcf[_0x5c28('0x3e9')][_0x5c28('0x376')][_0x5c28('0x221')]['BalloonOffsetY'];}}else this[_0x5c28('0x272')]['text']=String(RegExp['$1'])[_0x5c28('0x263')]();}if(_0x2a5096[_0x5c28('0x23b')](/<LABEL (?:BUFFER|OFFSET) X:[ ]([\+\-]\d+)>/i)){if('CVRcs'!==_0x5c28('0x344')){function _0x44eadb(){return!![];}}else this[_0x5c28('0x272')]['offsetX']=Number(RegExp['$1']);}_0x2a5096[_0x5c28('0x23b')](/<LABEL (?:BUFFER|OFFSET) Y:[ ]([\+\-]\d+)>/i)&&(this[_0x5c28('0x272')][_0x5c28('0x3fa')]=Number(RegExp['$1']));_0x2a5096[_0x5c28('0x23b')](/<LABEL (?:BUFFER|OFFSET):[ ]([\+\-]\d+),[ ]([\+\-]\d+)>/i)&&(this[_0x5c28('0x272')]['offsetX']=Number(RegExp['$1']),this[_0x5c28('0x272')][_0x5c28('0x3fa')]=Number(RegExp['$2']));$gameTemp['registerSelfTarget'](this);for(;;){if(this[_0x5c28('0x272')][_0x5c28('0x1f0')]['match'](/\\V\[(\d+)\]/gi))this[_0x5c28('0x272')][_0x5c28('0x1f0')]=this['_labelWindow'][_0x5c28('0x1f0')][_0x5c28('0x71')](/\\V\[(\d+)\]/gi,(_0x5a32e4,_0x591f96)=>$gameVariables[_0x5c28('0x38')](parseInt(_0x591f96)));else break;}$gameTemp['clearSelfTarget']();_0x2a5096[_0x5c28('0x23b')](/<LABEL RANGE:[ ](\d+)>/i)&&(this['_labelWindow'][_0x5c28('0x178')]=Number(RegExp['$1']));if(_0x2a5096[_0x5c28('0x23b')](/<MOVE ONLY (?:REGION|REGIONS):[ ](\d+(?:\s*,\s*\d+)*)>/i)){if(_0x5c28('0x33')===_0x5c28('0x33')){const _0x51449d=JSON[_0x5c28('0x403')]('['+RegExp['$1'][_0x5c28('0x23b')](/\d+/g)+']');this['_moveOnlyRegions']=this[_0x5c28('0x22c')][_0x5c28('0x171')](_0x51449d),this[_0x5c28('0x22c')][_0x5c28('0x1e5')](0x0);}else{function _0x48102f(){_0x5040e7[_0x5c28('0x3e9')][_0x5c28('0x74')][_0x5c28('0x1c7')](this,_0x116fb6,_0x1a262f),this[_0x5c28('0x3fe')](),this[_0x5c28('0x349')](),this[_0x5c28('0x2df')]();}}}if(_0x2a5096[_0x5c28('0x23b')](/<MOVE SYNCH TARGET:[ ](.*?)>/i)){if(_0x5c28('0x5d')!==_0x5c28('0x5d')){function _0x251421(){return this[_0x5c28('0x390')]()&&(this[_0x5c28('0x20d')]()||this[_0x5c28('0xcb')]()!==0x0&&this[_0x5c28('0x16')](this['_x'],this['_y'],this[_0x5c28('0xcb')]())||_0x40affb[_0x5c28('0x279')]());}}else{const _0x2ed400=String(RegExp['$1']);if(_0x2ed400[_0x5c28('0x23b')](/PLAYER/i))this[_0x5c28('0x382')][_0x5c28('0x368')]=0x0;else _0x2ed400[_0x5c28('0x23b')](/EVENT[ ](\d+)/i)&&(this[_0x5c28('0x382')][_0x5c28('0x368')]=Number(RegExp['$1']));}}_0x2a5096[_0x5c28('0x23b')](/<MOVE SYNCH TYPE:[ ](.*?)>/i)&&(this['_moveSynch'][_0x5c28('0x193')]=String(RegExp['$1'])[_0x5c28('0xf6')]()[_0x5c28('0x263')]());_0x2a5096[_0x5c28('0x23b')](/<MOVE SYNCH DELAY:[ ](\d+)>/i)&&(this['_moveSynch'][_0x5c28('0x3b8')]=Number(RegExp['$1']));if(_0x2a5096['match'](/<SAVE EVENT (?:LOCATION|LOCATIONS)>/i)){if(_0x5c28('0x2a9')!=='mlQKu'){function _0x20e30a(){const _0x3ee826=this[_0x5c28('0x11c')],_0x5198bb=_0xb6890[this[_0x5c28('0x419')]],_0x4166c5=_0x5198bb[_0x5c28('0x1dc')][_0x3ee826[_0x5c28('0x18a')]];if(_0x4166c5&&_0x4166c5[_0x5c28('0x1b3')][_0x3ee826[_0x5c28('0x386')]-0x1]){const _0x442e29=_0x4166c5[_0x5c28('0x1b3')][_0x3ee826[_0x5c28('0x386')]-0x1][_0x5c28('0xf')];this[_0x5c28('0x3ce')](_0x442e29,this[_0x5c28('0x18a')]());}_0x19e896[this[_0x5c28('0x419')]]=_0x53b0ff,this[_0x5c28('0x419')]=_0x2f62b3,this[_0x5c28('0x11c')]=_0x39d08a;}}else this[_0x5c28('0x209')]=!![];}_0x2a5096[_0x5c28('0x23b')](/<HIDE SHADOW>/i)&&(this[_0x5c28('0x34d')][_0x5c28('0xc8')]=![]);_0x2a5096[_0x5c28('0x23b')](/<SHADOW FILENAME:[ ](.*?)>/i)&&(this[_0x5c28('0x34d')][_0x5c28('0xe6')]=String(RegExp['$1']));_0x2a5096[_0x5c28('0x23b')](/<SPRITE OFFSET X:[ ]([\+\-]\d+)>/i)&&(this[_0x5c28('0x149')]=Number(RegExp['$1']));_0x2a5096[_0x5c28('0x23b')](/<SPRITE OFFSET Y:[ ]([\+\-]\d+)>/i)&&(this[_0x5c28('0x394')]=Number(RegExp['$1']));_0x2a5096[_0x5c28('0x23b')](/<SPRITE OFFSET:[ ]([\+\-]\d+),[ ]([\+\-]\d+)>/i)&&(this[_0x5c28('0x149')]=Number(RegExp['$1']),this[_0x5c28('0x394')]=Number(RegExp['$2']));if(_0x2a5096[_0x5c28('0x23b')](/<STEP PATTERN:[ ](.*)>/i)){if(_0x5c28('0xb6')!==_0x5c28('0x222'))this['_stepPattern']=String(RegExp['$1'])[_0x5c28('0x248')]()[_0x5c28('0x263')]();else{function _0x57ae1a(){_0x307b09=_0x4ebfc4[_0x5c28('0x5e')];}}}},Game_Event['prototype'][_0x5c28('0x2f4')]=function(){this[_0x5c28('0x2a0')]();},Game_Event[_0x5c28('0x404')][_0x5c28('0x94')]=function(){if(this[_0x5c28('0x14c')])return!![];return Game_Character['prototype']['isNearTheScreen'][_0x5c28('0x1c7')](this);},VisuMZ[_0x5c28('0x3e9')]['Game_Event_updateSelfMovement']=Game_Event[_0x5c28('0x404')][_0x5c28('0x33c')],Game_Event[_0x5c28('0x404')][_0x5c28('0x33c')]=function(){if(this[_0x5c28('0x334')]())return;VisuMZ[_0x5c28('0x3e9')][_0x5c28('0x412')][_0x5c28('0x1c7')](this),this[_0x5c28('0x20d')]()&&VisuMZ[_0x5c28('0x3df')](this[_0x5c28('0x330')]);},Game_Event[_0x5c28('0x404')]['isPreventSelfMovement']=function(){const _0x3510b5=VisuMZ[_0x5c28('0x3e9')][_0x5c28('0x376')][_0x5c28('0x347')];if($gameMap[_0x5c28('0x88')]()&&_0x3510b5[_0x5c28('0x151')])return!![];if($gameMessage[_0x5c28('0xe2')]()&&_0x3510b5[_0x5c28('0x14d')])return!![];if(!$gameSystem[_0x5c28('0x4e')]())return!![];if(this[_0x5c28('0x40d')]()>=0x0)return!![];return![];},Game_Event[_0x5c28('0x404')][_0x5c28('0x2a0')]=function(){const _0x244600=SceneManager['_scene'][_0x5c28('0x3e4')];if(_0x244600){if(_0x5c28('0x407')!==_0x5c28('0x25e')){const _0x2a0550=_0x244600['findTargetSprite'](this);if(_0x2a0550&&_0x2a0550[_0x5c28('0x22a')]&&_0x2a0550[_0x5c28('0x22a')][_0x5c28('0x33e')]!==this['shadowFilename']()){if(_0x5c28('0x1cf')!==_0x5c28('0x229'))_0x2a0550[_0x5c28('0x22a')][_0x5c28('0x33e')]=this[_0x5c28('0x275')](),_0x2a0550[_0x5c28('0x22a')][_0x5c28('0x154')]=ImageManager[_0x5c28('0x298')](_0x2a0550[_0x5c28('0x22a')][_0x5c28('0x33e')]);else{function _0x4ace55(){return _0x29a6a0[_0x5c28('0x3e9')]['CustomPageConditions'][_0x5c28('0x405')](this['event']()[_0x5c28('0x2d2')],this[_0x5c28('0x34')]);}}}}else{function _0x20f3ce(){const _0x61388a=_0x3da5a5[_0x5c28('0x32a')](this);_0x61388a&&_0x61388a[_0x5c28('0x22a')]&&_0x61388a[_0x5c28('0x22a')][_0x5c28('0x33e')]!==this[_0x5c28('0x275')]()&&(_0x61388a[_0x5c28('0x22a')][_0x5c28('0x33e')]=this[_0x5c28('0x275')](),_0x61388a[_0x5c28('0x22a')][_0x5c28('0x154')]=_0x18e128[_0x5c28('0x298')](_0x61388a['_shadowSprite']['_filename']));}}}},Game_Event['prototype']['shadowFilename']=function(){return this[_0x5c28('0x34d')][_0x5c28('0xe6')];},Game_Event[_0x5c28('0x404')][_0x5c28('0xf0')]=function(){if(!this['_shadowGraphic'][_0x5c28('0xc8')])return![];return Game_CharacterBase[_0x5c28('0x404')][_0x5c28('0xf0')][_0x5c28('0x1c7')](this);},Game_Event['prototype'][_0x5c28('0x2bf')]=function(){return this[_0x5c28('0x272')]['text'];},Game_Event[_0x5c28('0x404')][_0x5c28('0x192')]=function(){return this[_0x5c28('0x272')][_0x5c28('0x178')];},Game_Event['prototype'][_0x5c28('0x287')]=function(_0x456307,_0x5bd051,_0x4ed48d){if(this[_0x5c28('0x1fb')]())return this[_0x5c28('0x0')](_0x456307,_0x5bd051,_0x4ed48d);if($gameMap[_0x5c28('0xb0')](_0x456307,_0x5bd051,_0x4ed48d,_0x5c28('0x37a')))return!![];if($gameMap[_0x5c28('0x332')](_0x456307,_0x5bd051,_0x4ed48d,'event'))return![];return Game_Character['prototype'][_0x5c28('0x287')][_0x5c28('0x1c7')](this,_0x456307,_0x5bd051,_0x4ed48d);},Game_Event['prototype'][_0x5c28('0x1fb')]=function(){if(this[_0x5c28('0x22c')]===undefined)this[_0x5c28('0x79')]();return this[_0x5c28('0x22c')][_0x5c28('0x286')]>0x0;},Game_Event[_0x5c28('0x404')][_0x5c28('0x0')]=function(_0x7a80f1,_0x3af7cf,_0x50d2d9){const _0x65dfdd=$gameMap['roundXWithDirection'](_0x7a80f1,_0x50d2d9),_0x1ae5e8=$gameMap[_0x5c28('0x3ab')](_0x3af7cf,_0x50d2d9),_0x2f690d=$gameMap['regionId'](_0x65dfdd,_0x1ae5e8);return this[_0x5c28('0x22c')][_0x5c28('0x369')](_0x2f690d);},VisuMZ[_0x5c28('0x3e9')][_0x5c28('0x267')]=Game_Event['prototype'][_0x5c28('0x3ee')],Game_Event[_0x5c28('0x404')]['findProperPageIndex']=function(){return this[_0x5c28('0x1a8')]=![],this[_0x5c28('0x251')]=![],this[_0x5c28('0x37a')]()?VisuMZ['EventsMoveCore'][_0x5c28('0x267')][_0x5c28('0x1c7')](this):-0x1;},VisuMZ[_0x5c28('0x3e9')][_0x5c28('0x2e0')]=Game_Event['prototype'][_0x5c28('0x2a6')],Game_Event['prototype'][_0x5c28('0x2a6')]=function(_0x16bc5c){this[_0x5c28('0x304')](_0x16bc5c),$gameTemp[_0x5c28('0x3f2')](this);const _0x42ca9e=VisuMZ[_0x5c28('0x3e9')]['Game_Event_meetsConditions'][_0x5c28('0x1c7')](this,_0x16bc5c);return $gameTemp[_0x5c28('0x73')](),_0x42ca9e;},Game_Event[_0x5c28('0x404')][_0x5c28('0x1c')]=function(){return this[_0x5c28('0x1a8')];},Game_Event[_0x5c28('0x404')][_0x5c28('0x304')]=function(_0x5407a7){const _0x1e6781=_0x5407a7[_0x5c28('0x7')];if(_0x1e6781[_0x5c28('0x7e')]&&DataManager[_0x5c28('0x3bb')](_0x1e6781[_0x5c28('0x327')])){if(_0x5c28('0xda')===_0x5c28('0xda'))this[_0x5c28('0x1a8')]=!![];else{function _0x137467(){this['contentsOpacity']-=this['opacitySpeed']();}}}else{if(_0x1e6781[_0x5c28('0x16a')]&&DataManager[_0x5c28('0x3bb')](_0x1e6781[_0x5c28('0x3bd')]))this[_0x5c28('0x1a8')]=!![];else _0x1e6781[_0x5c28('0x122')]&&DataManager[_0x5c28('0x1d7')](_0x1e6781['variableId'])&&(this[_0x5c28('0x1a8')]=!![]);}},Game_Event[_0x5c28('0x404')][_0x5c28('0x320')]=function(){return this[_0x5c28('0x246')];},Game_Event[_0x5c28('0x404')][_0x5c28('0x12')]=function(){$gameTemp[_0x5c28('0x29b')](),this[_0x5c28('0x3b3')]();},Game_Event[_0x5c28('0x404')][_0x5c28('0x37')]=function(_0x4dc48a,_0x111af4){return this['_addedHitbox']?this[_0x5c28('0x212')](_0x4dc48a,_0x111af4):Game_Character[_0x5c28('0x404')]['pos'][_0x5c28('0x1c7')](this,_0x4dc48a,_0x111af4);},Game_Event[_0x5c28('0x404')][_0x5c28('0x212')]=function(_0x167bbe,_0x5416fa){var _0x360c08=this['x']-this['_addedHitbox'][_0x5c28('0x32c')],_0x474e79=this['x']+this[_0x5c28('0x40e')][_0x5c28('0x3fb')],_0x949390=this['y']-this['_addedHitbox']['up'],_0x2dc5c2=this['y']+this['_addedHitbox'][_0x5c28('0x257')];return _0x360c08<=_0x167bbe&&_0x167bbe<=_0x474e79&&_0x949390<=_0x5416fa&&_0x5416fa<=_0x2dc5c2;},Game_Event['prototype'][_0x5c28('0x16')]=function(_0x5c8905,_0x44b641,_0x4d4dea){for(let _0x345dcf=-this[_0x5c28('0x40e')][_0x5c28('0x32c')];_0x345dcf<=this[_0x5c28('0x40e')][_0x5c28('0x3fb')];_0x345dcf++){if(_0x5c28('0x2f9')!=='ieSnh')for(let _0xe503f4=-this[_0x5c28('0x40e')]['up'];_0xe503f4<=this[_0x5c28('0x40e')][_0x5c28('0x257')];_0xe503f4++){if(!Game_Character['prototype'][_0x5c28('0x16')][_0x5c28('0x1c7')](this,_0x5c8905+_0x345dcf,_0x44b641+_0xe503f4,_0x4d4dea)){if(_0x5c28('0x7f')==='vNzzz'){function _0x34d9fe(){if([0x2,0x4,0x6,0x8][_0x5c28('0x369')](_0x3c0ec2))return 0x4;if([0x1,0x3,0x7,0x9]['includes'](_0x5f892c))return 0x5;}}else return![];}}else{function _0x4eafe9(){for(const _0x54fca4 of this[_0x5c28('0x89')]){if(_0x54fca4)return _0x54fca4;}return null;}}}return!![];},Game_Event[_0x5c28('0x404')][_0x5c28('0x2de')]=function(_0x1400f5,_0x10efdc){const _0x42f627=$gameMap[_0x5c28('0x1b1')](_0x1400f5,_0x10efdc)[_0x5c28('0x123')](_0x2d08bb=>_0x2d08bb!==this);return _0x42f627['length']>0x0;},Game_Event[_0x5c28('0x404')]['checkSmartEventCollision']=function(_0xaeb9c0,_0xa514c7){if(!this[_0x5c28('0x17e')]()){if(_0x5c28('0x2b5')!==_0x5c28('0x2b5')){function _0x527496(){return this[_0x5c28('0x251')];}}else return![];}else{const _0x7c725d=$gameMap['eventsXyNt'](_0xaeb9c0,_0xa514c7)[_0x5c28('0x123')](_0x3ae0cc=>_0x3ae0cc!==this&&_0x3ae0cc['isNormalPriority']());return _0x7c725d[_0x5c28('0x286')]>0x0;}},Game_Event[_0x5c28('0x404')][_0x5c28('0x2b1')]=function(){return this['_activationProximity'][_0x5c28('0x193')]||_0x5c28('0x37d');},Game_Event[_0x5c28('0x404')]['activationProximityDistance']=function(){return this[_0x5c28('0x3de')][_0x5c28('0x2cf')]||0x0;},Game_Event[_0x5c28('0x404')][_0x5c28('0x25f')]=function(){return this['_activationProximity'][_0x5c28('0x2e3')]||[];},Game_Event[_0x5c28('0x404')]['increaseSteps']=function(){Game_Character['prototype'][_0x5c28('0x318')][_0x5c28('0x1c7')](this);if([_0x5c28('0x37d'),'region'][_0x5c28('0x369')](this[_0x5c28('0x2b1')]()))return;$gamePlayer[_0x5c28('0x2d6')]([0x2]);},VisuMZ['EventsMoveCore'][_0x5c28('0x413')]=Game_Event[_0x5c28('0x404')][_0x5c28('0x28')],Game_Event[_0x5c28('0x404')]['checkEventTriggerAuto']=function(){if(this['_trigger']!==0x3)return;if(this[_0x5c28('0x1c5')])return;if(!this[_0x5c28('0x10d')](![]))return;if(!this[_0x5c28('0x63')](![]))return;VisuMZ[_0x5c28('0x3e9')][_0x5c28('0x413')][_0x5c28('0x1c7')](this);},VisuMZ['EventsMoveCore'][_0x5c28('0x105')]=Game_Event['prototype']['updateParallel'],Game_Event[_0x5c28('0x404')][_0x5c28('0x1ce')]=function(){if(!this[_0x5c28('0x1d4')])return;if(!this[_0x5c28('0x10d')](!![]))return;if(!this[_0x5c28('0x63')](!![]))return;VisuMZ[_0x5c28('0x3e9')][_0x5c28('0x105')][_0x5c28('0x1c7')](this);},Game_Event[_0x5c28('0x404')][_0x5c28('0x10d')]=function(_0x3ca55c){if(!_0x3ca55c&&$gameMap[_0x5c28('0x88')]())return![];if(!_0x3ca55c&&$gameMap[_0x5c28('0x1a9')]())return![];if(this[_0x5c28('0x25f')]()<=0x0)return!![];return $gamePlayer[_0x5c28('0x14f')](this);},Game_Event[_0x5c28('0x404')][_0x5c28('0x63')]=function(_0x1544b3){if(!_0x1544b3&&$gameMap[_0x5c28('0x88')]())return![];if(!_0x1544b3&&$gameMap[_0x5c28('0x1a9')]())return![];if([_0x5c28('0x37d'),_0x5c28('0x270')][_0x5c28('0x369')](this[_0x5c28('0x2b1')]()))return!![];return $gamePlayer[_0x5c28('0x179')](this);},VisuMZ[_0x5c28('0x3df')]=function(_0x2dcdf6){for(const _0x2ff02a of $gameMap['events']()){if(_0x5c28('0x2dc')!==_0x5c28('0x2dc')){function _0x123a60(){this[_0x5c28('0x3f9')]();}}else{if(!_0x2ff02a)continue;_0x2ff02a[_0x5c28('0x40d')]()===_0x2dcdf6&&_0x2ff02a[_0x5c28('0x132')]();}}},VisuMZ[_0x5c28('0x2ec')]=function(_0x1ef5cb){if(_0x1ef5cb===0x0)return $gamePlayer;return $gameMap[_0x5c28('0x37a')](_0x1ef5cb);},Game_Event[_0x5c28('0x404')][_0x5c28('0x40d')]=function(){return this[_0x5c28('0x382')][_0x5c28('0x368')];},Game_Event[_0x5c28('0x404')][_0x5c28('0x3c4')]=function(){return this[_0x5c28('0x382')][_0x5c28('0x193')];},Game_Event['prototype'][_0x5c28('0x173')]=function(){if(this[_0x5c28('0x40d')]()>=0x0){if(_0x5c28('0x2d7')!=='cAWxa'){function _0xfc8243(){this[_0x5c28('0x272')][_0x5c28('0x1f0')]=this[_0x5c28('0x272')]['text'][_0x5c28('0x71')](/\\V\[(\d+)\]/gi,(_0x33879d,_0x327034)=>_0x17e923[_0x5c28('0x38')](_0xd6d151(_0x327034)));}}else{const _0xf44dec=VisuMZ['GetMoveSynchTarget'](this['moveSynchTarget']());if(_0xf44dec)return _0xf44dec[_0x5c28('0x173')]();}}return Game_Character[_0x5c28('0x404')][_0x5c28('0x173')][_0x5c28('0x1c7')](this);},Game_Event[_0x5c28('0x404')]['updateMoveSynch']=function(){this['_moveSynch'][_0x5c28('0x27e')]=this[_0x5c28('0x382')][_0x5c28('0x27e')]||0x0,this[_0x5c28('0x382')]['timer']--;if(this[_0x5c28('0x382')][_0x5c28('0x27e')]>0x0)return;this['_moveSynch'][_0x5c28('0x27e')]=this[_0x5c28('0x382')][_0x5c28('0x3b8')],this[_0x5c28('0x50')]();},Game_Event[_0x5c28('0x404')]['processMoveSynch']=function(){switch(this[_0x5c28('0x3c4')]()){case'random':this[_0x5c28('0x1a')]();break;case'approach':this[_0x5c28('0x2c3')]();break;case _0x5c28('0x367'):this[_0x5c28('0x1e4')]();break;case _0x5c28('0x1ea'):this[_0x5c28('0xd0')]();break;case _0x5c28('0x220'):case _0x5c28('0x328'):this[_0x5c28('0x36f')]();break;case _0x5c28('0x48'):case _0x5c28('0x29'):this['processMoveSynchReverseMimic']();break;case _0x5c28('0x3d5'):case'horizontal\x20mirror':case _0x5c28('0x3fd'):case _0x5c28('0x3e1'):this['processMoveSynchMirrorHorz']();break;case _0x5c28('0x38a'):case _0x5c28('0x128'):case _0x5c28('0x36b'):case _0x5c28('0x142'):this[_0x5c28('0x416')]();break;default:this['processMoveSynchRandom']();break;}this[_0x5c28('0x18f')]();},Game_Event[_0x5c28('0x404')][_0x5c28('0x1a')]=function(){const _0x94a060=[0x2,0x4,0x6,0x8];$gameMap[_0x5c28('0x2a7')]()&&_0x94a060[_0x5c28('0x22')](0x1,0x3,0x7,0x9);const _0x376c35=[];for(const _0x3480bd of _0x94a060){if(_0x5c28('0x25c')===_0x5c28('0x118')){function _0xc2c49e(){if(_0x18553c[_0x5c28('0x2be')](_0x45b639,_0x4975f9,_0x47e350,this[_0x5c28('0x34f')]))return!![];const _0x2a8ccc=this[_0x5c28('0x34f')][_0x5c28('0x269')](0x0)[_0x5c28('0x248')]()+this['_type'][_0x5c28('0x3c8')](0x1),_0x2c61b9=_0x5c28('0x352')[_0x5c28('0x27f')](_0x2a8ccc);return _0x35a0a7[_0x5c28('0x3e9')][_0x5c28('0x376')][_0x5c28('0x175')][_0x2c61b9]?![]:_0x5656b5[_0x5c28('0x3e9')][_0x5c28('0x35e')][_0x5c28('0x1c7')](this,_0x308596,_0x48ddb4,_0x2cb3fa);}}else{if(this[_0x5c28('0x16')](this['x'],this['y'],_0x3480bd))_0x376c35[_0x5c28('0x22')](_0x3480bd);}}if(_0x376c35[_0x5c28('0x286')]>0x0){const _0x172a4e=_0x376c35[Math[_0x5c28('0x25')](_0x376c35[_0x5c28('0x286')])];this[_0x5c28('0x216')](_0x172a4e);}},Game_Event[_0x5c28('0x404')]['processMoveSynchApproach']=function(){const _0x442905=VisuMZ[_0x5c28('0x2ec')](this[_0x5c28('0x40d')]());this[_0x5c28('0x1cb')](_0x442905);},Game_Event['prototype']['processMoveSynchAway']=function(){const _0x247017=VisuMZ[_0x5c28('0x2ec')](this[_0x5c28('0x40d')]());this[_0x5c28('0x19b')](_0x247017);},Game_Event[_0x5c28('0x404')][_0x5c28('0xd0')]=function(){this['updateRoutineMove']();},Game_Event[_0x5c28('0x404')][_0x5c28('0x36f')]=function(){const _0x325099=VisuMZ[_0x5c28('0x2ec')](this['moveSynchTarget']());this[_0x5c28('0x216')](_0x325099[_0x5c28('0x296')]());},Game_Event['prototype'][_0x5c28('0x61')]=function(){const _0x5df4ed=VisuMZ[_0x5c28('0x2ec')](this['moveSynchTarget']()),_0x41645f=this[_0x5c28('0x3f4')](_0x5df4ed['lastMovedDirection']());this['executeMoveDir8'](this[_0x5c28('0x3f4')](_0x5df4ed[_0x5c28('0x81')]()));},Game_Event[_0x5c28('0x404')][_0x5c28('0x38f')]=function(){const _0x391b8c=VisuMZ[_0x5c28('0x2ec')](this[_0x5c28('0x40d')]()),_0x4ea9b6=[0x0,0x7,0x8,0x9,0x4,0x0,0x6,0x1,0x2,0x3][_0x391b8c[_0x5c28('0x296')]()];this['executeMoveDir8'](_0x4ea9b6);},Game_Event[_0x5c28('0x404')][_0x5c28('0x416')]=function(){const _0x36e7f5=VisuMZ['GetMoveSynchTarget'](this[_0x5c28('0x40d')]()),_0x5eacca=[0x0,0x3,0x2,0x1,0x6,0x0,0x4,0x9,0x8,0x7][_0x36e7f5[_0x5c28('0x296')]()];this[_0x5c28('0x216')](_0x5eacca);},Game_Event[_0x5c28('0x404')][_0x5c28('0x2df')]=function(){const _0x1ffebb=$gameSystem[_0x5c28('0x205')](this);if(!_0x1ffebb)return;this['locate'](_0x1ffebb['x'],_0x1ffebb['y']),this['setDirection'](_0x1ffebb[_0x5c28('0x81')]);if(this[_0x5c28('0x2fa')]===_0x1ffebb[_0x5c28('0xb8')]){if(_0x5c28('0x2e7')!==_0x5c28('0x1f3'))this[_0x5c28('0x1ee')]=_0x1ffebb[_0x5c28('0x259')];else{function _0x8ce58f(){const _0x138880=_0x2ed424[_0x5c28('0x1cd')](_0x3412dd,_0x411878);for(const _0x1749a2 of _0x138880){if(_0x1749a2&&_0x1749a2[_0x5c28('0x320')]())return _0x1749a2[_0x5c28('0x12')](),!![];}return![];}}}},Game_Event[_0x5c28('0x404')][_0x5c28('0xed')]=function(){Game_Character['prototype']['updateMove'][_0x5c28('0x1c7')](this),this[_0x5c28('0x240')]();},Game_Event[_0x5c28('0x404')]['isSaveEventLocation']=function(){if($gameMap[_0x5c28('0x35a')]())return!![];return this[_0x5c28('0x209')];},Game_Event[_0x5c28('0x404')][_0x5c28('0x240')]=function(){if(!this['isSaveEventLocation']())return;this[_0x5c28('0x22f')]();},Game_Event[_0x5c28('0x404')][_0x5c28('0x22f')]=function(){$gameSystem[_0x5c28('0x22f')](this);},Game_Event[_0x5c28('0x404')][_0x5c28('0x9c')]=function(){$gameSystem[_0x5c28('0x219')](this);},Game_Event[_0x5c28('0x404')][_0x5c28('0x1a3')]=function(){if($gameSystem[_0x5c28('0x1a3')]()){if(_0x5c28('0x353')!==_0x5c28('0x6f'))return Game_Character[_0x5c28('0x404')][_0x5c28('0x1a3')]['call'](this);else{function _0x14a36e(){const _0x22231a=this[_0x5c28('0x1a3')]();if(!_0x22231a)return![];return _0x22231a['iconIndex']>0x0;}}}else{if(_0x5c28('0x1c8')!==_0x5c28('0x1c8')){function _0x596145(){return this[_0x5c28('0x52')](0x2,_0x33a947(_0xdb9699['$1']));}}else return this[_0x5c28('0x297')];}},Game_Event['prototype']['hasCPCs']=function(){return this[_0x5c28('0x251')];},VisuMZ[_0x5c28('0x3e9')][_0x5c28('0x45')]=Game_Event[_0x5c28('0x404')][_0x5c28('0x2a6')],Game_Event[_0x5c28('0x404')][_0x5c28('0x2a6')]=function(_0x163f81){this[_0x5c28('0x37e')](_0x163f81);const _0x2b8495=VisuMZ[_0x5c28('0x3e9')][_0x5c28('0x45')][_0x5c28('0x1c7')](this,_0x163f81);if(!_0x2b8495)return![];return this[_0x5c28('0x182')](_0x163f81);},Game_Event['prototype'][_0x5c28('0x37e')]=function(_0x1d739b){VisuMZ[_0x5c28('0x3e9')][_0x5c28('0x8f')][_0x5c28('0x127')](_0x1d739b),this['_CPCs']=_0x1d739b[_0x5c28('0x2d2')]['length']>0x0;},Game_Event[_0x5c28('0x404')]['meetsCPC']=function(_0x3f5ac9){_0x3f5ac9['CPC']===undefined&&VisuMZ[_0x5c28('0x3e9')]['CustomPageConditions'][_0x5c28('0x127')](_0x3f5ac9);if(_0x3f5ac9[_0x5c28('0x2d2')]['length']>0x0){if(_0x5c28('0xac')!=='PlAjf')return $gameMap[_0x5c28('0x37a')](this['_eventId'])&&VisuMZ[_0x5c28('0x3e9')][_0x5c28('0x8f')][_0x5c28('0x405')](_0x3f5ac9[_0x5c28('0x2d2')],this['_eventId']);else{function _0x18944b(){_0x36ca8c[_0x5c28('0x404')][_0x5c28('0x11d')][_0x5c28('0x1c7')](this),this[_0x5c28('0x1c2')][_0x5c28('0x1da')]=this[_0x5c28('0x3d4')]();}}}return!![];},VisuMZ[_0x5c28('0x3e9')][_0x5c28('0x6e')]=Game_Troop[_0x5c28('0x404')][_0x5c28('0x2a6')],Game_Troop[_0x5c28('0x404')][_0x5c28('0x2a6')]=function(_0x4dab4f){var _0x43e50e=VisuMZ['EventsMoveCore'][_0x5c28('0x6e')][_0x5c28('0x1c7')](this,_0x4dab4f);return _0x43e50e&&this[_0x5c28('0x3c1')](_0x4dab4f);},Game_Troop[_0x5c28('0x404')][_0x5c28('0x3c1')]=function(_0x466234){_0x466234['CPC']===undefined&&VisuMZ[_0x5c28('0x3e9')][_0x5c28('0x8f')]['loadCPC'](_0x466234);if(_0x466234['CPC'][_0x5c28('0x286')]>0x0)return VisuMZ[_0x5c28('0x3e9')]['CustomPageConditions'][_0x5c28('0x405')](_0x466234[_0x5c28('0x2d2')],0x0);return!![];},VisuMZ[_0x5c28('0x3e9')]['Game_Interpreter_updateWaitMode']=Game_Interpreter[_0x5c28('0x404')]['updateWaitMode'],Game_Interpreter[_0x5c28('0x404')][_0x5c28('0x213')]=function(){if(this['_waitMode']===_0x5c28('0x176')){if(window[this[_0x5c28('0x419')]]){if(_0x5c28('0x314')!==_0x5c28('0x314')){function _0x58dedd(){return!![];}}else this['_waitMode']='',this[_0x5c28('0x1ac')]();}else return!![];}else return VisuMZ[_0x5c28('0x3e9')][_0x5c28('0xc4')][_0x5c28('0x1c7')](this);},VisuMZ[_0x5c28('0x3e9')][_0x5c28('0x146')]=Game_Interpreter[_0x5c28('0x404')][_0x5c28('0x1fc')],Game_Interpreter['prototype'][_0x5c28('0x1fc')]=function(){const _0x39b158=$gameMap&&this[_0x5c28('0x330')]?$gameMap[_0x5c28('0x37a')](this[_0x5c28('0x330')]):null;$gameTemp[_0x5c28('0x3f2')](_0x39b158);const _0x26238d=VisuMZ['EventsMoveCore']['Game_Interpreter_executeCommand']['call'](this);return $gameTemp['clearSelfTarget'](),_0x26238d;},VisuMZ[_0x5c28('0x3e9')][_0x5c28('0x1a2')]=Game_Interpreter[_0x5c28('0x404')][_0x5c28('0x1d0')],Game_Interpreter['prototype'][_0x5c28('0x1d0')]=function(_0x1c2dcf){return $gameTemp[_0x5c28('0x3e5')](this),VisuMZ[_0x5c28('0x3e9')]['Game_Interpreter_PluginCommand'][_0x5c28('0x1c7')](this,_0x1c2dcf);},Game_Interpreter[_0x5c28('0x404')]['pluginCommandCallEvent']=function(_0x10434f){this[_0x5c28('0x11c')]=_0x10434f;const _0x82a1e8=_0x5c28('0xf1')[_0x5c28('0x27f')](_0x10434f['mapId'][_0x5c28('0xad')](0x3));this[_0x5c28('0x419')]=_0x5c28('0x1ba')+Graphics[_0x5c28('0x66')]+'_'+this[_0x5c28('0x18a')](),DataManager[_0x5c28('0x2fd')](this[_0x5c28('0x419')],_0x82a1e8),window[this[_0x5c28('0x419')]]?this['startCallEvent']():this[_0x5c28('0x41e')](_0x5c28('0x176'));},Game_Interpreter[_0x5c28('0x404')]['startCallEvent']=function(){const _0x1cb561=this[_0x5c28('0x11c')],_0x1c0ece=window[this[_0x5c28('0x419')]],_0x1e5ef7=_0x1c0ece[_0x5c28('0x1dc')][_0x1cb561[_0x5c28('0x18a')]];if(_0x1e5ef7&&_0x1e5ef7['pages'][_0x1cb561[_0x5c28('0x386')]-0x1]){const _0x4691e0=_0x1e5ef7[_0x5c28('0x1b3')][_0x1cb561['pageId']-0x1][_0x5c28('0xf')];this[_0x5c28('0x3ce')](_0x4691e0,this[_0x5c28('0x18a')]());}window[this[_0x5c28('0x419')]]=undefined,this[_0x5c28('0x419')]=undefined,this['_callEventData']=undefined;};function Game_CPCInterpreter(){this[_0x5c28('0x23')][_0x5c28('0x8e')](this,arguments);};Game_CPCInterpreter[_0x5c28('0x404')]=Object[_0x5c28('0x43')](Game_Interpreter['prototype']),Game_CPCInterpreter[_0x5c28('0x404')][_0x5c28('0x141')]=Game_CPCInterpreter,Game_CPCInterpreter[_0x5c28('0x404')]['clear']=function(){Game_Interpreter[_0x5c28('0x404')][_0x5c28('0x62')][_0x5c28('0x1c7')](this),this[_0x5c28('0xea')]=![];},Game_CPCInterpreter[_0x5c28('0x404')][_0x5c28('0x309')]=function(){while(this[_0x5c28('0xb1')]()){if(_0x5c28('0x144')===_0x5c28('0x144'))this[_0x5c28('0x1fc')]();else{function _0x39a0f7(){if([0x6c,0x198][_0x5c28('0x369')](_0x51619e[_0x5c28('0x1a7')])){if(_0x2ffa71!=='')_0x11a55b+='\x0a';_0x3f944d+=_0x19a389['parameters'][0x0];}}}}},Game_CPCInterpreter[_0x5c28('0x404')][_0x5c28('0x3af')]=function(_0x3d4e6a){Game_Interpreter['prototype'][_0x5c28('0x3af')]['call'](this,_0x3d4e6a);if(this[_0x5c28('0x28f')][_0x5c28('0x2ef')](_0x229d38=>_0x229d38[_0x5c28('0x23b')](/<(?:CONDITION|CONDITIONS) MET>/i))){if(_0x5c28('0x1b2')!==_0x5c28('0x181'))this['_cpc']=!![];else{function _0x156aed(){return _0x4be072[_0x5c28('0x3e9')][_0x5c28('0x21c')][_0x5c28('0x1c7')](this)?!![]:_0x1793e8[_0x5c28('0x3e9')][_0x5c28('0x8f')][_0x5c28('0x405')](this[_0x5c28('0x37a')]()[_0x5c28('0x2d2')],this[_0x5c28('0x34')]);}}}return!![];},VisuMZ[_0x5c28('0x3e9')][_0x5c28('0x21f')]=Scene_Map['prototype'][_0x5c28('0x26')],Scene_Map['prototype']['startEncounterEffect']=function(){VisuMZ[_0x5c28('0x3e9')]['Scene_Map_startEncounterEffect'][_0x5c28('0x1c7')](this),this[_0x5c28('0x3e4')][_0x5c28('0x20')]();},VisuMZ[_0x5c28('0x3e9')][_0x5c28('0x24e')]=Sprite_Character[_0x5c28('0x404')]['initMembers'],Sprite_Character['prototype'][_0x5c28('0xe5')]=function(){VisuMZ[_0x5c28('0x3e9')][_0x5c28('0x24e')][_0x5c28('0x1c7')](this),this[_0x5c28('0x1e2')](),this[_0x5c28('0x338')]();},Sprite_Character[_0x5c28('0x404')][_0x5c28('0x1e2')]=function(){this['_shadowOpacity']=0xff;},Sprite_Character[_0x5c28('0x404')][_0x5c28('0x338')]=function(){this[_0x5c28('0x30c')]=new Sprite(),this[_0x5c28('0x30c')][_0x5c28('0x154')]=ImageManager[_0x5c28('0x298')](_0x5c28('0x3ac')),this[_0x5c28('0x30c')][_0x5c28('0x266')](0x0,0x0,0x0,0x0),this[_0x5c28('0x30c')][_0x5c28('0x3bf')]['x']=0.5,this[_0x5c28('0x30c')][_0x5c28('0x3bf')]['y']=0x1,this[_0x5c28('0x59')](this[_0x5c28('0x30c')]);},Sprite_Character[_0x5c28('0x404')]['isSpriteVS8dir']=function(){return this[_0x5c28('0x239')]&&this[_0x5c28('0x239')][_0x5c28('0x23b')](/\[VS8\]/i);},Sprite_Character[_0x5c28('0x404')][_0x5c28('0x198')]=function(){return this[_0x5c28('0x377')]()&&VisuMZ[_0x5c28('0x3e9')]['Settings'][_0x5c28('0x221')]['AutoBuffer'];},VisuMZ[_0x5c28('0x3e9')][_0x5c28('0x2e2')]=Sprite_Character[_0x5c28('0x404')]['update'],Sprite_Character[_0x5c28('0x404')][_0x5c28('0x18f')]=function(){VisuMZ[_0x5c28('0x3e9')][_0x5c28('0x2e2')][_0x5c28('0x1c7')](this);VisuMZ[_0x5c28('0x3e9')][_0x5c28('0x376')][_0x5c28('0x347')]['EnableDashTilt']&&this[_0x5c28('0x331')]();if(this['_shadowSprite']){if(_0x5c28('0x14a')===_0x5c28('0x5a')){function _0x172940(){if(this[_0x5c28('0x5f')]===_0x4d748e)this[_0x5c28('0x1eb')]();if(!_0x2a937a)return null;if(_0x2ce6f5===_0x327318)return this[_0x5c28('0x5f')][_0x5c28('0x16e')];else{const _0x62840c=_0x5c28('0x1c9')['format'](_0xb4a03d[_0x5c28('0x183')],_0x4178b4[_0x5c28('0x330')]);return this[_0x5c28('0x5f')][_0x62840c];}}}else this['updateShadow']();}this[_0x5c28('0x30c')]&&this[_0x5c28('0x2c4')]();},VisuMZ[_0x5c28('0x3e9')][_0x5c28('0x1a0')]=Sprite_Character[_0x5c28('0x404')][_0x5c28('0x3c3')],Sprite_Character[_0x5c28('0x404')][_0x5c28('0x3c3')]=function(){if(this[_0x5c28('0x377')]()){if(_0x5c28('0xca')===_0x5c28('0xca'))return this[_0x5c28('0x1fa')]();else{function _0x1f17aa(){if(this[_0x5c28('0x20e')](_0x4d6502,_0x380b37))return;_0x3e8e52[_0x5c28('0x3e9')][_0x5c28('0xfc')][_0x5c28('0x1c7')](this,_0x4e84ac,_0x497f39);}}}else return VisuMZ[_0x5c28('0x3e9')]['Sprite_Character_characterPatternY']['call'](this);},Sprite_Character[_0x5c28('0x404')][_0x5c28('0x1fa')]=function(){const _0x205426=this[_0x5c28('0xc0')][_0x5c28('0x81')](),_0x206b53=[0x2,0x2,0x2,0x4,0x4,0x2,0x6,0x6,0x8,0x8];return(_0x206b53[_0x205426]-0x2)/0x2;},Sprite_Character[_0x5c28('0x404')][_0x5c28('0x331')]=function(){this[_0x5c28('0x351')]=0x0;if(this['isAllowCharacterTilt']()){const _0x20e330=VisuMZ[_0x5c28('0x3e9')][_0x5c28('0x376')][_0x5c28('0x347')],_0x56825f=this['_character']['direction']();if([0x1,0x4,0x7][_0x5c28('0x369')](_0x56825f))this[_0x5c28('0x351')]=_0x20e330['TiltLeft'];if([0x3,0x6,0x9]['includes'](_0x56825f))this['rotation']=_0x20e330[_0x5c28('0x153')];if([0x2,0x8][_0x5c28('0x369')](_0x56825f)){if(_0x5c28('0x206')!==_0x5c28('0x106'))this[_0x5c28('0x351')]=[-_0x20e330[_0x5c28('0x36')],0x0,_0x20e330[_0x5c28('0x36')]][this[_0x5c28('0xc0')][_0x5c28('0x3b5')]()];else{function _0x5bd302(){return this[_0x5c28('0x24')](_0x5c28('0x32c'));}}}}},Sprite_Character['prototype'][_0x5c28('0x76')]=function(){if(this['_dragonbones'])return![];return this['_character']['isDashingAndMoving']()&&!this['_character'][_0x5c28('0x374')]()&&!this['_character']['isPosing']()&&this[_0x5c28('0x169')]()===0x0;},Sprite_Character[_0x5c28('0x404')][_0x5c28('0x38d')]=function(){this[_0x5c28('0x22a')]['x']=this['_character'][_0x5c28('0x2e6')](),this[_0x5c28('0x22a')]['y']=this[_0x5c28('0xc0')][_0x5c28('0x29a')](),this[_0x5c28('0x22a')][_0x5c28('0x396')]=this[_0x5c28('0x396')],this[_0x5c28('0x22a')][_0x5c28('0xc8')]=this[_0x5c28('0xc0')][_0x5c28('0xf0')](),this[_0x5c28('0x22a')][_0x5c28('0x26b')]=this['_hidden'];if(!this[_0x5c28('0xc0')][_0x5c28('0x44')]()){if(_0x5c28('0x4')==='PiSbh')this[_0x5c28('0x22a')][_0x5c28('0x2e5')]['x']=Math[_0x5c28('0x2f5')](0x1,this['_shadowSprite'][_0x5c28('0x2e5')]['x']+0.1),this[_0x5c28('0x22a')]['scale']['y']=Math[_0x5c28('0x2f5')](0x1,this[_0x5c28('0x22a')][_0x5c28('0x2e5')]['y']+0.1);else{function _0x1cce3c(){return 0x0;}}}else{if(_0x5c28('0x350')!==_0x5c28('0x350')){function _0x58a611(){if(_0x2407fa[_0x5c28('0xb0')](_0x13f69f,_0x6e8d8,_0x469ccd,this[_0x5c28('0x34f')]))return!![];if(_0xebad42[_0x5c28('0x332')](_0x5cc7b4,_0x167c55,_0x12303f,this[_0x5c28('0x34f')]))return![];return _0x132c30['EventsMoveCore'][_0x5c28('0x2b7')]['call'](this,_0x1d18a3,_0x1fec6f,_0x45e6e6);}}else this[_0x5c28('0x22a')][_0x5c28('0x2e5')]['x']=Math[_0x5c28('0x3f6')](0x0,this[_0x5c28('0x22a')][_0x5c28('0x2e5')]['x']-0.1),this[_0x5c28('0x22a')][_0x5c28('0x2e5')]['y']=Math['max'](0x0,this[_0x5c28('0x22a')][_0x5c28('0x2e5')]['y']-0.1);}},Sprite_Character[_0x5c28('0x404')][_0x5c28('0x2c4')]=function(){const _0x4ef1e1=this[_0x5c28('0x30c')],_0xfd1ac9=this[_0x5c28('0x169')]();if(_0xfd1ac9<=0x0){if(_0x5c28('0x415')!==_0x5c28('0x415')){function _0x7c557e(){_0x4383bf['removeTemporaryMapSpawnedEvents'](_0x5af1d9);}}else return _0x4ef1e1[_0x5c28('0x266')](0x0,0x0,0x0,0x0);}else{const _0x12f2ec=ImageManager[_0x5c28('0x260')],_0x544cf9=ImageManager[_0x5c28('0x2f6')],_0xc7b906=_0xfd1ac9%0x10*_0x12f2ec,_0x11033d=Math[_0x5c28('0x35d')](_0xfd1ac9/0x10)*_0x544cf9;_0x4ef1e1[_0x5c28('0x266')](_0xc7b906,_0x11033d,_0x12f2ec,_0x544cf9),this[_0x5c28('0xc8')]=!![];}const _0x1e8309=this[_0x5c28('0xc0')]['getEventIconData']();if(this[_0x5c28('0x198')]()){if(_0x5c28('0x185')!==_0x5c28('0x185')){function _0x110f39(){return!![];}}else this[_0x5c28('0xc5')](_0x4ef1e1);}else _0x4ef1e1['x']=_0x1e8309?_0x1e8309[_0x5c28('0x2ab')]:0x0,_0x4ef1e1['y']=_0x1e8309?-this[_0x5c28('0x3ef')]+_0x1e8309[_0x5c28('0x232')]:0x0;_0x4ef1e1[_0x5c28('0x321')]=_0x1e8309?_0x1e8309[_0x5c28('0x321')]:0x0,this['removeChild'](_0x4ef1e1),this[_0x5c28('0x59')](_0x4ef1e1),_0x4ef1e1[_0x5c28('0x351')]=-this[_0x5c28('0x351')];},Sprite_Character[_0x5c28('0x404')][_0x5c28('0xc5')]=function(_0x5bf6e6){_0x5bf6e6['x']=0x0,_0x5bf6e6['y']=-this[_0x5c28('0x3ef')]+this[_0x5c28('0x3ef')]*0x2/0x5,this['_character'][_0x5c28('0x3b5')]()!==0x1&&(_0x5bf6e6['y']+=0x1);},Sprite_Character[_0x5c28('0x404')][_0x5c28('0x169')]=function(){if(!this[_0x5c28('0xc0')])return 0x0;const _0x527ac2=this[_0x5c28('0xc0')][_0x5c28('0x1a3')]();return _0x527ac2?_0x527ac2[_0x5c28('0xab')]||0x0:0x0;},VisuMZ[_0x5c28('0x3e9')][_0x5c28('0x1bd')]=Sprite_Balloon[_0x5c28('0x404')][_0x5c28('0x1b5')],Sprite_Balloon[_0x5c28('0x404')]['setup']=function(_0x4293e2,_0x2b39bc){VisuMZ[_0x5c28('0x3e9')]['Sprite_Balloon_setup']['call'](this,_0x4293e2,_0x2b39bc),VisuMZ[_0x5c28('0x3e9')][_0x5c28('0x376')][_0x5c28('0x221')][_0x5c28('0x18b')]&&this[_0x5c28('0x1cc')][_0x5c28('0xc0')][_0x5c28('0x17a')](_0x2b39bc,this['_duration']);},VisuMZ[_0x5c28('0x3e9')]['Sprite_Balloon_updatePosition']=Sprite_Balloon[_0x5c28('0x404')][_0x5c28('0x14b')],Sprite_Balloon['prototype'][_0x5c28('0x14b')]=function(){VisuMZ['EventsMoveCore'][_0x5c28('0x322')][_0x5c28('0x1c7')](this),this[_0x5c28('0x3f7')]();},Sprite_Balloon[_0x5c28('0x404')][_0x5c28('0x3f7')]=function(){this[_0x5c28('0x1cc')][_0x5c28('0xc0')][_0x5c28('0x377')]()&&(this['x']+=VisuMZ[_0x5c28('0x3e9')][_0x5c28('0x376')][_0x5c28('0x221')][_0x5c28('0x125')],this['y']+=VisuMZ[_0x5c28('0x3e9')][_0x5c28('0x376')]['VS8'][_0x5c28('0x51')]);},VisuMZ[_0x5c28('0x3e9')][_0x5c28('0x2d1')]=Spriteset_Map[_0x5c28('0x404')][_0x5c28('0xaf')],Spriteset_Map[_0x5c28('0x404')][_0x5c28('0xaf')]=function(){VisuMZ[_0x5c28('0x3e9')][_0x5c28('0x2d1')]['call'](this),this[_0x5c28('0x68')]();},VisuMZ[_0x5c28('0x3e9')][_0x5c28('0x33d')]=Spriteset_Map[_0x5c28('0x404')]['createShadow'],Spriteset_Map[_0x5c28('0x404')][_0x5c28('0x29e')]=function(){VisuMZ['EventsMoveCore']['Spriteset_Map_createShadow'][_0x5c28('0x1c7')](this),this[_0x5c28('0x11e')]();},Spriteset_Map[_0x5c28('0x404')][_0x5c28('0x11e')]=function(){if(!VisuMZ[_0x5c28('0x3e9')][_0x5c28('0x376')]['Movement'][_0x5c28('0x3f1')])return;for(const _0x2b93b0 of this[_0x5c28('0x101')]){if(_0x5c28('0x143')==='NeKBG'){function _0x24a187(){_0x405289['drawing']&&this[_0x5c28('0x37b')](_0xfb5bab,_0x522e2e['x']+0x2,_0x30f64c['y']),_0x355a4f['x']+=_0x1af05e[_0x5c28('0x2f5')](this['iconSize'](),_0xd868bc[_0x5c28('0x260')])+0x4;}}else this['createCharacterShadow'](_0x2b93b0);}},Spriteset_Map[_0x5c28('0x404')][_0x5c28('0x16f')]=function(_0x4eccb4){_0x4eccb4[_0x5c28('0x22a')]=new Sprite(),_0x4eccb4[_0x5c28('0x22a')][_0x5c28('0x33e')]=_0x4eccb4[_0x5c28('0xc0')][_0x5c28('0x275')](),_0x4eccb4[_0x5c28('0x22a')][_0x5c28('0x154')]=ImageManager[_0x5c28('0x298')](_0x4eccb4[_0x5c28('0x22a')]['_filename']),_0x4eccb4[_0x5c28('0x22a')][_0x5c28('0x3bf')]['x']=0.5,_0x4eccb4[_0x5c28('0x22a')][_0x5c28('0x3bf')]['y']=0x1,_0x4eccb4[_0x5c28('0x22a')]['z']=0x0,this[_0x5c28('0x1f6')][_0x5c28('0x59')](_0x4eccb4[_0x5c28('0x22a')]);},Spriteset_Map[_0x5c28('0x404')][_0x5c28('0x20')]=function(){if(!VisuMZ['EventsMoveCore'][_0x5c28('0x376')][_0x5c28('0x347')][_0x5c28('0x3f1')])return;for(const _0x42b8ac of this[_0x5c28('0x101')]){if(_0x5c28('0x3cc')!==_0x5c28('0x3cc')){function _0x3e5f40(){return this[_0x5c28('0x382')][_0x5c28('0x368')];}}else this[_0x5c28('0x1f6')][_0x5c28('0x200')](_0x42b8ac[_0x5c28('0x22a')]);}},Spriteset_Map[_0x5c28('0x404')][_0x5c28('0x68')]=function(){this[_0x5c28('0x3d3')]=[];for(const _0x21006e of $gameMap[_0x5c28('0x1dc')]()){this[_0x5c28('0x6')](_0x21006e);}},Spriteset_Map[_0x5c28('0x404')][_0x5c28('0x6')]=function(_0x2c2587){if(!this[_0x5c28('0x30')](_0x2c2587))return;const _0x6b75ef=new Window_EventLabel(_0x2c2587);_0x6b75ef['z']=0x8,_0x6b75ef['spriteId']=Sprite[_0x5c28('0xff')]++,this[_0x5c28('0x1f6')]['addChild'](_0x6b75ef),this['_labelWindows'][_0x5c28('0x22')](_0x6b75ef);},Spriteset_Map[_0x5c28('0x404')][_0x5c28('0x30')]=function(_0x1051e9){const _0x4d956a=_0x1051e9[_0x5c28('0x37a')]();if(_0x4d956a[_0x5c28('0x108')][_0x5c28('0x23b')](/<LABEL:[ ](.*?)>/i))return!![];if(_0x4d956a[_0x5c28('0x108')][_0x5c28('0x23b')](/<LABEL>\s*([\s\S]*)\s*<\/LABEL>/i))return!![];for(const _0x5c6297 of _0x4d956a[_0x5c28('0x1b3')]){let _0x28221c='';for(const _0x2aafe8 of _0x5c6297[_0x5c28('0xf')]){if([0x6c,0x198][_0x5c28('0x369')](_0x2aafe8[_0x5c28('0x1a7')])){if(_0x5c28('0x42')===_0x5c28('0x163')){function _0x37572d(){let _0x4d40a1=this[_0x5c28('0x358')];return this[_0x5c28('0x390')]()&&(_0x4d40a1+=this[_0x5c28('0x3d8')]()),this[_0x5c28('0x307')](_0x4d40a1);}}else _0x28221c+=_0x2aafe8[_0x5c28('0x23f')][0x0];}}if(_0x28221c[_0x5c28('0x23b')](/<LABEL:[ ](.*?)>/i))return!![];if(_0x28221c[_0x5c28('0x23b')](/<LABEL>\s*([\s\S]*)\s*<\/LABEL>/i))return!![];}return![];},Spriteset_Map[_0x5c28('0x404')][_0x5c28('0x406')]=function(_0x2bcd26){this[_0x5c28('0x101')]=this['_characterSprites']||[];const _0x49b2d5=new Sprite_Character(_0x2bcd26);this[_0x5c28('0x101')][_0x5c28('0x22')](_0x49b2d5),this[_0x5c28('0x1f6')][_0x5c28('0x59')](_0x49b2d5),this[_0x5c28('0x16f')](_0x49b2d5),this[_0x5c28('0x6')](_0x2bcd26),_0x49b2d5[_0x5c28('0x18f')]();},VisuMZ['EventsMoveCore'][_0x5c28('0x329')]=Window_Message[_0x5c28('0x404')][_0x5c28('0x19')],Window_Message['prototype'][_0x5c28('0x19')]=function(){$gameMessage['registerSelfEvent'](),VisuMZ[_0x5c28('0x3e9')][_0x5c28('0x329')][_0x5c28('0x1c7')](this),$gameTemp[_0x5c28('0x73')]();},VisuMZ[_0x5c28('0x3e9')][_0x5c28('0x343')]=Window_ScrollText[_0x5c28('0x404')][_0x5c28('0x19')],Window_ScrollText[_0x5c28('0x404')]['startMessage']=function(){$gameMessage['registerSelfEvent'](),VisuMZ[_0x5c28('0x3e9')][_0x5c28('0x343')][_0x5c28('0x1c7')](this),$gameTemp[_0x5c28('0x73')]();};function Window_EventLabel(){this[_0x5c28('0x23')](...arguments);}Window_EventLabel[_0x5c28('0x404')]=Object[_0x5c28('0x43')](Window_Base[_0x5c28('0x404')]),Window_EventLabel[_0x5c28('0x404')]['constructor']=Window_EventLabel,Window_EventLabel[_0x5c28('0x404')][_0x5c28('0x23')]=function(_0x12520d){this[_0x5c28('0x13f')]=_0x12520d;const _0x2936d3=new Rectangle(0x0,0x0,Graphics[_0x5c28('0x96')]/0x4,this[_0x5c28('0x2ed')](0x1));Window_Base[_0x5c28('0x404')][_0x5c28('0x23')][_0x5c28('0x1c7')](this,_0x2936d3),this[_0x5c28('0x33a')](0x2),this[_0x5c28('0x30a')]='';},Window_EventLabel[_0x5c28('0x404')][_0x5c28('0x18f')]=function(){Window_Base[_0x5c28('0x404')][_0x5c28('0x18f')][_0x5c28('0x1c7')](this),this[_0x5c28('0x147')](),this[_0x5c28('0x245')](),this[_0x5c28('0x14b')](),this[_0x5c28('0x33f')]();},Window_EventLabel['prototype'][_0x5c28('0x147')]=function(){this[_0x5c28('0x13f')]['labelWindowText']()!==this[_0x5c28('0x30a')]&&(this['_text']=this[_0x5c28('0x13f')][_0x5c28('0x2bf')](),this['refresh']());},Window_EventLabel['prototype'][_0x5c28('0x245')]=function(){this[_0x5c28('0x2e5')]['x']=0x1/$gameScreen[_0x5c28('0x27c')](),this[_0x5c28('0x2e5')]['y']=0x1/$gameScreen[_0x5c28('0x27c')]();},Window_EventLabel[_0x5c28('0x404')][_0x5c28('0x14b')]=function(){const _0x43eb63=SceneManager[_0x5c28('0x250')][_0x5c28('0x3e4')][_0x5c28('0x32a')](this['_event']);this['x']=Math['round'](this[_0x5c28('0x13f')]['screenX']()-Math[_0x5c28('0x35d')](this[_0x5c28('0x3b0')]*this[_0x5c28('0x2e5')]['x']/0x2)),this['x']+=this[_0x5c28('0x13f')][_0x5c28('0x272')][_0x5c28('0x370')],this['y']=this[_0x5c28('0x13f')][_0x5c28('0x23a')]()-_0x43eb63[_0x5c28('0x3ef')],this['y']+=Math[_0x5c28('0x203')]($gameSystem['windowPadding']()*0.5),this['y']-=Math[_0x5c28('0x203')](this['height']*this[_0x5c28('0x2e5')]['y']),this['y']+=this[_0x5c28('0x13f')][_0x5c28('0x272')][_0x5c28('0x3fa')];},Window_EventLabel['prototype'][_0x5c28('0x33f')]=function(){if(this[_0x5c28('0x40a')]()){if(_0x5c28('0x3f')==='DmEmn')this[_0x5c28('0x34a')]+=this[_0x5c28('0x3d6')]();else{function _0xdb9a9(){if([0x1,0x4,0x7][_0x5c28('0x369')](_0x39c975))_0x19ed6e-=0x1;if([0x3,0x6,0x9][_0x5c28('0x369')](_0x31608b))_0x48dcee+=0x1;return this[_0x5c28('0x119')](_0x25b218);}}}else{if(SceneManager['_scene'][_0x5c28('0xd7')]>0x0){if(_0x5c28('0x97')===_0x5c28('0x315')){function _0x43ec86(){if(!this[_0x5c28('0x377')]())_0x176f92=this[_0x5c28('0x289')](_0x1d5746);_0x19bf9c[_0x5c28('0x3e9')][_0x5c28('0x8c')]['call'](this,_0x55fb61);}}else this['contentsOpacity']=0x0;}else{if('fWtTJ'!==_0x5c28('0x20f')){function _0x13b214(){if(this[_0x5c28('0x2b6')]()&&this[_0x5c28('0xb5')]()===_0x5c28('0x55'))return!![];return _0xce151e['EventsMoveCore'][_0x5c28('0x2ff')][_0x5c28('0x1c7')](this);}}else this[_0x5c28('0x34a')]-=this['opacitySpeed']();}}},Window_EventLabel[_0x5c28('0x404')][_0x5c28('0x40a')]=function(){if(!$gameSystem[_0x5c28('0xe4')]())return![];if(this[_0x5c28('0x13f')]?.['_erased'])return![];if(SceneManager[_0x5c28('0x250')]['_encounterEffectDuration']>0x0)return![];const _0x528b50=$gamePlayer['x'],_0x35c930=$gamePlayer['y'],_0x581943=this['_event']['x'],_0x2705d2=this[_0x5c28('0x13f')]['y'];if($gameMap['absDistance'](_0x528b50,_0x35c930,_0x581943,_0x2705d2)>this[_0x5c28('0x13f')][_0x5c28('0x192')]())return![];return!![];},Window_EventLabel[_0x5c28('0x404')][_0x5c28('0x3d6')]=function(){return VisuMZ[_0x5c28('0x3e9')]['Settings'][_0x5c28('0x3ed')][_0x5c28('0x291')];},Window_EventLabel[_0x5c28('0x404')][_0x5c28('0x39a')]=function(){const _0x29a4f1=this['textSizeEx'](this[_0x5c28('0x30a')]);this[_0x5c28('0x3b0')]=_0x29a4f1[_0x5c28('0x3b0')]+($gameSystem[_0x5c28('0x28b')]()+this[_0x5c28('0xbb')]())*0x2,this[_0x5c28('0x3ef')]=Math[_0x5c28('0x3f6')](this[_0x5c28('0x2f1')](),_0x29a4f1[_0x5c28('0x3ef')])+$gameSystem[_0x5c28('0x28b')]()*0x2,this[_0x5c28('0x204')]();},Window_EventLabel[_0x5c28('0x404')][_0x5c28('0x2f1')]=function(){return VisuMZ[_0x5c28('0x3e9')][_0x5c28('0x376')][_0x5c28('0x3ed')][_0x5c28('0x3f0')];},Window_EventLabel[_0x5c28('0x404')][_0x5c28('0x11d')]=function(){Window_Base[_0x5c28('0x404')]['resetFontSettings'][_0x5c28('0x1c7')](this),this[_0x5c28('0x1c2')][_0x5c28('0x1da')]=this[_0x5c28('0x3d4')]();},Window_EventLabel[_0x5c28('0x404')][_0x5c28('0x3d4')]=function(){return VisuMZ[_0x5c28('0x3e9')][_0x5c28('0x376')][_0x5c28('0x3ed')][_0x5c28('0x202')];},Window_EventLabel[_0x5c28('0x404')][_0x5c28('0x389')]=function(){this[_0x5c28('0x39a')](),this[_0x5c28('0x1c2')]['clear']();const _0x5b3980=this[_0x5c28('0x30a')][_0x5c28('0x230')](/[\r\n]+/);let _0x35108b=0x0;for(const _0x333f9e of _0x5b3980){const _0x4ae5cc=this[_0x5c28('0x2af')](_0x333f9e),_0x16a866=Math[_0x5c28('0x35d')]((this[_0x5c28('0x3d0')]-_0x4ae5cc[_0x5c28('0x3b0')])/0x2);this[_0x5c28('0x2a2')](_0x333f9e,_0x16a866,_0x35108b),_0x35108b+=_0x4ae5cc[_0x5c28('0x3ef')];}},Window_EventLabel[_0x5c28('0x404')][_0x5c28('0x60')]=function(_0x4a46da,_0x56aabb){_0x56aabb[_0x5c28('0x2f7')]&&this[_0x5c28('0x37b')](_0x4a46da,_0x56aabb['x']+0x2,_0x56aabb['y']),_0x56aabb['x']+=Math[_0x5c28('0x2f5')](this[_0x5c28('0x316')](),ImageManager[_0x5c28('0x260')])+0x4;},Window_EventLabel[_0x5c28('0x404')][_0x5c28('0x37b')]=function(_0x5da062,_0x21b998,_0x5f4ef8){const _0x5d42d3=ImageManager[_0x5c28('0x298')]('IconSet'),_0x14f0a2=ImageManager[_0x5c28('0x260')],_0x30e0fa=ImageManager[_0x5c28('0x2f6')],_0x295e3a=_0x5da062%0x10*_0x14f0a2,_0x83645d=Math[_0x5c28('0x35d')](_0x5da062/0x10)*_0x30e0fa,_0x59f1ed=Math[_0x5c28('0x2f5')](this[_0x5c28('0x316')]()),_0x29d705=Math[_0x5c28('0x2f5')](this['iconSize']());this[_0x5c28('0x1c2')][_0x5c28('0x30f')](_0x5d42d3,_0x295e3a,_0x83645d,_0x14f0a2,_0x30e0fa,_0x21b998,_0x5f4ef8,_0x59f1ed,_0x29d705);},Window_EventLabel['prototype'][_0x5c28('0x316')]=function(){return VisuMZ['EventsMoveCore'][_0x5c28('0x376')][_0x5c28('0x3ed')][_0x5c28('0x54')];};