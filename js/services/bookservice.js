define(['ojs/ojcore'],function(oj){
    var bookService = {};
    bookService.baseUrl = "http://localhost:5555/api/";
    bookService.BookCollection =function(){
        var Books =oj.Collection.extend({
            url: this.baseUrl + 'books',
            model:oj.Model.extend({idAttribute:'_id'})
        });
        return new Books();
    };
    
    bookService.BookModel = function(bookId){
        var Book = oj.Model.extend({
            url: this.baseUrl + 'book?_id=' + bookId,
            idAttribute: '_id'
        });
        return new Book();
    }
    
    return bookService;
});