"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "app/api/products/route";
exports.ids = ["app/api/products/route"];
exports.modules = {

/***/ "mongoose":
/*!***************************!*\
  !*** external "mongoose" ***!
  \***************************/
/***/ ((module) => {

module.exports = require("mongoose");

/***/ }),

/***/ "../../client/components/action-async-storage.external":
/*!*******************************************************************************!*\
  !*** external "next/dist/client/components/action-async-storage.external.js" ***!
  \*******************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/client/components/action-async-storage.external.js");

/***/ }),

/***/ "../../client/components/request-async-storage.external":
/*!********************************************************************************!*\
  !*** external "next/dist/client/components/request-async-storage.external.js" ***!
  \********************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/client/components/request-async-storage.external.js");

/***/ }),

/***/ "../../client/components/static-generation-async-storage.external":
/*!******************************************************************************************!*\
  !*** external "next/dist/client/components/static-generation-async-storage.external.js" ***!
  \******************************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/client/components/static-generation-async-storage.external.js");

/***/ }),

/***/ "next/dist/compiled/next-server/app-page.runtime.dev.js":
/*!*************************************************************************!*\
  !*** external "next/dist/compiled/next-server/app-page.runtime.dev.js" ***!
  \*************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/compiled/next-server/app-page.runtime.dev.js");

/***/ }),

/***/ "next/dist/compiled/next-server/app-route.runtime.dev.js":
/*!**************************************************************************!*\
  !*** external "next/dist/compiled/next-server/app-route.runtime.dev.js" ***!
  \**************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/compiled/next-server/app-route.runtime.dev.js");

/***/ }),

/***/ "node:buffer":
/*!******************************!*\
  !*** external "node:buffer" ***!
  \******************************/
/***/ ((module) => {

module.exports = require("node:buffer");

/***/ }),

/***/ "node:crypto":
/*!******************************!*\
  !*** external "node:crypto" ***!
  \******************************/
/***/ ((module) => {

module.exports = require("node:crypto");

/***/ }),

/***/ "node:util":
/*!****************************!*\
  !*** external "node:util" ***!
  \****************************/
/***/ ((module) => {

module.exports = require("node:util");

/***/ }),

