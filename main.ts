namespace SpriteKind {
    export const Cursor = SpriteKind.create()
    export const card = SpriteKind.create()
    export const setCARD = SpriteKind.create()
    export const coll = SpriteKind.create()
    export const del = SpriteKind.create()
    export const setdown = SpriteKind.create()
    export const stackcard = SpriteKind.create()
}
function check_if_completed_deck () {
    if (_1stackVAL > 11) {
        for (let value of sprites.allOfKind(SpriteKind.setCARD)) {
            value.setFlag(SpriteFlag.GhostThroughSprites, false)
            if (value.overlapsWith(_1stack)) {
                value.setKind(SpriteKind.del)
            }
            timer.after(100, function () {
                _1stackVAL = 0
                _1stack.setKind(SpriteKind.coll)
                value.setFlag(SpriteFlag.GhostThroughSprites, true)
            })
        }
    }
    if (_2stackVAL > 11) {
        for (let value of sprites.allOfKind(SpriteKind.setCARD)) {
            value.setFlag(SpriteFlag.GhostThroughSprites, false)
            if (value.overlapsWith(_2stack)) {
                value.setKind(SpriteKind.del)
            }
            timer.after(100, function () {
                _2stackVAL = 0
                _2stack.setKind(SpriteKind.coll)
                value.setFlag(SpriteFlag.GhostThroughSprites, true)
            })
        }
    }
    if (_3stackVAL > 11) {
        for (let value of sprites.allOfKind(SpriteKind.setCARD)) {
            value.setFlag(SpriteFlag.GhostThroughSprites, false)
            if (value.overlapsWith(_3stack)) {
                value.setKind(SpriteKind.del)
            }
            timer.after(100, function () {
                _3stackVAL = 0
                _3stack.setKind(SpriteKind.coll)
                value.setFlag(SpriteFlag.GhostThroughSprites, true)
            })
        }
    }
    if (_4stackVAL > 11) {
        for (let value of sprites.allOfKind(SpriteKind.setCARD)) {
            value.setFlag(SpriteFlag.GhostThroughSprites, false)
            if (value.overlapsWith(_4stack)) {
                value.setKind(SpriteKind.del)
            }
            timer.after(100, function () {
                _4stackVAL = 0
                _4stack.setKind(SpriteKind.coll)
                value.setFlag(SpriteFlag.GhostThroughSprites, true)
            })
        }
    }
}
function get_card () {
    if (debug) {
        debug_cardNumber = (debug_cardNumber + 1) % 13
        return CardList[debug_cardNumber]
    } else {
        return CardList._pickRandom()
    }
}
controller.A.onEvent(ControllerButtonEvent.Released, function () {
    if (test) {
        test = false
        timer.after(100, function () {
            for (let value of sprites.allOfKind(SpriteKind.card)) {
                if (value.overlapsWith(_1stack)) {
                    if (currentvalue == 1 || currentvalue == 0 || currentvalue == _1stackVAL + 1) {
                        value.setPosition(46, 61)
                        _1stackVAL += 1
                        value.setFlag(SpriteFlag.GhostThroughSprites, true)
                        value.setKind(SpriteKind.setCARD)
                    } else {
                        value.setPosition(151, 107)
                    }
                } else if (value.overlapsWith(_2stack)) {
                    if (currentvalue == 1 || currentvalue == 0 || currentvalue == _2stackVAL + 1) {
                        value.setPosition(69, 61)
                        _2stackVAL += 1
                        value.setFlag(SpriteFlag.GhostThroughSprites, true)
                        value.setKind(SpriteKind.setCARD)
                    } else {
                        value.setPosition(151, 107)
                    }
                } else if (value.overlapsWith(_3stack)) {
                    if (currentvalue == 1 || currentvalue == 0 || currentvalue == _3stackVAL + 1) {
                        value.setPosition(92, 61)
                        _3stackVAL += 1
                        value.setFlag(SpriteFlag.GhostThroughSprites, true)
                        value.setKind(SpriteKind.setCARD)
                    } else {
                        value.setPosition(151, 107)
                    }
                } else if (value.overlapsWith(_4stack)) {
                    if (currentvalue == 1 || currentvalue == 0 || currentvalue == _4stackVAL + 1) {
                        value.setPosition(115, 61)
                        _4stackVAL += 1
                        value.setFlag(SpriteFlag.GhostThroughSprites, true)
                        value.setKind(SpriteKind.setCARD)
                    } else {
                        value.setPosition(151, 107)
                    }
                } else if (setdownstack.overlapsWith(value)) {
                    value.destroy()
                } else {
                    value.setPosition(151, 107)
                }
            }
            check_if_completed_deck()
        })
    }
})
sprites.onOverlap(SpriteKind.card, SpriteKind.card, function (sprite, otherSprite) {
    otherSprite.x += -17
})
controller.menu.onEvent(ControllerButtonEvent.Pressed, function () {
    for (let value of sprites.allOfKind(SpriteKind.card)) {
        cardsinhand += 1
    }
    timer.after(100, function () {
        cardsneeded = 5 - cardsinhand
    })
    timer.after(200, function () {
        for (let index = 0; index < cardsneeded; index++) {
            Card = sprites.create(get_card(), SpriteKind.card)
            Card.setPosition(151, 107)
        }
        cardsinhand = 0
    })
})
sprites.onOverlap(SpriteKind.Cursor, SpriteKind.card, function (sprite, otherSprite) {
    if (otherSprite.image.equals(assets.image`Card0`)) {
        currentvalue = 0
    } else if (otherSprite.image.equals(assets.image`Card1`)) {
        currentvalue = 1
    } else if (otherSprite.image.equals(assets.image`Card2`)) {
        currentvalue = 2
    } else if (otherSprite.image.equals(assets.image`Card3`)) {
        currentvalue = 3
    } else if (otherSprite.image.equals(assets.image`Card4`)) {
        currentvalue = 4
    } else if (otherSprite.image.equals(assets.image`Card5`)) {
        currentvalue = 5
    } else if (otherSprite.image.equals(assets.image`Card6`)) {
        currentvalue = 6
    } else if (otherSprite.image.equals(assets.image`Card7`)) {
        currentvalue = 7
    } else if (otherSprite.image.equals(assets.image`Card8`)) {
        currentvalue = 8
    } else if (otherSprite.image.equals(assets.image`Card9`)) {
        currentvalue = 9
    } else if (otherSprite.image.equals(assets.image`Card10`)) {
        currentvalue = 10
    } else if (otherSprite.image.equals(assets.image`Card11`)) {
        currentvalue = 11
    } else if (otherSprite.image.equals(assets.image`Card12`)) {
        currentvalue = 12
    }
    if (controller.A.isPressed()) {
        otherSprite.z = Cursor.z
        Cursor.z += 1
        otherSprite.setPosition(Cursor.x, Cursor.y)
        for (let value of sprites.allOfKind(SpriteKind.stackcard)) {
            value.setFlag(SpriteFlag.GhostThroughSprites, true)
        }
        for (let value of sprites.allOfKind(SpriteKind.card)) {
            value.setFlag(SpriteFlag.GhostThroughSprites, true)
        }
        otherSprite.setFlag(SpriteFlag.GhostThroughSprites, false)
    } else {
        for (let value of sprites.allOfKind(SpriteKind.stackcard)) {
            value.setFlag(SpriteFlag.GhostThroughSprites, false)
        }
        for (let value of sprites.allOfKind(SpriteKind.card)) {
            value.setFlag(SpriteFlag.GhostThroughSprites, false)
        }
        test = true
    }
})
/**
 * 1: 46
 * 
 * 2: 69
 * 
 * 3: 92
 * 
 * 4: 115 
 * 
 * 61
 */
