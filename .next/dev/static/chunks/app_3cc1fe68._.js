(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/app/components/Ticket/ticket.module.css [app-client] (css module)", ((__turbopack_context__) => {

__turbopack_context__.v({
  "buttonContainer": "ticket-module__DQAFyW__buttonContainer",
  "closedStatus": "ticket-module__DQAFyW__closedStatus",
  "dataContainer": "ticket-module__DQAFyW__dataContainer",
  "deleteButton": "ticket-module__DQAFyW__deleteButton",
  "displayFlex": "ticket-module__DQAFyW__displayFlex",
  "editButton": "ticket-module__DQAFyW__editButton",
  "iconDetails": "ticket-module__DQAFyW__iconDetails",
  "inProgressStatus": "ticket-module__DQAFyW__inProgressStatus",
  "noTicketPara": "ticket-module__DQAFyW__noTicketPara",
  "openStatus": "ticket-module__DQAFyW__openStatus",
  "paraDetails": "ticket-module__DQAFyW__paraDetails",
  "resolvedStatus": "ticket-module__DQAFyW__resolvedStatus",
  "status": "ticket-module__DQAFyW__status",
  "topCardTicketDetails": "ticket-module__DQAFyW__topCardTicketDetails",
});
}),
"[project]/app/lib/data-service.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "addTicket",
    ()=>addTicket,
    "addUserProfile",
    ()=>addUserProfile,
    "deleteTicket",
    ()=>deleteTicket,
    "getLogedInUser",
    ()=>getLogedInUser,
    "getTicket",
    ()=>getTicket,
    "getTickets",
    ()=>getTickets,
    "getTotalTicketsCount",
    ()=>getTotalTicketsCount,
    "getUsers",
    ()=>getUsers,
    "numByStatus",
    ()=>numByStatus,
    "updateTicket",
    ()=>updateTicket
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$lib$2f$supabaseClient$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/lib/supabaseClient.js [app-client] (ecmascript)");
"use client";
;
async function getUsers() {
    const { data, error } = await __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$lib$2f$supabaseClient$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].from("profiles").select("*");
    if (error) {
        console.error("Error fetching users:", error);
        throw new Error(error.message);
    }
    return data;
}
async function addUserProfile(profile) {
    const { data, error } = await __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$lib$2f$supabaseClient$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].from("profiles").insert([
        profile
    ]);
    if (error) {
        console.error("Profile error:", error);
        throw new Error(error.message);
    }
    return data;
}
async function getLogedInUser() {
    const { data: { user } } = await __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$lib$2f$supabaseClient$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].auth.getUser();
    //  console.log(user)
    return user;
}
async function addTicket(ticket) {
    const { data, error } = await __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$lib$2f$supabaseClient$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].from("tickets").insert([
        ticket
    ]).select().single();
    if (error) {
        console.error("Add ticket error:", error);
        throw new Error(error.message);
    }
    //console.log(` data :${data}`)
    return data;
}
async function getTicket(id) {
    const { data, error } = await __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$lib$2f$supabaseClient$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].from("tickets").select('*').eq('id', id).single();
    if (error) {
        console.log("Error fetching ticket:", error);
        return null;
    }
    //console.log(data)
    return data;
}
async function updateTicket(id, values) {
    const { data, error } = await __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$lib$2f$supabaseClient$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].from("tickets").update({
        'title': values.title,
        'status': values.status,
        'description': values.description,
        'summary': values.summary
    }).eq('id', id);
}
async function deleteTicket(id) {
    const { error } = await __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$lib$2f$supabaseClient$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].from("tickets").delete().eq('id', id);
    if (error) {
        console.error("Error deleteing ticket:", error);
    }
}
async function getTickets() {
    const { data, error } = await __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$lib$2f$supabaseClient$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].from("tickets").select("*");
    if (error) {
        console.error("Error fetching tickets:", error);
        throw new Error(error.message);
    }
    return data;
}
async function getTotalTicketsCount() {
    const tickets = await getTickets();
    return tickets.length;
}
async function numByStatus(status) {
    const { data, error } = await __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$lib$2f$supabaseClient$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].from("tickets").select("id").eq("status", status);
    if (error) throw new Error;
    return data.length;
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/app/components/DeleteConfirm/deleteConfirm.module.css [app-client] (css module)", ((__turbopack_context__) => {

