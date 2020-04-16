(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["campanhas-campanhas-module"],{

/***/ "./node_modules/@ngrx/entity/fesm5/entity.js":
/*!***************************************************!*\
  !*** ./node_modules/@ngrx/entity/fesm5/entity.js ***!
  \***************************************************/
/*! exports provided: createEntityAdapter, Dictionary */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createEntityAdapter", function() { return createEntityAdapter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Dictionary", function() { return Dictionary; });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/**
 * @license NgRx 6.1.2
 * (c) 2015-2018 Brandon Roberts, Mike Ryan, Rob Wormald, Victor Savkin
 * License: MIT
 */



function getInitialEntityState() {
    return {
        ids: [],
        entities: {},
    };
}
function createInitialStateFactory() {
    function getInitialState(additionalState) {
        if (additionalState === void 0) { additionalState = {}; }
        return Object.assign(getInitialEntityState(), additionalState);
    }
    return { getInitialState: getInitialState };
}

function createSelectorsFactory() {
    function getSelectors(selectState) {
        var selectIds = function (state) { return state.ids; };
        var selectEntities = function (state) { return state.entities; };
        var selectAll = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(selectIds, selectEntities, function (ids, entities) {
            return ids.map(function (id) { return entities[id]; });
        });
        var selectTotal = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(selectIds, function (ids) { return ids.length; });
        if (!selectState) {
            return {
                selectIds: selectIds,
                selectEntities: selectEntities,
                selectAll: selectAll,
                selectTotal: selectTotal,
            };
        }
        return {
            selectIds: Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(selectState, selectIds),
            selectEntities: Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(selectState, selectEntities),
            selectAll: Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(selectState, selectAll),
            selectTotal: Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(selectState, selectTotal),
        };
    }
    return { getSelectors: getSelectors };
}

var __assign = (undefined && undefined.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var __read = (undefined && undefined.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};
var __spread = (undefined && undefined.__spread) || function () {
    for (var ar = [], i = 0; i < arguments.length; i++) ar = ar.concat(__read(arguments[i]));
    return ar;
};
var DidMutate;
(function (DidMutate) {
    DidMutate[DidMutate["EntitiesOnly"] = 0] = "EntitiesOnly";
    DidMutate[DidMutate["Both"] = 1] = "Both";
    DidMutate[DidMutate["None"] = 2] = "None";
})(DidMutate || (DidMutate = {}));
function createStateOperator(mutator) {
    return function operation(arg, state) {
        var clonedEntityState = {
            ids: __spread(state.ids),
            entities: __assign({}, state.entities),
        };
        var didMutate = mutator(arg, clonedEntityState);
        if (didMutate === DidMutate.Both) {
            return Object.assign({}, state, clonedEntityState);
        }
        if (didMutate === DidMutate.EntitiesOnly) {
            return __assign({}, state, { entities: clonedEntityState.entities });
        }
        return state;
    };
}

function selectIdValue(entity, selectId) {
    var key = selectId(entity);
    if (Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["isDevMode"])() && key === undefined) {
        console.warn('@ngrx/entity: The entity passed to the `selectId` implementation returned undefined.', 'You should probably provide your own `selectId` implementation.', 'The entity that was passed:', entity, 'The `selectId` implementation:', selectId.toString());
    }
    return key;
}

var __values = (undefined && undefined.__values) || function (o) {
    var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
    if (m) return m.call(o);
    return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
};
function createUnsortedStateAdapter(selectId) {
    function addOneMutably(entity, state) {
        var key = selectIdValue(entity, selectId);
        if (key in state.entities) {
            return DidMutate.None;
        }
        state.ids.push(key);
        state.entities[key] = entity;
        return DidMutate.Both;
    }
    function addManyMutably(entities, state) {
        var didMutate = false;
        try {
            for (var entities_1 = __values(entities), entities_1_1 = entities_1.next(); !entities_1_1.done; entities_1_1 = entities_1.next()) {
                var entity = entities_1_1.value;
                didMutate = addOneMutably(entity, state) !== DidMutate.None || didMutate;
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (entities_1_1 && !entities_1_1.done && (_a = entities_1.return)) _a.call(entities_1);
            }
            finally { if (e_1) throw e_1.error; }
        }
        return didMutate ? DidMutate.Both : DidMutate.None;
        var e_1, _a;
    }
    function addAllMutably(entities, state) {
        state.ids = [];
        state.entities = {};
        addManyMutably(entities, state);
        return DidMutate.Both;
    }
    function removeOneMutably(key, state) {
        return removeManyMutably([key], state);
    }
    function removeManyMutably(keys, state) {
        var didMutate = keys
            .filter(function (key) { return key in state.entities; })
            .map(function (key) { return delete state.entities[key]; }).length > 0;
        if (didMutate) {
            state.ids = state.ids.filter(function (id) { return id in state.entities; });
        }
        return didMutate ? DidMutate.Both : DidMutate.None;
    }
    function removeAll(state) {
        return Object.assign({}, state, {
            ids: [],
            entities: {},
        });
    }
    function takeNewKey(keys, update, state) {
        var original = state.entities[update.id];
        var updated = Object.assign({}, original, update.changes);
        var newKey = selectIdValue(updated, selectId);
        var hasNewKey = newKey !== update.id;
        if (hasNewKey) {
            keys[update.id] = newKey;
            delete state.entities[update.id];
        }
        state.entities[newKey] = updated;
        return hasNewKey;
    }
    function updateOneMutably(update, state) {
        return updateManyMutably([update], state);
    }
    function updateManyMutably(updates, state) {
        var newKeys = {};
        updates = updates.filter(function (update) { return update.id in state.entities; });
        var didMutateEntities = updates.length > 0;
        if (didMutateEntities) {
            var didMutateIds = updates.filter(function (update) { return takeNewKey(newKeys, update, state); }).length > 0;
            if (didMutateIds) {
                state.ids = state.ids.map(function (id) { return newKeys[id] || id; });
                return DidMutate.Both;
            }
            else {
                return DidMutate.EntitiesOnly;
            }
        }
        return DidMutate.None;
    }
    function upsertOneMutably(entity, state) {
        return upsertManyMutably([entity], state);
    }
    function upsertManyMutably(entities, state) {
        var added = [];
        var updated = [];
        try {
            for (var entities_2 = __values(entities), entities_2_1 = entities_2.next(); !entities_2_1.done; entities_2_1 = entities_2.next()) {
                var entity = entities_2_1.value;
                var id = selectIdValue(entity, selectId);
                if (id in state.entities) {
                    updated.push({ id: id, changes: entity });
                }
                else {
                    added.push(entity);
                }
            }
        }
        catch (e_2_1) { e_2 = { error: e_2_1 }; }
        finally {
            try {
                if (entities_2_1 && !entities_2_1.done && (_a = entities_2.return)) _a.call(entities_2);
            }
            finally { if (e_2) throw e_2.error; }
        }
        var didMutateByUpdated = updateManyMutably(updated, state);
        var didMutateByAdded = addManyMutably(added, state);
        switch (true) {
            case didMutateByAdded === DidMutate.None &&
                didMutateByUpdated === DidMutate.None:
                return DidMutate.None;
            case didMutateByAdded === DidMutate.Both ||
                didMutateByUpdated === DidMutate.Both:
                return DidMutate.Both;
            default:
                return DidMutate.EntitiesOnly;
        }
        var e_2, _a;
    }
    return {
        removeAll: removeAll,
        addOne: createStateOperator(addOneMutably),
        addMany: createStateOperator(addManyMutably),
        addAll: createStateOperator(addAllMutably),
        updateOne: createStateOperator(updateOneMutably),
        updateMany: createStateOperator(updateManyMutably),
        upsertOne: createStateOperator(upsertOneMutably),
        upsertMany: createStateOperator(upsertManyMutably),
        removeOne: createStateOperator(removeOneMutably),
        removeMany: createStateOperator(removeManyMutably),
    };
}

var __values$1 = (undefined && undefined.__values) || function (o) {
    var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
    if (m) return m.call(o);
    return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
};
function createSortedStateAdapter(selectId, sort) {
    var _a = createUnsortedStateAdapter(selectId), removeOne = _a.removeOne, removeMany = _a.removeMany, removeAll = _a.removeAll;
    function addOneMutably(entity, state) {
        return addManyMutably([entity], state);
    }
    function addManyMutably(newModels, state) {
        var models = newModels.filter(function (model) { return !(selectIdValue(model, selectId) in state.entities); });
        if (models.length === 0) {
            return DidMutate.None;
        }
        else {
            merge(models, state);
            return DidMutate.Both;
        }
    }
    function addAllMutably(models, state) {
        state.entities = {};
        state.ids = [];
        addManyMutably(models, state);
        return DidMutate.Both;
    }
    function updateOneMutably(update, state) {
        return updateManyMutably([update], state);
    }
    function takeUpdatedModel(models, update, state) {
        if (!(update.id in state.entities)) {
            return false;
        }
        var original = state.entities[update.id];
        var updated = Object.assign({}, original, update.changes);
        var newKey = selectIdValue(updated, selectId);
        delete state.entities[update.id];
        models.push(updated);
        return newKey !== update.id;
    }
    function updateManyMutably(updates, state) {
        var models = [];
        var didMutateIds = updates.filter(function (update) { return takeUpdatedModel(models, update, state); }).length >
            0;
        if (models.length === 0) {
            return DidMutate.None;
        }
        else {
            var originalIds_1 = state.ids;
            var updatedIndexes_1 = [];
            state.ids = state.ids.filter(function (id, index) {
                if (id in state.entities) {
                    return true;
                }
                else {
                    updatedIndexes_1.push(index);
                    return false;
                }
            });
            merge(models, state);
            if (!didMutateIds &&
                updatedIndexes_1.every(function (i) { return state.ids[i] === originalIds_1[i]; })) {
                return DidMutate.EntitiesOnly;
            }
            else {
                return DidMutate.Both;
            }
        }
    }
    function upsertOneMutably(entity, state) {
        return upsertManyMutably([entity], state);
    }
    function upsertManyMutably(entities, state) {
        var added = [];
        var updated = [];
        try {
            for (var entities_1 = __values$1(entities), entities_1_1 = entities_1.next(); !entities_1_1.done; entities_1_1 = entities_1.next()) {
                var entity = entities_1_1.value;
                var id = selectIdValue(entity, selectId);
                if (id in state.entities) {
                    updated.push({ id: id, changes: entity });
                }
                else {
                    added.push(entity);
                }
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (entities_1_1 && !entities_1_1.done && (_a = entities_1.return)) _a.call(entities_1);
            }
            finally { if (e_1) throw e_1.error; }
        }
        var didMutateByUpdated = updateManyMutably(updated, state);
        var didMutateByAdded = addManyMutably(added, state);
        switch (true) {
            case didMutateByAdded === DidMutate.None &&
                didMutateByUpdated === DidMutate.None:
                return DidMutate.None;
            case didMutateByAdded === DidMutate.Both ||
                didMutateByUpdated === DidMutate.Both:
                return DidMutate.Both;
            default:
                return DidMutate.EntitiesOnly;
        }
        var e_1, _a;
    }
    function merge(models, state) {
        models.sort(sort);
        var ids = [];
        var i = 0;
        var j = 0;
        while (i < models.length && j < state.ids.length) {
            var model = models[i];
            var modelId = selectIdValue(model, selectId);
            var entityId = state.ids[j];
            var entity = state.entities[entityId];
            if (sort(model, entity) <= 0) {
                ids.push(modelId);
                i++;
            }
            else {
                ids.push(entityId);
                j++;
            }
        }
        if (i < models.length) {
            state.ids = ids.concat(models.slice(i).map(selectId));
        }
        else {
            state.ids = ids.concat(state.ids.slice(j));
        }
        models.forEach(function (model, i) {
            state.entities[selectId(model)] = model;
        });
    }
    return {
        removeOne: removeOne,
        removeMany: removeMany,
        removeAll: removeAll,
        addOne: createStateOperator(addOneMutably),
        updateOne: createStateOperator(updateOneMutably),
        upsertOne: createStateOperator(upsertOneMutably),
        addAll: createStateOperator(addAllMutably),
        addMany: createStateOperator(addManyMutably),
        updateMany: createStateOperator(updateManyMutably),
        upsertMany: createStateOperator(upsertManyMutably),
    };
}

var __assign$1 = (undefined && undefined.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
function createEntityAdapter(options) {
    if (options === void 0) { options = {}; }
    var _a = __assign$1({ sortComparer: false, selectId: function (instance) { return instance.id; } }, options), selectId = _a.selectId, sortComparer = _a.sortComparer;
    var stateFactory = createInitialStateFactory();
    var selectorsFactory = createSelectorsFactory();
    var stateAdapter = sortComparer
        ? createSortedStateAdapter(selectId, sortComparer)
        : createUnsortedStateAdapter(selectId);
    return __assign$1({ selectId: selectId,
        sortComparer: sortComparer }, stateFactory, selectorsFactory, stateAdapter);
}

var Dictionary = /** @class */ (function () {
    function Dictionary() {
    }
    return Dictionary;
}());

/**
 * DO NOT EDIT
 *
 * This file is automatically generated at build
 */

/**
 * Generated bundle index. Do not edit.
 */


//# sourceMappingURL=entity.js.map


/***/ }),

/***/ "./src/app/campanhas/campanhas-routing.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/campanhas/campanhas-routing.module.ts ***!
  \*******************************************************/
/*! exports provided: routes, CampanhasRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routes", function() { return routes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CampanhasRoutingModule", function() { return CampanhasRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _search_search_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./search/search.component */ "./src/app/campanhas/search/search.component.ts");
/* harmony import */ var _form_form_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./form/form.component */ "./src/app/campanhas/form/form.component.ts");
/* harmony import */ var _details_details_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./details/details.component */ "./src/app/campanhas/details/details.component.ts");
/* harmony import */ var _details_fail_details_fail_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./details-fail/details-fail.component */ "./src/app/campanhas/details-fail/details-fail.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var routes = [
    { path: '', component: _search_search_component__WEBPACK_IMPORTED_MODULE_2__["SearchComponent"] },
    { path: ':id', component: _form_form_component__WEBPACK_IMPORTED_MODULE_3__["FormComponent"] },
    { path: ':id/details', component: _details_details_component__WEBPACK_IMPORTED_MODULE_4__["DetailsComponent"] },
    { path: ':id/details-fail', component: _details_fail_details_fail_component__WEBPACK_IMPORTED_MODULE_5__["DetailsFailComponent"] }
];
var CampanhasRoutingModule = /** @class */ (function () {
    function CampanhasRoutingModule() {
    }
    CampanhasRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], CampanhasRoutingModule);
    return CampanhasRoutingModule;
}());



/***/ }),

/***/ "./src/app/campanhas/campanhas.actions.ts":
/*!************************************************!*\
  !*** ./src/app/campanhas/campanhas.actions.ts ***!
  \************************************************/
