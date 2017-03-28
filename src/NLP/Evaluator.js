
/**
 * Aids in producing evaluation reports of algorithms or classifiers
 */
module.exports = class Evaluator {
  constructor() {

  }

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

  printSummary(total, numCorrect, numFalsePositives) {
    console.log("================SUMMARY================");
    console.log("You got " + this.getAccuracyInStr(total, numCorrect) + " correct");
    console.log("Accuracy is " + (1 - this.computeMisclassificationRate(total, numCorrect)));
    console.log("Misclassification rate is " + this.computeMisclassificationRate(total, numCorrect));
    console.log("Number of false positives is " + numFalsePositives + " out of " + (total - numCorrect) + " misclassified.");
    console.log("=============END OF SUMMARY============");
  }

  printMisclassifedDetails(actualClassification, expectedEntry) {
    console.log("==============GOT THIS WRONG=============");
    console.log("Original Text: " + JSON.stringify(expectedEntry['originalMsg']));
    console.log("Normalized Tokens: " + JSON.stringify(expectedEntry['tokens']));
    console.log("Was supposed to be " + expectedEntry['label'] +
                ", but instead got " + actualClassification['labels'][0]['label'])
    console.log(JSON.stringify(this.getLabelProbabilities(actualClassification)));
    console.log("=========================================");
  }

  isClassifiedCorrectly(actualClassification, expectedEntry) {
    return actualClassification['labels'][0]['label'] === expectedEntry['label'];
  }

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
}
