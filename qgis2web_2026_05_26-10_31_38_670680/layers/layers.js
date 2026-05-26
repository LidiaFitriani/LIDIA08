var wms_layers = [];


        var lyr_2gisMap_0 = new ol.layer.Tile({
            'title': '2gis Map',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://tile2.maps.2gis.com/tiles?x={x}&y={y}&z={z}&v=1.1'
            })
        });

        var lyr_GoogleSatellite_1 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: '<a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });

        var lyr_GoogleRoad_2 = new ol.layer.Tile({
            'title': 'Google Road',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: '<a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=m&x={x}&y={y}&z={z}'
            })
        });

        var lyr_GoogleLabels_3 = new ol.layer.Tile({
            'title': 'Google Labels',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: '<a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=h&x={x}&y={y}&z={z}'
            })
        });

        var lyr_GoogleHybrid_4 = new ol.layer.Tile({
            'title': 'Google Hybrid',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: '<a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=y&x={x}&y={y}&z={z}'
            })
        });
var format_ADMINISTRASIKECAMATAN_AR_50K_5 = new ol.format.GeoJSON();
var features_ADMINISTRASIKECAMATAN_AR_50K_5 = format_ADMINISTRASIKECAMATAN_AR_50K_5.readFeatures(json_ADMINISTRASIKECAMATAN_AR_50K_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ADMINISTRASIKECAMATAN_AR_50K_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ADMINISTRASIKECAMATAN_AR_50K_5.addFeatures(features_ADMINISTRASIKECAMATAN_AR_50K_5);
var lyr_ADMINISTRASIKECAMATAN_AR_50K_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ADMINISTRASIKECAMATAN_AR_50K_5, 
                style: style_ADMINISTRASIKECAMATAN_AR_50K_5,
                popuplayertitle: 'ADMINISTRASIKECAMATAN_AR_50K',
                interactive: true,
                title: '<img src="styles/legend/ADMINISTRASIKECAMATAN_AR_50K_5.png" /> ADMINISTRASIKECAMATAN_AR_50K'
            });
var format_kopersicambai_6 = new ol.format.GeoJSON();
var features_kopersicambai_6 = format_kopersicambai_6.readFeatures(json_kopersicambai_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_kopersicambai_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_kopersicambai_6.addFeatures(features_kopersicambai_6);
var lyr_kopersicambai_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_kopersicambai_6, 
                style: style_kopersicambai_6,
                popuplayertitle: 'kopersi cambai',
                interactive: true,
                title: '<img src="styles/legend/kopersicambai_6.png" /> kopersi cambai'
            });
var format_koperasimerahputihdesapangkul_7 = new ol.format.GeoJSON();
var features_koperasimerahputihdesapangkul_7 = format_koperasimerahputihdesapangkul_7.readFeatures(json_koperasimerahputihdesapangkul_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_koperasimerahputihdesapangkul_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_koperasimerahputihdesapangkul_7.addFeatures(features_koperasimerahputihdesapangkul_7);
var lyr_koperasimerahputihdesapangkul_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_koperasimerahputihdesapangkul_7, 
                style: style_koperasimerahputihdesapangkul_7,
                popuplayertitle: 'koperasi merah putih desa pangkul',
                interactive: true,
                title: '<img src="styles/legend/koperasimerahputihdesapangkul_7.png" /> koperasi merah putih desa pangkul'
            });
var format_koperasidesapangkul_8 = new ol.format.GeoJSON();
var features_koperasidesapangkul_8 = format_koperasidesapangkul_8.readFeatures(json_koperasidesapangkul_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_koperasidesapangkul_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_koperasidesapangkul_8.addFeatures(features_koperasidesapangkul_8);
var lyr_koperasidesapangkul_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_koperasidesapangkul_8, 
                style: style_koperasidesapangkul_8,
                popuplayertitle: 'koperasi desa pangkul',
                interactive: true,
                title: '<img src="styles/legend/koperasidesapangkul_8.png" /> koperasi desa pangkul'
            });