/***/ "(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fproducts%2Froute&page=%2Fapi%2Fproducts%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fproducts%2Froute.ts&appDir=C%3A%5CUsers%5CPAEDIATRICS%5CSynergy%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5CPAEDIATRICS%5CSynergy&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fproducts%2Froute&page=%2Fapi%2Fproducts%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fproducts%2Froute.ts&appDir=C%3A%5CUsers%5CPAEDIATRICS%5CSynergy%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5CPAEDIATRICS%5CSynergy&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D! ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   originalPathname: () => (/* binding */ originalPathname),\n/* harmony export */   patchFetch: () => (/* binding */ patchFetch),\n/* harmony export */   requestAsyncStorage: () => (/* binding */ requestAsyncStorage),\n/* harmony export */   routeModule: () => (/* binding */ routeModule),\n/* harmony export */   serverHooks: () => (/* binding */ serverHooks),\n/* harmony export */   staticGenerationAsyncStorage: () => (/* binding */ staticGenerationAsyncStorage)\n/* harmony export */ });\n/* harmony import */ var next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/server/future/route-modules/app-route/module.compiled */ \"(rsc)/./node_modules/next/dist/server/future/route-modules/app-route/module.compiled.js\");\n/* harmony import */ var next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dist/server/future/route-kind */ \"(rsc)/./node_modules/next/dist/server/future/route-kind.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dist/server/lib/patch-fetch */ \"(rsc)/./node_modules/next/dist/server/lib/patch-fetch.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var C_Users_PAEDIATRICS_Synergy_app_api_products_route_ts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/api/products/route.ts */ \"(rsc)/./app/api/products/route.ts\");\n\n\n\n\n// We inject the nextConfigOutput here so that we can use them in the route\n// module.\nconst nextConfigOutput = \"\"\nconst routeModule = new next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__.AppRouteRouteModule({\n    definition: {\n        kind: next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__.RouteKind.APP_ROUTE,\n        page: \"/api/products/route\",\n        pathname: \"/api/products\",\n        filename: \"route\",\n        bundlePath: \"app/api/products/route\"\n    },\n    resolvedPagePath: \"C:\\\\Users\\\\PAEDIATRICS\\\\Synergy\\\\app\\\\api\\\\products\\\\route.ts\",\n    nextConfigOutput,\n    userland: C_Users_PAEDIATRICS_Synergy_app_api_products_route_ts__WEBPACK_IMPORTED_MODULE_3__\n});\n// Pull out the exports that we need to expose from the module. This should\n// be eliminated when we've moved the other routes to the new format. These\n// are used to hook into the route.\nconst { requestAsyncStorage, staticGenerationAsyncStorage, serverHooks } = routeModule;\nconst originalPathname = \"/api/products/route\";\nfunction patchFetch() {\n    return (0,next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__.patchFetch)({\n        serverHooks,\n        staticGenerationAsyncStorage\n    });\n}\n\n\n//# sourceMappingURL=app-route.js.map//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9uZXh0LWFwcC1sb2FkZXIuanM/bmFtZT1hcHAlMkZhcGklMkZwcm9kdWN0cyUyRnJvdXRlJnBhZ2U9JTJGYXBpJTJGcHJvZHVjdHMlMkZyb3V0ZSZhcHBQYXRocz0mcGFnZVBhdGg9cHJpdmF0ZS1uZXh0LWFwcC1kaXIlMkZhcGklMkZwcm9kdWN0cyUyRnJvdXRlLnRzJmFwcERpcj1DJTNBJTVDVXNlcnMlNUNQQUVESUFUUklDUyU1Q1N5bmVyZ3klNUNhcHAmcGFnZUV4dGVuc2lvbnM9dHN4JnBhZ2VFeHRlbnNpb25zPXRzJnBhZ2VFeHRlbnNpb25zPWpzeCZwYWdlRXh0ZW5zaW9ucz1qcyZyb290RGlyPUMlM0ElNUNVc2VycyU1Q1BBRURJQVRSSUNTJTVDU3luZXJneSZpc0Rldj10cnVlJnRzY29uZmlnUGF0aD10c2NvbmZpZy5qc29uJmJhc2VQYXRoPSZhc3NldFByZWZpeD0mbmV4dENvbmZpZ091dHB1dD0mcHJlZmVycmVkUmVnaW9uPSZtaWRkbGV3YXJlQ29uZmlnPWUzMCUzRCEiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQXNHO0FBQ3ZDO0FBQ2M7QUFDYTtBQUMxRjtBQUNBO0FBQ0E7QUFDQSx3QkFBd0IsZ0hBQW1CO0FBQzNDO0FBQ0EsY0FBYyx5RUFBUztBQUN2QjtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsWUFBWTtBQUNaLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQSxRQUFRLGlFQUFpRTtBQUN6RTtBQUNBO0FBQ0EsV0FBVyw0RUFBVztBQUN0QjtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ3VIOztBQUV2SCIsInNvdXJjZXMiOlsid2VicGFjazovL2xvY2FsLWJpei1vcmRlcmluZy8/ZmYwNyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBcHBSb3V0ZVJvdXRlTW9kdWxlIH0gZnJvbSBcIm5leHQvZGlzdC9zZXJ2ZXIvZnV0dXJlL3JvdXRlLW1vZHVsZXMvYXBwLXJvdXRlL21vZHVsZS5jb21waWxlZFwiO1xuaW1wb3J0IHsgUm91dGVLaW5kIH0gZnJvbSBcIm5leHQvZGlzdC9zZXJ2ZXIvZnV0dXJlL3JvdXRlLWtpbmRcIjtcbmltcG9ydCB7IHBhdGNoRmV0Y2ggYXMgX3BhdGNoRmV0Y2ggfSBmcm9tIFwibmV4dC9kaXN0L3NlcnZlci9saWIvcGF0Y2gtZmV0Y2hcIjtcbmltcG9ydCAqIGFzIHVzZXJsYW5kIGZyb20gXCJDOlxcXFxVc2Vyc1xcXFxQQUVESUFUUklDU1xcXFxTeW5lcmd5XFxcXGFwcFxcXFxhcGlcXFxccHJvZHVjdHNcXFxccm91dGUudHNcIjtcbi8vIFdlIGluamVjdCB0aGUgbmV4dENvbmZpZ091dHB1dCBoZXJlIHNvIHRoYXQgd2UgY2FuIHVzZSB0aGVtIGluIHRoZSByb3V0ZVxuLy8gbW9kdWxlLlxuY29uc3QgbmV4dENvbmZpZ091dHB1dCA9IFwiXCJcbmNvbnN0IHJvdXRlTW9kdWxlID0gbmV3IEFwcFJvdXRlUm91dGVNb2R1bGUoe1xuICAgIGRlZmluaXRpb246IHtcbiAgICAgICAga2luZDogUm91dGVLaW5kLkFQUF9ST1VURSxcbiAgICAgICAgcGFnZTogXCIvYXBpL3Byb2R1Y3RzL3JvdXRlXCIsXG4gICAgICAgIHBhdGhuYW1lOiBcIi9hcGkvcHJvZHVjdHNcIixcbiAgICAgICAgZmlsZW5hbWU6IFwicm91dGVcIixcbiAgICAgICAgYnVuZGxlUGF0aDogXCJhcHAvYXBpL3Byb2R1Y3RzL3JvdXRlXCJcbiAgICB9LFxuICAgIHJlc29sdmVkUGFnZVBhdGg6IFwiQzpcXFxcVXNlcnNcXFxcUEFFRElBVFJJQ1NcXFxcU3luZXJneVxcXFxhcHBcXFxcYXBpXFxcXHByb2R1Y3RzXFxcXHJvdXRlLnRzXCIsXG4gICAgbmV4dENvbmZpZ091dHB1dCxcbiAgICB1c2VybGFuZFxufSk7XG4vLyBQdWxsIG91dCB0aGUgZXhwb3J0cyB0aGF0IHdlIG5lZWQgdG8gZXhwb3NlIGZyb20gdGhlIG1vZHVsZS4gVGhpcyBzaG91bGRcbi8vIGJlIGVsaW1pbmF0ZWQgd2hlbiB3ZSd2ZSBtb3ZlZCB0aGUgb3RoZXIgcm91dGVzIHRvIHRoZSBuZXcgZm9ybWF0LiBUaGVzZVxuLy8gYXJlIHVzZWQgdG8gaG9vayBpbnRvIHRoZSByb3V0ZS5cbmNvbnN0IHsgcmVxdWVzdEFzeW5jU3RvcmFnZSwgc3RhdGljR2VuZXJhdGlvbkFzeW5jU3RvcmFnZSwgc2VydmVySG9va3MgfSA9IHJvdXRlTW9kdWxlO1xuY29uc3Qgb3JpZ2luYWxQYXRobmFtZSA9IFwiL2FwaS9wcm9kdWN0cy9yb3V0ZVwiO1xuZnVuY3Rpb24gcGF0Y2hGZXRjaCgpIHtcbiAgICByZXR1cm4gX3BhdGNoRmV0Y2goe1xuICAgICAgICBzZXJ2ZXJIb29rcyxcbiAgICAgICAgc3RhdGljR2VuZXJhdGlvbkFzeW5jU3RvcmFnZVxuICAgIH0pO1xufVxuZXhwb3J0IHsgcm91dGVNb2R1bGUsIHJlcXVlc3RBc3luY1N0b3JhZ2UsIHN0YXRpY0dlbmVyYXRpb25Bc3luY1N0b3JhZ2UsIHNlcnZlckhvb2tzLCBvcmlnaW5hbFBhdGhuYW1lLCBwYXRjaEZldGNoLCAgfTtcblxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9YXBwLXJvdXRlLmpzLm1hcCJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fproducts%2Froute&page=%2Fapi%2Fproducts%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fproducts%2Froute.ts&appDir=C%3A%5CUsers%5CPAEDIATRICS%5CSynergy%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5CPAEDIATRICS%5CSynergy&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!\n");