/*! exports provided: CampanhasTypesActions, BuscarCampanhasAction, BuscarCampanhasEmpresaAction, BuscarCampanhasMaterialAction, BuscarCampanhasTipoAction, BuscarCampanhasNdAction, BuscarCampanhasModeloAction, BuscarCampanhasSuccessAction, BuscarCampanhasFailction, BuscarCampanhasMaterialSuccessAction, BuscarCampanhasMaterialFailction, BuscarCampanhasModeloSuccessAction, BuscarCampanhasModeloFailction, BuscarCampanhasTipoSuccessAction, BuscarCampanhasTipoFailction, BuscarCampanhasNdSuccessAction, BuscarCampanhasNdFailction, BuscarCampanhasEmpresaSuccessAction, BuscarCampanhasEmpresaFailction, CriarCampanhaAction, CriarCampanhaSuccessAction, CriarCampanhaFailction, SelecionarCampanhaAction, SelecionarCampanhaEmpresaAction, SelecionarCampanhaModeloAction, SelecionarCampanhaMaterialAction, SelecionarCampanhaNdAction, SelecionarCampanhaTipoAction, SelecionarCampanhaSuccessAction, SelecionarCampanhaFailAction, SelecionarCampanhaMaterialSuccessAction, SelecionarCampanhaMaterialFailAction, SelecionarCampanhaEmpresaSuccessAction, SelecionarCampanhaEmpresaFailAction, SelecionarCampanhaModeloSuccessAction, SelecionarCampanhaModeloFailAction, SelecionarCampanhaTipoSuccessAction, SelecionarCampanhaTipoFailAction, SelecionarCampanhaNdSuccessAction, SelecionarCampanhaNdFailAction */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CampanhasTypesActions", function() { return CampanhasTypesActions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BuscarCampanhasAction", function() { return BuscarCampanhasAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BuscarCampanhasEmpresaAction", function() { return BuscarCampanhasEmpresaAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BuscarCampanhasMaterialAction", function() { return BuscarCampanhasMaterialAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BuscarCampanhasTipoAction", function() { return BuscarCampanhasTipoAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BuscarCampanhasNdAction", function() { return BuscarCampanhasNdAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BuscarCampanhasModeloAction", function() { return BuscarCampanhasModeloAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BuscarCampanhasSuccessAction", function() { return BuscarCampanhasSuccessAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BuscarCampanhasFailction", function() { return BuscarCampanhasFailction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BuscarCampanhasMaterialSuccessAction", function() { return BuscarCampanhasMaterialSuccessAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BuscarCampanhasMaterialFailction", function() { return BuscarCampanhasMaterialFailction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BuscarCampanhasModeloSuccessAction", function() { return BuscarCampanhasModeloSuccessAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BuscarCampanhasModeloFailction", function() { return BuscarCampanhasModeloFailction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BuscarCampanhasTipoSuccessAction", function() { return BuscarCampanhasTipoSuccessAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BuscarCampanhasTipoFailction", function() { return BuscarCampanhasTipoFailction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BuscarCampanhasNdSuccessAction", function() { return BuscarCampanhasNdSuccessAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BuscarCampanhasNdFailction", function() { return BuscarCampanhasNdFailction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BuscarCampanhasEmpresaSuccessAction", function() { return BuscarCampanhasEmpresaSuccessAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BuscarCampanhasEmpresaFailction", function() { return BuscarCampanhasEmpresaFailction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CriarCampanhaAction", function() { return CriarCampanhaAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CriarCampanhaSuccessAction", function() { return CriarCampanhaSuccessAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CriarCampanhaFailction", function() { return CriarCampanhaFailction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SelecionarCampanhaAction", function() { return SelecionarCampanhaAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SelecionarCampanhaEmpresaAction", function() { return SelecionarCampanhaEmpresaAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SelecionarCampanhaModeloAction", function() { return SelecionarCampanhaModeloAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SelecionarCampanhaMaterialAction", function() { return SelecionarCampanhaMaterialAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SelecionarCampanhaNdAction", function() { return SelecionarCampanhaNdAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SelecionarCampanhaTipoAction", function() { return SelecionarCampanhaTipoAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SelecionarCampanhaSuccessAction", function() { return SelecionarCampanhaSuccessAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SelecionarCampanhaFailAction", function() { return SelecionarCampanhaFailAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SelecionarCampanhaMaterialSuccessAction", function() { return SelecionarCampanhaMaterialSuccessAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SelecionarCampanhaMaterialFailAction", function() { return SelecionarCampanhaMaterialFailAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SelecionarCampanhaEmpresaSuccessAction", function() { return SelecionarCampanhaEmpresaSuccessAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SelecionarCampanhaEmpresaFailAction", function() { return SelecionarCampanhaEmpresaFailAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SelecionarCampanhaModeloSuccessAction", function() { return SelecionarCampanhaModeloSuccessAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SelecionarCampanhaModeloFailAction", function() { return SelecionarCampanhaModeloFailAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SelecionarCampanhaTipoSuccessAction", function() { return SelecionarCampanhaTipoSuccessAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SelecionarCampanhaTipoFailAction", function() { return SelecionarCampanhaTipoFailAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SelecionarCampanhaNdSuccessAction", function() { return SelecionarCampanhaNdSuccessAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SelecionarCampanhaNdFailAction", function() { return SelecionarCampanhaNdFailAction; });
var CampanhasTypesActions;
(function (CampanhasTypesActions) {
    CampanhasTypesActions["INCREMENT"] = "[campanhas] increment";
    CampanhasTypesActions["BUSCAR"] = "[campanhas] buscar campanhas";
    CampanhasTypesActions["BUSCAR_SUCCESS"] = "[campanhas] buscar campanhas success";
    CampanhasTypesActions["BUSCAR_FAIL"] = "[campanhas] buscar campanhas fail";
    CampanhasTypesActions["CRIAR"] = "[campanhas] criar campanha";
    CampanhasTypesActions["CRIAR_SUCCESS"] = "[campanhas] criar campanha success";
    CampanhasTypesActions["CRIAR_FAIL"] = "[campanhas] criar campanha fail";
    CampanhasTypesActions["SELECIONAR"] = "[campanhas] selecionar campanha";
    CampanhasTypesActions["SELECIONAR_SUCCESS"] = "[campanhas] selecionar campanha success";
    CampanhasTypesActions["SELECIONAR_FAIL"] = "[campanhas] selecionar campanha fail";
})(CampanhasTypesActions || (CampanhasTypesActions = {}));
var BuscarCampanhasAction = /** @class */ (function () {
    function BuscarCampanhasAction(params) {
        this.params = params;
        this.type = CampanhasTypesActions.BUSCAR;
    }
    return BuscarCampanhasAction;
}());

var BuscarCampanhasEmpresaAction = /** @class */ (function () {
    function BuscarCampanhasEmpresaAction(params) {
        this.params = params;
        this.type = CampanhasTypesActions.BUSCAR;
    }
    return BuscarCampanhasEmpresaAction;
}());

var BuscarCampanhasMaterialAction = /** @class */ (function () {
    function BuscarCampanhasMaterialAction(params) {
        this.params = params;
        this.type = CampanhasTypesActions.BUSCAR;
    }
    return BuscarCampanhasMaterialAction;
}());

var BuscarCampanhasTipoAction = /** @class */ (function () {
    function BuscarCampanhasTipoAction(params) {
        this.params = params;
        this.type = CampanhasTypesActions.BUSCAR;
    }
    return BuscarCampanhasTipoAction;
}());

var BuscarCampanhasNdAction = /** @class */ (function () {
    function BuscarCampanhasNdAction(params) {
        this.params = params;
        this.type = CampanhasTypesActions.BUSCAR;
    }
    return BuscarCampanhasNdAction;
}());

var BuscarCampanhasModeloAction = /** @class */ (function () {
    function BuscarCampanhasModeloAction(params) {
        this.params = params;
        this.type = CampanhasTypesActions.BUSCAR;
    }
    return BuscarCampanhasModeloAction;
}());

var BuscarCampanhasSuccessAction = /** @class */ (function () {
    function BuscarCampanhasSuccessAction(campanhas) {
        this.campanhas = campanhas;
        this.type = CampanhasTypesActions.BUSCAR_SUCCESS;
    }
    return BuscarCampanhasSuccessAction;
}());

var BuscarCampanhasFailction = /** @class */ (function () {
    function BuscarCampanhasFailction(message) {
        this.message = message;
        this.type = CampanhasTypesActions.BUSCAR_FAIL;
    }
    return BuscarCampanhasFailction;
}());

var BuscarCampanhasMaterialSuccessAction = /** @class */ (function () {
    function BuscarCampanhasMaterialSuccessAction(campanhasMaterial) {
        this.campanhasMaterial = campanhasMaterial;
        this.type = CampanhasTypesActions.BUSCAR_SUCCESS;
    }
    return BuscarCampanhasMaterialSuccessAction;
}());

var BuscarCampanhasMaterialFailction = /** @class */ (function () {
    function BuscarCampanhasMaterialFailction(message) {
        this.message = message;
        this.type = CampanhasTypesActions.BUSCAR_FAIL;
    }
    return BuscarCampanhasMaterialFailction;
}());

var BuscarCampanhasModeloSuccessAction = /** @class */ (function () {
    function BuscarCampanhasModeloSuccessAction(campanhasModelo) {
        this.campanhasModelo = campanhasModelo;
        this.type = CampanhasTypesActions.BUSCAR_SUCCESS;
    }
    return BuscarCampanhasModeloSuccessAction;
}());

var BuscarCampanhasModeloFailction = /** @class */ (function () {
    function BuscarCampanhasModeloFailction(message) {
        this.message = message;
        this.type = CampanhasTypesActions.BUSCAR_FAIL;
    }
    return BuscarCampanhasModeloFailction;
}());

var BuscarCampanhasTipoSuccessAction = /** @class */ (function () {
    function BuscarCampanhasTipoSuccessAction(CampanhasTipo) {
        this.CampanhasTipo = CampanhasTipo;
        this.type = CampanhasTypesActions.BUSCAR_SUCCESS;
    }
    return BuscarCampanhasTipoSuccessAction;
}());

var BuscarCampanhasTipoFailction = /** @class */ (function () {
    function BuscarCampanhasTipoFailction(message) {
        this.message = message;
        this.type = CampanhasTypesActions.BUSCAR_FAIL;
    }
    return BuscarCampanhasTipoFailction;
}());

var BuscarCampanhasNdSuccessAction = /** @class */ (function () {
    function BuscarCampanhasNdSuccessAction(CampanhasNd) {
        this.CampanhasNd = CampanhasNd;
        this.type = CampanhasTypesActions.BUSCAR_SUCCESS;
    }
    return BuscarCampanhasNdSuccessAction;
}());

var BuscarCampanhasNdFailction = /** @class */ (function () {
    function BuscarCampanhasNdFailction(message) {
        this.message = message;
        this.type = CampanhasTypesActions.BUSCAR_FAIL;
    }
    return BuscarCampanhasNdFailction;
}());

var BuscarCampanhasEmpresaSuccessAction = /** @class */ (function () {
    function BuscarCampanhasEmpresaSuccessAction(CampanhasEmpresa) {
        this.CampanhasEmpresa = CampanhasEmpresa;
        this.type = CampanhasTypesActions.BUSCAR_SUCCESS;
    }
    return BuscarCampanhasEmpresaSuccessAction;
}());

var BuscarCampanhasEmpresaFailction = /** @class */ (function () {
    function BuscarCampanhasEmpresaFailction(message) {
        this.message = message;
        this.type = CampanhasTypesActions.BUSCAR_FAIL;
    }
    return BuscarCampanhasEmpresaFailction;
}());

var CriarCampanhaAction = /** @class */ (function () {
    function CriarCampanhaAction(campanha) {
        this.campanha = campanha;
        this.type = CampanhasTypesActions.CRIAR;
    }
    return CriarCampanhaAction;
}());

var CriarCampanhaSuccessAction = /** @class */ (function () {
    function CriarCampanhaSuccessAction(campanha) {
        this.campanha = campanha;
        this.type = CampanhasTypesActions.CRIAR_SUCCESS;
    }
    return CriarCampanhaSuccessAction;
}());

var CriarCampanhaFailction = /** @class */ (function () {
    function CriarCampanhaFailction(message) {
        this.message = message;
        this.type = CampanhasTypesActions.CRIAR_FAIL;
    }
    return CriarCampanhaFailction;
}());

var SelecionarCampanhaAction = /** @class */ (function () {
    function SelecionarCampanhaAction(id) {
        this.id = id;
        this.type = CampanhasTypesActions.SELECIONAR;
    }
    return SelecionarCampanhaAction;
}());

var SelecionarCampanhaEmpresaAction = /** @class */ (function () {
    function SelecionarCampanhaEmpresaAction(id) {
        this.id = id;
        this.type = CampanhasTypesActions.SELECIONAR;
    }
    return SelecionarCampanhaEmpresaAction;
}());

var SelecionarCampanhaModeloAction = /** @class */ (function () {
    function SelecionarCampanhaModeloAction(id) {
        this.id = id;
        this.type = CampanhasTypesActions.SELECIONAR;
    }
    return SelecionarCampanhaModeloAction;
}());

var SelecionarCampanhaMaterialAction = /** @class */ (function () {
    function SelecionarCampanhaMaterialAction(id) {
        this.id = id;
        this.type = CampanhasTypesActions.SELECIONAR;
    }
    return SelecionarCampanhaMaterialAction;
}());

var SelecionarCampanhaNdAction = /** @class */ (function () {
    function SelecionarCampanhaNdAction(id) {
        this.id = id;
        this.type = CampanhasTypesActions.SELECIONAR;
    }
    return SelecionarCampanhaNdAction;
}());

var SelecionarCampanhaTipoAction = /** @class */ (function () {
    function SelecionarCampanhaTipoAction(id) {
        this.id = id;
        this.type = CampanhasTypesActions.SELECIONAR;
    }
    return SelecionarCampanhaTipoAction;
}());

var SelecionarCampanhaSuccessAction = /** @class */ (function () {
    function SelecionarCampanhaSuccessAction(campanha) {
        this.campanha = campanha;
        this.type = CampanhasTypesActions.SELECIONAR_SUCCESS;
    }
    return SelecionarCampanhaSuccessAction;
}());

var SelecionarCampanhaFailAction = /** @class */ (function () {
    function SelecionarCampanhaFailAction(message) {
        this.message = message;
        this.type = CampanhasTypesActions.SELECIONAR_FAIL;
    }
    return SelecionarCampanhaFailAction;
}());

var SelecionarCampanhaMaterialSuccessAction = /** @class */ (function () {
    function SelecionarCampanhaMaterialSuccessAction(campanhaMaterial) {
        this.campanhaMaterial = campanhaMaterial;
        this.type = CampanhasTypesActions.SELECIONAR_SUCCESS;
    }
    return SelecionarCampanhaMaterialSuccessAction;
}());

var SelecionarCampanhaMaterialFailAction = /** @class */ (function () {
    function SelecionarCampanhaMaterialFailAction(message) {
        this.message = message;
        this.type = CampanhasTypesActions.SELECIONAR_FAIL;
    }
    return SelecionarCampanhaMaterialFailAction;
}());

var SelecionarCampanhaEmpresaSuccessAction = /** @class */ (function () {
    function SelecionarCampanhaEmpresaSuccessAction(campanhaEmpresa) {
        this.campanhaEmpresa = campanhaEmpresa;
        this.type = CampanhasTypesActions.SELECIONAR_SUCCESS;
    }
    return SelecionarCampanhaEmpresaSuccessAction;
}());

var SelecionarCampanhaEmpresaFailAction = /** @class */ (function () {
    function SelecionarCampanhaEmpresaFailAction(message) {
        this.message = message;
        this.type = CampanhasTypesActions.SELECIONAR_FAIL;
    }
    return SelecionarCampanhaEmpresaFailAction;
}());

var SelecionarCampanhaModeloSuccessAction = /** @class */ (function () {
    function SelecionarCampanhaModeloSuccessAction(campanhaModelo) {
        this.campanhaModelo = campanhaModelo;
        this.type = CampanhasTypesActions.SELECIONAR_SUCCESS;
    }
    return SelecionarCampanhaModeloSuccessAction;
}());

var SelecionarCampanhaModeloFailAction = /** @class */ (function () {
    function SelecionarCampanhaModeloFailAction(message) {
        this.message = message;
        this.type = CampanhasTypesActions.SELECIONAR_FAIL;
    }
    return SelecionarCampanhaModeloFailAction;
}());

var SelecionarCampanhaTipoSuccessAction = /** @class */ (function () {
    function SelecionarCampanhaTipoSuccessAction(campanhaTipo) {
        this.campanhaTipo = campanhaTipo;
        this.type = CampanhasTypesActions.SELECIONAR_SUCCESS;
    }
    return SelecionarCampanhaTipoSuccessAction;
}());

var SelecionarCampanhaTipoFailAction = /** @class */ (function () {
    function SelecionarCampanhaTipoFailAction(message) {
        this.message = message;
        this.type = CampanhasTypesActions.SELECIONAR_FAIL;
    }
    return SelecionarCampanhaTipoFailAction;
}());

var SelecionarCampanhaNdSuccessAction = /** @class */ (function () {
    function SelecionarCampanhaNdSuccessAction(campanhaNd) {
        this.campanhaNd = campanhaNd;
        this.type = CampanhasTypesActions.SELECIONAR_SUCCESS;
    }
    return SelecionarCampanhaNdSuccessAction;
}());

var SelecionarCampanhaNdFailAction = /** @class */ (function () {
    function SelecionarCampanhaNdFailAction(message) {
        this.message = message;
        this.type = CampanhasTypesActions.SELECIONAR_FAIL;
    }
    return SelecionarCampanhaNdFailAction;
}());



/***/ }),

/***/ "./src/app/campanhas/campanhas.effects.ts":
/*!************************************************!*\
  !*** ./src/app/campanhas/campanhas.effects.ts ***!
  \************************************************/
/*! exports provided: CampanhasEffects */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CampanhasEffects", function() { return CampanhasEffects; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _campanhas_actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./campanhas.actions */ "./src/app/campanhas/campanhas.actions.ts");
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/effects */ "./node_modules/@ngrx/effects/fesm5/effects.js");
/* harmony import */ var _campanhas_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./campanhas.service */ "./src/app/campanhas/campanhas.service.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var CampanhasEffects = /** @class */ (function () {
    function CampanhasEffects(actions$, campanhasService) {
        var _this = this;
        this.actions$ = actions$;
        this.campanhasService = campanhasService;
        this.buscar$ = this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["ofType"])(_campanhas_actions__WEBPACK_IMPORTED_MODULE_1__["CampanhasTypesActions"].BUSCAR), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["mergeMap"])(function (_a) {
            var params = _a.params;
            return _this.campanhasService.findCampanha(params).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (campanhas) {
                return new _campanhas_actions__WEBPACK_IMPORTED_MODULE_1__["BuscarCampanhasSuccessAction"](campanhas['campanha']);
            })
            // catchError(() => new BuscarCampanhasFailAction())
            );
        }));
        this.buscarCampanhaEmpresa$ = this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["ofType"])(_campanhas_actions__WEBPACK_IMPORTED_MODULE_1__["CampanhasTypesActions"].BUSCAR), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["mergeMap"])(function (_a) {
            var params = _a.params;
            return _this.campanhasService.findCampanhaEmpresa(params).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (campanhasEmpresa) {
                return new _campanhas_actions__WEBPACK_IMPORTED_MODULE_1__["BuscarCampanhasEmpresaSuccessAction"](campanhasEmpresa['campanha_empresa']);
            })
            // catchError(() => new BuscarCampanhasFailAction())
            );
        }));
        this.buscarCampanhaMaterial$ = this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["ofType"])(_campanhas_actions__WEBPACK_IMPORTED_MODULE_1__["CampanhasTypesActions"].BUSCAR), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["mergeMap"])(function (_a) {
            var params = _a.params;
            return _this.campanhasService.findCampanhaMaterial(params).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (campanhasMaterial) {
                return new _campanhas_actions__WEBPACK_IMPORTED_MODULE_1__["BuscarCampanhasMaterialSuccessAction"](campanhasMaterial['campanha_material']);
            })
            // catchError(() => new BuscarCampanhasFailAction())
            );
        }));
        this.buscarCampanhaTipo$ = this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["ofType"])(_campanhas_actions__WEBPACK_IMPORTED_MODULE_1__["CampanhasTypesActions"].BUSCAR), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["mergeMap"])(function (_a) {
            var params = _a.params;
            return _this.campanhasService.findCampanhaTipo(params).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (campanhasTipo) {
                return new _campanhas_actions__WEBPACK_IMPORTED_MODULE_1__["BuscarCampanhasTipoSuccessAction"](campanhasTipo['campanha_tipo']);
            })
            // catchError(() => new BuscarCampanhasFailAction())
            );
        }));
        this.buscarCampanhaModelo$ = this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["ofType"])(_campanhas_actions__WEBPACK_IMPORTED_MODULE_1__["CampanhasTypesActions"].BUSCAR), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["mergeMap"])(function (_a) {
            var params = _a.params;
            return _this.campanhasService.findCampanhaModelo(params).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (campanhasModelo) {
                return new _campanhas_actions__WEBPACK_IMPORTED_MODULE_1__["BuscarCampanhasModeloSuccessAction"](campanhasModelo['campanha_modelo']);
            })
            // catchError(() => new BuscarCampanhasFailAction())
            );
        }));
        this.buscarCampanhaNd$ = this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["ofType"])(_campanhas_actions__WEBPACK_IMPORTED_MODULE_1__["CampanhasTypesActions"].BUSCAR), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["mergeMap"])(function (_a) {
            var params = _a.params;
            return _this.campanhasService.findCampanhaNd(params).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (campanhasNd) {
                return new _campanhas_actions__WEBPACK_IMPORTED_MODULE_1__["BuscarCampanhasModeloSuccessAction"](campanhasNd['campanha_nd']);
            })
            // catchError(() => new BuscarCampanhasFailAction())
            );
        }));
        this.criar$ = this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["ofType"])(_campanhas_actions__WEBPACK_IMPORTED_MODULE_1__["CampanhasTypesActions"].CRIAR), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["mergeMap"])(function (action) {
            return _this.campanhasService
                .createCampanha(action.campanha)
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (campanha) {
                return new _campanhas_actions__WEBPACK_IMPORTED_MODULE_1__["CriarCampanhaSuccessAction"](campanha['campanha']);
            }));
        }));
        this.selecionar$ = this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["ofType"])(_campanhas_actions__WEBPACK_IMPORTED_MODULE_1__["CampanhasTypesActions"].SELECIONAR), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["mergeMap"])(function (action) {
            return _this.campanhasService
                .getCampanhaById(action.id)
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (campanha) {
                return new _campanhas_actions__WEBPACK_IMPORTED_MODULE_1__["SelecionarCampanhaSuccessAction"](campanha['campanha']);
            }));
        }));
        this.selecionarCampanhaEmpresa$ = this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["ofType"])(_campanhas_actions__WEBPACK_IMPORTED_MODULE_1__["CampanhasTypesActions"].SELECIONAR), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["mergeMap"])(function (action) {
            return _this.campanhasService
                .getCampanhasEmpresa()
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (campanhaEmpresa) {
                return new _campanhas_actions__WEBPACK_IMPORTED_MODULE_1__["SelecionarCampanhaSuccessAction"]((campanhaEmpresa['campanha_empresa']));
            }));
        }));
        // @Effect()
        this.selecionarCampanhaMaterial$ = this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["ofType"])(_campanhas_actions__WEBPACK_IMPORTED_MODULE_1__["CampanhasTypesActions"].SELECIONAR), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["mergeMap"])(function (action) {
            return _this.campanhasService
                .getCampanhasMaterial()
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (campanhaMaterial) {
                return new _campanhas_actions__WEBPACK_IMPORTED_MODULE_1__["SelecionarCampanhaSuccessAction"]((campanhaMaterial['campanha_material']));
            }));
        }));
        this.selecionarCampanhaModelo$ = this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["ofType"])(_campanhas_actions__WEBPACK_IMPORTED_MODULE_1__["CampanhasTypesActions"].SELECIONAR), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["mergeMap"])(function (action) {
            return _this.campanhasService
                .getCampanhasModelo()
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (campanhaModelo) {
                return new _campanhas_actions__WEBPACK_IMPORTED_MODULE_1__["SelecionarCampanhaSuccessAction"]((campanhaModelo['campanha_modelo']));
            }));
        }));
        this.selecionarCampanhaTipo$ = this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["ofType"])(_campanhas_actions__WEBPACK_IMPORTED_MODULE_1__["CampanhasTypesActions"].SELECIONAR), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["mergeMap"])(function (action) {
            return _this.campanhasService
                .getCampanhasTipo()
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (CampanhaTipo) {
                return new _campanhas_actions__WEBPACK_IMPORTED_MODULE_1__["SelecionarCampanhaSuccessAction"]((CampanhaTipo['campanha_tipo']));
            }));
        }));
    }
    __decorate([
        Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Effect"])(),
        __metadata("design:type", Object)
    ], CampanhasEffects.prototype, "buscar$", void 0);
    __decorate([
        Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Effect"])(),
        __metadata("design:type", Object)
    ], CampanhasEffects.prototype, "buscarCampanhaEmpresa$", void 0);
    __decorate([
        Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Effect"])(),
        __metadata("design:type", Object)
    ], CampanhasEffects.prototype, "buscarCampanhaMaterial$", void 0);
    __decorate([
        Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Effect"])(),
        __metadata("design:type", Object)
    ], CampanhasEffects.prototype, "buscarCampanhaTipo$", void 0);
    __decorate([
        Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Effect"])(),
        __metadata("design:type", Object)
    ], CampanhasEffects.prototype, "buscarCampanhaModelo$", void 0);
    __decorate([
        Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Effect"])(),
        __metadata("design:type", Object)
    ], CampanhasEffects.prototype, "buscarCampanhaNd$", void 0);
    __decorate([
        Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Effect"])(),
        __metadata("design:type", Object)
    ], CampanhasEffects.prototype, "criar$", void 0);
    __decorate([
        Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Effect"])(),
        __metadata("design:type", Object)
    ], CampanhasEffects.prototype, "selecionar$", void 0);
    __decorate([
        Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Effect"])(),
        __metadata("design:type", Object)
    ], CampanhasEffects.prototype, "selecionarCampanhaEmpresa$", void 0);
    __decorate([
        Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Effect"])(),
        __metadata("design:type", Object)
    ], CampanhasEffects.prototype, "selecionarCampanhaModelo$", void 0);
    __decorate([
        Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Effect"])(),
        __metadata("design:type", Object)
    ], CampanhasEffects.prototype, "selecionarCampanhaTipo$", void 0);
    CampanhasEffects = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Actions"],
            _campanhas_service__WEBPACK_IMPORTED_MODULE_3__["CampanhasService"]])
    ], CampanhasEffects);
    return CampanhasEffects;
}());



