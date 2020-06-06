// Copyright 2018 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

'use strict';

// chrome.runtime.onInstalled.addListener(function() {
// });

chrome.browserAction.onClicked.addListener(
    function(tab) {
      //source: https://gist.github.com/aymericbeaumet/d1d6799a1b765c3c8bc0b675b1a1547d
  chrome.tabs.executeScript( null, {code:`setInterval(() => { for (const d of document.querySelectorAll('div[data-testid="unlike"]')) { d.click() } window.scrollTo(0, document.body.scrollHeight) }, 1000)`},
   function(results){   alert("It's Done :), Please Refresh the Page.") } );    
  }
  );
