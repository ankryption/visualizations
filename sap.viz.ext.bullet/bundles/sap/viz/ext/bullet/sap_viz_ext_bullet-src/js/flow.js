/*<<dependency*/
define("sap_viz_ext_bullet-src/js/flow", [ "sap_viz_ext_bullet-src/js/module" ], function(moduleFunc) {
/*dependency>>*/
    var flowRegisterFunc = function(){
		var flow = sap.viz.extapi.Flow.createFlow({
			id : 'sap.viz.ext.bullet',
			name : 'Bullet Chart',
			dataModel : 'sap.viz.api.data.CrosstableDataset',
			type : 'BorderSVGFlow'
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
			id : 'sap.viz.ext.module.bulletModule',
			name : 'bullet Module',
		});
		element.implement('sap.viz.elements.common.BaseGraphic', moduleFunc);
		/*Feeds Definition*/
		//ds1: metric 
		var ds1 = {
		    "id": "sap.viz.ext.module.bulletModule.DS1",
		    "name": "Row Trellis",
		    "type": "Dimension",
		    "min": 0,
		    "max": 1,
		    "aaIndex": 1,
		    "minStackedDims": 1,
		    "maxStackedDims": Infinity
		};
		//ms1: total
		var ms1 = {
		    "id": "sap.viz.ext.module.bulletModule.MS1",
		    "name": "Total",
		    "type": "Measure",
		    "min": 0,
		    "max": 1,
		    "mgIndex": 1
		};
		//ms2: actual
		var ms2 = {
		    "id": "sap.viz.ext.module.bulletModule.MS2",
		    "name": "Actual",
		    "type": "Measure",
		    "min": 1,
		    "max": 1,
		    "mgIndex": 2
		};
		//ms3: target or planned
		var ms3 = {
		    "id": "sap.viz.ext.module.bulletModule.MS3",
		    "name": "Target",
		    "type": "Measure",
		    "min": 0,
		    "max": 1,
		    "mgIndex": 3
		};
		element.addFeed(ds1);
		element.addFeed(ms1);
		element.addFeed(ms2);
		element.addFeed(ms3);
		flow.addElement({
			'element':element,
			'propertyCategory' : 'bullet Module'
		});
		sap.viz.extapi.Flow.registerFlow(flow);
    };
    flowRegisterFunc.id = 'sap.viz.ext.bullet';
    return {
        id : flowRegisterFunc.id,
        init : flowRegisterFunc
    };
});