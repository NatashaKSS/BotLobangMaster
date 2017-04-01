
/**
 * Aids in producing evaluation reports of algorithms or classifiers
 */
module.exports = class Evaluator {
  constructor() {

  }

  /**
   * Prints Accuracy Report to console for a set of classification results
   * against the expected classification results.
   *
   * @param {[Array]} actual Array of classification results generated
   * @param {[Array]} expected Array of gold standard results to compare against
   */
  printClassifierAccuracyReport(actual, expected) {
    let total = actual.length;
    let numCorrect = 0;
    let numFalsePositives = 0;
    for (let i = 0; i < actual.length; i++) {
      if (this.isClassifiedCorrectly(actual[i], expected[i])) {
        numCorrect++;
      } else {
        if (this.isFalsePositive(actual[i], expected[i])) {
          numFalsePositives++;
        }
        this.printMisclassifedDetails(actual[i], expected[i]);
      }
    }
    this.printSummary(total, numCorrect, numFalsePositives);
  }

  /**
   * Prints a Summary of the classification results to console.
   * Summarizes:
   *   Accuracy Rate, Misclassification Rate,
   *   Number of False Positives out of the number of misclassified.
   *
   * @param {Integer} total Total number of results
   * @param {Integer} numCorrect Number of results that were true positives
   * @param {Integer} numFalsePositives Number of false positives
   */
  printSummary(total, numCorrect, numFalsePositives) {
    console.log("================SUMMARY================");
    console.log("You got " + this.getAccuracyInStr(total, numCorrect) + " correct");
    console.log("Accuracy is " + (1 - this.computeMisclassificationRate(total, numCorrect)));
    console.log("Misclassification rate is " + this.computeMisclassificationRate(total, numCorrect));
    console.log("Number of false positives is " + numFalsePositives + " out of " + (total - numCorrect) + " misclassified.");
    console.log("=============END OF SUMMARY============");
  }

  /**
   * Prints a small diagnostic summary of the misclassified data point.
   * Gives diagnostic info about the original text, normalized tokens,
   * expected label VS actual classified label and the computed probabilities
   * of the 'promo' and 'not=promo' labels
   *
   * @param {Object} actualClassification Actual classification of this data point
   * @param {Object} expectedEntry Expected gold standard of this data point
   */
  printMisclassifedDetails(actualClassification, expectedEntry) {
    console.log("==============GOT THIS WRONG=============");
    console.log("Original Text: " + JSON.stringify(expectedEntry['originalMsg']));
    console.log("Normalized Tokens: " + JSON.stringify(expectedEntry['tokens']));
    console.log("Was supposed to be " + expectedEntry['label'] +
                ", but instead got " + actualClassification['labels'][0]['label'])
    console.log(JSON.stringify(this.getLabelProbabilities(actualClassification)));
    console.log("=========================================");
  }

  /**
   * Determines whether or not this classification matches the gold standard.
   *
   * @param {Object} actualClassification Actual classification of this data point
   * @param {Object} expectedEntry Expected gold standard of this data point
   */
  isClassifiedCorrectly(actualClassification, expectedEntry) {
    return actualClassification['labels'][0]['label'] === expectedEntry['label'];
  }

  /**
   * Determines if the actual classification object is a true positive or not.
   * If it isn't a true positive, it must then be a true negative beacuse
   * the actual and expected classification object are classified correctly.
   *
   * @param {Object} actualClassification Actual classification of this data point
   * @param {Object} expectedEntry Expected gold standard of this data point
   */
  isTruePositive(actualClassification, expectedEntry) {
    if (this.isClassifiedCorrectly(actualClassification, expectedEntry) &&
        actualClassification['labels'][0]['label'] === 'promo') {
      // Classified correctly and is a 'promo'
      return actualClassification;
    } else {
      return null;
    }
  }

  /**
   * Determines if the actual classification object is a false positive or not.
   * If it isn't a false positive, it must then be a false negative beacuse
   * the actual and expected classification object are misclassified already.
   *
   * @param {Object} actualClassification Actual classification of this data point
   * @param {Object} expectedEntry Expected gold standard of this data point
   */
  isFalsePositive(actualClassification, expectedEntry) {
    if (!this.isClassifiedCorrectly(actualClassification, expectedEntry)) {
      if (actualClassification['labels'][0]['label'] === 'promo') {
        // The actual classification was positive, i.e. 'promo'
        return true;
      } else {
        // The actual classification was negative, i.e. 'not-promo'
        return false;
      }
    }
  }

  computeMisclassificationRate(total, numCorrect) {
    return (total - numCorrect) / total;
  }

  getAccuracyInStr(total, numCorrect) {
    return numCorrect + "/" + total;
  }

  /**
   * Computes and returns the probabilities of the respective
   * 'promo' and 'not-promo' labels
   *
   * @param {Object} actualClassification Actual classification of this data point
   */
  getLabelProbabilities(actualClassification) {
    let labels = actualClassification['labels'];
    let labelProbabilities = {
      'promo': 0,
      'not-promo': 0
    }

    if (labels[0]['label'] === "promo") {
      labelProbabilities['promo'] = labels[0]['value'];
      labelProbabilities['not-promo'] = labels[1]['value'];
    } else {
      labelProbabilities['not-promo'] = labels[0]['value'];
      labelProbabilities['promo'] = labels[1]['value'];
    }

    return labelProbabilities;
  }
}
