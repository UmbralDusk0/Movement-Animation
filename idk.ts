
/**
* Use this file to define custom functions and blocks.
* Read more at https://arcade.makecode.com/blocks/custom
*/

enum MyEnum {
    //% block="one"
    One,
    //% block="two"
    Two
}

/**
 * Custom blocks
 */

//% weight=100 color=#0fbc11 icon="💖"
namespace  Animation{
    /**
     * Plays an animation when the sprite is moving
     * @param sprite The sprite to animate, eg: mySprite
     */
    //% block="play movement animation horizontal on $sprite left $leftAnimation right $rightAnimation"
    //% sprite.shadow="variables_get"
    //% sprite.defl="mySprite"
    //% leftAnimation.shadow="lists_create_with"
    //% rightAnimation.shadow="lists_create_with"
    export function movementAnimationHorizontal(sprite: Sprite, leftAnimation: Image[], rightAnimation: Image[]): void {
        let animating = "still"
        game.onUpdate(function() {
            if (sprite.vx > 0&& animating != "right"){animating = "right"
                animation.runImageAnimation(sprite, rightAnimation, 200, true)
                
            } else if (sprite.vx < 0 && animating != "left"){animating = "left"
                animation.runImageAnimation(sprite, leftAnimation, 200, true)
                
            } else if (sprite.vx == 0){

                animation.stopAnimation(animation.AnimationTypes.All, sprite)
            }
        })
    }
}
