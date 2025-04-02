import { jsxDEV as _jsxDEV, Fragment as _Fragment } from "react/jsx-dev-runtime";
import React from 'react';
export function UI(param) {
    var gameState = param.gameState, startGame = param.startGame;
    var status = gameState.status, score = gameState.score, highScore = gameState.highScore;
    var health = gameState.health || 100; // Default to 100 if not set
    return /*#__PURE__*/ _jsxDEV("div", {
        className: "ui-container",
        children: [
            /*#__PURE__*/ _jsxDEV("div", {
                className: "score-display",
                children: [
                    "Score: ",
                    score,
                    highScore > 0 && /*#__PURE__*/ _jsxDEV("div", {
                        className: "high-score",
                        children: [
                            "High Score: ",
                            highScore
                        ]
                    }, void 0, true, {
                        fileName: "UI.js",
                        lineNumber: 11,
                        columnNumber: 27
                    }, this)
                ]
            }, void 0, true, {
                fileName: "UI.js",
                lineNumber: 9,
                columnNumber: 7
            }, this),
            status === 'playing' && /*#__PURE__*/ _jsxDEV("div", {
                className: "health-bar-container",
                children: [
                    /*#__PURE__*/ _jsxDEV("div", {
                        className: "health-bar",
                        style: {
                            width: "".concat(health, "%"),
                            backgroundColor: getHealthColor(health)
                        }
                    }, void 0, false, {
                        fileName: "UI.js",
                        lineNumber: 16,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ _jsxDEV("div", {
                        className: "health-text",
                        children: [
                            health,
                            "%"
                        ]
                    }, void 0, true, {
                        fileName: "UI.js",
                        lineNumber: 17,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "UI.js",
                lineNumber: 15,
                columnNumber: 9
            }, this),
            status === 'start' && /*#__PURE__*/ _jsxDEV("div", {
                className: "start-screen",
                children: [
                    /*#__PURE__*/ _jsxDEV("div", {
                        className: "game-avatars",
                        children: [
                            /*#__PURE__*/ _jsxDEV("div", {
                                className: "avatar-container",
                                children: [
                                    /*#__PURE__*/ _jsxDEV("img", {
                                        src: "https://play.rosebud.ai/assets/Screen Shot 2025-04-01 at 10.55.03 PM.png?LLHb",
                                        alt: "XRP Coin",
                                        className: "coin-avatar xrp"
                                    }, void 0, false, {
                                        fileName: "UI.js",
                                        lineNumber: 25,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ _jsxDEV("span", {
                                        children: "Collect"
                                    }, void 0, false, {
                                        fileName: "UI.js",
                                        lineNumber: 30,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "UI.js",
                                lineNumber: 24,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ _jsxDEV("div", {
                                className: "avatar-container",
                                children: [
                                    /*#__PURE__*/ _jsxDEV("img", {
                                        src: "https://play.rosebud.ai/assets/Screen Shot 2025-04-01 at 10.56.39 PM.png?cUFr",
                                        alt: "SOLANA Coin",
                                        className: "coin-avatar solana"
                                    }, void 0, false, {
                                        fileName: "UI.js",
                                        lineNumber: 33,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ _jsxDEV("span", {
                                        children: "Avoid"
                                    }, void 0, false, {
                                        fileName: "UI.js",
                                        lineNumber: 38,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "UI.js",
                                lineNumber: 32,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "UI.js",
                        lineNumber: 23,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ _jsxDEV("h1", {
                        children: "XRP Rocket Run"
                    }, void 0, false, {
                        fileName: "UI.js",
                        lineNumber: 41,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ _jsxDEV("p", {
                        children: "Navigate through space, collect XRP coins for power, and avoid the dangerous SOLANA coins!"
                    }, void 0, false, {
                        fileName: "UI.js",
                        lineNumber: 42,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ _jsxDEV("p", {
                        children: "Controls: Arrow keys to move, Space to shoot. On mobile, double tap to shoot."
                    }, void 0, false, {
                        fileName: "UI.js",
                        lineNumber: 43,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ _jsxDEV("button", {
                        onClick: startGame,
                        className: "start-button",
                        children: "START GAME"
                    }, void 0, false, {
                        fileName: "UI.js",
                        lineNumber: 44,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "UI.js",
                lineNumber: 22,
                columnNumber: 9
            }, this),
            status === 'gameOver' && /*#__PURE__*/ _jsxDEV("div", {
                className: "game-over-screen",
                children: [
                    /*#__PURE__*/ _jsxDEV("div", {
                        className: "game-avatars",
                        children: [
                            /*#__PURE__*/ _jsxDEV("div", {
                                className: "avatar-container",
                                children: [
                                    /*#__PURE__*/ _jsxDEV("img", {
                                        src: "https://play.rosebud.ai/assets/Screen Shot 2025-04-01 at 10.55.03 PM.png?LLHb",
                                        alt: "XRP Coin",
                                        className: "coin-avatar xrp"
                                    }, void 0, false, {
                                        fileName: "UI.js",
                                        lineNumber: 54,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ _jsxDEV("span", {
                                        children: "Collect"
                                    }, void 0, false, {
                                        fileName: "UI.js",
                                        lineNumber: 59,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "UI.js",
                                lineNumber: 53,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ _jsxDEV("div", {
                                className: "avatar-container",
                                children: [
                                    /*#__PURE__*/ _jsxDEV("img", {
                                        src: "https://play.rosebud.ai/assets/Screen Shot 2025-04-01 at 10.56.39 PM.png?cUFr",
                                        alt: "SOLANA Coin",
                                        className: "coin-avatar solana"
                                    }, void 0, false, {
                                        fileName: "UI.js",
                                        lineNumber: 62,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ _jsxDEV("span", {
                                        children: "Avoid"
                                    }, void 0, false, {
                                        fileName: "UI.js",
                                        lineNumber: 67,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "UI.js",
                                lineNumber: 61,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "UI.js",
                        lineNumber: 52,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ _jsxDEV("h2", {
                        children: "Game Over"
                    }, void 0, false, {
                        fileName: "UI.js",
                        lineNumber: 70,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ _jsxDEV("p", {
                        children: [
                            "Final Score: ",
                            score
                        ]
                    }, void 0, true, {
                        fileName: "UI.js",
                        lineNumber: 71,
                        columnNumber: 11
                    }, this),
                    score === highScore && score > 0 && /*#__PURE__*/ _jsxDEV("p", {
                        className: "new-high-score",
                        children: "New High Score!"
                    }, void 0, false, {
                        fileName: "UI.js",
                        lineNumber: 72,
                        columnNumber: 48
                    }, this),
                    /*#__PURE__*/ _jsxDEV("button", {
                        onClick: startGame,
                        className: "restart-button",
                        children: "PLAY AGAIN"
                    }, void 0, false, {
                        fileName: "UI.js",
                        lineNumber: 73,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "UI.js",
                lineNumber: 51,
                columnNumber: 9
            }, this),
            status === 'playing' && /*#__PURE__*/ _jsxDEV(_Fragment, {
                children: [
                    /*#__PURE__*/ _jsxDEV("div", {
                        className: "touch-controls-hint",
                        children: "Swipe to move • Double tap or press button to fire"
                    }, void 0, false, {
                        fileName: "UI.js",
                        lineNumber: 80,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ _jsxDEV("div", {
                        className: "fire-button",
                        onTouchStart: function(e) {
                            // Find the game scene
                            var gameElement = document.querySelector('.game-container');
                            if (gameElement) {
                                // Create and dispatch a custom event
                                var event = new KeyboardEvent('keydown', {
                                    key: ' '
                                });
                                gameElement.dispatchEvent(event);
                            }
                            e.preventDefault();
                        },
                        children: "Fire"
                    }, void 0, false, {
                        fileName: "UI.js",
                        lineNumber: 83,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true)
        ]
    }, void 0, true, {
        fileName: "UI.js",
        lineNumber: 8,
        columnNumber: 5
    }, this);
}
// Function to get health bar color based on remaining health
function getHealthColor(health) {
    if (health > 60) return '#00ff00'; // Green for high health
    if (health > 30) return '#ffff00'; // Yellow for medium health
    return '#ff0000'; // Red for low health
}
