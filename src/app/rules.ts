import {
    AngularmService, EntityLineComponent, 
    CreateEntityComponent, EditEntityFormComponent,
    FormLineComponent, EditFormLineComponent,
    EntityDetailsComponent, ShowLineComponent,
    ListingTableComponent
} from 'angularm';
import { CreateFormComponent } from "app/create-form/create-form.component";
import { MyFormLineComponent } from "app/my-form-line/my-form-line.component";

export let defineRules = (angularm: AngularmService) => {
    angularm
        .dptr('form_line', MyFormLineComponent, { inputType: 'text', inputClass: 'w3-input' })
        .dpr('show_line', ShowLineComponent)
        .detr('list_entities', ListingTableComponent)
        .der('table_line', EntityLineComponent)
        .der('show_entity', EntityDetailsComponent)
        .detr('create_form', CreateFormComponent, {formClass: 'w3-container'})
        .der('edit_form', EditEntityFormComponent)
        .pr('edit_form_line', '*', 'code', null, EditFormLineComponent, { inputType: 'number' })
        .dpr('edit_form_line', EditFormLineComponent, { inputType: 'text' });
};