/***/ }),

/***/ "./src/app/campanhas/campanhas.module.ts":
/*!***********************************************!*\
  !*** ./src/app/campanhas/campanhas.module.ts ***!
  \***********************************************/
/*! exports provided: CampanhasModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CampanhasModule", function() { return CampanhasModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _campanhas_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./campanhas-routing.module */ "./src/app/campanhas/campanhas-routing.module.ts");
/* harmony import */ var _form_form_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./form/form.component */ "./src/app/campanhas/form/form.component.ts");
/* harmony import */ var _search_search_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./search/search.component */ "./src/app/campanhas/search/search.component.ts");
/* harmony import */ var _campanhas_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./campanhas.service */ "./src/app/campanhas/campanhas.service.ts");
/* harmony import */ var _campanhas_reducer__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./campanhas.reducer */ "./src/app/campanhas/campanhas.reducer.ts");
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ngrx/effects */ "./node_modules/@ngrx/effects/fesm5/effects.js");
/* harmony import */ var _campanhas_effects__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./campanhas.effects */ "./src/app/campanhas/campanhas.effects.ts");
/* harmony import */ var _details_details_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./details/details.component */ "./src/app/campanhas/details/details.component.ts");
/* harmony import */ var _details_fail_details_fail_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./details-fail/details-fail.component */ "./src/app/campanhas/details-fail/details-fail.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};















var CampanhasModule = /** @class */ (function () {
    function CampanhasModule() {
    }
    CampanhasModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_5__["SharedModule"],
                _campanhas_routing_module__WEBPACK_IMPORTED_MODULE_6__["CampanhasRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbModule"],
                _ngrx_store__WEBPACK_IMPORTED_MODULE_4__["StoreModule"].forFeature('campanhas', _campanhas_reducer__WEBPACK_IMPORTED_MODULE_10__["campanhaReducer"]),
                _ngrx_effects__WEBPACK_IMPORTED_MODULE_11__["EffectsModule"].forFeature([_campanhas_effects__WEBPACK_IMPORTED_MODULE_12__["CampanhasEffects"]])
            ],
            declarations: [
                _search_search_component__WEBPACK_IMPORTED_MODULE_8__["SearchComponent"],
                _form_form_component__WEBPACK_IMPORTED_MODULE_7__["FormComponent"],
                _details_details_component__WEBPACK_IMPORTED_MODULE_13__["DetailsComponent"],
                _details_fail_details_fail_component__WEBPACK_IMPORTED_MODULE_14__["DetailsFailComponent"]
            ],
            providers: [_campanhas_service__WEBPACK_IMPORTED_MODULE_9__["CampanhasService"]]
        })
    ], CampanhasModule);
    return CampanhasModule;
}());



/***/ }),

/***/ "./src/app/campanhas/campanhas.reducer.ts":
/*!************************************************!*\
  !*** ./src/app/campanhas/campanhas.reducer.ts ***!
  \************************************************/
/*! exports provided: campanhaReducer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "campanhaReducer", function() { return campanhaReducer; });
/* harmony import */ var _campanhas_state__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./campanhas.state */ "./src/app/campanhas/campanhas.state.ts");
/* harmony import */ var _campanhas_actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./campanhas.actions */ "./src/app/campanhas/campanhas.actions.ts");
var __assign = (undefined && undefined.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};


function campanhaReducer(state, action) {
    if (state === void 0) { state = _campanhas_state__WEBPACK_IMPORTED_MODULE_0__["initialState"]; }
    switch (action.type) {
        case _campanhas_actions__WEBPACK_IMPORTED_MODULE_1__["CampanhasTypesActions"].BUSCAR:
            return __assign({}, state, { loading: true });
        case _campanhas_actions__WEBPACK_IMPORTED_MODULE_1__["CampanhasTypesActions"].BUSCAR_SUCCESS:
            return __assign({}, state, { ids: action.campanhas.map(function (campanha) { return campanha.id; }), entities: action.campanhas.reduce(function (curr, next) {
                    var _a;
                    return (__assign({}, curr, (_a = {}, _a[next.id] = next, _a)));
                }, {}), loading: false });
        case _campanhas_actions__WEBPACK_IMPORTED_MODULE_1__["CampanhasTypesActions"].CRIAR:
            return __assign({}, state, { loading: true });
        case _campanhas_actions__WEBPACK_IMPORTED_MODULE_1__["CampanhasTypesActions"].CRIAR_SUCCESS:
            return __assign({}, state, { loading: false });
        //se não estiver selecionado buscar no erver, criar uma effect pra isso
        case _campanhas_actions__WEBPACK_IMPORTED_MODULE_1__["CampanhasTypesActions"].SELECIONAR:
            return __assign({}, state, { selecionada: parseInt(action.id), selecionadaLoading: true });
        case _campanhas_actions__WEBPACK_IMPORTED_MODULE_1__["CampanhasTypesActions"].SELECIONAR_SUCCESS:
            return _campanhas_state__WEBPACK_IMPORTED_MODULE_0__["campanhasAdapter"].addOne(action.campanha, __assign({}, state, { selecionadaLoading: false }));
        default:
            return state;
    }
}


/***/ }),

/***/ "./src/app/campanhas/campanhas.service.ts":
/*!************************************************!*\
  !*** ./src/app/campanhas/campanhas.service.ts ***!
  \************************************************/
/*! exports provided: CampanhasService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CampanhasService", function() { return CampanhasService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var CampanhasService = /** @class */ (function () {
    function CampanhasService(http) {
        this.http = http;
    }
    //campanhas
    CampanhasService.prototype.getCampanhas = function () {
        return this.http.get('/api/campanha');
    };
    CampanhasService.prototype.createCampanha = function (campanha) {
        return this.http.post('/api/campanha', campanha);
    };
    CampanhasService.prototype.getCampanhaById = function (id) {
        //return this.http.get<Campanha>('/api/campanha' + '/' + id);
        return this.http
            .get('/api/campanha', {
            params: { id: id }
        })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (data) { return ({ campanha: data['campanha'][0] }); }));
    };
    CampanhasService.prototype.findCampanha = function (dict) {
        return this.http.get('/api/campanha', {
            params: dict
        });
    };
    CampanhasService.prototype.deleteCampanha = function (id) {
        return this.http.delete('/api/campanha' + '/' + id);
    };
    //campanha material
    CampanhasService.prototype.getCampanhasMaterial = function () {
        return this.http.get('/api/campanha_material');
    };
    CampanhasService.prototype.getCampanhaMaterialById = function (id) {
        //return this.http.get<Campanha>('/api/campanha' + '/' + id);
        return this.http
            .get('/api/campanha_material', {
            params: { id: id }
        })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (data) { return ({ campanha: data['campanha_material'][0] }); }));
    };
    CampanhasService.prototype.findCampanhaMaterial = function (dict) {
        return this.http.get('/api/campanha_material', {
            params: dict
        });
    };
    //campanha nd
    CampanhasService.prototype.getCampanhasNd = function () {
        return this.http.get('/api/campanha_nd');
    };
    CampanhasService.prototype.getCampanhaNdById = function (id) {
        //return this.http.get<Campanha>('/api/campanha' + '/' + id);
        return this.http
            .get('/api/campanha_nd', {
            params: { id: id }
        })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (data) { return ({ campanha: data['campanha_nd'][0] }); }));
    };
    CampanhasService.prototype.findCampanhaNd = function (dict) {
        return this.http.get('/api/campanha_nd', {
            params: dict
        });
    };
    //campanha tipo
    CampanhasService.prototype.getCampanhasTipo = function () {
        return this.http.get('/api/campanha_tipo');
    };
    CampanhasService.prototype.getCampanhaTipoById = function (id) {
        //return this.http.get<Campanha>('/api/campanha' + '/' + id);
        return this.http
            .get('/api/campanha_tipo', {
            params: { id: id }
        })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (data) { return ({ campanha: data['campanha_tipo'][0] }); }));
    };
    CampanhasService.prototype.findCampanhaTipo = function (dict) {
        return this.http.get('/api/campanha_tipo', {
            params: dict
        });
    };
    //campanha modelo
    CampanhasService.prototype.getCampanhasModelo = function () {
        return this.http.get('/api/campanha_modelo');
    };
    CampanhasService.prototype.getCampanhaModeloById = function (id) {
        //return this.http.get<Campanha>('/api/campanha' + '/' + id);
        return this.http
            .get('/api/campanha_modelo', {
            params: { id: id }
        })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (data) { return ({ campanha: data['campanha_modelo'][0] }); }));
    };
    CampanhasService.prototype.findCampanhaModelo = function (dict) {
        return this.http.get('/api/campanha_modelo', {
            params: dict
        });
    };
    //campanha empresa
    CampanhasService.prototype.getCampanhasEmpresa = function () {
        return this.http.get('/api/campanha_empresa');
    };
    CampanhasService.prototype.getCampanhaEmpresaById = function (id) {
        //return this.http.get<Campanha>('/api/campanha' + '/' + id);
        return this.http
            .get('/api/campanha_empresa', {
            params: { id: id }
        })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (data) { return ({ campanha: data['campanha_empresa'][0] }); }));
    };
    CampanhasService.prototype.findCampanhaEmpresa = function (dict) {
        return this.http.get('/api/campanha_empresa', {
            params: dict
        });
    };
    CampanhasService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], CampanhasService);
    return CampanhasService;
}());



