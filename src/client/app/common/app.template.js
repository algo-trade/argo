export class AppTemplate {
    static update(render, state) {
        const tabClasses = "f6 f5-l link bg-animate black-80 hover-bg-light-blue dib pa3 ph4-l pointer";
        const selectedTabClass = " bg-blue";
        const isTradesTab = state.tabSelectedIndex === 0;

        render`
            <header></header>

            <nav class="bt bb tc mw9 center shadow-2 tracked">
                <a id="tradesTab" class="${isTradesTab ? tabClasses + selectedTabClass : tabClasses}"
                    onclick="${() => state.tabSelectedIndex = 0}">Trades</a>
                <a class="f6 f5-l link bg-animate black-80 hover-bg-light-blue dib pa3 ph4-l"
                    href ng-click="$ctrl.tabSelectedIndex = 1"
                    ng-class="{'bg-blue': $ctrl.tabSelectedIndex === 1}">Orders</a>
                <a class="f6 f5-l link bg-animate black-80 hover-bg-light-blue dib pa3 ph4-l"
                    href ng-click="$ctrl.tabSelectedIndex = 2"
                    ng-class="{'bg-blue': $ctrl.tabSelectedIndex === 2}">Positions</a>
                <a class="f6 f5-l link bg-animate black-80 hover-bg-light-blue dib pa3 ph4-l"
                    href ng-click="$ctrl.tabSelectedIndex = 3"
                    ng-class="{'bg-blue': $ctrl.tabSelectedIndex === 3}">Exposures</a>
                <a class="f6 f5-l link bg-animate black-80 hover-bg-light-blue dib pa3 ph4-l"
                    href ng-click="$ctrl.tabSelectedIndex = 4"
                    ng-class="{'bg-blue': $ctrl.tabSelectedIndex === 4}">Activity</a>
                <a class="f6 f5-l link bg-animate black-80 hover-bg-light-blue dib pa3 ph4-l"
                    href ng-click="$ctrl.tabSelectedIndex = 5"
                    ng-class="{'bg-blue': $ctrl.tabSelectedIndex === 5}">News</a>
                <a class="f6 f5-l link bg-animate black-80 hover-bg-light-blue dib pa3 ph4-l"
                    href ng-click="$ctrl.tabSelectedIndex = 6"
                    ng-class="{'bg-blue': $ctrl.tabSelectedIndex === 6}">Plugins</a>
            </nav>

            <div class="flex flex-wrap-s flex-wrap-m ma2 pa2">
                <div class="flex flex-wrap flex-column min-w-25">
                    <account class="mb4"></account>
                    <quotes class="mb4"></quotes>
                    <toasts></toasts>
                </div>
                <div class="flex flex-wrap flex-column min-w-75">
                    <ng-switch on="$ctrl.tabSelectedIndex">
                        <trades ng-switch-when="0" class="ma2 pa2"></trades>
                        <orders ng-switch-when="1" class="ma2 pa2"></orders>
                        <positions ng-switch-when="2" class="ma2 pa2"></positions>
                        <exposure ng-switch-when="3" class="ma2 pa2"></exposure>
                        <activity ng-switch-when="4" class="ma2 pa2"></activity>
                        <news ng-switch-when="5" class="ma2 pa2"></news>
                        <plugins ng-switch-when="6" class="ma2 pa2"></plugins>
                    </ng-switch>

                    <charts></charts>
                </div>
            </div>
        `;
    }
}