let cardsneeded = 0
let cardsinhand = 0
let currentvalue = 0
let test = false
let _4stackVAL = 0
let _3stackVAL = 0
let _2stackVAL = 0
let _1stackVAL = 0
let start = false
let setdownstack: Sprite = null
let Card: Sprite = null
let _4stack: Sprite = null
let _3stack: Sprite = null
let _2stack: Sprite = null
let _1stack: Sprite = null
let Cursor: Sprite = null
let ownStack: Image[] = []
let debug_cardNumber = 0
let CardList: Image[] = []
let debug = false
let stackCardplaced = false
debug = false
scene.setBackgroundImage(img`
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddffffffffffffffffdddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddff11111111111111ffddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddf1777777777777771fddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddf1771777177171771fddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddf1771771717171771fddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddf1771171717117771fddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddf1771777777777771fddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddf1771117777777771fddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddf1777777777777771fddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddf1777771111777771fddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddf1777717777177771fddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddf1777177777717771fddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddf1777777777777771fddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddf1777777777777771fddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddf1777717777177771fddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddf1777717777177771fddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddf1777717777177771fddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddf1777777777777771fddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddf1771777177171771fddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddf1771771717171771fddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddf1771171717117771fddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddf1771777777777771fddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddf1771117777777771fddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddf1777777777777771fddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddff11111111111111ffddddd
    ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddffffffffffffffffdddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    ddddddddddddddddddddddddddddddddddddddffffffffffffffffdddddddffffffffffffffffdddddddffffffffffffffffdddddddffffffffffffffffddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddffddddddddddddddffdddddffddddddddddddddffdddddffddddddddddddddffdddddffddddddddddddddffdddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddfddddddddddddddddfdddddfddddddddddddddddfdddddfddddddddddddddddfdddddfddddddddddddddddfdddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddfddddddddddddddddfdddddfddddddddddddddddfdddddfddddddddddddddddfdddddfddddddddddddddddfdddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddfddddddddddddddddfdddddfddddddddddddddddfdddddfddddddddddddddddfdddddfddddddddddddddddfdddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddfddddddddddddddddfdddddfddddddddddddddddfdddddfddddddddddddddddfdddddfddddddddddddddddfdddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddfddddddddddddddddfdddddfddddddddddddddddfdddddfddddddddddddddddfdddddfddddddddddddddddfdddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddfddddddddddddddddfdddddfddddddddddddddddfdddddfddddddddddddddddfdddddfddddddddddddddddfdddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddfddddddddddddddddfdddddfddddddddddddddddfdddddfddddddddddddddddfdddddfddddddddddddddddfdddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddfddddddddddddddddfdddddfddddddddddddddddfdddddfddddddddddddddddfdddddfddddddddddddddddfdddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddfddddddddddddddddfdddddfddddddddddddddddfdddddfddddddddddddddddfdddddfddddddddddddddddfdddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddfddddddddddddddddfdddddfddddddddddddddddfdddddfddddddddddddddddfdddddfddddddddddddddddfdddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddfddddddddddddddddfdddddfddddddddddddddddfdddddfddddddddddddddddfdddddfddddddddddddddddfdddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddfddddddddddddddddfdddddfddddddddddddddddfdddddfddddddddddddddddfdddddfddddddddddddddddfdddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddfddddddddddddddddfdddddfddddddddddddddddfdddddfddddddddddddddddfdddddfddddddddddddddddfdddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddfddddddddddddddddfdddddfddddddddddddddddfdddddfddddddddddddddddfdddddfddddddddddddddddfdddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddfddddddddddddddddfdddddfddddddddddddddddfdddddfddddddddddddddddfdddddfddddddddddddddddfdddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddfddddddddddddddddfdddddfddddddddddddddddfdddddfddddddddddddddddfdddddfddddddddddddddddfdddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddfddddddddddddddddfdddddfddddddddddddddddfdddddfddddddddddddddddfdddddfddddddddddddddddfdddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddfddddddddddddddddfdddddfddddddddddddddddfdddddfddddddddddddddddfdddddfddddddddddddddddfdddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddfddddddddddddddddfdddddfddddddddddddddddfdddddfddddddddddddddddfdddddfddddddddddddddddfdddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddfddddddddddddddddfdddddfddddddddddddddddfdddddfddddddddddddddddfdddddfddddddddddddddddfdddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddfddddddddddddddddfdddddfddddddddddddddddfdddddfddddddddddddddddfdddddfddddddddddddddddfdddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddfddddddddddddddddfdddddfddddddddddddddddfdddddfddddddddddddddddfdddddfddddddddddddddddfdddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddffddddddddddddddffdddddffddddddddddddddffdddddffddddddddddddddffdddddffddddddddddddddffdddddddddddddddddddddddddddddddddddd
    ddddddddddddddddddddddddddddddddddddddffffffffffffffffdddddddffffffffffffffffdddddddffffffffffffffffdddddddffffffffffffffffddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    ddddddffffffffffffffffdddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddff11111111111111ffddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddf1777777777777771fddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddf1771117777777771fddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddf1771777777777771fddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddf1771171717117771fddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddf1771771717171771fddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddf1771777177171771fddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddf1777777777777771fddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddf1777717777177771fddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddf1777717777177771fddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddf1777717777177771fddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddf1777777777777771fddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddf1777777777777771fddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddf1777177777717771fddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddf1777717777177771fddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddf1777771111777771fddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddf1777777777777771fddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddf1771117777777771fddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddf1771777777777771fddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddf1771171717117771fddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddf1771771717171771fddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddf1771777177171771fddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddf1777777777777771fddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddff11111111111111ffddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    ddddddffffffffffffffffdddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    `)
