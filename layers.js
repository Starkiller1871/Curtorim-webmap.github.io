ol.proj.proj4.register(proj4);
ol.proj.get("EPSG:32643").setExtent([393071.111887, 1691483.347828, 394166.369619, 1692035.379400]);
var wms_layers = [];

var lyr_curtorim_0 = new ol.layer.Image({
                            opacity: 1,
                            title: "curtorim",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/curtorim_0.png",
    attributions: ' ',
                                projection: 'EPSG:32643',
                                alwaysInRange: true,
                                imageExtent: [393138.473609, 1691083.599340, 394226.836478, 1692292.841328]
                            })
                        });
var format_FieldsCurtorimHandiKuris_1 = new ol.format.GeoJSON();
var features_FieldsCurtorimHandiKuris_1 = format_FieldsCurtorimHandiKuris_1.readFeatures(json_FieldsCurtorimHandiKuris_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32643'});
var jsonSource_FieldsCurtorimHandiKuris_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_FieldsCurtorimHandiKuris_1.addFeatures(features_FieldsCurtorimHandiKuris_1);
var lyr_FieldsCurtorimHandiKuris_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_FieldsCurtorimHandiKuris_1, 
                style: style_FieldsCurtorimHandiKuris_1,
                interactive: true,
                title: '<img src="styles/legend/FieldsCurtorimHandiKuris_1.png" /> Fields Curtorim Handi Kuris'
            });
var format_Bund_Curtorim_2 = new ol.format.GeoJSON();
var features_Bund_Curtorim_2 = format_Bund_Curtorim_2.readFeatures(json_Bund_Curtorim_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32643'});
var jsonSource_Bund_Curtorim_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Bund_Curtorim_2.addFeatures(features_Bund_Curtorim_2);
var lyr_Bund_Curtorim_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Bund_Curtorim_2, 
                style: style_Bund_Curtorim_2,
                interactive: true,
                title: '<img src="styles/legend/Bund_Curtorim_2.png" /> Bund_Curtorim'
            });
var format_Curtorim_Handi_Roads_3 = new ol.format.GeoJSON();
var features_Curtorim_Handi_Roads_3 = format_Curtorim_Handi_Roads_3.readFeatures(json_Curtorim_Handi_Roads_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32643'});
var jsonSource_Curtorim_Handi_Roads_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Curtorim_Handi_Roads_3.addFeatures(features_Curtorim_Handi_Roads_3);
var lyr_Curtorim_Handi_Roads_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Curtorim_Handi_Roads_3, 
                style: style_Curtorim_Handi_Roads_3,
                interactive: true,
                title: '<img src="styles/legend/Curtorim_Handi_Roads_3.png" /> Curtorim_Handi_Roads'
            });

lyr_curtorim_0.setVisible(true);lyr_FieldsCurtorimHandiKuris_1.setVisible(true);lyr_Bund_Curtorim_2.setVisible(true);lyr_Curtorim_Handi_Roads_3.setVisible(true);
var layersList = [lyr_curtorim_0,lyr_FieldsCurtorimHandiKuris_1,lyr_Bund_Curtorim_2,lyr_Curtorim_Handi_Roads_3];
lyr_FieldsCurtorimHandiKuris_1.set('fieldAliases', {'fid': 'fid', 'S_No': 'S_No', 'Survey_No': 'Survey_No', 'Sub_Division_No': 'Sub_Division_No', 'Name_of_the_Occupant': 'Name_of_the_Occupant', 'Paid_or_NotPaid': 'Paid_or_NotPaid', 'Yield_Ha': 'Yield_Ha', 'Area_ha': 'Area_ha', 'Harvest_kg': 'Harvest_kg', 'Area': 'Area', 'Amount_Paid': 'Amount_Paid', 'Drone_Sprayed': 'Drone_Sprayed', 'Yield_Kg_/_Ha': 'Yield_Kg_/_Ha', 'Tractors_Used': 'Tractors_Used', });
lyr_Bund_Curtorim_2.set('fieldAliases', {'fid': 'fid', 'length_metre': 'length_metre', });
lyr_Curtorim_Handi_Roads_3.set('fieldAliases', {'fid': 'fid', });
lyr_FieldsCurtorimHandiKuris_1.set('fieldImages', {'fid': 'TextEdit', 'S_No': 'TextEdit', 'Survey_No': 'TextEdit', 'Sub_Division_No': 'TextEdit', 'Name_of_the_Occupant': 'TextEdit', 'Paid_or_NotPaid': 'CheckBox', 'Yield_Ha': 'TextEdit', 'Area_ha': 'TextEdit', 'Harvest_kg': 'TextEdit', 'Area': 'TextEdit', 'Amount_Paid': 'TextEdit', 'Drone_Sprayed': 'CheckBox', 'Yield_Kg_/_Ha': 'TextEdit', 'Tractors_Used': 'CheckBox', });
lyr_Bund_Curtorim_2.set('fieldImages', {'fid': 'TextEdit', 'length_metre': 'Range', });
lyr_Curtorim_Handi_Roads_3.set('fieldImages', {'fid': 'TextEdit', });
lyr_FieldsCurtorimHandiKuris_1.set('fieldLabels', {'fid': 'no label', 'S_No': 'inline label', 'Survey_No': 'inline label', 'Sub_Division_No': 'inline label', 'Name_of_the_Occupant': 'no label', 'Paid_or_NotPaid': 'no label', 'Yield_Ha': 'no label', 'Area_ha': 'no label', 'Harvest_kg': 'no label', 'Area': 'no label', 'Amount_Paid': 'no label', 'Drone_Sprayed': 'no label', 'Yield_Kg_/_Ha': 'no label', 'Tractors_Used': 'no label', });
lyr_Bund_Curtorim_2.set('fieldLabels', {'fid': 'no label', 'length_metre': 'no label', });
lyr_Curtorim_Handi_Roads_3.set('fieldLabels', {'fid': 'no label', });
lyr_Curtorim_Handi_Roads_3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});