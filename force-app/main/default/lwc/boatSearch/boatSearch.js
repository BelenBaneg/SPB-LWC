
import { LightningElement } from 'lwc';
import { NavigationMixin } from 'lightning/navigation';

export default class BoatSearch extends NavigationMixin(LightningElement) {
    isLoading = false;
    
    // Handles loading event
    handleLoading() {
        this.isLoading = true;
    }
    
    // Handles done loading event
    handleDoneLoading() {
        this.isLoading = false;
    }
    
    // Handles search boat event
    // This custom event comes from the form
    searchBoats(event) {
        let boatTypeId = event.detail.boatTypeId;
        this.template.querySelector('c-boat-search-results').searchBoats(boatTypeId);
        this.handleDoneLoading();
    }
    
    createNewBoat() {
        this[NavigationMixin.Navigate]({
            type: 'standard__objectPage',
            attributes: {
                objectApiName: 'Boat__c',
                actionName: 'new'
            }
        });        
    }
}

    //e encarga de buscar los barcos correspondientes al tipo de barco proporcionado
    
        //obtiene el id que trae el evento
      
        // busca los barcos correspondientes al tipo de barco proporcionado.
       
        //notifica al usuario que la búsqueda ha finalizado.

    //se encarga de navegar a la página de creación de un nuevo objeto "Boat__c" en Salesforce
   //para navegar a la página de creación de un nuevo objeto "Boat__c"

          //especifica que se está navegando a una página de objeto estándar
      
            //se está navegando a la página de creación de un nuevo objeto
           