controller.configureRepeatEventDefaults(0, 30)
let yourStack = 0
let Backside = [assets.image`Card13`]
CardList = [
assets.image`Card0`,
assets.image`Card1`,
assets.image`Card2`,
assets.image`Card3`,
assets.image`Card4`,
assets.image`Card5`,
assets.image`Card6`,
assets.image`Card7`,
assets.image`Card8`,
assets.image`Card9`,
assets.image`Card10`,
assets.image`Card11`,
assets.image`Card12`
]
let list = [
0,
1,
2,
3,
4,
5,
6,
7,
8,
9,
10,
11,
12
]
if (debug) {
    debug_cardNumber = 0
    ownStack = [
    CardList[1],
    CardList[2],
    CardList[3],
    CardList[4],
    CardList[5],
    CardList[6],
    CardList[7],
    CardList[8],
    CardList[9],
    CardList[10],
    img`
        .dddddddddddddd.
        dddddddddddddddd
        dddddddddddddddd
        dddddddddddddddd
        dddddddddddddddd
        dddddddddddddddd
        dddddddddddddddd
        dddddddddddddddd
        dddddddddddddddd
        dddddddddddddddd
        dddddddddddddddd
        dddddddddddddddd
        dddddddddddddddd
        dddddddddddddddd
        dddddddddddddddd
        dddddddddddddddd
        dddddddddddddddd
        dddddddddddddddd
        dddddddddddddddd
        dddddddddddddddd
        dddddddddddddddd
        dddddddddddddddd
        dddddddddddddddd
        .dddddddddddddd.
        `
    ]
} else {
    ownStack = [
    CardList._pickRandom(),
    CardList._pickRandom(),
    CardList._pickRandom(),
    CardList._pickRandom(),
    CardList._pickRandom(),
    CardList._pickRandom(),
    CardList._pickRandom(),
    CardList._pickRandom(),
    CardList._pickRandom(),
    CardList._pickRandom(),
    img`
        .dddddddddddddd.
        dddddddddddddddd
        dddddddddddddddd
        dddddddddddddddd
        dddddddddddddddd
        dddddddddddddddd
        dddddddddddddddd
        dddddddddddddddd
        dddddddddddddddd
        dddddddddddddddd
        dddddddddddddddd
        dddddddddddddddd
        dddddddddddddddd
        dddddddddddddddd
        dddddddddddddddd
        dddddddddddddddd
        dddddddddddddddd
        dddddddddddddddd
        dddddddddddddddd
        dddddddddddddddd
        dddddddddddddddd
        dddddddddddddddd
        dddddddddddddddd
        .dddddddddddddd.
        `
    ]
}
let stackSprite = sprites.create(ownStack[yourStack], SpriteKind.stackcard)
stackSprite.setPosition(14, 101)
Cursor = sprites.create(img`
    . . . b b . . . 
    . . 1 . . 1 . . 
    . 1 5 c c 5 1 . 
    b . c 1 1 c . b 
    b . c 1 1 c . b 
    . 1 5 c c 5 1 . 
    . . 1 . . 1 . . 
    . . . b b . . . 
    `, SpriteKind.Cursor)
