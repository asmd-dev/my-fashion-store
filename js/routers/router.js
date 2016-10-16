$(function () {
    
    // Router
    myStoreApp.AppRouter = Backbone.Router.extend({

        routes: {
            "": "list",
            "filter/:type": "list",
            '*path':  'defaultRoute'
        },

        list: function (type) {
            this.showFilterBar();
            this.showListing(type);
            
        },

        defaultRoute: function () {
            
        },

        showFilterBar: function () {
            this.searchView = new myStoreApp.SearchBarView();
            $('#search-bar').html(this.searchView.render().el);
            this.sortByView = new myStoreApp.SortView();
            $('#sort-by').html(this.sortByView.render().el);
        },

        showListing: function (type) {
            this.productList = new myStoreApp.ProductCollection();
            this.productListView = new myStoreApp.ProductListView({ collection: this.productList });
            this.productList.fetch().done(function () {
                this.productListView.options = { type: type };
                $('#content').html(this.productListView.render().el);
            }.bind(this));
        }
    });
});