function _array_like_to_array(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
function _array_with_holes(arr) {
    if (Array.isArray(arr)) return arr;
}
function _define_property(obj, key, value) {
    if (key in obj) {
        Object.defineProperty(obj, key, {
            value: value,
            enumerable: true,
            configurable: true,
            writable: true
        });
    } else {
        obj[key] = value;
    }
    return obj;
}
function _iterable_to_array_limit(arr, i) {
    var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"];
    if (_i == null) return;
    var _arr = [];
    var _n = true;
    var _d = false;
    var _s, _e;
    try {
        for(_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true){
            _arr.push(_s.value);
            if (i && _arr.length === i) break;
        }
    } catch (err) {
        _d = true;
        _e = err;
    } finally{
        try {
            if (!_n && _i["return"] != null) _i["return"]();
        } finally{
            if (_d) throw _e;
        }
    }
    return _arr;
}
function _non_iterable_rest() {
    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _object_spread(target) {
    for(var i = 1; i < arguments.length; i++){
        var source = arguments[i] != null ? arguments[i] : {};
        var ownKeys = Object.keys(source);
        if (typeof Object.getOwnPropertySymbols === "function") {
            ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {
                return Object.getOwnPropertyDescriptor(source, sym).enumerable;
            }));
        }
        ownKeys.forEach(function(key) {
            _define_property(target, key, source[key]);
        });
    }
    return target;
}
function ownKeys(object, enumerableOnly) {
    var keys = Object.keys(object);
    if (Object.getOwnPropertySymbols) {
        var symbols = Object.getOwnPropertySymbols(object);
        if (enumerableOnly) {
            symbols = symbols.filter(function(sym) {
                return Object.getOwnPropertyDescriptor(object, sym).enumerable;
            });
        }
        keys.push.apply(keys, symbols);
    }
    return keys;
}
function _object_spread_props(target, source) {
    source = source != null ? source : {};
    if (Object.getOwnPropertyDescriptors) {
        Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
        ownKeys(Object(source)).forEach(function(key) {
            Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
        });
    }
    return target;
}
function _sliced_to_array(arr, i) {
    return _array_with_holes(arr) || _iterable_to_array_limit(arr, i) || _unsupported_iterable_to_array(arr, i) || _non_iterable_rest();
}
function _unsupported_iterable_to_array(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _array_like_to_array(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(n);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _array_like_to_array(o, minLen);
}
import { jsxDEV as _jsxDEV } from "react/jsx-dev-runtime";
import React, { useState, useRef } from 'react';
import { Canvas } from '@react-three/fiber';
import { GameScene } from './GameScene.js';
import { UI } from './UI.js';
export function Game() {
    var _useState = _sliced_to_array(useState({
        status: 'start',
        score: 0,
        highScore: 0,
        health: 100
    }), 2), gameState = _useState[0], setGameState = _useState[1];
    var startGame = function() {
        setGameState(_object_spread_props(_object_spread({}, gameState), {
            status: 'playing',
            score: 0,
            health: 100
        }));
    };
    var endGame = function() {
        var newHighScore = Math.max(gameState.score, gameState.highScore);
        setGameState(_object_spread_props(_object_spread({}, gameState), {
            status: 'gameOver',
            highScore: newHighScore
        }));
    };
    var incrementScore = function() {
        var points = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 1;
        setGameState(_object_spread_props(_object_spread({}, gameState), {
            score: gameState.score + points
        }));
    };
    return /*#__PURE__*/ _jsxDEV("div", {
        className: "game-container",
        children: [
            /*#__PURE__*/ _jsxDEV(Canvas, {
                shadows: true,
                camera: {
                    position: [
                        0,
                        2,
                        10
                    ],
                    fov: 50
                },
                children: gameState.status === 'playing' && /*#__PURE__*/ _jsxDEV(GameScene, {
                    endGame: endGame,
                    incrementScore: incrementScore,
                    updateHealth: function(newHealth) {
                        setGameState(_object_spread_props(_object_spread({}, gameState), {
                            health: newHealth
                        }));
                    },
                    health: gameState.health
                }, void 0, false, {
                    fileName: "Game.js",
                    lineNumber: 43,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "Game.js",
                lineNumber: 41,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ _jsxDEV(UI, {
                gameState: gameState,
                startGame: startGame
            }, void 0, false, {
                fileName: "Game.js",
                lineNumber: 56,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "Game.js",
        lineNumber: 40,
        columnNumber: 5
    }, this);
}