controller.moveSprite(Cursor)
Cursor.z = 2
_1stack = sprites.create(img`
    d d d d d d d d d d 
    d d d d d d d d d d 
    d d d d d d d d d d 
    d d d d d d d d d d 
    d d d d d d d d d d 
    d d d d d d d d d d 
    d d d d d d d d d d 
    d d d d d d d d d d 
    d d d d d d d d d d 
    d d d d d d d d d d 
    d d d d d d d d d d 
    d d d d d d d d d d 
    d d d d d d d d d d 
    d d d d d d d d d d 
    d d d d d d d d d d 
    d d d d d d d d d d 
    `, SpriteKind.coll)
_1stack.setPosition(46, 61)
_2stack = sprites.create(img`
    d d d d d d d d d d 
    d d d d d d d d d d 
    d d d d d d d d d d 
    d d d d d d d d d d 
    d d d d d d d d d d 
    d d d d d d d d d d 
    d d d d d d d d d d 
    d d d d d d d d d d 
    d d d d d d d d d d 
    d d d d d d d d d d 
    d d d d d d d d d d 
    d d d d d d d d d d 
    d d d d d d d d d d 
    d d d d d d d d d d 
    d d d d d d d d d d 
    d d d d d d d d d d 
    `, SpriteKind.coll)
