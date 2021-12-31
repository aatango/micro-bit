let gx = 0
let gy = 0
let gz = 0
basic.forever(function () {
	gx = input.acceleration(Dimension.X)
	gy = input.acceleration(Dimension.Y)
	gz = input.acceleration(Dimension.Z)
	basic.clearScreen()
	if (input.isGesture(Gesture.ScreenUp) || input.isGesture(Gesture.ScreenDown)) {
		basic.showLeds(`
			. . # . .
			. # . # .
			# . # . #
			. # . # .
			. . # . .
			`)
	} else if (Math.abs(gx) < Math.abs(gy)) {
		for (let CoordX = 0; CoordX <= 4; CoordX++) {
			led.plot(CoordX, Math.round(-1 * gx / gy * (CoordX - 2)) + 2)
		}
	} else {
		for (let CoordY = 0; CoordY <= 4; CoordY++) {
			led.plot(Math.round(gy / (-1 * gx) * (CoordY - 2)) + 2, CoordY)
		}
	}
})
