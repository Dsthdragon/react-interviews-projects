// import Accordian from "./components/accordian"
// import RandomColor from "./components/random-color"
// import StarRating from "./components/star-rating"
import './App.css'
// import SearchAutocomplete from './components/search-autocomplete-with-api'
import TicTacToe from './components/tic-tac-toe';
// import GithubProfileFinder from './components/github-profile-finder'
// import ModalTest from './components/custom-modal-popup/modal-test'
// import TabTest from './components/custom-tabs/tab-test'
// import LightDarkMode from './components/light-dark-mode'
// import QRCodeGenerator from './components/qr-code-generator'
// import ScrollIndicator from './components/scroll-indicator'
// import ImageSlider from "./components/image-slider"
// import LoadMoreData from './components/load-more-data'
// import TreeView from './components/tree-view'
// import menus from './components/tree-view/data'

function App() {

  return (
    <div className="App">
      {/* <Accordian /> */}
      {/* <RandomColor /> */}
      {/* <StarRating noOfStars={9} /> */}

      {/* <ImageSlider url={"https://picsum.photos/v2/list"} limit={10} page={1} /> */}

      {/* <LoadMoreData /> */}

      {/* <TreeView menus={menus} /> */}
      {/* <QRCodeGenerator /> */}
      {/* <LightDarkMode /> */}
      {/* <ScrollIndicator url={"https://dummyjson.com/products?limit=100"} /> */}
      {/* <TabTest /> */}
      {/* <ModalTest /> */}
      {/* <GithubProfileFinder /> */}
      {/* <SearchAutocomplete /> */}
      <TicTacToe />
    </div>
  )
}

export default App