var format_kopersimerahputihsindur_9 = new ol.format.GeoJSON();
var features_kopersimerahputihsindur_9 = format_kopersimerahputihsindur_9.readFeatures(json_kopersimerahputihsindur_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_kopersimerahputihsindur_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_kopersimerahputihsindur_9.addFeatures(features_kopersimerahputihsindur_9);
var lyr_kopersimerahputihsindur_9 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_kopersimerahputihsindur_9, 
                style: style_kopersimerahputihsindur_9,
                popuplayertitle: 'kopersi merah putih sindur',
                interactive: true,
                title: '<img src="styles/legend/kopersimerahputihsindur_9.png" /> kopersi merah putih sindur'
            });
var format_koperasimerahputihsungaimedang_10 = new ol.format.GeoJSON();
var features_koperasimerahputihsungaimedang_10 = format_koperasimerahputihsungaimedang_10.readFeatures(json_koperasimerahputihsungaimedang_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_koperasimerahputihsungaimedang_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_koperasimerahputihsungaimedang_10.addFeatures(features_koperasimerahputihsungaimedang_10);
cluster_koperasimerahputihsungaimedang_10 = new ol.source.Cluster({
  distance: 30,
  source: jsonSource_koperasimerahputihsungaimedang_10
});
var lyr_koperasimerahputihsungaimedang_10 = new ol.layer.Vector({
                declutter: false,
                source:cluster_koperasimerahputihsungaimedang_10, 
                style: style_koperasimerahputihsungaimedang_10,
                popuplayertitle: 'koperasi merah putih sungai medang',
                interactive: true,
                title: '<img src="styles/legend/koperasimerahputihsungaimedang_10.png" /> koperasi merah putih sungai medang'
            });

lyr_2gisMap_0.setVisible(true);lyr_GoogleSatellite_1.setVisible(true);lyr_GoogleRoad_2.setVisible(true);lyr_GoogleLabels_3.setVisible(true);lyr_GoogleHybrid_4.setVisible(true);lyr_ADMINISTRASIKECAMATAN_AR_50K_5.setVisible(true);lyr_kopersicambai_6.setVisible(true);lyr_koperasimerahputihdesapangkul_7.setVisible(true);lyr_koperasidesapangkul_8.setVisible(true);lyr_kopersimerahputihsindur_9.setVisible(true);lyr_koperasimerahputihsungaimedang_10.setVisible(true);
var layersList = [lyr_2gisMap_0,lyr_GoogleSatellite_1,lyr_GoogleRoad_2,lyr_GoogleLabels_3,lyr_GoogleHybrid_4,lyr_ADMINISTRASIKECAMATAN_AR_50K_5,lyr_kopersicambai_6,lyr_koperasimerahputihdesapangkul_7,lyr_koperasidesapangkul_8,lyr_kopersimerahputihsindur_9,lyr_koperasimerahputihsungaimedang_10];
lyr_ADMINISTRASIKECAMATAN_AR_50K_5.set('fieldAliases', {'KDPPUM': 'KDPPUM', 'NAMOBJ': 'NAMOBJ', 'REMARK': 'REMARK', 'KDPBPS': 'KDPBPS', 'FCODE': 'FCODE', 'LUASWH': 'LUASWH', 'UUPP': 'UUPP', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', 'KDEBPS': 'KDEBPS', 'KDEPUM': 'KDEPUM', 'KDCBPS': 'KDCBPS', 'KDCPUM': 'KDCPUM', 'KDBBPS': 'KDBBPS', 'KDBPUM': 'KDBPUM', 'WADMKD': 'WADMKD', 'WIADKD': 'WIADKD', 'WADMKC': 'WADMKC', 'WIADKC': 'WIADKC', 'WADMKK': 'WADMKK', 'WIADKK': 'WIADKK', 'WADMPR': 'WADMPR', 'WIADPR': 'WIADPR', 'TIPADM': 'TIPADM', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', });
lyr_kopersicambai_6.set('fieldAliases', {'id': 'id', 'nama': 'nama', 'jenis': 'jenis', 'kelurahan': 'kelurahan', });
lyr_koperasimerahputihdesapangkul_7.set('fieldAliases', {'id': 'id', 'nama': 'nama', 'jenis': 'jenis', 'kelurahan': 'kelurahan', });
lyr_koperasidesapangkul_8.set('fieldAliases', {'id': 'id', 'nama': 'nama', 'jenis': 'jenis', 'kelurahan': 'kelurahan', });
lyr_kopersimerahputihsindur_9.set('fieldAliases', {'id': 'id', 'nama': 'nama', 'jenis': 'jenis', 'kelurahan': 'kelurahan', });
lyr_koperasimerahputihsungaimedang_10.set('fieldAliases', {'id': 'id', 'nama': 'nama', 'jenis': 'jenis', 'kelurahan': 'kelurahan', });
lyr_ADMINISTRASIKECAMATAN_AR_50K_5.set('fieldImages', {'KDPPUM': 'TextEdit', 'NAMOBJ': 'TextEdit', 'REMARK': 'TextEdit', 'KDPBPS': 'TextEdit', 'FCODE': 'TextEdit', 'LUASWH': 'TextEdit', 'UUPP': 'TextEdit', 'SRS_ID': 'TextEdit', 'LCODE': 'TextEdit', 'METADATA': 'TextEdit', 'KDEBPS': 'TextEdit', 'KDEPUM': 'TextEdit', 'KDCBPS': 'TextEdit', 'KDCPUM': 'TextEdit', 'KDBBPS': 'TextEdit', 'KDBPUM': 'TextEdit', 'WADMKD': 'TextEdit', 'WIADKD': 'TextEdit', 'WADMKC': 'TextEdit', 'WIADKC': 'TextEdit', 'WADMKK': 'TextEdit', 'WIADKK': 'TextEdit', 'WADMPR': 'TextEdit', 'WIADPR': 'TextEdit', 'TIPADM': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_kopersicambai_6.set('fieldImages', {'id': '', 'nama': '', 'jenis': '', 'kelurahan': '', });
lyr_koperasimerahputihdesapangkul_7.set('fieldImages', {'id': '', 'nama': '', 'jenis': '', 'kelurahan': '', });
lyr_koperasidesapangkul_8.set('fieldImages', {'id': '', 'nama': '', 'jenis': '', 'kelurahan': '', });
lyr_kopersimerahputihsindur_9.set('fieldImages', {'id': '', 'nama': '', 'jenis': '', 'kelurahan': '', });
lyr_koperasimerahputihsungaimedang_10.set('fieldImages', {'id': '', 'nama': '', 'jenis': '', 'kelurahan': '', });
lyr_ADMINISTRASIKECAMATAN_AR_50K_5.set('fieldLabels', {'KDPPUM': 'no label', 'NAMOBJ': 'no label', 'REMARK': 'no label', 'KDPBPS': 'no label', 'FCODE': 'no label', 'LUASWH': 'no label', 'UUPP': 'no label', 'SRS_ID': 'no label', 'LCODE': 'no label', 'METADATA': 'no label', 'KDEBPS': 'no label', 'KDEPUM': 'no label', 'KDCBPS': 'no label', 'KDCPUM': 'no label', 'KDBBPS': 'no label', 'KDBPUM': 'no label', 'WADMKD': 'no label', 'WIADKD': 'no label', 'WADMKC': 'no label', 'WIADKC': 'no label', 'WADMKK': 'no label', 'WIADKK': 'no label', 'WADMPR': 'no label', 'WIADPR': 'no label', 'TIPADM': 'no label', 'Shape_Leng': 'no label', 'Shape_Area': 'no label', });
lyr_kopersicambai_6.set('fieldLabels', {'id': 'no label', 'nama': 'no label', 'jenis': 'no label', 'kelurahan': 'no label', });
lyr_koperasimerahputihdesapangkul_7.set('fieldLabels', {'id': 'no label', 'nama': 'no label', 'jenis': 'no label', 'kelurahan': 'no label', });
lyr_koperasidesapangkul_8.set('fieldLabels', {'id': 'no label', 'nama': 'no label', 'jenis': 'no label', 'kelurahan': 'no label', });
lyr_kopersimerahputihsindur_9.set('fieldLabels', {'id': 'no label', 'nama': 'no label', 'jenis': 'no label', 'kelurahan': 'no label', });
lyr_koperasimerahputihsungaimedang_10.set('fieldLabels', {'id': 'no label', 'nama': 'no label', 'jenis': 'no label', 'kelurahan': 'no label', });
lyr_koperasimerahputihsungaimedang_10.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});