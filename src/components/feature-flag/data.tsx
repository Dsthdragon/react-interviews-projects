const dummyApiResponse = {
  showLightAndDarkMode: true,
  showTicTacToeBoard: true,
  showRandomColorGenerator: true,
  showAccordian: false,
  showTreeView: true,
  showTabs: true
};

function featureFlagsDataServiceCall() {
  return new Promise<object>((resolve, reject) => {
    if (dummyApiResponse) setTimeout(() => resolve(dummyApiResponse), 1000);
    else reject("Some error occured! Please try again");
  });
}

export default featureFlagsDataServiceCall;