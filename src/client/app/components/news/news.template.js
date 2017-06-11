import { Util } from "../../util";

export class NewsTemplate {
    static update(render, state) {
        if (state.news.length) {
            NewsTemplate.renderNews(render, state);
        } else {
            NewsTemplate.renderNoNews(render);
        }
    }

    static renderNews(render, state) {
        /* eslint indent: off */
        render`
            <div class="h4 overflow-auto">
                <p class="f6 w-100 mw8 tc b">No news.</p>

                <table ng-show="$ctrl.news.length" class="f6 w-100 mw8 center" cellpsacing="0">
                    <thead>
                        <th class="fw6 bb b--black-20 tl pb1 pr1 bg-white tr">Date/Time</th>
                        <th class="fw6 bb b--black-20 tl pb1 pr1 bg-white tr">Market</th>
                        <th class="fw6 bb b--black-20 tl pb1 pr1 bg-white tr">Event</th>
                        <th class="fw6 bb b--black-20 tl pb1 pr1 bg-white tr">Previous</th>
                        <th class="fw6 bb b--black-20 tl pb1 pr1 bg-white tr">Forecast</th>
                        <th class="fw6 bb b--black-20 tl pb1 pr1 bg-white tr">Actual</th>
                        <th class="fw6 bb b--black-20 tl pb1 pr1 bg-white tr">Unit</th>
                    </thead>

                    <tbody>
                        <tr ng-repeat="news in $ctrl.news">
                            <td class="pv1 pr1 bb b--black-20 tr">{{ news.timestamp | date:"MMM d, HH:mm" }}</td>
                            <td class="pv1 pr1 bb b--black-20 tr">{{ news.currency }}</td>
                            <td class="pv1 pr1 bb b--black-20 tr">{{ news.title }}</td>
                            <td class="pv1 pr1 bb b--black-20 tr">{{ news.previous | number }}</td>
                            <td class="pv1 pr1 bb b--black-20 tr">{{ news.forecast | number }}</td>
                            <td class="pv1 pr1 bb b--black-20 tr">{{ news.actual | number }}</td>
                            <td class="pv1 pr1 bb b--black-20 tr">{{ news.unit }}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        `;
    }

    static renderNoNews(render) {
        /* eslint indent: off */
        render`
            <div class="h4 overflow-auto">
                <p class="f6 w-100 mw8 tc b">No news.</p>
            </div>
        `;
    }
}
