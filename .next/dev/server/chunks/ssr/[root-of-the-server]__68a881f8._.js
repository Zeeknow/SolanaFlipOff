module.exports = [
"[externals]/process [external] (process, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("process", () => require("process"));

module.exports = mod;
}),
"[externals]/path [external] (path, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("path", () => require("path"));

module.exports = mod;
}),
"[project]/app/idl/solana_flip_off.json (json)", ((__turbopack_context__) => {

__turbopack_context__.v({"address":"5hfBCMBJLM9t9UfBqQcwcN4R15nLuLFC8GtBQEN6JRcb","metadata":{"name":"solana_flip_off","version":"0.1.0","spec":"0.1.0","description":"Created with Anchor"},"instructions":[{"name":"claim_timeout_win","discriminator":[175,234,101,151,53,30,177,137],"accounts":[{"name":"game_account","writable":true,"pda":{"seeds":[{"kind":"const","value":[103,97,109,101]},{"kind":"account","path":"game_account.player_one","account":"Game"},{"kind":"account","path":"game_account.game_id","account":"Game"}]}},{"name":"signer","writable":true,"signer":true},{"name":"treasury_wallet_pubkey","writable":true,"address":"FMyx18iJ4jkMcbK4uFZHdcZLkkJVzfFaP798wsiErFuA"},{"name":"system_program","address":"11111111111111111111111111111111"},{"name":"clock","address":"SysvarC1ock11111111111111111111111111111111"}],"args":[]},{"name":"create_game","discriminator":[124,69,75,66,184,220,72,206],"accounts":[{"name":"player_one","writable":true,"signer":true},{"name":"game_account","writable":true,"pda":{"seeds":[{"kind":"const","value":[103,97,109,101]},{"kind":"account","path":"player_one"},{"kind":"arg","path":"game_id"}]}},{"name":"system_program","address":"11111111111111111111111111111111"}],"args":[{"name":"game_id","type":"u64"},{"name":"stake_amount_lamports","type":"u64"}]},{"name":"join_game","discriminator":[107,112,18,38,56,173,60,128],"accounts":[{"name":"player_two","writable":true,"signer":true},{"name":"game_account","writable":true},{"name":"system_program","address":"11111111111111111111111111111111"},{"name":"clock","address":"SysvarC1ock11111111111111111111111111111111"}],"args":[]},{"name":"play_turn","discriminator":[116,200,44,67,23,228,209,99],"accounts":[{"name":"signer","signer":true},{"name":"game_account","writable":true}],"args":[]},{"name":"resolve_game","discriminator":[25,119,183,229,196,69,169,79],"accounts":[{"name":"game_account","writable":true,"pda":{"seeds":[{"kind":"const","value":[103,97,109,101]},{"kind":"account","path":"game_account.player_one","account":"Game"},{"kind":"account","path":"game_account.game_id","account":"Game"}]}},{"name":"winner_pubkey","writable":true},{"name":"loser_pubkey"},{"name":"treasury_wallet_pubkey","writable":true,"address":"FMyx18iJ4jkMcbK4uFZHdcZLkkJVzfFaP798wsiErFuA"},{"name":"system_program","address":"11111111111111111111111111111111"}],"args":[]}],"accounts":[{"name":"Game","discriminator":[27,90,166,125,74,100,121,18]}],"errors":[{"code":6000,"name":"InvalidGameState","msg":"Invalid game state."},{"code":6001,"name":"AlreadyJoined","msg":"Player already joined."},{"code":6002,"name":"Unauthorized","msg":"Unauthorized."},{"code":6003,"name":"InsufficientStake","msg":"Insufficient stake."},{"code":6004,"name":"TimeoutNotReached","msg":"Timeout not reached yet."},{"code":6005,"name":"NotYourTurnToClaim","msg":"You cannot claim timeout on your own turn."}],"types":[{"name":"Game","type":{"kind":"struct","fields":[{"name":"game_id","type":"u64"},{"name":"player_one","type":"pubkey"},{"name":"player_two","type":"pubkey"},{"name":"stake_amount","type":"u64"},{"name":"player_one_score","type":"u8"},{"name":"player_two_score","type":"u8"},{"name":"player_one_turns","type":"u8"},{"name":"player_two_turns","type":"u8"},{"name":"game_state","type":{"defined":{"name":"GameState"}}},{"name":"active_player","type":"pubkey"},{"name":"game_start_time","type":"i64"}]}},{"name":"GameState","type":{"kind":"enum","variants":[{"name":"WaitingForPlayer"},{"name":"Active"},{"name":"LastChance"},{"name":"SuddenDeath"},{"name":"Finished"}]}}]});}),
"[project]/app/hooks/useAnchorProgram.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useAnchorProgram",
    ()=>useAnchorProgram
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$solana$2f$wallet$2d$adapter$2d$react$2f$lib$2f$esm$2f$useWallet$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@solana/wallet-adapter-react/lib/esm/useWallet.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$solana$2f$wallet$2d$adapter$2d$react$2f$lib$2f$esm$2f$useConnection$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@solana/wallet-adapter-react/lib/esm/useConnection.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$coral$2d$xyz$2f$anchor$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/@coral-xyz/anchor/dist/esm/index.js [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$coral$2d$xyz$2f$anchor$2f$dist$2f$esm$2f$provider$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@coral-xyz/anchor/dist/esm/provider.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$coral$2d$xyz$2f$anchor$2f$dist$2f$esm$2f$program$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@coral-xyz/anchor/dist/esm/program/index.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$solana$2f$web3$2e$js$2f$lib$2f$index$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@solana/web3.js/lib/index.esm.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
// Import the JSON
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$idl$2f$solana_flip_off$2e$json__$28$json$29$__ = __turbopack_context__.i("[project]/app/idl/solana_flip_off.json (json)");
;
;
;
;
;
// YOUR PROGRAM ID
const PROGRAM_ID = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$solana$2f$web3$2e$js$2f$lib$2f$index$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PublicKey"]("5hfBCMBJLM9t9UfBqQcwcN4R15nLuLFC8GtBQEN6JRcb");
function useAnchorProgram() {
    const { connection } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$solana$2f$wallet$2d$adapter$2d$react$2f$lib$2f$esm$2f$useConnection$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useConnection"])();
    // FIX: Get the signer functions directly, not just the 'wallet' object
    const { publicKey, signTransaction, signAllTransactions } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$solana$2f$wallet$2d$adapter$2d$react$2f$lib$2f$esm$2f$useWallet$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useWallet"])();
    const provider = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>{
        if (!connection || !publicKey || !signTransaction || !signAllTransactions) {
            return null;
        }
        // FIX: Create a custom object that looks exactly like what Anchor wants
        const anchorWallet = {
            publicKey: publicKey,
            signTransaction: signTransaction,
            signAllTransactions: signAllTransactions
        };
        const provider = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$coral$2d$xyz$2f$anchor$2f$dist$2f$esm$2f$provider$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AnchorProvider"](connection, anchorWallet, {
            preflightCommitment: "processed"
        });
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$coral$2d$xyz$2f$anchor$2f$dist$2f$esm$2f$provider$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["setProvider"])(provider);
        return provider;
    }, [
        connection,
        publicKey,
        signTransaction,
        signAllTransactions
    ]);
    const program = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>{
        if (!provider) return null;
        // Safe Unwrap of IDL
        const idl = __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$idl$2f$solana_flip_off$2e$json__$28$json$29$__["default"].default ? __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$idl$2f$solana_flip_off$2e$json__$28$json$29$__["default"].default : __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$idl$2f$solana_flip_off$2e$json__$28$json$29$__["default"];
        if (!idl) {
            console.error("IDL not found!");
            return null;
        }
        return new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$coral$2d$xyz$2f$anchor$2f$dist$2f$esm$2f$program$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Program"](idl, provider);
    }, [
        provider
    ]);
    return program;
}
}),
"[project]/app/components/HypeMessage.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/styled-jsx/style.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
"use client";
;
;
;
const HypeMessage = ({ message })=>{
    const [visible, setVisible] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(true);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const timeout = setTimeout(()=>setVisible(false), 1800); // Duration of animation
        return ()=>clearTimeout(timeout);
    }, []);
    if (!visible) return null;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                role: "alert",
                "aria-live": "assertive",
                className: "jsx-ee70cc158be6b2f0" + " " + "hype-message",
                children: message
            }, void 0, false, {
                fileName: "[project]/app/components/HypeMessage.tsx",
                lineNumber: 20,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                id: "ee70cc158be6b2f0",
                children: ".hype-message.jsx-ee70cc158be6b2f0{color:#39ff14;text-align:center;text-shadow:0 0 5px #39ff14,0 0 10px #39ff14,0 0 20px #39ff14,0 0 40px #39ff14;-webkit-user-select:none;user-select:none;margin:0 auto;font-size:6rem;font-weight:700;animation:1.8s forwards hypeAnim;display:inline-block}@keyframes hypeAnim{0%{opacity:0;transform:scale(.5)}20%{opacity:1;transform:scale(1)}80%{opacity:1;transform:scale(1)}to{opacity:0;transform:scale(.5)}}"
            }, void 0, false, void 0, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true);
};
const __TURBOPACK__default__export__ = HypeMessage;
}),
"[project]/app/components/ConfirmStakeModal.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ConfirmStakeModal",
    ()=>ConfirmStakeModal,
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$HypeMessage$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/components/HypeMessage.tsx [app-ssr] (ecmascript)");
"use client";
;
;
;
const ConfirmStakeModal = ({ isOpen, stakeAmount, onCancel, onConfirm })=>{
    const treasuryFee = stakeAmount * 0.1;
    const winnerPayout = stakeAmount * 0.9;
    const totalWinnerPayout = stakeAmount + winnerPayout;
    const [isSigning, setIsSigning] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [showHype, setShowHype] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    // Reset state when modal opens/closes
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (isOpen) {
            setIsSigning(false);
            setShowHype(false);
        }
    }, [
        isOpen
    ]);
    const handleConfirm = async ()=>{
        setIsSigning(true); // 1. Show Loading
        try {
            await onConfirm(); // 2. Wait for Wallet Signature
            setShowHype(true); // 3. ONLY show Hype if success
        // Close is handled by parent after a delay
        } catch (error) {
            console.error("Transaction failed", error);
            setIsSigning(false); // Reset if failed
        }
    };
    if (!isOpen) return null;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        style: {
            position: "fixed",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: "rgba(0,0,0,0.8)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            zIndex: 1000
        },
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            style: {
                backgroundColor: "#1a1a1a",
                color: "#fff",
                borderRadius: 16,
                padding: 32,
                maxWidth: 450,
                width: "90%",
                border: "1px solid #333",
                boxShadow: "0 4px 20px rgba(0,255,0,0.1)",
                textAlign: "center",
                position: "relative"
            },
            children: showHype ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$HypeMessage$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                message: "STAKED! 🔥"
            }, void 0, false, {
                fileName: "[project]/app/components/ConfirmStakeModal.tsx",
                lineNumber: 72,
                columnNumber: 11
            }, ("TURBOPACK compile-time value", void 0)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        style: {
                            marginTop: 0,
                            color: "#39ff14"
                        },
                        children: "Confirm Stake"
                    }, void 0, false, {
                        fileName: "[project]/app/components/ConfirmStakeModal.tsx",
                        lineNumber: 75,
                        columnNumber: 13
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            margin: "20px 0",
                            padding: "15px",
                            backgroundColor: "#2a2a2a",
                            borderRadius: 8
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    display: "flex",
                                    justifyContent: "space-between",
                                    marginBottom: 8
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        style: {
                                            color: "#888"
                                        },
                                        children: "Stake:"
                                    }, void 0, false, {
                                        fileName: "[project]/app/components/ConfirmStakeModal.tsx",
                                        lineNumber: 79,
                                        columnNumber: 17
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        style: {
                                            fontWeight: "bold"
                                        },
                                        children: [
                                            stakeAmount.toFixed(2),
                                            " SOL"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/components/ConfirmStakeModal.tsx",
                                        lineNumber: 80,
                                        columnNumber: 17
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/components/ConfirmStakeModal.tsx",
                                lineNumber: 78,
                                columnNumber: 15
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    display: "flex",
                                    justifyContent: "space-between",
                                    marginBottom: 8
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        style: {
                                            color: "#888"
                                        },
                                        children: "Fee (10%):"
                                    }, void 0, false, {
                                        fileName: "[project]/app/components/ConfirmStakeModal.tsx",
                                        lineNumber: 83,
                                        columnNumber: 17
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: [
                                            treasuryFee.toFixed(2),
                                            " SOL"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/components/ConfirmStakeModal.tsx",
                                        lineNumber: 84,
                                        columnNumber: 17
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/components/ConfirmStakeModal.tsx",
                                lineNumber: 82,
                                columnNumber: 15
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    borderTop: "1px solid #444",
                                    paddingTop: 8,
                                    display: "flex",
                                    justifyContent: "space-between",
                                    color: "#39ff14"
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: "Potential Win:"
                                    }, void 0, false, {
                                        fileName: "[project]/app/components/ConfirmStakeModal.tsx",
                                        lineNumber: 87,
                                        columnNumber: 17
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        style: {
                                            fontWeight: "bold"
                                        },
                                        children: [
                                            totalWinnerPayout.toFixed(2),
                                            " SOL"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/components/ConfirmStakeModal.tsx",
                                        lineNumber: 88,
                                        columnNumber: 17
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/components/ConfirmStakeModal.tsx",
                                lineNumber: 86,
                                columnNumber: 15
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/components/ConfirmStakeModal.tsx",
                        lineNumber: 77,
                        columnNumber: 13
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            display: "flex",
                            gap: 16,
                            justifyContent: "center"
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: onCancel,
                                disabled: isSigning,
                                style: {
                                    flex: 1,
                                    padding: "12px",
                                    borderRadius: 8,
                                    border: "1px solid #444",
                                    backgroundColor: "transparent",
                                    color: "#fff",
                                    cursor: isSigning ? "not-allowed" : "pointer"
                                },
                                children: "Cancel"
                            }, void 0, false, {
                                fileName: "[project]/app/components/ConfirmStakeModal.tsx",
                                lineNumber: 93,
                                columnNumber: 15
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: handleConfirm,
                                disabled: isSigning,
                                style: {
                                    flex: 1,
                                    padding: "12px",
                                    borderRadius: 8,
                                    border: "none",
                                    backgroundColor: isSigning ? "#555" : "#39ff14",
                                    color: isSigning ? "#ccc" : "#000",
                                    fontWeight: "bold",
                                    cursor: isSigning ? "not-allowed" : "pointer"
                                },
                                children: isSigning ? "Signing..." : "Confirm & Stake"
                            }, void 0, false, {
                                fileName: "[project]/app/components/ConfirmStakeModal.tsx",
                                lineNumber: 108,
                                columnNumber: 15
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/components/ConfirmStakeModal.tsx",
                        lineNumber: 92,
                        columnNumber: 13
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true)
        }, void 0, false, {
            fileName: "[project]/app/components/ConfirmStakeModal.tsx",
            lineNumber: 57,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/app/components/ConfirmStakeModal.tsx",
        lineNumber: 48,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
const __TURBOPACK__default__export__ = ConfirmStakeModal;
}),
"[project]/app/components/Lobby.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Lobby
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$hooks$2f$useAnchorProgram$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/hooks/useAnchorProgram.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$solana$2f$wallet$2d$adapter$2d$react$2f$lib$2f$esm$2f$useWallet$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@solana/wallet-adapter-react/lib/esm/useWallet.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$solana$2f$web3$2e$js$2f$lib$2f$index$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@solana/web3.js/lib/index.esm.js [app-ssr] (ecmascript)");
// @ts-ignore
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$coral$2d$xyz$2f$anchor$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/@coral-xyz/anchor/dist/esm/index.js [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$bn$2e$js$2f$lib$2f$bn$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__BN$3e$__ = __turbopack_context__.i("[project]/node_modules/bn.js/lib/bn.js [app-ssr] (ecmascript) <export default as BN>");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$ConfirmStakeModal$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/components/ConfirmStakeModal.tsx [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
;
;
function Lobby({ setActiveGame }) {
    const program = (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$hooks$2f$useAnchorProgram$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useAnchorProgram"])();
    const { publicKey } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$solana$2f$wallet$2d$adapter$2d$react$2f$lib$2f$esm$2f$useWallet$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useWallet"])();
    const [games, setGames] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const [isLoading, setIsLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [stakeInput, setStakeInput] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("0.1");
    const [isModalOpen, setIsModalOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    // --- 1. FETCH GAMES FROM BLOCKCHAIN ---
    const fetchGames = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(async ()=>{
        if (!program) return;
        try {
            setIsLoading(true);
            // @ts-ignore
            const allGames = await program.account.game.all();
            // Filter: Only show games waiting for players
            const waitingGames = allGames.filter((g)=>JSON.stringify(g.account.gameState) === JSON.stringify({
                    waitingForPlayer: {}
                }));
            // Sort: Newest first
            waitingGames.sort((a, b)=>b.account.gameStartTime - a.account.gameStartTime);
            setGames(waitingGames);
        } catch (err) {
            console.error("Error fetching games:", err);
        } finally{
            setIsLoading(false);
        }
    }, [
        program
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        fetchGames();
        // Optional: Auto-refresh lobby every 5 seconds
        const interval = setInterval(fetchGames, 5000);
        return ()=>clearInterval(interval);
    }, [
        fetchGames
    ]);
    // --- 2. CREATE GAME (ON-CHAIN) ---
    const handleCreateGame = async ()=>{
        if (!program || !publicKey) return;
        try {
            const stakeLamports = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$bn$2e$js$2f$lib$2f$bn$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__BN$3e$__["BN"](parseFloat(stakeInput) * __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$solana$2f$web3$2e$js$2f$lib$2f$index$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["LAMPORTS_PER_SOL"]);
            // Generate Unique ID (Timestamp) to prevent address collision
            const gameId = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$bn$2e$js$2f$lib$2f$bn$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__BN$3e$__["BN"](Date.now());
            // Derive PDA
            const [gamePda] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$solana$2f$web3$2e$js$2f$lib$2f$index$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PublicKey"].findProgramAddressSync([
                Buffer.from("game"),
                publicKey.toBuffer(),
                gameId.toArrayLike(Buffer, "le", 8)
            ], program.programId);
            // Send Transaction
            const tx = await program.methods.createGame(gameId, stakeLamports).accounts({
                playerOne: publicKey,
                gameAccount: gamePda,
                systemProgram: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$solana$2f$web3$2e$js$2f$lib$2f$index$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SystemProgram"].programId
            }).rpc();
            console.log("Game Created!", tx);
            // Switch to Arena
            setTimeout(()=>{
                setIsModalOpen(false);
                setActiveGame(gamePda);
            }, 1000);
        } catch (error) {
            console.error("Create failed:", error);
        // Don't throw here, so the modal stays open if it fails (user can retry)
        }
    };
    // --- 3. JOIN GAME (ON-CHAIN) ---
    const handleJoinGame = async (gamePublicKey)=>{
        if (!program || !publicKey) return;
        try {
            const tx = await program.methods.joinGame().accounts({
                playerTwo: publicKey,
                gameAccount: gamePublicKey,
                systemProgram: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$solana$2f$web3$2e$js$2f$lib$2f$index$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SystemProgram"].programId
            }).rpc();
            console.log("Joined Game!", tx);
            setActiveGame(gamePublicKey);
        } catch (error) {
            console.error("Join failed:", error);
            alert("Failed to join game. Check console.");
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        style: {
            padding: 20,
            maxWidth: 800,
            margin: "0 auto",
            color: "white"
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    marginBottom: 30
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                        style: {
                            margin: 0,
                            color: "#39ff14",
                            textShadow: "0 0 10px rgba(57, 255, 20, 0.5)"
                        },
                        children: "FLIP-OFF LOBBY"
                    }, void 0, false, {
                        fileName: "[project]/app/components/Lobby.tsx",
                        lineNumber: 121,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: fetchGames,
                        style: {
                            background: "none",
                            border: "1px solid #333",
                            color: "#888",
                            padding: "5px 10px",
                            borderRadius: 4,
                            cursor: "pointer"
                        },
                        children: "Refresh ↻"
                    }, void 0, false, {
                        fileName: "[project]/app/components/Lobby.tsx",
                        lineNumber: 122,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/components/Lobby.tsx",
                lineNumber: 120,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    display: "grid",
                    gap: 16,
                    marginBottom: 100
                },
                children: [
                    !isLoading && games.length === 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            textAlign: "center",
                            padding: 60,
                            border: "2px dashed #333",
                            borderRadius: 12,
                            color: "#666"
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                children: "No active games found."
                            }, void 0, false, {
                                fileName: "[project]/app/components/Lobby.tsx",
                                lineNumber: 131,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                children: "Create one to start!"
                            }, void 0, false, {
                                fileName: "[project]/app/components/Lobby.tsx",
                                lineNumber: 132,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/components/Lobby.tsx",
                        lineNumber: 130,
                        columnNumber: 11
                    }, this),
                    games.map((g)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            style: {
                                background: "#111",
                                padding: "20px",
                                borderRadius: 12,
                                border: "1px solid #333",
                                display: "flex",
                                justifyContent: "space-between",
                                alignItems: "center"
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            style: {
                                                color: "#666",
                                                fontSize: 12,
                                                marginBottom: 4
                                            },
                                            children: "HOST"
                                        }, void 0, false, {
                                            fileName: "[project]/app/components/Lobby.tsx",
                                            lineNumber: 139,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            style: {
                                                fontFamily: "monospace",
                                                color: "#fff"
                                            },
                                            children: [
                                                g.account.playerOne.toString().slice(0, 6),
                                                "..."
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/components/Lobby.tsx",
                                            lineNumber: 140,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/components/Lobby.tsx",
                                    lineNumber: 138,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: {
                                        textAlign: "center"
                                    },
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            style: {
                                                color: "#666",
                                                fontSize: 12,
                                                marginBottom: 4
                                            },
                                            children: "STAKE"
                                        }, void 0, false, {
                                            fileName: "[project]/app/components/Lobby.tsx",
                                            lineNumber: 143,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            style: {
                                                color: "#39ff14",
                                                fontWeight: "bold",
                                                fontSize: 20
                                            },
                                            children: [
                                                (g.account.stakeAmount.toNumber() / __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$solana$2f$web3$2e$js$2f$lib$2f$index$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["LAMPORTS_PER_SOL"]).toFixed(2),
                                                " SOL"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/components/Lobby.tsx",
                                            lineNumber: 144,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/components/Lobby.tsx",
                                    lineNumber: 142,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: ()=>handleJoinGame(g.publicKey),
                                    disabled: g.account.playerOne.toString() === publicKey?.toString(),
                                    style: {
                                        backgroundColor: g.account.playerOne.toString() === publicKey?.toString() ? "#333" : "#39ff14",
                                        color: "#000",
                                        border: "none",
                                        padding: "10px 24px",
                                        borderRadius: 8,
                                        fontWeight: "bold",
                                        cursor: "pointer",
                                        opacity: g.account.playerOne.toString() === publicKey?.toString() ? 0.5 : 1
                                    },
                                    children: g.account.playerOne.toString() === publicKey?.toString() ? "YOURS" : "JOIN"
                                }, void 0, false, {
                                    fileName: "[project]/app/components/Lobby.tsx",
                                    lineNumber: 146,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, g.publicKey.toString(), true, {
                            fileName: "[project]/app/components/Lobby.tsx",
                            lineNumber: 137,
                            columnNumber: 11
                        }, this))
                ]
            }, void 0, true, {
                fileName: "[project]/app/components/Lobby.tsx",
                lineNumber: 128,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    position: "fixed",
                    bottom: 0,
                    left: 0,
                    right: 0,
                    padding: "20px",
                    background: "rgba(0,0,0,0.9)",
                    borderTop: "1px solid #333",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    gap: 15,
                    zIndex: 100,
                    backdropFilter: "blur(10px)"
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            display: "flex",
                            alignItems: "center",
                            background: "#222",
                            borderRadius: 10,
                            padding: "5px 20px",
                            border: "1px solid #444"
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                style: {
                                    color: "#888",
                                    marginRight: 10
                                },
                                children: "Stake:"
                            }, void 0, false, {
                                fileName: "[project]/app/components/Lobby.tsx",
                                lineNumber: 164,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                type: "number",
                                step: "0.1",
                                min: "0.1",
                                value: stakeInput,
                                onChange: (e)=>setStakeInput(e.target.value),
                                style: {
                                    background: "transparent",
                                    border: "none",
                                    color: "#fff",
                                    fontSize: 20,
                                    width: 70,
                                    outline: "none",
                                    textAlign: "right"
                                }
                            }, void 0, false, {
                                fileName: "[project]/app/components/Lobby.tsx",
                                lineNumber: 165,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                style: {
                                    color: "#39ff14",
                                    marginLeft: 5,
                                    fontWeight: "bold"
                                },
                                children: "SOL"
                            }, void 0, false, {
                                fileName: "[project]/app/components/Lobby.tsx",
                                lineNumber: 166,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/components/Lobby.tsx",
                        lineNumber: 163,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: ()=>setIsModalOpen(true),
                        style: {
                            backgroundColor: "#39ff14",
                            color: "#000",
                            border: "none",
                            width: 60,
                            height: 60,
                            borderRadius: "50%",
                            fontSize: 32,
                            cursor: "pointer",
                            boxShadow: "0 0 20px rgba(57, 255, 20, 0.4)",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            paddingBottom: 4
                        },
                        children: "+"
                    }, void 0, false, {
                        fileName: "[project]/app/components/Lobby.tsx",
                        lineNumber: 169,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/components/Lobby.tsx",
                lineNumber: 162,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$ConfirmStakeModal$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                isOpen: isModalOpen,
                stakeAmount: parseFloat(stakeInput) || 0,
                onCancel: ()=>setIsModalOpen(false),
                onConfirm: handleCreateGame
            }, void 0, false, {
                fileName: "[project]/app/components/Lobby.tsx",
                lineNumber: 174,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/components/Lobby.tsx",
        lineNumber: 118,
        columnNumber: 5
    }, this);
}
}),
"[project]/app/components/GameArena.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>GameArena
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/styled-jsx/style.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$hooks$2f$useAnchorProgram$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/hooks/useAnchorProgram.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$solana$2f$wallet$2d$adapter$2d$react$2f$lib$2f$esm$2f$useWallet$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@solana/wallet-adapter-react/lib/esm/useWallet.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$solana$2f$web3$2e$js$2f$lib$2f$index$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@solana/web3.js/lib/index.esm.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$use$2d$sound$2f$dist$2f$use$2d$sound$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/use-sound/dist/use-sound.esm.js [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
;
;
function GameArena({ gameAccount, gameState: initialGameState }) {
    const program = (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$hooks$2f$useAnchorProgram$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useAnchorProgram"])();
    const { publicKey } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$solana$2f$wallet$2d$adapter$2d$react$2f$lib$2f$esm$2f$useWallet$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useWallet"])();
    // State
    const [currentGameState, setCurrentGameState] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(initialGameState);
    const [bottleState, setBottleState] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('stand');
    const [isFlipping, setIsFlipping] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [gaugePosition, setGaugePosition] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(0);
    const [gameStatus, setGameStatus] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("WAITING");
    const [activePlayer, setActivePlayer] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [showClaim, setShowClaim] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    // LOCAL SCOREBOARD
    const [localP1Score, setLocalP1Score] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(0);
    const [localP2Score, setLocalP2Score] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(0);
    const gameStateRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(initialGameState);
    const requestRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const isInteractionLocked = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(false);
    const [startTime, setStartTime] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(0);
    const [playSuccess] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$use$2d$sound$2f$dist$2f$use$2d$sound$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])('/sounds/bottle-stand.wav');
    const [playFail] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$use$2d$sound$2f$dist$2f$use$2d$sound$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])('/sounds/bottle-fall.wav');
    // 1. SETUP & SYNC LOOP
    const fetchGameData = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(async ()=>{
        if (!program || !gameAccount) return;
        try {
            // @ts-ignore
            const account = await program.account.game.fetch(gameAccount);
            setCurrentGameState(account);
            gameStateRef.current = account;
            const p1 = account.playerOne.toString();
            const p2 = account.playerTwo.toString();
            // Check if P2 has joined (Is P2 NOT the default 1111... address?)
            // We use PublicKey.default to be safe
            const isP2Joined = p2 !== __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$solana$2f$web3$2e$js$2f$lib$2f$index$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PublicKey"].default.toString();
            // Logic to transition from WAITING -> ACTIVE
            if (isP2Joined) {
                // If we were waiting, OR if we just loaded in and need to start
                if (gameStatus === "WAITING") {
                    console.log("🚀 P2 Detected! Starting Game...");
                    setGameStatus("ACTIVE");
                    setActivePlayer(p1); // P1 always starts
                    setStartTime(Date.now());
                }
                // Also sync active player if it changes
                const chainActive = account.activePlayer.toString();
                if (activePlayer !== chainActive && !isFlipping) {
                    setActivePlayer(chainActive);
                }
            }
        } catch (err) {
            if (err.message?.includes("Account does not exist")) {
                setGameStatus("CLOSED");
            }
        }
    }, [
        program,
        gameAccount,
        gameStatus,
        activePlayer,
        isFlipping
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        fetchGameData();
        const interval = setInterval(fetchGameData, 2000); // Poll every 2s
        return ()=>clearInterval(interval);
    }, [
        fetchGameData
    ]);
    // 2. GAUGE ANIMATION
    const animateGauge = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(()=>{
        if (isInteractionLocked.current || gameStatus === "FINISHED" || gameStatus === "CLOSED") return;
        if (startTime > 0) {
            const now = Date.now();
            const elapsed = (now - startTime) / 1000;
            const cyclePosition = elapsed % 2.8 / 2.8;
            setGaugePosition(cyclePosition * 100);
        }
        requestRef.current = requestAnimationFrame(animateGauge);
    }, [
        gameStatus,
        startTime
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        requestRef.current = requestAnimationFrame(animateGauge);
        return ()=>{
            if (requestRef.current) cancelAnimationFrame(requestRef.current);
        };
    }, [
        animateGauge
    ]);
    // 3. HANDLE TAP
    const handleTap = async ()=>{
        if (isFlipping || isInteractionLocked.current || gameStatus !== "ACTIVE") return;
        const myKey = publicKey?.toString();
        if (activePlayer !== myKey) return alert("Wait for your turn!");
        isInteractionLocked.current = true;
        if (requestRef.current) cancelAnimationFrame(requestRef.current);
        const now = Date.now();
        const elapsed = (now - startTime) / 1000;
        const cyclePos = elapsed % 2.8 / 2.8 * 100;
        setGaugePosition(cyclePos);
        const isWin = cyclePos >= 46 && cyclePos <= 54;
        setIsFlipping(true);
        setTimeout(()=>{
            setIsFlipping(false);
            let gameIsOver = false;
            if (isWin) {
                playSuccess();
                setBottleState('stand');
                if (activePlayer === currentGameState.playerOne.toString()) {
                    const newScore = localP1Score + 1;
                    setLocalP1Score(newScore);
                    if (newScore >= 3) {
                        setGameStatus("FINISHED");
                        setShowClaim(true);
                        gameIsOver = true;
                    }
                } else {
                    const newScore = localP2Score + 1;
                    setLocalP2Score(newScore);
                    if (newScore >= 3) {
                        setGameStatus("FINISHED");
                        setShowClaim(true);
                        gameIsOver = true;
                    }
                }
            } else {
                playFail();
                setBottleState('fall');
            }
            if (!gameIsOver) {
                const p1 = currentGameState.playerOne.toString();
                const p2 = currentGameState.playerTwo.toString();
                setActivePlayer(activePlayer === p1 ? p2 : p1);
            }
            setTimeout(()=>{
                if (!gameIsOver) {
                    setBottleState('stand');
                    isInteractionLocked.current = false;
                    animateGauge();
                }
            }, 2000);
        }, 700);
    };
    // 4. CLAIM PRIZE
    const handleClaim = async ()=>{
        if (!program || !publicKey) return;
        try {
            const isP1 = currentGameState.playerOne.toString() === publicKey.toString();
            const loserKey = isP1 ? currentGameState.playerTwo : currentGameState.playerOne;
            await program.methods.claimVictory().accounts({
                gameAccount: gameAccount,
                winner: publicKey
            }).rpc();
            alert("$$$ PAYOUT RECEIVED $$$");
            window.location.reload();
        } catch (error) {
            console.error("Claim failed:", error);
            alert("Claim failed.");
        }
    };
    if (gameStatus === "CLOSED") return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        style: {
            height: "100vh",
            background: "#000",
            color: "#fff",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: 24
        },
        children: "GAME OVER. PRIZE CLAIMED."
    }, void 0, false, {
        fileName: "[project]/app/components/GameArena.tsx",
        lineNumber: 194,
        columnNumber: 39
    }, this);
    if (!currentGameState) return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        style: {
            height: "100vh",
            background: "#000",
            color: "lime",
            display: "flex",
            alignItems: "center",
            justifyContent: "center"
        },
        children: "LOADING..."
    }, void 0, false, {
        fileName: "[project]/app/components/GameArena.tsx",
        lineNumber: 196,
        columnNumber: 33
    }, this);
    const myKey = publicKey?.toString();
    const p1Key = currentGameState?.playerOne?.toString();
    const isPlayerOne = myKey === p1Key;
    const isMyTurn = activePlayer === myKey;
    const myScore = isPlayerOne ? localP1Score : localP2Score;
    const oppScore = isPlayerOne ? localP2Score : localP1Score;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "jsx-6e83a9ff69975cc5" + " " + "arena-container",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                id: "6e83a9ff69975cc5",
                children: ".arena-container.jsx-6e83a9ff69975cc5{background-color:#000;justify-content:center;width:100vw;height:100vh;display:flex;position:relative;overflow:hidden}.scoreboard.jsx-6e83a9ff69975cc5{text-align:center;z-index:20;color:#fff;text-shadow:0 0 10px #000;width:100%;font-weight:700;position:absolute;top:20px}.score-box.jsx-6e83a9ff69975cc5{background:#000c;border:1px solid #333;border-radius:20px;padding:10px 30px;font-size:24px;display:inline-block}.table-object.jsx-6e83a9ff69975cc5{z-index:5;pointer-events:none;width:500px;max-width:95%;height:auto;position:absolute;bottom:20%;left:50%;transform:translate(-50%)}.bottle-container.jsx-6e83a9ff69975cc5{pointer-events:none;z-index:10;width:auto;height:200px;position:absolute;bottom:53%;left:50%;transform:translate(-50%)}.bottle-img.jsx-6e83a9ff69975cc5{filter:drop-shadow(0 10px 10px #00000080);width:auto;height:100%;transition:rotate .2s ease-in}.flipping.jsx-6e83a9ff69975cc5{animation:.7s ease-in-out flipBottle}@keyframes flipBottle{0%{transform:translate(-50%)rotate(0)translateY(0)}50%{transform:translate(-50%)rotate(360deg)translateY(-250px)scale(1.2)}to{transform:translate(-50%)rotate(720deg)translateY(0)}}.gauge-container.jsx-6e83a9ff69975cc5{z-index:20;background:#111;border:2px solid #444;border-radius:15px;width:30px;position:absolute;top:20%;bottom:20%;right:30px;overflow:hidden;box-shadow:0 0 20px #000}.success-zone.jsx-6e83a9ff69975cc5{background:#39ff14;width:100%;height:8%;position:absolute;top:46%;box-shadow:0 0 15px #39ff14}.pointer.jsx-6e83a9ff69975cc5{background:#fff;width:100%;height:6px;position:absolute;left:0;box-shadow:0 0 10px #fff}.claim-overlay.jsx-6e83a9ff69975cc5{z-index:50;alignItems:center;background:#000c;flex-direction:column;justify-content:center;display:flex;position:absolute;inset:0}.claim-btn.jsx-6e83a9ff69975cc5{cursor:pointer;background:#39ff14;border:none;border-radius:50px;margin-top:20px;padding:20px 40px;font-size:32px;font-weight:700;animation:1s infinite pulse}"
            }, void 0, false, void 0, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "jsx-6e83a9ff69975cc5" + " " + "scoreboard",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "jsx-6e83a9ff69975cc5" + " " + "score-box",
                        children: [
                            "YOU: ",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                style: {
                                    color: "#39ff14"
                                },
                                className: "jsx-6e83a9ff69975cc5",
                                children: myScore
                            }, void 0, false, {
                                fileName: "[project]/app/components/GameArena.tsx",
                                lineNumber: 226,
                                columnNumber: 41
                            }, this),
                            " vs OPP: ",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                style: {
                                    color: "#ff0055"
                                },
                                className: "jsx-6e83a9ff69975cc5",
                                children: oppScore
                            }, void 0, false, {
                                fileName: "[project]/app/components/GameArena.tsx",
                                lineNumber: 226,
                                columnNumber: 98
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/components/GameArena.tsx",
                        lineNumber: 226,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            marginTop: 10,
                            fontSize: 18,
                            color: isMyTurn ? "#39ff14" : "#666"
                        },
                        className: "jsx-6e83a9ff69975cc5",
                        children: gameStatus === "ACTIVE" ? isMyTurn ? "YOUR TURN! TAP!" : "Opponent's Turn..." : gameStatus === "FINISHED" ? myScore >= 3 ? "YOU WON!" : "YOU LOST" : "Waiting for Player 2..."
                    }, void 0, false, {
                        fileName: "[project]/app/components/GameArena.tsx",
                        lineNumber: 227,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/components/GameArena.tsx",
                lineNumber: 225,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                src: "/images/obsidian-table.png",
                alt: "Table",
                className: "jsx-6e83a9ff69975cc5" + " " + "table-object"
            }, void 0, false, {
                fileName: "[project]/app/components/GameArena.tsx",
                lineNumber: 232,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "jsx-6e83a9ff69975cc5" + " " + `bottle-container ${isFlipping ? "flipping" : ""}`,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                    src: bottleState === 'stand' ? "/images/bottle-stand.png" : "/images/bottle-fall.png",
                    alt: "Bottle",
                    style: {
                        rotate: bottleState === 'fall' && !isFlipping ? "90deg" : "0deg"
                    },
                    className: "jsx-6e83a9ff69975cc5" + " " + "bottle-img"
                }, void 0, false, {
                    fileName: "[project]/app/components/GameArena.tsx",
                    lineNumber: 235,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/components/GameArena.tsx",
                lineNumber: 234,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "jsx-6e83a9ff69975cc5" + " " + "gauge-container",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "jsx-6e83a9ff69975cc5" + " " + "success-zone"
                    }, void 0, false, {
                        fileName: "[project]/app/components/GameArena.tsx",
                        lineNumber: 239,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            top: `${gaugePosition}%`
                        },
                        className: "jsx-6e83a9ff69975cc5" + " " + "pointer"
                    }, void 0, false, {
                        fileName: "[project]/app/components/GameArena.tsx",
                        lineNumber: 240,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/components/GameArena.tsx",
                lineNumber: 238,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                onClick: handleTap,
                style: {
                    position: "absolute",
                    inset: 0,
                    zIndex: 30,
                    cursor: isMyTurn && gameStatus === "ACTIVE" ? "pointer" : "not-allowed"
                },
                className: "jsx-6e83a9ff69975cc5"
            }, void 0, false, {
                fileName: "[project]/app/components/GameArena.tsx",
                lineNumber: 243,
                columnNumber: 7
            }, this),
            showClaim && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "jsx-6e83a9ff69975cc5" + " " + "claim-overlay",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                        style: {
                            color: "#fff",
                            marginBottom: 20
                        },
                        className: "jsx-6e83a9ff69975cc5",
                        children: "VICTORY! 🏆"
                    }, void 0, false, {
                        fileName: "[project]/app/components/GameArena.tsx",
                        lineNumber: 247,
                        columnNumber: 15
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: handleClaim,
                        className: "jsx-6e83a9ff69975cc5" + " " + "claim-btn",
                        children: "CLAIM PRIZE"
                    }, void 0, false, {
                        fileName: "[project]/app/components/GameArena.tsx",
                        lineNumber: 248,
                        columnNumber: 15
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/components/GameArena.tsx",
                lineNumber: 246,
                columnNumber: 11
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/components/GameArena.tsx",
        lineNumber: 207,
        columnNumber: 5
    }, this);
}
}),
"[project]/app/page.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Home
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$solana$2f$wallet$2d$adapter$2d$react$2f$lib$2f$esm$2f$useWallet$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@solana/wallet-adapter-react/lib/esm/useWallet.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$Lobby$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/components/Lobby.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$GameArena$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/components/GameArena.tsx [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
function Home() {
    const { connected } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$solana$2f$wallet$2d$adapter$2d$react$2f$lib$2f$esm$2f$useWallet$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useWallet"])();
    // State to hold the active game address
    const [activeGame, setActiveGame] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    if (!connected) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            style: {
                height: "100vh",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                backgroundColor: "#000",
                color: "#fff",
                fontFamily: "monospace",
                fontSize: "18px"
            },
            children: "Please connect your wallet to play."
        }, void 0, false, {
            fileName: "[project]/app/page.tsx",
            lineNumber: 17,
            columnNumber: 7
        }, this);
    }
    // If no game selected, show Lobby
    if (!activeGame) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$Lobby$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
            setActiveGame: setActiveGame
        }, void 0, false, {
            fileName: "[project]/app/page.tsx",
            lineNumber: 34,
            columnNumber: 12
        }, this);
    }
    // If game selected, show Arena (which handles Firebase syncing)
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$GameArena$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
        gameAccount: activeGame,
        gameState: null
    }, void 0, false, {
        fileName: "[project]/app/page.tsx",
        lineNumber: 39,
        columnNumber: 5
    }, this);
}
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__68a881f8._.js.map