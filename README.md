# ARGO

[![NPM version](https://badge.fury.io/js/argo-trading.png)](http://badge.fury.io/js/argo-trading)
[![Build Status](https://travis-ci.org/albertosantini/argo.png)](https://travis-ci.org/albertosantini/argo)

**Argo** is an open source trading platform, connecting directly with [OANDA][]
through the powerful [API][] to develop trading strategies.

## Installation

[![NPM](https://nodei.co/npm/argo-trading.png?downloads=true&downloadRank=true)](https://nodei.co/npm/argo-trading/)
[![NPM](https://nodei.co/npm-dl/argo-trading.png)](https://nodei.co/npm/argo-trading/)

After installing [Node.js](https://nodejs.org/) (required), you can install **Argo**.

- Release 3.x for legacy accounts: if your account id contains only digits (ie. 2534233), it is a legacy account.
- Release 4.x (or higher) for v20 accounts.

```
$ npm install -g argo-trading
```

## Starting Web App

```
$ argo-trading
```
Eventually point your web brower to `http://localhost:8000`.

## Starting Standalone App

```
$ argo-trading-standalone
```

Tested locally with Node.js 7.x, AngularJS 1.6.x.

## [Basic features](docs/views)

- Account summary updated for each event.
- Quotes and spreads list updated tick-by-tick.
- Charts with different time frames updated tick-by-tick.
- Market and limit orders with stop loss, take profit and trailing stop.
- Trades list with current and profit updated tick-by-tick.
- Orders list with distance updated tick-by-tick.
- Positions summary.
- Expositions summary.
- Transactions history.
- Economic calendar.

## [Advanced features](https://github.com/albertosantini/argo-trading-plugin-seed)

- Executing trading strategies.

## [Documentation](http://argo.rtfd.io/)

## [Contributing](CONTRIBUTING.md)

## Development Notes

After modifying js files in `src` folder, you need to build the application bundle:

`npm run rollup`

If `d3` dep is updated, you need to build the `d3-techan` bundle:

`nom run rollup-d3`

## Disclaimer

NOT INVESTMENT ADVICE AND WILL LOSE LOTS OF MONEY SO PROCEED WITH CAUTION.


[OANDA]: http://fxtrade.oanda.co.uk/
[API]: http://developer.oanda.com/
