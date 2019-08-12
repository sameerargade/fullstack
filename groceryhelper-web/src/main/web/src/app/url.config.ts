const URL = "http://localhost:9080/";

const URL_CONFIG = {
    GROCERY_ITEM_ADD: URL+'saveGroceryItem',
    GROCERY_ITEM_LIST: URL+'findAllGroceryItems',
    GROCERY_ITEM_DELETE: URL+'deleteGroceryItem',
    GROCERY_ITEM_GET: URL+'getGroceryItem',
    GROCERY_ITEM_SEARCH: URL+'searchForGroceryItem'
};

export default URL_CONFIG;