/***/ }),

/***/ "(rsc)/./app/api/products/route.ts":
/*!***********************************!*\
  !*** ./app/api/products/route.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   GET: () => (/* binding */ GET),\n/* harmony export */   POST: () => (/* binding */ POST)\n/* harmony export */ });\n/* harmony import */ var next_server__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/server */ \"(rsc)/./node_modules/next/dist/api/server.js\");\n/* harmony import */ var _lib_db__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/lib/db */ \"(rsc)/./lib/db.ts\");\n/* harmony import */ var _lib_models_Product__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/lib/models/Product */ \"(rsc)/./lib/models/Product.ts\");\n/* harmony import */ var _lib_auth__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/lib/auth */ \"(rsc)/./lib/auth.ts\");\n\n\n\n\nasync function GET() {\n    await (0,_lib_db__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\n    const products = await _lib_models_Product__WEBPACK_IMPORTED_MODULE_2__[\"default\"].find({}).sort({\n        createdAt: -1\n    });\n    return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json(products);\n}\nasync function POST(req) {\n    const isAdmin = await (0,_lib_auth__WEBPACK_IMPORTED_MODULE_3__.checkAuth)();\n    if (!isAdmin) {\n        return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n            error: \"Unauthorized\"\n        }, {\n            status: 401\n        });\n    }\n    await (0,_lib_db__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\n    const body = await req.json();\n    const { name, price, description, image, category } = body;\n    if (!name || !price || !description || !image || !category) {\n        return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n            error: \"Missing required fields\"\n        }, {\n            status: 400\n        });\n    }\n    const product = await _lib_models_Product__WEBPACK_IMPORTED_MODULE_2__[\"default\"].create({\n        name,\n        price,\n        description,\n        image,\n        category\n    });\n    return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json(product, {\n        status: 201\n    });\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9hcHAvYXBpL3Byb2R1Y3RzL3JvdXRlLnRzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUF3RDtBQUN2QjtBQUNVO0FBQ0o7QUFFaEMsZUFBZUk7SUFDcEIsTUFBTUgsbURBQVNBO0lBQ2YsTUFBTUksV0FBVyxNQUFNSCwyREFBT0EsQ0FBQ0ksSUFBSSxDQUFDLENBQUMsR0FBR0MsSUFBSSxDQUFDO1FBQUVDLFdBQVcsQ0FBQztJQUFFO0lBQzdELE9BQU9SLHFEQUFZQSxDQUFDUyxJQUFJLENBQUNKO0FBQzNCO0FBRU8sZUFBZUssS0FBS0MsR0FBZ0I7SUFDekMsTUFBTUMsVUFBVSxNQUFNVCxvREFBU0E7SUFDL0IsSUFBSSxDQUFDUyxTQUFTO1FBQ1osT0FBT1oscURBQVlBLENBQUNTLElBQUksQ0FBQztZQUFFSSxPQUFPO1FBQWUsR0FBRztZQUFFQyxRQUFRO1FBQUk7SUFDcEU7SUFFQSxNQUFNYixtREFBU0E7SUFDZixNQUFNYyxPQUFPLE1BQU1KLElBQUlGLElBQUk7SUFDM0IsTUFBTSxFQUFFTyxJQUFJLEVBQUVDLEtBQUssRUFBRUMsV0FBVyxFQUFFQyxLQUFLLEVBQUVDLFFBQVEsRUFBRSxHQUFHTDtJQUV0RCxJQUFJLENBQUNDLFFBQVEsQ0FBQ0MsU0FBUyxDQUFDQyxlQUFlLENBQUNDLFNBQVMsQ0FBQ0MsVUFBVTtRQUMxRCxPQUFPcEIscURBQVlBLENBQUNTLElBQUksQ0FBQztZQUFFSSxPQUFPO1FBQTBCLEdBQUc7WUFBRUMsUUFBUTtRQUFJO0lBQy9FO0lBRUEsTUFBTU8sVUFBVSxNQUFNbkIsMkRBQU9BLENBQUNvQixNQUFNLENBQUM7UUFBRU47UUFBTUM7UUFBT0M7UUFBYUM7UUFBT0M7SUFBUztJQUNqRixPQUFPcEIscURBQVlBLENBQUNTLElBQUksQ0FBQ1ksU0FBUztRQUFFUCxRQUFRO0lBQUk7QUFDbEQiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9sb2NhbC1iaXotb3JkZXJpbmcvLi9hcHAvYXBpL3Byb2R1Y3RzL3JvdXRlLnRzPzkyYTgiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmV4dFJlcXVlc3QsIE5leHRSZXNwb25zZSB9IGZyb20gXCJuZXh0L3NlcnZlclwiO1xuaW1wb3J0IGRiQ29ubmVjdCBmcm9tIFwiQC9saWIvZGJcIjtcbmltcG9ydCBQcm9kdWN0IGZyb20gXCJAL2xpYi9tb2RlbHMvUHJvZHVjdFwiO1xuaW1wb3J0IHsgY2hlY2tBdXRoIH0gZnJvbSBcIkAvbGliL2F1dGhcIjtcblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIEdFVCgpIHtcbiAgYXdhaXQgZGJDb25uZWN0KCk7XG4gIGNvbnN0IHByb2R1Y3RzID0gYXdhaXQgUHJvZHVjdC5maW5kKHt9KS5zb3J0KHsgY3JlYXRlZEF0OiAtMSB9KTtcbiAgcmV0dXJuIE5leHRSZXNwb25zZS5qc29uKHByb2R1Y3RzKTtcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIFBPU1QocmVxOiBOZXh0UmVxdWVzdCkge1xuICBjb25zdCBpc0FkbWluID0gYXdhaXQgY2hlY2tBdXRoKCk7XG4gIGlmICghaXNBZG1pbikge1xuICAgIHJldHVybiBOZXh0UmVzcG9uc2UuanNvbih7IGVycm9yOiBcIlVuYXV0aG9yaXplZFwiIH0sIHsgc3RhdHVzOiA0MDEgfSk7XG4gIH1cblxuICBhd2FpdCBkYkNvbm5lY3QoKTtcbiAgY29uc3QgYm9keSA9IGF3YWl0IHJlcS5qc29uKCk7XG4gIGNvbnN0IHsgbmFtZSwgcHJpY2UsIGRlc2NyaXB0aW9uLCBpbWFnZSwgY2F0ZWdvcnkgfSA9IGJvZHk7XG5cbiAgaWYgKCFuYW1lIHx8ICFwcmljZSB8fCAhZGVzY3JpcHRpb24gfHwgIWltYWdlIHx8ICFjYXRlZ29yeSkge1xuICAgIHJldHVybiBOZXh0UmVzcG9uc2UuanNvbih7IGVycm9yOiBcIk1pc3NpbmcgcmVxdWlyZWQgZmllbGRzXCIgfSwgeyBzdGF0dXM6IDQwMCB9KTtcbiAgfVxuXG4gIGNvbnN0IHByb2R1Y3QgPSBhd2FpdCBQcm9kdWN0LmNyZWF0ZSh7IG5hbWUsIHByaWNlLCBkZXNjcmlwdGlvbiwgaW1hZ2UsIGNhdGVnb3J5IH0pO1xuICByZXR1cm4gTmV4dFJlc3BvbnNlLmpzb24ocHJvZHVjdCwgeyBzdGF0dXM6IDIwMSB9KTtcbn1cbiJdLCJuYW1lcyI6WyJOZXh0UmVzcG9uc2UiLCJkYkNvbm5lY3QiLCJQcm9kdWN0IiwiY2hlY2tBdXRoIiwiR0VUIiwicHJvZHVjdHMiLCJmaW5kIiwic29ydCIsImNyZWF0ZWRBdCIsImpzb24iLCJQT1NUIiwicmVxIiwiaXNBZG1pbiIsImVycm9yIiwic3RhdHVzIiwiYm9keSIsIm5hbWUiLCJwcmljZSIsImRlc2NyaXB0aW9uIiwiaW1hZ2UiLCJjYXRlZ29yeSIsInByb2R1Y3QiLCJjcmVhdGUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(rsc)/./app/api/products/route.ts\n");

