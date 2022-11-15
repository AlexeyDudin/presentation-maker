import { SlideObject } from './slide-objects/slide-object'

type Slide = {
    objects: Array<SlideObject>,
    backgroundColor: string,
    backgroundImage: string,
}

export {
    type Slide
}