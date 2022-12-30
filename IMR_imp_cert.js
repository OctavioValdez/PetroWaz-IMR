/**
 * @NApiVersion 2.x
 * @NScriptType UserEventScript
 */


define(['N/record', 'N/url'], 
/**
 * 
 * @param {record} record 
 * @param {url} url 
 */

(record, url) => {
    /**
     * Defines the function definition that is executed before record is loaded.
     * @param {Object} scriptContext
     * @param {Record} scriptContext.newRecord - New record
     * @param {string} scriptContext.type - Trigger type; use values from the context.UserEventType enum
     * @param {Form} scriptContext.form - Current form
     * @param {ServletRequest} scriptContext.request - HTTP request information sent from the browser for a client action only.
     * @since 2015.2
     */

    const beforeLoad = (scriptContext) => {
        log.error('Entro al script UE beforeload: ' + scriptContext.type);

        try{
            if(scriptContext.type == 'view'){
                let record_type = scriptContext.newRecord.type;
                let record_id = scriptContext.newRecord.id;
                let status_ref = scriptContext.newRecord.getValue({fieldId: 'statusRef'}) || '';
                
                log.error('ERROR', 'recordType: ' + record_type + ', recordId: ' + record_id + ', subsidiaria: ' + subsidiary);
                log.error('ERROR', 'statusRef: ' + status_ref);
    
                let data = {};
                data.record_type = record_type;
                data.record_id = record_id;
                data.status = status_ref;
    
                let suitelet_url = url.resolveScript({
                    deploymentId: 'pw_deploy_cert',
                    scriptId: 'pw_cert',
                    params: data,
                    returnExternalUrl: false
                })
    
                scriptContext.form.addButton({
                    id: 'pw_btn_imp_cert',
                    label: 'Imp. Certificado v2',
                    functionName: "window.open('" +  suitelet_url + "', '_blank');"
                })
            }
        }catch(e){
            log.error('ERROR: ', e.message);
        }

    }

    const beforeSubmit = (scriptContext) => {

    }

    const afterSubmit = (scriptContext) => {

    }

    return (beforeLoad, beforeSubmit, afterSubmit)
    
});