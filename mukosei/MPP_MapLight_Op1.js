//=============================================================================
// MPP_MapLight_Op1.js
//=============================================================================
// Copyright (c) 2021 Mokusei Penguin
// Released under the MIT license
// http://opensource.org/licenses/mit-license.php
//=============================================================================

/*:
 * @target MV MZ
 * @plugindesc By possessing or equipping a specific item, the player will be able to see the light.
 * @author Mokusei Penguin
 * @url 
 *
 * @base MPP_MapLight
 * @orderAfter MPP_MapLight
 *
 * @help [version 1.0.1]
 * This plugin is for RPG Maker MV and MZ.
 * 
 * ▼ Overview
 *  - The light will be displayed when the item is in possession and the
 *    equipment is equipped by the first character.
 *  - If there are multiple items / equipment that display lights, the order
 *    of priority is as follows.
 *        item > From top to bottom of equipment
 *  - It is a separate frame from the light of the main body plug-in.
 * 
 * ▼ Item / Weapon / Armor Note
 *  〇 <CharLight:r, c, a>
 *      r   : radius
 *      c   : color index
 *      a   : amplitude(Specify from 0-100 / No blinking at 0 / Not set is 0)
 *   - Displays the light centered on the player.
 *   
 *  〇 <FrontLight:c, a>
 *      c   : color index
 *      a   : amplitude(Specify from 0-100 / No blinking at 0 / Not set is 0)
 *   - Displays a light in front of the player.
 * 
 * ================================
 * Mail : wood_penguin＠yahoo.co.jp (＠ is half-width)
 * Blog : http://woodpenguin.blog.fc2.com/
 * License : MIT license
 * 
 */

/*:ja
 * @target MV MZ
 * @plugindesc 特定のアイテムを所持しているか、装備することでプレイヤーに灯りが表示されるようになります。
 * @author 木星ペンギン
 * @url 
 *
 * @base MPP_MapLight
 * @orderAfter MPP_MapLight
 *
 * @help [version 1.0.1]
 * このプラグインはRPGツクールMVおよびMZ用です。
 * 
 * ▼ 概要
 *  - アイテムは所持しているとき、装備品は先頭のキャラが装備しているときに
 *    灯りが表示されます。
 *  - 灯りを表示するアイテム・装備が複数ある場合の優先順位は以下の通りです。
 *      アイテム > 装備品の上から順
 *  - 本体プラグインの灯りとは別枠です。
 * 
 * ▼ アイテム/武器/防具のメモ
 *  〇 <CharLight:r, c, a>
 *      r   : 半径
 *      c   : 色番号
 *      a   : 明滅の振れ幅(0～100で指定 / 0で明滅なし / 未設定は0)
 *   - プレイヤーを中心に灯りを表示します。
 *   
 *  〇 <FrontLight:c, a>
 *      c   : 色番号
 *      a   : 明滅の振れ幅(0～100で指定 / 0で明滅なし / 未設定は0)
 *   - プレイヤーの前方に灯りを表示します。
 * 
 * ================================
 * Mail : wood_penguin＠yahoo.co.jp (＠は半角)
 * Blog : http://woodpenguin.blog.fc2.com/
 * License : MIT license
 * 
 */

(() => {
    'use strict';

    const pluginName = 'MPP_MapLight_Op1';
    
    //-------------------------------------------------------------------------
    // Game_Map

    const _Game_Map_setup = Game_Map.prototype.setup;
    Game_Map.prototype.setup = function(mapId) {
        _Game_Map_setup.apply(this, arguments);
        $gamePlayer.setupItemLight();
    };
    
        const _Game_Map_refresh = Game_Map.prototype.refresh;
    Game_Map.prototype.refresh = function() {
        _Game_Map_refresh.apply(this, arguments);
        $gamePlayer.setupItemLight();
    };

    Game_Map.prototype.setItemCharLight = function(r = 0, c = 0, a = 0) {
        this.getMapLight('item').setCharLight(-1, r, c, a);
    };

    Game_Map.prototype.setItemFrontLight = function(c = 0, a = 0) {
        this.getMapLight('item').setFrontLight(-1, c, a);
    };

    Game_Map.prototype.eraseItemLight = function() {
        this.eraseLight('item');
    };

    //-----------------------------------------------------------------------------
    // Game_Player

    Game_Player.prototype.setupItemLight = function() {
        const item = $gameParty.getMapLightItem();
        if (item) {
            if (item.meta.CharLight) {
                const args = item.meta.CharLight.split(',').map(Number);
                $gameMap.setItemCharLight(...args);
            } else if (item.meta.FrontLight) {
                const args = item.meta.FrontLight.split(',').map(Number);
                $gameMap.setItemFrontLight(...args);
            }
        } else {
            $gameMap.eraseItemLight();
        }
    };

    //-------------------------------------------------------------------------
    // Game_Party

    Game_Party.prototype.getMapLightItem = function() {
        return this.getHasMapLightItem() || this.getEquipMapLightItem();
    };

    Game_Party.prototype.getHasMapLightItem = function() {
        return this.items().find(item => {
            return item.meta.CharLight || item.meta.FrontLight;
        });
    };

    Game_Party.prototype.getEquipMapLightItem = function() {
        const actor = this.leader();
        if (actor) {
            return actor.equips().find(item => {
                return item && (item.meta.CharLight || item.meta.FrontLight);
            });
        }
        return null;
    };

})();
