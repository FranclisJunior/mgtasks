import {
    AngularmService, EntityLineComponent, 
    CreateEntityComponent, EditEntityFormComponent,
    FormLineComponent, EditFormLineComponent,
    EntityDetailsComponent, ShowLineComponent,
    ListingTableComponent
} from 'angularm';
import { MyTableLineComponent } from "app/my-table-line/my-table-line.component";
import { MyListTableComponent } from "app/my-list-table/my-list-table.component";

export let defineRules = (angularm: AngularmService) => {
    angularm
        .ptr('form_line', '*', 'code', null, FormLineComponent, { inputType: 'number' })
        .dptr('form_line', FormLineComponent, { inputType: 'text' })
        .dpr('show_line', ShowLineComponent)
        .etr('list_entities', 'bug', MyListTableComponent)
        .etr('list_entities', 'issue', MyListTableComponent)
        .etr('list_entities', 'project', MyListTableComponent)
        .etr('list_entities', 'product', MyListTableComponent)
        .detr('list_entities', ListingTableComponent)
        .er('table_line', 'bug', MyTableLineComponent)
        .er('table_line', 'issue', MyTableLineComponent)
        .er('table_line', 'project', MyTableLineComponent)
        .er('table_line', 'product', MyTableLineComponent)
        .der('table_line', EntityLineComponent, )
        .der('show_entity', EntityDetailsComponent)
        .detr('create_form', CreateEntityComponent)
        .der('edit_form', EditEntityFormComponent)
        .pr('edit_form_line', '*', 'code', null, EditFormLineComponent, { inputType: 'number' })
        .dpr('edit_form_line', EditFormLineComponent, { inputType: 'text' });
};
