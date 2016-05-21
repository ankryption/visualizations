/*<<dependency*/
define("sap_viz_ext_lossofsales-src/js/flow", [ "sap_viz_ext_lossofsales-src/js/module" ], function(moduleFunc) {
/*dependency>>*/
    var flowRegisterFunc = function(){
		var flow = sap.viz.extapi.Flow.createFlow({
			id : 'sap.viz.ext.lossofsales',
			name : 'Loss of Sales',
			dataModel : 'sap.viz.api.data.CrosstableDataset',
			type : 'DIV'
		});
		var titleElement  = sap.viz.extapi.Flow.createElement({
			id : 'sap.viz.chart.elements.Title',
			name : 'Title',
		});
		flow.addElement({
			'element':titleElement,
			'propertyCategory':'title',
			'place':'top'
		});
		var element  = sap.viz.extapi.Flow.createElement({
			id : 'sap.viz.ext.module.LossofSalesModule',
			name : 'Loss of Sales Module',
		});
		element.implement('sap.viz.elements.common.BaseGraphic', moduleFunc);
		/*Feeds Definition*/
		//ds1: item
		var ds1 = {
		    "id": "sap.viz.ext.module.LossofSalesModule.DS1",
		    "name": "X Axis",
		    "type": "Dimension",
		    "min": 1,
		    "max": 2,
		    "aaIndex": 1,
		    "minStackedDims": 1,
		    "maxStackedDims": Infinity
		};
	    var ds1 = {
		    "id": "sap.viz.ext.module.LossofSalesModule.DS1",
		    "name": "Products",
		    "type": "Dimension",
		    "min": 1,
		    "max": 2,
		    "aaIndex": 1,
		    "minStackedDims": 1,
		    "maxStackedDims": 1
		};
		var ms1 = {
		    "id": "sap.viz.ext.module.LossofSalesModule.MS1",
		    "name": "Actual Stock",
		    "type": "Measure",
		    "min": 1,
		    "max": 1,
		    "mgIndex": 1
		};
		var ms2 = {
		    "id": "sap.viz.ext.module.LossofSalesModule.MS2",
		    "name": "Forecasted Stock",
		    "type": "Measure",
		    "min": 1,
		    "max": 1,
		    "mgIndex": 2
		};
		var ms3 = {
		    "id": "sap.viz.ext.module.LossofSalesModule.MS3",
		    "name": "Actual Sale",
		    "type": "Measure",
		    "min": 1,
		    "max": 1,
		    "mgIndex": 3
		};
		var ms4 = {
		    "id": "sap.viz.ext.module.LossofSalesModule.MS4",
		    "name": "Forecasted Sale",
		    "type": "Measure",
		    "min": 1,
		    "max": 1,
		    "mgIndex": 4
		};
		element.addFeed(ds1);
		element.addFeed(ms1);
		element.addFeed(ms2);
		element.addFeed(ms3);
		element.addFeed(ms4);
		flow.addElement({
			'element':element,
			'propertyCategory' : 'Loss of Sales Module'
		});
		sap.viz.extapi.Flow.registerFlow(flow);
    };
    flowRegisterFunc.id = 'sap.viz.ext.lossofsales';
    return {
        id : flowRegisterFunc.id,
        init : flowRegisterFunc
    };
});