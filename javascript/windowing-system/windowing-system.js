// @ts-check

/**
 * Implement the classes etc. that are needed to solve the
 * exercise in this file. Do not forget to export the entities
 * you defined so they are available for the tests.
 */

export class Size {
    constructor(width, height) {
        if (width === undefined) {
            this.width = 80
        } else {
            this.width = width
        }

        if (height === undefined) {
            this.height = 60
        } else {
            this.height = height;
        }
    }

    resize(newWidth, newHeight) {
        this.width = newWidth
        this.height = newHeight
    }
}


export class Position {
    constructor(x, y) {
        if (x === undefined) {
            this.x = 0
        } else {
            this.x = x
        }

        if (y === undefined) {
            this.y = 0
        } else {
            this.y = y
        }
    }

    move(newX, newY) {
        this.x = newX
        this.y = newY
    }
}

export class ProgramWindow {
    constructor() {
        this.screenSize = new Size(800, 600)
        this.size = new Size()
        this.position = new Position()
    }

    resize(newSize) {
        if (newSize.width < 1) newSize.width = 1
        if (newSize.height < 1) newSize.height = 1
        if (newSize.width > this.screenSize.width)
            newSize.width = this.screenSize.width - this.position.x
        if (newSize.height > this.screenSize.height)
            newSize.height = this.screenSize.height - this.position.y

        this.size = newSize
    }

    move(newPosition) {
        if (newPosition.x < 0)
            newPosition.x = 0
        if (newPosition.y < 0)
            newPosition.y = 0
        if (newPosition.x + this.size.width > this.screenSize.width)
            newPosition.x = this.screenSize.width - this.size.width
        if (newPosition.y + this.size.height > this.screenSize.height)
            newPosition.y = this.screenSize.height - this.size.height

        this.position = newPosition
    }
}

export function changeWindow(programWindow) {
    const newSize = new Size(400, 300);
    programWindow.resize(newSize);

    const newPosition = new Position(100, 150);
    programWindow.move(newPosition)

    return programWindow
}