/***/ }),

/***/ "(rsc)/./lib/auth.ts":
/*!*********************!*\
  !*** ./lib/auth.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   checkAuth: () => (/* binding */ checkAuth),\n/* harmony export */   clearAuthCookie: () => (/* binding */ clearAuthCookie),\n/* harmony export */   setAuthCookie: () => (/* binding */ setAuthCookie),\n/* harmony export */   signToken: () => (/* binding */ signToken),\n/* harmony export */   verifyToken: () => (/* binding */ verifyToken)\n/* harmony export */ });\n/* harmony import */ var jose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jose */ \"(rsc)/./node_modules/jose/dist/node/esm/jwt/sign.js\");\n/* harmony import */ var jose__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! jose */ \"(rsc)/./node_modules/jose/dist/node/esm/jwt/verify.js\");\n/* harmony import */ var next_headers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/headers */ \"(rsc)/./node_modules/next/dist/api/headers.js\");\n\n\nconst secretKey = process.env.JWT_SECRET || \"fallback_secret_for_localbiz_dev_only\";\nconst key = new TextEncoder().encode(secretKey);\nasync function signToken(payload) {\n    return await new jose__WEBPACK_IMPORTED_MODULE_1__.SignJWT(payload).setProtectedHeader({\n        alg: \"HS256\"\n    }).setIssuedAt().setExpirationTime(\"1d\").sign(key);\n}\nasync function verifyToken(token) {\n    try {\n        const { payload } = await (0,jose__WEBPACK_IMPORTED_MODULE_2__.jwtVerify)(token, key);\n        return payload;\n    } catch (error) {\n        return null;\n    }\n}\nasync function setAuthCookie(token) {\n    (0,next_headers__WEBPACK_IMPORTED_MODULE_0__.cookies)().set(\"admin_token\", token, {\n        httpOnly: true,\n        secure: \"development\" === \"production\",\n        sameSite: \"lax\",\n        maxAge: 60 * 60 * 24,\n        path: \"/\"\n    });\n}\nasync function clearAuthCookie() {\n    (0,next_headers__WEBPACK_IMPORTED_MODULE_0__.cookies)().delete(\"admin_token\");\n}\nasync function checkAuth() {\n    const token = (0,next_headers__WEBPACK_IMPORTED_MODULE_0__.cookies)().get(\"admin_token\")?.value;\n    if (!token) return false;\n    const payload = await verifyToken(token);\n    return !!payload;\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9saWIvYXV0aC50cyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUEwQztBQUNIO0FBRXZDLE1BQU1HLFlBQVlDLFFBQVFDLEdBQUcsQ0FBQ0MsVUFBVSxJQUFJO0FBQzVDLE1BQU1DLE1BQU0sSUFBSUMsY0FBY0MsTUFBTSxDQUFDTjtBQUU5QixlQUFlTyxVQUFVQyxPQUFZO0lBQzFDLE9BQU8sTUFBTSxJQUFJWCx5Q0FBT0EsQ0FBQ1csU0FDdEJDLGtCQUFrQixDQUFDO1FBQUVDLEtBQUs7SUFBUSxHQUNsQ0MsV0FBVyxHQUNYQyxpQkFBaUIsQ0FBQyxNQUNsQkMsSUFBSSxDQUFDVDtBQUNWO0FBRU8sZUFBZVUsWUFBWUMsS0FBYTtJQUM3QyxJQUFJO1FBQ0YsTUFBTSxFQUFFUCxPQUFPLEVBQUUsR0FBRyxNQUFNViwrQ0FBU0EsQ0FBQ2lCLE9BQU9YO1FBQzNDLE9BQU9JO0lBQ1QsRUFBRSxPQUFPUSxPQUFPO1FBQ2QsT0FBTztJQUNUO0FBQ0Y7QUFFTyxlQUFlQyxjQUFjRixLQUFhO0lBQy9DaEIscURBQU9BLEdBQUdtQixHQUFHLENBQUMsZUFBZUgsT0FBTztRQUNsQ0ksVUFBVTtRQUNWQyxRQUFRbkIsa0JBQXlCO1FBQ2pDb0IsVUFBVTtRQUNWQyxRQUFRLEtBQUssS0FBSztRQUNsQkMsTUFBTTtJQUNSO0FBQ0Y7QUFFTyxlQUFlQztJQUNwQnpCLHFEQUFPQSxHQUFHMEIsTUFBTSxDQUFDO0FBQ25CO0FBRU8sZUFBZUM7SUFDcEIsTUFBTVgsUUFBUWhCLHFEQUFPQSxHQUFHNEIsR0FBRyxDQUFDLGdCQUFnQkM7SUFDNUMsSUFBSSxDQUFDYixPQUFPLE9BQU87SUFFbkIsTUFBTVAsVUFBVSxNQUFNTSxZQUFZQztJQUNsQyxPQUFPLENBQUMsQ0FBQ1A7QUFDWCIsInNvdXJjZXMiOlsid2VicGFjazovL2xvY2FsLWJpei1vcmRlcmluZy8uL2xpYi9hdXRoLnRzP2JmN2UiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgU2lnbkpXVCwgand0VmVyaWZ5IH0gZnJvbSAnam9zZSc7XG5pbXBvcnQgeyBjb29raWVzIH0gZnJvbSAnbmV4dC9oZWFkZXJzJztcblxuY29uc3Qgc2VjcmV0S2V5ID0gcHJvY2Vzcy5lbnYuSldUX1NFQ1JFVCB8fCAnZmFsbGJhY2tfc2VjcmV0X2Zvcl9sb2NhbGJpel9kZXZfb25seSc7XG5jb25zdCBrZXkgPSBuZXcgVGV4dEVuY29kZXIoKS5lbmNvZGUoc2VjcmV0S2V5KTtcblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHNpZ25Ub2tlbihwYXlsb2FkOiBhbnkpIHtcbiAgcmV0dXJuIGF3YWl0IG5ldyBTaWduSldUKHBheWxvYWQpXG4gICAgLnNldFByb3RlY3RlZEhlYWRlcih7IGFsZzogJ0hTMjU2JyB9KVxuICAgIC5zZXRJc3N1ZWRBdCgpXG4gICAgLnNldEV4cGlyYXRpb25UaW1lKCcxZCcpXG4gICAgLnNpZ24oa2V5KTtcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHZlcmlmeVRva2VuKHRva2VuOiBzdHJpbmcpIHtcbiAgdHJ5IHtcbiAgICBjb25zdCB7IHBheWxvYWQgfSA9IGF3YWl0IGp3dFZlcmlmeSh0b2tlbiwga2V5KTtcbiAgICByZXR1cm4gcGF5bG9hZDtcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gc2V0QXV0aENvb2tpZSh0b2tlbjogc3RyaW5nKSB7XG4gIGNvb2tpZXMoKS5zZXQoJ2FkbWluX3Rva2VuJywgdG9rZW4sIHtcbiAgICBodHRwT25seTogdHJ1ZSxcbiAgICBzZWN1cmU6IHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAncHJvZHVjdGlvbicsXG4gICAgc2FtZVNpdGU6ICdsYXgnLFxuICAgIG1heEFnZTogNjAgKiA2MCAqIDI0LCAvLyAxIGRheVxuICAgIHBhdGg6ICcvJyxcbiAgfSk7XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBjbGVhckF1dGhDb29raWUoKSB7XG4gIGNvb2tpZXMoKS5kZWxldGUoJ2FkbWluX3Rva2VuJyk7XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBjaGVja0F1dGgoKSB7XG4gIGNvbnN0IHRva2VuID0gY29va2llcygpLmdldCgnYWRtaW5fdG9rZW4nKT8udmFsdWU7XG4gIGlmICghdG9rZW4pIHJldHVybiBmYWxzZTtcbiAgXG4gIGNvbnN0IHBheWxvYWQgPSBhd2FpdCB2ZXJpZnlUb2tlbih0b2tlbik7XG4gIHJldHVybiAhIXBheWxvYWQ7XG59XG4iXSwibmFtZXMiOlsiU2lnbkpXVCIsImp3dFZlcmlmeSIsImNvb2tpZXMiLCJzZWNyZXRLZXkiLCJwcm9jZXNzIiwiZW52IiwiSldUX1NFQ1JFVCIsImtleSIsIlRleHRFbmNvZGVyIiwiZW5jb2RlIiwic2lnblRva2VuIiwicGF5bG9hZCIsInNldFByb3RlY3RlZEhlYWRlciIsImFsZyIsInNldElzc3VlZEF0Iiwic2V0RXhwaXJhdGlvblRpbWUiLCJzaWduIiwidmVyaWZ5VG9rZW4iLCJ0b2tlbiIsImVycm9yIiwic2V0QXV0aENvb2tpZSIsInNldCIsImh0dHBPbmx5Iiwic2VjdXJlIiwic2FtZVNpdGUiLCJtYXhBZ2UiLCJwYXRoIiwiY2xlYXJBdXRoQ29va2llIiwiZGVsZXRlIiwiY2hlY2tBdXRoIiwiZ2V0IiwidmFsdWUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(rsc)/./lib/auth.ts\n");