__turbopack_context__.v({
  "buttons": "deleteConfirm-module__D3iWMW__buttons",
  "cancelButton": "deleteConfirm-module__D3iWMW__cancelButton",
  "confirmButton": "deleteConfirm-module__D3iWMW__confirmButton",
  "modal": "deleteConfirm-module__D3iWMW__modal",
  "modalOverlay": "deleteConfirm-module__D3iWMW__modalOverlay",
});
}),
"[project]/app/components/DeleteConfirm/DeleteConfirm.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>DeleteConfirm
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$DeleteConfirm$2f$deleteConfirm$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/app/components/DeleteConfirm/deleteConfirm.module.css [app-client] (css module)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$lib$2f$data$2d$service$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/lib/data-service.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
;
;
;
function DeleteConfirm({ id, setShowDeleteModal }) {
    _s();
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    async function handleDelete() {
        await (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$lib$2f$data$2d$service$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["deleteTicket"])(id);
        setShowDeleteModal(false);
        router.push("/tickets");
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$DeleteConfirm$2f$deleteConfirm$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].modalOverlay,
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$DeleteConfirm$2f$deleteConfirm$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].modal,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                        children: "Delete Ticket"
                    }, void 0, false, {
                        fileName: "[project]/app/components/DeleteConfirm/DeleteConfirm.jsx",
                        lineNumber: 16,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        children: "Are you sure you want to delete this ticket?"
                    }, void 0, false, {
                        fileName: "[project]/app/components/DeleteConfirm/DeleteConfirm.jsx",
                        lineNumber: 17,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$DeleteConfirm$2f$deleteConfirm$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].buttons,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$DeleteConfirm$2f$deleteConfirm$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].confirmButton,
                                onClick: handleDelete,
                                children: "Ok"
                            }, void 0, false, {
                                fileName: "[project]/app/components/DeleteConfirm/DeleteConfirm.jsx",
                                lineNumber: 19,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$DeleteConfirm$2f$deleteConfirm$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].cancelButton,
                                onClick: ()=>setShowDeleteModal(false),
                                children: "Cancel"
                            }, void 0, false, {
                                fileName: "[project]/app/components/DeleteConfirm/DeleteConfirm.jsx",
                                lineNumber: 20,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/components/DeleteConfirm/DeleteConfirm.jsx",
                        lineNumber: 18,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/components/DeleteConfirm/DeleteConfirm.jsx",
                lineNumber: 15,
                columnNumber: 5
            }, this)
        }, void 0, false, {
            fileName: "[project]/app/components/DeleteConfirm/DeleteConfirm.jsx",
            lineNumber: 14,
            columnNumber: 6
        }, this)
    }, void 0, false);
}
_s(DeleteConfirm, "fN7XvhJ+p5oE6+Xlo0NJmXpxjC8=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"]
    ];
});
_c = DeleteConfirm;
var _c;
__turbopack_context__.k.register(_c, "DeleteConfirm");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/app/components/Ticket/Ticket.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Ticket
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$Ticket$2f$ticket$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/app/components/Ticket/ticket.module.css [app-client] (css module)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$fortawesome$2f$react$2d$fontawesome$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@fortawesome/react-fontawesome/dist/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$fortawesome$2f$free$2d$solid$2d$svg$2d$icons$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@fortawesome/free-solid-svg-icons/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$lib$2f$data$2d$service$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/lib/data-service.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$DeleteConfirm$2f$DeleteConfirm$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/components/DeleteConfirm/DeleteConfirm.jsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
;
function Ticket({ id }) {
    _s();
    const [ticket, setTicket] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({});
    const [showDeleteModal, setShowDeleteModal] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Ticket.useEffect": ()=>{
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$lib$2f$data$2d$service$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getTicket"])(id).then({
                "Ticket.useEffect": (data)=>{
                    setTicket(data);
                }
            }["Ticket.useEffect"]);
        }
    }["Ticket.useEffect"], [
        id
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            !ticket ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$Ticket$2f$ticket$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].noTicketPara,
                children: "No ticket with this id"
            }, void 0, false, {
                fileName: "[project]/app/components/Ticket/Ticket.jsx",
                lineNumber: 21,
                columnNumber: 20
            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "form",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$Ticket$2f$ticket$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].topCardTicketDetails,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                        children: ticket.title
                                    }, void 0, false, {
                                        fileName: "[project]/app/components/Ticket/Ticket.jsx",
                                        lineNumber: 28,
                                        columnNumber: 11
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$Ticket$2f$ticket$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].paraDetails,
                                        children: [
                                            "Created on",
                                            " ",
                                            new Date(ticket.created_at).toLocaleString()
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/components/Ticket/Ticket.jsx",
                                        lineNumber: 29,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/components/Ticket/Ticket.jsx",
                                lineNumber: 27,
                                columnNumber: 9
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$Ticket$2f$ticket$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].displayFlex,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        className: `${__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$Ticket$2f$ticket$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].buttonContainer} ${__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$Ticket$2f$ticket$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].editButton}`,
                                        href: `/tickets/edit/${ticket.id}`,
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$fortawesome$2f$react$2d$fontawesome$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FontAwesomeIcon"], {
                                                icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$fortawesome$2f$free$2d$solid$2d$svg$2d$icons$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["faEdit"],
                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$Ticket$2f$ticket$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].iconDetails
                                            }, void 0, false, {
                                                fileName: "[project]/app/components/Ticket/Ticket.jsx",
                                                lineNumber: 37,
                                                columnNumber: 15
                                            }, this),
                                            "Edit"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/components/Ticket/Ticket.jsx",
                                        lineNumber: 36,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        className: `${__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$Ticket$2f$ticket$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].buttonContainer} ${__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$Ticket$2f$ticket$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].deleteButton}`,
                                        onClick: ()=>setShowDeleteModal(true),
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$fortawesome$2f$react$2d$fontawesome$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FontAwesomeIcon"], {
                                                icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$fortawesome$2f$free$2d$solid$2d$svg$2d$icons$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["faTrash"],
                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$Ticket$2f$ticket$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].iconDetails
                                            }, void 0, false, {
                                                fileName: "[project]/app/components/Ticket/Ticket.jsx",
                                                lineNumber: 41,
                                                columnNumber: 15
                                            }, this),
                                            "Delete"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/components/Ticket/Ticket.jsx",
                                        lineNumber: 40,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/components/Ticket/Ticket.jsx",
                                lineNumber: 35,
                                columnNumber: 9
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/components/Ticket/Ticket.jsx",
                        lineNumber: 25,
                        columnNumber: 7
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$Ticket$2f$ticket$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].dataContainer,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                        children: "status"
                                    }, void 0, false, {
                                        fileName: "[project]/app/components/Ticket/Ticket.jsx",
                                        lineNumber: 50,
                                        columnNumber: 11
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: `
                  ${"status"} 
                  ${ticket.status === "In Progress" ? "inProgressStatus" : ""}
                  ${ticket.status === "Closed" ? "closedStatus" : ""} 
                  ${ticket.status === "Open" ? "openStatus" : ""} 
                  ${ticket.status === "Resolved" ? "resolvedStatus" : ""} 
                `,
                                        children: ticket.status
                                    }, void 0, false, {
                                        fileName: "[project]/app/components/Ticket/Ticket.jsx",
                                        lineNumber: 51,
                                        columnNumber: 11
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/components/Ticket/Ticket.jsx",
                                lineNumber: 49,
                                columnNumber: 9
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$Ticket$2f$ticket$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].dataContainer,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                        children: "Description"
                                    }, void 0, false, {
                                        fileName: "[project]/app/components/Ticket/Ticket.jsx",
                                        lineNumber: 62,
                                        columnNumber: 11
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$Ticket$2f$ticket$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].paraDetails,
                                        children: ticket.description
                                    }, void 0, false, {
                                        fileName: "[project]/app/components/Ticket/Ticket.jsx",
                                        lineNumber: 63,
                                        columnNumber: 11
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/components/Ticket/Ticket.jsx",
                                lineNumber: 61,
                                columnNumber: 9
                            }, this),
                            ticket.summary && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$Ticket$2f$ticket$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].dataContainer,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                        children: "Summary"
                                    }, void 0, false, {
                                        fileName: "[project]/app/components/Ticket/Ticket.jsx",
                                        lineNumber: 67,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$Ticket$2f$ticket$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].paraDetails,
                                        children: ticket.summary
                                    }, void 0, false, {
                                        fileName: "[project]/app/components/Ticket/Ticket.jsx",
                                        lineNumber: 68,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/components/Ticket/Ticket.jsx",
                                lineNumber: 66,
                                columnNumber: 9
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/components/Ticket/Ticket.jsx",
                        lineNumber: 48,
                        columnNumber: 7
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/components/Ticket/Ticket.jsx",
                lineNumber: 23,
                columnNumber: 6
            }, this),
            showDeleteModal && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$DeleteConfirm$2f$DeleteConfirm$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                id: ticket.id,
                setShowDeleteModal: setShowDeleteModal
            }, void 0, false, {
                fileName: "[project]/app/components/Ticket/Ticket.jsx",
                lineNumber: 75,
                columnNumber: 24
            }, this)
        ]
    }, void 0, true);
}
_s(Ticket, "ZYhEKi8PoZQZnCSk49gsRUhcveg=");
_c = Ticket;
var _c;
__turbopack_context__.k.register(_c, "Ticket");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=app_3cc1fe68._.js.map