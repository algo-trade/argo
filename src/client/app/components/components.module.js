import angular from "angular";

import { account } from "./account/account.module";
import { activity } from "./activity/activity.module";
import { charts } from "./charts/charts.module";
import { exposure } from "./exposure/exposure.module";
import { header } from "./header/header.module";
import { highlighter } from "./highlighter/highlighter.module";
import { news } from "./news/news.module";
import { ohlcChart } from "./ohlc-chart/ohlc-chart.module";
import { orderDialog } from "./order-dialog/order-dialog.module";
import { orders } from "./orders/orders.module";
import { plugins } from "./plugins/plugins.module";
import { positions } from "./positions/positions.module";
import { quotes } from "./quotes/quotes.module";
import { session } from "./session/session.module";
import { settingsDialog } from "./settings-dialog/settings-dialog.module";
import { slChart } from "./sl-chart/sl-chart.module";
import { streaming } from "./streaming/streaming.module";
import { tokenDialog } from "./token-dialog/token-dialog.module";
import { trades } from "./trades/trades.module";
import { yesnoDialog } from "./yesno-dialog/yesno-dialog.module";

export const components = angular
    .module("components", [
        account,
        activity,
        charts,
        exposure,
        header,
        highlighter,
        news,
        ohlcChart,
        orderDialog,
        orders,
        plugins,
        positions,
        quotes,
        session,
        settingsDialog,
        slChart,
        streaming,
        tokenDialog,
        trades,
        yesnoDialog
    ])
    .name;

import { ToastsComponent } from "../components/toasts/toasts.component";
ToastsComponent.bootstrap();