/***/ }),

/***/ "./src/app/campanhas/campanhas.state.ts":
/*!**********************************************!*\
  !*** ./src/app/campanhas/campanhas.state.ts ***!
  \**********************************************/
/*! exports provided: campanhasAdapter, initialState, selectCampanhas, selectCampanhasAll, selectCampanhasSelecionadaId, selectCampanhasSelecionada */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "campanhasAdapter", function() { return campanhasAdapter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initialState", function() { return initialState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectCampanhas", function() { return selectCampanhas; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectCampanhasAll", function() { return selectCampanhasAll; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectCampanhasSelecionadaId", function() { return selectCampanhasSelecionadaId; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectCampanhasSelecionada", function() { return selectCampanhasSelecionada; });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var _ngrx_entity__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngrx/entity */ "./node_modules/@ngrx/entity/fesm5/entity.js");


var campanhasAdapter = Object(_ngrx_entity__WEBPACK_IMPORTED_MODULE_1__["createEntityAdapter"])();
var initialState = campanhasAdapter.getInitialState({
    loading: false,
    selecionada: null,
    selecionadaLoading: false
});
var selectCampanhas = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createFeatureSelector"])('campanhas');
var selectAll = campanhasAdapter.getSelectors().selectAll;
var selectCampanhasAll = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(selectCampanhas, selectAll);
var selectCampanhasSelecionadaId = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(selectCampanhas, function (state) { return state.selecionada; });
var selectCampanhasSelecionada = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(selectCampanhas, selectCampanhasSelecionadaId, function (state, selecionadaId) { return state.entities[selecionadaId] || {}; });


/***/ }),

/***/ "./src/app/campanhas/details-fail/details-fail.component.html":
/*!********************************************************************!*\
  !*** ./src/app/campanhas/details-fail/details-fail.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"main\">\n  <div class=\"margem\">\n    <div class=\"row\">\n      <div class=\"col-md-6\"></div>\n      <div class=\"col-md-6\">\n        <div class=\"col-md-3\" style=\"margin-left: auto;\">\n          <h3><span class=\"label label-warning\">Pendente</span></h3>\n        </div>\n      </div>\n    </div>\n    <br />\n    <br />\n    <div class=\"row\">\n      <div class=\"col-md-2\">\n        <div class=\"card\">\n          <div class=\"card-body\">\n            <h5>Valor Samsung</h5>\n            <h3>R$ 400.000000</h3>\n            <span class=\"label label-danger\">Incorreto </span>\n          </div>\n        </div>\n      </div>\n      <div class=\"col-md-2\">\n        <div class=\"card\">\n          <div class=\"card-body\">\n            <h5>Valor Varejo Mais</h5>\n            <h3>R$ 400.006394</h3>\n            <span class=\"label label-danger\">Incorreto</span>\n          </div>\n        </div>\n      </div>\n      <div class=\"col-md-2\">\n        <div class=\"card\">\n          <div class=\"card-body\">\n            <h5>Valor do Desconto</h5>\n            <h3><i class=\"fa fa-tags\"></i> &nbsp;R$ 40000</h3>\n            <span class=\"label label-danger\">Incorreto</span>\n          </div>\n        </div>\n      </div>\n      <div class=\"col-md-2\">\n        <div class=\"card\">\n          <div class=\"card-body\">\n            <h5>Quantidade Varejo Mais</h5>\n            <h3><i class=\"fa fa-arrow-up\"></i> &nbsp; 500000</h3>\n            <span class=\"label label-success\">Correto</span>\n          </div>\n        </div>\n      </div>\n      <div class=\"col-md-2\">\n        <div class=\"card\">\n          <div class=\"card-body\">\n            <h5>Quantidade Samsung</h5>\n            <h3><i class=\"fa fa-arrow-up\"></i> &nbsp; 500000</h3>\n            <span class=\"label label-success\">Correto</span>\n          </div>\n        </div>\n      </div>\n    </div>\n    <div class=\"row\">\n      <div class=\"col-md-10\">\n        <div class=\"card\">\n          <div class=\"card-header\">\n            <i class=\"fa fa-align-justify\"></i> Produtos\n          </div>\n          <div class=\" card-body\">\n            <div>\n              <div class=\"form-check\">\n                <label class=\"form-check-label\">\n                  <input\n                    class=\"form-check-input\"\n                    name=\"active\"\n                    id=\"active\"\n                    type=\"checkbox\"\n                    formControlName=\"active\"\n                  />\n                  Com divergência &nbsp; <span class=\"form-check-sign\"></span>\n                </label>\n                <label class=\"form-check-label\">\n                  <input\n                    class=\"form-check-input\"\n                    name=\"active\"\n                    id=\"active\"\n                    type=\"checkbox\"\n                    formControlName=\"active\"\n                  />\n                  Sem divergência <span class=\"form-check-sign\"></span>\n                </label>\n              </div>\n            </div>\n            <div\n              class=\"form-group\"\n              style=\"overflow-x:auto; overflow:scroll;height:400px;width:100%;\"\n            >\n              <table class=\" table table-striped \">\n                <thead>\n                  <tr>\n                    <th>Nome</th>\n                    <th>Referencia</th>\n                    <th>Qtd Samsung</th>\n                    <th>Qtd V+</th>\n                    <th>Valor Samsung</th>\n                    <th>Valor V+</th>\n                    <th>Divergência qtd</th>\n                    <th>Divergência Valor</th>\n\n                    <th>Status</th>\n                    <th></th>\n                    <th></th>\n                  </tr>\n                </thead>\n                <tbody>\n                  <tr>\n                    <td>Campanha nd 2</td>\n                    <td>2sfsd3esf</td>\n\n                    <td>15</td>\n\n                    <td>15</td>\n                    <td>100000</td>\n\n                    <td>100350</td>\n\n                    <td>0</td>\n                    <td>-350</td>\n\n                    <td><span class=\"label label-danger\">Incorreto</span></td>\n                    <td>\n                      <div class=\"form-check\">\n                        <label>\n                          <input\n                            class=\"form-check-input\"\n                            name=\"active\"\n                            id=\"active\"\n                            type=\"checkbox\"\n                            formControlName=\"active\"\n                          />\n                          <span class=\"form-check-sign\"></span>\n                        </label>\n                      </div>\n                    </td>\n                    <td></td>\n                  </tr>\n                  <tr>\n                    <td>&nbsp; &nbsp; &nbsp;Galaxy s9 plus</td>\n                    <td>7sfsd87sf</td>\n\n                    <td>15</td>\n\n                    <td>17</td>\n                    <td>1000000</td>\n\n                    <td>1006000</td>\n\n                    <td>-2</td>\n                    <td>-6000</td>\n\n                    <td><span class=\"label label-success\">Correto</span></td>\n                    <td>\n                      <div class=\"form-check\">\n                        <label>\n                          <input\n                            class=\"form-check-input\"\n                            name=\"active\"\n                            id=\"active\"\n                            type=\"checkbox\"\n                            formControlName=\"active\"\n                          />\n                          <span class=\"form-check-sign\"></span>\n                        </label>\n                      </div>\n                    </td>\n                  </tr>\n                  <tr>\n                    <td>&nbsp; &nbsp; &nbsp;Galaxy s9 plus</td>\n                    <td>7sfsd87sf</td>\n\n                    <td>15</td>\n\n                    <td>17</td>\n                    <td>1000000</td>\n\n                    <td>1006000</td>\n\n                    <td>-2</td>\n                    <td>-6000</td>\n\n                    <td><span class=\"label label-success\">Correto</span></td>\n                    <td>\n                      <div class=\"form-check\">\n                        <label>\n                          <input\n                            class=\"form-check-input\"\n                            name=\"active\"\n                            id=\"active\"\n                            type=\"checkbox\"\n                            formControlName=\"active\"\n                          />\n                          <span class=\"form-check-sign\"></span>\n                        </label>\n                      </div>\n                    </td>\n                    <td></td>\n                  </tr>\n                  <tr>\n                    <td>&nbsp; &nbsp; &nbsp;Galaxy s9 plus</td>\n                    <td>7sfsd87sf</td>\n\n                    <td>15</td>\n\n                    <td>17</td>\n                    <td>1000000</td>\n\n                    <td>1006000</td>\n\n                    <td>-2</td>\n                    <td>-6000</td>\n\n                    <td><span class=\"label label-success\">Correto</span></td>\n                    <td>\n                      <div class=\"form-check\">\n                        <label>\n                          <input\n                            class=\"form-check-input\"\n                            name=\"active\"\n                            id=\"active\"\n                            type=\"checkbox\"\n                            formControlName=\"active\"\n                          />\n                          <span class=\"form-check-sign\"></span>\n                        </label>\n                      </div>\n                    </td>\n                    <td></td>\n                  </tr>\n                  <tr>\n                    <td>&nbsp; &nbsp; &nbsp;Galaxy s9 plus</td>\n                    <td>7sfsd87sf</td>\n\n                    <td>15</td>\n\n                    <td>17</td>\n                    <td>1000000</td>\n\n                    <td>1006000</td>\n\n                    <td>-2</td>\n                    <td>-6000</td>\n\n                    <td><span class=\"label label-danger\">Incorreto</span></td>\n                    <td>\n                      <div class=\"form-check\">\n                        <label>\n                          <input\n                            class=\"form-check-input\"\n                            name=\"active\"\n                            id=\"active\"\n                            type=\"checkbox\"\n                            formControlName=\"active\"\n                          />\n                          <span class=\"form-check-sign\"></span>\n                        </label>\n                      </div>\n                    </td>\n                    <td></td>\n                  </tr>\n                  <tr>\n                    <td>&nbsp; &nbsp; &nbsp;Galaxy s9 plus</td>\n                    <td>7sfsd87sf</td>\n\n                    <td>15</td>\n\n                    <td>17</td>\n                    <td>1000000</td>\n\n                    <td>1006000</td>\n\n                    <td>-2</td>\n                    <td>-6000</td>\n\n                    <td><span class=\"label label-danger\">Incorreto</span></td>\n                    <td>\n                      <div class=\"form-check\">\n                        <label>\n                          <input\n                            class=\"form-check-input\"\n                            name=\"active\"\n                            id=\"active\"\n                            type=\"checkbox\"\n                            formControlName=\"active\"\n                          />\n                          <span class=\"form-check-sign\"></span>\n                        </label>\n                      </div>\n                    </td>\n                    <td></td>\n                  </tr>\n                  <tr>\n                    <td>&nbsp; &nbsp; &nbsp;Galaxy s9 plus</td>\n                    <td>7sfsd87sf</td>\n\n                    <td>15</td>\n\n                    <td>17</td>\n                    <td>1000000</td>\n\n                    <td>1006000</td>\n\n                    <td>-2</td>\n                    <td>-6000</td>\n\n                    <td><span class=\"label label-success\">Correto</span></td>\n                    <td>\n                      <div class=\"form-check\">\n                        <label>\n                          <input\n                            class=\"form-check-input\"\n                            name=\"active\"\n                            id=\"active\"\n                            type=\"checkbox\"\n                            formControlName=\"active\"\n                          />\n                          <span class=\"form-check-sign\"></span>\n                        </label>\n                      </div>\n                    </td>\n                  </tr>\n                  <tr>\n                    <td>&nbsp; &nbsp; &nbsp;Galaxy s9 plus</td>\n                    <td>7sfsd87sf</td>\n\n                    <td>15</td>\n\n                    <td>17</td>\n                    <td>1000000</td>\n\n                    <td>1006000</td>\n\n                    <td>-2</td>\n                    <td>-6000</td>\n\n                    <td><span class=\"label label-danger\">Incorreto</span></td>\n                    <td>\n                      <div class=\"form-check\">\n                        <label>\n                          <input\n                            class=\"form-check-input\"\n                            name=\"active\"\n                            id=\"active\"\n                            type=\"checkbox\"\n                            formControlName=\"active\"\n                          />\n                          <span class=\"form-check-sign\"></span>\n                        </label>\n                      </div>\n                    </td>\n                  </tr>\n                </tbody>\n              </table>\n            </div>\n          </div>\n        </div>\n      </div>\n      <div class=\"col-md-2\">\n        <div class=\"card\">\n          <div class=\"card-header\">\n            <i class=\"fa fa-history\"></i> <strong> Histórico</strong>\n          </div>\n          <div\n            class=\"card-body\"\n            style=\"overflow:scroll;height:400px;width:100%;overflow:auto\"\n          >\n            <div class=\"timeline\">\n              <ul>\n                <li>\n                  <div class=\"bullet pink\"></div>\n                  <div class=\"time\">5pm</div>\n                  <div class=\"desc\">\n                    <h3>Campanha conferida</h3>\n                    <h4>Realizado por usuário: financeiro</h4>\n                  </div>\n                </li>\n                <li>\n                  <div class=\"bullet green\"></div>\n                  <div class=\"time\">3 - 4pm</div>\n                  <div class=\"desc\">\n                    <h3>Nota de débito gerada e enviada para a samsung</h3>\n                    <h4>Realizado por usuário: administrador</h4>\n                  </div>\n                </li>\n                <li>\n                  <div class=\"bullet orange\"></div>\n                  <div class=\"time\">12pm</div>\n                  <div class=\"desc\">\n                    <h3>Samsung dá retorno</h3>\n                    <h4>Realizado por usuário: financeiro</h4>\n\n                    <h4>Nota de débito aceita</h4>\n                  </div>\n                </li>\n                <li>\n                  <div class=\"bullet green\"></div>\n                  <div class=\"time\">9 - 11am</div>\n                  <div class=\"desc\">\n                    <h3>Samsung realiza pagamento</h3>\n                    <h4>Cadastrado por usuário: administrador</h4>\n                  </div>\n                </li>\n                <li>\n                  <div class=\"bullet green\"></div>\n                  <div class=\"time\">9 - 11am</div>\n                  <div class=\"desc\">\n                    <h3>Varejo mais recebe pagamento</h3>\n                    <h4>pagamento contabilizado com sucesso</h4>\n                    <h4>Cadastrado por usuário: financeiro</h4>\n                  </div>\n                </li>\n                <li>\n                  <div class=\"bullet pink\"></div>\n                  <div class=\"time\">5pm</div>\n                  <div class=\"desc\">\n                    <h3>Campanha contestada a samsung</h3>\n                    <h4>Realizado por usuário: financeiro</h4>\n                  </div>\n                </li>\n                <li>\n                  <div class=\"bullet green\"></div>\n                  <div class=\"time\">7pm</div>\n                  <div class=\"desc\">\n                    <h3>Samsung dá retorno</h3>\n                    <h4>samsung não aceita contestação</h4>\n                    <h4>Realizado por usuário: financeiro</h4>\n                  </div>\n                </li>\n              </ul>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n    <div class=\"row\">\n      <button class=\"btn btn-primary btn-round\">Gerar nota de débito</button>\n      <button class=\"btn btn-round\">Contestar</button>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/campanhas/details-fail/details-fail.component.scss":
/*!********************************************************************!*\
  !*** ./src/app/campanhas/details-fail/details-fail.component.scss ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container2 {\n  max-width: 350px;\n  max-height: 630px;\n  overflow: hidden;\n  margin: 30px auto 0;\n  box-shadow: 0 0 40px #a09f9f;\n  font-family: 'Open Sans', sans-serif; }\n\n.profile-pic {\n  width: 30px;\n  height: 30px;\n  display: inline-block;\n  float: right;\n  position: relative; }\n\n.profile-pic img {\n    width: 100%;\n    border-radius: 50%; }\n\n.notification {\n  position: absolute;\n  width: 5px;\n  height: 5px;\n  border-radius: 50%;\n  top: 2px;\n  right: 2px;\n  background: #f93b69; }\n\n.color-overlay {\n  padding: 3em 2em;\n  box-sizing: border-box;\n  background: rgba(123, 94, 155, 0.5); }\n\n.actionbutton {\n  position: absolute;\n  background: #f93b69;\n  width: 50px;\n  height: 50px;\n  font-size: 3em;\n  font-weight: 300;\n  border-radius: 50%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  bottom: -25px;\n  right: 20px;\n  box-shadow: 0 0 8px #202020; }\n\n.day-number {\n  font-size: 4em;\n  display: inline-block;\n  margin-right: 15px; }\n\n.date-right {\n  display: inline-block; }\n\n.day-name {\n  font-size: 1.6em; }\n\n.month {\n  text-transform: uppercase;\n  font-weight: 300;\n  font-size: 0.6em;\n  letter-spacing: 2px;\n  margin-top: 2px; }\n\n.timeline ul {\n  padding: 1em 0 0 2em;\n  margin: 0;\n  list-style: none;\n  position: relative; }\n\n.timeline ul::before {\n    content: ' ';\n    height: 100%;\n    width: 1px;\n    background-color: #d9d9d9;\n    position: absolute;\n    top: 0;\n    left: 2.5em;\n    z-index: -1; }\n\n.timeline li div {\n  display: inline-block;\n  margin: 1em 0;\n  vertical-align: top; }\n\n.timeline .bullet {\n  width: 1em;\n  height: 1em;\n  box-sizing: border-box;\n  border-radius: 50%;\n  background: #fff;\n  z-index: 1;\n  margin-right: 1em; }\n\n.timeline .bullet.pink {\n    border: 2px solid #f93b69; }\n\n.timeline .bullet.green {\n    border: 2px solid #b0e8e2; }\n\n.timeline .bullet.orange {\n    border: 2px solid #eb8b6e; }\n\n.timeline .time {\n  width: 20%;\n  font-size: 0.75em;\n  padding-top: 0.25em; }\n\n.timeline .desc {\n  width: 50%; }\n\n.timeline h3 {\n  font-size: 0.9em;\n  font-weight: 400;\n  margin: 0; }\n\n.timeline h4 {\n  margin: 0;\n  font-size: 0.7em;\n  font-weight: 400;\n  color: #808080; }\n\n.timeline .people img {\n  width: 30px;\n  height: 30px;\n  border-radius: 50%; }\n\n.credits,\n.video {\n  position: absolute;\n  bottom: 10px;\n  color: #808080;\n  font-size: 100%;\n  text-decoration: underline; }\n\n.credits {\n  left: 10px; }\n\n.video {\n  right: 10px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3NhcmEvRG9jdW1lbnRvcy9wcm9qZXRvcy9jaWEvcHJvamV0b3MvY2lhX2Zyb250ZW5kL3NyYy9hcHAvY2FtcGFuaGFzL2RldGFpbHMtZmFpbC9kZXRhaWxzLWZhaWwuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBU0E7RUFDRSxnQkFBZ0I7RUFDaEIsaUJBQWlCO0VBQ2pCLGdCQUFnQjtFQUNoQixtQkFBbUI7RUFDbkIsNEJBQXdDO0VBQ3hDLG9DQUFvQyxFQUFBOztBQUd0QztFQUNFLFdBQVc7RUFDWCxZQUFZO0VBQ1oscUJBQXFCO0VBQ3JCLFlBQVk7RUFDWixrQkFBa0IsRUFBQTs7QUFMcEI7SUFRSSxXQUFXO0lBQ1gsa0JBQWtCLEVBQUE7O0FBSXRCO0VBQ0Usa0JBQWtCO0VBQ2xCLFVBQVU7RUFDVixXQUFXO0VBQ1gsa0JBQWtCO0VBQ2xCLFFBQVE7RUFDUixVQUFVO0VBQ1YsbUJBakNZLEVBQUE7O0FBb0NkO0VBQ0UsZ0JBQWdCO0VBQ2hCLHNCQUFzQjtFQUN0QixtQ0FBbUMsRUFBQTs7QUFHckM7RUFDRSxrQkFBa0I7RUFDbEIsbUJBNUNZO0VBNkNaLFdBQVc7RUFDWCxZQUFZO0VBQ1osY0FBYztFQUNkLGdCQUFnQjtFQUNoQixrQkFBa0I7RUFDbEIsYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixtQkFBbUI7RUFDbkIsYUFBYTtFQUNiLFdBQVc7RUFDWCwyQkFBMkIsRUFBQTs7QUFHN0I7RUFDRSxjQUFjO0VBQ2QscUJBQXFCO0VBQ3JCLGtCQUFrQixFQUFBOztBQUdwQjtFQUNFLHFCQUFxQixFQUFBOztBQUd2QjtFQUNFLGdCQUFnQixFQUFBOztBQUdsQjtFQUNFLHlCQUF5QjtFQUN6QixnQkFBZ0I7RUFDaEIsZ0JBQWdCO0VBQ2hCLG1CQUFtQjtFQUNuQixlQUFlLEVBQUE7O0FBR2pCO0VBRUksb0JBQW9CO0VBQ3BCLFNBQVM7RUFDVCxnQkFBZ0I7RUFDaEIsa0JBQWtCLEVBQUE7O0FBTHRCO0lBUU0sWUFBWTtJQUNaLFlBQVk7SUFDWixVQUFVO0lBQ1YseUJBN0ZjO0lBOEZkLGtCQUFrQjtJQUNsQixNQUFNO0lBQ04sV0FBVztJQUNYLFdBQVcsRUFBQTs7QUFmakI7RUFvQkkscUJBQXFCO0VBQ3JCLGFBQWE7RUFDYixtQkFBbUIsRUFBQTs7QUF0QnZCO0VBMEJJLFVBQVU7RUFDVixXQUFXO0VBQ1gsc0JBQXNCO0VBQ3RCLGtCQUFrQjtFQUNsQixnQkFsSFE7RUFtSFIsVUFBVTtFQUNWLGlCQUFpQixFQUFBOztBQWhDckI7SUFtQ00seUJBbkhRLEVBQUE7O0FBZ0ZkO0lBdUNNLHlCQXRIUyxFQUFBOztBQStFZjtJQTJDTSx5QkF6SFUsRUFBQTs7QUE4RWhCO0VBZ0RJLFVBQVU7RUFDVixpQkFBaUI7RUFDakIsbUJBQW1CLEVBQUE7O0FBbER2QjtFQXNESSxVQUFVLEVBQUE7O0FBdERkO0VBMERJLGdCQUFnQjtFQUNoQixnQkFBZ0I7RUFDaEIsU0FBUyxFQUFBOztBQTVEYjtFQWdFSSxTQUFTO0VBQ1QsZ0JBQWdCO0VBQ2hCLGdCQUFnQjtFQUNoQixjQXRKZSxFQUFBOztBQW1GbkI7RUF1RUksV0FBVztFQUNYLFlBQVk7RUFDWixrQkFBa0IsRUFBQTs7QUFJdEI7O0VBRUUsa0JBQWtCO0VBQ2xCLFlBQVk7RUFDWixjQXBLaUI7RUFxS2pCLGVBQWU7RUFDZiwwQkFBMEIsRUFBQTs7QUFHNUI7RUFDRSxVQUFVLEVBQUE7O0FBR1o7RUFDRSxXQUFXLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9jYW1wYW5oYXMvZGV0YWlscy1mYWlsL2RldGFpbHMtZmFpbC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiRibGFjazogIzIwMjAyMDtcbiR3aGl0ZTogI2ZmZjtcbiRkYXJrLWdyZXk6ICM4MDgwODA7XG4kbGlnaHQtZ3JleTogI2Q5ZDlkOTtcbiRwdXJwbGU6ICNiOTdjZmM7XG4kcGluazogI2Y5M2I2OTtcbiRncmVlbjogI2IwZThlMjtcbiRvcmFuZ2U6ICNlYjhiNmU7XG5cbi5jb250YWluZXIyIHtcbiAgbWF4LXdpZHRoOiAzNTBweDtcbiAgbWF4LWhlaWdodDogNjMwcHg7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIG1hcmdpbjogMzBweCBhdXRvIDA7XG4gIGJveC1zaGFkb3c6IDAgMCA0MHB4IGxpZ2h0ZW4oJGJsYWNrLCA1MCk7XG4gIGZvbnQtZmFtaWx5OiAnT3BlbiBTYW5zJywgc2Fucy1zZXJpZjtcbn1cblxuLnByb2ZpbGUtcGljIHtcbiAgd2lkdGg6IDMwcHg7XG4gIGhlaWdodDogMzBweDtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBmbG9hdDogcmlnaHQ7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcblxuICBpbWcge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgfVxufVxuXG4ubm90aWZpY2F0aW9uIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB3aWR0aDogNXB4O1xuICBoZWlnaHQ6IDVweDtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICB0b3A6IDJweDtcbiAgcmlnaHQ6IDJweDtcbiAgYmFja2dyb3VuZDogJHBpbms7XG59XG5cbi5jb2xvci1vdmVybGF5IHtcbiAgcGFkZGluZzogM2VtIDJlbTtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgYmFja2dyb3VuZDogcmdiYSgxMjMsIDk0LCAxNTUsIDAuNSk7XG59XG5cbi5hY3Rpb25idXR0b24ge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJhY2tncm91bmQ6ICRwaW5rO1xuICB3aWR0aDogNTBweDtcbiAgaGVpZ2h0OiA1MHB4O1xuICBmb250LXNpemU6IDNlbTtcbiAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgYm90dG9tOiAtMjVweDtcbiAgcmlnaHQ6IDIwcHg7XG4gIGJveC1zaGFkb3c6IDAgMCA4cHggIzIwMjAyMDtcbn1cblxuLmRheS1udW1iZXIge1xuICBmb250LXNpemU6IDRlbTtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBtYXJnaW4tcmlnaHQ6IDE1cHg7XG59XG5cbi5kYXRlLXJpZ2h0IHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xufVxuXG4uZGF5LW5hbWUge1xuICBmb250LXNpemU6IDEuNmVtO1xufVxuXG4ubW9udGgge1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICBmb250LXdlaWdodDogMzAwO1xuICBmb250LXNpemU6IDAuNmVtO1xuICBsZXR0ZXItc3BhY2luZzogMnB4O1xuICBtYXJnaW4tdG9wOiAycHg7XG59XG5cbi50aW1lbGluZSB7XG4gIHVsIHtcbiAgICBwYWRkaW5nOiAxZW0gMCAwIDJlbTtcbiAgICBtYXJnaW46IDA7XG4gICAgbGlzdC1zdHlsZTogbm9uZTtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG5cbiAgICAmOjpiZWZvcmUge1xuICAgICAgY29udGVudDogJyAnO1xuICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgd2lkdGg6IDFweDtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICRsaWdodC1ncmV5O1xuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgdG9wOiAwO1xuICAgICAgbGVmdDogMi41ZW07XG4gICAgICB6LWluZGV4OiAtMTtcbiAgICB9XG4gIH1cblxuICBsaSBkaXYge1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICBtYXJnaW46IDFlbSAwO1xuICAgIHZlcnRpY2FsLWFsaWduOiB0b3A7XG4gIH1cblxuICAuYnVsbGV0IHtcbiAgICB3aWR0aDogMWVtO1xuICAgIGhlaWdodDogMWVtO1xuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgIGJhY2tncm91bmQ6ICR3aGl0ZTtcbiAgICB6LWluZGV4OiAxO1xuICAgIG1hcmdpbi1yaWdodDogMWVtO1xuXG4gICAgJi5waW5rIHtcbiAgICAgIGJvcmRlcjogMnB4IHNvbGlkICRwaW5rO1xuICAgIH1cblxuICAgICYuZ3JlZW4ge1xuICAgICAgYm9yZGVyOiAycHggc29saWQgJGdyZWVuO1xuICAgIH1cblxuICAgICYub3JhbmdlIHtcbiAgICAgIGJvcmRlcjogMnB4IHNvbGlkICRvcmFuZ2U7XG4gICAgfVxuICB9XG5cbiAgLnRpbWUge1xuICAgIHdpZHRoOiAyMCU7XG4gICAgZm9udC1zaXplOiAwLjc1ZW07XG4gICAgcGFkZGluZy10b3A6IDAuMjVlbTtcbiAgfVxuXG4gIC5kZXNjIHtcbiAgICB3aWR0aDogNTAlO1xuICB9XG5cbiAgaDMge1xuICAgIGZvbnQtc2l6ZTogMC45ZW07XG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgICBtYXJnaW46IDA7XG4gIH1cblxuICBoNCB7XG4gICAgbWFyZ2luOiAwO1xuICAgIGZvbnQtc2l6ZTogMC43ZW07XG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgICBjb2xvcjogJGRhcmstZ3JleTtcbiAgfVxuXG4gIC5wZW9wbGUgaW1nIHtcbiAgICB3aWR0aDogMzBweDtcbiAgICBoZWlnaHQ6IDMwcHg7XG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICB9XG59XG5cbi5jcmVkaXRzLFxuLnZpZGVvIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBib3R0b206IDEwcHg7XG4gIGNvbG9yOiAkZGFyay1ncmV5O1xuICBmb250LXNpemU6IDEwMCU7XG4gIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xufVxuXG4uY3JlZGl0cyB7XG4gIGxlZnQ6IDEwcHg7XG59XG5cbi52aWRlbyB7XG4gIHJpZ2h0OiAxMHB4O1xufVxuIl19 */"

/***/ }),

