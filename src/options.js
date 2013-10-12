/**
 * Size options
 *
 * @type {Object}
 */
var options = {
	2 : {
		bits  : [["B", 1], ["kb", 128],  ["Mb", 131072],  ["Gb", 134217728],  ["Tb", 137438953472],  ["Pb", 140737488355328]],
		bytes : [["B", 1], ["kB", 1024], ["MB", 1048576], ["GB", 1073741824], ["TB", 1099511627776], ["PB", 1125899906842624]]
	},
	10 : {
		bits  : [["B", 1], ["kb", 125],  ["Mb", 125000],  ["Gb", 125000000],  ["Tb", 125000000000],  ["Pb", 125000000000000]],
		bytes : [["B", 1], ["kB", 1000], ["MB", 1000000], ["GB", 1000000000], ["TB", 1000000000000], ["PB", 1000000000000000]]
	}
};
