/**
 *
 * Usage
 *   {{lorem}}
 *   {{lorem count="7" units="words"}}
 *
 * Default settings
 *   count: 1,               // Number of words, sentences, or paragraphs to generate.
 *   units: 'sentences',     // Generate words, sentences, or paragraphs.
 *   sentenceLowerBound: 5,  // Minimum words per sentence.
 *   sentenceUpperBound: 10, // Maximum words per sentence.
 *   paragraphLowerBound: 3, // Minimum sentences per paragraph.
 *   paragraphUpperBound: 7, // Maximum sentences per paragraph.
 *   format: 'plain',        // Plain text or html
 *   random: Math.random     // A PRNG function. Uses Math.random by default
 *
 */

'use strict';

module.exports.register = function(handlebars) {

  handlebars.registerHelper('lorem', require('helper-lorem'));

};