/***/ "./src/app/campanhas/details-fail/details-fail.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/campanhas/details-fail/details-fail.component.ts ***!
  \******************************************************************/
/*! exports provided: DetailsFailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetailsFailComponent", function() { return DetailsFailComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var DetailsFailComponent = /** @class */ (function () {
    function DetailsFailComponent() {
    }
    DetailsFailComponent.prototype.ngOnInit = function () {
    };
    DetailsFailComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'cia-details-fail',
            template: __webpack_require__(/*! ./details-fail.component.html */ "./src/app/campanhas/details-fail/details-fail.component.html"),
            styles: [__webpack_require__(/*! ./details-fail.component.scss */ "./src/app/campanhas/details-fail/details-fail.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], DetailsFailComponent);
    return DetailsFailComponent;
}());



/***/ }),

/***/ "./src/app/campanhas/details/details.component.html":
/*!**********************************************************!*\
  !*** ./src/app/campanhas/details/details.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"main\">\n  <div>\n    <div class=\"container text-center \">\n      <h1 style=\"color: #66615a; \">Apuração de Campanhas</h1>\n      <br />\n      <h5 style=\"color: #66615a;\">{{ (campanha$ | async).descricao }}</h5>\n    </div>\n\n    <div class=\"margem\">\n      <div class=\"row\">\n        <div class=\"col-md-6\">\n          <div class=\"col-md-6\">\n            <h3><span class=\"label label-warning\">Pendente</span></h3>\n          </div>\n        </div>\n        <div class=\"col-md-6\">\n          <div class=\"col-md-3\" style=\"margin-left: auto;\">\n            <div ngbDropdown class=\"d-inline-block\">\n              <button\n                class=\"btn btn-default btn-round\"\n                id=\"dropdownBasic1\"\n                ngbDropdownToggle\n              >\n                <i class=\"fa fa-gear\"></i> Ações\n              </button>\n              <div ngbDropdownMenu aria-labelledby=\"dropdownBasic1\">\n                <button class=\"dropdown-item\">Contestar</button>\n                <button class=\"dropdown-item\">Gerar nota de débito</button>\n                <button class=\"dropdown-item\">Inserir dados</button>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n      <br />\n      <br />\n      <div class=\"row\">\n        <div class=\"col-md-2\">\n          <div class=\"card\">\n            <div class=\"card-body\">\n              <h5>Valor Samsung</h5>\n              <h3>R$ {{ (campanha$ | async).valor }}</h3>\n              <span class=\"label label-success\">Correto</span>\n            </div>\n          </div>\n        </div>\n        <div class=\"col-md-2\">\n          <div class=\"card\">\n            <div class=\"card-body\">\n              <h5>Valor Varejo Mais</h5>\n              <h3>R$ {{ (campanha$ | async).valor }}</h3>\n              <span class=\"label label-success\">Correto</span>\n            </div>\n          </div>\n        </div>\n        <div class=\"col-md-2\">\n          <div class=\"card\">\n            <div class=\"card-body\">\n              <h5>Valor do Desconto</h5>\n              <h3>\n                <i class=\"fa fa-tags\"></i> &nbsp;R$\n                {{ (campanha$ | async).desconto }}\n              </h3>\n              <span class=\"label label-success\">Correto</span>\n            </div>\n          </div>\n        </div>\n        <div class=\"col-md-2\">\n          <div class=\"card\">\n            <div class=\"card-body\">\n              <h5>Quantidade Varejo Mais</h5>\n              <h3>\n                <i class=\"fa fa-sort-amount-up\"></i> &nbsp;{{\n                  (campanha$ | async).quantidade\n                }}\n              </h3>\n              <span class=\"label label-success\">Correto</span>\n            </div>\n          </div>\n        </div>\n        <div class=\"col-md-2\">\n          <div class=\"card\">\n            <div class=\"card-body\">\n              <h5>Quantidade Samsung</h5>\n              <h3>\n                <i class=\"fa fa-sort-amount-up\"></i> &nbsp;{{\n                  (campanha$ | async).quantidade\n                }}\n              </h3>\n              <span class=\"label label-success\">Correto</span>\n            </div>\n          </div>\n        </div>\n        <div class=\"col-md-2\">\n          <div class=\"card\">\n            <div class=\"card-body\">\n              <h5>Lojas</h5>\n              <h3><i class=\"fa fa-store\"></i> &nbsp; 3</h3>\n            </div>\n          </div>\n        </div>\n      </div>\n      <div class=\"row\">\n        <div class=\"col-md-9\">\n          <div class=\"card\">\n            <div class=\"card-header\">\n              <i class=\"fa fa-align-justify\"></i> Produtos\n            </div>\n            <div class=\" card-body\">\n              <div>\n                <div class=\"form-check\">\n                  <label class=\"form-check-label\">\n                    <input\n                      class=\"form-check-input\"\n                      name=\"active\"\n                      id=\"active\"\n                      type=\"checkbox\"\n                      [(ngModel)]=\"one\"\n                    />\n                    Com divergência &nbsp; <span class=\"form-check-sign\"></span>\n                  </label>\n                  <label class=\"form-check-label\">\n                    <input\n                      class=\"form-check-input\"\n                      name=\"active\"\n                      id=\"active\"\n                      type=\"checkbox\"\n                      [(ngModel)]=\"two\"\n                    />\n                    Sem divergência <span class=\"form-check-sign\"></span>\n                  </label>\n                </div>\n              </div>\n              <div\n                class=\"form-group\"\n                style=\"overflow-x:auto; overflow:scroll;height:400px;width:100%;\"\n              >\n                <table class=\" table table-striped \">\n                  <thead>\n                    <tr>\n                      <th>Nome</th>\n                      <th>Referencia</th>\n                      <th>Qtd Samsung</th>\n                      <th>Qtd V+</th>\n                      <th>Valor Samsung</th>\n                      <th>Valor V+</th>\n                      <th>Divergência qtd</th>\n                      <th>Divergência Valor</th>\n\n                      <th>Status</th>\n                      <th></th>\n                      <th></th>\n                    </tr>\n                  </thead>\n                  <tbody>\n                    <tr\n                      *ngFor=\"\n                        let campanhaMaterial of (campanhasMaterial$ | async)\n                      \"\n                    >\n                      <!--</tr>\n                  <tr *ngIf=\"campanha.id == campanhaMaterial.campanha_id\">-->\n                      <td>{{ campanhaMaterial.quantidade }}</td>\n                      <td></td>\n                      <td></td>\n                      <td></td>\n                      <td></td>\n                      <td></td>\n                      <td></td>\n\n                      <td><span class=\"label label-warning\">Pendente</span></td>\n                    </tr>\n                  </tbody>\n                </table>\n              </div>\n            </div>\n          </div>\n        </div>\n        <div class=\"col-md-3\">\n          <div\n            class=\"card\"\n            style=\"overflow:scroll;height:400px;width:100%;overflow:auto\"\n          >\n            <div class=\"card-header\">\n              <i class=\"fa fa-history\"></i><strong> Histórico</strong> <br />\n              <strong>\n                Data Inicial:\n                {{ (campanha$ | async).data_inicial | date: 'dd/MM/yy' }}\n              </strong>\n            </div>\n            <div class=\"card-body\" style=\"overflow: auto;\">\n              <div class=\"timeline\">\n                <ul>\n                  <li>\n                    <div class=\"bullet green\"></div>\n                    <div class=\"time\">\n                      {{ (campanha$ | async).data_inicial | date: 'medium' }}\n                    </div>\n                    <div class=\"desc\">\n                      <h3>Campanha Iniciada</h3>\n                      <h4>Realizado por usuário: financeiro</h4>\n                    </div>\n                  </li>\n                  <li>\n                    <div class=\"bullet pink\"></div>\n                    <div class=\"time\">02/12/18 - 5pm</div>\n                    <div class=\"desc\">\n                      <h3>Campanha conferida</h3>\n                      <h4>Realizado por usuário: financeiro</h4>\n                    </div>\n                  </li>\n                  <li>\n                    <div class=\"bullet green\"></div>\n                    <div class=\"time\">03/12/18 - 3 - 4pm</div>\n                    <div class=\"desc\">\n                      <h3>Nota de débito gerada e enviada para a samsung</h3>\n                      <h4>Realizado por usuário: administrador</h4>\n                    </div>\n                  </li>\n                  <li>\n                    <div class=\"bullet orange\"></div>\n                    <div class=\"time\">04/12/18 -12pm</div>\n                    <div class=\"desc\">\n                      <h3>Samsung dá retorno</h3>\n                      <h4>Realizado por usuário: financeiro</h4>\n\n                      <h4>Nota de débito aceita</h4>\n                    </div>\n                  </li>\n                  <li>\n                    <div class=\"bullet green\"></div>\n                    <div class=\"time\">05/12/18 -9 - 11am</div>\n                    <div class=\"desc\">\n                      <h3>Samsung realiza pagamento</h3>\n                      <h4>Cadastrado por usuário: administrador</h4>\n                    </div>\n                  </li>\n                  <li>\n                    <div class=\"bullet green\"></div>\n                    <div class=\"time\">05/12/18 -9 - 11am</div>\n                    <div class=\"desc\">\n                      <h3>Varejo mais recebe pagamento</h3>\n                      <h4>pagamento contabilizado com sucesso</h4>\n                      <h4>Cadastrado por usuário: financeiro</h4>\n                    </div>\n                  </li>\n                  <li>\n                    <div class=\"bullet pink\"></div>\n                    <div class=\"time\">\n                      {{ (campanha$ | async).data_final | date: 'medium' }}\n                    </div>\n                    <div class=\"desc\">\n                      <h3>Campanha Finalizada</h3>\n                      <h4>Realizado por usuário: financeiro</h4>\n                    </div>\n                  </li>\n                </ul>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n      <!--\n      <div class=\"row\">\n        <button class=\"btn btn-primary btn-round\">Gerar nota de débito</button>\n        <button class=\"btn btn-round\">Contestar</button>\n      </div>\n      -->\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/campanhas/details/details.component.scss":
/*!**********************************************************!*\
  !*** ./src/app/campanhas/details/details.component.scss ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container2 {\n  max-width: 350px;\n  max-height: 630px;\n  overflow: hidden;\n  margin: 30px auto 0;\n  box-shadow: 0 0 40px #a09f9f;\n  font-family: 'Open Sans', sans-serif; }\n\n.profile-pic {\n  width: 30px;\n  height: 30px;\n  display: inline-block;\n  float: right;\n  position: relative; }\n\n.profile-pic img {\n    width: 100%;\n    border-radius: 50%; }\n\n.notification {\n  position: absolute;\n  width: 5px;\n  height: 5px;\n  border-radius: 50%;\n  top: 2px;\n  right: 2px;\n  background: #f93b69; }\n\n.color-overlay {\n  padding: 3em 2em;\n  box-sizing: border-box;\n  background: rgba(123, 94, 155, 0.5); }\n\n.actionbutton {\n  position: absolute;\n  background: #f93b69;\n  width: 50px;\n  height: 50px;\n  font-size: 3em;\n  font-weight: 300;\n  border-radius: 50%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  bottom: -25px;\n  right: 20px;\n  box-shadow: 0 0 8px #202020; }\n\n.day-number {\n  font-size: 4em;\n  display: inline-block;\n  margin-right: 15px; }\n\n.date-right {\n  display: inline-block; }\n\n.day-name {\n  font-size: 1.6em; }\n\n.month {\n  text-transform: uppercase;\n  font-weight: 300;\n  font-size: 0.6em;\n  letter-spacing: 2px;\n  margin-top: 2px; }\n\n.timeline ul {\n  padding: 1em 0 0 2em;\n  margin: 0;\n  list-style: none;\n  position: relative; }\n\n.timeline ul::before {\n    content: ' ';\n    height: 100%;\n    width: 1px;\n    background-color: #d9d9d9;\n    position: absolute;\n    top: 0;\n    left: 2.5em;\n    z-index: -1; }\n\n.timeline li div {\n  display: inline-block;\n  margin: 1em 0;\n  vertical-align: top; }\n\n.timeline .bullet {\n  width: 1em;\n  height: 1em;\n  box-sizing: border-box;\n  border-radius: 50%;\n  background: #fff;\n  z-index: 1;\n  margin-right: 1em; }\n\n.timeline .bullet.pink {\n    border: 2px solid #f93b69; }\n\n.timeline .bullet.green {\n    border: 2px solid #b0e8e2; }\n\n.timeline .bullet.orange {\n    border: 2px solid #eb8b6e; }\n\n.timeline .time {\n  width: 20%;\n  font-size: 0.75em;\n  padding-top: 0.25em; }\n\n.timeline .desc {\n  width: 50%; }\n\n.timeline h3 {\n  font-size: 0.9em;\n  font-weight: 400;\n  margin: 0; }\n\n.timeline h4 {\n  margin: 0;\n  font-size: 0.7em;\n  font-weight: 400;\n  color: #808080; }\n\n.timeline .people img {\n  width: 30px;\n  height: 30px;\n  border-radius: 50%; }\n\n.credits,\n.video {\n  position: absolute;\n  bottom: 10px;\n  color: #808080;\n  font-size: 100%;\n  text-decoration: underline; }\n\n.credits {\n  left: 10px; }\n\n.video {\n  right: 10px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3NhcmEvRG9jdW1lbnRvcy9wcm9qZXRvcy9jaWEvcHJvamV0b3MvY2lhX2Zyb250ZW5kL3NyYy9hcHAvY2FtcGFuaGFzL2RldGFpbHMvZGV0YWlscy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFTQTtFQUNFLGdCQUFnQjtFQUNoQixpQkFBaUI7RUFDakIsZ0JBQWdCO0VBQ2hCLG1CQUFtQjtFQUNuQiw0QkFBd0M7RUFDeEMsb0NBQW9DLEVBQUE7O0FBR3RDO0VBQ0UsV0FBVztFQUNYLFlBQVk7RUFDWixxQkFBcUI7RUFDckIsWUFBWTtFQUNaLGtCQUFrQixFQUFBOztBQUxwQjtJQVFJLFdBQVc7SUFDWCxrQkFBa0IsRUFBQTs7QUFJdEI7RUFDRSxrQkFBa0I7RUFDbEIsVUFBVTtFQUNWLFdBQVc7RUFDWCxrQkFBa0I7RUFDbEIsUUFBUTtFQUNSLFVBQVU7RUFDVixtQkFqQ1ksRUFBQTs7QUFvQ2Q7RUFDRSxnQkFBZ0I7RUFDaEIsc0JBQXNCO0VBQ3RCLG1DQUFtQyxFQUFBOztBQUdyQztFQUNFLGtCQUFrQjtFQUNsQixtQkE1Q1k7RUE2Q1osV0FBVztFQUNYLFlBQVk7RUFDWixjQUFjO0VBQ2QsZ0JBQWdCO0VBQ2hCLGtCQUFrQjtFQUNsQixhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtFQUNuQixhQUFhO0VBQ2IsV0FBVztFQUNYLDJCQUEyQixFQUFBOztBQUc3QjtFQUNFLGNBQWM7RUFDZCxxQkFBcUI7RUFDckIsa0JBQWtCLEVBQUE7O0FBR3BCO0VBQ0UscUJBQXFCLEVBQUE7O0FBR3ZCO0VBQ0UsZ0JBQWdCLEVBQUE7O0FBR2xCO0VBQ0UseUJBQXlCO0VBQ3pCLGdCQUFnQjtFQUNoQixnQkFBZ0I7RUFDaEIsbUJBQW1CO0VBQ25CLGVBQWUsRUFBQTs7QUFHakI7RUFFSSxvQkFBb0I7RUFDcEIsU0FBUztFQUNULGdCQUFnQjtFQUNoQixrQkFBa0IsRUFBQTs7QUFMdEI7SUFRTSxZQUFZO0lBQ1osWUFBWTtJQUNaLFVBQVU7SUFDVix5QkE3RmM7SUE4RmQsa0JBQWtCO0lBQ2xCLE1BQU07SUFDTixXQUFXO0lBQ1gsV0FBVyxFQUFBOztBQWZqQjtFQW9CSSxxQkFBcUI7RUFDckIsYUFBYTtFQUNiLG1CQUFtQixFQUFBOztBQXRCdkI7RUEwQkksVUFBVTtFQUNWLFdBQVc7RUFDWCxzQkFBc0I7RUFDdEIsa0JBQWtCO0VBQ2xCLGdCQWxIUTtFQW1IUixVQUFVO0VBQ1YsaUJBQWlCLEVBQUE7O0FBaENyQjtJQW1DTSx5QkFuSFEsRUFBQTs7QUFnRmQ7SUF1Q00seUJBdEhTLEVBQUE7O0FBK0VmO0lBMkNNLHlCQXpIVSxFQUFBOztBQThFaEI7RUFnREksVUFBVTtFQUNWLGlCQUFpQjtFQUNqQixtQkFBbUIsRUFBQTs7QUFsRHZCO0VBc0RJLFVBQVUsRUFBQTs7QUF0RGQ7RUEwREksZ0JBQWdCO0VBQ2hCLGdCQUFnQjtFQUNoQixTQUFTLEVBQUE7O0FBNURiO0VBZ0VJLFNBQVM7RUFDVCxnQkFBZ0I7RUFDaEIsZ0JBQWdCO0VBQ2hCLGNBdEplLEVBQUE7O0FBbUZuQjtFQXVFSSxXQUFXO0VBQ1gsWUFBWTtFQUNaLGtCQUFrQixFQUFBOztBQUl0Qjs7RUFFRSxrQkFBa0I7RUFDbEIsWUFBWTtFQUNaLGNBcEtpQjtFQXFLakIsZUFBZTtFQUNmLDBCQUEwQixFQUFBOztBQUc1QjtFQUNFLFVBQVUsRUFBQTs7QUFHWjtFQUNFLFdBQVcsRUFBQSIsImZpbGUiOiJzcmMvYXBwL2NhbXBhbmhhcy9kZXRhaWxzL2RldGFpbHMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIkYmxhY2s6ICMyMDIwMjA7XG4kd2hpdGU6ICNmZmY7XG4kZGFyay1ncmV5OiAjODA4MDgwO1xuJGxpZ2h0LWdyZXk6ICNkOWQ5ZDk7XG4kcHVycGxlOiAjYjk3Y2ZjO1xuJHBpbms6ICNmOTNiNjk7XG4kZ3JlZW46ICNiMGU4ZTI7XG4kb3JhbmdlOiAjZWI4YjZlO1xuXG4uY29udGFpbmVyMiB7XG4gIG1heC13aWR0aDogMzUwcHg7XG4gIG1heC1oZWlnaHQ6IDYzMHB4O1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBtYXJnaW46IDMwcHggYXV0byAwO1xuICBib3gtc2hhZG93OiAwIDAgNDBweCBsaWdodGVuKCRibGFjaywgNTApO1xuICBmb250LWZhbWlseTogJ09wZW4gU2FucycsIHNhbnMtc2VyaWY7XG59XG5cbi5wcm9maWxlLXBpYyB7XG4gIHdpZHRoOiAzMHB4O1xuICBoZWlnaHQ6IDMwcHg7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgZmxvYXQ6IHJpZ2h0O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG5cbiAgaW1nIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIH1cbn1cblxuLm5vdGlmaWNhdGlvbiB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgd2lkdGg6IDVweDtcbiAgaGVpZ2h0OiA1cHg7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgdG9wOiAycHg7XG4gIHJpZ2h0OiAycHg7XG4gIGJhY2tncm91bmQ6ICRwaW5rO1xufVxuXG4uY29sb3Itb3ZlcmxheSB7XG4gIHBhZGRpbmc6IDNlbSAyZW07XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIGJhY2tncm91bmQ6IHJnYmEoMTIzLCA5NCwgMTU1LCAwLjUpO1xufVxuXG4uYWN0aW9uYnV0dG9uIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBiYWNrZ3JvdW5kOiAkcGluaztcbiAgd2lkdGg6IDUwcHg7XG4gIGhlaWdodDogNTBweDtcbiAgZm9udC1zaXplOiAzZW07XG4gIGZvbnQtd2VpZ2h0OiAzMDA7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGJvdHRvbTogLTI1cHg7XG4gIHJpZ2h0OiAyMHB4O1xuICBib3gtc2hhZG93OiAwIDAgOHB4ICMyMDIwMjA7XG59XG5cbi5kYXktbnVtYmVyIHtcbiAgZm9udC1zaXplOiA0ZW07XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgbWFyZ2luLXJpZ2h0OiAxNXB4O1xufVxuXG4uZGF0ZS1yaWdodCB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbn1cblxuLmRheS1uYW1lIHtcbiAgZm9udC1zaXplOiAxLjZlbTtcbn1cblxuLm1vbnRoIHtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgZm9udC1zaXplOiAwLjZlbTtcbiAgbGV0dGVyLXNwYWNpbmc6IDJweDtcbiAgbWFyZ2luLXRvcDogMnB4O1xufVxuXG4udGltZWxpbmUge1xuICB1bCB7XG4gICAgcGFkZGluZzogMWVtIDAgMCAyZW07XG4gICAgbWFyZ2luOiAwO1xuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuXG4gICAgJjo6YmVmb3JlIHtcbiAgICAgIGNvbnRlbnQ6ICcgJztcbiAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgIHdpZHRoOiAxcHg7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkbGlnaHQtZ3JleTtcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgIHRvcDogMDtcbiAgICAgIGxlZnQ6IDIuNWVtO1xuICAgICAgei1pbmRleDogLTE7XG4gICAgfVxuICB9XG5cbiAgbGkgZGl2IHtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgbWFyZ2luOiAxZW0gMDtcbiAgICB2ZXJ0aWNhbC1hbGlnbjogdG9wO1xuICB9XG5cbiAgLmJ1bGxldCB7XG4gICAgd2lkdGg6IDFlbTtcbiAgICBoZWlnaHQ6IDFlbTtcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICBiYWNrZ3JvdW5kOiAkd2hpdGU7XG4gICAgei1pbmRleDogMTtcbiAgICBtYXJnaW4tcmlnaHQ6IDFlbTtcblxuICAgICYucGluayB7XG4gICAgICBib3JkZXI6IDJweCBzb2xpZCAkcGluaztcbiAgICB9XG5cbiAgICAmLmdyZWVuIHtcbiAgICAgIGJvcmRlcjogMnB4IHNvbGlkICRncmVlbjtcbiAgICB9XG5cbiAgICAmLm9yYW5nZSB7XG4gICAgICBib3JkZXI6IDJweCBzb2xpZCAkb3JhbmdlO1xuICAgIH1cbiAgfVxuXG4gIC50aW1lIHtcbiAgICB3aWR0aDogMjAlO1xuICAgIGZvbnQtc2l6ZTogMC43NWVtO1xuICAgIHBhZGRpbmctdG9wOiAwLjI1ZW07XG4gIH1cblxuICAuZGVzYyB7XG4gICAgd2lkdGg6IDUwJTtcbiAgfVxuXG4gIGgzIHtcbiAgICBmb250LXNpemU6IDAuOWVtO1xuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gICAgbWFyZ2luOiAwO1xuICB9XG5cbiAgaDQge1xuICAgIG1hcmdpbjogMDtcbiAgICBmb250LXNpemU6IDAuN2VtO1xuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gICAgY29sb3I6ICRkYXJrLWdyZXk7XG4gIH1cblxuICAucGVvcGxlIGltZyB7XG4gICAgd2lkdGg6IDMwcHg7XG4gICAgaGVpZ2h0OiAzMHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgfVxufVxuXG4uY3JlZGl0cyxcbi52aWRlbyB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYm90dG9tOiAxMHB4O1xuICBjb2xvcjogJGRhcmstZ3JleTtcbiAgZm9udC1zaXplOiAxMDAlO1xuICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcbn1cblxuLmNyZWRpdHMge1xuICBsZWZ0OiAxMHB4O1xufVxuXG4udmlkZW8ge1xuICByaWdodDogMTBweDtcbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/campanhas/details/details.component.ts":
/*!********************************************************!*\
  !*** ./src/app/campanhas/details/details.component.ts ***!
  \********************************************************/