_2stack.setPosition(69, 61)
_3stack = sprites.create(img`
    d d d d d d d d d d 
    d d d d d d d d d d 
    d d d d d d d d d d 
    d d d d d d d d d d 
    d d d d d d d d d d 
    d d d d d d d d d d 
    d d d d d d d d d d 
    d d d d d d d d d d 
    d d d d d d d d d d 
    d d d d d d d d d d 
    d d d d d d d d d d 
    d d d d d d d d d d 
    d d d d d d d d d d 
    d d d d d d d d d d 
    d d d d d d d d d d 
    d d d d d d d d d d 
    `, SpriteKind.coll)
_3stack.setPosition(92, 61)
_4stack = sprites.create(img`
    d d d d d d d d d d 
    d d d d d d d d d d 
    d d d d d d d d d d 
    d d d d d d d d d d 
    d d d d d d d d d d 
    d d d d d d d d d d 
    d d d d d d d d d d 
    d d d d d d d d d d 
    d d d d d d d d d d 
    d d d d d d d d d d 
    d d d d d d d d d d 
    d d d d d d d d d d 
    d d d d d d d d d d 
    d d d d d d d d d d 
    d d d d d d d d d d 
    d d d d d d d d d d 
    `, SpriteKind.coll)
_4stack.setPosition(115, 61)
Card = sprites.create(get_card(), SpriteKind.card)
Card.setPosition(151, 107)
Card = sprites.create(get_card(), SpriteKind.card)
Card.setPosition(134, 107)
Card = sprites.create(get_card(), SpriteKind.card)
Card.setPosition(117, 107)
Card = sprites.create(get_card(), SpriteKind.card)
Card.setPosition(100, 107)
Card = sprites.create(get_card(), SpriteKind.card)
Card.setPosition(83, 107)
setdownstack = sprites.create(img`
    . . . . . 2 . . . . . 
    . . . . 2 . 2 . . . . 
    . 2 2 2 2 2 2 2 2 2 . 
    . . 2 . 2 . 2 . 2 . . 
    . . 2 . 2 . 2 . 2 . . 
    . . 2 . 2 . 2 . 2 . . 
    . . 2 . 2 . 2 . 2 . . 
    . . . 2 2 2 2 2 . . . 
    . . . . . . . . . . . 
    2 2 2 2 2 2 2 2 2 2 2 
    `, SpriteKind.setdown)
