function _array_like_to_array(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
function _array_with_holes(arr) {
    if (Array.isArray(arr)) return arr;
}
function _array_without_holes(arr) {
    if (Array.isArray(arr)) return _array_like_to_array(arr);
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
function _iterable_to_array(iter) {
    if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
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
function _non_iterable_spread() {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
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
function _to_consumable_array(arr) {
    return _array_without_holes(arr) || _iterable_to_array(arr) || _unsupported_iterable_to_array(arr) || _non_iterable_spread();
}
function _unsupported_iterable_to_array(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _array_like_to_array(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(n);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _array_like_to_array(o, minLen);
}
import { jsxDEV as _jsxDEV, Fragment as _Fragment } from "react/jsx-dev-runtime";
import React, { useRef, useState, useEffect, useMemo } from 'react';
import * as THREE from 'three';
import { useFrame, useThree } from '@react-three/fiber';
import { useKeyboardControls, Stars, useGLTF, Text, useTexture } from '@react-three/drei';
// Simple rocket model using Three.js primitives
function Rocket(props) {
    var rocketRef = useRef();
    useFrame(function() {
        // Add some subtle animation to the rocket
        if (rocketRef.current) {
            rocketRef.current.rotation.z = Math.sin(Date.now() * 0.002) * 0.1;
        }
    });
    return /*#__PURE__*/ _jsxDEV("group", _object_spread_props(_object_spread({
        ref: rocketRef
    }, props), {
        children: [
            /*#__PURE__*/ _jsxDEV("mesh", {
                position: [
                    0,
                    0,
                    0
                ],
                children: [
                    /*#__PURE__*/ _jsxDEV("cylinderGeometry", {
                        args: [
                            0.2,
                            0.5,
                            2,
                            16
                        ]
                    }, void 0, false, {
                        fileName: "GameScene.js",
                        lineNumber: 21,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ _jsxDEV("meshStandardMaterial", {
                        color: "#6495ED",
                        metalness: 0.8,
                        roughness: 0.2
                    }, void 0, false, {
                        fileName: "GameScene.js",
                        lineNumber: 22,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "GameScene.js",
                lineNumber: 20,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ _jsxDEV("mesh", {
                position: [
                    0,
                    1.2,
                    0
                ],
                children: [
                    /*#__PURE__*/ _jsxDEV("coneGeometry", {
                        args: [
                            0.2,
                            0.5,
                            16
                        ]
                    }, void 0, false, {
                        fileName: "GameScene.js",
                        lineNumber: 27,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ _jsxDEV("meshStandardMaterial", {
                        color: "#4682B4",
                        metalness: 0.8,
                        roughness: 0.2
                    }, void 0, false, {
                        fileName: "GameScene.js",
                        lineNumber: 28,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "GameScene.js",
                lineNumber: 26,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ _jsxDEV("mesh", {
                position: [
                    0,
                    -0.8,
                    0
                ],
                rotation: [
                    0,
                    0,
                    Math.PI / 4
                ],
                children: [
                    /*#__PURE__*/ _jsxDEV("boxGeometry", {
                        args: [
                            0.1,
                            0.8,
                            0.3
                        ]
                    }, void 0, false, {
                        fileName: "GameScene.js",
                        lineNumber: 33,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ _jsxDEV("meshStandardMaterial", {
                        color: "#4169E1",
                        metalness: 0.7,
                        roughness: 0.3
                    }, void 0, false, {
                        fileName: "GameScene.js",
                        lineNumber: 34,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "GameScene.js",
                lineNumber: 32,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ _jsxDEV("mesh", {
                position: [
                    0,
                    -0.8,
                    0
                ],
                rotation: [
                    0,
                    0,
                    -Math.PI / 4
                ],
                children: [
                    /*#__PURE__*/ _jsxDEV("boxGeometry", {
                        args: [
                            0.1,
                            0.8,
                            0.3
                        ]
                    }, void 0, false, {
                        fileName: "GameScene.js",
                        lineNumber: 37,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ _jsxDEV("meshStandardMaterial", {
                        color: "#4169E1",
                        metalness: 0.7,
                        roughness: 0.3
                    }, void 0, false, {
                        fileName: "GameScene.js",
                        lineNumber: 38,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "GameScene.js",
                lineNumber: 36,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ _jsxDEV("pointLight", {
                position: [
                    0,
                    -1.2,
                    0
                ],
                color: "#00BFFF",
                intensity: 2,
                distance: 3
            }, void 0, false, {
                fileName: "GameScene.js",
                lineNumber: 42,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ _jsxDEV("mesh", {
                position: [
                    0,
                    -1.2,
                    0
                ],
                children: [
                    /*#__PURE__*/ _jsxDEV("sphereGeometry", {
                        args: [
                            0.2,
                            16,
                            16
                        ]
                    }, void 0, false, {
                        fileName: "GameScene.js",
                        lineNumber: 44,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ _jsxDEV("meshBasicMaterial", {
                        color: "#00BFFF"
                    }, void 0, false, {
                        fileName: "GameScene.js",
                        lineNumber: 45,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "GameScene.js",
                lineNumber: 43,
                columnNumber: 7
            }, this)
        ]
    }), void 0, true, {
        fileName: "GameScene.js",
        lineNumber: 18,
        columnNumber: 5
    }, this);
}
// Create simple coin models instead of using hooks in component functions
function XRPCoinModel(param) {
    var position = param.position, texture = param.texture;
    return /*#__PURE__*/ _jsxDEV("group", {
        position: position,
        children: [
            /*#__PURE__*/ _jsxDEV("mesh", {
                children: [
                    /*#__PURE__*/ _jsxDEV("planeGeometry", {
                        args: [
                            1.2,
                            1.2
                        ]
                    }, void 0, false, {
                        fileName: "GameScene.js",
                        lineNumber: 56,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ _jsxDEV("meshBasicMaterial", {
                        map: texture,
                        transparent: true,
                        alphaTest: 0.1,
                        side: THREE.DoubleSide
                    }, void 0, false, {
                        fileName: "GameScene.js",
                        lineNumber: 57,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "GameScene.js",
                lineNumber: 55,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ _jsxDEV("mesh", {
                position: [
                    0,
                    0,
                    -0.01
                ],
                rotation: [
                    0,
                    Math.PI,
                    0
                ],
                children: [
                    /*#__PURE__*/ _jsxDEV("planeGeometry", {
                        args: [
                            1.2,
                            1.2
                        ]
                    }, void 0, false, {
                        fileName: "GameScene.js",
                        lineNumber: 67,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ _jsxDEV("meshBasicMaterial", {
                        map: texture,
                        transparent: true,
                        alphaTest: 0.1,
                        side: THREE.DoubleSide
                    }, void 0, false, {
                        fileName: "GameScene.js",
                        lineNumber: 68,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "GameScene.js",
                lineNumber: 66,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ _jsxDEV("pointLight", {
                color: "#14F195",
                intensity: 1.5,
                distance: 3
            }, void 0, false, {
                fileName: "GameScene.js",
                lineNumber: 76,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ _jsxDEV("mesh", {
                position: [
                    0,
                    0,
                    0
                ],
                scale: 1.2,
                children: [
                    /*#__PURE__*/ _jsxDEV("sphereGeometry", {
                        args: [
                            0.6,
                            16,
                            16
                        ]
                    }, void 0, false, {
                        fileName: "GameScene.js",
                        lineNumber: 80,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ _jsxDEV("meshBasicMaterial", {
                        color: "#14F195",
                        transparent: true,
                        opacity: 0.2
                    }, void 0, false, {
                        fileName: "GameScene.js",
                        lineNumber: 81,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "GameScene.js",
                lineNumber: 79,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "GameScene.js",
        lineNumber: 53,
        columnNumber: 5
    }, this);
}
// XRP Coin component wrapper
function XRPCoin(param) {
    var position = param.position, texture = param.texture;
    var coinRef = useRef();
    var _useState = _sliced_to_array(useState(false), 2), collected = _useState[0], setCollected = _useState[1];
    useFrame(function(state) {
        if (coinRef.current && !collected) {
            // Rotate the coin
            coinRef.current.rotation.y += 0.02;
            // Gentle floating animation
            var time = state.clock.getElapsedTime();
            coinRef.current.position.y = position[1] + Math.sin(time * 2) * 0.1;
        }
    });
    return !collected ? /*#__PURE__*/ _jsxDEV("group", {
        ref: coinRef,
        position: position,
        children: /*#__PURE__*/ _jsxDEV(XRPCoinModel, {
            position: [
                0,
                0,
                0
            ],
            texture: texture
        }, void 0, false, {
            fileName: "GameScene.js",
            lineNumber: 104,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "GameScene.js",
        lineNumber: 103,
        columnNumber: 5
    }, this) : null;
}
// SOLANA Coin model without hooks
function SOLANACoinModel(param) {
    var position = param.position, _param_size = param.size, size = _param_size === void 0 ? 1 : _param_size, texture = param.texture, _param_rotationX = param.rotationX, rotationX = _param_rotationX === void 0 ? 0 : _param_rotationX, _param_rotationY = param.rotationY, rotationY = _param_rotationY === void 0 ? 0 : _param_rotationY, _param_rotationZ = param.rotationZ, rotationZ = _param_rotationZ === void 0 ? 0 : _param_rotationZ;
    return /*#__PURE__*/ _jsxDEV("group", {
        position: position,
        rotation: [
            rotationX,
            rotationY,
            rotationZ
        ],
        scale: [
            size,
            size,
            size
        ],
        children: [
            /*#__PURE__*/ _jsxDEV("mesh", {
                children: [
                    /*#__PURE__*/ _jsxDEV("planeGeometry", {
                        args: [
                            1.3,
                            1.3
                        ]
                    }, void 0, false, {
                        fileName: "GameScene.js",
                        lineNumber: 114,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ _jsxDEV("meshBasicMaterial", {
                        map: texture,
                        transparent: true,
                        alphaTest: 0.1,
                        side: THREE.DoubleSide
                    }, void 0, false, {
                        fileName: "GameScene.js",
                        lineNumber: 115,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "GameScene.js",
                lineNumber: 113,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ _jsxDEV("mesh", {
                position: [
                    0,
                    0,
                    -0.01
                ],
                rotation: [
                    0,
                    Math.PI,
                    0
                ],
                children: [
                    /*#__PURE__*/ _jsxDEV("planeGeometry", {
                        args: [
                            1.3,
                            1.3
                        ]
                    }, void 0, false, {
                        fileName: "GameScene.js",
                        lineNumber: 125,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ _jsxDEV("meshBasicMaterial", {
                        map: texture,
                        transparent: true,
                        alphaTest: 0.1,
                        side: THREE.DoubleSide
                    }, void 0, false, {
                        fileName: "GameScene.js",
                        lineNumber: 126,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "GameScene.js",
                lineNumber: 124,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ _jsxDEV("pointLight", {
                color: "#FF0000",
                intensity: 1.5,
                distance: 4
            }, void 0, false, {
                fileName: "GameScene.js",
                lineNumber: 134,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ _jsxDEV("mesh", {
                position: [
                    0,
                    0,
                    0
                ],
                scale: 1.3,
                children: [
                    /*#__PURE__*/ _jsxDEV("sphereGeometry", {
                        args: [
                            0.7,
                            16,
                            16
                        ]
                    }, void 0, false, {
                        fileName: "GameScene.js",
                        lineNumber: 138,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ _jsxDEV("meshBasicMaterial", {
                        color: "#FF0000",
                        transparent: true,
                        opacity: 0.2
                    }, void 0, false, {
                        fileName: "GameScene.js",
                        lineNumber: 139,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "GameScene.js",
                lineNumber: 137,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "GameScene.js",
        lineNumber: 111,
        columnNumber: 5
    }, this);
}
// SOLANA Coin enemy component wrapper
function SOLANACoin(param) {
    var position = param.position, _param_size = param.size, size = _param_size === void 0 ? 1 : _param_size, texture = param.texture;
    var coinRef = useRef();
    // Store rotation values in state rather than using useMemo
    var _useState = _sliced_to_array(useState([
        Math.random() * Math.PI,
        Math.random() * Math.PI,
        Math.random() * Math.PI
    ]), 1), initialRotation = _useState[0];
    // Store rotation speeds in state
    var _useState1 = _sliced_to_array(useState([
        (Math.random() - 0.5) * 0.03,
        (Math.random() - 0.5) * 0.03,
        (Math.random() - 0.5) * 0.03
    ]), 1), rotationSpeed = _useState1[0];
    // Track current rotation in a ref
    var currentRotation = useRef(initialRotation);
    useFrame(function() {
        if (coinRef.current) {
            // Update the rotation values
            currentRotation.current = [
                currentRotation.current[0] + rotationSpeed[0],
                currentRotation.current[1] + rotationSpeed[1],
                currentRotation.current[2] + rotationSpeed[2]
            ];
            // Apply rotation directly to the ref object
            coinRef.current.rotation.x = currentRotation.current[0];
            coinRef.current.rotation.y = currentRotation.current[1];
            coinRef.current.rotation.z = currentRotation.current[2];
        }
    });
    return /*#__PURE__*/ _jsxDEV("group", {
        ref: coinRef,
        position: position,
        scale: [
            1,
            1,
            1
        ],
        children: /*#__PURE__*/ _jsxDEV(SOLANACoinModel, {
            position: [
                0,
                0,
                0
            ],
            size: size,
            texture: texture
        }, void 0, false, {
            fileName: "GameScene.js",
            lineNumber: 182,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "GameScene.js",
        lineNumber: 181,
        columnNumber: 5
    }, this);
}
export function GameScene(param) {
    var _this = this;
    var endGame = param.endGame, incrementScore = param.incrementScore, updateHealth = param.updateHealth, health = param.health;
    // Load textures at the parent component level
    // Load textures with proper texture configuration
    var greenCoinTexture = useTexture("https://play.rosebud.ai/assets/Screen Shot 2025-04-01 at 10.55.03 PM.png?LLHb");
    var redCoinTexture = useTexture("https://play.rosebud.ai/assets/Screen Shot 2025-04-01 at 10.56.39 PM.png?cUFr");
    // Configure textures
    React.useEffect(function() {
        if (greenCoinTexture) {
            greenCoinTexture.encoding = THREE.sRGBEncoding;
            greenCoinTexture.needsUpdate = true;
        }
        if (redCoinTexture) {
            redCoinTexture.encoding = THREE.sRGBEncoding;
            redCoinTexture.needsUpdate = true;
        }
    }, [
        greenCoinTexture,
        redCoinTexture
    ]);
    var playerRef = useRef();
    var _useState = _sliced_to_array(useState({
        x: 0,
        y: 0
    }), 2), playerPosition = _useState[0], setPlayerPosition = _useState[1];
    var camera = useThree().camera;
    var _useState1 = _sliced_to_array(useState([]), 2), coins = _useState1[0], setCoins = _useState1[1];
    var _useState2 = _sliced_to_array(useState(0), 2), lastCoinTime = _useState2[0], setLastCoinTime = _useState2[1];
    var _useState3 = _sliced_to_array(useState([]), 2), solanaCoins = _useState3[0], setSOLANACoins = _useState3[1];
    var _useState4 = _sliced_to_array(useState(0), 2), lastSOLANATime = _useState4[0], setLastSOLANATime = _useState4[1];
    var _useState5 = _sliced_to_array(useState([]), 2), healEffects = _useState5[0], setHealEffects = _useState5[1];
    var gameOverRef = useRef(false);
    var _useState6 = _sliced_to_array(useState([]), 2), projectiles = _useState6[0], setProjectiles = _useState6[1];
    var _useState7 = _sliced_to_array(useState(0), 2), lastShotTime = _useState7[0], setLastShotTime = _useState7[1];
    // Use the health from props instead of local state
    var setHealth = function(newHealth) {
        updateHealth(newHealth);
    };
    // Set up player controls
    // State to track collision impact effects
    var _useState8 = _sliced_to_array(useState([]), 2), impactEffects = _useState8[0], setImpactEffects = _useState8[1];
    // Track touch controls state
    var _useState9 = _sliced_to_array(useState({
        touching: false,
        startX: 0,
        startY: 0,
        moveX: 0,
        moveY: 0
    }), 2), touchControls = _useState9[0], setTouchControls = _useState9[1];
    // Handle keyboard controls
    useEffect(function() {
        var handleKeyDown = function(e) {
            var speed = 0.4; // Increased from 0.2 to 0.4 for faster movement
            var newX = playerPosition.x;
            var newY = playerPosition.y;
            switch(e.key){
                case 'ArrowLeft':
                case 'a':
                    newX = Math.max(playerPosition.x - speed, -4);
                    break;
                case 'ArrowRight':
                case 'd':
                    newX = Math.min(playerPosition.x + speed, 4);
                    break;
                case 'ArrowUp':
                case 'w':
                    newY = Math.min(playerPosition.y + speed, 4);
                    break;
                case 'ArrowDown':
                case 's':
                    newY = Math.max(playerPosition.y - speed, -4);
                    break;
                case ' ':
                case 'Enter':
                    fireProjectile();
                    break;
                default:
                    return;
            }
            setPlayerPosition({
                x: newX,
                y: newY
            });
        };
        window.addEventListener('keydown', handleKeyDown);
        return function() {
            window.removeEventListener('keydown', handleKeyDown);
        };
    }, [
        playerPosition
    ]);
    // Handle touch controls
    useEffect(function() {
        var handleTouchStart = function(e) {
            var touch = e.touches[0];
            setTouchControls({
                touching: true,
                startX: touch.clientX,
                startY: touch.clientY,
                moveX: 0,
                moveY: 0
            });
        };
        // Double tap to fire
        var lastTap = 0;
        var handleDoubleTap = function(e) {
            var currentTime = new Date().getTime();
            var tapLength = currentTime - lastTap;
            if (tapLength < 300 && tapLength > 0) {
                fireProjectile();
                e.preventDefault();
            }
            lastTap = currentTime;
        };
        var handleTouchMove = function(e) {
            if (!touchControls.touching) return;
            var touch = e.touches[0];
            var moveX = touch.clientX - touchControls.startX;
            var moveY = touch.clientY - touchControls.startY;
            setTouchControls(_object_spread_props(_object_spread({}, touchControls), {
                moveX: moveX,
                moveY: moveY
            }));
            // Calculate new position based on touch movement
            var sensitivity = 0.01; // Adjust sensitivity as needed
            var newX = playerPosition.x + moveX * sensitivity;
            var newY = playerPosition.y - moveY * sensitivity; // Invert Y for intuitive controls
            // Clamp values to game boundaries
            newX = Math.max(Math.min(newX, 4), -4);
            newY = Math.max(Math.min(newY, 4), -4);
            setPlayerPosition({
                x: newX,
                y: newY
            });
        };
        var handleTouchEnd = function() {
            setTouchControls(_object_spread_props(_object_spread({}, touchControls), {
                touching: false
            }));
        };
        // Add touch event listeners
        window.addEventListener('touchstart', handleTouchStart);
        window.addEventListener('touchmove', handleTouchMove);
        window.addEventListener('touchend', handleTouchEnd);
        window.addEventListener('touchstart', handleDoubleTap);
        return function() {
            window.removeEventListener('touchstart', handleTouchStart);
            window.removeEventListener('touchmove', handleTouchMove);
            window.removeEventListener('touchend', handleTouchEnd);
            window.removeEventListener('touchstart', handleDoubleTap);
        };
    }, [
        touchControls,
        playerPosition
    ]);
    // Function to fire a projectile from the player's rocket
    var fireProjectile = function() {
        var currentTime = Date.now();
        // Cooldown of 500ms between shots
        if (currentTime - lastShotTime < 500) return;
        if (playerRef.current) {
            var playerPos = playerRef.current.position;
            // Create a new projectile
            var newProjectile = {
                id: Math.random().toString(36).substr(2, 9),
                position: [
                    playerPos.x,
                    playerPos.y,
                    playerPos.z - 0.5
                ],
                velocity: 0.4,
                createdAt: currentTime
            };
            // Add muzzle flash effect at the front of the rocket
            setImpactEffects(function(prev) {
                return _to_consumable_array(prev).concat([
                    {
                        id: Math.random().toString(36).substr(2, 9),
                        position: [
                            playerPos.x,
                            playerPos.y,
                            playerPos.z - 0.7
                        ],
                        time: Date.now() / 1000,
                        scale: 0.4,
                        color: "#00FFFF",
                        type: "muzzle"
                    }
                ]);
            });
            setProjectiles(function(prev) {
                return _to_consumable_array(prev).concat([
                    newProjectile
                ]);
            });
            setLastShotTime(currentTime);
        }
    };
    // Update player position
    // Spawn coins periodically
    useFrame(function(state) {
        // Move player
        if (playerRef.current) {
            playerRef.current.position.x = THREE.MathUtils.lerp(playerRef.current.position.x, playerPosition.x, 0.2 // Increased from 0.1 to 0.2 for faster response
            );
            playerRef.current.position.y = THREE.MathUtils.lerp(playerRef.current.position.y, playerPosition.y, 0.2 // Increased from 0.1 to 0.2 for faster response
            );
        }
        // Camera follows player with slight delay
        camera.position.x = THREE.MathUtils.lerp(camera.position.x, playerPosition.x * 0.5, 0.05);
        // Spawn coins periodically
        var time = state.clock.getElapsedTime();
        if (time - lastCoinTime > 1.5) {
            var newCoin = {
                id: Math.random().toString(36).substr(2, 9),
                position: [
                    Math.random() * 10 - 5,
                    Math.random() * 6 - 3,
                    -20 - Math.random() * 10 // z: -20 to -30 (ahead of player)
                ],
                collected: false
            };
            setCoins(function(prevCoins) {
                return _to_consumable_array(prevCoins).concat([
                    newCoin
                ]);
            });
            setLastCoinTime(time);
        }
        // Move coins towards player
        setCoins(function(prevCoins) {
            return prevCoins.map(function(coin) {
                // Move coin towards player
                var newZ = coin.position[2] + 0.1;
                // Check if coin is collected
                if (!coin.collected && playerRef.current) {
                    var playerPos = playerRef.current.position;
                    var distance = Math.sqrt(Math.pow(playerPos.x - coin.position[0], 2) + Math.pow(playerPos.y - coin.position[1], 2) + Math.pow(playerPos.z - newZ, 2));
                    if (distance < 1.5) {
                        // Each XRP coin is worth 10 points and heals the player
                        incrementScore(10);
                        // Heal the player when collecting XRP coins
                        var healAmount = 15; // Each XRP coin heals 15% health
                        var newHealth = Math.min(health + healAmount, 100); // Cap at 100
                        setHealth(newHealth);
                        // Show a visual healing effect
                        setHealEffects(function(prevEffects) {
                            return _to_consumable_array(prevEffects).concat([
                                {
                                    id: Math.random().toString(36).substr(2, 9),
                                    position: [
                                        playerRef.current.position.x,
                                        playerRef.current.position.y,
                                        playerRef.current.position.z
                                    ],
                                    time: state.clock.getElapsedTime(),
                                    scale: 1
                                }
                            ]);
                        });
                        return _object_spread_props(_object_spread({}, coin), {
                            collected: true
                        });
                    }
                }
                // Remove coins that passed the player
                if (newZ > 5) {
                    return null;
                }
                return _object_spread_props(_object_spread({}, coin), {
                    position: [
                        coin.position[0],
                        coin.position[1],
                        newZ
                    ]
                });
            }).filter(function(coin) {
                return coin !== null;
            });
        });
    });
    // Update projectiles and check for collisions
    useFrame(function() {
        // Move projectiles forward
        if (projectiles.length > 0) {
            setProjectiles(function(prevProjectiles) {
                return prevProjectiles.map(function(projectile) {
                    // Move projectile forward (negative z direction)
                    var newZ = projectile.position[2] - projectile.velocity;
                    // Check for collisions with SOLANA coins
                    var hitCoin = false;
                    setSOLANACoins(function(prevCoins) {
                        return prevCoins.map(function(coin) {
                            if (coin.hit) return coin;
                            // Calculate distance between projectile and coin
                            var distance = Math.sqrt(Math.pow(projectile.position[0] - coin.position[0], 2) + Math.pow(projectile.position[1] - coin.position[1], 2) + Math.pow(newZ - coin.position[2], 2));
                            // Collision radius depends on coin size
                            var collisionRadius = 1.0 * coin.size;
                            if (distance < collisionRadius) {
                                // Hit a SOLANA coin!
                                hitCoin = true;
                                incrementScore(5); // Award points for destroying enemy
                                // Create an explosion effect at the coin's position
                                setImpactEffects(function(prevEffects) {
                                    return _to_consumable_array(prevEffects).concat([
                                        {
                                            id: Math.random().toString(36).substr(2, 9),
                                            position: [
                                                coin.position[0],
                                                coin.position[1],
                                                coin.position[2]
                                            ],
                                            time: Date.now() / 1000,
                                            scale: 2.0 * coin.size,
                                            color: "#FFA500" // Orange explosion for destroyed coins
                                        }
                                    ]);
                                });
                                return _object_spread_props(_object_spread({}, coin), {
                                    hit: true
                                });
                            }
                            return coin;
                        });
                    });
                    // Remove projectiles that hit coins or went too far
                    if (hitCoin || newZ < -40) {
                        return null;
                    }
                    return _object_spread_props(_object_spread({}, projectile), {
                        position: [
                            projectile.position[0],
                            projectile.position[1],
                            newZ
                        ]
                    });
                }).filter(function(projectile) {
                    return projectile !== null;
                });
            });
        }
    });
    // Spawn and update SOLANA enemy coins
    useFrame(function(state) {
        // Check if game is already over
        if (gameOverRef.current) return;
        var time = state.clock.getElapsedTime();
        // Spawn new SOLANA coins
        if (time - lastSOLANATime > 2.5) {
            var newSOLANA = {
                id: Math.random().toString(36).substr(2, 9),
                position: [
                    Math.random() * 14 - 7,
                    Math.random() * 8 - 4,
                    -25 - Math.random() * 15 // z: -25 to -40 (further than coins)
                ],
                size: Math.random() * 0.5 + 0.8,
                hit: false
            };
            setSOLANACoins(function(prevCoins) {
                return _to_consumable_array(prevCoins).concat([
                    newSOLANA
                ]);
            });
            setLastSOLANATime(time);
        }
        // Move and check collisions for SOLANA coins
        setSOLANACoins(function(prevCoins) {
            return prevCoins.map(function(coin) {
                // Move SOLANA coin towards player (faster than XRP coins)
                var newZ = coin.position[2] + 0.15;
                // Check collision with player
                if (!coin.hit && playerRef.current && !gameOverRef.current) {
                    var playerPos = playerRef.current.position;
                    var distance = Math.sqrt(Math.pow(playerPos.x - coin.position[0], 2) + Math.pow(playerPos.y - coin.position[1], 2) + Math.pow(playerPos.z - newZ, 2));
                    // Collision radius depends on coin size
                    var collisionRadius = 1.2 * coin.size;
                    if (distance < collisionRadius) {
                        // Player hit a SOLANA coin!
                        var damage = Math.floor(30 * coin.size); // Damage based on coin size
                        var newHealth = health - damage;
                        // Add impact effect at collision position
                        setImpactEffects(function(prevEffects) {
                            return _to_consumable_array(prevEffects).concat([
                                {
                                    id: Math.random().toString(36).substr(2, 9),
                                    position: [
                                        coin.position[0],
                                        coin.position[1],
                                        coin.position[2]
                                    ],
                                    time: state.clock.getElapsedTime(),
                                    scale: 1.5 * coin.size,
                                    color: "#FF4500"
                                }
                            ]);
                        });
                        if (newHealth <= 0) {
                            setHealth(0);
                            gameOverRef.current = true;
                            setTimeout(function() {
                                endGame();
                            }, 1000); // Short delay before ending game
                        } else {
                            setHealth(newHealth);
                        }
                        return _object_spread_props(_object_spread({}, coin), {
                            hit: true
                        });
                    }
                }
                // Remove SOLANA coins that passed the player
                if (newZ > 5) {
                    return null;
                }
                return _object_spread_props(_object_spread({}, coin), {
                    position: [
                        coin.position[0],
                        coin.position[1],
                        newZ
                    ]
                });
            }).filter(function(coin) {
                return coin !== null;
            });
        });
    });
    // Update healing effects
    useFrame(function(state) {
        if (healEffects.length > 0) {
            setHealEffects(function(prevEffects) {
                return prevEffects.map(function(effect) {
                    var elapsed = state.clock.getElapsedTime() - effect.time;
                    // Effect lasts for 1 second
                    if (elapsed > 1) return null;
                    var scale = 1 + elapsed * 3; // Growing effect
                    var opacity = 1 - elapsed; // Fading effect
                    return _object_spread_props(_object_spread({}, effect), {
                        scale: scale,
                        opacity: opacity
                    });
                }).filter(function(effect) {
                    return effect !== null;
                });
            });
        }
    });
    // Update impact effects
    useFrame(function(state) {
        if (impactEffects.length > 0) {
            setImpactEffects(function(prevEffects) {
                return prevEffects.map(function(effect) {
                    var elapsed = state.clock.getElapsedTime() - effect.time;
                    // Different duration based on effect type
                    var duration = effect.type === "muzzle" ? 0.2 : 0.6;
                    // Effect lasts for duration seconds
                    if (elapsed > duration) return null;
                    // Different behavior for muzzle flash vs. explosion
                    if (effect.type === "muzzle") {
                        // Quick flash that fades rapidly
                        var opacity = 1 - elapsed / duration * (elapsed / duration);
                        // Random rotation for flashy effect
                        var rotation = elapsed * Math.PI * 8;
                        return _object_spread_props(_object_spread({}, effect), {
                            opacity: opacity,
                            rotation: rotation,
                            // Slightly growing effect
                            scale: effect.scale * (1 + elapsed)
                        });
                    } else {
                        // Growing explosion effect
                        var scale = effect.scale * (1 + elapsed);
                        // Fading effect
                        var opacity1 = 1 - elapsed / duration;
                        return _object_spread_props(_object_spread({}, effect), {
                            scale: scale,
                            opacity: opacity1
                        });
                    }
                }).filter(function(effect) {
                    return effect !== null;
                });
            });
        }
    });
    return /*#__PURE__*/ _jsxDEV(_Fragment, {
        children: [
            /*#__PURE__*/ _jsxDEV("color", {
                attach: "background",
                args: [
                    '#000'
                ]
            }, void 0, false, {
                fileName: "GameScene.js",
                lineNumber: 685,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ _jsxDEV("ambientLight", {
                intensity: 0.3
            }, void 0, false, {
                fileName: "GameScene.js",
                lineNumber: 686,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ _jsxDEV("directionalLight", {
                position: [
                    10,
                    10,
                    5
                ],
                intensity: 1.2
            }, void 0, false, {
                fileName: "GameScene.js",
                lineNumber: 687,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ _jsxDEV(Stars, {
                radius: 100,
                depth: 50,
                count: 5000,
                factor: 4,
                saturation: 0,
                fade: true,
                speed: 1
            }, void 0, false, {
                fileName: "GameScene.js",
                lineNumber: 688,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ _jsxDEV("group", {
                ref: playerRef,
                position: [
                    0,
                    0,
                    0
                ],
                children: /*#__PURE__*/ _jsxDEV(Rocket, {
                    scale: 0.7
                }, void 0, false, {
                    fileName: "GameScene.js",
                    lineNumber: 692,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "GameScene.js",
                lineNumber: 691,
                columnNumber: 7
            }, this),
            projectiles.map(function(projectile) {
                return /*#__PURE__*/ _jsxDEV("mesh", {
                    position: projectile.position,
                    children: [
                        /*#__PURE__*/ _jsxDEV("sphereGeometry", {
                            args: [
                                0.15,
                                8,
                                8
                            ]
                        }, void 0, false, {
                            fileName: "GameScene.js",
                            lineNumber: 701,
                            columnNumber: 11
                        }, _this),
                        /*#__PURE__*/ _jsxDEV("meshBasicMaterial", {
                            color: "#00FFFF"
                        }, void 0, false, {
                            fileName: "GameScene.js",
                            lineNumber: 702,
                            columnNumber: 11
                        }, _this),
                        /*#__PURE__*/ _jsxDEV("pointLight", {
                            color: "#00FFFF",
                            intensity: 2,
                            distance: 2
                        }, void 0, false, {
                            fileName: "GameScene.js",
                            lineNumber: 703,
                            columnNumber: 11
                        }, _this)
                    ]
                }, projectile.id, true, {
                    fileName: "GameScene.js",
                    lineNumber: 697,
                    columnNumber: 9
                }, _this);
            }),
            coins.map(function(coin) {
                return !coin.collected && /*#__PURE__*/ _jsxDEV(XRPCoin, {
                    position: coin.position,
                    texture: greenCoinTexture
                }, coin.id, false, {
                    fileName: "GameScene.js",
                    lineNumber: 710,
                    columnNumber: 11
                }, _this);
            }),
            /*#__PURE__*/ _jsxDEV("mesh", {
                rotation: [
                    -Math.PI / 2,
                    0,
                    0
                ],
                position: [
                    0,
                    -10,
                    0
                ],
                visible: false,
                children: [
                    /*#__PURE__*/ _jsxDEV("planeGeometry", {
                        args: [
                            100,
                            100
                        ]
                    }, void 0, false, {
                        fileName: "GameScene.js",
                        lineNumber: 720,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ _jsxDEV("meshStandardMaterial", {
                        color: "#000022"
                    }, void 0, false, {
                        fileName: "GameScene.js",
                        lineNumber: 721,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "GameScene.js",
                lineNumber: 719,
                columnNumber: 7
            }, this),
            solanaCoins.map(function(coin) {
                return !coin.hit && /*#__PURE__*/ _jsxDEV(SOLANACoin, {
                    position: coin.position,
                    size: coin.size,
                    texture: redCoinTexture
                }, coin.id, false, {
                    fileName: "GameScene.js",
                    lineNumber: 727,
                    columnNumber: 11
                }, _this);
            }),
            healEffects.map(function(effect) {
                return /*#__PURE__*/ _jsxDEV("group", {
                    position: effect.position,
                    children: [
                        /*#__PURE__*/ _jsxDEV("mesh", {
                            scale: [
                                effect.scale,
                                effect.scale,
                                effect.scale
                            ],
                            children: [
                                /*#__PURE__*/ _jsxDEV("sphereGeometry", {
                                    args: [
                                        0.5,
                                        16,
                                        16
                                    ]
                                }, void 0, false, {
                                    fileName: "GameScene.js",
                                    lineNumber: 740,
                                    columnNumber: 13
                                }, _this),
                                /*#__PURE__*/ _jsxDEV("meshBasicMaterial", {
                                    color: "#00BFFF",
                                    transparent: true,
                                    opacity: effect.opacity
                                }, void 0, false, {
                                    fileName: "GameScene.js",
                                    lineNumber: 741,
                                    columnNumber: 13
                                }, _this)
                            ]
                        }, void 0, true, {
                            fileName: "GameScene.js",
                            lineNumber: 739,
                            columnNumber: 11
                        }, _this),
                        /*#__PURE__*/ _jsxDEV(Text, {
                            position: [
                                0,
                                0,
                                0
                            ],
                            scale: [
                                effect.scale * 0.5,
                                effect.scale * 0.5,
                                effect.scale * 0.5
                            ],
                            color: "#FFFFFF",
                            fontSize: 0.5,
                            anchorX: "center",
                            anchorY: "middle",
                            opacity: effect.opacity,
                            children: "+15 HP"
                        }, void 0, false, {
                            fileName: "GameScene.js",
                            lineNumber: 743,
                            columnNumber: 11
                        }, _this)
                    ]
                }, effect.id, true, {
                    fileName: "GameScene.js",
                    lineNumber: 738,
                    columnNumber: 9
                }, _this);
            }),
            impactEffects.map(function(effect) {
                return /*#__PURE__*/ _jsxDEV("group", {
                    position: effect.position,
                    children: effect.type === "muzzle" ? // Muzzle flash effect
                    /*#__PURE__*/ _jsxDEV(_Fragment, {
                        children: [
                            /*#__PURE__*/ _jsxDEV("mesh", {
                                scale: [
                                    effect.scale * 2,
                                    effect.scale * 2,
                                    effect.scale * 0.1
                                ],
                                children: [
                                    /*#__PURE__*/ _jsxDEV("planeGeometry", {}, void 0, false, {
                                        fileName: "GameScene.js",
                                        lineNumber: 765,
                                        columnNumber: 17
                                    }, _this),
                                    /*#__PURE__*/ _jsxDEV("meshBasicMaterial", {
                                        color: effect.color,
                                        transparent: true,
                                        opacity: (effect.opacity || 0.8) * 0.4
                                    }, void 0, false, {
                                        fileName: "GameScene.js",
                                        lineNumber: 766,
                                        columnNumber: 17
                                    }, _this)
                                ]
                            }, void 0, true, {
                                fileName: "GameScene.js",
                                lineNumber: 764,
                                columnNumber: 15
                            }, _this),
                            /*#__PURE__*/ _jsxDEV("mesh", {
                                scale: [
                                    effect.scale,
                                    effect.scale,
                                    effect.scale * 0.1
                                ],
                                rotation: [
                                    0,
                                    0,
                                    Math.random() * Math.PI
                                ],
                                children: [
                                    /*#__PURE__*/ _jsxDEV("planeGeometry", {}, void 0, false, {
                                        fileName: "GameScene.js",
                                        lineNumber: 771,
                                        columnNumber: 17
                                    }, _this),
                                    /*#__PURE__*/ _jsxDEV("meshBasicMaterial", {
                                        color: "#FFFFFF",
                                        transparent: true,
                                        opacity: effect.opacity || 0.9
                                    }, void 0, false, {
                                        fileName: "GameScene.js",
                                        lineNumber: 772,
                                        columnNumber: 17
                                    }, _this)
                                ]
                            }, void 0, true, {
                                fileName: "GameScene.js",
                                lineNumber: 770,
                                columnNumber: 15
                            }, _this),
                            /*#__PURE__*/ _jsxDEV("pointLight", {
                                color: effect.color,
                                intensity: 5,
                                distance: 3,
                                decay: 2
                            }, void 0, false, {
                                fileName: "GameScene.js",
                                lineNumber: 776,
                                columnNumber: 15
                            }, _this)
                        ]
                    }, void 0, true) : // Explosion effect for collisions
                    /*#__PURE__*/ _jsxDEV(_Fragment, {
                        children: [
                            /*#__PURE__*/ _jsxDEV("mesh", {
                                scale: [
                                    effect.scale,
                                    effect.scale,
                                    effect.scale
                                ],
                                children: [
                                    /*#__PURE__*/ _jsxDEV("sphereGeometry", {
                                        args: [
                                            0.7,
                                            16,
                                            16
                                        ]
                                    }, void 0, false, {
                                        fileName: "GameScene.js",
                                        lineNumber: 783,
                                        columnNumber: 17
                                    }, _this),
                                    /*#__PURE__*/ _jsxDEV("meshBasicMaterial", {
                                        color: effect.color,
                                        transparent: true,
                                        opacity: effect.opacity * 0.7
                                    }, void 0, false, {
                                        fileName: "GameScene.js",
                                        lineNumber: 784,
                                        columnNumber: 17
                                    }, _this)
                                ]
                            }, void 0, true, {
                                fileName: "GameScene.js",
                                lineNumber: 782,
                                columnNumber: 15
                            }, _this),
                            /*#__PURE__*/ _jsxDEV("mesh", {
                                scale: [
                                    effect.scale * 0.6,
                                    effect.scale * 0.6,
                                    effect.scale * 0.6
                                ],
                                children: [
                                    /*#__PURE__*/ _jsxDEV("sphereGeometry", {
                                        args: [
                                            0.5,
                                            16,
                                            16
                                        ]
                                    }, void 0, false, {
                                        fileName: "GameScene.js",
                                        lineNumber: 789,
                                        columnNumber: 17
                                    }, _this),
                                    /*#__PURE__*/ _jsxDEV("meshBasicMaterial", {
                                        color: "#FFFFFF",
                                        transparent: true,
                                        opacity: effect.opacity
                                    }, void 0, false, {
                                        fileName: "GameScene.js",
                                        lineNumber: 790,
                                        columnNumber: 17
                                    }, _this)
                                ]
                            }, void 0, true, {
                                fileName: "GameScene.js",
                                lineNumber: 788,
                                columnNumber: 15
                            }, _this),
                            /*#__PURE__*/ _jsxDEV(Text, {
                                position: [
                                    0,
                                    0,
                                    0
                                ],
                                scale: [
                                    effect.scale * 0.6,
                                    effect.scale * 0.6,
                                    effect.scale * 0.6
                                ],
                                color: "#FF0000",
                                fontSize: 0.6,
                                anchorX: "center",
                                anchorY: "middle",
                                opacity: effect.opacity,
                                font: "https://fonts.gstatic.com/s/roboto/v30/KFOmCnqEu92Fr1Me5Q.ttf",
                                children: "-30"
                            }, void 0, false, {
                                fileName: "GameScene.js",
                                lineNumber: 794,
                                columnNumber: 15
                            }, _this)
                        ]
                    }, void 0, true)
                }, effect.id, false, {
                    fileName: "GameScene.js",
                    lineNumber: 759,
                    columnNumber: 9
                }, _this);
            })
        ]
    }, void 0, true);
}