/***/ }),

/***/ "(rsc)/./lib/db.ts":
/*!*******************!*\
  !*** ./lib/db.ts ***!
  \*******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);\n\nconst MONGODB_URI = process.env.MONGODB_URI || \"mongodb://localhost:27017/localbiz\";\nif (!MONGODB_URI) {\n    throw new Error(\"Please define the MONGODB_URI environment variable inside .env.local\");\n}\nlet cached = global.mongoose;\nif (!cached) {\n    cached = global.mongoose = {\n        conn: null,\n        promise: null\n    };\n}\nasync function dbConnect() {\n    if (cached.conn) {\n        return cached.conn;\n    }\n    if (!cached.promise) {\n        const opts = {\n            bufferCommands: false\n        };\n        cached.promise = mongoose__WEBPACK_IMPORTED_MODULE_0___default().connect(MONGODB_URI, opts).then((mongoose)=>{\n            return mongoose;\n        });\n    }\n    cached.conn = await cached.promise;\n    return cached.conn;\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (dbConnect);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9saWIvZGIudHMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQWdDO0FBRWhDLE1BQU1DLGNBQWNDLFFBQVFDLEdBQUcsQ0FBQ0YsV0FBVyxJQUFJO0FBRS9DLElBQUksQ0FBQ0EsYUFBYTtJQUNoQixNQUFNLElBQUlHLE1BQU07QUFDbEI7QUFFQSxJQUFJQyxTQUFTLE9BQWdCTCxRQUFRO0FBRXJDLElBQUksQ0FBQ0ssUUFBUTtJQUNYQSxTQUFTLE9BQWdCTCxRQUFRLEdBQUc7UUFBRU8sTUFBTTtRQUFNQyxTQUFTO0lBQUs7QUFDbEU7QUFFQSxlQUFlQztJQUNiLElBQUlKLE9BQU9FLElBQUksRUFBRTtRQUNmLE9BQU9GLE9BQU9FLElBQUk7SUFDcEI7SUFFQSxJQUFJLENBQUNGLE9BQU9HLE9BQU8sRUFBRTtRQUNuQixNQUFNRSxPQUFPO1lBQ1hDLGdCQUFnQjtRQUNsQjtRQUVBTixPQUFPRyxPQUFPLEdBQUdSLHVEQUFnQixDQUFDQyxhQUFhUyxNQUFNRyxJQUFJLENBQUMsQ0FBQ2I7WUFDekQsT0FBT0E7UUFDVDtJQUNGO0lBQ0FLLE9BQU9FLElBQUksR0FBRyxNQUFNRixPQUFPRyxPQUFPO0lBQ2xDLE9BQU9ILE9BQU9FLElBQUk7QUFDcEI7QUFFQSxpRUFBZUUsU0FBU0EsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2xvY2FsLWJpei1vcmRlcmluZy8uL2xpYi9kYi50cz8xZGYwIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBtb25nb29zZSBmcm9tIFwibW9uZ29vc2VcIjtcblxuY29uc3QgTU9OR09EQl9VUkkgPSBwcm9jZXNzLmVudi5NT05HT0RCX1VSSSB8fCBcIm1vbmdvZGI6Ly9sb2NhbGhvc3Q6MjcwMTcvbG9jYWxiaXpcIjtcblxuaWYgKCFNT05HT0RCX1VSSSkge1xuICB0aHJvdyBuZXcgRXJyb3IoXCJQbGVhc2UgZGVmaW5lIHRoZSBNT05HT0RCX1VSSSBlbnZpcm9ubWVudCB2YXJpYWJsZSBpbnNpZGUgLmVudi5sb2NhbFwiKTtcbn1cblxubGV0IGNhY2hlZCA9IChnbG9iYWwgYXMgYW55KS5tb25nb29zZTtcblxuaWYgKCFjYWNoZWQpIHtcbiAgY2FjaGVkID0gKGdsb2JhbCBhcyBhbnkpLm1vbmdvb3NlID0geyBjb25uOiBudWxsLCBwcm9taXNlOiBudWxsIH07XG59XG5cbmFzeW5jIGZ1bmN0aW9uIGRiQ29ubmVjdCgpIHtcbiAgaWYgKGNhY2hlZC5jb25uKSB7XG4gICAgcmV0dXJuIGNhY2hlZC5jb25uO1xuICB9XG5cbiAgaWYgKCFjYWNoZWQucHJvbWlzZSkge1xuICAgIGNvbnN0IG9wdHMgPSB7XG4gICAgICBidWZmZXJDb21tYW5kczogZmFsc2UsXG4gICAgfTtcblxuICAgIGNhY2hlZC5wcm9taXNlID0gbW9uZ29vc2UuY29ubmVjdChNT05HT0RCX1VSSSwgb3B0cykudGhlbigobW9uZ29vc2UpID0+IHtcbiAgICAgIHJldHVybiBtb25nb29zZTtcbiAgICB9KTtcbiAgfVxuICBjYWNoZWQuY29ubiA9IGF3YWl0IGNhY2hlZC5wcm9taXNlO1xuICByZXR1cm4gY2FjaGVkLmNvbm47XG59XG5cbmV4cG9ydCBkZWZhdWx0IGRiQ29ubmVjdDtcbiJdLCJuYW1lcyI6WyJtb25nb29zZSIsIk1PTkdPREJfVVJJIiwicHJvY2VzcyIsImVudiIsIkVycm9yIiwiY2FjaGVkIiwiZ2xvYmFsIiwiY29ubiIsInByb21pc2UiLCJkYkNvbm5lY3QiLCJvcHRzIiwiYnVmZmVyQ29tbWFuZHMiLCJjb25uZWN0IiwidGhlbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/./lib/db.ts\n");

/***/ }),

