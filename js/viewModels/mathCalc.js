/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

/**
 * matchCalc module
 */
define(['ojs/ojcore', 'knockout','ojs/ojinputtext','ojs/ojmodule'
], function (oj, ko) {
    /**
     * The view model for the main content view template
     */
    function mathCalcContentViewModel() {
        var self = this;
        self.first=ko.observable();
        self.second=ko.observable();
        self.result=ko.observable();
        self.addNumbers=function(){
        var fn=Number(self.first());
        var sn=Number(self.second());
        self.result(fn+sn);    
        };
    }
    
    return mathCalcContentViewModel;
});
