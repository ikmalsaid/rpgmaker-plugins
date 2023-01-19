Game_Player.prototype.isDashButtonPressed = function() {
    const shift = Input.isPressed("shift");
    if (ConfigManager.alwaysDash) {
        return !shift;
    } else {
        return !shift;
    }
};