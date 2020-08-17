Vue.filter('searchFor', function(value, searchString) {

    var result = [];

    if (!searchString) {
        return value;
    }

    searchString = searchString.trim().toLowerCase();

    result = value.filter(function(item) {
        if (item.product.toLowerCase().indexOf(searchString) !== -1) {
            return item;
        }
    })

    return result;
})