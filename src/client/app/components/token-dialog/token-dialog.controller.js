import angular from "angular";

import { ToastsService } from "../toasts/toasts.service";

export class TokenDialogController {
    constructor($window, SessionService, AccountsService, StreamingService) {
        this.$window = $window;
        this.SessionService = SessionService;
        this.AccountsService = AccountsService;
        this.StreamingService = StreamingService;
    }

    $onInit() {
        const instrsStorage = this.$window.localStorage.getItem("argo.instruments");

        this.instrs = angular.fromJson(instrsStorage) || {
            EUR_USD: true,
            USD_JPY: true,
            GBP_USD: true,
            EUR_GBP: true,
            USD_CHF: true,
            EUR_JPY: true,
            EUR_CHF: true,
            USD_CAD: true,
            AUD_USD: true,
            GBP_JPY: true
        };

        this.environment = "practice";
        this.accounts = [];
    }

    login(tokenInfo) {
        if (!tokenInfo) {
            this.closeModal();
            return;
        }

        this.environment = tokenInfo.environment;
        this.token = tokenInfo.token;

        this.AccountsService.getAccounts({
            environment: this.environment,
            token: this.token
        }).then(accounts => {
            const message = "If your account id contains only digits " +
                "(ie. 2534233), it is a legacy account and you should use " +
                "release 3.x. For v20 accounts use release 4.x or higher. " +
                "Check your token.";

            if (!accounts.length) {
                throw new Error(message);
            }
            angular.extend(this.accounts, accounts);
        }).catch(err => {
            ToastsService.addToast(err);
            this.closeModal();
        });
    }

    selectAccount(accountSelected) {
        this.accountId = this.accounts[accountSelected].id;

        const tokenInfo = {
            environment: this.environment,
            token: this.token,
            accountId: this.accountId,
            instrs: this.instrs
        };

        this.SessionService.setCredentials(tokenInfo);

        this.AccountsService.getAccounts(tokenInfo).then(() => {
            const instruments = this.AccountsService
                .setStreamingInstruments(this.instrs);

            this.StreamingService.startStream({
                environment: this.environment,
                accessToken: this.token,
                accountId: this.accountId,
                instruments
            });

            this.closeModal({ tokenInfo });
        }).catch(err => {
            ToastsService.addToast(err);
            this.closeModal();
        });
    }

}
TokenDialogController.$inject = [
    "$window", "SessionService",
    "AccountsService", "StreamingService"
];