/*! exports provided: DetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetailsComponent", function() { return DetailsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _campanhas_actions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../campanhas.actions */ "./src/app/campanhas/campanhas.actions.ts");
/* harmony import */ var _campanhas_state__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../campanhas.state */ "./src/app/campanhas/campanhas.state.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var DetailsComponent = /** @class */ (function () {
    function DetailsComponent(store, route, router) {
        var _this = this;
        this.store = store;
        this.route = route;
        this.router = router;
        this.id$ = this.route.params.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (_a) {
            var id = _a.id;
            return id;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["distinctUntilChanged"])());
        this.campanha$ = this.store.select(_campanhas_state__WEBPACK_IMPORTED_MODULE_5__["selectCampanhasSelecionada"]);
        this.idSubscription = this.id$
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["filter"])(function (id) { return id !== 'new'; }))
            .subscribe(function (id) { return _this.store.dispatch(new _campanhas_actions__WEBPACK_IMPORTED_MODULE_4__["SelecionarCampanhaAction"](id)); });
    }
    DetailsComponent.prototype.ngOnInit = function () { };
    DetailsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'cia-details',
            template: __webpack_require__(/*! ./details.component.html */ "./src/app/campanhas/details/details.component.html"),
            styles: [__webpack_require__(/*! ./details.component.scss */ "./src/app/campanhas/details/details.component.scss")]
        }),
        __metadata("design:paramtypes", [_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["Store"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], DetailsComponent);
    return DetailsComponent;
}());



