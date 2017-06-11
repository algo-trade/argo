import { Util } from "../../util";

export class ActivityTemplate {
    static update(render, state) {
        if (state.activities.length) {
            ActivityTemplate.renderActivity(render, state);
        } else {
            ActivityTemplate.renderNoActivity(render);
        }
    }

    static renderActivity(render, state) {
        /* eslint indent: off */
        render`
            <div class="h4 overflow-auto">
                <p ng-hide="$ctrl.activities.length" class="f6 w-100 mw8 tc b">No activities.</p>

                <table ng-show="$ctrl.activities.length" class="f6 w-100 mw8 center" cellpsacing="0">
                    <thead>
                        <th class="fw6 bb b--black-20 tl pb1 pr1 bg-white tr">Ticket</th>
                        <th class="fw6 bb b--black-20 tl pb1 pr1 bg-white tr">Type</th>
                        <th class="fw6 bb b--black-20 tl pb1 pr1 bg-white tr">Market</th>
                        <th class="fw6 bb b--black-20 tl pb1 pr1 bg-white tr">Units</th>
                        <th class="fw6 bb b--black-20 tl pb1 pr1 bg-white tr">Price</th>
                        <th class="fw6 bb b--black-20 tl pb1 pr1 bg-white tr">Profit</th>
                        <th class="fw6 bb b--black-20 tl pb1 pr1 bg-white tr">Balance</th>
                        <th class="fw6 bb b--black-20 tl pb1 pr1 bg-white tr">Date/Time</th>
                    </thead>

                    <tbody>
                        <tr ng-repeat="activity in $ctrl.activities">
                            <td class="pv1 pr1 bb b--black-20 tr">{{ activity.id }}</td>
                            <td class="pv1 pr1 bb b--black-20 tr">{{ activity.type }}</td>
                            <td class="pv1 pr1 bb b--black-20 tr">{{ activity.instrument }}</td>
                            <td class="pv1 pr1 bb b--black-20 tr">{{ activity.units | number }}</td>
                            <td class="pv1 pr1 bb b--black-20 tr">{{ activity.price }}</td>
                            <td class="pv1 pr1 bb b--black-20 tr"
                                ng-class="activity.pl >= 0 ? 'highlight-green' : 'highlight-red'">
                                {{ activity.pl | number:4 }}
                            </td>
                            <td class="pv1 pr1 bb b--black-20 tr">{{ activity.accountBalance | number:2 }}</td>
                            <td class="pv1 pr1 bb b--black-20 tr">{{ activity.time | date:"MMM d, HH:mm:ss" }}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        `;
    }

    static renderNoActivity(render) {
        /* eslint indent: off */
        render`
            <div class="h4 overflow-auto">
                <p class="f6 w-100 mw8 tc b">No activities.</p>
            </div>
        `;
    }
}
