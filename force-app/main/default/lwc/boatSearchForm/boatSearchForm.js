// imports
import { LightningElement, wire, track } from "lwc";
import getBoatTypes from "@salesforce/apex/BoatDataService.getBoatTypes";
// import getBoatTypes from the BoatDataService => getBoatTypes method';
export default class BoatSearchForm extends LightningElement {
    selectedBoatTypeId = '';
    
    // Private
    error = undefined;
    
    //es un objeto y al ser un objeto hay que renderizarlo
    @track
    searchOptions;
    
    // Wire a custom Apex method
    @wire(getBoatTypes)
      boatTypes({ error, data }) {
      if (data) {
        this.searchOptions = data.map(type => {
          // TODO: complete the logic
          return {label: type.Name, value:type.Id}
        });
        this.searchOptions.unshift({ label: 'All Types', value: '' });
      } else if (error) {
        this.searchOptions = undefined;
        this.error = error;
      }
    }
    
    // Fires event that the search option has changed.
    // Activa el evento de que la opción de búsqueda ha cambiado.
    // passes boatTypeId (value of this.selectedBoatTypeId) in the detail
    // pasa boatTypeId (valor de this.selectedBoatTypeId) en el detalle
    handleSearchOptionChange(event) {
    
     this.selectedBoatTypeId = event.detail.value
      // Crear el const searchEvent 
      // searchEvent debe ser la nueva búsqueda personalizada de eventos
      // Create the const searchEvent
      // searchEvent must be the new custom event search
      const searchEvent = new CustomEvent('search', {
        detail: {
          boatTypeId: this.selectedBoatTypeId
        }
      });
      this.dispatchEvent(searchEvent);
    }
  }
  