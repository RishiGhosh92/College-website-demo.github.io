/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

/**
 * products module
 */
define(['ojs/ojcore', 'knockout','ojs/ojinputtext','ojs/ojmodule','ojs/ojselectcombobox','ojs/ojinputnumber'
], function (oj, ko) {
    /**
     * The view model for the main content view template
     */
    function productsContentViewModel() {
        var self = this;
        self.name=ko.observable();
        self.sku=ko.observable();
        self.categories = ko.observableArray([
            {value: 'fr', label: 'Fruits'},
            {value: 'vg',    label: 'Vegetables'},
            {value: 'bg',   label: 'Beverages'}
        ]);
        self.subCategories  = ko.observableArray();
        self.selectedSubCategory = ko.observableArray();
        self.loadSubCategories = function(event,data){
            if(data.option == 'value'){
                self.selectedSubCategory([]);
                var scategories = [];
                if(data.value[0] == 'fr'){
                    scategories.push({label:'Apple',value:'ap'});
                    scategories.push({label:'Orange',value:'or'});
                }
                else if(data.value[0] == 'vg'){
                    scategories.push({label:'Tomato',value:'to'});
                    scategories.push({label:'Potato',value:'po'});
                }
                else{
                    scategories.push({label:'Pepsi',value:'pe'});
                    scategories.push({label:'Fanta',value:'fa'});
                }
                self.subCategories(scategories);
            }
        }
        self.buyingPrice = ko.observable();
        self.sellingPrice = ko.observable();    
    }
    
    return productsContentViewModel;
});
