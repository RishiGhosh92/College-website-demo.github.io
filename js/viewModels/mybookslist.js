/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

/**
 * mybookslist module
 */
define(['ojs/ojcore', 'knockout','services/bookservice','ojs/ojtable','ojs/ojcollectiontabledatasource','ojs/ojgauge','ojs/ojdialog'
        ,'ojs/ojpictochart','ojs/ojinputtext'
], function (oj, ko, bService) {
    /**
     * The view model for the main content view template
     */
    function mybookslistContentViewModel() {
        var self = this;
        self.titleSearch = ko.observable();
        self.bookCollection = ko.observable();
        self.bookCollection(bService.BookCollection());
        self.dsBooks = ko.observable();
        self.dsBooks(new oj.CollectionTableDataSource(self.bookCollection()));
        self.currentBook =ko.observable();
        self.showBook = function(data,event){
            var bookModel = bService.BookModel(data._id);
            bookModel.fetch({
                success:function(model,response){
                    var bookInfo = response.book;
                    bookInfo.pictoChartItems = ko.observableArray([
                        {name:'Have Sleep Problems',shape:'human',count:5-bookInfo.avg_users_slept,color:'#ed6647'},
                        {name:'Sleep Well',shape:'human',count:bookInfo.avg_users_slept}
                    ]);
                    self.currentBook(response.book);
                    $("#modalDialog1").ojDialog("open");
                },
                error:function(xhr,error,status){
                    console.log(xhr);
                    console.log(status);
                    console.log(error);
                }
            });
           
        };
        
        self.filterBooks = function(event,data){
            if(data.option === 'rawValue'){
                if(self.originalBookCollection === undefined){
                    self.originalBookCollection =self.bookCollection().clone();
                };
                var filteredResult = self.originalBookCollection.where(
                {title:{value:self.titleSearch(),comparator:self.titleFilter}});
                if(filteredResult.length > 0){
                    self.bookCollection().reset(filteredResult);
                }
            };
                
        };
        
        self.titleFilter = function(model,attr,value){
            var title = model.get(attr);
            return (title.toLowerCase().indexOf(value.toLowerCase()) > -1);
        };
    }
    
    return mybookslistContentViewModel;
});
