import {Text} from '../../objects/text'
import {Image} from '../../objects/image'
import {Figure} from '../../objects/figure'

type SlideObject = {
    type: Text, Image, Figure
    positionX : number,
    positionY : number,
    zIndex: number,
    length: number,
    heigth: number
}

export {
    type SlideObject
}