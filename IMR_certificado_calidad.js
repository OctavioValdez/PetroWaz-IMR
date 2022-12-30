/**
 * @NApiVersion 2.1
 * @NScriptType SuiteLet
 */

define(['N/record', 'N/render', 'N/runtime', 'N/file'], function(require, factory) {
    
    /**
     * @param {record} record
     * @param {render} render
     * @param {runtime} runtime
     * @param {file} file
     */
    
    function onRequest(scriptContext){
        var response = scriptContext.response;
        var info = scriptContext.request;
        var rec_type = info.parameters.record_type;
        var rec_id = info.parameters.record_id;

        var objReload = record.load({
            type: rec_type,
            id: rec_id,
            isDynamic: true 
        })

        var html = '<pdf>' + 
                    '<body>'  + 
                        '<h1>' + 'HOLA' + '</h1>' + 
                    '</body>' +
                    '</pdf>';
        
        scriptContext.response.write(html);
        context.response.setHeader({
            name: 'Certificado Calidad',
            value: 'Demo'
        })

        response.renderPdf(html);
    }

    return{
        onRequest : onRequest
    }
});