import Sortable from 'sortablejs/Sortable.min';
import {ajaxRequest} from "../helpers/ajaxRequest";

export let sortableLabels = null;

export function labelSort() {
    const list = document.getElementById('labels-root');

    sortableLabels = new Sortable(list, {
        animation: 150,
        onEnd: function () {
            const labels = [].slice.call(list.children);
            // serialize items ondrop
            function serialize(sortable) {
                let serialized = [];
                for (let i in sortable) {
                    serialized.push({
                        id: sortable[i].id,
                    });
                }
                return serialized;
            }

            // serialize and send request
            ajaxRequest('put', '/labels/update', serialize(labels), function () {});
        }
    });
}

export function destoryLabelSort() {
    if (sortableLabels !== null) {
        sortableLabels.destroy();
        sortableLabels = null;
    }
}

export function labelResort() {
    destoryLabelSort();
    labelSort();
}
