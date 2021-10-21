ol.proj.proj4.register(proj4);
ol.proj.get("EPSG:32620").setExtent([594070.088342, 1757933.502626, 748714.870232, 1837310.353234]);
var wms_layers = [];


        var lyr_GoogleMaps_0 = new ol.layer.Tile({
            'title': 'Google Maps',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'http://mt1.google.com/vt/lyrs=m&x={x}&y={y}&z={z}'
            })
        });
var format_Limite_50pas_globale_1 = new ol.format.GeoJSON();
var features_Limite_50pas_globale_1 = format_Limite_50pas_globale_1.readFeatures(json_Limite_50pas_globale_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32620'});
var jsonSource_Limite_50pas_globale_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Limite_50pas_globale_1.addFeatures(features_Limite_50pas_globale_1);
var lyr_Limite_50pas_globale_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Limite_50pas_globale_1, 
                style: style_Limite_50pas_globale_1,
                interactive: true,
                title: '<img src="styles/legend/Limite_50pas_globale_1.png" /> Limite_50pas_globale'
            });

lyr_GoogleMaps_0.setVisible(true);lyr_Limite_50pas_globale_1.setVisible(true);
var layersList = [lyr_GoogleMaps_0,lyr_Limite_50pas_globale_1];
lyr_Limite_50pas_globale_1.set('fieldAliases', {'NO_PARCELLE': 'NO_PARCELLE', 'NOM_SITE': 'NOM_SITE', 'TYPE_DE_ZONE_01': 'TYPE_DE_ZONE_01', 'CODE_ZONE': 'CODE_ZONE', 'CODE_SECPAR': 'CODE_SECPAR', 'GESTION': 'GESTION', 'TRF_CELRL': 'TRF_CELRL', 'DATE_ARRETE': 'DATE_ARRETE', 'NOM_COMMUNE': 'NOM_COMMUNE', 'SURF_HA': 'SURF_HA', 'HOTLINK': 'HOTLINK', 'FICHE': 'FICHE', 'OBSERVATIONS': 'OBSERVATIONS', 'Superficie_m2': 'Superficie_m2', });
lyr_Limite_50pas_globale_1.set('fieldImages', {'NO_PARCELLE': 'TextEdit', 'NOM_SITE': 'TextEdit', 'TYPE_DE_ZONE_01': 'TextEdit', 'CODE_ZONE': 'TextEdit', 'CODE_SECPAR': 'TextEdit', 'GESTION': 'TextEdit', 'TRF_CELRL': 'TextEdit', 'DATE_ARRETE': 'DateTime', 'NOM_COMMUNE': 'TextEdit', 'SURF_HA': 'TextEdit', 'HOTLINK': 'TextEdit', 'FICHE': 'TextEdit', 'OBSERVATIONS': 'TextEdit', 'Superficie_m2': 'TextEdit', });
lyr_Limite_50pas_globale_1.set('fieldLabels', {'NO_PARCELLE': 'no label', 'NOM_SITE': 'no label', 'TYPE_DE_ZONE_01': 'no label', 'CODE_ZONE': 'no label', 'CODE_SECPAR': 'no label', 'GESTION': 'no label', 'TRF_CELRL': 'no label', 'DATE_ARRETE': 'no label', 'NOM_COMMUNE': 'no label', 'SURF_HA': 'no label', 'HOTLINK': 'no label', 'FICHE': 'no label', 'OBSERVATIONS': 'no label', 'Superficie_m2': 'no label', });
lyr_Limite_50pas_globale_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});