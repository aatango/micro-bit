/*



let bpms: number[] = [40, 42, 44, 46, 48, 50, 52, 54, 56, 58, 60];
let bpm_index: number = 0;
let bpm: number = bpms[bpm_index];

let maxBrightness: number = 255;
led.setBrightness(maxBrightness);

// Control inputs
input.onButtonPressed(Button.A, () => {
    if (bpm_index > 0) {
        bpm_index -= 1;
        bpm = bpms[bpm_index];
        led.setBrightness(maxBrightness);
        basic.showNumber(bpm);
    }
});
input.onButtonPressed(Button.B, () => {
    if (bpm_index < bpms.length - 1) {
        bpm_index += 1;
        bpm = bpms[bpm_index];
        led.setBrightness(maxBrightness);
        basic.showNumber(bpm);
    }
});
 */

// Common arrangement on a Maelzel metronome, acc. Wikipedia.
let bpms: uint8[] = [
	40, 42, 44, 46, 48, 50, 52, 54, 56, 58, 60,
	63, 66, 69, 72,
	72, 76, 80, 84, 88, 92, 96, 100, 104, 108, 112, 116, 120,
	126, 132, 138, 144,
	144, 152, 160, 168, 176, 184, 192, 200, 208,
];

let bpm: uint8 = 92;
let interval: uint16[] = [
	60e3 / bpm * 0.5,
	60e3 / bpm * 0.2,
	60e3 / bpm * 0.1,
];

while (true) {
	control.inBackground(() => { music.playTone(Note.CSharp, interval[0]); })
	basic.showLeds(`
		#....
		#....
		#....
		#....
		#....
	`, interval[0]);

	basic.showLeds(`
		.....
		.#...
		.#...
		.#...
		.....
	`, interval[1]);
	basic.showLeds(`
		.....
		.....
		..#..
		.....
		.....
	`, interval[2]);
	basic.showLeds(`
		.....
		...#.
		...#.
		...#.
		.....
	`, interval[1]);

	control.inBackground(() => { music.playTone(Note.CSharp, interval[0]); })
	basic.showLeds(`
		....#
		....#
		....#
		....#
		....#
	`, interval[0]);

	basic.showLeds(`
		.....
		...#.
		...#.
		...#.
		.....
	`, interval[1]);
	basic.showLeds(`
		.....
		.....
		..#..
		.....
		.....
	`, interval[2]);
	basic.showLeds(`
		.....
		.#...
		.#...
		.#...
		.....
	`, interval[1]);
	}