/***/ }),

/***/ "./src/app/campanhas/form/form.component.html":
/*!****************************************************!*\
  !*** ./src/app/campanhas/form/form.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"main\">\n  <div class=\"margem\">\n    <div class=\"row\">\n      <div style=\"margin-left: auto;\">\n        <div class=\"col\">\n          <div ngbDropdown class=\"d-inline-block\">\n            <button\n              class=\"btn btn-default btn-round\"\n              id=\"dropdownBasic1\"\n              ngbDropdownToggle\n            >\n              <i class=\"fa fa-gear\"></i> Ações\n            </button>\n            <div ngbDropdownMenu aria-labelledby=\"dropdownBasic1\">\n              <button class=\"dropdown-item\">Action - 1</button>\n              <button class=\"dropdown-item\">Another Action</button>\n              <button class=\"dropdown-item\">Something else is here</button>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n\n    <br />\n    <br />\n\n    <div class=\"row\">\n      <div class=\"col-md-12\">\n        <div class=\"card-header\">\n          <i class=\"fa fa-align-justify\"></i> Campanha\n        </div>\n        <div class=\"card-body\">\n          <form [formGroup]=\"addForm\" (ngSubmit)=\"onSubmit()\">\n            <div class=\"form-group\">\n              <label for=\"descricao\">descrição</label>\n              <input\n                class=\"form-control\"\n                id=\"descricao\"\n                name=\"descricao\"\n                formControlName=\"descricao\"\n                placeholder=\"descrição\"\n              />\n            </div>\n            <div class=\"row\">\n              <div class=\"form-group col-sm-2\">\n                <label for=\"data_inicial\">Data Inicial</label>\n                <input\n                  class=\"form-control\"\n                  id=\"data_inicial\"\n                  name=\"data_inicial\"\n                  formControlName=\"data_inicial\"\n                  type=\"date\"\n                />\n\n                <br />\n              </div>\n              <div class=\"form-group col-sm-2\">\n                <label for=\"data_final\">Data Final</label>\n                <input\n                  class=\"form-control\"\n                  id=\"data_final\"\n                  name=\"data_final\"\n                  formControlName=\"data_final\"\n                  type=\"date\"\n                />\n              </div>\n              <div class=\"form-group col-sm-1\">\n                <label for=\"franqueador_id\">Franqueador id</label>\n                <input\n                  class=\"form-control\"\n                  id=\"franqueador_id\"\n                  name=\"franqueador_id\"\n                  formControlName=\"franqueador_id\"\n                  placeholder=\"Franqueador id\"\n                />\n              </div>\n              <div class=\"form-group col-sm-2\">\n                <label for=\"referencia\">Referência</label>\n                <input\n                  class=\"form-control\"\n                  id=\"referencia\"\n                  name=\"referencia\"\n                  formControlName=\"referencia\"\n                  placeholder=\"Referência\"\n                />\n              </div>\n              <div class=\"form-group col-sm-2\">\n                <label for=\"quantidade\">Quantidade</label>\n                <input\n                  class=\"form-control\"\n                  id=\"quantidade\"\n                  name=\"quantidade\"\n                  formControlName=\"quantidade\"\n                  placeholder=\"quantidade\"\n                />\n              </div>\n              <div class=\"form-group col-sm-2\">\n                <label for=\"campanha_tipo_id\">Tipo de campanha</label>\n                <select\n                  class=\"form-control\"\n                  name=\"campanha_tipo_id\"\n                  id=\"campanha_tipo_id\"\n                  formControlName=\"campanha_tipo_id\"\n                >\n                  <option [ngValue]=\"1\">interna </option>\n                  <option [ngValue]=\"2\">rebate</option>\n                  <option [ngValue]=\"3\">trocafone</option>\n                </select>\n              </div>\n              <div class=\"form-group col-sm-2\">\n                <label for=\"valor\">Valor</label>\n                <input\n                  class=\"form-control\"\n                  id=\"valor\"\n                  name=\"valor\"\n                  formControlName=\"valor\"\n                  placeholder=\"Valor\"\n                />\n              </div>\n              <div class=\"form-group col-sm-2\">\n                <label for=\"desconto\">Desconto</label>\n                <input\n                  class=\"form-control\"\n                  id=\"desconto\"\n                  name=\"desconto\"\n                  formControlName=\"desconto\"\n                  placeholder=\"Desconto\"\n                />\n              </div>\n              <div class=\"form-group col-sm-2\">\n                <label for=\"nd_id\">Id nota de débito</label>\n                <input\n                  class=\"form-control\"\n                  id=\"nd_id\"\n                  name=\"nd_id\"\n                  formControlName=\"nd_id\"\n                  placeholder=\"Id nota de débito\"\n                />\n              </div>\n\n              <div class=\"form-group col-sm-2\">\n                <label for=\"status\">Status</label>\n                <select\n                  class=\"form-control\"\n                  id=\"status\"\n                  name=\"status\"\n                  formControlName=\"status\"\n                >\n                  <option [ngValue]=\"Pendente\">Pendente </option>\n                  <option [ngValue]=\"Concluido\">Concluído</option>\n                  <option [ngValue]=\"Cancelado\">Cancelado</option>\n                </select>\n              </div>\n\n              <div class=\"form-group col-sm-1\">\n                <label for=\"id_microvix\">Id microvix</label>\n                <input\n                  class=\"form-control\"\n                  id=\"id_microvix\"\n                  name=\"id_microvix\"\n                  formControlName=\"id_microvix\"\n                  placeholder=\"Id microvix\"\n                />\n              </div>\n              <div class=\"form-group col-sm-2\">\n                <label for=\"percentual_impostos_custo\"\n                  >Custo percentual dos impostos</label\n                >\n                <input\n                  class=\"form-control\"\n                  id=\"percentual_impostos_custo\"\n                  name=\"percentual_impostos_custo\"\n                  formControlName=\"percentual_impostos_custo\"\n                  placeholder=\"impostos\"\n                />\n              </div>\n\n              <div class=\"form-group col-sm-1\">\n                <label for=\"rebate_por_target\">Rebate</label>\n                <select\n                  class=\"form-control\"\n                  name=\"rebate_por_target\"\n                  id=\"rebate_por_target\"\n                  formControlName=\"rebate_por_target\"\n                >\n                  <option [ngValue]=\"true\">Ativado </option>\n                  <option [ngValue]=\"false\">Desativado</option>\n                </select>\n              </div>\n              <!--/.row-->\n            </div>\n\n            <button class=\"btn btn-success\">Salvar</button>\n          </form>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/campanhas/form/form.component.scss":
/*!****************************************************!*\
  !*** ./src/app/campanhas/form/form.component.scss ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".main-cnt {\n  padding: 0 10%; }\n\n/*----------Back to Top Button -----------*/\n\n.btt-btn {\n  cursor: pointer;\n  position: fixed;\n  bottom: .5em;\n  right: .5em;\n  padding: .5em;\n  text-decoration: none;\n  color: white;\n  background-color: rgba(0, 0, 0, 0.2);\n  font-size: 14px;\n  outline-style: none;\n  /*display: none;*/ }\n\n.btt-btn:hover {\n  background-color: rgba(0, 0, 0, 0.6); }\n\n.btt-btn:active {\n  background-color: rgba(0, 0, 0, 0.8); }\n\n#backTT {\n  z-index: -9999999;\n  position: absolute;\n  top: 0; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3NhcmEvRG9jdW1lbnRvcy9wcm9qZXRvcy9jaWEvcHJvamV0b3MvY2lhX2Zyb250ZW5kL3NyYy9hcHAvY2FtcGFuaGFzL2Zvcm0vZm9ybS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGNBQWMsRUFBQTs7QUFJaEIsMkNBQUE7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsZUFBZTtFQUNmLFlBQVk7RUFDWixXQUFXO0VBQ1gsYUFBYTtFQUNiLHFCQUFxQjtFQUNyQixZQUFZO0VBQ1osb0NBQW9DO0VBQ3BDLGVBQWU7RUFDZixtQkFBbUI7RUFDbkIsaUJBQUEsRUFBa0I7O0FBR3BCO0VBQ0Usb0NBQW9DLEVBQUE7O0FBR3RDO0VBQ0Usb0NBQW9DLEVBQUE7O0FBR3RDO0VBQ0UsaUJBQWlCO0VBQ2pCLGtCQUFrQjtFQUNsQixNQUFNLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9jYW1wYW5oYXMvZm9ybS9mb3JtLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm1haW4tY250IHtcbiAgcGFkZGluZzogMCAxMCU7XG59XG5cblxuLyotLS0tLS0tLS0tQmFjayB0byBUb3AgQnV0dG9uIC0tLS0tLS0tLS0tKi9cblxuLmJ0dC1idG4ge1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgYm90dG9tOiAuNWVtO1xuICByaWdodDogLjVlbTtcbiAgcGFkZGluZzogLjVlbTtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICBjb2xvcjogd2hpdGU7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC4yKTtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBvdXRsaW5lLXN0eWxlOiBub25lO1xuICAvKmRpc3BsYXk6IG5vbmU7Ki9cbn1cblxuLmJ0dC1idG46aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNik7XG59XG5cbi5idHQtYnRuOmFjdGl2ZSB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC44KTtcbn1cblxuI2JhY2tUVCB7XG4gIHotaW5kZXg6IC05OTk5OTk5O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/campanhas/form/form.component.ts":
/*!**************************************************!*\
  !*** ./src/app/campanhas/form/form.component.ts ***!
  \**************************************************/
