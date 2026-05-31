var wms_layers = [];


        var lyr_SATELLITEVIEW_0 = new ol.layer.Tile({
            'title': 'SATELLITE VIEW',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: '&nbsp;&middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=y&x={x}&y={y}&z={z}'
            })
        });
var lyr_ELEVATION_1 = new ol.layer.Image({
        opacity: 1,
        
    title: 'ELEVATION<br />\
    <img src="styles/legend/ELEVATION_1_0.png" /> <= 137<br />\
    <img src="styles/legend/ELEVATION_1_1.png" /> 137 - 276<br />\
    <img src="styles/legend/ELEVATION_1_2.png" /> 276 - 415<br />\
    <img src="styles/legend/ELEVATION_1_3.png" /> 415 - 554<br />\
    <img src="styles/legend/ELEVATION_1_4.png" /> > 554<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/ELEVATION_1.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [9553361.202923, 2483409.950920, 9842730.035056, 2825002.297609]
        })
    });
var lyr_RUGGEDNESSNo_2 = new ol.layer.Image({
        opacity: 1,
        
    title: 'RUGGEDNESS No.<br />\
    <img src="styles/legend/RUGGEDNESSNo_2_0.png" /> <= 54184.2403<br />\
    <img src="styles/legend/RUGGEDNESSNo_2_1.png" /> 54184.2403 - 108366.8365<br />\
    <img src="styles/legend/RUGGEDNESSNo_2_2.png" /> 108366.8365 - 162549.4326<br />\
    <img src="styles/legend/RUGGEDNESSNo_2_3.png" /> 162549.4326 - 216732.0288<br />\
    <img src="styles/legend/RUGGEDNESSNo_2_4.png" /> > 216732.0288<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/RUGGEDNESSNo_2.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [9553361.202923, 2483409.950920, 9842738.350284, 2824674.610827]
        })
    });
var lyr_RELATIVERELIEF_3 = new ol.layer.Image({
        opacity: 1,
        
    title: 'RELATIVE RELIEF<br />\
    <img src="styles/legend/RELATIVERELIEF_3_0.png" /> <= 108.9833<br />\
    <img src="styles/legend/RELATIVERELIEF_3_1.png" /> 108.9833 - 215.9007<br />\
    <img src="styles/legend/RELATIVERELIEF_3_2.png" /> 215.9007 - 322.8182<br />\
    <img src="styles/legend/RELATIVERELIEF_3_3.png" /> 322.8182 - 429.7357<br />\
    <img src="styles/legend/RELATIVERELIEF_3_4.png" /> > 429.7357<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/RELATIVERELIEF_3.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [9553361.202923, 2483409.950920, 9842738.350284, 2824674.610827]
        })
    });
var lyr_SLOPE_4 = new ol.layer.Image({
        opacity: 1,
        
    title: 'SLOPE<br />\
    <img src="styles/legend/SLOPE_4_0.png" /> <= 0.6785<br />\
    <img src="styles/legend/SLOPE_4_1.png" /> 0.6785 - 1.3319<br />\
    <img src="styles/legend/SLOPE_4_2.png" /> 1.3319 - 1.9852<br />\
    <img src="styles/legend/SLOPE_4_3.png" /> 1.9852 - 2.6386<br />\
    <img src="styles/legend/SLOPE_4_4.png" /> > 2.6386<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/SLOPE_4.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [9553361.202923, 2483409.950920, 9842738.350284, 2824674.610827]
        })
    });
var lyr_DRAINAGEDENSITY_5 = new ol.layer.Image({
        opacity: 1,
        
    title: 'DRAINAGE DENSITY<br />\
    <img src="styles/legend/DRAINAGEDENSITY_5_0.png" /> <= 296111.2284<br />\
    <img src="styles/legend/DRAINAGEDENSITY_5_1.png" /> 296111.2284 - 592187.3900<br />\
    <img src="styles/legend/DRAINAGEDENSITY_5_2.png" /> 592187.3900 - 888263.5517<br />\
    <img src="styles/legend/DRAINAGEDENSITY_5_3.png" /> 888263.5517 - 1184339.7133<br />\
    <img src="styles/legend/DRAINAGEDENSITY_5_4.png" /> > 1184339.7133<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/DRAINAGEDENSITY_5.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [9553361.202923, 2483409.950920, 9842738.350284, 2824674.610827]
        })
    });
var format_CONTOUR_6 = new ol.format.GeoJSON();
var features_CONTOUR_6 = format_CONTOUR_6.readFeatures(json_CONTOUR_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CONTOUR_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CONTOUR_6.addFeatures(features_CONTOUR_6);
var lyr_CONTOUR_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CONTOUR_6, 
                style: style_CONTOUR_6,
                popuplayertitle: 'CONTOUR',
                interactive: false,
    title: 'CONTOUR<br />\
    <img src="styles/legend/CONTOUR_6_0.png" /> 0<br />\
    <img src="styles/legend/CONTOUR_6_1.png" /> 100<br />\
    <img src="styles/legend/CONTOUR_6_2.png" /> 200<br />\
    <img src="styles/legend/CONTOUR_6_3.png" /> 300<br />\
    <img src="styles/legend/CONTOUR_6_4.png" /> 400<br />\
    <img src="styles/legend/CONTOUR_6_5.png" /> 500<br />\
    <img src="styles/legend/CONTOUR_6_6.png" /> 600<br />' });
var format_RARHBANGLA_7 = new ol.format.GeoJSON();
var features_RARHBANGLA_7 = format_RARHBANGLA_7.readFeatures(json_RARHBANGLA_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_RARHBANGLA_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RARHBANGLA_7.addFeatures(features_RARHBANGLA_7);
var lyr_RARHBANGLA_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_RARHBANGLA_7, 
                style: style_RARHBANGLA_7,
                popuplayertitle: 'RARH BANGLA',
                interactive: false,
                title: '<img src="styles/legend/RARHBANGLA_7.png" /> RARH BANGLA'
            });

lyr_SATELLITEVIEW_0.setVisible(true);lyr_ELEVATION_1.setVisible(true);lyr_RUGGEDNESSNo_2.setVisible(true);lyr_RELATIVERELIEF_3.setVisible(true);lyr_SLOPE_4.setVisible(true);lyr_DRAINAGEDENSITY_5.setVisible(true);lyr_CONTOUR_6.setVisible(true);lyr_RARHBANGLA_7.setVisible(true);
var layersList = [lyr_SATELLITEVIEW_0,lyr_ELEVATION_1,lyr_RUGGEDNESSNo_2,lyr_RELATIVERELIEF_3,lyr_SLOPE_4,lyr_DRAINAGEDENSITY_5,lyr_CONTOUR_6,lyr_RARHBANGLA_7];
lyr_CONTOUR_6.set('fieldAliases', {'ID': 'ID', 'CONTOUR': 'CONTOUR', });
lyr_RARHBANGLA_7.set('fieldAliases', {'DIST_NAME': 'DIST_NAME', });
lyr_CONTOUR_6.set('fieldImages', {'ID': 'TextEdit', 'CONTOUR': 'TextEdit', });
lyr_RARHBANGLA_7.set('fieldImages', {'DIST_NAME': 'TextEdit', });
lyr_CONTOUR_6.set('fieldLabels', {'ID': 'no label', 'CONTOUR': 'no label', });
lyr_RARHBANGLA_7.set('fieldLabels', {'DIST_NAME': 'inline label - always visible', });
lyr_RARHBANGLA_7.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});