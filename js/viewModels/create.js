/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

/**
 * managebooks module
 */
define(['ojs/ojcore', 'knockout','services/lookupservice','services/bookservice','kmapping','ojs/ojinputtext','ojs/ojselectcombobox', 'ojs/ojinputnumber','ojs/ojbutton','ojs/ojdialog','ojs/ojcollectiontabledatasource'
], function (oj, ko,lookupservice,bservice,kmap) {
    /**
     * The view model for the main content view template
     */
    function createContentViewModel() {
        var self = this;
        self.idLabel = ko.observable();
        self.idLabel(oj.Translations.getTranslatedString('book.id'));
        //START - Defining the book model
        self.book = {};
        self.book._id = ko.observable();
        self.book.title = ko.observable();
        self.book.description = ko.observable();
        self.book.category = ko.observableArray([0]);
        self.book.author = ko.observableArray([0]);
        self.book.publisher = ko.observableArray([0]);
        self.book.price = ko.observable();
        self.book.isbn = ko.observable();
        self.book.language = ko.observable();
        self.book.pages = ko.observable();
        self.book.avg_user_rating = ko.observable();
        self.book.avg_users_slept = ko.observable(); 
        self.categories = ko.observableArray();
        self.authors = ko.observableArray();
        self.publishers = ko.observableArray();
        //END- Defining the book model
                
        lookupservice.CategoryCollection().fetch({
            success:function(collection,response,options){
                var categories = [];
                categories.push({label:'--SELECT--',value:'-1'});
                categories.push(...response.categories);
                self.categories(categories);
            }
        });
        lookupservice.AuthorCollection().fetch({
            success:function(collection,response,options){
                var authors = [];
                authors.push({label:'--SELECT--',value:'-1'});
                authors.push(...response.authors);
                self.authors(authors);
            }
        });
        lookupservice.PublishersCollection().fetch({
            success:function(collection,response,options){
                var publishers = [];
                publishers.push({label:'--SELECT--',value:'-1'});
                publishers.push(...response.publishers);
                self.publishers(publishers);
            }
        });
        
                
        //Clearing the values for the observables
        self.clearFields = function(){
            self.book._id(null);
            self.book.title('');
            self.book.description('');
            self.book.category([0]);
            self.book.author([0]);
            self.book.publisher([0]);
            self.book.price(null);
            self.book.isbn('');
            self.book.language('');
            self.book.pages(null);
            self.book.avg_user_rating(null);
            self.book.avg_users_slept(null); 
        };
        
        self.addBook = function(){
            var bookCollection = bservice.BookCollection();
            var recordAttrs = kmap.toJS(self.book);
            recordAttrs.category =recordAttrs.category[0];
            recordAttrs.author =recordAttrs.author[0];
            recordAttrs.publisher =recordAttrs.publisher[0];
            
            //console.log(recordAttrs);
            
            bookCollection.create(recordAttrs, {wait:true,
                success: function(collection,response){
                    console.log('success');
                    $("#message").ojDialog("open");
                    //self.clearFields();
                },
                error:function(xhr,error,status){
                    alert('Error!');
                }
            });
        };
    }
    
    return createContentViewModel;
});
