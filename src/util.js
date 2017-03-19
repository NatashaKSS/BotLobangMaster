
/**
 * A quick hash function for any string to turn it into a 32-bit integer.
 * Note: There is no reverse hash function for this as the hash function here
 * is 1-way, because we can't be sure that a reverse hash will collide with
 * another string.
 *
 * @type {[String]} str    String to hash
 */
module.exports = {
  hashCode: function(str) {
    var hash = 0;
    if (str.length == 0) {
      return hash;
    }

    for (i = 0; i < str.length; i++) {
        char = str.charCodeAt(i);
        hash = ((hash << 5) - hash) + char;
        hash = hash & hash; // Convert to 32bit integer
    }

    return hash;
  }
}