/***/ "(rsc)/./lib/models/Product.ts":
/*!*******************************!*\
  !*** ./lib/models/Product.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);\n\nconst ProductSchema = new (mongoose__WEBPACK_IMPORTED_MODULE_0___default().Schema)({\n    name: {\n        type: String,\n        required: true\n    },\n    price: {\n        type: Number,\n        required: true\n    },\n    description: {\n        type: String,\n        required: true\n    },\n    image: {\n        type: String,\n        required: true\n    },\n    category: {\n        type: String,\n        required: true\n    }\n}, {\n    timestamps: true\n});\n// This ensures Mongoose doesn't recreate the model if it already exists in Next.js development\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((mongoose__WEBPACK_IMPORTED_MODULE_0___default().models).Product || mongoose__WEBPACK_IMPORTED_MODULE_0___default().model(\"Product\", ProductSchema));\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9saWIvbW9kZWxzL1Byb2R1Y3QudHMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQWdDO0FBRWhDLE1BQU1DLGdCQUFnQixJQUFJRCx3REFBZSxDQUN2QztJQUNFRyxNQUFNO1FBQUVDLE1BQU1DO1FBQVFDLFVBQVU7SUFBSztJQUNyQ0MsT0FBTztRQUFFSCxNQUFNSTtRQUFRRixVQUFVO0lBQUs7SUFDdENHLGFBQWE7UUFBRUwsTUFBTUM7UUFBUUMsVUFBVTtJQUFLO0lBQzVDSSxPQUFPO1FBQUVOLE1BQU1DO1FBQVFDLFVBQVU7SUFBSztJQUN0Q0ssVUFBVTtRQUFFUCxNQUFNQztRQUFRQyxVQUFVO0lBQUs7QUFDM0MsR0FDQTtJQUFFTSxZQUFZO0FBQUs7QUFHckIsK0ZBQStGO0FBQy9GLGlFQUFlWix3REFBZSxDQUFDYyxPQUFPLElBQUlkLHFEQUFjLENBQUMsV0FBV0MsY0FBY0EsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2xvY2FsLWJpei1vcmRlcmluZy8uL2xpYi9tb2RlbHMvUHJvZHVjdC50cz9kODNiIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBtb25nb29zZSBmcm9tIFwibW9uZ29vc2VcIjtcblxuY29uc3QgUHJvZHVjdFNjaGVtYSA9IG5ldyBtb25nb29zZS5TY2hlbWEoXG4gIHtcbiAgICBuYW1lOiB7IHR5cGU6IFN0cmluZywgcmVxdWlyZWQ6IHRydWUgfSxcbiAgICBwcmljZTogeyB0eXBlOiBOdW1iZXIsIHJlcXVpcmVkOiB0cnVlIH0sXG4gICAgZGVzY3JpcHRpb246IHsgdHlwZTogU3RyaW5nLCByZXF1aXJlZDogdHJ1ZSB9LFxuICAgIGltYWdlOiB7IHR5cGU6IFN0cmluZywgcmVxdWlyZWQ6IHRydWUgfSxcbiAgICBjYXRlZ29yeTogeyB0eXBlOiBTdHJpbmcsIHJlcXVpcmVkOiB0cnVlIH0sXG4gIH0sXG4gIHsgdGltZXN0YW1wczogdHJ1ZSB9XG4pO1xuXG4vLyBUaGlzIGVuc3VyZXMgTW9uZ29vc2UgZG9lc24ndCByZWNyZWF0ZSB0aGUgbW9kZWwgaWYgaXQgYWxyZWFkeSBleGlzdHMgaW4gTmV4dC5qcyBkZXZlbG9wbWVudFxuZXhwb3J0IGRlZmF1bHQgbW9uZ29vc2UubW9kZWxzLlByb2R1Y3QgfHwgbW9uZ29vc2UubW9kZWwoXCJQcm9kdWN0XCIsIFByb2R1Y3RTY2hlbWEpO1xuIl0sIm5hbWVzIjpbIm1vbmdvb3NlIiwiUHJvZHVjdFNjaGVtYSIsIlNjaGVtYSIsIm5hbWUiLCJ0eXBlIiwiU3RyaW5nIiwicmVxdWlyZWQiLCJwcmljZSIsIk51bWJlciIsImRlc2NyaXB0aW9uIiwiaW1hZ2UiLCJjYXRlZ29yeSIsInRpbWVzdGFtcHMiLCJtb2RlbHMiLCJQcm9kdWN0IiwibW9kZWwiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(rsc)/./lib/models/Product.ts\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next","vendor-chunks/jose"], () => (__webpack_exec__("(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fproducts%2Froute&page=%2Fapi%2Fproducts%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fproducts%2Froute.ts&appDir=C%3A%5CUsers%5CPAEDIATRICS%5CSynergy%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5CPAEDIATRICS%5CSynergy&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!")));
module.exports = __webpack_exports__;

})();