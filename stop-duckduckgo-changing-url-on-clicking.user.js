// ==UserScript==
// @name        Stop DuckDuckGo changing url on clicking
// @namespace   https://wiki.gslin.com/wiki/StopDuckDuckGoChangingUrlOnClicking
// @match       https://duckduckgo.com/*
// @grant       none
// @run-at      document-idle
// @version     0.20201220.0
// @license     MIT
// @author      Gea-Suan Lin <gslin@gslin.org>
// @description Stop DuckDuckGo changing url on clicking to add more privacy.
// ==/UserScript==

(() => {
    'use strict';

    // Block replaceState (History API) to avoid DuckDuckGo from changing url:
    // https://developer.mozilla.org/en-US/docs/Web/API/History_API
    window.history.replaceState = function(){};
})();