setdownstack.setPosition(34, 115)
timer.after(500, function () {
    start = true
})
game.onUpdate(function () {
    for (let value of sprites.allOfKind(SpriteKind.del)) {
        value.destroy()
    }
    if (stackSprite.image.equals(assets.image`Card0`)) {
        currentvalue = 0
    } else if (stackSprite.image.equals(assets.image`Card1`)) {
        currentvalue = 1
    } else if (stackSprite.image.equals(assets.image`Card2`)) {
        currentvalue = 2
    } else if (stackSprite.image.equals(assets.image`Card3`)) {
        currentvalue = 3
    } else if (stackSprite.image.equals(assets.image`Card4`)) {
        currentvalue = 4
    } else if (stackSprite.image.equals(assets.image`Card5`)) {
        currentvalue = 5
    } else if (stackSprite.image.equals(assets.image`Card6`)) {
        currentvalue = 6
    } else if (stackSprite.image.equals(assets.image`Card7`)) {
        currentvalue = 7
    } else if (stackSprite.image.equals(assets.image`Card8`)) {
        currentvalue = 8
    } else if (stackSprite.image.equals(assets.image`Card9`)) {
        currentvalue = 9
    } else if (stackSprite.image.equals(assets.image`Card10`)) {
        currentvalue = 10
    } else if (stackSprite.image.equals(assets.image`Card11`)) {
        currentvalue = 11
    } else if (stackSprite.image.equals(assets.image`Card12`)) {
        currentvalue = 12
    }
    if (stackCardplaced) {
        stackCardplaced = false
        yourStack += 1
        stackSprite = sprites.create(ownStack[yourStack], SpriteKind.stackcard)
        stackSprite.setPosition(14, 101)
    }
    if (controller.A.isPressed()) {
        if (Cursor.overlapsWith(stackSprite)) {
            stackSprite.z = Cursor.z
            Cursor.z += 1
            stackSprite.setPosition(Cursor.x, Cursor.y)
            for (let value of sprites.allOfKind(SpriteKind.card)) {
                value.setFlag(SpriteFlag.GhostThroughSprites, true)
            }
        }
    } else {
        for (let value of sprites.allOfKind(SpriteKind.card)) {
            value.setFlag(SpriteFlag.GhostThroughSprites, false)
        }
        if (stackSprite.overlapsWith(_1stack)) {
            if (currentvalue == 1 || currentvalue == 0 || currentvalue == _1stackVAL + 1) {
                stackSprite.setPosition(46, 61)
                stackCardplaced = true
                _1stackVAL += 1
                stackSprite.setKind(SpriteKind.setCARD)
            } else {
                stackSprite.setPosition(14, 101)
            }
        } else if (stackSprite.overlapsWith(_2stack)) {
            if (currentvalue == 1 || currentvalue == 0 || currentvalue == _2stackVAL + 1) {
                stackSprite.setPosition(69, 61)
                stackCardplaced = true
                _2stackVAL += 1
                stackSprite.setKind(SpriteKind.setCARD)
            } else {
                stackSprite.setPosition(14, 101)
            }
        } else if (stackSprite.overlapsWith(_3stack)) {
            if (currentvalue == 1 || currentvalue == 0 || currentvalue == _3stackVAL + 1) {
                stackSprite.setPosition(92, 61)
                stackCardplaced = true
                _3stackVAL += 1
                stackSprite.setKind(SpriteKind.setCARD)
            } else {
                stackSprite.setPosition(14, 101)
            }
        } else if (stackSprite.overlapsWith(_4stack)) {
            if (currentvalue == 1 || currentvalue == 0 || currentvalue == _4stackVAL + 1) {
                stackSprite.setPosition(115, 61)
                stackCardplaced = true
                _4stackVAL += 1
                stackSprite.setKind(SpriteKind.setCARD)
            } else {
                stackSprite.setPosition(14, 101)
            }
        } else {
            stackSprite.setPosition(14, 101)
        }
    }
})
