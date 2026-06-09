import * as clix from './components/clickEvent.js'
import fetchData from './components/fetchData.js';
import { fetchPostData } from './components/fetchPostData.js';
import tippyJs from './components/tippy.js';

window.addEventListener('DOMContentLoaded', () => {
    clix.addClickToCatalogueBtn()
    clix.addClickCloseToCatalogue()
    clix.addClickToLocationCity()
    clix.addClickCart()
    clix.accordion()
    //
    fetchData();
    fetchPostData();
});
