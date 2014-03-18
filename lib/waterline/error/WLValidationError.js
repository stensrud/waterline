/**
 * Module dependencies
 */

var WLError = require('./WLError');
var nodeutil = require('util');



module.exports = WLValidationError;



/**
 * WLValidationError
 *
 * @extends WLError
 */
function WLValidationError () {

	// Call super
	WLError.call(this);

	// Override default WLError properties
	this.status = 'invalid';
  this.code = 'E_VALIDATION';
  this.msg = 'Waterline: Could not complete operation - violates one or more of your model\'s validation rules.';
}
nodeutil.inherits(WLValidationError, WLError);

