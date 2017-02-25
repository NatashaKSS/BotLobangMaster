module.exports = {
  hashCode: function(str) {
    console.log(str);
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
