import { Util } from "../../util";
import { ToastsService } from "../toasts/toasts.service";
import { QuotesService } from "../quotes/quotes.service";
import { TradesService } from "../trades/trades.service";
import { OrdersService } from "../orders/orders.service";
import { ActivityService } from "../activity/activity.service";
import { AccountsService } from "../account/accounts.service";
import { PluginsService } from "../plugins/plugins.service";

export class StreamingService {
    static startStream(data) {
        Util.fetch("/api/startstream", {
            method: "post",
            body: JSON.stringify({
                environment: data.environment,
                accessToken: data.accessToken,
                accountId: data.accountId,
                instruments: data.instruments
            })
        }).then(() => {
            StreamingService.getStream();
        }).catch(err => {
            ToastsService.addToast(err);
        });
    }

    static getStream() {
        const ws = new WebSocket("ws://localhost:8000/stream");

        ws.onmessage = event => {
            let data,
                isTick,
                tick,
                isTransaction,
                transaction,
                refreshPlugins;

            try {
                data = JSON.parse(event.data);

                isTick = data.closeoutAsk && data.closeoutBid;
                isTransaction = data.accountID;
                refreshPlugins = data.refreshPlugins;

                if (isTick) {
                    tick = {
                        time: data.time,
                        instrument: data.instrument,
                        ask: data.asks[0] && data.asks[0].price ||
                            data.closeoutAsk,
                        bid: data.bids[0] && data.bids[0].price ||
                            data.closeoutBid
                    };

                    QuotesService.updateTick(tick);

                    TradesService.updateTrades(tick);
                    OrdersService.updateOrders(tick);
                }

                if (isTransaction) {
                    transaction = data;

                    ActivityService.addActivity(transaction);

                    TradesService.refresh();
                    OrdersService.refresh();
                    AccountsService.refresh();
                }

                if (refreshPlugins) {
                    PluginsService.refresh();
                }
            } catch (e) {

                // Discard "incomplete" json
                // console.log(e.name + ": " + e.message);
            }
        };
    }
}
