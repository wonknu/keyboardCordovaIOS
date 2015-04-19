/*
 *
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 *
*/

var argscheck = require('cordova/argscheck'),
    utils = require('cordova/utils'),
    exec = require('cordova/exec');
   
var KeyboardOptions = function() {
};

KeyboardOptions.shrinkView = function(shrink) {
    exec(null, null, "Keyboard", "shrinkView", [shrink]);
};

KeyboardOptions.hideFormAccessoryBar = function(hide) {
    exec(null, null, "Keyboard", "hideFormAccessoryBar", [hide]);
};

KeyboardOptions.disableScrollingInShrinkView = function(disable) {
    exec(null, null, "Keyboard", "disableScrollingInShrinkView", [disable]);
};

KeyboardOptions.fireOnShow = function() {
    Keyboard.isVisible = true;
    if (Keyboard.onshow) {
        Keyboard.onshow();
    }
};
KeyboardOptions.fireOnHide = function() {
    Keyboard.isVisible = false;
    if (Keyboard.onhide) {
        Keyboard.onhide();
    }
};
KeyboardOptions.fireOnHiding = function() {
    // Automatic scroll to the top of the page
    // to prevent quirks when using position:fixed elements
    // inside WebKit browsers (iOS specifically).
    // See CB-6444 for context.
    if (Keyboard.automaticScrollToTopOnHiding) {
        document.body.scrollLeft = 0;
    }

    if (Keyboard.onhiding) {
        Keyboard.onhiding();
    }
};
KeyboardOptions.fireOnShowing = function() {
    if (Keyboard.onshowing) {
        Keyboard.onshowing();
    }
};

KeyboardOptions.isVisible = false;
KeyboardOptions.automaticScrollToTopOnHiding = false;

module.exports = KeyboardOptions;
