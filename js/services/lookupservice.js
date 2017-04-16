define(['ojs/ojcore'],function(oj){
    var lookUpService = {};
    lookUpService.baseUrl = "http://localhost:5555/api/lookup/";
    lookUpService.CategoryCollection = function(){
        var Categories =oj.Collection.extend({
            url: this.baseUrl + 'categories',
            model:oj.Model.extend({idAttribute:'value'})
        });
        return new Categories();
    };
    lookUpService.AuthorCollection = function(){
        var Categories =oj.Collection.extend({
            url: this.baseUrl + 'authors',
            model:oj.Model.extend({idAttribute:'value'})
        });
        return new Categories();
    };
    lookUpService.PublishersCollection = function(){
        var Categories =oj.Collection.extend({
            url: this.baseUrl + 'publishers',
            model:oj.Model.extend({idAttribute:'value'})
        });
        return new Categories();
    };
    
    return lookUpService;
});