/*! exports provided: FormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormComponent", function() { return FormComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var _campanhas_actions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../campanhas.actions */ "./src/app/campanhas/campanhas.actions.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var FormComponent = /** @class */ (function () {
    function FormComponent(formBuilder, router, store) {
        this.formBuilder = formBuilder;
        this.router = router;
        this.store = store;
    }
    FormComponent.prototype.ngOnInit = function () {
        this.addForm = this.formBuilder.group({
            descricao: [''],
            data_inicial: [''],
            data_final: [''],
            franqueador_id: [],
            referencia: [''],
            campanha_tipo_id: [],
            quantidade: [''],
            valor: [''],
            desconto: [''],
            nd_id: [],
            status: [''],
            id_microvix: [],
            percentual_impostos_custo: [''],
            rebate_por_target: []
        });
        this.true = true;
        this.false = false;
    };
    FormComponent.prototype.onSubmit = function () {
        /*
        this.campanhaService.createCampanha(this.addForm.value).subscribe(data => {
          this.router.navigate(['campanha']);
        });
        */
        this.store.dispatch(new _campanhas_actions__WEBPACK_IMPORTED_MODULE_4__["CriarCampanhaAction"](this.addForm.value));
    };
    FormComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'campanhas-form',
            template: __webpack_require__(/*! ./form.component.html */ "./src/app/campanhas/form/form.component.html"),
            styles: [__webpack_require__(/*! ./form.component.scss */ "./src/app/campanhas/form/form.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _ngrx_store__WEBPACK_IMPORTED_MODULE_3__["Store"]])
    ], FormComponent);
    return FormComponent;
}());



/***/ }),

/***/ "./src/app/campanhas/search/search.component.html":
/*!********************************************************!*\
  !*** ./src/app/campanhas/search/search.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"main\">\n  <div\n    class=\"page-header page-header-small fundo-produto\"\n    style=\"  background-image: url('assets/img/produto.jpg')\"\n  >\n    <div class=\"filter\">\n      <div class=\"content-center\">\n        <div class=\"container\">\n          <h1 style=\"color: white;\">Consulta de Campanhas</h1>\n          <br />\n          <h5 style=\"color: white;\"></h5>\n        </div>\n      </div>\n    </div>\n  </div>\n  <div class=\"margem\">\n    <div class=\"col-md-12\">\n      <div class=\"row\">\n        <div class=\"col-md-2\" style=\" margin-left: auto;\">\n          <div class=\"col\">\n            <a routerLink=\"new\">\n              <button type=\"button\" class=\"btn btn-primary btn-round\">\n                Novo\n              </button>\n            </a>\n\n            <div ngbDropdown class=\"d-inline-block\">\n              <button\n                class=\"btn btn-default btn-round\"\n                id=\"dropdownBasic1\"\n                ngbDropdownToggle\n              >\n                <i class=\"fa fa-gear\"></i> Ações\n              </button>\n              <div ngbDropdownMenu aria-labelledby=\"dropdownBasic1\">\n                <button class=\"dropdown-item\">Criar auditoria</button>\n                <button class=\"dropdown-item\"></button>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n      <br /><br />\n      <div class=\"row\">\n        <div class=\"col-md-12\" style=\"display: flex; flex-direction: column\">\n          <div style=\"display: flex; flex-direction: column\">\n            <div>\n              <button\n                class=\"button  \"\n                style=\"vertical-align:middle\"\n                *ngIf=\"!pesquisaOpened\"\n                (click)=\"pesquisaToggle()\"\n              >\n                <span\n                  ><i class=\"fa fa-arrow-right\" style=\"color: white\"></i>\n                </span>\n              </button>\n            </div>\n          </div>\n\n          <div class=\"row\">\n            <div\n              [ngClass]=\"pesquisaOpened ? 'col-md-4' : 'col-xs-2'\"\n              [@sideMenuAnime]=\"pesquisaOpened\"\n            >\n              <div class=\"card\">\n                <div class=\"card-header\">\n                  <strong>Pesquisa</strong>\n                  <a (click)=\"pesquisaToggle()\">\n                    <i class=\"fa fa-times \"></i\n                  ></a>\n                </div>\n\n                <div class=\"card-body\">\n                  <form [formGroup]=\"findForm\" (ngSubmit)=\"onSubmit()\">\n                    <div class=\"form-group\">\n                      <label for=\"descricao\">descrição</label>\n                      <input\n                        class=\"form-control\"\n                        id=\"descricao\"\n                        name=\"descricao\"\n                        formControlName=\"descricao\"\n                        placeholder=\"descrição\"\n                      />\n                    </div>\n\n                    <div class=\"row\">\n                      <div class=\"form-group col-sm-4\">\n                        <label for=\"data_inicial\">data Inicial</label>\n                        <input\n                          class=\"form-control\"\n                          id=\"data_inicial\"\n                          name=\"descricao\"\n                          formControlName=\"descricao\"\n                          type=\"date\"\n                        />\n                      </div>\n                      <div class=\"form-group col-sm-4\">\n                        <label for=\"data_inicial\">Data Final</label>\n                        <input\n                          class=\"form-control\"\n                          id=\"data_final\"\n                          name=\"data_inicial\"\n                          formControlName=\"data_inicial\"\n                          type=\"date\"\n                        />\n                      </div>\n                      <div class=\"form-group col-sm-4\">\n                        <label for=\"franqueador_id\">Franqueador id</label>\n                        <input\n                          class=\"datepicker form-control\"\n                          id=\"franqueador_id\"\n                          name=\"franqueador_id\"\n                          formControlName=\"franqueador_id\"\n                          placeholder=\"Franqueador id\"\n                        />\n                      </div>\n                      <div class=\"form-group col-sm-8\">\n                        <label for=\"referencia\">Referência</label>\n                        <input\n                          class=\"form-control\"\n                          id=\"referencia\"\n                          name=\"referencia\"\n                          formControlName=\"referencia\"\n                          placeholder=\"Referência\"\n                        />\n                      </div>\n                      <div class=\"form-group col-sm-4\">\n                        <label for=\"valor\">Valor</label>\n                        <input\n                          class=\"form-control\"\n                          id=\"valor\"\n                          name=\"valor\"\n                          formControlName=\"valor\"\n                          placeholder=\"Valor\"\n                        />\n                      </div>\n                      <div class=\"form-group col-sm-4\">\n                        <label for=\"desconto\">Desconto</label>\n                        <input\n                          class=\"form-control\"\n                          id=\"desconto\"\n                          name=\"desconto\"\n                          formControlName=\"desconto\"\n                          placeholder=\"Desconto\"\n                        />\n                      </div>\n                      <div class=\"form-group col-sm-4\">\n                        <label for=\"id_microvix\">Id microvix</label>\n                        <input\n                          class=\"form-control\"\n                          id=\"id_microvix\"\n                          name=\"id_microvix\"\n                          formControlName=\"id_microvix\"\n                          placeholder=\"Id microvix\"\n                        />\n                      </div>\n                      <div class=\"form-group col-sm-4\">\n                        <label for=\"percentual_impostos_custo\"\n                          >Custo percentual dos impostos</label\n                        >\n                        <input\n                          class=\"form-control\"\n                          id=\"percentual_impostos_custo\"\n                          name=\"percentual_impostos_custo\"\n                          formControlName=\"percentual_impostos_custo\"\n                          placeholder=\"impostos\"\n                        />\n                      </div>\n                      <div class=\"form-group col-sm-4\">\n                        <label for=\"id\">Id campanha</label>\n                        <input\n                          class=\"form-control\"\n                          id=\"id\"\n                          name=\"id\"\n                          formControlName=\"id\"\n                          placeholder=\"id\"\n                        />\n                      </div>\n                      <div class=\"form-group col-sm-4\">\n                        <label for=\"nd_id\">Id Nd</label>\n                        <input\n                          class=\"form-control\"\n                          id=\"nd_id\"\n                          name=\"nd_id\"\n                          formControlName=\"nd_id\"\n                          placeholder=\"id de nd\"\n                        />\n                      </div>\n                      <div class=\"form-group col-sm-4\">\n                        <label for=\"status\">Status</label>\n                        <input\n                          class=\"form-control\"\n                          id=\"status\"\n                          name=\"status\"\n                          formControlName=\"status\"\n                          placeholder=\"status\"\n                        />\n                      </div>\n                    </div>\n                    <!--/.row-->\n                    <div class=\"col-md-12\" style=\"margin-left:auto;\">\n                      <button class=\"btn btn-outline-info bnt-border btn-round\">\n                        Buscar\n                      </button>\n                    </div>\n                  </form>\n                </div>\n              </div>\n            </div>\n            <div [ngClass]=\"pesquisaOpened ? 'col-md-8' : 'col-md-12'\">\n              <div class=\"card\">\n                <div class=\"card-header\">\n                  <i class=\"fa fa-align-justify\"></i> Campanhas\n                </div>\n                <div class=\" card-body\">\n                  <div class=\"form-group\" style=\"overflow-x:auto;\">\n                    <table class=\" table table-striped \">\n                      <thead>\n                        <tr>\n                          <th>Nome</th>\n                          <th>Referencia</th>\n                          <th>Valor</th>\n                          <th>Data Inicial</th>\n\n                          <th>Data Final</th>\n                          <th>Tipo</th>\n\n                          <th>Status</th>\n\n                          <th>Ações</th>\n                        </tr>\n                      </thead>\n                      <tbody>\n                        <tr\n                          *ngFor=\"\n                            let campanha of (campanhas$\n                              | async\n                              | slice\n                                : (page - 1) * pageSize\n                                : (page - 1) * pageSize + pageSize)\n                          \"\n                        >\n                          <td>{{ campanha.descricao }}</td>\n                          <td>{{ campanha.referencia }}</td>\n\n                          <td>{{ campanha.valor }}</td>\n                          <td>\n                            {{ campanha.data_inicial | date: 'dd/MM/yy' }}\n                          </td>\n\n                          <td>{{ campanha.data_final | date: 'dd/MM/yy' }}</td>\n                          <td>{{ campanha.campanha_tipo_id }}</td>\n\n                          <td>\n                            <span class=\"label label-warning\">Pendente</span>\n                          </td>\n                          <td>\n                            <button\n                              class=\"btn btn-link button1\"\n                              [routerLink]=\"[campanha.id, 'details']\"\n                              (click)=\"viewDetails(campanha)\"\n                              data-toggle=\"tooltip\"\n                              data-placement=\"top\"\n                              title=\"Ver detalhes\"\n                            >\n                              <i\n                                class=\"fa fa-eye fa-3x\"\n                                style=\"font-size:19px\"\n                              ></i>\n                            </button>\n                          </td>\n                        </tr>\n                        <ngb-pagination\n                          [(page)]=\"page\"\n                          [pageSize]=\"pageSize\"\n                          [maxSize]=\"3\"\n                          [rotate]=\"true\"\n                          [boundaryLinks]=\"true\"\n                          [collectionSize]=\"(campanhas$ | async).length\"\n                        ></ngb-pagination>\n                      </tbody>\n                    </table>\n                  </div>\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/campanhas/search/search.component.scss":
/*!********************************************************!*\
  !*** ./src/app/campanhas/search/search.component.scss ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".button {\n  size: 10px;\n  background-color: black;\n  border-color: black;\n  border-radius: 9%; }\n\n.button span {\n  cursor: pointer;\n  display: inline-block;\n  transition: 0.5s;\n  right: -20px; }\n\n.button:hover span {\n  padding-right: 25px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3NhcmEvRG9jdW1lbnRvcy9wcm9qZXRvcy9jaWEvcHJvamV0b3MvY2lhX2Zyb250ZW5kL3NyYy9hcHAvY2FtcGFuaGFzL3NlYXJjaC9zZWFyY2guY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxVQUFVO0VBQ1YsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtFQUNuQixpQkFBaUIsRUFBQTs7QUFHakI7RUFDSSxlQUFlO0VBQ2YscUJBQXFCO0VBQ3JCLGdCQUFnQjtFQUNmLFlBQVksRUFBQTs7QUFLZjtFQUNFLG1CQUFtQixFQUFBIiwiZmlsZSI6InNyYy9hcHAvY2FtcGFuaGFzL3NlYXJjaC9zZWFyY2guY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYnV0dG9ue1xuICBzaXplOiAxMHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcbiAgYm9yZGVyLWNvbG9yOiBibGFjaztcbiAgYm9yZGVyLXJhZGl1czogOSU7XG4gIH1cbiAgXG4gIC5idXR0b24gc3BhbiB7XG4gICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICB0cmFuc2l0aW9uOiAwLjVzO1xuICAgICAgIHJpZ2h0OiAtMjBweDtcbiAgICB9XG4gICAgXG4gICAgXG4gICAgXG4gICAgLmJ1dHRvbjpob3ZlciBzcGFuIHtcbiAgICAgIHBhZGRpbmctcmlnaHQ6IDI1cHg7XG4gICAgfVxuICAgICJdfQ== */"

/***/ }),

/***/ "./src/app/campanhas/search/search.component.ts":
/*!******************************************************!*\
  !*** ./src/app/campanhas/search/search.component.ts ***!
  \******************************************************/
/*! exports provided: SearchComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchComponent", function() { return SearchComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm5/animations.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var _campanhas_state__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../campanhas.state */ "./src/app/campanhas/campanhas.state.ts");
/* harmony import */ var _campanhas_actions__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../campanhas.actions */ "./src/app/campanhas/campanhas.actions.ts");
var __assign = (undefined && undefined.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var SearchComponent = /** @class */ (function () {
    function SearchComponent(route, router, formBuilder, store) {
        var _this = this;
        this.route = route;
        this.router = router;
        this.formBuilder = formBuilder;
        this.store = store;
        this.pesquisaOpened = true;
        this.loading = false;
        this.submitted = false;
        this.error = '';
        this.findForm = this.formBuilder.group({
            descricao: '',
            data_inicial: null,
            data_final: null,
            franqueador_id: null,
            referencia: '',
            quantidade: null,
            valor: null,
            nd_id: null,
            status: '',
            desconto: null,
            id_microvix: null,
            percentual_impostos_custo: null,
            rebate_por_target: null
        });
        this.campanhas$ = this.store.select(_campanhas_state__WEBPACK_IMPORTED_MODULE_7__["selectCampanhasAll"]);
        this.page = 1;
        this.pageSize = 10;
        this.destroyed$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.route.queryParams
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["takeUntil"])(this.destroyed$))
            .subscribe(function (params) {
            _this.findForm.patchValue(params);
            _this.store.dispatch(new _campanhas_actions__WEBPACK_IMPORTED_MODULE_8__["BuscarCampanhasAction"](params));
        });
    }
    SearchComponent.prototype.ngOnInit = function () { };
    SearchComponent.prototype.ngOnDestroy = function () {
        this.destroyed$.next();
    };
    SearchComponent.prototype.pesquisaToggle = function () {
        this.pesquisaOpened = !this.pesquisaOpened;
    };
    SearchComponent.prototype.onSubmit = function () {
        var _this = this;
        if (this.findForm.valid) {
            var queryParams = Object.keys(this.findForm.value).reduce(function (qr, key) {
                var _a;
                if (_this.findForm.value[key] !== null &&
                    _this.findForm.value[key] !== undefined &&
                    _this.findForm.value[key] !== '') {
                    return __assign({}, qr, (_a = {}, _a[key] = _this.findForm.value[key], _a));
                }
                return qr;
            }, {});
            this.router.navigate([], { queryParams: queryParams });
        }
    };
    SearchComponent.prototype.viewDetails = function (campanha) {
        this.router.navigate([this.campanha.id, 'details']);
    };
    SearchComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'campanhas-search',
            template: __webpack_require__(/*! ./search.component.html */ "./src/app/campanhas/search/search.component.html"),
            styles: [__webpack_require__(/*! ./search.component.scss */ "./src/app/campanhas/search/search.component.scss")],
            animations: [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["trigger"])('sideMenuAnime', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["state"])('false', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ width: '0px', visibility: 'hidden' })),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["state"])('true', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ width: '100%' })),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])('true => false', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('10ms ease-in')),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])('false => true', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('600ms ease-out'))
                ]),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["trigger"])('mainContainerAnime', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["state"])('false', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ marginLeft: '0px' })),
                    // state('true', style({marginLeft:'250px'})),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])('true => false', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('10ms ease-in')),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])('false => true', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('600ms ease-out'))
                ])
            ]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"],
            _ngrx_store__WEBPACK_IMPORTED_MODULE_6__["Store"]])
    ], SearchComponent);
    return SearchComponent;
}());



/***/ })

}]);
//# sourceMappingURL=campanhas-campanhas-module.js.map