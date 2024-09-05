﻿define("tradershub.model$RC_003de7652ef70684ee40ecb9c31ff117", ["exports", "@outsystems/runtime-core-js", "OutSystemsMaps.model", "tradershub.model", "OutSystemsMaps.model$ST_b2c05afcf4810ad0d4384a01306bb0f3Structure", "tradershub.referencesHealth", "tradershub.referencesHealth$OutSystemsMaps"], function (exports, OSRuntimeCore, OutSystemsMapsModel, tradershubModel) {
var OS = OSRuntimeCore;
{class RC_003de7652ef70684ee40ecb9c31ff117Inner extends 
OS.DataTypes.GenericRecord {
static attributesToDeclare() {
return [
this.attr("OptionalStaticMapConfigs", "optionalStaticMapConfigsAttr", "OptionalStaticMapConfigs", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new OutSystemsMapsModel.ST_b2c05afcf4810ad0d4384a01306bb0f3Structure());
}, true, OutSystemsMapsModel.ST_b2c05afcf4810ad0d4384a01306bb0f3Structure)
].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
}

static fromStructure(str) {
return new RC_003de7652ef70684ee40ecb9c31ff117(new RC_003de7652ef70684ee40ecb9c31ff117.RecordClass({
optionalStaticMapConfigsAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
}

}

tradershubModel.RC_003de7652ef70684ee40ecb9c31ff117 = RC_003de7652ef70684ee40ecb9c31ff117Inner;

RC_003de7652ef70684ee40ecb9c31ff117Inner._isAnonymousRecord = true;
RC_003de7652ef70684ee40ecb9c31ff117Inner.UniqueId = "003de765-2ef7-0684-ee40-ecb9c31ff117";
var RC_003de7652ef70684ee40ecb9c31ff117 = RC_003de7652ef70684ee40ecb9c31ff117Inner;
RC_003de7652ef70684ee40ecb9c31ff117.init();
}
});

define("tradershub.model$ST_c698a3174b73fffa916cca14f10645acStructure", ["exports", "@outsystems/runtime-core-js", "tradershub.model"], function (exports, OSRuntimeCore, tradershubModel) {
var OS = OSRuntimeCore;
{class ST_c698a3174b73fffa916cca14f10645acStructureInner extends 
OS.DataTypes.GenericRecord {
static attributesToDeclare() {
return [
this.attr("BTC", "bTCAttr", "BTC", false, false, OS.DataTypes.DataTypes.LongInteger, function () {
return OS.DataTypes.LongInteger.defaultValue;
}, true), 
this.attr("ETH", "eTHAttr", "ETH", false, false, OS.DataTypes.DataTypes.LongInteger, function () {
return OS.DataTypes.LongInteger.defaultValue;
}, true), 
this.attr("EUR", "eURAttr", "EUR", false, false, OS.DataTypes.DataTypes.LongInteger, function () {
return OS.DataTypes.LongInteger.defaultValue;
}, true), 
this.attr("GBP", "gBPAttr", "GBP", false, false, OS.DataTypes.DataTypes.LongInteger, function () {
return OS.DataTypes.LongInteger.defaultValue;
}, true), 
this.attr("LTC", "lTCAttr", "LTC", false, false, OS.DataTypes.DataTypes.LongInteger, function () {
return OS.DataTypes.LongInteger.defaultValue;
}, true), 
this.attr("USD", "uSDAttr", "USD", false, false, OS.DataTypes.DataTypes.LongInteger, function () {
return OS.DataTypes.LongInteger.defaultValue;
}, true), 
this.attr("USDC", "uSDCAttr", "USDC", false, false, OS.DataTypes.DataTypes.LongInteger, function () {
return OS.DataTypes.LongInteger.defaultValue;
}, true), 
this.attr("UST", "uSTAttr", "UST", false, false, OS.DataTypes.DataTypes.LongInteger, function () {
return OS.DataTypes.LongInteger.defaultValue;
}, true), 
this.attr("XRP", "xRPAttr", "XRP", false, false, OS.DataTypes.DataTypes.LongInteger, function () {
return OS.DataTypes.LongInteger.defaultValue;
}, true), 
this.attr("EUSDT", "eUSDTAttr", "eUSDT", false, false, OS.DataTypes.DataTypes.LongInteger, function () {
return OS.DataTypes.LongInteger.defaultValue;
}, true), 
this.attr("TUSDT", "tUSDTAttr", "tUSDT", false, false, OS.DataTypes.DataTypes.LongInteger, function () {
return OS.DataTypes.LongInteger.defaultValue;
}, true), 
this.attr("AUD", "aUDAttr", "AUD", false, false, OS.DataTypes.DataTypes.LongInteger, function () {
return OS.DataTypes.LongInteger.defaultValue;
}, true)
].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
}

}

tradershubModel.ST_c698a3174b73fffa916cca14f10645acStructure = ST_c698a3174b73fffa916cca14f10645acStructureInner;

var ST_c698a3174b73fffa916cca14f10645acStructure = ST_c698a3174b73fffa916cca14f10645acStructureInner;
ST_c698a3174b73fffa916cca14f10645acStructure.init();
}
});

define("tradershub.model$ST_4090eb1c8cd075ebe26f8bb290f1ff93Structure", ["exports", "@outsystems/runtime-core-js", "tradershub.model"], function (exports, OSRuntimeCore, tradershubModel) {
var OS = OSRuntimeCore;
{class ST_4090eb1c8cd075ebe26f8bb290f1ff93StructureInner extends 
OS.DataTypes.GenericRecord {
static attributesToDeclare() {
return [
this.attr("Max", "maxAttr", "max", false, false, OS.DataTypes.DataTypes.Decimal, function () {
return OS.DataTypes.Decimal.defaultValue;
}, true), 
this.attr("Min", "minAttr", "min", false, false, OS.DataTypes.DataTypes.Decimal, function () {
return OS.DataTypes.Decimal.defaultValue;
}, true)
].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
}

}

tradershubModel.ST_4090eb1c8cd075ebe26f8bb290f1ff93Structure = ST_4090eb1c8cd075ebe26f8bb290f1ff93StructureInner;

var ST_4090eb1c8cd075ebe26f8bb290f1ff93Structure = ST_4090eb1c8cd075ebe26f8bb290f1ff93StructureInner;
ST_4090eb1c8cd075ebe26f8bb290f1ff93Structure.init();
}
});

define("tradershub.model$ST_d48988cf8eae8d40a2245d672da18414Structure", ["exports", "@outsystems/runtime-core-js", "tradershub.model", "tradershub.model$ST_c698a3174b73fffa916cca14f10645acStructure", "tradershub.model$ST_4090eb1c8cd075ebe26f8bb290f1ff93Structure"], function (exports, OSRuntimeCore, tradershubModel) {
var OS = OSRuntimeCore;
{class ST_d48988cf8eae8d40a2245d672da18414StructureInner extends 
OS.DataTypes.GenericRecord {
static attributesToDeclare() {
return [
this.attr("Fees", "feesAttr", "fees", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new tradershubModel.ST_c698a3174b73fffa916cca14f10645acStructure());
}, true, tradershubModel.ST_c698a3174b73fffa916cca14f10645acStructure), 
this.attr("Limits", "limitsAttr", "limits", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new tradershubModel.ST_4090eb1c8cd075ebe26f8bb290f1ff93Structure());
}, true, tradershubModel.ST_4090eb1c8cd075ebe26f8bb290f1ff93Structure), 
this.attr("Limits_ctrader", "limits_ctraderAttr", "limits_ctrader", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new tradershubModel.ST_4090eb1c8cd075ebe26f8bb290f1ff93Structure());
}, true, tradershubModel.ST_4090eb1c8cd075ebe26f8bb290f1ff93Structure), 
this.attr("Limits_derivez", "limits_derivezAttr", "limits_derivez", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new tradershubModel.ST_4090eb1c8cd075ebe26f8bb290f1ff93Structure());
}, true, tradershubModel.ST_4090eb1c8cd075ebe26f8bb290f1ff93Structure), 
this.attr("Limits_dxtrade", "limits_dxtradeAttr", "limits_dxtrade", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new tradershubModel.ST_4090eb1c8cd075ebe26f8bb290f1ff93Structure());
}, true, tradershubModel.ST_4090eb1c8cd075ebe26f8bb290f1ff93Structure), 
this.attr("Limits_mt5", "limits_mt5Attr", "limits_mt5", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new tradershubModel.ST_4090eb1c8cd075ebe26f8bb290f1ff93Structure());
}, true, tradershubModel.ST_4090eb1c8cd075ebe26f8bb290f1ff93Structure)
].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
}

}

tradershubModel.ST_d48988cf8eae8d40a2245d672da18414Structure = ST_d48988cf8eae8d40a2245d672da18414StructureInner;

var ST_d48988cf8eae8d40a2245d672da18414Structure = ST_d48988cf8eae8d40a2245d672da18414StructureInner;
ST_d48988cf8eae8d40a2245d672da18414Structure.init();
}
});

define("tradershub.model$ST_c73d23121ed7b75585394958b5922504Structure", ["exports", "@outsystems/runtime-core-js", "tradershub.model", "tradershub.model$ST_d48988cf8eae8d40a2245d672da18414Structure"], function (exports, OSRuntimeCore, tradershubModel) {
var OS = OSRuntimeCore;
{class ST_c73d23121ed7b75585394958b5922504StructureInner extends 
OS.DataTypes.GenericRecord {
static attributesToDeclare() {
return [
this.attr("Fractional_digits", "fractional_digitsAttr", "fractional_digits", false, false, OS.DataTypes.DataTypes.LongInteger, function () {
return OS.DataTypes.LongInteger.defaultValue;
}, true), 
this.attr("Is_deposit_suspended", "is_deposit_suspendedAttr", "is_deposit_suspended", false, false, OS.DataTypes.DataTypes.LongInteger, function () {
return OS.DataTypes.LongInteger.defaultValue;
}, true), 
this.attr("Is_suspended", "is_suspendedAttr", "is_suspended", false, false, OS.DataTypes.DataTypes.LongInteger, function () {
return OS.DataTypes.LongInteger.defaultValue;
}, true), 
this.attr("Is_withdrawal_suspended", "is_withdrawal_suspendedAttr", "is_withdrawal_suspended", false, false, OS.DataTypes.DataTypes.LongInteger, function () {
return OS.DataTypes.LongInteger.defaultValue;
}, true), 
this.attr("Name", "nameAttr", "name", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Stake_default", "stake_defaultAttr", "stake_default", false, false, OS.DataTypes.DataTypes.Decimal, function () {
return OS.DataTypes.Decimal.defaultValue;
}, true), 
this.attr("Transfer_between_accounts", "transfer_between_accountsAttr", "transfer_between_accounts", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new tradershubModel.ST_d48988cf8eae8d40a2245d672da18414Structure());
}, true, tradershubModel.ST_d48988cf8eae8d40a2245d672da18414Structure), 
this.attr("Type", "typeAttr", "type", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true)
].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
}

}

tradershubModel.ST_c73d23121ed7b75585394958b5922504Structure = ST_c73d23121ed7b75585394958b5922504StructureInner;

var ST_c73d23121ed7b75585394958b5922504Structure = ST_c73d23121ed7b75585394958b5922504StructureInner;
ST_c73d23121ed7b75585394958b5922504Structure.init();
}
});

define("tradershub.model$RC_6eb4f1f1f3b262d4ac42a21f383ee0db", ["exports", "@outsystems/runtime-core-js", "tradershub.model", "tradershub.model$ST_c73d23121ed7b75585394958b5922504Structure"], function (exports, OSRuntimeCore, tradershubModel) {
var OS = OSRuntimeCore;
{class RC_6eb4f1f1f3b262d4ac42a21f383ee0dbInner extends 
OS.DataTypes.GenericRecord {
static attributesToDeclare() {
return [
this.attr("Crypto", "cryptoAttr", "Crypto", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new tradershubModel.ST_c73d23121ed7b75585394958b5922504Structure());
}, true, tradershubModel.ST_c73d23121ed7b75585394958b5922504Structure)
].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
}

static fromStructure(str) {
return new RC_6eb4f1f1f3b262d4ac42a21f383ee0db(new RC_6eb4f1f1f3b262d4ac42a21f383ee0db.RecordClass({
cryptoAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
}

}

tradershubModel.RC_6eb4f1f1f3b262d4ac42a21f383ee0db = RC_6eb4f1f1f3b262d4ac42a21f383ee0dbInner;

RC_6eb4f1f1f3b262d4ac42a21f383ee0dbInner._isAnonymousRecord = true;
RC_6eb4f1f1f3b262d4ac42a21f383ee0dbInner.UniqueId = "6eb4f1f1-f3b2-62d4-ac42-a21f383ee0db";
var RC_6eb4f1f1f3b262d4ac42a21f383ee0db = RC_6eb4f1f1f3b262d4ac42a21f383ee0dbInner;
RC_6eb4f1f1f3b262d4ac42a21f383ee0db.init();
}
});

define("tradershub.model$RL_0053fdb1eb113a684893530a3a6191f2", ["exports", "@outsystems/runtime-core-js", "tradershub.model", "tradershub.model$RC_6eb4f1f1f3b262d4ac42a21f383ee0db"], function (exports, OSRuntimeCore, tradershubModel) {
var OS = OSRuntimeCore;
class RL_0053fdb1eb113a684893530a3a6191f2 extends 
OS.DataTypes.GenericRecordList {
static getItemType() {
return tradershubModel.RC_6eb4f1f1f3b262d4ac42a21f383ee0db;
}

}

tradershubModel.RL_0053fdb1eb113a684893530a3a6191f2 = RL_0053fdb1eb113a684893530a3a6191f2;

});

define("tradershub.model$ST_89997516e5fa7eccf341304acb63651bStructure", ["exports", "@outsystems/runtime-core-js", "tradershub.model"], function (exports, OSRuntimeCore, tradershubModel) {
var OS = OSRuntimeCore;
{class ST_89997516e5fa7eccf341304acb63651bStructureInner extends 
OS.DataTypes.GenericRecord {
static attributesToDeclare() {
return [
this.attr("FirstName", "firstNameAttr", "FirstName", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("LastName", "lastNameAttr", "LastName", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("DateOfBirth", "dateOfBirthAttr", "DateOfBirth", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true)
].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
}

}

tradershubModel.ST_89997516e5fa7eccf341304acb63651bStructure = ST_89997516e5fa7eccf341304acb63651bStructureInner;

var ST_89997516e5fa7eccf341304acb63651bStructure = ST_89997516e5fa7eccf341304acb63651bStructureInner;
ST_89997516e5fa7eccf341304acb63651bStructure.init();
}
});

define("tradershub.model$RC_bf732c15164b272b088c534d6dc8bf70", ["exports", "@outsystems/runtime-core-js", "tradershub.model", "tradershub.model$ST_89997516e5fa7eccf341304acb63651bStructure"], function (exports, OSRuntimeCore, tradershubModel) {
var OS = OSRuntimeCore;
{class RC_bf732c15164b272b088c534d6dc8bf70Inner extends 
OS.DataTypes.GenericRecord {
static attributesToDeclare() {
return [
this.attr("PersonalDetailsValidationError", "personalDetailsValidationErrorAttr", "PersonalDetailsValidationError", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new tradershubModel.ST_89997516e5fa7eccf341304acb63651bStructure());
}, true, tradershubModel.ST_89997516e5fa7eccf341304acb63651bStructure)
].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
}

static fromStructure(str) {
return new RC_bf732c15164b272b088c534d6dc8bf70(new RC_bf732c15164b272b088c534d6dc8bf70.RecordClass({
personalDetailsValidationErrorAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
}

}

tradershubModel.RC_bf732c15164b272b088c534d6dc8bf70 = RC_bf732c15164b272b088c534d6dc8bf70Inner;

RC_bf732c15164b272b088c534d6dc8bf70Inner._isAnonymousRecord = true;
RC_bf732c15164b272b088c534d6dc8bf70Inner.UniqueId = "bf732c15-164b-272b-088c-534d6dc8bf70";
var RC_bf732c15164b272b088c534d6dc8bf70 = RC_bf732c15164b272b088c534d6dc8bf70Inner;
RC_bf732c15164b272b088c534d6dc8bf70.init();
}
});

define("tradershub.model$RL_00936eef257061be45c67cab1008e648", ["exports", "@outsystems/runtime-core-js", "tradershub.model", "tradershub.model$RC_bf732c15164b272b088c534d6dc8bf70"], function (exports, OSRuntimeCore, tradershubModel) {
var OS = OSRuntimeCore;
class RL_00936eef257061be45c67cab1008e648 extends 
OS.DataTypes.GenericRecordList {
static getItemType() {
return tradershubModel.RC_bf732c15164b272b088c534d6dc8bf70;
}

}

tradershubModel.RL_00936eef257061be45c67cab1008e648 = RL_00936eef257061be45c67cab1008e648;

});

define("tradershub.model$RC_009f057acdc45a698d784f1d33cd022c", ["exports", "@outsystems/runtime-core-js", "RESTAPIWebsocket.model", "tradershub.model", "RESTAPIWebsocket.model$ST_6e1c5ab117f6599aeb50c68a9a2fa65aStructure", "tradershub.referencesHealth", "tradershub.referencesHealth$RESTAPIWebsocket"], function (exports, OSRuntimeCore, RESTAPIWebsocketModel, tradershubModel) {
var OS = OSRuntimeCore;
{class RC_009f057acdc45a698d784f1d33cd022cInner extends 
OS.DataTypes.GenericRecord {
static attributesToDeclare() {
return [
this.attr("PostVerifyEmailResponse", "postVerifyEmailResponseAttr", "PostVerifyEmailResponse2", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new RESTAPIWebsocketModel.ST_6e1c5ab117f6599aeb50c68a9a2fa65aStructure());
}, true, RESTAPIWebsocketModel.ST_6e1c5ab117f6599aeb50c68a9a2fa65aStructure)
].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
}

static fromStructure(str) {
return new RC_009f057acdc45a698d784f1d33cd022c(new RC_009f057acdc45a698d784f1d33cd022c.RecordClass({
postVerifyEmailResponseAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
}

}

tradershubModel.RC_009f057acdc45a698d784f1d33cd022c = RC_009f057acdc45a698d784f1d33cd022cInner;

RC_009f057acdc45a698d784f1d33cd022cInner._isAnonymousRecord = true;
RC_009f057acdc45a698d784f1d33cd022cInner.UniqueId = "009f057a-cdc4-5a69-8d78-4f1d33cd022c";
var RC_009f057acdc45a698d784f1d33cd022c = RC_009f057acdc45a698d784f1d33cd022cInner;
RC_009f057acdc45a698d784f1d33cd022c.init();
}
});

define("tradershub.model$RC_80cb2a4451da1d8d8f25a688259024cd", ["exports", "@outsystems/runtime-core-js", "OutSystemsMaps.model", "tradershub.model", "OutSystemsMaps.model$ST_c2a46cf64d2acc4b38d805712495224cStructure", "tradershub.referencesHealth", "tradershub.referencesHealth$OutSystemsMaps"], function (exports, OSRuntimeCore, OutSystemsMapsModel, tradershubModel) {
var OS = OSRuntimeCore;
{class RC_80cb2a4451da1d8d8f25a688259024cdInner extends 
OS.DataTypes.GenericRecord {
static attributesToDeclare() {
return [
this.attr("Stroke", "strokeAttr", "Stroke", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new OutSystemsMapsModel.ST_c2a46cf64d2acc4b38d805712495224cStructure());
}, true, OutSystemsMapsModel.ST_c2a46cf64d2acc4b38d805712495224cStructure)
].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
}

static fromStructure(str) {
return new RC_80cb2a4451da1d8d8f25a688259024cd(new RC_80cb2a4451da1d8d8f25a688259024cd.RecordClass({
strokeAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
}

}

tradershubModel.RC_80cb2a4451da1d8d8f25a688259024cd = RC_80cb2a4451da1d8d8f25a688259024cdInner;

RC_80cb2a4451da1d8d8f25a688259024cdInner._isAnonymousRecord = true;
RC_80cb2a4451da1d8d8f25a688259024cdInner.UniqueId = "80cb2a44-51da-1d8d-8f25-a688259024cd";
var RC_80cb2a4451da1d8d8f25a688259024cd = RC_80cb2a4451da1d8d8f25a688259024cdInner;
RC_80cb2a4451da1d8d8f25a688259024cd.init();
}
});

define("tradershub.model$RL_01101873132d33b7b76cda4800cadf1d", ["exports", "@outsystems/runtime-core-js", "tradershub.model", "tradershub.model$RC_80cb2a4451da1d8d8f25a688259024cd"], function (exports, OSRuntimeCore, tradershubModel) {
var OS = OSRuntimeCore;
class RL_01101873132d33b7b76cda4800cadf1d extends 
OS.DataTypes.GenericRecordList {
static getItemType() {
return tradershubModel.RC_80cb2a4451da1d8d8f25a688259024cd;
}

}

tradershubModel.RL_01101873132d33b7b76cda4800cadf1d = RL_01101873132d33b7b76cda4800cadf1d;

});

define("tradershub.model$RC_012b2720fb0dcd442416908af4498cef", ["exports", "@outsystems/runtime-core-js", "RESTAPIWebsocket.model", "tradershub.model", "RESTAPIWebsocket.model$ST_333caa433a680d581b2dfdf80dcbab60Structure", "tradershub.referencesHealth", "tradershub.referencesHealth$RESTAPIWebsocket"], function (exports, OSRuntimeCore, RESTAPIWebsocketModel, tradershubModel) {
var OS = OSRuntimeCore;
{class RC_012b2720fb0dcd442416908af4498cefInner extends 
OS.DataTypes.GenericRecord {
static attributesToDeclare() {
return [
this.attr("Postcode", "postcodeAttr", "Postcode", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new RESTAPIWebsocketModel.ST_333caa433a680d581b2dfdf80dcbab60Structure());
}, true, RESTAPIWebsocketModel.ST_333caa433a680d581b2dfdf80dcbab60Structure)
].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
}

static fromStructure(str) {
return new RC_012b2720fb0dcd442416908af4498cef(new RC_012b2720fb0dcd442416908af4498cef.RecordClass({
postcodeAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
}

}

tradershubModel.RC_012b2720fb0dcd442416908af4498cef = RC_012b2720fb0dcd442416908af4498cefInner;

RC_012b2720fb0dcd442416908af4498cefInner._isAnonymousRecord = true;
RC_012b2720fb0dcd442416908af4498cefInner.UniqueId = "012b2720-fb0d-cd44-2416-908af4498cef";
var RC_012b2720fb0dcd442416908af4498cef = RC_012b2720fb0dcd442416908af4498cefInner;
RC_012b2720fb0dcd442416908af4498cef.init();
}
});

define("tradershub.model$RC_9589ecc0629788c2aca6b47bcbae782c", ["exports", "@outsystems/runtime-core-js", "OutSystemsUI.model", "tradershub.model", "OutSystemsUI.model$EN_bc915b2fa9297a72fb4d1b227ebe2573EntityRecord", "tradershub.referencesHealth", "tradershub.referencesHealth$OutSystemsUI"], function (exports, OSRuntimeCore, OutSystemsUIModel, tradershubModel) {
var OS = OSRuntimeCore;
{class RC_9589ecc0629788c2aca6b47bcbae782cInner extends 
OS.DataTypes.GenericRecord {
static attributesToDeclare() {
return [
this.attr("Space", "spaceAttr", "Space", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new OutSystemsUIModel.EN_bc915b2fa9297a72fb4d1b227ebe2573EntityRecord());
}, true, OutSystemsUIModel.EN_bc915b2fa9297a72fb4d1b227ebe2573EntityRecord)
].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
}

static fromStructure(str) {
return new RC_9589ecc0629788c2aca6b47bcbae782c(new RC_9589ecc0629788c2aca6b47bcbae782c.RecordClass({
spaceAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
}

}

tradershubModel.RC_9589ecc0629788c2aca6b47bcbae782c = RC_9589ecc0629788c2aca6b47bcbae782cInner;

RC_9589ecc0629788c2aca6b47bcbae782cInner._isAnonymousRecord = true;
RC_9589ecc0629788c2aca6b47bcbae782cInner.UniqueId = "9589ecc0-6297-88c2-aca6-b47bcbae782c";
var RC_9589ecc0629788c2aca6b47bcbae782c = RC_9589ecc0629788c2aca6b47bcbae782cInner;
RC_9589ecc0629788c2aca6b47bcbae782c.init();
}
});

define("tradershub.model$RL_021cf4e3f37562560ed722ed4a5446c1", ["exports", "@outsystems/runtime-core-js", "tradershub.model", "tradershub.model$RC_9589ecc0629788c2aca6b47bcbae782c"], function (exports, OSRuntimeCore, tradershubModel) {
var OS = OSRuntimeCore;
class RL_021cf4e3f37562560ed722ed4a5446c1 extends 
OS.DataTypes.GenericRecordList {
static getItemType() {
return tradershubModel.RC_9589ecc0629788c2aca6b47bcbae782c;
}

}

tradershubModel.RL_021cf4e3f37562560ed722ed4a5446c1 = RL_021cf4e3f37562560ed722ed4a5446c1;

});

define("tradershub.model$RL_024c65775fda4a7c95336ab422a752c4", ["exports", "@outsystems/runtime-core-js", "OutSystemsUI.model", "tradershub.model", "OutSystemsUI.model$EN_1e2af88601c0491260411e1369eb104cEntityRecord", "tradershub.referencesHealth", "tradershub.referencesHealth$OutSystemsUI"], function (exports, OSRuntimeCore, OutSystemsUIModel, tradershubModel) {
var OS = OSRuntimeCore;
class RL_024c65775fda4a7c95336ab422a752c4 extends 
OS.DataTypes.GenericRecordList {
static getItemType() {
return OutSystemsUIModel.EN_1e2af88601c0491260411e1369eb104cEntityRecord;
}

}

tradershubModel.RL_024c65775fda4a7c95336ab422a752c4 = RL_024c65775fda4a7c95336ab422a752c4;

});

define("tradershub.model$RL_028be7f802152b5f25a868ed964b5ea2", ["exports", "@outsystems/runtime-core-js", "OutSystemsUI.model", "tradershub.model", "OutSystemsUI.model$EN_8d4f783227026ce93d50126c7f028443EntityRecord", "tradershub.referencesHealth", "tradershub.referencesHealth$OutSystemsUI"], function (exports, OSRuntimeCore, OutSystemsUIModel, tradershubModel) {
var OS = OSRuntimeCore;
class RL_028be7f802152b5f25a868ed964b5ea2 extends 
OS.DataTypes.GenericRecordList {
static getItemType() {
return OutSystemsUIModel.EN_8d4f783227026ce93d50126c7f028443EntityRecord;
}

}

tradershubModel.RL_028be7f802152b5f25a868ed964b5ea2 = RL_028be7f802152b5f25a868ed964b5ea2;

});

define("tradershub.model$BasicTypeList<Text>", ["exports", "@outsystems/runtime-core-js", "tradershub.model"], function (exports, OSRuntimeCore, tradershubModel) {
var OS = OSRuntimeCore;
class TextList extends 
OS.DataTypes.GenericRecordList {
static getItemType() {
return OS.DataTypes.DataTypes.Text;
}

}

tradershubModel.TextList = TextList;

});

define("tradershub.model$RC_e16346b05b03d5a8388d39bb24b7660c", ["exports", "@outsystems/runtime-core-js", "RESTAPIWebsocket.model", "tradershub.model", "RESTAPIWebsocket.model$ST_55477c48be760e041c4dbfa365f63009Structure", "tradershub.referencesHealth", "tradershub.referencesHealth$RESTAPIWebsocket"], function (exports, OSRuntimeCore, RESTAPIWebsocketModel, tradershubModel) {
var OS = OSRuntimeCore;
{class RC_e16346b05b03d5a8388d39bb24b7660cInner extends 
OS.DataTypes.GenericRecord {
static attributesToDeclare() {
return [
this.attr("LandingCompany2", "landingCompany2Attr", "LandingCompany2", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new RESTAPIWebsocketModel.ST_55477c48be760e041c4dbfa365f63009Structure());
}, true, RESTAPIWebsocketModel.ST_55477c48be760e041c4dbfa365f63009Structure)
].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
}

static fromStructure(str) {
return new RC_e16346b05b03d5a8388d39bb24b7660c(new RC_e16346b05b03d5a8388d39bb24b7660c.RecordClass({
landingCompany2Attr: OS.DataTypes.ImmutableBase.getData(str)
}));
}

}

tradershubModel.RC_e16346b05b03d5a8388d39bb24b7660c = RC_e16346b05b03d5a8388d39bb24b7660cInner;

RC_e16346b05b03d5a8388d39bb24b7660cInner._isAnonymousRecord = true;
RC_e16346b05b03d5a8388d39bb24b7660cInner.UniqueId = "e16346b0-5b03-d5a8-388d-39bb24b7660c";
var RC_e16346b05b03d5a8388d39bb24b7660c = RC_e16346b05b03d5a8388d39bb24b7660cInner;
RC_e16346b05b03d5a8388d39bb24b7660c.init();
}
});

define("tradershub.model$RL_02c7187c7ba98cee9be98803b8e6dc25", ["exports", "@outsystems/runtime-core-js", "tradershub.model", "tradershub.model$RC_e16346b05b03d5a8388d39bb24b7660c"], function (exports, OSRuntimeCore, tradershubModel) {
var OS = OSRuntimeCore;
class RL_02c7187c7ba98cee9be98803b8e6dc25 extends 
OS.DataTypes.GenericRecordList {
static getItemType() {
return tradershubModel.RC_e16346b05b03d5a8388d39bb24b7660c;
}

}

tradershubModel.RL_02c7187c7ba98cee9be98803b8e6dc25 = RL_02c7187c7ba98cee9be98803b8e6dc25;

});

define("tradershub.model$RC_fb5d22b1003cff234a588ab54b5367f0", ["exports", "@outsystems/runtime-core-js", "OutSystemsUI.model", "tradershub.model", "OutSystemsUI.model$EN_6b2a66e5a0a888e952c1a6f0d254d48aEntityRecord", "tradershub.referencesHealth", "tradershub.referencesHealth$OutSystemsUI"], function (exports, OSRuntimeCore, OutSystemsUIModel, tradershubModel) {
var OS = OSRuntimeCore;
{class RC_fb5d22b1003cff234a588ab54b5367f0Inner extends 
OS.DataTypes.GenericRecord {
static attributesToDeclare() {
return [
this.attr("CarouselDirection", "carouselDirectionAttr", "CarouselDirection", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new OutSystemsUIModel.EN_6b2a66e5a0a888e952c1a6f0d254d48aEntityRecord());
}, true, OutSystemsUIModel.EN_6b2a66e5a0a888e952c1a6f0d254d48aEntityRecord)
].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
}

static fromStructure(str) {
return new RC_fb5d22b1003cff234a588ab54b5367f0(new RC_fb5d22b1003cff234a588ab54b5367f0.RecordClass({
carouselDirectionAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
}

}

tradershubModel.RC_fb5d22b1003cff234a588ab54b5367f0 = RC_fb5d22b1003cff234a588ab54b5367f0Inner;

RC_fb5d22b1003cff234a588ab54b5367f0Inner._isAnonymousRecord = true;
RC_fb5d22b1003cff234a588ab54b5367f0Inner.UniqueId = "fb5d22b1-003c-ff23-4a58-8ab54b5367f0";
var RC_fb5d22b1003cff234a588ab54b5367f0 = RC_fb5d22b1003cff234a588ab54b5367f0Inner;
RC_fb5d22b1003cff234a588ab54b5367f0.init();
}
});

define("tradershub.model$RL_02cff45c25b99caaf51dba44a0e0b754", ["exports", "@outsystems/runtime-core-js", "tradershub.model", "tradershub.model$RC_fb5d22b1003cff234a588ab54b5367f0"], function (exports, OSRuntimeCore, tradershubModel) {
var OS = OSRuntimeCore;
class RL_02cff45c25b99caaf51dba44a0e0b754 extends 
OS.DataTypes.GenericRecordList {
static getItemType() {
return tradershubModel.RC_fb5d22b1003cff234a588ab54b5367f0;
}

}

tradershubModel.RL_02cff45c25b99caaf51dba44a0e0b754 = RL_02cff45c25b99caaf51dba44a0e0b754;

});

define("tradershub.model$RC_a11b90f038b532a4625b14a0974b03a2", ["exports", "@outsystems/runtime-core-js", "OutSystemsMaps.model", "tradershub.model", "OutSystemsMaps.model$ST_fbded4e930a61a57761a37f0b1ea8d40Structure", "tradershub.referencesHealth", "tradershub.referencesHealth$OutSystemsMaps"], function (exports, OSRuntimeCore, OutSystemsMapsModel, tradershubModel) {
var OS = OSRuntimeCore;
{class RC_a11b90f038b532a4625b14a0974b03a2Inner extends 
OS.DataTypes.GenericRecord {
static attributesToDeclare() {
return [
this.attr("OptionalRectangleConfigs", "optionalRectangleConfigsAttr", "OptionalRectangleConfigs", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new OutSystemsMapsModel.ST_fbded4e930a61a57761a37f0b1ea8d40Structure());
}, true, OutSystemsMapsModel.ST_fbded4e930a61a57761a37f0b1ea8d40Structure)
].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
}

static fromStructure(str) {
return new RC_a11b90f038b532a4625b14a0974b03a2(new RC_a11b90f038b532a4625b14a0974b03a2.RecordClass({
optionalRectangleConfigsAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
}

}

tradershubModel.RC_a11b90f038b532a4625b14a0974b03a2 = RC_a11b90f038b532a4625b14a0974b03a2Inner;

RC_a11b90f038b532a4625b14a0974b03a2Inner._isAnonymousRecord = true;
RC_a11b90f038b532a4625b14a0974b03a2Inner.UniqueId = "a11b90f0-38b5-32a4-625b-14a0974b03a2";
var RC_a11b90f038b532a4625b14a0974b03a2 = RC_a11b90f038b532a4625b14a0974b03a2Inner;
RC_a11b90f038b532a4625b14a0974b03a2.init();
}
});

define("tradershub.model$RL_031760b0a286b19e96249006302a6d77", ["exports", "@outsystems/runtime-core-js", "tradershub.model", "tradershub.model$RC_a11b90f038b532a4625b14a0974b03a2"], function (exports, OSRuntimeCore, tradershubModel) {
var OS = OSRuntimeCore;
class RL_031760b0a286b19e96249006302a6d77 extends 
OS.DataTypes.GenericRecordList {
static getItemType() {
return tradershubModel.RC_a11b90f038b532a4625b14a0974b03a2;
}

}

tradershubModel.RL_031760b0a286b19e96249006302a6d77 = RL_031760b0a286b19e96249006302a6d77;

});

define("tradershub.model$RC_d761bc5f1b0fe2debf1c3edffd0efd3c", ["exports", "@outsystems/runtime-core-js", "OutSystemsMaps.model", "tradershub.model", "OutSystemsMaps.model$ST_d609eacb476c603df8b92eb374da99faStructure", "tradershub.referencesHealth", "tradershub.referencesHealth$OutSystemsMaps"], function (exports, OSRuntimeCore, OutSystemsMapsModel, tradershubModel) {
var OS = OSRuntimeCore;
{class RC_d761bc5f1b0fe2debf1c3edffd0efd3cInner extends 
OS.DataTypes.GenericRecord {
static attributesToDeclare() {
return [
this.attr("OptionalMapConfigs", "optionalMapConfigsAttr", "OptionalMapConfigs", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new OutSystemsMapsModel.ST_d609eacb476c603df8b92eb374da99faStructure());
}, true, OutSystemsMapsModel.ST_d609eacb476c603df8b92eb374da99faStructure)
].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
}

static fromStructure(str) {
return new RC_d761bc5f1b0fe2debf1c3edffd0efd3c(new RC_d761bc5f1b0fe2debf1c3edffd0efd3c.RecordClass({
optionalMapConfigsAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
}

}

tradershubModel.RC_d761bc5f1b0fe2debf1c3edffd0efd3c = RC_d761bc5f1b0fe2debf1c3edffd0efd3cInner;

RC_d761bc5f1b0fe2debf1c3edffd0efd3cInner._isAnonymousRecord = true;
RC_d761bc5f1b0fe2debf1c3edffd0efd3cInner.UniqueId = "d761bc5f-1b0f-e2de-bf1c-3edffd0efd3c";
var RC_d761bc5f1b0fe2debf1c3edffd0efd3c = RC_d761bc5f1b0fe2debf1c3edffd0efd3cInner;
RC_d761bc5f1b0fe2debf1c3edffd0efd3c.init();
}
});

define("tradershub.model$RL_0352d07492c0bc1610ae95bac5df94b5", ["exports", "@outsystems/runtime-core-js", "tradershub.model", "tradershub.model$RC_d761bc5f1b0fe2debf1c3edffd0efd3c"], function (exports, OSRuntimeCore, tradershubModel) {
var OS = OSRuntimeCore;
class RL_0352d07492c0bc1610ae95bac5df94b5 extends 
OS.DataTypes.GenericRecordList {
static getItemType() {
return tradershubModel.RC_d761bc5f1b0fe2debf1c3edffd0efd3c;
}

}

tradershubModel.RL_0352d07492c0bc1610ae95bac5df94b5 = RL_0352d07492c0bc1610ae95bac5df94b5;

});

define("tradershub.model$RC_03619642a06de09478f0b8f506c364eb", ["exports", "@outsystems/runtime-core-js", "OutSystemsUI.model", "tradershub.model", "OutSystemsUI.model$EN_75c9c074bd528ecee8df4d2a3299b5a1EntityRecord", "tradershub.referencesHealth", "tradershub.referencesHealth$OutSystemsUI"], function (exports, OSRuntimeCore, OutSystemsUIModel, tradershubModel) {
var OS = OSRuntimeCore;
{class RC_03619642a06de09478f0b8f506c364ebInner extends 
OS.DataTypes.GenericRecord {
static attributesToDeclare() {
return [
this.attr("VideoState", "videoStateAttr", "VideoState", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new OutSystemsUIModel.EN_75c9c074bd528ecee8df4d2a3299b5a1EntityRecord());
}, true, OutSystemsUIModel.EN_75c9c074bd528ecee8df4d2a3299b5a1EntityRecord)
].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
}

static fromStructure(str) {
return new RC_03619642a06de09478f0b8f506c364eb(new RC_03619642a06de09478f0b8f506c364eb.RecordClass({
videoStateAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
}

}

tradershubModel.RC_03619642a06de09478f0b8f506c364eb = RC_03619642a06de09478f0b8f506c364ebInner;

RC_03619642a06de09478f0b8f506c364ebInner._isAnonymousRecord = true;
RC_03619642a06de09478f0b8f506c364ebInner.UniqueId = "03619642-a06d-e094-78f0-b8f506c364eb";
var RC_03619642a06de09478f0b8f506c364eb = RC_03619642a06de09478f0b8f506c364ebInner;
RC_03619642a06de09478f0b8f506c364eb.init();
}
});

define("tradershub.model$RL_03ad86d8c1630b012ffc7d14eb428cff", ["exports", "@outsystems/runtime-core-js", "RESTAPIWebsocket.model", "tradershub.model", "RESTAPIWebsocket.model$ST_9adaf3e13b31a4c3f4ee4c0b223b00bcStructure", "tradershub.referencesHealth", "tradershub.referencesHealth$RESTAPIWebsocket"], function (exports, OSRuntimeCore, RESTAPIWebsocketModel, tradershubModel) {
var OS = OSRuntimeCore;
class RL_03ad86d8c1630b012ffc7d14eb428cff extends 
OS.DataTypes.GenericRecordList {
static getItemType() {
return RESTAPIWebsocketModel.ST_9adaf3e13b31a4c3f4ee4c0b223b00bcStructure;
}

}

tradershubModel.RL_03ad86d8c1630b012ffc7d14eb428cff = RL_03ad86d8c1630b012ffc7d14eb428cff;

});

define("tradershub.model$ST_258259badb7b79699a67a1a8307ba86dStructure", ["exports", "@outsystems/runtime-core-js", "tradershub.model"], function (exports, OSRuntimeCore, tradershubModel) {
var OS = OSRuntimeCore;
{class ST_258259badb7b79699a67a1a8307ba86dStructureInner extends 
OS.DataTypes.GenericRecord {
static attributesToDeclare() {
return [
this.attr("All", "allAttr", "all", false, false, OS.DataTypes.DataTypes.LongInteger, function () {
return OS.DataTypes.LongInteger.defaultValue;
}, true), 
this.attr("Demo", "demoAttr", "demo", false, false, OS.DataTypes.DataTypes.LongInteger, function () {
return OS.DataTypes.LongInteger.defaultValue;
}, true), 
this.attr("Real", "realAttr", "real", false, false, OS.DataTypes.DataTypes.LongInteger, function () {
return OS.DataTypes.LongInteger.defaultValue;
}, true)
].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
}

}

tradershubModel.ST_258259badb7b79699a67a1a8307ba86dStructure = ST_258259badb7b79699a67a1a8307ba86dStructureInner;

var ST_258259badb7b79699a67a1a8307ba86dStructure = ST_258259badb7b79699a67a1a8307ba86dStructureInner;
ST_258259badb7b79699a67a1a8307ba86dStructure.init();
}
});

define("tradershub.model$RL_03fe8fccb2b0fc572de760746c8f6868", ["exports", "@outsystems/runtime-core-js", "tradershub.model", "tradershub.model$ST_258259badb7b79699a67a1a8307ba86dStructure"], function (exports, OSRuntimeCore, tradershubModel) {
var OS = OSRuntimeCore;
class RL_03fe8fccb2b0fc572de760746c8f6868 extends 
OS.DataTypes.GenericRecordList {
static getItemType() {
return tradershubModel.ST_258259badb7b79699a67a1a8307ba86dStructure;
}

}

tradershubModel.RL_03fe8fccb2b0fc572de760746c8f6868 = RL_03fe8fccb2b0fc572de760746c8f6868;

});

define("tradershub.model$ST_5ee2e7ff29695cda8882106170100facStructure", ["exports", "@outsystems/runtime-core-js", "tradershub.model"], function (exports, OSRuntimeCore, tradershubModel) {
var OS = OSRuntimeCore;
{class ST_5ee2e7ff29695cda8882106170100facStructureInner extends 
OS.DataTypes.GenericRecord {
static attributesToDeclare() {
return [
this.attr("AdditionalDocumentNumber", "additionalDocumentNumberAttr", "AdditionalDocumentNumber", false, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, true), 
this.attr("DocumentNumber", "documentNumberAttr", "DocumentNumber", false, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, true), 
this.attr("DocumentType", "documentTypeAttr", "DocumentType", false, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, true)
].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
}

}

tradershubModel.ST_5ee2e7ff29695cda8882106170100facStructure = ST_5ee2e7ff29695cda8882106170100facStructureInner;

var ST_5ee2e7ff29695cda8882106170100facStructure = ST_5ee2e7ff29695cda8882106170100facStructureInner;
ST_5ee2e7ff29695cda8882106170100facStructure.init();
}
});

define("tradershub.model$RC_502aa52d182f12ed3c6384b16c8d8777", ["exports", "@outsystems/runtime-core-js", "tradershub.model", "tradershub.model$ST_5ee2e7ff29695cda8882106170100facStructure"], function (exports, OSRuntimeCore, tradershubModel) {
var OS = OSRuntimeCore;
{class RC_502aa52d182f12ed3c6384b16c8d8777Inner extends 
OS.DataTypes.GenericRecord {
static attributesToDeclare() {
return [
this.attr("IDVValidFields", "iDVValidFieldsAttr", "IDVValidFields", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new tradershubModel.ST_5ee2e7ff29695cda8882106170100facStructure());
}, true, tradershubModel.ST_5ee2e7ff29695cda8882106170100facStructure)
].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
}

static fromStructure(str) {
return new RC_502aa52d182f12ed3c6384b16c8d8777(new RC_502aa52d182f12ed3c6384b16c8d8777.RecordClass({
iDVValidFieldsAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
}

}

tradershubModel.RC_502aa52d182f12ed3c6384b16c8d8777 = RC_502aa52d182f12ed3c6384b16c8d8777Inner;

RC_502aa52d182f12ed3c6384b16c8d8777Inner._isAnonymousRecord = true;
RC_502aa52d182f12ed3c6384b16c8d8777Inner.UniqueId = "502aa52d-182f-12ed-3c63-84b16c8d8777";
var RC_502aa52d182f12ed3c6384b16c8d8777 = RC_502aa52d182f12ed3c6384b16c8d8777Inner;
RC_502aa52d182f12ed3c6384b16c8d8777.init();
}
});

define("tradershub.model$RL_0417077f5c5348a1b4859e3336d70f3e", ["exports", "@outsystems/runtime-core-js", "tradershub.model", "tradershub.model$RC_502aa52d182f12ed3c6384b16c8d8777"], function (exports, OSRuntimeCore, tradershubModel) {
var OS = OSRuntimeCore;
class RL_0417077f5c5348a1b4859e3336d70f3e extends 
OS.DataTypes.GenericRecordList {
static getItemType() {
return tradershubModel.RC_502aa52d182f12ed3c6384b16c8d8777;
}

}

tradershubModel.RL_0417077f5c5348a1b4859e3336d70f3e = RL_0417077f5c5348a1b4859e3336d70f3e;

});

define("tradershub.model$RL_071a5687136a6dbeecb0a0d193c188a2", ["exports", "@outsystems/runtime-core-js", "RESTAPIWebsocket.model", "tradershub.model", "RESTAPIWebsocket.model$ST_bf5d4ab423fae3ff38a977653adc8398Structure", "tradershub.referencesHealth", "tradershub.referencesHealth$RESTAPIWebsocket"], function (exports, OSRuntimeCore, RESTAPIWebsocketModel, tradershubModel) {
var OS = OSRuntimeCore;
class RL_071a5687136a6dbeecb0a0d193c188a2 extends 
OS.DataTypes.GenericRecordList {
static getItemType() {
return RESTAPIWebsocketModel.ST_bf5d4ab423fae3ff38a977653adc8398Structure;
}

}

tradershubModel.RL_071a5687136a6dbeecb0a0d193c188a2 = RL_071a5687136a6dbeecb0a0d193c188a2;

});

define("tradershub.model$RC_0a5ac3085c044e0c9df151a275033fc0", ["exports", "@outsystems/runtime-core-js", "RESTAPIWebsocket.model", "tradershub.model", "RESTAPIWebsocket.model$ST_63a473e932ef99f5271718b62399e682Structure", "tradershub.referencesHealth", "tradershub.referencesHealth$RESTAPIWebsocket"], function (exports, OSRuntimeCore, RESTAPIWebsocketModel, tradershubModel) {
var OS = OSRuntimeCore;
{class RC_0a5ac3085c044e0c9df151a275033fc0Inner extends 
OS.DataTypes.GenericRecord {
static attributesToDeclare() {
return [
this.attr("GetResidenceListResponse", "getResidenceListResponseAttr", "GetResidenceListResponse", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new RESTAPIWebsocketModel.ST_63a473e932ef99f5271718b62399e682Structure());
}, true, RESTAPIWebsocketModel.ST_63a473e932ef99f5271718b62399e682Structure)
].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
}

static fromStructure(str) {
return new RC_0a5ac3085c044e0c9df151a275033fc0(new RC_0a5ac3085c044e0c9df151a275033fc0.RecordClass({
getResidenceListResponseAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
}

}

tradershubModel.RC_0a5ac3085c044e0c9df151a275033fc0 = RC_0a5ac3085c044e0c9df151a275033fc0Inner;

RC_0a5ac3085c044e0c9df151a275033fc0Inner._isAnonymousRecord = true;
RC_0a5ac3085c044e0c9df151a275033fc0Inner.UniqueId = "0a5ac308-5c04-4e0c-9df1-51a275033fc0";
var RC_0a5ac3085c044e0c9df151a275033fc0 = RC_0a5ac3085c044e0c9df151a275033fc0Inner;
RC_0a5ac3085c044e0c9df151a275033fc0.init();
}
});

define("tradershub.model$RL_06044e18a6adcb4a057162249eab9621", ["exports", "@outsystems/runtime-core-js", "tradershub.model", "tradershub.model$RC_0a5ac3085c044e0c9df151a275033fc0"], function (exports, OSRuntimeCore, tradershubModel) {
var OS = OSRuntimeCore;
class RL_06044e18a6adcb4a057162249eab9621 extends 
OS.DataTypes.GenericRecordList {
static getItemType() {
return tradershubModel.RC_0a5ac3085c044e0c9df151a275033fc0;
}

}

tradershubModel.RL_06044e18a6adcb4a057162249eab9621 = RL_06044e18a6adcb4a057162249eab9621;

});

define("tradershub.model$ST_739ced57b6317085dd90ed93a3159f3eStructure", ["exports", "@outsystems/runtime-core-js", "tradershub.model"], function (exports, OSRuntimeCore, tradershubModel) {
var OS = OSRuntimeCore;
{class ST_739ced57b6317085dd90ed93a3159f3eStructureInner extends 
OS.DataTypes.GenericRecord {
static attributesToDeclare() {
return [
this.attr("Display_name", "display_nameAttr", "display_name", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Format", "formatAttr", "format", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true)
].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
}

}

tradershubModel.ST_739ced57b6317085dd90ed93a3159f3eStructure = ST_739ced57b6317085dd90ed93a3159f3eStructureInner;

var ST_739ced57b6317085dd90ed93a3159f3eStructure = ST_739ced57b6317085dd90ed93a3159f3eStructureInner;
ST_739ced57b6317085dd90ed93a3159f3eStructure.init();
}
});

define("tradershub.model$ST_81244dbb8e72a05a708e9a449198444eStructure", ["exports", "@outsystems/runtime-core-js", "tradershub.model", "tradershub.model$ST_739ced57b6317085dd90ed93a3159f3eStructure"], function (exports, OSRuntimeCore, tradershubModel) {
var OS = OSRuntimeCore;
{class ST_81244dbb8e72a05a708e9a449198444eStructureInner extends 
OS.DataTypes.GenericRecord {
static attributesToDeclare() {
return [
this.attr("Display_name", "display_nameAttr", "display_name", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Format", "formatAttr", "format", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Additional", "additionalAttr", "additional", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new tradershubModel.ST_739ced57b6317085dd90ed93a3159f3eStructure());
}, true, tradershubModel.ST_739ced57b6317085dd90ed93a3159f3eStructure)
].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
}

}

tradershubModel.ST_81244dbb8e72a05a708e9a449198444eStructure = ST_81244dbb8e72a05a708e9a449198444eStructureInner;

var ST_81244dbb8e72a05a708e9a449198444eStructure = ST_81244dbb8e72a05a708e9a449198444eStructureInner;
ST_81244dbb8e72a05a708e9a449198444eStructure.init();
}
});

define("tradershub.model$ST_87555d90f21aa57fd03a9d7e779d31e3Structure", ["exports", "@outsystems/runtime-core-js", "tradershub.model", "tradershub.model$ST_739ced57b6317085dd90ed93a3159f3eStructure", "tradershub.model$ST_81244dbb8e72a05a708e9a449198444eStructure"], function (exports, OSRuntimeCore, tradershubModel) {
var OS = OSRuntimeCore;
{class ST_87555d90f21aa57fd03a9d7e779d31e3StructureInner extends 
OS.DataTypes.GenericRecord {
static attributesToDeclare() {
return [
this.attr("National_id", "national_idAttr", "national_id", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new tradershubModel.ST_739ced57b6317085dd90ed93a3159f3eStructure());
}, true, tradershubModel.ST_739ced57b6317085dd90ed93a3159f3eStructure), 
this.attr("Cpf", "cpfAttr", "cpf", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new tradershubModel.ST_739ced57b6317085dd90ed93a3159f3eStructure());
}, true, tradershubModel.ST_739ced57b6317085dd90ed93a3159f3eStructure), 
this.attr("Passport", "passportAttr", "passport", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new tradershubModel.ST_81244dbb8e72a05a708e9a449198444eStructure());
}, true, tradershubModel.ST_81244dbb8e72a05a708e9a449198444eStructure), 
this.attr("Ssnit", "ssnitAttr", "ssnit", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new tradershubModel.ST_739ced57b6317085dd90ed93a3159f3eStructure());
}, true, tradershubModel.ST_739ced57b6317085dd90ed93a3159f3eStructure), 
this.attr("Aadhaar", "aadhaarAttr", "aadhaar", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new tradershubModel.ST_81244dbb8e72a05a708e9a449198444eStructure());
}, true, tradershubModel.ST_81244dbb8e72a05a708e9a449198444eStructure), 
this.attr("Drivers_license", "drivers_licenseAttr", "drivers_license", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new tradershubModel.ST_739ced57b6317085dd90ed93a3159f3eStructure());
}, true, tradershubModel.ST_739ced57b6317085dd90ed93a3159f3eStructure), 
this.attr("Epic", "epicAttr", "epic", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new tradershubModel.ST_739ced57b6317085dd90ed93a3159f3eStructure());
}, true, tradershubModel.ST_739ced57b6317085dd90ed93a3159f3eStructure), 
this.attr("Pan", "panAttr", "pan", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new tradershubModel.ST_739ced57b6317085dd90ed93a3159f3eStructure());
}, true, tradershubModel.ST_739ced57b6317085dd90ed93a3159f3eStructure), 
this.attr("Nik", "nikAttr", "nik", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new tradershubModel.ST_739ced57b6317085dd90ed93a3159f3eStructure());
}, true, tradershubModel.ST_739ced57b6317085dd90ed93a3159f3eStructure), 
this.attr("Alien_card", "alien_cardAttr", "alien_card", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new tradershubModel.ST_739ced57b6317085dd90ed93a3159f3eStructure());
}, true, tradershubModel.ST_739ced57b6317085dd90ed93a3159f3eStructure), 
this.attr("Nin_slip", "nin_slipAttr", "nin_slip", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new tradershubModel.ST_739ced57b6317085dd90ed93a3159f3eStructure());
}, true, tradershubModel.ST_739ced57b6317085dd90ed93a3159f3eStructure), 
this.attr("National_id_no_photo", "national_id_no_photoAttr", "national_id_no_photo", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new tradershubModel.ST_81244dbb8e72a05a708e9a449198444eStructure());
}, true, tradershubModel.ST_81244dbb8e72a05a708e9a449198444eStructure)
].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
}

}

tradershubModel.ST_87555d90f21aa57fd03a9d7e779d31e3Structure = ST_87555d90f21aa57fd03a9d7e779d31e3StructureInner;

var ST_87555d90f21aa57fd03a9d7e779d31e3Structure = ST_87555d90f21aa57fd03a9d7e779d31e3StructureInner;
ST_87555d90f21aa57fd03a9d7e779d31e3Structure.init();
}
});

define("tradershub.model$RL_f95d89703009688d0282052da4de0dc3", ["exports", "@outsystems/runtime-core-js", "tradershub.model", "tradershub.model$ST_739ced57b6317085dd90ed93a3159f3eStructure"], function (exports, OSRuntimeCore, tradershubModel) {
var OS = OSRuntimeCore;
class RL_f95d89703009688d0282052da4de0dc3 extends 
OS.DataTypes.GenericRecordList {
static getItemType() {
return tradershubModel.ST_739ced57b6317085dd90ed93a3159f3eStructure;
}

}

tradershubModel.RL_f95d89703009688d0282052da4de0dc3 = RL_f95d89703009688d0282052da4de0dc3;

});

define("tradershub.model$ST_d0797dfc77615b3a25728769b9f01e76Structure", ["exports", "@outsystems/runtime-core-js", "tradershub.model", "tradershub.model$ST_87555d90f21aa57fd03a9d7e779d31e3Structure", "tradershub.model$ST_739ced57b6317085dd90ed93a3159f3eStructure", "tradershub.model$RL_f95d89703009688d0282052da4de0dc3"], function (exports, OSRuntimeCore, tradershubModel) {
var OS = OSRuntimeCore;
{class ST_d0797dfc77615b3a25728769b9f01e76StructureInner extends 
OS.DataTypes.GenericRecord {
static attributesToDeclare() {
return [
this.attr("Has_visual_sample", "has_visual_sampleAttr", "has_visual_sample", false, false, OS.DataTypes.DataTypes.LongInteger, function () {
return OS.DataTypes.LongInteger.defaultValue;
}, true), 
this.attr("Is_country_supported", "is_country_supportedAttr", "is_country_supported", false, false, OS.DataTypes.DataTypes.LongInteger, function () {
return OS.DataTypes.LongInteger.defaultValue;
}, true), 
this.attr("Documents_supported", "documents_supportedAttr", "documents_supported", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new tradershubModel.ST_87555d90f21aa57fd03a9d7e779d31e3Structure());
}, true, tradershubModel.ST_87555d90f21aa57fd03a9d7e779d31e3Structure), 
this.attr("Documents_supported_list", "documents_supported_listAttr", "Documents_supported_list", false, false, OS.DataTypes.DataTypes.RecordList, function () {
return OS.DataTypes.ImmutableBase.getData(new tradershubModel.RL_f95d89703009688d0282052da4de0dc3());
}, true, tradershubModel.RL_f95d89703009688d0282052da4de0dc3)
].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
}

}

tradershubModel.ST_d0797dfc77615b3a25728769b9f01e76Structure = ST_d0797dfc77615b3a25728769b9f01e76StructureInner;

var ST_d0797dfc77615b3a25728769b9f01e76Structure = ST_d0797dfc77615b3a25728769b9f01e76StructureInner;
ST_d0797dfc77615b3a25728769b9f01e76Structure.init();
}
});

define("tradershub.model$ST_8e51c0579a0eeb9a2bb60e1b5bc699e3Structure", ["exports", "@outsystems/runtime-core-js", "tradershub.model", "tradershub.model$ST_739ced57b6317085dd90ed93a3159f3eStructure", "tradershub.model$ST_81244dbb8e72a05a708e9a449198444eStructure"], function (exports, OSRuntimeCore, tradershubModel) {
var OS = OSRuntimeCore;
{class ST_8e51c0579a0eeb9a2bb60e1b5bc699e3StructureInner extends 
OS.DataTypes.GenericRecord {
static attributesToDeclare() {
return [
this.attr("National_id", "national_idAttr", "national_id", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new tradershubModel.ST_739ced57b6317085dd90ed93a3159f3eStructure());
}, true, tradershubModel.ST_739ced57b6317085dd90ed93a3159f3eStructure), 
this.attr("Cpf", "cpfAttr", "cpf", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new tradershubModel.ST_739ced57b6317085dd90ed93a3159f3eStructure());
}, true, tradershubModel.ST_739ced57b6317085dd90ed93a3159f3eStructure), 
this.attr("Passport", "passportAttr", "passport", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new tradershubModel.ST_81244dbb8e72a05a708e9a449198444eStructure());
}, true, tradershubModel.ST_81244dbb8e72a05a708e9a449198444eStructure), 
this.attr("Ssnit", "ssnitAttr", "ssnit", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new tradershubModel.ST_739ced57b6317085dd90ed93a3159f3eStructure());
}, true, tradershubModel.ST_739ced57b6317085dd90ed93a3159f3eStructure), 
this.attr("Aadhaar", "aadhaarAttr", "aadhaar", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new tradershubModel.ST_81244dbb8e72a05a708e9a449198444eStructure());
}, true, tradershubModel.ST_81244dbb8e72a05a708e9a449198444eStructure), 
this.attr("Drivers_license", "drivers_licenseAttr", "drivers_license", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new tradershubModel.ST_739ced57b6317085dd90ed93a3159f3eStructure());
}, true, tradershubModel.ST_739ced57b6317085dd90ed93a3159f3eStructure), 
this.attr("Epic", "epicAttr", "epic", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new tradershubModel.ST_739ced57b6317085dd90ed93a3159f3eStructure());
}, true, tradershubModel.ST_739ced57b6317085dd90ed93a3159f3eStructure), 
this.attr("Pan", "panAttr", "pan", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new tradershubModel.ST_739ced57b6317085dd90ed93a3159f3eStructure());
}, true, tradershubModel.ST_739ced57b6317085dd90ed93a3159f3eStructure), 
this.attr("Nik", "nikAttr", "nik", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new tradershubModel.ST_739ced57b6317085dd90ed93a3159f3eStructure());
}, true, tradershubModel.ST_739ced57b6317085dd90ed93a3159f3eStructure), 
this.attr("Alien_card", "alien_cardAttr", "alien_card", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new tradershubModel.ST_739ced57b6317085dd90ed93a3159f3eStructure());
}, true, tradershubModel.ST_739ced57b6317085dd90ed93a3159f3eStructure), 
this.attr("Nin_slip", "nin_slipAttr", "nin_slip", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new tradershubModel.ST_739ced57b6317085dd90ed93a3159f3eStructure());
}, true, tradershubModel.ST_739ced57b6317085dd90ed93a3159f3eStructure), 
this.attr("National_id_no_photo", "national_id_no_photoAttr", "national_id_no_photo", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new tradershubModel.ST_81244dbb8e72a05a708e9a449198444eStructure());
}, true, tradershubModel.ST_81244dbb8e72a05a708e9a449198444eStructure)
].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
}

}

tradershubModel.ST_8e51c0579a0eeb9a2bb60e1b5bc699e3Structure = ST_8e51c0579a0eeb9a2bb60e1b5bc699e3StructureInner;

var ST_8e51c0579a0eeb9a2bb60e1b5bc699e3Structure = ST_8e51c0579a0eeb9a2bb60e1b5bc699e3StructureInner;
ST_8e51c0579a0eeb9a2bb60e1b5bc699e3Structure.init();
}
});

define("tradershub.model$ST_2848cd79cb87a073a52246b673b32b79Structure", ["exports", "@outsystems/runtime-core-js", "tradershub.model", "tradershub.model$ST_8e51c0579a0eeb9a2bb60e1b5bc699e3Structure"], function (exports, OSRuntimeCore, tradershubModel) {
var OS = OSRuntimeCore;
{class ST_2848cd79cb87a073a52246b673b32b79StructureInner extends 
OS.DataTypes.GenericRecord {
static attributesToDeclare() {
return [
this.attr("Documents_supported", "documents_supportedAttr", "documents_supported", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new tradershubModel.ST_8e51c0579a0eeb9a2bb60e1b5bc699e3Structure());
}, true, tradershubModel.ST_8e51c0579a0eeb9a2bb60e1b5bc699e3Structure), 
this.attr("Is_country_supported", "is_country_supportedAttr", "is_country_supported", false, false, OS.DataTypes.DataTypes.LongInteger, function () {
return OS.DataTypes.LongInteger.defaultValue;
}, true)
].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
}

}

tradershubModel.ST_2848cd79cb87a073a52246b673b32b79Structure = ST_2848cd79cb87a073a52246b673b32b79StructureInner;

var ST_2848cd79cb87a073a52246b673b32b79Structure = ST_2848cd79cb87a073a52246b673b32b79StructureInner;
ST_2848cd79cb87a073a52246b673b32b79Structure.init();
}
});

define("tradershub.model$ST_0690f5116aa54a9a733230ed909c87fbStructure", ["exports", "@outsystems/runtime-core-js", "tradershub.model", "tradershub.model$ST_d0797dfc77615b3a25728769b9f01e76Structure", "tradershub.model$ST_2848cd79cb87a073a52246b673b32b79Structure"], function (exports, OSRuntimeCore, tradershubModel) {
var OS = OSRuntimeCore;
{class ST_0690f5116aa54a9a733230ed909c87fbStructureInner extends 
OS.DataTypes.GenericRecord {
static attributesToDeclare() {
return [
this.attr("Idv", "idvAttr", "idv", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new tradershubModel.ST_d0797dfc77615b3a25728769b9f01e76Structure());
}, true, tradershubModel.ST_d0797dfc77615b3a25728769b9f01e76Structure), 
this.attr("Onfido", "onfidoAttr", "onfido", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new tradershubModel.ST_2848cd79cb87a073a52246b673b32b79Structure());
}, true, tradershubModel.ST_2848cd79cb87a073a52246b673b32b79Structure)
].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
}

}

tradershubModel.ST_0690f5116aa54a9a733230ed909c87fbStructure = ST_0690f5116aa54a9a733230ed909c87fbStructureInner;

var ST_0690f5116aa54a9a733230ed909c87fbStructure = ST_0690f5116aa54a9a733230ed909c87fbStructureInner;
ST_0690f5116aa54a9a733230ed909c87fbStructure.init();
}
});

define("tradershub.model$RC_7501a1e5933671743a2bbef56326a047", ["exports", "@outsystems/runtime-core-js", "RESTAPIWebsocket.model", "tradershub.model", "RESTAPIWebsocket.model$ST_b5282edb36283adb40969ef7004c3e79Structure", "tradershub.referencesHealth", "tradershub.referencesHealth$RESTAPIWebsocket"], function (exports, OSRuntimeCore, RESTAPIWebsocketModel, tradershubModel) {
var OS = OSRuntimeCore;
{class RC_7501a1e5933671743a2bbef56326a047Inner extends 
OS.DataTypes.GenericRecord {
static attributesToDeclare() {
return [
this.attr("Common_reporting_standard", "common_reporting_standardAttr", "Common_reporting_standard", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new RESTAPIWebsocketModel.ST_b5282edb36283adb40969ef7004c3e79Structure());
}, true, RESTAPIWebsocketModel.ST_b5282edb36283adb40969ef7004c3e79Structure)
].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
}

static fromStructure(str) {
return new RC_7501a1e5933671743a2bbef56326a047(new RC_7501a1e5933671743a2bbef56326a047.RecordClass({
common_reporting_standardAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
}

}

tradershubModel.RC_7501a1e5933671743a2bbef56326a047 = RC_7501a1e5933671743a2bbef56326a047Inner;

RC_7501a1e5933671743a2bbef56326a047Inner._isAnonymousRecord = true;
RC_7501a1e5933671743a2bbef56326a047Inner.UniqueId = "7501a1e5-9336-7174-3a2b-bef56326a047";
var RC_7501a1e5933671743a2bbef56326a047 = RC_7501a1e5933671743a2bbef56326a047Inner;
RC_7501a1e5933671743a2bbef56326a047.init();
}
});

define("tradershub.model$RL_06ad8081ecdd4854820e95cbc9df15a8", ["exports", "@outsystems/runtime-core-js", "tradershub.model", "tradershub.model$RC_7501a1e5933671743a2bbef56326a047"], function (exports, OSRuntimeCore, tradershubModel) {
var OS = OSRuntimeCore;
class RL_06ad8081ecdd4854820e95cbc9df15a8 extends 
OS.DataTypes.GenericRecordList {
static getItemType() {
return tradershubModel.RC_7501a1e5933671743a2bbef56326a047;
}

}

tradershubModel.RL_06ad8081ecdd4854820e95cbc9df15a8 = RL_06ad8081ecdd4854820e95cbc9df15a8;

});

define("tradershub.model$RL_06b8cf83c83115de92b2a23869873cfa", ["exports", "@outsystems/runtime-core-js", "tradershub.model", "tradershub.model$ST_d48988cf8eae8d40a2245d672da18414Structure"], function (exports, OSRuntimeCore, tradershubModel) {
var OS = OSRuntimeCore;
class RL_06b8cf83c83115de92b2a23869873cfa extends 
OS.DataTypes.GenericRecordList {
static getItemType() {
return tradershubModel.ST_d48988cf8eae8d40a2245d672da18414Structure;
}

}

tradershubModel.RL_06b8cf83c83115de92b2a23869873cfa = RL_06b8cf83c83115de92b2a23869873cfa;

});

define("tradershub.model$RC_070998dc6b3dc951b52d8108550fe380", ["exports", "@outsystems/runtime-core-js", "OutSystemsUI.model", "tradershub.model", "OutSystemsUI.model$EN_50814454e481dd1773c2250bc248da5eEntityRecord", "tradershub.referencesHealth", "tradershub.referencesHealth$OutSystemsUI"], function (exports, OSRuntimeCore, OutSystemsUIModel, tradershubModel) {
var OS = OSRuntimeCore;
{class RC_070998dc6b3dc951b52d8108550fe380Inner extends 
OS.DataTypes.GenericRecord {
static attributesToDeclare() {
return [
this.attr("Direction", "directionAttr", "Direction", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new OutSystemsUIModel.EN_50814454e481dd1773c2250bc248da5eEntityRecord());
}, true, OutSystemsUIModel.EN_50814454e481dd1773c2250bc248da5eEntityRecord)
].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
}

static fromStructure(str) {
return new RC_070998dc6b3dc951b52d8108550fe380(new RC_070998dc6b3dc951b52d8108550fe380.RecordClass({
directionAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
}

}

tradershubModel.RC_070998dc6b3dc951b52d8108550fe380 = RC_070998dc6b3dc951b52d8108550fe380Inner;

RC_070998dc6b3dc951b52d8108550fe380Inner._isAnonymousRecord = true;
RC_070998dc6b3dc951b52d8108550fe380Inner.UniqueId = "070998dc-6b3d-c951-b52d-8108550fe380";
var RC_070998dc6b3dc951b52d8108550fe380 = RC_070998dc6b3dc951b52d8108550fe380Inner;
RC_070998dc6b3dc951b52d8108550fe380.init();
}
});

define("tradershub.model$RC_708103c95439cc3f1448414527622b7c", ["exports", "@outsystems/runtime-core-js", "OutSystemsMaps.model", "tradershub.model", "OutSystemsMaps.model$ST_597877eac22877030461f6d98995be4aStructure", "tradershub.referencesHealth", "tradershub.referencesHealth$OutSystemsMaps"], function (exports, OSRuntimeCore, OutSystemsMapsModel, tradershubModel) {
var OS = OSRuntimeCore;
{class RC_708103c95439cc3f1448414527622b7cInner extends 
OS.DataTypes.GenericRecord {
static attributesToDeclare() {
return [
this.attr("OptionalLeafletMapConfigs", "optionalLeafletMapConfigsAttr", "OptionalLeafletMapConfigs", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new OutSystemsMapsModel.ST_597877eac22877030461f6d98995be4aStructure());
}, true, OutSystemsMapsModel.ST_597877eac22877030461f6d98995be4aStructure)
].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
}

static fromStructure(str) {
return new RC_708103c95439cc3f1448414527622b7c(new RC_708103c95439cc3f1448414527622b7c.RecordClass({
optionalLeafletMapConfigsAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
}

}

tradershubModel.RC_708103c95439cc3f1448414527622b7c = RC_708103c95439cc3f1448414527622b7cInner;

RC_708103c95439cc3f1448414527622b7cInner._isAnonymousRecord = true;
RC_708103c95439cc3f1448414527622b7cInner.UniqueId = "708103c9-5439-cc3f-1448-414527622b7c";
var RC_708103c95439cc3f1448414527622b7c = RC_708103c95439cc3f1448414527622b7cInner;
RC_708103c95439cc3f1448414527622b7c.init();
}
});

define("tradershub.model$RL_072e9a99378a3fe4c1e19c5a7956268f", ["exports", "@outsystems/runtime-core-js", "tradershub.model", "tradershub.model$RC_708103c95439cc3f1448414527622b7c"], function (exports, OSRuntimeCore, tradershubModel) {
var OS = OSRuntimeCore;
class RL_072e9a99378a3fe4c1e19c5a7956268f extends 
OS.DataTypes.GenericRecordList {
static getItemType() {
return tradershubModel.RC_708103c95439cc3f1448414527622b7c;
}

}

tradershubModel.RL_072e9a99378a3fe4c1e19c5a7956268f = RL_072e9a99378a3fe4c1e19c5a7956268f;

});

define("tradershub.model$RC_210f541f43ec6384ba59bfd8fe4b8837", ["exports", "@outsystems/runtime-core-js", "OutSystemsUI.model", "tradershub.model", "OutSystemsUI.model$EN_1b42e9a925bffd384f525d6adac8fe8eEntityRecord", "tradershub.referencesHealth", "tradershub.referencesHealth$OutSystemsUI"], function (exports, OSRuntimeCore, OutSystemsUIModel, tradershubModel) {
var OS = OSRuntimeCore;
{class RC_210f541f43ec6384ba59bfd8fe4b8837Inner extends 
OS.DataTypes.GenericRecord {
static attributesToDeclare() {
return [
this.attr("DatePickerWeekDay", "datePickerWeekDayAttr", "DatePickerWeekDay", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new OutSystemsUIModel.EN_1b42e9a925bffd384f525d6adac8fe8eEntityRecord());
}, true, OutSystemsUIModel.EN_1b42e9a925bffd384f525d6adac8fe8eEntityRecord)
].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
}

static fromStructure(str) {
return new RC_210f541f43ec6384ba59bfd8fe4b8837(new RC_210f541f43ec6384ba59bfd8fe4b8837.RecordClass({
datePickerWeekDayAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
}

}

tradershubModel.RC_210f541f43ec6384ba59bfd8fe4b8837 = RC_210f541f43ec6384ba59bfd8fe4b8837Inner;

RC_210f541f43ec6384ba59bfd8fe4b8837Inner._isAnonymousRecord = true;
RC_210f541f43ec6384ba59bfd8fe4b8837Inner.UniqueId = "210f541f-43ec-6384-ba59-bfd8fe4b8837";
var RC_210f541f43ec6384ba59bfd8fe4b8837 = RC_210f541f43ec6384ba59bfd8fe4b8837Inner;
RC_210f541f43ec6384ba59bfd8fe4b8837.init();
}
});

define("tradershub.model$RL_073741b4a94a52714ff12683c5a2ca93", ["exports", "@outsystems/runtime-core-js", "tradershub.model", "tradershub.model$RC_210f541f43ec6384ba59bfd8fe4b8837"], function (exports, OSRuntimeCore, tradershubModel) {
var OS = OSRuntimeCore;
class RL_073741b4a94a52714ff12683c5a2ca93 extends 
OS.DataTypes.GenericRecordList {
static getItemType() {
return tradershubModel.RC_210f541f43ec6384ba59bfd8fe4b8837;
}

}

tradershubModel.RL_073741b4a94a52714ff12683c5a2ca93 = RL_073741b4a94a52714ff12683c5a2ca93;

});

define("tradershub.model$RL_07b390bf8b9ff6d7fe0335292b78027a", ["exports", "@outsystems/runtime-core-js", "tradershub.model", "tradershub.model$ST_89997516e5fa7eccf341304acb63651bStructure"], function (exports, OSRuntimeCore, tradershubModel) {
var OS = OSRuntimeCore;
class RL_07b390bf8b9ff6d7fe0335292b78027a extends 
OS.DataTypes.GenericRecordList {
static getItemType() {
return tradershubModel.ST_89997516e5fa7eccf341304acb63651bStructure;
}

}

tradershubModel.RL_07b390bf8b9ff6d7fe0335292b78027a = RL_07b390bf8b9ff6d7fe0335292b78027a;

});

define("tradershub.model$RL_07d4f66324fea8299f2f66d1b9c5293b", ["exports", "@outsystems/runtime-core-js", "RESTAPIWebsocket.model", "tradershub.model", "RESTAPIWebsocket.model$ST_72900159fa859d96c9b5e8531e637a4cStructure", "tradershub.referencesHealth", "tradershub.referencesHealth$RESTAPIWebsocket"], function (exports, OSRuntimeCore, RESTAPIWebsocketModel, tradershubModel) {
var OS = OSRuntimeCore;
class RL_07d4f66324fea8299f2f66d1b9c5293b extends 
OS.DataTypes.GenericRecordList {
static getItemType() {
return RESTAPIWebsocketModel.ST_72900159fa859d96c9b5e8531e637a4cStructure;
}

}

tradershubModel.RL_07d4f66324fea8299f2f66d1b9c5293b = RL_07d4f66324fea8299f2f66d1b9c5293b;

});

define("tradershub.model$RL_07e65f4cc3491f918636e1711890abb8", ["exports", "@outsystems/runtime-core-js", "OutSystemsMaps.model", "tradershub.model", "OutSystemsMaps.model$EN_e7686de199fbd20281899419f0b6ff11EntityRecord", "tradershub.referencesHealth", "tradershub.referencesHealth$OutSystemsMaps"], function (exports, OSRuntimeCore, OutSystemsMapsModel, tradershubModel) {
var OS = OSRuntimeCore;
class RL_07e65f4cc3491f918636e1711890abb8 extends 
OS.DataTypes.GenericRecordList {
static getItemType() {
return OutSystemsMapsModel.EN_e7686de199fbd20281899419f0b6ff11EntityRecord;
}

}

tradershubModel.RL_07e65f4cc3491f918636e1711890abb8 = RL_07e65f4cc3491f918636e1711890abb8;

});

define("tradershub.model$RL_08493c76d04a33db201691368d61ec98", ["exports", "@outsystems/runtime-core-js", "RESTAPIWebsocket.model", "tradershub.model", "RESTAPIWebsocket.model$ST_e9350867621f419f78bd47d2bb88d9ceStructure", "tradershub.referencesHealth", "tradershub.referencesHealth$RESTAPIWebsocket"], function (exports, OSRuntimeCore, RESTAPIWebsocketModel, tradershubModel) {
var OS = OSRuntimeCore;
class RL_08493c76d04a33db201691368d61ec98 extends 
OS.DataTypes.GenericRecordList {
static getItemType() {
return RESTAPIWebsocketModel.ST_e9350867621f419f78bd47d2bb88d9ceStructure;
}

}

tradershubModel.RL_08493c76d04a33db201691368d61ec98 = RL_08493c76d04a33db201691368d61ec98;

});

define("tradershub.model$ST_b10d1c4f5fc0d31a18056008247642ebStructure", ["exports", "@outsystems/runtime-core-js", "tradershub.model"], function (exports, OSRuntimeCore, tradershubModel) {
var OS = OSRuntimeCore;
{class ST_b10d1c4f5fc0d31a18056008247642ebStructureInner extends 
OS.DataTypes.GenericRecord {
static attributesToDeclare() {
return [
this.attr("Verify_email", "verify_emailAttr", "verify_email", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Type", "typeAttr", "type", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true)
].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
}

}

tradershubModel.ST_b10d1c4f5fc0d31a18056008247642ebStructure = ST_b10d1c4f5fc0d31a18056008247642ebStructureInner;

var ST_b10d1c4f5fc0d31a18056008247642ebStructure = ST_b10d1c4f5fc0d31a18056008247642ebStructureInner;
ST_b10d1c4f5fc0d31a18056008247642ebStructure.init();
}
});

define("tradershub.model$RL_085b2d1ff46d62a1bda40a70c7e671f1", ["exports", "@outsystems/runtime-core-js", "tradershub.model", "tradershub.model$ST_b10d1c4f5fc0d31a18056008247642ebStructure"], function (exports, OSRuntimeCore, tradershubModel) {
var OS = OSRuntimeCore;
class RL_085b2d1ff46d62a1bda40a70c7e671f1 extends 
OS.DataTypes.GenericRecordList {
static getItemType() {
return tradershubModel.ST_b10d1c4f5fc0d31a18056008247642ebStructure;
}

}

tradershubModel.RL_085b2d1ff46d62a1bda40a70c7e671f1 = RL_085b2d1ff46d62a1bda40a70c7e671f1;

});

define("tradershub.model$RL_085f95fe6d8c0993316da931c0bd457a", ["exports", "@outsystems/runtime-core-js", "RESTAPIWebsocket.model", "tradershub.model", "RESTAPIWebsocket.model$ST_c4a5ea0056d7d4d64b0630a9fc26f60bStructure", "tradershub.referencesHealth", "tradershub.referencesHealth$RESTAPIWebsocket"], function (exports, OSRuntimeCore, RESTAPIWebsocketModel, tradershubModel) {
var OS = OSRuntimeCore;
class RL_085f95fe6d8c0993316da931c0bd457a extends 
OS.DataTypes.GenericRecordList {
static getItemType() {
return RESTAPIWebsocketModel.ST_c4a5ea0056d7d4d64b0630a9fc26f60bStructure;
}

}

tradershubModel.RL_085f95fe6d8c0993316da931c0bd457a = RL_085f95fe6d8c0993316da931c0bd457a;

});

define("tradershub.model$EN_09277b6b86cf80f882c3c457ae17c01aEntityRecord", ["exports", "@outsystems/runtime-core-js", "tradershub.model"], function (exports, OSRuntimeCore, tradershubModel) {
var OS = OSRuntimeCore;
{class EN_09277b6b86cf80f882c3c457ae17c01aEntityRecordInner extends 
OS.DataTypes.GenericRecord {
static attributesToDeclare() {
return [
this.attr("Id", "idAttr", "Id", true, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true), 
this.attr("Label", "labelAttr", "Label", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Order", "orderAttr", "Order", true, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true), 
this.attr("Is_Active", "is_ActiveAttr", "Is_Active", true, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, true)
].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
}

}

tradershubModel.EN_09277b6b86cf80f882c3c457ae17c01aEntityRecord = EN_09277b6b86cf80f882c3c457ae17c01aEntityRecordInner;

var EN_09277b6b86cf80f882c3c457ae17c01aEntityRecord = EN_09277b6b86cf80f882c3c457ae17c01aEntityRecordInner;
EN_09277b6b86cf80f882c3c457ae17c01aEntityRecord.init();
}
});

define("tradershub.model$RL_098222569d614b59c720a7d15f2e16c6", ["exports", "@outsystems/runtime-core-js", "RESTAPIWebsocket.model", "tradershub.model", "RESTAPIWebsocket.model$ST_b8e1602bee02fb2422c9742384775a7bStructure", "tradershub.referencesHealth", "tradershub.referencesHealth$RESTAPIWebsocket"], function (exports, OSRuntimeCore, RESTAPIWebsocketModel, tradershubModel) {
var OS = OSRuntimeCore;
class RL_098222569d614b59c720a7d15f2e16c6 extends 
OS.DataTypes.GenericRecordList {
static getItemType() {
return RESTAPIWebsocketModel.ST_b8e1602bee02fb2422c9742384775a7bStructure;
}

}

tradershubModel.RL_098222569d614b59c720a7d15f2e16c6 = RL_098222569d614b59c720a7d15f2e16c6;

});

define("tradershub.model$RC_098c46906c1c0c7e7b39f1210fb64f78", ["exports", "@outsystems/runtime-core-js", "OutSystemsMaps.model", "tradershub.model", "OutSystemsMaps.model$EN_d5303c5dfa3a0e0e964776dce02c36f0EntityRecord", "tradershub.referencesHealth", "tradershub.referencesHealth$OutSystemsMaps"], function (exports, OSRuntimeCore, OutSystemsMapsModel, tradershubModel) {
var OS = OSRuntimeCore;
{class RC_098c46906c1c0c7e7b39f1210fb64f78Inner extends 
OS.DataTypes.GenericRecord {
static attributesToDeclare() {
return [
this.attr("ShapeEventTriggered", "shapeEventTriggeredAttr", "ShapeEventTriggered", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new OutSystemsMapsModel.EN_d5303c5dfa3a0e0e964776dce02c36f0EntityRecord());
}, true, OutSystemsMapsModel.EN_d5303c5dfa3a0e0e964776dce02c36f0EntityRecord)
].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
}

static fromStructure(str) {
return new RC_098c46906c1c0c7e7b39f1210fb64f78(new RC_098c46906c1c0c7e7b39f1210fb64f78.RecordClass({
shapeEventTriggeredAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
}

}

tradershubModel.RC_098c46906c1c0c7e7b39f1210fb64f78 = RC_098c46906c1c0c7e7b39f1210fb64f78Inner;

RC_098c46906c1c0c7e7b39f1210fb64f78Inner._isAnonymousRecord = true;
RC_098c46906c1c0c7e7b39f1210fb64f78Inner.UniqueId = "098c4690-6c1c-0c7e-7b39-f1210fb64f78";
var RC_098c46906c1c0c7e7b39f1210fb64f78 = RC_098c46906c1c0c7e7b39f1210fb64f78Inner;
RC_098c46906c1c0c7e7b39f1210fb64f78.init();
}
});

define("tradershub.model$RC_8e2ccc4cb2bbc580c7d8c36277a3970f", ["exports", "@outsystems/runtime-core-js", "RESTAPIWebsocket.model", "tradershub.model", "RESTAPIWebsocket.model$ST_349094d98d9594831ba9e5194411246fStructure", "tradershub.referencesHealth", "tradershub.referencesHealth$RESTAPIWebsocket"], function (exports, OSRuntimeCore, RESTAPIWebsocketModel, tradershubModel) {
var OS = OSRuntimeCore;
{class RC_8e2ccc4cb2bbc580c7d8c36277a3970fInner extends 
OS.DataTypes.GenericRecord {
static attributesToDeclare() {
return [
this.attr("Landing_company2", "landing_company2Attr", "Landing_company2", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new RESTAPIWebsocketModel.ST_349094d98d9594831ba9e5194411246fStructure());
}, true, RESTAPIWebsocketModel.ST_349094d98d9594831ba9e5194411246fStructure)
].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
}

static fromStructure(str) {
return new RC_8e2ccc4cb2bbc580c7d8c36277a3970f(new RC_8e2ccc4cb2bbc580c7d8c36277a3970f.RecordClass({
landing_company2Attr: OS.DataTypes.ImmutableBase.getData(str)
}));
}

}

tradershubModel.RC_8e2ccc4cb2bbc580c7d8c36277a3970f = RC_8e2ccc4cb2bbc580c7d8c36277a3970fInner;

RC_8e2ccc4cb2bbc580c7d8c36277a3970fInner._isAnonymousRecord = true;
RC_8e2ccc4cb2bbc580c7d8c36277a3970fInner.UniqueId = "8e2ccc4c-b2bb-c580-c7d8-c36277a3970f";
var RC_8e2ccc4cb2bbc580c7d8c36277a3970f = RC_8e2ccc4cb2bbc580c7d8c36277a3970fInner;
RC_8e2ccc4cb2bbc580c7d8c36277a3970f.init();
}
});

define("tradershub.model$RL_09aadf2f3a6cc14ff58d7e91ed9aa591", ["exports", "@outsystems/runtime-core-js", "tradershub.model", "tradershub.model$RC_8e2ccc4cb2bbc580c7d8c36277a3970f"], function (exports, OSRuntimeCore, tradershubModel) {
var OS = OSRuntimeCore;
class RL_09aadf2f3a6cc14ff58d7e91ed9aa591 extends 
OS.DataTypes.GenericRecordList {
static getItemType() {
return tradershubModel.RC_8e2ccc4cb2bbc580c7d8c36277a3970f;
}

}

tradershubModel.RL_09aadf2f3a6cc14ff58d7e91ed9aa591 = RL_09aadf2f3a6cc14ff58d7e91ed9aa591;

});

define("tradershub.model$RC_0a89eeb60fa1f44b6316ca69b462007b", ["exports", "@outsystems/runtime-core-js", "OutSystemsUI.model", "tradershub.model", "OutSystemsUI.model$EN_d11562be18a7e40ca777aa336c946163EntityRecord", "tradershub.referencesHealth", "tradershub.referencesHealth$OutSystemsUI"], function (exports, OSRuntimeCore, OutSystemsUIModel, tradershubModel) {
var OS = OSRuntimeCore;
{class RC_0a89eeb60fa1f44b6316ca69b462007bInner extends 
OS.DataTypes.GenericRecord {
static attributesToDeclare() {
return [
this.attr("Shape", "shapeAttr", "Shape", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new OutSystemsUIModel.EN_d11562be18a7e40ca777aa336c946163EntityRecord());
}, true, OutSystemsUIModel.EN_d11562be18a7e40ca777aa336c946163EntityRecord)
].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
}

static fromStructure(str) {
return new RC_0a89eeb60fa1f44b6316ca69b462007b(new RC_0a89eeb60fa1f44b6316ca69b462007b.RecordClass({
shapeAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
}

}

tradershubModel.RC_0a89eeb60fa1f44b6316ca69b462007b = RC_0a89eeb60fa1f44b6316ca69b462007bInner;

RC_0a89eeb60fa1f44b6316ca69b462007bInner._isAnonymousRecord = true;
RC_0a89eeb60fa1f44b6316ca69b462007bInner.UniqueId = "0a89eeb6-0fa1-f44b-6316-ca69b462007b";
var RC_0a89eeb60fa1f44b6316ca69b462007b = RC_0a89eeb60fa1f44b6316ca69b462007bInner;
RC_0a89eeb60fa1f44b6316ca69b462007b.init();
}
});

define("tradershub.model$RC_0af1f162a4f117f1f3e8ae4dce5af0db", ["exports", "@outsystems/runtime-core-js", "RESTAPIWebsocket.model", "tradershub.model", "RESTAPIWebsocket.model$ST_cea376e9e95ae6d491d188174483cdceStructure", "tradershub.referencesHealth", "tradershub.referencesHealth$RESTAPIWebsocket"], function (exports, OSRuntimeCore, RESTAPIWebsocketModel, tradershubModel) {
var OS = OSRuntimeCore;
{class RC_0af1f162a4f117f1f3e8ae4dce5af0dbInner extends 
OS.DataTypes.GenericRecord {
static attributesToDeclare() {
return [
this.attr("Dxtrade_all_company", "dxtrade_all_companyAttr", "Dxtrade_all_company", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new RESTAPIWebsocketModel.ST_cea376e9e95ae6d491d188174483cdceStructure());
}, true, RESTAPIWebsocketModel.ST_cea376e9e95ae6d491d188174483cdceStructure)
].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
}

static fromStructure(str) {
return new RC_0af1f162a4f117f1f3e8ae4dce5af0db(new RC_0af1f162a4f117f1f3e8ae4dce5af0db.RecordClass({
dxtrade_all_companyAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
}

}

tradershubModel.RC_0af1f162a4f117f1f3e8ae4dce5af0db = RC_0af1f162a4f117f1f3e8ae4dce5af0dbInner;

RC_0af1f162a4f117f1f3e8ae4dce5af0dbInner._isAnonymousRecord = true;
RC_0af1f162a4f117f1f3e8ae4dce5af0dbInner.UniqueId = "0af1f162-a4f1-17f1-f3e8-ae4dce5af0db";
var RC_0af1f162a4f117f1f3e8ae4dce5af0db = RC_0af1f162a4f117f1f3e8ae4dce5af0dbInner;
RC_0af1f162a4f117f1f3e8ae4dce5af0db.init();
}
});

define("tradershub.model$RL_0bcd3c98d22adfc3203704c950fffba0", ["exports", "@outsystems/runtime-core-js", "OutSystemsMaps.model", "tradershub.model", "OutSystemsMaps.model$ST_30625b4ad0f3e10abf82b61ea58e8644Structure", "tradershub.referencesHealth", "tradershub.referencesHealth$OutSystemsMaps"], function (exports, OSRuntimeCore, OutSystemsMapsModel, tradershubModel) {
var OS = OSRuntimeCore;
class RL_0bcd3c98d22adfc3203704c950fffba0 extends 
OS.DataTypes.GenericRecordList {
static getItemType() {
return OutSystemsMapsModel.ST_30625b4ad0f3e10abf82b61ea58e8644Structure;
}

}

tradershubModel.RL_0bcd3c98d22adfc3203704c950fffba0 = RL_0bcd3c98d22adfc3203704c950fffba0;

});

define("tradershub.model$ST_3a6e5c84ccd1db0dd256408ff639cec5Structure", ["exports", "@outsystems/runtime-core-js", "tradershub.model"], function (exports, OSRuntimeCore, tradershubModel) {
var OS = OSRuntimeCore;
{class ST_3a6e5c84ccd1db0dd256408ff639cec5StructureInner extends 
OS.DataTypes.GenericRecord {
static attributesToDeclare() {
return [
this.attr("FirstName", "firstNameAttr", "FirstName", false, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, true), 
this.attr("LastName", "lastNameAttr", "LastName", false, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, true), 
this.attr("DateOfBirth", "dateOfBirthAttr", "DateOfBirth", false, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, true)
].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
}

}

tradershubModel.ST_3a6e5c84ccd1db0dd256408ff639cec5Structure = ST_3a6e5c84ccd1db0dd256408ff639cec5StructureInner;

var ST_3a6e5c84ccd1db0dd256408ff639cec5Structure = ST_3a6e5c84ccd1db0dd256408ff639cec5StructureInner;
ST_3a6e5c84ccd1db0dd256408ff639cec5Structure.init();
}
});

define("tradershub.model$RC_e747063c842b488134e0474aeea58a09", ["exports", "@outsystems/runtime-core-js", "tradershub.model", "tradershub.model$ST_3a6e5c84ccd1db0dd256408ff639cec5Structure"], function (exports, OSRuntimeCore, tradershubModel) {
var OS = OSRuntimeCore;
{class RC_e747063c842b488134e0474aeea58a09Inner extends 
OS.DataTypes.GenericRecord {
static attributesToDeclare() {
return [
this.attr("PersonalDetailsValidFields", "personalDetailsValidFieldsAttr", "PersonalDetailsValidFields", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new tradershubModel.ST_3a6e5c84ccd1db0dd256408ff639cec5Structure());
}, true, tradershubModel.ST_3a6e5c84ccd1db0dd256408ff639cec5Structure)
].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
}

static fromStructure(str) {
return new RC_e747063c842b488134e0474aeea58a09(new RC_e747063c842b488134e0474aeea58a09.RecordClass({
personalDetailsValidFieldsAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
}

}

tradershubModel.RC_e747063c842b488134e0474aeea58a09 = RC_e747063c842b488134e0474aeea58a09Inner;

RC_e747063c842b488134e0474aeea58a09Inner._isAnonymousRecord = true;
RC_e747063c842b488134e0474aeea58a09Inner.UniqueId = "e747063c-842b-4881-34e0-474aeea58a09";
var RC_e747063c842b488134e0474aeea58a09 = RC_e747063c842b488134e0474aeea58a09Inner;
RC_e747063c842b488134e0474aeea58a09.init();
}
});

define("tradershub.model$RL_0c027f63b75e77718f945ebcb3e14385", ["exports", "@outsystems/runtime-core-js", "tradershub.model", "tradershub.model$RC_e747063c842b488134e0474aeea58a09"], function (exports, OSRuntimeCore, tradershubModel) {
var OS = OSRuntimeCore;
class RL_0c027f63b75e77718f945ebcb3e14385 extends 
OS.DataTypes.GenericRecordList {
static getItemType() {
return tradershubModel.RC_e747063c842b488134e0474aeea58a09;
}

}

tradershubModel.RL_0c027f63b75e77718f945ebcb3e14385 = RL_0c027f63b75e77718f945ebcb3e14385;

});

define("tradershub.model$RC_fbe47240f7e3e38042a8c23b7b2b02e0", ["exports", "@outsystems/runtime-core-js", "RESTAPIWebsocket.model", "tradershub.model", "RESTAPIWebsocket.model$ST_2aa6b158772e078b381113da0ab825f8Structure", "tradershub.referencesHealth", "tradershub.referencesHealth$RESTAPIWebsocket"], function (exports, OSRuntimeCore, RESTAPIWebsocketModel, tradershubModel) {
var OS = OSRuntimeCore;
{class RC_fbe47240f7e3e38042a8c23b7b2b02e0Inner extends 
OS.DataTypes.GenericRecord {
static attributesToDeclare() {
return [
this.attr("LandingCompanyRequest", "landingCompanyRequestAttr", "LandingCompanyRequest", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new RESTAPIWebsocketModel.ST_2aa6b158772e078b381113da0ab825f8Structure());
}, true, RESTAPIWebsocketModel.ST_2aa6b158772e078b381113da0ab825f8Structure)
].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
}

static fromStructure(str) {
return new RC_fbe47240f7e3e38042a8c23b7b2b02e0(new RC_fbe47240f7e3e38042a8c23b7b2b02e0.RecordClass({
landingCompanyRequestAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
}

}

tradershubModel.RC_fbe47240f7e3e38042a8c23b7b2b02e0 = RC_fbe47240f7e3e38042a8c23b7b2b02e0Inner;

RC_fbe47240f7e3e38042a8c23b7b2b02e0Inner._isAnonymousRecord = true;
RC_fbe47240f7e3e38042a8c23b7b2b02e0Inner.UniqueId = "fbe47240-f7e3-e380-42a8-c23b7b2b02e0";
var RC_fbe47240f7e3e38042a8c23b7b2b02e0 = RC_fbe47240f7e3e38042a8c23b7b2b02e0Inner;
RC_fbe47240f7e3e38042a8c23b7b2b02e0.init();
}
});

define("tradershub.model$RL_0c13bf82c0e754513401b974c717dc2b", ["exports", "@outsystems/runtime-core-js", "tradershub.model", "tradershub.model$RC_fbe47240f7e3e38042a8c23b7b2b02e0"], function (exports, OSRuntimeCore, tradershubModel) {
var OS = OSRuntimeCore;
class RL_0c13bf82c0e754513401b974c717dc2b extends 
OS.DataTypes.GenericRecordList {
static getItemType() {
return tradershubModel.RC_fbe47240f7e3e38042a8c23b7b2b02e0;
}

}

tradershubModel.RL_0c13bf82c0e754513401b974c717dc2b = RL_0c13bf82c0e754513401b974c717dc2b;

});

define("tradershub.model$RL_0c71b2fc045fad5c4e0f7f80c50bd453", ["exports", "@outsystems/runtime-core-js", "RESTAPIWebsocket.model", "tradershub.model", "RESTAPIWebsocket.model$ST_77d1f9105abe302fa373f146c295ea17Structure", "tradershub.referencesHealth", "tradershub.referencesHealth$RESTAPIWebsocket"], function (exports, OSRuntimeCore, RESTAPIWebsocketModel, tradershubModel) {
var OS = OSRuntimeCore;
class RL_0c71b2fc045fad5c4e0f7f80c50bd453 extends 
OS.DataTypes.GenericRecordList {
static getItemType() {
return RESTAPIWebsocketModel.ST_77d1f9105abe302fa373f146c295ea17Structure;
}

}

tradershubModel.RL_0c71b2fc045fad5c4e0f7f80c50bd453 = RL_0c71b2fc045fad5c4e0f7f80c50bd453;

});

define("tradershub.model$RC_0d776a4e191faf321030d5ce57aa4167", ["exports", "@outsystems/runtime-core-js", "OutSystemsUI.model", "tradershub.model", "OutSystemsUI.model$EN_7441573ccf264d27ef548a39a846bd68EntityRecord", "tradershub.referencesHealth", "tradershub.referencesHealth$OutSystemsUI"], function (exports, OSRuntimeCore, OutSystemsUIModel, tradershubModel) {
var OS = OSRuntimeCore;
{class RC_0d776a4e191faf321030d5ce57aa4167Inner extends 
OS.DataTypes.GenericRecord {
static attributesToDeclare() {
return [
this.attr("Steps", "stepsAttr", "Steps", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new OutSystemsUIModel.EN_7441573ccf264d27ef548a39a846bd68EntityRecord());
}, true, OutSystemsUIModel.EN_7441573ccf264d27ef548a39a846bd68EntityRecord)
].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
}

static fromStructure(str) {
return new RC_0d776a4e191faf321030d5ce57aa4167(new RC_0d776a4e191faf321030d5ce57aa4167.RecordClass({
stepsAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
}

}

tradershubModel.RC_0d776a4e191faf321030d5ce57aa4167 = RC_0d776a4e191faf321030d5ce57aa4167Inner;

RC_0d776a4e191faf321030d5ce57aa4167Inner._isAnonymousRecord = true;
RC_0d776a4e191faf321030d5ce57aa4167Inner.UniqueId = "0d776a4e-191f-af32-1030-d5ce57aa4167";
var RC_0d776a4e191faf321030d5ce57aa4167 = RC_0d776a4e191faf321030d5ce57aa4167Inner;
RC_0d776a4e191faf321030d5ce57aa4167.init();
}
});

define("tradershub.model$ST_9040ff9a31163603cbfef38781e8f440Structure", ["exports", "@outsystems/runtime-core-js", "tradershub.model", "tradershub.model$ST_d48988cf8eae8d40a2245d672da18414Structure"], function (exports, OSRuntimeCore, tradershubModel) {
var OS = OSRuntimeCore;
{class ST_9040ff9a31163603cbfef38781e8f440StructureInner extends 
OS.DataTypes.GenericRecord {
static attributesToDeclare() {
return [
this.attr("Fractional_digits", "fractional_digitsAttr", "fractional_digits", false, false, OS.DataTypes.DataTypes.LongInteger, function () {
return OS.DataTypes.LongInteger.defaultValue;
}, true), 
this.attr("Is_deposit_suspended", "is_deposit_suspendedAttr", "is_deposit_suspended", false, false, OS.DataTypes.DataTypes.LongInteger, function () {
return OS.DataTypes.LongInteger.defaultValue;
}, true), 
this.attr("Is_suspended", "is_suspendedAttr", "is_suspended", false, false, OS.DataTypes.DataTypes.LongInteger, function () {
return OS.DataTypes.LongInteger.defaultValue;
}, true), 
this.attr("Is_withdrawal_suspended", "is_withdrawal_suspendedAttr", "is_withdrawal_suspended", false, false, OS.DataTypes.DataTypes.LongInteger, function () {
return OS.DataTypes.LongInteger.defaultValue;
}, true), 
this.attr("Name", "nameAttr", "name", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Stake_default", "stake_defaultAttr", "stake_default", false, false, OS.DataTypes.DataTypes.LongInteger, function () {
return OS.DataTypes.LongInteger.defaultValue;
}, true), 
this.attr("Transfer_between_accounts", "transfer_between_accountsAttr", "transfer_between_accounts", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new tradershubModel.ST_d48988cf8eae8d40a2245d672da18414Structure());
}, true, tradershubModel.ST_d48988cf8eae8d40a2245d672da18414Structure), 
this.attr("Type", "typeAttr", "type", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true)
].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
}

}

tradershubModel.ST_9040ff9a31163603cbfef38781e8f440Structure = ST_9040ff9a31163603cbfef38781e8f440StructureInner;

var ST_9040ff9a31163603cbfef38781e8f440Structure = ST_9040ff9a31163603cbfef38781e8f440StructureInner;
ST_9040ff9a31163603cbfef38781e8f440Structure.init();
}
});

define("tradershub.model$ST_152f791bd12ecebe98c991a448719621Structure", ["exports", "@outsystems/runtime-core-js", "tradershub.model", "tradershub.model$ST_9040ff9a31163603cbfef38781e8f440Structure", "tradershub.model$ST_c73d23121ed7b75585394958b5922504Structure"], function (exports, OSRuntimeCore, tradershubModel) {
var OS = OSRuntimeCore;
{class ST_152f791bd12ecebe98c991a448719621StructureInner extends 
OS.DataTypes.GenericRecord {
static attributesToDeclare() {
return [
this.attr("AUD", "aUDAttr", "AUD", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new tradershubModel.ST_9040ff9a31163603cbfef38781e8f440Structure());
}, true, tradershubModel.ST_9040ff9a31163603cbfef38781e8f440Structure), 
this.attr("BTC", "bTCAttr", "BTC", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new tradershubModel.ST_c73d23121ed7b75585394958b5922504Structure());
}, true, tradershubModel.ST_c73d23121ed7b75585394958b5922504Structure), 
this.attr("ETH", "eTHAttr", "ETH", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new tradershubModel.ST_c73d23121ed7b75585394958b5922504Structure());
}, true, tradershubModel.ST_c73d23121ed7b75585394958b5922504Structure), 
this.attr("EUR", "eURAttr", "EUR", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new tradershubModel.ST_9040ff9a31163603cbfef38781e8f440Structure());
}, true, tradershubModel.ST_9040ff9a31163603cbfef38781e8f440Structure), 
this.attr("GBP", "gBPAttr", "GBP", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new tradershubModel.ST_9040ff9a31163603cbfef38781e8f440Structure());
}, true, tradershubModel.ST_9040ff9a31163603cbfef38781e8f440Structure), 
this.attr("LTC", "lTCAttr", "LTC", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new tradershubModel.ST_c73d23121ed7b75585394958b5922504Structure());
}, true, tradershubModel.ST_c73d23121ed7b75585394958b5922504Structure), 
this.attr("USD", "uSDAttr", "USD", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new tradershubModel.ST_9040ff9a31163603cbfef38781e8f440Structure());
}, true, tradershubModel.ST_9040ff9a31163603cbfef38781e8f440Structure), 
this.attr("USDC", "uSDCAttr", "USDC", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new tradershubModel.ST_c73d23121ed7b75585394958b5922504Structure());
}, true, tradershubModel.ST_c73d23121ed7b75585394958b5922504Structure), 
this.attr("UST", "uSTAttr", "UST", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new tradershubModel.ST_c73d23121ed7b75585394958b5922504Structure());
}, true, tradershubModel.ST_c73d23121ed7b75585394958b5922504Structure), 
this.attr("XRP", "xRPAttr", "XRP", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new tradershubModel.ST_c73d23121ed7b75585394958b5922504Structure());
}, true, tradershubModel.ST_c73d23121ed7b75585394958b5922504Structure), 
this.attr("EUSDT", "eUSDTAttr", "eUSDT", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new tradershubModel.ST_c73d23121ed7b75585394958b5922504Structure());
}, true, tradershubModel.ST_c73d23121ed7b75585394958b5922504Structure), 
this.attr("TUSDT", "tUSDTAttr", "tUSDT", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new tradershubModel.ST_c73d23121ed7b75585394958b5922504Structure());
}, true, tradershubModel.ST_c73d23121ed7b75585394958b5922504Structure)
].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
}

}

tradershubModel.ST_152f791bd12ecebe98c991a448719621Structure = ST_152f791bd12ecebe98c991a448719621StructureInner;

var ST_152f791bd12ecebe98c991a448719621Structure = ST_152f791bd12ecebe98c991a448719621StructureInner;
ST_152f791bd12ecebe98c991a448719621Structure.init();
}
});

define("tradershub.model$RC_77075316f77e85ada6cb0e0eed0afcf0", ["exports", "@outsystems/runtime-core-js", "tradershub.model", "tradershub.model$ST_152f791bd12ecebe98c991a448719621Structure"], function (exports, OSRuntimeCore, tradershubModel) {
var OS = OSRuntimeCore;
{class RC_77075316f77e85ada6cb0e0eed0afcf0Inner extends 
OS.DataTypes.GenericRecord {
static attributesToDeclare() {
return [
this.attr("Currencies_config", "currencies_configAttr", "Currencies_config", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new tradershubModel.ST_152f791bd12ecebe98c991a448719621Structure());
}, true, tradershubModel.ST_152f791bd12ecebe98c991a448719621Structure)
].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
}

static fromStructure(str) {
return new RC_77075316f77e85ada6cb0e0eed0afcf0(new RC_77075316f77e85ada6cb0e0eed0afcf0.RecordClass({
currencies_configAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
}

}

tradershubModel.RC_77075316f77e85ada6cb0e0eed0afcf0 = RC_77075316f77e85ada6cb0e0eed0afcf0Inner;

RC_77075316f77e85ada6cb0e0eed0afcf0Inner._isAnonymousRecord = true;
RC_77075316f77e85ada6cb0e0eed0afcf0Inner.UniqueId = "77075316-f77e-85ad-a6cb-0e0eed0afcf0";
var RC_77075316f77e85ada6cb0e0eed0afcf0 = RC_77075316f77e85ada6cb0e0eed0afcf0Inner;
RC_77075316f77e85ada6cb0e0eed0afcf0.init();
}
});

define("tradershub.model$RL_0dc57f1c97e4b2dbd31cd655577b56eb", ["exports", "@outsystems/runtime-core-js", "tradershub.model", "tradershub.model$RC_77075316f77e85ada6cb0e0eed0afcf0"], function (exports, OSRuntimeCore, tradershubModel) {
var OS = OSRuntimeCore;
class RL_0dc57f1c97e4b2dbd31cd655577b56eb extends 
OS.DataTypes.GenericRecordList {
static getItemType() {
return tradershubModel.RC_77075316f77e85ada6cb0e0eed0afcf0;
}

}

tradershubModel.RL_0dc57f1c97e4b2dbd31cd655577b56eb = RL_0dc57f1c97e4b2dbd31cd655577b56eb;

});

define("tradershub.model$ST_77f038c3163215737af9b67456557924Structure", ["exports", "@outsystems/runtime-core-js", "tradershub.model"], function (exports, OSRuntimeCore, tradershubModel) {
var OS = OSRuntimeCore;
{class ST_77f038c3163215737af9b67456557924StructureInner extends 
OS.DataTypes.GenericRecord {
static attributesToDeclare() {
return [
this.attr("Req_id", "req_idAttr", "req_id", false, false, OS.DataTypes.DataTypes.LongInteger, function () {
return OS.DataTypes.LongInteger.defaultValue;
}, true), 
this.attr("Residence_list", "residence_listAttr", "residence_list", false, false, OS.DataTypes.DataTypes.LongInteger, function () {
return OS.DataTypes.LongInteger.defaultValue;
}, true)
].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
}

}

tradershubModel.ST_77f038c3163215737af9b67456557924Structure = ST_77f038c3163215737af9b67456557924StructureInner;

var ST_77f038c3163215737af9b67456557924Structure = ST_77f038c3163215737af9b67456557924StructureInner;
ST_77f038c3163215737af9b67456557924Structure.init();
}
});

define("tradershub.model$RC_0deb69ca07bab991a82d69c39659451c", ["exports", "@outsystems/runtime-core-js", "tradershub.model", "tradershub.model$ST_77f038c3163215737af9b67456557924Structure"], function (exports, OSRuntimeCore, tradershubModel) {
var OS = OSRuntimeCore;
{class RC_0deb69ca07bab991a82d69c39659451cInner extends 
OS.DataTypes.GenericRecord {
static attributesToDeclare() {
return [
this.attr("Echo_req2", "echo_req2Attr", "Echo_req2", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new tradershubModel.ST_77f038c3163215737af9b67456557924Structure());
}, true, tradershubModel.ST_77f038c3163215737af9b67456557924Structure)
].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
}

static fromStructure(str) {
return new RC_0deb69ca07bab991a82d69c39659451c(new RC_0deb69ca07bab991a82d69c39659451c.RecordClass({
echo_req2Attr: OS.DataTypes.ImmutableBase.getData(str)
}));
}

}

tradershubModel.RC_0deb69ca07bab991a82d69c39659451c = RC_0deb69ca07bab991a82d69c39659451cInner;

RC_0deb69ca07bab991a82d69c39659451cInner._isAnonymousRecord = true;
RC_0deb69ca07bab991a82d69c39659451cInner.UniqueId = "0deb69ca-07ba-b991-a82d-69c39659451c";
var RC_0deb69ca07bab991a82d69c39659451c = RC_0deb69ca07bab991a82d69c39659451cInner;
RC_0deb69ca07bab991a82d69c39659451c.init();
}
});

define("tradershub.model$RC_fdf568550fb18a6ec270df7466fa0d20", ["exports", "@outsystems/runtime-core-js", "OutSystemsMaps.model", "tradershub.model", "OutSystemsMaps.model$ST_5fb6f64676b0133fcb572480a766fc9cStructure", "tradershub.referencesHealth", "tradershub.referencesHealth$OutSystemsMaps"], function (exports, OSRuntimeCore, OutSystemsMapsModel, tradershubModel) {
var OS = OSRuntimeCore;
{class RC_fdf568550fb18a6ec270df7466fa0d20Inner extends 
OS.DataTypes.GenericRecord {
static attributesToDeclare() {
return [
this.attr("Bounds", "boundsAttr", "Bounds", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new OutSystemsMapsModel.ST_5fb6f64676b0133fcb572480a766fc9cStructure());
}, true, OutSystemsMapsModel.ST_5fb6f64676b0133fcb572480a766fc9cStructure)
].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
}

static fromStructure(str) {
return new RC_fdf568550fb18a6ec270df7466fa0d20(new RC_fdf568550fb18a6ec270df7466fa0d20.RecordClass({
boundsAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
}

}

tradershubModel.RC_fdf568550fb18a6ec270df7466fa0d20 = RC_fdf568550fb18a6ec270df7466fa0d20Inner;

RC_fdf568550fb18a6ec270df7466fa0d20Inner._isAnonymousRecord = true;
RC_fdf568550fb18a6ec270df7466fa0d20Inner.UniqueId = "fdf56855-0fb1-8a6e-c270-df7466fa0d20";
var RC_fdf568550fb18a6ec270df7466fa0d20 = RC_fdf568550fb18a6ec270df7466fa0d20Inner;
RC_fdf568550fb18a6ec270df7466fa0d20.init();
}
});

define("tradershub.model$RL_0e72f02e1a6410320f8b97edcbb7dcb3", ["exports", "@outsystems/runtime-core-js", "tradershub.model", "tradershub.model$RC_fdf568550fb18a6ec270df7466fa0d20"], function (exports, OSRuntimeCore, tradershubModel) {
var OS = OSRuntimeCore;
class RL_0e72f02e1a6410320f8b97edcbb7dcb3 extends 
OS.DataTypes.GenericRecordList {
static getItemType() {
return tradershubModel.RC_fdf568550fb18a6ec270df7466fa0d20;
}

}

tradershubModel.RL_0e72f02e1a6410320f8b97edcbb7dcb3 = RL_0e72f02e1a6410320f8b97edcbb7dcb3;

});

define("tradershub.model$RC_5a174d6874253917600b578d844943be", ["exports", "@outsystems/runtime-core-js", "RESTAPIWebsocket.model", "tradershub.model", "RESTAPIWebsocket.model$ST_709b151c5172b8ff1042e5fecf4be0ecStructure", "tradershub.referencesHealth", "tradershub.referencesHealth$RESTAPIWebsocket"], function (exports, OSRuntimeCore, RESTAPIWebsocketModel, tradershubModel) {
var OS = OSRuntimeCore;
{class RC_5a174d6874253917600b578d844943beInner extends 
OS.DataTypes.GenericRecord {
static attributesToDeclare() {
return [
this.attr("Nik", "nikAttr", "Nik", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new RESTAPIWebsocketModel.ST_709b151c5172b8ff1042e5fecf4be0ecStructure());
}, true, RESTAPIWebsocketModel.ST_709b151c5172b8ff1042e5fecf4be0ecStructure)
].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
}

static fromStructure(str) {
return new RC_5a174d6874253917600b578d844943be(new RC_5a174d6874253917600b578d844943be.RecordClass({
nikAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
}

}

tradershubModel.RC_5a174d6874253917600b578d844943be = RC_5a174d6874253917600b578d844943beInner;

RC_5a174d6874253917600b578d844943beInner._isAnonymousRecord = true;
RC_5a174d6874253917600b578d844943beInner.UniqueId = "5a174d68-7425-3917-600b-578d844943be";
var RC_5a174d6874253917600b578d844943be = RC_5a174d6874253917600b578d844943beInner;
RC_5a174d6874253917600b578d844943be.init();
}
});

define("tradershub.model$RL_0ebbc09ab880f9576c75a250e0dd80b4", ["exports", "@outsystems/runtime-core-js", "tradershub.model", "tradershub.model$RC_5a174d6874253917600b578d844943be"], function (exports, OSRuntimeCore, tradershubModel) {
var OS = OSRuntimeCore;
class RL_0ebbc09ab880f9576c75a250e0dd80b4 extends 
OS.DataTypes.GenericRecordList {
static getItemType() {
return tradershubModel.RC_5a174d6874253917600b578d844943be;
}

}

tradershubModel.RL_0ebbc09ab880f9576c75a250e0dd80b4 = RL_0ebbc09ab880f9576c75a250e0dd80b4;

});

define("tradershub.model$RL_0ec47f3f82052604d4f5dc537e802b05", ["exports", "@outsystems/runtime-core-js", "tradershub.model", "tradershub.model$ST_4090eb1c8cd075ebe26f8bb290f1ff93Structure"], function (exports, OSRuntimeCore, tradershubModel) {
var OS = OSRuntimeCore;
class RL_0ec47f3f82052604d4f5dc537e802b05 extends 
OS.DataTypes.GenericRecordList {
static getItemType() {
return tradershubModel.ST_4090eb1c8cd075ebe26f8bb290f1ff93Structure;
}

}

tradershubModel.RL_0ec47f3f82052604d4f5dc537e802b05 = RL_0ec47f3f82052604d4f5dc537e802b05;

});

define("tradershub.model$ST_a99e5b4d6b08ee1b808de2fbce23bf4fStructure", ["exports", "@outsystems/runtime-core-js", "tradershub.model"], function (exports, OSRuntimeCore, tradershubModel) {
var OS = OSRuntimeCore;
{class ST_a99e5b4d6b08ee1b808de2fbce23bf4fStructureInner extends 
OS.DataTypes.GenericRecord {
static attributesToDeclare() {
return [
this.attr("Address", "addressAttr", "Address", false, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, true), 
this.attr("Town", "townAttr", "Town", false, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, true), 
this.attr("State", "stateAttr", "State", false, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, true), 
this.attr("PostCode", "postCodeAttr", "PostCode", false, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, true)
].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
}

}

tradershubModel.ST_a99e5b4d6b08ee1b808de2fbce23bf4fStructure = ST_a99e5b4d6b08ee1b808de2fbce23bf4fStructureInner;

var ST_a99e5b4d6b08ee1b808de2fbce23bf4fStructure = ST_a99e5b4d6b08ee1b808de2fbce23bf4fStructureInner;
ST_a99e5b4d6b08ee1b808de2fbce23bf4fStructure.init();
}
});

define("tradershub.model$RC_bc0c183af18cebcaa0e46c8ed17bd502", ["exports", "@outsystems/runtime-core-js", "tradershub.model", "tradershub.model$ST_a99e5b4d6b08ee1b808de2fbce23bf4fStructure"], function (exports, OSRuntimeCore, tradershubModel) {
var OS = OSRuntimeCore;
{class RC_bc0c183af18cebcaa0e46c8ed17bd502Inner extends 
OS.DataTypes.GenericRecord {
static attributesToDeclare() {
return [
this.attr("AddressDetailsValidField", "addressDetailsValidFieldAttr", "AddressDetailsValidField", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new tradershubModel.ST_a99e5b4d6b08ee1b808de2fbce23bf4fStructure());
}, true, tradershubModel.ST_a99e5b4d6b08ee1b808de2fbce23bf4fStructure)
].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
}

static fromStructure(str) {
return new RC_bc0c183af18cebcaa0e46c8ed17bd502(new RC_bc0c183af18cebcaa0e46c8ed17bd502.RecordClass({
addressDetailsValidFieldAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
}

}

tradershubModel.RC_bc0c183af18cebcaa0e46c8ed17bd502 = RC_bc0c183af18cebcaa0e46c8ed17bd502Inner;

RC_bc0c183af18cebcaa0e46c8ed17bd502Inner._isAnonymousRecord = true;
RC_bc0c183af18cebcaa0e46c8ed17bd502Inner.UniqueId = "bc0c183a-f18c-ebca-a0e4-6c8ed17bd502";
var RC_bc0c183af18cebcaa0e46c8ed17bd502 = RC_bc0c183af18cebcaa0e46c8ed17bd502Inner;
RC_bc0c183af18cebcaa0e46c8ed17bd502.init();
}
});

define("tradershub.model$RL_0ee640632684f48486797b375ec6130f", ["exports", "@outsystems/runtime-core-js", "tradershub.model", "tradershub.model$RC_bc0c183af18cebcaa0e46c8ed17bd502"], function (exports, OSRuntimeCore, tradershubModel) {
var OS = OSRuntimeCore;
class RL_0ee640632684f48486797b375ec6130f extends 
OS.DataTypes.GenericRecordList {
static getItemType() {
return tradershubModel.RC_bc0c183af18cebcaa0e46c8ed17bd502;
}

}

tradershubModel.RL_0ee640632684f48486797b375ec6130f = RL_0ee640632684f48486797b375ec6130f;

});

define("tradershub.model$ST_58f94944873932b82fdc1272d5e6c98dStructure", ["exports", "@outsystems/runtime-core-js", "tradershub.model"], function (exports, OSRuntimeCore, tradershubModel) {
var OS = OSRuntimeCore;
{class ST_58f94944873932b82fdc1272d5e6c98dStructureInner extends 
OS.DataTypes.GenericRecord {
static attributesToDeclare() {
return [
this.attr("legal_allowed_currencies", "legal_allowed_currenciesAttr", "legal_allowed_currencies", false, false, OS.DataTypes.DataTypes.RecordList, function () {
return OS.DataTypes.ImmutableBase.getData(new OS.DataTypes.TextList());
}, true, OS.DataTypes.TextList)
].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
}

static fromStructure(str) {
return new ST_58f94944873932b82fdc1272d5e6c98dStructure(new ST_58f94944873932b82fdc1272d5e6c98dStructure.RecordClass({
legal_allowed_currenciesAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
}

}

tradershubModel.ST_58f94944873932b82fdc1272d5e6c98dStructure = ST_58f94944873932b82fdc1272d5e6c98dStructureInner;

var ST_58f94944873932b82fdc1272d5e6c98dStructure = ST_58f94944873932b82fdc1272d5e6c98dStructureInner;
ST_58f94944873932b82fdc1272d5e6c98dStructure.init();
}
});

define("tradershub.model$ST_63cc3919eec86680389c2f3be3c018faStructure", ["exports", "@outsystems/runtime-core-js", "tradershub.model", "tradershub.model$ST_58f94944873932b82fdc1272d5e6c98dStructure"], function (exports, OSRuntimeCore, tradershubModel) {
var OS = OSRuntimeCore;
{class ST_63cc3919eec86680389c2f3be3c018faStructureInner extends 
OS.DataTypes.GenericRecord {
static attributesToDeclare() {
return [
this.attr("gaming_company", "gaming_companyAttr", "gaming_company", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new tradershubModel.ST_58f94944873932b82fdc1272d5e6c98dStructure());
}, true, tradershubModel.ST_58f94944873932b82fdc1272d5e6c98dStructure)
].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
}

static fromStructure(str) {
return new ST_63cc3919eec86680389c2f3be3c018faStructure(new ST_63cc3919eec86680389c2f3be3c018faStructure.RecordClass({
gaming_companyAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
}

}

tradershubModel.ST_63cc3919eec86680389c2f3be3c018faStructure = ST_63cc3919eec86680389c2f3be3c018faStructureInner;

var ST_63cc3919eec86680389c2f3be3c018faStructure = ST_63cc3919eec86680389c2f3be3c018faStructureInner;
ST_63cc3919eec86680389c2f3be3c018faStructure.init();
}
});

define("tradershub.model$ST_8929e3c9fca60443ab65fcc0c5318922Structure", ["exports", "@outsystems/runtime-core-js", "tradershub.model", "tradershub.model$ST_63cc3919eec86680389c2f3be3c018faStructure"], function (exports, OSRuntimeCore, tradershubModel) {
var OS = OSRuntimeCore;
{class ST_8929e3c9fca60443ab65fcc0c5318922StructureInner extends 
OS.DataTypes.GenericRecord {
static attributesToDeclare() {
return [
this.attr("Landing_company", "landing_companyAttr", "landing_company", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new tradershubModel.ST_63cc3919eec86680389c2f3be3c018faStructure());
}, true, tradershubModel.ST_63cc3919eec86680389c2f3be3c018faStructure)
].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
}

static fromStructure(str) {
return new ST_8929e3c9fca60443ab65fcc0c5318922Structure(new ST_8929e3c9fca60443ab65fcc0c5318922Structure.RecordClass({
landing_companyAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
}

}

tradershubModel.ST_8929e3c9fca60443ab65fcc0c5318922Structure = ST_8929e3c9fca60443ab65fcc0c5318922StructureInner;

var ST_8929e3c9fca60443ab65fcc0c5318922Structure = ST_8929e3c9fca60443ab65fcc0c5318922StructureInner;
ST_8929e3c9fca60443ab65fcc0c5318922Structure.init();
}
});

define("tradershub.model$RL_0f9515837e2e6cdfbe6dcfdd0b6ace42", ["exports", "@outsystems/runtime-core-js", "tradershub.model", "tradershub.model$ST_8929e3c9fca60443ab65fcc0c5318922Structure"], function (exports, OSRuntimeCore, tradershubModel) {
var OS = OSRuntimeCore;
class RL_0f9515837e2e6cdfbe6dcfdd0b6ace42 extends 
OS.DataTypes.GenericRecordList {
static getItemType() {
return tradershubModel.ST_8929e3c9fca60443ab65fcc0c5318922Structure;
}

}

tradershubModel.RL_0f9515837e2e6cdfbe6dcfdd0b6ace42 = RL_0f9515837e2e6cdfbe6dcfdd0b6ace42;

});

define("tradershub.model$ST_f41b21ee1ca377ae619742cd5408a376Structure", ["exports", "@outsystems/runtime-core-js", "tradershub.model", "tradershub.model$ST_0690f5116aa54a9a733230ed909c87fbStructure"], function (exports, OSRuntimeCore, tradershubModel) {
var OS = OSRuntimeCore;
{class ST_f41b21ee1ca377ae619742cd5408a376StructureInner extends 
OS.DataTypes.GenericRecord {
static attributesToDeclare() {
return [
this.attr("Services", "servicesAttr", "services", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new tradershubModel.ST_0690f5116aa54a9a733230ed909c87fbStructure());
}, true, tradershubModel.ST_0690f5116aa54a9a733230ed909c87fbStructure)
].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
}

static fromStructure(str) {
return new ST_f41b21ee1ca377ae619742cd5408a376Structure(new ST_f41b21ee1ca377ae619742cd5408a376Structure.RecordClass({
servicesAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
}

}

tradershubModel.ST_f41b21ee1ca377ae619742cd5408a376Structure = ST_f41b21ee1ca377ae619742cd5408a376StructureInner;

var ST_f41b21ee1ca377ae619742cd5408a376Structure = ST_f41b21ee1ca377ae619742cd5408a376StructureInner;
ST_f41b21ee1ca377ae619742cd5408a376Structure.init();
}
});

define("tradershub.model$ST_1eac13b44db3d2db577291973f4a7e96Structure", ["exports", "@outsystems/runtime-core-js", "tradershub.model", "tradershub.model$ST_f41b21ee1ca377ae619742cd5408a376Structure"], function (exports, OSRuntimeCore, tradershubModel) {
var OS = OSRuntimeCore;
{class ST_1eac13b44db3d2db577291973f4a7e96StructureInner extends 
OS.DataTypes.GenericRecord {
static attributesToDeclare() {
return [
this.attr("Identity", "identityAttr", "identity", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new tradershubModel.ST_f41b21ee1ca377ae619742cd5408a376Structure());
}, true, tradershubModel.ST_f41b21ee1ca377ae619742cd5408a376Structure), 
this.attr("Phone_idd", "phone_iddAttr", "phone_idd", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Text", "textAttr", "text", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Value", "valueAttr", "value", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Tin_format", "tin_formatAttr", "tin_format", false, false, OS.DataTypes.DataTypes.RecordList, function () {
return OS.DataTypes.ImmutableBase.getData(new OS.DataTypes.TextList());
}, true, OS.DataTypes.TextList), 
this.attr("Disabled", "disabledAttr", "disabled", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Selected", "selectedAttr", "selected", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Account_opening_self_declaration_required", "account_opening_self_declaration_requiredAttr", "account_opening_self_declaration_required", false, false, OS.DataTypes.DataTypes.LongInteger, function () {
return OS.DataTypes.LongInteger.defaultValue;
}, true)
].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
}

}

tradershubModel.ST_1eac13b44db3d2db577291973f4a7e96Structure = ST_1eac13b44db3d2db577291973f4a7e96StructureInner;

var ST_1eac13b44db3d2db577291973f4a7e96Structure = ST_1eac13b44db3d2db577291973f4a7e96StructureInner;
ST_1eac13b44db3d2db577291973f4a7e96Structure.init();
}
});

define("tradershub.model$RL_10436c71a703b5c08e6ed74c34052e0a", ["exports", "@outsystems/runtime-core-js", "tradershub.model", "tradershub.model$ST_1eac13b44db3d2db577291973f4a7e96Structure"], function (exports, OSRuntimeCore, tradershubModel) {
var OS = OSRuntimeCore;
class RL_10436c71a703b5c08e6ed74c34052e0a extends 
OS.DataTypes.GenericRecordList {
static getItemType() {
return tradershubModel.ST_1eac13b44db3d2db577291973f4a7e96Structure;
}

}

tradershubModel.RL_10436c71a703b5c08e6ed74c34052e0a = RL_10436c71a703b5c08e6ed74c34052e0a;

});

define("tradershub.model$ST_a53d413aeb6e91d25715586cf90a94dfStructure", ["exports", "@outsystems/runtime-core-js", "tradershub.model"], function (exports, OSRuntimeCore, tradershubModel) {
var OS = OSRuntimeCore;
{class ST_a53d413aeb6e91d25715586cf90a94dfStructureInner extends 
OS.DataTypes.GenericRecord {
static attributesToDeclare() {
return [
this.attr("Fractional_digits", "fractional_digitsAttr", "fractional_digits", false, false, OS.DataTypes.DataTypes.LongInteger, function () {
return OS.DataTypes.LongInteger.defaultValue;
}, true)
].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
}

static fromStructure(str) {
return new ST_a53d413aeb6e91d25715586cf90a94dfStructure(new ST_a53d413aeb6e91d25715586cf90a94dfStructure.RecordClass({
fractional_digitsAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
}

}

tradershubModel.ST_a53d413aeb6e91d25715586cf90a94dfStructure = ST_a53d413aeb6e91d25715586cf90a94dfStructureInner;

var ST_a53d413aeb6e91d25715586cf90a94dfStructure = ST_a53d413aeb6e91d25715586cf90a94dfStructureInner;
ST_a53d413aeb6e91d25715586cf90a94dfStructure.init();
}
});

define("tradershub.model$ST_10c9c671ed7b6c5f671603b2ebe64123Structure", ["exports", "@outsystems/runtime-core-js", "tradershub.model", "tradershub.model$ST_a53d413aeb6e91d25715586cf90a94dfStructure"], function (exports, OSRuntimeCore, tradershubModel) {
var OS = OSRuntimeCore;
{class ST_10c9c671ed7b6c5f671603b2ebe64123StructureInner extends 
OS.DataTypes.GenericRecord {
static attributesToDeclare() {
return [
this.attr("AFN", "aFNAttr", "AFN", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new tradershubModel.ST_a53d413aeb6e91d25715586cf90a94dfStructure());
}, true, tradershubModel.ST_a53d413aeb6e91d25715586cf90a94dfStructure)
].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
}

static fromStructure(str) {
return new ST_10c9c671ed7b6c5f671603b2ebe64123Structure(new ST_10c9c671ed7b6c5f671603b2ebe64123Structure.RecordClass({
aFNAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
}

}

tradershubModel.ST_10c9c671ed7b6c5f671603b2ebe64123Structure = ST_10c9c671ed7b6c5f671603b2ebe64123StructureInner;

var ST_10c9c671ed7b6c5f671603b2ebe64123Structure = ST_10c9c671ed7b6c5f671603b2ebe64123StructureInner;
ST_10c9c671ed7b6c5f671603b2ebe64123Structure.init();
}
});

define("tradershub.model$ST_4b7e068329ae717d0f48556181f6aebaStructure", ["exports", "@outsystems/runtime-core-js", "tradershub.model"], function (exports, OSRuntimeCore, tradershubModel) {
var OS = OSRuntimeCore;
{class ST_4b7e068329ae717d0f48556181f6aebaStructureInner extends 
OS.DataTypes.GenericRecord {
static attributesToDeclare() {
return [
this.attr("Next_attempt", "next_attemptAttr", "next_attempt", false, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true), 
this.attr("Next_email_attempt", "next_email_attemptAttr", "next_email_attempt", false, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true), 
this.attr("Next_verify_attempt", "next_verify_attemptAttr", "next_verify_attempt", false, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true), 
this.attr("Verified", "verifiedAttr", "verified", false, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true)
].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
}

}

tradershubModel.ST_4b7e068329ae717d0f48556181f6aebaStructure = ST_4b7e068329ae717d0f48556181f6aebaStructureInner;

var ST_4b7e068329ae717d0f48556181f6aebaStructure = ST_4b7e068329ae717d0f48556181f6aebaStructureInner;
ST_4b7e068329ae717d0f48556181f6aebaStructure.init();
}
});

define("tradershub.model$ST_e0a1a95fb0817fa5c2f5eb8ab5528dddStructure", ["exports", "@outsystems/runtime-core-js", "tradershub.model", "tradershub.model$ST_4b7e068329ae717d0f48556181f6aebaStructure"], function (exports, OSRuntimeCore, tradershubModel) {
var OS = OSRuntimeCore;
{class ST_e0a1a95fb0817fa5c2f5eb8ab5528dddStructureInner extends 
OS.DataTypes.GenericRecord {
static attributesToDeclare() {
return [
this.attr("Description", "descriptionAttr", "description", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Type", "typeAttr", "type", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("AdditionalProperties", "additionalPropertiesAttr", "additionalProperties", false, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, true), 
this.attr("Required", "requiredAttr", "required", false, false, OS.DataTypes.DataTypes.RecordList, function () {
return OS.DataTypes.ImmutableBase.getData(new OS.DataTypes.TextList());
}, true, OS.DataTypes.TextList), 
this.attr("Properties", "propertiesAttr", "properties", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new tradershubModel.ST_4b7e068329ae717d0f48556181f6aebaStructure());
}, true, tradershubModel.ST_4b7e068329ae717d0f48556181f6aebaStructure)
].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
}

}

tradershubModel.ST_e0a1a95fb0817fa5c2f5eb8ab5528dddStructure = ST_e0a1a95fb0817fa5c2f5eb8ab5528dddStructureInner;

var ST_e0a1a95fb0817fa5c2f5eb8ab5528dddStructure = ST_e0a1a95fb0817fa5c2f5eb8ab5528dddStructureInner;
ST_e0a1a95fb0817fa5c2f5eb8ab5528dddStructure.init();
}
});

define("tradershub.model$ST_bd2236af041a218c8fde06ca0065cfd9Structure", ["exports", "@outsystems/runtime-core-js", "tradershub.model", "tradershub.model$ST_e0a1a95fb0817fa5c2f5eb8ab5528dddStructure"], function (exports, OSRuntimeCore, tradershubModel) {
var OS = OSRuntimeCore;
{class ST_bd2236af041a218c8fde06ca0065cfd9StructureInner extends 
OS.DataTypes.GenericRecord {
static attributesToDeclare() {
return [
this.attr("Account_opening_reason", "account_opening_reasonAttr", "account_opening_reason", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Address_city", "address_cityAttr", "address_city", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Address_line_1", "address_line_1Attr", "address_line_1", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Address_line_2", "address_line_2Attr", "address_line_2", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Address_postcode", "address_postcodeAttr", "address_postcode", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Address_state", "address_stateAttr", "address_state", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Allow_copiers", "allow_copiersAttr", "allow_copiers", false, false, OS.DataTypes.DataTypes.LongInteger, function () {
return OS.DataTypes.LongInteger.defaultValue;
}, true), 
this.attr("Citizen", "citizenAttr", "citizen", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Client_tnc_status", "client_tnc_statusAttr", "client_tnc_status", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Cooling_off_expiration_date", "cooling_off_expiration_dateAttr", "cooling_off_expiration_date", false, false, OS.DataTypes.DataTypes.LongInteger, function () {
return OS.DataTypes.LongInteger.defaultValue;
}, true), 
this.attr("Country", "countryAttr", "country", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Country_code", "country_codeAttr", "country_code", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Date_of_birth", "date_of_birthAttr", "date_of_birth", false, false, OS.DataTypes.DataTypes.LongInteger, function () {
return OS.DataTypes.LongInteger.defaultValue;
}, true), 
this.attr("Dxtrade_user_exception", "dxtrade_user_exceptionAttr", "dxtrade_user_exception", false, false, OS.DataTypes.DataTypes.LongInteger, function () {
return OS.DataTypes.LongInteger.defaultValue;
}, true), 
this.attr("Email", "emailAttr", "email", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Email_consent", "email_consentAttr", "email_consent", false, false, OS.DataTypes.DataTypes.LongInteger, function () {
return OS.DataTypes.LongInteger.defaultValue;
}, true), 
this.attr("Employment_status", "employment_statusAttr", "employment_status", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Fatca_declaration", "fatca_declarationAttr", "fatca_declaration", false, false, OS.DataTypes.DataTypes.LongInteger, function () {
return OS.DataTypes.LongInteger.defaultValue;
}, true), 
this.attr("First_name", "first_nameAttr", "first_name", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Has_secret_answer", "has_secret_answerAttr", "has_secret_answer", false, false, OS.DataTypes.DataTypes.LongInteger, function () {
return OS.DataTypes.LongInteger.defaultValue;
}, true), 
this.attr("Immutable_fields", "immutable_fieldsAttr", "immutable_fields", false, false, OS.DataTypes.DataTypes.RecordList, function () {
return OS.DataTypes.ImmutableBase.getData(new OS.DataTypes.TextList());
}, true, OS.DataTypes.TextList), 
this.attr("Is_authenticated_payment_agent", "is_authenticated_payment_agentAttr", "is_authenticated_payment_agent", false, false, OS.DataTypes.DataTypes.LongInteger, function () {
return OS.DataTypes.LongInteger.defaultValue;
}, true), 
this.attr("Last_name", "last_nameAttr", "last_name", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Non_pep_declaration", "non_pep_declarationAttr", "non_pep_declaration", false, false, OS.DataTypes.DataTypes.LongInteger, function () {
return OS.DataTypes.LongInteger.defaultValue;
}, true), 
this.attr("Phone", "phoneAttr", "phone", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Place_of_birth", "place_of_birthAttr", "place_of_birth", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Preferred_language", "preferred_languageAttr", "preferred_language", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Request_professional_status", "request_professional_statusAttr", "request_professional_status", false, false, OS.DataTypes.DataTypes.LongInteger, function () {
return OS.DataTypes.LongInteger.defaultValue;
}, true), 
this.attr("Residence", "residenceAttr", "residence", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Salutation", "salutationAttr", "salutation", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Tax_identification_number", "tax_identification_numberAttr", "tax_identification_number", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Tax_residence", "tax_residenceAttr", "tax_residence", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Trading_hub", "trading_hubAttr", "trading_hub", false, false, OS.DataTypes.DataTypes.LongInteger, function () {
return OS.DataTypes.LongInteger.defaultValue;
}, true), 
this.attr("User_hash", "user_hashAttr", "user_hash", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Phone_number_verification", "phone_number_verificationAttr", "phone_number_verification", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new tradershubModel.ST_e0a1a95fb0817fa5c2f5eb8ab5528dddStructure());
}, true, tradershubModel.ST_e0a1a95fb0817fa5c2f5eb8ab5528dddStructure)
].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
}

}

tradershubModel.ST_bd2236af041a218c8fde06ca0065cfd9Structure = ST_bd2236af041a218c8fde06ca0065cfd9StructureInner;

var ST_bd2236af041a218c8fde06ca0065cfd9Structure = ST_bd2236af041a218c8fde06ca0065cfd9StructureInner;
ST_bd2236af041a218c8fde06ca0065cfd9Structure.init();
}
});

define("tradershub.model$ST_34132650bf66478c56079f24e67e094cStructure", ["exports", "@outsystems/runtime-core-js", "tradershub.model", "tradershub.model$ST_bd2236af041a218c8fde06ca0065cfd9Structure"], function (exports, OSRuntimeCore, tradershubModel) {
var OS = OSRuntimeCore;
{class ST_34132650bf66478c56079f24e67e094cStructureInner extends 
OS.DataTypes.GenericRecord {
static attributesToDeclare() {
return [
this.attr("get_settings", "get_settingsAttr", "get_settings", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new tradershubModel.ST_bd2236af041a218c8fde06ca0065cfd9Structure());
}, true, tradershubModel.ST_bd2236af041a218c8fde06ca0065cfd9Structure)
].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
}

static fromStructure(str) {
return new ST_34132650bf66478c56079f24e67e094cStructure(new ST_34132650bf66478c56079f24e67e094cStructure.RecordClass({
get_settingsAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
}

}

tradershubModel.ST_34132650bf66478c56079f24e67e094cStructure = ST_34132650bf66478c56079f24e67e094cStructureInner;

var ST_34132650bf66478c56079f24e67e094cStructure = ST_34132650bf66478c56079f24e67e094cStructureInner;
ST_34132650bf66478c56079f24e67e094cStructure.init();
}
});

define("tradershub.model$RL_1177db071d4ea810918812aa15db3583", ["exports", "@outsystems/runtime-core-js", "tradershub.model", "tradershub.model$ST_34132650bf66478c56079f24e67e094cStructure"], function (exports, OSRuntimeCore, tradershubModel) {
var OS = OSRuntimeCore;
class RL_1177db071d4ea810918812aa15db3583 extends 
OS.DataTypes.GenericRecordList {
static getItemType() {
return tradershubModel.ST_34132650bf66478c56079f24e67e094cStructure;
}

}

tradershubModel.RL_1177db071d4ea810918812aa15db3583 = RL_1177db071d4ea810918812aa15db3583;

});

define("tradershub.model$ST_bc7a92cde0807afeabb9fb7ba2ef9c4cStructure", ["exports", "@outsystems/runtime-core-js", "tradershub.model"], function (exports, OSRuntimeCore, tradershubModel) {
var OS = OSRuntimeCore;
{class ST_bc7a92cde0807afeabb9fb7ba2ef9c4cStructureInner extends 
OS.DataTypes.GenericRecord {
static attributesToDeclare() {
return [
this.attr("FatcaDeclare", "fatcaDeclareAttr", "FatcaDeclare", false, false, OS.DataTypes.DataTypes.Boolean, function () {
return true;
}, true), 
this.attr("PEP", "pEPAttr", "PEP", false, false, OS.DataTypes.DataTypes.Boolean, function () {
return true;
}, true), 
this.attr("AgreeToTerms", "agreeToTermsAttr", "AgreeToTerms", false, false, OS.DataTypes.DataTypes.Boolean, function () {
return true;
}, true)
].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
}

}

tradershubModel.ST_bc7a92cde0807afeabb9fb7ba2ef9c4cStructure = ST_bc7a92cde0807afeabb9fb7ba2ef9c4cStructureInner;

var ST_bc7a92cde0807afeabb9fb7ba2ef9c4cStructure = ST_bc7a92cde0807afeabb9fb7ba2ef9c4cStructureInner;
ST_bc7a92cde0807afeabb9fb7ba2ef9c4cStructure.init();
}
});

define("tradershub.model$RL_11cc4644519686d814d0c7c45c84e15b", ["exports", "@outsystems/runtime-core-js", "tradershub.model", "tradershub.model$ST_bc7a92cde0807afeabb9fb7ba2ef9c4cStructure"], function (exports, OSRuntimeCore, tradershubModel) {
var OS = OSRuntimeCore;
class RL_11cc4644519686d814d0c7c45c84e15b extends 
OS.DataTypes.GenericRecordList {
static getItemType() {
return tradershubModel.ST_bc7a92cde0807afeabb9fb7ba2ef9c4cStructure;
}

}

tradershubModel.RL_11cc4644519686d814d0c7c45c84e15b = RL_11cc4644519686d814d0c7c45c84e15b;

});

define("tradershub.model$ST_d81e896c7e8b0bc18c896edcf1c606c7Structure", ["exports", "@outsystems/runtime-core-js", "tradershub.model"], function (exports, OSRuntimeCore, tradershubModel) {
var OS = OSRuntimeCore;
{class ST_d81e896c7e8b0bc18c896edcf1c606c7StructureInner extends 
OS.DataTypes.GenericRecord {
static attributesToDeclare() {
return [
this.attr("Type", "typeAttr", "type", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Verify_email", "verify_emailAttr", "verify_email", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true)
].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
}

}

tradershubModel.ST_d81e896c7e8b0bc18c896edcf1c606c7Structure = ST_d81e896c7e8b0bc18c896edcf1c606c7StructureInner;

var ST_d81e896c7e8b0bc18c896edcf1c606c7Structure = ST_d81e896c7e8b0bc18c896edcf1c606c7StructureInner;
ST_d81e896c7e8b0bc18c896edcf1c606c7Structure.init();
}
});

define("tradershub.model$RC_122e2a2ffba1e5ab49d0191f12c30284", ["exports", "@outsystems/runtime-core-js", "tradershub.model", "tradershub.model$ST_d81e896c7e8b0bc18c896edcf1c606c7Structure"], function (exports, OSRuntimeCore, tradershubModel) {
var OS = OSRuntimeCore;
{class RC_122e2a2ffba1e5ab49d0191f12c30284Inner extends 
OS.DataTypes.GenericRecord {
static attributesToDeclare() {
return [
this.attr("Account_opening", "account_openingAttr", "Account_opening", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new tradershubModel.ST_d81e896c7e8b0bc18c896edcf1c606c7Structure());
}, true, tradershubModel.ST_d81e896c7e8b0bc18c896edcf1c606c7Structure)
].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
}

static fromStructure(str) {
return new RC_122e2a2ffba1e5ab49d0191f12c30284(new RC_122e2a2ffba1e5ab49d0191f12c30284.RecordClass({
account_openingAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
}

}

tradershubModel.RC_122e2a2ffba1e5ab49d0191f12c30284 = RC_122e2a2ffba1e5ab49d0191f12c30284Inner;

RC_122e2a2ffba1e5ab49d0191f12c30284Inner._isAnonymousRecord = true;
RC_122e2a2ffba1e5ab49d0191f12c30284Inner.UniqueId = "122e2a2f-fba1-e5ab-49d0-191f12c30284";
var RC_122e2a2ffba1e5ab49d0191f12c30284 = RC_122e2a2ffba1e5ab49d0191f12c30284Inner;
RC_122e2a2ffba1e5ab49d0191f12c30284.init();
}
});

define("tradershub.model$ST_6460f355981e1f253edfbd5d857d76bdStructure", ["exports", "@outsystems/runtime-core-js", "tradershub.model"], function (exports, OSRuntimeCore, tradershubModel) {
var OS = OSRuntimeCore;
{class ST_6460f355981e1f253edfbd5d857d76bdStructureInner extends 
OS.DataTypes.GenericRecord {
static attributesToDeclare() {
return [
this.attr("All", "allAttr", "all", false, false, OS.DataTypes.DataTypes.LongInteger, function () {
return OS.DataTypes.LongInteger.defaultValue;
}, true), 
this.attr("Platform", "platformAttr", "platform", false, false, OS.DataTypes.DataTypes.LongInteger, function () {
return OS.DataTypes.LongInteger.defaultValue;
}, true), 
this.attr("Server_number", "server_numberAttr", "server_number", false, false, OS.DataTypes.DataTypes.LongInteger, function () {
return OS.DataTypes.LongInteger.defaultValue;
}, true), 
this.attr("Deposits", "depositsAttr", "deposits", false, false, OS.DataTypes.DataTypes.LongInteger, function () {
return OS.DataTypes.LongInteger.defaultValue;
}, true), 
this.attr("Withdrawals", "withdrawalsAttr", "withdrawals", false, false, OS.DataTypes.DataTypes.LongInteger, function () {
return OS.DataTypes.LongInteger.defaultValue;
}, true)
].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
}

}

tradershubModel.ST_6460f355981e1f253edfbd5d857d76bdStructure = ST_6460f355981e1f253edfbd5d857d76bdStructureInner;

var ST_6460f355981e1f253edfbd5d857d76bdStructure = ST_6460f355981e1f253edfbd5d857d76bdStructureInner;
ST_6460f355981e1f253edfbd5d857d76bdStructure.init();
}
});

define("tradershub.model$RL_12a53b3c28725edc5745777d2ebb8a76", ["exports", "@outsystems/runtime-core-js", "tradershub.model", "tradershub.model$ST_6460f355981e1f253edfbd5d857d76bdStructure"], function (exports, OSRuntimeCore, tradershubModel) {
var OS = OSRuntimeCore;
class RL_12a53b3c28725edc5745777d2ebb8a76 extends 
OS.DataTypes.GenericRecordList {
static getItemType() {
return tradershubModel.ST_6460f355981e1f253edfbd5d857d76bdStructure;
}

}

tradershubModel.RL_12a53b3c28725edc5745777d2ebb8a76 = RL_12a53b3c28725edc5745777d2ebb8a76;

});

define("tradershub.model$RC_334ec8eb11cbb1f900eb82a622de6be5", ["exports", "@outsystems/runtime-core-js", "RESTAPIWebsocket.model", "tradershub.model", "RESTAPIWebsocket.model$ST_b47d3155c531939aabdd10ec3a99049dStructure", "tradershub.referencesHealth", "tradershub.referencesHealth$RESTAPIWebsocket"], function (exports, OSRuntimeCore, RESTAPIWebsocketModel, tradershubModel) {
var OS = OSRuntimeCore;
{class RC_334ec8eb11cbb1f900eb82a622de6be5Inner extends 
OS.DataTypes.GenericRecord {
static attributesToDeclare() {
return [
this.attr("AUD", "aUDAttr", "AUD", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new RESTAPIWebsocketModel.ST_b47d3155c531939aabdd10ec3a99049dStructure());
}, true, RESTAPIWebsocketModel.ST_b47d3155c531939aabdd10ec3a99049dStructure)
].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
}

static fromStructure(str) {
return new RC_334ec8eb11cbb1f900eb82a622de6be5(new RC_334ec8eb11cbb1f900eb82a622de6be5.RecordClass({
aUDAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
}

}

tradershubModel.RC_334ec8eb11cbb1f900eb82a622de6be5 = RC_334ec8eb11cbb1f900eb82a622de6be5Inner;

RC_334ec8eb11cbb1f900eb82a622de6be5Inner._isAnonymousRecord = true;
RC_334ec8eb11cbb1f900eb82a622de6be5Inner.UniqueId = "334ec8eb-11cb-b1f9-00eb-82a622de6be5";
var RC_334ec8eb11cbb1f900eb82a622de6be5 = RC_334ec8eb11cbb1f900eb82a622de6be5Inner;
RC_334ec8eb11cbb1f900eb82a622de6be5.init();
}
});

define("tradershub.model$RL_130306c98b85aa803514000e3331edb0", ["exports", "@outsystems/runtime-core-js", "tradershub.model", "tradershub.model$RC_334ec8eb11cbb1f900eb82a622de6be5"], function (exports, OSRuntimeCore, tradershubModel) {
var OS = OSRuntimeCore;
class RL_130306c98b85aa803514000e3331edb0 extends 
OS.DataTypes.GenericRecordList {
static getItemType() {
return tradershubModel.RC_334ec8eb11cbb1f900eb82a622de6be5;
}

}

tradershubModel.RL_130306c98b85aa803514000e3331edb0 = RL_130306c98b85aa803514000e3331edb0;

});

define("tradershub.model$RC_131ec4afe292e50694c2940b1e3c9a73", ["exports", "@outsystems/runtime-core-js", "RESTAPIWebsocket.model", "tradershub.model", "RESTAPIWebsocket.model$ST_bccc1fae1833449eea329fa137ba885aStructure", "tradershub.referencesHealth", "tradershub.referencesHealth$RESTAPIWebsocket"], function (exports, OSRuntimeCore, RESTAPIWebsocketModel, tradershubModel) {
var OS = OSRuntimeCore;
{class RC_131ec4afe292e50694c2940b1e3c9a73Inner extends 
OS.DataTypes.GenericRecord {
static attributesToDeclare() {
return [
this.attr("Currency_config2", "currency_config2Attr", "Currency_config2", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new RESTAPIWebsocketModel.ST_bccc1fae1833449eea329fa137ba885aStructure());
}, true, RESTAPIWebsocketModel.ST_bccc1fae1833449eea329fa137ba885aStructure)
].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
}

static fromStructure(str) {
return new RC_131ec4afe292e50694c2940b1e3c9a73(new RC_131ec4afe292e50694c2940b1e3c9a73.RecordClass({
currency_config2Attr: OS.DataTypes.ImmutableBase.getData(str)
}));
}

}

tradershubModel.RC_131ec4afe292e50694c2940b1e3c9a73 = RC_131ec4afe292e50694c2940b1e3c9a73Inner;

RC_131ec4afe292e50694c2940b1e3c9a73Inner._isAnonymousRecord = true;
RC_131ec4afe292e50694c2940b1e3c9a73Inner.UniqueId = "131ec4af-e292-e506-94c2-940b1e3c9a73";
var RC_131ec4afe292e50694c2940b1e3c9a73 = RC_131ec4afe292e50694c2940b1e3c9a73Inner;
RC_131ec4afe292e50694c2940b1e3c9a73.init();
}
});

define("tradershub.model$RC_d54336ec6049dff9c99f14fd62e782c4", ["exports", "@outsystems/runtime-core-js", "RESTAPIWebsocket.model", "tradershub.model", "RESTAPIWebsocket.model$ST_94d54d268b2cff4f4ed014a5df48da20Structure", "tradershub.referencesHealth", "tradershub.referencesHealth$RESTAPIWebsocket"], function (exports, OSRuntimeCore, RESTAPIWebsocketModel, tradershubModel) {
var OS = OSRuntimeCore;
{class RC_d54336ec6049dff9c99f14fd62e782c4Inner extends 
OS.DataTypes.GenericRecord {
static attributesToDeclare() {
return [
this.attr("Trading", "tradingAttr", "Trading3", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new RESTAPIWebsocketModel.ST_94d54d268b2cff4f4ed014a5df48da20Structure());
}, true, RESTAPIWebsocketModel.ST_94d54d268b2cff4f4ed014a5df48da20Structure)
].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
}

static fromStructure(str) {
return new RC_d54336ec6049dff9c99f14fd62e782c4(new RC_d54336ec6049dff9c99f14fd62e782c4.RecordClass({
tradingAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
}

}

tradershubModel.RC_d54336ec6049dff9c99f14fd62e782c4 = RC_d54336ec6049dff9c99f14fd62e782c4Inner;

RC_d54336ec6049dff9c99f14fd62e782c4Inner._isAnonymousRecord = true;
RC_d54336ec6049dff9c99f14fd62e782c4Inner.UniqueId = "d54336ec-6049-dff9-c99f-14fd62e782c4";
var RC_d54336ec6049dff9c99f14fd62e782c4 = RC_d54336ec6049dff9c99f14fd62e782c4Inner;
RC_d54336ec6049dff9c99f14fd62e782c4.init();
}
});

define("tradershub.model$RL_13576b5dee00a62e9c40a0c658db0a38", ["exports", "@outsystems/runtime-core-js", "tradershub.model", "tradershub.model$RC_d54336ec6049dff9c99f14fd62e782c4"], function (exports, OSRuntimeCore, tradershubModel) {
var OS = OSRuntimeCore;
class RL_13576b5dee00a62e9c40a0c658db0a38 extends 
OS.DataTypes.GenericRecordList {
static getItemType() {
return tradershubModel.RC_d54336ec6049dff9c99f14fd62e782c4;
}

}

tradershubModel.RL_13576b5dee00a62e9c40a0c658db0a38 = RL_13576b5dee00a62e9c40a0c658db0a38;

});

define("tradershub.model$RC_f9a589fe5b81c3bda7db0e574d5d11fb", ["exports", "@outsystems/runtime-core-js", "System_.model", "tradershub.model", "System_.model$UserLoginResultRec", "tradershub.referencesHealth", "tradershub.referencesHealth$System_"], function (exports, OSRuntimeCore, System_Model, tradershubModel) {
var OS = OSRuntimeCore;
{class RC_f9a589fe5b81c3bda7db0e574d5d11fbInner extends 
OS.DataTypes.GenericRecord {
static attributesToDeclare() {
return [
this.attr("UserLoginResult", "userLoginResultAttr", "UserLoginResult", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new OS.SystemStructures.UserLoginResultRec());
}, true, OS.SystemStructures.UserLoginResultRec)
].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
}

static fromStructure(str) {
return new RC_f9a589fe5b81c3bda7db0e574d5d11fb(new RC_f9a589fe5b81c3bda7db0e574d5d11fb.RecordClass({
userLoginResultAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
}

}

tradershubModel.RC_f9a589fe5b81c3bda7db0e574d5d11fb = RC_f9a589fe5b81c3bda7db0e574d5d11fbInner;

RC_f9a589fe5b81c3bda7db0e574d5d11fbInner._isAnonymousRecord = true;
RC_f9a589fe5b81c3bda7db0e574d5d11fbInner.UniqueId = "f9a589fe-5b81-c3bd-a7db-0e574d5d11fb";
var RC_f9a589fe5b81c3bda7db0e574d5d11fb = RC_f9a589fe5b81c3bda7db0e574d5d11fbInner;
RC_f9a589fe5b81c3bda7db0e574d5d11fb.init();
}
});

define("tradershub.model$RL_137c1fde2390fc7845ae92a0265be990", ["exports", "@outsystems/runtime-core-js", "tradershub.model", "tradershub.model$RC_f9a589fe5b81c3bda7db0e574d5d11fb"], function (exports, OSRuntimeCore, tradershubModel) {
var OS = OSRuntimeCore;
class RL_137c1fde2390fc7845ae92a0265be990 extends 
OS.DataTypes.GenericRecordList {
static getItemType() {
return tradershubModel.RC_f9a589fe5b81c3bda7db0e574d5d11fb;
}

}

tradershubModel.RL_137c1fde2390fc7845ae92a0265be990 = RL_137c1fde2390fc7845ae92a0265be990;

});

define("tradershub.model$RC_78b6d6ed7d52800a8a68e7d796ec6850", ["exports", "@outsystems/runtime-core-js", "OutSystemsUI.model", "tradershub.model", "OutSystemsUI.model$EN_8aa0a121c98b5f44394f59c96ffee853EntityRecord", "tradershub.referencesHealth", "tradershub.referencesHealth$OutSystemsUI"], function (exports, OSRuntimeCore, OutSystemsUIModel, tradershubModel) {
var OS = OSRuntimeCore;
{class RC_78b6d6ed7d52800a8a68e7d796ec6850Inner extends 
OS.DataTypes.GenericRecord {
static attributesToDeclare() {
return [
this.attr("AnimationType", "animationTypeAttr", "AnimationType", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new OutSystemsUIModel.EN_8aa0a121c98b5f44394f59c96ffee853EntityRecord());
}, true, OutSystemsUIModel.EN_8aa0a121c98b5f44394f59c96ffee853EntityRecord)
].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
}

static fromStructure(str) {
return new RC_78b6d6ed7d52800a8a68e7d796ec6850(new RC_78b6d6ed7d52800a8a68e7d796ec6850.RecordClass({
animationTypeAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
}

}

tradershubModel.RC_78b6d6ed7d52800a8a68e7d796ec6850 = RC_78b6d6ed7d52800a8a68e7d796ec6850Inner;

RC_78b6d6ed7d52800a8a68e7d796ec6850Inner._isAnonymousRecord = true;
RC_78b6d6ed7d52800a8a68e7d796ec6850Inner.UniqueId = "78b6d6ed-7d52-800a-8a68-e7d796ec6850";
var RC_78b6d6ed7d52800a8a68e7d796ec6850 = RC_78b6d6ed7d52800a8a68e7d796ec6850Inner;
RC_78b6d6ed7d52800a8a68e7d796ec6850.init();
}
});

define("tradershub.model$RL_13dce2cada552f2b003eedebc4cfbf64", ["exports", "@outsystems/runtime-core-js", "tradershub.model", "tradershub.model$RC_78b6d6ed7d52800a8a68e7d796ec6850"], function (exports, OSRuntimeCore, tradershubModel) {
var OS = OSRuntimeCore;
class RL_13dce2cada552f2b003eedebc4cfbf64 extends 
OS.DataTypes.GenericRecordList {
static getItemType() {
return tradershubModel.RC_78b6d6ed7d52800a8a68e7d796ec6850;
}

}

tradershubModel.RL_13dce2cada552f2b003eedebc4cfbf64 = RL_13dce2cada552f2b003eedebc4cfbf64;

});

define("tradershub.model$RL_13f4e7ea22b9e316259c119567103cf9", ["exports", "@outsystems/runtime-core-js", "RESTAPIWebsocket.model", "tradershub.model", "RESTAPIWebsocket.model$ST_333caa433a680d581b2dfdf80dcbab60Structure", "tradershub.referencesHealth", "tradershub.referencesHealth$RESTAPIWebsocket"], function (exports, OSRuntimeCore, RESTAPIWebsocketModel, tradershubModel) {
var OS = OSRuntimeCore;
class RL_13f4e7ea22b9e316259c119567103cf9 extends 
OS.DataTypes.GenericRecordList {
static getItemType() {
return RESTAPIWebsocketModel.ST_333caa433a680d581b2dfdf80dcbab60Structure;
}

}

tradershubModel.RL_13f4e7ea22b9e316259c119567103cf9 = RL_13f4e7ea22b9e316259c119567103cf9;

});

define("tradershub.model$RL_143abbfebca3c373ef0923e4c8b26336", ["exports", "@outsystems/runtime-core-js", "RESTAPIWebsocket.model", "tradershub.model", "RESTAPIWebsocket.model$ST_cea376e9e95ae6d491d188174483cdceStructure", "tradershub.referencesHealth", "tradershub.referencesHealth$RESTAPIWebsocket"], function (exports, OSRuntimeCore, RESTAPIWebsocketModel, tradershubModel) {
var OS = OSRuntimeCore;
class RL_143abbfebca3c373ef0923e4c8b26336 extends 
OS.DataTypes.GenericRecordList {
static getItemType() {
return RESTAPIWebsocketModel.ST_cea376e9e95ae6d491d188174483cdceStructure;
}

}

tradershubModel.RL_143abbfebca3c373ef0923e4c8b26336 = RL_143abbfebca3c373ef0923e4c8b26336;

});

define("tradershub.model$RL_14c5bb80b83da1321f2059f42deabf95", ["exports", "@outsystems/runtime-core-js", "RESTAPIWebsocket.model", "tradershub.model", "RESTAPIWebsocket.model$ST_10e78341d21be3a7dc573dcf4252c9dbStructure", "tradershub.referencesHealth", "tradershub.referencesHealth$RESTAPIWebsocket"], function (exports, OSRuntimeCore, RESTAPIWebsocketModel, tradershubModel) {
var OS = OSRuntimeCore;
class RL_14c5bb80b83da1321f2059f42deabf95 extends 
OS.DataTypes.GenericRecordList {
static getItemType() {
return RESTAPIWebsocketModel.ST_10e78341d21be3a7dc573dcf4252c9dbStructure;
}

}

tradershubModel.RL_14c5bb80b83da1321f2059f42deabf95 = RL_14c5bb80b83da1321f2059f42deabf95;

});

define("tradershub.model$RC_79f003baa030e546826ed42c3962f582", ["exports", "@outsystems/runtime-core-js", "System_.model", "tradershub.model", "System_.model$UserInfoRec", "tradershub.referencesHealth", "tradershub.referencesHealth$System_"], function (exports, OSRuntimeCore, System_Model, tradershubModel) {
var OS = OSRuntimeCore;
{class RC_79f003baa030e546826ed42c3962f582Inner extends 
OS.DataTypes.GenericRecord {
static attributesToDeclare() {
return [
this.attr("UserInfo", "userInfoAttr", "UserInfo", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new OS.SystemStructures.UserInfoRec());
}, true, OS.SystemStructures.UserInfoRec)
].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
}

static fromStructure(str) {
return new RC_79f003baa030e546826ed42c3962f582(new RC_79f003baa030e546826ed42c3962f582.RecordClass({
userInfoAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
}

}

tradershubModel.RC_79f003baa030e546826ed42c3962f582 = RC_79f003baa030e546826ed42c3962f582Inner;

RC_79f003baa030e546826ed42c3962f582Inner._isAnonymousRecord = true;
RC_79f003baa030e546826ed42c3962f582Inner.UniqueId = "79f003ba-a030-e546-826e-d42c3962f582";
var RC_79f003baa030e546826ed42c3962f582 = RC_79f003baa030e546826ed42c3962f582Inner;
RC_79f003baa030e546826ed42c3962f582.init();
}
});

define("tradershub.model$RL_1503951706c05a1675ae923dc239c757", ["exports", "@outsystems/runtime-core-js", "tradershub.model", "tradershub.model$RC_79f003baa030e546826ed42c3962f582"], function (exports, OSRuntimeCore, tradershubModel) {
var OS = OSRuntimeCore;
class RL_1503951706c05a1675ae923dc239c757 extends 
OS.DataTypes.GenericRecordList {
static getItemType() {
return tradershubModel.RC_79f003baa030e546826ed42c3962f582;
}

}

tradershubModel.RL_1503951706c05a1675ae923dc239c757 = RL_1503951706c05a1675ae923dc239c757;

});

define("tradershub.model$EN_83f565756985dca23bf05361fceace11EntityRecord", ["exports", "@outsystems/runtime-core-js", "tradershub.model"], function (exports, OSRuntimeCore, tradershubModel) {
var OS = OSRuntimeCore;
{class EN_83f565756985dca23bf05361fceace11EntityRecordInner extends 
OS.DataTypes.GenericRecord {
static attributesToDeclare() {
return [
this.attr("Id", "idAttr", "Id", true, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true), 
this.attr("Label", "labelAttr", "Label", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Order", "orderAttr", "Order", true, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true), 
this.attr("Is_Active", "is_ActiveAttr", "Is_Active", true, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, true)
].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
}

}

tradershubModel.EN_83f565756985dca23bf05361fceace11EntityRecord = EN_83f565756985dca23bf05361fceace11EntityRecordInner;

var EN_83f565756985dca23bf05361fceace11EntityRecord = EN_83f565756985dca23bf05361fceace11EntityRecordInner;
EN_83f565756985dca23bf05361fceace11EntityRecord.init();
}
});

define("tradershub.model$RC_15473366250c32d5c90e736dd1330de3", ["exports", "@outsystems/runtime-core-js", "tradershub.model", "tradershub.model$EN_83f565756985dca23bf05361fceace11EntityRecord"], function (exports, OSRuntimeCore, tradershubModel) {
var OS = OSRuntimeCore;
{class RC_15473366250c32d5c90e736dd1330de3Inner extends 
OS.DataTypes.GenericRecord {
static attributesToDeclare() {
return [
this.attr("Netannualincome", "netannualincomeAttr", "Netannualincome", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new tradershubModel.EN_83f565756985dca23bf05361fceace11EntityRecord());
}, true, tradershubModel.EN_83f565756985dca23bf05361fceace11EntityRecord)
].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
}

static fromStructure(str) {
return new RC_15473366250c32d5c90e736dd1330de3(new RC_15473366250c32d5c90e736dd1330de3.RecordClass({
netannualincomeAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
}

}

tradershubModel.RC_15473366250c32d5c90e736dd1330de3 = RC_15473366250c32d5c90e736dd1330de3Inner;

RC_15473366250c32d5c90e736dd1330de3Inner._isAnonymousRecord = true;
RC_15473366250c32d5c90e736dd1330de3Inner.UniqueId = "15473366-250c-32d5-c90e-736dd1330de3";
var RC_15473366250c32d5c90e736dd1330de3 = RC_15473366250c32d5c90e736dd1330de3Inner;
RC_15473366250c32d5c90e736dd1330de3.init();
}
});

define("tradershub.model$RL_157fced35d515bf7b615f06f3ed59864", ["exports", "@outsystems/runtime-core-js", "OutSystemsUI.model", "tradershub.model", "OutSystemsUI.model$EN_bc915b2fa9297a72fb4d1b227ebe2573EntityRecord", "tradershub.referencesHealth", "tradershub.referencesHealth$OutSystemsUI"], function (exports, OSRuntimeCore, OutSystemsUIModel, tradershubModel) {
var OS = OSRuntimeCore;
class RL_157fced35d515bf7b615f06f3ed59864 extends 
OS.DataTypes.GenericRecordList {
static getItemType() {
return OutSystemsUIModel.EN_bc915b2fa9297a72fb4d1b227ebe2573EntityRecord;
}

}

tradershubModel.RL_157fced35d515bf7b615f06f3ed59864 = RL_157fced35d515bf7b615f06f3ed59864;

});

define("tradershub.model$RC_1583be5d90a94b6a73170ffa868eecc5", ["exports", "@outsystems/runtime-core-js", "OutSystemsUI.model", "tradershub.model", "OutSystemsUI.model$EN_ede7f8abbe990a3b2c1a9cfd79dc5b0fEntityRecord", "tradershub.referencesHealth", "tradershub.referencesHealth$OutSystemsUI"], function (exports, OSRuntimeCore, OutSystemsUIModel, tradershubModel) {
var OS = OSRuntimeCore;
{class RC_1583be5d90a94b6a73170ffa868eecc5Inner extends 
OS.DataTypes.GenericRecord {
static attributesToDeclare() {
return [
this.attr("DeviceResponsive", "deviceResponsiveAttr", "DeviceResponsive", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new OutSystemsUIModel.EN_ede7f8abbe990a3b2c1a9cfd79dc5b0fEntityRecord());
}, true, OutSystemsUIModel.EN_ede7f8abbe990a3b2c1a9cfd79dc5b0fEntityRecord)
].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
}

static fromStructure(str) {
return new RC_1583be5d90a94b6a73170ffa868eecc5(new RC_1583be5d90a94b6a73170ffa868eecc5.RecordClass({
deviceResponsiveAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
}

}

tradershubModel.RC_1583be5d90a94b6a73170ffa868eecc5 = RC_1583be5d90a94b6a73170ffa868eecc5Inner;

RC_1583be5d90a94b6a73170ffa868eecc5Inner._isAnonymousRecord = true;
RC_1583be5d90a94b6a73170ffa868eecc5Inner.UniqueId = "1583be5d-90a9-4b6a-7317-0ffa868eecc5";
var RC_1583be5d90a94b6a73170ffa868eecc5 = RC_1583be5d90a94b6a73170ffa868eecc5Inner;
RC_1583be5d90a94b6a73170ffa868eecc5.init();
}
});

define("tradershub.model$RL_15a080885a824b18c40f8b64d818ce41", ["exports", "@outsystems/runtime-core-js", "OutSystemsMaps.model", "tradershub.model", "OutSystemsMaps.model$ST_31cb630f5fdaa3aa4d3dbfd37cbf9e56Structure", "tradershub.referencesHealth", "tradershub.referencesHealth$OutSystemsMaps"], function (exports, OSRuntimeCore, OutSystemsMapsModel, tradershubModel) {
var OS = OSRuntimeCore;
class RL_15a080885a824b18c40f8b64d818ce41 extends 
OS.DataTypes.GenericRecordList {
static getItemType() {
return OutSystemsMapsModel.ST_31cb630f5fdaa3aa4d3dbfd37cbf9e56Structure;
}

}

tradershubModel.RL_15a080885a824b18c40f8b64d818ce41 = RL_15a080885a824b18c40f8b64d818ce41;

});

define("tradershub.model$RC_6bc3a15cc52e08ec3504e5448e5425b7", ["exports", "@outsystems/runtime-core-js", "tradershub.model", "tradershub.model$ST_bd2236af041a218c8fde06ca0065cfd9Structure"], function (exports, OSRuntimeCore, tradershubModel) {
var OS = OSRuntimeCore;
{class RC_6bc3a15cc52e08ec3504e5448e5425b7Inner extends 
OS.DataTypes.GenericRecord {
static attributesToDeclare() {
return [
this.attr("GetSettings", "getSettingsAttr", "GetSettings", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new tradershubModel.ST_bd2236af041a218c8fde06ca0065cfd9Structure());
}, true, tradershubModel.ST_bd2236af041a218c8fde06ca0065cfd9Structure)
].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
}

static fromStructure(str) {
return new RC_6bc3a15cc52e08ec3504e5448e5425b7(new RC_6bc3a15cc52e08ec3504e5448e5425b7.RecordClass({
getSettingsAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
}

}

tradershubModel.RC_6bc3a15cc52e08ec3504e5448e5425b7 = RC_6bc3a15cc52e08ec3504e5448e5425b7Inner;

RC_6bc3a15cc52e08ec3504e5448e5425b7Inner._isAnonymousRecord = true;
RC_6bc3a15cc52e08ec3504e5448e5425b7Inner.UniqueId = "6bc3a15c-c52e-08ec-3504-e5448e5425b7";
var RC_6bc3a15cc52e08ec3504e5448e5425b7 = RC_6bc3a15cc52e08ec3504e5448e5425b7Inner;
RC_6bc3a15cc52e08ec3504e5448e5425b7.init();
}
});

define("tradershub.model$RL_15ee46fbe09fe7cdf138bb1a3d8e162b", ["exports", "@outsystems/runtime-core-js", "tradershub.model", "tradershub.model$RC_6bc3a15cc52e08ec3504e5448e5425b7"], function (exports, OSRuntimeCore, tradershubModel) {
var OS = OSRuntimeCore;
class RL_15ee46fbe09fe7cdf138bb1a3d8e162b extends 
OS.DataTypes.GenericRecordList {
static getItemType() {
return tradershubModel.RC_6bc3a15cc52e08ec3504e5448e5425b7;
}

}

tradershubModel.RL_15ee46fbe09fe7cdf138bb1a3d8e162b = RL_15ee46fbe09fe7cdf138bb1a3d8e162b;

});

define("tradershub.model$RC_3ba1d238c8e0f0c3e875fb37f0381cc6", ["exports", "@outsystems/runtime-core-js", "OutSystemsUI.model", "tradershub.model", "OutSystemsUI.model$EN_8d4f783227026ce93d50126c7f028443EntityRecord", "tradershub.referencesHealth", "tradershub.referencesHealth$OutSystemsUI"], function (exports, OSRuntimeCore, OutSystemsUIModel, tradershubModel) {
var OS = OSRuntimeCore;
{class RC_3ba1d238c8e0f0c3e875fb37f0381cc6Inner extends 
OS.DataTypes.GenericRecord {
static attributesToDeclare() {
return [
this.attr("Orientation", "orientationAttr", "Orientation", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new OutSystemsUIModel.EN_8d4f783227026ce93d50126c7f028443EntityRecord());
}, true, OutSystemsUIModel.EN_8d4f783227026ce93d50126c7f028443EntityRecord)
].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
}

static fromStructure(str) {
return new RC_3ba1d238c8e0f0c3e875fb37f0381cc6(new RC_3ba1d238c8e0f0c3e875fb37f0381cc6.RecordClass({
orientationAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
}

}

tradershubModel.RC_3ba1d238c8e0f0c3e875fb37f0381cc6 = RC_3ba1d238c8e0f0c3e875fb37f0381cc6Inner;

RC_3ba1d238c8e0f0c3e875fb37f0381cc6Inner._isAnonymousRecord = true;
RC_3ba1d238c8e0f0c3e875fb37f0381cc6Inner.UniqueId = "3ba1d238-c8e0-f0c3-e875-fb37f0381cc6";
var RC_3ba1d238c8e0f0c3e875fb37f0381cc6 = RC_3ba1d238c8e0f0c3e875fb37f0381cc6Inner;
RC_3ba1d238c8e0f0c3e875fb37f0381cc6.init();
}
});

define("tradershub.model$RL_1608d9419ce68c1bc879636bc5f915cc", ["exports", "@outsystems/runtime-core-js", "tradershub.model", "tradershub.model$RC_3ba1d238c8e0f0c3e875fb37f0381cc6"], function (exports, OSRuntimeCore, tradershubModel) {
var OS = OSRuntimeCore;
class RL_1608d9419ce68c1bc879636bc5f915cc extends 
OS.DataTypes.GenericRecordList {
static getItemType() {
return tradershubModel.RC_3ba1d238c8e0f0c3e875fb37f0381cc6;
}

}

tradershubModel.RL_1608d9419ce68c1bc879636bc5f915cc = RL_1608d9419ce68c1bc879636bc5f915cc;

});

define("tradershub.model$RL_1659ef22005bb5893eb1c95011619009", ["exports", "@outsystems/runtime-core-js", "RESTAPIWebsocket.model", "tradershub.model", "RESTAPIWebsocket.model$ST_6e7638d850b78b46a75a04e2dcd58f58Structure", "tradershub.referencesHealth", "tradershub.referencesHealth$RESTAPIWebsocket"], function (exports, OSRuntimeCore, RESTAPIWebsocketModel, tradershubModel) {
var OS = OSRuntimeCore;
class RL_1659ef22005bb5893eb1c95011619009 extends 
OS.DataTypes.GenericRecordList {
static getItemType() {
return RESTAPIWebsocketModel.ST_6e7638d850b78b46a75a04e2dcd58f58Structure;
}

}

tradershubModel.RL_1659ef22005bb5893eb1c95011619009 = RL_1659ef22005bb5893eb1c95011619009;

});

define("tradershub.model$RC_1742d8ab89945a84e5474f54422034d5", ["exports", "@outsystems/runtime-core-js", "tradershub.model", "tradershub.model$ST_9040ff9a31163603cbfef38781e8f440Structure"], function (exports, OSRuntimeCore, tradershubModel) {
var OS = OSRuntimeCore;
{class RC_1742d8ab89945a84e5474f54422034d5Inner extends 
OS.DataTypes.GenericRecord {
static attributesToDeclare() {
return [
this.attr("Fiat", "fiatAttr", "Fiat", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new tradershubModel.ST_9040ff9a31163603cbfef38781e8f440Structure());
}, true, tradershubModel.ST_9040ff9a31163603cbfef38781e8f440Structure)
].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
}

static fromStructure(str) {
return new RC_1742d8ab89945a84e5474f54422034d5(new RC_1742d8ab89945a84e5474f54422034d5.RecordClass({
fiatAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
}

}

tradershubModel.RC_1742d8ab89945a84e5474f54422034d5 = RC_1742d8ab89945a84e5474f54422034d5Inner;

RC_1742d8ab89945a84e5474f54422034d5Inner._isAnonymousRecord = true;
RC_1742d8ab89945a84e5474f54422034d5Inner.UniqueId = "1742d8ab-8994-5a84-e547-4f54422034d5";
var RC_1742d8ab89945a84e5474f54422034d5 = RC_1742d8ab89945a84e5474f54422034d5Inner;
RC_1742d8ab89945a84e5474f54422034d5.init();
}
});

define("tradershub.model$RC_1853d9cad672ded9659195b8c9a3f707", ["exports", "@outsystems/runtime-core-js", "tradershub.model", "tradershub.model$ST_739ced57b6317085dd90ed93a3159f3eStructure"], function (exports, OSRuntimeCore, tradershubModel) {
var OS = OSRuntimeCore;
{class RC_1853d9cad672ded9659195b8c9a3f707Inner extends 
OS.DataTypes.GenericRecord {
static attributesToDeclare() {
return [
this.attr("National_id", "national_idAttr", "National_id", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new tradershubModel.ST_739ced57b6317085dd90ed93a3159f3eStructure());
}, true, tradershubModel.ST_739ced57b6317085dd90ed93a3159f3eStructure)
].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
}

static fromStructure(str) {
return new RC_1853d9cad672ded9659195b8c9a3f707(new RC_1853d9cad672ded9659195b8c9a3f707.RecordClass({
national_idAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
}

}

tradershubModel.RC_1853d9cad672ded9659195b8c9a3f707 = RC_1853d9cad672ded9659195b8c9a3f707Inner;

RC_1853d9cad672ded9659195b8c9a3f707Inner._isAnonymousRecord = true;
RC_1853d9cad672ded9659195b8c9a3f707Inner.UniqueId = "1853d9ca-d672-ded9-6591-95b8c9a3f707";
var RC_1853d9cad672ded9659195b8c9a3f707 = RC_1853d9cad672ded9659195b8c9a3f707Inner;
RC_1853d9cad672ded9659195b8c9a3f707.init();
}
});

define("tradershub.model$ST_aed452511cf537505102a57a65fea54cStructure", ["exports", "@outsystems/runtime-core-js", "tradershub.model"], function (exports, OSRuntimeCore, tradershubModel) {
var OS = OSRuntimeCore;
{class ST_aed452511cf537505102a57a65fea54cStructureInner extends 
OS.DataTypes.GenericRecord {
static attributesToDeclare() {
return [
this.attr("BR", "bRAttr", "BR", false, false, OS.DataTypes.DataTypes.LongInteger, function () {
return OS.DataTypes.LongInteger.defaultValue;
}, true), 
this.attr("BW", "bWAttr", "BW", false, false, OS.DataTypes.DataTypes.LongInteger, function () {
return OS.DataTypes.LongInteger.defaultValue;
}, true), 
this.attr("ID", "iDAttr", "ID", false, false, OS.DataTypes.DataTypes.LongInteger, function () {
return OS.DataTypes.LongInteger.defaultValue;
}, true), 
this.attr("IN", "iNAttr", "IN", false, false, OS.DataTypes.DataTypes.LongInteger, function () {
return OS.DataTypes.LongInteger.defaultValue;
}, true), 
this.attr("KE", "kEAttr", "KE", false, false, OS.DataTypes.DataTypes.LongInteger, function () {
return OS.DataTypes.LongInteger.defaultValue;
}, true), 
this.attr("LK", "lKAttr", "LK", false, false, OS.DataTypes.DataTypes.LongInteger, function () {
return OS.DataTypes.LongInteger.defaultValue;
}, true), 
this.attr("NG", "nGAttr", "NG", false, false, OS.DataTypes.DataTypes.LongInteger, function () {
return OS.DataTypes.LongInteger.defaultValue;
}, true), 
this.attr("TZ", "tZAttr", "TZ", false, false, OS.DataTypes.DataTypes.LongInteger, function () {
return OS.DataTypes.LongInteger.defaultValue;
}, true), 
this.attr("ZA", "zAAttr", "ZA", false, false, OS.DataTypes.DataTypes.LongInteger, function () {
return OS.DataTypes.LongInteger.defaultValue;
}, true), 
this.attr("ZW", "zWAttr", "ZW", false, false, OS.DataTypes.DataTypes.LongInteger, function () {
return OS.DataTypes.LongInteger.defaultValue;
}, true), 
this.attr("Default", "defaultAttr", "default", false, false, OS.DataTypes.DataTypes.LongInteger, function () {
return OS.DataTypes.LongInteger.defaultValue;
}, true)
].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
}

}

tradershubModel.ST_aed452511cf537505102a57a65fea54cStructure = ST_aed452511cf537505102a57a65fea54cStructureInner;

var ST_aed452511cf537505102a57a65fea54cStructure = ST_aed452511cf537505102a57a65fea54cStructureInner;
ST_aed452511cf537505102a57a65fea54cStructure.init();
}
});

define("tradershub.model$ST_c9354c8209eb9723d55bc21a92e84a3aStructure", ["exports", "@outsystems/runtime-core-js", "tradershub.model", "tradershub.model$ST_aed452511cf537505102a57a65fea54cStructure"], function (exports, OSRuntimeCore, tradershubModel) {
var OS = OSRuntimeCore;
{class ST_c9354c8209eb9723d55bc21a92e84a3aStructureInner extends 
OS.DataTypes.GenericRecord {
static attributesToDeclare() {
return [
this.attr("Initial_deposit_per_country", "initial_deposit_per_countryAttr", "initial_deposit_per_country", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new tradershubModel.ST_aed452511cf537505102a57a65fea54cStructure());
}, true, tradershubModel.ST_aed452511cf537505102a57a65fea54cStructure)
].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
}

static fromStructure(str) {
return new ST_c9354c8209eb9723d55bc21a92e84a3aStructure(new ST_c9354c8209eb9723d55bc21a92e84a3aStructure.RecordClass({
initial_deposit_per_countryAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
}

}

tradershubModel.ST_c9354c8209eb9723d55bc21a92e84a3aStructure = ST_c9354c8209eb9723d55bc21a92e84a3aStructureInner;

var ST_c9354c8209eb9723d55bc21a92e84a3aStructure = ST_c9354c8209eb9723d55bc21a92e84a3aStructureInner;
ST_c9354c8209eb9723d55bc21a92e84a3aStructure.init();
}
});

define("tradershub.model$RC_3e278c15faa007bccdca42414a717810", ["exports", "@outsystems/runtime-core-js", "tradershub.model", "tradershub.model$ST_c9354c8209eb9723d55bc21a92e84a3aStructure"], function (exports, OSRuntimeCore, tradershubModel) {
var OS = OSRuntimeCore;
{class RC_3e278c15faa007bccdca42414a717810Inner extends 
OS.DataTypes.GenericRecord {
static attributesToDeclare() {
return [
this.attr("Payment_agent", "payment_agentAttr", "Payment_agent", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new tradershubModel.ST_c9354c8209eb9723d55bc21a92e84a3aStructure());
}, true, tradershubModel.ST_c9354c8209eb9723d55bc21a92e84a3aStructure)
].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
}

static fromStructure(str) {
return new RC_3e278c15faa007bccdca42414a717810(new RC_3e278c15faa007bccdca42414a717810.RecordClass({
payment_agentAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
}

}

tradershubModel.RC_3e278c15faa007bccdca42414a717810 = RC_3e278c15faa007bccdca42414a717810Inner;

RC_3e278c15faa007bccdca42414a717810Inner._isAnonymousRecord = true;
RC_3e278c15faa007bccdca42414a717810Inner.UniqueId = "3e278c15-faa0-07bc-cdca-42414a717810";
var RC_3e278c15faa007bccdca42414a717810 = RC_3e278c15faa007bccdca42414a717810Inner;
RC_3e278c15faa007bccdca42414a717810.init();
}
});

define("tradershub.model$RL_1877a0bf65882e17598cb03c8ccde386", ["exports", "@outsystems/runtime-core-js", "tradershub.model", "tradershub.model$RC_3e278c15faa007bccdca42414a717810"], function (exports, OSRuntimeCore, tradershubModel) {
var OS = OSRuntimeCore;
class RL_1877a0bf65882e17598cb03c8ccde386 extends 
OS.DataTypes.GenericRecordList {
static getItemType() {
return tradershubModel.RC_3e278c15faa007bccdca42414a717810;
}

}

tradershubModel.RL_1877a0bf65882e17598cb03c8ccde386 = RL_1877a0bf65882e17598cb03c8ccde386;

});

define("tradershub.model$RL_18994bd1cd31a465f2635a0d68fa478a", ["exports", "@outsystems/runtime-core-js", "RESTAPIWebsocket.model", "tradershub.model", "RESTAPIWebsocket.model$ST_72e91b438c2e206bca7398a7a69902dfStructure", "tradershub.referencesHealth", "tradershub.referencesHealth$RESTAPIWebsocket"], function (exports, OSRuntimeCore, RESTAPIWebsocketModel, tradershubModel) {
var OS = OSRuntimeCore;
class RL_18994bd1cd31a465f2635a0d68fa478a extends 
OS.DataTypes.GenericRecordList {
static getItemType() {
return RESTAPIWebsocketModel.ST_72e91b438c2e206bca7398a7a69902dfStructure;
}

}

tradershubModel.RL_18994bd1cd31a465f2635a0d68fa478a = RL_18994bd1cd31a465f2635a0d68fa478a;

});

define("tradershub.model$EN_18a161aea4f6fead5f823df7320c3dd0EntityRecord", ["exports", "@outsystems/runtime-core-js", "tradershub.model"], function (exports, OSRuntimeCore, tradershubModel) {
var OS = OSRuntimeCore;
{class EN_18a161aea4f6fead5f823df7320c3dd0EntityRecordInner extends 
OS.DataTypes.GenericRecord {
static attributesToDeclare() {
return [
this.attr("Id", "idAttr", "Id", true, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true), 
this.attr("Label", "labelAttr", "Label", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Order", "orderAttr", "Order", true, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true), 
this.attr("Is_Active", "is_ActiveAttr", "Is_Active", true, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, true)
].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
}

}

tradershubModel.EN_18a161aea4f6fead5f823df7320c3dd0EntityRecord = EN_18a161aea4f6fead5f823df7320c3dd0EntityRecordInner;

var EN_18a161aea4f6fead5f823df7320c3dd0EntityRecord = EN_18a161aea4f6fead5f823df7320c3dd0EntityRecordInner;
EN_18a161aea4f6fead5f823df7320c3dd0EntityRecord.init();
}
});

define("tradershub.model$RL_18eaeddec5c9c8e43211a24af7fe76c5", ["exports", "@outsystems/runtime-core-js", "tradershub.model", "tradershub.model$ST_bd2236af041a218c8fde06ca0065cfd9Structure"], function (exports, OSRuntimeCore, tradershubModel) {
var OS = OSRuntimeCore;
class RL_18eaeddec5c9c8e43211a24af7fe76c5 extends 
OS.DataTypes.GenericRecordList {
static getItemType() {
return tradershubModel.ST_bd2236af041a218c8fde06ca0065cfd9Structure;
}

}

tradershubModel.RL_18eaeddec5c9c8e43211a24af7fe76c5 = RL_18eaeddec5c9c8e43211a24af7fe76c5;

});

define("tradershub.model$RC_19aa89641c7398ceacf4370c69126f64", ["exports", "@outsystems/runtime-core-js", "RESTAPIWebsocket.model", "tradershub.model", "RESTAPIWebsocket.model$ST_1c923b28044712e7268167783ecfdfbeStructure", "tradershub.referencesHealth", "tradershub.referencesHealth$RESTAPIWebsocket"], function (exports, OSRuntimeCore, RESTAPIWebsocketModel, tradershubModel) {
var OS = OSRuntimeCore;
{class RC_19aa89641c7398ceacf4370c69126f64Inner extends 
OS.DataTypes.GenericRecord {
static attributesToDeclare() {
return [
this.attr("Tax", "taxAttr", "Tax", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new RESTAPIWebsocketModel.ST_1c923b28044712e7268167783ecfdfbeStructure());
}, true, RESTAPIWebsocketModel.ST_1c923b28044712e7268167783ecfdfbeStructure)
].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
}

static fromStructure(str) {
return new RC_19aa89641c7398ceacf4370c69126f64(new RC_19aa89641c7398ceacf4370c69126f64.RecordClass({
taxAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
}

}

tradershubModel.RC_19aa89641c7398ceacf4370c69126f64 = RC_19aa89641c7398ceacf4370c69126f64Inner;

RC_19aa89641c7398ceacf4370c69126f64Inner._isAnonymousRecord = true;
RC_19aa89641c7398ceacf4370c69126f64Inner.UniqueId = "19aa8964-1c73-98ce-acf4-370c69126f64";
var RC_19aa89641c7398ceacf4370c69126f64 = RC_19aa89641c7398ceacf4370c69126f64Inner;
RC_19aa89641c7398ceacf4370c69126f64.init();
}
});

define("tradershub.model$RC_921fa6e77c3b219d20f6b75a60029eef", ["exports", "@outsystems/runtime-core-js", "tradershub.model", "tradershub.model$ST_1eac13b44db3d2db577291973f4a7e96Structure"], function (exports, OSRuntimeCore, tradershubModel) {
var OS = OSRuntimeCore;
{class RC_921fa6e77c3b219d20f6b75a60029eefInner extends 
OS.DataTypes.GenericRecord {
static attributesToDeclare() {
return [
this.attr("Residence", "residenceAttr", "Residence", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new tradershubModel.ST_1eac13b44db3d2db577291973f4a7e96Structure());
}, true, tradershubModel.ST_1eac13b44db3d2db577291973f4a7e96Structure)
].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
}

static fromStructure(str) {
return new RC_921fa6e77c3b219d20f6b75a60029eef(new RC_921fa6e77c3b219d20f6b75a60029eef.RecordClass({
residenceAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
}

}

tradershubModel.RC_921fa6e77c3b219d20f6b75a60029eef = RC_921fa6e77c3b219d20f6b75a60029eefInner;

RC_921fa6e77c3b219d20f6b75a60029eefInner._isAnonymousRecord = true;
RC_921fa6e77c3b219d20f6b75a60029eefInner.UniqueId = "921fa6e7-7c3b-219d-20f6-b75a60029eef";
var RC_921fa6e77c3b219d20f6b75a60029eef = RC_921fa6e77c3b219d20f6b75a60029eefInner;
RC_921fa6e77c3b219d20f6b75a60029eef.init();
}
});

define("tradershub.model$RL_19d0e04672e5e44e7b74e60c279aaebe", ["exports", "@outsystems/runtime-core-js", "tradershub.model", "tradershub.model$RC_921fa6e77c3b219d20f6b75a60029eef"], function (exports, OSRuntimeCore, tradershubModel) {
var OS = OSRuntimeCore;
class RL_19d0e04672e5e44e7b74e60c279aaebe extends 
OS.DataTypes.GenericRecordList {
static getItemType() {
return tradershubModel.RC_921fa6e77c3b219d20f6b75a60029eef;
}

}

tradershubModel.RL_19d0e04672e5e44e7b74e60c279aaebe = RL_19d0e04672e5e44e7b74e60c279aaebe;

});

define("tradershub.model$RL_19efe67c3ea3fa4b4b07aaa801b42f8c", ["exports", "@outsystems/runtime-core-js", "OutSystemsUI.model", "tradershub.model", "OutSystemsUI.model$EN_52e55d60c515b6016f81404afb220594EntityRecord", "tradershub.referencesHealth", "tradershub.referencesHealth$OutSystemsUI"], function (exports, OSRuntimeCore, OutSystemsUIModel, tradershubModel) {
var OS = OSRuntimeCore;
class RL_19efe67c3ea3fa4b4b07aaa801b42f8c extends 
OS.DataTypes.GenericRecordList {
static getItemType() {
return OutSystemsUIModel.EN_52e55d60c515b6016f81404afb220594EntityRecord;
}

}

tradershubModel.RL_19efe67c3ea3fa4b4b07aaa801b42f8c = RL_19efe67c3ea3fa4b4b07aaa801b42f8c;

});

define("tradershub.model$RC_c6831d06e579de4edbcf59e128b60b13", ["exports", "@outsystems/runtime-core-js", "OutSystemsUI.model", "tradershub.model", "OutSystemsUI.model$EN_c3a2475ae6370a2f746040280495b4a2EntityRecord", "tradershub.referencesHealth", "tradershub.referencesHealth$OutSystemsUI"], function (exports, OSRuntimeCore, OutSystemsUIModel, tradershubModel) {
var OS = OSRuntimeCore;
{class RC_c6831d06e579de4edbcf59e128b60b13Inner extends 
OS.DataTypes.GenericRecord {
static attributesToDeclare() {
return [
this.attr("Autoplay", "autoplayAttr", "Autoplay", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new OutSystemsUIModel.EN_c3a2475ae6370a2f746040280495b4a2EntityRecord());
}, true, OutSystemsUIModel.EN_c3a2475ae6370a2f746040280495b4a2EntityRecord)
].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
}

static fromStructure(str) {
return new RC_c6831d06e579de4edbcf59e128b60b13(new RC_c6831d06e579de4edbcf59e128b60b13.RecordClass({
autoplayAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
}

}

tradershubModel.RC_c6831d06e579de4edbcf59e128b60b13 = RC_c6831d06e579de4edbcf59e128b60b13Inner;

RC_c6831d06e579de4edbcf59e128b60b13Inner._isAnonymousRecord = true;
RC_c6831d06e579de4edbcf59e128b60b13Inner.UniqueId = "c6831d06-e579-de4e-dbcf-59e128b60b13";
var RC_c6831d06e579de4edbcf59e128b60b13 = RC_c6831d06e579de4edbcf59e128b60b13Inner;
RC_c6831d06e579de4edbcf59e128b60b13.init();
}
});

define("tradershub.model$RL_1a211c52d9450d4da06f34c1b8aa3b76", ["exports", "@outsystems/runtime-core-js", "tradershub.model", "tradershub.model$RC_c6831d06e579de4edbcf59e128b60b13"], function (exports, OSRuntimeCore, tradershubModel) {
var OS = OSRuntimeCore;
class RL_1a211c52d9450d4da06f34c1b8aa3b76 extends 
OS.DataTypes.GenericRecordList {
static getItemType() {
return tradershubModel.RC_c6831d06e579de4edbcf59e128b60b13;
}

}

tradershubModel.RL_1a211c52d9450d4da06f34c1b8aa3b76 = RL_1a211c52d9450d4da06f34c1b8aa3b76;

});

define("tradershub.model$RC_39bf756e3f1604202cf1d7ac5fb3b260", ["exports", "@outsystems/runtime-core-js", "RESTAPIWebsocket.model", "tradershub.model", "RESTAPIWebsocket.model$ST_8ddbf1b6e2eccc5a160b5fab6b9b9b86Structure", "tradershub.referencesHealth", "tradershub.referencesHealth$RESTAPIWebsocket"], function (exports, OSRuntimeCore, RESTAPIWebsocketModel, tradershubModel) {
var OS = OSRuntimeCore;
{class RC_39bf756e3f1604202cf1d7ac5fb3b260Inner extends 
OS.DataTypes.GenericRecord {
static attributesToDeclare() {
return [
this.attr("Mt_financial_company", "mt_financial_companyAttr", "Mt_financial_company", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new RESTAPIWebsocketModel.ST_8ddbf1b6e2eccc5a160b5fab6b9b9b86Structure());
}, true, RESTAPIWebsocketModel.ST_8ddbf1b6e2eccc5a160b5fab6b9b9b86Structure)
].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
}

static fromStructure(str) {
return new RC_39bf756e3f1604202cf1d7ac5fb3b260(new RC_39bf756e3f1604202cf1d7ac5fb3b260.RecordClass({
mt_financial_companyAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
}

}

tradershubModel.RC_39bf756e3f1604202cf1d7ac5fb3b260 = RC_39bf756e3f1604202cf1d7ac5fb3b260Inner;

RC_39bf756e3f1604202cf1d7ac5fb3b260Inner._isAnonymousRecord = true;
RC_39bf756e3f1604202cf1d7ac5fb3b260Inner.UniqueId = "39bf756e-3f16-0420-2cf1-d7ac5fb3b260";
var RC_39bf756e3f1604202cf1d7ac5fb3b260 = RC_39bf756e3f1604202cf1d7ac5fb3b260Inner;
RC_39bf756e3f1604202cf1d7ac5fb3b260.init();
}
});

define("tradershub.model$RL_1a2d97d3def0e6b808795f4f98a3a588", ["exports", "@outsystems/runtime-core-js", "tradershub.model", "tradershub.model$RC_39bf756e3f1604202cf1d7ac5fb3b260"], function (exports, OSRuntimeCore, tradershubModel) {
var OS = OSRuntimeCore;
class RL_1a2d97d3def0e6b808795f4f98a3a588 extends 
OS.DataTypes.GenericRecordList {
static getItemType() {
return tradershubModel.RC_39bf756e3f1604202cf1d7ac5fb3b260;
}

}

tradershubModel.RL_1a2d97d3def0e6b808795f4f98a3a588 = RL_1a2d97d3def0e6b808795f4f98a3a588;

});

define("tradershub.model$ST_7ec9f9f71a508e65d3bd48bc2778f754Structure", ["exports", "@outsystems/runtime-core-js", "tradershub.model"], function (exports, OSRuntimeCore, tradershubModel) {
var OS = OSRuntimeCore;
{class ST_7ec9f9f71a508e65d3bd48bc2778f754StructureInner extends 
OS.DataTypes.GenericRecord {
static attributesToDeclare() {
return [
this.attr("Applies_to", "applies_toAttr", "applies_to", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Max", "maxAttr", "max", false, false, OS.DataTypes.DataTypes.LongInteger, function () {
return OS.DataTypes.LongInteger.defaultValue;
}, true)
].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
}

}

tradershubModel.ST_7ec9f9f71a508e65d3bd48bc2778f754Structure = ST_7ec9f9f71a508e65d3bd48bc2778f754StructureInner;

var ST_7ec9f9f71a508e65d3bd48bc2778f754Structure = ST_7ec9f9f71a508e65d3bd48bc2778f754StructureInner;
ST_7ec9f9f71a508e65d3bd48bc2778f754Structure.init();
}
});

define("tradershub.model$ST_2dae613205bb81a0382059f7840afedcStructure", ["exports", "@outsystems/runtime-core-js", "tradershub.model"], function (exports, OSRuntimeCore, tradershubModel) {
var OS = OSRuntimeCore;
{class ST_2dae613205bb81a0382059f7840afedcStructureInner extends 
OS.DataTypes.GenericRecord {
static attributesToDeclare() {
return [
this.attr("Applies_to", "applies_toAttr", "applies_to", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Hourly", "hourlyAttr", "hourly", false, false, OS.DataTypes.DataTypes.LongInteger, function () {
return OS.DataTypes.LongInteger.defaultValue;
}, true), 
this.attr("Minutely", "minutelyAttr", "minutely", false, false, OS.DataTypes.DataTypes.LongInteger, function () {
return OS.DataTypes.LongInteger.defaultValue;
}, true)
].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
}

}

tradershubModel.ST_2dae613205bb81a0382059f7840afedcStructure = ST_2dae613205bb81a0382059f7840afedcStructureInner;

var ST_2dae613205bb81a0382059f7840afedcStructure = ST_2dae613205bb81a0382059f7840afedcStructureInner;
ST_2dae613205bb81a0382059f7840afedcStructure.init();
}
});

define("tradershub.model$ST_25b9b327f0c66aea511dc5895e377c2eStructure", ["exports", "@outsystems/runtime-core-js", "tradershub.model", "tradershub.model$ST_7ec9f9f71a508e65d3bd48bc2778f754Structure", "tradershub.model$ST_2dae613205bb81a0382059f7840afedcStructure"], function (exports, OSRuntimeCore, tradershubModel) {
var OS = OSRuntimeCore;
{class ST_25b9b327f0c66aea511dc5895e377c2eStructureInner extends 
OS.DataTypes.GenericRecord {
static attributesToDeclare() {
return [
this.attr("Max_proposal_subscription", "max_proposal_subscriptionAttr", "max_proposal_subscription", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new tradershubModel.ST_7ec9f9f71a508e65d3bd48bc2778f754Structure());
}, true, tradershubModel.ST_7ec9f9f71a508e65d3bd48bc2778f754Structure), 
this.attr("Max_requestes_general", "max_requestes_generalAttr", "max_requestes_general", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new tradershubModel.ST_2dae613205bb81a0382059f7840afedcStructure());
}, true, tradershubModel.ST_2dae613205bb81a0382059f7840afedcStructure), 
this.attr("Max_requests_outcome", "max_requests_outcomeAttr", "max_requests_outcome", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new tradershubModel.ST_2dae613205bb81a0382059f7840afedcStructure());
}, true, tradershubModel.ST_2dae613205bb81a0382059f7840afedcStructure), 
this.attr("Max_requests_pricing", "max_requests_pricingAttr", "max_requests_pricing", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new tradershubModel.ST_2dae613205bb81a0382059f7840afedcStructure());
}, true, tradershubModel.ST_2dae613205bb81a0382059f7840afedcStructure)
].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
}

}

tradershubModel.ST_25b9b327f0c66aea511dc5895e377c2eStructure = ST_25b9b327f0c66aea511dc5895e377c2eStructureInner;

var ST_25b9b327f0c66aea511dc5895e377c2eStructure = ST_25b9b327f0c66aea511dc5895e377c2eStructureInner;
ST_25b9b327f0c66aea511dc5895e377c2eStructure.init();
}
});

define("tradershub.model$ST_30e2edd642322834fde0261ac531b663Structure", ["exports", "@outsystems/runtime-core-js", "tradershub.model", "tradershub.model$ST_6460f355981e1f253edfbd5d857d76bdStructure", "tradershub.model$RL_12a53b3c28725edc5745777d2ebb8a76"], function (exports, OSRuntimeCore, tradershubModel) {
var OS = OSRuntimeCore;
{class ST_30e2edd642322834fde0261ac531b663StructureInner extends 
OS.DataTypes.GenericRecord {
static attributesToDeclare() {
return [
this.attr("Demo", "demoAttr", "demo", false, false, OS.DataTypes.DataTypes.RecordList, function () {
return OS.DataTypes.ImmutableBase.getData(new tradershubModel.RL_12a53b3c28725edc5745777d2ebb8a76());
}, true, tradershubModel.RL_12a53b3c28725edc5745777d2ebb8a76), 
this.attr("Real", "realAttr", "real", false, false, OS.DataTypes.DataTypes.RecordList, function () {
return OS.DataTypes.ImmutableBase.getData(new tradershubModel.RL_12a53b3c28725edc5745777d2ebb8a76());
}, true, tradershubModel.RL_12a53b3c28725edc5745777d2ebb8a76)
].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
}

}

tradershubModel.ST_30e2edd642322834fde0261ac531b663Structure = ST_30e2edd642322834fde0261ac531b663StructureInner;

var ST_30e2edd642322834fde0261ac531b663Structure = ST_30e2edd642322834fde0261ac531b663StructureInner;
ST_30e2edd642322834fde0261ac531b663Structure.init();
}
});

define("tradershub.model$ST_1a4f07e6c8d6ea2e2ddfeb34b9b7a3c8Structure", ["exports", "@outsystems/runtime-core-js", "tradershub.model", "tradershub.model$ST_25b9b327f0c66aea511dc5895e377c2eStructure", "tradershub.model$ST_152f791bd12ecebe98c991a448719621Structure", "tradershub.model$ST_258259badb7b79699a67a1a8307ba86dStructure", "tradershub.model$ST_30e2edd642322834fde0261ac531b663Structure", "tradershub.model$ST_c9354c8209eb9723d55bc21a92e84a3aStructure"], function (exports, OSRuntimeCore, tradershubModel) {
var OS = OSRuntimeCore;
{class ST_1a4f07e6c8d6ea2e2ddfeb34b9b7a3c8StructureInner extends 
OS.DataTypes.GenericRecord {
static attributesToDeclare() {
return [
this.attr("Api_call_limits", "api_call_limitsAttr", "api_call_limits", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new tradershubModel.ST_25b9b327f0c66aea511dc5895e377c2eStructure());
}, true, tradershubModel.ST_25b9b327f0c66aea511dc5895e377c2eStructure), 
this.attr("Broker_codes", "broker_codesAttr", "broker_codes", false, false, OS.DataTypes.DataTypes.RecordList, function () {
return OS.DataTypes.ImmutableBase.getData(new OS.DataTypes.TextList());
}, true, OS.DataTypes.TextList), 
this.attr("Clients_country", "clients_countryAttr", "clients_country", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Currencies_config", "currencies_configAttr", "currencies_config", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new tradershubModel.ST_152f791bd12ecebe98c991a448719621Structure());
}, true, tradershubModel.ST_152f791bd12ecebe98c991a448719621Structure), 
this.attr("Dxtrade_status", "dxtrade_statusAttr", "dxtrade_status", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new tradershubModel.ST_258259badb7b79699a67a1a8307ba86dStructure());
}, true, tradershubModel.ST_258259badb7b79699a67a1a8307ba86dStructure), 
this.attr("Mt5_status", "mt5_statusAttr", "mt5_status", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new tradershubModel.ST_30e2edd642322834fde0261ac531b663Structure());
}, true, tradershubModel.ST_30e2edd642322834fde0261ac531b663Structure), 
this.attr("Payment_agents", "payment_agentsAttr", "payment_agents", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new tradershubModel.ST_c9354c8209eb9723d55bc21a92e84a3aStructure());
}, true, tradershubModel.ST_c9354c8209eb9723d55bc21a92e84a3aStructure), 
this.attr("Site_status", "site_statusAttr", "site_status", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Supported_languages", "supported_languagesAttr", "supported_languages", false, false, OS.DataTypes.DataTypes.RecordList, function () {
return OS.DataTypes.ImmutableBase.getData(new OS.DataTypes.TextList());
}, true, OS.DataTypes.TextList), 
this.attr("Terms_conditions_version", "terms_conditions_versionAttr", "terms_conditions_version", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true)
].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
}

}

tradershubModel.ST_1a4f07e6c8d6ea2e2ddfeb34b9b7a3c8Structure = ST_1a4f07e6c8d6ea2e2ddfeb34b9b7a3c8StructureInner;

var ST_1a4f07e6c8d6ea2e2ddfeb34b9b7a3c8Structure = ST_1a4f07e6c8d6ea2e2ddfeb34b9b7a3c8StructureInner;
ST_1a4f07e6c8d6ea2e2ddfeb34b9b7a3c8Structure.init();
}
});

define("tradershub.model$ST_8b73f10a0c950b9427aef4a06a80a213Structure", ["exports", "@outsystems/runtime-core-js", "tradershub.model"], function (exports, OSRuntimeCore, tradershubModel) {
var OS = OSRuntimeCore;
{class ST_8b73f10a0c950b9427aef4a06a80a213StructureInner extends 
OS.DataTypes.GenericRecord {
static attributesToDeclare() {
return [
this.attr("Client_id", "client_idAttr", "client_id", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Currency", "currencyAttr", "currency", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Currency_type", "currency_typeAttr", "currency_type", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Landing_company", "landing_companyAttr", "landing_company", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Landing_company_shortcode", "landing_company_shortcodeAttr", "landing_company_shortcode", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Oauth_token", "oauth_tokenAttr", "oauth_token", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true)
].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
}

}

tradershubModel.ST_8b73f10a0c950b9427aef4a06a80a213Structure = ST_8b73f10a0c950b9427aef4a06a80a213StructureInner;

var ST_8b73f10a0c950b9427aef4a06a80a213Structure = ST_8b73f10a0c950b9427aef4a06a80a213StructureInner;
ST_8b73f10a0c950b9427aef4a06a80a213Structure.init();
}
});

define("tradershub.model$ST_1a99e1302699632bd3158595a2dd8d57Structure", ["exports", "@outsystems/runtime-core-js", "tradershub.model", "tradershub.model$ST_8b73f10a0c950b9427aef4a06a80a213Structure"], function (exports, OSRuntimeCore, tradershubModel) {
var OS = OSRuntimeCore;
{class ST_1a99e1302699632bd3158595a2dd8d57StructureInner extends 
OS.DataTypes.GenericRecord {
static attributesToDeclare() {
return [
this.attr("New_account_real", "new_account_realAttr", "new_account_real", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new tradershubModel.ST_8b73f10a0c950b9427aef4a06a80a213Structure());
}, true, tradershubModel.ST_8b73f10a0c950b9427aef4a06a80a213Structure)
].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
}

static fromStructure(str) {
return new ST_1a99e1302699632bd3158595a2dd8d57Structure(new ST_1a99e1302699632bd3158595a2dd8d57Structure.RecordClass({
new_account_realAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
}

}

tradershubModel.ST_1a99e1302699632bd3158595a2dd8d57Structure = ST_1a99e1302699632bd3158595a2dd8d57StructureInner;

var ST_1a99e1302699632bd3158595a2dd8d57Structure = ST_1a99e1302699632bd3158595a2dd8d57StructureInner;
ST_1a99e1302699632bd3158595a2dd8d57Structure.init();
}
});

define("tradershub.model$RC_1b2532ef629f2b3259beb09a3dc495b4", ["exports", "@outsystems/runtime-core-js", "RESTAPIWebsocket.model", "tradershub.model", "RESTAPIWebsocket.model$ST_0543ba6e58ccc819d0ba65db33df025eStructure", "tradershub.referencesHealth", "tradershub.referencesHealth$RESTAPIWebsocket"], function (exports, OSRuntimeCore, RESTAPIWebsocketModel, tradershubModel) {
var OS = OSRuntimeCore;
{class RC_1b2532ef629f2b3259beb09a3dc495b4Inner extends 
OS.DataTypes.GenericRecord {
static attributesToDeclare() {
return [
this.attr("Feature_flag", "feature_flagAttr", "Feature_flag", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new RESTAPIWebsocketModel.ST_0543ba6e58ccc819d0ba65db33df025eStructure());
}, true, RESTAPIWebsocketModel.ST_0543ba6e58ccc819d0ba65db33df025eStructure)
].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
}

static fromStructure(str) {
return new RC_1b2532ef629f2b3259beb09a3dc495b4(new RC_1b2532ef629f2b3259beb09a3dc495b4.RecordClass({
feature_flagAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
}

}

tradershubModel.RC_1b2532ef629f2b3259beb09a3dc495b4 = RC_1b2532ef629f2b3259beb09a3dc495b4Inner;

RC_1b2532ef629f2b3259beb09a3dc495b4Inner._isAnonymousRecord = true;
RC_1b2532ef629f2b3259beb09a3dc495b4Inner.UniqueId = "1b2532ef-629f-2b32-59be-b09a3dc495b4";
var RC_1b2532ef629f2b3259beb09a3dc495b4 = RC_1b2532ef629f2b3259beb09a3dc495b4Inner;
RC_1b2532ef629f2b3259beb09a3dc495b4.init();
}
});

define("tradershub.model$RC_1b25d6a078a2b54dc46acf86c7e61fc3", ["exports", "@outsystems/runtime-core-js", "OutSystemsMaps.model", "tradershub.model", "OutSystemsMaps.model$ST_7f8762cb0c77867d9f9e3b82fd927c7bStructure", "tradershub.referencesHealth", "tradershub.referencesHealth$OutSystemsMaps"], function (exports, OSRuntimeCore, OutSystemsMapsModel, tradershubModel) {
var OS = OSRuntimeCore;
{class RC_1b25d6a078a2b54dc46acf86c7e61fc3Inner extends 
OS.DataTypes.GenericRecord {
static attributesToDeclare() {
return [
this.attr("Fill", "fillAttr", "Fill", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new OutSystemsMapsModel.ST_7f8762cb0c77867d9f9e3b82fd927c7bStructure());
}, true, OutSystemsMapsModel.ST_7f8762cb0c77867d9f9e3b82fd927c7bStructure)
].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
}

static fromStructure(str) {
return new RC_1b25d6a078a2b54dc46acf86c7e61fc3(new RC_1b25d6a078a2b54dc46acf86c7e61fc3.RecordClass({
fillAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
}

}

tradershubModel.RC_1b25d6a078a2b54dc46acf86c7e61fc3 = RC_1b25d6a078a2b54dc46acf86c7e61fc3Inner;

RC_1b25d6a078a2b54dc46acf86c7e61fc3Inner._isAnonymousRecord = true;
RC_1b25d6a078a2b54dc46acf86c7e61fc3Inner.UniqueId = "1b25d6a0-78a2-b54d-c46a-cf86c7e61fc3";
var RC_1b25d6a078a2b54dc46acf86c7e61fc3 = RC_1b25d6a078a2b54dc46acf86c7e61fc3Inner;
RC_1b25d6a078a2b54dc46acf86c7e61fc3.init();
}
});

define("tradershub.model$RC_ea9565ddc265550c2d38c39dc154035f", ["exports", "@outsystems/runtime-core-js", "RESTAPIWebsocket.model", "tradershub.model", "RESTAPIWebsocket.model$ST_113226709b84b71c70ebd50296313568Structure", "tradershub.referencesHealth", "tradershub.referencesHealth$RESTAPIWebsocket"], function (exports, OSRuntimeCore, RESTAPIWebsocketModel, tradershubModel) {
var OS = OSRuntimeCore;
{class RC_ea9565ddc265550c2d38c39dc154035fInner extends 
OS.DataTypes.GenericRecord {
static attributesToDeclare() {
return [
this.attr("Turnover", "turnoverAttr", "Turnover", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new RESTAPIWebsocketModel.ST_113226709b84b71c70ebd50296313568Structure());
}, true, RESTAPIWebsocketModel.ST_113226709b84b71c70ebd50296313568Structure)
].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
}

static fromStructure(str) {
return new RC_ea9565ddc265550c2d38c39dc154035f(new RC_ea9565ddc265550c2d38c39dc154035f.RecordClass({
turnoverAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
}

}

tradershubModel.RC_ea9565ddc265550c2d38c39dc154035f = RC_ea9565ddc265550c2d38c39dc154035fInner;

RC_ea9565ddc265550c2d38c39dc154035fInner._isAnonymousRecord = true;
RC_ea9565ddc265550c2d38c39dc154035fInner.UniqueId = "ea9565dd-c265-550c-2d38-c39dc154035f";
var RC_ea9565ddc265550c2d38c39dc154035f = RC_ea9565ddc265550c2d38c39dc154035fInner;
RC_ea9565ddc265550c2d38c39dc154035f.init();
}
});

define("tradershub.model$RL_1b71a02dea96d4cd97c73eba8bb674c6", ["exports", "@outsystems/runtime-core-js", "tradershub.model", "tradershub.model$RC_ea9565ddc265550c2d38c39dc154035f"], function (exports, OSRuntimeCore, tradershubModel) {
var OS = OSRuntimeCore;
class RL_1b71a02dea96d4cd97c73eba8bb674c6 extends 
OS.DataTypes.GenericRecordList {
static getItemType() {
return tradershubModel.RC_ea9565ddc265550c2d38c39dc154035f;
}

}

tradershubModel.RL_1b71a02dea96d4cd97c73eba8bb674c6 = RL_1b71a02dea96d4cd97c73eba8bb674c6;

});

define("tradershub.model$RC_1ba3db8c7175cd095b4f1a36c3a1e53d", ["exports", "@outsystems/runtime-core-js", "System_.model", "tradershub.model", "System_.model$FinishResetPasswordFailureReasonRec", "tradershub.referencesHealth", "tradershub.referencesHealth$System_"], function (exports, OSRuntimeCore, System_Model, tradershubModel) {
var OS = OSRuntimeCore;
{class RC_1ba3db8c7175cd095b4f1a36c3a1e53dInner extends 
OS.DataTypes.GenericRecord {
static attributesToDeclare() {
return [
this.attr("FinishResetPasswordFailureReason", "finishResetPasswordFailureReasonAttr", "FinishResetPasswordFailureReason", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new OS.SystemStructures.FinishResetPasswordFailureReasonRec());
}, true, OS.SystemStructures.FinishResetPasswordFailureReasonRec)
].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
}

static fromStructure(str) {
return new RC_1ba3db8c7175cd095b4f1a36c3a1e53d(new RC_1ba3db8c7175cd095b4f1a36c3a1e53d.RecordClass({
finishResetPasswordFailureReasonAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
}

}

tradershubModel.RC_1ba3db8c7175cd095b4f1a36c3a1e53d = RC_1ba3db8c7175cd095b4f1a36c3a1e53dInner;

RC_1ba3db8c7175cd095b4f1a36c3a1e53dInner._isAnonymousRecord = true;
RC_1ba3db8c7175cd095b4f1a36c3a1e53dInner.UniqueId = "1ba3db8c-7175-cd09-5b4f-1a36c3a1e53d";
var RC_1ba3db8c7175cd095b4f1a36c3a1e53d = RC_1ba3db8c7175cd095b4f1a36c3a1e53dInner;
RC_1ba3db8c7175cd095b4f1a36c3a1e53d.init();
}
});

define("tradershub.model$RC_699ccb418c056c9e57a80a9dfd4d1935", ["exports", "@outsystems/runtime-core-js", "tradershub.model", "tradershub.model$ST_8e51c0579a0eeb9a2bb60e1b5bc699e3Structure"], function (exports, OSRuntimeCore, tradershubModel) {
var OS = OSRuntimeCore;
{class RC_699ccb418c056c9e57a80a9dfd4d1935Inner extends 
OS.DataTypes.GenericRecord {
static attributesToDeclare() {
return [
this.attr("Documents_supported2", "documents_supported2Attr", "Documents_supported2", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new tradershubModel.ST_8e51c0579a0eeb9a2bb60e1b5bc699e3Structure());
}, true, tradershubModel.ST_8e51c0579a0eeb9a2bb60e1b5bc699e3Structure)
].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
}

static fromStructure(str) {
return new RC_699ccb418c056c9e57a80a9dfd4d1935(new RC_699ccb418c056c9e57a80a9dfd4d1935.RecordClass({
documents_supported2Attr: OS.DataTypes.ImmutableBase.getData(str)
}));
}

}

tradershubModel.RC_699ccb418c056c9e57a80a9dfd4d1935 = RC_699ccb418c056c9e57a80a9dfd4d1935Inner;

RC_699ccb418c056c9e57a80a9dfd4d1935Inner._isAnonymousRecord = true;
RC_699ccb418c056c9e57a80a9dfd4d1935Inner.UniqueId = "699ccb41-8c05-6c9e-57a8-0a9dfd4d1935";
var RC_699ccb418c056c9e57a80a9dfd4d1935 = RC_699ccb418c056c9e57a80a9dfd4d1935Inner;
RC_699ccb418c056c9e57a80a9dfd4d1935.init();
}
});

define("tradershub.model$RL_1d3e5a897a2f53c02233804958fcca16", ["exports", "@outsystems/runtime-core-js", "tradershub.model", "tradershub.model$RC_699ccb418c056c9e57a80a9dfd4d1935"], function (exports, OSRuntimeCore, tradershubModel) {
var OS = OSRuntimeCore;
class RL_1d3e5a897a2f53c02233804958fcca16 extends 
OS.DataTypes.GenericRecordList {
static getItemType() {
return tradershubModel.RC_699ccb418c056c9e57a80a9dfd4d1935;
}

}

tradershubModel.RL_1d3e5a897a2f53c02233804958fcca16 = RL_1d3e5a897a2f53c02233804958fcca16;

});

define("tradershub.model$ST_b7420e17f48d13babe5f801a0124369cStructure", ["exports", "@outsystems/runtime-core-js", "tradershub.model"], function (exports, OSRuntimeCore, tradershubModel) {
var OS = OSRuntimeCore;
{class ST_b7420e17f48d13babe5f801a0124369cStructureInner extends 
OS.DataTypes.GenericRecord {
static attributesToDeclare() {
return [
this.attr("Client_password", "client_passwordAttr", "client_password", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("New_account_virtual", "new_account_virtualAttr", "new_account_virtual", false, false, OS.DataTypes.DataTypes.LongInteger, function () {
return OS.DataTypes.LongInteger.defaultValue;
}, true), 
this.attr("Req_id", "req_idAttr", "req_id", false, false, OS.DataTypes.DataTypes.LongInteger, function () {
return OS.DataTypes.LongInteger.defaultValue;
}, true), 
this.attr("Residence", "residenceAttr", "residence", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Type", "typeAttr", "type", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Verification_code", "verification_codeAttr", "verification_code", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true)
].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
}

}

tradershubModel.ST_b7420e17f48d13babe5f801a0124369cStructure = ST_b7420e17f48d13babe5f801a0124369cStructureInner;

var ST_b7420e17f48d13babe5f801a0124369cStructure = ST_b7420e17f48d13babe5f801a0124369cStructureInner;
ST_b7420e17f48d13babe5f801a0124369cStructure.init();
}
});

define("tradershub.model$RC_1d7be17127bb12afcc633ad0852caf4e", ["exports", "@outsystems/runtime-core-js", "tradershub.model", "tradershub.model$ST_b7420e17f48d13babe5f801a0124369cStructure"], function (exports, OSRuntimeCore, tradershubModel) {
var OS = OSRuntimeCore;
{class RC_1d7be17127bb12afcc633ad0852caf4eInner extends 
OS.DataTypes.GenericRecord {
static attributesToDeclare() {
return [
this.attr("Trading", "tradingAttr", "Trading", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new tradershubModel.ST_b7420e17f48d13babe5f801a0124369cStructure());
}, true, tradershubModel.ST_b7420e17f48d13babe5f801a0124369cStructure)
].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
}

static fromStructure(str) {
return new RC_1d7be17127bb12afcc633ad0852caf4e(new RC_1d7be17127bb12afcc633ad0852caf4e.RecordClass({
tradingAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
}

}

tradershubModel.RC_1d7be17127bb12afcc633ad0852caf4e = RC_1d7be17127bb12afcc633ad0852caf4eInner;

RC_1d7be17127bb12afcc633ad0852caf4eInner._isAnonymousRecord = true;
RC_1d7be17127bb12afcc633ad0852caf4eInner.UniqueId = "1d7be171-27bb-12af-cc63-3ad0852caf4e";
var RC_1d7be17127bb12afcc633ad0852caf4e = RC_1d7be17127bb12afcc633ad0852caf4eInner;
RC_1d7be17127bb12afcc633ad0852caf4e.init();
}
});

define("tradershub.model$ST_6ef949889354a0320b3261736ae5d94cStructure", ["exports", "@outsystems/runtime-core-js", "tradershub.model"], function (exports, OSRuntimeCore, tradershubModel) {
var OS = OSRuntimeCore;
{class ST_6ef949889354a0320b3261736ae5d94cStructureInner extends 
OS.DataTypes.GenericRecord {
static attributesToDeclare() {
return [
this.attr("Website_status", "website_statusAttr", "website_status", false, false, OS.DataTypes.DataTypes.LongInteger, function () {
return OS.DataTypes.LongInteger.defaultValue;
}, true)
].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
}

static fromStructure(str) {
return new ST_6ef949889354a0320b3261736ae5d94cStructure(new ST_6ef949889354a0320b3261736ae5d94cStructure.RecordClass({
website_statusAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
}

}

tradershubModel.ST_6ef949889354a0320b3261736ae5d94cStructure = ST_6ef949889354a0320b3261736ae5d94cStructureInner;

var ST_6ef949889354a0320b3261736ae5d94cStructure = ST_6ef949889354a0320b3261736ae5d94cStructureInner;
ST_6ef949889354a0320b3261736ae5d94cStructure.init();
}
});

define("tradershub.model$ST_268c8bb28743388aadc6c4f1ff502e41Structure", ["exports", "@outsystems/runtime-core-js", "tradershub.model", "tradershub.model$ST_6ef949889354a0320b3261736ae5d94cStructure", "tradershub.model$ST_1a4f07e6c8d6ea2e2ddfeb34b9b7a3c8Structure"], function (exports, OSRuntimeCore, tradershubModel) {
var OS = OSRuntimeCore;
{class ST_268c8bb28743388aadc6c4f1ff502e41StructureInner extends 
OS.DataTypes.GenericRecord {
static attributesToDeclare() {
return [
this.attr("Echo_req", "echo_reqAttr", "echo_req", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new tradershubModel.ST_6ef949889354a0320b3261736ae5d94cStructure());
}, true, tradershubModel.ST_6ef949889354a0320b3261736ae5d94cStructure), 
this.attr("Msg_type", "msg_typeAttr", "msg_type", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Website_status", "website_statusAttr", "website_status", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new tradershubModel.ST_1a4f07e6c8d6ea2e2ddfeb34b9b7a3c8Structure());
}, true, tradershubModel.ST_1a4f07e6c8d6ea2e2ddfeb34b9b7a3c8Structure)
].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
}

}

tradershubModel.ST_268c8bb28743388aadc6c4f1ff502e41Structure = ST_268c8bb28743388aadc6c4f1ff502e41StructureInner;

var ST_268c8bb28743388aadc6c4f1ff502e41Structure = ST_268c8bb28743388aadc6c4f1ff502e41StructureInner;
ST_268c8bb28743388aadc6c4f1ff502e41Structure.init();
}
});

define("tradershub.model$RC_5a813aa35e4bec6571039ab35a4ee707", ["exports", "@outsystems/runtime-core-js", "tradershub.model", "tradershub.model$ST_268c8bb28743388aadc6c4f1ff502e41Structure"], function (exports, OSRuntimeCore, tradershubModel) {
var OS = OSRuntimeCore;
{class RC_5a813aa35e4bec6571039ab35a4ee707Inner extends 
OS.DataTypes.GenericRecord {
static attributesToDeclare() {
return [
this.attr("WebsiteStatusResponse", "websiteStatusResponseAttr", "WebsiteStatusResponse", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new tradershubModel.ST_268c8bb28743388aadc6c4f1ff502e41Structure());
}, true, tradershubModel.ST_268c8bb28743388aadc6c4f1ff502e41Structure)
].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
}

static fromStructure(str) {
return new RC_5a813aa35e4bec6571039ab35a4ee707(new RC_5a813aa35e4bec6571039ab35a4ee707.RecordClass({
websiteStatusResponseAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
}

}

tradershubModel.RC_5a813aa35e4bec6571039ab35a4ee707 = RC_5a813aa35e4bec6571039ab35a4ee707Inner;

RC_5a813aa35e4bec6571039ab35a4ee707Inner._isAnonymousRecord = true;
RC_5a813aa35e4bec6571039ab35a4ee707Inner.UniqueId = "5a813aa3-5e4b-ec65-7103-9ab35a4ee707";
var RC_5a813aa35e4bec6571039ab35a4ee707 = RC_5a813aa35e4bec6571039ab35a4ee707Inner;
RC_5a813aa35e4bec6571039ab35a4ee707.init();
}
});

define("tradershub.model$RL_1da0588253bddedd5b1b7d88c0cc1c86", ["exports", "@outsystems/runtime-core-js", "tradershub.model", "tradershub.model$RC_5a813aa35e4bec6571039ab35a4ee707"], function (exports, OSRuntimeCore, tradershubModel) {
var OS = OSRuntimeCore;
class RL_1da0588253bddedd5b1b7d88c0cc1c86 extends 
OS.DataTypes.GenericRecordList {
static getItemType() {
return tradershubModel.RC_5a813aa35e4bec6571039ab35a4ee707;
}

}

tradershubModel.RL_1da0588253bddedd5b1b7d88c0cc1c86 = RL_1da0588253bddedd5b1b7d88c0cc1c86;

});

define("tradershub.model$RL_1dc527401e57829601dc86609514b95f", ["exports", "@outsystems/runtime-core-js", "RESTAPIWebsocket.model", "tradershub.model", "RESTAPIWebsocket.model$ST_83fbd707f872e92b597918150eff1f3eStructure", "tradershub.referencesHealth", "tradershub.referencesHealth$RESTAPIWebsocket"], function (exports, OSRuntimeCore, RESTAPIWebsocketModel, tradershubModel) {
var OS = OSRuntimeCore;
class RL_1dc527401e57829601dc86609514b95f extends 
OS.DataTypes.GenericRecordList {
static getItemType() {
return RESTAPIWebsocketModel.ST_83fbd707f872e92b597918150eff1f3eStructure;
}

}

tradershubModel.RL_1dc527401e57829601dc86609514b95f = RL_1dc527401e57829601dc86609514b95f;

});

define("tradershub.model$RC_a1310fc4b6664d1d807ee5336bf20c28", ["exports", "@outsystems/runtime-core-js", "RESTAPIWebsocket.model", "tradershub.model", "RESTAPIWebsocket.model$ST_5fc2e4a935064c1413d6e989e87decd2Structure", "tradershub.referencesHealth", "tradershub.referencesHealth$RESTAPIWebsocket"], function (exports, OSRuntimeCore, RESTAPIWebsocketModel, tradershubModel) {
var OS = OSRuntimeCore;
{class RC_a1310fc4b6664d1d807ee5336bf20c28Inner extends 
OS.DataTypes.GenericRecord {
static attributesToDeclare() {
return [
this.attr("GetGetSettingsResponse", "getGetSettingsResponseAttr", "GetGetSettingsResponse", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new RESTAPIWebsocketModel.ST_5fc2e4a935064c1413d6e989e87decd2Structure());
}, true, RESTAPIWebsocketModel.ST_5fc2e4a935064c1413d6e989e87decd2Structure)
].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
}

static fromStructure(str) {
return new RC_a1310fc4b6664d1d807ee5336bf20c28(new RC_a1310fc4b6664d1d807ee5336bf20c28.RecordClass({
getGetSettingsResponseAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
}

}

tradershubModel.RC_a1310fc4b6664d1d807ee5336bf20c28 = RC_a1310fc4b6664d1d807ee5336bf20c28Inner;

RC_a1310fc4b6664d1d807ee5336bf20c28Inner._isAnonymousRecord = true;
RC_a1310fc4b6664d1d807ee5336bf20c28Inner.UniqueId = "a1310fc4-b666-4d1d-807e-e5336bf20c28";
var RC_a1310fc4b6664d1d807ee5336bf20c28 = RC_a1310fc4b6664d1d807ee5336bf20c28Inner;
RC_a1310fc4b6664d1d807ee5336bf20c28.init();
}
});

define("tradershub.model$RL_1e027ac5f8769ea4d4adbbcc7903f418", ["exports", "@outsystems/runtime-core-js", "tradershub.model", "tradershub.model$RC_a1310fc4b6664d1d807ee5336bf20c28"], function (exports, OSRuntimeCore, tradershubModel) {
var OS = OSRuntimeCore;
class RL_1e027ac5f8769ea4d4adbbcc7903f418 extends 
OS.DataTypes.GenericRecordList {
static getItemType() {
return tradershubModel.RC_a1310fc4b6664d1d807ee5336bf20c28;
}

}

tradershubModel.RL_1e027ac5f8769ea4d4adbbcc7903f418 = RL_1e027ac5f8769ea4d4adbbcc7903f418;

});

define("tradershub.model$RC_97843bcb52146db1681dfc816cff70a0", ["exports", "@outsystems/runtime-core-js", "OutSystemsMaps.model", "tradershub.model", "OutSystemsMaps.model$EN_e7686de199fbd20281899419f0b6ff11EntityRecord", "tradershub.referencesHealth", "tradershub.referencesHealth$OutSystemsMaps"], function (exports, OSRuntimeCore, OutSystemsMapsModel, tradershubModel) {
var OS = OSRuntimeCore;
{class RC_97843bcb52146db1681dfc816cff70a0Inner extends 
OS.DataTypes.GenericRecord {
static attributesToDeclare() {
return [
this.attr("Style", "styleAttr", "Style", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new OutSystemsMapsModel.EN_e7686de199fbd20281899419f0b6ff11EntityRecord());
}, true, OutSystemsMapsModel.EN_e7686de199fbd20281899419f0b6ff11EntityRecord)
].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
}

static fromStructure(str) {
return new RC_97843bcb52146db1681dfc816cff70a0(new RC_97843bcb52146db1681dfc816cff70a0.RecordClass({
styleAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
}

}

tradershubModel.RC_97843bcb52146db1681dfc816cff70a0 = RC_97843bcb52146db1681dfc816cff70a0Inner;

RC_97843bcb52146db1681dfc816cff70a0Inner._isAnonymousRecord = true;
RC_97843bcb52146db1681dfc816cff70a0Inner.UniqueId = "97843bcb-5214-6db1-681d-fc816cff70a0";
var RC_97843bcb52146db1681dfc816cff70a0 = RC_97843bcb52146db1681dfc816cff70a0Inner;
RC_97843bcb52146db1681dfc816cff70a0.init();
}
});

define("tradershub.model$RL_1e8f93f5e9d6c1aa9b732c047fc0e7d0", ["exports", "@outsystems/runtime-core-js", "tradershub.model", "tradershub.model$RC_97843bcb52146db1681dfc816cff70a0"], function (exports, OSRuntimeCore, tradershubModel) {
var OS = OSRuntimeCore;
class RL_1e8f93f5e9d6c1aa9b732c047fc0e7d0 extends 
OS.DataTypes.GenericRecordList {
static getItemType() {
return tradershubModel.RC_97843bcb52146db1681dfc816cff70a0;
}

}

tradershubModel.RL_1e8f93f5e9d6c1aa9b732c047fc0e7d0 = RL_1e8f93f5e9d6c1aa9b732c047fc0e7d0;

});

define("tradershub.model$RC_95c473136722ba7379611f73a3471de3", ["exports", "@outsystems/runtime-core-js", "OutSystemsUI.model", "tradershub.model", "OutSystemsUI.model$EN_4f86046673de081f9834eb306850ab22EntityRecord", "tradershub.referencesHealth", "tradershub.referencesHealth$OutSystemsUI"], function (exports, OSRuntimeCore, OutSystemsUIModel, tradershubModel) {
var OS = OSRuntimeCore;
{class RC_95c473136722ba7379611f73a3471de3Inner extends 
OS.DataTypes.GenericRecord {
static attributesToDeclare() {
return [
this.attr("FloatingPosition", "floatingPositionAttr", "FloatingPosition", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new OutSystemsUIModel.EN_4f86046673de081f9834eb306850ab22EntityRecord());
}, true, OutSystemsUIModel.EN_4f86046673de081f9834eb306850ab22EntityRecord)
].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
}

static fromStructure(str) {
return new RC_95c473136722ba7379611f73a3471de3(new RC_95c473136722ba7379611f73a3471de3.RecordClass({
floatingPositionAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
}

}

tradershubModel.RC_95c473136722ba7379611f73a3471de3 = RC_95c473136722ba7379611f73a3471de3Inner;

RC_95c473136722ba7379611f73a3471de3Inner._isAnonymousRecord = true;
RC_95c473136722ba7379611f73a3471de3Inner.UniqueId = "95c47313-6722-ba73-7961-1f73a3471de3";
var RC_95c473136722ba7379611f73a3471de3 = RC_95c473136722ba7379611f73a3471de3Inner;
RC_95c473136722ba7379611f73a3471de3.init();
}
});

define("tradershub.model$RL_1ea3e84bcb11dff20d44cc2dd9bb0fe2", ["exports", "@outsystems/runtime-core-js", "tradershub.model", "tradershub.model$RC_95c473136722ba7379611f73a3471de3"], function (exports, OSRuntimeCore, tradershubModel) {
var OS = OSRuntimeCore;
class RL_1ea3e84bcb11dff20d44cc2dd9bb0fe2 extends 
OS.DataTypes.GenericRecordList {
static getItemType() {
return tradershubModel.RC_95c473136722ba7379611f73a3471de3;
}

}

tradershubModel.RL_1ea3e84bcb11dff20d44cc2dd9bb0fe2 = RL_1ea3e84bcb11dff20d44cc2dd9bb0fe2;

});

define("tradershub.model$RC_1ea63146d7f1d969afc206832e751192", ["exports", "@outsystems/runtime-core-js", "OutSystemsUI.model", "tradershub.model", "OutSystemsUI.model$EN_1e2af88601c0491260411e1369eb104cEntityRecord", "tradershub.referencesHealth", "tradershub.referencesHealth$OutSystemsUI"], function (exports, OSRuntimeCore, OutSystemsUIModel, tradershubModel) {
var OS = OSRuntimeCore;
{class RC_1ea63146d7f1d969afc206832e751192Inner extends 
OS.DataTypes.GenericRecord {
static attributesToDeclare() {
return [
this.attr("BooleanTypes", "booleanTypesAttr", "BooleanTypes", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new OutSystemsUIModel.EN_1e2af88601c0491260411e1369eb104cEntityRecord());
}, true, OutSystemsUIModel.EN_1e2af88601c0491260411e1369eb104cEntityRecord)
].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
}

static fromStructure(str) {
return new RC_1ea63146d7f1d969afc206832e751192(new RC_1ea63146d7f1d969afc206832e751192.RecordClass({
booleanTypesAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
}

}

tradershubModel.RC_1ea63146d7f1d969afc206832e751192 = RC_1ea63146d7f1d969afc206832e751192Inner;

RC_1ea63146d7f1d969afc206832e751192Inner._isAnonymousRecord = true;
RC_1ea63146d7f1d969afc206832e751192Inner.UniqueId = "1ea63146-d7f1-d969-afc2-06832e751192";
var RC_1ea63146d7f1d969afc206832e751192 = RC_1ea63146d7f1d969afc206832e751192Inner;
RC_1ea63146d7f1d969afc206832e751192.init();
}
});

define("tradershub.model$ST_52667a49e65b5175f66dacecb12f345fStructure", ["exports", "@outsystems/runtime-core-js", "tradershub.model"], function (exports, OSRuntimeCore, tradershubModel) {
var OS = OSRuntimeCore;
{class ST_52667a49e65b5175f66dacecb12f345fStructureInner extends 
OS.DataTypes.GenericRecord {
static attributesToDeclare() {
return [
this.attr("Account_category", "account_categoryAttr", "account_category", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Account_type", "account_typeAttr", "account_type", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Broker", "brokerAttr", "broker", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Created_at", "created_atAttr", "created_at", false, false, OS.DataTypes.DataTypes.LongInteger, function () {
return OS.DataTypes.LongInteger.defaultValue;
}, true), 
this.attr("Currency", "currencyAttr", "currency", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Currency_type", "currency_typeAttr", "currency_type", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Is_disabled", "is_disabledAttr", "is_disabled", false, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true), 
this.attr("Is_virtual", "is_virtualAttr", "is_virtual", false, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true), 
this.attr("Landing_company_name", "landing_company_nameAttr", "landing_company_name", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Loginid", "loginidAttr", "loginid", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true)
].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
}

}

tradershubModel.ST_52667a49e65b5175f66dacecb12f345fStructure = ST_52667a49e65b5175f66dacecb12f345fStructureInner;

var ST_52667a49e65b5175f66dacecb12f345fStructure = ST_52667a49e65b5175f66dacecb12f345fStructureInner;
ST_52667a49e65b5175f66dacecb12f345fStructure.init();
}
});

define("tradershub.model$RC_1ec8ce039f100a775e8587dc53ed1b5e", ["exports", "@outsystems/runtime-core-js", "tradershub.model", "tradershub.model$ST_52667a49e65b5175f66dacecb12f345fStructure"], function (exports, OSRuntimeCore, tradershubModel) {
var OS = OSRuntimeCore;
{class RC_1ec8ce039f100a775e8587dc53ed1b5eInner extends 
OS.DataTypes.GenericRecord {
static attributesToDeclare() {
return [
this.attr("Account_listItem", "account_listItemAttr", "Account_listItem", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new tradershubModel.ST_52667a49e65b5175f66dacecb12f345fStructure());
}, true, tradershubModel.ST_52667a49e65b5175f66dacecb12f345fStructure)
].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
}

static fromStructure(str) {
return new RC_1ec8ce039f100a775e8587dc53ed1b5e(new RC_1ec8ce039f100a775e8587dc53ed1b5e.RecordClass({
account_listItemAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
}

}

tradershubModel.RC_1ec8ce039f100a775e8587dc53ed1b5e = RC_1ec8ce039f100a775e8587dc53ed1b5eInner;

RC_1ec8ce039f100a775e8587dc53ed1b5eInner._isAnonymousRecord = true;
RC_1ec8ce039f100a775e8587dc53ed1b5eInner.UniqueId = "1ec8ce03-9f10-0a77-5e85-87dc53ed1b5e";
var RC_1ec8ce039f100a775e8587dc53ed1b5e = RC_1ec8ce039f100a775e8587dc53ed1b5eInner;
RC_1ec8ce039f100a775e8587dc53ed1b5e.init();
}
});

define("tradershub.model$RL_1ee2701fb233e597575036a6d1cfcb5b", ["exports", "@outsystems/runtime-core-js", "RESTAPIWebsocket.model", "tradershub.model", "RESTAPIWebsocket.model$ST_2aa6b158772e078b381113da0ab825f8Structure", "tradershub.referencesHealth", "tradershub.referencesHealth$RESTAPIWebsocket"], function (exports, OSRuntimeCore, RESTAPIWebsocketModel, tradershubModel) {
var OS = OSRuntimeCore;
class RL_1ee2701fb233e597575036a6d1cfcb5b extends 
OS.DataTypes.GenericRecordList {
static getItemType() {
return RESTAPIWebsocketModel.ST_2aa6b158772e078b381113da0ab825f8Structure;
}

}

tradershubModel.RL_1ee2701fb233e597575036a6d1cfcb5b = RL_1ee2701fb233e597575036a6d1cfcb5b;

});

define("tradershub.model$RC_1f9f061182f29d845954b4ea0238f34d", ["exports", "@outsystems/runtime-core-js", "tradershub.model", "tradershub.model$ST_bc7a92cde0807afeabb9fb7ba2ef9c4cStructure"], function (exports, OSRuntimeCore, tradershubModel) {
var OS = OSRuntimeCore;
{class RC_1f9f061182f29d845954b4ea0238f34dInner extends 
OS.DataTypes.GenericRecord {
static attributesToDeclare() {
return [
this.attr("TermsOfUseValidField", "termsOfUseValidFieldAttr", "TermsOfUseValidField", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new tradershubModel.ST_bc7a92cde0807afeabb9fb7ba2ef9c4cStructure());
}, true, tradershubModel.ST_bc7a92cde0807afeabb9fb7ba2ef9c4cStructure)
].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
}

static fromStructure(str) {
return new RC_1f9f061182f29d845954b4ea0238f34d(new RC_1f9f061182f29d845954b4ea0238f34d.RecordClass({
termsOfUseValidFieldAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
}

}

tradershubModel.RC_1f9f061182f29d845954b4ea0238f34d = RC_1f9f061182f29d845954b4ea0238f34dInner;

RC_1f9f061182f29d845954b4ea0238f34dInner._isAnonymousRecord = true;
RC_1f9f061182f29d845954b4ea0238f34dInner.UniqueId = "1f9f0611-82f2-9d84-5954-b4ea0238f34d";
var RC_1f9f061182f29d845954b4ea0238f34d = RC_1f9f061182f29d845954b4ea0238f34dInner;
RC_1f9f061182f29d845954b4ea0238f34d.init();
}
});

define("tradershub.model$RC_bd573fb2cb521691dc6a8c4b02eeb054", ["exports", "@outsystems/runtime-core-js", "System_.model", "tradershub.model", "System_.model$UpdateUserResultRec", "tradershub.referencesHealth", "tradershub.referencesHealth$System_"], function (exports, OSRuntimeCore, System_Model, tradershubModel) {
var OS = OSRuntimeCore;
{class RC_bd573fb2cb521691dc6a8c4b02eeb054Inner extends 
OS.DataTypes.GenericRecord {
static attributesToDeclare() {
return [
this.attr("UpdateUserResult", "updateUserResultAttr", "UpdateUserResult", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new OS.SystemStructures.UpdateUserResultRec());
}, true, OS.SystemStructures.UpdateUserResultRec)
].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
}

static fromStructure(str) {
return new RC_bd573fb2cb521691dc6a8c4b02eeb054(new RC_bd573fb2cb521691dc6a8c4b02eeb054.RecordClass({
updateUserResultAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
}

}

tradershubModel.RC_bd573fb2cb521691dc6a8c4b02eeb054 = RC_bd573fb2cb521691dc6a8c4b02eeb054Inner;

RC_bd573fb2cb521691dc6a8c4b02eeb054Inner._isAnonymousRecord = true;
RC_bd573fb2cb521691dc6a8c4b02eeb054Inner.UniqueId = "bd573fb2-cb52-1691-dc6a-8c4b02eeb054";
var RC_bd573fb2cb521691dc6a8c4b02eeb054 = RC_bd573fb2cb521691dc6a8c4b02eeb054Inner;
RC_bd573fb2cb521691dc6a8c4b02eeb054.init();
}
});

define("tradershub.model$RL_201410915258bdd92387bbd4bec2a7bb", ["exports", "@outsystems/runtime-core-js", "tradershub.model", "tradershub.model$RC_bd573fb2cb521691dc6a8c4b02eeb054"], function (exports, OSRuntimeCore, tradershubModel) {
var OS = OSRuntimeCore;
class RL_201410915258bdd92387bbd4bec2a7bb extends 
OS.DataTypes.GenericRecordList {
static getItemType() {
return tradershubModel.RC_bd573fb2cb521691dc6a8c4b02eeb054;
}

}

tradershubModel.RL_201410915258bdd92387bbd4bec2a7bb = RL_201410915258bdd92387bbd4bec2a7bb;

});

define("tradershub.model$RC_a336dc96fafc2e7ffdb88fdcc24fe482", ["exports", "@outsystems/runtime-core-js", "RESTAPIWebsocket.model", "tradershub.model", "RESTAPIWebsocket.model$ST_77d1f9105abe302fa373f146c295ea17Structure", "tradershub.referencesHealth", "tradershub.referencesHealth$RESTAPIWebsocket"], function (exports, OSRuntimeCore, RESTAPIWebsocketModel, tradershubModel) {
var OS = OSRuntimeCore;
{class RC_a336dc96fafc2e7ffdb88fdcc24fe482Inner extends 
OS.DataTypes.GenericRecord {
static attributesToDeclare() {
return [
this.attr("After_first_deposit", "after_first_depositAttr", "After_first_deposit", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new RESTAPIWebsocketModel.ST_77d1f9105abe302fa373f146c295ea17Structure());
}, true, RESTAPIWebsocketModel.ST_77d1f9105abe302fa373f146c295ea17Structure)
].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
}

static fromStructure(str) {
return new RC_a336dc96fafc2e7ffdb88fdcc24fe482(new RC_a336dc96fafc2e7ffdb88fdcc24fe482.RecordClass({
after_first_depositAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
}

}

tradershubModel.RC_a336dc96fafc2e7ffdb88fdcc24fe482 = RC_a336dc96fafc2e7ffdb88fdcc24fe482Inner;

RC_a336dc96fafc2e7ffdb88fdcc24fe482Inner._isAnonymousRecord = true;
RC_a336dc96fafc2e7ffdb88fdcc24fe482Inner.UniqueId = "a336dc96-fafc-2e7f-fdb8-8fdcc24fe482";
var RC_a336dc96fafc2e7ffdb88fdcc24fe482 = RC_a336dc96fafc2e7ffdb88fdcc24fe482Inner;
RC_a336dc96fafc2e7ffdb88fdcc24fe482.init();
}
});

define("tradershub.model$RL_2083bc83b9d077075ef50c2bd63b6965", ["exports", "@outsystems/runtime-core-js", "tradershub.model", "tradershub.model$RC_a336dc96fafc2e7ffdb88fdcc24fe482"], function (exports, OSRuntimeCore, tradershubModel) {
var OS = OSRuntimeCore;
class RL_2083bc83b9d077075ef50c2bd63b6965 extends 
OS.DataTypes.GenericRecordList {
static getItemType() {
return tradershubModel.RC_a336dc96fafc2e7ffdb88fdcc24fe482;
}

}

tradershubModel.RL_2083bc83b9d077075ef50c2bd63b6965 = RL_2083bc83b9d077075ef50c2bd63b6965;

});

define("tradershub.model$ST_20ab4504e981d74f2db21e1503a31089Structure", ["exports", "@outsystems/runtime-core-js", "tradershub.model"], function (exports, OSRuntimeCore, tradershubModel) {
var OS = OSRuntimeCore;
{class ST_20ab4504e981d74f2db21e1503a31089StructureInner extends 
OS.DataTypes.GenericRecord {
static attributesToDeclare() {
return [
this.attr("Balance", "balanceAttr", "balance", false, false, OS.DataTypes.DataTypes.LongInteger, function () {
return OS.DataTypes.LongInteger.defaultValue;
}, true), 
this.attr("Client_id", "client_idAttr", "client_id", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Currency", "currencyAttr", "currency", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Currency_type", "currency_typeAttr", "currency_type", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Email", "emailAttr", "email", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Oauth_token", "oauth_tokenAttr", "oauth_token", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Refresh_token", "refresh_tokenAttr", "refresh_token", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Type", "typeAttr", "type", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true)
].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
}

}

tradershubModel.ST_20ab4504e981d74f2db21e1503a31089Structure = ST_20ab4504e981d74f2db21e1503a31089StructureInner;

var ST_20ab4504e981d74f2db21e1503a31089Structure = ST_20ab4504e981d74f2db21e1503a31089StructureInner;
ST_20ab4504e981d74f2db21e1503a31089Structure.init();
}
});

define("tradershub.model$EN_9d52f6675871967e9e0ef6c13fcbd1bfEntityRecord", ["exports", "@outsystems/runtime-core-js", "tradershub.model"], function (exports, OSRuntimeCore, tradershubModel) {
var OS = OSRuntimeCore;
{class EN_9d52f6675871967e9e0ef6c13fcbd1bfEntityRecordInner extends 
OS.DataTypes.GenericRecord {
static attributesToDeclare() {
return [
this.attr("Id", "idAttr", "Id", true, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true), 
this.attr("Label", "labelAttr", "Label", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Order", "orderAttr", "Order", true, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true), 
this.attr("Is_Active", "is_ActiveAttr", "Is_Active", true, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, true)
].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
}

}

tradershubModel.EN_9d52f6675871967e9e0ef6c13fcbd1bfEntityRecord = EN_9d52f6675871967e9e0ef6c13fcbd1bfEntityRecordInner;

var EN_9d52f6675871967e9e0ef6c13fcbd1bfEntityRecord = EN_9d52f6675871967e9e0ef6c13fcbd1bfEntityRecordInner;
EN_9d52f6675871967e9e0ef6c13fcbd1bfEntityRecord.init();
}
});

define("tradershub.model$RC_212c9257a0adc5b590b777fec912927b", ["exports", "@outsystems/runtime-core-js", "tradershub.model", "tradershub.model$EN_9d52f6675871967e9e0ef6c13fcbd1bfEntityRecord"], function (exports, OSRuntimeCore, tradershubModel) {
var OS = OSRuntimeCore;
{class RC_212c9257a0adc5b590b777fec912927bInner extends 
OS.DataTypes.GenericRecord {
static attributesToDeclare() {
return [
this.attr("Estimatednetworth", "estimatednetworthAttr", "Estimatednetworth", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new tradershubModel.EN_9d52f6675871967e9e0ef6c13fcbd1bfEntityRecord());
}, true, tradershubModel.EN_9d52f6675871967e9e0ef6c13fcbd1bfEntityRecord)
].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
}

static fromStructure(str) {
return new RC_212c9257a0adc5b590b777fec912927b(new RC_212c9257a0adc5b590b777fec912927b.RecordClass({
estimatednetworthAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
}

}

tradershubModel.RC_212c9257a0adc5b590b777fec912927b = RC_212c9257a0adc5b590b777fec912927bInner;

RC_212c9257a0adc5b590b777fec912927bInner._isAnonymousRecord = true;
RC_212c9257a0adc5b590b777fec912927bInner.UniqueId = "212c9257-a0ad-c5b5-90b7-77fec912927b";
var RC_212c9257a0adc5b590b777fec912927b = RC_212c9257a0adc5b590b777fec912927bInner;
RC_212c9257a0adc5b590b777fec912927b.init();
}
});

define("tradershub.model$RC_ab992961daf602cd2c7635b318c8e367", ["exports", "@outsystems/runtime-core-js", "tradershub.model", "tradershub.model$ST_c698a3174b73fffa916cca14f10645acStructure"], function (exports, OSRuntimeCore, tradershubModel) {
var OS = OSRuntimeCore;
{class RC_ab992961daf602cd2c7635b318c8e367Inner extends 
OS.DataTypes.GenericRecord {
static attributesToDeclare() {
return [
this.attr("Fee", "feeAttr", "Fee", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new tradershubModel.ST_c698a3174b73fffa916cca14f10645acStructure());
}, true, tradershubModel.ST_c698a3174b73fffa916cca14f10645acStructure)
].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
}

static fromStructure(str) {
return new RC_ab992961daf602cd2c7635b318c8e367(new RC_ab992961daf602cd2c7635b318c8e367.RecordClass({
feeAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
}

}

tradershubModel.RC_ab992961daf602cd2c7635b318c8e367 = RC_ab992961daf602cd2c7635b318c8e367Inner;

RC_ab992961daf602cd2c7635b318c8e367Inner._isAnonymousRecord = true;
RC_ab992961daf602cd2c7635b318c8e367Inner.UniqueId = "ab992961-daf6-02cd-2c76-35b318c8e367";
var RC_ab992961daf602cd2c7635b318c8e367 = RC_ab992961daf602cd2c7635b318c8e367Inner;
RC_ab992961daf602cd2c7635b318c8e367.init();
}
});

define("tradershub.model$RL_2138c172f2c8af1e0ff53f313248bd65", ["exports", "@outsystems/runtime-core-js", "tradershub.model", "tradershub.model$RC_ab992961daf602cd2c7635b318c8e367"], function (exports, OSRuntimeCore, tradershubModel) {
var OS = OSRuntimeCore;
class RL_2138c172f2c8af1e0ff53f313248bd65 extends 
OS.DataTypes.GenericRecordList {
static getItemType() {
return tradershubModel.RC_ab992961daf602cd2c7635b318c8e367;
}

}

tradershubModel.RL_2138c172f2c8af1e0ff53f313248bd65 = RL_2138c172f2c8af1e0ff53f313248bd65;

});

define("tradershub.model$ST_cd49224be610b7804a874a30604a9ae2Structure", ["exports", "@outsystems/runtime-core-js", "tradershub.model"], function (exports, OSRuntimeCore, tradershubModel) {
var OS = OSRuntimeCore;
{class ST_cd49224be610b7804a874a30604a9ae2StructureInner extends 
OS.DataTypes.GenericRecord {
static attributesToDeclare() {
return [
this.attr("Req_id", "req_idAttr", "req_id", false, false, OS.DataTypes.DataTypes.LongInteger, function () {
return OS.DataTypes.LongInteger.defaultValue;
}, true), 
this.attr("States_list", "states_listAttr", "states_list", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true)
].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
}

}

tradershubModel.ST_cd49224be610b7804a874a30604a9ae2Structure = ST_cd49224be610b7804a874a30604a9ae2StructureInner;

var ST_cd49224be610b7804a874a30604a9ae2Structure = ST_cd49224be610b7804a874a30604a9ae2StructureInner;
ST_cd49224be610b7804a874a30604a9ae2Structure.init();
}
});

define("tradershub.model$RC_21847b804416cb439cd5eb109d0a6094", ["exports", "@outsystems/runtime-core-js", "tradershub.model", "tradershub.model$ST_cd49224be610b7804a874a30604a9ae2Structure"], function (exports, OSRuntimeCore, tradershubModel) {
var OS = OSRuntimeCore;
{class RC_21847b804416cb439cd5eb109d0a6094Inner extends 
OS.DataTypes.GenericRecord {
static attributesToDeclare() {
return [
this.attr("Echo_req4", "echo_req4Attr", "Echo_req4", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new tradershubModel.ST_cd49224be610b7804a874a30604a9ae2Structure());
}, true, tradershubModel.ST_cd49224be610b7804a874a30604a9ae2Structure)
].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
}

static fromStructure(str) {
return new RC_21847b804416cb439cd5eb109d0a6094(new RC_21847b804416cb439cd5eb109d0a6094.RecordClass({
echo_req4Attr: OS.DataTypes.ImmutableBase.getData(str)
}));
}

}

tradershubModel.RC_21847b804416cb439cd5eb109d0a6094 = RC_21847b804416cb439cd5eb109d0a6094Inner;

RC_21847b804416cb439cd5eb109d0a6094Inner._isAnonymousRecord = true;
RC_21847b804416cb439cd5eb109d0a6094Inner.UniqueId = "21847b80-4416-cb43-9cd5-eb109d0a6094";
var RC_21847b804416cb439cd5eb109d0a6094 = RC_21847b804416cb439cd5eb109d0a6094Inner;
RC_21847b804416cb439cd5eb109d0a6094.init();
}
});

define("tradershub.model$RC_6da37637b0593f4ec39cbdb7fca0818f", ["exports", "@outsystems/runtime-core-js", "RESTAPIWebsocket.model", "tradershub.model", "RESTAPIWebsocket.model$ST_10e78341d21be3a7dc573dcf4252c9dbStructure", "tradershub.referencesHealth", "tradershub.referencesHealth$RESTAPIWebsocket"], function (exports, OSRuntimeCore, RESTAPIWebsocketModel, tradershubModel) {
var OS = OSRuntimeCore;
{class RC_6da37637b0593f4ec39cbdb7fca0818fInner extends 
OS.DataTypes.GenericRecord {
static attributesToDeclare() {
return [
this.attr("Onfido", "onfidoAttr", "Onfido3", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new RESTAPIWebsocketModel.ST_10e78341d21be3a7dc573dcf4252c9dbStructure());
}, true, RESTAPIWebsocketModel.ST_10e78341d21be3a7dc573dcf4252c9dbStructure)
].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
}

static fromStructure(str) {
return new RC_6da37637b0593f4ec39cbdb7fca0818f(new RC_6da37637b0593f4ec39cbdb7fca0818f.RecordClass({
onfidoAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
}

}

tradershubModel.RC_6da37637b0593f4ec39cbdb7fca0818f = RC_6da37637b0593f4ec39cbdb7fca0818fInner;

RC_6da37637b0593f4ec39cbdb7fca0818fInner._isAnonymousRecord = true;
RC_6da37637b0593f4ec39cbdb7fca0818fInner.UniqueId = "6da37637-b059-3f4e-c39c-bdb7fca0818f";
var RC_6da37637b0593f4ec39cbdb7fca0818f = RC_6da37637b0593f4ec39cbdb7fca0818fInner;
RC_6da37637b0593f4ec39cbdb7fca0818f.init();
}
});

define("tradershub.model$RL_21aa582dbaa7e503639ee59cca230a00", ["exports", "@outsystems/runtime-core-js", "tradershub.model", "tradershub.model$RC_6da37637b0593f4ec39cbdb7fca0818f"], function (exports, OSRuntimeCore, tradershubModel) {
var OS = OSRuntimeCore;
class RL_21aa582dbaa7e503639ee59cca230a00 extends 
OS.DataTypes.GenericRecordList {
static getItemType() {
return tradershubModel.RC_6da37637b0593f4ec39cbdb7fca0818f;
}

}

tradershubModel.RL_21aa582dbaa7e503639ee59cca230a00 = RL_21aa582dbaa7e503639ee59cca230a00;

});

define("tradershub.model$RC_30490951290854c2926b2cf8ec7b4a20", ["exports", "@outsystems/runtime-core-js", "RESTAPIWebsocket.model", "tradershub.model", "RESTAPIWebsocket.model$ST_9eb2d1268b055c9ba20852d2758a5050Structure", "tradershub.referencesHealth", "tradershub.referencesHealth$RESTAPIWebsocket"], function (exports, OSRuntimeCore, RESTAPIWebsocketModel, tradershubModel) {
var OS = OSRuntimeCore;
{class RC_30490951290854c2926b2cf8ec7b4a20Inner extends 
OS.DataTypes.GenericRecord {
static attributesToDeclare() {
return [
this.attr("Jurisdiction_risk_assessment", "jurisdiction_risk_assessmentAttr", "Jurisdiction_risk_assessment", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new RESTAPIWebsocketModel.ST_9eb2d1268b055c9ba20852d2758a5050Structure());
}, true, RESTAPIWebsocketModel.ST_9eb2d1268b055c9ba20852d2758a5050Structure)
].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
}

static fromStructure(str) {
return new RC_30490951290854c2926b2cf8ec7b4a20(new RC_30490951290854c2926b2cf8ec7b4a20.RecordClass({
jurisdiction_risk_assessmentAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
}

}

tradershubModel.RC_30490951290854c2926b2cf8ec7b4a20 = RC_30490951290854c2926b2cf8ec7b4a20Inner;

RC_30490951290854c2926b2cf8ec7b4a20Inner._isAnonymousRecord = true;
RC_30490951290854c2926b2cf8ec7b4a20Inner.UniqueId = "30490951-2908-54c2-926b-2cf8ec7b4a20";
var RC_30490951290854c2926b2cf8ec7b4a20 = RC_30490951290854c2926b2cf8ec7b4a20Inner;
RC_30490951290854c2926b2cf8ec7b4a20.init();
}
});

define("tradershub.model$RL_222c4cca834a8b261e24304f207bc884", ["exports", "@outsystems/runtime-core-js", "tradershub.model", "tradershub.model$RC_30490951290854c2926b2cf8ec7b4a20"], function (exports, OSRuntimeCore, tradershubModel) {
var OS = OSRuntimeCore;
class RL_222c4cca834a8b261e24304f207bc884 extends 
OS.DataTypes.GenericRecordList {
static getItemType() {
return tradershubModel.RC_30490951290854c2926b2cf8ec7b4a20;
}

}

tradershubModel.RL_222c4cca834a8b261e24304f207bc884 = RL_222c4cca834a8b261e24304f207bc884;

});

define("tradershub.model$RL_230328260e3d7a695b9562201483a549", ["exports", "@outsystems/runtime-core-js", "OutSystemsUI.model", "tradershub.model", "OutSystemsUI.model$EN_7f8fd02aa7ee2ac6182b6b36e46460d9EntityRecord", "tradershub.referencesHealth", "tradershub.referencesHealth$OutSystemsUI"], function (exports, OSRuntimeCore, OutSystemsUIModel, tradershubModel) {
var OS = OSRuntimeCore;
class RL_230328260e3d7a695b9562201483a549 extends 
OS.DataTypes.GenericRecordList {
static getItemType() {
return OutSystemsUIModel.EN_7f8fd02aa7ee2ac6182b6b36e46460d9EntityRecord;
}

}

tradershubModel.RL_230328260e3d7a695b9562201483a549 = RL_230328260e3d7a695b9562201483a549;

});

define("tradershub.model$RC_236b9780ed98eefd23c7d452d5b32785", ["exports", "@outsystems/runtime-core-js", "RESTAPIWebsocket.model", "tradershub.model", "RESTAPIWebsocket.model$ST_450f06937a42e6bd68832beac9fd4297Structure", "tradershub.referencesHealth", "tradershub.referencesHealth$RESTAPIWebsocket"], function (exports, OSRuntimeCore, RESTAPIWebsocketModel, tradershubModel) {
var OS = OSRuntimeCore;
{class RC_236b9780ed98eefd23c7d452d5b32785Inner extends 
OS.DataTypes.GenericRecord {
static attributesToDeclare() {
return [
this.attr("AuthorizeRequest", "authorizeRequestAttr", "AuthorizeRequest", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new RESTAPIWebsocketModel.ST_450f06937a42e6bd68832beac9fd4297Structure());
}, true, RESTAPIWebsocketModel.ST_450f06937a42e6bd68832beac9fd4297Structure)
].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
}

static fromStructure(str) {
return new RC_236b9780ed98eefd23c7d452d5b32785(new RC_236b9780ed98eefd23c7d452d5b32785.RecordClass({
authorizeRequestAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
}

}

tradershubModel.RC_236b9780ed98eefd23c7d452d5b32785 = RC_236b9780ed98eefd23c7d452d5b32785Inner;

RC_236b9780ed98eefd23c7d452d5b32785Inner._isAnonymousRecord = true;
RC_236b9780ed98eefd23c7d452d5b32785Inner.UniqueId = "236b9780-ed98-eefd-23c7-d452d5b32785";
var RC_236b9780ed98eefd23c7d452d5b32785 = RC_236b9780ed98eefd23c7d452d5b32785Inner;
RC_236b9780ed98eefd23c7d452d5b32785.init();
}
});

define("tradershub.model$RC_23e4ac7b03ba2050af5811737c8cc89f", ["exports", "@outsystems/runtime-core-js", "OutSystemsUI.model", "tradershub.model", "OutSystemsUI.model$ST_ffc6ac6eac2c99bcdbe1dc79ecc6377fStructure", "tradershub.referencesHealth", "tradershub.referencesHealth$OutSystemsUI"], function (exports, OSRuntimeCore, OutSystemsUIModel, tradershubModel) {
var OS = OSRuntimeCore;
{class RC_23e4ac7b03ba2050af5811737c8cc89fInner extends 
OS.DataTypes.GenericRecord {
static attributesToDeclare() {
return [
this.attr("VideoCaptions", "videoCaptionsAttr", "VideoCaptions", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new OutSystemsUIModel.ST_ffc6ac6eac2c99bcdbe1dc79ecc6377fStructure());
}, true, OutSystemsUIModel.ST_ffc6ac6eac2c99bcdbe1dc79ecc6377fStructure)
].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
}

static fromStructure(str) {
return new RC_23e4ac7b03ba2050af5811737c8cc89f(new RC_23e4ac7b03ba2050af5811737c8cc89f.RecordClass({
videoCaptionsAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
}

}

tradershubModel.RC_23e4ac7b03ba2050af5811737c8cc89f = RC_23e4ac7b03ba2050af5811737c8cc89fInner;

RC_23e4ac7b03ba2050af5811737c8cc89fInner._isAnonymousRecord = true;
RC_23e4ac7b03ba2050af5811737c8cc89fInner.UniqueId = "23e4ac7b-03ba-2050-af58-11737c8cc89f";
var RC_23e4ac7b03ba2050af5811737c8cc89f = RC_23e4ac7b03ba2050af5811737c8cc89fInner;
RC_23e4ac7b03ba2050af5811737c8cc89f.init();
}
});

define("tradershub.model$ST_2437043bbd31c030b06d37eb045b623aStructure", ["exports", "@outsystems/runtime-core-js", "tradershub.model"], function (exports, OSRuntimeCore, tradershubModel) {
var OS = OSRuntimeCore;
{class ST_2437043bbd31c030b06d37eb045b623aStructureInner extends 
OS.DataTypes.GenericRecord {
static attributesToDeclare() {
return [
this.attr("TaxResidenceCountry", "taxResidenceCountryAttr", "TaxResidenceCountry", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("TIDNumber", "tIDNumberAttr", "TIDNumber", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("EmployementStatus", "employementStatusAttr", "EmployementStatus", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("TaxIDConfirmation", "taxIDConfirmationAttr", "TaxIDConfirmation", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true)
].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
}

}

tradershubModel.ST_2437043bbd31c030b06d37eb045b623aStructure = ST_2437043bbd31c030b06d37eb045b623aStructureInner;

var ST_2437043bbd31c030b06d37eb045b623aStructure = ST_2437043bbd31c030b06d37eb045b623aStructureInner;
ST_2437043bbd31c030b06d37eb045b623aStructure.init();
}
});

define("tradershub.model$RL_25008888c069155597e1a02e1b9ea813", ["exports", "@outsystems/runtime-core-js", "RESTAPIWebsocket.model", "tradershub.model", "RESTAPIWebsocket.model$ST_803bffb999fad6a38040b2086877902eStructure", "tradershub.referencesHealth", "tradershub.referencesHealth$RESTAPIWebsocket"], function (exports, OSRuntimeCore, RESTAPIWebsocketModel, tradershubModel) {
var OS = OSRuntimeCore;
class RL_25008888c069155597e1a02e1b9ea813 extends 
OS.DataTypes.GenericRecordList {
static getItemType() {
return RESTAPIWebsocketModel.ST_803bffb999fad6a38040b2086877902eStructure;
}

}

tradershubModel.RL_25008888c069155597e1a02e1b9ea813 = RL_25008888c069155597e1a02e1b9ea813;

});

define("tradershub.model$RC_96175866bef7bdbf74965597575b319c", ["exports", "@outsystems/runtime-core-js", "RESTAPIWebsocket.model", "tradershub.model", "RESTAPIWebsocket.model$ST_72900159fa859d96c9b5e8531e637a4cStructure", "tradershub.referencesHealth", "tradershub.referencesHealth$RESTAPIWebsocket"], function (exports, OSRuntimeCore, RESTAPIWebsocketModel, tradershubModel) {
var OS = OSRuntimeCore;
{class RC_96175866bef7bdbf74965597575b319cInner extends 
OS.DataTypes.GenericRecord {
static attributesToDeclare() {
return [
this.attr("PostNewAccountVirtualResponse", "postNewAccountVirtualResponseAttr", "PostNewAccountVirtualResponse", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new RESTAPIWebsocketModel.ST_72900159fa859d96c9b5e8531e637a4cStructure());
}, true, RESTAPIWebsocketModel.ST_72900159fa859d96c9b5e8531e637a4cStructure)
].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
}

static fromStructure(str) {
return new RC_96175866bef7bdbf74965597575b319c(new RC_96175866bef7bdbf74965597575b319c.RecordClass({
postNewAccountVirtualResponseAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
}

}

tradershubModel.RC_96175866bef7bdbf74965597575b319c = RC_96175866bef7bdbf74965597575b319cInner;

RC_96175866bef7bdbf74965597575b319cInner._isAnonymousRecord = true;
RC_96175866bef7bdbf74965597575b319cInner.UniqueId = "96175866-bef7-bdbf-7496-5597575b319c";
var RC_96175866bef7bdbf74965597575b319c = RC_96175866bef7bdbf74965597575b319cInner;
RC_96175866bef7bdbf74965597575b319c.init();
}
});

define("tradershub.model$RL_2567d50fd0e540a33e71ee0dd4edef5d", ["exports", "@outsystems/runtime-core-js", "tradershub.model", "tradershub.model$RC_96175866bef7bdbf74965597575b319c"], function (exports, OSRuntimeCore, tradershubModel) {
var OS = OSRuntimeCore;
class RL_2567d50fd0e540a33e71ee0dd4edef5d extends 
OS.DataTypes.GenericRecordList {
static getItemType() {
return tradershubModel.RC_96175866bef7bdbf74965597575b319c;
}

}

tradershubModel.RL_2567d50fd0e540a33e71ee0dd4edef5d = RL_2567d50fd0e540a33e71ee0dd4edef5d;

});

define("tradershub.model$RC_d2362d0d0bb36623a5f0020a47954dfc", ["exports", "@outsystems/runtime-core-js", "OutSystemsCharts.model", "tradershub.model", "OutSystemsCharts.model$EN_dd503b13df684d7ec8cc34d86edadd21EntityRecord", "tradershub.referencesHealth", "tradershub.referencesHealth$OutSystemsCharts"], function (exports, OSRuntimeCore, OutSystemsChartsModel, tradershubModel) {
var OS = OSRuntimeCore;
{class RC_d2362d0d0bb36623a5f0020a47954dfcInner extends 
OS.DataTypes.GenericRecord {
static attributesToDeclare() {
return [
this.attr("LegendPosition_v1", "legendPosition_v1Attr", "LegendPosition_v1", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new OutSystemsChartsModel.EN_dd503b13df684d7ec8cc34d86edadd21EntityRecord());
}, true, OutSystemsChartsModel.EN_dd503b13df684d7ec8cc34d86edadd21EntityRecord)
].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
}

static fromStructure(str) {
return new RC_d2362d0d0bb36623a5f0020a47954dfc(new RC_d2362d0d0bb36623a5f0020a47954dfc.RecordClass({
legendPosition_v1Attr: OS.DataTypes.ImmutableBase.getData(str)
}));
}

}

tradershubModel.RC_d2362d0d0bb36623a5f0020a47954dfc = RC_d2362d0d0bb36623a5f0020a47954dfcInner;

RC_d2362d0d0bb36623a5f0020a47954dfcInner._isAnonymousRecord = true;
RC_d2362d0d0bb36623a5f0020a47954dfcInner.UniqueId = "d2362d0d-0bb3-6623-a5f0-020a47954dfc";
var RC_d2362d0d0bb36623a5f0020a47954dfc = RC_d2362d0d0bb36623a5f0020a47954dfcInner;
RC_d2362d0d0bb36623a5f0020a47954dfc.init();
}
});

define("tradershub.model$RL_257ff75163dcb7f5df49442c867d608a", ["exports", "@outsystems/runtime-core-js", "tradershub.model", "tradershub.model$RC_d2362d0d0bb36623a5f0020a47954dfc"], function (exports, OSRuntimeCore, tradershubModel) {
var OS = OSRuntimeCore;
class RL_257ff75163dcb7f5df49442c867d608a extends 
OS.DataTypes.GenericRecordList {
static getItemType() {
return tradershubModel.RC_d2362d0d0bb36623a5f0020a47954dfc;
}

}

tradershubModel.RL_257ff75163dcb7f5df49442c867d608a = RL_257ff75163dcb7f5df49442c867d608a;

});

define("tradershub.model$RC_e1b3eaedbd133d4ebfdb497dc119e9c1", ["exports", "@outsystems/runtime-core-js", "RESTAPIWebsocket.model", "tradershub.model", "RESTAPIWebsocket.model$ST_d12f6a9e29cbb97250918a3fc7bc632aStructure", "tradershub.referencesHealth", "tradershub.referencesHealth$RESTAPIWebsocket"], function (exports, OSRuntimeCore, RESTAPIWebsocketModel, tradershubModel) {
var OS = OSRuntimeCore;
{class RC_e1b3eaedbd133d4ebfdb497dc119e9c1Inner extends 
OS.DataTypes.GenericRecord {
static attributesToDeclare() {
return [
this.attr("Landing_company", "landing_companyAttr", "Landing_company4", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new RESTAPIWebsocketModel.ST_d12f6a9e29cbb97250918a3fc7bc632aStructure());
}, true, RESTAPIWebsocketModel.ST_d12f6a9e29cbb97250918a3fc7bc632aStructure)
].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
}

static fromStructure(str) {
return new RC_e1b3eaedbd133d4ebfdb497dc119e9c1(new RC_e1b3eaedbd133d4ebfdb497dc119e9c1.RecordClass({
landing_companyAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
}

}

tradershubModel.RC_e1b3eaedbd133d4ebfdb497dc119e9c1 = RC_e1b3eaedbd133d4ebfdb497dc119e9c1Inner;

RC_e1b3eaedbd133d4ebfdb497dc119e9c1Inner._isAnonymousRecord = true;
RC_e1b3eaedbd133d4ebfdb497dc119e9c1Inner.UniqueId = "e1b3eaed-bd13-3d4e-bfdb-497dc119e9c1";
var RC_e1b3eaedbd133d4ebfdb497dc119e9c1 = RC_e1b3eaedbd133d4ebfdb497dc119e9c1Inner;
RC_e1b3eaedbd133d4ebfdb497dc119e9c1.init();
}
});

define("tradershub.model$RL_25ca4d2fe256f651a7214d9f28b70caa", ["exports", "@outsystems/runtime-core-js", "tradershub.model", "tradershub.model$RC_e1b3eaedbd133d4ebfdb497dc119e9c1"], function (exports, OSRuntimeCore, tradershubModel) {
var OS = OSRuntimeCore;
class RL_25ca4d2fe256f651a7214d9f28b70caa extends 
OS.DataTypes.GenericRecordList {
static getItemType() {
return tradershubModel.RC_e1b3eaedbd133d4ebfdb497dc119e9c1;
}

}

tradershubModel.RL_25ca4d2fe256f651a7214d9f28b70caa = RL_25ca4d2fe256f651a7214d9f28b70caa;

});

define("tradershub.model$RL_25fb06a470c3da9f340536abb6a3c81b", ["exports", "@outsystems/runtime-core-js", "tradershub.model", "tradershub.model$ST_2848cd79cb87a073a52246b673b32b79Structure"], function (exports, OSRuntimeCore, tradershubModel) {
var OS = OSRuntimeCore;
class RL_25fb06a470c3da9f340536abb6a3c81b extends 
OS.DataTypes.GenericRecordList {
static getItemType() {
return tradershubModel.ST_2848cd79cb87a073a52246b673b32b79Structure;
}

}

tradershubModel.RL_25fb06a470c3da9f340536abb6a3c81b = RL_25fb06a470c3da9f340536abb6a3c81b;

});

define("tradershub.model$RC_261685da2c799bcc3b4873485e008694", ["exports", "@outsystems/runtime-core-js", "OutSystemsUI.model", "tradershub.model", "OutSystemsUI.model$EN_182bd2d69e3f1edb7f1fb76efcbcae87EntityRecord", "tradershub.referencesHealth", "tradershub.referencesHealth$OutSystemsUI"], function (exports, OSRuntimeCore, OutSystemsUIModel, tradershubModel) {
var OS = OSRuntimeCore;
{class RC_261685da2c799bcc3b4873485e008694Inner extends 
OS.DataTypes.GenericRecord {
static attributesToDeclare() {
return [
this.attr("BreakColumns", "breakColumnsAttr", "BreakColumns", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new OutSystemsUIModel.EN_182bd2d69e3f1edb7f1fb76efcbcae87EntityRecord());
}, true, OutSystemsUIModel.EN_182bd2d69e3f1edb7f1fb76efcbcae87EntityRecord)
].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
}

static fromStructure(str) {
return new RC_261685da2c799bcc3b4873485e008694(new RC_261685da2c799bcc3b4873485e008694.RecordClass({
breakColumnsAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
}

}

tradershubModel.RC_261685da2c799bcc3b4873485e008694 = RC_261685da2c799bcc3b4873485e008694Inner;

RC_261685da2c799bcc3b4873485e008694Inner._isAnonymousRecord = true;
RC_261685da2c799bcc3b4873485e008694Inner.UniqueId = "261685da-2c79-9bcc-3b48-73485e008694";
var RC_261685da2c799bcc3b4873485e008694 = RC_261685da2c799bcc3b4873485e008694Inner;
RC_261685da2c799bcc3b4873485e008694.init();
}
});

define("tradershub.model$EN_31409570bcad1406da75c1da22746c40EntityRecord", ["exports", "@outsystems/runtime-core-js", "tradershub.model"], function (exports, OSRuntimeCore, tradershubModel) {
var OS = OSRuntimeCore;
{class EN_31409570bcad1406da75c1da22746c40EntityRecordInner extends 
OS.DataTypes.GenericRecord {
static attributesToDeclare() {
return [
this.attr("Id", "idAttr", "Id", true, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true), 
this.attr("Label", "labelAttr", "Label", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Order", "orderAttr", "Order", true, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true), 
this.attr("Is_Active", "is_ActiveAttr", "Is_Active", true, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, true)
].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
}

}

tradershubModel.EN_31409570bcad1406da75c1da22746c40EntityRecord = EN_31409570bcad1406da75c1da22746c40EntityRecordInner;

var EN_31409570bcad1406da75c1da22746c40EntityRecord = EN_31409570bcad1406da75c1da22746c40EntityRecordInner;
EN_31409570bcad1406da75c1da22746c40EntityRecord.init();
}
});

define("tradershub.model$RC_2624ed456a552c74637631b7754933a4", ["exports", "@outsystems/runtime-core-js", "tradershub.model", "tradershub.model$EN_31409570bcad1406da75c1da22746c40EntityRecord"], function (exports, OSRuntimeCore, tradershubModel) {
var OS = OSRuntimeCore;
{class RC_2624ed456a552c74637631b7754933a4Inner extends 
OS.DataTypes.GenericRecord {
static attributesToDeclare() {
return [
this.attr("Occupation", "occupationAttr", "Occupation", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new tradershubModel.EN_31409570bcad1406da75c1da22746c40EntityRecord());
}, true, tradershubModel.EN_31409570bcad1406da75c1da22746c40EntityRecord)
].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
}

static fromStructure(str) {
return new RC_2624ed456a552c74637631b7754933a4(new RC_2624ed456a552c74637631b7754933a4.RecordClass({
occupationAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
}

}

tradershubModel.RC_2624ed456a552c74637631b7754933a4 = RC_2624ed456a552c74637631b7754933a4Inner;

RC_2624ed456a552c74637631b7754933a4Inner._isAnonymousRecord = true;
RC_2624ed456a552c74637631b7754933a4Inner.UniqueId = "2624ed45-6a55-2c74-6376-31b7754933a4";
var RC_2624ed456a552c74637631b7754933a4 = RC_2624ed456a552c74637631b7754933a4Inner;
RC_2624ed456a552c74637631b7754933a4.init();
}
});

define("tradershub.model$RC_ca426fec0751e5b6dcf015e9fdc2120e", ["exports", "@outsystems/runtime-core-js", "OutSystemsUI.model", "tradershub.model", "OutSystemsUI.model$EN_a14a98f7fea6a66cbe59ce2905b45c09EntityRecord", "tradershub.referencesHealth", "tradershub.referencesHealth$OutSystemsUI"], function (exports, OSRuntimeCore, OutSystemsUIModel, tradershubModel) {
var OS = OSRuntimeCore;
{class RC_ca426fec0751e5b6dcf015e9fdc2120eInner extends 
OS.DataTypes.GenericRecord {
static attributesToDeclare() {
return [
this.attr("Size", "sizeAttr", "Size", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new OutSystemsUIModel.EN_a14a98f7fea6a66cbe59ce2905b45c09EntityRecord());
}, true, OutSystemsUIModel.EN_a14a98f7fea6a66cbe59ce2905b45c09EntityRecord)
].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
}

static fromStructure(str) {
return new RC_ca426fec0751e5b6dcf015e9fdc2120e(new RC_ca426fec0751e5b6dcf015e9fdc2120e.RecordClass({
sizeAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
}

}

tradershubModel.RC_ca426fec0751e5b6dcf015e9fdc2120e = RC_ca426fec0751e5b6dcf015e9fdc2120eInner;

RC_ca426fec0751e5b6dcf015e9fdc2120eInner._isAnonymousRecord = true;
RC_ca426fec0751e5b6dcf015e9fdc2120eInner.UniqueId = "ca426fec-0751-e5b6-dcf0-15e9fdc2120e";
var RC_ca426fec0751e5b6dcf015e9fdc2120e = RC_ca426fec0751e5b6dcf015e9fdc2120eInner;
RC_ca426fec0751e5b6dcf015e9fdc2120e.init();
}
});

define("tradershub.model$RL_27a81319ef1cef112a91632cbf388562", ["exports", "@outsystems/runtime-core-js", "tradershub.model", "tradershub.model$RC_ca426fec0751e5b6dcf015e9fdc2120e"], function (exports, OSRuntimeCore, tradershubModel) {
var OS = OSRuntimeCore;
class RL_27a81319ef1cef112a91632cbf388562 extends 
OS.DataTypes.GenericRecordList {
static getItemType() {
return tradershubModel.RC_ca426fec0751e5b6dcf015e9fdc2120e;
}

}

tradershubModel.RL_27a81319ef1cef112a91632cbf388562 = RL_27a81319ef1cef112a91632cbf388562;

});

define("tradershub.model$RC_27b5a164e828de9b90686831c7908b4a", ["exports", "@outsystems/runtime-core-js", "OutSystemsUI.model", "tradershub.model", "OutSystemsUI.model$ST_b7d405ca4407e572da091e54d07e3bd1Structure", "tradershub.referencesHealth", "tradershub.referencesHealth$OutSystemsUI"], function (exports, OSRuntimeCore, OutSystemsUIModel, tradershubModel) {
var OS = OSRuntimeCore;
{class RC_27b5a164e828de9b90686831c7908b4aInner extends 
OS.DataTypes.GenericRecord {
static attributesToDeclare() {
return [
this.attr("ErrorMessage", "errorMessageAttr", "ErrorMessage_OSUI", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new OutSystemsUIModel.ST_b7d405ca4407e572da091e54d07e3bd1Structure());
}, true, OutSystemsUIModel.ST_b7d405ca4407e572da091e54d07e3bd1Structure)
].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
}

static fromStructure(str) {
return new RC_27b5a164e828de9b90686831c7908b4a(new RC_27b5a164e828de9b90686831c7908b4a.RecordClass({
errorMessageAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
}

}

tradershubModel.RC_27b5a164e828de9b90686831c7908b4a = RC_27b5a164e828de9b90686831c7908b4aInner;

RC_27b5a164e828de9b90686831c7908b4aInner._isAnonymousRecord = true;
RC_27b5a164e828de9b90686831c7908b4aInner.UniqueId = "27b5a164-e828-de9b-9068-6831c7908b4a";
var RC_27b5a164e828de9b90686831c7908b4a = RC_27b5a164e828de9b90686831c7908b4aInner;
RC_27b5a164e828de9b90686831c7908b4a.init();
}
});

define("tradershub.model$RC_27d8031b19e05deba9a159874d88bc75", ["exports", "@outsystems/runtime-core-js", "OutSystemsMaps.model", "tradershub.model", "OutSystemsMaps.model$ST_7cd861eaa819851d6fba6d8150ed8cc1Structure", "tradershub.referencesHealth", "tradershub.referencesHealth$OutSystemsMaps"], function (exports, OSRuntimeCore, OutSystemsMapsModel, tradershubModel) {
var OS = OSRuntimeCore;
{class RC_27d8031b19e05deba9a159874d88bc75Inner extends 
OS.DataTypes.GenericRecord {
static attributesToDeclare() {
return [
this.attr("OptionalSearchPlacesConfigs", "optionalSearchPlacesConfigsAttr", "OptionalSearchPlacesConfigs", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new OutSystemsMapsModel.ST_7cd861eaa819851d6fba6d8150ed8cc1Structure());
}, true, OutSystemsMapsModel.ST_7cd861eaa819851d6fba6d8150ed8cc1Structure)
].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
}

static fromStructure(str) {
return new RC_27d8031b19e05deba9a159874d88bc75(new RC_27d8031b19e05deba9a159874d88bc75.RecordClass({
optionalSearchPlacesConfigsAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
}

}

tradershubModel.RC_27d8031b19e05deba9a159874d88bc75 = RC_27d8031b19e05deba9a159874d88bc75Inner;

RC_27d8031b19e05deba9a159874d88bc75Inner._isAnonymousRecord = true;
RC_27d8031b19e05deba9a159874d88bc75Inner.UniqueId = "27d8031b-19e0-5deb-a9a1-59874d88bc75";
var RC_27d8031b19e05deba9a159874d88bc75 = RC_27d8031b19e05deba9a159874d88bc75Inner;
RC_27d8031b19e05deba9a159874d88bc75.init();
}
});

define("tradershub.model$ST_5c01ba3e57fed3646e0d84a6d769c24eStructure", ["exports", "@outsystems/runtime-core-js", "tradershub.model"], function (exports, OSRuntimeCore, tradershubModel) {
var OS = OSRuntimeCore;
{class ST_5c01ba3e57fed3646e0d84a6d769c24eStructureInner extends 
OS.DataTypes.GenericRecord {
static attributesToDeclare() {
return [
this.attr("Stars", "starsAttr", "stars", false, false, OS.DataTypes.DataTypes.Decimal, function () {
return OS.DataTypes.Decimal.defaultValue;
}, true), 
this.attr("TrustScore", "trustScoreAttr", "trustScore", false, false, OS.DataTypes.DataTypes.Decimal, function () {
return OS.DataTypes.Decimal.defaultValue;
}, true)
].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
}

}

tradershubModel.ST_5c01ba3e57fed3646e0d84a6d769c24eStructure = ST_5c01ba3e57fed3646e0d84a6d769c24eStructureInner;

var ST_5c01ba3e57fed3646e0d84a6d769c24eStructure = ST_5c01ba3e57fed3646e0d84a6d769c24eStructureInner;
ST_5c01ba3e57fed3646e0d84a6d769c24eStructure.init();
}
});

define("tradershub.model$RC_27f174768a883bc2fd02083ad34399ea", ["exports", "@outsystems/runtime-core-js", "tradershub.model", "tradershub.model$ST_5c01ba3e57fed3646e0d84a6d769c24eStructure"], function (exports, OSRuntimeCore, tradershubModel) {
var OS = OSRuntimeCore;
{class RC_27f174768a883bc2fd02083ad34399eaInner extends 
OS.DataTypes.GenericRecord {
static attributesToDeclare() {
return [
this.attr("Score", "scoreAttr", "Score", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new tradershubModel.ST_5c01ba3e57fed3646e0d84a6d769c24eStructure());
}, true, tradershubModel.ST_5c01ba3e57fed3646e0d84a6d769c24eStructure)
].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
}

static fromStructure(str) {
return new RC_27f174768a883bc2fd02083ad34399ea(new RC_27f174768a883bc2fd02083ad34399ea.RecordClass({
scoreAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
}

}

tradershubModel.RC_27f174768a883bc2fd02083ad34399ea = RC_27f174768a883bc2fd02083ad34399eaInner;

RC_27f174768a883bc2fd02083ad34399eaInner._isAnonymousRecord = true;
RC_27f174768a883bc2fd02083ad34399eaInner.UniqueId = "27f17476-8a88-3bc2-fd02-083ad34399ea";
var RC_27f174768a883bc2fd02083ad34399ea = RC_27f174768a883bc2fd02083ad34399eaInner;
RC_27f174768a883bc2fd02083ad34399ea.init();
}
});

define("tradershub.model$ST_27f8ec64ca98713144ae178da75c54abStructure", ["exports", "@outsystems/runtime-core-js", "tradershub.model"], function (exports, OSRuntimeCore, tradershubModel) {
var OS = OSRuntimeCore;
{class ST_27f8ec64ca98713144ae178da75c54abStructureInner extends 
OS.DataTypes.GenericRecord {
static attributesToDeclare() {
return [
this.attr("Text", "textAttr", "text", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Value", "valueAttr", "value", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true)
].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
}

}

tradershubModel.ST_27f8ec64ca98713144ae178da75c54abStructure = ST_27f8ec64ca98713144ae178da75c54abStructureInner;

var ST_27f8ec64ca98713144ae178da75c54abStructure = ST_27f8ec64ca98713144ae178da75c54abStructureInner;
ST_27f8ec64ca98713144ae178da75c54abStructure.init();
}
});

define("tradershub.model$AttachmentRec", ["exports", "@outsystems/runtime-core-js", "tradershub.model"], function (exports, OSRuntimeCore, tradershubModel) {
var OS = OSRuntimeCore;
{class AttachmentRecInner extends 
OS.DataTypes.GenericRecord {
static attributesToDeclare() {
return [
this.attr("FileName", "fileNameAttr", "FileName", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("FileContent", "fileContentAttr", "FileContent", false, false, OS.DataTypes.DataTypes.BinaryData, function () {
return OS.DataTypes.BinaryData.defaultValue;
}, true), 
this.attr("MimeType", "mimeTypeAttr", "MimeType", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true)
].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
}

}

tradershubModel.AttachmentRec = AttachmentRecInner;

var AttachmentRec = AttachmentRecInner;
AttachmentRec.init();
}
});

define("tradershub.model$ST_fc4d5763569aba995364c403cc3ed840Structure", ["exports", "@outsystems/runtime-core-js", "tradershub.model"], function (exports, OSRuntimeCore, tradershubModel) {
var OS = OSRuntimeCore;
{class ST_fc4d5763569aba995364c403cc3ed840StructureInner extends 
OS.DataTypes.GenericRecord {
static attributesToDeclare() {
return [
this.attr("Type", "typeAttr", "type", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true)
].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
}

static fromStructure(str) {
return new ST_fc4d5763569aba995364c403cc3ed840Structure(new ST_fc4d5763569aba995364c403cc3ed840Structure.RecordClass({
typeAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
}

}

tradershubModel.ST_fc4d5763569aba995364c403cc3ed840Structure = ST_fc4d5763569aba995364c403cc3ed840StructureInner;

var ST_fc4d5763569aba995364c403cc3ed840Structure = ST_fc4d5763569aba995364c403cc3ed840StructureInner;
ST_fc4d5763569aba995364c403cc3ed840Structure.init();
}
});

define("tradershub.model$RC_936e1b512349c18a7192979d79e8bab3", ["exports", "@outsystems/runtime-core-js", "tradershub.model", "tradershub.model$ST_fc4d5763569aba995364c403cc3ed840Structure"], function (exports, OSRuntimeCore, tradershubModel) {
var OS = OSRuntimeCore;
{class RC_936e1b512349c18a7192979d79e8bab3Inner extends 
OS.DataTypes.GenericRecord {
static attributesToDeclare() {
return [
this.attr("Missingproperty_", "missingproperty_Attr", "Missingproperty_", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new tradershubModel.ST_fc4d5763569aba995364c403cc3ed840Structure());
}, true, tradershubModel.ST_fc4d5763569aba995364c403cc3ed840Structure)
].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
}

static fromStructure(str) {
return new RC_936e1b512349c18a7192979d79e8bab3(new RC_936e1b512349c18a7192979d79e8bab3.RecordClass({
missingproperty_Attr: OS.DataTypes.ImmutableBase.getData(str)
}));
}

}

tradershubModel.RC_936e1b512349c18a7192979d79e8bab3 = RC_936e1b512349c18a7192979d79e8bab3Inner;

RC_936e1b512349c18a7192979d79e8bab3Inner._isAnonymousRecord = true;
RC_936e1b512349c18a7192979d79e8bab3Inner.UniqueId = "936e1b51-2349-c18a-7192-979d79e8bab3";
var RC_936e1b512349c18a7192979d79e8bab3 = RC_936e1b512349c18a7192979d79e8bab3Inner;
RC_936e1b512349c18a7192979d79e8bab3.init();
}
});

define("tradershub.model$RL_2874fb7e159277b350e6802ab7d5fcb6", ["exports", "@outsystems/runtime-core-js", "tradershub.model", "tradershub.model$RC_936e1b512349c18a7192979d79e8bab3"], function (exports, OSRuntimeCore, tradershubModel) {
var OS = OSRuntimeCore;
class RL_2874fb7e159277b350e6802ab7d5fcb6 extends 
OS.DataTypes.GenericRecordList {
static getItemType() {
return tradershubModel.RC_936e1b512349c18a7192979d79e8bab3;
}

}

tradershubModel.RL_2874fb7e159277b350e6802ab7d5fcb6 = RL_2874fb7e159277b350e6802ab7d5fcb6;

});

define("tradershub.model$RC_3836c6494dc01a6dca1bf0597beb32bb", ["exports", "@outsystems/runtime-core-js", "OutSystemsMaps.model", "tradershub.model", "OutSystemsMaps.model$ST_f85923824a33f65ded14770af5377402Structure", "tradershub.referencesHealth", "tradershub.referencesHealth$OutSystemsMaps"], function (exports, OSRuntimeCore, OutSystemsMapsModel, tradershubModel) {
var OS = OSRuntimeCore;
{class RC_3836c6494dc01a6dca1bf0597beb32bbInner extends 
OS.DataTypes.GenericRecord {
static attributesToDeclare() {
return [
this.attr("OptionalPolylineConfigs", "optionalPolylineConfigsAttr", "OptionalPolylineConfigs", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new OutSystemsMapsModel.ST_f85923824a33f65ded14770af5377402Structure());
}, true, OutSystemsMapsModel.ST_f85923824a33f65ded14770af5377402Structure)
].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
}

static fromStructure(str) {
return new RC_3836c6494dc01a6dca1bf0597beb32bb(new RC_3836c6494dc01a6dca1bf0597beb32bb.RecordClass({
optionalPolylineConfigsAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
}

}

tradershubModel.RC_3836c6494dc01a6dca1bf0597beb32bb = RC_3836c6494dc01a6dca1bf0597beb32bbInner;

RC_3836c6494dc01a6dca1bf0597beb32bbInner._isAnonymousRecord = true;
RC_3836c6494dc01a6dca1bf0597beb32bbInner.UniqueId = "3836c649-4dc0-1a6d-ca1b-f0597beb32bb";
var RC_3836c6494dc01a6dca1bf0597beb32bb = RC_3836c6494dc01a6dca1bf0597beb32bbInner;
RC_3836c6494dc01a6dca1bf0597beb32bb.init();
}
});

define("tradershub.model$RL_28b1907e8293683af0c45f54c4d2b8d8", ["exports", "@outsystems/runtime-core-js", "tradershub.model", "tradershub.model$RC_3836c6494dc01a6dca1bf0597beb32bb"], function (exports, OSRuntimeCore, tradershubModel) {
var OS = OSRuntimeCore;
class RL_28b1907e8293683af0c45f54c4d2b8d8 extends 
OS.DataTypes.GenericRecordList {
static getItemType() {
return tradershubModel.RC_3836c6494dc01a6dca1bf0597beb32bb;
}

}

tradershubModel.RL_28b1907e8293683af0c45f54c4d2b8d8 = RL_28b1907e8293683af0c45f54c4d2b8d8;

});

define("tradershub.model$RL_28ec2395d86f334f680eeb731e3a4c0d", ["exports", "@outsystems/runtime-core-js", "RESTAPIWebsocket.model", "tradershub.model", "RESTAPIWebsocket.model$ST_6402c4649ff74b758c1e125d40bbb193Structure", "tradershub.referencesHealth", "tradershub.referencesHealth$RESTAPIWebsocket"], function (exports, OSRuntimeCore, RESTAPIWebsocketModel, tradershubModel) {
var OS = OSRuntimeCore;
class RL_28ec2395d86f334f680eeb731e3a4c0d extends 
OS.DataTypes.GenericRecordList {
static getItemType() {
return RESTAPIWebsocketModel.ST_6402c4649ff74b758c1e125d40bbb193Structure;
}

}

tradershubModel.RL_28ec2395d86f334f680eeb731e3a4c0d = RL_28ec2395d86f334f680eeb731e3a4c0d;

});

define("tradershub.model$RC_82e915cb61269c2e1fb30ed84469e07b", ["exports", "@outsystems/runtime-core-js", "RESTAPIWebsocket.model", "tradershub.model", "RESTAPIWebsocket.model$ST_c4a5ea0056d7d4d64b0630a9fc26f60bStructure", "tradershub.referencesHealth", "tradershub.referencesHealth$RESTAPIWebsocket"], function (exports, OSRuntimeCore, RESTAPIWebsocketModel, tradershubModel) {
var OS = OSRuntimeCore;
{class RC_82e915cb61269c2e1fb30ed84469e07bInner extends 
OS.DataTypes.GenericRecord {
static attributesToDeclare() {
return [
this.attr("National_identity_card", "national_identity_cardAttr", "National_identity_card", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new RESTAPIWebsocketModel.ST_c4a5ea0056d7d4d64b0630a9fc26f60bStructure());
}, true, RESTAPIWebsocketModel.ST_c4a5ea0056d7d4d64b0630a9fc26f60bStructure)
].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
}

static fromStructure(str) {
return new RC_82e915cb61269c2e1fb30ed84469e07b(new RC_82e915cb61269c2e1fb30ed84469e07b.RecordClass({
national_identity_cardAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
}

}

tradershubModel.RC_82e915cb61269c2e1fb30ed84469e07b = RC_82e915cb61269c2e1fb30ed84469e07bInner;

RC_82e915cb61269c2e1fb30ed84469e07bInner._isAnonymousRecord = true;
RC_82e915cb61269c2e1fb30ed84469e07bInner.UniqueId = "82e915cb-6126-9c2e-1fb3-0ed84469e07b";
var RC_82e915cb61269c2e1fb30ed84469e07b = RC_82e915cb61269c2e1fb30ed84469e07bInner;
RC_82e915cb61269c2e1fb30ed84469e07b.init();
}
});

define("tradershub.model$RL_29080a69ee1ce69b9b697bf94281f9ff", ["exports", "@outsystems/runtime-core-js", "tradershub.model", "tradershub.model$RC_82e915cb61269c2e1fb30ed84469e07b"], function (exports, OSRuntimeCore, tradershubModel) {
var OS = OSRuntimeCore;
class RL_29080a69ee1ce69b9b697bf94281f9ff extends 
OS.DataTypes.GenericRecordList {
static getItemType() {
return tradershubModel.RC_82e915cb61269c2e1fb30ed84469e07b;
}

}

tradershubModel.RL_29080a69ee1ce69b9b697bf94281f9ff = RL_29080a69ee1ce69b9b697bf94281f9ff;

});

define("tradershub.model$ST_771888a7c88d31c2c35d9cb462eaf9dfStructure", ["exports", "@outsystems/runtime-core-js", "tradershub.model"], function (exports, OSRuntimeCore, tradershubModel) {
var OS = OSRuntimeCore;
{class ST_771888a7c88d31c2c35d9cb462eaf9dfStructureInner extends 
OS.DataTypes.GenericRecord {
static attributesToDeclare() {
return [
this.attr("Address", "addressAttr", "Address", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Town", "townAttr", "Town", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("State", "stateAttr", "State", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("PostCode", "postCodeAttr", "PostCode", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true)
].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
}

}

tradershubModel.ST_771888a7c88d31c2c35d9cb462eaf9dfStructure = ST_771888a7c88d31c2c35d9cb462eaf9dfStructureInner;

var ST_771888a7c88d31c2c35d9cb462eaf9dfStructure = ST_771888a7c88d31c2c35d9cb462eaf9dfStructureInner;
ST_771888a7c88d31c2c35d9cb462eaf9dfStructure.init();
}
});

define("tradershub.model$RC_cf689f779c994c5a88939f834fc354ca", ["exports", "@outsystems/runtime-core-js", "tradershub.model", "tradershub.model$ST_771888a7c88d31c2c35d9cb462eaf9dfStructure"], function (exports, OSRuntimeCore, tradershubModel) {
var OS = OSRuntimeCore;
{class RC_cf689f779c994c5a88939f834fc354caInner extends 
OS.DataTypes.GenericRecord {
static attributesToDeclare() {
return [
this.attr("AddressDetailsValidationError", "addressDetailsValidationErrorAttr", "AddressDetailsValidationError", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new tradershubModel.ST_771888a7c88d31c2c35d9cb462eaf9dfStructure());
}, true, tradershubModel.ST_771888a7c88d31c2c35d9cb462eaf9dfStructure)
].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
}

static fromStructure(str) {
return new RC_cf689f779c994c5a88939f834fc354ca(new RC_cf689f779c994c5a88939f834fc354ca.RecordClass({
addressDetailsValidationErrorAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
}

}

tradershubModel.RC_cf689f779c994c5a88939f834fc354ca = RC_cf689f779c994c5a88939f834fc354caInner;

RC_cf689f779c994c5a88939f834fc354caInner._isAnonymousRecord = true;
RC_cf689f779c994c5a88939f834fc354caInner.UniqueId = "cf689f77-9c99-4c5a-8893-9f834fc354ca";
var RC_cf689f779c994c5a88939f834fc354ca = RC_cf689f779c994c5a88939f834fc354caInner;
RC_cf689f779c994c5a88939f834fc354ca.init();
}
});

define("tradershub.model$RL_294e7fa6f4ea2c75e6fa553916c277dc", ["exports", "@outsystems/runtime-core-js", "tradershub.model", "tradershub.model$RC_cf689f779c994c5a88939f834fc354ca"], function (exports, OSRuntimeCore, tradershubModel) {
var OS = OSRuntimeCore;
class RL_294e7fa6f4ea2c75e6fa553916c277dc extends 
OS.DataTypes.GenericRecordList {
static getItemType() {
return tradershubModel.RC_cf689f779c994c5a88939f834fc354ca;
}

}

tradershubModel.RL_294e7fa6f4ea2c75e6fa553916c277dc = RL_294e7fa6f4ea2c75e6fa553916c277dc;

});

define("tradershub.model$RC_cd5e42a0793d8eb69fbc5056fff3f372", ["exports", "@outsystems/runtime-core-js", "RESTAPIWebsocket.model", "tradershub.model", "RESTAPIWebsocket.model$ST_55ea19c18b42991c3f5575c063ad7ca7Structure", "tradershub.referencesHealth", "tradershub.referencesHealth$RESTAPIWebsocket"], function (exports, OSRuntimeCore, RESTAPIWebsocketModel, tradershubModel) {
var OS = OSRuntimeCore;
{class RC_cd5e42a0793d8eb69fbc5056fff3f372Inner extends 
OS.DataTypes.GenericRecord {
static attributesToDeclare() {
return [
this.attr("Non_participating_jurisdiction", "non_participating_jurisdictionAttr", "Non_participating_jurisdiction", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new RESTAPIWebsocketModel.ST_55ea19c18b42991c3f5575c063ad7ca7Structure());
}, true, RESTAPIWebsocketModel.ST_55ea19c18b42991c3f5575c063ad7ca7Structure)
].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
}

static fromStructure(str) {
return new RC_cd5e42a0793d8eb69fbc5056fff3f372(new RC_cd5e42a0793d8eb69fbc5056fff3f372.RecordClass({
non_participating_jurisdictionAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
}

}

tradershubModel.RC_cd5e42a0793d8eb69fbc5056fff3f372 = RC_cd5e42a0793d8eb69fbc5056fff3f372Inner;

RC_cd5e42a0793d8eb69fbc5056fff3f372Inner._isAnonymousRecord = true;
RC_cd5e42a0793d8eb69fbc5056fff3f372Inner.UniqueId = "cd5e42a0-793d-8eb6-9fbc-5056fff3f372";
var RC_cd5e42a0793d8eb69fbc5056fff3f372 = RC_cd5e42a0793d8eb69fbc5056fff3f372Inner;
RC_cd5e42a0793d8eb69fbc5056fff3f372.init();
}
});

define("tradershub.model$RL_296c80117ea3feed92d93a9342c06001", ["exports", "@outsystems/runtime-core-js", "tradershub.model", "tradershub.model$RC_cd5e42a0793d8eb69fbc5056fff3f372"], function (exports, OSRuntimeCore, tradershubModel) {
var OS = OSRuntimeCore;
class RL_296c80117ea3feed92d93a9342c06001 extends 
OS.DataTypes.GenericRecordList {
static getItemType() {
return tradershubModel.RC_cd5e42a0793d8eb69fbc5056fff3f372;
}

}

tradershubModel.RL_296c80117ea3feed92d93a9342c06001 = RL_296c80117ea3feed92d93a9342c06001;

});

define("tradershub.model$RL_2a702ffc9c0b13df355efec0d2156b96", ["exports", "@outsystems/runtime-core-js", "tradershub.model", "tradershub.model$ST_c73d23121ed7b75585394958b5922504Structure"], function (exports, OSRuntimeCore, tradershubModel) {
var OS = OSRuntimeCore;
class RL_2a702ffc9c0b13df355efec0d2156b96 extends 
OS.DataTypes.GenericRecordList {
static getItemType() {
return tradershubModel.ST_c73d23121ed7b75585394958b5922504Structure;
}

}

tradershubModel.RL_2a702ffc9c0b13df355efec0d2156b96 = RL_2a702ffc9c0b13df355efec0d2156b96;

});

define("tradershub.model$ST_40181b9b51fffeffb473febe3bfa6ddbStructure", ["exports", "@outsystems/runtime-core-js", "tradershub.model"], function (exports, OSRuntimeCore, tradershubModel) {
var OS = OSRuntimeCore;
{class ST_40181b9b51fffeffb473febe3bfa6ddbStructureInner extends 
OS.DataTypes.GenericRecord {
static attributesToDeclare() {
return [
this.attr("Referring", "referringAttr", "referring", false, false, OS.DataTypes.DataTypes.RecordList, function () {
return OS.DataTypes.ImmutableBase.getData(new OS.DataTypes.TextList());
}, true, OS.DataTypes.TextList), 
this.attr("Identifying", "identifyingAttr", "identifying", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true)
].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
}

}

tradershubModel.ST_40181b9b51fffeffb473febe3bfa6ddbStructure = ST_40181b9b51fffeffb473febe3bfa6ddbStructureInner;

var ST_40181b9b51fffeffb473febe3bfa6ddbStructure = ST_40181b9b51fffeffb473febe3bfa6ddbStructureInner;
ST_40181b9b51fffeffb473febe3bfa6ddbStructure.init();
}
});

define("tradershub.model$ST_7826619511bee33bd1dc03b2ea2c1717Structure", ["exports", "@outsystems/runtime-core-js", "tradershub.model"], function (exports, OSRuntimeCore, tradershubModel) {
var OS = OSRuntimeCore;
{class ST_7826619511bee33bd1dc03b2ea2c1717StructureInner extends 
OS.DataTypes.GenericRecord {
static attributesToDeclare() {
return [
this.attr("Total", "totalAttr", "total", false, false, OS.DataTypes.DataTypes.LongInteger, function () {
return OS.DataTypes.LongInteger.defaultValue;
}, true), 
this.attr("UsedForTrustScoreCalculation", "usedForTrustScoreCalculationAttr", "usedForTrustScoreCalculation", false, false, OS.DataTypes.DataTypes.LongInteger, function () {
return OS.DataTypes.LongInteger.defaultValue;
}, true), 
this.attr("OneStar", "oneStarAttr", "oneStar", false, false, OS.DataTypes.DataTypes.LongInteger, function () {
return OS.DataTypes.LongInteger.defaultValue;
}, true), 
this.attr("TwoStars", "twoStarsAttr", "twoStars", false, false, OS.DataTypes.DataTypes.LongInteger, function () {
return OS.DataTypes.LongInteger.defaultValue;
}, true), 
this.attr("ThreeStars", "threeStarsAttr", "threeStars", false, false, OS.DataTypes.DataTypes.LongInteger, function () {
return OS.DataTypes.LongInteger.defaultValue;
}, true), 
this.attr("FourStars", "fourStarsAttr", "fourStars", false, false, OS.DataTypes.DataTypes.LongInteger, function () {
return OS.DataTypes.LongInteger.defaultValue;
}, true), 
this.attr("FiveStars", "fiveStarsAttr", "fiveStars", false, false, OS.DataTypes.DataTypes.LongInteger, function () {
return OS.DataTypes.LongInteger.defaultValue;
}, true)
].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
}

}

tradershubModel.ST_7826619511bee33bd1dc03b2ea2c1717Structure = ST_7826619511bee33bd1dc03b2ea2c1717StructureInner;

var ST_7826619511bee33bd1dc03b2ea2c1717Structure = ST_7826619511bee33bd1dc03b2ea2c1717StructureInner;
ST_7826619511bee33bd1dc03b2ea2c1717Structure.init();
}
});

define("tradershub.model$ST_93ef64f8dfe1ec688524daa02560c1d7Structure", ["exports", "@outsystems/runtime-core-js", "tradershub.model"], function (exports, OSRuntimeCore, tradershubModel) {
var OS = OSRuntimeCore;
{class ST_93ef64f8dfe1ec688524daa02560c1d7StructureInner extends 
OS.DataTypes.GenericRecord {
static attributesToDeclare() {
return [
this.attr("Href", "hrefAttr", "href", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Rel", "relAttr", "rel", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Method", "methodAttr", "method", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true)
].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
}

}

tradershubModel.ST_93ef64f8dfe1ec688524daa02560c1d7Structure = ST_93ef64f8dfe1ec688524daa02560c1d7StructureInner;

var ST_93ef64f8dfe1ec688524daa02560c1d7Structure = ST_93ef64f8dfe1ec688524daa02560c1d7StructureInner;
ST_93ef64f8dfe1ec688524daa02560c1d7Structure.init();
}
});

define("tradershub.model$RL_9e634fdc16ce60632b2add6fe5b7eb41", ["exports", "@outsystems/runtime-core-js", "tradershub.model", "tradershub.model$ST_93ef64f8dfe1ec688524daa02560c1d7Structure"], function (exports, OSRuntimeCore, tradershubModel) {
var OS = OSRuntimeCore;
class RL_9e634fdc16ce60632b2add6fe5b7eb41 extends 
OS.DataTypes.GenericRecordList {
static getItemType() {
return tradershubModel.ST_93ef64f8dfe1ec688524daa02560c1d7Structure;
}

}

tradershubModel.RL_9e634fdc16ce60632b2add6fe5b7eb41 = RL_9e634fdc16ce60632b2add6fe5b7eb41;

});

define("tradershub.model$ST_d9250f167f0b0818f60ee73b22ec1a06Structure", ["exports", "@outsystems/runtime-core-js", "tradershub.model", "tradershub.model$ST_40181b9b51fffeffb473febe3bfa6ddbStructure", "tradershub.model$ST_5c01ba3e57fed3646e0d84a6d769c24eStructure", "tradershub.model$ST_7826619511bee33bd1dc03b2ea2c1717Structure", "tradershub.model$ST_93ef64f8dfe1ec688524daa02560c1d7Structure", "tradershub.model$RL_9e634fdc16ce60632b2add6fe5b7eb41"], function (exports, OSRuntimeCore, tradershubModel) {
var OS = OSRuntimeCore;
{class ST_d9250f167f0b0818f60ee73b22ec1a06StructureInner extends 
OS.DataTypes.GenericRecord {
static attributesToDeclare() {
return [
this.attr("Id", "idAttr", "id", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Country", "countryAttr", "country", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("DisplayName", "displayNameAttr", "displayName", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Name", "nameAttr", "name", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new tradershubModel.ST_40181b9b51fffeffb473febe3bfa6ddbStructure());
}, true, tradershubModel.ST_40181b9b51fffeffb473febe3bfa6ddbStructure), 
this.attr("Score", "scoreAttr", "score", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new tradershubModel.ST_5c01ba3e57fed3646e0d84a6d769c24eStructure());
}, true, tradershubModel.ST_5c01ba3e57fed3646e0d84a6d769c24eStructure), 
this.attr("Status", "statusAttr", "status", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("WebsiteUrl", "websiteUrlAttr", "websiteUrl", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("NumberOfReviews", "numberOfReviewsAttr", "numberOfReviews", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new tradershubModel.ST_7826619511bee33bd1dc03b2ea2c1717Structure());
}, true, tradershubModel.ST_7826619511bee33bd1dc03b2ea2c1717Structure), 
this.attr("Links", "linksAttr", "links", false, false, OS.DataTypes.DataTypes.RecordList, function () {
return OS.DataTypes.ImmutableBase.getData(new tradershubModel.RL_9e634fdc16ce60632b2add6fe5b7eb41());
}, true, tradershubModel.RL_9e634fdc16ce60632b2add6fe5b7eb41)
].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
}

}

tradershubModel.ST_d9250f167f0b0818f60ee73b22ec1a06Structure = ST_d9250f167f0b0818f60ee73b22ec1a06StructureInner;

var ST_d9250f167f0b0818f60ee73b22ec1a06Structure = ST_d9250f167f0b0818f60ee73b22ec1a06StructureInner;
ST_d9250f167f0b0818f60ee73b22ec1a06Structure.init();
}
});

define("tradershub.model$RC_2a77ab94ed6fec349962a10d5680464f", ["exports", "@outsystems/runtime-core-js", "tradershub.model", "tradershub.model$ST_d9250f167f0b0818f60ee73b22ec1a06Structure"], function (exports, OSRuntimeCore, tradershubModel) {
var OS = OSRuntimeCore;
{class RC_2a77ab94ed6fec349962a10d5680464fInner extends 
OS.DataTypes.GenericRecord {
static attributesToDeclare() {
return [
this.attr("GetFindResponse", "getFindResponseAttr", "GetFindResponse", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new tradershubModel.ST_d9250f167f0b0818f60ee73b22ec1a06Structure());
}, true, tradershubModel.ST_d9250f167f0b0818f60ee73b22ec1a06Structure)
].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
}

static fromStructure(str) {
return new RC_2a77ab94ed6fec349962a10d5680464f(new RC_2a77ab94ed6fec349962a10d5680464f.RecordClass({
getFindResponseAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
}

}

tradershubModel.RC_2a77ab94ed6fec349962a10d5680464f = RC_2a77ab94ed6fec349962a10d5680464fInner;

RC_2a77ab94ed6fec349962a10d5680464fInner._isAnonymousRecord = true;
RC_2a77ab94ed6fec349962a10d5680464fInner.UniqueId = "2a77ab94-ed6f-ec34-9962-a10d5680464f";
var RC_2a77ab94ed6fec349962a10d5680464f = RC_2a77ab94ed6fec349962a10d5680464fInner;
RC_2a77ab94ed6fec349962a10d5680464f.init();
}
});

define("tradershub.model$RC_2a9ff13787033a384677b0fe3115c25c", ["exports", "@outsystems/runtime-core-js", "tradershub.model", "tradershub.model$ST_7ec9f9f71a508e65d3bd48bc2778f754Structure"], function (exports, OSRuntimeCore, tradershubModel) {
var OS = OSRuntimeCore;
{class RC_2a9ff13787033a384677b0fe3115c25cInner extends 
OS.DataTypes.GenericRecord {
static attributesToDeclare() {
return [
this.attr("Max_proposal_subscription", "max_proposal_subscriptionAttr", "Max_proposal_subscription", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new tradershubModel.ST_7ec9f9f71a508e65d3bd48bc2778f754Structure());
}, true, tradershubModel.ST_7ec9f9f71a508e65d3bd48bc2778f754Structure)
].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
}

static fromStructure(str) {
return new RC_2a9ff13787033a384677b0fe3115c25c(new RC_2a9ff13787033a384677b0fe3115c25c.RecordClass({
max_proposal_subscriptionAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
}

}

tradershubModel.RC_2a9ff13787033a384677b0fe3115c25c = RC_2a9ff13787033a384677b0fe3115c25cInner;

RC_2a9ff13787033a384677b0fe3115c25cInner._isAnonymousRecord = true;
RC_2a9ff13787033a384677b0fe3115c25cInner.UniqueId = "2a9ff137-8703-3a38-4677-b0fe3115c25c";
var RC_2a9ff13787033a384677b0fe3115c25c = RC_2a9ff13787033a384677b0fe3115c25cInner;
RC_2a9ff13787033a384677b0fe3115c25c.init();
}
});

define("tradershub.model$RC_2ab43c4c70496101f2387f8470c630be", ["exports", "@outsystems/runtime-core-js", "tradershub.model", "tradershub.model$ST_27f8ec64ca98713144ae178da75c54abStructure"], function (exports, OSRuntimeCore, tradershubModel) {
var OS = OSRuntimeCore;
{class RC_2ab43c4c70496101f2387f8470c630beInner extends 
OS.DataTypes.GenericRecord {
static attributesToDeclare() {
return [
this.attr("States_listItem", "states_listItemAttr", "States_listItem", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new tradershubModel.ST_27f8ec64ca98713144ae178da75c54abStructure());
}, true, tradershubModel.ST_27f8ec64ca98713144ae178da75c54abStructure)
].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
}

static fromStructure(str) {
return new RC_2ab43c4c70496101f2387f8470c630be(new RC_2ab43c4c70496101f2387f8470c630be.RecordClass({
states_listItemAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
}

}

tradershubModel.RC_2ab43c4c70496101f2387f8470c630be = RC_2ab43c4c70496101f2387f8470c630beInner;

RC_2ab43c4c70496101f2387f8470c630beInner._isAnonymousRecord = true;
RC_2ab43c4c70496101f2387f8470c630beInner.UniqueId = "2ab43c4c-7049-6101-f238-7f8470c630be";
var RC_2ab43c4c70496101f2387f8470c630be = RC_2ab43c4c70496101f2387f8470c630beInner;
RC_2ab43c4c70496101f2387f8470c630be.init();
}
});

define("tradershub.model$RC_2ac88c51f2d9ed908454e6a06ffe188e", ["exports", "@outsystems/runtime-core-js", "OutSystemsUI.model", "tradershub.model", "OutSystemsUI.model$ST_4e53cb8815b86020ced1d2f2652c9b1dStructure", "tradershub.referencesHealth", "tradershub.referencesHealth$OutSystemsUI"], function (exports, OSRuntimeCore, OutSystemsUIModel, tradershubModel) {
var OS = OSRuntimeCore;
{class RC_2ac88c51f2d9ed908454e6a06ffe188eInner extends 
OS.DataTypes.GenericRecord {
static attributesToDeclare() {
return [
this.attr("DropdownOptionalConfigs", "dropdownOptionalConfigsAttr", "DropdownOptionalConfigs", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new OutSystemsUIModel.ST_4e53cb8815b86020ced1d2f2652c9b1dStructure());
}, true, OutSystemsUIModel.ST_4e53cb8815b86020ced1d2f2652c9b1dStructure)
].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
}

static fromStructure(str) {
return new RC_2ac88c51f2d9ed908454e6a06ffe188e(new RC_2ac88c51f2d9ed908454e6a06ffe188e.RecordClass({
dropdownOptionalConfigsAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
}

}

tradershubModel.RC_2ac88c51f2d9ed908454e6a06ffe188e = RC_2ac88c51f2d9ed908454e6a06ffe188eInner;

RC_2ac88c51f2d9ed908454e6a06ffe188eInner._isAnonymousRecord = true;
RC_2ac88c51f2d9ed908454e6a06ffe188eInner.UniqueId = "2ac88c51-f2d9-ed90-8454-e6a06ffe188e";
var RC_2ac88c51f2d9ed908454e6a06ffe188e = RC_2ac88c51f2d9ed908454e6a06ffe188eInner;
RC_2ac88c51f2d9ed908454e6a06ffe188e.init();
}
});

define("tradershub.model$RL_2b1a3419eafdbc343d89f210b76f82c7", ["exports", "@outsystems/runtime-core-js", "RESTAPIWebsocket.model", "tradershub.model", "RESTAPIWebsocket.model$ST_ddeabbcab252c99fc5f083425434b2a7Structure", "tradershub.referencesHealth", "tradershub.referencesHealth$RESTAPIWebsocket"], function (exports, OSRuntimeCore, RESTAPIWebsocketModel, tradershubModel) {
var OS = OSRuntimeCore;
class RL_2b1a3419eafdbc343d89f210b76f82c7 extends 
OS.DataTypes.GenericRecordList {
static getItemType() {
return RESTAPIWebsocketModel.ST_ddeabbcab252c99fc5f083425434b2a7Structure;
}

}

tradershubModel.RL_2b1a3419eafdbc343d89f210b76f82c7 = RL_2b1a3419eafdbc343d89f210b76f82c7;

});

define("tradershub.model$RL_93aac6f383f04a9d0a0e078d2dec0d9f", ["exports", "@outsystems/runtime-core-js", "tradershub.model", "tradershub.model$ST_52667a49e65b5175f66dacecb12f345fStructure"], function (exports, OSRuntimeCore, tradershubModel) {
var OS = OSRuntimeCore;
class RL_93aac6f383f04a9d0a0e078d2dec0d9f extends 
OS.DataTypes.GenericRecordList {
static getItemType() {
return tradershubModel.ST_52667a49e65b5175f66dacecb12f345fStructure;
}

}

tradershubModel.RL_93aac6f383f04a9d0a0e078d2dec0d9f = RL_93aac6f383f04a9d0a0e078d2dec0d9f;

});

define("tradershub.model$ST_8d630435c078369fbe29222c857e96f2Structure", ["exports", "@outsystems/runtime-core-js", "tradershub.model", "tradershub.model$ST_52667a49e65b5175f66dacecb12f345fStructure", "tradershub.model$RL_93aac6f383f04a9d0a0e078d2dec0d9f", "tradershub.model$ST_10c9c671ed7b6c5f671603b2ebe64123Structure"], function (exports, OSRuntimeCore, tradershubModel) {
var OS = OSRuntimeCore;
{class ST_8d630435c078369fbe29222c857e96f2StructureInner extends 
OS.DataTypes.GenericRecord {
static attributesToDeclare() {
return [
this.attr("Account_list", "account_listAttr", "account_list", false, false, OS.DataTypes.DataTypes.RecordList, function () {
return OS.DataTypes.ImmutableBase.getData(new tradershubModel.RL_93aac6f383f04a9d0a0e078d2dec0d9f());
}, true, tradershubModel.RL_93aac6f383f04a9d0a0e078d2dec0d9f), 
this.attr("Balance", "balanceAttr", "balance", false, false, OS.DataTypes.DataTypes.LongInteger, function () {
return OS.DataTypes.LongInteger.defaultValue;
}, true), 
this.attr("Country", "countryAttr", "country", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Currency", "currencyAttr", "currency", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Email", "emailAttr", "email", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Fullname", "fullnameAttr", "fullname", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Is_virtual", "is_virtualAttr", "is_virtual", false, false, OS.DataTypes.DataTypes.LongInteger, function () {
return OS.DataTypes.LongInteger.defaultValue;
}, true), 
this.attr("Landing_company_fullname", "landing_company_fullnameAttr", "landing_company_fullname", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Landing_company_name", "landing_company_nameAttr", "landing_company_name", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Local_currencies", "local_currenciesAttr", "local_currencies", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new tradershubModel.ST_10c9c671ed7b6c5f671603b2ebe64123Structure());
}, true, tradershubModel.ST_10c9c671ed7b6c5f671603b2ebe64123Structure), 
this.attr("Loginid", "loginidAttr", "loginid", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Preferred_language", "preferred_languageAttr", "preferred_language", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Scopes", "scopesAttr", "scopes", false, false, OS.DataTypes.DataTypes.RecordList, function () {
return OS.DataTypes.ImmutableBase.getData(new OS.DataTypes.TextList());
}, true, OS.DataTypes.TextList), 
this.attr("Upgradeable_landing_companies", "upgradeable_landing_companiesAttr", "upgradeable_landing_companies", false, false, OS.DataTypes.DataTypes.RecordList, function () {
return OS.DataTypes.ImmutableBase.getData(new OS.DataTypes.TextList());
}, true, OS.DataTypes.TextList), 
this.attr("User_id", "user_idAttr", "user_id", false, false, OS.DataTypes.DataTypes.LongInteger, function () {
return OS.DataTypes.LongInteger.defaultValue;
}, true)
].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
}

}

tradershubModel.ST_8d630435c078369fbe29222c857e96f2Structure = ST_8d630435c078369fbe29222c857e96f2StructureInner;

var ST_8d630435c078369fbe29222c857e96f2Structure = ST_8d630435c078369fbe29222c857e96f2StructureInner;
ST_8d630435c078369fbe29222c857e96f2Structure.init();
}
});

define("tradershub.model$ST_2b68b61da9b8f6db8463a60cc48350faStructure", ["exports", "@outsystems/runtime-core-js", "tradershub.model", "tradershub.model$ST_8d630435c078369fbe29222c857e96f2Structure"], function (exports, OSRuntimeCore, tradershubModel) {
var OS = OSRuntimeCore;
{class ST_2b68b61da9b8f6db8463a60cc48350faStructureInner extends 
OS.DataTypes.GenericRecord {
static attributesToDeclare() {
return [
this.attr("Authorize", "authorizeAttr", "authorize", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new tradershubModel.ST_8d630435c078369fbe29222c857e96f2Structure());
}, true, tradershubModel.ST_8d630435c078369fbe29222c857e96f2Structure)
].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
}

static fromStructure(str) {
return new ST_2b68b61da9b8f6db8463a60cc48350faStructure(new ST_2b68b61da9b8f6db8463a60cc48350faStructure.RecordClass({
authorizeAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
}

}

tradershubModel.ST_2b68b61da9b8f6db8463a60cc48350faStructure = ST_2b68b61da9b8f6db8463a60cc48350faStructureInner;

var ST_2b68b61da9b8f6db8463a60cc48350faStructure = ST_2b68b61da9b8f6db8463a60cc48350faStructureInner;
ST_2b68b61da9b8f6db8463a60cc48350faStructure.init();
}
});

define("tradershub.model$RL_2b77ea7e9de0a43bd13dcd0ec4a48c51", ["exports", "@outsystems/runtime-core-js", "tradershub.model", "tradershub.model$RC_1ec8ce039f100a775e8587dc53ed1b5e"], function (exports, OSRuntimeCore, tradershubModel) {
var OS = OSRuntimeCore;
class RL_2b77ea7e9de0a43bd13dcd0ec4a48c51 extends 
OS.DataTypes.GenericRecordList {
static getItemType() {
return tradershubModel.RC_1ec8ce039f100a775e8587dc53ed1b5e;
}

}

tradershubModel.RL_2b77ea7e9de0a43bd13dcd0ec4a48c51 = RL_2b77ea7e9de0a43bd13dcd0ec4a48c51;

});

define("tradershub.model$RC_2b9e41428d5c5ca3b04a80be4ce98f53", ["exports", "@outsystems/runtime-core-js", "OutSystemsCharts.model", "tradershub.model", "OutSystemsCharts.model$ST_639b8c480159ce740702f0a0cf3b55a5Structure", "tradershub.referencesHealth", "tradershub.referencesHealth$OutSystemsCharts"], function (exports, OSRuntimeCore, OutSystemsChartsModel, tradershubModel) {
var OS = OSRuntimeCore;
{class RC_2b9e41428d5c5ca3b04a80be4ce98f53Inner extends 
OS.DataTypes.GenericRecord {
static attributesToDeclare() {
return [
this.attr("Legacy_ChartFormat", "legacy_ChartFormatAttr", "Legacy_ChartFormat", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new OutSystemsChartsModel.ST_639b8c480159ce740702f0a0cf3b55a5Structure());
}, true, OutSystemsChartsModel.ST_639b8c480159ce740702f0a0cf3b55a5Structure)
].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
}

static fromStructure(str) {
return new RC_2b9e41428d5c5ca3b04a80be4ce98f53(new RC_2b9e41428d5c5ca3b04a80be4ce98f53.RecordClass({
legacy_ChartFormatAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
}

}

tradershubModel.RC_2b9e41428d5c5ca3b04a80be4ce98f53 = RC_2b9e41428d5c5ca3b04a80be4ce98f53Inner;

RC_2b9e41428d5c5ca3b04a80be4ce98f53Inner._isAnonymousRecord = true;
RC_2b9e41428d5c5ca3b04a80be4ce98f53Inner.UniqueId = "2b9e4142-8d5c-5ca3-b04a-80be4ce98f53";
var RC_2b9e41428d5c5ca3b04a80be4ce98f53 = RC_2b9e41428d5c5ca3b04a80be4ce98f53Inner;
RC_2b9e41428d5c5ca3b04a80be4ce98f53.init();
}
});

define("tradershub.model$RC_63c659b6dc554b0b4f81d60382bf5fd6", ["exports", "@outsystems/runtime-core-js", "OutSystemsUI.model", "tradershub.model", "OutSystemsUI.model$EN_189b647ddc5c60c1aa5290bb6481a72dEntityRecord", "tradershub.referencesHealth", "tradershub.referencesHealth$OutSystemsUI"], function (exports, OSRuntimeCore, OutSystemsUIModel, tradershubModel) {
var OS = OSRuntimeCore;
{class RC_63c659b6dc554b0b4f81d60382bf5fd6Inner extends 
OS.DataTypes.GenericRecord {
static attributesToDeclare() {
return [
this.attr("MessageStatus", "messageStatusAttr", "MessageStatus", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new OutSystemsUIModel.EN_189b647ddc5c60c1aa5290bb6481a72dEntityRecord());
}, true, OutSystemsUIModel.EN_189b647ddc5c60c1aa5290bb6481a72dEntityRecord)
].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
}

static fromStructure(str) {
return new RC_63c659b6dc554b0b4f81d60382bf5fd6(new RC_63c659b6dc554b0b4f81d60382bf5fd6.RecordClass({
messageStatusAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
}

}

tradershubModel.RC_63c659b6dc554b0b4f81d60382bf5fd6 = RC_63c659b6dc554b0b4f81d60382bf5fd6Inner;

RC_63c659b6dc554b0b4f81d60382bf5fd6Inner._isAnonymousRecord = true;
RC_63c659b6dc554b0b4f81d60382bf5fd6Inner.UniqueId = "63c659b6-dc55-4b0b-4f81-d60382bf5fd6";
var RC_63c659b6dc554b0b4f81d60382bf5fd6 = RC_63c659b6dc554b0b4f81d60382bf5fd6Inner;
RC_63c659b6dc554b0b4f81d60382bf5fd6.init();
}
});

define("tradershub.model$RL_2c7706a8fd91e45cb8a8b97418bcf4d0", ["exports", "@outsystems/runtime-core-js", "tradershub.model", "tradershub.model$RC_63c659b6dc554b0b4f81d60382bf5fd6"], function (exports, OSRuntimeCore, tradershubModel) {
var OS = OSRuntimeCore;
class RL_2c7706a8fd91e45cb8a8b97418bcf4d0 extends 
OS.DataTypes.GenericRecordList {
static getItemType() {
return tradershubModel.RC_63c659b6dc554b0b4f81d60382bf5fd6;
}

}

tradershubModel.RL_2c7706a8fd91e45cb8a8b97418bcf4d0 = RL_2c7706a8fd91e45cb8a8b97418bcf4d0;

});

define("tradershub.model$RC_954cd1231210e70f33f184017bf580ac", ["exports", "@outsystems/runtime-core-js", "OutSystemsUI.model", "tradershub.model", "OutSystemsUI.model$EN_f43f179caddf7f7b68b18272d67285d6EntityRecord", "tradershub.referencesHealth", "tradershub.referencesHealth$OutSystemsUI"], function (exports, OSRuntimeCore, OutSystemsUIModel, tradershubModel) {
var OS = OSRuntimeCore;
{class RC_954cd1231210e70f33f184017bf580acInner extends 
OS.DataTypes.GenericRecord {
static attributesToDeclare() {
return [
this.attr("MenuAction", "menuActionAttr", "MenuAction", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new OutSystemsUIModel.EN_f43f179caddf7f7b68b18272d67285d6EntityRecord());
}, true, OutSystemsUIModel.EN_f43f179caddf7f7b68b18272d67285d6EntityRecord)
].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
}

static fromStructure(str) {
return new RC_954cd1231210e70f33f184017bf580ac(new RC_954cd1231210e70f33f184017bf580ac.RecordClass({
menuActionAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
}

}

tradershubModel.RC_954cd1231210e70f33f184017bf580ac = RC_954cd1231210e70f33f184017bf580acInner;

RC_954cd1231210e70f33f184017bf580acInner._isAnonymousRecord = true;
RC_954cd1231210e70f33f184017bf580acInner.UniqueId = "954cd123-1210-e70f-33f1-84017bf580ac";
var RC_954cd1231210e70f33f184017bf580ac = RC_954cd1231210e70f33f184017bf580acInner;
RC_954cd1231210e70f33f184017bf580ac.init();
}
});

define("tradershub.model$RL_2cadeb0c6f7df3cfbe06d89edb556615", ["exports", "@outsystems/runtime-core-js", "tradershub.model", "tradershub.model$RC_954cd1231210e70f33f184017bf580ac"], function (exports, OSRuntimeCore, tradershubModel) {
var OS = OSRuntimeCore;
class RL_2cadeb0c6f7df3cfbe06d89edb556615 extends 
OS.DataTypes.GenericRecordList {
static getItemType() {
return tradershubModel.RC_954cd1231210e70f33f184017bf580ac;
}

}

tradershubModel.RL_2cadeb0c6f7df3cfbe06d89edb556615 = RL_2cadeb0c6f7df3cfbe06d89edb556615;

});

define("tradershub.model$RC_6a7a0ee1367f228f045b5454d418d164", ["exports", "@outsystems/runtime-core-js", "tradershub.model", "tradershub.model$ST_4090eb1c8cd075ebe26f8bb290f1ff93Structure"], function (exports, OSRuntimeCore, tradershubModel) {
var OS = OSRuntimeCore;
{class RC_6a7a0ee1367f228f045b5454d418d164Inner extends 
OS.DataTypes.GenericRecord {
static attributesToDeclare() {
return [
this.attr("Limit", "limitAttr", "Limit", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new tradershubModel.ST_4090eb1c8cd075ebe26f8bb290f1ff93Structure());
}, true, tradershubModel.ST_4090eb1c8cd075ebe26f8bb290f1ff93Structure)
].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
}

static fromStructure(str) {
return new RC_6a7a0ee1367f228f045b5454d418d164(new RC_6a7a0ee1367f228f045b5454d418d164.RecordClass({
limitAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
}

}

tradershubModel.RC_6a7a0ee1367f228f045b5454d418d164 = RC_6a7a0ee1367f228f045b5454d418d164Inner;

RC_6a7a0ee1367f228f045b5454d418d164Inner._isAnonymousRecord = true;
RC_6a7a0ee1367f228f045b5454d418d164Inner.UniqueId = "6a7a0ee1-367f-228f-045b-5454d418d164";
var RC_6a7a0ee1367f228f045b5454d418d164 = RC_6a7a0ee1367f228f045b5454d418d164Inner;
RC_6a7a0ee1367f228f045b5454d418d164.init();
}
});

define("tradershub.model$RL_2cef0f5b3544246f599cb77ec3f70ea7", ["exports", "@outsystems/runtime-core-js", "tradershub.model", "tradershub.model$RC_6a7a0ee1367f228f045b5454d418d164"], function (exports, OSRuntimeCore, tradershubModel) {
var OS = OSRuntimeCore;
class RL_2cef0f5b3544246f599cb77ec3f70ea7 extends 
OS.DataTypes.GenericRecordList {
static getItemType() {
return tradershubModel.RC_6a7a0ee1367f228f045b5454d418d164;
}

}

tradershubModel.RL_2cef0f5b3544246f599cb77ec3f70ea7 = RL_2cef0f5b3544246f599cb77ec3f70ea7;

});

define("tradershub.model$RC_2d2b8fce9673870fca17c172a0607f00", ["exports", "@outsystems/runtime-core-js", "tradershub.model", "tradershub.model$EN_18a161aea4f6fead5f823df7320c3dd0EntityRecord"], function (exports, OSRuntimeCore, tradershubModel) {
var OS = OSRuntimeCore;
{class RC_2d2b8fce9673870fca17c172a0607f00Inner extends 
OS.DataTypes.GenericRecord {
static attributesToDeclare() {
return [
this.attr("DocumentTypes", "documentTypesAttr", "DocumentTypes", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new tradershubModel.EN_18a161aea4f6fead5f823df7320c3dd0EntityRecord());
}, true, tradershubModel.EN_18a161aea4f6fead5f823df7320c3dd0EntityRecord)
].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
}

static fromStructure(str) {
return new RC_2d2b8fce9673870fca17c172a0607f00(new RC_2d2b8fce9673870fca17c172a0607f00.RecordClass({
documentTypesAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
}

}

tradershubModel.RC_2d2b8fce9673870fca17c172a0607f00 = RC_2d2b8fce9673870fca17c172a0607f00Inner;

RC_2d2b8fce9673870fca17c172a0607f00Inner._isAnonymousRecord = true;
RC_2d2b8fce9673870fca17c172a0607f00Inner.UniqueId = "2d2b8fce-9673-870f-ca17-c172a0607f00";
var RC_2d2b8fce9673870fca17c172a0607f00 = RC_2d2b8fce9673870fca17c172a0607f00Inner;
RC_2d2b8fce9673870fca17c172a0607f00.init();
}
});

define("tradershub.model$RC_2d331d34aa02e5b2741655b3ecf842bf", ["exports", "@outsystems/runtime-core-js", "tradershub.model", "tradershub.model$ST_20ab4504e981d74f2db21e1503a31089Structure"], function (exports, OSRuntimeCore, tradershubModel) {
var OS = OSRuntimeCore;
{class RC_2d331d34aa02e5b2741655b3ecf842bfInner extends 
OS.DataTypes.GenericRecord {
static attributesToDeclare() {
return [
this.attr("Trading2", "trading2Attr", "Trading2", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new tradershubModel.ST_20ab4504e981d74f2db21e1503a31089Structure());
}, true, tradershubModel.ST_20ab4504e981d74f2db21e1503a31089Structure)
].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
}

static fromStructure(str) {
return new RC_2d331d34aa02e5b2741655b3ecf842bf(new RC_2d331d34aa02e5b2741655b3ecf842bf.RecordClass({
trading2Attr: OS.DataTypes.ImmutableBase.getData(str)
}));
}

}

tradershubModel.RC_2d331d34aa02e5b2741655b3ecf842bf = RC_2d331d34aa02e5b2741655b3ecf842bfInner;

RC_2d331d34aa02e5b2741655b3ecf842bfInner._isAnonymousRecord = true;
RC_2d331d34aa02e5b2741655b3ecf842bfInner.UniqueId = "2d331d34-aa02-e5b2-7416-55b3ecf842bf";
var RC_2d331d34aa02e5b2741655b3ecf842bf = RC_2d331d34aa02e5b2741655b3ecf842bfInner;
RC_2d331d34aa02e5b2741655b3ecf842bf.init();
}
});

define("tradershub.model$RL_2da9ffc2c5b635cfcf71789669737a2e", ["exports", "@outsystems/runtime-core-js", "tradershub.model", "tradershub.model$ST_2b68b61da9b8f6db8463a60cc48350faStructure"], function (exports, OSRuntimeCore, tradershubModel) {
var OS = OSRuntimeCore;
class RL_2da9ffc2c5b635cfcf71789669737a2e extends 
OS.DataTypes.GenericRecordList {
static getItemType() {
return tradershubModel.ST_2b68b61da9b8f6db8463a60cc48350faStructure;
}

}

tradershubModel.RL_2da9ffc2c5b635cfcf71789669737a2e = RL_2da9ffc2c5b635cfcf71789669737a2e;

});

define("tradershub.model$RC_fb11bc7a3d447b996e913f6ad66d21de", ["exports", "@outsystems/runtime-core-js", "tradershub.model", "tradershub.model$ST_34132650bf66478c56079f24e67e094cStructure"], function (exports, OSRuntimeCore, tradershubModel) {
var OS = OSRuntimeCore;
{class RC_fb11bc7a3d447b996e913f6ad66d21deInner extends 
OS.DataTypes.GenericRecord {
static attributesToDeclare() {
return [
this.attr("GetSettingsResponse", "getSettingsResponseAttr", "GetSettingsResponse", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new tradershubModel.ST_34132650bf66478c56079f24e67e094cStructure());
}, true, tradershubModel.ST_34132650bf66478c56079f24e67e094cStructure)
].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
}

static fromStructure(str) {
return new RC_fb11bc7a3d447b996e913f6ad66d21de(new RC_fb11bc7a3d447b996e913f6ad66d21de.RecordClass({
getSettingsResponseAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
}

}

tradershubModel.RC_fb11bc7a3d447b996e913f6ad66d21de = RC_fb11bc7a3d447b996e913f6ad66d21deInner;

RC_fb11bc7a3d447b996e913f6ad66d21deInner._isAnonymousRecord = true;
RC_fb11bc7a3d447b996e913f6ad66d21deInner.UniqueId = "fb11bc7a-3d44-7b99-6e91-3f6ad66d21de";
var RC_fb11bc7a3d447b996e913f6ad66d21de = RC_fb11bc7a3d447b996e913f6ad66d21deInner;
RC_fb11bc7a3d447b996e913f6ad66d21de.init();
}
});

define("tradershub.model$RL_2def98ced4c3f8fc12f4d1b63b0e1ece", ["exports", "@outsystems/runtime-core-js", "tradershub.model", "tradershub.model$RC_fb11bc7a3d447b996e913f6ad66d21de"], function (exports, OSRuntimeCore, tradershubModel) {
var OS = OSRuntimeCore;
class RL_2def98ced4c3f8fc12f4d1b63b0e1ece extends 
OS.DataTypes.GenericRecordList {
static getItemType() {
return tradershubModel.RC_fb11bc7a3d447b996e913f6ad66d21de;
}

}

tradershubModel.RL_2def98ced4c3f8fc12f4d1b63b0e1ece = RL_2def98ced4c3f8fc12f4d1b63b0e1ece;

});

define("tradershub.model$RL_2e550e70d4f60fcf474568418d9dcf73", ["exports", "@outsystems/runtime-core-js", "RESTAPIWebsocket.model", "tradershub.model", "RESTAPIWebsocket.model$ST_35e76a2e1583feb611523ac6c760c8a9Structure", "tradershub.referencesHealth", "tradershub.referencesHealth$RESTAPIWebsocket"], function (exports, OSRuntimeCore, RESTAPIWebsocketModel, tradershubModel) {
var OS = OSRuntimeCore;
class RL_2e550e70d4f60fcf474568418d9dcf73 extends 
OS.DataTypes.GenericRecordList {
static getItemType() {
return RESTAPIWebsocketModel.ST_35e76a2e1583feb611523ac6c760c8a9Structure;
}

}

tradershubModel.RL_2e550e70d4f60fcf474568418d9dcf73 = RL_2e550e70d4f60fcf474568418d9dcf73;

});

define("tradershub.model$RC_2e794e9950648fb781740aa3223ba10d", ["exports", "@outsystems/runtime-core-js", "OutSystemsMaps.model", "tradershub.model", "OutSystemsMaps.model$ST_832344699c82a4f799a423f89bbe7297Structure", "tradershub.referencesHealth", "tradershub.referencesHealth$OutSystemsMaps"], function (exports, OSRuntimeCore, OutSystemsMapsModel, tradershubModel) {
var OS = OSRuntimeCore;
{class RC_2e794e9950648fb781740aa3223ba10dInner extends 
OS.DataTypes.GenericRecord {
static attributesToDeclare() {
return [
this.attr("StaticMarker", "staticMarkerAttr", "StaticMarker", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new OutSystemsMapsModel.ST_832344699c82a4f799a423f89bbe7297Structure());
}, true, OutSystemsMapsModel.ST_832344699c82a4f799a423f89bbe7297Structure)
].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
}

static fromStructure(str) {
return new RC_2e794e9950648fb781740aa3223ba10d(new RC_2e794e9950648fb781740aa3223ba10d.RecordClass({
staticMarkerAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
}

}

tradershubModel.RC_2e794e9950648fb781740aa3223ba10d = RC_2e794e9950648fb781740aa3223ba10dInner;

RC_2e794e9950648fb781740aa3223ba10dInner._isAnonymousRecord = true;
RC_2e794e9950648fb781740aa3223ba10dInner.UniqueId = "2e794e99-5064-8fb7-8174-0aa3223ba10d";
var RC_2e794e9950648fb781740aa3223ba10d = RC_2e794e9950648fb781740aa3223ba10dInner;
RC_2e794e9950648fb781740aa3223ba10d.init();
}
});

define("tradershub.model$RC_700a042c18a52538bbda09226917700a", ["exports", "@outsystems/runtime-core-js", "OutSystemsCharts.model", "tradershub.model", "OutSystemsCharts.model$EN_c206e072354abd28c734a686a107801eEntityRecord", "tradershub.referencesHealth", "tradershub.referencesHealth$OutSystemsCharts"], function (exports, OSRuntimeCore, OutSystemsChartsModel, tradershubModel) {
var OS = OSRuntimeCore;
{class RC_700a042c18a52538bbda09226917700aInner extends 
OS.DataTypes.GenericRecord {
static attributesToDeclare() {
return [
this.attr("XAxisValuesType_v1", "xAxisValuesType_v1Attr", "XAxisValuesType_v1", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new OutSystemsChartsModel.EN_c206e072354abd28c734a686a107801eEntityRecord());
}, true, OutSystemsChartsModel.EN_c206e072354abd28c734a686a107801eEntityRecord)
].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
}

static fromStructure(str) {
return new RC_700a042c18a52538bbda09226917700a(new RC_700a042c18a52538bbda09226917700a.RecordClass({
xAxisValuesType_v1Attr: OS.DataTypes.ImmutableBase.getData(str)
}));
}

}

tradershubModel.RC_700a042c18a52538bbda09226917700a = RC_700a042c18a52538bbda09226917700aInner;

RC_700a042c18a52538bbda09226917700aInner._isAnonymousRecord = true;
RC_700a042c18a52538bbda09226917700aInner.UniqueId = "700a042c-18a5-2538-bbda-09226917700a";
var RC_700a042c18a52538bbda09226917700a = RC_700a042c18a52538bbda09226917700aInner;
RC_700a042c18a52538bbda09226917700a.init();
}
});

define("tradershub.model$RL_2ed820148ec0066544c2529736074c83", ["exports", "@outsystems/runtime-core-js", "tradershub.model", "tradershub.model$RC_700a042c18a52538bbda09226917700a"], function (exports, OSRuntimeCore, tradershubModel) {
var OS = OSRuntimeCore;
class RL_2ed820148ec0066544c2529736074c83 extends 
OS.DataTypes.GenericRecordList {
static getItemType() {
return tradershubModel.RC_700a042c18a52538bbda09226917700a;
}

}

tradershubModel.RL_2ed820148ec0066544c2529736074c83 = RL_2ed820148ec0066544c2529736074c83;

});

define("tradershub.model$RC_2ff13084d6cf0d9d6734571de8315c4a", ["exports", "@outsystems/runtime-core-js", "tradershub.model", "tradershub.model$ST_6ef949889354a0320b3261736ae5d94cStructure"], function (exports, OSRuntimeCore, tradershubModel) {
var OS = OSRuntimeCore;
{class RC_2ff13084d6cf0d9d6734571de8315c4aInner extends 
OS.DataTypes.GenericRecord {
static attributesToDeclare() {
return [
this.attr("Echo_req", "echo_reqAttr", "Echo_req", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new tradershubModel.ST_6ef949889354a0320b3261736ae5d94cStructure());
}, true, tradershubModel.ST_6ef949889354a0320b3261736ae5d94cStructure)
].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
}

static fromStructure(str) {
return new RC_2ff13084d6cf0d9d6734571de8315c4a(new RC_2ff13084d6cf0d9d6734571de8315c4a.RecordClass({
echo_reqAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
}

}

tradershubModel.RC_2ff13084d6cf0d9d6734571de8315c4a = RC_2ff13084d6cf0d9d6734571de8315c4aInner;

RC_2ff13084d6cf0d9d6734571de8315c4aInner._isAnonymousRecord = true;
RC_2ff13084d6cf0d9d6734571de8315c4aInner.UniqueId = "2ff13084-d6cf-0d9d-6734-571de8315c4a";
var RC_2ff13084d6cf0d9d6734571de8315c4a = RC_2ff13084d6cf0d9d6734571de8315c4aInner;
RC_2ff13084d6cf0d9d6734571de8315c4a.init();
}
});

define("tradershub.model$RC_50381a2cc73ad542d2b91ac5a3061bb1", ["exports", "@outsystems/runtime-core-js", "RESTAPIWebsocket.model", "tradershub.model", "RESTAPIWebsocket.model$ST_6402c4649ff74b758c1e125d40bbb193Structure", "tradershub.referencesHealth", "tradershub.referencesHealth$RESTAPIWebsocket"], function (exports, OSRuntimeCore, RESTAPIWebsocketModel, tradershubModel) {
var OS = OSRuntimeCore;
{class RC_50381a2cc73ad542d2b91ac5a3061bb1Inner extends 
OS.DataTypes.GenericRecord {
static attributesToDeclare() {
return [
this.attr("Idv2", "idv2Attr", "Idv3", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new RESTAPIWebsocketModel.ST_6402c4649ff74b758c1e125d40bbb193Structure());
}, true, RESTAPIWebsocketModel.ST_6402c4649ff74b758c1e125d40bbb193Structure)
].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
}

static fromStructure(str) {
return new RC_50381a2cc73ad542d2b91ac5a3061bb1(new RC_50381a2cc73ad542d2b91ac5a3061bb1.RecordClass({
idv2Attr: OS.DataTypes.ImmutableBase.getData(str)
}));
}

}

tradershubModel.RC_50381a2cc73ad542d2b91ac5a3061bb1 = RC_50381a2cc73ad542d2b91ac5a3061bb1Inner;

RC_50381a2cc73ad542d2b91ac5a3061bb1Inner._isAnonymousRecord = true;
RC_50381a2cc73ad542d2b91ac5a3061bb1Inner.UniqueId = "50381a2c-c73a-d542-d2b9-1ac5a3061bb1";
var RC_50381a2cc73ad542d2b91ac5a3061bb1 = RC_50381a2cc73ad542d2b91ac5a3061bb1Inner;
RC_50381a2cc73ad542d2b91ac5a3061bb1.init();
}
});

define("tradershub.model$RL_3009f63408140fefb95b1ccc793d3116", ["exports", "@outsystems/runtime-core-js", "tradershub.model", "tradershub.model$RC_50381a2cc73ad542d2b91ac5a3061bb1"], function (exports, OSRuntimeCore, tradershubModel) {
var OS = OSRuntimeCore;
class RL_3009f63408140fefb95b1ccc793d3116 extends 
OS.DataTypes.GenericRecordList {
static getItemType() {
return tradershubModel.RC_50381a2cc73ad542d2b91ac5a3061bb1;
}

}

tradershubModel.RL_3009f63408140fefb95b1ccc793d3116 = RL_3009f63408140fefb95b1ccc793d3116;

});

define("tradershub.model$RL_30b2ec80e078c787b2c4b1e6dbae866f", ["exports", "@outsystems/runtime-core-js", "tradershub.model", "tradershub.model$RC_1d7be17127bb12afcc633ad0852caf4e"], function (exports, OSRuntimeCore, tradershubModel) {
var OS = OSRuntimeCore;
class RL_30b2ec80e078c787b2c4b1e6dbae866f extends 
OS.DataTypes.GenericRecordList {
static getItemType() {
return tradershubModel.RC_1d7be17127bb12afcc633ad0852caf4e;
}

}

tradershubModel.RL_30b2ec80e078c787b2c4b1e6dbae866f = RL_30b2ec80e078c787b2c4b1e6dbae866f;

});

define("tradershub.model$RC_30f7e77f4f85f62f55a749d558899db1", ["exports", "@outsystems/runtime-core-js", "RESTAPIWebsocket.model", "tradershub.model", "RESTAPIWebsocket.model$ST_b8e1602bee02fb2422c9742384775a7bStructure", "tradershub.referencesHealth", "tradershub.referencesHealth$RESTAPIWebsocket"], function (exports, OSRuntimeCore, RESTAPIWebsocketModel, tradershubModel) {
var OS = OSRuntimeCore;
{class RC_30f7e77f4f85f62f55a749d558899db1Inner extends 
OS.DataTypes.GenericRecord {
static attributesToDeclare() {
return [
this.attr("PostResetPasswordResponse", "postResetPasswordResponseAttr", "PostResetPasswordResponse", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new RESTAPIWebsocketModel.ST_b8e1602bee02fb2422c9742384775a7bStructure());
}, true, RESTAPIWebsocketModel.ST_b8e1602bee02fb2422c9742384775a7bStructure)
].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
}

static fromStructure(str) {
return new RC_30f7e77f4f85f62f55a749d558899db1(new RC_30f7e77f4f85f62f55a749d558899db1.RecordClass({
postResetPasswordResponseAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
}

}

tradershubModel.RC_30f7e77f4f85f62f55a749d558899db1 = RC_30f7e77f4f85f62f55a749d558899db1Inner;

RC_30f7e77f4f85f62f55a749d558899db1Inner._isAnonymousRecord = true;
RC_30f7e77f4f85f62f55a749d558899db1Inner.UniqueId = "30f7e77f-4f85-f62f-55a7-49d558899db1";
var RC_30f7e77f4f85f62f55a749d558899db1 = RC_30f7e77f4f85f62f55a749d558899db1Inner;
RC_30f7e77f4f85f62f55a749d558899db1.init();
}
});

define("tradershub.model$RC_310dae2b4d3a1f1ded7570a6ee74f16e", ["exports", "@outsystems/runtime-core-js", "OutSystemsUI.model", "tradershub.model", "OutSystemsUI.model$ST_ba5b17ae5b3fdd9318ea2b4cf18c7d4dStructure", "tradershub.referencesHealth", "tradershub.referencesHealth$OutSystemsUI"], function (exports, OSRuntimeCore, OutSystemsUIModel, tradershubModel) {
var OS = OSRuntimeCore;
{class RC_310dae2b4d3a1f1ded7570a6ee74f16eInner extends 
OS.DataTypes.GenericRecord {
static attributesToDeclare() {
return [
this.attr("DatePickerRangeOptionalConfigs", "datePickerRangeOptionalConfigsAttr", "DatePickerRangeOptionalConfigs", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new OutSystemsUIModel.ST_ba5b17ae5b3fdd9318ea2b4cf18c7d4dStructure());
}, true, OutSystemsUIModel.ST_ba5b17ae5b3fdd9318ea2b4cf18c7d4dStructure)
].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
}

static fromStructure(str) {
return new RC_310dae2b4d3a1f1ded7570a6ee74f16e(new RC_310dae2b4d3a1f1ded7570a6ee74f16e.RecordClass({
datePickerRangeOptionalConfigsAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
}

}

tradershubModel.RC_310dae2b4d3a1f1ded7570a6ee74f16e = RC_310dae2b4d3a1f1ded7570a6ee74f16eInner;

RC_310dae2b4d3a1f1ded7570a6ee74f16eInner._isAnonymousRecord = true;
RC_310dae2b4d3a1f1ded7570a6ee74f16eInner.UniqueId = "310dae2b-4d3a-1f1d-ed75-70a6ee74f16e";
var RC_310dae2b4d3a1f1ded7570a6ee74f16e = RC_310dae2b4d3a1f1ded7570a6ee74f16eInner;
RC_310dae2b4d3a1f1ded7570a6ee74f16e.init();
}
});

define("tradershub.model$RC_4d01ba747615bc6dc01c586f0b43450a", ["exports", "@outsystems/runtime-core-js", "OutSystemsUI.model", "tradershub.model", "OutSystemsUI.model$ST_34444d0742578c128ebc8b2594439346Structure", "tradershub.referencesHealth", "tradershub.referencesHealth$OutSystemsUI"], function (exports, OSRuntimeCore, OutSystemsUIModel, tradershubModel) {
var OS = OSRuntimeCore;
{class RC_4d01ba747615bc6dc01c586f0b43450aInner extends 
OS.DataTypes.GenericRecord {
static attributesToDeclare() {
return [
this.attr("DropdownTagsOptionalConfigs", "dropdownTagsOptionalConfigsAttr", "DropdownTagsOptionalConfigs", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new OutSystemsUIModel.ST_34444d0742578c128ebc8b2594439346Structure());
}, true, OutSystemsUIModel.ST_34444d0742578c128ebc8b2594439346Structure)
].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
}

static fromStructure(str) {
return new RC_4d01ba747615bc6dc01c586f0b43450a(new RC_4d01ba747615bc6dc01c586f0b43450a.RecordClass({
dropdownTagsOptionalConfigsAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
}

}

tradershubModel.RC_4d01ba747615bc6dc01c586f0b43450a = RC_4d01ba747615bc6dc01c586f0b43450aInner;

RC_4d01ba747615bc6dc01c586f0b43450aInner._isAnonymousRecord = true;
RC_4d01ba747615bc6dc01c586f0b43450aInner.UniqueId = "4d01ba74-7615-bc6d-c01c-586f0b43450a";
var RC_4d01ba747615bc6dc01c586f0b43450a = RC_4d01ba747615bc6dc01c586f0b43450aInner;
RC_4d01ba747615bc6dc01c586f0b43450a.init();
}
});

define("tradershub.model$RL_3168a7a1678dfe8f6720ee5fb1eb68a1", ["exports", "@outsystems/runtime-core-js", "tradershub.model", "tradershub.model$RC_4d01ba747615bc6dc01c586f0b43450a"], function (exports, OSRuntimeCore, tradershubModel) {
var OS = OSRuntimeCore;
class RL_3168a7a1678dfe8f6720ee5fb1eb68a1 extends 
OS.DataTypes.GenericRecordList {
static getItemType() {
return tradershubModel.RC_4d01ba747615bc6dc01c586f0b43450a;
}

}

tradershubModel.RL_3168a7a1678dfe8f6720ee5fb1eb68a1 = RL_3168a7a1678dfe8f6720ee5fb1eb68a1;

});

define("tradershub.model$RL_31d7615454c0155a64f826d4e0cf4cb5", ["exports", "@outsystems/runtime-core-js", "System_.model", "tradershub.model", "System_.model$FinishResetPasswordFailureReasonRec", "tradershub.referencesHealth", "tradershub.referencesHealth$System_"], function (exports, OSRuntimeCore, System_Model, tradershubModel) {
var OS = OSRuntimeCore;
class RL_31d7615454c0155a64f826d4e0cf4cb5 extends 
OS.DataTypes.GenericRecordList {
static getItemType() {
return OS.SystemStructures.FinishResetPasswordFailureReasonRec;
}

}

tradershubModel.RL_31d7615454c0155a64f826d4e0cf4cb5 = RL_31d7615454c0155a64f826d4e0cf4cb5;

});

define("tradershub.model$RC_327e36bc408edd046ca40df8a4e734bb", ["exports", "@outsystems/runtime-core-js", "OutSystemsUI.model", "tradershub.model", "OutSystemsUI.model$ST_bc4abb4233d9ce894e855c520a20c76fStructure", "tradershub.referencesHealth", "tradershub.referencesHealth$OutSystemsUI"], function (exports, OSRuntimeCore, OutSystemsUIModel, tradershubModel) {
var OS = OSRuntimeCore;
{class RC_327e36bc408edd046ca40df8a4e734bbInner extends 
OS.DataTypes.GenericRecord {
static attributesToDeclare() {
return [
this.attr("DatePickerOptionalConfigs", "datePickerOptionalConfigsAttr", "DatePickerOptionalConfigs", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new OutSystemsUIModel.ST_bc4abb4233d9ce894e855c520a20c76fStructure());
}, true, OutSystemsUIModel.ST_bc4abb4233d9ce894e855c520a20c76fStructure)
].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
}

static fromStructure(str) {
return new RC_327e36bc408edd046ca40df8a4e734bb(new RC_327e36bc408edd046ca40df8a4e734bb.RecordClass({
datePickerOptionalConfigsAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
}

}

tradershubModel.RC_327e36bc408edd046ca40df8a4e734bb = RC_327e36bc408edd046ca40df8a4e734bbInner;

RC_327e36bc408edd046ca40df8a4e734bbInner._isAnonymousRecord = true;
RC_327e36bc408edd046ca40df8a4e734bbInner.UniqueId = "327e36bc-408e-dd04-6ca4-0df8a4e734bb";
var RC_327e36bc408edd046ca40df8a4e734bb = RC_327e36bc408edd046ca40df8a4e734bbInner;
RC_327e36bc408edd046ca40df8a4e734bb.init();
}
});

define("tradershub.model$RL_3325417b3e1ae27173e1161b12a2b345", ["exports", "@outsystems/runtime-core-js", "OutSystemsUI.model", "tradershub.model", "OutSystemsUI.model$EN_92679525739afa328c09890d25f5ac45EntityRecord", "tradershub.referencesHealth", "tradershub.referencesHealth$OutSystemsUI"], function (exports, OSRuntimeCore, OutSystemsUIModel, tradershubModel) {
var OS = OSRuntimeCore;
class RL_3325417b3e1ae27173e1161b12a2b345 extends 
OS.DataTypes.GenericRecordList {
static getItemType() {
return OutSystemsUIModel.EN_92679525739afa328c09890d25f5ac45EntityRecord;
}

}

tradershubModel.RL_3325417b3e1ae27173e1161b12a2b345 = RL_3325417b3e1ae27173e1161b12a2b345;

});

define("tradershub.model$RL_341cb8da3bd038b85a0b2edfda0bb4c5", ["exports", "@outsystems/runtime-core-js", "tradershub.model", "tradershub.model$ST_fc4d5763569aba995364c403cc3ed840Structure"], function (exports, OSRuntimeCore, tradershubModel) {
var OS = OSRuntimeCore;
class RL_341cb8da3bd038b85a0b2edfda0bb4c5 extends 
OS.DataTypes.GenericRecordList {
static getItemType() {
return tradershubModel.ST_fc4d5763569aba995364c403cc3ed840Structure;
}

}

tradershubModel.RL_341cb8da3bd038b85a0b2edfda0bb4c5 = RL_341cb8da3bd038b85a0b2edfda0bb4c5;

});

define("tradershub.model$RL_34e3285764324083bc72bd04bd7ad877", ["exports", "@outsystems/runtime-core-js", "OutSystemsMaps.model", "tradershub.model", "OutSystemsMaps.model$EN_480235a969b3f42eac91ad5813fe9bf9EntityRecord", "tradershub.referencesHealth", "tradershub.referencesHealth$OutSystemsMaps"], function (exports, OSRuntimeCore, OutSystemsMapsModel, tradershubModel) {
var OS = OSRuntimeCore;
class RL_34e3285764324083bc72bd04bd7ad877 extends 
OS.DataTypes.GenericRecordList {
static getItemType() {
return OutSystemsMapsModel.EN_480235a969b3f42eac91ad5813fe9bf9EntityRecord;
}

}

tradershubModel.RL_34e3285764324083bc72bd04bd7ad877 = RL_34e3285764324083bc72bd04bd7ad877;

});

define("tradershub.model$RL_3511070d73ad6e94604961f61996b199", ["exports", "@outsystems/runtime-core-js", "tradershub.model", "tradershub.model$ST_2437043bbd31c030b06d37eb045b623aStructure"], function (exports, OSRuntimeCore, tradershubModel) {
var OS = OSRuntimeCore;
class RL_3511070d73ad6e94604961f61996b199 extends 
OS.DataTypes.GenericRecordList {
static getItemType() {
return tradershubModel.ST_2437043bbd31c030b06d37eb045b623aStructure;
}

}

tradershubModel.RL_3511070d73ad6e94604961f61996b199 = RL_3511070d73ad6e94604961f61996b199;

});

define("tradershub.model$RC_e693c35b48131a7d9d296aba5185b8c6", ["exports", "@outsystems/runtime-core-js", "RESTAPIWebsocket.model", "tradershub.model", "RESTAPIWebsocket.model$ST_98319758945048a72386b9e9466c220aStructure", "tradershub.referencesHealth", "tradershub.referencesHealth$RESTAPIWebsocket"], function (exports, OSRuntimeCore, RESTAPIWebsocketModel, tradershubModel) {
var OS = OSRuntimeCore;
{class RC_e693c35b48131a7d9d296aba5185b8c6Inner extends 
OS.DataTypes.GenericRecord {
static attributesToDeclare() {
return [
this.attr("Requirement", "requirementAttr", "Requirement", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new RESTAPIWebsocketModel.ST_98319758945048a72386b9e9466c220aStructure());
}, true, RESTAPIWebsocketModel.ST_98319758945048a72386b9e9466c220aStructure)
].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
}

static fromStructure(str) {
return new RC_e693c35b48131a7d9d296aba5185b8c6(new RC_e693c35b48131a7d9d296aba5185b8c6.RecordClass({
requirementAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
}

}

tradershubModel.RC_e693c35b48131a7d9d296aba5185b8c6 = RC_e693c35b48131a7d9d296aba5185b8c6Inner;

RC_e693c35b48131a7d9d296aba5185b8c6Inner._isAnonymousRecord = true;
RC_e693c35b48131a7d9d296aba5185b8c6Inner.UniqueId = "e693c35b-4813-1a7d-9d29-6aba5185b8c6";
var RC_e693c35b48131a7d9d296aba5185b8c6 = RC_e693c35b48131a7d9d296aba5185b8c6Inner;
RC_e693c35b48131a7d9d296aba5185b8c6.init();
}
});

define("tradershub.model$RL_354382860a4523a089cd5a3761912fe2", ["exports", "@outsystems/runtime-core-js", "tradershub.model", "tradershub.model$RC_e693c35b48131a7d9d296aba5185b8c6"], function (exports, OSRuntimeCore, tradershubModel) {
var OS = OSRuntimeCore;
class RL_354382860a4523a089cd5a3761912fe2 extends 
OS.DataTypes.GenericRecordList {
static getItemType() {
return tradershubModel.RC_e693c35b48131a7d9d296aba5185b8c6;
}

}

tradershubModel.RL_354382860a4523a089cd5a3761912fe2 = RL_354382860a4523a089cd5a3761912fe2;

});

define("tradershub.model$RC_3554b1e2806a5b827c457cdecc492d4a", ["exports", "@outsystems/runtime-core-js", "OutSystemsUI.model", "tradershub.model", "OutSystemsUI.model$ST_8391f9d0c6b78f74493c47987669deecStructure", "tradershub.referencesHealth", "tradershub.referencesHealth$OutSystemsUI"], function (exports, OSRuntimeCore, OutSystemsUIModel, tradershubModel) {
var OS = OSRuntimeCore;
{class RC_3554b1e2806a5b827c457cdecc492d4aInner extends 
OS.DataTypes.GenericRecord {
static attributesToDeclare() {
return [
this.attr("ProgressBarOptionalConfigs", "progressBarOptionalConfigsAttr", "ProgressBarOptionalConfigs", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new OutSystemsUIModel.ST_8391f9d0c6b78f74493c47987669deecStructure());
}, true, OutSystemsUIModel.ST_8391f9d0c6b78f74493c47987669deecStructure)
].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
}

static fromStructure(str) {
return new RC_3554b1e2806a5b827c457cdecc492d4a(new RC_3554b1e2806a5b827c457cdecc492d4a.RecordClass({
progressBarOptionalConfigsAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
}

}

tradershubModel.RC_3554b1e2806a5b827c457cdecc492d4a = RC_3554b1e2806a5b827c457cdecc492d4aInner;

RC_3554b1e2806a5b827c457cdecc492d4aInner._isAnonymousRecord = true;
RC_3554b1e2806a5b827c457cdecc492d4aInner.UniqueId = "3554b1e2-806a-5b82-7c45-7cdecc492d4a";
var RC_3554b1e2806a5b827c457cdecc492d4a = RC_3554b1e2806a5b827c457cdecc492d4aInner;
RC_3554b1e2806a5b827c457cdecc492d4a.init();
}
});

define("tradershub.model$RL_357030bc20ba450abe6756927d50ad98", ["exports", "@outsystems/runtime-core-js", "RESTAPIWebsocket.model", "tradershub.model", "RESTAPIWebsocket.model$ST_2aef4efdcc8a8ad935c2f051f3051327Structure", "tradershub.referencesHealth", "tradershub.referencesHealth$RESTAPIWebsocket"], function (exports, OSRuntimeCore, RESTAPIWebsocketModel, tradershubModel) {
var OS = OSRuntimeCore;
class RL_357030bc20ba450abe6756927d50ad98 extends 
OS.DataTypes.GenericRecordList {
static getItemType() {
return RESTAPIWebsocketModel.ST_2aef4efdcc8a8ad935c2f051f3051327Structure;
}

}

tradershubModel.RL_357030bc20ba450abe6756927d50ad98 = RL_357030bc20ba450abe6756927d50ad98;

});

define("tradershub.model$RC_35e37489cb29f7a304d512a403000665", ["exports", "@outsystems/runtime-core-js", "OutSystemsCharts.model", "tradershub.model", "OutSystemsCharts.model$EN_0c0b103cba961483054afffbc30b3066EntityRecord", "tradershub.referencesHealth", "tradershub.referencesHealth$OutSystemsCharts"], function (exports, OSRuntimeCore, OutSystemsChartsModel, tradershubModel) {
var OS = OSRuntimeCore;
{class RC_35e37489cb29f7a304d512a403000665Inner extends 
OS.DataTypes.GenericRecord {
static attributesToDeclare() {
return [
this.attr("StackingType_v1", "stackingType_v1Attr", "StackingType_v1", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new OutSystemsChartsModel.EN_0c0b103cba961483054afffbc30b3066EntityRecord());
}, true, OutSystemsChartsModel.EN_0c0b103cba961483054afffbc30b3066EntityRecord)
].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
}

static fromStructure(str) {
return new RC_35e37489cb29f7a304d512a403000665(new RC_35e37489cb29f7a304d512a403000665.RecordClass({
stackingType_v1Attr: OS.DataTypes.ImmutableBase.getData(str)
}));
}

}

tradershubModel.RC_35e37489cb29f7a304d512a403000665 = RC_35e37489cb29f7a304d512a403000665Inner;

RC_35e37489cb29f7a304d512a403000665Inner._isAnonymousRecord = true;
RC_35e37489cb29f7a304d512a403000665Inner.UniqueId = "35e37489-cb29-f7a3-04d5-12a403000665";
var RC_35e37489cb29f7a304d512a403000665 = RC_35e37489cb29f7a304d512a403000665Inner;
RC_35e37489cb29f7a304d512a403000665.init();
}
});

define("tradershub.model$RL_362950b7d5d9798e12950648533599a1", ["exports", "@outsystems/runtime-core-js", "OutSystemsUI.model", "tradershub.model", "OutSystemsUI.model$EN_ef2257119ab36e2c35ddd0bb3d7ac544EntityRecord", "tradershub.referencesHealth", "tradershub.referencesHealth$OutSystemsUI"], function (exports, OSRuntimeCore, OutSystemsUIModel, tradershubModel) {
var OS = OSRuntimeCore;
class RL_362950b7d5d9798e12950648533599a1 extends 
OS.DataTypes.GenericRecordList {
static getItemType() {
return OutSystemsUIModel.EN_ef2257119ab36e2c35ddd0bb3d7ac544EntityRecord;
}

}

tradershubModel.RL_362950b7d5d9798e12950648533599a1 = RL_362950b7d5d9798e12950648533599a1;

});

define("tradershub.model$RC_cc81504e70ca274810f96237dd739de9", ["exports", "@outsystems/runtime-core-js", "RESTAPIWebsocket.model", "tradershub.model", "RESTAPIWebsocket.model$ST_178833eaf81da5980f461500f3f98736Structure", "tradershub.referencesHealth", "tradershub.referencesHealth$RESTAPIWebsocket"], function (exports, OSRuntimeCore, RESTAPIWebsocketModel, tradershubModel) {
var OS = OSRuntimeCore;
{class RC_cc81504e70ca274810f96237dd739de9Inner extends 
OS.DataTypes.GenericRecord {
static attributesToDeclare() {
return [
this.attr("Account_opening", "account_openingAttr", "Account_opening2", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new RESTAPIWebsocketModel.ST_178833eaf81da5980f461500f3f98736Structure());
}, true, RESTAPIWebsocketModel.ST_178833eaf81da5980f461500f3f98736Structure)
].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
}

static fromStructure(str) {
return new RC_cc81504e70ca274810f96237dd739de9(new RC_cc81504e70ca274810f96237dd739de9.RecordClass({
account_openingAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
}

}

tradershubModel.RC_cc81504e70ca274810f96237dd739de9 = RC_cc81504e70ca274810f96237dd739de9Inner;

RC_cc81504e70ca274810f96237dd739de9Inner._isAnonymousRecord = true;
RC_cc81504e70ca274810f96237dd739de9Inner.UniqueId = "cc81504e-70ca-2748-10f9-6237dd739de9";
var RC_cc81504e70ca274810f96237dd739de9 = RC_cc81504e70ca274810f96237dd739de9Inner;
RC_cc81504e70ca274810f96237dd739de9.init();
}
});

define("tradershub.model$RL_3678d55ba96cf40559a175ccd7265a85", ["exports", "@outsystems/runtime-core-js", "tradershub.model", "tradershub.model$RC_cc81504e70ca274810f96237dd739de9"], function (exports, OSRuntimeCore, tradershubModel) {
var OS = OSRuntimeCore;
class RL_3678d55ba96cf40559a175ccd7265a85 extends 
OS.DataTypes.GenericRecordList {
static getItemType() {
return tradershubModel.RC_cc81504e70ca274810f96237dd739de9;
}

}

tradershubModel.RL_3678d55ba96cf40559a175ccd7265a85 = RL_3678d55ba96cf40559a175ccd7265a85;

});

define("tradershub.model$RL_368663c44c28e50fbfc041c7e65f3023", ["exports", "@outsystems/runtime-core-js", "tradershub.model", "tradershub.model$ST_30e2edd642322834fde0261ac531b663Structure"], function (exports, OSRuntimeCore, tradershubModel) {
var OS = OSRuntimeCore;
class RL_368663c44c28e50fbfc041c7e65f3023 extends 
OS.DataTypes.GenericRecordList {
static getItemType() {
return tradershubModel.ST_30e2edd642322834fde0261ac531b663Structure;
}

}

tradershubModel.RL_368663c44c28e50fbfc041c7e65f3023 = RL_368663c44c28e50fbfc041c7e65f3023;

});

define("tradershub.model$ST_c9321e98763823c3fe8b25101ee9afbdStructure", ["exports", "@outsystems/runtime-core-js", "tradershub.model"], function (exports, OSRuntimeCore, tradershubModel) {
var OS = OSRuntimeCore;
{class ST_c9321e98763823c3fe8b25101ee9afbdStructureInner extends 
OS.DataTypes.GenericRecord {
static attributesToDeclare() {
return [
this.attr("Name", "nameAttr", "name", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Enabled", "enabledAttr", "enabled", false, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, true)
].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
}

}

tradershubModel.ST_c9321e98763823c3fe8b25101ee9afbdStructure = ST_c9321e98763823c3fe8b25101ee9afbdStructureInner;

var ST_c9321e98763823c3fe8b25101ee9afbdStructure = ST_c9321e98763823c3fe8b25101ee9afbdStructureInner;
ST_c9321e98763823c3fe8b25101ee9afbdStructure.init();
}
});

define("tradershub.model$RC_71fb8b29081a425af6881d661efe8429", ["exports", "@outsystems/runtime-core-js", "tradershub.model", "tradershub.model$ST_c9321e98763823c3fe8b25101ee9afbdStructure"], function (exports, OSRuntimeCore, tradershubModel) {
var OS = OSRuntimeCore;
{class RC_71fb8b29081a425af6881d661efe8429Inner extends 
OS.DataTypes.GenericRecord {
static attributesToDeclare() {
return [
this.attr("FeatureFlag", "featureFlagAttr", "FeatureFlag", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new tradershubModel.ST_c9321e98763823c3fe8b25101ee9afbdStructure());
}, true, tradershubModel.ST_c9321e98763823c3fe8b25101ee9afbdStructure)
].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
}

static fromStructure(str) {
return new RC_71fb8b29081a425af6881d661efe8429(new RC_71fb8b29081a425af6881d661efe8429.RecordClass({
featureFlagAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
}

}

tradershubModel.RC_71fb8b29081a425af6881d661efe8429 = RC_71fb8b29081a425af6881d661efe8429Inner;

RC_71fb8b29081a425af6881d661efe8429Inner._isAnonymousRecord = true;
RC_71fb8b29081a425af6881d661efe8429Inner.UniqueId = "71fb8b29-081a-425a-f688-1d661efe8429";
var RC_71fb8b29081a425af6881d661efe8429 = RC_71fb8b29081a425af6881d661efe8429Inner;
RC_71fb8b29081a425af6881d661efe8429.init();
}
});

define("tradershub.model$RL_36bb9667aec16bf41623e645e82fb8d5", ["exports", "@outsystems/runtime-core-js", "tradershub.model", "tradershub.model$RC_71fb8b29081a425af6881d661efe8429"], function (exports, OSRuntimeCore, tradershubModel) {
var OS = OSRuntimeCore;
class RL_36bb9667aec16bf41623e645e82fb8d5 extends 
OS.DataTypes.GenericRecordList {
static getItemType() {
return tradershubModel.RC_71fb8b29081a425af6881d661efe8429;
}

}

tradershubModel.RL_36bb9667aec16bf41623e645e82fb8d5 = RL_36bb9667aec16bf41623e645e82fb8d5;

});

define("tradershub.model$RL_36d4d7e2109bafadf398450826580bed", ["exports", "@outsystems/runtime-core-js", "System_.model", "tradershub.model", "System_.model$UpdateUserResultRec", "tradershub.referencesHealth", "tradershub.referencesHealth$System_"], function (exports, OSRuntimeCore, System_Model, tradershubModel) {
var OS = OSRuntimeCore;
class RL_36d4d7e2109bafadf398450826580bed extends 
OS.DataTypes.GenericRecordList {
static getItemType() {
return OS.SystemStructures.UpdateUserResultRec;
}

}

tradershubModel.RL_36d4d7e2109bafadf398450826580bed = RL_36d4d7e2109bafadf398450826580bed;

});

define("tradershub.model$EN_772522d7b54f56f59fb8e1e743f444ecEntityRecord", ["exports", "@outsystems/runtime-core-js", "tradershub.model"], function (exports, OSRuntimeCore, tradershubModel) {
var OS = OSRuntimeCore;
{class EN_772522d7b54f56f59fb8e1e743f444ecEntityRecordInner extends 
OS.DataTypes.GenericRecord {
static attributesToDeclare() {
return [
this.attr("Id", "idAttr", "Id", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Label", "labelAttr", "Label", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Order", "orderAttr", "Order", true, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true), 
this.attr("Is_Active", "is_ActiveAttr", "Is_Active", true, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, true)
].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
}

}

tradershubModel.EN_772522d7b54f56f59fb8e1e743f444ecEntityRecord = EN_772522d7b54f56f59fb8e1e743f444ecEntityRecordInner;

var EN_772522d7b54f56f59fb8e1e743f444ecEntityRecord = EN_772522d7b54f56f59fb8e1e743f444ecEntityRecordInner;
EN_772522d7b54f56f59fb8e1e743f444ecEntityRecord.init();
}
});

define("tradershub.model$RC_36f2cdc7fc2c30db68dab6767886090d", ["exports", "@outsystems/runtime-core-js", "tradershub.model", "tradershub.model$EN_772522d7b54f56f59fb8e1e743f444ecEntityRecord"], function (exports, OSRuntimeCore, tradershubModel) {
var OS = OSRuntimeCore;
{class RC_36f2cdc7fc2c30db68dab6767886090dInner extends 
OS.DataTypes.GenericRecord {
static attributesToDeclare() {
return [
this.attr("EmploymentStatus", "employmentStatusAttr", "EmploymentStatus", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new tradershubModel.EN_772522d7b54f56f59fb8e1e743f444ecEntityRecord());
}, true, tradershubModel.EN_772522d7b54f56f59fb8e1e743f444ecEntityRecord)
].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
}

static fromStructure(str) {
return new RC_36f2cdc7fc2c30db68dab6767886090d(new RC_36f2cdc7fc2c30db68dab6767886090d.RecordClass({
employmentStatusAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
}

}

tradershubModel.RC_36f2cdc7fc2c30db68dab6767886090d = RC_36f2cdc7fc2c30db68dab6767886090dInner;

RC_36f2cdc7fc2c30db68dab6767886090dInner._isAnonymousRecord = true;
RC_36f2cdc7fc2c30db68dab6767886090dInner.UniqueId = "36f2cdc7-fc2c-30db-68da-b6767886090d";
var RC_36f2cdc7fc2c30db68dab6767886090d = RC_36f2cdc7fc2c30db68dab6767886090dInner;
RC_36f2cdc7fc2c30db68dab6767886090d.init();
}
});

define("tradershub.model$RC_373fec8a2329a8b1ecd55cf717893131", ["exports", "@outsystems/runtime-core-js", "OutSystemsUI.model", "tradershub.model", "OutSystemsUI.model$EN_59aacee1cb91627a0f497366b24e4500EntityRecord", "tradershub.referencesHealth", "tradershub.referencesHealth$OutSystemsUI"], function (exports, OSRuntimeCore, OutSystemsUIModel, tradershubModel) {
var OS = OSRuntimeCore;
{class RC_373fec8a2329a8b1ecd55cf717893131Inner extends 
OS.DataTypes.GenericRecord {
static attributesToDeclare() {
return [
this.attr("CarouselNavigation", "carouselNavigationAttr", "CarouselNavigation", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new OutSystemsUIModel.EN_59aacee1cb91627a0f497366b24e4500EntityRecord());
}, true, OutSystemsUIModel.EN_59aacee1cb91627a0f497366b24e4500EntityRecord)
].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
}

static fromStructure(str) {
return new RC_373fec8a2329a8b1ecd55cf717893131(new RC_373fec8a2329a8b1ecd55cf717893131.RecordClass({
carouselNavigationAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
}

}

tradershubModel.RC_373fec8a2329a8b1ecd55cf717893131 = RC_373fec8a2329a8b1ecd55cf717893131Inner;

RC_373fec8a2329a8b1ecd55cf717893131Inner._isAnonymousRecord = true;
RC_373fec8a2329a8b1ecd55cf717893131Inner.UniqueId = "373fec8a-2329-a8b1-ecd5-5cf717893131";
var RC_373fec8a2329a8b1ecd55cf717893131 = RC_373fec8a2329a8b1ecd55cf717893131Inner;
RC_373fec8a2329a8b1ecd55cf717893131.init();
}
});

define("tradershub.model$RL_3786b90463cb4a06161ec67f7269b0c9", ["exports", "@outsystems/runtime-core-js", "tradershub.model", "tradershub.model$ST_7826619511bee33bd1dc03b2ea2c1717Structure"], function (exports, OSRuntimeCore, tradershubModel) {
var OS = OSRuntimeCore;
class RL_3786b90463cb4a06161ec67f7269b0c9 extends 
OS.DataTypes.GenericRecordList {
static getItemType() {
return tradershubModel.ST_7826619511bee33bd1dc03b2ea2c1717Structure;
}

}

tradershubModel.RL_3786b90463cb4a06161ec67f7269b0c9 = RL_3786b90463cb4a06161ec67f7269b0c9;

});

define("tradershub.model$RL_37db3dabed0bf7582173dae36f4afeae", ["exports", "@outsystems/runtime-core-js", "OutSystemsMaps.model", "tradershub.model", "OutSystemsMaps.model$EN_4d0e07d9538530f68924ab612d15f82bEntityRecord", "tradershub.referencesHealth", "tradershub.referencesHealth$OutSystemsMaps"], function (exports, OSRuntimeCore, OutSystemsMapsModel, tradershubModel) {
var OS = OSRuntimeCore;
class RL_37db3dabed0bf7582173dae36f4afeae extends 
OS.DataTypes.GenericRecordList {
static getItemType() {
return OutSystemsMapsModel.EN_4d0e07d9538530f68924ab612d15f82bEntityRecord;
}

}

tradershubModel.RL_37db3dabed0bf7582173dae36f4afeae = RL_37db3dabed0bf7582173dae36f4afeae;

});

define("tradershub.model$RC_a3e0d02178b078a960ae427dd1751cbc", ["exports", "@outsystems/runtime-core-js", "OutSystemsMaps.model", "tradershub.model", "OutSystemsMaps.model$ST_be62cc31fbe4705834275960beeb55e2Structure", "tradershub.referencesHealth", "tradershub.referencesHealth$OutSystemsMaps"], function (exports, OSRuntimeCore, OutSystemsMapsModel, tradershubModel) {
var OS = OSRuntimeCore;
{class RC_a3e0d02178b078a960ae427dd1751cbcInner extends 
OS.DataTypes.GenericRecord {
static attributesToDeclare() {
return [
this.attr("Offset", "offsetAttr", "Offset", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new OutSystemsMapsModel.ST_be62cc31fbe4705834275960beeb55e2Structure());
}, true, OutSystemsMapsModel.ST_be62cc31fbe4705834275960beeb55e2Structure)
].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
}

static fromStructure(str) {
return new RC_a3e0d02178b078a960ae427dd1751cbc(new RC_a3e0d02178b078a960ae427dd1751cbc.RecordClass({
offsetAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
}

}

tradershubModel.RC_a3e0d02178b078a960ae427dd1751cbc = RC_a3e0d02178b078a960ae427dd1751cbcInner;

RC_a3e0d02178b078a960ae427dd1751cbcInner._isAnonymousRecord = true;
RC_a3e0d02178b078a960ae427dd1751cbcInner.UniqueId = "a3e0d021-78b0-78a9-60ae-427dd1751cbc";
var RC_a3e0d02178b078a960ae427dd1751cbc = RC_a3e0d02178b078a960ae427dd1751cbcInner;
RC_a3e0d02178b078a960ae427dd1751cbc.init();
}
});

define("tradershub.model$RL_37ebca9cc7a640553fda76d301ad4a68", ["exports", "@outsystems/runtime-core-js", "tradershub.model", "tradershub.model$RC_a3e0d02178b078a960ae427dd1751cbc"], function (exports, OSRuntimeCore, tradershubModel) {
var OS = OSRuntimeCore;
class RL_37ebca9cc7a640553fda76d301ad4a68 extends 
OS.DataTypes.GenericRecordList {
static getItemType() {
return tradershubModel.RC_a3e0d02178b078a960ae427dd1751cbc;
}

}

tradershubModel.RL_37ebca9cc7a640553fda76d301ad4a68 = RL_37ebca9cc7a640553fda76d301ad4a68;

});

define("tradershub.model$RL_386f6a281c08d72d0376417e02fe0b4b", ["exports", "@outsystems/runtime-core-js", "RESTAPIWebsocket.model", "tradershub.model", "RESTAPIWebsocket.model$ST_b5282edb36283adb40969ef7004c3e79Structure", "tradershub.referencesHealth", "tradershub.referencesHealth$RESTAPIWebsocket"], function (exports, OSRuntimeCore, RESTAPIWebsocketModel, tradershubModel) {
var OS = OSRuntimeCore;
class RL_386f6a281c08d72d0376417e02fe0b4b extends 
OS.DataTypes.GenericRecordList {
static getItemType() {
return RESTAPIWebsocketModel.ST_b5282edb36283adb40969ef7004c3e79Structure;
}

}

tradershubModel.RL_386f6a281c08d72d0376417e02fe0b4b = RL_386f6a281c08d72d0376417e02fe0b4b;

});

define("tradershub.model$RL_392b64bd075fc192968825bc0bc06ae0", ["exports", "@outsystems/runtime-core-js", "tradershub.model", "tradershub.model$RC_35e37489cb29f7a304d512a403000665"], function (exports, OSRuntimeCore, tradershubModel) {
var OS = OSRuntimeCore;
class RL_392b64bd075fc192968825bc0bc06ae0 extends 
OS.DataTypes.GenericRecordList {
static getItemType() {
return tradershubModel.RC_35e37489cb29f7a304d512a403000665;
}

}

tradershubModel.RL_392b64bd075fc192968825bc0bc06ae0 = RL_392b64bd075fc192968825bc0bc06ae0;

});

define("tradershub.model$RL_39e0a2148c652f14154e90634eb14b80", ["exports", "@outsystems/runtime-core-js", "tradershub.model", "tradershub.model$RC_009f057acdc45a698d784f1d33cd022c"], function (exports, OSRuntimeCore, tradershubModel) {
var OS = OSRuntimeCore;
class RL_39e0a2148c652f14154e90634eb14b80 extends 
OS.DataTypes.GenericRecordList {
static getItemType() {
return tradershubModel.RC_009f057acdc45a698d784f1d33cd022c;
}

}

tradershubModel.RL_39e0a2148c652f14154e90634eb14b80 = RL_39e0a2148c652f14154e90634eb14b80;

});

define("tradershub.model$EN_98d873be1ff16324d2c2bf822e72e238EntityRecord", ["exports", "@outsystems/runtime-core-js", "tradershub.model"], function (exports, OSRuntimeCore, tradershubModel) {
var OS = OSRuntimeCore;
{class EN_98d873be1ff16324d2c2bf822e72e238EntityRecordInner extends 
OS.DataTypes.GenericRecord {
static attributesToDeclare() {
return [
this.attr("Id", "idAttr", "Id", true, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true), 
this.attr("Label", "labelAttr", "Label", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Order", "orderAttr", "Order", true, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true), 
this.attr("Is_Active", "is_ActiveAttr", "Is_Active", true, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, true)
].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
}

}

tradershubModel.EN_98d873be1ff16324d2c2bf822e72e238EntityRecord = EN_98d873be1ff16324d2c2bf822e72e238EntityRecordInner;

var EN_98d873be1ff16324d2c2bf822e72e238EntityRecord = EN_98d873be1ff16324d2c2bf822e72e238EntityRecordInner;
EN_98d873be1ff16324d2c2bf822e72e238EntityRecord.init();
}
});

define("tradershub.model$RL_3a1899c5a981c2e6215522e2a06f6863", ["exports", "@outsystems/runtime-core-js", "tradershub.model", "tradershub.model$EN_98d873be1ff16324d2c2bf822e72e238EntityRecord"], function (exports, OSRuntimeCore, tradershubModel) {
var OS = OSRuntimeCore;
class RL_3a1899c5a981c2e6215522e2a06f6863 extends 
OS.DataTypes.GenericRecordList {
static getItemType() {
return tradershubModel.EN_98d873be1ff16324d2c2bf822e72e238EntityRecord;
}

}

tradershubModel.RL_3a1899c5a981c2e6215522e2a06f6863 = RL_3a1899c5a981c2e6215522e2a06f6863;

});

define("tradershub.model$RL_3b8feaa11cc930133dbb7eecb085b527", ["exports", "@outsystems/runtime-core-js", "System_.model", "tradershub.model", "System_.model$UserLoginFailureReasonRec", "tradershub.referencesHealth", "tradershub.referencesHealth$System_"], function (exports, OSRuntimeCore, System_Model, tradershubModel) {
var OS = OSRuntimeCore;
class RL_3b8feaa11cc930133dbb7eecb085b527 extends 
OS.DataTypes.GenericRecordList {
static getItemType() {
return OS.SystemStructures.UserLoginFailureReasonRec;
}

}

tradershubModel.RL_3b8feaa11cc930133dbb7eecb085b527 = RL_3b8feaa11cc930133dbb7eecb085b527;

});

define("tradershub.model$RC_3bbfc6c91fcd8a2dd97847564be30682", ["exports", "@outsystems/runtime-core-js", "OutSystemsUI.model", "tradershub.model", "OutSystemsUI.model$EN_f9178b4aae1879ea388b92402c64db4cEntityRecord", "tradershub.referencesHealth", "tradershub.referencesHealth$OutSystemsUI"], function (exports, OSRuntimeCore, OutSystemsUIModel, tradershubModel) {
var OS = OSRuntimeCore;
{class RC_3bbfc6c91fcd8a2dd97847564be30682Inner extends 
OS.DataTypes.GenericRecord {
static attributesToDeclare() {
return [
this.attr("IdentityProvider", "identityProviderAttr", "IdentityProvider", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new OutSystemsUIModel.EN_f9178b4aae1879ea388b92402c64db4cEntityRecord());
}, true, OutSystemsUIModel.EN_f9178b4aae1879ea388b92402c64db4cEntityRecord)
].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
}

static fromStructure(str) {
return new RC_3bbfc6c91fcd8a2dd97847564be30682(new RC_3bbfc6c91fcd8a2dd97847564be30682.RecordClass({
identityProviderAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
}

}

tradershubModel.RC_3bbfc6c91fcd8a2dd97847564be30682 = RC_3bbfc6c91fcd8a2dd97847564be30682Inner;

RC_3bbfc6c91fcd8a2dd97847564be30682Inner._isAnonymousRecord = true;
RC_3bbfc6c91fcd8a2dd97847564be30682Inner.UniqueId = "3bbfc6c9-1fcd-8a2d-d978-47564be30682";
var RC_3bbfc6c91fcd8a2dd97847564be30682 = RC_3bbfc6c91fcd8a2dd97847564be30682Inner;
RC_3bbfc6c91fcd8a2dd97847564be30682.init();
}
});

define("tradershub.model$RC_3c60a1846470070c1bbae2a1d22163d2", ["exports", "@outsystems/runtime-core-js", "RESTAPIWebsocket.model", "tradershub.model", "RESTAPIWebsocket.model$ST_628e5221d510e98bcfe00cce5f107d21Structure", "tradershub.referencesHealth", "tradershub.referencesHealth$RESTAPIWebsocket"], function (exports, OSRuntimeCore, RESTAPIWebsocketModel, tradershubModel) {
var OS = OSRuntimeCore;
{class RC_3c60a1846470070c1bbae2a1d22163d2Inner extends 
OS.DataTypes.GenericRecord {
static attributesToDeclare() {
return [
this.attr("Config", "configAttr", "Config", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new RESTAPIWebsocketModel.ST_628e5221d510e98bcfe00cce5f107d21Structure());
}, true, RESTAPIWebsocketModel.ST_628e5221d510e98bcfe00cce5f107d21Structure)
].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
}

static fromStructure(str) {
return new RC_3c60a1846470070c1bbae2a1d22163d2(new RC_3c60a1846470070c1bbae2a1d22163d2.RecordClass({
configAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
}

}

tradershubModel.RC_3c60a1846470070c1bbae2a1d22163d2 = RC_3c60a1846470070c1bbae2a1d22163d2Inner;

RC_3c60a1846470070c1bbae2a1d22163d2Inner._isAnonymousRecord = true;
RC_3c60a1846470070c1bbae2a1d22163d2Inner.UniqueId = "3c60a184-6470-070c-1bba-e2a1d22163d2";
var RC_3c60a1846470070c1bbae2a1d22163d2 = RC_3c60a1846470070c1bbae2a1d22163d2Inner;
RC_3c60a1846470070c1bbae2a1d22163d2.init();
}
});

define("tradershub.model$RC_3c9956b9cc7977c9df74dd66c7739fc9", ["exports", "@outsystems/runtime-core-js", "tradershub.model", "tradershub.model$ST_63cc3919eec86680389c2f3be3c018faStructure"], function (exports, OSRuntimeCore, tradershubModel) {
var OS = OSRuntimeCore;
{class RC_3c9956b9cc7977c9df74dd66c7739fc9Inner extends 
OS.DataTypes.GenericRecord {
static attributesToDeclare() {
return [
this.attr("landing_company", "landing_companyAttr", "landing_company", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new tradershubModel.ST_63cc3919eec86680389c2f3be3c018faStructure());
}, true, tradershubModel.ST_63cc3919eec86680389c2f3be3c018faStructure)
].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
}

static fromStructure(str) {
return new RC_3c9956b9cc7977c9df74dd66c7739fc9(new RC_3c9956b9cc7977c9df74dd66c7739fc9.RecordClass({
landing_companyAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
}

}

tradershubModel.RC_3c9956b9cc7977c9df74dd66c7739fc9 = RC_3c9956b9cc7977c9df74dd66c7739fc9Inner;

RC_3c9956b9cc7977c9df74dd66c7739fc9Inner._isAnonymousRecord = true;
RC_3c9956b9cc7977c9df74dd66c7739fc9Inner.UniqueId = "3c9956b9-cc79-77c9-df74-dd66c7739fc9";
var RC_3c9956b9cc7977c9df74dd66c7739fc9 = RC_3c9956b9cc7977c9df74dd66c7739fc9Inner;
RC_3c9956b9cc7977c9df74dd66c7739fc9.init();
}
});

define("tradershub.model$RL_3ca6f21f8a7ceea4eaa2dfc40b22a5c8", ["exports", "@outsystems/runtime-core-js", "tradershub.model", "tradershub.model$RC_15473366250c32d5c90e736dd1330de3"], function (exports, OSRuntimeCore, tradershubModel) {
var OS = OSRuntimeCore;
class RL_3ca6f21f8a7ceea4eaa2dfc40b22a5c8 extends 
OS.DataTypes.GenericRecordList {
static getItemType() {
return tradershubModel.RC_15473366250c32d5c90e736dd1330de3;
}

}

tradershubModel.RL_3ca6f21f8a7ceea4eaa2dfc40b22a5c8 = RL_3ca6f21f8a7ceea4eaa2dfc40b22a5c8;

});

define("tradershub.model$RL_3ceaf8c75f7341cd8a52e0037549736f", ["exports", "@outsystems/runtime-core-js", "OutSystemsMaps.model", "tradershub.model", "OutSystemsMaps.model$EN_f6b05f1cc2ae707d67f7da7ba2f4fd22EntityRecord", "tradershub.referencesHealth", "tradershub.referencesHealth$OutSystemsMaps"], function (exports, OSRuntimeCore, OutSystemsMapsModel, tradershubModel) {
var OS = OSRuntimeCore;
class RL_3ceaf8c75f7341cd8a52e0037549736f extends 
OS.DataTypes.GenericRecordList {
static getItemType() {
return OutSystemsMapsModel.EN_f6b05f1cc2ae707d67f7da7ba2f4fd22EntityRecord;
}

}

tradershubModel.RL_3ceaf8c75f7341cd8a52e0037549736f = RL_3ceaf8c75f7341cd8a52e0037549736f;

});

define("tradershub.model$RL_3cfea1a1e933b75750f570ea368d3da2", ["exports", "@outsystems/runtime-core-js", "OutSystemsUI.model", "tradershub.model", "OutSystemsUI.model$ST_8391f9d0c6b78f74493c47987669deecStructure", "tradershub.referencesHealth", "tradershub.referencesHealth$OutSystemsUI"], function (exports, OSRuntimeCore, OutSystemsUIModel, tradershubModel) {
var OS = OSRuntimeCore;
class RL_3cfea1a1e933b75750f570ea368d3da2 extends 
OS.DataTypes.GenericRecordList {
static getItemType() {
return OutSystemsUIModel.ST_8391f9d0c6b78f74493c47987669deecStructure;
}

}

tradershubModel.RL_3cfea1a1e933b75750f570ea368d3da2 = RL_3cfea1a1e933b75750f570ea368d3da2;

});

define("tradershub.model$RC_3d151c63adf137bd3c85eaa462bbbe0c", ["exports", "@outsystems/runtime-core-js", "OutSystemsMaps.model", "tradershub.model", "OutSystemsMaps.model$EN_4d0e07d9538530f68924ab612d15f82bEntityRecord", "tradershub.referencesHealth", "tradershub.referencesHealth$OutSystemsMaps"], function (exports, OSRuntimeCore, OutSystemsMapsModel, tradershubModel) {
var OS = OSRuntimeCore;
{class RC_3d151c63adf137bd3c85eaa462bbbe0cInner extends 
OS.DataTypes.GenericRecord {
static attributesToDeclare() {
return [
this.attr("MapErrors", "mapErrorsAttr", "MapErrors", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new OutSystemsMapsModel.EN_4d0e07d9538530f68924ab612d15f82bEntityRecord());
}, true, OutSystemsMapsModel.EN_4d0e07d9538530f68924ab612d15f82bEntityRecord)
].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
}

static fromStructure(str) {
return new RC_3d151c63adf137bd3c85eaa462bbbe0c(new RC_3d151c63adf137bd3c85eaa462bbbe0c.RecordClass({
mapErrorsAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
}

}

tradershubModel.RC_3d151c63adf137bd3c85eaa462bbbe0c = RC_3d151c63adf137bd3c85eaa462bbbe0cInner;

RC_3d151c63adf137bd3c85eaa462bbbe0cInner._isAnonymousRecord = true;
RC_3d151c63adf137bd3c85eaa462bbbe0cInner.UniqueId = "3d151c63-adf1-37bd-3c85-eaa462bbbe0c";
var RC_3d151c63adf137bd3c85eaa462bbbe0c = RC_3d151c63adf137bd3c85eaa462bbbe0cInner;
RC_3d151c63adf137bd3c85eaa462bbbe0c.init();
}
});

define("tradershub.model$ST_3d5602677826d8c01775c21c1065c8ceStructure", ["exports", "@outsystems/runtime-core-js", "tradershub.model", "tradershub.model$ST_77f038c3163215737af9b67456557924Structure", "tradershub.model$ST_1eac13b44db3d2db577291973f4a7e96Structure", "tradershub.model$RL_10436c71a703b5c08e6ed74c34052e0a"], function (exports, OSRuntimeCore, tradershubModel) {
var OS = OSRuntimeCore;
{class ST_3d5602677826d8c01775c21c1065c8ceStructureInner extends 
OS.DataTypes.GenericRecord {
static attributesToDeclare() {
return [
this.attr("Echo_req", "echo_reqAttr", "echo_req", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new tradershubModel.ST_77f038c3163215737af9b67456557924Structure());
}, true, tradershubModel.ST_77f038c3163215737af9b67456557924Structure), 
this.attr("Msg_type", "msg_typeAttr", "msg_type", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Req_id", "req_idAttr", "req_id", false, false, OS.DataTypes.DataTypes.LongInteger, function () {
return OS.DataTypes.LongInteger.defaultValue;
}, true), 
this.attr("Residence_list", "residence_listAttr", "residence_list", false, false, OS.DataTypes.DataTypes.RecordList, function () {
return OS.DataTypes.ImmutableBase.getData(new tradershubModel.RL_10436c71a703b5c08e6ed74c34052e0a());
}, true, tradershubModel.RL_10436c71a703b5c08e6ed74c34052e0a)
].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
}

}

tradershubModel.ST_3d5602677826d8c01775c21c1065c8ceStructure = ST_3d5602677826d8c01775c21c1065c8ceStructureInner;

var ST_3d5602677826d8c01775c21c1065c8ceStructure = ST_3d5602677826d8c01775c21c1065c8ceStructureInner;
ST_3d5602677826d8c01775c21c1065c8ceStructure.init();
}
});

define("tradershub.model$RC_3d7c5be4055c8fe2c227afc40d8dee2f", ["exports", "@outsystems/runtime-core-js", "OutSystemsUI.model", "tradershub.model", "OutSystemsUI.model$EN_1967a79b0bc6b1bdc38ff87eefe0b127EntityRecord", "tradershub.referencesHealth", "tradershub.referencesHealth$OutSystemsUI"], function (exports, OSRuntimeCore, OutSystemsUIModel, tradershubModel) {
var OS = OSRuntimeCore;
{class RC_3d7c5be4055c8fe2c227afc40d8dee2fInner extends 
OS.DataTypes.GenericRecord {
static attributesToDeclare() {
return [
this.attr("ScrollbarStyle", "scrollbarStyleAttr", "ScrollbarStyle", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new OutSystemsUIModel.EN_1967a79b0bc6b1bdc38ff87eefe0b127EntityRecord());
}, true, OutSystemsUIModel.EN_1967a79b0bc6b1bdc38ff87eefe0b127EntityRecord)
].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
}

static fromStructure(str) {
return new RC_3d7c5be4055c8fe2c227afc40d8dee2f(new RC_3d7c5be4055c8fe2c227afc40d8dee2f.RecordClass({
scrollbarStyleAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
}

}

tradershubModel.RC_3d7c5be4055c8fe2c227afc40d8dee2f = RC_3d7c5be4055c8fe2c227afc40d8dee2fInner;

RC_3d7c5be4055c8fe2c227afc40d8dee2fInner._isAnonymousRecord = true;
RC_3d7c5be4055c8fe2c227afc40d8dee2fInner.UniqueId = "3d7c5be4-055c-8fe2-c227-afc40d8dee2f";
var RC_3d7c5be4055c8fe2c227afc40d8dee2f = RC_3d7c5be4055c8fe2c227afc40d8dee2fInner;
RC_3d7c5be4055c8fe2c227afc40d8dee2f.init();
}
});

define("tradershub.model$RL_3ddab8163c31ef065226c1ec689ad1e9", ["exports", "@outsystems/runtime-core-js", "RESTAPIWebsocket.model", "tradershub.model", "RESTAPIWebsocket.model$ST_113226709b84b71c70ebd50296313568Structure", "tradershub.referencesHealth", "tradershub.referencesHealth$RESTAPIWebsocket"], function (exports, OSRuntimeCore, RESTAPIWebsocketModel, tradershubModel) {
var OS = OSRuntimeCore;
class RL_3ddab8163c31ef065226c1ec689ad1e9 extends 
OS.DataTypes.GenericRecordList {
static getItemType() {
return RESTAPIWebsocketModel.ST_113226709b84b71c70ebd50296313568Structure;
}

}

tradershubModel.RL_3ddab8163c31ef065226c1ec689ad1e9 = RL_3ddab8163c31ef065226c1ec689ad1e9;

});

define("tradershub.model$RC_3ded2f3465f64b88874b3237c0af88a2", ["exports", "@outsystems/runtime-core-js", "tradershub.model", "tradershub.model$ST_b10d1c4f5fc0d31a18056008247642ebStructure"], function (exports, OSRuntimeCore, tradershubModel) {
var OS = OSRuntimeCore;
{class RC_3ded2f3465f64b88874b3237c0af88a2Inner extends 
OS.DataTypes.GenericRecord {
static attributesToDeclare() {
return [
this.attr("PostVerifyEmailRequest", "postVerifyEmailRequestAttr", "PostVerifyEmailRequest", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new tradershubModel.ST_b10d1c4f5fc0d31a18056008247642ebStructure());
}, true, tradershubModel.ST_b10d1c4f5fc0d31a18056008247642ebStructure)
].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
}

static fromStructure(str) {
return new RC_3ded2f3465f64b88874b3237c0af88a2(new RC_3ded2f3465f64b88874b3237c0af88a2.RecordClass({
postVerifyEmailRequestAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
}

}

tradershubModel.RC_3ded2f3465f64b88874b3237c0af88a2 = RC_3ded2f3465f64b88874b3237c0af88a2Inner;

RC_3ded2f3465f64b88874b3237c0af88a2Inner._isAnonymousRecord = true;
RC_3ded2f3465f64b88874b3237c0af88a2Inner.UniqueId = "3ded2f34-65f6-4b88-874b-3237c0af88a2";
var RC_3ded2f3465f64b88874b3237c0af88a2 = RC_3ded2f3465f64b88874b3237c0af88a2Inner;
RC_3ded2f3465f64b88874b3237c0af88a2.init();
}
});

define("tradershub.model$RL_3e9d003efe19bfd5edf008a600c8d3af", ["exports", "@outsystems/runtime-core-js", "OutSystemsMaps.model", "tradershub.model", "OutSystemsMaps.model$ST_ca9f1e36e4f2b1c8cabc0fd0c956ac77Structure", "tradershub.referencesHealth", "tradershub.referencesHealth$OutSystemsMaps"], function (exports, OSRuntimeCore, OutSystemsMapsModel, tradershubModel) {
var OS = OSRuntimeCore;
class RL_3e9d003efe19bfd5edf008a600c8d3af extends 
OS.DataTypes.GenericRecordList {
static getItemType() {
return OutSystemsMapsModel.ST_ca9f1e36e4f2b1c8cabc0fd0c956ac77Structure;
}

}

tradershubModel.RL_3e9d003efe19bfd5edf008a600c8d3af = RL_3e9d003efe19bfd5edf008a600c8d3af;

});

define("tradershub.model$RL_3eb142885450c4f06d801d91ae8ca8ef", ["exports", "@outsystems/runtime-core-js", "tradershub.model", "tradershub.model$ST_152f791bd12ecebe98c991a448719621Structure"], function (exports, OSRuntimeCore, tradershubModel) {
var OS = OSRuntimeCore;
class RL_3eb142885450c4f06d801d91ae8ca8ef extends 
OS.DataTypes.GenericRecordList {
static getItemType() {
return tradershubModel.ST_152f791bd12ecebe98c991a448719621Structure;
}

}

tradershubModel.RL_3eb142885450c4f06d801d91ae8ca8ef = RL_3eb142885450c4f06d801d91ae8ca8ef;

});

define("tradershub.model$RL_3edf9b671d971f98015ab6b1b5f47187", ["exports", "@outsystems/runtime-core-js", "OutSystemsMaps.model", "tradershub.model", "OutSystemsMaps.model$ST_597877eac22877030461f6d98995be4aStructure", "tradershub.referencesHealth", "tradershub.referencesHealth$OutSystemsMaps"], function (exports, OSRuntimeCore, OutSystemsMapsModel, tradershubModel) {
var OS = OSRuntimeCore;
class RL_3edf9b671d971f98015ab6b1b5f47187 extends 
OS.DataTypes.GenericRecordList {
static getItemType() {
return OutSystemsMapsModel.ST_597877eac22877030461f6d98995be4aStructure;
}

}

tradershubModel.RL_3edf9b671d971f98015ab6b1b5f47187 = RL_3edf9b671d971f98015ab6b1b5f47187;

});

define("tradershub.model$RC_3f4d741c30bd5473dc9c679433c442c3", ["exports", "@outsystems/runtime-core-js", "RESTAPIWebsocket.model", "tradershub.model", "RESTAPIWebsocket.model$ST_2aef4efdcc8a8ad935c2f051f3051327Structure", "tradershub.referencesHealth", "tradershub.referencesHealth$RESTAPIWebsocket"], function (exports, OSRuntimeCore, RESTAPIWebsocketModel, tradershubModel) {
var OS = OSRuntimeCore;
{class RC_3f4d741c30bd5473dc9c679433c442c3Inner extends 
OS.DataTypes.GenericRecord {
static attributesToDeclare() {
return [
this.attr("Documents_supported2", "documents_supported2Attr", "Documents_supported6", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new RESTAPIWebsocketModel.ST_2aef4efdcc8a8ad935c2f051f3051327Structure());
}, true, RESTAPIWebsocketModel.ST_2aef4efdcc8a8ad935c2f051f3051327Structure)
].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
}

static fromStructure(str) {
return new RC_3f4d741c30bd5473dc9c679433c442c3(new RC_3f4d741c30bd5473dc9c679433c442c3.RecordClass({
documents_supported2Attr: OS.DataTypes.ImmutableBase.getData(str)
}));
}

}

tradershubModel.RC_3f4d741c30bd5473dc9c679433c442c3 = RC_3f4d741c30bd5473dc9c679433c442c3Inner;

RC_3f4d741c30bd5473dc9c679433c442c3Inner._isAnonymousRecord = true;
RC_3f4d741c30bd5473dc9c679433c442c3Inner.UniqueId = "3f4d741c-30bd-5473-dc9c-679433c442c3";
var RC_3f4d741c30bd5473dc9c679433c442c3 = RC_3f4d741c30bd5473dc9c679433c442c3Inner;
RC_3f4d741c30bd5473dc9c679433c442c3.init();
}
});

define("tradershub.model$RL_3f50d680427e71f126b28a89c9000c59", ["exports", "@outsystems/runtime-core-js", "tradershub.model", "tradershub.model$ST_77f038c3163215737af9b67456557924Structure"], function (exports, OSRuntimeCore, tradershubModel) {
var OS = OSRuntimeCore;
class RL_3f50d680427e71f126b28a89c9000c59 extends 
OS.DataTypes.GenericRecordList {
static getItemType() {
return tradershubModel.ST_77f038c3163215737af9b67456557924Structure;
}

}

tradershubModel.RL_3f50d680427e71f126b28a89c9000c59 = RL_3f50d680427e71f126b28a89c9000c59;

});

define("tradershub.model$RC_9817a5747e4b09aa3a6a7eb35ce9f66e", ["exports", "@outsystems/runtime-core-js", "System_.model", "tradershub.model", "System_.model$FinishResetPasswordResultRec", "tradershub.referencesHealth", "tradershub.referencesHealth$System_"], function (exports, OSRuntimeCore, System_Model, tradershubModel) {
var OS = OSRuntimeCore;
{class RC_9817a5747e4b09aa3a6a7eb35ce9f66eInner extends 
OS.DataTypes.GenericRecord {
static attributesToDeclare() {
return [
this.attr("FinishResetPasswordResult", "finishResetPasswordResultAttr", "FinishResetPasswordResult", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new OS.SystemStructures.FinishResetPasswordResultRec());
}, true, OS.SystemStructures.FinishResetPasswordResultRec)
].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
}

static fromStructure(str) {
return new RC_9817a5747e4b09aa3a6a7eb35ce9f66e(new RC_9817a5747e4b09aa3a6a7eb35ce9f66e.RecordClass({
finishResetPasswordResultAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
}

}

tradershubModel.RC_9817a5747e4b09aa3a6a7eb35ce9f66e = RC_9817a5747e4b09aa3a6a7eb35ce9f66eInner;

RC_9817a5747e4b09aa3a6a7eb35ce9f66eInner._isAnonymousRecord = true;
RC_9817a5747e4b09aa3a6a7eb35ce9f66eInner.UniqueId = "9817a574-7e4b-09aa-3a6a-7eb35ce9f66e";
var RC_9817a5747e4b09aa3a6a7eb35ce9f66e = RC_9817a5747e4b09aa3a6a7eb35ce9f66eInner;
RC_9817a5747e4b09aa3a6a7eb35ce9f66e.init();
}
});

define("tradershub.model$RL_3f7b36d8bbcf12054b7e2f49497f214f", ["exports", "@outsystems/runtime-core-js", "tradershub.model", "tradershub.model$RC_9817a5747e4b09aa3a6a7eb35ce9f66e"], function (exports, OSRuntimeCore, tradershubModel) {
var OS = OSRuntimeCore;
class RL_3f7b36d8bbcf12054b7e2f49497f214f extends 
OS.DataTypes.GenericRecordList {
static getItemType() {
return tradershubModel.RC_9817a5747e4b09aa3a6a7eb35ce9f66e;
}

}

tradershubModel.RL_3f7b36d8bbcf12054b7e2f49497f214f = RL_3f7b36d8bbcf12054b7e2f49497f214f;

});

define("tradershub.model$RC_4028c83435ff8f3fa19c27e5a3252dd5", ["exports", "@outsystems/runtime-core-js", "OutSystemsUI.model", "tradershub.model", "OutSystemsUI.model$ST_7d99fd1de65649f174aff6854b052539Structure", "tradershub.referencesHealth", "tradershub.referencesHealth$OutSystemsUI"], function (exports, OSRuntimeCore, OutSystemsUIModel, tradershubModel) {
var OS = OSRuntimeCore;
{class RC_4028c83435ff8f3fa19c27e5a3252dd5Inner extends 
OS.DataTypes.GenericRecord {
static attributesToDeclare() {
return [
this.attr("CarouselOptionalConfigs", "carouselOptionalConfigsAttr", "CarouselOptionalConfigs", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new OutSystemsUIModel.ST_7d99fd1de65649f174aff6854b052539Structure());
}, true, OutSystemsUIModel.ST_7d99fd1de65649f174aff6854b052539Structure)
].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
}

static fromStructure(str) {
return new RC_4028c83435ff8f3fa19c27e5a3252dd5(new RC_4028c83435ff8f3fa19c27e5a3252dd5.RecordClass({
carouselOptionalConfigsAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
}

}

tradershubModel.RC_4028c83435ff8f3fa19c27e5a3252dd5 = RC_4028c83435ff8f3fa19c27e5a3252dd5Inner;

RC_4028c83435ff8f3fa19c27e5a3252dd5Inner._isAnonymousRecord = true;
RC_4028c83435ff8f3fa19c27e5a3252dd5Inner.UniqueId = "4028c834-35ff-8f3f-a19c-27e5a3252dd5";
var RC_4028c83435ff8f3fa19c27e5a3252dd5 = RC_4028c83435ff8f3fa19c27e5a3252dd5Inner;
RC_4028c83435ff8f3fa19c27e5a3252dd5.init();
}
});

define("tradershub.model$RL_40926bad652f2233991b98241cbb55fb", ["exports", "@outsystems/runtime-core-js", "tradershub.model", "tradershub.model$RC_2d2b8fce9673870fca17c172a0607f00"], function (exports, OSRuntimeCore, tradershubModel) {
var OS = OSRuntimeCore;
class RL_40926bad652f2233991b98241cbb55fb extends 
OS.DataTypes.GenericRecordList {
static getItemType() {
return tradershubModel.RC_2d2b8fce9673870fca17c172a0607f00;
}

}

tradershubModel.RL_40926bad652f2233991b98241cbb55fb = RL_40926bad652f2233991b98241cbb55fb;

});

define("tradershub.model$RL_4153455d8943850f971d65d82f35900b", ["exports", "@outsystems/runtime-core-js", "tradershub.model", "tradershub.model$RC_19aa89641c7398ceacf4370c69126f64"], function (exports, OSRuntimeCore, tradershubModel) {
var OS = OSRuntimeCore;
class RL_4153455d8943850f971d65d82f35900b extends 
OS.DataTypes.GenericRecordList {
static getItemType() {
return tradershubModel.RC_19aa89641c7398ceacf4370c69126f64;
}

}

tradershubModel.RL_4153455d8943850f971d65d82f35900b = RL_4153455d8943850f971d65d82f35900b;

});

define("tradershub.model$RC_41d582632e7a7d4ce3695fe5e8da1ad0", ["exports", "@outsystems/runtime-core-js", "tradershub.model", "tradershub.model$ST_0690f5116aa54a9a733230ed909c87fbStructure"], function (exports, OSRuntimeCore, tradershubModel) {
var OS = OSRuntimeCore;
{class RC_41d582632e7a7d4ce3695fe5e8da1ad0Inner extends 
OS.DataTypes.GenericRecord {
static attributesToDeclare() {
return [
this.attr("Service", "serviceAttr", "Service", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new tradershubModel.ST_0690f5116aa54a9a733230ed909c87fbStructure());
}, true, tradershubModel.ST_0690f5116aa54a9a733230ed909c87fbStructure)
].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
}

static fromStructure(str) {
return new RC_41d582632e7a7d4ce3695fe5e8da1ad0(new RC_41d582632e7a7d4ce3695fe5e8da1ad0.RecordClass({
serviceAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
}

}

tradershubModel.RC_41d582632e7a7d4ce3695fe5e8da1ad0 = RC_41d582632e7a7d4ce3695fe5e8da1ad0Inner;

RC_41d582632e7a7d4ce3695fe5e8da1ad0Inner._isAnonymousRecord = true;
RC_41d582632e7a7d4ce3695fe5e8da1ad0Inner.UniqueId = "41d58263-2e7a-7d4c-e369-5fe5e8da1ad0";
var RC_41d582632e7a7d4ce3695fe5e8da1ad0 = RC_41d582632e7a7d4ce3695fe5e8da1ad0Inner;
RC_41d582632e7a7d4ce3695fe5e8da1ad0.init();
}
});

define("tradershub.model$RL_41f69bc5f164eef25227510b7af86bed", ["exports", "@outsystems/runtime-core-js", "OutSystemsMaps.model", "tradershub.model", "OutSystemsMaps.model$ST_a0cdfbad52e32bc69efd7ec23c40fc2fStructure", "tradershub.referencesHealth", "tradershub.referencesHealth$OutSystemsMaps"], function (exports, OSRuntimeCore, OutSystemsMapsModel, tradershubModel) {
var OS = OSRuntimeCore;
class RL_41f69bc5f164eef25227510b7af86bed extends 
OS.DataTypes.GenericRecordList {
static getItemType() {
return OutSystemsMapsModel.ST_a0cdfbad52e32bc69efd7ec23c40fc2fStructure;
}

}

tradershubModel.RL_41f69bc5f164eef25227510b7af86bed = RL_41f69bc5f164eef25227510b7af86bed;

});

define("tradershub.model$RC_5e259c61591c72343b5887d8b4ce62b5", ["exports", "@outsystems/runtime-core-js", "BrowserConsoleLogging.model", "tradershub.model", "BrowserConsoleLogging.model$EN_95096fd7ce0528eba549110f4ff009ffEntityRecord", "tradershub.referencesHealth", "tradershub.referencesHealth$BrowserConsoleLogging"], function (exports, OSRuntimeCore, BrowserConsoleLoggingModel, tradershubModel) {
var OS = OSRuntimeCore;
{class RC_5e259c61591c72343b5887d8b4ce62b5Inner extends 
OS.DataTypes.GenericRecord {
static attributesToDeclare() {
return [
this.attr("ConsoleErrorType", "consoleErrorTypeAttr", "ConsoleErrorType2", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new BrowserConsoleLoggingModel.EN_95096fd7ce0528eba549110f4ff009ffEntityRecord());
}, true, BrowserConsoleLoggingModel.EN_95096fd7ce0528eba549110f4ff009ffEntityRecord)
].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
}

static fromStructure(str) {
return new RC_5e259c61591c72343b5887d8b4ce62b5(new RC_5e259c61591c72343b5887d8b4ce62b5.RecordClass({
consoleErrorTypeAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
}

}

tradershubModel.RC_5e259c61591c72343b5887d8b4ce62b5 = RC_5e259c61591c72343b5887d8b4ce62b5Inner;

RC_5e259c61591c72343b5887d8b4ce62b5Inner._isAnonymousRecord = true;
RC_5e259c61591c72343b5887d8b4ce62b5Inner.UniqueId = "5e259c61-591c-7234-3b58-87d8b4ce62b5";
var RC_5e259c61591c72343b5887d8b4ce62b5 = RC_5e259c61591c72343b5887d8b4ce62b5Inner;
RC_5e259c61591c72343b5887d8b4ce62b5.init();
}
});

define("tradershub.model$RL_422c5cc1eb56f188f2e407af881395ae", ["exports", "@outsystems/runtime-core-js", "tradershub.model", "tradershub.model$RC_5e259c61591c72343b5887d8b4ce62b5"], function (exports, OSRuntimeCore, tradershubModel) {
var OS = OSRuntimeCore;
class RL_422c5cc1eb56f188f2e407af881395ae extends 
OS.DataTypes.GenericRecordList {
static getItemType() {
return tradershubModel.RC_5e259c61591c72343b5887d8b4ce62b5;
}

}

tradershubModel.RL_422c5cc1eb56f188f2e407af881395ae = RL_422c5cc1eb56f188f2e407af881395ae;

});

define("tradershub.model$RC_424d57a2d666c8edb0343600d6705eee", ["exports", "@outsystems/runtime-core-js", "OutSystemsCharts.model", "tradershub.model", "OutSystemsCharts.model$ST_87973ae5f6c07db6193b59603f29dce6Structure", "tradershub.referencesHealth", "tradershub.referencesHealth$OutSystemsCharts"], function (exports, OSRuntimeCore, OutSystemsChartsModel, tradershubModel) {
var OS = OSRuntimeCore;
{class RC_424d57a2d666c8edb0343600d6705eeeInner extends 
OS.DataTypes.GenericRecord {
static attributesToDeclare() {
return [
this.attr("Legacy_XAxisFormat", "legacy_XAxisFormatAttr", "Legacy_XAxisFormat", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new OutSystemsChartsModel.ST_87973ae5f6c07db6193b59603f29dce6Structure());
}, true, OutSystemsChartsModel.ST_87973ae5f6c07db6193b59603f29dce6Structure)
].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
}

static fromStructure(str) {
return new RC_424d57a2d666c8edb0343600d6705eee(new RC_424d57a2d666c8edb0343600d6705eee.RecordClass({
legacy_XAxisFormatAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
}

}

tradershubModel.RC_424d57a2d666c8edb0343600d6705eee = RC_424d57a2d666c8edb0343600d6705eeeInner;

RC_424d57a2d666c8edb0343600d6705eeeInner._isAnonymousRecord = true;
RC_424d57a2d666c8edb0343600d6705eeeInner.UniqueId = "424d57a2-d666-c8ed-b034-3600d6705eee";
var RC_424d57a2d666c8edb0343600d6705eee = RC_424d57a2d666c8edb0343600d6705eeeInner;
RC_424d57a2d666c8edb0343600d6705eee.init();
}
});

define("tradershub.model$RC_4296ff7d5f43d4cf83217088b56550c4", ["exports", "@outsystems/runtime-core-js", "tradershub.model", "tradershub.model$ST_3d5602677826d8c01775c21c1065c8ceStructure"], function (exports, OSRuntimeCore, tradershubModel) {
var OS = OSRuntimeCore;
{class RC_4296ff7d5f43d4cf83217088b56550c4Inner extends 
OS.DataTypes.GenericRecord {
static attributesToDeclare() {
return [
this.attr("ResidenceListResponse", "residenceListResponseAttr", "ResidenceListResponse", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new tradershubModel.ST_3d5602677826d8c01775c21c1065c8ceStructure());
}, true, tradershubModel.ST_3d5602677826d8c01775c21c1065c8ceStructure)
].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
}

static fromStructure(str) {
return new RC_4296ff7d5f43d4cf83217088b56550c4(new RC_4296ff7d5f43d4cf83217088b56550c4.RecordClass({
residenceListResponseAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
}

}

tradershubModel.RC_4296ff7d5f43d4cf83217088b56550c4 = RC_4296ff7d5f43d4cf83217088b56550c4Inner;

RC_4296ff7d5f43d4cf83217088b56550c4Inner._isAnonymousRecord = true;
RC_4296ff7d5f43d4cf83217088b56550c4Inner.UniqueId = "4296ff7d-5f43-d4cf-8321-7088b56550c4";
var RC_4296ff7d5f43d4cf83217088b56550c4 = RC_4296ff7d5f43d4cf83217088b56550c4Inner;
RC_4296ff7d5f43d4cf83217088b56550c4.init();
}
});

define("tradershub.model$RC_655de439743f6ef66e4c426b009f58b1", ["exports", "@outsystems/runtime-core-js", "RESTAPIWebsocket.model", "tradershub.model", "RESTAPIWebsocket.model$ST_e9350867621f419f78bd47d2bb88d9ceStructure", "tradershub.referencesHealth", "tradershub.referencesHealth$RESTAPIWebsocket"], function (exports, OSRuntimeCore, RESTAPIWebsocketModel, tradershubModel) {
var OS = OSRuntimeCore;
{class RC_655de439743f6ef66e4c426b009f58b1Inner extends 
OS.DataTypes.GenericRecord {
static attributesToDeclare() {
return [
this.attr("Documents_supported", "documents_supportedAttr", "Documents_supported5", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new RESTAPIWebsocketModel.ST_e9350867621f419f78bd47d2bb88d9ceStructure());
}, true, RESTAPIWebsocketModel.ST_e9350867621f419f78bd47d2bb88d9ceStructure)
].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
}

static fromStructure(str) {
return new RC_655de439743f6ef66e4c426b009f58b1(new RC_655de439743f6ef66e4c426b009f58b1.RecordClass({
documents_supportedAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
}

}

tradershubModel.RC_655de439743f6ef66e4c426b009f58b1 = RC_655de439743f6ef66e4c426b009f58b1Inner;

RC_655de439743f6ef66e4c426b009f58b1Inner._isAnonymousRecord = true;
RC_655de439743f6ef66e4c426b009f58b1Inner.UniqueId = "655de439-743f-6ef6-6e4c-426b009f58b1";
var RC_655de439743f6ef66e4c426b009f58b1 = RC_655de439743f6ef66e4c426b009f58b1Inner;
RC_655de439743f6ef66e4c426b009f58b1.init();
}
});

define("tradershub.model$RL_431a1d9d775d905a0fa33726ccc368ad", ["exports", "@outsystems/runtime-core-js", "tradershub.model", "tradershub.model$RC_655de439743f6ef66e4c426b009f58b1"], function (exports, OSRuntimeCore, tradershubModel) {
var OS = OSRuntimeCore;
class RL_431a1d9d775d905a0fa33726ccc368ad extends 
OS.DataTypes.GenericRecordList {
static getItemType() {
return tradershubModel.RC_655de439743f6ef66e4c426b009f58b1;
}

}

tradershubModel.RL_431a1d9d775d905a0fa33726ccc368ad = RL_431a1d9d775d905a0fa33726ccc368ad;

});

define("tradershub.model$RC_6b9e3f254c013fc12f4f30e097221de8", ["exports", "@outsystems/runtime-core-js", "tradershub.model", "tradershub.model$ST_93ef64f8dfe1ec688524daa02560c1d7Structure"], function (exports, OSRuntimeCore, tradershubModel) {
var OS = OSRuntimeCore;
{class RC_6b9e3f254c013fc12f4f30e097221de8Inner extends 
OS.DataTypes.GenericRecord {
static attributesToDeclare() {
return [
this.attr("LinkItem", "linkItemAttr", "LinkItem", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new tradershubModel.ST_93ef64f8dfe1ec688524daa02560c1d7Structure());
}, true, tradershubModel.ST_93ef64f8dfe1ec688524daa02560c1d7Structure)
].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
}

static fromStructure(str) {
return new RC_6b9e3f254c013fc12f4f30e097221de8(new RC_6b9e3f254c013fc12f4f30e097221de8.RecordClass({
linkItemAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
}

}

tradershubModel.RC_6b9e3f254c013fc12f4f30e097221de8 = RC_6b9e3f254c013fc12f4f30e097221de8Inner;

RC_6b9e3f254c013fc12f4f30e097221de8Inner._isAnonymousRecord = true;
RC_6b9e3f254c013fc12f4f30e097221de8Inner.UniqueId = "6b9e3f25-4c01-3fc1-2f4f-30e097221de8";
var RC_6b9e3f254c013fc12f4f30e097221de8 = RC_6b9e3f254c013fc12f4f30e097221de8Inner;
RC_6b9e3f254c013fc12f4f30e097221de8.init();
}
});

define("tradershub.model$RL_433af98b9f3ff1c98f903179ab2b7743", ["exports", "@outsystems/runtime-core-js", "tradershub.model", "tradershub.model$RC_6b9e3f254c013fc12f4f30e097221de8"], function (exports, OSRuntimeCore, tradershubModel) {
var OS = OSRuntimeCore;
class RL_433af98b9f3ff1c98f903179ab2b7743 extends 
OS.DataTypes.GenericRecordList {
static getItemType() {
return tradershubModel.RC_6b9e3f254c013fc12f4f30e097221de8;
}

}

tradershubModel.RL_433af98b9f3ff1c98f903179ab2b7743 = RL_433af98b9f3ff1c98f903179ab2b7743;

});

define("tradershub.model$RC_43bc430cd4b2876c18eee5a50b2984a4", ["exports", "@outsystems/runtime-core-js", "tradershub.model", "tradershub.model$ST_6460f355981e1f253edfbd5d857d76bdStructure"], function (exports, OSRuntimeCore, tradershubModel) {
var OS = OSRuntimeCore;
{class RC_43bc430cd4b2876c18eee5a50b2984a4Inner extends 
OS.DataTypes.GenericRecord {
static attributesToDeclare() {
return [
this.attr("DemoItem", "demoItemAttr", "DemoItem", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new tradershubModel.ST_6460f355981e1f253edfbd5d857d76bdStructure());
}, true, tradershubModel.ST_6460f355981e1f253edfbd5d857d76bdStructure)
].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
}

static fromStructure(str) {
return new RC_43bc430cd4b2876c18eee5a50b2984a4(new RC_43bc430cd4b2876c18eee5a50b2984a4.RecordClass({
demoItemAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
}

}

tradershubModel.RC_43bc430cd4b2876c18eee5a50b2984a4 = RC_43bc430cd4b2876c18eee5a50b2984a4Inner;

RC_43bc430cd4b2876c18eee5a50b2984a4Inner._isAnonymousRecord = true;
RC_43bc430cd4b2876c18eee5a50b2984a4Inner.UniqueId = "43bc430c-d4b2-876c-18ee-e5a50b2984a4";
var RC_43bc430cd4b2876c18eee5a50b2984a4 = RC_43bc430cd4b2876c18eee5a50b2984a4Inner;
RC_43bc430cd4b2876c18eee5a50b2984a4.init();
}
});

define("tradershub.model$RL_43c33c0f3b9a2eb3199ef87eb6b6c7b3", ["exports", "@outsystems/runtime-core-js", "RESTAPIWebsocket.model", "tradershub.model", "RESTAPIWebsocket.model$ST_55477c48be760e041c4dbfa365f63009Structure", "tradershub.referencesHealth", "tradershub.referencesHealth$RESTAPIWebsocket"], function (exports, OSRuntimeCore, RESTAPIWebsocketModel, tradershubModel) {
var OS = OSRuntimeCore;
class RL_43c33c0f3b9a2eb3199ef87eb6b6c7b3 extends 
OS.DataTypes.GenericRecordList {
static getItemType() {
return RESTAPIWebsocketModel.ST_55477c48be760e041c4dbfa365f63009Structure;
}

}

tradershubModel.RL_43c33c0f3b9a2eb3199ef87eb6b6c7b3 = RL_43c33c0f3b9a2eb3199ef87eb6b6c7b3;

});

define("tradershub.model$RL_4438108cb3e8b9ed9e8aaff799663860", ["exports", "@outsystems/runtime-core-js", "OutSystemsUI.model", "tradershub.model", "OutSystemsUI.model$EN_75c9c074bd528ecee8df4d2a3299b5a1EntityRecord", "tradershub.referencesHealth", "tradershub.referencesHealth$OutSystemsUI"], function (exports, OSRuntimeCore, OutSystemsUIModel, tradershubModel) {
var OS = OSRuntimeCore;
class RL_4438108cb3e8b9ed9e8aaff799663860 extends 
OS.DataTypes.GenericRecordList {
static getItemType() {
return OutSystemsUIModel.EN_75c9c074bd528ecee8df4d2a3299b5a1EntityRecord;
}

}

tradershubModel.RL_4438108cb3e8b9ed9e8aaff799663860 = RL_4438108cb3e8b9ed9e8aaff799663860;

});

define("tradershub.model$RC_44b7e8f0764c9d3d615c2b316db93ff7", ["exports", "@outsystems/runtime-core-js", "tradershub.model", "tradershub.model$ST_d0797dfc77615b3a25728769b9f01e76Structure"], function (exports, OSRuntimeCore, tradershubModel) {
var OS = OSRuntimeCore;
{class RC_44b7e8f0764c9d3d615c2b316db93ff7Inner extends 
OS.DataTypes.GenericRecord {
static attributesToDeclare() {
return [
this.attr("Idv", "idvAttr", "Idv", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new tradershubModel.ST_d0797dfc77615b3a25728769b9f01e76Structure());
}, true, tradershubModel.ST_d0797dfc77615b3a25728769b9f01e76Structure)
].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
}

static fromStructure(str) {
return new RC_44b7e8f0764c9d3d615c2b316db93ff7(new RC_44b7e8f0764c9d3d615c2b316db93ff7.RecordClass({
idvAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
}

}

tradershubModel.RC_44b7e8f0764c9d3d615c2b316db93ff7 = RC_44b7e8f0764c9d3d615c2b316db93ff7Inner;

RC_44b7e8f0764c9d3d615c2b316db93ff7Inner._isAnonymousRecord = true;
RC_44b7e8f0764c9d3d615c2b316db93ff7Inner.UniqueId = "44b7e8f0-764c-9d3d-615c-2b316db93ff7";
var RC_44b7e8f0764c9d3d615c2b316db93ff7 = RC_44b7e8f0764c9d3d615c2b316db93ff7Inner;
RC_44b7e8f0764c9d3d615c2b316db93ff7.init();
}
});

define("tradershub.model$RC_d5f1faf2f682624c1c27e7a932faee50", ["exports", "@outsystems/runtime-core-js", "RESTAPIWebsocket.model", "tradershub.model", "RESTAPIWebsocket.model$ST_a37989da54adde60afe7657f5bc1d06eStructure", "tradershub.referencesHealth", "tradershub.referencesHealth$RESTAPIWebsocket"], function (exports, OSRuntimeCore, RESTAPIWebsocketModel, tradershubModel) {
var OS = OSRuntimeCore;
{class RC_d5f1faf2f682624c1c27e7a932faee50Inner extends 
OS.DataTypes.GenericRecord {
static attributesToDeclare() {
return [
this.attr("Disclaimer", "disclaimerAttr", "Disclaimer", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new RESTAPIWebsocketModel.ST_a37989da54adde60afe7657f5bc1d06eStructure());
}, true, RESTAPIWebsocketModel.ST_a37989da54adde60afe7657f5bc1d06eStructure)
].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
}

static fromStructure(str) {
return new RC_d5f1faf2f682624c1c27e7a932faee50(new RC_d5f1faf2f682624c1c27e7a932faee50.RecordClass({
disclaimerAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
}

}

tradershubModel.RC_d5f1faf2f682624c1c27e7a932faee50 = RC_d5f1faf2f682624c1c27e7a932faee50Inner;

RC_d5f1faf2f682624c1c27e7a932faee50Inner._isAnonymousRecord = true;
RC_d5f1faf2f682624c1c27e7a932faee50Inner.UniqueId = "d5f1faf2-f682-624c-1c27-e7a932faee50";
var RC_d5f1faf2f682624c1c27e7a932faee50 = RC_d5f1faf2f682624c1c27e7a932faee50Inner;
RC_d5f1faf2f682624c1c27e7a932faee50.init();
}
});

define("tradershub.model$RL_44cebee119c996a470fbff1d981600f0", ["exports", "@outsystems/runtime-core-js", "tradershub.model", "tradershub.model$RC_d5f1faf2f682624c1c27e7a932faee50"], function (exports, OSRuntimeCore, tradershubModel) {
var OS = OSRuntimeCore;
class RL_44cebee119c996a470fbff1d981600f0 extends 
OS.DataTypes.GenericRecordList {
static getItemType() {
return tradershubModel.RC_d5f1faf2f682624c1c27e7a932faee50;
}

}

tradershubModel.RL_44cebee119c996a470fbff1d981600f0 = RL_44cebee119c996a470fbff1d981600f0;

});

define("tradershub.model$RC_73fae6920f82113320dccc89ef073c01", ["exports", "@outsystems/runtime-core-js", "OutSystemsUI.model", "tradershub.model", "OutSystemsUI.model$EN_f0a0dc1163bf03e1d7bb0d253808f956EntityRecord", "tradershub.referencesHealth", "tradershub.referencesHealth$OutSystemsUI"], function (exports, OSRuntimeCore, OutSystemsUIModel, tradershubModel) {
var OS = OSRuntimeCore;
{class RC_73fae6920f82113320dccc89ef073c01Inner extends 
OS.DataTypes.GenericRecord {
static attributesToDeclare() {
return [
this.attr("AccordionIconType", "accordionIconTypeAttr", "AccordionIconType", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new OutSystemsUIModel.EN_f0a0dc1163bf03e1d7bb0d253808f956EntityRecord());
}, true, OutSystemsUIModel.EN_f0a0dc1163bf03e1d7bb0d253808f956EntityRecord)
].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
}

static fromStructure(str) {
return new RC_73fae6920f82113320dccc89ef073c01(new RC_73fae6920f82113320dccc89ef073c01.RecordClass({
accordionIconTypeAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
}

}

tradershubModel.RC_73fae6920f82113320dccc89ef073c01 = RC_73fae6920f82113320dccc89ef073c01Inner;

RC_73fae6920f82113320dccc89ef073c01Inner._isAnonymousRecord = true;
RC_73fae6920f82113320dccc89ef073c01Inner.UniqueId = "73fae692-0f82-1133-20dc-cc89ef073c01";
var RC_73fae6920f82113320dccc89ef073c01 = RC_73fae6920f82113320dccc89ef073c01Inner;
RC_73fae6920f82113320dccc89ef073c01.init();
}
});

define("tradershub.model$RL_452bae0381b3504e486b471d2123e658", ["exports", "@outsystems/runtime-core-js", "tradershub.model", "tradershub.model$RC_73fae6920f82113320dccc89ef073c01"], function (exports, OSRuntimeCore, tradershubModel) {
var OS = OSRuntimeCore;
class RL_452bae0381b3504e486b471d2123e658 extends 
OS.DataTypes.GenericRecordList {
static getItemType() {
return tradershubModel.RC_73fae6920f82113320dccc89ef073c01;
}

}

tradershubModel.RL_452bae0381b3504e486b471d2123e658 = RL_452bae0381b3504e486b471d2123e658;

});

define("tradershub.model$RL_45f425cbfe3f41d3fac973fe3238818f", ["exports", "@outsystems/runtime-core-js", "tradershub.model", "tradershub.model$RC_3c60a1846470070c1bbae2a1d22163d2"], function (exports, OSRuntimeCore, tradershubModel) {
var OS = OSRuntimeCore;
class RL_45f425cbfe3f41d3fac973fe3238818f extends 
OS.DataTypes.GenericRecordList {
static getItemType() {
return tradershubModel.RC_3c60a1846470070c1bbae2a1d22163d2;
}

}

tradershubModel.RL_45f425cbfe3f41d3fac973fe3238818f = RL_45f425cbfe3f41d3fac973fe3238818f;

});

define("tradershub.model$RL_4645896d20bae069726fdb473c154d2d", ["exports", "@outsystems/runtime-core-js", "tradershub.model", "tradershub.model$RC_2ac88c51f2d9ed908454e6a06ffe188e"], function (exports, OSRuntimeCore, tradershubModel) {
var OS = OSRuntimeCore;
class RL_4645896d20bae069726fdb473c154d2d extends 
OS.DataTypes.GenericRecordList {
static getItemType() {
return tradershubModel.RC_2ac88c51f2d9ed908454e6a06ffe188e;
}

}

tradershubModel.RL_4645896d20bae069726fdb473c154d2d = RL_4645896d20bae069726fdb473c154d2d;

});

define("tradershub.model$RL_47595c6744be14d2bd677fd05324180f", ["exports", "@outsystems/runtime-core-js", "tradershub.model", "tradershub.model$RC_1ba3db8c7175cd095b4f1a36c3a1e53d"], function (exports, OSRuntimeCore, tradershubModel) {
var OS = OSRuntimeCore;
class RL_47595c6744be14d2bd677fd05324180f extends 
OS.DataTypes.GenericRecordList {
static getItemType() {
return tradershubModel.RC_1ba3db8c7175cd095b4f1a36c3a1e53d;
}

}

tradershubModel.RL_47595c6744be14d2bd677fd05324180f = RL_47595c6744be14d2bd677fd05324180f;

});

define("tradershub.model$RC_47772cad80dc4a787d65fd52470ca2cd", ["exports", "@outsystems/runtime-core-js", "RESTAPIWebsocket.model", "tradershub.model", "RESTAPIWebsocket.model$ST_ccbd4ab860fdf3c4690e46bb49937de5Structure", "tradershub.referencesHealth", "tradershub.referencesHealth$RESTAPIWebsocket"], function (exports, OSRuntimeCore, RESTAPIWebsocketModel, tradershubModel) {
var OS = OSRuntimeCore;
{class RC_47772cad80dc4a787d65fd52470ca2cdInner extends 
OS.DataTypes.GenericRecord {
static attributesToDeclare() {
return [
this.attr("Get_setting", "get_settingAttr", "Get_setting", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new RESTAPIWebsocketModel.ST_ccbd4ab860fdf3c4690e46bb49937de5Structure());
}, true, RESTAPIWebsocketModel.ST_ccbd4ab860fdf3c4690e46bb49937de5Structure)
].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
}

static fromStructure(str) {
return new RC_47772cad80dc4a787d65fd52470ca2cd(new RC_47772cad80dc4a787d65fd52470ca2cd.RecordClass({
get_settingAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
}

}

tradershubModel.RC_47772cad80dc4a787d65fd52470ca2cd = RC_47772cad80dc4a787d65fd52470ca2cdInner;

RC_47772cad80dc4a787d65fd52470ca2cdInner._isAnonymousRecord = true;
RC_47772cad80dc4a787d65fd52470ca2cdInner.UniqueId = "47772cad-80dc-4a78-7d65-fd52470ca2cd";
var RC_47772cad80dc4a787d65fd52470ca2cd = RC_47772cad80dc4a787d65fd52470ca2cdInner;
RC_47772cad80dc4a787d65fd52470ca2cd.init();
}
});

define("tradershub.model$RL_478659cf4d50eb426ae425e9399ed35f", ["exports", "@outsystems/runtime-core-js", "OutSystemsUI.model", "tradershub.model", "OutSystemsUI.model$ST_b7d405ca4407e572da091e54d07e3bd1Structure", "tradershub.referencesHealth", "tradershub.referencesHealth$OutSystemsUI"], function (exports, OSRuntimeCore, OutSystemsUIModel, tradershubModel) {
var OS = OSRuntimeCore;
class RL_478659cf4d50eb426ae425e9399ed35f extends 
OS.DataTypes.GenericRecordList {
static getItemType() {
return OutSystemsUIModel.ST_b7d405ca4407e572da091e54d07e3bd1Structure;
}

}

tradershubModel.RL_478659cf4d50eb426ae425e9399ed35f = RL_478659cf4d50eb426ae425e9399ed35f;

});

define("tradershub.model$RC_480320959f84b098e78ffa8ec12a374a", ["exports", "@outsystems/runtime-core-js", "tradershub.model", "tradershub.model$ST_e0a1a95fb0817fa5c2f5eb8ab5528dddStructure"], function (exports, OSRuntimeCore, tradershubModel) {
var OS = OSRuntimeCore;
{class RC_480320959f84b098e78ffa8ec12a374aInner extends 
OS.DataTypes.GenericRecord {
static attributesToDeclare() {
return [
this.attr("Object7", "object7Attr", "Object7", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new tradershubModel.ST_e0a1a95fb0817fa5c2f5eb8ab5528dddStructure());
}, true, tradershubModel.ST_e0a1a95fb0817fa5c2f5eb8ab5528dddStructure)
].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
}

static fromStructure(str) {
return new RC_480320959f84b098e78ffa8ec12a374a(new RC_480320959f84b098e78ffa8ec12a374a.RecordClass({
object7Attr: OS.DataTypes.ImmutableBase.getData(str)
}));
}

}

tradershubModel.RC_480320959f84b098e78ffa8ec12a374a = RC_480320959f84b098e78ffa8ec12a374aInner;

RC_480320959f84b098e78ffa8ec12a374aInner._isAnonymousRecord = true;
RC_480320959f84b098e78ffa8ec12a374aInner.UniqueId = "48032095-9f84-b098-e78f-fa8ec12a374a";
var RC_480320959f84b098e78ffa8ec12a374a = RC_480320959f84b098e78ffa8ec12a374aInner;
RC_480320959f84b098e78ffa8ec12a374a.init();
}
});

define("tradershub.model$RL_4805e15f00dc12c56ca2c04862bba5ec", ["exports", "@outsystems/runtime-core-js", "tradershub.model", "tradershub.model$RC_098c46906c1c0c7e7b39f1210fb64f78"], function (exports, OSRuntimeCore, tradershubModel) {
var OS = OSRuntimeCore;
class RL_4805e15f00dc12c56ca2c04862bba5ec extends 
OS.DataTypes.GenericRecordList {
static getItemType() {
return tradershubModel.RC_098c46906c1c0c7e7b39f1210fb64f78;
}

}

tradershubModel.RL_4805e15f00dc12c56ca2c04862bba5ec = RL_4805e15f00dc12c56ca2c04862bba5ec;

});

define("tradershub.model$RC_d4bf765df28dc44cfc977eebedb13ed3", ["exports", "@outsystems/runtime-core-js", "RESTAPIWebsocket.model", "tradershub.model", "RESTAPIWebsocket.model$ST_ddeabbcab252c99fc5f083425434b2a7Structure", "tradershub.referencesHealth", "tradershub.referencesHealth$RESTAPIWebsocket"], function (exports, OSRuntimeCore, RESTAPIWebsocketModel, tradershubModel) {
var OS = OSRuntimeCore;
{class RC_d4bf765df28dc44cfc977eebedb13ed3Inner extends 
OS.DataTypes.GenericRecord {
static attributesToDeclare() {
return [
this.attr("Changeable_field", "changeable_fieldAttr", "Changeable_field", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new RESTAPIWebsocketModel.ST_ddeabbcab252c99fc5f083425434b2a7Structure());
}, true, RESTAPIWebsocketModel.ST_ddeabbcab252c99fc5f083425434b2a7Structure)
].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
}

static fromStructure(str) {
return new RC_d4bf765df28dc44cfc977eebedb13ed3(new RC_d4bf765df28dc44cfc977eebedb13ed3.RecordClass({
changeable_fieldAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
}

}

tradershubModel.RC_d4bf765df28dc44cfc977eebedb13ed3 = RC_d4bf765df28dc44cfc977eebedb13ed3Inner;

RC_d4bf765df28dc44cfc977eebedb13ed3Inner._isAnonymousRecord = true;
RC_d4bf765df28dc44cfc977eebedb13ed3Inner.UniqueId = "d4bf765d-f28d-c44c-fc97-7eebedb13ed3";
var RC_d4bf765df28dc44cfc977eebedb13ed3 = RC_d4bf765df28dc44cfc977eebedb13ed3Inner;
RC_d4bf765df28dc44cfc977eebedb13ed3.init();
}
});

define("tradershub.model$RL_481ef41ed0fae7f08c6f7bee79db99dc", ["exports", "@outsystems/runtime-core-js", "tradershub.model", "tradershub.model$RC_d4bf765df28dc44cfc977eebedb13ed3"], function (exports, OSRuntimeCore, tradershubModel) {
var OS = OSRuntimeCore;
class RL_481ef41ed0fae7f08c6f7bee79db99dc extends 
OS.DataTypes.GenericRecordList {
static getItemType() {
return tradershubModel.RC_d4bf765df28dc44cfc977eebedb13ed3;
}

}

tradershubModel.RL_481ef41ed0fae7f08c6f7bee79db99dc = RL_481ef41ed0fae7f08c6f7bee79db99dc;

});

define("tradershub.model$RC_4835a3b0a2d4ab28e154f8a8831a00ef", ["exports", "@outsystems/runtime-core-js", "OutSystemsUI.model", "tradershub.model", "OutSystemsUI.model$ST_5c08eaa15b890a2d617cabe547c34f0bStructure", "tradershub.referencesHealth", "tradershub.referencesHealth$OutSystemsUI"], function (exports, OSRuntimeCore, OutSystemsUIModel, tradershubModel) {
var OS = OSRuntimeCore;
{class RC_4835a3b0a2d4ab28e154f8a8831a00efInner extends 
OS.DataTypes.GenericRecord {
static attributesToDeclare() {
return [
this.attr("MonthYear", "monthYearAttr", "MonthYear", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new OutSystemsUIModel.ST_5c08eaa15b890a2d617cabe547c34f0bStructure());
}, true, OutSystemsUIModel.ST_5c08eaa15b890a2d617cabe547c34f0bStructure)
].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
}

static fromStructure(str) {
return new RC_4835a3b0a2d4ab28e154f8a8831a00ef(new RC_4835a3b0a2d4ab28e154f8a8831a00ef.RecordClass({
monthYearAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
}

}

tradershubModel.RC_4835a3b0a2d4ab28e154f8a8831a00ef = RC_4835a3b0a2d4ab28e154f8a8831a00efInner;

RC_4835a3b0a2d4ab28e154f8a8831a00efInner._isAnonymousRecord = true;
RC_4835a3b0a2d4ab28e154f8a8831a00efInner.UniqueId = "4835a3b0-a2d4-ab28-e154-f8a8831a00ef";
var RC_4835a3b0a2d4ab28e154f8a8831a00ef = RC_4835a3b0a2d4ab28e154f8a8831a00efInner;
RC_4835a3b0a2d4ab28e154f8a8831a00ef.init();
}
});

define("tradershub.model$RC_48d7c166849f4c26288a543a51543b8d", ["exports", "@outsystems/runtime-core-js", "OutSystemsMaps.model", "tradershub.model", "OutSystemsMaps.model$ST_49045fb6574dc7f29ee1f97116ecb1f6Structure", "tradershub.referencesHealth", "tradershub.referencesHealth$OutSystemsMaps"], function (exports, OSRuntimeCore, OutSystemsMapsModel, tradershubModel) {
var OS = OSRuntimeCore;
{class RC_48d7c166849f4c26288a543a51543b8dInner extends 
OS.DataTypes.GenericRecord {
static attributesToDeclare() {
return [
this.attr("OptionalPolygonConfigs", "optionalPolygonConfigsAttr", "OptionalPolygonConfigs", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new OutSystemsMapsModel.ST_49045fb6574dc7f29ee1f97116ecb1f6Structure());
}, true, OutSystemsMapsModel.ST_49045fb6574dc7f29ee1f97116ecb1f6Structure)
].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
}

static fromStructure(str) {
return new RC_48d7c166849f4c26288a543a51543b8d(new RC_48d7c166849f4c26288a543a51543b8d.RecordClass({
optionalPolygonConfigsAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
}

}

tradershubModel.RC_48d7c166849f4c26288a543a51543b8d = RC_48d7c166849f4c26288a543a51543b8dInner;

RC_48d7c166849f4c26288a543a51543b8dInner._isAnonymousRecord = true;
RC_48d7c166849f4c26288a543a51543b8dInner.UniqueId = "48d7c166-849f-4c26-288a-543a51543b8d";
var RC_48d7c166849f4c26288a543a51543b8d = RC_48d7c166849f4c26288a543a51543b8dInner;
RC_48d7c166849f4c26288a543a51543b8d.init();
}
});

define("tradershub.model$ST_60e7d21e67b5c6547131a4ff8ca45d7cStructure", ["exports", "@outsystems/runtime-core-js", "tradershub.model", "tradershub.model$ST_fc4d5763569aba995364c403cc3ed840Structure"], function (exports, OSRuntimeCore, tradershubModel) {
var OS = OSRuntimeCore;
{class ST_60e7d21e67b5c6547131a4ff8ca45d7cStructureInner extends 
OS.DataTypes.GenericRecord {
static attributesToDeclare() {
return [
this.attr("Code", "codeAttr", "code", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Details", "detailsAttr", "details", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new tradershubModel.ST_fc4d5763569aba995364c403cc3ed840Structure());
}, true, tradershubModel.ST_fc4d5763569aba995364c403cc3ed840Structure), 
this.attr("Message", "messageAttr", "message", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true)
].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
}

}

tradershubModel.ST_60e7d21e67b5c6547131a4ff8ca45d7cStructure = ST_60e7d21e67b5c6547131a4ff8ca45d7cStructureInner;

var ST_60e7d21e67b5c6547131a4ff8ca45d7cStructure = ST_60e7d21e67b5c6547131a4ff8ca45d7cStructureInner;
ST_60e7d21e67b5c6547131a4ff8ca45d7cStructure.init();
}
});

define("tradershub.model$RL_4989742c775622b8d95ff65fe3a3d5fe", ["exports", "@outsystems/runtime-core-js", "tradershub.model", "tradershub.model$ST_60e7d21e67b5c6547131a4ff8ca45d7cStructure"], function (exports, OSRuntimeCore, tradershubModel) {
var OS = OSRuntimeCore;
class RL_4989742c775622b8d95ff65fe3a3d5fe extends 
OS.DataTypes.GenericRecordList {
static getItemType() {
return tradershubModel.ST_60e7d21e67b5c6547131a4ff8ca45d7cStructure;
}

}

tradershubModel.RL_4989742c775622b8d95ff65fe3a3d5fe = RL_4989742c775622b8d95ff65fe3a3d5fe;

});

define("tradershub.model$RC_5e1b44d038654ac19cd218a2a7d6a6b8", ["exports", "@outsystems/runtime-core-js", "RESTAPIWebsocket.model", "tradershub.model", "RESTAPIWebsocket.model$ST_30cf47a274820f1ac96cf412803888fdStructure", "tradershub.referencesHealth", "tradershub.referencesHealth$RESTAPIWebsocket"], function (exports, OSRuntimeCore, RESTAPIWebsocketModel, tradershubModel) {
var OS = OSRuntimeCore;
{class RC_5e1b44d038654ac19cd218a2a7d6a6b8Inner extends 
OS.DataTypes.GenericRecord {
static attributesToDeclare() {
return [
this.attr("Idv", "idvAttr", "Idv4", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new RESTAPIWebsocketModel.ST_30cf47a274820f1ac96cf412803888fdStructure());
}, true, RESTAPIWebsocketModel.ST_30cf47a274820f1ac96cf412803888fdStructure)
].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
}

static fromStructure(str) {
return new RC_5e1b44d038654ac19cd218a2a7d6a6b8(new RC_5e1b44d038654ac19cd218a2a7d6a6b8.RecordClass({
idvAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
}

}

tradershubModel.RC_5e1b44d038654ac19cd218a2a7d6a6b8 = RC_5e1b44d038654ac19cd218a2a7d6a6b8Inner;

RC_5e1b44d038654ac19cd218a2a7d6a6b8Inner._isAnonymousRecord = true;
RC_5e1b44d038654ac19cd218a2a7d6a6b8Inner.UniqueId = "5e1b44d0-3865-4ac1-9cd2-18a2a7d6a6b8";
var RC_5e1b44d038654ac19cd218a2a7d6a6b8 = RC_5e1b44d038654ac19cd218a2a7d6a6b8Inner;
RC_5e1b44d038654ac19cd218a2a7d6a6b8.init();
}
});

define("tradershub.model$RL_49a4d531de393d17563dea4ec0d88883", ["exports", "@outsystems/runtime-core-js", "tradershub.model", "tradershub.model$RC_5e1b44d038654ac19cd218a2a7d6a6b8"], function (exports, OSRuntimeCore, tradershubModel) {
var OS = OSRuntimeCore;
class RL_49a4d531de393d17563dea4ec0d88883 extends 
OS.DataTypes.GenericRecordList {
static getItemType() {
return tradershubModel.RC_5e1b44d038654ac19cd218a2a7d6a6b8;
}

}

tradershubModel.RL_49a4d531de393d17563dea4ec0d88883 = RL_49a4d531de393d17563dea4ec0d88883;

});

define("tradershub.model$RC_4a76c214f34feb841d0c1a2d8cdbec01", ["exports", "@outsystems/runtime-core-js", "RESTAPIWebsocket.model", "tradershub.model", "RESTAPIWebsocket.model$ST_35e76a2e1583feb611523ac6c760c8a9Structure", "tradershub.referencesHealth", "tradershub.referencesHealth$RESTAPIWebsocket"], function (exports, OSRuntimeCore, RESTAPIWebsocketModel, tradershubModel) {
var OS = OSRuntimeCore;
{class RC_4a76c214f34feb841d0c1a2d8cdbec01Inner extends 
OS.DataTypes.GenericRecord {
static attributesToDeclare() {
return [
this.attr("Financial_assessment", "financial_assessmentAttr", "Financial_assessment", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new RESTAPIWebsocketModel.ST_35e76a2e1583feb611523ac6c760c8a9Structure());
}, true, RESTAPIWebsocketModel.ST_35e76a2e1583feb611523ac6c760c8a9Structure)
].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
}

static fromStructure(str) {
return new RC_4a76c214f34feb841d0c1a2d8cdbec01(new RC_4a76c214f34feb841d0c1a2d8cdbec01.RecordClass({
financial_assessmentAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
}

}

tradershubModel.RC_4a76c214f34feb841d0c1a2d8cdbec01 = RC_4a76c214f34feb841d0c1a2d8cdbec01Inner;

RC_4a76c214f34feb841d0c1a2d8cdbec01Inner._isAnonymousRecord = true;
RC_4a76c214f34feb841d0c1a2d8cdbec01Inner.UniqueId = "4a76c214-f34f-eb84-1d0c-1a2d8cdbec01";
var RC_4a76c214f34feb841d0c1a2d8cdbec01 = RC_4a76c214f34feb841d0c1a2d8cdbec01Inner;
RC_4a76c214f34feb841d0c1a2d8cdbec01.init();
}
});

define("tradershub.model$RL_4aa1509142da7c0b9e4be414c8f7c6f5", ["exports", "@outsystems/runtime-core-js", "OutSystemsUI.model", "tradershub.model", "OutSystemsUI.model$EN_f43f179caddf7f7b68b18272d67285d6EntityRecord", "tradershub.referencesHealth", "tradershub.referencesHealth$OutSystemsUI"], function (exports, OSRuntimeCore, OutSystemsUIModel, tradershubModel) {
var OS = OSRuntimeCore;
class RL_4aa1509142da7c0b9e4be414c8f7c6f5 extends 
OS.DataTypes.GenericRecordList {
static getItemType() {
return OutSystemsUIModel.EN_f43f179caddf7f7b68b18272d67285d6EntityRecord;
}

}

tradershubModel.RL_4aa1509142da7c0b9e4be414c8f7c6f5 = RL_4aa1509142da7c0b9e4be414c8f7c6f5;

});

define("tradershub.model$RL_4ac7560fd222f165e8fbfd92d25d984e", ["exports", "@outsystems/runtime-core-js", "OutSystemsUI.model", "tradershub.model", "OutSystemsUI.model$EN_b4e36c9529d7446e086560192df48d7cEntityRecord", "tradershub.referencesHealth", "tradershub.referencesHealth$OutSystemsUI"], function (exports, OSRuntimeCore, OutSystemsUIModel, tradershubModel) {
var OS = OSRuntimeCore;
class RL_4ac7560fd222f165e8fbfd92d25d984e extends 
OS.DataTypes.GenericRecordList {
static getItemType() {
return OutSystemsUIModel.EN_b4e36c9529d7446e086560192df48d7cEntityRecord;
}

}

tradershubModel.RL_4ac7560fd222f165e8fbfd92d25d984e = RL_4ac7560fd222f165e8fbfd92d25d984e;

});

define("tradershub.model$RC_4bcf394b25f9baf70005faeb874ddf37", ["exports", "@outsystems/runtime-core-js", "tradershub.model", "tradershub.model$ST_2b68b61da9b8f6db8463a60cc48350faStructure"], function (exports, OSRuntimeCore, tradershubModel) {
var OS = OSRuntimeCore;
{class RC_4bcf394b25f9baf70005faeb874ddf37Inner extends 
OS.DataTypes.GenericRecord {
static attributesToDeclare() {
return [
this.attr("AuthorizeResponse", "authorizeResponseAttr", "AuthorizeResponse", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new tradershubModel.ST_2b68b61da9b8f6db8463a60cc48350faStructure());
}, true, tradershubModel.ST_2b68b61da9b8f6db8463a60cc48350faStructure)
].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
}

static fromStructure(str) {
return new RC_4bcf394b25f9baf70005faeb874ddf37(new RC_4bcf394b25f9baf70005faeb874ddf37.RecordClass({
authorizeResponseAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
}

}

tradershubModel.RC_4bcf394b25f9baf70005faeb874ddf37 = RC_4bcf394b25f9baf70005faeb874ddf37Inner;

RC_4bcf394b25f9baf70005faeb874ddf37Inner._isAnonymousRecord = true;
RC_4bcf394b25f9baf70005faeb874ddf37Inner.UniqueId = "4bcf394b-25f9-baf7-0005-faeb874ddf37";
var RC_4bcf394b25f9baf70005faeb874ddf37 = RC_4bcf394b25f9baf70005faeb874ddf37Inner;
RC_4bcf394b25f9baf70005faeb874ddf37.init();
}
});

define("tradershub.model$EN_e3d432d12bf5f1522c0c5471a90201caEntityRecord", ["exports", "@outsystems/runtime-core-js", "tradershub.model"], function (exports, OSRuntimeCore, tradershubModel) {
var OS = OSRuntimeCore;
{class EN_e3d432d12bf5f1522c0c5471a90201caEntityRecordInner extends 
OS.DataTypes.GenericRecord {
static attributesToDeclare() {
return [
this.attr("Id", "idAttr", "Id", true, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true), 
this.attr("Label", "labelAttr", "Label", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Order", "orderAttr", "Order", true, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true), 
this.attr("Is_Active", "is_ActiveAttr", "Is_Active", true, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, true)
].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
}

}

tradershubModel.EN_e3d432d12bf5f1522c0c5471a90201caEntityRecord = EN_e3d432d12bf5f1522c0c5471a90201caEntityRecordInner;

var EN_e3d432d12bf5f1522c0c5471a90201caEntityRecord = EN_e3d432d12bf5f1522c0c5471a90201caEntityRecordInner;
EN_e3d432d12bf5f1522c0c5471a90201caEntityRecord.init();
}
});

define("tradershub.model$RL_4c2681156ae930a86f200f636cda11aa", ["exports", "@outsystems/runtime-core-js", "tradershub.model", "tradershub.model$EN_e3d432d12bf5f1522c0c5471a90201caEntityRecord"], function (exports, OSRuntimeCore, tradershubModel) {
var OS = OSRuntimeCore;
class RL_4c2681156ae930a86f200f636cda11aa extends 
OS.DataTypes.GenericRecordList {
static getItemType() {
return tradershubModel.EN_e3d432d12bf5f1522c0c5471a90201caEntityRecord;
}

}

tradershubModel.RL_4c2681156ae930a86f200f636cda11aa = RL_4c2681156ae930a86f200f636cda11aa;

});

define("tradershub.model$RL_4cc8ccb8d3cf71eb7bcb10bdbab7ddf8", ["exports", "@outsystems/runtime-core-js", "RESTAPIWebsocket.model", "tradershub.model", "RESTAPIWebsocket.model$ST_6e1c5ab117f6599aeb50c68a9a2fa65aStructure", "tradershub.referencesHealth", "tradershub.referencesHealth$RESTAPIWebsocket"], function (exports, OSRuntimeCore, RESTAPIWebsocketModel, tradershubModel) {
var OS = OSRuntimeCore;
class RL_4cc8ccb8d3cf71eb7bcb10bdbab7ddf8 extends 
OS.DataTypes.GenericRecordList {
static getItemType() {
return RESTAPIWebsocketModel.ST_6e1c5ab117f6599aeb50c68a9a2fa65aStructure;
}

}

tradershubModel.RL_4cc8ccb8d3cf71eb7bcb10bdbab7ddf8 = RL_4cc8ccb8d3cf71eb7bcb10bdbab7ddf8;

});

define("tradershub.model$RL_4d00fb3ac308ea1d2891835aef38e4fd", ["exports", "@outsystems/runtime-core-js", "OutSystemsMaps.model", "tradershub.model", "OutSystemsMaps.model$EN_d5303c5dfa3a0e0e964776dce02c36f0EntityRecord", "tradershub.referencesHealth", "tradershub.referencesHealth$OutSystemsMaps"], function (exports, OSRuntimeCore, OutSystemsMapsModel, tradershubModel) {
var OS = OSRuntimeCore;
class RL_4d00fb3ac308ea1d2891835aef38e4fd extends 
OS.DataTypes.GenericRecordList {
static getItemType() {
return OutSystemsMapsModel.EN_d5303c5dfa3a0e0e964776dce02c36f0EntityRecord;
}

}

tradershubModel.RL_4d00fb3ac308ea1d2891835aef38e4fd = RL_4d00fb3ac308ea1d2891835aef38e4fd;

});

define("tradershub.model$RL_4d556c695c13b2c308f888cfb68cea19", ["exports", "@outsystems/runtime-core-js", "OutSystemsUI.model", "tradershub.model", "OutSystemsUI.model$ST_ba5b17ae5b3fdd9318ea2b4cf18c7d4dStructure", "tradershub.referencesHealth", "tradershub.referencesHealth$OutSystemsUI"], function (exports, OSRuntimeCore, OutSystemsUIModel, tradershubModel) {
var OS = OSRuntimeCore;
class RL_4d556c695c13b2c308f888cfb68cea19 extends 
OS.DataTypes.GenericRecordList {
static getItemType() {
return OutSystemsUIModel.ST_ba5b17ae5b3fdd9318ea2b4cf18c7d4dStructure;
}

}

tradershubModel.RL_4d556c695c13b2c308f888cfb68cea19 = RL_4d556c695c13b2c308f888cfb68cea19;

});

define("tradershub.model$RC_4d77cfdd567b208680377834fc8205a2", ["exports", "@outsystems/runtime-core-js", "System_.model", "tradershub.model", "System_.model$PasswordComplexityPolicyRec", "tradershub.referencesHealth", "tradershub.referencesHealth$System_"], function (exports, OSRuntimeCore, System_Model, tradershubModel) {
var OS = OSRuntimeCore;
{class RC_4d77cfdd567b208680377834fc8205a2Inner extends 
OS.DataTypes.GenericRecord {
static attributesToDeclare() {
return [
this.attr("PasswordComplexityPolicy", "passwordComplexityPolicyAttr", "PasswordComplexityPolicy", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new OS.SystemStructures.PasswordComplexityPolicyRec());
}, true, OS.SystemStructures.PasswordComplexityPolicyRec)
].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
}

static fromStructure(str) {
return new RC_4d77cfdd567b208680377834fc8205a2(new RC_4d77cfdd567b208680377834fc8205a2.RecordClass({
passwordComplexityPolicyAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
}

}

tradershubModel.RC_4d77cfdd567b208680377834fc8205a2 = RC_4d77cfdd567b208680377834fc8205a2Inner;

RC_4d77cfdd567b208680377834fc8205a2Inner._isAnonymousRecord = true;
RC_4d77cfdd567b208680377834fc8205a2Inner.UniqueId = "4d77cfdd-567b-2086-8037-7834fc8205a2";
var RC_4d77cfdd567b208680377834fc8205a2 = RC_4d77cfdd567b208680377834fc8205a2Inner;
RC_4d77cfdd567b208680377834fc8205a2.init();
}
});

define("tradershub.model$RL_4e4931d865c8789e9e6ef1d8540ae228", ["exports", "@outsystems/runtime-core-js", "System_.model", "tradershub.model", "System_.model$StartResetPasswordResultRec", "tradershub.referencesHealth", "tradershub.referencesHealth$System_"], function (exports, OSRuntimeCore, System_Model, tradershubModel) {
var OS = OSRuntimeCore;
class RL_4e4931d865c8789e9e6ef1d8540ae228 extends 
OS.DataTypes.GenericRecordList {
static getItemType() {
return OS.SystemStructures.StartResetPasswordResultRec;
}

}

tradershubModel.RL_4e4931d865c8789e9e6ef1d8540ae228 = RL_4e4931d865c8789e9e6ef1d8540ae228;

});

define("tradershub.model$RL_4e7296c1aceb3bd3dd9793888e254d07", ["exports", "@outsystems/runtime-core-js", "OutSystemsUI.model", "tradershub.model", "OutSystemsUI.model$EN_1b42e9a925bffd384f525d6adac8fe8eEntityRecord", "tradershub.referencesHealth", "tradershub.referencesHealth$OutSystemsUI"], function (exports, OSRuntimeCore, OutSystemsUIModel, tradershubModel) {
var OS = OSRuntimeCore;
class RL_4e7296c1aceb3bd3dd9793888e254d07 extends 
OS.DataTypes.GenericRecordList {
static getItemType() {
return OutSystemsUIModel.EN_1b42e9a925bffd384f525d6adac8fe8eEntityRecord;
}

}

tradershubModel.RL_4e7296c1aceb3bd3dd9793888e254d07 = RL_4e7296c1aceb3bd3dd9793888e254d07;

});

define("tradershub.model$RL_4f6dde27a1d6ecd82e9d6a4d041d32f3", ["exports", "@outsystems/runtime-core-js", "tradershub.model", "tradershub.model$RC_261685da2c799bcc3b4873485e008694"], function (exports, OSRuntimeCore, tradershubModel) {
var OS = OSRuntimeCore;
class RL_4f6dde27a1d6ecd82e9d6a4d041d32f3 extends 
OS.DataTypes.GenericRecordList {
static getItemType() {
return tradershubModel.RC_261685da2c799bcc3b4873485e008694;
}

}

tradershubModel.RL_4f6dde27a1d6ecd82e9d6a4d041d32f3 = RL_4f6dde27a1d6ecd82e9d6a4d041d32f3;

});

define("tradershub.model$RL_4f99e622169e93dd43493d76013d1b5f", ["exports", "@outsystems/runtime-core-js", "tradershub.model", "tradershub.model$RC_2624ed456a552c74637631b7754933a4"], function (exports, OSRuntimeCore, tradershubModel) {
var OS = OSRuntimeCore;
class RL_4f99e622169e93dd43493d76013d1b5f extends 
OS.DataTypes.GenericRecordList {
static getItemType() {
return tradershubModel.RC_2624ed456a552c74637631b7754933a4;
}

}

tradershubModel.RL_4f99e622169e93dd43493d76013d1b5f = RL_4f99e622169e93dd43493d76013d1b5f;

});

define("tradershub.model$RL_4f9f1230897f0a3e8b129024e1de623d", ["exports", "@outsystems/runtime-core-js", "RESTAPIWebsocket.model", "tradershub.model", "RESTAPIWebsocket.model$ST_6669f981cb8653c55787de44bdd42a18Structure", "tradershub.referencesHealth", "tradershub.referencesHealth$RESTAPIWebsocket"], function (exports, OSRuntimeCore, RESTAPIWebsocketModel, tradershubModel) {
var OS = OSRuntimeCore;
class RL_4f9f1230897f0a3e8b129024e1de623d extends 
OS.DataTypes.GenericRecordList {
static getItemType() {
return RESTAPIWebsocketModel.ST_6669f981cb8653c55787de44bdd42a18Structure;
}

}

tradershubModel.RL_4f9f1230897f0a3e8b129024e1de623d = RL_4f9f1230897f0a3e8b129024e1de623d;

});

define("tradershub.model$RC_4fc16da695108ad1b034b7256ffa868d", ["exports", "@outsystems/runtime-core-js", "OutSystemsUI.model", "tradershub.model", "OutSystemsUI.model$ST_7167810326c75456a7ce120ed2dbd76bStructure", "tradershub.referencesHealth", "tradershub.referencesHealth$OutSystemsUI"], function (exports, OSRuntimeCore, OutSystemsUIModel, tradershubModel) {
var OS = OSRuntimeCore;
{class RC_4fc16da695108ad1b034b7256ffa868dInner extends 
OS.DataTypes.GenericRecord {
static attributesToDeclare() {
return [
this.attr("RangeSliderOptionalConfigs", "rangeSliderOptionalConfigsAttr", "RangeSliderOptionalConfigs", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new OutSystemsUIModel.ST_7167810326c75456a7ce120ed2dbd76bStructure());
}, true, OutSystemsUIModel.ST_7167810326c75456a7ce120ed2dbd76bStructure)
].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
}

static fromStructure(str) {
return new RC_4fc16da695108ad1b034b7256ffa868d(new RC_4fc16da695108ad1b034b7256ffa868d.RecordClass({
rangeSliderOptionalConfigsAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
}

}

tradershubModel.RC_4fc16da695108ad1b034b7256ffa868d = RC_4fc16da695108ad1b034b7256ffa868dInner;

RC_4fc16da695108ad1b034b7256ffa868dInner._isAnonymousRecord = true;
RC_4fc16da695108ad1b034b7256ffa868dInner.UniqueId = "4fc16da6-9510-8ad1-b034-b7256ffa868d";
var RC_4fc16da695108ad1b034b7256ffa868d = RC_4fc16da695108ad1b034b7256ffa868dInner;
RC_4fc16da695108ad1b034b7256ffa868d.init();
}
});

define("tradershub.model$RL_4feb2fb00f9cd7e5ee8abc58513e6f4d", ["exports", "@outsystems/runtime-core-js", "tradershub.model", "tradershub.model$RC_373fec8a2329a8b1ecd55cf717893131"], function (exports, OSRuntimeCore, tradershubModel) {
var OS = OSRuntimeCore;
class RL_4feb2fb00f9cd7e5ee8abc58513e6f4d extends 
OS.DataTypes.GenericRecordList {
static getItemType() {
return tradershubModel.RC_373fec8a2329a8b1ecd55cf717893131;
}

}

tradershubModel.RL_4feb2fb00f9cd7e5ee8abc58513e6f4d = RL_4feb2fb00f9cd7e5ee8abc58513e6f4d;

});

define("tradershub.model$RL_5019766850d43ca0bf9f4b16188cd294", ["exports", "@outsystems/runtime-core-js", "tradershub.model", "tradershub.model$ST_6ef949889354a0320b3261736ae5d94cStructure"], function (exports, OSRuntimeCore, tradershubModel) {
var OS = OSRuntimeCore;
class RL_5019766850d43ca0bf9f4b16188cd294 extends 
OS.DataTypes.GenericRecordList {
static getItemType() {
return tradershubModel.ST_6ef949889354a0320b3261736ae5d94cStructure;
}

}

tradershubModel.RL_5019766850d43ca0bf9f4b16188cd294 = RL_5019766850d43ca0bf9f4b16188cd294;

});

define("tradershub.model$RL_508855d25108765122be317d42e36c82", ["exports", "@outsystems/runtime-core-js", "RESTAPIWebsocket.model", "tradershub.model", "RESTAPIWebsocket.model$ST_349094d98d9594831ba9e5194411246fStructure", "tradershub.referencesHealth", "tradershub.referencesHealth$RESTAPIWebsocket"], function (exports, OSRuntimeCore, RESTAPIWebsocketModel, tradershubModel) {
var OS = OSRuntimeCore;
class RL_508855d25108765122be317d42e36c82 extends 
OS.DataTypes.GenericRecordList {
static getItemType() {
return RESTAPIWebsocketModel.ST_349094d98d9594831ba9e5194411246fStructure;
}

}

tradershubModel.RL_508855d25108765122be317d42e36c82 = RL_508855d25108765122be317d42e36c82;

});

define("tradershub.model$EN_50a3b192c3184aa6afae35c5fb24155aEntityRecord", ["exports", "@outsystems/runtime-core-js", "tradershub.model"], function (exports, OSRuntimeCore, tradershubModel) {
var OS = OSRuntimeCore;
{class EN_50a3b192c3184aa6afae35c5fb24155aEntityRecordInner extends 
OS.DataTypes.GenericRecord {
static attributesToDeclare() {
return [
this.attr("Id", "idAttr", "Id", true, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true), 
this.attr("Label", "labelAttr", "Label", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Order", "orderAttr", "Order", true, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true), 
this.attr("Is_Active", "is_ActiveAttr", "Is_Active", true, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, true)
].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
}

}

tradershubModel.EN_50a3b192c3184aa6afae35c5fb24155aEntityRecord = EN_50a3b192c3184aa6afae35c5fb24155aEntityRecordInner;

var EN_50a3b192c3184aa6afae35c5fb24155aEntityRecord = EN_50a3b192c3184aa6afae35c5fb24155aEntityRecordInner;
EN_50a3b192c3184aa6afae35c5fb24155aEntityRecord.init();
}
});

define("tradershub.model$RL_50d3e0774fce43a1ce1cf3a9009855f8", ["exports", "@outsystems/runtime-core-js", "OutSystemsUI.model", "tradershub.model", "OutSystemsUI.model$ST_7d99fd1de65649f174aff6854b052539Structure", "tradershub.referencesHealth", "tradershub.referencesHealth$OutSystemsUI"], function (exports, OSRuntimeCore, OutSystemsUIModel, tradershubModel) {
var OS = OSRuntimeCore;
class RL_50d3e0774fce43a1ce1cf3a9009855f8 extends 
OS.DataTypes.GenericRecordList {
static getItemType() {
return OutSystemsUIModel.ST_7d99fd1de65649f174aff6854b052539Structure;
}

}

tradershubModel.RL_50d3e0774fce43a1ce1cf3a9009855f8 = RL_50d3e0774fce43a1ce1cf3a9009855f8;

});

define("tradershub.model$EN_5167e61acdec814a6025c00005dbc3d8EntityRecord", ["exports", "@outsystems/runtime-core-js", "tradershub.model"], function (exports, OSRuntimeCore, tradershubModel) {
var OS = OSRuntimeCore;
{class EN_5167e61acdec814a6025c00005dbc3d8EntityRecordInner extends 
OS.DataTypes.GenericRecord {
static attributesToDeclare() {
return [
this.attr("Id", "idAttr", "Id", true, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true), 
this.attr("Label", "labelAttr", "Label", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Order", "orderAttr", "Order", true, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true), 
this.attr("Is_Active", "is_ActiveAttr", "Is_Active", true, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, true)
].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
}

}

tradershubModel.EN_5167e61acdec814a6025c00005dbc3d8EntityRecord = EN_5167e61acdec814a6025c00005dbc3d8EntityRecordInner;

var EN_5167e61acdec814a6025c00005dbc3d8EntityRecord = EN_5167e61acdec814a6025c00005dbc3d8EntityRecordInner;
EN_5167e61acdec814a6025c00005dbc3d8EntityRecord.init();
}
});

define("tradershub.model$RC_51b1c15949308af5f9b2dba7043d5ae6", ["exports", "@outsystems/runtime-core-js", "OutSystemsUI.model", "tradershub.model", "OutSystemsUI.model$EN_b4e36c9529d7446e086560192df48d7cEntityRecord", "tradershub.referencesHealth", "tradershub.referencesHealth$OutSystemsUI"], function (exports, OSRuntimeCore, OutSystemsUIModel, tradershubModel) {
var OS = OSRuntimeCore;
{class RC_51b1c15949308af5f9b2dba7043d5ae6Inner extends 
OS.DataTypes.GenericRecord {
static attributesToDeclare() {
return [
this.attr("DatePickerTimeFormat", "datePickerTimeFormatAttr", "DatePickerTimeFormat", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new OutSystemsUIModel.EN_b4e36c9529d7446e086560192df48d7cEntityRecord());
}, true, OutSystemsUIModel.EN_b4e36c9529d7446e086560192df48d7cEntityRecord)
].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
}

static fromStructure(str) {
return new RC_51b1c15949308af5f9b2dba7043d5ae6(new RC_51b1c15949308af5f9b2dba7043d5ae6.RecordClass({
datePickerTimeFormatAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
}

}

tradershubModel.RC_51b1c15949308af5f9b2dba7043d5ae6 = RC_51b1c15949308af5f9b2dba7043d5ae6Inner;

RC_51b1c15949308af5f9b2dba7043d5ae6Inner._isAnonymousRecord = true;
RC_51b1c15949308af5f9b2dba7043d5ae6Inner.UniqueId = "51b1c159-4930-8af5-f9b2-dba7043d5ae6";
var RC_51b1c15949308af5f9b2dba7043d5ae6 = RC_51b1c15949308af5f9b2dba7043d5ae6Inner;
RC_51b1c15949308af5f9b2dba7043d5ae6.init();
}
});

define("tradershub.model$RC_51c73f641f2d05540b68c15e7660196f", ["exports", "@outsystems/runtime-core-js", "RESTAPIWebsocket.model", "tradershub.model", "RESTAPIWebsocket.model$ST_8812c3cbc0a0d322acb5354526a670b4Structure", "tradershub.referencesHealth", "tradershub.referencesHealth$RESTAPIWebsocket"], function (exports, OSRuntimeCore, RESTAPIWebsocketModel, tradershubModel) {
var OS = OSRuntimeCore;
{class RC_51c73f641f2d05540b68c15e7660196fInner extends 
OS.DataTypes.GenericRecord {
static attributesToDeclare() {
return [
this.attr("Identity", "identityAttr", "Identity3", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new RESTAPIWebsocketModel.ST_8812c3cbc0a0d322acb5354526a670b4Structure());
}, true, RESTAPIWebsocketModel.ST_8812c3cbc0a0d322acb5354526a670b4Structure)
].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
}

static fromStructure(str) {
return new RC_51c73f641f2d05540b68c15e7660196f(new RC_51c73f641f2d05540b68c15e7660196f.RecordClass({
identityAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
}

}

tradershubModel.RC_51c73f641f2d05540b68c15e7660196f = RC_51c73f641f2d05540b68c15e7660196fInner;

RC_51c73f641f2d05540b68c15e7660196fInner._isAnonymousRecord = true;
RC_51c73f641f2d05540b68c15e7660196fInner.UniqueId = "51c73f64-1f2d-0554-0b68-c15e7660196f";
var RC_51c73f641f2d05540b68c15e7660196f = RC_51c73f641f2d05540b68c15e7660196fInner;
RC_51c73f641f2d05540b68c15e7660196f.init();
}
});

define("tradershub.model$RL_f8f18d18d5de26fb445609e3f88624db", ["exports", "@outsystems/runtime-core-js", "tradershub.model", "tradershub.model$ST_27f8ec64ca98713144ae178da75c54abStructure"], function (exports, OSRuntimeCore, tradershubModel) {
var OS = OSRuntimeCore;
class RL_f8f18d18d5de26fb445609e3f88624db extends 
OS.DataTypes.GenericRecordList {
static getItemType() {
return tradershubModel.ST_27f8ec64ca98713144ae178da75c54abStructure;
}

}

tradershubModel.RL_f8f18d18d5de26fb445609e3f88624db = RL_f8f18d18d5de26fb445609e3f88624db;

});

define("tradershub.model$ST_69d197f741008559fd9136ea6f31ca4cStructure", ["exports", "@outsystems/runtime-core-js", "tradershub.model", "tradershub.model$ST_cd49224be610b7804a874a30604a9ae2Structure", "tradershub.model$ST_27f8ec64ca98713144ae178da75c54abStructure", "tradershub.model$RL_f8f18d18d5de26fb445609e3f88624db"], function (exports, OSRuntimeCore, tradershubModel) {
var OS = OSRuntimeCore;
{class ST_69d197f741008559fd9136ea6f31ca4cStructureInner extends 
OS.DataTypes.GenericRecord {
static attributesToDeclare() {
return [
this.attr("Echo_req", "echo_reqAttr", "echo_req", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new tradershubModel.ST_cd49224be610b7804a874a30604a9ae2Structure());
}, true, tradershubModel.ST_cd49224be610b7804a874a30604a9ae2Structure), 
this.attr("Msg_type", "msg_typeAttr", "msg_type", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Req_id", "req_idAttr", "req_id", false, false, OS.DataTypes.DataTypes.LongInteger, function () {
return OS.DataTypes.LongInteger.defaultValue;
}, true), 
this.attr("States_list", "states_listAttr", "states_list", false, false, OS.DataTypes.DataTypes.RecordList, function () {
return OS.DataTypes.ImmutableBase.getData(new tradershubModel.RL_f8f18d18d5de26fb445609e3f88624db());
}, true, tradershubModel.RL_f8f18d18d5de26fb445609e3f88624db)
].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
}

}

tradershubModel.ST_69d197f741008559fd9136ea6f31ca4cStructure = ST_69d197f741008559fd9136ea6f31ca4cStructureInner;

var ST_69d197f741008559fd9136ea6f31ca4cStructure = ST_69d197f741008559fd9136ea6f31ca4cStructureInner;
ST_69d197f741008559fd9136ea6f31ca4cStructure.init();
}
});

define("tradershub.model$RC_5214bc4138c7449e8ae1a2e275e6e3fd", ["exports", "@outsystems/runtime-core-js", "tradershub.model", "tradershub.model$ST_69d197f741008559fd9136ea6f31ca4cStructure"], function (exports, OSRuntimeCore, tradershubModel) {
var OS = OSRuntimeCore;
{class RC_5214bc4138c7449e8ae1a2e275e6e3fdInner extends 
OS.DataTypes.GenericRecord {
static attributesToDeclare() {
return [
this.attr("StatesListResponse", "statesListResponseAttr", "StatesListResponse", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new tradershubModel.ST_69d197f741008559fd9136ea6f31ca4cStructure());
}, true, tradershubModel.ST_69d197f741008559fd9136ea6f31ca4cStructure)
].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
}

static fromStructure(str) {
return new RC_5214bc4138c7449e8ae1a2e275e6e3fd(new RC_5214bc4138c7449e8ae1a2e275e6e3fd.RecordClass({
statesListResponseAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
}

}

tradershubModel.RC_5214bc4138c7449e8ae1a2e275e6e3fd = RC_5214bc4138c7449e8ae1a2e275e6e3fdInner;

RC_5214bc4138c7449e8ae1a2e275e6e3fdInner._isAnonymousRecord = true;
RC_5214bc4138c7449e8ae1a2e275e6e3fdInner.UniqueId = "5214bc41-38c7-449e-8ae1-a2e275e6e3fd";
var RC_5214bc4138c7449e8ae1a2e275e6e3fd = RC_5214bc4138c7449e8ae1a2e275e6e3fdInner;
RC_5214bc4138c7449e8ae1a2e275e6e3fd.init();
}
});

define("tradershub.model$RL_524f6964155c0065c42f035c25e7b580", ["exports", "@outsystems/runtime-core-js", "OutSystemsMaps.model", "tradershub.model", "OutSystemsMaps.model$ST_5fb6f64676b0133fcb572480a766fc9cStructure", "tradershub.referencesHealth", "tradershub.referencesHealth$OutSystemsMaps"], function (exports, OSRuntimeCore, OutSystemsMapsModel, tradershubModel) {
var OS = OSRuntimeCore;
class RL_524f6964155c0065c42f035c25e7b580 extends 
OS.DataTypes.GenericRecordList {
static getItemType() {
return OutSystemsMapsModel.ST_5fb6f64676b0133fcb572480a766fc9cStructure;
}

}

tradershubModel.RL_524f6964155c0065c42f035c25e7b580 = RL_524f6964155c0065c42f035c25e7b580;

});

define("tradershub.model$RL_52a96e0500b1d6d23d93e10409e37890", ["exports", "@outsystems/runtime-core-js", "OutSystemsCharts.model", "tradershub.model", "OutSystemsCharts.model$ST_9498db02a236485a96a27db0bd61b81eStructure", "tradershub.referencesHealth", "tradershub.referencesHealth$OutSystemsCharts"], function (exports, OSRuntimeCore, OutSystemsChartsModel, tradershubModel) {
var OS = OSRuntimeCore;
class RL_52a96e0500b1d6d23d93e10409e37890 extends 
OS.DataTypes.GenericRecordList {
static getItemType() {
return OutSystemsChartsModel.ST_9498db02a236485a96a27db0bd61b81eStructure;
}

}

tradershubModel.RL_52a96e0500b1d6d23d93e10409e37890 = RL_52a96e0500b1d6d23d93e10409e37890;

});

define("tradershub.model$RL_53248a1b8ab3b0462ffd76c73f4f1eba", ["exports", "@outsystems/runtime-core-js", "RESTAPIWebsocket.model", "tradershub.model", "RESTAPIWebsocket.model$ST_ccbd4ab860fdf3c4690e46bb49937de5Structure", "tradershub.referencesHealth", "tradershub.referencesHealth$RESTAPIWebsocket"], function (exports, OSRuntimeCore, RESTAPIWebsocketModel, tradershubModel) {
var OS = OSRuntimeCore;
class RL_53248a1b8ab3b0462ffd76c73f4f1eba extends 
OS.DataTypes.GenericRecordList {
static getItemType() {
return RESTAPIWebsocketModel.ST_ccbd4ab860fdf3c4690e46bb49937de5Structure;
}

}

tradershubModel.RL_53248a1b8ab3b0462ffd76c73f4f1eba = RL_53248a1b8ab3b0462ffd76c73f4f1eba;

});

define("tradershub.model$RC_cb3c04d88b114a075539728cafcde6e0", ["exports", "@outsystems/runtime-core-js", "RESTAPIWebsocket.model", "tradershub.model", "RESTAPIWebsocket.model$ST_60a5d7a279694c475c6cf2585b652410Structure", "tradershub.referencesHealth", "tradershub.referencesHealth$RESTAPIWebsocket"], function (exports, OSRuntimeCore, RESTAPIWebsocketModel, tradershubModel) {
var OS = OSRuntimeCore;
{class RC_cb3c04d88b114a075539728cafcde6e0Inner extends 
OS.DataTypes.GenericRecord {
static attributesToDeclare() {
return [
this.attr("Mt_all_company", "mt_all_companyAttr", "Mt_all_company", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new RESTAPIWebsocketModel.ST_60a5d7a279694c475c6cf2585b652410Structure());
}, true, RESTAPIWebsocketModel.ST_60a5d7a279694c475c6cf2585b652410Structure)
].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
}

static fromStructure(str) {
return new RC_cb3c04d88b114a075539728cafcde6e0(new RC_cb3c04d88b114a075539728cafcde6e0.RecordClass({
mt_all_companyAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
}

}

tradershubModel.RC_cb3c04d88b114a075539728cafcde6e0 = RC_cb3c04d88b114a075539728cafcde6e0Inner;

RC_cb3c04d88b114a075539728cafcde6e0Inner._isAnonymousRecord = true;
RC_cb3c04d88b114a075539728cafcde6e0Inner.UniqueId = "cb3c04d8-8b11-4a07-5539-728cafcde6e0";
var RC_cb3c04d88b114a075539728cafcde6e0 = RC_cb3c04d88b114a075539728cafcde6e0Inner;
RC_cb3c04d88b114a075539728cafcde6e0.init();
}
});

define("tradershub.model$RL_53c372dc61bea6ee9ca5f8120f4350e8", ["exports", "@outsystems/runtime-core-js", "tradershub.model", "tradershub.model$RC_cb3c04d88b114a075539728cafcde6e0"], function (exports, OSRuntimeCore, tradershubModel) {
var OS = OSRuntimeCore;
class RL_53c372dc61bea6ee9ca5f8120f4350e8 extends 
OS.DataTypes.GenericRecordList {
static getItemType() {
return tradershubModel.RC_cb3c04d88b114a075539728cafcde6e0;
}

}

tradershubModel.RL_53c372dc61bea6ee9ca5f8120f4350e8 = RL_53c372dc61bea6ee9ca5f8120f4350e8;

});

define("tradershub.model$RC_53d491417faf149f9fb8a0dda9c12d06", ["exports", "@outsystems/runtime-core-js", "System_.model", "tradershub.model", "System_.model$ChangePasswordResultRec", "tradershub.referencesHealth", "tradershub.referencesHealth$System_"], function (exports, OSRuntimeCore, System_Model, tradershubModel) {
var OS = OSRuntimeCore;
{class RC_53d491417faf149f9fb8a0dda9c12d06Inner extends 
OS.DataTypes.GenericRecord {
static attributesToDeclare() {
return [
this.attr("ChangePasswordResult", "changePasswordResultAttr", "ChangePasswordResult", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new OS.SystemStructures.ChangePasswordResultRec());
}, true, OS.SystemStructures.ChangePasswordResultRec)
].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
}

static fromStructure(str) {
return new RC_53d491417faf149f9fb8a0dda9c12d06(new RC_53d491417faf149f9fb8a0dda9c12d06.RecordClass({
changePasswordResultAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
}

}

tradershubModel.RC_53d491417faf149f9fb8a0dda9c12d06 = RC_53d491417faf149f9fb8a0dda9c12d06Inner;

RC_53d491417faf149f9fb8a0dda9c12d06Inner._isAnonymousRecord = true;
RC_53d491417faf149f9fb8a0dda9c12d06Inner.UniqueId = "53d49141-7faf-149f-9fb8-a0dda9c12d06";
var RC_53d491417faf149f9fb8a0dda9c12d06 = RC_53d491417faf149f9fb8a0dda9c12d06Inner;
RC_53d491417faf149f9fb8a0dda9c12d06.init();
}
});

define("tradershub.model$RL_545c5578385333732449204f3e942ed0", ["exports", "@outsystems/runtime-core-js", "tradershub.model", "tradershub.model$RC_012b2720fb0dcd442416908af4498cef"], function (exports, OSRuntimeCore, tradershubModel) {
var OS = OSRuntimeCore;
class RL_545c5578385333732449204f3e942ed0 extends 
OS.DataTypes.GenericRecordList {
static getItemType() {
return tradershubModel.RC_012b2720fb0dcd442416908af4498cef;
}

}

tradershubModel.RL_545c5578385333732449204f3e942ed0 = RL_545c5578385333732449204f3e942ed0;

});

define("tradershub.model$RL_549974f3b4457a3de60891ae7d23d2bc", ["exports", "@outsystems/runtime-core-js", "OutSystemsUI.model", "tradershub.model", "OutSystemsUI.model$EN_d11562be18a7e40ca777aa336c946163EntityRecord", "tradershub.referencesHealth", "tradershub.referencesHealth$OutSystemsUI"], function (exports, OSRuntimeCore, OutSystemsUIModel, tradershubModel) {
var OS = OSRuntimeCore;
class RL_549974f3b4457a3de60891ae7d23d2bc extends 
OS.DataTypes.GenericRecordList {
static getItemType() {
return OutSystemsUIModel.EN_d11562be18a7e40ca777aa336c946163EntityRecord;
}

}

tradershubModel.RL_549974f3b4457a3de60891ae7d23d2bc = RL_549974f3b4457a3de60891ae7d23d2bc;

});

define("tradershub.model$RL_54fab648630d41e343fad35c1143481d", ["exports", "@outsystems/runtime-core-js", "System_.model", "tradershub.model", "System_.model$UserInfoRec", "tradershub.referencesHealth", "tradershub.referencesHealth$System_"], function (exports, OSRuntimeCore, System_Model, tradershubModel) {
var OS = OSRuntimeCore;
class RL_54fab648630d41e343fad35c1143481d extends 
OS.DataTypes.GenericRecordList {
static getItemType() {
return OS.SystemStructures.UserInfoRec;
}

}

tradershubModel.RL_54fab648630d41e343fad35c1143481d = RL_54fab648630d41e343fad35c1143481d;

});

define("tradershub.model$RC_5513b0f49b52fa312c8002f470076fc0", ["exports", "@outsystems/runtime-core-js", "tradershub.model", "tradershub.model$ST_25b9b327f0c66aea511dc5895e377c2eStructure"], function (exports, OSRuntimeCore, tradershubModel) {
var OS = OSRuntimeCore;
{class RC_5513b0f49b52fa312c8002f470076fc0Inner extends 
OS.DataTypes.GenericRecord {
static attributesToDeclare() {
return [
this.attr("Api_call_limit", "api_call_limitAttr", "Api_call_limit", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new tradershubModel.ST_25b9b327f0c66aea511dc5895e377c2eStructure());
}, true, tradershubModel.ST_25b9b327f0c66aea511dc5895e377c2eStructure)
].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
}

static fromStructure(str) {
return new RC_5513b0f49b52fa312c8002f470076fc0(new RC_5513b0f49b52fa312c8002f470076fc0.RecordClass({
api_call_limitAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
}

}

tradershubModel.RC_5513b0f49b52fa312c8002f470076fc0 = RC_5513b0f49b52fa312c8002f470076fc0Inner;

RC_5513b0f49b52fa312c8002f470076fc0Inner._isAnonymousRecord = true;
RC_5513b0f49b52fa312c8002f470076fc0Inner.UniqueId = "5513b0f4-9b52-fa31-2c80-02f470076fc0";
var RC_5513b0f49b52fa312c8002f470076fc0 = RC_5513b0f49b52fa312c8002f470076fc0Inner;
RC_5513b0f49b52fa312c8002f470076fc0.init();
}
});

define("tradershub.model$RC_bf75694d8016688134fa555a2fd4f5d7", ["exports", "@outsystems/runtime-core-js", "OutSystemsMaps.model", "tradershub.model", "OutSystemsMaps.model$EN_2b877a58494bdf7ca89c3ea2061b88c8EntityRecord", "tradershub.referencesHealth", "tradershub.referencesHealth$OutSystemsMaps"], function (exports, OSRuntimeCore, OutSystemsMapsModel, tradershubModel) {
var OS = OSRuntimeCore;
{class RC_bf75694d8016688134fa555a2fd4f5d7Inner extends 
OS.DataTypes.GenericRecord {
static attributesToDeclare() {
return [
this.attr("MapEventTriggered", "mapEventTriggeredAttr", "MapEventTriggered", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new OutSystemsMapsModel.EN_2b877a58494bdf7ca89c3ea2061b88c8EntityRecord());
}, true, OutSystemsMapsModel.EN_2b877a58494bdf7ca89c3ea2061b88c8EntityRecord)
].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
}

static fromStructure(str) {
return new RC_bf75694d8016688134fa555a2fd4f5d7(new RC_bf75694d8016688134fa555a2fd4f5d7.RecordClass({
mapEventTriggeredAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
}

}

tradershubModel.RC_bf75694d8016688134fa555a2fd4f5d7 = RC_bf75694d8016688134fa555a2fd4f5d7Inner;

RC_bf75694d8016688134fa555a2fd4f5d7Inner._isAnonymousRecord = true;
RC_bf75694d8016688134fa555a2fd4f5d7Inner.UniqueId = "bf75694d-8016-6881-34fa-555a2fd4f5d7";
var RC_bf75694d8016688134fa555a2fd4f5d7 = RC_bf75694d8016688134fa555a2fd4f5d7Inner;
RC_bf75694d8016688134fa555a2fd4f5d7.init();
}
});

define("tradershub.model$RL_5544cfc15f95ff239b7f04e7101e83bb", ["exports", "@outsystems/runtime-core-js", "tradershub.model", "tradershub.model$RC_bf75694d8016688134fa555a2fd4f5d7"], function (exports, OSRuntimeCore, tradershubModel) {
var OS = OSRuntimeCore;
class RL_5544cfc15f95ff239b7f04e7101e83bb extends 
OS.DataTypes.GenericRecordList {
static getItemType() {
return tradershubModel.RC_bf75694d8016688134fa555a2fd4f5d7;
}

}

tradershubModel.RL_5544cfc15f95ff239b7f04e7101e83bb = RL_5544cfc15f95ff239b7f04e7101e83bb;

});

define("tradershub.model$RC_e3355f6b7ba3051c4a4a9a00634d68d0", ["exports", "@outsystems/runtime-core-js", "OutSystemsMaps.model", "tradershub.model", "OutSystemsMaps.model$ST_0e474756a4be14d378c73cd05f602bcdStructure", "tradershub.referencesHealth", "tradershub.referencesHealth$OutSystemsMaps"], function (exports, OSRuntimeCore, OutSystemsMapsModel, tradershubModel) {
var OS = OSRuntimeCore;
{class RC_e3355f6b7ba3051c4a4a9a00634d68d0Inner extends 
OS.DataTypes.GenericRecord {
static attributesToDeclare() {
return [
this.attr("Coordinates", "coordinatesAttr", "Coordinates", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new OutSystemsMapsModel.ST_0e474756a4be14d378c73cd05f602bcdStructure());
}, true, OutSystemsMapsModel.ST_0e474756a4be14d378c73cd05f602bcdStructure)
].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
}

static fromStructure(str) {
return new RC_e3355f6b7ba3051c4a4a9a00634d68d0(new RC_e3355f6b7ba3051c4a4a9a00634d68d0.RecordClass({
coordinatesAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
}

}

tradershubModel.RC_e3355f6b7ba3051c4a4a9a00634d68d0 = RC_e3355f6b7ba3051c4a4a9a00634d68d0Inner;

RC_e3355f6b7ba3051c4a4a9a00634d68d0Inner._isAnonymousRecord = true;
RC_e3355f6b7ba3051c4a4a9a00634d68d0Inner.UniqueId = "e3355f6b-7ba3-051c-4a4a-9a00634d68d0";
var RC_e3355f6b7ba3051c4a4a9a00634d68d0 = RC_e3355f6b7ba3051c4a4a9a00634d68d0Inner;
RC_e3355f6b7ba3051c4a4a9a00634d68d0.init();
}
});

define("tradershub.model$RL_55aa3adfaada82d015c1dcd249b8e8ce", ["exports", "@outsystems/runtime-core-js", "tradershub.model", "tradershub.model$RC_e3355f6b7ba3051c4a4a9a00634d68d0"], function (exports, OSRuntimeCore, tradershubModel) {
var OS = OSRuntimeCore;
class RL_55aa3adfaada82d015c1dcd249b8e8ce extends 
OS.DataTypes.GenericRecordList {
static getItemType() {
return tradershubModel.RC_e3355f6b7ba3051c4a4a9a00634d68d0;
}

}

tradershubModel.RL_55aa3adfaada82d015c1dcd249b8e8ce = RL_55aa3adfaada82d015c1dcd249b8e8ce;

});

define("tradershub.model$RL_55e12cf788c1bd3aa183436567f86c54", ["exports", "@outsystems/runtime-core-js", "OutSystemsCharts.model", "tradershub.model", "OutSystemsCharts.model$EN_0c0b103cba961483054afffbc30b3066EntityRecord", "tradershub.referencesHealth", "tradershub.referencesHealth$OutSystemsCharts"], function (exports, OSRuntimeCore, OutSystemsChartsModel, tradershubModel) {
var OS = OSRuntimeCore;
class RL_55e12cf788c1bd3aa183436567f86c54 extends 
OS.DataTypes.GenericRecordList {
static getItemType() {
return OutSystemsChartsModel.EN_0c0b103cba961483054afffbc30b3066EntityRecord;
}

}

tradershubModel.RL_55e12cf788c1bd3aa183436567f86c54 = RL_55e12cf788c1bd3aa183436567f86c54;

});

define("tradershub.model$RL_5615c834166e52223964bada9f9f6329", ["exports", "@outsystems/runtime-core-js", "RESTAPIWebsocket.model", "tradershub.model", "RESTAPIWebsocket.model$ST_3b8df1b0da2c2bbfdff9bb6416b86701Structure", "tradershub.referencesHealth", "tradershub.referencesHealth$RESTAPIWebsocket"], function (exports, OSRuntimeCore, RESTAPIWebsocketModel, tradershubModel) {
var OS = OSRuntimeCore;
class RL_5615c834166e52223964bada9f9f6329 extends 
OS.DataTypes.GenericRecordList {
static getItemType() {
return RESTAPIWebsocketModel.ST_3b8df1b0da2c2bbfdff9bb6416b86701Structure;
}

}

tradershubModel.RL_5615c834166e52223964bada9f9f6329 = RL_5615c834166e52223964bada9f9f6329;

});

define("tradershub.model$RC_56805fdef6332e01f13c0f9217357dbc", ["exports", "@outsystems/runtime-core-js", "OutSystemsUI.model", "tradershub.model", "OutSystemsUI.model$ST_3cb059eb7f6ed8c9a730f87011d5c0e0Structure", "tradershub.referencesHealth", "tradershub.referencesHealth$OutSystemsUI"], function (exports, OSRuntimeCore, OutSystemsUIModel, tradershubModel) {
var OS = OSRuntimeCore;
{class RC_56805fdef6332e01f13c0f9217357dbcInner extends 
OS.DataTypes.GenericRecord {
static attributesToDeclare() {
return [
this.attr("DropdownItem", "dropdownItemAttr", "DropdownItem", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new OutSystemsUIModel.ST_3cb059eb7f6ed8c9a730f87011d5c0e0Structure());
}, true, OutSystemsUIModel.ST_3cb059eb7f6ed8c9a730f87011d5c0e0Structure)
].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
}

static fromStructure(str) {
return new RC_56805fdef6332e01f13c0f9217357dbc(new RC_56805fdef6332e01f13c0f9217357dbc.RecordClass({
dropdownItemAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
}

}

tradershubModel.RC_56805fdef6332e01f13c0f9217357dbc = RC_56805fdef6332e01f13c0f9217357dbcInner;

RC_56805fdef6332e01f13c0f9217357dbcInner._isAnonymousRecord = true;
RC_56805fdef6332e01f13c0f9217357dbcInner.UniqueId = "56805fde-f633-2e01-f13c-0f9217357dbc";
var RC_56805fdef6332e01f13c0f9217357dbc = RC_56805fdef6332e01f13c0f9217357dbcInner;
RC_56805fdef6332e01f13c0f9217357dbc.init();
}
});

define("tradershub.model$RL_571b103d9a95a8c3a2deb1712897dca8", ["exports", "@outsystems/runtime-core-js", "OutSystemsCharts.model", "tradershub.model", "OutSystemsCharts.model$EN_dd503b13df684d7ec8cc34d86edadd21EntityRecord", "tradershub.referencesHealth", "tradershub.referencesHealth$OutSystemsCharts"], function (exports, OSRuntimeCore, OutSystemsChartsModel, tradershubModel) {
var OS = OSRuntimeCore;
class RL_571b103d9a95a8c3a2deb1712897dca8 extends 
OS.DataTypes.GenericRecordList {
static getItemType() {
return OutSystemsChartsModel.EN_dd503b13df684d7ec8cc34d86edadd21EntityRecord;
}

}

tradershubModel.RL_571b103d9a95a8c3a2deb1712897dca8 = RL_571b103d9a95a8c3a2deb1712897dca8;

});

define("tradershub.model$RC_59608f6fdf263bd270d8edd0a1db0f3c", ["exports", "@outsystems/runtime-core-js", "OutSystemsMaps.model", "tradershub.model", "OutSystemsMaps.model$ST_c84e2ea85c3f77e3b083b2b79806c17aStructure", "tradershub.referencesHealth", "tradershub.referencesHealth$OutSystemsMaps"], function (exports, OSRuntimeCore, OutSystemsMapsModel, tradershubModel) {
var OS = OSRuntimeCore;
{class RC_59608f6fdf263bd270d8edd0a1db0f3cInner extends 
OS.DataTypes.GenericRecord {
static attributesToDeclare() {
return [
this.attr("OptionalHeatmapLayerConfigs", "optionalHeatmapLayerConfigsAttr", "OptionalHeatmapLayerConfigs", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new OutSystemsMapsModel.ST_c84e2ea85c3f77e3b083b2b79806c17aStructure());
}, true, OutSystemsMapsModel.ST_c84e2ea85c3f77e3b083b2b79806c17aStructure)
].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
}

static fromStructure(str) {
return new RC_59608f6fdf263bd270d8edd0a1db0f3c(new RC_59608f6fdf263bd270d8edd0a1db0f3c.RecordClass({
optionalHeatmapLayerConfigsAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
}

}

tradershubModel.RC_59608f6fdf263bd270d8edd0a1db0f3c = RC_59608f6fdf263bd270d8edd0a1db0f3cInner;

RC_59608f6fdf263bd270d8edd0a1db0f3cInner._isAnonymousRecord = true;
RC_59608f6fdf263bd270d8edd0a1db0f3cInner.UniqueId = "59608f6f-df26-3bd2-70d8-edd0a1db0f3c";
var RC_59608f6fdf263bd270d8edd0a1db0f3c = RC_59608f6fdf263bd270d8edd0a1db0f3cInner;
RC_59608f6fdf263bd270d8edd0a1db0f3c.init();
}
});

define("tradershub.model$RL_59a4fbf5e364b5bb932d107181ed2455", ["exports", "@outsystems/runtime-core-js", "tradershub.model", "tradershub.model$RC_48d7c166849f4c26288a543a51543b8d"], function (exports, OSRuntimeCore, tradershubModel) {
var OS = OSRuntimeCore;
class RL_59a4fbf5e364b5bb932d107181ed2455 extends 
OS.DataTypes.GenericRecordList {
static getItemType() {
return tradershubModel.RC_48d7c166849f4c26288a543a51543b8d;
}

}

tradershubModel.RL_59a4fbf5e364b5bb932d107181ed2455 = RL_59a4fbf5e364b5bb932d107181ed2455;

});

define("tradershub.model$RL_5a159bcaeb1a211c3c97752d6b3cfae5", ["exports", "@outsystems/runtime-core-js", "OutSystemsMaps.model", "tradershub.model", "OutSystemsMaps.model$ST_2bb06e37aea9715ba999f70106cf37a5Structure", "tradershub.referencesHealth", "tradershub.referencesHealth$OutSystemsMaps"], function (exports, OSRuntimeCore, OutSystemsMapsModel, tradershubModel) {
var OS = OSRuntimeCore;
class RL_5a159bcaeb1a211c3c97752d6b3cfae5 extends 
OS.DataTypes.GenericRecordList {
static getItemType() {
return OutSystemsMapsModel.ST_2bb06e37aea9715ba999f70106cf37a5Structure;
}

}

tradershubModel.RL_5a159bcaeb1a211c3c97752d6b3cfae5 = RL_5a159bcaeb1a211c3c97752d6b3cfae5;

});

define("tradershub.model$RL_5a17cb0f64de6697951894cea5524431", ["exports", "@outsystems/runtime-core-js", "tradershub.model", "tradershub.model$RC_3f4d741c30bd5473dc9c679433c442c3"], function (exports, OSRuntimeCore, tradershubModel) {
var OS = OSRuntimeCore;
class RL_5a17cb0f64de6697951894cea5524431 extends 
OS.DataTypes.GenericRecordList {
static getItemType() {
return tradershubModel.RC_3f4d741c30bd5473dc9c679433c442c3;
}

}

tradershubModel.RL_5a17cb0f64de6697951894cea5524431 = RL_5a17cb0f64de6697951894cea5524431;

});

define("tradershub.model$RC_7ccf6f2143e8905d09135addc42ae395", ["exports", "@outsystems/runtime-core-js", "tradershub.model", "tradershub.model$EN_98d873be1ff16324d2c2bf822e72e238EntityRecord"], function (exports, OSRuntimeCore, tradershubModel) {
var OS = OSRuntimeCore;
{class RC_7ccf6f2143e8905d09135addc42ae395Inner extends 
OS.DataTypes.GenericRecord {
static attributesToDeclare() {
return [
this.attr("SourceOfIncome", "sourceOfIncomeAttr", "SourceOfIncome", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new tradershubModel.EN_98d873be1ff16324d2c2bf822e72e238EntityRecord());
}, true, tradershubModel.EN_98d873be1ff16324d2c2bf822e72e238EntityRecord)
].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
}

static fromStructure(str) {
return new RC_7ccf6f2143e8905d09135addc42ae395(new RC_7ccf6f2143e8905d09135addc42ae395.RecordClass({
sourceOfIncomeAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
}

}

tradershubModel.RC_7ccf6f2143e8905d09135addc42ae395 = RC_7ccf6f2143e8905d09135addc42ae395Inner;

RC_7ccf6f2143e8905d09135addc42ae395Inner._isAnonymousRecord = true;
RC_7ccf6f2143e8905d09135addc42ae395Inner.UniqueId = "7ccf6f21-43e8-905d-0913-5addc42ae395";
var RC_7ccf6f2143e8905d09135addc42ae395 = RC_7ccf6f2143e8905d09135addc42ae395Inner;
RC_7ccf6f2143e8905d09135addc42ae395.init();
}
});

define("tradershub.model$RL_5b6d3a5fefab018ee782a05d2a294834", ["exports", "@outsystems/runtime-core-js", "tradershub.model", "tradershub.model$RC_7ccf6f2143e8905d09135addc42ae395"], function (exports, OSRuntimeCore, tradershubModel) {
var OS = OSRuntimeCore;
class RL_5b6d3a5fefab018ee782a05d2a294834 extends 
OS.DataTypes.GenericRecordList {
static getItemType() {
return tradershubModel.RC_7ccf6f2143e8905d09135addc42ae395;
}

}

tradershubModel.RL_5b6d3a5fefab018ee782a05d2a294834 = RL_5b6d3a5fefab018ee782a05d2a294834;

});

define("tradershub.model$RC_5f28219a5e30fb90023fcbc295513e7c", ["exports", "@outsystems/runtime-core-js", "OutSystemsUI.model", "tradershub.model", "OutSystemsUI.model$EN_5d1279724e719322292e34ef3c5500a0EntityRecord", "tradershub.referencesHealth", "tradershub.referencesHealth$OutSystemsUI"], function (exports, OSRuntimeCore, OutSystemsUIModel, tradershubModel) {
var OS = OSRuntimeCore;
{class RC_5f28219a5e30fb90023fcbc295513e7cInner extends 
OS.DataTypes.GenericRecord {
static attributesToDeclare() {
return [
this.attr("Position", "positionAttr", "Position", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new OutSystemsUIModel.EN_5d1279724e719322292e34ef3c5500a0EntityRecord());
}, true, OutSystemsUIModel.EN_5d1279724e719322292e34ef3c5500a0EntityRecord)
].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
}

static fromStructure(str) {
return new RC_5f28219a5e30fb90023fcbc295513e7c(new RC_5f28219a5e30fb90023fcbc295513e7c.RecordClass({
positionAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
}

}

tradershubModel.RC_5f28219a5e30fb90023fcbc295513e7c = RC_5f28219a5e30fb90023fcbc295513e7cInner;

RC_5f28219a5e30fb90023fcbc295513e7cInner._isAnonymousRecord = true;
RC_5f28219a5e30fb90023fcbc295513e7cInner.UniqueId = "5f28219a-5e30-fb90-023f-cbc295513e7c";
var RC_5f28219a5e30fb90023fcbc295513e7c = RC_5f28219a5e30fb90023fcbc295513e7cInner;
RC_5f28219a5e30fb90023fcbc295513e7c.init();
}
});

define("tradershub.model$RL_5ba41fd2555db2daaba8da89df34a9b8", ["exports", "@outsystems/runtime-core-js", "tradershub.model", "tradershub.model$RC_5f28219a5e30fb90023fcbc295513e7c"], function (exports, OSRuntimeCore, tradershubModel) {
var OS = OSRuntimeCore;
class RL_5ba41fd2555db2daaba8da89df34a9b8 extends 
OS.DataTypes.GenericRecordList {
static getItemType() {
return tradershubModel.RC_5f28219a5e30fb90023fcbc295513e7c;
}

}

tradershubModel.RL_5ba41fd2555db2daaba8da89df34a9b8 = RL_5ba41fd2555db2daaba8da89df34a9b8;

});

define("tradershub.model$RC_dfb836f467b00be2b3ce838401b340cc", ["exports", "@outsystems/runtime-core-js", "OutSystemsMaps.model", "tradershub.model", "OutSystemsMaps.model$ST_bbc1ca6a16af45dbf463953c280f2bf7Structure", "tradershub.referencesHealth", "tradershub.referencesHealth$OutSystemsMaps"], function (exports, OSRuntimeCore, OutSystemsMapsModel, tradershubModel) {
var OS = OSRuntimeCore;
{class RC_dfb836f467b00be2b3ce838401b340ccInner extends 
OS.DataTypes.GenericRecord {
static attributesToDeclare() {
return [
this.attr("OptionalPopupMarkerConfigs", "optionalPopupMarkerConfigsAttr", "OptionalPopupMarkerConfigs", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new OutSystemsMapsModel.ST_bbc1ca6a16af45dbf463953c280f2bf7Structure());
}, true, OutSystemsMapsModel.ST_bbc1ca6a16af45dbf463953c280f2bf7Structure)
].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
}

static fromStructure(str) {
return new RC_dfb836f467b00be2b3ce838401b340cc(new RC_dfb836f467b00be2b3ce838401b340cc.RecordClass({
optionalPopupMarkerConfigsAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
}

}

tradershubModel.RC_dfb836f467b00be2b3ce838401b340cc = RC_dfb836f467b00be2b3ce838401b340ccInner;

RC_dfb836f467b00be2b3ce838401b340ccInner._isAnonymousRecord = true;
RC_dfb836f467b00be2b3ce838401b340ccInner.UniqueId = "dfb836f4-67b0-0be2-b3ce-838401b340cc";
var RC_dfb836f467b00be2b3ce838401b340cc = RC_dfb836f467b00be2b3ce838401b340ccInner;
RC_dfb836f467b00be2b3ce838401b340cc.init();
}
});

define("tradershub.model$RL_5c878fa9fbf73778d7e6e41024ae4f84", ["exports", "@outsystems/runtime-core-js", "tradershub.model", "tradershub.model$RC_dfb836f467b00be2b3ce838401b340cc"], function (exports, OSRuntimeCore, tradershubModel) {
var OS = OSRuntimeCore;
class RL_5c878fa9fbf73778d7e6e41024ae4f84 extends 
OS.DataTypes.GenericRecordList {
static getItemType() {
return tradershubModel.RC_dfb836f467b00be2b3ce838401b340cc;
}

}

tradershubModel.RL_5c878fa9fbf73778d7e6e41024ae4f84 = RL_5c878fa9fbf73778d7e6e41024ae4f84;

});

define("tradershub.model$RC_5d4c0a98b9773e489e7e27bfe5360793", ["exports", "@outsystems/runtime-core-js", "System_.model", "tradershub.model", "System_.model$UpdateUserFailureReasonRec", "tradershub.referencesHealth", "tradershub.referencesHealth$System_"], function (exports, OSRuntimeCore, System_Model, tradershubModel) {
var OS = OSRuntimeCore;
{class RC_5d4c0a98b9773e489e7e27bfe5360793Inner extends 
OS.DataTypes.GenericRecord {
static attributesToDeclare() {
return [
this.attr("UpdateUserFailureReason", "updateUserFailureReasonAttr", "UpdateUserFailureReason", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new OS.SystemStructures.UpdateUserFailureReasonRec());
}, true, OS.SystemStructures.UpdateUserFailureReasonRec)
].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
}

static fromStructure(str) {
return new RC_5d4c0a98b9773e489e7e27bfe5360793(new RC_5d4c0a98b9773e489e7e27bfe5360793.RecordClass({
updateUserFailureReasonAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
}

}

tradershubModel.RC_5d4c0a98b9773e489e7e27bfe5360793 = RC_5d4c0a98b9773e489e7e27bfe5360793Inner;

RC_5d4c0a98b9773e489e7e27bfe5360793Inner._isAnonymousRecord = true;
RC_5d4c0a98b9773e489e7e27bfe5360793Inner.UniqueId = "5d4c0a98-b977-3e48-9e7e-27bfe5360793";
var RC_5d4c0a98b9773e489e7e27bfe5360793 = RC_5d4c0a98b9773e489e7e27bfe5360793Inner;
RC_5d4c0a98b9773e489e7e27bfe5360793.init();
}
});

define("tradershub.model$RC_5e1d01a12ae536aa8fe0a4f69834b0d5", ["exports", "@outsystems/runtime-core-js", "tradershub.model", "tradershub.model$ST_10c9c671ed7b6c5f671603b2ebe64123Structure"], function (exports, OSRuntimeCore, tradershubModel) {
var OS = OSRuntimeCore;
{class RC_5e1d01a12ae536aa8fe0a4f69834b0d5Inner extends 
OS.DataTypes.GenericRecord {
static attributesToDeclare() {
return [
this.attr("Local_currency", "local_currencyAttr", "Local_currency", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new tradershubModel.ST_10c9c671ed7b6c5f671603b2ebe64123Structure());
}, true, tradershubModel.ST_10c9c671ed7b6c5f671603b2ebe64123Structure)
].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
}

static fromStructure(str) {
return new RC_5e1d01a12ae536aa8fe0a4f69834b0d5(new RC_5e1d01a12ae536aa8fe0a4f69834b0d5.RecordClass({
local_currencyAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
}

}

tradershubModel.RC_5e1d01a12ae536aa8fe0a4f69834b0d5 = RC_5e1d01a12ae536aa8fe0a4f69834b0d5Inner;

RC_5e1d01a12ae536aa8fe0a4f69834b0d5Inner._isAnonymousRecord = true;
RC_5e1d01a12ae536aa8fe0a4f69834b0d5Inner.UniqueId = "5e1d01a1-2ae5-36aa-8fe0-a4f69834b0d5";
var RC_5e1d01a12ae536aa8fe0a4f69834b0d5 = RC_5e1d01a12ae536aa8fe0a4f69834b0d5Inner;
RC_5e1d01a12ae536aa8fe0a4f69834b0d5.init();
}
});

define("tradershub.model$RL_5e5ee9ae0fcac1f142b0849f5cd91a60", ["exports", "@outsystems/runtime-core-js", "tradershub.model", "tradershub.model$RC_003de7652ef70684ee40ecb9c31ff117"], function (exports, OSRuntimeCore, tradershubModel) {
var OS = OSRuntimeCore;
class RL_5e5ee9ae0fcac1f142b0849f5cd91a60 extends 
OS.DataTypes.GenericRecordList {
static getItemType() {
return tradershubModel.RC_003de7652ef70684ee40ecb9c31ff117;
}

}

tradershubModel.RL_5e5ee9ae0fcac1f142b0849f5cd91a60 = RL_5e5ee9ae0fcac1f142b0849f5cd91a60;

});

define("tradershub.model$EN_bf87ce2ee46f8f5bc73889fe14426739EntityRecord", ["exports", "@outsystems/runtime-core-js", "tradershub.model"], function (exports, OSRuntimeCore, tradershubModel) {
var OS = OSRuntimeCore;
{class EN_bf87ce2ee46f8f5bc73889fe14426739EntityRecordInner extends 
OS.DataTypes.GenericRecord {
static attributesToDeclare() {
return [
this.attr("Id", "idAttr", "Id", true, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true), 
this.attr("Name", "nameAttr", "Name", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Icon", "iconAttr", "Icon", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Code", "codeAttr", "Code", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Category", "categoryAttr", "Category", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true)
].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
}

}

tradershubModel.EN_bf87ce2ee46f8f5bc73889fe14426739EntityRecord = EN_bf87ce2ee46f8f5bc73889fe14426739EntityRecordInner;

var EN_bf87ce2ee46f8f5bc73889fe14426739EntityRecord = EN_bf87ce2ee46f8f5bc73889fe14426739EntityRecordInner;
EN_bf87ce2ee46f8f5bc73889fe14426739EntityRecord.init();
}
});

define("tradershub.model$RC_6a44851bc01e80a885c4aa0ae740b8fc", ["exports", "@outsystems/runtime-core-js", "tradershub.model", "tradershub.model$EN_bf87ce2ee46f8f5bc73889fe14426739EntityRecord"], function (exports, OSRuntimeCore, tradershubModel) {
var OS = OSRuntimeCore;
{class RC_6a44851bc01e80a885c4aa0ae740b8fcInner extends 
OS.DataTypes.GenericRecord {
static attributesToDeclare() {
return [
this.attr("Currencies", "currenciesAttr", "Currencies", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new tradershubModel.EN_bf87ce2ee46f8f5bc73889fe14426739EntityRecord());
}, true, tradershubModel.EN_bf87ce2ee46f8f5bc73889fe14426739EntityRecord)
].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
}

static fromStructure(str) {
return new RC_6a44851bc01e80a885c4aa0ae740b8fc(new RC_6a44851bc01e80a885c4aa0ae740b8fc.RecordClass({
currenciesAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
}

}

tradershubModel.RC_6a44851bc01e80a885c4aa0ae740b8fc = RC_6a44851bc01e80a885c4aa0ae740b8fcInner;

RC_6a44851bc01e80a885c4aa0ae740b8fcInner._isAnonymousRecord = true;
RC_6a44851bc01e80a885c4aa0ae740b8fcInner.UniqueId = "6a44851b-c01e-80a8-85c4-aa0ae740b8fc";
var RC_6a44851bc01e80a885c4aa0ae740b8fc = RC_6a44851bc01e80a885c4aa0ae740b8fcInner;
RC_6a44851bc01e80a885c4aa0ae740b8fc.init();
}
});

define("tradershub.model$RL_5ee36d8deb03b51810340e621ea66d4b", ["exports", "@outsystems/runtime-core-js", "tradershub.model", "tradershub.model$RC_6a44851bc01e80a885c4aa0ae740b8fc"], function (exports, OSRuntimeCore, tradershubModel) {
var OS = OSRuntimeCore;
class RL_5ee36d8deb03b51810340e621ea66d4b extends 
OS.DataTypes.GenericRecordList {
static getItemType() {
return tradershubModel.RC_6a44851bc01e80a885c4aa0ae740b8fc;
}

}

tradershubModel.RL_5ee36d8deb03b51810340e621ea66d4b = RL_5ee36d8deb03b51810340e621ea66d4b;

});

define("tradershub.model$ST_dda3674fb618c7350645a460f303a303Structure", ["exports", "@outsystems/runtime-core-js", "tradershub.model"], function (exports, OSRuntimeCore, tradershubModel) {
var OS = OSRuntimeCore;
{class ST_dda3674fb618c7350645a460f303a303StructureInner extends 
OS.DataTypes.GenericRecord {
static attributesToDeclare() {
return [
this.attr("Icon", "iconAttr", "icon", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Is_disabled", "is_disabledAttr", "is_disabled", false, false, OS.DataTypes.DataTypes.LongInteger, function () {
return OS.DataTypes.LongInteger.defaultValue;
}, true), 
this.attr("Loginid", "loginidAttr", "loginid", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Currency", "currencyAttr", "currency", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Balance", "balanceAttr", "balance", false, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true)
].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
}

}

tradershubModel.ST_dda3674fb618c7350645a460f303a303Structure = ST_dda3674fb618c7350645a460f303a303StructureInner;

var ST_dda3674fb618c7350645a460f303a303Structure = ST_dda3674fb618c7350645a460f303a303StructureInner;
ST_dda3674fb618c7350645a460f303a303Structure.init();
}
});

define("tradershub.model$RL_5efabb620fce6e69244e61944ef4417d", ["exports", "@outsystems/runtime-core-js", "tradershub.model", "tradershub.model$ST_dda3674fb618c7350645a460f303a303Structure"], function (exports, OSRuntimeCore, tradershubModel) {
var OS = OSRuntimeCore;
class RL_5efabb620fce6e69244e61944ef4417d extends 
OS.DataTypes.GenericRecordList {
static getItemType() {
return tradershubModel.ST_dda3674fb618c7350645a460f303a303Structure;
}

}

tradershubModel.RL_5efabb620fce6e69244e61944ef4417d = RL_5efabb620fce6e69244e61944ef4417d;

});

define("tradershub.model$RL_5f1eb42ec5e25a70109aeb71587a7f0b", ["exports", "@outsystems/runtime-core-js", "OutSystemsUI.model", "tradershub.model", "OutSystemsUI.model$ST_b96c67f06fdfae580256b7081d85460dStructure", "tradershub.referencesHealth", "tradershub.referencesHealth$OutSystemsUI"], function (exports, OSRuntimeCore, OutSystemsUIModel, tradershubModel) {
var OS = OSRuntimeCore;
class RL_5f1eb42ec5e25a70109aeb71587a7f0b extends 
OS.DataTypes.GenericRecordList {
static getItemType() {
return OutSystemsUIModel.ST_b96c67f06fdfae580256b7081d85460dStructure;
}

}

tradershubModel.RL_5f1eb42ec5e25a70109aeb71587a7f0b = RL_5f1eb42ec5e25a70109aeb71587a7f0b;

});

define("tradershub.model$RL_5f96baf85bbca68a104650af9c95a482", ["exports", "@outsystems/runtime-core-js", "RESTAPIWebsocket.model", "tradershub.model", "RESTAPIWebsocket.model$ST_450f06937a42e6bd68832beac9fd4297Structure", "tradershub.referencesHealth", "tradershub.referencesHealth$RESTAPIWebsocket"], function (exports, OSRuntimeCore, RESTAPIWebsocketModel, tradershubModel) {
var OS = OSRuntimeCore;
class RL_5f96baf85bbca68a104650af9c95a482 extends 
OS.DataTypes.GenericRecordList {
static getItemType() {
return RESTAPIWebsocketModel.ST_450f06937a42e6bd68832beac9fd4297Structure;
}

}

tradershubModel.RL_5f96baf85bbca68a104650af9c95a482 = RL_5f96baf85bbca68a104650af9c95a482;

});

define("tradershub.model$RL_617ce086b197e1cd7e2af2a1c0d1c20b", ["exports", "@outsystems/runtime-core-js", "RESTAPIWebsocket.model", "tradershub.model", "RESTAPIWebsocket.model$ST_ef2ca9573c3bd1e27b35145a902be10bStructure", "tradershub.referencesHealth", "tradershub.referencesHealth$RESTAPIWebsocket"], function (exports, OSRuntimeCore, RESTAPIWebsocketModel, tradershubModel) {
var OS = OSRuntimeCore;
class RL_617ce086b197e1cd7e2af2a1c0d1c20b extends 
OS.DataTypes.GenericRecordList {
static getItemType() {
return RESTAPIWebsocketModel.ST_ef2ca9573c3bd1e27b35145a902be10bStructure;
}

}

tradershubModel.RL_617ce086b197e1cd7e2af2a1c0d1c20b = RL_617ce086b197e1cd7e2af2a1c0d1c20b;

});

define("tradershub.model$RC_61df84f9969928991e575f5d3cdeb6cf", ["exports", "@outsystems/runtime-core-js", "RESTAPIWebsocket.model", "tradershub.model", "RESTAPIWebsocket.model$ST_123df4fc5615aac2800d1fa4847bc440Structure", "tradershub.referencesHealth", "tradershub.referencesHealth$RESTAPIWebsocket"], function (exports, OSRuntimeCore, RESTAPIWebsocketModel, tradershubModel) {
var OS = OSRuntimeCore;
{class RC_61df84f9969928991e575f5d3cdeb6cfInner extends 
OS.DataTypes.GenericRecord {
static attributesToDeclare() {
return [
this.attr("Local_currency", "local_currencyAttr", "Local_currency2", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new RESTAPIWebsocketModel.ST_123df4fc5615aac2800d1fa4847bc440Structure());
}, true, RESTAPIWebsocketModel.ST_123df4fc5615aac2800d1fa4847bc440Structure)
].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
}

static fromStructure(str) {
return new RC_61df84f9969928991e575f5d3cdeb6cf(new RC_61df84f9969928991e575f5d3cdeb6cf.RecordClass({
local_currencyAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
}

}

tradershubModel.RC_61df84f9969928991e575f5d3cdeb6cf = RC_61df84f9969928991e575f5d3cdeb6cfInner;

RC_61df84f9969928991e575f5d3cdeb6cfInner._isAnonymousRecord = true;
RC_61df84f9969928991e575f5d3cdeb6cfInner.UniqueId = "61df84f9-9699-2899-1e57-5f5d3cdeb6cf";
var RC_61df84f9969928991e575f5d3cdeb6cf = RC_61df84f9969928991e575f5d3cdeb6cfInner;
RC_61df84f9969928991e575f5d3cdeb6cf.init();
}
});

define("tradershub.model$RC_623a04a7e1c688b7ec133f2b7ca28f8e", ["exports", "@outsystems/runtime-core-js", "RESTAPIWebsocket.model", "tradershub.model", "RESTAPIWebsocket.model$ST_96047f3e265fbed2401212ad81dfa1f4Structure", "tradershub.referencesHealth", "tradershub.referencesHealth$RESTAPIWebsocket"], function (exports, OSRuntimeCore, RESTAPIWebsocketModel, tradershubModel) {
var OS = OSRuntimeCore;
{class RC_623a04a7e1c688b7ec133f2b7ca28f8eInner extends 
OS.DataTypes.GenericRecord {
static attributesToDeclare() {
return [
this.attr("Echo_req", "echo_reqAttr", "Echo_req5", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new RESTAPIWebsocketModel.ST_96047f3e265fbed2401212ad81dfa1f4Structure());
}, true, RESTAPIWebsocketModel.ST_96047f3e265fbed2401212ad81dfa1f4Structure)
].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
}

static fromStructure(str) {
return new RC_623a04a7e1c688b7ec133f2b7ca28f8e(new RC_623a04a7e1c688b7ec133f2b7ca28f8e.RecordClass({
echo_reqAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
}

}

tradershubModel.RC_623a04a7e1c688b7ec133f2b7ca28f8e = RC_623a04a7e1c688b7ec133f2b7ca28f8eInner;

RC_623a04a7e1c688b7ec133f2b7ca28f8eInner._isAnonymousRecord = true;
RC_623a04a7e1c688b7ec133f2b7ca28f8eInner.UniqueId = "623a04a7-e1c6-88b7-ec13-3f2b7ca28f8e";
var RC_623a04a7e1c688b7ec133f2b7ca28f8e = RC_623a04a7e1c688b7ec133f2b7ca28f8eInner;
RC_623a04a7e1c688b7ec133f2b7ca28f8e.init();
}
});

define("tradershub.model$RL_624b2d57a77bb97d27ae6a8a9d8e8ee6", ["exports", "@outsystems/runtime-core-js", "tradershub.model", "tradershub.model$RC_3d151c63adf137bd3c85eaa462bbbe0c"], function (exports, OSRuntimeCore, tradershubModel) {
var OS = OSRuntimeCore;
class RL_624b2d57a77bb97d27ae6a8a9d8e8ee6 extends 
OS.DataTypes.GenericRecordList {
static getItemType() {
return tradershubModel.RC_3d151c63adf137bd3c85eaa462bbbe0c;
}

}

tradershubModel.RL_624b2d57a77bb97d27ae6a8a9d8e8ee6 = RL_624b2d57a77bb97d27ae6a8a9d8e8ee6;

});

define("tradershub.model$RL_62db41b41dbf507c50e0bafe4d455ef4", ["exports", "@outsystems/runtime-core-js", "tradershub.model", "tradershub.model$RC_03619642a06de09478f0b8f506c364eb"], function (exports, OSRuntimeCore, tradershubModel) {
var OS = OSRuntimeCore;
class RL_62db41b41dbf507c50e0bafe4d455ef4 extends 
OS.DataTypes.GenericRecordList {
static getItemType() {
return tradershubModel.RC_03619642a06de09478f0b8f506c364eb;
}

}

tradershubModel.RL_62db41b41dbf507c50e0bafe4d455ef4 = RL_62db41b41dbf507c50e0bafe4d455ef4;

});

define("tradershub.model$RL_641ffd2e0663341a460be77463e186bb", ["exports", "@outsystems/runtime-core-js", "OutSystemsMaps.model", "tradershub.model", "OutSystemsMaps.model$ST_b2c05afcf4810ad0d4384a01306bb0f3Structure", "tradershub.referencesHealth", "tradershub.referencesHealth$OutSystemsMaps"], function (exports, OSRuntimeCore, OutSystemsMapsModel, tradershubModel) {
var OS = OSRuntimeCore;
class RL_641ffd2e0663341a460be77463e186bb extends 
OS.DataTypes.GenericRecordList {
static getItemType() {
return OutSystemsMapsModel.ST_b2c05afcf4810ad0d4384a01306bb0f3Structure;
}

}

tradershubModel.RL_641ffd2e0663341a460be77463e186bb = RL_641ffd2e0663341a460be77463e186bb;

});

define("tradershub.model$RC_646e6c02297b69c2ac8936bd87cff545", ["exports", "@outsystems/runtime-core-js", "OutSystemsUI.model", "tradershub.model", "OutSystemsUI.model$ST_eb161a8909408fbd30eac1833398f018Structure", "tradershub.referencesHealth", "tradershub.referencesHealth$OutSystemsUI"], function (exports, OSRuntimeCore, OutSystemsUIModel, tradershubModel) {
var OS = OSRuntimeCore;
{class RC_646e6c02297b69c2ac8936bd87cff545Inner extends 
OS.DataTypes.GenericRecord {
static attributesToDeclare() {
return [
this.attr("ProgressCircleOptionalConfigs", "progressCircleOptionalConfigsAttr", "ProgressCircleOptionalConfigs", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new OutSystemsUIModel.ST_eb161a8909408fbd30eac1833398f018Structure());
}, true, OutSystemsUIModel.ST_eb161a8909408fbd30eac1833398f018Structure)
].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
}

static fromStructure(str) {
return new RC_646e6c02297b69c2ac8936bd87cff545(new RC_646e6c02297b69c2ac8936bd87cff545.RecordClass({
progressCircleOptionalConfigsAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
}

}

tradershubModel.RC_646e6c02297b69c2ac8936bd87cff545 = RC_646e6c02297b69c2ac8936bd87cff545Inner;

RC_646e6c02297b69c2ac8936bd87cff545Inner._isAnonymousRecord = true;
RC_646e6c02297b69c2ac8936bd87cff545Inner.UniqueId = "646e6c02-297b-69c2-ac89-36bd87cff545";
var RC_646e6c02297b69c2ac8936bd87cff545 = RC_646e6c02297b69c2ac8936bd87cff545Inner;
RC_646e6c02297b69c2ac8936bd87cff545.init();
}
});

define("tradershub.model$RL_65125be14dfacc3673d277ed0ec6faeb", ["exports", "@outsystems/runtime-core-js", "tradershub.model", "tradershub.model$ST_c9321e98763823c3fe8b25101ee9afbdStructure"], function (exports, OSRuntimeCore, tradershubModel) {
var OS = OSRuntimeCore;
class RL_65125be14dfacc3673d277ed0ec6faeb extends 
OS.DataTypes.GenericRecordList {
static getItemType() {
return tradershubModel.ST_c9321e98763823c3fe8b25101ee9afbdStructure;
}

}

tradershubModel.RL_65125be14dfacc3673d277ed0ec6faeb = RL_65125be14dfacc3673d277ed0ec6faeb;

});

define("tradershub.model$RC_ab84a98a3ac9de80e9278e5b21681a23", ["exports", "@outsystems/runtime-core-js", "OutSystemsUI.model", "tradershub.model", "OutSystemsUI.model$EN_52e55d60c515b6016f81404afb220594EntityRecord", "tradershub.referencesHealth", "tradershub.referencesHealth$OutSystemsUI"], function (exports, OSRuntimeCore, OutSystemsUIModel, tradershubModel) {
var OS = OSRuntimeCore;
{class RC_ab84a98a3ac9de80e9278e5b21681a23Inner extends 
OS.DataTypes.GenericRecord {
static attributesToDeclare() {
return [
this.attr("Trigger", "triggerAttr", "Trigger", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new OutSystemsUIModel.EN_52e55d60c515b6016f81404afb220594EntityRecord());
}, true, OutSystemsUIModel.EN_52e55d60c515b6016f81404afb220594EntityRecord)
].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
}

static fromStructure(str) {
return new RC_ab84a98a3ac9de80e9278e5b21681a23(new RC_ab84a98a3ac9de80e9278e5b21681a23.RecordClass({
triggerAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
}

}

tradershubModel.RC_ab84a98a3ac9de80e9278e5b21681a23 = RC_ab84a98a3ac9de80e9278e5b21681a23Inner;

RC_ab84a98a3ac9de80e9278e5b21681a23Inner._isAnonymousRecord = true;
RC_ab84a98a3ac9de80e9278e5b21681a23Inner.UniqueId = "ab84a98a-3ac9-de80-e927-8e5b21681a23";
var RC_ab84a98a3ac9de80e9278e5b21681a23 = RC_ab84a98a3ac9de80e9278e5b21681a23Inner;
RC_ab84a98a3ac9de80e9278e5b21681a23.init();
}
});

define("tradershub.model$RL_6534465d8eaff1ed770420b9742876dc", ["exports", "@outsystems/runtime-core-js", "tradershub.model", "tradershub.model$RC_ab84a98a3ac9de80e9278e5b21681a23"], function (exports, OSRuntimeCore, tradershubModel) {
var OS = OSRuntimeCore;
class RL_6534465d8eaff1ed770420b9742876dc extends 
OS.DataTypes.GenericRecordList {
static getItemType() {
return tradershubModel.RC_ab84a98a3ac9de80e9278e5b21681a23;
}

}

tradershubModel.RL_6534465d8eaff1ed770420b9742876dc = RL_6534465d8eaff1ed770420b9742876dc;

});

define("tradershub.model$RL_65b4601c7246ad02da4e6c18fe619d03", ["exports", "@outsystems/runtime-core-js", "OutSystemsUI.model", "tradershub.model", "OutSystemsUI.model$EN_f0a0dc1163bf03e1d7bb0d253808f956EntityRecord", "tradershub.referencesHealth", "tradershub.referencesHealth$OutSystemsUI"], function (exports, OSRuntimeCore, OutSystemsUIModel, tradershubModel) {
var OS = OSRuntimeCore;
class RL_65b4601c7246ad02da4e6c18fe619d03 extends 
OS.DataTypes.GenericRecordList {
static getItemType() {
return OutSystemsUIModel.EN_f0a0dc1163bf03e1d7bb0d253808f956EntityRecord;
}

}

tradershubModel.RL_65b4601c7246ad02da4e6c18fe619d03 = RL_65b4601c7246ad02da4e6c18fe619d03;

});

define("tradershub.model$RC_e3eb18969a1d0856d6aa6db7946dac4d", ["exports", "@outsystems/runtime-core-js", "OutSystemsCharts.model", "tradershub.model", "OutSystemsCharts.model$ST_8ceac0b3cf282b6c0c3a95ffb4156762Structure", "tradershub.referencesHealth", "tradershub.referencesHealth$OutSystemsCharts"], function (exports, OSRuntimeCore, OutSystemsChartsModel, tradershubModel) {
var OS = OSRuntimeCore;
{class RC_e3eb18969a1d0856d6aa6db7946dac4dInner extends 
OS.DataTypes.GenericRecord {
static attributesToDeclare() {
return [
this.attr("Legacy_AdvancedDataSeriesFormat", "legacy_AdvancedDataSeriesFormatAttr", "Legacy_AdvancedDataSeriesFormat", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new OutSystemsChartsModel.ST_8ceac0b3cf282b6c0c3a95ffb4156762Structure());
}, true, OutSystemsChartsModel.ST_8ceac0b3cf282b6c0c3a95ffb4156762Structure)
].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
}

static fromStructure(str) {
return new RC_e3eb18969a1d0856d6aa6db7946dac4d(new RC_e3eb18969a1d0856d6aa6db7946dac4d.RecordClass({
legacy_AdvancedDataSeriesFormatAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
}

}

tradershubModel.RC_e3eb18969a1d0856d6aa6db7946dac4d = RC_e3eb18969a1d0856d6aa6db7946dac4dInner;

RC_e3eb18969a1d0856d6aa6db7946dac4dInner._isAnonymousRecord = true;
RC_e3eb18969a1d0856d6aa6db7946dac4dInner.UniqueId = "e3eb1896-9a1d-0856-d6aa-6db7946dac4d";
var RC_e3eb18969a1d0856d6aa6db7946dac4d = RC_e3eb18969a1d0856d6aa6db7946dac4dInner;
RC_e3eb18969a1d0856d6aa6db7946dac4d.init();
}
});

define("tradershub.model$RL_65d3df966a7e3cf88a00a473fc2b09d2", ["exports", "@outsystems/runtime-core-js", "tradershub.model", "tradershub.model$RC_e3eb18969a1d0856d6aa6db7946dac4d"], function (exports, OSRuntimeCore, tradershubModel) {
var OS = OSRuntimeCore;
class RL_65d3df966a7e3cf88a00a473fc2b09d2 extends 
OS.DataTypes.GenericRecordList {
static getItemType() {
return tradershubModel.RC_e3eb18969a1d0856d6aa6db7946dac4d;
}

}

tradershubModel.RL_65d3df966a7e3cf88a00a473fc2b09d2 = RL_65d3df966a7e3cf88a00a473fc2b09d2;

});

define("tradershub.model$RL_66079fd510547022662fad21af9161f1", ["exports", "@outsystems/runtime-core-js", "RESTAPIWebsocket.model", "tradershub.model", "RESTAPIWebsocket.model$ST_96047f3e265fbed2401212ad81dfa1f4Structure", "tradershub.referencesHealth", "tradershub.referencesHealth$RESTAPIWebsocket"], function (exports, OSRuntimeCore, RESTAPIWebsocketModel, tradershubModel) {
var OS = OSRuntimeCore;
class RL_66079fd510547022662fad21af9161f1 extends 
OS.DataTypes.GenericRecordList {
static getItemType() {
return RESTAPIWebsocketModel.ST_96047f3e265fbed2401212ad81dfa1f4Structure;
}

}

tradershubModel.RL_66079fd510547022662fad21af9161f1 = RL_66079fd510547022662fad21af9161f1;

});

define("tradershub.model$RC_f481c39b6dc571441408fc418f17e793", ["exports", "@outsystems/runtime-core-js", "RESTAPIWebsocket.model", "tradershub.model", "RESTAPIWebsocket.model$ST_02211ece4f8ea033ae9a7fa2710f4a32Structure", "tradershub.referencesHealth", "tradershub.referencesHealth$RESTAPIWebsocket"], function (exports, OSRuntimeCore, RESTAPIWebsocketModel, tradershubModel) {
var OS = OSRuntimeCore;
{class RC_f481c39b6dc571441408fc418f17e793Inner extends 
OS.DataTypes.GenericRecord {
static attributesToDeclare() {
return [
this.attr("Account_listItem", "account_listItemAttr", "Account_listItem2", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new RESTAPIWebsocketModel.ST_02211ece4f8ea033ae9a7fa2710f4a32Structure());
}, true, RESTAPIWebsocketModel.ST_02211ece4f8ea033ae9a7fa2710f4a32Structure)
].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
}

static fromStructure(str) {
return new RC_f481c39b6dc571441408fc418f17e793(new RC_f481c39b6dc571441408fc418f17e793.RecordClass({
account_listItemAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
}

}

tradershubModel.RC_f481c39b6dc571441408fc418f17e793 = RC_f481c39b6dc571441408fc418f17e793Inner;

RC_f481c39b6dc571441408fc418f17e793Inner._isAnonymousRecord = true;
RC_f481c39b6dc571441408fc418f17e793Inner.UniqueId = "f481c39b-6dc5-7144-1408-fc418f17e793";
var RC_f481c39b6dc571441408fc418f17e793 = RC_f481c39b6dc571441408fc418f17e793Inner;
RC_f481c39b6dc571441408fc418f17e793.init();
}
});

define("tradershub.model$RL_6611d2d9fcbfcbfe8fb57800c9eecc82", ["exports", "@outsystems/runtime-core-js", "tradershub.model", "tradershub.model$RC_f481c39b6dc571441408fc418f17e793"], function (exports, OSRuntimeCore, tradershubModel) {
var OS = OSRuntimeCore;
class RL_6611d2d9fcbfcbfe8fb57800c9eecc82 extends 
OS.DataTypes.GenericRecordList {
static getItemType() {
return tradershubModel.RC_f481c39b6dc571441408fc418f17e793;
}

}

tradershubModel.RL_6611d2d9fcbfcbfe8fb57800c9eecc82 = RL_6611d2d9fcbfcbfe8fb57800c9eecc82;

});

define("tradershub.model$RL_66160a2e5cc53b94efc2c2913e63e762", ["exports", "@outsystems/runtime-core-js", "tradershub.model", "tradershub.model$EN_9d52f6675871967e9e0ef6c13fcbd1bfEntityRecord"], function (exports, OSRuntimeCore, tradershubModel) {
var OS = OSRuntimeCore;
class RL_66160a2e5cc53b94efc2c2913e63e762 extends 
OS.DataTypes.GenericRecordList {
static getItemType() {
return tradershubModel.EN_9d52f6675871967e9e0ef6c13fcbd1bfEntityRecord;
}

}

tradershubModel.RL_66160a2e5cc53b94efc2c2913e63e762 = RL_66160a2e5cc53b94efc2c2913e63e762;

});

define("tradershub.model$RL_662f9a01faab4debe4196401f9ed4c71", ["exports", "@outsystems/runtime-core-js", "tradershub.model", "tradershub.model$RC_310dae2b4d3a1f1ded7570a6ee74f16e"], function (exports, OSRuntimeCore, tradershubModel) {
var OS = OSRuntimeCore;
class RL_662f9a01faab4debe4196401f9ed4c71 extends 
OS.DataTypes.GenericRecordList {
static getItemType() {
return tradershubModel.RC_310dae2b4d3a1f1ded7570a6ee74f16e;
}

}

tradershubModel.RL_662f9a01faab4debe4196401f9ed4c71 = RL_662f9a01faab4debe4196401f9ed4c71;

});

define("tradershub.model$RC_66d065f1d61691db9174cf436432750f", ["exports", "@outsystems/runtime-core-js", "tradershub.model", "tradershub.model$ST_d48988cf8eae8d40a2245d672da18414Structure"], function (exports, OSRuntimeCore, tradershubModel) {
var OS = OSRuntimeCore;
{class RC_66d065f1d61691db9174cf436432750fInner extends 
OS.DataTypes.GenericRecord {
static attributesToDeclare() {
return [
this.attr("Transfer_between_account", "transfer_between_accountAttr", "Transfer_between_account", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new tradershubModel.ST_d48988cf8eae8d40a2245d672da18414Structure());
}, true, tradershubModel.ST_d48988cf8eae8d40a2245d672da18414Structure)
].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
}

static fromStructure(str) {
return new RC_66d065f1d61691db9174cf436432750f(new RC_66d065f1d61691db9174cf436432750f.RecordClass({
transfer_between_accountAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
}

}

tradershubModel.RC_66d065f1d61691db9174cf436432750f = RC_66d065f1d61691db9174cf436432750fInner;

RC_66d065f1d61691db9174cf436432750fInner._isAnonymousRecord = true;
RC_66d065f1d61691db9174cf436432750fInner.UniqueId = "66d065f1-d616-91db-9174-cf436432750f";
var RC_66d065f1d61691db9174cf436432750f = RC_66d065f1d61691db9174cf436432750fInner;
RC_66d065f1d61691db9174cf436432750f.init();
}
});

define("tradershub.model$RL_67211e5ef9090bf1006a3e1da6767024", ["exports", "@outsystems/runtime-core-js", "OutSystemsUI.model", "tradershub.model", "OutSystemsUI.model$EN_182bd2d69e3f1edb7f1fb76efcbcae87EntityRecord", "tradershub.referencesHealth", "tradershub.referencesHealth$OutSystemsUI"], function (exports, OSRuntimeCore, OutSystemsUIModel, tradershubModel) {
var OS = OSRuntimeCore;
class RL_67211e5ef9090bf1006a3e1da6767024 extends 
OS.DataTypes.GenericRecordList {
static getItemType() {
return OutSystemsUIModel.EN_182bd2d69e3f1edb7f1fb76efcbcae87EntityRecord;
}

}

tradershubModel.RL_67211e5ef9090bf1006a3e1da6767024 = RL_67211e5ef9090bf1006a3e1da6767024;

});

define("tradershub.model$RC_673cc0a63dbc3f5836f7732ba0712544", ["exports", "@outsystems/runtime-core-js", "OutSystemsUI.model", "tradershub.model", "OutSystemsUI.model$EN_ac6f62956e278d5390a5f27c607338d0EntityRecord", "tradershub.referencesHealth", "tradershub.referencesHealth$OutSystemsUI"], function (exports, OSRuntimeCore, OutSystemsUIModel, tradershubModel) {
var OS = OSRuntimeCore;
{class RC_673cc0a63dbc3f5836f7732ba0712544Inner extends 
OS.DataTypes.GenericRecord {
static attributesToDeclare() {
return [
this.attr("DatePickerLanguage", "datePickerLanguageAttr", "DatePickerLanguage", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new OutSystemsUIModel.EN_ac6f62956e278d5390a5f27c607338d0EntityRecord());
}, true, OutSystemsUIModel.EN_ac6f62956e278d5390a5f27c607338d0EntityRecord)
].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
}

static fromStructure(str) {
return new RC_673cc0a63dbc3f5836f7732ba0712544(new RC_673cc0a63dbc3f5836f7732ba0712544.RecordClass({
datePickerLanguageAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
}

}

tradershubModel.RC_673cc0a63dbc3f5836f7732ba0712544 = RC_673cc0a63dbc3f5836f7732ba0712544Inner;

RC_673cc0a63dbc3f5836f7732ba0712544Inner._isAnonymousRecord = true;
RC_673cc0a63dbc3f5836f7732ba0712544Inner.UniqueId = "673cc0a6-3dbc-3f58-36f7-732ba0712544";
var RC_673cc0a63dbc3f5836f7732ba0712544 = RC_673cc0a63dbc3f5836f7732ba0712544Inner;
RC_673cc0a63dbc3f5836f7732ba0712544.init();
}
});

define("tradershub.model$RC_fb91f9eab17d134884b2213f47fb4a68", ["exports", "@outsystems/runtime-core-js", "RESTAPIWebsocket.model", "tradershub.model", "RESTAPIWebsocket.model$ST_9adaf3e13b31a4c3f4ee4c0b223b00bcStructure", "tradershub.referencesHealth", "tradershub.referencesHealth$RESTAPIWebsocket"], function (exports, OSRuntimeCore, RESTAPIWebsocketModel, tradershubModel) {
var OS = OSRuntimeCore;
{class RC_fb91f9eab17d134884b2213f47fb4a68Inner extends 
OS.DataTypes.GenericRecord {
static attributesToDeclare() {
return [
this.attr("All", "allAttr", "All", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new RESTAPIWebsocketModel.ST_9adaf3e13b31a4c3f4ee4c0b223b00bcStructure());
}, true, RESTAPIWebsocketModel.ST_9adaf3e13b31a4c3f4ee4c0b223b00bcStructure)
].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
}

static fromStructure(str) {
return new RC_fb91f9eab17d134884b2213f47fb4a68(new RC_fb91f9eab17d134884b2213f47fb4a68.RecordClass({
allAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
}

}

tradershubModel.RC_fb91f9eab17d134884b2213f47fb4a68 = RC_fb91f9eab17d134884b2213f47fb4a68Inner;

RC_fb91f9eab17d134884b2213f47fb4a68Inner._isAnonymousRecord = true;
RC_fb91f9eab17d134884b2213f47fb4a68Inner.UniqueId = "fb91f9ea-b17d-1348-84b2-213f47fb4a68";
var RC_fb91f9eab17d134884b2213f47fb4a68 = RC_fb91f9eab17d134884b2213f47fb4a68Inner;
RC_fb91f9eab17d134884b2213f47fb4a68.init();
}
});

define("tradershub.model$RL_6742097cd0e1b80b9f740ab5594fc0b1", ["exports", "@outsystems/runtime-core-js", "tradershub.model", "tradershub.model$RC_fb91f9eab17d134884b2213f47fb4a68"], function (exports, OSRuntimeCore, tradershubModel) {
var OS = OSRuntimeCore;
class RL_6742097cd0e1b80b9f740ab5594fc0b1 extends 
OS.DataTypes.GenericRecordList {
static getItemType() {
return tradershubModel.RC_fb91f9eab17d134884b2213f47fb4a68;
}

}

tradershubModel.RL_6742097cd0e1b80b9f740ab5594fc0b1 = RL_6742097cd0e1b80b9f740ab5594fc0b1;

});

define("tradershub.model$RL_6753b1849ff4bc19e62c553317f17751", ["exports", "@outsystems/runtime-core-js", "tradershub.model", "tradershub.model$RC_0a89eeb60fa1f44b6316ca69b462007b"], function (exports, OSRuntimeCore, tradershubModel) {
var OS = OSRuntimeCore;
class RL_6753b1849ff4bc19e62c553317f17751 extends 
OS.DataTypes.GenericRecordList {
static getItemType() {
return tradershubModel.RC_0a89eeb60fa1f44b6316ca69b462007b;
}

}

tradershubModel.RL_6753b1849ff4bc19e62c553317f17751 = RL_6753b1849ff4bc19e62c553317f17751;

});

define("tradershub.model$RL_6821444cee9a405e385950ad5e787e6a", ["exports", "@outsystems/runtime-core-js", "tradershub.model", "tradershub.model$ST_0690f5116aa54a9a733230ed909c87fbStructure"], function (exports, OSRuntimeCore, tradershubModel) {
var OS = OSRuntimeCore;
class RL_6821444cee9a405e385950ad5e787e6a extends 
OS.DataTypes.GenericRecordList {
static getItemType() {
return tradershubModel.ST_0690f5116aa54a9a733230ed909c87fbStructure;
}

}

tradershubModel.RL_6821444cee9a405e385950ad5e787e6a = RL_6821444cee9a405e385950ad5e787e6a;

});

define("tradershub.model$RL_68be9dd68c0e161ac2c65c1092c999e6", ["exports", "@outsystems/runtime-core-js", "System_.model", "tradershub.model", "System_.model$FinishResetPasswordResultRec", "tradershub.referencesHealth", "tradershub.referencesHealth$System_"], function (exports, OSRuntimeCore, System_Model, tradershubModel) {
var OS = OSRuntimeCore;
class RL_68be9dd68c0e161ac2c65c1092c999e6 extends 
OS.DataTypes.GenericRecordList {
static getItemType() {
return OS.SystemStructures.FinishResetPasswordResultRec;
}

}

tradershubModel.RL_68be9dd68c0e161ac2c65c1092c999e6 = RL_68be9dd68c0e161ac2c65c1092c999e6;

});

define("tradershub.model$RL_6a534bbcb28aa4f96e8b5853e0208016", ["exports", "@outsystems/runtime-core-js", "RESTAPIWebsocket.model", "tradershub.model", "RESTAPIWebsocket.model$ST_8ddbf1b6e2eccc5a160b5fab6b9b9b86Structure", "tradershub.referencesHealth", "tradershub.referencesHealth$RESTAPIWebsocket"], function (exports, OSRuntimeCore, RESTAPIWebsocketModel, tradershubModel) {
var OS = OSRuntimeCore;
class RL_6a534bbcb28aa4f96e8b5853e0208016 extends 
OS.DataTypes.GenericRecordList {
static getItemType() {
return RESTAPIWebsocketModel.ST_8ddbf1b6e2eccc5a160b5fab6b9b9b86Structure;
}

}

tradershubModel.RL_6a534bbcb28aa4f96e8b5853e0208016 = RL_6a534bbcb28aa4f96e8b5853e0208016;

});

define("tradershub.model$RL_6c06f81aeda50ab8c2d5788ceef7d4fc", ["exports", "@outsystems/runtime-core-js", "RESTAPIWebsocket.model", "tradershub.model", "RESTAPIWebsocket.model$ST_60a5d7a279694c475c6cf2585b652410Structure", "tradershub.referencesHealth", "tradershub.referencesHealth$RESTAPIWebsocket"], function (exports, OSRuntimeCore, RESTAPIWebsocketModel, tradershubModel) {
var OS = OSRuntimeCore;
class RL_6c06f81aeda50ab8c2d5788ceef7d4fc extends 
OS.DataTypes.GenericRecordList {
static getItemType() {
return RESTAPIWebsocketModel.ST_60a5d7a279694c475c6cf2585b652410Structure;
}

}

tradershubModel.RL_6c06f81aeda50ab8c2d5788ceef7d4fc = RL_6c06f81aeda50ab8c2d5788ceef7d4fc;

});

define("tradershub.model$RC_6ceb0a54ddbc92446ab66e8c847870c1", ["exports", "@outsystems/runtime-core-js", "OutSystemsCharts.model", "tradershub.model", "OutSystemsCharts.model$ST_9498db02a236485a96a27db0bd61b81eStructure", "tradershub.referencesHealth", "tradershub.referencesHealth$OutSystemsCharts"], function (exports, OSRuntimeCore, OutSystemsChartsModel, tradershubModel) {
var OS = OSRuntimeCore;
{class RC_6ceb0a54ddbc92446ab66e8c847870c1Inner extends 
OS.DataTypes.GenericRecord {
static attributesToDeclare() {
return [
this.attr("Legacy_DataPoint", "legacy_DataPointAttr", "Legacy_DataPoint", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new OutSystemsChartsModel.ST_9498db02a236485a96a27db0bd61b81eStructure());
}, true, OutSystemsChartsModel.ST_9498db02a236485a96a27db0bd61b81eStructure)
].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
}

static fromStructure(str) {
return new RC_6ceb0a54ddbc92446ab66e8c847870c1(new RC_6ceb0a54ddbc92446ab66e8c847870c1.RecordClass({
legacy_DataPointAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
}

}

tradershubModel.RC_6ceb0a54ddbc92446ab66e8c847870c1 = RC_6ceb0a54ddbc92446ab66e8c847870c1Inner;

RC_6ceb0a54ddbc92446ab66e8c847870c1Inner._isAnonymousRecord = true;
RC_6ceb0a54ddbc92446ab66e8c847870c1Inner.UniqueId = "6ceb0a54-ddbc-9244-6ab6-6e8c847870c1";
var RC_6ceb0a54ddbc92446ab66e8c847870c1 = RC_6ceb0a54ddbc92446ab66e8c847870c1Inner;
RC_6ceb0a54ddbc92446ab66e8c847870c1.init();
}
});

define("tradershub.model$RL_6d35299704f3eec23ed812a5a367da37", ["exports", "@outsystems/runtime-core-js", "RESTAPIWebsocket.model", "tradershub.model", "RESTAPIWebsocket.model$ST_94d54d268b2cff4f4ed014a5df48da20Structure", "tradershub.referencesHealth", "tradershub.referencesHealth$RESTAPIWebsocket"], function (exports, OSRuntimeCore, RESTAPIWebsocketModel, tradershubModel) {
var OS = OSRuntimeCore;
class RL_6d35299704f3eec23ed812a5a367da37 extends 
OS.DataTypes.GenericRecordList {
static getItemType() {
return RESTAPIWebsocketModel.ST_94d54d268b2cff4f4ed014a5df48da20Structure;
}

}

tradershubModel.RL_6d35299704f3eec23ed812a5a367da37 = RL_6d35299704f3eec23ed812a5a367da37;

});

define("tradershub.model$RL_6d7013ea27cc1b7ceda40a17d3205e61", ["exports", "@outsystems/runtime-core-js", "tradershub.model", "tradershub.model$ST_c9354c8209eb9723d55bc21a92e84a3aStructure"], function (exports, OSRuntimeCore, tradershubModel) {
var OS = OSRuntimeCore;
class RL_6d7013ea27cc1b7ceda40a17d3205e61 extends 
OS.DataTypes.GenericRecordList {
static getItemType() {
return tradershubModel.ST_c9354c8209eb9723d55bc21a92e84a3aStructure;
}

}

tradershubModel.RL_6d7013ea27cc1b7ceda40a17d3205e61 = RL_6d7013ea27cc1b7ceda40a17d3205e61;

});

define("tradershub.model$RL_6ded88896f4420155f9228fa8926d25d", ["exports", "@outsystems/runtime-core-js", "tradershub.model", "tradershub.model$RC_30f7e77f4f85f62f55a749d558899db1"], function (exports, OSRuntimeCore, tradershubModel) {
var OS = OSRuntimeCore;
class RL_6ded88896f4420155f9228fa8926d25d extends 
OS.DataTypes.GenericRecordList {
static getItemType() {
return tradershubModel.RC_30f7e77f4f85f62f55a749d558899db1;
}

}

tradershubModel.RL_6ded88896f4420155f9228fa8926d25d = RL_6ded88896f4420155f9228fa8926d25d;

});

define("tradershub.model$RC_6e1f0438d22a91c1efeed32ff818a6bb", ["exports", "@outsystems/runtime-core-js", "RESTAPIWebsocket.model", "tradershub.model", "RESTAPIWebsocket.model$ST_c47fcfd4aa43719d828b02ded1b0fea1Structure", "tradershub.referencesHealth", "tradershub.referencesHealth$RESTAPIWebsocket"], function (exports, OSRuntimeCore, RESTAPIWebsocketModel, tradershubModel) {
var OS = OSRuntimeCore;
{class RC_6e1f0438d22a91c1efeed32ff818a6bbInner extends 
OS.DataTypes.GenericRecord {
static attributesToDeclare() {
return [
this.attr("Requirement2", "requirement2Attr", "Requirement2", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new RESTAPIWebsocketModel.ST_c47fcfd4aa43719d828b02ded1b0fea1Structure());
}, true, RESTAPIWebsocketModel.ST_c47fcfd4aa43719d828b02ded1b0fea1Structure)
].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
}

static fromStructure(str) {
return new RC_6e1f0438d22a91c1efeed32ff818a6bb(new RC_6e1f0438d22a91c1efeed32ff818a6bb.RecordClass({
requirement2Attr: OS.DataTypes.ImmutableBase.getData(str)
}));
}

}

tradershubModel.RC_6e1f0438d22a91c1efeed32ff818a6bb = RC_6e1f0438d22a91c1efeed32ff818a6bbInner;

RC_6e1f0438d22a91c1efeed32ff818a6bbInner._isAnonymousRecord = true;
RC_6e1f0438d22a91c1efeed32ff818a6bbInner.UniqueId = "6e1f0438-d22a-91c1-efee-d32ff818a6bb";
var RC_6e1f0438d22a91c1efeed32ff818a6bb = RC_6e1f0438d22a91c1efeed32ff818a6bbInner;
RC_6e1f0438d22a91c1efeed32ff818a6bb.init();
}
});

define("tradershub.model$RC_abb6a3eba8583e4ab0625de8f38fb719", ["exports", "@outsystems/runtime-core-js", "OutSystemsUI.model", "tradershub.model", "OutSystemsUI.model$ST_0262e6910ebecc922f633b08db78d688Structure", "tradershub.referencesHealth", "tradershub.referencesHealth$OutSystemsUI"], function (exports, OSRuntimeCore, OutSystemsUIModel, tradershubModel) {
var OS = OSRuntimeCore;
{class RC_abb6a3eba8583e4ab0625de8f38fb719Inner extends 
OS.DataTypes.GenericRecord {
static attributesToDeclare() {
return [
this.attr("DeviceConfiguration", "deviceConfigurationAttr", "DeviceConfiguration", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new OutSystemsUIModel.ST_0262e6910ebecc922f633b08db78d688Structure());
}, true, OutSystemsUIModel.ST_0262e6910ebecc922f633b08db78d688Structure)
].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
}

static fromStructure(str) {
return new RC_abb6a3eba8583e4ab0625de8f38fb719(new RC_abb6a3eba8583e4ab0625de8f38fb719.RecordClass({
deviceConfigurationAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
}

}

tradershubModel.RC_abb6a3eba8583e4ab0625de8f38fb719 = RC_abb6a3eba8583e4ab0625de8f38fb719Inner;

RC_abb6a3eba8583e4ab0625de8f38fb719Inner._isAnonymousRecord = true;
RC_abb6a3eba8583e4ab0625de8f38fb719Inner.UniqueId = "abb6a3eb-a858-3e4a-b062-5de8f38fb719";
var RC_abb6a3eba8583e4ab0625de8f38fb719 = RC_abb6a3eba8583e4ab0625de8f38fb719Inner;
RC_abb6a3eba8583e4ab0625de8f38fb719.init();
}
});

define("tradershub.model$RL_703668b187ab39de3436f6485526e12a", ["exports", "@outsystems/runtime-core-js", "tradershub.model", "tradershub.model$RC_abb6a3eba8583e4ab0625de8f38fb719"], function (exports, OSRuntimeCore, tradershubModel) {
var OS = OSRuntimeCore;
class RL_703668b187ab39de3436f6485526e12a extends 
OS.DataTypes.GenericRecordList {
static getItemType() {
return tradershubModel.RC_abb6a3eba8583e4ab0625de8f38fb719;
}

}

tradershubModel.RL_703668b187ab39de3436f6485526e12a = RL_703668b187ab39de3436f6485526e12a;

});

define("tradershub.model$RC_7096ca0099728124fcaff6ac0bf8440c", ["exports", "@outsystems/runtime-core-js", "RESTAPIWebsocket.model", "tradershub.model", "RESTAPIWebsocket.model$ST_6669f981cb8653c55787de44bdd42a18Structure", "tradershub.referencesHealth", "tradershub.referencesHealth$RESTAPIWebsocket"], function (exports, OSRuntimeCore, RESTAPIWebsocketModel, tradershubModel) {
var OS = OSRuntimeCore;
{class RC_7096ca0099728124fcaff6ac0bf8440cInner extends 
OS.DataTypes.GenericRecord {
static attributesToDeclare() {
return [
this.attr("Service", "serviceAttr", "Service3", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new RESTAPIWebsocketModel.ST_6669f981cb8653c55787de44bdd42a18Structure());
}, true, RESTAPIWebsocketModel.ST_6669f981cb8653c55787de44bdd42a18Structure)
].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
}

static fromStructure(str) {
return new RC_7096ca0099728124fcaff6ac0bf8440c(new RC_7096ca0099728124fcaff6ac0bf8440c.RecordClass({
serviceAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
}

}

tradershubModel.RC_7096ca0099728124fcaff6ac0bf8440c = RC_7096ca0099728124fcaff6ac0bf8440cInner;

RC_7096ca0099728124fcaff6ac0bf8440cInner._isAnonymousRecord = true;
RC_7096ca0099728124fcaff6ac0bf8440cInner.UniqueId = "7096ca00-9972-8124-fcaf-f6ac0bf8440c";
var RC_7096ca0099728124fcaff6ac0bf8440c = RC_7096ca0099728124fcaff6ac0bf8440cInner;
RC_7096ca0099728124fcaff6ac0bf8440c.init();
}
});

define("tradershub.model$RL_70e29fe95d27456d444b070b82092073", ["exports", "@outsystems/runtime-core-js", "tradershub.model", "tradershub.model$ST_5ee2e7ff29695cda8882106170100facStructure"], function (exports, OSRuntimeCore, tradershubModel) {
var OS = OSRuntimeCore;
class RL_70e29fe95d27456d444b070b82092073 extends 
OS.DataTypes.GenericRecordList {
static getItemType() {
return tradershubModel.ST_5ee2e7ff29695cda8882106170100facStructure;
}

}

tradershubModel.RL_70e29fe95d27456d444b070b82092073 = RL_70e29fe95d27456d444b070b82092073;

});

define("tradershub.model$RL_714403abfa4324f02871d43c35f1a8c8", ["exports", "@outsystems/runtime-core-js", "tradershub.model", "tradershub.model$ST_9040ff9a31163603cbfef38781e8f440Structure"], function (exports, OSRuntimeCore, tradershubModel) {
var OS = OSRuntimeCore;
class RL_714403abfa4324f02871d43c35f1a8c8 extends 
OS.DataTypes.GenericRecordList {
static getItemType() {
return tradershubModel.ST_9040ff9a31163603cbfef38781e8f440Structure;
}

}

tradershubModel.RL_714403abfa4324f02871d43c35f1a8c8 = RL_714403abfa4324f02871d43c35f1a8c8;

});

define("tradershub.model$RL_718bfa5485b42466fae8f4ad1fc16180", ["exports", "@outsystems/runtime-core-js", "OutSystemsUI.model", "tradershub.model", "OutSystemsUI.model$EN_189b647ddc5c60c1aa5290bb6481a72dEntityRecord", "tradershub.referencesHealth", "tradershub.referencesHealth$OutSystemsUI"], function (exports, OSRuntimeCore, OutSystemsUIModel, tradershubModel) {
var OS = OSRuntimeCore;
class RL_718bfa5485b42466fae8f4ad1fc16180 extends 
OS.DataTypes.GenericRecordList {
static getItemType() {
return OutSystemsUIModel.EN_189b647ddc5c60c1aa5290bb6481a72dEntityRecord;
}

}

tradershubModel.RL_718bfa5485b42466fae8f4ad1fc16180 = RL_718bfa5485b42466fae8f4ad1fc16180;

});

define("tradershub.model$RL_724d63befe29e32e7a03e32f4cd42851", ["exports", "@outsystems/runtime-core-js", "OutSystemsMaps.model", "tradershub.model", "OutSystemsMaps.model$EN_2a64cd2fe4a253e65ea352434a6d389aEntityRecord", "tradershub.referencesHealth", "tradershub.referencesHealth$OutSystemsMaps"], function (exports, OSRuntimeCore, OutSystemsMapsModel, tradershubModel) {
var OS = OSRuntimeCore;
class RL_724d63befe29e32e7a03e32f4cd42851 extends 
OS.DataTypes.GenericRecordList {
static getItemType() {
return OutSystemsMapsModel.EN_2a64cd2fe4a253e65ea352434a6d389aEntityRecord;
}

}

tradershubModel.RL_724d63befe29e32e7a03e32f4cd42851 = RL_724d63befe29e32e7a03e32f4cd42851;

});

define("tradershub.model$RL_72d1939a3c0be1d010649f2d48d51148", ["exports", "@outsystems/runtime-core-js", "OutSystemsMaps.model", "tradershub.model", "OutSystemsMaps.model$ST_7f069279f39dd7c7d2e7b5637a5b25c9Structure", "tradershub.referencesHealth", "tradershub.referencesHealth$OutSystemsMaps"], function (exports, OSRuntimeCore, OutSystemsMapsModel, tradershubModel) {
var OS = OSRuntimeCore;
class RL_72d1939a3c0be1d010649f2d48d51148 extends 
OS.DataTypes.GenericRecordList {
static getItemType() {
return OutSystemsMapsModel.ST_7f069279f39dd7c7d2e7b5637a5b25c9Structure;
}

}

tradershubModel.RL_72d1939a3c0be1d010649f2d48d51148 = RL_72d1939a3c0be1d010649f2d48d51148;

});

define("tradershub.model$RC_72deccc4588dd4c59ea212c47055f933", ["exports", "@outsystems/runtime-core-js", "RESTAPIWebsocket.model", "tradershub.model", "RESTAPIWebsocket.model$ST_bf5d4ab423fae3ff38a977653adc8398Structure", "tradershub.referencesHealth", "tradershub.referencesHealth$RESTAPIWebsocket"], function (exports, OSRuntimeCore, RESTAPIWebsocketModel, tradershubModel) {
var OS = OSRuntimeCore;
{class RC_72deccc4588dd4c59ea212c47055f933Inner extends 
OS.DataTypes.GenericRecord {
static attributesToDeclare() {
return [
this.attr("Residence_listItem", "residence_listItemAttr", "Residence_listItem", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new RESTAPIWebsocketModel.ST_bf5d4ab423fae3ff38a977653adc8398Structure());
}, true, RESTAPIWebsocketModel.ST_bf5d4ab423fae3ff38a977653adc8398Structure)
].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
}

static fromStructure(str) {
return new RC_72deccc4588dd4c59ea212c47055f933(new RC_72deccc4588dd4c59ea212c47055f933.RecordClass({
residence_listItemAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
}

}

tradershubModel.RC_72deccc4588dd4c59ea212c47055f933 = RC_72deccc4588dd4c59ea212c47055f933Inner;

RC_72deccc4588dd4c59ea212c47055f933Inner._isAnonymousRecord = true;
RC_72deccc4588dd4c59ea212c47055f933Inner.UniqueId = "72deccc4-588d-d4c5-9ea2-12c47055f933";
var RC_72deccc4588dd4c59ea212c47055f933 = RC_72deccc4588dd4c59ea212c47055f933Inner;
RC_72deccc4588dd4c59ea212c47055f933.init();
}
});

define("tradershub.model$ST_ab9963fdfdd5d4ab71d52ec3f27aa094Structure", ["exports", "@outsystems/runtime-core-js", "tradershub.model"], function (exports, OSRuntimeCore, tradershubModel) {
var OS = OSRuntimeCore;
{class ST_ab9963fdfdd5d4ab71d52ec3f27aa094StructureInner extends 
OS.DataTypes.GenericRecord {
static attributesToDeclare() {
return [
this.attr("TaxResidenceCountry", "taxResidenceCountryAttr", "TaxResidenceCountry", false, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, true), 
this.attr("TIDNumber", "tIDNumberAttr", "TIDNumber", false, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, true), 
this.attr("EmployementStatus", "employementStatusAttr", "EmployementStatus", false, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, true), 
this.attr("TaxIDConfirmation", "taxIDConfirmationAttr", "TaxIDConfirmation", false, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, true)
].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
}

}

tradershubModel.ST_ab9963fdfdd5d4ab71d52ec3f27aa094Structure = ST_ab9963fdfdd5d4ab71d52ec3f27aa094StructureInner;

var ST_ab9963fdfdd5d4ab71d52ec3f27aa094Structure = ST_ab9963fdfdd5d4ab71d52ec3f27aa094StructureInner;
ST_ab9963fdfdd5d4ab71d52ec3f27aa094Structure.init();
}
});

define("tradershub.model$RC_73333afe7cdabe76302dec4b77612cd5", ["exports", "@outsystems/runtime-core-js", "tradershub.model", "tradershub.model$ST_ab9963fdfdd5d4ab71d52ec3f27aa094Structure"], function (exports, OSRuntimeCore, tradershubModel) {
var OS = OSRuntimeCore;
{class RC_73333afe7cdabe76302dec4b77612cd5Inner extends 
OS.DataTypes.GenericRecord {
static attributesToDeclare() {
return [
this.attr("EmploymentDetailsValidationField", "employmentDetailsValidationFieldAttr", "EmploymentDetailsValidationField", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new tradershubModel.ST_ab9963fdfdd5d4ab71d52ec3f27aa094Structure());
}, true, tradershubModel.ST_ab9963fdfdd5d4ab71d52ec3f27aa094Structure)
].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
}

static fromStructure(str) {
return new RC_73333afe7cdabe76302dec4b77612cd5(new RC_73333afe7cdabe76302dec4b77612cd5.RecordClass({
employmentDetailsValidationFieldAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
}

}

tradershubModel.RC_73333afe7cdabe76302dec4b77612cd5 = RC_73333afe7cdabe76302dec4b77612cd5Inner;

RC_73333afe7cdabe76302dec4b77612cd5Inner._isAnonymousRecord = true;
RC_73333afe7cdabe76302dec4b77612cd5Inner.UniqueId = "73333afe-7cda-be76-302d-ec4b77612cd5";
var RC_73333afe7cdabe76302dec4b77612cd5 = RC_73333afe7cdabe76302dec4b77612cd5Inner;
RC_73333afe7cdabe76302dec4b77612cd5.init();
}
});

define("tradershub.model$RC_967cb65710fd1a346ebf0b0d8dbea56b", ["exports", "@outsystems/runtime-core-js", "OutSystemsUI.model", "tradershub.model", "OutSystemsUI.model$EN_92679525739afa328c09890d25f5ac45EntityRecord", "tradershub.referencesHealth", "tradershub.referencesHealth$OutSystemsUI"], function (exports, OSRuntimeCore, OutSystemsUIModel, tradershubModel) {
var OS = OSRuntimeCore;
{class RC_967cb65710fd1a346ebf0b0d8dbea56bInner extends 
OS.DataTypes.GenericRecord {
static attributesToDeclare() {
return [
this.attr("StackedCardsPosition", "stackedCardsPositionAttr", "StackedCardsPosition", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new OutSystemsUIModel.EN_92679525739afa328c09890d25f5ac45EntityRecord());
}, true, OutSystemsUIModel.EN_92679525739afa328c09890d25f5ac45EntityRecord)
].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
}

static fromStructure(str) {
return new RC_967cb65710fd1a346ebf0b0d8dbea56b(new RC_967cb65710fd1a346ebf0b0d8dbea56b.RecordClass({
stackedCardsPositionAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
}

}

tradershubModel.RC_967cb65710fd1a346ebf0b0d8dbea56b = RC_967cb65710fd1a346ebf0b0d8dbea56bInner;

RC_967cb65710fd1a346ebf0b0d8dbea56bInner._isAnonymousRecord = true;
RC_967cb65710fd1a346ebf0b0d8dbea56bInner.UniqueId = "967cb657-10fd-1a34-6ebf-0b0d8dbea56b";
var RC_967cb65710fd1a346ebf0b0d8dbea56b = RC_967cb65710fd1a346ebf0b0d8dbea56bInner;
RC_967cb65710fd1a346ebf0b0d8dbea56b.init();
}
});

define("tradershub.model$RL_73c285d01c2c56407f6a3b6c7863f99b", ["exports", "@outsystems/runtime-core-js", "tradershub.model", "tradershub.model$RC_967cb65710fd1a346ebf0b0d8dbea56b"], function (exports, OSRuntimeCore, tradershubModel) {
var OS = OSRuntimeCore;
class RL_73c285d01c2c56407f6a3b6c7863f99b extends 
OS.DataTypes.GenericRecordList {
static getItemType() {
return tradershubModel.RC_967cb65710fd1a346ebf0b0d8dbea56b;
}

}

tradershubModel.RL_73c285d01c2c56407f6a3b6c7863f99b = RL_73c285d01c2c56407f6a3b6c7863f99b;

});

define("tradershub.model$RC_f6c2f142af073709395973c555ac9ddc", ["exports", "@outsystems/runtime-core-js", "OutSystemsMaps.model", "tradershub.model", "OutSystemsMaps.model$ST_ca9f1e36e4f2b1c8cabc0fd0c956ac77Structure", "tradershub.referencesHealth", "tradershub.referencesHealth$OutSystemsMaps"], function (exports, OSRuntimeCore, OutSystemsMapsModel, tradershubModel) {
var OS = OSRuntimeCore;
{class RC_f6c2f142af073709395973c555ac9ddcInner extends 
OS.DataTypes.GenericRecord {
static attributesToDeclare() {
return [
this.attr("Points", "pointsAttr", "Points", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new OutSystemsMapsModel.ST_ca9f1e36e4f2b1c8cabc0fd0c956ac77Structure());
}, true, OutSystemsMapsModel.ST_ca9f1e36e4f2b1c8cabc0fd0c956ac77Structure)
].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
}

static fromStructure(str) {
return new RC_f6c2f142af073709395973c555ac9ddc(new RC_f6c2f142af073709395973c555ac9ddc.RecordClass({
pointsAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
}

}

tradershubModel.RC_f6c2f142af073709395973c555ac9ddc = RC_f6c2f142af073709395973c555ac9ddcInner;

RC_f6c2f142af073709395973c555ac9ddcInner._isAnonymousRecord = true;
RC_f6c2f142af073709395973c555ac9ddcInner.UniqueId = "f6c2f142-af07-3709-3959-73c555ac9ddc";
var RC_f6c2f142af073709395973c555ac9ddc = RC_f6c2f142af073709395973c555ac9ddcInner;
RC_f6c2f142af073709395973c555ac9ddc.init();
}
});

define("tradershub.model$RL_73ee209cf0a78b1590dcc8cc4fe17b9e", ["exports", "@outsystems/runtime-core-js", "tradershub.model", "tradershub.model$RC_f6c2f142af073709395973c555ac9ddc"], function (exports, OSRuntimeCore, tradershubModel) {
var OS = OSRuntimeCore;
class RL_73ee209cf0a78b1590dcc8cc4fe17b9e extends 
OS.DataTypes.GenericRecordList {
static getItemType() {
return tradershubModel.RC_f6c2f142af073709395973c555ac9ddc;
}

}

tradershubModel.RL_73ee209cf0a78b1590dcc8cc4fe17b9e = RL_73ee209cf0a78b1590dcc8cc4fe17b9e;

});

define("tradershub.model$RC_c97612a27be85a5532e2b3b5ddfcfa27", ["exports", "@outsystems/runtime-core-js", "OutSystemsMaps.model", "tradershub.model", "OutSystemsMaps.model$ST_7f069279f39dd7c7d2e7b5637a5b25c9Structure", "tradershub.referencesHealth", "tradershub.referencesHealth$OutSystemsMaps"], function (exports, OSRuntimeCore, OutSystemsMapsModel, tradershubModel) {
var OS = OSRuntimeCore;
{class RC_c97612a27be85a5532e2b3b5ddfcfa27Inner extends 
OS.DataTypes.GenericRecord {
static attributesToDeclare() {
return [
this.attr("OptionalMarkerConfigs", "optionalMarkerConfigsAttr", "OptionalMarkerConfigs", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new OutSystemsMapsModel.ST_7f069279f39dd7c7d2e7b5637a5b25c9Structure());
}, true, OutSystemsMapsModel.ST_7f069279f39dd7c7d2e7b5637a5b25c9Structure)
].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
}

static fromStructure(str) {
return new RC_c97612a27be85a5532e2b3b5ddfcfa27(new RC_c97612a27be85a5532e2b3b5ddfcfa27.RecordClass({
optionalMarkerConfigsAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
}

}

tradershubModel.RC_c97612a27be85a5532e2b3b5ddfcfa27 = RC_c97612a27be85a5532e2b3b5ddfcfa27Inner;

RC_c97612a27be85a5532e2b3b5ddfcfa27Inner._isAnonymousRecord = true;
RC_c97612a27be85a5532e2b3b5ddfcfa27Inner.UniqueId = "c97612a2-7be8-5a55-32e2-b3b5ddfcfa27";
var RC_c97612a27be85a5532e2b3b5ddfcfa27 = RC_c97612a27be85a5532e2b3b5ddfcfa27Inner;
RC_c97612a27be85a5532e2b3b5ddfcfa27.init();
}
});

define("tradershub.model$RL_745f22a3ada550afdd2fd2cbc8fe0793", ["exports", "@outsystems/runtime-core-js", "tradershub.model", "tradershub.model$RC_c97612a27be85a5532e2b3b5ddfcfa27"], function (exports, OSRuntimeCore, tradershubModel) {
var OS = OSRuntimeCore;
class RL_745f22a3ada550afdd2fd2cbc8fe0793 extends 
OS.DataTypes.GenericRecordList {
static getItemType() {
return tradershubModel.RC_c97612a27be85a5532e2b3b5ddfcfa27;
}

}

tradershubModel.RL_745f22a3ada550afdd2fd2cbc8fe0793 = RL_745f22a3ada550afdd2fd2cbc8fe0793;

});

define("tradershub.model$RL_7466d1f73cbd2c703ddb7258bc2f245b", ["exports", "@outsystems/runtime-core-js", "tradershub.model", "tradershub.model$RC_6ceb0a54ddbc92446ab66e8c847870c1"], function (exports, OSRuntimeCore, tradershubModel) {
var OS = OSRuntimeCore;
class RL_7466d1f73cbd2c703ddb7258bc2f245b extends 
OS.DataTypes.GenericRecordList {
static getItemType() {
return tradershubModel.RC_6ceb0a54ddbc92446ab66e8c847870c1;
}

}

tradershubModel.RL_7466d1f73cbd2c703ddb7258bc2f245b = RL_7466d1f73cbd2c703ddb7258bc2f245b;

});

define("tradershub.model$RL_7532eb1a749cdb2e1bdeb116afe0962b", ["exports", "@outsystems/runtime-core-js", "tradershub.model", "tradershub.model$ST_5c01ba3e57fed3646e0d84a6d769c24eStructure"], function (exports, OSRuntimeCore, tradershubModel) {
var OS = OSRuntimeCore;
class RL_7532eb1a749cdb2e1bdeb116afe0962b extends 
OS.DataTypes.GenericRecordList {
static getItemType() {
return tradershubModel.ST_5c01ba3e57fed3646e0d84a6d769c24eStructure;
}

}

tradershubModel.RL_7532eb1a749cdb2e1bdeb116afe0962b = RL_7532eb1a749cdb2e1bdeb116afe0962b;

});

define("tradershub.model$RC_e14f3c77ad4f7c2d7fcad14fc0ab9bf1", ["exports", "@outsystems/runtime-core-js", "OutSystemsUI.model", "tradershub.model", "OutSystemsUI.model$ST_71bc196daedd9ac0648bfd56a713859dStructure", "tradershub.referencesHealth", "tradershub.referencesHealth$OutSystemsUI"], function (exports, OSRuntimeCore, OutSystemsUIModel, tradershubModel) {
var OS = OSRuntimeCore;
{class RC_e14f3c77ad4f7c2d7fcad14fc0ab9bf1Inner extends 
OS.DataTypes.GenericRecord {
static attributesToDeclare() {
return [
this.attr("MonthOrderYear", "monthOrderYearAttr", "MonthOrderYear", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new OutSystemsUIModel.ST_71bc196daedd9ac0648bfd56a713859dStructure());
}, true, OutSystemsUIModel.ST_71bc196daedd9ac0648bfd56a713859dStructure)
].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
}

static fromStructure(str) {
return new RC_e14f3c77ad4f7c2d7fcad14fc0ab9bf1(new RC_e14f3c77ad4f7c2d7fcad14fc0ab9bf1.RecordClass({
monthOrderYearAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
}

}

tradershubModel.RC_e14f3c77ad4f7c2d7fcad14fc0ab9bf1 = RC_e14f3c77ad4f7c2d7fcad14fc0ab9bf1Inner;

RC_e14f3c77ad4f7c2d7fcad14fc0ab9bf1Inner._isAnonymousRecord = true;
RC_e14f3c77ad4f7c2d7fcad14fc0ab9bf1Inner.UniqueId = "e14f3c77-ad4f-7c2d-7fca-d14fc0ab9bf1";
var RC_e14f3c77ad4f7c2d7fcad14fc0ab9bf1 = RC_e14f3c77ad4f7c2d7fcad14fc0ab9bf1Inner;
RC_e14f3c77ad4f7c2d7fcad14fc0ab9bf1.init();
}
});

define("tradershub.model$RL_7682dd80718b550d6c5a921d5990d04e", ["exports", "@outsystems/runtime-core-js", "tradershub.model", "tradershub.model$RC_e14f3c77ad4f7c2d7fcad14fc0ab9bf1"], function (exports, OSRuntimeCore, tradershubModel) {
var OS = OSRuntimeCore;
class RL_7682dd80718b550d6c5a921d5990d04e extends 
OS.DataTypes.GenericRecordList {
static getItemType() {
return tradershubModel.RC_e14f3c77ad4f7c2d7fcad14fc0ab9bf1;
}

}

tradershubModel.RL_7682dd80718b550d6c5a921d5990d04e = RL_7682dd80718b550d6c5a921d5990d04e;

});

define("tradershub.model$RC_769b74cf243bca7e23f6d8b3e094aafe", ["exports", "@outsystems/runtime-core-js", "RESTAPIWebsocket.model", "tradershub.model", "RESTAPIWebsocket.model$ST_83fbd707f872e92b597918150eff1f3eStructure", "tradershub.referencesHealth", "tradershub.referencesHealth$RESTAPIWebsocket"], function (exports, OSRuntimeCore, RESTAPIWebsocketModel, tradershubModel) {
var OS = OSRuntimeCore;
{class RC_769b74cf243bca7e23f6d8b3e094aafeInner extends 
OS.DataTypes.GenericRecord {
static attributesToDeclare() {
return [
this.attr("Compliance", "complianceAttr", "Compliance", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new RESTAPIWebsocketModel.ST_83fbd707f872e92b597918150eff1f3eStructure());
}, true, RESTAPIWebsocketModel.ST_83fbd707f872e92b597918150eff1f3eStructure)
].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
}

static fromStructure(str) {
return new RC_769b74cf243bca7e23f6d8b3e094aafe(new RC_769b74cf243bca7e23f6d8b3e094aafe.RecordClass({
complianceAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
}

}

tradershubModel.RC_769b74cf243bca7e23f6d8b3e094aafe = RC_769b74cf243bca7e23f6d8b3e094aafeInner;

RC_769b74cf243bca7e23f6d8b3e094aafeInner._isAnonymousRecord = true;
RC_769b74cf243bca7e23f6d8b3e094aafeInner.UniqueId = "769b74cf-243b-ca7e-23f6-d8b3e094aafe";
var RC_769b74cf243bca7e23f6d8b3e094aafe = RC_769b74cf243bca7e23f6d8b3e094aafeInner;
RC_769b74cf243bca7e23f6d8b3e094aafe.init();
}
});

define("tradershub.model$RL_772c639d5f2b42cac14d8692a69e34d1", ["exports", "@outsystems/runtime-core-js", "tradershub.model", "tradershub.model$RC_2a9ff13787033a384677b0fe3115c25c"], function (exports, OSRuntimeCore, tradershubModel) {
var OS = OSRuntimeCore;
class RL_772c639d5f2b42cac14d8692a69e34d1 extends 
OS.DataTypes.GenericRecordList {
static getItemType() {
return tradershubModel.RC_2a9ff13787033a384677b0fe3115c25c;
}

}

tradershubModel.RL_772c639d5f2b42cac14d8692a69e34d1 = RL_772c639d5f2b42cac14d8692a69e34d1;

});

define("tradershub.model$RL_7765d9c764f8ac0e53bfee533b337ff3", ["exports", "@outsystems/runtime-core-js", "tradershub.model", "tradershub.model$ST_3a6e5c84ccd1db0dd256408ff639cec5Structure"], function (exports, OSRuntimeCore, tradershubModel) {
var OS = OSRuntimeCore;
class RL_7765d9c764f8ac0e53bfee533b337ff3 extends 
OS.DataTypes.GenericRecordList {
static getItemType() {
return tradershubModel.ST_3a6e5c84ccd1db0dd256408ff639cec5Structure;
}

}

tradershubModel.RL_7765d9c764f8ac0e53bfee533b337ff3 = RL_7765d9c764f8ac0e53bfee533b337ff3;

});

define("tradershub.model$RC_854dbd2804fbb731b1468b879331bbde", ["exports", "@outsystems/runtime-core-js", "RESTAPIWebsocket.model", "tradershub.model", "RESTAPIWebsocket.model$ST_8517d9c8b73e866553a1a7b806af5079Structure", "tradershub.referencesHealth", "tradershub.referencesHealth$RESTAPIWebsocket"], function (exports, OSRuntimeCore, RESTAPIWebsocketModel, tradershubModel) {
var OS = OSRuntimeCore;
{class RC_854dbd2804fbb731b1468b879331bbdeInner extends 
OS.DataTypes.GenericRecord {
static attributesToDeclare() {
return [
this.attr("Error", "errorAttr", "Error2", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new RESTAPIWebsocketModel.ST_8517d9c8b73e866553a1a7b806af5079Structure());
}, true, RESTAPIWebsocketModel.ST_8517d9c8b73e866553a1a7b806af5079Structure)
].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
}

static fromStructure(str) {
return new RC_854dbd2804fbb731b1468b879331bbde(new RC_854dbd2804fbb731b1468b879331bbde.RecordClass({
errorAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
}

}

tradershubModel.RC_854dbd2804fbb731b1468b879331bbde = RC_854dbd2804fbb731b1468b879331bbdeInner;

RC_854dbd2804fbb731b1468b879331bbdeInner._isAnonymousRecord = true;
RC_854dbd2804fbb731b1468b879331bbdeInner.UniqueId = "854dbd28-04fb-b731-b146-8b879331bbde";
var RC_854dbd2804fbb731b1468b879331bbde = RC_854dbd2804fbb731b1468b879331bbdeInner;
RC_854dbd2804fbb731b1468b879331bbde.init();
}
});

define("tradershub.model$RL_77d062a6109acd64f7dab8d805a7e390", ["exports", "@outsystems/runtime-core-js", "tradershub.model", "tradershub.model$RC_854dbd2804fbb731b1468b879331bbde"], function (exports, OSRuntimeCore, tradershubModel) {
var OS = OSRuntimeCore;
class RL_77d062a6109acd64f7dab8d805a7e390 extends 
OS.DataTypes.GenericRecordList {
static getItemType() {
return tradershubModel.RC_854dbd2804fbb731b1468b879331bbde;
}

}

tradershubModel.RL_77d062a6109acd64f7dab8d805a7e390 = RL_77d062a6109acd64f7dab8d805a7e390;

});

define("tradershub.model$RL_78373738575ac72ef55dea9c617c7d1f", ["exports", "@outsystems/runtime-core-js", "OutSystemsUI.model", "tradershub.model", "OutSystemsUI.model$EN_50814454e481dd1773c2250bc248da5eEntityRecord", "tradershub.referencesHealth", "tradershub.referencesHealth$OutSystemsUI"], function (exports, OSRuntimeCore, OutSystemsUIModel, tradershubModel) {
var OS = OSRuntimeCore;
class RL_78373738575ac72ef55dea9c617c7d1f extends 
OS.DataTypes.GenericRecordList {
static getItemType() {
return OutSystemsUIModel.EN_50814454e481dd1773c2250bc248da5eEntityRecord;
}

}

tradershubModel.RL_78373738575ac72ef55dea9c617c7d1f = RL_78373738575ac72ef55dea9c617c7d1f;

});

define("tradershub.model$RL_78dfebcf1214c783ef1a964e28f9910f", ["exports", "@outsystems/runtime-core-js", "RESTAPIWebsocket.model", "tradershub.model", "RESTAPIWebsocket.model$ST_c47fcfd4aa43719d828b02ded1b0fea1Structure", "tradershub.referencesHealth", "tradershub.referencesHealth$RESTAPIWebsocket"], function (exports, OSRuntimeCore, RESTAPIWebsocketModel, tradershubModel) {
var OS = OSRuntimeCore;
class RL_78dfebcf1214c783ef1a964e28f9910f extends 
OS.DataTypes.GenericRecordList {
static getItemType() {
return RESTAPIWebsocketModel.ST_c47fcfd4aa43719d828b02ded1b0fea1Structure;
}

}

tradershubModel.RL_78dfebcf1214c783ef1a964e28f9910f = RL_78dfebcf1214c783ef1a964e28f9910f;

});

define("tradershub.model$RC_a02f5f2f515e26503ec11a36dcef3ad8", ["exports", "@outsystems/runtime-core-js", "tradershub.model", "tradershub.model$ST_30e2edd642322834fde0261ac531b663Structure"], function (exports, OSRuntimeCore, tradershubModel) {
var OS = OSRuntimeCore;
{class RC_a02f5f2f515e26503ec11a36dcef3ad8Inner extends 
OS.DataTypes.GenericRecord {
static attributesToDeclare() {
return [
this.attr("Mt5_status", "mt5_statusAttr", "Mt5_status", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new tradershubModel.ST_30e2edd642322834fde0261ac531b663Structure());
}, true, tradershubModel.ST_30e2edd642322834fde0261ac531b663Structure)
].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
}

static fromStructure(str) {
return new RC_a02f5f2f515e26503ec11a36dcef3ad8(new RC_a02f5f2f515e26503ec11a36dcef3ad8.RecordClass({
mt5_statusAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
}

}

tradershubModel.RC_a02f5f2f515e26503ec11a36dcef3ad8 = RC_a02f5f2f515e26503ec11a36dcef3ad8Inner;

RC_a02f5f2f515e26503ec11a36dcef3ad8Inner._isAnonymousRecord = true;
RC_a02f5f2f515e26503ec11a36dcef3ad8Inner.UniqueId = "a02f5f2f-515e-2650-3ec1-1a36dcef3ad8";
var RC_a02f5f2f515e26503ec11a36dcef3ad8 = RC_a02f5f2f515e26503ec11a36dcef3ad8Inner;
RC_a02f5f2f515e26503ec11a36dcef3ad8.init();
}
});

define("tradershub.model$RL_790f0e2ae97c8d04ca1e138037ec1e2e", ["exports", "@outsystems/runtime-core-js", "tradershub.model", "tradershub.model$RC_a02f5f2f515e26503ec11a36dcef3ad8"], function (exports, OSRuntimeCore, tradershubModel) {
var OS = OSRuntimeCore;
class RL_790f0e2ae97c8d04ca1e138037ec1e2e extends 
OS.DataTypes.GenericRecordList {
static getItemType() {
return tradershubModel.RC_a02f5f2f515e26503ec11a36dcef3ad8;
}

}

tradershubModel.RL_790f0e2ae97c8d04ca1e138037ec1e2e = RL_790f0e2ae97c8d04ca1e138037ec1e2e;

});

define("tradershub.model$RL_7917133dcbda5cd4a6decab71f2048c1", ["exports", "@outsystems/runtime-core-js", "OutSystemsCharts.model", "tradershub.model", "OutSystemsCharts.model$ST_e76d7672809d02d24c5a5adfeacd07eeStructure", "tradershub.referencesHealth", "tradershub.referencesHealth$OutSystemsCharts"], function (exports, OSRuntimeCore, OutSystemsChartsModel, tradershubModel) {
var OS = OSRuntimeCore;
class RL_7917133dcbda5cd4a6decab71f2048c1 extends 
OS.DataTypes.GenericRecordList {
static getItemType() {
return OutSystemsChartsModel.ST_e76d7672809d02d24c5a5adfeacd07eeStructure;
}

}

tradershubModel.RL_7917133dcbda5cd4a6decab71f2048c1 = RL_7917133dcbda5cd4a6decab71f2048c1;

});

define("tradershub.model$RL_799b7146a2a08781a419c46b161fba52", ["exports", "@outsystems/runtime-core-js", "OutSystemsUI.model", "tradershub.model", "OutSystemsUI.model$EN_4f86046673de081f9834eb306850ab22EntityRecord", "tradershub.referencesHealth", "tradershub.referencesHealth$OutSystemsUI"], function (exports, OSRuntimeCore, OutSystemsUIModel, tradershubModel) {
var OS = OSRuntimeCore;
class RL_799b7146a2a08781a419c46b161fba52 extends 
OS.DataTypes.GenericRecordList {
static getItemType() {
return OutSystemsUIModel.EN_4f86046673de081f9834eb306850ab22EntityRecord;
}

}

tradershubModel.RL_799b7146a2a08781a419c46b161fba52 = RL_799b7146a2a08781a419c46b161fba52;

});

define("tradershub.model$RL_79e5f7b3f667162d18056364b5add7d4", ["exports", "@outsystems/runtime-core-js", "RESTAPIWebsocket.model", "tradershub.model", "RESTAPIWebsocket.model$ST_d4ed48681c55954edc02f19b0ed492e7Structure", "tradershub.referencesHealth", "tradershub.referencesHealth$RESTAPIWebsocket"], function (exports, OSRuntimeCore, RESTAPIWebsocketModel, tradershubModel) {
var OS = OSRuntimeCore;
class RL_79e5f7b3f667162d18056364b5add7d4 extends 
OS.DataTypes.GenericRecordList {
static getItemType() {
return RESTAPIWebsocketModel.ST_d4ed48681c55954edc02f19b0ed492e7Structure;
}

}

tradershubModel.RL_79e5f7b3f667162d18056364b5add7d4 = RL_79e5f7b3f667162d18056364b5add7d4;

});

define("tradershub.model$RC_85af8fa7a4c9fca4ade94e1edb0d5f7d", ["exports", "@outsystems/runtime-core-js", "OutSystemsUI.model", "tradershub.model", "OutSystemsUI.model$ST_6510d2524fe77fcc6c285159d4000cfbStructure", "tradershub.referencesHealth", "tradershub.referencesHealth$OutSystemsUI"], function (exports, OSRuntimeCore, OutSystemsUIModel, tradershubModel) {
var OS = OSRuntimeCore;
{class RC_85af8fa7a4c9fca4ade94e1edb0d5f7dInner extends 
OS.DataTypes.GenericRecord {
static attributesToDeclare() {
return [
this.attr("VideoOptionalConfigs", "videoOptionalConfigsAttr", "VideoOptionalConfigs", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new OutSystemsUIModel.ST_6510d2524fe77fcc6c285159d4000cfbStructure());
}, true, OutSystemsUIModel.ST_6510d2524fe77fcc6c285159d4000cfbStructure)
].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
}

static fromStructure(str) {
return new RC_85af8fa7a4c9fca4ade94e1edb0d5f7d(new RC_85af8fa7a4c9fca4ade94e1edb0d5f7d.RecordClass({
videoOptionalConfigsAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
}

}

tradershubModel.RC_85af8fa7a4c9fca4ade94e1edb0d5f7d = RC_85af8fa7a4c9fca4ade94e1edb0d5f7dInner;

RC_85af8fa7a4c9fca4ade94e1edb0d5f7dInner._isAnonymousRecord = true;
RC_85af8fa7a4c9fca4ade94e1edb0d5f7dInner.UniqueId = "85af8fa7-a4c9-fca4-ade9-4e1edb0d5f7d";
var RC_85af8fa7a4c9fca4ade94e1edb0d5f7d = RC_85af8fa7a4c9fca4ade94e1edb0d5f7dInner;
RC_85af8fa7a4c9fca4ade94e1edb0d5f7d.init();
}
});

define("tradershub.model$RL_7a204c55a54d7fc5a49ee67743d390cb", ["exports", "@outsystems/runtime-core-js", "tradershub.model", "tradershub.model$RC_85af8fa7a4c9fca4ade94e1edb0d5f7d"], function (exports, OSRuntimeCore, tradershubModel) {
var OS = OSRuntimeCore;
class RL_7a204c55a54d7fc5a49ee67743d390cb extends 
OS.DataTypes.GenericRecordList {
static getItemType() {
return tradershubModel.RC_85af8fa7a4c9fca4ade94e1edb0d5f7d;
}

}

tradershubModel.RL_7a204c55a54d7fc5a49ee67743d390cb = RL_7a204c55a54d7fc5a49ee67743d390cb;

});

define("tradershub.model$RL_7a3e7e67e6b503a4b7645b10892b1ed3", ["exports", "@outsystems/runtime-core-js", "tradershub.model", "tradershub.model$ST_87555d90f21aa57fd03a9d7e779d31e3Structure"], function (exports, OSRuntimeCore, tradershubModel) {
var OS = OSRuntimeCore;
class RL_7a3e7e67e6b503a4b7645b10892b1ed3 extends 
OS.DataTypes.GenericRecordList {
static getItemType() {
return tradershubModel.ST_87555d90f21aa57fd03a9d7e779d31e3Structure;
}

}

tradershubModel.RL_7a3e7e67e6b503a4b7645b10892b1ed3 = RL_7a3e7e67e6b503a4b7645b10892b1ed3;

});

define("tradershub.model$RL_7a61959884cd1d97a8df26308775a5c7", ["exports", "@outsystems/runtime-core-js", "RESTAPIWebsocket.model", "tradershub.model", "RESTAPIWebsocket.model$ST_d845e9af38689337f2bff5d766253a88Structure", "tradershub.referencesHealth", "tradershub.referencesHealth$RESTAPIWebsocket"], function (exports, OSRuntimeCore, RESTAPIWebsocketModel, tradershubModel) {
var OS = OSRuntimeCore;
class RL_7a61959884cd1d97a8df26308775a5c7 extends 
OS.DataTypes.GenericRecordList {
static getItemType() {
return RESTAPIWebsocketModel.ST_d845e9af38689337f2bff5d766253a88Structure;
}

}

tradershubModel.RL_7a61959884cd1d97a8df26308775a5c7 = RL_7a61959884cd1d97a8df26308775a5c7;

});

define("tradershub.model$RL_7abacef66f8c8ee19e972f9405ffd4ae", ["exports", "@outsystems/runtime-core-js", "OutSystemsMaps.model", "tradershub.model", "OutSystemsMaps.model$ST_f85923824a33f65ded14770af5377402Structure", "tradershub.referencesHealth", "tradershub.referencesHealth$OutSystemsMaps"], function (exports, OSRuntimeCore, OutSystemsMapsModel, tradershubModel) {
var OS = OSRuntimeCore;
class RL_7abacef66f8c8ee19e972f9405ffd4ae extends 
OS.DataTypes.GenericRecordList {
static getItemType() {
return OutSystemsMapsModel.ST_f85923824a33f65ded14770af5377402Structure;
}

}

tradershubModel.RL_7abacef66f8c8ee19e972f9405ffd4ae = RL_7abacef66f8c8ee19e972f9405ffd4ae;

});

define("tradershub.model$RL_7afe2e3802b1138fe7c019f238334de4", ["exports", "@outsystems/runtime-core-js", "tradershub.model", "tradershub.model$RC_1583be5d90a94b6a73170ffa868eecc5"], function (exports, OSRuntimeCore, tradershubModel) {
var OS = OSRuntimeCore;
class RL_7afe2e3802b1138fe7c019f238334de4 extends 
OS.DataTypes.GenericRecordList {
static getItemType() {
return tradershubModel.RC_1583be5d90a94b6a73170ffa868eecc5;
}

}

tradershubModel.RL_7afe2e3802b1138fe7c019f238334de4 = RL_7afe2e3802b1138fe7c019f238334de4;

});

define("tradershub.model$RL_7c036597cf3d8c9e8050976e7b9cd21a", ["exports", "@outsystems/runtime-core-js", "OutSystemsCharts.model", "tradershub.model", "OutSystemsCharts.model$EN_c206e072354abd28c734a686a107801eEntityRecord", "tradershub.referencesHealth", "tradershub.referencesHealth$OutSystemsCharts"], function (exports, OSRuntimeCore, OutSystemsChartsModel, tradershubModel) {
var OS = OSRuntimeCore;
class RL_7c036597cf3d8c9e8050976e7b9cd21a extends 
OS.DataTypes.GenericRecordList {
static getItemType() {
return OutSystemsChartsModel.EN_c206e072354abd28c734a686a107801eEntityRecord;
}

}

tradershubModel.RL_7c036597cf3d8c9e8050976e7b9cd21a = RL_7c036597cf3d8c9e8050976e7b9cd21a;

});

define("tradershub.model$RL_7c155d6f9991d43524221e40a2ecb02b", ["exports", "@outsystems/runtime-core-js", "OutSystemsUI.model", "tradershub.model", "OutSystemsUI.model$EN_59aacee1cb91627a0f497366b24e4500EntityRecord", "tradershub.referencesHealth", "tradershub.referencesHealth$OutSystemsUI"], function (exports, OSRuntimeCore, OutSystemsUIModel, tradershubModel) {
var OS = OSRuntimeCore;
class RL_7c155d6f9991d43524221e40a2ecb02b extends 
OS.DataTypes.GenericRecordList {
static getItemType() {
return OutSystemsUIModel.EN_59aacee1cb91627a0f497366b24e4500EntityRecord;
}

}

tradershubModel.RL_7c155d6f9991d43524221e40a2ecb02b = RL_7c155d6f9991d43524221e40a2ecb02b;

});

define("tradershub.model$RL_7c4605673564471d88af1f24f7fd0a58", ["exports", "@outsystems/runtime-core-js", "OutSystemsMaps.model", "tradershub.model", "OutSystemsMaps.model$ST_832344699c82a4f799a423f89bbe7297Structure", "tradershub.referencesHealth", "tradershub.referencesHealth$OutSystemsMaps"], function (exports, OSRuntimeCore, OutSystemsMapsModel, tradershubModel) {
var OS = OSRuntimeCore;
class RL_7c4605673564471d88af1f24f7fd0a58 extends 
OS.DataTypes.GenericRecordList {
static getItemType() {
return OutSystemsMapsModel.ST_832344699c82a4f799a423f89bbe7297Structure;
}

}

tradershubModel.RL_7c4605673564471d88af1f24f7fd0a58 = RL_7c4605673564471d88af1f24f7fd0a58;

});

define("tradershub.model$RL_7c73ffe7de28a58cc5b0bcd605c8d174", ["exports", "@outsystems/runtime-core-js", "tradershub.model", "tradershub.model$ST_771888a7c88d31c2c35d9cb462eaf9dfStructure"], function (exports, OSRuntimeCore, tradershubModel) {
var OS = OSRuntimeCore;
class RL_7c73ffe7de28a58cc5b0bcd605c8d174 extends 
OS.DataTypes.GenericRecordList {
static getItemType() {
return tradershubModel.ST_771888a7c88d31c2c35d9cb462eaf9dfStructure;
}

}

tradershubModel.RL_7c73ffe7de28a58cc5b0bcd605c8d174 = RL_7c73ffe7de28a58cc5b0bcd605c8d174;

});

define("tradershub.model$RL_7c9f790fa5c2ed1fbdf0de41347402fa", ["exports", "@outsystems/runtime-core-js", "RESTAPIWebsocket.model", "tradershub.model", "RESTAPIWebsocket.model$ST_628e5221d510e98bcfe00cce5f107d21Structure", "tradershub.referencesHealth", "tradershub.referencesHealth$RESTAPIWebsocket"], function (exports, OSRuntimeCore, RESTAPIWebsocketModel, tradershubModel) {
var OS = OSRuntimeCore;
class RL_7c9f790fa5c2ed1fbdf0de41347402fa extends 
OS.DataTypes.GenericRecordList {
static getItemType() {
return RESTAPIWebsocketModel.ST_628e5221d510e98bcfe00cce5f107d21Structure;
}

}

tradershubModel.RL_7c9f790fa5c2ed1fbdf0de41347402fa = RL_7c9f790fa5c2ed1fbdf0de41347402fa;

});

define("tradershub.model$RC_e5ad8f04c38047441643c6868992c277", ["exports", "@outsystems/runtime-core-js", "OutSystemsUI.model", "tradershub.model", "OutSystemsUI.model$ST_09173c1b0f41f719b9efd6430c2e737dStructure", "tradershub.referencesHealth", "tradershub.referencesHealth$OutSystemsUI"], function (exports, OSRuntimeCore, OutSystemsUIModel, tradershubModel) {
var OS = OSRuntimeCore;
{class RC_e5ad8f04c38047441643c6868992c277Inner extends 
OS.DataTypes.GenericRecord {
static attributesToDeclare() {
return [
this.attr("NotificationOptionalConfigs", "notificationOptionalConfigsAttr", "NotificationOptionalConfigs", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new OutSystemsUIModel.ST_09173c1b0f41f719b9efd6430c2e737dStructure());
}, true, OutSystemsUIModel.ST_09173c1b0f41f719b9efd6430c2e737dStructure)
].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
}

static fromStructure(str) {
return new RC_e5ad8f04c38047441643c6868992c277(new RC_e5ad8f04c38047441643c6868992c277.RecordClass({
notificationOptionalConfigsAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
}

}

tradershubModel.RC_e5ad8f04c38047441643c6868992c277 = RC_e5ad8f04c38047441643c6868992c277Inner;

RC_e5ad8f04c38047441643c6868992c277Inner._isAnonymousRecord = true;
RC_e5ad8f04c38047441643c6868992c277Inner.UniqueId = "e5ad8f04-c380-4744-1643-c6868992c277";
var RC_e5ad8f04c38047441643c6868992c277 = RC_e5ad8f04c38047441643c6868992c277Inner;
RC_e5ad8f04c38047441643c6868992c277.init();
}
});

define("tradershub.model$RL_7d09eb138f7abf181049d020e739a58f", ["exports", "@outsystems/runtime-core-js", "tradershub.model", "tradershub.model$RC_e5ad8f04c38047441643c6868992c277"], function (exports, OSRuntimeCore, tradershubModel) {
var OS = OSRuntimeCore;
class RL_7d09eb138f7abf181049d020e739a58f extends 
OS.DataTypes.GenericRecordList {
static getItemType() {
return tradershubModel.RC_e5ad8f04c38047441643c6868992c277;
}

}

tradershubModel.RL_7d09eb138f7abf181049d020e739a58f = RL_7d09eb138f7abf181049d020e739a58f;

});

define("tradershub.model$RL_7d169bd7c22bd4fc5143477f3a7cef9a", ["exports", "@outsystems/runtime-core-js", "OutSystemsMaps.model", "tradershub.model", "OutSystemsMaps.model$ST_0e474756a4be14d378c73cd05f602bcdStructure", "tradershub.referencesHealth", "tradershub.referencesHealth$OutSystemsMaps"], function (exports, OSRuntimeCore, OutSystemsMapsModel, tradershubModel) {
var OS = OSRuntimeCore;
class RL_7d169bd7c22bd4fc5143477f3a7cef9a extends 
OS.DataTypes.GenericRecordList {
static getItemType() {
return OutSystemsMapsModel.ST_0e474756a4be14d378c73cd05f602bcdStructure;
}

}

tradershubModel.RL_7d169bd7c22bd4fc5143477f3a7cef9a = RL_7d169bd7c22bd4fc5143477f3a7cef9a;

});

define("tradershub.model$RC_7e4d7faa4d992502884aad01de45414c", ["exports", "@outsystems/runtime-core-js", "tradershub.model", "tradershub.model$EN_5167e61acdec814a6025c00005dbc3d8EntityRecord"], function (exports, OSRuntimeCore, tradershubModel) {
var OS = OSRuntimeCore;
{class RC_7e4d7faa4d992502884aad01de45414cInner extends 
OS.DataTypes.GenericRecord {
static attributesToDeclare() {
return [
this.attr("Educationlevel", "educationlevelAttr", "Educationlevel", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new tradershubModel.EN_5167e61acdec814a6025c00005dbc3d8EntityRecord());
}, true, tradershubModel.EN_5167e61acdec814a6025c00005dbc3d8EntityRecord)
].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
}

static fromStructure(str) {
return new RC_7e4d7faa4d992502884aad01de45414c(new RC_7e4d7faa4d992502884aad01de45414c.RecordClass({
educationlevelAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
}

}

tradershubModel.RC_7e4d7faa4d992502884aad01de45414c = RC_7e4d7faa4d992502884aad01de45414cInner;

RC_7e4d7faa4d992502884aad01de45414cInner._isAnonymousRecord = true;
RC_7e4d7faa4d992502884aad01de45414cInner.UniqueId = "7e4d7faa-4d99-2502-884a-ad01de45414c";
var RC_7e4d7faa4d992502884aad01de45414c = RC_7e4d7faa4d992502884aad01de45414cInner;
RC_7e4d7faa4d992502884aad01de45414c.init();
}
});

define("tradershub.model$RL_7ea0e409b1b42e8e6d7ca54869209a73", ["exports", "@outsystems/runtime-core-js", "RESTAPIWebsocket.model", "tradershub.model", "RESTAPIWebsocket.model$ST_55ea19c18b42991c3f5575c063ad7ca7Structure", "tradershub.referencesHealth", "tradershub.referencesHealth$RESTAPIWebsocket"], function (exports, OSRuntimeCore, RESTAPIWebsocketModel, tradershubModel) {
var OS = OSRuntimeCore;
class RL_7ea0e409b1b42e8e6d7ca54869209a73 extends 
OS.DataTypes.GenericRecordList {
static getItemType() {
return RESTAPIWebsocketModel.ST_55ea19c18b42991c3f5575c063ad7ca7Structure;
}

}

tradershubModel.RL_7ea0e409b1b42e8e6d7ca54869209a73 = RL_7ea0e409b1b42e8e6d7ca54869209a73;

});

define("tradershub.model$RL_7ec701d4086b9503e816fe47fc7b3996", ["exports", "@outsystems/runtime-core-js", "RESTAPIWebsocket.model", "tradershub.model", "RESTAPIWebsocket.model$ST_6cf1ba858957788c000fe8d27578f9c1Structure", "tradershub.referencesHealth", "tradershub.referencesHealth$RESTAPIWebsocket"], function (exports, OSRuntimeCore, RESTAPIWebsocketModel, tradershubModel) {
var OS = OSRuntimeCore;
class RL_7ec701d4086b9503e816fe47fc7b3996 extends 
OS.DataTypes.GenericRecordList {
static getItemType() {
return RESTAPIWebsocketModel.ST_6cf1ba858957788c000fe8d27578f9c1Structure;
}

}

tradershubModel.RL_7ec701d4086b9503e816fe47fc7b3996 = RL_7ec701d4086b9503e816fe47fc7b3996;

});

define("tradershub.model$RL_7f0ff0d0a70a4e41424efbf5ef899b8d", ["exports", "@outsystems/runtime-core-js", "tradershub.model", "tradershub.model$EN_bf87ce2ee46f8f5bc73889fe14426739EntityRecord"], function (exports, OSRuntimeCore, tradershubModel) {
var OS = OSRuntimeCore;
class RL_7f0ff0d0a70a4e41424efbf5ef899b8d extends 
OS.DataTypes.GenericRecordList {
static getItemType() {
return tradershubModel.EN_bf87ce2ee46f8f5bc73889fe14426739EntityRecord;
}

}

tradershubModel.RL_7f0ff0d0a70a4e41424efbf5ef899b8d = RL_7f0ff0d0a70a4e41424efbf5ef899b8d;

});

define("tradershub.model$RC_d194ad619dcd3e2953e7b88a33989465", ["exports", "@outsystems/runtime-core-js", "tradershub.model", "tradershub.model$ST_58f94944873932b82fdc1272d5e6c98dStructure"], function (exports, OSRuntimeCore, tradershubModel) {
var OS = OSRuntimeCore;
{class RC_d194ad619dcd3e2953e7b88a33989465Inner extends 
OS.DataTypes.GenericRecord {
static attributesToDeclare() {
return [
this.attr("gaming_company", "gaming_companyAttr", "gaming_company", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new tradershubModel.ST_58f94944873932b82fdc1272d5e6c98dStructure());
}, true, tradershubModel.ST_58f94944873932b82fdc1272d5e6c98dStructure)
].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
}

static fromStructure(str) {
return new RC_d194ad619dcd3e2953e7b88a33989465(new RC_d194ad619dcd3e2953e7b88a33989465.RecordClass({
gaming_companyAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
}

}

tradershubModel.RC_d194ad619dcd3e2953e7b88a33989465 = RC_d194ad619dcd3e2953e7b88a33989465Inner;

RC_d194ad619dcd3e2953e7b88a33989465Inner._isAnonymousRecord = true;
RC_d194ad619dcd3e2953e7b88a33989465Inner.UniqueId = "d194ad61-9dcd-3e29-53e7-b88a33989465";
var RC_d194ad619dcd3e2953e7b88a33989465 = RC_d194ad619dcd3e2953e7b88a33989465Inner;
RC_d194ad619dcd3e2953e7b88a33989465.init();
}
});

define("tradershub.model$RL_803e002976c9f9e25a1d2e36ad764ae3", ["exports", "@outsystems/runtime-core-js", "tradershub.model", "tradershub.model$RC_d194ad619dcd3e2953e7b88a33989465"], function (exports, OSRuntimeCore, tradershubModel) {
var OS = OSRuntimeCore;
class RL_803e002976c9f9e25a1d2e36ad764ae3 extends 
OS.DataTypes.GenericRecordList {
static getItemType() {
return tradershubModel.RC_d194ad619dcd3e2953e7b88a33989465;
}

}

tradershubModel.RL_803e002976c9f9e25a1d2e36ad764ae3 = RL_803e002976c9f9e25a1d2e36ad764ae3;

});

define("tradershub.model$RL_806e82a94733d0af9e43960265151f80", ["exports", "@outsystems/runtime-core-js", "OutSystemsUI.model", "tradershub.model", "OutSystemsUI.model$ST_bc4abb4233d9ce894e855c520a20c76fStructure", "tradershub.referencesHealth", "tradershub.referencesHealth$OutSystemsUI"], function (exports, OSRuntimeCore, OutSystemsUIModel, tradershubModel) {
var OS = OSRuntimeCore;
class RL_806e82a94733d0af9e43960265151f80 extends 
OS.DataTypes.GenericRecordList {
static getItemType() {
return OutSystemsUIModel.ST_bc4abb4233d9ce894e855c520a20c76fStructure;
}

}

tradershubModel.RL_806e82a94733d0af9e43960265151f80 = RL_806e82a94733d0af9e43960265151f80;

});

define("tradershub.model$RL_80cc885cccb8696830df8ec337645f92", ["exports", "@outsystems/runtime-core-js", "tradershub.model", "tradershub.model$RC_4fc16da695108ad1b034b7256ffa868d"], function (exports, OSRuntimeCore, tradershubModel) {
var OS = OSRuntimeCore;
class RL_80cc885cccb8696830df8ec337645f92 extends 
OS.DataTypes.GenericRecordList {
static getItemType() {
return tradershubModel.RC_4fc16da695108ad1b034b7256ffa868d;
}

}

tradershubModel.RL_80cc885cccb8696830df8ec337645f92 = RL_80cc885cccb8696830df8ec337645f92;

});

define("tradershub.model$ST_eb286c497eeb9a2ab2c838f3628b06e8Structure", ["exports", "@outsystems/runtime-core-js", "tradershub.model", "tradershub.model$ST_b7420e17f48d13babe5f801a0124369cStructure", "tradershub.model$ST_20ab4504e981d74f2db21e1503a31089Structure"], function (exports, OSRuntimeCore, tradershubModel) {
var OS = OSRuntimeCore;
{class ST_eb286c497eeb9a2ab2c838f3628b06e8StructureInner extends 
OS.DataTypes.GenericRecord {
static attributesToDeclare() {
return [
this.attr("Echo_req", "echo_reqAttr", "echo_req", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new tradershubModel.ST_b7420e17f48d13babe5f801a0124369cStructure());
}, true, tradershubModel.ST_b7420e17f48d13babe5f801a0124369cStructure), 
this.attr("Msg_type", "msg_typeAttr", "msg_type", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("New_account_virtual", "new_account_virtualAttr", "new_account_virtual", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new tradershubModel.ST_20ab4504e981d74f2db21e1503a31089Structure());
}, true, tradershubModel.ST_20ab4504e981d74f2db21e1503a31089Structure), 
this.attr("Req_id", "req_idAttr", "req_id", false, false, OS.DataTypes.DataTypes.LongInteger, function () {
return OS.DataTypes.LongInteger.defaultValue;
}, true)
].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
}

}

tradershubModel.ST_eb286c497eeb9a2ab2c838f3628b06e8Structure = ST_eb286c497eeb9a2ab2c838f3628b06e8StructureInner;

var ST_eb286c497eeb9a2ab2c838f3628b06e8Structure = ST_eb286c497eeb9a2ab2c838f3628b06e8StructureInner;
ST_eb286c497eeb9a2ab2c838f3628b06e8Structure.init();
}
});

define("tradershub.model$RL_80e03d904edc95777511aa3702b39a89", ["exports", "@outsystems/runtime-core-js", "tradershub.model", "tradershub.model$ST_eb286c497eeb9a2ab2c838f3628b06e8Structure"], function (exports, OSRuntimeCore, tradershubModel) {
var OS = OSRuntimeCore;
class RL_80e03d904edc95777511aa3702b39a89 extends 
OS.DataTypes.GenericRecordList {
static getItemType() {
return tradershubModel.ST_eb286c497eeb9a2ab2c838f3628b06e8Structure;
}

}

tradershubModel.RL_80e03d904edc95777511aa3702b39a89 = RL_80e03d904edc95777511aa3702b39a89;

});

define("tradershub.model$RC_80e81fddca0089d3f29f81106c0bee34", ["exports", "@outsystems/runtime-core-js", "OutSystemsMaps.model", "tradershub.model", "OutSystemsMaps.model$EN_480235a969b3f42eac91ad5813fe9bf9EntityRecord", "tradershub.referencesHealth", "tradershub.referencesHealth$OutSystemsMaps"], function (exports, OSRuntimeCore, OutSystemsMapsModel, tradershubModel) {
var OS = OSRuntimeCore;
{class RC_80e81fddca0089d3f29f81106c0bee34Inner extends 
OS.DataTypes.GenericRecord {
static attributesToDeclare() {
return [
this.attr("Zoom", "zoomAttr", "Zoom", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new OutSystemsMapsModel.EN_480235a969b3f42eac91ad5813fe9bf9EntityRecord());
}, true, OutSystemsMapsModel.EN_480235a969b3f42eac91ad5813fe9bf9EntityRecord)
].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
}

static fromStructure(str) {
return new RC_80e81fddca0089d3f29f81106c0bee34(new RC_80e81fddca0089d3f29f81106c0bee34.RecordClass({
zoomAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
}

}

tradershubModel.RC_80e81fddca0089d3f29f81106c0bee34 = RC_80e81fddca0089d3f29f81106c0bee34Inner;

RC_80e81fddca0089d3f29f81106c0bee34Inner._isAnonymousRecord = true;
RC_80e81fddca0089d3f29f81106c0bee34Inner.UniqueId = "80e81fdd-ca00-89d3-f29f-81106c0bee34";
var RC_80e81fddca0089d3f29f81106c0bee34 = RC_80e81fddca0089d3f29f81106c0bee34Inner;
RC_80e81fddca0089d3f29f81106c0bee34.init();
}
});

define("tradershub.model$RL_815d85007a1f216f0067d3825a34d1a7", ["exports", "@outsystems/runtime-core-js", "OutSystemsMaps.model", "tradershub.model", "OutSystemsMaps.model$ST_c84e2ea85c3f77e3b083b2b79806c17aStructure", "tradershub.referencesHealth", "tradershub.referencesHealth$OutSystemsMaps"], function (exports, OSRuntimeCore, OutSystemsMapsModel, tradershubModel) {
var OS = OSRuntimeCore;
class RL_815d85007a1f216f0067d3825a34d1a7 extends 
OS.DataTypes.GenericRecordList {
static getItemType() {
return OutSystemsMapsModel.ST_c84e2ea85c3f77e3b083b2b79806c17aStructure;
}

}

tradershubModel.RL_815d85007a1f216f0067d3825a34d1a7 = RL_815d85007a1f216f0067d3825a34d1a7;

});

define("tradershub.model$RL_81d2bc71eb1c605f53ae134ad3caa1c0", ["exports", "@outsystems/runtime-core-js", "RESTAPIWebsocket.model", "tradershub.model", "RESTAPIWebsocket.model$ST_8812c3cbc0a0d322acb5354526a670b4Structure", "tradershub.referencesHealth", "tradershub.referencesHealth$RESTAPIWebsocket"], function (exports, OSRuntimeCore, RESTAPIWebsocketModel, tradershubModel) {
var OS = OSRuntimeCore;
class RL_81d2bc71eb1c605f53ae134ad3caa1c0 extends 
OS.DataTypes.GenericRecordList {
static getItemType() {
return RESTAPIWebsocketModel.ST_8812c3cbc0a0d322acb5354526a670b4Structure;
}

}

tradershubModel.RL_81d2bc71eb1c605f53ae134ad3caa1c0 = RL_81d2bc71eb1c605f53ae134ad3caa1c0;

});

define("tradershub.model$RC_89d8d49acaae089df34c4f6be6013a83", ["exports", "@outsystems/runtime-core-js", "tradershub.model", "tradershub.model$ST_7826619511bee33bd1dc03b2ea2c1717Structure"], function (exports, OSRuntimeCore, tradershubModel) {
var OS = OSRuntimeCore;
{class RC_89d8d49acaae089df34c4f6be6013a83Inner extends 
OS.DataTypes.GenericRecord {
static attributesToDeclare() {
return [
this.attr("NumberOfReview", "numberOfReviewAttr", "NumberOfReview", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new tradershubModel.ST_7826619511bee33bd1dc03b2ea2c1717Structure());
}, true, tradershubModel.ST_7826619511bee33bd1dc03b2ea2c1717Structure)
].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
}

static fromStructure(str) {
return new RC_89d8d49acaae089df34c4f6be6013a83(new RC_89d8d49acaae089df34c4f6be6013a83.RecordClass({
numberOfReviewAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
}

}

tradershubModel.RC_89d8d49acaae089df34c4f6be6013a83 = RC_89d8d49acaae089df34c4f6be6013a83Inner;

RC_89d8d49acaae089df34c4f6be6013a83Inner._isAnonymousRecord = true;
RC_89d8d49acaae089df34c4f6be6013a83Inner.UniqueId = "89d8d49a-caae-089d-f34c-4f6be6013a83";
var RC_89d8d49acaae089df34c4f6be6013a83 = RC_89d8d49acaae089df34c4f6be6013a83Inner;
RC_89d8d49acaae089df34c4f6be6013a83.init();
}
});

define("tradershub.model$RL_81ee15f1f34f9dff4c4f316479d40b9e", ["exports", "@outsystems/runtime-core-js", "tradershub.model", "tradershub.model$RC_89d8d49acaae089df34c4f6be6013a83"], function (exports, OSRuntimeCore, tradershubModel) {
var OS = OSRuntimeCore;
class RL_81ee15f1f34f9dff4c4f316479d40b9e extends 
OS.DataTypes.GenericRecordList {
static getItemType() {
return tradershubModel.RC_89d8d49acaae089df34c4f6be6013a83;
}

}

tradershubModel.RL_81ee15f1f34f9dff4c4f316479d40b9e = RL_81ee15f1f34f9dff4c4f316479d40b9e;

});

define("tradershub.model$RC_ced013358a82a813f1d9a5108f17ce79", ["exports", "@outsystems/runtime-core-js", "System_.model", "tradershub.model", "System_.model$ENUserEntityRecord", "tradershub.referencesHealth", "tradershub.referencesHealth$System_"], function (exports, OSRuntimeCore, System_Model, tradershubModel) {
var OS = OSRuntimeCore;
{class RC_ced013358a82a813f1d9a5108f17ce79Inner extends 
OS.DataTypes.GenericRecord {
static attributesToDeclare() {
return [
this.attr("User", "userAttr", "User", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new System_Model.ENUserEntityRecord());
}, true, System_Model.ENUserEntityRecord)
].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
}

static fromStructure(str) {
return new RC_ced013358a82a813f1d9a5108f17ce79(new RC_ced013358a82a813f1d9a5108f17ce79.RecordClass({
userAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
}

}

tradershubModel.RC_ced013358a82a813f1d9a5108f17ce79 = RC_ced013358a82a813f1d9a5108f17ce79Inner;

RC_ced013358a82a813f1d9a5108f17ce79Inner._isAnonymousRecord = true;
RC_ced013358a82a813f1d9a5108f17ce79Inner.UniqueId = "ced01335-8a82-a813-f1d9-a5108f17ce79";
var RC_ced013358a82a813f1d9a5108f17ce79 = RC_ced013358a82a813f1d9a5108f17ce79Inner;
RC_ced013358a82a813f1d9a5108f17ce79.init();
}
});

define("tradershub.model$RL_8430333e95ceffc00def96d8abb01f75", ["exports", "@outsystems/runtime-core-js", "tradershub.model", "tradershub.model$RC_ced013358a82a813f1d9a5108f17ce79"], function (exports, OSRuntimeCore, tradershubModel) {
var OS = OSRuntimeCore;
class RL_8430333e95ceffc00def96d8abb01f75 extends 
OS.DataTypes.GenericRecordList {
static getItemType() {
return tradershubModel.RC_ced013358a82a813f1d9a5108f17ce79;
}

}

tradershubModel.RL_8430333e95ceffc00def96d8abb01f75 = RL_8430333e95ceffc00def96d8abb01f75;

});

define("tradershub.model$RL_843bbe6b5508d5a1ce4c6547db1f1385", ["exports", "@outsystems/runtime-core-js", "OutSystemsUI.model", "tradershub.model", "OutSystemsUI.model$ST_34444d0742578c128ebc8b2594439346Structure", "tradershub.referencesHealth", "tradershub.referencesHealth$OutSystemsUI"], function (exports, OSRuntimeCore, OutSystemsUIModel, tradershubModel) {
var OS = OSRuntimeCore;
class RL_843bbe6b5508d5a1ce4c6547db1f1385 extends 
OS.DataTypes.GenericRecordList {
static getItemType() {
return OutSystemsUIModel.ST_34444d0742578c128ebc8b2594439346Structure;
}

}

tradershubModel.RL_843bbe6b5508d5a1ce4c6547db1f1385 = RL_843bbe6b5508d5a1ce4c6547db1f1385;

});

define("tradershub.model$RL_846c796de81ff5623d424107cc2528d7", ["exports", "@outsystems/runtime-core-js", "tradershub.model", "tradershub.model$ST_aed452511cf537505102a57a65fea54cStructure"], function (exports, OSRuntimeCore, tradershubModel) {
var OS = OSRuntimeCore;
class RL_846c796de81ff5623d424107cc2528d7 extends 
OS.DataTypes.GenericRecordList {
static getItemType() {
return tradershubModel.ST_aed452511cf537505102a57a65fea54cStructure;
}

}

tradershubModel.RL_846c796de81ff5623d424107cc2528d7 = RL_846c796de81ff5623d424107cc2528d7;

});

define("tradershub.model$RC_d186ae1becb56f86c126b4768e3f70d2", ["exports", "@outsystems/runtime-core-js", "OutSystemsMaps.model", "tradershub.model", "OutSystemsMaps.model$EN_2a64cd2fe4a253e65ea352434a6d389aEntityRecord", "tradershub.referencesHealth", "tradershub.referencesHealth$OutSystemsMaps"], function (exports, OSRuntimeCore, OutSystemsMapsModel, tradershubModel) {
var OS = OSRuntimeCore;
{class RC_d186ae1becb56f86c126b4768e3f70d2Inner extends 
OS.DataTypes.GenericRecord {
static attributesToDeclare() {
return [
this.attr("SearchTypes", "searchTypesAttr", "SearchTypes", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new OutSystemsMapsModel.EN_2a64cd2fe4a253e65ea352434a6d389aEntityRecord());
}, true, OutSystemsMapsModel.EN_2a64cd2fe4a253e65ea352434a6d389aEntityRecord)
].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
}

static fromStructure(str) {
return new RC_d186ae1becb56f86c126b4768e3f70d2(new RC_d186ae1becb56f86c126b4768e3f70d2.RecordClass({
searchTypesAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
}

}

tradershubModel.RC_d186ae1becb56f86c126b4768e3f70d2 = RC_d186ae1becb56f86c126b4768e3f70d2Inner;

RC_d186ae1becb56f86c126b4768e3f70d2Inner._isAnonymousRecord = true;
RC_d186ae1becb56f86c126b4768e3f70d2Inner.UniqueId = "d186ae1b-ecb5-6f86-c126-b4768e3f70d2";
var RC_d186ae1becb56f86c126b4768e3f70d2 = RC_d186ae1becb56f86c126b4768e3f70d2Inner;
RC_d186ae1becb56f86c126b4768e3f70d2.init();
}
});

define("tradershub.model$RL_848d56b8d953088a0f1dbc9b1b919b2e", ["exports", "@outsystems/runtime-core-js", "tradershub.model", "tradershub.model$RC_d186ae1becb56f86c126b4768e3f70d2"], function (exports, OSRuntimeCore, tradershubModel) {
var OS = OSRuntimeCore;
class RL_848d56b8d953088a0f1dbc9b1b919b2e extends 
OS.DataTypes.GenericRecordList {
static getItemType() {
return tradershubModel.RC_d186ae1becb56f86c126b4768e3f70d2;
}

}

tradershubModel.RL_848d56b8d953088a0f1dbc9b1b919b2e = RL_848d56b8d953088a0f1dbc9b1b919b2e;

});

define("tradershub.model$RC_890f16fe63a6b66b2130ac1a285dc1bf", ["exports", "@outsystems/runtime-core-js", "RESTAPIWebsocket.model", "tradershub.model", "RESTAPIWebsocket.model$ST_d845e9af38689337f2bff5d766253a88Structure", "tradershub.referencesHealth", "tradershub.referencesHealth$RESTAPIWebsocket"], function (exports, OSRuntimeCore, RESTAPIWebsocketModel, tradershubModel) {
var OS = OSRuntimeCore;
{class RC_890f16fe63a6b66b2130ac1a285dc1bfInner extends 
OS.DataTypes.GenericRecord {
static attributesToDeclare() {
return [
this.attr("Landing_company3", "landing_company3Attr", "Landing_company3", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new RESTAPIWebsocketModel.ST_d845e9af38689337f2bff5d766253a88Structure());
}, true, RESTAPIWebsocketModel.ST_d845e9af38689337f2bff5d766253a88Structure)
].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
}

static fromStructure(str) {
return new RC_890f16fe63a6b66b2130ac1a285dc1bf(new RC_890f16fe63a6b66b2130ac1a285dc1bf.RecordClass({
landing_company3Attr: OS.DataTypes.ImmutableBase.getData(str)
}));
}

}

tradershubModel.RC_890f16fe63a6b66b2130ac1a285dc1bf = RC_890f16fe63a6b66b2130ac1a285dc1bfInner;

RC_890f16fe63a6b66b2130ac1a285dc1bfInner._isAnonymousRecord = true;
RC_890f16fe63a6b66b2130ac1a285dc1bfInner.UniqueId = "890f16fe-63a6-b66b-2130-ac1a285dc1bf";
var RC_890f16fe63a6b66b2130ac1a285dc1bf = RC_890f16fe63a6b66b2130ac1a285dc1bfInner;
RC_890f16fe63a6b66b2130ac1a285dc1bf.init();
}
});

define("tradershub.model$RL_855c9279ae87db4555d2fbb8ba90afc5", ["exports", "@outsystems/runtime-core-js", "tradershub.model", "tradershub.model$RC_890f16fe63a6b66b2130ac1a285dc1bf"], function (exports, OSRuntimeCore, tradershubModel) {
var OS = OSRuntimeCore;
class RL_855c9279ae87db4555d2fbb8ba90afc5 extends 
OS.DataTypes.GenericRecordList {
static getItemType() {
return tradershubModel.RC_890f16fe63a6b66b2130ac1a285dc1bf;
}

}

tradershubModel.RL_855c9279ae87db4555d2fbb8ba90afc5 = RL_855c9279ae87db4555d2fbb8ba90afc5;

});

define("tradershub.model$RC_860a186f93e9fe7fe0d42f4282c2ec00", ["exports", "@outsystems/runtime-core-js", "OutSystemsCharts.model", "tradershub.model", "OutSystemsCharts.model$ST_e76d7672809d02d24c5a5adfeacd07eeStructure", "tradershub.referencesHealth", "tradershub.referencesHealth$OutSystemsCharts"], function (exports, OSRuntimeCore, OutSystemsChartsModel, tradershubModel) {
var OS = OSRuntimeCore;
{class RC_860a186f93e9fe7fe0d42f4282c2ec00Inner extends 
OS.DataTypes.GenericRecord {
static attributesToDeclare() {
return [
this.attr("Legacy_AdvancedDataPointFormat", "legacy_AdvancedDataPointFormatAttr", "Legacy_AdvancedDataPointFormat", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new OutSystemsChartsModel.ST_e76d7672809d02d24c5a5adfeacd07eeStructure());
}, true, OutSystemsChartsModel.ST_e76d7672809d02d24c5a5adfeacd07eeStructure)
].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
}

static fromStructure(str) {
return new RC_860a186f93e9fe7fe0d42f4282c2ec00(new RC_860a186f93e9fe7fe0d42f4282c2ec00.RecordClass({
legacy_AdvancedDataPointFormatAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
}

}

tradershubModel.RC_860a186f93e9fe7fe0d42f4282c2ec00 = RC_860a186f93e9fe7fe0d42f4282c2ec00Inner;

RC_860a186f93e9fe7fe0d42f4282c2ec00Inner._isAnonymousRecord = true;
RC_860a186f93e9fe7fe0d42f4282c2ec00Inner.UniqueId = "860a186f-93e9-fe7f-e0d4-2f4282c2ec00";
var RC_860a186f93e9fe7fe0d42f4282c2ec00 = RC_860a186f93e9fe7fe0d42f4282c2ec00Inner;
RC_860a186f93e9fe7fe0d42f4282c2ec00.init();
}
});

define("tradershub.model$RL_8684980c742003ee8436e74bed61dae5", ["exports", "@outsystems/runtime-core-js", "tradershub.model", "tradershub.model$ST_e0a1a95fb0817fa5c2f5eb8ab5528dddStructure"], function (exports, OSRuntimeCore, tradershubModel) {
var OS = OSRuntimeCore;
class RL_8684980c742003ee8436e74bed61dae5 extends 
OS.DataTypes.GenericRecordList {
static getItemType() {
return tradershubModel.ST_e0a1a95fb0817fa5c2f5eb8ab5528dddStructure;
}

}

tradershubModel.RL_8684980c742003ee8436e74bed61dae5 = RL_8684980c742003ee8436e74bed61dae5;

});

define("tradershub.model$RC_87351e3b0fa2ca59cf6c6749c6405006", ["exports", "@outsystems/runtime-core-js", "OutSystemsUI.model", "tradershub.model", "OutSystemsUI.model$EN_849d11ab47adc426b5ce8d8c815c4fbfEntityRecord", "tradershub.referencesHealth", "tradershub.referencesHealth$OutSystemsUI"], function (exports, OSRuntimeCore, OutSystemsUIModel, tradershubModel) {
var OS = OSRuntimeCore;
{class RC_87351e3b0fa2ca59cf6c6749c6405006Inner extends 
OS.DataTypes.GenericRecord {
static attributesToDeclare() {
return [
this.attr("Color", "colorAttr", "Color", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new OutSystemsUIModel.EN_849d11ab47adc426b5ce8d8c815c4fbfEntityRecord());
}, true, OutSystemsUIModel.EN_849d11ab47adc426b5ce8d8c815c4fbfEntityRecord)
].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
}

static fromStructure(str) {
return new RC_87351e3b0fa2ca59cf6c6749c6405006(new RC_87351e3b0fa2ca59cf6c6749c6405006.RecordClass({
colorAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
}

}

tradershubModel.RC_87351e3b0fa2ca59cf6c6749c6405006 = RC_87351e3b0fa2ca59cf6c6749c6405006Inner;

RC_87351e3b0fa2ca59cf6c6749c6405006Inner._isAnonymousRecord = true;
RC_87351e3b0fa2ca59cf6c6749c6405006Inner.UniqueId = "87351e3b-0fa2-ca59-cf6c-6749c6405006";
var RC_87351e3b0fa2ca59cf6c6749c6405006 = RC_87351e3b0fa2ca59cf6c6749c6405006Inner;
RC_87351e3b0fa2ca59cf6c6749c6405006.init();
}
});

define("tradershub.model$RL_87f01884048bc4149b47e504871e0d97", ["exports", "@outsystems/runtime-core-js", "tradershub.model", "tradershub.model$ST_1a4f07e6c8d6ea2e2ddfeb34b9b7a3c8Structure"], function (exports, OSRuntimeCore, tradershubModel) {
var OS = OSRuntimeCore;
class RL_87f01884048bc4149b47e504871e0d97 extends 
OS.DataTypes.GenericRecordList {
static getItemType() {
return tradershubModel.ST_1a4f07e6c8d6ea2e2ddfeb34b9b7a3c8Structure;
}

}

tradershubModel.RL_87f01884048bc4149b47e504871e0d97 = RL_87f01884048bc4149b47e504871e0d97;

});

define("tradershub.model$RL_886e75f265a0a7fbc13b3d74d89a8d0b", ["exports", "@outsystems/runtime-core-js", "tradershub.model", "tradershub.model$RC_424d57a2d666c8edb0343600d6705eee"], function (exports, OSRuntimeCore, tradershubModel) {
var OS = OSRuntimeCore;
class RL_886e75f265a0a7fbc13b3d74d89a8d0b extends 
OS.DataTypes.GenericRecordList {
static getItemType() {
return tradershubModel.RC_424d57a2d666c8edb0343600d6705eee;
}

}

tradershubModel.RL_886e75f265a0a7fbc13b3d74d89a8d0b = RL_886e75f265a0a7fbc13b3d74d89a8d0b;

});

define("tradershub.model$RL_89efb8ec15cf4e133db42b43e8a70d31", ["exports", "@outsystems/runtime-core-js", "RESTAPIWebsocket.model", "tradershub.model", "RESTAPIWebsocket.model$ST_8517d9c8b73e866553a1a7b806af5079Structure", "tradershub.referencesHealth", "tradershub.referencesHealth$RESTAPIWebsocket"], function (exports, OSRuntimeCore, RESTAPIWebsocketModel, tradershubModel) {
var OS = OSRuntimeCore;
class RL_89efb8ec15cf4e133db42b43e8a70d31 extends 
OS.DataTypes.GenericRecordList {
static getItemType() {
return RESTAPIWebsocketModel.ST_8517d9c8b73e866553a1a7b806af5079Structure;
}

}

tradershubModel.RL_89efb8ec15cf4e133db42b43e8a70d31 = RL_89efb8ec15cf4e133db42b43e8a70d31;

});

define("tradershub.model$RL_8a260457f78e7be6757e0d4770e14829", ["exports", "@outsystems/runtime-core-js", "tradershub.model", "tradershub.model$ST_d9250f167f0b0818f60ee73b22ec1a06Structure"], function (exports, OSRuntimeCore, tradershubModel) {
var OS = OSRuntimeCore;
class RL_8a260457f78e7be6757e0d4770e14829 extends 
OS.DataTypes.GenericRecordList {
static getItemType() {
return tradershubModel.ST_d9250f167f0b0818f60ee73b22ec1a06Structure;
}

}

tradershubModel.RL_8a260457f78e7be6757e0d4770e14829 = RL_8a260457f78e7be6757e0d4770e14829;

});

define("tradershub.model$RL_8add23b891a53c086b7017fd4cdd211b", ["exports", "@outsystems/runtime-core-js", "OutSystemsUI.model", "tradershub.model", "OutSystemsUI.model$EN_a14a98f7fea6a66cbe59ce2905b45c09EntityRecord", "tradershub.referencesHealth", "tradershub.referencesHealth$OutSystemsUI"], function (exports, OSRuntimeCore, OutSystemsUIModel, tradershubModel) {
var OS = OSRuntimeCore;
class RL_8add23b891a53c086b7017fd4cdd211b extends 
OS.DataTypes.GenericRecordList {
static getItemType() {
return OutSystemsUIModel.EN_a14a98f7fea6a66cbe59ce2905b45c09EntityRecord;
}

}

tradershubModel.RL_8add23b891a53c086b7017fd4cdd211b = RL_8add23b891a53c086b7017fd4cdd211b;

});

define("tradershub.model$RL_8b3193777919a00b12740a1aa0e7a669", ["exports", "@outsystems/runtime-core-js", "RESTAPIWebsocket.model", "tradershub.model", "RESTAPIWebsocket.model$ST_30cf47a274820f1ac96cf412803888fdStructure", "tradershub.referencesHealth", "tradershub.referencesHealth$RESTAPIWebsocket"], function (exports, OSRuntimeCore, RESTAPIWebsocketModel, tradershubModel) {
var OS = OSRuntimeCore;
class RL_8b3193777919a00b12740a1aa0e7a669 extends 
OS.DataTypes.GenericRecordList {
static getItemType() {
return RESTAPIWebsocketModel.ST_30cf47a274820f1ac96cf412803888fdStructure;
}

}

tradershubModel.RL_8b3193777919a00b12740a1aa0e7a669 = RL_8b3193777919a00b12740a1aa0e7a669;

});

define("tradershub.model$RL_8b34cec2d3a4e3170e329009c7e2bef8", ["exports", "@outsystems/runtime-core-js", "System_.model", "tradershub.model", "System_.model$UpdateUserFailureReasonRec", "tradershub.referencesHealth", "tradershub.referencesHealth$System_"], function (exports, OSRuntimeCore, System_Model, tradershubModel) {
var OS = OSRuntimeCore;
class RL_8b34cec2d3a4e3170e329009c7e2bef8 extends 
OS.DataTypes.GenericRecordList {
static getItemType() {
return OS.SystemStructures.UpdateUserFailureReasonRec;
}

}

tradershubModel.RL_8b34cec2d3a4e3170e329009c7e2bef8 = RL_8b34cec2d3a4e3170e329009c7e2bef8;

});

define("tradershub.model$RC_ceb7e55e840c2cd59f22b82751ae090b", ["exports", "@outsystems/runtime-core-js", "tradershub.model", "tradershub.model$EN_e3d432d12bf5f1522c0c5471a90201caEntityRecord"], function (exports, OSRuntimeCore, tradershubModel) {
var OS = OSRuntimeCore;
{class RC_ceb7e55e840c2cd59f22b82751ae090bInner extends 
OS.DataTypes.GenericRecord {
static attributesToDeclare() {
return [
this.attr("Sourceofwealth", "sourceofwealthAttr", "Sourceofwealth", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new tradershubModel.EN_e3d432d12bf5f1522c0c5471a90201caEntityRecord());
}, true, tradershubModel.EN_e3d432d12bf5f1522c0c5471a90201caEntityRecord)
].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
}

static fromStructure(str) {
return new RC_ceb7e55e840c2cd59f22b82751ae090b(new RC_ceb7e55e840c2cd59f22b82751ae090b.RecordClass({
sourceofwealthAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
}

}

tradershubModel.RC_ceb7e55e840c2cd59f22b82751ae090b = RC_ceb7e55e840c2cd59f22b82751ae090bInner;

RC_ceb7e55e840c2cd59f22b82751ae090bInner._isAnonymousRecord = true;
RC_ceb7e55e840c2cd59f22b82751ae090bInner.UniqueId = "ceb7e55e-840c-2cd5-9f22-b82751ae090b";
var RC_ceb7e55e840c2cd59f22b82751ae090b = RC_ceb7e55e840c2cd59f22b82751ae090bInner;
RC_ceb7e55e840c2cd59f22b82751ae090b.init();
}
});

define("tradershub.model$RL_8b876ebc0cac61bca12a8f14726bbdd0", ["exports", "@outsystems/runtime-core-js", "tradershub.model", "tradershub.model$RC_ceb7e55e840c2cd59f22b82751ae090b"], function (exports, OSRuntimeCore, tradershubModel) {
var OS = OSRuntimeCore;
class RL_8b876ebc0cac61bca12a8f14726bbdd0 extends 
OS.DataTypes.GenericRecordList {
static getItemType() {
return tradershubModel.RC_ceb7e55e840c2cd59f22b82751ae090b;
}

}

tradershubModel.RL_8b876ebc0cac61bca12a8f14726bbdd0 = RL_8b876ebc0cac61bca12a8f14726bbdd0;

});

define("tradershub.model$RL_a401bbc515f324607832f48e5f845362", ["exports", "@outsystems/runtime-core-js", "OutSystemsCharts.model", "tradershub.model", "OutSystemsCharts.model$ST_8ceac0b3cf282b6c0c3a95ffb4156762Structure", "tradershub.referencesHealth", "tradershub.referencesHealth$OutSystemsCharts"], function (exports, OSRuntimeCore, OutSystemsChartsModel, tradershubModel) {
var OS = OSRuntimeCore;
class RL_a401bbc515f324607832f48e5f845362 extends 
OS.DataTypes.GenericRecordList {
static getItemType() {
return OutSystemsChartsModel.ST_8ceac0b3cf282b6c0c3a95ffb4156762Structure;
}

}

tradershubModel.RL_a401bbc515f324607832f48e5f845362 = RL_a401bbc515f324607832f48e5f845362;

});

define("tradershub.model$RC_8bd0ab07a3f3c2d2a572a84134c564bd", ["exports", "@outsystems/runtime-core-js", "OutSystemsCharts.model", "tradershub.model", "OutSystemsCharts.model$ST_934e7357fa36babd8aa5d2585785fd1aStructure", "tradershub.referencesHealth", "tradershub.referencesHealth$OutSystemsCharts"], function (exports, OSRuntimeCore, OutSystemsChartsModel, tradershubModel) {
var OS = OSRuntimeCore;
{class RC_8bd0ab07a3f3c2d2a572a84134c564bdInner extends 
OS.DataTypes.GenericRecord {
static attributesToDeclare() {
return [
this.attr("Legacy_AdvancedFormat", "legacy_AdvancedFormatAttr", "Legacy_AdvancedFormat", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new OutSystemsChartsModel.ST_934e7357fa36babd8aa5d2585785fd1aStructure());
}, true, OutSystemsChartsModel.ST_934e7357fa36babd8aa5d2585785fd1aStructure)
].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
}

static fromStructure(str) {
return new RC_8bd0ab07a3f3c2d2a572a84134c564bd(new RC_8bd0ab07a3f3c2d2a572a84134c564bd.RecordClass({
legacy_AdvancedFormatAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
}

}

tradershubModel.RC_8bd0ab07a3f3c2d2a572a84134c564bd = RC_8bd0ab07a3f3c2d2a572a84134c564bdInner;

RC_8bd0ab07a3f3c2d2a572a84134c564bdInner._isAnonymousRecord = true;
RC_8bd0ab07a3f3c2d2a572a84134c564bdInner.UniqueId = "8bd0ab07-a3f3-c2d2-a572-a84134c564bd";
var RC_8bd0ab07a3f3c2d2a572a84134c564bd = RC_8bd0ab07a3f3c2d2a572a84134c564bdInner;
RC_8bd0ab07a3f3c2d2a572a84134c564bd.init();
}
});

define("tradershub.model$RL_8c4fcbceb61f253df73da643e4b9ae13", ["exports", "@outsystems/runtime-core-js", "OutSystemsCharts.model", "tradershub.model", "OutSystemsCharts.model$ST_639b8c480159ce740702f0a0cf3b55a5Structure", "tradershub.referencesHealth", "tradershub.referencesHealth$OutSystemsCharts"], function (exports, OSRuntimeCore, OutSystemsChartsModel, tradershubModel) {
var OS = OSRuntimeCore;
class RL_8c4fcbceb61f253df73da643e4b9ae13 extends 
OS.DataTypes.GenericRecordList {
static getItemType() {
return OutSystemsChartsModel.ST_639b8c480159ce740702f0a0cf3b55a5Structure;
}

}

tradershubModel.RL_8c4fcbceb61f253df73da643e4b9ae13 = RL_8c4fcbceb61f253df73da643e4b9ae13;

});

define("tradershub.model$RC_8f8c9b77bcc0996564febb7d38ea930a", ["exports", "@outsystems/runtime-core-js", "System_.model", "tradershub.model", "System_.model$StartResetPasswordResultRec", "tradershub.referencesHealth", "tradershub.referencesHealth$System_"], function (exports, OSRuntimeCore, System_Model, tradershubModel) {
var OS = OSRuntimeCore;
{class RC_8f8c9b77bcc0996564febb7d38ea930aInner extends 
OS.DataTypes.GenericRecord {
static attributesToDeclare() {
return [
this.attr("StartResetPasswordResult", "startResetPasswordResultAttr", "StartResetPasswordResult", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new OS.SystemStructures.StartResetPasswordResultRec());
}, true, OS.SystemStructures.StartResetPasswordResultRec)
].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
}

static fromStructure(str) {
return new RC_8f8c9b77bcc0996564febb7d38ea930a(new RC_8f8c9b77bcc0996564febb7d38ea930a.RecordClass({
startResetPasswordResultAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
}

}

tradershubModel.RC_8f8c9b77bcc0996564febb7d38ea930a = RC_8f8c9b77bcc0996564febb7d38ea930aInner;

RC_8f8c9b77bcc0996564febb7d38ea930aInner._isAnonymousRecord = true;
RC_8f8c9b77bcc0996564febb7d38ea930aInner.UniqueId = "8f8c9b77-bcc0-9965-64fe-bb7d38ea930a";
var RC_8f8c9b77bcc0996564febb7d38ea930a = RC_8f8c9b77bcc0996564febb7d38ea930aInner;
RC_8f8c9b77bcc0996564febb7d38ea930a.init();
}
});

define("tradershub.model$RL_8c6f3d2b086b4a75242a7e7c084f1692", ["exports", "@outsystems/runtime-core-js", "tradershub.model", "tradershub.model$RC_8f8c9b77bcc0996564febb7d38ea930a"], function (exports, OSRuntimeCore, tradershubModel) {
var OS = OSRuntimeCore;
class RL_8c6f3d2b086b4a75242a7e7c084f1692 extends 
OS.DataTypes.GenericRecordList {
static getItemType() {
return tradershubModel.RC_8f8c9b77bcc0996564febb7d38ea930a;
}

}

tradershubModel.RL_8c6f3d2b086b4a75242a7e7c084f1692 = RL_8c6f3d2b086b4a75242a7e7c084f1692;

});

define("tradershub.model$RL_8cb164b27a70600521e3160acb211c45", ["exports", "@outsystems/runtime-core-js", "OutSystemsMaps.model", "tradershub.model", "OutSystemsMaps.model$ST_c2a46cf64d2acc4b38d805712495224cStructure", "tradershub.referencesHealth", "tradershub.referencesHealth$OutSystemsMaps"], function (exports, OSRuntimeCore, OutSystemsMapsModel, tradershubModel) {
var OS = OSRuntimeCore;
class RL_8cb164b27a70600521e3160acb211c45 extends 
OS.DataTypes.GenericRecordList {
static getItemType() {
return OutSystemsMapsModel.ST_c2a46cf64d2acc4b38d805712495224cStructure;
}

}

tradershubModel.RL_8cb164b27a70600521e3160acb211c45 = RL_8cb164b27a70600521e3160acb211c45;

});

define("tradershub.model$RC_8ccc091579545400bb5558b597337647", ["exports", "@outsystems/runtime-core-js", "RESTAPIWebsocket.model", "tradershub.model", "RESTAPIWebsocket.model$ST_803bffb999fad6a38040b2086877902eStructure", "tradershub.referencesHealth", "tradershub.referencesHealth$RESTAPIWebsocket"], function (exports, OSRuntimeCore, RESTAPIWebsocketModel, tradershubModel) {
var OS = OSRuntimeCore;
{class RC_8ccc091579545400bb5558b597337647Inner extends 
OS.DataTypes.GenericRecord {
static attributesToDeclare() {
return [
this.attr("Passport", "passportAttr", "Passport", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new RESTAPIWebsocketModel.ST_803bffb999fad6a38040b2086877902eStructure());
}, true, RESTAPIWebsocketModel.ST_803bffb999fad6a38040b2086877902eStructure)
].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
}

static fromStructure(str) {
return new RC_8ccc091579545400bb5558b597337647(new RC_8ccc091579545400bb5558b597337647.RecordClass({
passportAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
}

}

tradershubModel.RC_8ccc091579545400bb5558b597337647 = RC_8ccc091579545400bb5558b597337647Inner;

RC_8ccc091579545400bb5558b597337647Inner._isAnonymousRecord = true;
RC_8ccc091579545400bb5558b597337647Inner.UniqueId = "8ccc0915-7954-5400-bb55-58b597337647";
var RC_8ccc091579545400bb5558b597337647 = RC_8ccc091579545400bb5558b597337647Inner;
RC_8ccc091579545400bb5558b597337647.init();
}
});

define("tradershub.model$RL_8da67595edc06c9fadd5ecd2611bc025", ["exports", "@outsystems/runtime-core-js", "OutSystemsMaps.model", "tradershub.model", "OutSystemsMaps.model$ST_7cd861eaa819851d6fba6d8150ed8cc1Structure", "tradershub.referencesHealth", "tradershub.referencesHealth$OutSystemsMaps"], function (exports, OSRuntimeCore, OutSystemsMapsModel, tradershubModel) {
var OS = OSRuntimeCore;
class RL_8da67595edc06c9fadd5ecd2611bc025 extends 
OS.DataTypes.GenericRecordList {
static getItemType() {
return OutSystemsMapsModel.ST_7cd861eaa819851d6fba6d8150ed8cc1Structure;
}

}

tradershubModel.RL_8da67595edc06c9fadd5ecd2611bc025 = RL_8da67595edc06c9fadd5ecd2611bc025;

});

define("tradershub.model$RL_8da890a2ab94a0136e908cf707b5f8fe", ["exports", "@outsystems/runtime-core-js", "tradershub.model", "tradershub.model$RC_0deb69ca07bab991a82d69c39659451c"], function (exports, OSRuntimeCore, tradershubModel) {
var OS = OSRuntimeCore;
class RL_8da890a2ab94a0136e908cf707b5f8fe extends 
OS.DataTypes.GenericRecordList {
static getItemType() {
return tradershubModel.RC_0deb69ca07bab991a82d69c39659451c;
}

}

tradershubModel.RL_8da890a2ab94a0136e908cf707b5f8fe = RL_8da890a2ab94a0136e908cf707b5f8fe;

});

define("tradershub.model$RL_8de4b358808b47ceee8bb3f48b3a56e0", ["exports", "@outsystems/runtime-core-js", "tradershub.model", "tradershub.model$RC_5214bc4138c7449e8ae1a2e275e6e3fd"], function (exports, OSRuntimeCore, tradershubModel) {
var OS = OSRuntimeCore;
class RL_8de4b358808b47ceee8bb3f48b3a56e0 extends 
OS.DataTypes.GenericRecordList {
static getItemType() {
return tradershubModel.RC_5214bc4138c7449e8ae1a2e275e6e3fd;
}

}

tradershubModel.RL_8de4b358808b47ceee8bb3f48b3a56e0 = RL_8de4b358808b47ceee8bb3f48b3a56e0;

});

define("tradershub.model$RL_8e08aa6b335b5f40c1d1ce27493301ad", ["exports", "@outsystems/runtime-core-js", "tradershub.model", "tradershub.model$RC_44b7e8f0764c9d3d615c2b316db93ff7"], function (exports, OSRuntimeCore, tradershubModel) {
var OS = OSRuntimeCore;
class RL_8e08aa6b335b5f40c1d1ce27493301ad extends 
OS.DataTypes.GenericRecordList {
static getItemType() {
return tradershubModel.RC_44b7e8f0764c9d3d615c2b316db93ff7;
}

}

tradershubModel.RL_8e08aa6b335b5f40c1d1ce27493301ad = RL_8e08aa6b335b5f40c1d1ce27493301ad;

});

define("tradershub.model$RL_8e0fc5c9e799d27970a97b6552ea83ed", ["exports", "@outsystems/runtime-core-js", "tradershub.model", "tradershub.model$RC_1ea63146d7f1d969afc206832e751192"], function (exports, OSRuntimeCore, tradershubModel) {
var OS = OSRuntimeCore;
class RL_8e0fc5c9e799d27970a97b6552ea83ed extends 
OS.DataTypes.GenericRecordList {
static getItemType() {
return tradershubModel.RC_1ea63146d7f1d969afc206832e751192;
}

}

tradershubModel.RL_8e0fc5c9e799d27970a97b6552ea83ed = RL_8e0fc5c9e799d27970a97b6552ea83ed;

});

define("tradershub.model$RL_8ed647be048e617fa817eb8a6da1f2ef", ["exports", "@outsystems/runtime-core-js", "tradershub.model", "tradershub.model$RC_2b9e41428d5c5ca3b04a80be4ce98f53"], function (exports, OSRuntimeCore, tradershubModel) {
var OS = OSRuntimeCore;
class RL_8ed647be048e617fa817eb8a6da1f2ef extends 
OS.DataTypes.GenericRecordList {
static getItemType() {
return tradershubModel.RC_2b9e41428d5c5ca3b04a80be4ce98f53;
}

}

tradershubModel.RL_8ed647be048e617fa817eb8a6da1f2ef = RL_8ed647be048e617fa817eb8a6da1f2ef;

});

define("tradershub.model$RC_9ac3a73b5c3ddd8f3923cd00427e8e10", ["exports", "@outsystems/runtime-core-js", "OutSystemsCharts.model", "tradershub.model", "OutSystemsCharts.model$ST_80a54fdc5a44237df505b3e5b63ad0feStructure", "tradershub.referencesHealth", "tradershub.referencesHealth$OutSystemsCharts"], function (exports, OSRuntimeCore, OutSystemsChartsModel, tradershubModel) {
var OS = OSRuntimeCore;
{class RC_9ac3a73b5c3ddd8f3923cd00427e8e10Inner extends 
OS.DataTypes.GenericRecord {
static attributesToDeclare() {
return [
this.attr("Legacy_YAxisFormat", "legacy_YAxisFormatAttr", "Legacy_YAxisFormat", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new OutSystemsChartsModel.ST_80a54fdc5a44237df505b3e5b63ad0feStructure());
}, true, OutSystemsChartsModel.ST_80a54fdc5a44237df505b3e5b63ad0feStructure)
].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
}

static fromStructure(str) {
return new RC_9ac3a73b5c3ddd8f3923cd00427e8e10(new RC_9ac3a73b5c3ddd8f3923cd00427e8e10.RecordClass({
legacy_YAxisFormatAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
}

}

tradershubModel.RC_9ac3a73b5c3ddd8f3923cd00427e8e10 = RC_9ac3a73b5c3ddd8f3923cd00427e8e10Inner;

RC_9ac3a73b5c3ddd8f3923cd00427e8e10Inner._isAnonymousRecord = true;
RC_9ac3a73b5c3ddd8f3923cd00427e8e10Inner.UniqueId = "9ac3a73b-5c3d-dd8f-3923-cd00427e8e10";
var RC_9ac3a73b5c3ddd8f3923cd00427e8e10 = RC_9ac3a73b5c3ddd8f3923cd00427e8e10Inner;
RC_9ac3a73b5c3ddd8f3923cd00427e8e10.init();
}
});

define("tradershub.model$RL_8ed7a0e74bf62a56d225f393fa1fdf35", ["exports", "@outsystems/runtime-core-js", "tradershub.model", "tradershub.model$RC_9ac3a73b5c3ddd8f3923cd00427e8e10"], function (exports, OSRuntimeCore, tradershubModel) {
var OS = OSRuntimeCore;
class RL_8ed7a0e74bf62a56d225f393fa1fdf35 extends 
OS.DataTypes.GenericRecordList {
static getItemType() {
return tradershubModel.RC_9ac3a73b5c3ddd8f3923cd00427e8e10;
}

}

tradershubModel.RL_8ed7a0e74bf62a56d225f393fa1fdf35 = RL_8ed7a0e74bf62a56d225f393fa1fdf35;

});

define("tradershub.model$RL_8f663be7596d4724f6146bc0b1d8cb69", ["exports", "@outsystems/runtime-core-js", "OutSystemsUI.model", "tradershub.model", "OutSystemsUI.model$ST_5c08eaa15b890a2d617cabe547c34f0bStructure", "tradershub.referencesHealth", "tradershub.referencesHealth$OutSystemsUI"], function (exports, OSRuntimeCore, OutSystemsUIModel, tradershubModel) {
var OS = OSRuntimeCore;
class RL_8f663be7596d4724f6146bc0b1d8cb69 extends 
OS.DataTypes.GenericRecordList {
static getItemType() {
return OutSystemsUIModel.ST_5c08eaa15b890a2d617cabe547c34f0bStructure;
}

}

tradershubModel.RL_8f663be7596d4724f6146bc0b1d8cb69 = RL_8f663be7596d4724f6146bc0b1d8cb69;

});

define("tradershub.model$RC_8f83807ccf626a579bfcce6d9964e931", ["exports", "@outsystems/runtime-core-js", "tradershub.model", "tradershub.model$ST_2437043bbd31c030b06d37eb045b623aStructure"], function (exports, OSRuntimeCore, tradershubModel) {
var OS = OSRuntimeCore;
{class RC_8f83807ccf626a579bfcce6d9964e931Inner extends 
OS.DataTypes.GenericRecord {
static attributesToDeclare() {
return [
this.attr("EmploymentDetailsValidationError", "employmentDetailsValidationErrorAttr", "EmploymentDetailsValidationError", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new tradershubModel.ST_2437043bbd31c030b06d37eb045b623aStructure());
}, true, tradershubModel.ST_2437043bbd31c030b06d37eb045b623aStructure)
].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
}

static fromStructure(str) {
return new RC_8f83807ccf626a579bfcce6d9964e931(new RC_8f83807ccf626a579bfcce6d9964e931.RecordClass({
employmentDetailsValidationErrorAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
}

}

tradershubModel.RC_8f83807ccf626a579bfcce6d9964e931 = RC_8f83807ccf626a579bfcce6d9964e931Inner;

RC_8f83807ccf626a579bfcce6d9964e931Inner._isAnonymousRecord = true;
RC_8f83807ccf626a579bfcce6d9964e931Inner.UniqueId = "8f83807c-cf62-6a57-9bfc-ce6d9964e931";
var RC_8f83807ccf626a579bfcce6d9964e931 = RC_8f83807ccf626a579bfcce6d9964e931Inner;
RC_8f83807ccf626a579bfcce6d9964e931.init();
}
});

define("tradershub.model$RC_f27a73ddd0c68892a18a285e288b3120", ["exports", "@outsystems/runtime-core-js", "tradershub.model", "tradershub.model$ST_8b73f10a0c950b9427aef4a06a80a213Structure"], function (exports, OSRuntimeCore, tradershubModel) {
var OS = OSRuntimeCore;
{class RC_f27a73ddd0c68892a18a285e288b3120Inner extends 
OS.DataTypes.GenericRecord {
static attributesToDeclare() {
return [
this.attr("New_account_real", "new_account_realAttr", "New_account_real", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new tradershubModel.ST_8b73f10a0c950b9427aef4a06a80a213Structure());
}, true, tradershubModel.ST_8b73f10a0c950b9427aef4a06a80a213Structure)
].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
}

static fromStructure(str) {
return new RC_f27a73ddd0c68892a18a285e288b3120(new RC_f27a73ddd0c68892a18a285e288b3120.RecordClass({
new_account_realAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
}

}

tradershubModel.RC_f27a73ddd0c68892a18a285e288b3120 = RC_f27a73ddd0c68892a18a285e288b3120Inner;

RC_f27a73ddd0c68892a18a285e288b3120Inner._isAnonymousRecord = true;
RC_f27a73ddd0c68892a18a285e288b3120Inner.UniqueId = "f27a73dd-d0c6-8892-a18a-285e288b3120";
var RC_f27a73ddd0c68892a18a285e288b3120 = RC_f27a73ddd0c68892a18a285e288b3120Inner;
RC_f27a73ddd0c68892a18a285e288b3120.init();
}
});

define("tradershub.model$RL_8fcf910eadb6030f7c326b732571662d", ["exports", "@outsystems/runtime-core-js", "tradershub.model", "tradershub.model$RC_f27a73ddd0c68892a18a285e288b3120"], function (exports, OSRuntimeCore, tradershubModel) {
var OS = OSRuntimeCore;
class RL_8fcf910eadb6030f7c326b732571662d extends 
OS.DataTypes.GenericRecordList {
static getItemType() {
return tradershubModel.RC_f27a73ddd0c68892a18a285e288b3120;
}

}

tradershubModel.RL_8fcf910eadb6030f7c326b732571662d = RL_8fcf910eadb6030f7c326b732571662d;

});

define("tradershub.model$RL_904325e5d042a099908ed28253c5b8a6", ["exports", "@outsystems/runtime-core-js", "tradershub.model", "tradershub.model$RC_0af1f162a4f117f1f3e8ae4dce5af0db"], function (exports, OSRuntimeCore, tradershubModel) {
var OS = OSRuntimeCore;
class RL_904325e5d042a099908ed28253c5b8a6 extends 
OS.DataTypes.GenericRecordList {
static getItemType() {
return tradershubModel.RC_0af1f162a4f117f1f3e8ae4dce5af0db;
}

}

tradershubModel.RL_904325e5d042a099908ed28253c5b8a6 = RL_904325e5d042a099908ed28253c5b8a6;

});

define("tradershub.model$RC_9080b1888061a5533ea915e22804d4ea", ["exports", "@outsystems/runtime-core-js", "tradershub.model", "tradershub.model$ST_87555d90f21aa57fd03a9d7e779d31e3Structure"], function (exports, OSRuntimeCore, tradershubModel) {
var OS = OSRuntimeCore;
{class RC_9080b1888061a5533ea915e22804d4eaInner extends 
OS.DataTypes.GenericRecord {
static attributesToDeclare() {
return [
this.attr("Documents_supported", "documents_supportedAttr", "Documents_supported", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new tradershubModel.ST_87555d90f21aa57fd03a9d7e779d31e3Structure());
}, true, tradershubModel.ST_87555d90f21aa57fd03a9d7e779d31e3Structure)
].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
}

static fromStructure(str) {
return new RC_9080b1888061a5533ea915e22804d4ea(new RC_9080b1888061a5533ea915e22804d4ea.RecordClass({
documents_supportedAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
}

}

tradershubModel.RC_9080b1888061a5533ea915e22804d4ea = RC_9080b1888061a5533ea915e22804d4eaInner;

RC_9080b1888061a5533ea915e22804d4eaInner._isAnonymousRecord = true;
RC_9080b1888061a5533ea915e22804d4eaInner.UniqueId = "9080b188-8061-a553-3ea9-15e22804d4ea";
var RC_9080b1888061a5533ea915e22804d4ea = RC_9080b1888061a5533ea915e22804d4eaInner;
RC_9080b1888061a5533ea915e22804d4ea.init();
}
});

define("tradershub.model$RC_90ce9b105644724abc69e3ff1232bf2f", ["exports", "@outsystems/runtime-core-js", "tradershub.model", "tradershub.model$ST_1a4f07e6c8d6ea2e2ddfeb34b9b7a3c8Structure"], function (exports, OSRuntimeCore, tradershubModel) {
var OS = OSRuntimeCore;
{class RC_90ce9b105644724abc69e3ff1232bf2fInner extends 
OS.DataTypes.GenericRecord {
static attributesToDeclare() {
return [
this.attr("Website_status", "website_statusAttr", "Website_status", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new tradershubModel.ST_1a4f07e6c8d6ea2e2ddfeb34b9b7a3c8Structure());
}, true, tradershubModel.ST_1a4f07e6c8d6ea2e2ddfeb34b9b7a3c8Structure)
].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
}

static fromStructure(str) {
return new RC_90ce9b105644724abc69e3ff1232bf2f(new RC_90ce9b105644724abc69e3ff1232bf2f.RecordClass({
website_statusAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
}

}

tradershubModel.RC_90ce9b105644724abc69e3ff1232bf2f = RC_90ce9b105644724abc69e3ff1232bf2fInner;

RC_90ce9b105644724abc69e3ff1232bf2fInner._isAnonymousRecord = true;
RC_90ce9b105644724abc69e3ff1232bf2fInner.UniqueId = "90ce9b10-5644-724a-bc69-e3ff1232bf2f";
var RC_90ce9b105644724abc69e3ff1232bf2f = RC_90ce9b105644724abc69e3ff1232bf2fInner;
RC_90ce9b105644724abc69e3ff1232bf2f.init();
}
});

define("tradershub.model$RL_90dfebee20aff7c26e30042add874567", ["exports", "@outsystems/runtime-core-js", "RESTAPIWebsocket.model", "tradershub.model", "RESTAPIWebsocket.model$ST_0543ba6e58ccc819d0ba65db33df025eStructure", "tradershub.referencesHealth", "tradershub.referencesHealth$RESTAPIWebsocket"], function (exports, OSRuntimeCore, RESTAPIWebsocketModel, tradershubModel) {
var OS = OSRuntimeCore;
class RL_90dfebee20aff7c26e30042add874567 extends 
OS.DataTypes.GenericRecordList {
static getItemType() {
return RESTAPIWebsocketModel.ST_0543ba6e58ccc819d0ba65db33df025eStructure;
}

}

tradershubModel.RL_90dfebee20aff7c26e30042add874567 = RL_90dfebee20aff7c26e30042add874567;

});

define("tradershub.model$RL_9103c933715345647d34a3ebfe5f38fd", ["exports", "@outsystems/runtime-core-js", "tradershub.model", "tradershub.model$ST_81244dbb8e72a05a708e9a449198444eStructure"], function (exports, OSRuntimeCore, tradershubModel) {
var OS = OSRuntimeCore;
class RL_9103c933715345647d34a3ebfe5f38fd extends 
OS.DataTypes.GenericRecordList {
static getItemType() {
return tradershubModel.ST_81244dbb8e72a05a708e9a449198444eStructure;
}

}

tradershubModel.RL_9103c933715345647d34a3ebfe5f38fd = RL_9103c933715345647d34a3ebfe5f38fd;

});

define("tradershub.model$RL_9155b46cc5c187efb7cc10c67b592005", ["exports", "@outsystems/runtime-core-js", "tradershub.model", "tradershub.model$RC_4028c83435ff8f3fa19c27e5a3252dd5"], function (exports, OSRuntimeCore, tradershubModel) {
var OS = OSRuntimeCore;
class RL_9155b46cc5c187efb7cc10c67b592005 extends 
OS.DataTypes.GenericRecordList {
static getItemType() {
return tradershubModel.RC_4028c83435ff8f3fa19c27e5a3252dd5;
}

}

tradershubModel.RL_9155b46cc5c187efb7cc10c67b592005 = RL_9155b46cc5c187efb7cc10c67b592005;

});

define("tradershub.model$RL_919d8bc896529858c8cc8f0f3e5cb019", ["exports", "@outsystems/runtime-core-js", "tradershub.model", "tradershub.model$RC_4d77cfdd567b208680377834fc8205a2"], function (exports, OSRuntimeCore, tradershubModel) {
var OS = OSRuntimeCore;
class RL_919d8bc896529858c8cc8f0f3e5cb019 extends 
OS.DataTypes.GenericRecordList {
static getItemType() {
return tradershubModel.RC_4d77cfdd567b208680377834fc8205a2;
}

}

tradershubModel.RL_919d8bc896529858c8cc8f0f3e5cb019 = RL_919d8bc896529858c8cc8f0f3e5cb019;

});

define("tradershub.model$RL_91f3ef19dd1007f7116bdf96cd006384", ["exports", "@outsystems/runtime-core-js", "RESTAPIWebsocket.model", "tradershub.model", "RESTAPIWebsocket.model$ST_5ba9c80e587385c94102779d8eab301cStructure", "tradershub.referencesHealth", "tradershub.referencesHealth$RESTAPIWebsocket"], function (exports, OSRuntimeCore, RESTAPIWebsocketModel, tradershubModel) {
var OS = OSRuntimeCore;
class RL_91f3ef19dd1007f7116bdf96cd006384 extends 
OS.DataTypes.GenericRecordList {
static getItemType() {
return RESTAPIWebsocketModel.ST_5ba9c80e587385c94102779d8eab301cStructure;
}

}

tradershubModel.RL_91f3ef19dd1007f7116bdf96cd006384 = RL_91f3ef19dd1007f7116bdf96cd006384;

});

define("tradershub.model$RL_934c26b501c2cab7b0a48c8dcd029c23", ["exports", "@outsystems/runtime-core-js", "OutSystemsCharts.model", "tradershub.model", "OutSystemsCharts.model$ST_934e7357fa36babd8aa5d2585785fd1aStructure", "tradershub.referencesHealth", "tradershub.referencesHealth$OutSystemsCharts"], function (exports, OSRuntimeCore, OutSystemsChartsModel, tradershubModel) {
var OS = OSRuntimeCore;
class RL_934c26b501c2cab7b0a48c8dcd029c23 extends 
OS.DataTypes.GenericRecordList {
static getItemType() {
return OutSystemsChartsModel.ST_934e7357fa36babd8aa5d2585785fd1aStructure;
}

}

tradershubModel.RL_934c26b501c2cab7b0a48c8dcd029c23 = RL_934c26b501c2cab7b0a48c8dcd029c23;

});

define("tradershub.model$RL_936a64e17c11dfff203a91e3c6f907cd", ["exports", "@outsystems/runtime-core-js", "tradershub.model", "tradershub.model$RC_2ff13084d6cf0d9d6734571de8315c4a"], function (exports, OSRuntimeCore, tradershubModel) {
var OS = OSRuntimeCore;
class RL_936a64e17c11dfff203a91e3c6f907cd extends 
OS.DataTypes.GenericRecordList {
static getItemType() {
return tradershubModel.RC_2ff13084d6cf0d9d6734571de8315c4a;
}

}

tradershubModel.RL_936a64e17c11dfff203a91e3c6f907cd = RL_936a64e17c11dfff203a91e3c6f907cd;

});

define("tradershub.model$ST_b9fa9c81e682aaa4746021d7919cd480Structure", ["exports", "@outsystems/runtime-core-js", "tradershub.model"], function (exports, OSRuntimeCore, tradershubModel) {
var OS = OSRuntimeCore;
{class ST_b9fa9c81e682aaa4746021d7919cd480StructureInner extends 
OS.DataTypes.GenericRecord {
static attributesToDeclare() {
return [
this.attr("AdditionalDocumentNumber", "additionalDocumentNumberAttr", "AdditionalDocumentNumber", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("DocumentNumber", "documentNumberAttr", "DocumentNumber", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("DocumentType", "documentTypeAttr", "DocumentType", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true)
].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
}

}

tradershubModel.ST_b9fa9c81e682aaa4746021d7919cd480Structure = ST_b9fa9c81e682aaa4746021d7919cd480StructureInner;

var ST_b9fa9c81e682aaa4746021d7919cd480Structure = ST_b9fa9c81e682aaa4746021d7919cd480StructureInner;
ST_b9fa9c81e682aaa4746021d7919cd480Structure.init();
}
});

define("tradershub.model$RC_f584028c7dbb4b6dbe8b41bd40df0a7e", ["exports", "@outsystems/runtime-core-js", "tradershub.model", "tradershub.model$ST_b9fa9c81e682aaa4746021d7919cd480Structure"], function (exports, OSRuntimeCore, tradershubModel) {
var OS = OSRuntimeCore;
{class RC_f584028c7dbb4b6dbe8b41bd40df0a7eInner extends 
OS.DataTypes.GenericRecord {
static attributesToDeclare() {
return [
this.attr("IDVValidationError", "iDVValidationErrorAttr", "IDVValidationError", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new tradershubModel.ST_b9fa9c81e682aaa4746021d7919cd480Structure());
}, true, tradershubModel.ST_b9fa9c81e682aaa4746021d7919cd480Structure)
].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
}

static fromStructure(str) {
return new RC_f584028c7dbb4b6dbe8b41bd40df0a7e(new RC_f584028c7dbb4b6dbe8b41bd40df0a7e.RecordClass({
iDVValidationErrorAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
}

}

tradershubModel.RC_f584028c7dbb4b6dbe8b41bd40df0a7e = RC_f584028c7dbb4b6dbe8b41bd40df0a7eInner;

RC_f584028c7dbb4b6dbe8b41bd40df0a7eInner._isAnonymousRecord = true;
RC_f584028c7dbb4b6dbe8b41bd40df0a7eInner.UniqueId = "f584028c-7dbb-4b6d-be8b-41bd40df0a7e";
var RC_f584028c7dbb4b6dbe8b41bd40df0a7e = RC_f584028c7dbb4b6dbe8b41bd40df0a7eInner;
RC_f584028c7dbb4b6dbe8b41bd40df0a7e.init();
}
});

define("tradershub.model$RL_947285a2d4ba2e244d6319fadae4939c", ["exports", "@outsystems/runtime-core-js", "tradershub.model", "tradershub.model$RC_f584028c7dbb4b6dbe8b41bd40df0a7e"], function (exports, OSRuntimeCore, tradershubModel) {
var OS = OSRuntimeCore;
class RL_947285a2d4ba2e244d6319fadae4939c extends 
OS.DataTypes.GenericRecordList {
static getItemType() {
return tradershubModel.RC_f584028c7dbb4b6dbe8b41bd40df0a7e;
}

}

tradershubModel.RL_947285a2d4ba2e244d6319fadae4939c = RL_947285a2d4ba2e244d6319fadae4939c;

});

define("tradershub.model$RC_f832db09c878c935b7abcc9270c06995", ["exports", "@outsystems/runtime-core-js", "tradershub.model", "tradershub.model$ST_4b7e068329ae717d0f48556181f6aebaStructure"], function (exports, OSRuntimeCore, tradershubModel) {
var OS = OSRuntimeCore;
{class RC_f832db09c878c935b7abcc9270c06995Inner extends 
OS.DataTypes.GenericRecord {
static attributesToDeclare() {
return [
this.attr("Property3", "property3Attr", "Property3", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new tradershubModel.ST_4b7e068329ae717d0f48556181f6aebaStructure());
}, true, tradershubModel.ST_4b7e068329ae717d0f48556181f6aebaStructure)
].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
}

static fromStructure(str) {
return new RC_f832db09c878c935b7abcc9270c06995(new RC_f832db09c878c935b7abcc9270c06995.RecordClass({
property3Attr: OS.DataTypes.ImmutableBase.getData(str)
}));
}

}

tradershubModel.RC_f832db09c878c935b7abcc9270c06995 = RC_f832db09c878c935b7abcc9270c06995Inner;

RC_f832db09c878c935b7abcc9270c06995Inner._isAnonymousRecord = true;
RC_f832db09c878c935b7abcc9270c06995Inner.UniqueId = "f832db09-c878-c935-b7ab-cc9270c06995";
var RC_f832db09c878c935b7abcc9270c06995 = RC_f832db09c878c935b7abcc9270c06995Inner;
RC_f832db09c878c935b7abcc9270c06995.init();
}
});

define("tradershub.model$RL_94ca10f95bc08099d22d4041842d1e37", ["exports", "@outsystems/runtime-core-js", "tradershub.model", "tradershub.model$RC_f832db09c878c935b7abcc9270c06995"], function (exports, OSRuntimeCore, tradershubModel) {
var OS = OSRuntimeCore;
class RL_94ca10f95bc08099d22d4041842d1e37 extends 
OS.DataTypes.GenericRecordList {
static getItemType() {
return tradershubModel.RC_f832db09c878c935b7abcc9270c06995;
}

}

tradershubModel.RL_94ca10f95bc08099d22d4041842d1e37 = RL_94ca10f95bc08099d22d4041842d1e37;

});

define("tradershub.model$RL_958ee6d9719c17433ce81822ca60f4a2", ["exports", "@outsystems/runtime-core-js", "tradershub.model", "tradershub.model$RC_4a76c214f34feb841d0c1a2d8cdbec01"], function (exports, OSRuntimeCore, tradershubModel) {
var OS = OSRuntimeCore;
class RL_958ee6d9719c17433ce81822ca60f4a2 extends 
OS.DataTypes.GenericRecordList {
static getItemType() {
return tradershubModel.RC_4a76c214f34feb841d0c1a2d8cdbec01;
}

}

tradershubModel.RL_958ee6d9719c17433ce81822ca60f4a2 = RL_958ee6d9719c17433ce81822ca60f4a2;

});

define("tradershub.model$RL_95d0d522cef60364076f377317e08b52", ["exports", "@outsystems/runtime-core-js", "OutSystemsUI.model", "tradershub.model", "OutSystemsUI.model$ST_6510d2524fe77fcc6c285159d4000cfbStructure", "tradershub.referencesHealth", "tradershub.referencesHealth$OutSystemsUI"], function (exports, OSRuntimeCore, OutSystemsUIModel, tradershubModel) {
var OS = OSRuntimeCore;
class RL_95d0d522cef60364076f377317e08b52 extends 
OS.DataTypes.GenericRecordList {
static getItemType() {
return OutSystemsUIModel.ST_6510d2524fe77fcc6c285159d4000cfbStructure;
}

}

tradershubModel.RL_95d0d522cef60364076f377317e08b52 = RL_95d0d522cef60364076f377317e08b52;

});

define("tradershub.model$RL_96351e19e34e597f8912ec0fd328f3fa", ["exports", "@outsystems/runtime-core-js", "tradershub.model", "tradershub.model$RC_3ded2f3465f64b88874b3237c0af88a2"], function (exports, OSRuntimeCore, tradershubModel) {
var OS = OSRuntimeCore;
class RL_96351e19e34e597f8912ec0fd328f3fa extends 
OS.DataTypes.GenericRecordList {
static getItemType() {
return tradershubModel.RC_3ded2f3465f64b88874b3237c0af88a2;
}

}

tradershubModel.RL_96351e19e34e597f8912ec0fd328f3fa = RL_96351e19e34e597f8912ec0fd328f3fa;

});

define("tradershub.model$RL_9668b2618904592aa8035bf113339a0a", ["exports", "@outsystems/runtime-core-js", "tradershub.model", "tradershub.model$ST_268c8bb28743388aadc6c4f1ff502e41Structure"], function (exports, OSRuntimeCore, tradershubModel) {
var OS = OSRuntimeCore;
class RL_9668b2618904592aa8035bf113339a0a extends 
OS.DataTypes.GenericRecordList {
static getItemType() {
return tradershubModel.ST_268c8bb28743388aadc6c4f1ff502e41Structure;
}

}

tradershubModel.RL_9668b2618904592aa8035bf113339a0a = RL_9668b2618904592aa8035bf113339a0a;

});

define("tradershub.model$RL_9678e3726ab7ea86763fde93dfc0e6fb", ["exports", "@outsystems/runtime-core-js", "tradershub.model", "tradershub.model$RC_21847b804416cb439cd5eb109d0a6094"], function (exports, OSRuntimeCore, tradershubModel) {
var OS = OSRuntimeCore;
class RL_9678e3726ab7ea86763fde93dfc0e6fb extends 
OS.DataTypes.GenericRecordList {
static getItemType() {
return tradershubModel.RC_21847b804416cb439cd5eb109d0a6094;
}

}

tradershubModel.RL_9678e3726ab7ea86763fde93dfc0e6fb = RL_9678e3726ab7ea86763fde93dfc0e6fb;

});

define("tradershub.model$RC_96c340f5ac620f54674641c63eb91876", ["exports", "@outsystems/runtime-core-js", "OutSystemsMaps.model", "tradershub.model", "OutSystemsMaps.model$ST_a0cdfbad52e32bc69efd7ec23c40fc2fStructure", "tradershub.referencesHealth", "tradershub.referencesHealth$OutSystemsMaps"], function (exports, OSRuntimeCore, OutSystemsMapsModel, tradershubModel) {
var OS = OSRuntimeCore;
{class RC_96c340f5ac620f54674641c63eb91876Inner extends 
OS.DataTypes.GenericRecord {
static attributesToDeclare() {
return [
this.attr("IconSize", "iconSizeAttr", "IconSize", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new OutSystemsMapsModel.ST_a0cdfbad52e32bc69efd7ec23c40fc2fStructure());
}, true, OutSystemsMapsModel.ST_a0cdfbad52e32bc69efd7ec23c40fc2fStructure)
].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
}

static fromStructure(str) {
return new RC_96c340f5ac620f54674641c63eb91876(new RC_96c340f5ac620f54674641c63eb91876.RecordClass({
iconSizeAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
}

}

tradershubModel.RC_96c340f5ac620f54674641c63eb91876 = RC_96c340f5ac620f54674641c63eb91876Inner;

RC_96c340f5ac620f54674641c63eb91876Inner._isAnonymousRecord = true;
RC_96c340f5ac620f54674641c63eb91876Inner.UniqueId = "96c340f5-ac62-0f54-6746-41c63eb91876";
var RC_96c340f5ac620f54674641c63eb91876 = RC_96c340f5ac620f54674641c63eb91876Inner;
RC_96c340f5ac620f54674641c63eb91876.init();
}
});

define("tradershub.model$RL_976acf9cef0416c8a953b94163bbaadc", ["exports", "@outsystems/runtime-core-js", "tradershub.model", "tradershub.model$ST_b9fa9c81e682aaa4746021d7919cd480Structure"], function (exports, OSRuntimeCore, tradershubModel) {
var OS = OSRuntimeCore;
class RL_976acf9cef0416c8a953b94163bbaadc extends 
OS.DataTypes.GenericRecordList {
static getItemType() {
return tradershubModel.ST_b9fa9c81e682aaa4746021d7919cd480Structure;
}

}

tradershubModel.RL_976acf9cef0416c8a953b94163bbaadc = RL_976acf9cef0416c8a953b94163bbaadc;

});

define("tradershub.model$RL_9797ec0d56ee4ca8b93bd458944f1a08", ["exports", "@outsystems/runtime-core-js", "tradershub.model", "tradershub.model$RC_646e6c02297b69c2ac8936bd87cff545"], function (exports, OSRuntimeCore, tradershubModel) {
var OS = OSRuntimeCore;
class RL_9797ec0d56ee4ca8b93bd458944f1a08 extends 
OS.DataTypes.GenericRecordList {
static getItemType() {
return tradershubModel.RC_646e6c02297b69c2ac8936bd87cff545;
}

}

tradershubModel.RL_9797ec0d56ee4ca8b93bd458944f1a08 = RL_9797ec0d56ee4ca8b93bd458944f1a08;

});

define("tradershub.model$RL_97a23d314145a9c2335cc5d57dc28ad4", ["exports", "@outsystems/runtime-core-js", "tradershub.model", "tradershub.model$RC_1853d9cad672ded9659195b8c9a3f707"], function (exports, OSRuntimeCore, tradershubModel) {
var OS = OSRuntimeCore;
class RL_97a23d314145a9c2335cc5d57dc28ad4 extends 
OS.DataTypes.GenericRecordList {
static getItemType() {
return tradershubModel.RC_1853d9cad672ded9659195b8c9a3f707;
}

}

tradershubModel.RL_97a23d314145a9c2335cc5d57dc28ad4 = RL_97a23d314145a9c2335cc5d57dc28ad4;

});

define("tradershub.model$RL_97e8f3375611a96a6012eed05d91f59d", ["exports", "@outsystems/runtime-core-js", "tradershub.model", "tradershub.model$RC_8ccc091579545400bb5558b597337647"], function (exports, OSRuntimeCore, tradershubModel) {
var OS = OSRuntimeCore;
class RL_97e8f3375611a96a6012eed05d91f59d extends 
OS.DataTypes.GenericRecordList {
static getItemType() {
return tradershubModel.RC_8ccc091579545400bb5558b597337647;
}

}

tradershubModel.RL_97e8f3375611a96a6012eed05d91f59d = RL_97e8f3375611a96a6012eed05d91f59d;

});

define("tradershub.model$RL_98f3b8624fe7a466ac7ebfc153dac373", ["exports", "@outsystems/runtime-core-js", "tradershub.model", "tradershub.model$RC_236b9780ed98eefd23c7d452d5b32785"], function (exports, OSRuntimeCore, tradershubModel) {
var OS = OSRuntimeCore;
class RL_98f3b8624fe7a466ac7ebfc153dac373 extends 
OS.DataTypes.GenericRecordList {
static getItemType() {
return tradershubModel.RC_236b9780ed98eefd23c7d452d5b32785;
}

}

tradershubModel.RL_98f3b8624fe7a466ac7ebfc153dac373 = RL_98f3b8624fe7a466ac7ebfc153dac373;

});

define("tradershub.model$RL_991bc10cec4f3f7ada888ab5c86dde1d", ["exports", "@outsystems/runtime-core-js", "tradershub.model", "tradershub.model$EN_18a161aea4f6fead5f823df7320c3dd0EntityRecord"], function (exports, OSRuntimeCore, tradershubModel) {
var OS = OSRuntimeCore;
class RL_991bc10cec4f3f7ada888ab5c86dde1d extends 
OS.DataTypes.GenericRecordList {
static getItemType() {
return tradershubModel.EN_18a161aea4f6fead5f823df7320c3dd0EntityRecord;
}

}

tradershubModel.RL_991bc10cec4f3f7ada888ab5c86dde1d = RL_991bc10cec4f3f7ada888ab5c86dde1d;

});

define("tradershub.model$RC_ab72f035aa34ddb5ec313dc02adb1f18", ["exports", "@outsystems/runtime-core-js", "OutSystemsUI.model", "tradershub.model", "OutSystemsUI.model$EN_7f8fd02aa7ee2ac6182b6b36e46460d9EntityRecord", "tradershub.referencesHealth", "tradershub.referencesHealth$OutSystemsUI"], function (exports, OSRuntimeCore, OutSystemsUIModel, tradershubModel) {
var OS = OSRuntimeCore;
{class RC_ab72f035aa34ddb5ec313dc02adb1f18Inner extends 
OS.DataTypes.GenericRecord {
static attributesToDeclare() {
return [
this.attr("AccordionIconPosition", "accordionIconPositionAttr", "AccordionIconPosition", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new OutSystemsUIModel.EN_7f8fd02aa7ee2ac6182b6b36e46460d9EntityRecord());
}, true, OutSystemsUIModel.EN_7f8fd02aa7ee2ac6182b6b36e46460d9EntityRecord)
].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
}

static fromStructure(str) {
return new RC_ab72f035aa34ddb5ec313dc02adb1f18(new RC_ab72f035aa34ddb5ec313dc02adb1f18.RecordClass({
accordionIconPositionAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
}

}

tradershubModel.RC_ab72f035aa34ddb5ec313dc02adb1f18 = RC_ab72f035aa34ddb5ec313dc02adb1f18Inner;

RC_ab72f035aa34ddb5ec313dc02adb1f18Inner._isAnonymousRecord = true;
RC_ab72f035aa34ddb5ec313dc02adb1f18Inner.UniqueId = "ab72f035-aa34-ddb5-ec31-3dc02adb1f18";
var RC_ab72f035aa34ddb5ec313dc02adb1f18 = RC_ab72f035aa34ddb5ec313dc02adb1f18Inner;
RC_ab72f035aa34ddb5ec313dc02adb1f18.init();
}
});

define("tradershub.model$RL_996fbee06ca423494c6785889a54264f", ["exports", "@outsystems/runtime-core-js", "tradershub.model", "tradershub.model$RC_ab72f035aa34ddb5ec313dc02adb1f18"], function (exports, OSRuntimeCore, tradershubModel) {
var OS = OSRuntimeCore;
class RL_996fbee06ca423494c6785889a54264f extends 
OS.DataTypes.GenericRecordList {
static getItemType() {
return tradershubModel.RC_ab72f035aa34ddb5ec313dc02adb1f18;
}

}

tradershubModel.RL_996fbee06ca423494c6785889a54264f = RL_996fbee06ca423494c6785889a54264f;

});

define("tradershub.model$RC_99f05d7f32b2e16e3c817f02609b7e4b", ["exports", "@outsystems/runtime-core-js", "tradershub.model", "tradershub.model$ST_eb286c497eeb9a2ab2c838f3628b06e8Structure"], function (exports, OSRuntimeCore, tradershubModel) {
var OS = OSRuntimeCore;
{class RC_99f05d7f32b2e16e3c817f02609b7e4bInner extends 
OS.DataTypes.GenericRecord {
static attributesToDeclare() {
return [
this.attr("NewAccountVirtualResponse", "newAccountVirtualResponseAttr", "NewAccountVirtualResponse", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new tradershubModel.ST_eb286c497eeb9a2ab2c838f3628b06e8Structure());
}, true, tradershubModel.ST_eb286c497eeb9a2ab2c838f3628b06e8Structure)
].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
}

static fromStructure(str) {
return new RC_99f05d7f32b2e16e3c817f02609b7e4b(new RC_99f05d7f32b2e16e3c817f02609b7e4b.RecordClass({
newAccountVirtualResponseAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
}

}

tradershubModel.RC_99f05d7f32b2e16e3c817f02609b7e4b = RC_99f05d7f32b2e16e3c817f02609b7e4bInner;

RC_99f05d7f32b2e16e3c817f02609b7e4bInner._isAnonymousRecord = true;
RC_99f05d7f32b2e16e3c817f02609b7e4bInner.UniqueId = "99f05d7f-32b2-e16e-3c81-7f02609b7e4b";
var RC_99f05d7f32b2e16e3c817f02609b7e4b = RC_99f05d7f32b2e16e3c817f02609b7e4bInner;
RC_99f05d7f32b2e16e3c817f02609b7e4b.init();
}
});

define("tradershub.model$RL_99fb577a5b3c7e3c7a449a321d07bd30", ["exports", "@outsystems/runtime-core-js", "OutSystemsMaps.model", "tradershub.model", "OutSystemsMaps.model$EN_da8d5af471adea3d9064074b1a40d8c2EntityRecord", "tradershub.referencesHealth", "tradershub.referencesHealth$OutSystemsMaps"], function (exports, OSRuntimeCore, OutSystemsMapsModel, tradershubModel) {
var OS = OSRuntimeCore;
class RL_99fb577a5b3c7e3c7a449a321d07bd30 extends 
OS.DataTypes.GenericRecordList {
static getItemType() {
return OutSystemsMapsModel.EN_da8d5af471adea3d9064074b1a40d8c2EntityRecord;
}

}

tradershubModel.RL_99fb577a5b3c7e3c7a449a321d07bd30 = RL_99fb577a5b3c7e3c7a449a321d07bd30;

});

define("tradershub.model$RC_edeffbcec8af75b29433897d04ccd1a2", ["exports", "@outsystems/runtime-core-js", "tradershub.model", "tradershub.model$ST_40181b9b51fffeffb473febe3bfa6ddbStructure"], function (exports, OSRuntimeCore, tradershubModel) {
var OS = OSRuntimeCore;
{class RC_edeffbcec8af75b29433897d04ccd1a2Inner extends 
OS.DataTypes.GenericRecord {
static attributesToDeclare() {
return [
this.attr("Name", "nameAttr", "Name", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new tradershubModel.ST_40181b9b51fffeffb473febe3bfa6ddbStructure());
}, true, tradershubModel.ST_40181b9b51fffeffb473febe3bfa6ddbStructure)
].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
}

static fromStructure(str) {
return new RC_edeffbcec8af75b29433897d04ccd1a2(new RC_edeffbcec8af75b29433897d04ccd1a2.RecordClass({
nameAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
}

}

tradershubModel.RC_edeffbcec8af75b29433897d04ccd1a2 = RC_edeffbcec8af75b29433897d04ccd1a2Inner;

RC_edeffbcec8af75b29433897d04ccd1a2Inner._isAnonymousRecord = true;
RC_edeffbcec8af75b29433897d04ccd1a2Inner.UniqueId = "edeffbce-c8af-75b2-9433-897d04ccd1a2";
var RC_edeffbcec8af75b29433897d04ccd1a2 = RC_edeffbcec8af75b29433897d04ccd1a2Inner;
RC_edeffbcec8af75b29433897d04ccd1a2.init();
}
});

define("tradershub.model$RL_9a0ed26a3ed5a7c44e984266a4c0a0df", ["exports", "@outsystems/runtime-core-js", "tradershub.model", "tradershub.model$RC_edeffbcec8af75b29433897d04ccd1a2"], function (exports, OSRuntimeCore, tradershubModel) {
var OS = OSRuntimeCore;
class RL_9a0ed26a3ed5a7c44e984266a4c0a0df extends 
OS.DataTypes.GenericRecordList {
static getItemType() {
return tradershubModel.RC_edeffbcec8af75b29433897d04ccd1a2;
}

}

tradershubModel.RL_9a0ed26a3ed5a7c44e984266a4c0a0df = RL_9a0ed26a3ed5a7c44e984266a4c0a0df;

});

define("tradershub.model$RL_9ab59cf1963fbe94eddb7ebb18232c35", ["exports", "@outsystems/runtime-core-js", "System_.model", "tradershub.model", "System_.model$UserUpdateInfoRec", "tradershub.referencesHealth", "tradershub.referencesHealth$System_"], function (exports, OSRuntimeCore, System_Model, tradershubModel) {
var OS = OSRuntimeCore;
class RL_9ab59cf1963fbe94eddb7ebb18232c35 extends 
OS.DataTypes.GenericRecordList {
static getItemType() {
return OS.SystemStructures.UserUpdateInfoRec;
}

}

tradershubModel.RL_9ab59cf1963fbe94eddb7ebb18232c35 = RL_9ab59cf1963fbe94eddb7ebb18232c35;

});

define("tradershub.model$RL_9b54e3c9ffe7cf86f1ca908f7e701fd3", ["exports", "@outsystems/runtime-core-js", "tradershub.model", "tradershub.model$EN_50a3b192c3184aa6afae35c5fb24155aEntityRecord"], function (exports, OSRuntimeCore, tradershubModel) {
var OS = OSRuntimeCore;
class RL_9b54e3c9ffe7cf86f1ca908f7e701fd3 extends 
OS.DataTypes.GenericRecordList {
static getItemType() {
return tradershubModel.EN_50a3b192c3184aa6afae35c5fb24155aEntityRecord;
}

}

tradershubModel.RL_9b54e3c9ffe7cf86f1ca908f7e701fd3 = RL_9b54e3c9ffe7cf86f1ca908f7e701fd3;

});

define("tradershub.model$RC_fed8226e055119cda9775f74ac223ef2", ["exports", "@outsystems/runtime-core-js", "RESTAPIWebsocket.model", "tradershub.model", "RESTAPIWebsocket.model$ST_72e91b438c2e206bca7398a7a69902dfStructure", "tradershub.referencesHealth", "tradershub.referencesHealth$RESTAPIWebsocket"], function (exports, OSRuntimeCore, RESTAPIWebsocketModel, tradershubModel) {
var OS = OSRuntimeCore;
{class RC_fed8226e055119cda9775f74ac223ef2Inner extends 
OS.DataTypes.GenericRecord {
static attributesToDeclare() {
return [
this.attr("Currency_config", "currency_configAttr", "Currency_config", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new RESTAPIWebsocketModel.ST_72e91b438c2e206bca7398a7a69902dfStructure());
}, true, RESTAPIWebsocketModel.ST_72e91b438c2e206bca7398a7a69902dfStructure)
].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
}

static fromStructure(str) {
return new RC_fed8226e055119cda9775f74ac223ef2(new RC_fed8226e055119cda9775f74ac223ef2.RecordClass({
currency_configAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
}

}

tradershubModel.RC_fed8226e055119cda9775f74ac223ef2 = RC_fed8226e055119cda9775f74ac223ef2Inner;

RC_fed8226e055119cda9775f74ac223ef2Inner._isAnonymousRecord = true;
RC_fed8226e055119cda9775f74ac223ef2Inner.UniqueId = "fed8226e-0551-19cd-a977-5f74ac223ef2";
var RC_fed8226e055119cda9775f74ac223ef2 = RC_fed8226e055119cda9775f74ac223ef2Inner;
RC_fed8226e055119cda9775f74ac223ef2.init();
}
});

define("tradershub.model$RL_9b9241a2f74aae5dad6a96c423cf89d8", ["exports", "@outsystems/runtime-core-js", "tradershub.model", "tradershub.model$RC_fed8226e055119cda9775f74ac223ef2"], function (exports, OSRuntimeCore, tradershubModel) {
var OS = OSRuntimeCore;
class RL_9b9241a2f74aae5dad6a96c423cf89d8 extends 
OS.DataTypes.GenericRecordList {
static getItemType() {
return tradershubModel.RC_fed8226e055119cda9775f74ac223ef2;
}

}

tradershubModel.RL_9b9241a2f74aae5dad6a96c423cf89d8 = RL_9b9241a2f74aae5dad6a96c423cf89d8;

});

define("tradershub.model$RL_d03621281d953210a5f7643c5f395ddc", ["exports", "@outsystems/runtime-core-js", "RESTAPIWebsocket.model", "tradershub.model", "RESTAPIWebsocket.model$ST_02211ece4f8ea033ae9a7fa2710f4a32Structure", "tradershub.referencesHealth", "tradershub.referencesHealth$RESTAPIWebsocket"], function (exports, OSRuntimeCore, RESTAPIWebsocketModel, tradershubModel) {
var OS = OSRuntimeCore;
class RL_d03621281d953210a5f7643c5f395ddc extends 
OS.DataTypes.GenericRecordList {
static getItemType() {
return RESTAPIWebsocketModel.ST_02211ece4f8ea033ae9a7fa2710f4a32Structure;
}

}

tradershubModel.RL_d03621281d953210a5f7643c5f395ddc = RL_d03621281d953210a5f7643c5f395ddc;

});

define("tradershub.model$RL_9ba938eac8f7611815bf878625e7d65e", ["exports", "@outsystems/runtime-core-js", "RESTAPIWebsocket.model", "tradershub.model", "RESTAPIWebsocket.model$ST_e5081373b9c17bf97c001a46f1739ffeStructure", "tradershub.referencesHealth", "tradershub.referencesHealth$RESTAPIWebsocket"], function (exports, OSRuntimeCore, RESTAPIWebsocketModel, tradershubModel) {
var OS = OSRuntimeCore;
class RL_9ba938eac8f7611815bf878625e7d65e extends 
OS.DataTypes.GenericRecordList {
static getItemType() {
return RESTAPIWebsocketModel.ST_e5081373b9c17bf97c001a46f1739ffeStructure;
}

}

tradershubModel.RL_9ba938eac8f7611815bf878625e7d65e = RL_9ba938eac8f7611815bf878625e7d65e;

});

define("tradershub.model$RL_9bba1220f91628d35d17687902f382ad", ["exports", "@outsystems/runtime-core-js", "tradershub.model", "tradershub.model$RC_5d4c0a98b9773e489e7e27bfe5360793"], function (exports, OSRuntimeCore, tradershubModel) {
var OS = OSRuntimeCore;
class RL_9bba1220f91628d35d17687902f382ad extends 
OS.DataTypes.GenericRecordList {
static getItemType() {
return tradershubModel.RC_5d4c0a98b9773e489e7e27bfe5360793;
}

}

tradershubModel.RL_9bba1220f91628d35d17687902f382ad = RL_9bba1220f91628d35d17687902f382ad;

});

define("tradershub.model$RL_9bbf3501c857fa771241aed7c9717166", ["exports", "@outsystems/runtime-core-js", "tradershub.model", "tradershub.model$RC_51c73f641f2d05540b68c15e7660196f"], function (exports, OSRuntimeCore, tradershubModel) {
var OS = OSRuntimeCore;
class RL_9bbf3501c857fa771241aed7c9717166 extends 
OS.DataTypes.GenericRecordList {
static getItemType() {
return tradershubModel.RC_51c73f641f2d05540b68c15e7660196f;
}

}

tradershubModel.RL_9bbf3501c857fa771241aed7c9717166 = RL_9bbf3501c857fa771241aed7c9717166;

});

define("tradershub.model$RL_9c28fba2ad5d9bbe6b5a769d4094590b", ["exports", "@outsystems/runtime-core-js", "tradershub.model", "tradershub.model$RC_3554b1e2806a5b827c457cdecc492d4a"], function (exports, OSRuntimeCore, tradershubModel) {
var OS = OSRuntimeCore;
class RL_9c28fba2ad5d9bbe6b5a769d4094590b extends 
OS.DataTypes.GenericRecordList {
static getItemType() {
return tradershubModel.RC_3554b1e2806a5b827c457cdecc492d4a;
}

}

tradershubModel.RL_9c28fba2ad5d9bbe6b5a769d4094590b = RL_9c28fba2ad5d9bbe6b5a769d4094590b;

});

define("tradershub.model$RC_9ca6a18cc49ca7246c44c0f7c2cef62a", ["exports", "@outsystems/runtime-core-js", "OutSystemsUI.model", "tradershub.model", "OutSystemsUI.model$EN_adf11bcbc411b5a0f498d25dd0ea882fEntityRecord", "tradershub.referencesHealth", "tradershub.referencesHealth$OutSystemsUI"], function (exports, OSRuntimeCore, OutSystemsUIModel, tradershubModel) {
var OS = OSRuntimeCore;
{class RC_9ca6a18cc49ca7246c44c0f7c2cef62aInner extends 
OS.DataTypes.GenericRecord {
static attributesToDeclare() {
return [
this.attr("Alert", "alertAttr", "Alert", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new OutSystemsUIModel.EN_adf11bcbc411b5a0f498d25dd0ea882fEntityRecord());
}, true, OutSystemsUIModel.EN_adf11bcbc411b5a0f498d25dd0ea882fEntityRecord)
].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
}

static fromStructure(str) {
return new RC_9ca6a18cc49ca7246c44c0f7c2cef62a(new RC_9ca6a18cc49ca7246c44c0f7c2cef62a.RecordClass({
alertAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
}

}

tradershubModel.RC_9ca6a18cc49ca7246c44c0f7c2cef62a = RC_9ca6a18cc49ca7246c44c0f7c2cef62aInner;

RC_9ca6a18cc49ca7246c44c0f7c2cef62aInner._isAnonymousRecord = true;
RC_9ca6a18cc49ca7246c44c0f7c2cef62aInner.UniqueId = "9ca6a18c-c49c-a724-6c44-c0f7c2cef62a";
var RC_9ca6a18cc49ca7246c44c0f7c2cef62a = RC_9ca6a18cc49ca7246c44c0f7c2cef62aInner;
RC_9ca6a18cc49ca7246c44c0f7c2cef62a.init();
}
});

define("tradershub.model$RL_9cb00801b4a261afbddde8f0eaaf25f3", ["exports", "@outsystems/runtime-core-js", "BrowserConsoleLogging.model", "tradershub.model", "BrowserConsoleLogging.model$EN_95096fd7ce0528eba549110f4ff009ffEntityRecord", "tradershub.referencesHealth", "tradershub.referencesHealth$BrowserConsoleLogging"], function (exports, OSRuntimeCore, BrowserConsoleLoggingModel, tradershubModel) {
var OS = OSRuntimeCore;
class RL_9cb00801b4a261afbddde8f0eaaf25f3 extends 
OS.DataTypes.GenericRecordList {
static getItemType() {
return BrowserConsoleLoggingModel.EN_95096fd7ce0528eba549110f4ff009ffEntityRecord;
}

}

tradershubModel.RL_9cb00801b4a261afbddde8f0eaaf25f3 = RL_9cb00801b4a261afbddde8f0eaaf25f3;

});

define("tradershub.model$RL_9d1958014f679eb9c889e84d23be0482", ["exports", "@outsystems/runtime-core-js", "tradershub.model", "tradershub.model$RC_3c9956b9cc7977c9df74dd66c7739fc9"], function (exports, OSRuntimeCore, tradershubModel) {
var OS = OSRuntimeCore;
class RL_9d1958014f679eb9c889e84d23be0482 extends 
OS.DataTypes.GenericRecordList {
static getItemType() {
return tradershubModel.RC_3c9956b9cc7977c9df74dd66c7739fc9;
}

}

tradershubModel.RL_9d1958014f679eb9c889e84d23be0482 = RL_9d1958014f679eb9c889e84d23be0482;

});

define("tradershub.model$RL_9d69b2d3ce2ad95c00706adc74706b15", ["exports", "@outsystems/runtime-core-js", "RESTAPIWebsocket.model", "tradershub.model", "RESTAPIWebsocket.model$ST_bccc1fae1833449eea329fa137ba885aStructure", "tradershub.referencesHealth", "tradershub.referencesHealth$RESTAPIWebsocket"], function (exports, OSRuntimeCore, RESTAPIWebsocketModel, tradershubModel) {
var OS = OSRuntimeCore;
class RL_9d69b2d3ce2ad95c00706adc74706b15 extends 
OS.DataTypes.GenericRecordList {
static getItemType() {
return RESTAPIWebsocketModel.ST_bccc1fae1833449eea329fa137ba885aStructure;
}

}

tradershubModel.RL_9d69b2d3ce2ad95c00706adc74706b15 = RL_9d69b2d3ce2ad95c00706adc74706b15;

});

define("tradershub.model$RC_b7283e2c6e9c6bcb5286d1ae04959554", ["exports", "@outsystems/runtime-core-js", "OutSystemsUI.model", "tradershub.model", "OutSystemsUI.model$ST_e3f9af4171d5e4a41700770295d05c77Structure", "tradershub.referencesHealth", "tradershub.referencesHealth$OutSystemsUI"], function (exports, OSRuntimeCore, OutSystemsUIModel, tradershubModel) {
var OS = OSRuntimeCore;
{class RC_b7283e2c6e9c6bcb5286d1ae04959554Inner extends 
OS.DataTypes.GenericRecord {
static attributesToDeclare() {
return [
this.attr("TabsOptionalConfigs", "tabsOptionalConfigsAttr", "TabsOptionalConfigs", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new OutSystemsUIModel.ST_e3f9af4171d5e4a41700770295d05c77Structure());
}, true, OutSystemsUIModel.ST_e3f9af4171d5e4a41700770295d05c77Structure)
].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
}

static fromStructure(str) {
return new RC_b7283e2c6e9c6bcb5286d1ae04959554(new RC_b7283e2c6e9c6bcb5286d1ae04959554.RecordClass({
tabsOptionalConfigsAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
}

}

tradershubModel.RC_b7283e2c6e9c6bcb5286d1ae04959554 = RC_b7283e2c6e9c6bcb5286d1ae04959554Inner;

RC_b7283e2c6e9c6bcb5286d1ae04959554Inner._isAnonymousRecord = true;
RC_b7283e2c6e9c6bcb5286d1ae04959554Inner.UniqueId = "b7283e2c-6e9c-6bcb-5286-d1ae04959554";
var RC_b7283e2c6e9c6bcb5286d1ae04959554 = RC_b7283e2c6e9c6bcb5286d1ae04959554Inner;
RC_b7283e2c6e9c6bcb5286d1ae04959554.init();
}
});

define("tradershub.model$RL_9e12f04bf3ce19087cbbf62097a9932a", ["exports", "@outsystems/runtime-core-js", "tradershub.model", "tradershub.model$RC_b7283e2c6e9c6bcb5286d1ae04959554"], function (exports, OSRuntimeCore, tradershubModel) {
var OS = OSRuntimeCore;
class RL_9e12f04bf3ce19087cbbf62097a9932a extends 
OS.DataTypes.GenericRecordList {
static getItemType() {
return tradershubModel.RC_b7283e2c6e9c6bcb5286d1ae04959554;
}

}

tradershubModel.RL_9e12f04bf3ce19087cbbf62097a9932a = RL_9e12f04bf3ce19087cbbf62097a9932a;

});

define("tradershub.model$RC_c52fa927f09489f1c90f3a0526a1c8c9", ["exports", "@outsystems/runtime-core-js", "OutSystemsMaps.model", "tradershub.model", "OutSystemsMaps.model$EN_f6b05f1cc2ae707d67f7da7ba2f4fd22EntityRecord", "tradershub.referencesHealth", "tradershub.referencesHealth$OutSystemsMaps"], function (exports, OSRuntimeCore, OutSystemsMapsModel, tradershubModel) {
var OS = OSRuntimeCore;
{class RC_c52fa927f09489f1c90f3a0526a1c8c9Inner extends 
OS.DataTypes.GenericRecord {
static attributesToDeclare() {
return [
this.attr("DrawingToolsPosition", "drawingToolsPositionAttr", "DrawingToolsPosition", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new OutSystemsMapsModel.EN_f6b05f1cc2ae707d67f7da7ba2f4fd22EntityRecord());
}, true, OutSystemsMapsModel.EN_f6b05f1cc2ae707d67f7da7ba2f4fd22EntityRecord)
].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
}

static fromStructure(str) {
return new RC_c52fa927f09489f1c90f3a0526a1c8c9(new RC_c52fa927f09489f1c90f3a0526a1c8c9.RecordClass({
drawingToolsPositionAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
}

}

tradershubModel.RC_c52fa927f09489f1c90f3a0526a1c8c9 = RC_c52fa927f09489f1c90f3a0526a1c8c9Inner;

RC_c52fa927f09489f1c90f3a0526a1c8c9Inner._isAnonymousRecord = true;
RC_c52fa927f09489f1c90f3a0526a1c8c9Inner.UniqueId = "c52fa927-f094-89f1-c90f-3a0526a1c8c9";
var RC_c52fa927f09489f1c90f3a0526a1c8c9 = RC_c52fa927f09489f1c90f3a0526a1c8c9Inner;
RC_c52fa927f09489f1c90f3a0526a1c8c9.init();
}
});

define("tradershub.model$RL_9e18711d0e128678787e38cf96c062ee", ["exports", "@outsystems/runtime-core-js", "tradershub.model", "tradershub.model$RC_c52fa927f09489f1c90f3a0526a1c8c9"], function (exports, OSRuntimeCore, tradershubModel) {
var OS = OSRuntimeCore;
class RL_9e18711d0e128678787e38cf96c062ee extends 
OS.DataTypes.GenericRecordList {
static getItemType() {
return tradershubModel.RC_c52fa927f09489f1c90f3a0526a1c8c9;
}

}

tradershubModel.RL_9e18711d0e128678787e38cf96c062ee = RL_9e18711d0e128678787e38cf96c062ee;

});

define("tradershub.model$RL_9e3aaefe5e623a2bc41930de8b795d08", ["exports", "@outsystems/runtime-core-js", "tradershub.model", "tradershub.model$RC_2a77ab94ed6fec349962a10d5680464f"], function (exports, OSRuntimeCore, tradershubModel) {
var OS = OSRuntimeCore;
class RL_9e3aaefe5e623a2bc41930de8b795d08 extends 
OS.DataTypes.GenericRecordList {
static getItemType() {
return tradershubModel.RC_2a77ab94ed6fec349962a10d5680464f;
}

}

tradershubModel.RL_9e3aaefe5e623a2bc41930de8b795d08 = RL_9e3aaefe5e623a2bc41930de8b795d08;

});

define("tradershub.model$RL_9e61912500fe95c259fa91bd185d07a2", ["exports", "@outsystems/runtime-core-js", "tradershub.model", "tradershub.model$ST_1a99e1302699632bd3158595a2dd8d57Structure"], function (exports, OSRuntimeCore, tradershubModel) {
var OS = OSRuntimeCore;
class RL_9e61912500fe95c259fa91bd185d07a2 extends 
OS.DataTypes.GenericRecordList {
static getItemType() {
return tradershubModel.ST_1a99e1302699632bd3158595a2dd8d57Structure;
}

}

tradershubModel.RL_9e61912500fe95c259fa91bd185d07a2 = RL_9e61912500fe95c259fa91bd185d07a2;

});

define("tradershub.model$RL_9e8eb507fc82c7005600a2499b6a668c", ["exports", "@outsystems/runtime-core-js", "tradershub.model", "tradershub.model$RC_87351e3b0fa2ca59cf6c6749c6405006"], function (exports, OSRuntimeCore, tradershubModel) {
var OS = OSRuntimeCore;
class RL_9e8eb507fc82c7005600a2499b6a668c extends 
OS.DataTypes.GenericRecordList {
static getItemType() {
return tradershubModel.RC_87351e3b0fa2ca59cf6c6749c6405006;
}

}

tradershubModel.RL_9e8eb507fc82c7005600a2499b6a668c = RL_9e8eb507fc82c7005600a2499b6a668c;

});

define("tradershub.model$RL_9f7e64e3acb92ada6c7cc1def60ee7ce", ["exports", "@outsystems/runtime-core-js", "tradershub.model", "tradershub.model$RC_1b2532ef629f2b3259beb09a3dc495b4"], function (exports, OSRuntimeCore, tradershubModel) {
var OS = OSRuntimeCore;
class RL_9f7e64e3acb92ada6c7cc1def60ee7ce extends 
OS.DataTypes.GenericRecordList {
static getItemType() {
return tradershubModel.RC_1b2532ef629f2b3259beb09a3dc495b4;
}

}

tradershubModel.RL_9f7e64e3acb92ada6c7cc1def60ee7ce = RL_9f7e64e3acb92ada6c7cc1def60ee7ce;

});

define("tradershub.model$RL_9f994d3152d7383b2658e32522530002", ["exports", "@outsystems/runtime-core-js", "tradershub.model", "tradershub.model$RC_4296ff7d5f43d4cf83217088b56550c4"], function (exports, OSRuntimeCore, tradershubModel) {
var OS = OSRuntimeCore;
class RL_9f994d3152d7383b2658e32522530002 extends 
OS.DataTypes.GenericRecordList {
static getItemType() {
return tradershubModel.RC_4296ff7d5f43d4cf83217088b56550c4;
}

}

tradershubModel.RL_9f994d3152d7383b2658e32522530002 = RL_9f994d3152d7383b2658e32522530002;

});

define("tradershub.model$RC_9fdefb1423ae0af9c1d321109b8695e4", ["exports", "@outsystems/runtime-core-js", "RESTAPIWebsocket.model", "tradershub.model", "RESTAPIWebsocket.model$ST_ef2ca9573c3bd1e27b35145a902be10bStructure", "tradershub.referencesHealth", "tradershub.referencesHealth$RESTAPIWebsocket"], function (exports, OSRuntimeCore, RESTAPIWebsocketModel, tradershubModel) {
var OS = OSRuntimeCore;
{class RC_9fdefb1423ae0af9c1d321109b8695e4Inner extends 
OS.DataTypes.GenericRecord {
static attributesToDeclare() {
return [
this.attr("Phone_number_verification", "phone_number_verificationAttr", "Phone_number_verification", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new RESTAPIWebsocketModel.ST_ef2ca9573c3bd1e27b35145a902be10bStructure());
}, true, RESTAPIWebsocketModel.ST_ef2ca9573c3bd1e27b35145a902be10bStructure)
].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
}

static fromStructure(str) {
return new RC_9fdefb1423ae0af9c1d321109b8695e4(new RC_9fdefb1423ae0af9c1d321109b8695e4.RecordClass({
phone_number_verificationAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
}

}

tradershubModel.RC_9fdefb1423ae0af9c1d321109b8695e4 = RC_9fdefb1423ae0af9c1d321109b8695e4Inner;

RC_9fdefb1423ae0af9c1d321109b8695e4Inner._isAnonymousRecord = true;
RC_9fdefb1423ae0af9c1d321109b8695e4Inner.UniqueId = "9fdefb14-23ae-0af9-c1d3-21109b8695e4";
var RC_9fdefb1423ae0af9c1d321109b8695e4 = RC_9fdefb1423ae0af9c1d321109b8695e4Inner;
RC_9fdefb1423ae0af9c1d321109b8695e4.init();
}
});

define("tradershub.model$RL_a0d33d282a082e36edde3e445101c333", ["exports", "@outsystems/runtime-core-js", "OutSystemsMaps.model", "tradershub.model", "OutSystemsMaps.model$ST_d609eacb476c603df8b92eb374da99faStructure", "tradershub.referencesHealth", "tradershub.referencesHealth$OutSystemsMaps"], function (exports, OSRuntimeCore, OutSystemsMapsModel, tradershubModel) {
var OS = OSRuntimeCore;
class RL_a0d33d282a082e36edde3e445101c333 extends 
OS.DataTypes.GenericRecordList {
static getItemType() {
return OutSystemsMapsModel.ST_d609eacb476c603df8b92eb374da99faStructure;
}

}

tradershubModel.RL_a0d33d282a082e36edde3e445101c333 = RL_a0d33d282a082e36edde3e445101c333;

});

define("tradershub.model$RC_a13c14b9ba27332cf1eb1f7147c42c92", ["exports", "@outsystems/runtime-core-js", "OutSystemsMaps.model", "tradershub.model", "OutSystemsMaps.model$ST_2bb06e37aea9715ba999f70106cf37a5Structure", "tradershub.referencesHealth", "tradershub.referencesHealth$OutSystemsMaps"], function (exports, OSRuntimeCore, OutSystemsMapsModel, tradershubModel) {
var OS = OSRuntimeCore;
{class RC_a13c14b9ba27332cf1eb1f7147c42c92Inner extends 
OS.DataTypes.GenericRecord {
static attributesToDeclare() {
return [
this.attr("OptionalFileLayerConfigs", "optionalFileLayerConfigsAttr", "OptionalFileLayerConfigs", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new OutSystemsMapsModel.ST_2bb06e37aea9715ba999f70106cf37a5Structure());
}, true, OutSystemsMapsModel.ST_2bb06e37aea9715ba999f70106cf37a5Structure)
].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
}

static fromStructure(str) {
return new RC_a13c14b9ba27332cf1eb1f7147c42c92(new RC_a13c14b9ba27332cf1eb1f7147c42c92.RecordClass({
optionalFileLayerConfigsAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
}

}

tradershubModel.RC_a13c14b9ba27332cf1eb1f7147c42c92 = RC_a13c14b9ba27332cf1eb1f7147c42c92Inner;

RC_a13c14b9ba27332cf1eb1f7147c42c92Inner._isAnonymousRecord = true;
RC_a13c14b9ba27332cf1eb1f7147c42c92Inner.UniqueId = "a13c14b9-ba27-332c-f1eb-1f7147c42c92";
var RC_a13c14b9ba27332cf1eb1f7147c42c92 = RC_a13c14b9ba27332cf1eb1f7147c42c92Inner;
RC_a13c14b9ba27332cf1eb1f7147c42c92.init();
}
});

define("tradershub.model$RL_a14cd2b7389f8248fb8e01d2af60e4d6", ["exports", "@outsystems/runtime-core-js", "tradershub.model", "tradershub.model$RC_480320959f84b098e78ffa8ec12a374a"], function (exports, OSRuntimeCore, tradershubModel) {
var OS = OSRuntimeCore;
class RL_a14cd2b7389f8248fb8e01d2af60e4d6 extends 
OS.DataTypes.GenericRecordList {
static getItemType() {
return tradershubModel.RC_480320959f84b098e78ffa8ec12a374a;
}

}

tradershubModel.RL_a14cd2b7389f8248fb8e01d2af60e4d6 = RL_a14cd2b7389f8248fb8e01d2af60e4d6;

});

define("tradershub.model$RC_a20800587bde28a242c1314f9567b1fb", ["exports", "@outsystems/runtime-core-js", "tradershub.model", "tradershub.model$EN_50a3b192c3184aa6afae35c5fb24155aEntityRecord"], function (exports, OSRuntimeCore, tradershubModel) {
var OS = OSRuntimeCore;
{class RC_a20800587bde28a242c1314f9567b1fbInner extends 
OS.DataTypes.GenericRecord {
static attributesToDeclare() {
return [
this.attr("Anticipatedannualturnover", "anticipatedannualturnoverAttr", "Anticipatedannualturnover", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new tradershubModel.EN_50a3b192c3184aa6afae35c5fb24155aEntityRecord());
}, true, tradershubModel.EN_50a3b192c3184aa6afae35c5fb24155aEntityRecord)
].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
}

static fromStructure(str) {
return new RC_a20800587bde28a242c1314f9567b1fb(new RC_a20800587bde28a242c1314f9567b1fb.RecordClass({
anticipatedannualturnoverAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
}

}

tradershubModel.RC_a20800587bde28a242c1314f9567b1fb = RC_a20800587bde28a242c1314f9567b1fbInner;

RC_a20800587bde28a242c1314f9567b1fbInner._isAnonymousRecord = true;
RC_a20800587bde28a242c1314f9567b1fbInner.UniqueId = "a2080058-7bde-28a2-42c1-314f9567b1fb";
var RC_a20800587bde28a242c1314f9567b1fb = RC_a20800587bde28a242c1314f9567b1fbInner;
RC_a20800587bde28a242c1314f9567b1fb.init();
}
});

define("tradershub.model$RL_a2a3d623cff8db0b23d39b4d88a9486f", ["exports", "@outsystems/runtime-core-js", "tradershub.model", "tradershub.model$RC_9fdefb1423ae0af9c1d321109b8695e4"], function (exports, OSRuntimeCore, tradershubModel) {
var OS = OSRuntimeCore;
class RL_a2a3d623cff8db0b23d39b4d88a9486f extends 
OS.DataTypes.GenericRecordList {
static getItemType() {
return tradershubModel.RC_9fdefb1423ae0af9c1d321109b8695e4;
}

}

tradershubModel.RL_a2a3d623cff8db0b23d39b4d88a9486f = RL_a2a3d623cff8db0b23d39b4d88a9486f;

});

define("tradershub.model$RL_a3746675e7afa0a411750081849db606", ["exports", "@outsystems/runtime-core-js", "OutSystemsUI.model", "tradershub.model", "OutSystemsUI.model$EN_8aa0a121c98b5f44394f59c96ffee853EntityRecord", "tradershub.referencesHealth", "tradershub.referencesHealth$OutSystemsUI"], function (exports, OSRuntimeCore, OutSystemsUIModel, tradershubModel) {
var OS = OSRuntimeCore;
class RL_a3746675e7afa0a411750081849db606 extends 
OS.DataTypes.GenericRecordList {
static getItemType() {
return OutSystemsUIModel.EN_8aa0a121c98b5f44394f59c96ffee853EntityRecord;
}

}

tradershubModel.RL_a3746675e7afa0a411750081849db606 = RL_a3746675e7afa0a411750081849db606;

});

define("tradershub.model$RC_e092deacf9bc8885dd34714ac00f33e4", ["exports", "@outsystems/runtime-core-js", "OutSystemsUI.model", "tradershub.model", "OutSystemsUI.model$EN_5be8b31925746693c09b3f64c4898006EntityRecord", "tradershub.referencesHealth", "tradershub.referencesHealth$OutSystemsUI"], function (exports, OSRuntimeCore, OutSystemsUIModel, tradershubModel) {
var OS = OSRuntimeCore;
{class RC_e092deacf9bc8885dd34714ac00f33e4Inner extends 
OS.DataTypes.GenericRecord {
static attributesToDeclare() {
return [
this.attr("Month", "monthAttr", "Month", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new OutSystemsUIModel.EN_5be8b31925746693c09b3f64c4898006EntityRecord());
}, true, OutSystemsUIModel.EN_5be8b31925746693c09b3f64c4898006EntityRecord)
].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
}

static fromStructure(str) {
return new RC_e092deacf9bc8885dd34714ac00f33e4(new RC_e092deacf9bc8885dd34714ac00f33e4.RecordClass({
monthAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
}

}

tradershubModel.RC_e092deacf9bc8885dd34714ac00f33e4 = RC_e092deacf9bc8885dd34714ac00f33e4Inner;

RC_e092deacf9bc8885dd34714ac00f33e4Inner._isAnonymousRecord = true;
RC_e092deacf9bc8885dd34714ac00f33e4Inner.UniqueId = "e092deac-f9bc-8885-dd34-714ac00f33e4";
var RC_e092deacf9bc8885dd34714ac00f33e4 = RC_e092deacf9bc8885dd34714ac00f33e4Inner;
RC_e092deacf9bc8885dd34714ac00f33e4.init();
}
});

define("tradershub.model$RL_a48ae6e6aedeec60d7b351d47494aa56", ["exports", "@outsystems/runtime-core-js", "tradershub.model", "tradershub.model$RC_e092deacf9bc8885dd34714ac00f33e4"], function (exports, OSRuntimeCore, tradershubModel) {
var OS = OSRuntimeCore;
class RL_a48ae6e6aedeec60d7b351d47494aa56 extends 
OS.DataTypes.GenericRecordList {
static getItemType() {
return tradershubModel.RC_e092deacf9bc8885dd34714ac00f33e4;
}

}

tradershubModel.RL_a48ae6e6aedeec60d7b351d47494aa56 = RL_a48ae6e6aedeec60d7b351d47494aa56;

});

define("tradershub.model$RC_a5018402fa6c90c5e826e54b2748cedc", ["exports", "@outsystems/runtime-core-js", "OutSystemsUI.model", "tradershub.model", "OutSystemsUI.model$EN_48a3ab8db598b5be6bef9add20e71bbbEntityRecord", "tradershub.referencesHealth", "tradershub.referencesHealth$OutSystemsUI"], function (exports, OSRuntimeCore, OutSystemsUIModel, tradershubModel) {
var OS = OSRuntimeCore;
{class RC_a5018402fa6c90c5e826e54b2748cedcInner extends 
OS.DataTypes.GenericRecord {
static attributesToDeclare() {
return [
this.attr("GutterSize", "gutterSizeAttr", "GutterSize", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new OutSystemsUIModel.EN_48a3ab8db598b5be6bef9add20e71bbbEntityRecord());
}, true, OutSystemsUIModel.EN_48a3ab8db598b5be6bef9add20e71bbbEntityRecord)
].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
}

static fromStructure(str) {
return new RC_a5018402fa6c90c5e826e54b2748cedc(new RC_a5018402fa6c90c5e826e54b2748cedc.RecordClass({
gutterSizeAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
}

}

tradershubModel.RC_a5018402fa6c90c5e826e54b2748cedc = RC_a5018402fa6c90c5e826e54b2748cedcInner;

RC_a5018402fa6c90c5e826e54b2748cedcInner._isAnonymousRecord = true;
RC_a5018402fa6c90c5e826e54b2748cedcInner.UniqueId = "a5018402-fa6c-90c5-e826-e54b2748cedc";
var RC_a5018402fa6c90c5e826e54b2748cedc = RC_a5018402fa6c90c5e826e54b2748cedcInner;
RC_a5018402fa6c90c5e826e54b2748cedc.init();
}
});

define("tradershub.model$RC_a582d84634a30a3a3b1e61cbfd3db9de", ["exports", "@outsystems/runtime-core-js", "System_.model", "tradershub.model", "System_.model$UserUpdateInfoRec", "tradershub.referencesHealth", "tradershub.referencesHealth$System_"], function (exports, OSRuntimeCore, System_Model, tradershubModel) {
var OS = OSRuntimeCore;
{class RC_a582d84634a30a3a3b1e61cbfd3db9deInner extends 
OS.DataTypes.GenericRecord {
static attributesToDeclare() {
return [
this.attr("UserUpdateInfo", "userUpdateInfoAttr", "UserUpdateInfo", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new OS.SystemStructures.UserUpdateInfoRec());
}, true, OS.SystemStructures.UserUpdateInfoRec)
].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
}

static fromStructure(str) {
return new RC_a582d84634a30a3a3b1e61cbfd3db9de(new RC_a582d84634a30a3a3b1e61cbfd3db9de.RecordClass({
userUpdateInfoAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
}

}

tradershubModel.RC_a582d84634a30a3a3b1e61cbfd3db9de = RC_a582d84634a30a3a3b1e61cbfd3db9deInner;

RC_a582d84634a30a3a3b1e61cbfd3db9deInner._isAnonymousRecord = true;
RC_a582d84634a30a3a3b1e61cbfd3db9deInner.UniqueId = "a582d846-34a3-0a3a-3b1e-61cbfd3db9de";
var RC_a582d84634a30a3a3b1e61cbfd3db9de = RC_a582d84634a30a3a3b1e61cbfd3db9deInner;
RC_a582d84634a30a3a3b1e61cbfd3db9de.init();
}
});

define("tradershub.model$RL_a5a3ec9b084a7cc49b0519a071a22e0c", ["exports", "@outsystems/runtime-core-js", "tradershub.model", "tradershub.model$ST_8b73f10a0c950b9427aef4a06a80a213Structure"], function (exports, OSRuntimeCore, tradershubModel) {
var OS = OSRuntimeCore;
class RL_a5a3ec9b084a7cc49b0519a071a22e0c extends 
OS.DataTypes.GenericRecordList {
static getItemType() {
return tradershubModel.ST_8b73f10a0c950b9427aef4a06a80a213Structure;
}

}

tradershubModel.RL_a5a3ec9b084a7cc49b0519a071a22e0c = RL_a5a3ec9b084a7cc49b0519a071a22e0c;

});

define("tradershub.model$RL_a5b6b975942e234f0350205b728240be", ["exports", "@outsystems/runtime-core-js", "tradershub.model", "tradershub.model$RC_a582d84634a30a3a3b1e61cbfd3db9de"], function (exports, OSRuntimeCore, tradershubModel) {
var OS = OSRuntimeCore;
class RL_a5b6b975942e234f0350205b728240be extends 
OS.DataTypes.GenericRecordList {
static getItemType() {
return tradershubModel.RC_a582d84634a30a3a3b1e61cbfd3db9de;
}

}

tradershubModel.RL_a5b6b975942e234f0350205b728240be = RL_a5b6b975942e234f0350205b728240be;

});

define("tradershub.model$RC_a5fc3d62312a89b32ae393e0571bcad7", ["exports", "@outsystems/runtime-core-js", "RESTAPIWebsocket.model", "tradershub.model", "RESTAPIWebsocket.model$ST_d4ed48681c55954edc02f19b0ed492e7Structure", "tradershub.referencesHealth", "tradershub.referencesHealth$RESTAPIWebsocket"], function (exports, OSRuntimeCore, RESTAPIWebsocketModel, tradershubModel) {
var OS = OSRuntimeCore;
{class RC_a5fc3d62312a89b32ae393e0571bcad7Inner extends 
OS.DataTypes.GenericRecord {
static attributesToDeclare() {
return [
this.attr("PostNewAccountVirtualRequest", "postNewAccountVirtualRequestAttr", "PostNewAccountVirtualRequest", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new RESTAPIWebsocketModel.ST_d4ed48681c55954edc02f19b0ed492e7Structure());
}, true, RESTAPIWebsocketModel.ST_d4ed48681c55954edc02f19b0ed492e7Structure)
].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
}

static fromStructure(str) {
return new RC_a5fc3d62312a89b32ae393e0571bcad7(new RC_a5fc3d62312a89b32ae393e0571bcad7.RecordClass({
postNewAccountVirtualRequestAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
}

}

tradershubModel.RC_a5fc3d62312a89b32ae393e0571bcad7 = RC_a5fc3d62312a89b32ae393e0571bcad7Inner;

RC_a5fc3d62312a89b32ae393e0571bcad7Inner._isAnonymousRecord = true;
RC_a5fc3d62312a89b32ae393e0571bcad7Inner.UniqueId = "a5fc3d62-312a-89b3-2ae3-93e0571bcad7";
var RC_a5fc3d62312a89b32ae393e0571bcad7 = RC_a5fc3d62312a89b32ae393e0571bcad7Inner;
RC_a5fc3d62312a89b32ae393e0571bcad7.init();
}
});

define("tradershub.model$RL_a60626c1780bfe250dcef75d5dfa5fd1", ["exports", "@outsystems/runtime-core-js", "System_.model", "tradershub.model", "System_.model$ChangePasswordFailureReasonRec", "tradershub.referencesHealth", "tradershub.referencesHealth$System_"], function (exports, OSRuntimeCore, System_Model, tradershubModel) {
var OS = OSRuntimeCore;
class RL_a60626c1780bfe250dcef75d5dfa5fd1 extends 
OS.DataTypes.GenericRecordList {
static getItemType() {
return OS.SystemStructures.ChangePasswordFailureReasonRec;
}

}

tradershubModel.RL_a60626c1780bfe250dcef75d5dfa5fd1 = RL_a60626c1780bfe250dcef75d5dfa5fd1;

});

define("tradershub.model$RL_a643ad739a9e7487f20ced81a9457cbe", ["exports", "@outsystems/runtime-core-js", "tradershub.model", "tradershub.model$EN_83f565756985dca23bf05361fceace11EntityRecord"], function (exports, OSRuntimeCore, tradershubModel) {
var OS = OSRuntimeCore;
class RL_a643ad739a9e7487f20ced81a9457cbe extends 
OS.DataTypes.GenericRecordList {
static getItemType() {
return tradershubModel.EN_83f565756985dca23bf05361fceace11EntityRecord;
}

}

tradershubModel.RL_a643ad739a9e7487f20ced81a9457cbe = RL_a643ad739a9e7487f20ced81a9457cbe;

});

define("tradershub.model$RL_a68a1924f216276514d0d72b01e76ad7", ["exports", "@outsystems/runtime-core-js", "tradershub.model", "tradershub.model$RC_8f83807ccf626a579bfcce6d9964e931"], function (exports, OSRuntimeCore, tradershubModel) {
var OS = OSRuntimeCore;
class RL_a68a1924f216276514d0d72b01e76ad7 extends 
OS.DataTypes.GenericRecordList {
static getItemType() {
return tradershubModel.RC_8f83807ccf626a579bfcce6d9964e931;
}

}

tradershubModel.RL_a68a1924f216276514d0d72b01e76ad7 = RL_a68a1924f216276514d0d72b01e76ad7;

});

define("tradershub.model$RC_a8681099a96d9738667779eaaccedc4a", ["exports", "@outsystems/runtime-core-js", "RESTAPIWebsocket.model", "tradershub.model", "RESTAPIWebsocket.model$ST_6e7638d850b78b46a75a04e2dcd58f58Structure", "tradershub.referencesHealth", "tradershub.referencesHealth$RESTAPIWebsocket"], function (exports, OSRuntimeCore, RESTAPIWebsocketModel, tradershubModel) {
var OS = OSRuntimeCore;
{class RC_a8681099a96d9738667779eaaccedc4aInner extends 
OS.DataTypes.GenericRecord {
static attributesToDeclare() {
return [
this.attr("IDR", "iDRAttr", "IDR", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new RESTAPIWebsocketModel.ST_6e7638d850b78b46a75a04e2dcd58f58Structure());
}, true, RESTAPIWebsocketModel.ST_6e7638d850b78b46a75a04e2dcd58f58Structure)
].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
}

static fromStructure(str) {
return new RC_a8681099a96d9738667779eaaccedc4a(new RC_a8681099a96d9738667779eaaccedc4a.RecordClass({
iDRAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
}

}

tradershubModel.RC_a8681099a96d9738667779eaaccedc4a = RC_a8681099a96d9738667779eaaccedc4aInner;

RC_a8681099a96d9738667779eaaccedc4aInner._isAnonymousRecord = true;
RC_a8681099a96d9738667779eaaccedc4aInner.UniqueId = "a8681099-a96d-9738-6677-79eaaccedc4a";
var RC_a8681099a96d9738667779eaaccedc4a = RC_a8681099a96d9738667779eaaccedc4aInner;
RC_a8681099a96d9738667779eaaccedc4a.init();
}
});

define("tradershub.model$RL_a8b7c276560c35af141714ac8a51d257", ["exports", "@outsystems/runtime-core-js", "tradershub.model", "tradershub.model$RC_47772cad80dc4a787d65fd52470ca2cd"], function (exports, OSRuntimeCore, tradershubModel) {
var OS = OSRuntimeCore;
class RL_a8b7c276560c35af141714ac8a51d257 extends 
OS.DataTypes.GenericRecordList {
static getItemType() {
return tradershubModel.RC_47772cad80dc4a787d65fd52470ca2cd;
}

}

tradershubModel.RL_a8b7c276560c35af141714ac8a51d257 = RL_a8b7c276560c35af141714ac8a51d257;

});

define("tradershub.model$RC_a9755f38b0542dfb6acdd8617637c169", ["exports", "@outsystems/runtime-core-js", "RESTAPIWebsocket.model", "tradershub.model", "RESTAPIWebsocket.model$ST_24b97ac8060a9349e09da2d88e1dea00Structure", "tradershub.referencesHealth", "tradershub.referencesHealth$RESTAPIWebsocket"], function (exports, OSRuntimeCore, RESTAPIWebsocketModel, tradershubModel) {
var OS = OSRuntimeCore;
{class RC_a9755f38b0542dfb6acdd8617637c169Inner extends 
OS.DataTypes.GenericRecord {
static attributesToDeclare() {
return [
this.attr("ResetPassword", "resetPasswordAttr", "ResetPassword", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new RESTAPIWebsocketModel.ST_24b97ac8060a9349e09da2d88e1dea00Structure());
}, true, RESTAPIWebsocketModel.ST_24b97ac8060a9349e09da2d88e1dea00Structure)
].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
}

static fromStructure(str) {
return new RC_a9755f38b0542dfb6acdd8617637c169(new RC_a9755f38b0542dfb6acdd8617637c169.RecordClass({
resetPasswordAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
}

}

tradershubModel.RC_a9755f38b0542dfb6acdd8617637c169 = RC_a9755f38b0542dfb6acdd8617637c169Inner;

RC_a9755f38b0542dfb6acdd8617637c169Inner._isAnonymousRecord = true;
RC_a9755f38b0542dfb6acdd8617637c169Inner.UniqueId = "a9755f38-b054-2dfb-6acd-d8617637c169";
var RC_a9755f38b0542dfb6acdd8617637c169 = RC_a9755f38b0542dfb6acdd8617637c169Inner;
RC_a9755f38b0542dfb6acdd8617637c169.init();
}
});

define("tradershub.model$RL_a9a9108148017b3108e7788d5e0b597c", ["exports", "@outsystems/runtime-core-js", "tradershub.model", "tradershub.model$RC_23e4ac7b03ba2050af5811737c8cc89f"], function (exports, OSRuntimeCore, tradershubModel) {
var OS = OSRuntimeCore;
class RL_a9a9108148017b3108e7788d5e0b597c extends 
OS.DataTypes.GenericRecordList {
static getItemType() {
return tradershubModel.RC_23e4ac7b03ba2050af5811737c8cc89f;
}

}

tradershubModel.RL_a9a9108148017b3108e7788d5e0b597c = RL_a9a9108148017b3108e7788d5e0b597c;

});

define("tradershub.model$RL_a9ea31b939f652b4b427fa383c80cdbb", ["exports", "@outsystems/runtime-core-js", "RESTAPIWebsocket.model", "tradershub.model", "RESTAPIWebsocket.model$ST_98319758945048a72386b9e9466c220aStructure", "tradershub.referencesHealth", "tradershub.referencesHealth$RESTAPIWebsocket"], function (exports, OSRuntimeCore, RESTAPIWebsocketModel, tradershubModel) {
var OS = OSRuntimeCore;
class RL_a9ea31b939f652b4b427fa383c80cdbb extends 
OS.DataTypes.GenericRecordList {
static getItemType() {
return RESTAPIWebsocketModel.ST_98319758945048a72386b9e9466c220aStructure;
}

}

tradershubModel.RL_a9ea31b939f652b4b427fa383c80cdbb = RL_a9ea31b939f652b4b427fa383c80cdbb;

});

define("tradershub.model$RL_aa02ec10f0665a9ad9726b842466f302", ["exports", "@outsystems/runtime-core-js", "tradershub.model", "tradershub.model$ST_4b7e068329ae717d0f48556181f6aebaStructure"], function (exports, OSRuntimeCore, tradershubModel) {
var OS = OSRuntimeCore;
class RL_aa02ec10f0665a9ad9726b842466f302 extends 
OS.DataTypes.GenericRecordList {
static getItemType() {
return tradershubModel.ST_4b7e068329ae717d0f48556181f6aebaStructure;
}

}

tradershubModel.RL_aa02ec10f0665a9ad9726b842466f302 = RL_aa02ec10f0665a9ad9726b842466f302;

});

define("tradershub.model$RL_aa804f22c3f564ff1d4a4fb28230a6c8", ["exports", "@outsystems/runtime-core-js", "tradershub.model", "tradershub.model$RC_66d065f1d61691db9174cf436432750f"], function (exports, OSRuntimeCore, tradershubModel) {
var OS = OSRuntimeCore;
class RL_aa804f22c3f564ff1d4a4fb28230a6c8 extends 
OS.DataTypes.GenericRecordList {
static getItemType() {
return tradershubModel.RC_66d065f1d61691db9174cf436432750f;
}

}

tradershubModel.RL_aa804f22c3f564ff1d4a4fb28230a6c8 = RL_aa804f22c3f564ff1d4a4fb28230a6c8;

});

define("tradershub.model$RC_d687bfbe104d17346737149645109738", ["exports", "@outsystems/runtime-core-js", "OutSystemsMaps.model", "tradershub.model", "OutSystemsMaps.model$ST_30625b4ad0f3e10abf82b61ea58e8644Structure", "tradershub.referencesHealth", "tradershub.referencesHealth$OutSystemsMaps"], function (exports, OSRuntimeCore, OutSystemsMapsModel, tradershubModel) {
var OS = OSRuntimeCore;
{class RC_d687bfbe104d17346737149645109738Inner extends 
OS.DataTypes.GenericRecord {
static attributesToDeclare() {
return [
this.attr("MarkerClusterer", "markerClustererAttr", "MarkerClusterer", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new OutSystemsMapsModel.ST_30625b4ad0f3e10abf82b61ea58e8644Structure());
}, true, OutSystemsMapsModel.ST_30625b4ad0f3e10abf82b61ea58e8644Structure)
].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
}

static fromStructure(str) {
return new RC_d687bfbe104d17346737149645109738(new RC_d687bfbe104d17346737149645109738.RecordClass({
markerClustererAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
}

}

tradershubModel.RC_d687bfbe104d17346737149645109738 = RC_d687bfbe104d17346737149645109738Inner;

RC_d687bfbe104d17346737149645109738Inner._isAnonymousRecord = true;
RC_d687bfbe104d17346737149645109738Inner.UniqueId = "d687bfbe-104d-1734-6737-149645109738";
var RC_d687bfbe104d17346737149645109738 = RC_d687bfbe104d17346737149645109738Inner;
RC_d687bfbe104d17346737149645109738.init();
}
});

define("tradershub.model$RL_ab79b46414538632e058912e7b4492f7", ["exports", "@outsystems/runtime-core-js", "tradershub.model", "tradershub.model$RC_d687bfbe104d17346737149645109738"], function (exports, OSRuntimeCore, tradershubModel) {
var OS = OSRuntimeCore;
class RL_ab79b46414538632e058912e7b4492f7 extends 
OS.DataTypes.GenericRecordList {
static getItemType() {
return tradershubModel.RC_d687bfbe104d17346737149645109738;
}

}

tradershubModel.RL_ab79b46414538632e058912e7b4492f7 = RL_ab79b46414538632e058912e7b4492f7;

});

define("tradershub.model$RL_abbb06caa2dc3007694c8b499e93ac42", ["exports", "@outsystems/runtime-core-js", "RESTAPIWebsocket.model", "tradershub.model", "RESTAPIWebsocket.model$ST_5fc2e4a935064c1413d6e989e87decd2Structure", "tradershub.referencesHealth", "tradershub.referencesHealth$RESTAPIWebsocket"], function (exports, OSRuntimeCore, RESTAPIWebsocketModel, tradershubModel) {
var OS = OSRuntimeCore;
class RL_abbb06caa2dc3007694c8b499e93ac42 extends 
OS.DataTypes.GenericRecordList {
static getItemType() {
return RESTAPIWebsocketModel.ST_5fc2e4a935064c1413d6e989e87decd2Structure;
}

}

tradershubModel.RL_abbb06caa2dc3007694c8b499e93ac42 = RL_abbb06caa2dc3007694c8b499e93ac42;

});

define("tradershub.model$RL_ac145e33ab4afdc045b3b68efad3e2af", ["exports", "@outsystems/runtime-core-js", "tradershub.model", "tradershub.model$RC_a20800587bde28a242c1314f9567b1fb"], function (exports, OSRuntimeCore, tradershubModel) {
var OS = OSRuntimeCore;
class RL_ac145e33ab4afdc045b3b68efad3e2af extends 
OS.DataTypes.GenericRecordList {
static getItemType() {
return tradershubModel.RC_a20800587bde28a242c1314f9567b1fb;
}

}

tradershubModel.RL_ac145e33ab4afdc045b3b68efad3e2af = RL_ac145e33ab4afdc045b3b68efad3e2af;

});

define("tradershub.model$RC_aca073df88d40d31252fa904cba1bb39", ["exports", "@outsystems/runtime-core-js", "RESTAPIWebsocket.model", "tradershub.model", "RESTAPIWebsocket.model$ST_6cf1ba858957788c000fe8d27578f9c1Structure", "tradershub.referencesHealth", "tradershub.referencesHealth$RESTAPIWebsocket"], function (exports, OSRuntimeCore, RESTAPIWebsocketModel, tradershubModel) {
var OS = OSRuntimeCore;
{class RC_aca073df88d40d31252fa904cba1bb39Inner extends 
OS.DataTypes.GenericRecord {
static attributesToDeclare() {
return [
this.attr("Standard", "standardAttr", "Standard", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new RESTAPIWebsocketModel.ST_6cf1ba858957788c000fe8d27578f9c1Structure());
}, true, RESTAPIWebsocketModel.ST_6cf1ba858957788c000fe8d27578f9c1Structure)
].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
}

static fromStructure(str) {
return new RC_aca073df88d40d31252fa904cba1bb39(new RC_aca073df88d40d31252fa904cba1bb39.RecordClass({
standardAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
}

}

tradershubModel.RC_aca073df88d40d31252fa904cba1bb39 = RC_aca073df88d40d31252fa904cba1bb39Inner;

RC_aca073df88d40d31252fa904cba1bb39Inner._isAnonymousRecord = true;
RC_aca073df88d40d31252fa904cba1bb39Inner.UniqueId = "aca073df-88d4-0d31-252f-a904cba1bb39";
var RC_aca073df88d40d31252fa904cba1bb39 = RC_aca073df88d40d31252fa904cba1bb39Inner;
RC_aca073df88d40d31252fa904cba1bb39.init();
}
});

define("tradershub.model$RC_cc497b0f4b2a50d7de3b7b94927d26ae", ["exports", "@outsystems/runtime-core-js", "tradershub.model", "tradershub.model$EN_09277b6b86cf80f882c3c457ae17c01aEntityRecord"], function (exports, OSRuntimeCore, tradershubModel) {
var OS = OSRuntimeCore;
{class RC_cc497b0f4b2a50d7de3b7b94927d26aeInner extends 
OS.DataTypes.GenericRecord {
static attributesToDeclare() {
return [
this.attr("EmploymentIndustry", "employmentIndustryAttr", "EmploymentIndustry", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new tradershubModel.EN_09277b6b86cf80f882c3c457ae17c01aEntityRecord());
}, true, tradershubModel.EN_09277b6b86cf80f882c3c457ae17c01aEntityRecord)
].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
}

static fromStructure(str) {
return new RC_cc497b0f4b2a50d7de3b7b94927d26ae(new RC_cc497b0f4b2a50d7de3b7b94927d26ae.RecordClass({
employmentIndustryAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
}

}

tradershubModel.RC_cc497b0f4b2a50d7de3b7b94927d26ae = RC_cc497b0f4b2a50d7de3b7b94927d26aeInner;

RC_cc497b0f4b2a50d7de3b7b94927d26aeInner._isAnonymousRecord = true;
RC_cc497b0f4b2a50d7de3b7b94927d26aeInner.UniqueId = "cc497b0f-4b2a-50d7-de3b-7b94927d26ae";
var RC_cc497b0f4b2a50d7de3b7b94927d26ae = RC_cc497b0f4b2a50d7de3b7b94927d26aeInner;
RC_cc497b0f4b2a50d7de3b7b94927d26ae.init();
}
});

define("tradershub.model$RL_ad5d26c70131beb1bb02efe2051407b2", ["exports", "@outsystems/runtime-core-js", "tradershub.model", "tradershub.model$RC_cc497b0f4b2a50d7de3b7b94927d26ae"], function (exports, OSRuntimeCore, tradershubModel) {
var OS = OSRuntimeCore;
class RL_ad5d26c70131beb1bb02efe2051407b2 extends 
OS.DataTypes.GenericRecordList {
static getItemType() {
return tradershubModel.RC_cc497b0f4b2a50d7de3b7b94927d26ae;
}

}

tradershubModel.RL_ad5d26c70131beb1bb02efe2051407b2 = RL_ad5d26c70131beb1bb02efe2051407b2;

});

define("tradershub.model$RC_ada7ae2f7fcadfe9ad4cb9dbd1c4caf8", ["exports", "@outsystems/runtime-core-js", "RESTAPIWebsocket.model", "tradershub.model", "RESTAPIWebsocket.model$ST_159cd2ead3b4ce7cf017e33699885453Structure", "tradershub.referencesHealth", "tradershub.referencesHealth$RESTAPIWebsocket"], function (exports, OSRuntimeCore, RESTAPIWebsocketModel, tradershubModel) {
var OS = OSRuntimeCore;
{class RC_ada7ae2f7fcadfe9ad4cb9dbd1c4caf8Inner extends 
OS.DataTypes.GenericRecord {
static attributesToDeclare() {
return [
this.attr("Zero_spread", "zero_spreadAttr", "Zero_spread", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new RESTAPIWebsocketModel.ST_159cd2ead3b4ce7cf017e33699885453Structure());
}, true, RESTAPIWebsocketModel.ST_159cd2ead3b4ce7cf017e33699885453Structure)
].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
}

static fromStructure(str) {
return new RC_ada7ae2f7fcadfe9ad4cb9dbd1c4caf8(new RC_ada7ae2f7fcadfe9ad4cb9dbd1c4caf8.RecordClass({
zero_spreadAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
}

}

tradershubModel.RC_ada7ae2f7fcadfe9ad4cb9dbd1c4caf8 = RC_ada7ae2f7fcadfe9ad4cb9dbd1c4caf8Inner;

RC_ada7ae2f7fcadfe9ad4cb9dbd1c4caf8Inner._isAnonymousRecord = true;
RC_ada7ae2f7fcadfe9ad4cb9dbd1c4caf8Inner.UniqueId = "ada7ae2f-7fca-dfe9-ad4c-b9dbd1c4caf8";
var RC_ada7ae2f7fcadfe9ad4cb9dbd1c4caf8 = RC_ada7ae2f7fcadfe9ad4cb9dbd1c4caf8Inner;
RC_ada7ae2f7fcadfe9ad4cb9dbd1c4caf8.init();
}
});

define("tradershub.model$RL_adbfc30c899ef88f92a4ffb0fe1c08d9", ["exports", "@outsystems/runtime-core-js", "OutSystemsUI.model", "tradershub.model", "OutSystemsUI.model$EN_6b2a66e5a0a888e952c1a6f0d254d48aEntityRecord", "tradershub.referencesHealth", "tradershub.referencesHealth$OutSystemsUI"], function (exports, OSRuntimeCore, OutSystemsUIModel, tradershubModel) {
var OS = OSRuntimeCore;
class RL_adbfc30c899ef88f92a4ffb0fe1c08d9 extends 
OS.DataTypes.GenericRecordList {
static getItemType() {
return OutSystemsUIModel.EN_6b2a66e5a0a888e952c1a6f0d254d48aEntityRecord;
}

}

tradershubModel.RL_adbfc30c899ef88f92a4ffb0fe1c08d9 = RL_adbfc30c899ef88f92a4ffb0fe1c08d9;

});

define("tradershub.model$RC_ae2fdfd8cc48be4dcc0710ae53b1008e", ["exports", "@outsystems/runtime-core-js", "tradershub.model", "tradershub.model$ST_8d630435c078369fbe29222c857e96f2Structure"], function (exports, OSRuntimeCore, tradershubModel) {
var OS = OSRuntimeCore;
{class RC_ae2fdfd8cc48be4dcc0710ae53b1008eInner extends 
OS.DataTypes.GenericRecord {
static attributesToDeclare() {
return [
this.attr("Authorize", "authorizeAttr", "Authorize", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new tradershubModel.ST_8d630435c078369fbe29222c857e96f2Structure());
}, true, tradershubModel.ST_8d630435c078369fbe29222c857e96f2Structure)
].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
}

static fromStructure(str) {
return new RC_ae2fdfd8cc48be4dcc0710ae53b1008e(new RC_ae2fdfd8cc48be4dcc0710ae53b1008e.RecordClass({
authorizeAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
}

}

tradershubModel.RC_ae2fdfd8cc48be4dcc0710ae53b1008e = RC_ae2fdfd8cc48be4dcc0710ae53b1008eInner;

RC_ae2fdfd8cc48be4dcc0710ae53b1008eInner._isAnonymousRecord = true;
RC_ae2fdfd8cc48be4dcc0710ae53b1008eInner.UniqueId = "ae2fdfd8-cc48-be4d-cc07-10ae53b1008e";
var RC_ae2fdfd8cc48be4dcc0710ae53b1008e = RC_ae2fdfd8cc48be4dcc0710ae53b1008eInner;
RC_ae2fdfd8cc48be4dcc0710ae53b1008e.init();
}
});

define("tradershub.model$RC_e62fa91ce8ed0a38e810cad8c726da2f", ["exports", "@outsystems/runtime-core-js", "RESTAPIWebsocket.model", "tradershub.model", "RESTAPIWebsocket.model$ST_5b838c70a2bbb273d7a479efa1e8ea87Structure", "tradershub.referencesHealth", "tradershub.referencesHealth$RESTAPIWebsocket"], function (exports, OSRuntimeCore, RESTAPIWebsocketModel, tradershubModel) {
var OS = OSRuntimeCore;
{class RC_e62fa91ce8ed0a38e810cad8c726da2fInner extends 
OS.DataTypes.GenericRecord {
static attributesToDeclare() {
return [
this.attr("Commodity", "commodityAttr", "Commodity", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new RESTAPIWebsocketModel.ST_5b838c70a2bbb273d7a479efa1e8ea87Structure());
}, true, RESTAPIWebsocketModel.ST_5b838c70a2bbb273d7a479efa1e8ea87Structure)
].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
}

static fromStructure(str) {
return new RC_e62fa91ce8ed0a38e810cad8c726da2f(new RC_e62fa91ce8ed0a38e810cad8c726da2f.RecordClass({
commodityAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
}

}

tradershubModel.RC_e62fa91ce8ed0a38e810cad8c726da2f = RC_e62fa91ce8ed0a38e810cad8c726da2fInner;

RC_e62fa91ce8ed0a38e810cad8c726da2fInner._isAnonymousRecord = true;
RC_e62fa91ce8ed0a38e810cad8c726da2fInner.UniqueId = "e62fa91c-e8ed-0a38-e810-cad8c726da2f";
var RC_e62fa91ce8ed0a38e810cad8c726da2f = RC_e62fa91ce8ed0a38e810cad8c726da2fInner;
RC_e62fa91ce8ed0a38e810cad8c726da2f.init();
}
});

define("tradershub.model$RL_aecf700fcd9c0ef5df9dda4dac8947af", ["exports", "@outsystems/runtime-core-js", "tradershub.model", "tradershub.model$RC_e62fa91ce8ed0a38e810cad8c726da2f"], function (exports, OSRuntimeCore, tradershubModel) {
var OS = OSRuntimeCore;
class RL_aecf700fcd9c0ef5df9dda4dac8947af extends 
OS.DataTypes.GenericRecordList {
static getItemType() {
return tradershubModel.RC_e62fa91ce8ed0a38e810cad8c726da2f;
}

}

tradershubModel.RL_aecf700fcd9c0ef5df9dda4dac8947af = RL_aecf700fcd9c0ef5df9dda4dac8947af;

});

define("tradershub.model$RL_aed5f137fa41d07452ca3e0048356a3c", ["exports", "@outsystems/runtime-core-js", "tradershub.model", "tradershub.model$ST_63cc3919eec86680389c2f3be3c018faStructure"], function (exports, OSRuntimeCore, tradershubModel) {
var OS = OSRuntimeCore;
class RL_aed5f137fa41d07452ca3e0048356a3c extends 
OS.DataTypes.GenericRecordList {
static getItemType() {
return tradershubModel.ST_63cc3919eec86680389c2f3be3c018faStructure;
}

}

tradershubModel.RL_aed5f137fa41d07452ca3e0048356a3c = RL_aed5f137fa41d07452ca3e0048356a3c;

});

define("tradershub.model$RL_af071f8b45f2932e1364f15bc3e90819", ["exports", "@outsystems/runtime-core-js", "OutSystemsUI.model", "tradershub.model", "OutSystemsUI.model$EN_adf11bcbc411b5a0f498d25dd0ea882fEntityRecord", "tradershub.referencesHealth", "tradershub.referencesHealth$OutSystemsUI"], function (exports, OSRuntimeCore, OutSystemsUIModel, tradershubModel) {
var OS = OSRuntimeCore;
class RL_af071f8b45f2932e1364f15bc3e90819 extends 
OS.DataTypes.GenericRecordList {
static getItemType() {
return OutSystemsUIModel.EN_adf11bcbc411b5a0f498d25dd0ea882fEntityRecord;
}

}

tradershubModel.RL_af071f8b45f2932e1364f15bc3e90819 = RL_af071f8b45f2932e1364f15bc3e90819;

});

define("tradershub.model$RL_af7f649b9a00c07af59590b0760c28af", ["exports", "@outsystems/runtime-core-js", "OutSystemsUI.model", "tradershub.model", "OutSystemsUI.model$ST_0262e6910ebecc922f633b08db78d688Structure", "tradershub.referencesHealth", "tradershub.referencesHealth$OutSystemsUI"], function (exports, OSRuntimeCore, OutSystemsUIModel, tradershubModel) {
var OS = OSRuntimeCore;
class RL_af7f649b9a00c07af59590b0760c28af extends 
OS.DataTypes.GenericRecordList {
static getItemType() {
return OutSystemsUIModel.ST_0262e6910ebecc922f633b08db78d688Structure;
}

}

tradershubModel.RL_af7f649b9a00c07af59590b0760c28af = RL_af7f649b9a00c07af59590b0760c28af;

});

define("tradershub.model$RL_af98e667e22024fcd3f4c2355613ad7f", ["exports", "@outsystems/runtime-core-js", "tradershub.model", "tradershub.model$EN_772522d7b54f56f59fb8e1e743f444ecEntityRecord"], function (exports, OSRuntimeCore, tradershubModel) {
var OS = OSRuntimeCore;
class RL_af98e667e22024fcd3f4c2355613ad7f extends 
OS.DataTypes.GenericRecordList {
static getItemType() {
return tradershubModel.EN_772522d7b54f56f59fb8e1e743f444ecEntityRecord;
}

}

tradershubModel.RL_af98e667e22024fcd3f4c2355613ad7f = RL_af98e667e22024fcd3f4c2355613ad7f;

});

define("tradershub.model$RL_b115fffa775eacd174e4dc6056343607", ["exports", "@outsystems/runtime-core-js", "tradershub.model", "tradershub.model$RC_860a186f93e9fe7fe0d42f4282c2ec00"], function (exports, OSRuntimeCore, tradershubModel) {
var OS = OSRuntimeCore;
class RL_b115fffa775eacd174e4dc6056343607 extends 
OS.DataTypes.GenericRecordList {
static getItemType() {
return tradershubModel.RC_860a186f93e9fe7fe0d42f4282c2ec00;
}

}

tradershubModel.RL_b115fffa775eacd174e4dc6056343607 = RL_b115fffa775eacd174e4dc6056343607;

});

define("tradershub.model$RL_b12f7a71666929e6ceec6559f200d213", ["exports", "@outsystems/runtime-core-js", "RESTAPIWebsocket.model", "tradershub.model", "RESTAPIWebsocket.model$ST_1c923b28044712e7268167783ecfdfbeStructure", "tradershub.referencesHealth", "tradershub.referencesHealth$RESTAPIWebsocket"], function (exports, OSRuntimeCore, RESTAPIWebsocketModel, tradershubModel) {
var OS = OSRuntimeCore;
class RL_b12f7a71666929e6ceec6559f200d213 extends 
OS.DataTypes.GenericRecordList {
static getItemType() {
return RESTAPIWebsocketModel.ST_1c923b28044712e7268167783ecfdfbeStructure;
}

}

tradershubModel.RL_b12f7a71666929e6ceec6559f200d213 = RL_b12f7a71666929e6ceec6559f200d213;

});

define("tradershub.model$RC_e03a49308bfaca02257d451178bbf041", ["exports", "@outsystems/runtime-core-js", "OutSystemsUI.model", "tradershub.model", "OutSystemsUI.model$ST_60f22bd2e9b10a22278b8afe6d7f601aStructure", "tradershub.referencesHealth", "tradershub.referencesHealth$OutSystemsUI"], function (exports, OSRuntimeCore, OutSystemsUIModel, tradershubModel) {
var OS = OSRuntimeCore;
{class RC_e03a49308bfaca02257d451178bbf041Inner extends 
OS.DataTypes.GenericRecord {
static attributesToDeclare() {
return [
this.attr("DropdownOption", "dropdownOptionAttr", "DropdownOption", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new OutSystemsUIModel.ST_60f22bd2e9b10a22278b8afe6d7f601aStructure());
}, true, OutSystemsUIModel.ST_60f22bd2e9b10a22278b8afe6d7f601aStructure)
].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
}

static fromStructure(str) {
return new RC_e03a49308bfaca02257d451178bbf041(new RC_e03a49308bfaca02257d451178bbf041.RecordClass({
dropdownOptionAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
}

}

tradershubModel.RC_e03a49308bfaca02257d451178bbf041 = RC_e03a49308bfaca02257d451178bbf041Inner;

RC_e03a49308bfaca02257d451178bbf041Inner._isAnonymousRecord = true;
RC_e03a49308bfaca02257d451178bbf041Inner.UniqueId = "e03a4930-8bfa-ca02-257d-451178bbf041";
var RC_e03a49308bfaca02257d451178bbf041 = RC_e03a49308bfaca02257d451178bbf041Inner;
RC_e03a49308bfaca02257d451178bbf041.init();
}
});

define("tradershub.model$RL_b17522b541f7e019c0443ba6658c825f", ["exports", "@outsystems/runtime-core-js", "tradershub.model", "tradershub.model$RC_e03a49308bfaca02257d451178bbf041"], function (exports, OSRuntimeCore, tradershubModel) {
var OS = OSRuntimeCore;
class RL_b17522b541f7e019c0443ba6658c825f extends 
OS.DataTypes.GenericRecordList {
static getItemType() {
return tradershubModel.RC_e03a49308bfaca02257d451178bbf041;
}

}

tradershubModel.RL_b17522b541f7e019c0443ba6658c825f = RL_b17522b541f7e019c0443ba6658c825f;

});

define("tradershub.model$RC_b1f9a62aa1eb0e7979aaceb89243cea9", ["exports", "@outsystems/runtime-core-js", "RESTAPIWebsocket.model", "tradershub.model", "RESTAPIWebsocket.model$ST_5ba9c80e587385c94102779d8eab301cStructure", "tradershub.referencesHealth", "tradershub.referencesHealth$RESTAPIWebsocket"], function (exports, OSRuntimeCore, RESTAPIWebsocketModel, tradershubModel) {
var OS = OSRuntimeCore;
{class RC_b1f9a62aa1eb0e7979aaceb89243cea9Inner extends 
OS.DataTypes.GenericRecord {
static attributesToDeclare() {
return [
this.attr("Ctrader", "ctraderAttr", "Ctrader", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new RESTAPIWebsocketModel.ST_5ba9c80e587385c94102779d8eab301cStructure());
}, true, RESTAPIWebsocketModel.ST_5ba9c80e587385c94102779d8eab301cStructure)
].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
}

static fromStructure(str) {
return new RC_b1f9a62aa1eb0e7979aaceb89243cea9(new RC_b1f9a62aa1eb0e7979aaceb89243cea9.RecordClass({
ctraderAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
}

}

tradershubModel.RC_b1f9a62aa1eb0e7979aaceb89243cea9 = RC_b1f9a62aa1eb0e7979aaceb89243cea9Inner;

RC_b1f9a62aa1eb0e7979aaceb89243cea9Inner._isAnonymousRecord = true;
RC_b1f9a62aa1eb0e7979aaceb89243cea9Inner.UniqueId = "b1f9a62a-a1eb-0e79-79aa-ceb89243cea9";
var RC_b1f9a62aa1eb0e7979aaceb89243cea9 = RC_b1f9a62aa1eb0e7979aaceb89243cea9Inner;
RC_b1f9a62aa1eb0e7979aaceb89243cea9.init();
}
});

define("tradershub.model$RC_b6adbbf4e08bad2975a6f8f796279b71", ["exports", "@outsystems/runtime-core-js", "OutSystemsUI.model", "tradershub.model", "OutSystemsUI.model$EN_ef2257119ab36e2c35ddd0bb3d7ac544EntityRecord", "tradershub.referencesHealth", "tradershub.referencesHealth$OutSystemsUI"], function (exports, OSRuntimeCore, OutSystemsUIModel, tradershubModel) {
var OS = OSRuntimeCore;
{class RC_b6adbbf4e08bad2975a6f8f796279b71Inner extends 
OS.DataTypes.GenericRecord {
static attributesToDeclare() {
return [
this.attr("ColumnBreak", "columnBreakAttr", "ColumnBreak", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new OutSystemsUIModel.EN_ef2257119ab36e2c35ddd0bb3d7ac544EntityRecord());
}, true, OutSystemsUIModel.EN_ef2257119ab36e2c35ddd0bb3d7ac544EntityRecord)
].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
}

static fromStructure(str) {
return new RC_b6adbbf4e08bad2975a6f8f796279b71(new RC_b6adbbf4e08bad2975a6f8f796279b71.RecordClass({
columnBreakAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
}

}

tradershubModel.RC_b6adbbf4e08bad2975a6f8f796279b71 = RC_b6adbbf4e08bad2975a6f8f796279b71Inner;

RC_b6adbbf4e08bad2975a6f8f796279b71Inner._isAnonymousRecord = true;
RC_b6adbbf4e08bad2975a6f8f796279b71Inner.UniqueId = "b6adbbf4-e08b-ad29-75a6-f8f796279b71";
var RC_b6adbbf4e08bad2975a6f8f796279b71 = RC_b6adbbf4e08bad2975a6f8f796279b71Inner;
RC_b6adbbf4e08bad2975a6f8f796279b71.init();
}
});

define("tradershub.model$RL_b2003a063523641b68ecff9e50755bc3", ["exports", "@outsystems/runtime-core-js", "tradershub.model", "tradershub.model$RC_b6adbbf4e08bad2975a6f8f796279b71"], function (exports, OSRuntimeCore, tradershubModel) {
var OS = OSRuntimeCore;
class RL_b2003a063523641b68ecff9e50755bc3 extends 
OS.DataTypes.GenericRecordList {
static getItemType() {
return tradershubModel.RC_b6adbbf4e08bad2975a6f8f796279b71;
}

}

tradershubModel.RL_b2003a063523641b68ecff9e50755bc3 = RL_b2003a063523641b68ecff9e50755bc3;

});

define("tradershub.model$RL_b201cade1813c1540d500643cb1092ed", ["exports", "@outsystems/runtime-core-js", "tradershub.model", "tradershub.model$ST_a53d413aeb6e91d25715586cf90a94dfStructure"], function (exports, OSRuntimeCore, tradershubModel) {
var OS = OSRuntimeCore;
class RL_b201cade1813c1540d500643cb1092ed extends 
OS.DataTypes.GenericRecordList {
static getItemType() {
return tradershubModel.ST_a53d413aeb6e91d25715586cf90a94dfStructure;
}

}

tradershubModel.RL_b201cade1813c1540d500643cb1092ed = RL_b201cade1813c1540d500643cb1092ed;

});

define("tradershub.model$RC_b27f0b968b0f7cea61506ac9d6ee7c27", ["exports", "@outsystems/runtime-core-js", "System_.model", "tradershub.model", "System_.model$PasswordValidationResultRec", "tradershub.referencesHealth", "tradershub.referencesHealth$System_"], function (exports, OSRuntimeCore, System_Model, tradershubModel) {
var OS = OSRuntimeCore;
{class RC_b27f0b968b0f7cea61506ac9d6ee7c27Inner extends 
OS.DataTypes.GenericRecord {
static attributesToDeclare() {
return [
this.attr("PasswordValidationResult", "passwordValidationResultAttr", "PasswordValidationResult", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new OS.SystemStructures.PasswordValidationResultRec());
}, true, OS.SystemStructures.PasswordValidationResultRec)
].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
}

static fromStructure(str) {
return new RC_b27f0b968b0f7cea61506ac9d6ee7c27(new RC_b27f0b968b0f7cea61506ac9d6ee7c27.RecordClass({
passwordValidationResultAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
}

}

tradershubModel.RC_b27f0b968b0f7cea61506ac9d6ee7c27 = RC_b27f0b968b0f7cea61506ac9d6ee7c27Inner;

RC_b27f0b968b0f7cea61506ac9d6ee7c27Inner._isAnonymousRecord = true;
RC_b27f0b968b0f7cea61506ac9d6ee7c27Inner.UniqueId = "b27f0b96-8b0f-7cea-6150-6ac9d6ee7c27";
var RC_b27f0b968b0f7cea61506ac9d6ee7c27 = RC_b27f0b968b0f7cea61506ac9d6ee7c27Inner;
RC_b27f0b968b0f7cea61506ac9d6ee7c27.init();
}
});

define("tradershub.model$RC_b32e755d03dd085a4b975b8c0c7d4454", ["exports", "@outsystems/runtime-core-js", "OutSystemsMaps.model", "tradershub.model", "OutSystemsMaps.model$EN_da8d5af471adea3d9064074b1a40d8c2EntityRecord", "tradershub.referencesHealth", "tradershub.referencesHealth$OutSystemsMaps"], function (exports, OSRuntimeCore, OutSystemsMapsModel, tradershubModel) {
var OS = OSRuntimeCore;
{class RC_b32e755d03dd085a4b975b8c0c7d4454Inner extends 
OS.DataTypes.GenericRecord {
static attributesToDeclare() {
return [
this.attr("Type", "typeAttr", "Type", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new OutSystemsMapsModel.EN_da8d5af471adea3d9064074b1a40d8c2EntityRecord());
}, true, OutSystemsMapsModel.EN_da8d5af471adea3d9064074b1a40d8c2EntityRecord)
].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
}

static fromStructure(str) {
return new RC_b32e755d03dd085a4b975b8c0c7d4454(new RC_b32e755d03dd085a4b975b8c0c7d4454.RecordClass({
typeAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
}

}

tradershubModel.RC_b32e755d03dd085a4b975b8c0c7d4454 = RC_b32e755d03dd085a4b975b8c0c7d4454Inner;

RC_b32e755d03dd085a4b975b8c0c7d4454Inner._isAnonymousRecord = true;
RC_b32e755d03dd085a4b975b8c0c7d4454Inner.UniqueId = "b32e755d-03dd-085a-4b97-5b8c0c7d4454";
var RC_b32e755d03dd085a4b975b8c0c7d4454 = RC_b32e755d03dd085a4b975b8c0c7d4454Inner;
RC_b32e755d03dd085a4b975b8c0c7d4454.init();
}
});

define("tradershub.model$RL_b399fd74f6375cee8461023a74406333", ["exports", "@outsystems/runtime-core-js", "tradershub.model", "tradershub.model$RC_3bbfc6c91fcd8a2dd97847564be30682"], function (exports, OSRuntimeCore, tradershubModel) {
var OS = OSRuntimeCore;
class RL_b399fd74f6375cee8461023a74406333 extends 
OS.DataTypes.GenericRecordList {
static getItemType() {
return tradershubModel.RC_3bbfc6c91fcd8a2dd97847564be30682;
}

}

tradershubModel.RL_b399fd74f6375cee8461023a74406333 = RL_b399fd74f6375cee8461023a74406333;

});

define("tradershub.model$RL_b3e25f2f8271a63fcdf2ac5b5ce11cdc", ["exports", "@outsystems/runtime-core-js", "OutSystemsUI.model", "tradershub.model", "OutSystemsUI.model$ST_e3f9af4171d5e4a41700770295d05c77Structure", "tradershub.referencesHealth", "tradershub.referencesHealth$OutSystemsUI"], function (exports, OSRuntimeCore, OutSystemsUIModel, tradershubModel) {
var OS = OSRuntimeCore;
class RL_b3e25f2f8271a63fcdf2ac5b5ce11cdc extends 
OS.DataTypes.GenericRecordList {
static getItemType() {
return OutSystemsUIModel.ST_e3f9af4171d5e4a41700770295d05c77Structure;
}

}

tradershubModel.RL_b3e25f2f8271a63fcdf2ac5b5ce11cdc = RL_b3e25f2f8271a63fcdf2ac5b5ce11cdc;

});

define("tradershub.model$RL_b4549892bc3bf08015a7ca4a1045c46e", ["exports", "@outsystems/runtime-core-js", "tradershub.model", "tradershub.model$ST_3d5602677826d8c01775c21c1065c8ceStructure"], function (exports, OSRuntimeCore, tradershubModel) {
var OS = OSRuntimeCore;
class RL_b4549892bc3bf08015a7ca4a1045c46e extends 
OS.DataTypes.GenericRecordList {
static getItemType() {
return tradershubModel.ST_3d5602677826d8c01775c21c1065c8ceStructure;
}

}

tradershubModel.RL_b4549892bc3bf08015a7ca4a1045c46e = RL_b4549892bc3bf08015a7ca4a1045c46e;

});

define("tradershub.model$RC_b52eabac43eed7268a0f740e5048ba41", ["exports", "@outsystems/runtime-core-js", "tradershub.model", "tradershub.model$ST_258259badb7b79699a67a1a8307ba86dStructure"], function (exports, OSRuntimeCore, tradershubModel) {
var OS = OSRuntimeCore;
{class RC_b52eabac43eed7268a0f740e5048ba41Inner extends 
OS.DataTypes.GenericRecord {
static attributesToDeclare() {
return [
this.attr("Dxtrade_status", "dxtrade_statusAttr", "Dxtrade_status", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new tradershubModel.ST_258259badb7b79699a67a1a8307ba86dStructure());
}, true, tradershubModel.ST_258259badb7b79699a67a1a8307ba86dStructure)
].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
}

static fromStructure(str) {
return new RC_b52eabac43eed7268a0f740e5048ba41(new RC_b52eabac43eed7268a0f740e5048ba41.RecordClass({
dxtrade_statusAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
}

}

tradershubModel.RC_b52eabac43eed7268a0f740e5048ba41 = RC_b52eabac43eed7268a0f740e5048ba41Inner;

RC_b52eabac43eed7268a0f740e5048ba41Inner._isAnonymousRecord = true;
RC_b52eabac43eed7268a0f740e5048ba41Inner.UniqueId = "b52eabac-43ee-d726-8a0f-740e5048ba41";
var RC_b52eabac43eed7268a0f740e5048ba41 = RC_b52eabac43eed7268a0f740e5048ba41Inner;
RC_b52eabac43eed7268a0f740e5048ba41.init();
}
});

define("tradershub.model$RL_b60c30f70d5c7d39a851eeb74ad499d4", ["exports", "@outsystems/runtime-core-js", "RESTAPIWebsocket.model", "tradershub.model", "RESTAPIWebsocket.model$ST_d12f6a9e29cbb97250918a3fc7bc632aStructure", "tradershub.referencesHealth", "tradershub.referencesHealth$RESTAPIWebsocket"], function (exports, OSRuntimeCore, RESTAPIWebsocketModel, tradershubModel) {
var OS = OSRuntimeCore;
class RL_b60c30f70d5c7d39a851eeb74ad499d4 extends 
OS.DataTypes.GenericRecordList {
static getItemType() {
return RESTAPIWebsocketModel.ST_d12f6a9e29cbb97250918a3fc7bc632aStructure;
}

}

tradershubModel.RL_b60c30f70d5c7d39a851eeb74ad499d4 = RL_b60c30f70d5c7d39a851eeb74ad499d4;

});

define("tradershub.model$RC_ee57eb516b3ecc9719b2d9b5c1a4d762", ["exports", "@outsystems/runtime-core-js", "tradershub.model", "tradershub.model$ST_8929e3c9fca60443ab65fcc0c5318922Structure"], function (exports, OSRuntimeCore, tradershubModel) {
var OS = OSRuntimeCore;
{class RC_ee57eb516b3ecc9719b2d9b5c1a4d762Inner extends 
OS.DataTypes.GenericRecord {
static attributesToDeclare() {
return [
this.attr("LandingCompanyResponse", "landingCompanyResponseAttr", "LandingCompanyResponse", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new tradershubModel.ST_8929e3c9fca60443ab65fcc0c5318922Structure());
}, true, tradershubModel.ST_8929e3c9fca60443ab65fcc0c5318922Structure)
].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
}

static fromStructure(str) {
return new RC_ee57eb516b3ecc9719b2d9b5c1a4d762(new RC_ee57eb516b3ecc9719b2d9b5c1a4d762.RecordClass({
landingCompanyResponseAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
}

}

tradershubModel.RC_ee57eb516b3ecc9719b2d9b5c1a4d762 = RC_ee57eb516b3ecc9719b2d9b5c1a4d762Inner;

RC_ee57eb516b3ecc9719b2d9b5c1a4d762Inner._isAnonymousRecord = true;
RC_ee57eb516b3ecc9719b2d9b5c1a4d762Inner.UniqueId = "ee57eb51-6b3e-cc97-19b2-d9b5c1a4d762";
var RC_ee57eb516b3ecc9719b2d9b5c1a4d762 = RC_ee57eb516b3ecc9719b2d9b5c1a4d762Inner;
RC_ee57eb516b3ecc9719b2d9b5c1a4d762.init();
}
});

define("tradershub.model$RL_b6498e49fbb2e1630ceacc662eaf9045", ["exports", "@outsystems/runtime-core-js", "tradershub.model", "tradershub.model$RC_ee57eb516b3ecc9719b2d9b5c1a4d762"], function (exports, OSRuntimeCore, tradershubModel) {
var OS = OSRuntimeCore;
class RL_b6498e49fbb2e1630ceacc662eaf9045 extends 
OS.DataTypes.GenericRecordList {
static getItemType() {
return tradershubModel.RC_ee57eb516b3ecc9719b2d9b5c1a4d762;
}

}

tradershubModel.RL_b6498e49fbb2e1630ceacc662eaf9045 = RL_b6498e49fbb2e1630ceacc662eaf9045;

});

define("tradershub.model$RL_b693780c9c2e91ec100b6cde72ab3ad5", ["exports", "@outsystems/runtime-core-js", "OutSystemsUI.model", "tradershub.model", "OutSystemsUI.model$EN_f9178b4aae1879ea388b92402c64db4cEntityRecord", "tradershub.referencesHealth", "tradershub.referencesHealth$OutSystemsUI"], function (exports, OSRuntimeCore, OutSystemsUIModel, tradershubModel) {
var OS = OSRuntimeCore;
class RL_b693780c9c2e91ec100b6cde72ab3ad5 extends 
OS.DataTypes.GenericRecordList {
static getItemType() {
return OutSystemsUIModel.EN_f9178b4aae1879ea388b92402c64db4cEntityRecord;
}

}

tradershubModel.RL_b693780c9c2e91ec100b6cde72ab3ad5 = RL_b693780c9c2e91ec100b6cde72ab3ad5;

});

define("tradershub.model$RC_e5c662d406f83f7f791bd7e5c8b0c543", ["exports", "@outsystems/runtime-core-js", "System_.model", "tradershub.model", "System_.model$ChangePasswordFailureReasonRec", "tradershub.referencesHealth", "tradershub.referencesHealth$System_"], function (exports, OSRuntimeCore, System_Model, tradershubModel) {
var OS = OSRuntimeCore;
{class RC_e5c662d406f83f7f791bd7e5c8b0c543Inner extends 
OS.DataTypes.GenericRecord {
static attributesToDeclare() {
return [
this.attr("ChangePasswordFailureReason", "changePasswordFailureReasonAttr", "ChangePasswordFailureReason", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new OS.SystemStructures.ChangePasswordFailureReasonRec());
}, true, OS.SystemStructures.ChangePasswordFailureReasonRec)
].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
}

static fromStructure(str) {
return new RC_e5c662d406f83f7f791bd7e5c8b0c543(new RC_e5c662d406f83f7f791bd7e5c8b0c543.RecordClass({
changePasswordFailureReasonAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
}

}

tradershubModel.RC_e5c662d406f83f7f791bd7e5c8b0c543 = RC_e5c662d406f83f7f791bd7e5c8b0c543Inner;

RC_e5c662d406f83f7f791bd7e5c8b0c543Inner._isAnonymousRecord = true;
RC_e5c662d406f83f7f791bd7e5c8b0c543Inner.UniqueId = "e5c662d4-06f8-3f7f-791b-d7e5c8b0c543";
var RC_e5c662d406f83f7f791bd7e5c8b0c543 = RC_e5c662d406f83f7f791bd7e5c8b0c543Inner;
RC_e5c662d406f83f7f791bd7e5c8b0c543.init();
}
});

define("tradershub.model$RL_b6f4bbf36a4770c53788c60d2b555d3c", ["exports", "@outsystems/runtime-core-js", "tradershub.model", "tradershub.model$RC_e5c662d406f83f7f791bd7e5c8b0c543"], function (exports, OSRuntimeCore, tradershubModel) {
var OS = OSRuntimeCore;
class RL_b6f4bbf36a4770c53788c60d2b555d3c extends 
OS.DataTypes.GenericRecordList {
static getItemType() {
return tradershubModel.RC_e5c662d406f83f7f791bd7e5c8b0c543;
}

}

tradershubModel.RL_b6f4bbf36a4770c53788c60d2b555d3c = RL_b6f4bbf36a4770c53788c60d2b555d3c;

});

define("tradershub.model$ST_f2bc7d80e7fc531e5f0290d2ad6151faStructure", ["exports", "@outsystems/runtime-core-js", "tradershub.model", "tradershub.model$ST_60e7d21e67b5c6547131a4ff8ca45d7cStructure", "tradershub.model$ST_d81e896c7e8b0bc18c896edcf1c606c7Structure"], function (exports, OSRuntimeCore, tradershubModel) {
var OS = OSRuntimeCore;
{class ST_f2bc7d80e7fc531e5f0290d2ad6151faStructureInner extends 
OS.DataTypes.GenericRecord {
static attributesToDeclare() {
return [
this.attr("Error", "errorAttr", "error", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new tradershubModel.ST_60e7d21e67b5c6547131a4ff8ca45d7cStructure());
}, true, tradershubModel.ST_60e7d21e67b5c6547131a4ff8ca45d7cStructure), 
this.attr("Msg_type", "msg_typeAttr", "msg_type", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Echo_req", "echo_reqAttr", "echo_req", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new tradershubModel.ST_d81e896c7e8b0bc18c896edcf1c606c7Structure());
}, true, tradershubModel.ST_d81e896c7e8b0bc18c896edcf1c606c7Structure), 
this.attr("Verify_email", "verify_emailAttr", "verify_email", false, false, OS.DataTypes.DataTypes.LongInteger, function () {
return OS.DataTypes.LongInteger.defaultValue;
}, true)
].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
}

}

tradershubModel.ST_f2bc7d80e7fc531e5f0290d2ad6151faStructure = ST_f2bc7d80e7fc531e5f0290d2ad6151faStructureInner;

var ST_f2bc7d80e7fc531e5f0290d2ad6151faStructure = ST_f2bc7d80e7fc531e5f0290d2ad6151faStructureInner;
ST_f2bc7d80e7fc531e5f0290d2ad6151faStructure.init();
}
});

define("tradershub.model$RC_d31912d3cb3caf87c9ecd954c740d856", ["exports", "@outsystems/runtime-core-js", "tradershub.model", "tradershub.model$ST_f2bc7d80e7fc531e5f0290d2ad6151faStructure"], function (exports, OSRuntimeCore, tradershubModel) {
var OS = OSRuntimeCore;
{class RC_d31912d3cb3caf87c9ecd954c740d856Inner extends 
OS.DataTypes.GenericRecord {
static attributesToDeclare() {
return [
this.attr("PostVerifyEmailResponse", "postVerifyEmailResponseAttr", "PostVerifyEmailResponse", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new tradershubModel.ST_f2bc7d80e7fc531e5f0290d2ad6151faStructure());
}, true, tradershubModel.ST_f2bc7d80e7fc531e5f0290d2ad6151faStructure)
].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
}

static fromStructure(str) {
return new RC_d31912d3cb3caf87c9ecd954c740d856(new RC_d31912d3cb3caf87c9ecd954c740d856.RecordClass({
postVerifyEmailResponseAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
}

}

tradershubModel.RC_d31912d3cb3caf87c9ecd954c740d856 = RC_d31912d3cb3caf87c9ecd954c740d856Inner;

RC_d31912d3cb3caf87c9ecd954c740d856Inner._isAnonymousRecord = true;
RC_d31912d3cb3caf87c9ecd954c740d856Inner.UniqueId = "d31912d3-cb3c-af87-c9ec-d954c740d856";
var RC_d31912d3cb3caf87c9ecd954c740d856 = RC_d31912d3cb3caf87c9ecd954c740d856Inner;
RC_d31912d3cb3caf87c9ecd954c740d856.init();
}
});

define("tradershub.model$RL_b7914779eb60717f61f37f50609ed62c", ["exports", "@outsystems/runtime-core-js", "tradershub.model", "tradershub.model$RC_d31912d3cb3caf87c9ecd954c740d856"], function (exports, OSRuntimeCore, tradershubModel) {
var OS = OSRuntimeCore;
class RL_b7914779eb60717f61f37f50609ed62c extends 
OS.DataTypes.GenericRecordList {
static getItemType() {
return tradershubModel.RC_d31912d3cb3caf87c9ecd954c740d856;
}

}

tradershubModel.RL_b7914779eb60717f61f37f50609ed62c = RL_b7914779eb60717f61f37f50609ed62c;

});

define("tradershub.model$RL_b7a05579761da982186db0cb56ca5900", ["exports", "@outsystems/runtime-core-js", "RESTAPIWebsocket.model", "tradershub.model", "RESTAPIWebsocket.model$ST_9eb2d1268b055c9ba20852d2758a5050Structure", "tradershub.referencesHealth", "tradershub.referencesHealth$RESTAPIWebsocket"], function (exports, OSRuntimeCore, RESTAPIWebsocketModel, tradershubModel) {
var OS = OSRuntimeCore;
class RL_b7a05579761da982186db0cb56ca5900 extends 
OS.DataTypes.GenericRecordList {
static getItemType() {
return RESTAPIWebsocketModel.ST_9eb2d1268b055c9ba20852d2758a5050Structure;
}

}

tradershubModel.RL_b7a05579761da982186db0cb56ca5900 = RL_b7a05579761da982186db0cb56ca5900;

});

define("tradershub.model$RL_b88c0ed17712805463deb6be1a1ca760", ["exports", "@outsystems/runtime-core-js", "RESTAPIWebsocket.model", "tradershub.model", "RESTAPIWebsocket.model$ST_5b838c70a2bbb273d7a479efa1e8ea87Structure", "tradershub.referencesHealth", "tradershub.referencesHealth$RESTAPIWebsocket"], function (exports, OSRuntimeCore, RESTAPIWebsocketModel, tradershubModel) {
var OS = OSRuntimeCore;
class RL_b88c0ed17712805463deb6be1a1ca760 extends 
OS.DataTypes.GenericRecordList {
static getItemType() {
return RESTAPIWebsocketModel.ST_5b838c70a2bbb273d7a479efa1e8ea87Structure;
}

}

tradershubModel.RL_b88c0ed17712805463deb6be1a1ca760 = RL_b88c0ed17712805463deb6be1a1ca760;

});

define("tradershub.model$RL_b9161be31d51001c82c43c485f6dff61", ["exports", "@outsystems/runtime-core-js", "tradershub.model", "tradershub.model$RC_41d582632e7a7d4ce3695fe5e8da1ad0"], function (exports, OSRuntimeCore, tradershubModel) {
var OS = OSRuntimeCore;
class RL_b9161be31d51001c82c43c485f6dff61 extends 
OS.DataTypes.GenericRecordList {
static getItemType() {
return tradershubModel.RC_41d582632e7a7d4ce3695fe5e8da1ad0;
}

}

tradershubModel.RL_b9161be31d51001c82c43c485f6dff61 = RL_b9161be31d51001c82c43c485f6dff61;

});

define("tradershub.model$RL_b924bd959f8738ed1d1deb7e448774f4", ["exports", "@outsystems/runtime-core-js", "tradershub.model", "tradershub.model$RC_27f174768a883bc2fd02083ad34399ea"], function (exports, OSRuntimeCore, tradershubModel) {
var OS = OSRuntimeCore;
class RL_b924bd959f8738ed1d1deb7e448774f4 extends 
OS.DataTypes.GenericRecordList {
static getItemType() {
return tradershubModel.RC_27f174768a883bc2fd02083ad34399ea;
}

}

tradershubModel.RL_b924bd959f8738ed1d1deb7e448774f4 = RL_b924bd959f8738ed1d1deb7e448774f4;

});

define("tradershub.model$RL_b9c582212d5e633de9fc8c90d9b8d7bc", ["exports", "@outsystems/runtime-core-js", "tradershub.model", "tradershub.model$EN_5167e61acdec814a6025c00005dbc3d8EntityRecord"], function (exports, OSRuntimeCore, tradershubModel) {
var OS = OSRuntimeCore;
class RL_b9c582212d5e633de9fc8c90d9b8d7bc extends 
OS.DataTypes.GenericRecordList {
static getItemType() {
return tradershubModel.EN_5167e61acdec814a6025c00005dbc3d8EntityRecord;
}

}

tradershubModel.RL_b9c582212d5e633de9fc8c90d9b8d7bc = RL_b9c582212d5e633de9fc8c90d9b8d7bc;

});

define("tradershub.model$RC_d58281e286de912aead4d239ae110c11", ["exports", "@outsystems/runtime-core-js", "tradershub.model", "tradershub.model$ST_a53d413aeb6e91d25715586cf90a94dfStructure"], function (exports, OSRuntimeCore, tradershubModel) {
var OS = OSRuntimeCore;
{class RC_d58281e286de912aead4d239ae110c11Inner extends 
OS.DataTypes.GenericRecord {
static attributesToDeclare() {
return [
this.attr("AFN", "aFNAttr", "AFN", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new tradershubModel.ST_a53d413aeb6e91d25715586cf90a94dfStructure());
}, true, tradershubModel.ST_a53d413aeb6e91d25715586cf90a94dfStructure)
].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
}

static fromStructure(str) {
return new RC_d58281e286de912aead4d239ae110c11(new RC_d58281e286de912aead4d239ae110c11.RecordClass({
aFNAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
}

}

tradershubModel.RC_d58281e286de912aead4d239ae110c11 = RC_d58281e286de912aead4d239ae110c11Inner;

RC_d58281e286de912aead4d239ae110c11Inner._isAnonymousRecord = true;
RC_d58281e286de912aead4d239ae110c11Inner.UniqueId = "d58281e2-86de-912a-ead4-d239ae110c11";
var RC_d58281e286de912aead4d239ae110c11 = RC_d58281e286de912aead4d239ae110c11Inner;
RC_d58281e286de912aead4d239ae110c11.init();
}
});

define("tradershub.model$RL_ba57579cc489d9873165bbae2af0760a", ["exports", "@outsystems/runtime-core-js", "tradershub.model", "tradershub.model$RC_d58281e286de912aead4d239ae110c11"], function (exports, OSRuntimeCore, tradershubModel) {
var OS = OSRuntimeCore;
class RL_ba57579cc489d9873165bbae2af0760a extends 
OS.DataTypes.GenericRecordList {
static getItemType() {
return tradershubModel.RC_d58281e286de912aead4d239ae110c11;
}

}

tradershubModel.RL_ba57579cc489d9873165bbae2af0760a = RL_ba57579cc489d9873165bbae2af0760a;

});

define("tradershub.model$RL_bb23cfabef259372d4ccc6deba43b63b", ["exports", "@outsystems/runtime-core-js", "OutSystemsUI.model", "tradershub.model", "OutSystemsUI.model$ST_3cb059eb7f6ed8c9a730f87011d5c0e0Structure", "tradershub.referencesHealth", "tradershub.referencesHealth$OutSystemsUI"], function (exports, OSRuntimeCore, OutSystemsUIModel, tradershubModel) {
var OS = OSRuntimeCore;
class RL_bb23cfabef259372d4ccc6deba43b63b extends 
OS.DataTypes.GenericRecordList {
static getItemType() {
return OutSystemsUIModel.ST_3cb059eb7f6ed8c9a730f87011d5c0e0Structure;
}

}

tradershubModel.RL_bb23cfabef259372d4ccc6deba43b63b = RL_bb23cfabef259372d4ccc6deba43b63b;

});

define("tradershub.model$RC_bb80a04f7ea6a5bb3d33db9b2bca4c88", ["exports", "@outsystems/runtime-core-js", "OutSystemsUI.model", "tradershub.model", "OutSystemsUI.model$ST_b96c67f06fdfae580256b7081d85460dStructure", "tradershub.referencesHealth", "tradershub.referencesHealth$OutSystemsUI"], function (exports, OSRuntimeCore, OutSystemsUIModel, tradershubModel) {
var OS = OSRuntimeCore;
{class RC_bb80a04f7ea6a5bb3d33db9b2bca4c88Inner extends 
OS.DataTypes.GenericRecord {
static attributesToDeclare() {
return [
this.attr("TimePickerOptionalConfigs", "timePickerOptionalConfigsAttr", "TimePickerOptionalConfigs", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new OutSystemsUIModel.ST_b96c67f06fdfae580256b7081d85460dStructure());
}, true, OutSystemsUIModel.ST_b96c67f06fdfae580256b7081d85460dStructure)
].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
}

static fromStructure(str) {
return new RC_bb80a04f7ea6a5bb3d33db9b2bca4c88(new RC_bb80a04f7ea6a5bb3d33db9b2bca4c88.RecordClass({
timePickerOptionalConfigsAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
}

}

tradershubModel.RC_bb80a04f7ea6a5bb3d33db9b2bca4c88 = RC_bb80a04f7ea6a5bb3d33db9b2bca4c88Inner;

RC_bb80a04f7ea6a5bb3d33db9b2bca4c88Inner._isAnonymousRecord = true;
RC_bb80a04f7ea6a5bb3d33db9b2bca4c88Inner.UniqueId = "bb80a04f-7ea6-a5bb-3d33-db9b2bca4c88";
var RC_bb80a04f7ea6a5bb3d33db9b2bca4c88 = RC_bb80a04f7ea6a5bb3d33db9b2bca4c88Inner;
RC_bb80a04f7ea6a5bb3d33db9b2bca4c88.init();
}
});

define("tradershub.model$RL_bbeebcaa7514f10220c4e4bc48aee508", ["exports", "@outsystems/runtime-core-js", "tradershub.model", "tradershub.model$ST_a99e5b4d6b08ee1b808de2fbce23bf4fStructure"], function (exports, OSRuntimeCore, tradershubModel) {
var OS = OSRuntimeCore;
class RL_bbeebcaa7514f10220c4e4bc48aee508 extends 
OS.DataTypes.GenericRecordList {
static getItemType() {
return tradershubModel.ST_a99e5b4d6b08ee1b808de2fbce23bf4fStructure;
}

}

tradershubModel.RL_bbeebcaa7514f10220c4e4bc48aee508 = RL_bbeebcaa7514f10220c4e4bc48aee508;

});

define("tradershub.model$RL_bc2dda2039d1adf3e3d1dd13979b4dc2", ["exports", "@outsystems/runtime-core-js", "tradershub.model", "tradershub.model$RC_27d8031b19e05deba9a159874d88bc75"], function (exports, OSRuntimeCore, tradershubModel) {
var OS = OSRuntimeCore;
class RL_bc2dda2039d1adf3e3d1dd13979b4dc2 extends 
OS.DataTypes.GenericRecordList {
static getItemType() {
return tradershubModel.RC_27d8031b19e05deba9a159874d88bc75;
}

}

tradershubModel.RL_bc2dda2039d1adf3e3d1dd13979b4dc2 = RL_bc2dda2039d1adf3e3d1dd13979b4dc2;

});

define("tradershub.model$RL_bd4587648373bf4d3e2c5fb636046bee", ["exports", "@outsystems/runtime-core-js", "tradershub.model", "tradershub.model$RC_327e36bc408edd046ca40df8a4e734bb"], function (exports, OSRuntimeCore, tradershubModel) {
var OS = OSRuntimeCore;
class RL_bd4587648373bf4d3e2c5fb636046bee extends 
OS.DataTypes.GenericRecordList {
static getItemType() {
return tradershubModel.RC_327e36bc408edd046ca40df8a4e734bb;
}

}

tradershubModel.RL_bd4587648373bf4d3e2c5fb636046bee = RL_bd4587648373bf4d3e2c5fb636046bee;

});

define("tradershub.model$RC_bd75f0fecd536060b13775f0ea83daca", ["exports", "@outsystems/runtime-core-js", "tradershub.model", "tradershub.model$ST_aed452511cf537505102a57a65fea54cStructure"], function (exports, OSRuntimeCore, tradershubModel) {
var OS = OSRuntimeCore;
{class RC_bd75f0fecd536060b13775f0ea83dacaInner extends 
OS.DataTypes.GenericRecord {
static attributesToDeclare() {
return [
this.attr("Initial_deposit_per_country", "initial_deposit_per_countryAttr", "Initial_deposit_per_country", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new tradershubModel.ST_aed452511cf537505102a57a65fea54cStructure());
}, true, tradershubModel.ST_aed452511cf537505102a57a65fea54cStructure)
].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
}

static fromStructure(str) {
return new RC_bd75f0fecd536060b13775f0ea83daca(new RC_bd75f0fecd536060b13775f0ea83daca.RecordClass({
initial_deposit_per_countryAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
}

}

tradershubModel.RC_bd75f0fecd536060b13775f0ea83daca = RC_bd75f0fecd536060b13775f0ea83dacaInner;

RC_bd75f0fecd536060b13775f0ea83dacaInner._isAnonymousRecord = true;
RC_bd75f0fecd536060b13775f0ea83dacaInner.UniqueId = "bd75f0fe-cd53-6060-b137-75f0ea83daca";
var RC_bd75f0fecd536060b13775f0ea83daca = RC_bd75f0fecd536060b13775f0ea83dacaInner;
RC_bd75f0fecd536060b13775f0ea83daca.init();
}
});

define("tradershub.model$RL_bec1187339db3cd76622e1f749eb053d", ["exports", "@outsystems/runtime-core-js", "tradershub.model", "tradershub.model$ST_10c9c671ed7b6c5f671603b2ebe64123Structure"], function (exports, OSRuntimeCore, tradershubModel) {
var OS = OSRuntimeCore;
class RL_bec1187339db3cd76622e1f749eb053d extends 
OS.DataTypes.GenericRecordList {
static getItemType() {
return tradershubModel.ST_10c9c671ed7b6c5f671603b2ebe64123Structure;
}

}

tradershubModel.RL_bec1187339db3cd76622e1f749eb053d = RL_bec1187339db3cd76622e1f749eb053d;

});

define("tradershub.model$RL_bf3bc554c395cc3dd0ab1a5b6ac5d91f", ["exports", "@outsystems/runtime-core-js", "tradershub.model", "tradershub.model$RC_27b5a164e828de9b90686831c7908b4a"], function (exports, OSRuntimeCore, tradershubModel) {
var OS = OSRuntimeCore;
class RL_bf3bc554c395cc3dd0ab1a5b6ac5d91f extends 
OS.DataTypes.GenericRecordList {
static getItemType() {
return tradershubModel.RC_27b5a164e828de9b90686831c7908b4a;
}

}

tradershubModel.RL_bf3bc554c395cc3dd0ab1a5b6ac5d91f = RL_bf3bc554c395cc3dd0ab1a5b6ac5d91f;

});

define("tradershub.model$RL_bfdb0a00a150c65e1e25049482edba6b", ["exports", "@outsystems/runtime-core-js", "tradershub.model", "tradershub.model$RC_61df84f9969928991e575f5d3cdeb6cf"], function (exports, OSRuntimeCore, tradershubModel) {
var OS = OSRuntimeCore;
class RL_bfdb0a00a150c65e1e25049482edba6b extends 
OS.DataTypes.GenericRecordList {
static getItemType() {
return tradershubModel.RC_61df84f9969928991e575f5d3cdeb6cf;
}

}

tradershubModel.RL_bfdb0a00a150c65e1e25049482edba6b = RL_bfdb0a00a150c65e1e25049482edba6b;

});

define("tradershub.model$RL_bfe5e088b2f6df6ae697d4a263069bca", ["exports", "@outsystems/runtime-core-js", "System_.model", "tradershub.model", "System_.model$UserLoginResultRec", "tradershub.referencesHealth", "tradershub.referencesHealth$System_"], function (exports, OSRuntimeCore, System_Model, tradershubModel) {
var OS = OSRuntimeCore;
class RL_bfe5e088b2f6df6ae697d4a263069bca extends 
OS.DataTypes.GenericRecordList {
static getItemType() {
return OS.SystemStructures.UserLoginResultRec;
}

}

tradershubModel.RL_bfe5e088b2f6df6ae697d4a263069bca = RL_bfe5e088b2f6df6ae697d4a263069bca;

});

define("tradershub.model$RL_c0f17d75c546075264f5d075e00ba65b", ["exports", "@outsystems/runtime-core-js", "OutSystemsUI.model", "tradershub.model", "OutSystemsUI.model$ST_60f22bd2e9b10a22278b8afe6d7f601aStructure", "tradershub.referencesHealth", "tradershub.referencesHealth$OutSystemsUI"], function (exports, OSRuntimeCore, OutSystemsUIModel, tradershubModel) {
var OS = OSRuntimeCore;
class RL_c0f17d75c546075264f5d075e00ba65b extends 
OS.DataTypes.GenericRecordList {
static getItemType() {
return OutSystemsUIModel.ST_60f22bd2e9b10a22278b8afe6d7f601aStructure;
}

}

tradershubModel.RL_c0f17d75c546075264f5d075e00ba65b = RL_c0f17d75c546075264f5d075e00ba65b;

});

define("tradershub.model$RL_c1b551b639cf44782c03b977f31ed021", ["exports", "@outsystems/runtime-core-js", "tradershub.model", "tradershub.model$RC_a5fc3d62312a89b32ae393e0571bcad7"], function (exports, OSRuntimeCore, tradershubModel) {
var OS = OSRuntimeCore;
class RL_c1b551b639cf44782c03b977f31ed021 extends 
OS.DataTypes.GenericRecordList {
static getItemType() {
return tradershubModel.RC_a5fc3d62312a89b32ae393e0571bcad7;
}

}

tradershubModel.RL_c1b551b639cf44782c03b977f31ed021 = RL_c1b551b639cf44782c03b977f31ed021;

});

define("tradershub.model$RC_c2cb4dd7ff3a47ae1bb181caacd2a267", ["exports", "@outsystems/runtime-core-js", "tradershub.model", "tradershub.model$ST_2dae613205bb81a0382059f7840afedcStructure"], function (exports, OSRuntimeCore, tradershubModel) {
var OS = OSRuntimeCore;
{class RC_c2cb4dd7ff3a47ae1bb181caacd2a267Inner extends 
OS.DataTypes.GenericRecord {
static attributesToDeclare() {
return [
this.attr("Max_requestes_general", "max_requestes_generalAttr", "Max_requestes_general", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new tradershubModel.ST_2dae613205bb81a0382059f7840afedcStructure());
}, true, tradershubModel.ST_2dae613205bb81a0382059f7840afedcStructure)
].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
}

static fromStructure(str) {
return new RC_c2cb4dd7ff3a47ae1bb181caacd2a267(new RC_c2cb4dd7ff3a47ae1bb181caacd2a267.RecordClass({
max_requestes_generalAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
}

}

tradershubModel.RC_c2cb4dd7ff3a47ae1bb181caacd2a267 = RC_c2cb4dd7ff3a47ae1bb181caacd2a267Inner;

RC_c2cb4dd7ff3a47ae1bb181caacd2a267Inner._isAnonymousRecord = true;
RC_c2cb4dd7ff3a47ae1bb181caacd2a267Inner.UniqueId = "c2cb4dd7-ff3a-47ae-1bb1-81caacd2a267";
var RC_c2cb4dd7ff3a47ae1bb181caacd2a267 = RC_c2cb4dd7ff3a47ae1bb181caacd2a267Inner;
RC_c2cb4dd7ff3a47ae1bb181caacd2a267.init();
}
});

define("tradershub.model$RL_c336d58dd96d2c1d5470075e96b2dfe2", ["exports", "@outsystems/runtime-core-js", "tradershub.model", "tradershub.model$RC_a8681099a96d9738667779eaaccedc4a"], function (exports, OSRuntimeCore, tradershubModel) {
var OS = OSRuntimeCore;
class RL_c336d58dd96d2c1d5470075e96b2dfe2 extends 
OS.DataTypes.GenericRecordList {
static getItemType() {
return tradershubModel.RC_a8681099a96d9738667779eaaccedc4a;
}

}

tradershubModel.RL_c336d58dd96d2c1d5470075e96b2dfe2 = RL_c336d58dd96d2c1d5470075e96b2dfe2;

});

define("tradershub.model$RL_c3d285bfdaddf6396666f22f1e4bf6e7", ["exports", "@outsystems/runtime-core-js", "tradershub.model", "tradershub.model$RC_1f9f061182f29d845954b4ea0238f34d"], function (exports, OSRuntimeCore, tradershubModel) {
var OS = OSRuntimeCore;
class RL_c3d285bfdaddf6396666f22f1e4bf6e7 extends 
OS.DataTypes.GenericRecordList {
static getItemType() {
return tradershubModel.RC_1f9f061182f29d845954b4ea0238f34d;
}

}

tradershubModel.RL_c3d285bfdaddf6396666f22f1e4bf6e7 = RL_c3d285bfdaddf6396666f22f1e4bf6e7;

});

define("tradershub.model$RL_c407efb11f7e32192879cc1157de29e9", ["exports", "@outsystems/runtime-core-js", "tradershub.model", "tradershub.model$EN_31409570bcad1406da75c1da22746c40EntityRecord"], function (exports, OSRuntimeCore, tradershubModel) {
var OS = OSRuntimeCore;
class RL_c407efb11f7e32192879cc1157de29e9 extends 
OS.DataTypes.GenericRecordList {
static getItemType() {
return tradershubModel.EN_31409570bcad1406da75c1da22746c40EntityRecord;
}

}

tradershubModel.RL_c407efb11f7e32192879cc1157de29e9 = RL_c407efb11f7e32192879cc1157de29e9;

});

define("tradershub.model$RL_c514a95c701ac6c50fa38db08da5f308", ["exports", "@outsystems/runtime-core-js", "tradershub.model", "tradershub.model$RC_5513b0f49b52fa312c8002f470076fc0"], function (exports, OSRuntimeCore, tradershubModel) {
var OS = OSRuntimeCore;
class RL_c514a95c701ac6c50fa38db08da5f308 extends 
OS.DataTypes.GenericRecordList {
static getItemType() {
return tradershubModel.RC_5513b0f49b52fa312c8002f470076fc0;
}

}

tradershubModel.RL_c514a95c701ac6c50fa38db08da5f308 = RL_c514a95c701ac6c50fa38db08da5f308;

});

define("tradershub.model$RL_c542301ba033767f97d37c7ac8f0f71c", ["exports", "@outsystems/runtime-core-js", "OutSystemsUI.model", "tradershub.model", "OutSystemsUI.model$ST_71bc196daedd9ac0648bfd56a713859dStructure", "tradershub.referencesHealth", "tradershub.referencesHealth$OutSystemsUI"], function (exports, OSRuntimeCore, OutSystemsUIModel, tradershubModel) {
var OS = OSRuntimeCore;
class RL_c542301ba033767f97d37c7ac8f0f71c extends 
OS.DataTypes.GenericRecordList {
static getItemType() {
return OutSystemsUIModel.ST_71bc196daedd9ac0648bfd56a713859dStructure;
}

}

tradershubModel.RL_c542301ba033767f97d37c7ac8f0f71c = RL_c542301ba033767f97d37c7ac8f0f71c;

});

define("tradershub.model$RL_c564b1e63d41953ea9734fb248f40109", ["exports", "@outsystems/runtime-core-js", "tradershub.model", "tradershub.model$RC_51b1c15949308af5f9b2dba7043d5ae6"], function (exports, OSRuntimeCore, tradershubModel) {
var OS = OSRuntimeCore;
class RL_c564b1e63d41953ea9734fb248f40109 extends 
OS.DataTypes.GenericRecordList {
static getItemType() {
return tradershubModel.RC_51b1c15949308af5f9b2dba7043d5ae6;
}

}

tradershubModel.RL_c564b1e63d41953ea9734fb248f40109 = RL_c564b1e63d41953ea9734fb248f40109;

});

define("tradershub.model$RL_c58ca0a921eee43537149b3c5b7a13e2", ["exports", "@outsystems/runtime-core-js", "OutSystemsUI.model", "tradershub.model", "OutSystemsUI.model$ST_eb161a8909408fbd30eac1833398f018Structure", "tradershub.referencesHealth", "tradershub.referencesHealth$OutSystemsUI"], function (exports, OSRuntimeCore, OutSystemsUIModel, tradershubModel) {
var OS = OSRuntimeCore;
class RL_c58ca0a921eee43537149b3c5b7a13e2 extends 
OS.DataTypes.GenericRecordList {
static getItemType() {
return OutSystemsUIModel.ST_eb161a8909408fbd30eac1833398f018Structure;
}

}

tradershubModel.RL_c58ca0a921eee43537149b3c5b7a13e2 = RL_c58ca0a921eee43537149b3c5b7a13e2;

});

define("tradershub.model$RL_c5909a8b1377430a2e36d2ce210bb739", ["exports", "@outsystems/runtime-core-js", "tradershub.model", "tradershub.model$RC_b1f9a62aa1eb0e7979aaceb89243cea9"], function (exports, OSRuntimeCore, tradershubModel) {
var OS = OSRuntimeCore;
class RL_c5909a8b1377430a2e36d2ce210bb739 extends 
OS.DataTypes.GenericRecordList {
static getItemType() {
return tradershubModel.RC_b1f9a62aa1eb0e7979aaceb89243cea9;
}

}

tradershubModel.RL_c5909a8b1377430a2e36d2ce210bb739 = RL_c5909a8b1377430a2e36d2ce210bb739;

});

define("tradershub.model$RL_c67f4a35eb940adfbeacfba8934313cd", ["exports", "@outsystems/runtime-core-js", "tradershub.model", "tradershub.model$ST_cd49224be610b7804a874a30604a9ae2Structure"], function (exports, OSRuntimeCore, tradershubModel) {
var OS = OSRuntimeCore;
class RL_c67f4a35eb940adfbeacfba8934313cd extends 
OS.DataTypes.GenericRecordList {
static getItemType() {
return tradershubModel.ST_cd49224be610b7804a874a30604a9ae2Structure;
}

}

tradershubModel.RL_c67f4a35eb940adfbeacfba8934313cd = RL_c67f4a35eb940adfbeacfba8934313cd;

});

define("tradershub.model$RL_c70c6fbde641bc249181616cec2cfcdf", ["exports", "@outsystems/runtime-core-js", "OutSystemsUI.model", "tradershub.model", "OutSystemsUI.model$ST_7167810326c75456a7ce120ed2dbd76bStructure", "tradershub.referencesHealth", "tradershub.referencesHealth$OutSystemsUI"], function (exports, OSRuntimeCore, OutSystemsUIModel, tradershubModel) {
var OS = OSRuntimeCore;
class RL_c70c6fbde641bc249181616cec2cfcdf extends 
OS.DataTypes.GenericRecordList {
static getItemType() {
return OutSystemsUIModel.ST_7167810326c75456a7ce120ed2dbd76bStructure;
}

}

tradershubModel.RL_c70c6fbde641bc249181616cec2cfcdf = RL_c70c6fbde641bc249181616cec2cfcdf;

});

define("tradershub.model$RL_c741a57cf499ba291dad3ca452914290", ["exports", "@outsystems/runtime-core-js", "tradershub.model", "tradershub.model$RC_a13c14b9ba27332cf1eb1f7147c42c92"], function (exports, OSRuntimeCore, tradershubModel) {
var OS = OSRuntimeCore;
class RL_c741a57cf499ba291dad3ca452914290 extends 
OS.DataTypes.GenericRecordList {
static getItemType() {
return tradershubModel.RC_a13c14b9ba27332cf1eb1f7147c42c92;
}

}

tradershubModel.RL_c741a57cf499ba291dad3ca452914290 = RL_c741a57cf499ba291dad3ca452914290;

});

define("tradershub.model$RL_c9e8e66f42e9fb7bc5a50275db2495f9", ["exports", "@outsystems/runtime-core-js", "tradershub.model", "tradershub.model$ST_ab9963fdfdd5d4ab71d52ec3f27aa094Structure"], function (exports, OSRuntimeCore, tradershubModel) {
var OS = OSRuntimeCore;
class RL_c9e8e66f42e9fb7bc5a50275db2495f9 extends 
OS.DataTypes.GenericRecordList {
static getItemType() {
return tradershubModel.ST_ab9963fdfdd5d4ab71d52ec3f27aa094Structure;
}

}

tradershubModel.RL_c9e8e66f42e9fb7bc5a50275db2495f9 = RL_c9e8e66f42e9fb7bc5a50275db2495f9;

});

define("tradershub.model$RL_ca4befaa7d5de5d9bbcd4bf59c44b15c", ["exports", "@outsystems/runtime-core-js", "tradershub.model", "tradershub.model$RC_b27f0b968b0f7cea61506ac9d6ee7c27"], function (exports, OSRuntimeCore, tradershubModel) {
var OS = OSRuntimeCore;
class RL_ca4befaa7d5de5d9bbcd4bf59c44b15c extends 
OS.DataTypes.GenericRecordList {
static getItemType() {
return tradershubModel.RC_b27f0b968b0f7cea61506ac9d6ee7c27;
}

}

tradershubModel.RL_ca4befaa7d5de5d9bbcd4bf59c44b15c = RL_ca4befaa7d5de5d9bbcd4bf59c44b15c;

});

define("tradershub.model$RL_cbac71e3b2383e8c0c384139f6b34f78", ["exports", "@outsystems/runtime-core-js", "OutSystemsUI.model", "tradershub.model", "OutSystemsUI.model$EN_7441573ccf264d27ef548a39a846bd68EntityRecord", "tradershub.referencesHealth", "tradershub.referencesHealth$OutSystemsUI"], function (exports, OSRuntimeCore, OutSystemsUIModel, tradershubModel) {
var OS = OSRuntimeCore;
class RL_cbac71e3b2383e8c0c384139f6b34f78 extends 
OS.DataTypes.GenericRecordList {
static getItemType() {
return OutSystemsUIModel.EN_7441573ccf264d27ef548a39a846bd68EntityRecord;
}

}

tradershubModel.RL_cbac71e3b2383e8c0c384139f6b34f78 = RL_cbac71e3b2383e8c0c384139f6b34f78;

});

define("tradershub.model$RL_cbd45ffb64bc9c47450a3b6cf63434c5", ["exports", "@outsystems/runtime-core-js", "RESTAPIWebsocket.model", "tradershub.model", "RESTAPIWebsocket.model$ST_f502318fbe2f943e6cfbba125766780aStructure", "tradershub.referencesHealth", "tradershub.referencesHealth$RESTAPIWebsocket"], function (exports, OSRuntimeCore, RESTAPIWebsocketModel, tradershubModel) {
var OS = OSRuntimeCore;
class RL_cbd45ffb64bc9c47450a3b6cf63434c5 extends 
OS.DataTypes.GenericRecordList {
static getItemType() {
return RESTAPIWebsocketModel.ST_f502318fbe2f943e6cfbba125766780aStructure;
}

}

tradershubModel.RL_cbd45ffb64bc9c47450a3b6cf63434c5 = RL_cbd45ffb64bc9c47450a3b6cf63434c5;

});

define("tradershub.model$RL_cc2748e8dc663faa1bc70171492e8ff9", ["exports", "@outsystems/runtime-core-js", "tradershub.model", "tradershub.model$RC_80e81fddca0089d3f29f81106c0bee34"], function (exports, OSRuntimeCore, tradershubModel) {
var OS = OSRuntimeCore;
class RL_cc2748e8dc663faa1bc70171492e8ff9 extends 
OS.DataTypes.GenericRecordList {
static getItemType() {
return tradershubModel.RC_80e81fddca0089d3f29f81106c0bee34;
}

}

tradershubModel.RL_cc2748e8dc663faa1bc70171492e8ff9 = RL_cc2748e8dc663faa1bc70171492e8ff9;

});

define("tradershub.model$RC_fbea2f3f1b17973c03febd6e14ecf2ac", ["exports", "@outsystems/runtime-core-js", "tradershub.model", "tradershub.model$ST_f41b21ee1ca377ae619742cd5408a376Structure"], function (exports, OSRuntimeCore, tradershubModel) {
var OS = OSRuntimeCore;
{class RC_fbea2f3f1b17973c03febd6e14ecf2acInner extends 
OS.DataTypes.GenericRecord {
static attributesToDeclare() {
return [
this.attr("Identity", "identityAttr", "Identity", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new tradershubModel.ST_f41b21ee1ca377ae619742cd5408a376Structure());
}, true, tradershubModel.ST_f41b21ee1ca377ae619742cd5408a376Structure)
].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
}

static fromStructure(str) {
return new RC_fbea2f3f1b17973c03febd6e14ecf2ac(new RC_fbea2f3f1b17973c03febd6e14ecf2ac.RecordClass({
identityAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
}

}

tradershubModel.RC_fbea2f3f1b17973c03febd6e14ecf2ac = RC_fbea2f3f1b17973c03febd6e14ecf2acInner;

RC_fbea2f3f1b17973c03febd6e14ecf2acInner._isAnonymousRecord = true;
RC_fbea2f3f1b17973c03febd6e14ecf2acInner.UniqueId = "fbea2f3f-1b17-973c-03fe-bd6e14ecf2ac";
var RC_fbea2f3f1b17973c03febd6e14ecf2ac = RC_fbea2f3f1b17973c03febd6e14ecf2acInner;
RC_fbea2f3f1b17973c03febd6e14ecf2ac.init();
}
});

define("tradershub.model$RL_ce208b31a967d977f5ffca07857f3775", ["exports", "@outsystems/runtime-core-js", "tradershub.model", "tradershub.model$RC_fbea2f3f1b17973c03febd6e14ecf2ac"], function (exports, OSRuntimeCore, tradershubModel) {
var OS = OSRuntimeCore;
class RL_ce208b31a967d977f5ffca07857f3775 extends 
OS.DataTypes.GenericRecordList {
static getItemType() {
return tradershubModel.RC_fbea2f3f1b17973c03febd6e14ecf2ac;
}

}

tradershubModel.RL_ce208b31a967d977f5ffca07857f3775 = RL_ce208b31a967d977f5ffca07857f3775;

});

define("tradershub.model$RL_cedacd4f40272195bb61df08532044c2", ["exports", "@outsystems/runtime-core-js", "tradershub.model", "tradershub.model$ST_69d197f741008559fd9136ea6f31ca4cStructure"], function (exports, OSRuntimeCore, tradershubModel) {
var OS = OSRuntimeCore;
class RL_cedacd4f40272195bb61df08532044c2 extends 
OS.DataTypes.GenericRecordList {
static getItemType() {
return tradershubModel.ST_69d197f741008559fd9136ea6f31ca4cStructure;
}

}

tradershubModel.RL_cedacd4f40272195bb61df08532044c2 = RL_cedacd4f40272195bb61df08532044c2;

});

define("tradershub.model$RL_d020274c0ef0b03336f86133d39e8e5d", ["exports", "@outsystems/runtime-core-js", "RESTAPIWebsocket.model", "tradershub.model", "RESTAPIWebsocket.model$ST_c77c7364c5e093c1d601fe854bbf1fd7Structure", "tradershub.referencesHealth", "tradershub.referencesHealth$RESTAPIWebsocket"], function (exports, OSRuntimeCore, RESTAPIWebsocketModel, tradershubModel) {
var OS = OSRuntimeCore;
class RL_d020274c0ef0b03336f86133d39e8e5d extends 
OS.DataTypes.GenericRecordList {
static getItemType() {
return RESTAPIWebsocketModel.ST_c77c7364c5e093c1d601fe854bbf1fd7Structure;
}

}

tradershubModel.RL_d020274c0ef0b03336f86133d39e8e5d = RL_d020274c0ef0b03336f86133d39e8e5d;

});

define("tradershub.model$RL_d05ad81e70a826256d161d2b9afc0f03", ["exports", "@outsystems/runtime-core-js", "tradershub.model", "tradershub.model$RC_36f2cdc7fc2c30db68dab6767886090d"], function (exports, OSRuntimeCore, tradershubModel) {
var OS = OSRuntimeCore;
class RL_d05ad81e70a826256d161d2b9afc0f03 extends 
OS.DataTypes.GenericRecordList {
static getItemType() {
return tradershubModel.RC_36f2cdc7fc2c30db68dab6767886090d;
}

}

tradershubModel.RL_d05ad81e70a826256d161d2b9afc0f03 = RL_d05ad81e70a826256d161d2b9afc0f03;

});

define("tradershub.model$RL_d082a22aaba2edcf587644f856c62a9a", ["exports", "@outsystems/runtime-core-js", "OutSystemsMaps.model", "tradershub.model", "OutSystemsMaps.model$ST_be62cc31fbe4705834275960beeb55e2Structure", "tradershub.referencesHealth", "tradershub.referencesHealth$OutSystemsMaps"], function (exports, OSRuntimeCore, OutSystemsMapsModel, tradershubModel) {
var OS = OSRuntimeCore;
class RL_d082a22aaba2edcf587644f856c62a9a extends 
OS.DataTypes.GenericRecordList {
static getItemType() {
return OutSystemsMapsModel.ST_be62cc31fbe4705834275960beeb55e2Structure;
}

}

tradershubModel.RL_d082a22aaba2edcf587644f856c62a9a = RL_d082a22aaba2edcf587644f856c62a9a;

});

define("tradershub.model$RC_d15ba8cc56cc5ee58bd8acaffd974239", ["exports", "@outsystems/runtime-core-js", "OutSystemsUI.model", "tradershub.model", "OutSystemsUI.model$EN_2c43e02ff45af9d6dc9d417ea3304062EntityRecord", "tradershub.referencesHealth", "tradershub.referencesHealth$OutSystemsUI"], function (exports, OSRuntimeCore, OutSystemsUIModel, tradershubModel) {
var OS = OSRuntimeCore;
{class RC_d15ba8cc56cc5ee58bd8acaffd974239Inner extends 
OS.DataTypes.GenericRecord {
static attributesToDeclare() {
return [
this.attr("Speed", "speedAttr", "Speed", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new OutSystemsUIModel.EN_2c43e02ff45af9d6dc9d417ea3304062EntityRecord());
}, true, OutSystemsUIModel.EN_2c43e02ff45af9d6dc9d417ea3304062EntityRecord)
].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
}

static fromStructure(str) {
return new RC_d15ba8cc56cc5ee58bd8acaffd974239(new RC_d15ba8cc56cc5ee58bd8acaffd974239.RecordClass({
speedAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
}

}

tradershubModel.RC_d15ba8cc56cc5ee58bd8acaffd974239 = RC_d15ba8cc56cc5ee58bd8acaffd974239Inner;

RC_d15ba8cc56cc5ee58bd8acaffd974239Inner._isAnonymousRecord = true;
RC_d15ba8cc56cc5ee58bd8acaffd974239Inner.UniqueId = "d15ba8cc-56cc-5ee5-8bd8-acaffd974239";
var RC_d15ba8cc56cc5ee58bd8acaffd974239 = RC_d15ba8cc56cc5ee58bd8acaffd974239Inner;
RC_d15ba8cc56cc5ee58bd8acaffd974239.init();
}
});

define("tradershub.model$RL_d15db589ea4d1a0a05d21cda4e2f9db2", ["exports", "@outsystems/runtime-core-js", "tradershub.model", "tradershub.model$RC_b32e755d03dd085a4b975b8c0c7d4454"], function (exports, OSRuntimeCore, tradershubModel) {
var OS = OSRuntimeCore;
class RL_d15db589ea4d1a0a05d21cda4e2f9db2 extends 
OS.DataTypes.GenericRecordList {
static getItemType() {
return tradershubModel.RC_b32e755d03dd085a4b975b8c0c7d4454;
}

}

tradershubModel.RL_d15db589ea4d1a0a05d21cda4e2f9db2 = RL_d15db589ea4d1a0a05d21cda4e2f9db2;

});

define("tradershub.model$RC_f5926d9764d9dfa431e4fc134e2e6a98", ["exports", "@outsystems/runtime-core-js", "OutSystemsMaps.model", "tradershub.model", "OutSystemsMaps.model$ST_31cb630f5fdaa3aa4d3dbfd37cbf9e56Structure", "tradershub.referencesHealth", "tradershub.referencesHealth$OutSystemsMaps"], function (exports, OSRuntimeCore, OutSystemsMapsModel, tradershubModel) {
var OS = OSRuntimeCore;
{class RC_f5926d9764d9dfa431e4fc134e2e6a98Inner extends 
OS.DataTypes.GenericRecord {
static attributesToDeclare() {
return [
this.attr("SearchArea", "searchAreaAttr", "SearchArea", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new OutSystemsMapsModel.ST_31cb630f5fdaa3aa4d3dbfd37cbf9e56Structure());
}, true, OutSystemsMapsModel.ST_31cb630f5fdaa3aa4d3dbfd37cbf9e56Structure)
].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
}

static fromStructure(str) {
return new RC_f5926d9764d9dfa431e4fc134e2e6a98(new RC_f5926d9764d9dfa431e4fc134e2e6a98.RecordClass({
searchAreaAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
}

}

tradershubModel.RC_f5926d9764d9dfa431e4fc134e2e6a98 = RC_f5926d9764d9dfa431e4fc134e2e6a98Inner;

RC_f5926d9764d9dfa431e4fc134e2e6a98Inner._isAnonymousRecord = true;
RC_f5926d9764d9dfa431e4fc134e2e6a98Inner.UniqueId = "f5926d97-64d9-dfa4-31e4-fc134e2e6a98";
var RC_f5926d9764d9dfa431e4fc134e2e6a98 = RC_f5926d9764d9dfa431e4fc134e2e6a98Inner;
RC_f5926d9764d9dfa431e4fc134e2e6a98.init();
}
});

define("tradershub.model$RL_d1a5d844f6dcfdf5c7e83e1504e1fd10", ["exports", "@outsystems/runtime-core-js", "tradershub.model", "tradershub.model$RC_f5926d9764d9dfa431e4fc134e2e6a98"], function (exports, OSRuntimeCore, tradershubModel) {
var OS = OSRuntimeCore;
class RL_d1a5d844f6dcfdf5c7e83e1504e1fd10 extends 
OS.DataTypes.GenericRecordList {
static getItemType() {
return tradershubModel.RC_f5926d9764d9dfa431e4fc134e2e6a98;
}

}

tradershubModel.RL_d1a5d844f6dcfdf5c7e83e1504e1fd10 = RL_d1a5d844f6dcfdf5c7e83e1504e1fd10;

});

define("tradershub.model$RL_d1ce957a73e235b2c1f9383b50c6c777", ["exports", "@outsystems/runtime-core-js", "OutSystemsUI.model", "tradershub.model", "OutSystemsUI.model$EN_ede7f8abbe990a3b2c1a9cfd79dc5b0fEntityRecord", "tradershub.referencesHealth", "tradershub.referencesHealth$OutSystemsUI"], function (exports, OSRuntimeCore, OutSystemsUIModel, tradershubModel) {
var OS = OSRuntimeCore;
class RL_d1ce957a73e235b2c1f9383b50c6c777 extends 
OS.DataTypes.GenericRecordList {
static getItemType() {
return OutSystemsUIModel.EN_ede7f8abbe990a3b2c1a9cfd79dc5b0fEntityRecord;
}

}

tradershubModel.RL_d1ce957a73e235b2c1f9383b50c6c777 = RL_d1ce957a73e235b2c1f9383b50c6c777;

});

define("tradershub.model$RL_d1ec4133b9c9274ea17a14b497f44d93", ["exports", "@outsystems/runtime-core-js", "OutSystemsUI.model", "tradershub.model", "OutSystemsUI.model$EN_c1e622743b79c1510fd62a0adf89686bEntityRecord", "tradershub.referencesHealth", "tradershub.referencesHealth$OutSystemsUI"], function (exports, OSRuntimeCore, OutSystemsUIModel, tradershubModel) {
var OS = OSRuntimeCore;
class RL_d1ec4133b9c9274ea17a14b497f44d93 extends 
OS.DataTypes.GenericRecordList {
static getItemType() {
return OutSystemsUIModel.EN_c1e622743b79c1510fd62a0adf89686bEntityRecord;
}

}

tradershubModel.RL_d1ec4133b9c9274ea17a14b497f44d93 = RL_d1ec4133b9c9274ea17a14b497f44d93;

});

define("tradershub.model$RL_d24415aae8bc2d864868eb4166823bd0", ["exports", "@outsystems/runtime-core-js", "OutSystemsUI.model", "tradershub.model", "OutSystemsUI.model$EN_849d11ab47adc426b5ce8d8c815c4fbfEntityRecord", "tradershub.referencesHealth", "tradershub.referencesHealth$OutSystemsUI"], function (exports, OSRuntimeCore, OutSystemsUIModel, tradershubModel) {
var OS = OSRuntimeCore;
class RL_d24415aae8bc2d864868eb4166823bd0 extends 
OS.DataTypes.GenericRecordList {
static getItemType() {
return OutSystemsUIModel.EN_849d11ab47adc426b5ce8d8c815c4fbfEntityRecord;
}

}

tradershubModel.RL_d24415aae8bc2d864868eb4166823bd0 = RL_d24415aae8bc2d864868eb4166823bd0;

});

define("tradershub.model$RL_d28765f0509bd8278495bc8b55d5a50e", ["exports", "@outsystems/runtime-core-js", "OutSystemsUI.model", "tradershub.model", "OutSystemsUI.model$EN_48a3ab8db598b5be6bef9add20e71bbbEntityRecord", "tradershub.referencesHealth", "tradershub.referencesHealth$OutSystemsUI"], function (exports, OSRuntimeCore, OutSystemsUIModel, tradershubModel) {
var OS = OSRuntimeCore;
class RL_d28765f0509bd8278495bc8b55d5a50e extends 
OS.DataTypes.GenericRecordList {
static getItemType() {
return OutSystemsUIModel.EN_48a3ab8db598b5be6bef9add20e71bbbEntityRecord;
}

}

tradershubModel.RL_d28765f0509bd8278495bc8b55d5a50e = RL_d28765f0509bd8278495bc8b55d5a50e;

});

define("tradershub.model$RL_d29c29f210f2cded5fc40a6b552dfbd2", ["exports", "@outsystems/runtime-core-js", "tradershub.model", "tradershub.model$RC_8bd0ab07a3f3c2d2a572a84134c564bd"], function (exports, OSRuntimeCore, tradershubModel) {
var OS = OSRuntimeCore;
class RL_d29c29f210f2cded5fc40a6b552dfbd2 extends 
OS.DataTypes.GenericRecordList {
static getItemType() {
return tradershubModel.RC_8bd0ab07a3f3c2d2a572a84134c564bd;
}

}

tradershubModel.RL_d29c29f210f2cded5fc40a6b552dfbd2 = RL_d29c29f210f2cded5fc40a6b552dfbd2;

});

define("tradershub.model$RL_d2c71de812e44763974172e04508cef5", ["exports", "@outsystems/runtime-core-js", "OutSystemsUI.model", "tradershub.model", "OutSystemsUI.model$EN_1967a79b0bc6b1bdc38ff87eefe0b127EntityRecord", "tradershub.referencesHealth", "tradershub.referencesHealth$OutSystemsUI"], function (exports, OSRuntimeCore, OutSystemsUIModel, tradershubModel) {
var OS = OSRuntimeCore;
class RL_d2c71de812e44763974172e04508cef5 extends 
OS.DataTypes.GenericRecordList {
static getItemType() {
return OutSystemsUIModel.EN_1967a79b0bc6b1bdc38ff87eefe0b127EntityRecord;
}

}

tradershubModel.RL_d2c71de812e44763974172e04508cef5 = RL_d2c71de812e44763974172e04508cef5;

});

define("tradershub.model$RL_d332fe45882b1b87adc5f60b41dab05c", ["exports", "@outsystems/runtime-core-js", "tradershub.model", "tradershub.model$ST_8d630435c078369fbe29222c857e96f2Structure"], function (exports, OSRuntimeCore, tradershubModel) {
var OS = OSRuntimeCore;
class RL_d332fe45882b1b87adc5f60b41dab05c extends 
OS.DataTypes.GenericRecordList {
static getItemType() {
return tradershubModel.ST_8d630435c078369fbe29222c857e96f2Structure;
}

}

tradershubModel.RL_d332fe45882b1b87adc5f60b41dab05c = RL_d332fe45882b1b87adc5f60b41dab05c;

});

define("tradershub.model$RL_d3a11822db8b6719d712c99cd29ac96a", ["exports", "@outsystems/runtime-core-js", "tradershub.model", "tradershub.model$RC_b52eabac43eed7268a0f740e5048ba41"], function (exports, OSRuntimeCore, tradershubModel) {
var OS = OSRuntimeCore;
class RL_d3a11822db8b6719d712c99cd29ac96a extends 
OS.DataTypes.GenericRecordList {
static getItemType() {
return tradershubModel.RC_b52eabac43eed7268a0f740e5048ba41;
}

}

tradershubModel.RL_d3a11822db8b6719d712c99cd29ac96a = RL_d3a11822db8b6719d712c99cd29ac96a;

});

define("tradershub.model$RL_d3a7744852f4b782bcbb3dc9b2b5a3a2", ["exports", "@outsystems/runtime-core-js", "RESTAPIWebsocket.model", "tradershub.model", "RESTAPIWebsocket.model$ST_123df4fc5615aac2800d1fa4847bc440Structure", "tradershub.referencesHealth", "tradershub.referencesHealth$RESTAPIWebsocket"], function (exports, OSRuntimeCore, RESTAPIWebsocketModel, tradershubModel) {
var OS = OSRuntimeCore;
class RL_d3a7744852f4b782bcbb3dc9b2b5a3a2 extends 
OS.DataTypes.GenericRecordList {
static getItemType() {
return RESTAPIWebsocketModel.ST_123df4fc5615aac2800d1fa4847bc440Structure;
}

}

tradershubModel.RL_d3a7744852f4b782bcbb3dc9b2b5a3a2 = RL_d3a7744852f4b782bcbb3dc9b2b5a3a2;

});

define("tradershub.model$RC_da31320f88166d864fc396c0fddbecc9", ["exports", "@outsystems/runtime-core-js", "RESTAPIWebsocket.model", "tradershub.model", "RESTAPIWebsocket.model$ST_c77c7364c5e093c1d601fe854bbf1fd7Structure", "tradershub.referencesHealth", "tradershub.referencesHealth$RESTAPIWebsocket"], function (exports, OSRuntimeCore, RESTAPIWebsocketModel, tradershubModel) {
var OS = OSRuntimeCore;
{class RC_da31320f88166d864fc396c0fddbecc9Inner extends 
OS.DataTypes.GenericRecord {
static attributesToDeclare() {
return [
this.attr("Risk_level", "risk_levelAttr", "Risk_level", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new RESTAPIWebsocketModel.ST_c77c7364c5e093c1d601fe854bbf1fd7Structure());
}, true, RESTAPIWebsocketModel.ST_c77c7364c5e093c1d601fe854bbf1fd7Structure)
].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
}

static fromStructure(str) {
return new RC_da31320f88166d864fc396c0fddbecc9(new RC_da31320f88166d864fc396c0fddbecc9.RecordClass({
risk_levelAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
}

}

tradershubModel.RC_da31320f88166d864fc396c0fddbecc9 = RC_da31320f88166d864fc396c0fddbecc9Inner;

RC_da31320f88166d864fc396c0fddbecc9Inner._isAnonymousRecord = true;
RC_da31320f88166d864fc396c0fddbecc9Inner.UniqueId = "da31320f-8816-6d86-4fc3-96c0fddbecc9";
var RC_da31320f88166d864fc396c0fddbecc9 = RC_da31320f88166d864fc396c0fddbecc9Inner;
RC_da31320f88166d864fc396c0fddbecc9.init();
}
});

define("tradershub.model$RL_d40367d2d21dcbcbaa0f7166365925a3", ["exports", "@outsystems/runtime-core-js", "tradershub.model", "tradershub.model$RC_da31320f88166d864fc396c0fddbecc9"], function (exports, OSRuntimeCore, tradershubModel) {
var OS = OSRuntimeCore;
class RL_d40367d2d21dcbcbaa0f7166365925a3 extends 
OS.DataTypes.GenericRecordList {
static getItemType() {
return tradershubModel.RC_da31320f88166d864fc396c0fddbecc9;
}

}

tradershubModel.RL_d40367d2d21dcbcbaa0f7166365925a3 = RL_d40367d2d21dcbcbaa0f7166365925a3;

});

define("tradershub.model$RL_d4f7893aa6d04f57395acc7bc2d61af1", ["exports", "@outsystems/runtime-core-js", "OutSystemsMaps.model", "tradershub.model", "OutSystemsMaps.model$EN_2b877a58494bdf7ca89c3ea2061b88c8EntityRecord", "tradershub.referencesHealth", "tradershub.referencesHealth$OutSystemsMaps"], function (exports, OSRuntimeCore, OutSystemsMapsModel, tradershubModel) {
var OS = OSRuntimeCore;
class RL_d4f7893aa6d04f57395acc7bc2d61af1 extends 
OS.DataTypes.GenericRecordList {
static getItemType() {
return OutSystemsMapsModel.EN_2b877a58494bdf7ca89c3ea2061b88c8EntityRecord;
}

}

tradershubModel.RL_d4f7893aa6d04f57395acc7bc2d61af1 = RL_d4f7893aa6d04f57395acc7bc2d61af1;

});

define("tradershub.model$RC_d509bf89cda09ba78055eb96d496078b", ["exports", "@outsystems/runtime-core-js", "RESTAPIWebsocket.model", "tradershub.model", "RESTAPIWebsocket.model$ST_6168fd7b9ba43ed0f5fe1ccbd8f82e90Structure", "tradershub.referencesHealth", "tradershub.referencesHealth$RESTAPIWebsocket"], function (exports, OSRuntimeCore, RESTAPIWebsocketModel, tradershubModel) {
var OS = OSRuntimeCore;
{class RC_d509bf89cda09ba78055eb96d496078bInner extends 
OS.DataTypes.GenericRecord {
static attributesToDeclare() {
return [
this.attr("Forex", "forexAttr", "Forex", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new RESTAPIWebsocketModel.ST_6168fd7b9ba43ed0f5fe1ccbd8f82e90Structure());
}, true, RESTAPIWebsocketModel.ST_6168fd7b9ba43ed0f5fe1ccbd8f82e90Structure)
].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
}

static fromStructure(str) {
return new RC_d509bf89cda09ba78055eb96d496078b(new RC_d509bf89cda09ba78055eb96d496078b.RecordClass({
forexAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
}

}

tradershubModel.RC_d509bf89cda09ba78055eb96d496078b = RC_d509bf89cda09ba78055eb96d496078bInner;

RC_d509bf89cda09ba78055eb96d496078bInner._isAnonymousRecord = true;
RC_d509bf89cda09ba78055eb96d496078bInner.UniqueId = "d509bf89-cda0-9ba7-8055-eb96d496078b";
var RC_d509bf89cda09ba78055eb96d496078b = RC_d509bf89cda09ba78055eb96d496078bInner;
RC_d509bf89cda09ba78055eb96d496078b.init();
}
});

define("tradershub.model$RL_d5a1ebd6f9bc3479c3eb3798ef469d8c", ["exports", "@outsystems/runtime-core-js", "tradershub.model", "tradershub.model$ST_c698a3174b73fffa916cca14f10645acStructure"], function (exports, OSRuntimeCore, tradershubModel) {
var OS = OSRuntimeCore;
class RL_d5a1ebd6f9bc3479c3eb3798ef469d8c extends 
OS.DataTypes.GenericRecordList {
static getItemType() {
return tradershubModel.ST_c698a3174b73fffa916cca14f10645acStructure;
}

}

tradershubModel.RL_d5a1ebd6f9bc3479c3eb3798ef469d8c = RL_d5a1ebd6f9bc3479c3eb3798ef469d8c;

});

define("tradershub.model$RL_d62f7d9b1e5a2fa7fb8fc80bfa05f8bb", ["exports", "@outsystems/runtime-core-js", "tradershub.model", "tradershub.model$ST_7ec9f9f71a508e65d3bd48bc2778f754Structure"], function (exports, OSRuntimeCore, tradershubModel) {
var OS = OSRuntimeCore;
class RL_d62f7d9b1e5a2fa7fb8fc80bfa05f8bb extends 
OS.DataTypes.GenericRecordList {
static getItemType() {
return tradershubModel.ST_7ec9f9f71a508e65d3bd48bc2778f754Structure;
}

}

tradershubModel.RL_d62f7d9b1e5a2fa7fb8fc80bfa05f8bb = RL_d62f7d9b1e5a2fa7fb8fc80bfa05f8bb;

});

define("tradershub.model$RL_d656c399e70b60822640f73b89cbc71f", ["exports", "@outsystems/runtime-core-js", "OutSystemsUI.model", "tradershub.model", "OutSystemsUI.model$EN_ac6f62956e278d5390a5f27c607338d0EntityRecord", "tradershub.referencesHealth", "tradershub.referencesHealth$OutSystemsUI"], function (exports, OSRuntimeCore, OutSystemsUIModel, tradershubModel) {
var OS = OSRuntimeCore;
class RL_d656c399e70b60822640f73b89cbc71f extends 
OS.DataTypes.GenericRecordList {
static getItemType() {
return OutSystemsUIModel.EN_ac6f62956e278d5390a5f27c607338d0EntityRecord;
}

}

tradershubModel.RL_d656c399e70b60822640f73b89cbc71f = RL_d656c399e70b60822640f73b89cbc71f;

});

define("tradershub.model$RL_d689c0ceaaa6201af233ffc179beef2f", ["exports", "@outsystems/runtime-core-js", "OutSystemsUI.model", "tradershub.model", "OutSystemsUI.model$ST_09173c1b0f41f719b9efd6430c2e737dStructure", "tradershub.referencesHealth", "tradershub.referencesHealth$OutSystemsUI"], function (exports, OSRuntimeCore, OutSystemsUIModel, tradershubModel) {
var OS = OSRuntimeCore;
class RL_d689c0ceaaa6201af233ffc179beef2f extends 
OS.DataTypes.GenericRecordList {
static getItemType() {
return OutSystemsUIModel.ST_09173c1b0f41f719b9efd6430c2e737dStructure;
}

}

tradershubModel.RL_d689c0ceaaa6201af233ffc179beef2f = RL_d689c0ceaaa6201af233ffc179beef2f;

});

define("tradershub.model$RL_d6f53713c8f8a22faf327cf7af7c6d89", ["exports", "@outsystems/runtime-core-js", "tradershub.model", "tradershub.model$ST_40181b9b51fffeffb473febe3bfa6ddbStructure"], function (exports, OSRuntimeCore, tradershubModel) {
var OS = OSRuntimeCore;
class RL_d6f53713c8f8a22faf327cf7af7c6d89 extends 
OS.DataTypes.GenericRecordList {
static getItemType() {
return tradershubModel.ST_40181b9b51fffeffb473febe3bfa6ddbStructure;
}

}

tradershubModel.RL_d6f53713c8f8a22faf327cf7af7c6d89 = RL_d6f53713c8f8a22faf327cf7af7c6d89;

});

define("tradershub.model$RL_d7c25a5fb9a8943a745839a83027088a", ["exports", "@outsystems/runtime-core-js", "tradershub.model", "tradershub.model$RC_131ec4afe292e50694c2940b1e3c9a73"], function (exports, OSRuntimeCore, tradershubModel) {
var OS = OSRuntimeCore;
class RL_d7c25a5fb9a8943a745839a83027088a extends 
OS.DataTypes.GenericRecordList {
static getItemType() {
return tradershubModel.RC_131ec4afe292e50694c2940b1e3c9a73;
}

}

tradershubModel.RL_d7c25a5fb9a8943a745839a83027088a = RL_d7c25a5fb9a8943a745839a83027088a;

});

define("tradershub.model$RL_d7cde0d346486a854aee07525f121a90", ["exports", "@outsystems/runtime-core-js", "OutSystemsUI.model", "tradershub.model", "OutSystemsUI.model$EN_5d1279724e719322292e34ef3c5500a0EntityRecord", "tradershub.referencesHealth", "tradershub.referencesHealth$OutSystemsUI"], function (exports, OSRuntimeCore, OutSystemsUIModel, tradershubModel) {
var OS = OSRuntimeCore;
class RL_d7cde0d346486a854aee07525f121a90 extends 
OS.DataTypes.GenericRecordList {
static getItemType() {
return OutSystemsUIModel.EN_5d1279724e719322292e34ef3c5500a0EntityRecord;
}

}

tradershubModel.RL_d7cde0d346486a854aee07525f121a90 = RL_d7cde0d346486a854aee07525f121a90;

});

define("tradershub.model$RL_d85e4c67416f974767ee94f9ffec8e89", ["exports", "@outsystems/runtime-core-js", "RESTAPIWebsocket.model", "tradershub.model", "RESTAPIWebsocket.model$ST_178833eaf81da5980f461500f3f98736Structure", "tradershub.referencesHealth", "tradershub.referencesHealth$RESTAPIWebsocket"], function (exports, OSRuntimeCore, RESTAPIWebsocketModel, tradershubModel) {
var OS = OSRuntimeCore;
class RL_d85e4c67416f974767ee94f9ffec8e89 extends 
OS.DataTypes.GenericRecordList {
static getItemType() {
return RESTAPIWebsocketModel.ST_178833eaf81da5980f461500f3f98736Structure;
}

}

tradershubModel.RL_d85e4c67416f974767ee94f9ffec8e89 = RL_d85e4c67416f974767ee94f9ffec8e89;

});

define("tradershub.model$RL_d87ae1fbd0490b6a0593267fa7ff097f", ["exports", "@outsystems/runtime-core-js", "tradershub.model", "tradershub.model$RC_7e4d7faa4d992502884aad01de45414c"], function (exports, OSRuntimeCore, tradershubModel) {
var OS = OSRuntimeCore;
class RL_d87ae1fbd0490b6a0593267fa7ff097f extends 
OS.DataTypes.GenericRecordList {
static getItemType() {
return tradershubModel.RC_7e4d7faa4d992502884aad01de45414c;
}

}

tradershubModel.RL_d87ae1fbd0490b6a0593267fa7ff097f = RL_d87ae1fbd0490b6a0593267fa7ff097f;

});

define("tradershub.model$RL_d8959d4c81c965e073d03471f545ed85", ["exports", "@outsystems/runtime-core-js", "tradershub.model", "tradershub.model$RC_56805fdef6332e01f13c0f9217357dbc"], function (exports, OSRuntimeCore, tradershubModel) {
var OS = OSRuntimeCore;
class RL_d8959d4c81c965e073d03471f545ed85 extends 
OS.DataTypes.GenericRecordList {
static getItemType() {
return tradershubModel.RC_56805fdef6332e01f13c0f9217357dbc;
}

}

tradershubModel.RL_d8959d4c81c965e073d03471f545ed85 = RL_d8959d4c81c965e073d03471f545ed85;

});

define("tradershub.model$RC_d9c7c205570dc850fb84a9195fd4397b", ["exports", "@outsystems/runtime-core-js", "tradershub.model", "tradershub.model$ST_2848cd79cb87a073a52246b673b32b79Structure"], function (exports, OSRuntimeCore, tradershubModel) {
var OS = OSRuntimeCore;
{class RC_d9c7c205570dc850fb84a9195fd4397bInner extends 
OS.DataTypes.GenericRecord {
static attributesToDeclare() {
return [
this.attr("Onfido", "onfidoAttr", "Onfido", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new tradershubModel.ST_2848cd79cb87a073a52246b673b32b79Structure());
}, true, tradershubModel.ST_2848cd79cb87a073a52246b673b32b79Structure)
].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
}

static fromStructure(str) {
return new RC_d9c7c205570dc850fb84a9195fd4397b(new RC_d9c7c205570dc850fb84a9195fd4397b.RecordClass({
onfidoAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
}

}

tradershubModel.RC_d9c7c205570dc850fb84a9195fd4397b = RC_d9c7c205570dc850fb84a9195fd4397bInner;

RC_d9c7c205570dc850fb84a9195fd4397bInner._isAnonymousRecord = true;
RC_d9c7c205570dc850fb84a9195fd4397bInner.UniqueId = "d9c7c205-570d-c850-fb84-a9195fd4397b";
var RC_d9c7c205570dc850fb84a9195fd4397b = RC_d9c7c205570dc850fb84a9195fd4397bInner;
RC_d9c7c205570dc850fb84a9195fd4397b.init();
}
});

define("tradershub.model$RL_da9f97f6a3c8b98228b608b130222591", ["exports", "@outsystems/runtime-core-js", "tradershub.model", "tradershub.model$RC_623a04a7e1c688b7ec133f2b7ca28f8e"], function (exports, OSRuntimeCore, tradershubModel) {
var OS = OSRuntimeCore;
class RL_da9f97f6a3c8b98228b608b130222591 extends 
OS.DataTypes.GenericRecordList {
static getItemType() {
return tradershubModel.RC_623a04a7e1c688b7ec133f2b7ca28f8e;
}

}

tradershubModel.RL_da9f97f6a3c8b98228b608b130222591 = RL_da9f97f6a3c8b98228b608b130222591;

});

define("tradershub.model$RC_dac62773434cf92b52368fd089bbfc2a", ["exports", "@outsystems/runtime-core-js", "OutSystemsUI.model", "tradershub.model", "OutSystemsUI.model$ST_660adb7a9db48bff1b12c6e03515b415Structure", "tradershub.referencesHealth", "tradershub.referencesHealth$OutSystemsUI"], function (exports, OSRuntimeCore, OutSystemsUIModel, tradershubModel) {
var OS = OSRuntimeCore;
{class RC_dac62773434cf92b52368fd089bbfc2aInner extends 
OS.DataTypes.GenericRecord {
static attributesToDeclare() {
return [
this.attr("CarouselItems", "carouselItemsAttr", "CarouselItems", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new OutSystemsUIModel.ST_660adb7a9db48bff1b12c6e03515b415Structure());
}, true, OutSystemsUIModel.ST_660adb7a9db48bff1b12c6e03515b415Structure)
].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
}

static fromStructure(str) {
return new RC_dac62773434cf92b52368fd089bbfc2a(new RC_dac62773434cf92b52368fd089bbfc2a.RecordClass({
carouselItemsAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
}

}

tradershubModel.RC_dac62773434cf92b52368fd089bbfc2a = RC_dac62773434cf92b52368fd089bbfc2aInner;

RC_dac62773434cf92b52368fd089bbfc2aInner._isAnonymousRecord = true;
RC_dac62773434cf92b52368fd089bbfc2aInner.UniqueId = "dac62773-434c-f92b-5236-8fd089bbfc2a";
var RC_dac62773434cf92b52368fd089bbfc2a = RC_dac62773434cf92b52368fd089bbfc2aInner;
RC_dac62773434cf92b52368fd089bbfc2a.init();
}
});

define("tradershub.model$RL_db517726bd3ccb8cadfd2631a2f814c6", ["exports", "@outsystems/runtime-core-js", "OutSystemsMaps.model", "tradershub.model", "OutSystemsMaps.model$ST_fbded4e930a61a57761a37f0b1ea8d40Structure", "tradershub.referencesHealth", "tradershub.referencesHealth$OutSystemsMaps"], function (exports, OSRuntimeCore, OutSystemsMapsModel, tradershubModel) {
var OS = OSRuntimeCore;
class RL_db517726bd3ccb8cadfd2631a2f814c6 extends 
OS.DataTypes.GenericRecordList {
static getItemType() {
return OutSystemsMapsModel.ST_fbded4e930a61a57761a37f0b1ea8d40Structure;
}

}

tradershubModel.RL_db517726bd3ccb8cadfd2631a2f814c6 = RL_db517726bd3ccb8cadfd2631a2f814c6;

});

define("tradershub.model$RL_dba1429f774712c36d3ea0b48ab6b63d", ["exports", "@outsystems/runtime-core-js", "RESTAPIWebsocket.model", "tradershub.model", "RESTAPIWebsocket.model$ST_709b151c5172b8ff1042e5fecf4be0ecStructure", "tradershub.referencesHealth", "tradershub.referencesHealth$RESTAPIWebsocket"], function (exports, OSRuntimeCore, RESTAPIWebsocketModel, tradershubModel) {
var OS = OSRuntimeCore;
class RL_dba1429f774712c36d3ea0b48ab6b63d extends 
OS.DataTypes.GenericRecordList {
static getItemType() {
return RESTAPIWebsocketModel.ST_709b151c5172b8ff1042e5fecf4be0ecStructure;
}

}

tradershubModel.RL_dba1429f774712c36d3ea0b48ab6b63d = RL_dba1429f774712c36d3ea0b48ab6b63d;

});

define("tradershub.model$RL_dbe55ef52ecd08c4bbb30e3b07ac653d", ["exports", "@outsystems/runtime-core-js", "tradershub.model", "tradershub.model$RC_4bcf394b25f9baf70005faeb874ddf37"], function (exports, OSRuntimeCore, tradershubModel) {
var OS = OSRuntimeCore;
class RL_dbe55ef52ecd08c4bbb30e3b07ac653d extends 
OS.DataTypes.GenericRecordList {
static getItemType() {
return tradershubModel.RC_4bcf394b25f9baf70005faeb874ddf37;
}

}

tradershubModel.RL_dbe55ef52ecd08c4bbb30e3b07ac653d = RL_dbe55ef52ecd08c4bbb30e3b07ac653d;

});

define("tradershub.model$RL_dc051d7f5f7c52ae82b3318a00fefd11", ["exports", "@outsystems/runtime-core-js", "tradershub.model", "tradershub.model$RC_ae2fdfd8cc48be4dcc0710ae53b1008e"], function (exports, OSRuntimeCore, tradershubModel) {
var OS = OSRuntimeCore;
class RL_dc051d7f5f7c52ae82b3318a00fefd11 extends 
OS.DataTypes.GenericRecordList {
static getItemType() {
return tradershubModel.RC_ae2fdfd8cc48be4dcc0710ae53b1008e;
}

}

tradershubModel.RL_dc051d7f5f7c52ae82b3318a00fefd11 = RL_dc051d7f5f7c52ae82b3318a00fefd11;

});

define("tradershub.model$RL_dcacc04d216130be16d1b4f7ceb8bed8", ["exports", "@outsystems/runtime-core-js", "tradershub.model", "tradershub.model$RC_2ab43c4c70496101f2387f8470c630be"], function (exports, OSRuntimeCore, tradershubModel) {
var OS = OSRuntimeCore;
class RL_dcacc04d216130be16d1b4f7ceb8bed8 extends 
OS.DataTypes.GenericRecordList {
static getItemType() {
return tradershubModel.RC_2ab43c4c70496101f2387f8470c630be;
}

}

tradershubModel.RL_dcacc04d216130be16d1b4f7ceb8bed8 = RL_dcacc04d216130be16d1b4f7ceb8bed8;

});

define("tradershub.model$RL_dce031541ffd7ddb60ff42662d8a6be6", ["exports", "@outsystems/runtime-core-js", "OutSystemsUI.model", "tradershub.model", "OutSystemsUI.model$EN_c3a2475ae6370a2f746040280495b4a2EntityRecord", "tradershub.referencesHealth", "tradershub.referencesHealth$OutSystemsUI"], function (exports, OSRuntimeCore, OutSystemsUIModel, tradershubModel) {
var OS = OSRuntimeCore;
class RL_dce031541ffd7ddb60ff42662d8a6be6 extends 
OS.DataTypes.GenericRecordList {
static getItemType() {
return OutSystemsUIModel.EN_c3a2475ae6370a2f746040280495b4a2EntityRecord;
}

}

tradershubModel.RL_dce031541ffd7ddb60ff42662d8a6be6 = RL_dce031541ffd7ddb60ff42662d8a6be6;

});

define("tradershub.model$RL_ddac7ae82399019b6b9f96af5f5696e1", ["exports", "@outsystems/runtime-core-js", "tradershub.model", "tradershub.model$RC_96c340f5ac620f54674641c63eb91876"], function (exports, OSRuntimeCore, tradershubModel) {
var OS = OSRuntimeCore;
class RL_ddac7ae82399019b6b9f96af5f5696e1 extends 
OS.DataTypes.GenericRecordList {
static getItemType() {
return tradershubModel.RC_96c340f5ac620f54674641c63eb91876;
}

}

tradershubModel.RL_ddac7ae82399019b6b9f96af5f5696e1 = RL_ddac7ae82399019b6b9f96af5f5696e1;

});

define("tradershub.model$RL_def943a3ebd6bf11f94ec46535d57d52", ["exports", "@outsystems/runtime-core-js", "tradershub.model", "tradershub.model$ST_58f94944873932b82fdc1272d5e6c98dStructure"], function (exports, OSRuntimeCore, tradershubModel) {
var OS = OSRuntimeCore;
class RL_def943a3ebd6bf11f94ec46535d57d52 extends 
OS.DataTypes.GenericRecordList {
static getItemType() {
return tradershubModel.ST_58f94944873932b82fdc1272d5e6c98dStructure;
}

}

tradershubModel.RL_def943a3ebd6bf11f94ec46535d57d52 = RL_def943a3ebd6bf11f94ec46535d57d52;

});

define("tradershub.model$RL_df14cb7d037d8e09a588540e15f4e722", ["exports", "@outsystems/runtime-core-js", "tradershub.model", "tradershub.model$ST_8e51c0579a0eeb9a2bb60e1b5bc699e3Structure"], function (exports, OSRuntimeCore, tradershubModel) {
var OS = OSRuntimeCore;
class RL_df14cb7d037d8e09a588540e15f4e722 extends 
OS.DataTypes.GenericRecordList {
static getItemType() {
return tradershubModel.ST_8e51c0579a0eeb9a2bb60e1b5bc699e3Structure;
}

}

tradershubModel.RL_df14cb7d037d8e09a588540e15f4e722 = RL_df14cb7d037d8e09a588540e15f4e722;

});

define("tradershub.model$RL_dfdebdca8e822b537628659338ad0660", ["exports", "@outsystems/runtime-core-js", "RESTAPIWebsocket.model", "tradershub.model", "RESTAPIWebsocket.model$ST_159cd2ead3b4ce7cf017e33699885453Structure", "tradershub.referencesHealth", "tradershub.referencesHealth$RESTAPIWebsocket"], function (exports, OSRuntimeCore, RESTAPIWebsocketModel, tradershubModel) {
var OS = OSRuntimeCore;
class RL_dfdebdca8e822b537628659338ad0660 extends 
OS.DataTypes.GenericRecordList {
static getItemType() {
return RESTAPIWebsocketModel.ST_159cd2ead3b4ce7cf017e33699885453Structure;
}

}

tradershubModel.RL_dfdebdca8e822b537628659338ad0660 = RL_dfdebdca8e822b537628659338ad0660;

});

define("tradershub.model$RC_dfe43d1a19f2f910938805ce519a6be0", ["exports", "@outsystems/runtime-core-js", "RESTAPIWebsocket.model", "tradershub.model", "RESTAPIWebsocket.model$ST_f502318fbe2f943e6cfbba125766780aStructure", "tradershub.referencesHealth", "tradershub.referencesHealth$RESTAPIWebsocket"], function (exports, OSRuntimeCore, RESTAPIWebsocketModel, tradershubModel) {
var OS = OSRuntimeCore;
{class RC_dfe43d1a19f2f910938805ce519a6be0Inner extends 
OS.DataTypes.GenericRecord {
static attributesToDeclare() {
return [
this.attr("PostAuthorizeResponse", "postAuthorizeResponseAttr", "PostAuthorizeResponse", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new RESTAPIWebsocketModel.ST_f502318fbe2f943e6cfbba125766780aStructure());
}, true, RESTAPIWebsocketModel.ST_f502318fbe2f943e6cfbba125766780aStructure)
].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
}

static fromStructure(str) {
return new RC_dfe43d1a19f2f910938805ce519a6be0(new RC_dfe43d1a19f2f910938805ce519a6be0.RecordClass({
postAuthorizeResponseAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
}

}

tradershubModel.RC_dfe43d1a19f2f910938805ce519a6be0 = RC_dfe43d1a19f2f910938805ce519a6be0Inner;

RC_dfe43d1a19f2f910938805ce519a6be0Inner._isAnonymousRecord = true;
RC_dfe43d1a19f2f910938805ce519a6be0Inner.UniqueId = "dfe43d1a-19f2-f910-9388-05ce519a6be0";
var RC_dfe43d1a19f2f910938805ce519a6be0 = RC_dfe43d1a19f2f910938805ce519a6be0Inner;
RC_dfe43d1a19f2f910938805ce519a6be0.init();
}
});

define("tradershub.model$RL_e00c045aa4893ee0d4ff9c1c7d86146f", ["exports", "@outsystems/runtime-core-js", "tradershub.model", "tradershub.model$ST_b7420e17f48d13babe5f801a0124369cStructure"], function (exports, OSRuntimeCore, tradershubModel) {
var OS = OSRuntimeCore;
class RL_e00c045aa4893ee0d4ff9c1c7d86146f extends 
OS.DataTypes.GenericRecordList {
static getItemType() {
return tradershubModel.ST_b7420e17f48d13babe5f801a0124369cStructure;
}

}

tradershubModel.RL_e00c045aa4893ee0d4ff9c1c7d86146f = RL_e00c045aa4893ee0d4ff9c1c7d86146f;

});

define("tradershub.model$RL_e0b215f22bc7df1f0a8bb26f18778be3", ["exports", "@outsystems/runtime-core-js", "tradershub.model", "tradershub.model$ST_d81e896c7e8b0bc18c896edcf1c606c7Structure"], function (exports, OSRuntimeCore, tradershubModel) {
var OS = OSRuntimeCore;
class RL_e0b215f22bc7df1f0a8bb26f18778be3 extends 
OS.DataTypes.GenericRecordList {
static getItemType() {
return tradershubModel.ST_d81e896c7e8b0bc18c896edcf1c606c7Structure;
}

}

tradershubModel.RL_e0b215f22bc7df1f0a8bb26f18778be3 = RL_e0b215f22bc7df1f0a8bb26f18778be3;

});

define("tradershub.model$RL_e0d14ad0ade0a943d9ecc9ebb8efce77", ["exports", "@outsystems/runtime-core-js", "OutSystemsCharts.model", "tradershub.model", "OutSystemsCharts.model$ST_87973ae5f6c07db6193b59603f29dce6Structure", "tradershub.referencesHealth", "tradershub.referencesHealth$OutSystemsCharts"], function (exports, OSRuntimeCore, OutSystemsChartsModel, tradershubModel) {
var OS = OSRuntimeCore;
class RL_e0d14ad0ade0a943d9ecc9ebb8efce77 extends 
OS.DataTypes.GenericRecordList {
static getItemType() {
return OutSystemsChartsModel.ST_87973ae5f6c07db6193b59603f29dce6Structure;
}

}

tradershubModel.RL_e0d14ad0ade0a943d9ecc9ebb8efce77 = RL_e0d14ad0ade0a943d9ecc9ebb8efce77;

});

define("tradershub.model$RL_e0db929d5070f51885140f6448e90343", ["exports", "@outsystems/runtime-core-js", "tradershub.model", "tradershub.model$RC_212c9257a0adc5b590b777fec912927b"], function (exports, OSRuntimeCore, tradershubModel) {
var OS = OSRuntimeCore;
class RL_e0db929d5070f51885140f6448e90343 extends 
OS.DataTypes.GenericRecordList {
static getItemType() {
return tradershubModel.RC_212c9257a0adc5b590b777fec912927b;
}

}

tradershubModel.RL_e0db929d5070f51885140f6448e90343 = RL_e0db929d5070f51885140f6448e90343;

});

define("tradershub.model$RC_e0e41cb94b033378d9153e95b9660ef9", ["exports", "@outsystems/runtime-core-js", "RESTAPIWebsocket.model", "tradershub.model", "RESTAPIWebsocket.model$ST_3b8df1b0da2c2bbfdff9bb6416b86701Structure", "tradershub.referencesHealth", "tradershub.referencesHealth$RESTAPIWebsocket"], function (exports, OSRuntimeCore, RESTAPIWebsocketModel, tradershubModel) {
var OS = OSRuntimeCore;
{class RC_e0e41cb94b033378d9153e95b9660ef9Inner extends 
OS.DataTypes.GenericRecord {
static attributesToDeclare() {
return [
this.attr("Document_type", "document_typeAttr", "Document_type", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new RESTAPIWebsocketModel.ST_3b8df1b0da2c2bbfdff9bb6416b86701Structure());
}, true, RESTAPIWebsocketModel.ST_3b8df1b0da2c2bbfdff9bb6416b86701Structure)
].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
}

static fromStructure(str) {
return new RC_e0e41cb94b033378d9153e95b9660ef9(new RC_e0e41cb94b033378d9153e95b9660ef9.RecordClass({
document_typeAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
}

}

tradershubModel.RC_e0e41cb94b033378d9153e95b9660ef9 = RC_e0e41cb94b033378d9153e95b9660ef9Inner;

RC_e0e41cb94b033378d9153e95b9660ef9Inner._isAnonymousRecord = true;
RC_e0e41cb94b033378d9153e95b9660ef9Inner.UniqueId = "e0e41cb9-4b03-3378-d915-3e95b9660ef9";
var RC_e0e41cb94b033378d9153e95b9660ef9 = RC_e0e41cb94b033378d9153e95b9660ef9Inner;
RC_e0e41cb94b033378d9153e95b9660ef9.init();
}
});

define("tradershub.model$RL_e1278fe9427d99d4150ff61ea3f65e79", ["exports", "@outsystems/runtime-core-js", "RESTAPIWebsocket.model", "tradershub.model", "RESTAPIWebsocket.model$ST_24b97ac8060a9349e09da2d88e1dea00Structure", "tradershub.referencesHealth", "tradershub.referencesHealth$RESTAPIWebsocket"], function (exports, OSRuntimeCore, RESTAPIWebsocketModel, tradershubModel) {
var OS = OSRuntimeCore;
class RL_e1278fe9427d99d4150ff61ea3f65e79 extends 
OS.DataTypes.GenericRecordList {
static getItemType() {
return RESTAPIWebsocketModel.ST_24b97ac8060a9349e09da2d88e1dea00Structure;
}

}

tradershubModel.RL_e1278fe9427d99d4150ff61ea3f65e79 = RL_e1278fe9427d99d4150ff61ea3f65e79;

});

define("tradershub.model$RL_e14755a881df87b3e885c798489a1f9a", ["exports", "@outsystems/runtime-core-js", "RESTAPIWebsocket.model", "tradershub.model", "RESTAPIWebsocket.model$ST_6168fd7b9ba43ed0f5fe1ccbd8f82e90Structure", "tradershub.referencesHealth", "tradershub.referencesHealth$RESTAPIWebsocket"], function (exports, OSRuntimeCore, RESTAPIWebsocketModel, tradershubModel) {
var OS = OSRuntimeCore;
class RL_e14755a881df87b3e885c798489a1f9a extends 
OS.DataTypes.GenericRecordList {
static getItemType() {
return RESTAPIWebsocketModel.ST_6168fd7b9ba43ed0f5fe1ccbd8f82e90Structure;
}

}

tradershubModel.RL_e14755a881df87b3e885c798489a1f9a = RL_e14755a881df87b3e885c798489a1f9a;

});

define("tradershub.model$RC_e1514a5df394d2318b57f04b73e74172", ["exports", "@outsystems/runtime-core-js", "tradershub.model", "tradershub.model$ST_60e7d21e67b5c6547131a4ff8ca45d7cStructure"], function (exports, OSRuntimeCore, tradershubModel) {
var OS = OSRuntimeCore;
{class RC_e1514a5df394d2318b57f04b73e74172Inner extends 
OS.DataTypes.GenericRecord {
static attributesToDeclare() {
return [
this.attr("Error", "errorAttr", "Error", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new tradershubModel.ST_60e7d21e67b5c6547131a4ff8ca45d7cStructure());
}, true, tradershubModel.ST_60e7d21e67b5c6547131a4ff8ca45d7cStructure)
].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
}

static fromStructure(str) {
return new RC_e1514a5df394d2318b57f04b73e74172(new RC_e1514a5df394d2318b57f04b73e74172.RecordClass({
errorAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
}

}

tradershubModel.RC_e1514a5df394d2318b57f04b73e74172 = RC_e1514a5df394d2318b57f04b73e74172Inner;

RC_e1514a5df394d2318b57f04b73e74172Inner._isAnonymousRecord = true;
RC_e1514a5df394d2318b57f04b73e74172Inner.UniqueId = "e1514a5d-f394-d231-8b57-f04b73e74172";
var RC_e1514a5df394d2318b57f04b73e74172 = RC_e1514a5df394d2318b57f04b73e74172Inner;
RC_e1514a5df394d2318b57f04b73e74172.init();
}
});

define("tradershub.model$RL_e17c98c9ebad9849b38663a52005be50", ["exports", "@outsystems/runtime-core-js", "RESTAPIWebsocket.model", "tradershub.model", "RESTAPIWebsocket.model$ST_a37989da54adde60afe7657f5bc1d06eStructure", "tradershub.referencesHealth", "tradershub.referencesHealth$RESTAPIWebsocket"], function (exports, OSRuntimeCore, RESTAPIWebsocketModel, tradershubModel) {
var OS = OSRuntimeCore;
class RL_e17c98c9ebad9849b38663a52005be50 extends 
OS.DataTypes.GenericRecordList {
static getItemType() {
return RESTAPIWebsocketModel.ST_a37989da54adde60afe7657f5bc1d06eStructure;
}

}

tradershubModel.RL_e17c98c9ebad9849b38663a52005be50 = RL_e17c98c9ebad9849b38663a52005be50;

});

define("tradershub.model$RL_e324c5613f6582622bbc7538404857ac", ["exports", "@outsystems/runtime-core-js", "tradershub.model", "tradershub.model$ST_f2bc7d80e7fc531e5f0290d2ad6151faStructure"], function (exports, OSRuntimeCore, tradershubModel) {
var OS = OSRuntimeCore;
class RL_e324c5613f6582622bbc7538404857ac extends 
OS.DataTypes.GenericRecordList {
static getItemType() {
return tradershubModel.ST_f2bc7d80e7fc531e5f0290d2ad6151faStructure;
}

}

tradershubModel.RL_e324c5613f6582622bbc7538404857ac = RL_e324c5613f6582622bbc7538404857ac;

});

define("tradershub.model$RC_e3607d6b92545e5793fbeb99fc16b7e7", ["exports", "@outsystems/runtime-core-js", "OutSystemsUI.model", "tradershub.model", "OutSystemsUI.model$EN_c1e622743b79c1510fd62a0adf89686bEntityRecord", "tradershub.referencesHealth", "tradershub.referencesHealth$OutSystemsUI"], function (exports, OSRuntimeCore, OutSystemsUIModel, tradershubModel) {
var OS = OSRuntimeCore;
{class RC_e3607d6b92545e5793fbeb99fc16b7e7Inner extends 
OS.DataTypes.GenericRecord {
static attributesToDeclare() {
return [
this.attr("SideMenuBehavior", "sideMenuBehaviorAttr", "SideMenuBehavior", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new OutSystemsUIModel.EN_c1e622743b79c1510fd62a0adf89686bEntityRecord());
}, true, OutSystemsUIModel.EN_c1e622743b79c1510fd62a0adf89686bEntityRecord)
].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
}

static fromStructure(str) {
return new RC_e3607d6b92545e5793fbeb99fc16b7e7(new RC_e3607d6b92545e5793fbeb99fc16b7e7.RecordClass({
sideMenuBehaviorAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
}

}

tradershubModel.RC_e3607d6b92545e5793fbeb99fc16b7e7 = RC_e3607d6b92545e5793fbeb99fc16b7e7Inner;

RC_e3607d6b92545e5793fbeb99fc16b7e7Inner._isAnonymousRecord = true;
RC_e3607d6b92545e5793fbeb99fc16b7e7Inner.UniqueId = "e3607d6b-9254-5e57-93fb-eb99fc16b7e7";
var RC_e3607d6b92545e5793fbeb99fc16b7e7 = RC_e3607d6b92545e5793fbeb99fc16b7e7Inner;
RC_e3607d6b92545e5793fbeb99fc16b7e7.init();
}
});

define("tradershub.model$RL_e377a277aec73abf25e2c35110f340eb", ["exports", "@outsystems/runtime-core-js", "tradershub.model", "tradershub.model$RC_72deccc4588dd4c59ea212c47055f933"], function (exports, OSRuntimeCore, tradershubModel) {
var OS = OSRuntimeCore;
class RL_e377a277aec73abf25e2c35110f340eb extends 
OS.DataTypes.GenericRecordList {
static getItemType() {
return tradershubModel.RC_72deccc4588dd4c59ea212c47055f933;
}

}

tradershubModel.RL_e377a277aec73abf25e2c35110f340eb = RL_e377a277aec73abf25e2c35110f340eb;

});

define("tradershub.model$RL_e4039f49ef635e04c7570b28167d4738", ["exports", "@outsystems/runtime-core-js", "tradershub.model", "tradershub.model$RC_5e1d01a12ae536aa8fe0a4f69834b0d5"], function (exports, OSRuntimeCore, tradershubModel) {
var OS = OSRuntimeCore;
class RL_e4039f49ef635e04c7570b28167d4738 extends 
OS.DataTypes.GenericRecordList {
static getItemType() {
return tradershubModel.RC_5e1d01a12ae536aa8fe0a4f69834b0d5;
}

}

tradershubModel.RL_e4039f49ef635e04c7570b28167d4738 = RL_e4039f49ef635e04c7570b28167d4738;

});

define("tradershub.model$RL_e42632965fbacac756c3d935f97df7a8", ["exports", "@outsystems/runtime-core-js", "tradershub.model", "tradershub.model$RC_dac62773434cf92b52368fd089bbfc2a"], function (exports, OSRuntimeCore, tradershubModel) {
var OS = OSRuntimeCore;
class RL_e42632965fbacac756c3d935f97df7a8 extends 
OS.DataTypes.GenericRecordList {
static getItemType() {
return tradershubModel.RC_dac62773434cf92b52368fd089bbfc2a;
}

}

tradershubModel.RL_e42632965fbacac756c3d935f97df7a8 = RL_e42632965fbacac756c3d935f97df7a8;

});

define("tradershub.model$RL_e56fb0191feb44f84020036f55e60dab", ["exports", "@outsystems/runtime-core-js", "tradershub.model", "tradershub.model$RC_d9c7c205570dc850fb84a9195fd4397b"], function (exports, OSRuntimeCore, tradershubModel) {
var OS = OSRuntimeCore;
class RL_e56fb0191feb44f84020036f55e60dab extends 
OS.DataTypes.GenericRecordList {
static getItemType() {
return tradershubModel.RC_d9c7c205570dc850fb84a9195fd4397b;
}

}

tradershubModel.RL_e56fb0191feb44f84020036f55e60dab = RL_e56fb0191feb44f84020036f55e60dab;

});

define("tradershub.model$RL_e57523dcca7e6d3766c4721a0ef109ee", ["exports", "@outsystems/runtime-core-js", "System_.model", "tradershub.model", "System_.model$PasswordValidationResultRec", "tradershub.referencesHealth", "tradershub.referencesHealth$System_"], function (exports, OSRuntimeCore, System_Model, tradershubModel) {
var OS = OSRuntimeCore;
class RL_e57523dcca7e6d3766c4721a0ef109ee extends 
OS.DataTypes.GenericRecordList {
static getItemType() {
return OS.SystemStructures.PasswordValidationResultRec;
}

}

tradershubModel.RL_e57523dcca7e6d3766c4721a0ef109ee = RL_e57523dcca7e6d3766c4721a0ef109ee;

});

define("tradershub.model$RL_e68380578fba0d7ac1038655856a6558", ["exports", "@outsystems/runtime-core-js", "tradershub.model", "tradershub.model$ST_d0797dfc77615b3a25728769b9f01e76Structure"], function (exports, OSRuntimeCore, tradershubModel) {
var OS = OSRuntimeCore;
class RL_e68380578fba0d7ac1038655856a6558 extends 
OS.DataTypes.GenericRecordList {
static getItemType() {
return tradershubModel.ST_d0797dfc77615b3a25728769b9f01e76Structure;
}

}

tradershubModel.RL_e68380578fba0d7ac1038655856a6558 = RL_e68380578fba0d7ac1038655856a6558;

});

define("tradershub.model$RL_e6eb0a62197c37db299beb6105b3c02d", ["exports", "@outsystems/runtime-core-js", "tradershub.model", "tradershub.model$RC_aca073df88d40d31252fa904cba1bb39"], function (exports, OSRuntimeCore, tradershubModel) {
var OS = OSRuntimeCore;
class RL_e6eb0a62197c37db299beb6105b3c02d extends 
OS.DataTypes.GenericRecordList {
static getItemType() {
return tradershubModel.RC_aca073df88d40d31252fa904cba1bb39;
}

}

tradershubModel.RL_e6eb0a62197c37db299beb6105b3c02d = RL_e6eb0a62197c37db299beb6105b3c02d;

});

define("tradershub.model$RL_e76ce0f7deb6f6a812e61bd92e29120f", ["exports", "@outsystems/runtime-core-js", "OutSystemsUI.model", "tradershub.model", "OutSystemsUI.model$ST_ffc6ac6eac2c99bcdbe1dc79ecc6377fStructure", "tradershub.referencesHealth", "tradershub.referencesHealth$OutSystemsUI"], function (exports, OSRuntimeCore, OutSystemsUIModel, tradershubModel) {
var OS = OSRuntimeCore;
class RL_e76ce0f7deb6f6a812e61bd92e29120f extends 
OS.DataTypes.GenericRecordList {
static getItemType() {
return OutSystemsUIModel.ST_ffc6ac6eac2c99bcdbe1dc79ecc6377fStructure;
}

}

tradershubModel.RL_e76ce0f7deb6f6a812e61bd92e29120f = RL_e76ce0f7deb6f6a812e61bd92e29120f;

});

define("tradershub.model$RL_e82a294eed133f149e58d5c690f5928e", ["exports", "@outsystems/runtime-core-js", "tradershub.model", "tradershub.model$ST_20ab4504e981d74f2db21e1503a31089Structure"], function (exports, OSRuntimeCore, tradershubModel) {
var OS = OSRuntimeCore;
class RL_e82a294eed133f149e58d5c690f5928e extends 
OS.DataTypes.GenericRecordList {
static getItemType() {
return tradershubModel.ST_20ab4504e981d74f2db21e1503a31089Structure;
}

}

tradershubModel.RL_e82a294eed133f149e58d5c690f5928e = RL_e82a294eed133f149e58d5c690f5928e;

});

define("tradershub.model$RL_e8445d61f812c92de860d050e73a5e29", ["exports", "@outsystems/runtime-core-js", "OutSystemsUI.model", "tradershub.model", "OutSystemsUI.model$EN_2c43e02ff45af9d6dc9d417ea3304062EntityRecord", "tradershub.referencesHealth", "tradershub.referencesHealth$OutSystemsUI"], function (exports, OSRuntimeCore, OutSystemsUIModel, tradershubModel) {
var OS = OSRuntimeCore;
class RL_e8445d61f812c92de860d050e73a5e29 extends 
OS.DataTypes.GenericRecordList {
static getItemType() {
return OutSystemsUIModel.EN_2c43e02ff45af9d6dc9d417ea3304062EntityRecord;
}

}

tradershubModel.RL_e8445d61f812c92de860d050e73a5e29 = RL_e8445d61f812c92de860d050e73a5e29;

});

define("tradershub.model$RL_e856867ee566a669975deb559ed261d0", ["exports", "@outsystems/runtime-core-js", "tradershub.model", "tradershub.model$RC_73333afe7cdabe76302dec4b77612cd5"], function (exports, OSRuntimeCore, tradershubModel) {
var OS = OSRuntimeCore;
class RL_e856867ee566a669975deb559ed261d0 extends 
OS.DataTypes.GenericRecordList {
static getItemType() {
return tradershubModel.RC_73333afe7cdabe76302dec4b77612cd5;
}

}

tradershubModel.RL_e856867ee566a669975deb559ed261d0 = RL_e856867ee566a669975deb559ed261d0;

});

define("tradershub.model$RC_e99125879052944de51c7e07c0b316fb", ["exports", "@outsystems/runtime-core-js", "tradershub.model", "tradershub.model$ST_81244dbb8e72a05a708e9a449198444eStructure"], function (exports, OSRuntimeCore, tradershubModel) {
var OS = OSRuntimeCore;
{class RC_e99125879052944de51c7e07c0b316fbInner extends 
OS.DataTypes.GenericRecord {
static attributesToDeclare() {
return [
this.attr("DocumentWithAdditionalDocuments", "documentWithAdditionalDocumentsAttr", "DocumentWithAdditionalDocuments", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new tradershubModel.ST_81244dbb8e72a05a708e9a449198444eStructure());
}, true, tradershubModel.ST_81244dbb8e72a05a708e9a449198444eStructure)
].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
}

static fromStructure(str) {
return new RC_e99125879052944de51c7e07c0b316fb(new RC_e99125879052944de51c7e07c0b316fb.RecordClass({
documentWithAdditionalDocumentsAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
}

}

tradershubModel.RC_e99125879052944de51c7e07c0b316fb = RC_e99125879052944de51c7e07c0b316fbInner;

RC_e99125879052944de51c7e07c0b316fbInner._isAnonymousRecord = true;
RC_e99125879052944de51c7e07c0b316fbInner.UniqueId = "e9912587-9052-944d-e51c-7e07c0b316fb";
var RC_e99125879052944de51c7e07c0b316fb = RC_e99125879052944de51c7e07c0b316fbInner;
RC_e99125879052944de51c7e07c0b316fb.init();
}
});

define("tradershub.model$RL_e9f9ae4b0e62db2b4a5d4df1812a8c5b", ["exports", "@outsystems/runtime-core-js", "tradershub.model", "tradershub.model$RC_e99125879052944de51c7e07c0b316fb"], function (exports, OSRuntimeCore, tradershubModel) {
var OS = OSRuntimeCore;
class RL_e9f9ae4b0e62db2b4a5d4df1812a8c5b extends 
OS.DataTypes.GenericRecordList {
static getItemType() {
return tradershubModel.RC_e99125879052944de51c7e07c0b316fb;
}

}

tradershubModel.RL_e9f9ae4b0e62db2b4a5d4df1812a8c5b = RL_e9f9ae4b0e62db2b4a5d4df1812a8c5b;

});

define("tradershub.model$RL_eaefbf6dde0f7f83dd46a12f58dd150a", ["exports", "@outsystems/runtime-core-js", "tradershub.model", "tradershub.model$RC_0d776a4e191faf321030d5ce57aa4167"], function (exports, OSRuntimeCore, tradershubModel) {
var OS = OSRuntimeCore;
class RL_eaefbf6dde0f7f83dd46a12f58dd150a extends 
OS.DataTypes.GenericRecordList {
static getItemType() {
return tradershubModel.RC_0d776a4e191faf321030d5ce57aa4167;
}

}

tradershubModel.RL_eaefbf6dde0f7f83dd46a12f58dd150a = RL_eaefbf6dde0f7f83dd46a12f58dd150a;

});

define("tradershub.model$RL_eafe76043375465a898a3d00608f23b6", ["exports", "@outsystems/runtime-core-js", "tradershub.model", "tradershub.model$RC_673cc0a63dbc3f5836f7732ba0712544"], function (exports, OSRuntimeCore, tradershubModel) {
var OS = OSRuntimeCore;
class RL_eafe76043375465a898a3d00608f23b6 extends 
OS.DataTypes.GenericRecordList {
static getItemType() {
return tradershubModel.RC_673cc0a63dbc3f5836f7732ba0712544;
}

}

tradershubModel.RL_eafe76043375465a898a3d00608f23b6 = RL_eafe76043375465a898a3d00608f23b6;

});

define("tradershub.model$RL_eafeffd52cd05aba315766e9bebd595c", ["exports", "@outsystems/runtime-core-js", "OutSystemsMaps.model", "tradershub.model", "OutSystemsMaps.model$ST_bbc1ca6a16af45dbf463953c280f2bf7Structure", "tradershub.referencesHealth", "tradershub.referencesHealth$OutSystemsMaps"], function (exports, OSRuntimeCore, OutSystemsMapsModel, tradershubModel) {
var OS = OSRuntimeCore;
class RL_eafeffd52cd05aba315766e9bebd595c extends 
OS.DataTypes.GenericRecordList {
static getItemType() {
return OutSystemsMapsModel.ST_bbc1ca6a16af45dbf463953c280f2bf7Structure;
}

}

tradershubModel.RL_eafeffd52cd05aba315766e9bebd595c = RL_eafeffd52cd05aba315766e9bebd595c;

});

define("tradershub.model$RL_ebfb5fc205ec92d52bf5f3e7e64c17f3", ["exports", "@outsystems/runtime-core-js", "OutSystemsMaps.model", "tradershub.model", "OutSystemsMaps.model$ST_49045fb6574dc7f29ee1f97116ecb1f6Structure", "tradershub.referencesHealth", "tradershub.referencesHealth$OutSystemsMaps"], function (exports, OSRuntimeCore, OutSystemsMapsModel, tradershubModel) {
var OS = OSRuntimeCore;
class RL_ebfb5fc205ec92d52bf5f3e7e64c17f3 extends 
OS.DataTypes.GenericRecordList {
static getItemType() {
return OutSystemsMapsModel.ST_49045fb6574dc7f29ee1f97116ecb1f6Structure;
}

}

tradershubModel.RL_ebfb5fc205ec92d52bf5f3e7e64c17f3 = RL_ebfb5fc205ec92d52bf5f3e7e64c17f3;

});

define("tradershub.model$RC_efb2275656caf0b2a30971ab6ea278c1", ["exports", "@outsystems/runtime-core-js", "tradershub.model", "tradershub.model$ST_dda3674fb618c7350645a460f303a303Structure"], function (exports, OSRuntimeCore, tradershubModel) {
var OS = OSRuntimeCore;
{class RC_efb2275656caf0b2a30971ab6ea278c1Inner extends 
OS.DataTypes.GenericRecord {
static attributesToDeclare() {
return [
this.attr("FilteredAccountList", "filteredAccountListAttr", "FilteredAccountList", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new tradershubModel.ST_dda3674fb618c7350645a460f303a303Structure());
}, true, tradershubModel.ST_dda3674fb618c7350645a460f303a303Structure)
].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
}

static fromStructure(str) {
return new RC_efb2275656caf0b2a30971ab6ea278c1(new RC_efb2275656caf0b2a30971ab6ea278c1.RecordClass({
filteredAccountListAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
}

}

tradershubModel.RC_efb2275656caf0b2a30971ab6ea278c1 = RC_efb2275656caf0b2a30971ab6ea278c1Inner;

RC_efb2275656caf0b2a30971ab6ea278c1Inner._isAnonymousRecord = true;
RC_efb2275656caf0b2a30971ab6ea278c1Inner.UniqueId = "efb22756-56ca-f0b2-a309-71ab6ea278c1";
var RC_efb2275656caf0b2a30971ab6ea278c1 = RC_efb2275656caf0b2a30971ab6ea278c1Inner;
RC_efb2275656caf0b2a30971ab6ea278c1.init();
}
});

define("tradershub.model$RL_edcc8f75fa6ce0276d716ede05a6ac11", ["exports", "@outsystems/runtime-core-js", "tradershub.model", "tradershub.model$RC_efb2275656caf0b2a30971ab6ea278c1"], function (exports, OSRuntimeCore, tradershubModel) {
var OS = OSRuntimeCore;
class RL_edcc8f75fa6ce0276d716ede05a6ac11 extends 
OS.DataTypes.GenericRecordList {
static getItemType() {
return tradershubModel.RC_efb2275656caf0b2a30971ab6ea278c1;
}

}

tradershubModel.RL_edcc8f75fa6ce0276d716ede05a6ac11 = RL_edcc8f75fa6ce0276d716ede05a6ac11;

});

define("tradershub.model$RL_ef17a169fc978db131804d255d1f8c7c", ["exports", "@outsystems/runtime-core-js", "tradershub.model", "tradershub.model$ST_25b9b327f0c66aea511dc5895e377c2eStructure"], function (exports, OSRuntimeCore, tradershubModel) {
var OS = OSRuntimeCore;
class RL_ef17a169fc978db131804d255d1f8c7c extends 
OS.DataTypes.GenericRecordList {
static getItemType() {
return tradershubModel.ST_25b9b327f0c66aea511dc5895e377c2eStructure;
}

}

tradershubModel.RL_ef17a169fc978db131804d255d1f8c7c = RL_ef17a169fc978db131804d255d1f8c7c;

});

define("tradershub.model$RL_ef58114699031e470461c9d952dc93e5", ["exports", "@outsystems/runtime-core-js", "tradershub.model", "tradershub.model$ST_2dae613205bb81a0382059f7840afedcStructure"], function (exports, OSRuntimeCore, tradershubModel) {
var OS = OSRuntimeCore;
class RL_ef58114699031e470461c9d952dc93e5 extends 
OS.DataTypes.GenericRecordList {
static getItemType() {
return tradershubModel.ST_2dae613205bb81a0382059f7840afedcStructure;
}

}

tradershubModel.RL_ef58114699031e470461c9d952dc93e5 = RL_ef58114699031e470461c9d952dc93e5;

});

define("tradershub.model$RC_ef663a8259396c6a00c487e0690cdf8c", ["exports", "@outsystems/runtime-core-js", "tradershub.model", "tradershub.model$ST_1a99e1302699632bd3158595a2dd8d57Structure"], function (exports, OSRuntimeCore, tradershubModel) {
var OS = OSRuntimeCore;
{class RC_ef663a8259396c6a00c487e0690cdf8cInner extends 
OS.DataTypes.GenericRecord {
static attributesToDeclare() {
return [
this.attr("NewAccountRealResponse", "newAccountRealResponseAttr", "NewAccountRealResponse", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new tradershubModel.ST_1a99e1302699632bd3158595a2dd8d57Structure());
}, true, tradershubModel.ST_1a99e1302699632bd3158595a2dd8d57Structure)
].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
}

static fromStructure(str) {
return new RC_ef663a8259396c6a00c487e0690cdf8c(new RC_ef663a8259396c6a00c487e0690cdf8c.RecordClass({
newAccountRealResponseAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
}

}

tradershubModel.RC_ef663a8259396c6a00c487e0690cdf8c = RC_ef663a8259396c6a00c487e0690cdf8cInner;

RC_ef663a8259396c6a00c487e0690cdf8cInner._isAnonymousRecord = true;
RC_ef663a8259396c6a00c487e0690cdf8cInner.UniqueId = "ef663a82-5939-6c6a-00c4-87e0690cdf8c";
var RC_ef663a8259396c6a00c487e0690cdf8c = RC_ef663a8259396c6a00c487e0690cdf8cInner;
RC_ef663a8259396c6a00c487e0690cdf8c.init();
}
});

define("tradershub.model$RL_f006da440cdd3cb71ee0b0bad6ee9b09", ["exports", "@outsystems/runtime-core-js", "tradershub.model", "tradershub.model$RC_43bc430cd4b2876c18eee5a50b2984a4"], function (exports, OSRuntimeCore, tradershubModel) {
var OS = OSRuntimeCore;
class RL_f006da440cdd3cb71ee0b0bad6ee9b09 extends 
OS.DataTypes.GenericRecordList {
static getItemType() {
return tradershubModel.RC_43bc430cd4b2876c18eee5a50b2984a4;
}

}

tradershubModel.RL_f006da440cdd3cb71ee0b0bad6ee9b09 = RL_f006da440cdd3cb71ee0b0bad6ee9b09;

});

define("tradershub.model$RL_f07d4ee6d8af2ad822d0947b26fdf6f3", ["exports", "@outsystems/runtime-core-js", "tradershub.model", "tradershub.model$RC_53d491417faf149f9fb8a0dda9c12d06"], function (exports, OSRuntimeCore, tradershubModel) {
var OS = OSRuntimeCore;
class RL_f07d4ee6d8af2ad822d0947b26fdf6f3 extends 
OS.DataTypes.GenericRecordList {
static getItemType() {
return tradershubModel.RC_53d491417faf149f9fb8a0dda9c12d06;
}

}

tradershubModel.RL_f07d4ee6d8af2ad822d0947b26fdf6f3 = RL_f07d4ee6d8af2ad822d0947b26fdf6f3;

});

define("tradershub.model$RL_f115a666c5540eef6697d9968af9fe8e", ["exports", "@outsystems/runtime-core-js", "tradershub.model", "tradershub.model$RC_a5018402fa6c90c5e826e54b2748cedc"], function (exports, OSRuntimeCore, tradershubModel) {
var OS = OSRuntimeCore;
class RL_f115a666c5540eef6697d9968af9fe8e extends 
OS.DataTypes.GenericRecordList {
static getItemType() {
return tradershubModel.RC_a5018402fa6c90c5e826e54b2748cedc;
}

}

tradershubModel.RL_f115a666c5540eef6697d9968af9fe8e = RL_f115a666c5540eef6697d9968af9fe8e;

});

define("tradershub.model$RL_f15b302598caef69c6cdd4e0690795f9", ["exports", "@outsystems/runtime-core-js", "tradershub.model", "tradershub.model$RC_7096ca0099728124fcaff6ac0bf8440c"], function (exports, OSRuntimeCore, tradershubModel) {
var OS = OSRuntimeCore;
class RL_f15b302598caef69c6cdd4e0690795f9 extends 
OS.DataTypes.GenericRecordList {
static getItemType() {
return tradershubModel.RC_7096ca0099728124fcaff6ac0bf8440c;
}

}

tradershubModel.RL_f15b302598caef69c6cdd4e0690795f9 = RL_f15b302598caef69c6cdd4e0690795f9;

});

define("tradershub.model$RL_f1ba5b686ead373e8de6278c5e74ab57", ["exports", "@outsystems/runtime-core-js", "tradershub.model", "tradershub.model$RC_9080b1888061a5533ea915e22804d4ea"], function (exports, OSRuntimeCore, tradershubModel) {
var OS = OSRuntimeCore;
class RL_f1ba5b686ead373e8de6278c5e74ab57 extends 
OS.DataTypes.GenericRecordList {
static getItemType() {
return tradershubModel.RC_9080b1888061a5533ea915e22804d4ea;
}

}

tradershubModel.RL_f1ba5b686ead373e8de6278c5e74ab57 = RL_f1ba5b686ead373e8de6278c5e74ab57;

});

define("tradershub.model$RL_f1db162aca08aae7be68b7aedc571752", ["exports", "@outsystems/runtime-core-js", "tradershub.model", "tradershub.model$RC_e3607d6b92545e5793fbeb99fc16b7e7"], function (exports, OSRuntimeCore, tradershubModel) {
var OS = OSRuntimeCore;
class RL_f1db162aca08aae7be68b7aedc571752 extends 
OS.DataTypes.GenericRecordList {
static getItemType() {
return tradershubModel.RC_e3607d6b92545e5793fbeb99fc16b7e7;
}

}

tradershubModel.RL_f1db162aca08aae7be68b7aedc571752 = RL_f1db162aca08aae7be68b7aedc571752;

});

define("tradershub.model$RLUserList", ["exports", "@outsystems/runtime-core-js", "System_.model", "tradershub.model", "System_.model$ENUserEntityRecord", "tradershub.referencesHealth", "tradershub.referencesHealth$System_"], function (exports, OSRuntimeCore, System_Model, tradershubModel) {
var OS = OSRuntimeCore;
class RLUserList extends 
OS.DataTypes.GenericRecordList {
static getItemType() {
return System_Model.ENUserEntityRecord;
}

}

tradershubModel.RLUserList = RLUserList;

});

define("tradershub.model$RL_f1ffab31f320de9b1063617697efc389", ["exports", "@outsystems/runtime-core-js", "tradershub.model", "tradershub.model$RC_bd75f0fecd536060b13775f0ea83daca"], function (exports, OSRuntimeCore, tradershubModel) {
var OS = OSRuntimeCore;
class RL_f1ffab31f320de9b1063617697efc389 extends 
OS.DataTypes.GenericRecordList {
static getItemType() {
return tradershubModel.RC_bd75f0fecd536060b13775f0ea83daca;
}

}

tradershubModel.RL_f1ffab31f320de9b1063617697efc389 = RL_f1ffab31f320de9b1063617697efc389;

});

define("tradershub.model$RL_f37fb97bb03d9cf5dc07980a5751d3f8", ["exports", "@outsystems/runtime-core-js", "tradershub.model", "tradershub.model$RC_122e2a2ffba1e5ab49d0191f12c30284"], function (exports, OSRuntimeCore, tradershubModel) {
var OS = OSRuntimeCore;
class RL_f37fb97bb03d9cf5dc07980a5751d3f8 extends 
OS.DataTypes.GenericRecordList {
static getItemType() {
return tradershubModel.RC_122e2a2ffba1e5ab49d0191f12c30284;
}

}

tradershubModel.RL_f37fb97bb03d9cf5dc07980a5751d3f8 = RL_f37fb97bb03d9cf5dc07980a5751d3f8;

});

define("tradershub.model$RL_f41651df2a2fd9042256a16818c9c456", ["exports", "@outsystems/runtime-core-js", "tradershub.model", "tradershub.model$RC_1742d8ab89945a84e5474f54422034d5"], function (exports, OSRuntimeCore, tradershubModel) {
var OS = OSRuntimeCore;
class RL_f41651df2a2fd9042256a16818c9c456 extends 
OS.DataTypes.GenericRecordList {
static getItemType() {
return tradershubModel.RC_1742d8ab89945a84e5474f54422034d5;
}

}

tradershubModel.RL_f41651df2a2fd9042256a16818c9c456 = RL_f41651df2a2fd9042256a16818c9c456;

});

define("tradershub.model$RL_f42cec23f523c73def25d9b5b7bf3d36", ["exports", "@outsystems/runtime-core-js", "tradershub.model", "tradershub.model$RC_90ce9b105644724abc69e3ff1232bf2f"], function (exports, OSRuntimeCore, tradershubModel) {
var OS = OSRuntimeCore;
class RL_f42cec23f523c73def25d9b5b7bf3d36 extends 
OS.DataTypes.GenericRecordList {
static getItemType() {
return tradershubModel.RC_90ce9b105644724abc69e3ff1232bf2f;
}

}

tradershubModel.RL_f42cec23f523c73def25d9b5b7bf3d36 = RL_f42cec23f523c73def25d9b5b7bf3d36;

});

define("tradershub.model$RL_f50879d0da007880fcd304f3378f0a9e", ["exports", "@outsystems/runtime-core-js", "System_.model", "tradershub.model", "System_.model$PasswordComplexityPolicyRec", "tradershub.referencesHealth", "tradershub.referencesHealth$System_"], function (exports, OSRuntimeCore, System_Model, tradershubModel) {
var OS = OSRuntimeCore;
class RL_f50879d0da007880fcd304f3378f0a9e extends 
OS.DataTypes.GenericRecordList {
static getItemType() {
return OS.SystemStructures.PasswordComplexityPolicyRec;
}

}

tradershubModel.RL_f50879d0da007880fcd304f3378f0a9e = RL_f50879d0da007880fcd304f3378f0a9e;

});

define("tradershub.model$RL_f51d1b2f3972179080ca5027bc7c8f43", ["exports", "@outsystems/runtime-core-js", "tradershub.model", "tradershub.model$RC_9ca6a18cc49ca7246c44c0f7c2cef62a"], function (exports, OSRuntimeCore, tradershubModel) {
var OS = OSRuntimeCore;
class RL_f51d1b2f3972179080ca5027bc7c8f43 extends 
OS.DataTypes.GenericRecordList {
static getItemType() {
return tradershubModel.RC_9ca6a18cc49ca7246c44c0f7c2cef62a;
}

}

tradershubModel.RL_f51d1b2f3972179080ca5027bc7c8f43 = RL_f51d1b2f3972179080ca5027bc7c8f43;

});

define("tradershub.model$RL_f523c7921013f0781080fba3bca3beb7", ["exports", "@outsystems/runtime-core-js", "tradershub.model", "tradershub.model$RC_d15ba8cc56cc5ee58bd8acaffd974239"], function (exports, OSRuntimeCore, tradershubModel) {
var OS = OSRuntimeCore;
class RL_f523c7921013f0781080fba3bca3beb7 extends 
OS.DataTypes.GenericRecordList {
static getItemType() {
return tradershubModel.RC_d15ba8cc56cc5ee58bd8acaffd974239;
}

}

tradershubModel.RL_f523c7921013f0781080fba3bca3beb7 = RL_f523c7921013f0781080fba3bca3beb7;

});

define("tradershub.model$RL_f5728e3766cfe781fac6422ec4947dc0", ["exports", "@outsystems/runtime-core-js", "tradershub.model", "tradershub.model$RC_1b25d6a078a2b54dc46acf86c7e61fc3"], function (exports, OSRuntimeCore, tradershubModel) {
var OS = OSRuntimeCore;
class RL_f5728e3766cfe781fac6422ec4947dc0 extends 
OS.DataTypes.GenericRecordList {
static getItemType() {
return tradershubModel.RC_1b25d6a078a2b54dc46acf86c7e61fc3;
}

}

tradershubModel.RL_f5728e3766cfe781fac6422ec4947dc0 = RL_f5728e3766cfe781fac6422ec4947dc0;

});

define("tradershub.model$RL_f57dbd806146f5fc6604762b097028c1", ["exports", "@outsystems/runtime-core-js", "tradershub.model", "tradershub.model$ST_f41b21ee1ca377ae619742cd5408a376Structure"], function (exports, OSRuntimeCore, tradershubModel) {
var OS = OSRuntimeCore;
class RL_f57dbd806146f5fc6604762b097028c1 extends 
OS.DataTypes.GenericRecordList {
static getItemType() {
return tradershubModel.ST_f41b21ee1ca377ae619742cd5408a376Structure;
}

}

tradershubModel.RL_f57dbd806146f5fc6604762b097028c1 = RL_f57dbd806146f5fc6604762b097028c1;

});

define("tradershub.model$RL_f5c7ad0954ba1463c59a8fe7951e959f", ["exports", "@outsystems/runtime-core-js", "tradershub.model", "tradershub.model$RC_99f05d7f32b2e16e3c817f02609b7e4b"], function (exports, OSRuntimeCore, tradershubModel) {
var OS = OSRuntimeCore;
class RL_f5c7ad0954ba1463c59a8fe7951e959f extends 
OS.DataTypes.GenericRecordList {
static getItemType() {
return tradershubModel.RC_99f05d7f32b2e16e3c817f02609b7e4b;
}

}

tradershubModel.RL_f5c7ad0954ba1463c59a8fe7951e959f = RL_f5c7ad0954ba1463c59a8fe7951e959f;

});

define("tradershub.model$RC_f61c868ef053db94121ce89ee15a14fe", ["exports", "@outsystems/runtime-core-js", "System_.model", "tradershub.model", "System_.model$UserLoginFailureReasonRec", "tradershub.referencesHealth", "tradershub.referencesHealth$System_"], function (exports, OSRuntimeCore, System_Model, tradershubModel) {
var OS = OSRuntimeCore;
{class RC_f61c868ef053db94121ce89ee15a14feInner extends 
OS.DataTypes.GenericRecord {
static attributesToDeclare() {
return [
this.attr("UserLoginFailureReason", "userLoginFailureReasonAttr", "UserLoginFailureReason", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new OS.SystemStructures.UserLoginFailureReasonRec());
}, true, OS.SystemStructures.UserLoginFailureReasonRec)
].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
}

static fromStructure(str) {
return new RC_f61c868ef053db94121ce89ee15a14fe(new RC_f61c868ef053db94121ce89ee15a14fe.RecordClass({
userLoginFailureReasonAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
}

}

tradershubModel.RC_f61c868ef053db94121ce89ee15a14fe = RC_f61c868ef053db94121ce89ee15a14feInner;

RC_f61c868ef053db94121ce89ee15a14feInner._isAnonymousRecord = true;
RC_f61c868ef053db94121ce89ee15a14feInner.UniqueId = "f61c868e-f053-db94-121c-e89ee15a14fe";
var RC_f61c868ef053db94121ce89ee15a14fe = RC_f61c868ef053db94121ce89ee15a14feInner;
RC_f61c868ef053db94121ce89ee15a14fe.init();
}
});

define("tradershub.model$RL_f63f2b83c2121dc349d7190f0745a6cf", ["exports", "@outsystems/runtime-core-js", "tradershub.model", "tradershub.model$RC_ada7ae2f7fcadfe9ad4cb9dbd1c4caf8"], function (exports, OSRuntimeCore, tradershubModel) {
var OS = OSRuntimeCore;
class RL_f63f2b83c2121dc349d7190f0745a6cf extends 
OS.DataTypes.GenericRecordList {
static getItemType() {
return tradershubModel.RC_ada7ae2f7fcadfe9ad4cb9dbd1c4caf8;
}

}

tradershubModel.RL_f63f2b83c2121dc349d7190f0745a6cf = RL_f63f2b83c2121dc349d7190f0745a6cf;

});

define("tradershub.model$RL_f68517e2c5ded6815f7387dde22dc214", ["exports", "@outsystems/runtime-core-js", "tradershub.model", "tradershub.model$RC_ef663a8259396c6a00c487e0690cdf8c"], function (exports, OSRuntimeCore, tradershubModel) {
var OS = OSRuntimeCore;
class RL_f68517e2c5ded6815f7387dde22dc214 extends 
OS.DataTypes.GenericRecordList {
static getItemType() {
return tradershubModel.RC_ef663a8259396c6a00c487e0690cdf8c;
}

}

tradershubModel.RL_f68517e2c5ded6815f7387dde22dc214 = RL_f68517e2c5ded6815f7387dde22dc214;

});

define("tradershub.model$RL_f6b054c71a69c2b6a6022397c94198cd", ["exports", "@outsystems/runtime-core-js", "tradershub.model", "tradershub.model$RC_bb80a04f7ea6a5bb3d33db9b2bca4c88"], function (exports, OSRuntimeCore, tradershubModel) {
var OS = OSRuntimeCore;
class RL_f6b054c71a69c2b6a6022397c94198cd extends 
OS.DataTypes.GenericRecordList {
static getItemType() {
return tradershubModel.RC_bb80a04f7ea6a5bb3d33db9b2bca4c88;
}

}

tradershubModel.RL_f6b054c71a69c2b6a6022397c94198cd = RL_f6b054c71a69c2b6a6022397c94198cd;

});

define("tradershub.model$RL_f6bc0d68163ce9d4c64ce162194bde5e", ["exports", "@outsystems/runtime-core-js", "tradershub.model", "tradershub.model$RC_070998dc6b3dc951b52d8108550fe380"], function (exports, OSRuntimeCore, tradershubModel) {
var OS = OSRuntimeCore;
class RL_f6bc0d68163ce9d4c64ce162194bde5e extends 
OS.DataTypes.GenericRecordList {
static getItemType() {
return tradershubModel.RC_070998dc6b3dc951b52d8108550fe380;
}

}

tradershubModel.RL_f6bc0d68163ce9d4c64ce162194bde5e = RL_f6bc0d68163ce9d4c64ce162194bde5e;

});

define("tradershub.model$RL_f7fdbb7e9a8e723870f75951d5705c3e", ["exports", "@outsystems/runtime-core-js", "tradershub.model", "tradershub.model$RC_c2cb4dd7ff3a47ae1bb181caacd2a267"], function (exports, OSRuntimeCore, tradershubModel) {
var OS = OSRuntimeCore;
class RL_f7fdbb7e9a8e723870f75951d5705c3e extends 
OS.DataTypes.GenericRecordList {
static getItemType() {
return tradershubModel.RC_c2cb4dd7ff3a47ae1bb181caacd2a267;
}

}

tradershubModel.RL_f7fdbb7e9a8e723870f75951d5705c3e = RL_f7fdbb7e9a8e723870f75951d5705c3e;

});

define("tradershub.model$RL_f895ce68953fdb97b2f37d55699f4e66", ["exports", "@outsystems/runtime-core-js", "tradershub.model", "tradershub.model$RC_4835a3b0a2d4ab28e154f8a8831a00ef"], function (exports, OSRuntimeCore, tradershubModel) {
var OS = OSRuntimeCore;
class RL_f895ce68953fdb97b2f37d55699f4e66 extends 
OS.DataTypes.GenericRecordList {
static getItemType() {
return tradershubModel.RC_4835a3b0a2d4ab28e154f8a8831a00ef;
}

}

tradershubModel.RL_f895ce68953fdb97b2f37d55699f4e66 = RL_f895ce68953fdb97b2f37d55699f4e66;

});

define("tradershub.model$RL_f898b92d666caff04b8ec558b53a2f60", ["exports", "@outsystems/runtime-core-js", "tradershub.model", "tradershub.model$RC_dfe43d1a19f2f910938805ce519a6be0"], function (exports, OSRuntimeCore, tradershubModel) {
var OS = OSRuntimeCore;
class RL_f898b92d666caff04b8ec558b53a2f60 extends 
OS.DataTypes.GenericRecordList {
static getItemType() {
return tradershubModel.RC_dfe43d1a19f2f910938805ce519a6be0;
}

}

tradershubModel.RL_f898b92d666caff04b8ec558b53a2f60 = RL_f898b92d666caff04b8ec558b53a2f60;

});

define("tradershub.model$RL_f8eb431cfa3719b526bb3d4eaa81a60a", ["exports", "@outsystems/runtime-core-js", "RESTAPIWebsocket.model", "tradershub.model", "RESTAPIWebsocket.model$ST_63a473e932ef99f5271718b62399e682Structure", "tradershub.referencesHealth", "tradershub.referencesHealth$RESTAPIWebsocket"], function (exports, OSRuntimeCore, RESTAPIWebsocketModel, tradershubModel) {
var OS = OSRuntimeCore;
class RL_f8eb431cfa3719b526bb3d4eaa81a60a extends 
OS.DataTypes.GenericRecordList {
static getItemType() {
return RESTAPIWebsocketModel.ST_63a473e932ef99f5271718b62399e682Structure;
}

}

tradershubModel.RL_f8eb431cfa3719b526bb3d4eaa81a60a = RL_f8eb431cfa3719b526bb3d4eaa81a60a;

});

define("tradershub.model$RL_f90829e8248d7dd911b648b9522ef82a", ["exports", "@outsystems/runtime-core-js", "OutSystemsUI.model", "tradershub.model", "OutSystemsUI.model$EN_5be8b31925746693c09b3f64c4898006EntityRecord", "tradershub.referencesHealth", "tradershub.referencesHealth$OutSystemsUI"], function (exports, OSRuntimeCore, OutSystemsUIModel, tradershubModel) {
var OS = OSRuntimeCore;
class RL_f90829e8248d7dd911b648b9522ef82a extends 
OS.DataTypes.GenericRecordList {
static getItemType() {
return OutSystemsUIModel.EN_5be8b31925746693c09b3f64c4898006EntityRecord;
}

}

tradershubModel.RL_f90829e8248d7dd911b648b9522ef82a = RL_f90829e8248d7dd911b648b9522ef82a;

});

define("tradershub.model$RC_f92c9dfdeaaba0d06f3a62c3b604cf58", ["exports", "@outsystems/runtime-core-js", "RESTAPIWebsocket.model", "tradershub.model", "RESTAPIWebsocket.model$ST_e5081373b9c17bf97c001a46f1739ffeStructure", "tradershub.referencesHealth", "tradershub.referencesHealth$RESTAPIWebsocket"], function (exports, OSRuntimeCore, RESTAPIWebsocketModel, tradershubModel) {
var OS = OSRuntimeCore;
{class RC_f92c9dfdeaaba0d06f3a62c3b604cf58Inner extends 
OS.DataTypes.GenericRecord {
static attributesToDeclare() {
return [
this.attr("Authorize", "authorizeAttr", "Authorize2", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new RESTAPIWebsocketModel.ST_e5081373b9c17bf97c001a46f1739ffeStructure());
}, true, RESTAPIWebsocketModel.ST_e5081373b9c17bf97c001a46f1739ffeStructure)
].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
}

static fromStructure(str) {
return new RC_f92c9dfdeaaba0d06f3a62c3b604cf58(new RC_f92c9dfdeaaba0d06f3a62c3b604cf58.RecordClass({
authorizeAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
}

}

tradershubModel.RC_f92c9dfdeaaba0d06f3a62c3b604cf58 = RC_f92c9dfdeaaba0d06f3a62c3b604cf58Inner;

RC_f92c9dfdeaaba0d06f3a62c3b604cf58Inner._isAnonymousRecord = true;
RC_f92c9dfdeaaba0d06f3a62c3b604cf58Inner.UniqueId = "f92c9dfd-eaab-a0d0-6f3a-62c3b604cf58";
var RC_f92c9dfdeaaba0d06f3a62c3b604cf58 = RC_f92c9dfdeaaba0d06f3a62c3b604cf58Inner;
RC_f92c9dfdeaaba0d06f3a62c3b604cf58.init();
}
});

define("tradershub.model$RL_f9624ab6e814fdb86dd00a59d573aa8e", ["exports", "@outsystems/runtime-core-js", "OutSystemsUI.model", "tradershub.model", "OutSystemsUI.model$ST_660adb7a9db48bff1b12c6e03515b415Structure", "tradershub.referencesHealth", "tradershub.referencesHealth$OutSystemsUI"], function (exports, OSRuntimeCore, OutSystemsUIModel, tradershubModel) {
var OS = OSRuntimeCore;
class RL_f9624ab6e814fdb86dd00a59d573aa8e extends 
OS.DataTypes.GenericRecordList {
static getItemType() {
return OutSystemsUIModel.ST_660adb7a9db48bff1b12c6e03515b415Structure;
}

}

tradershubModel.RL_f9624ab6e814fdb86dd00a59d573aa8e = RL_f9624ab6e814fdb86dd00a59d573aa8e;

});

define("tradershub.model$RL_f9cd69a99a23afb6393c39463c23b25f", ["exports", "@outsystems/runtime-core-js", "tradershub.model", "tradershub.model$RC_e0e41cb94b033378d9153e95b9660ef9"], function (exports, OSRuntimeCore, tradershubModel) {
var OS = OSRuntimeCore;
class RL_f9cd69a99a23afb6393c39463c23b25f extends 
OS.DataTypes.GenericRecordList {
static getItemType() {
return tradershubModel.RC_e0e41cb94b033378d9153e95b9660ef9;
}

}

tradershubModel.RL_f9cd69a99a23afb6393c39463c23b25f = RL_f9cd69a99a23afb6393c39463c23b25f;

});

define("tradershub.model$RL_fa00e44a222cdab3fe910e0337033680", ["exports", "@outsystems/runtime-core-js", "tradershub.model", "tradershub.model$RC_769b74cf243bca7e23f6d8b3e094aafe"], function (exports, OSRuntimeCore, tradershubModel) {
var OS = OSRuntimeCore;
class RL_fa00e44a222cdab3fe910e0337033680 extends 
OS.DataTypes.GenericRecordList {
static getItemType() {
return tradershubModel.RC_769b74cf243bca7e23f6d8b3e094aafe;
}

}

tradershubModel.RL_fa00e44a222cdab3fe910e0337033680 = RL_fa00e44a222cdab3fe910e0337033680;

});

define("tradershub.model$RL_fa146924f6833ee5375b7cfb2ad97f66", ["exports", "@outsystems/runtime-core-js", "OutSystemsCharts.model", "tradershub.model", "OutSystemsCharts.model$ST_80a54fdc5a44237df505b3e5b63ad0feStructure", "tradershub.referencesHealth", "tradershub.referencesHealth$OutSystemsCharts"], function (exports, OSRuntimeCore, OutSystemsChartsModel, tradershubModel) {
var OS = OSRuntimeCore;
class RL_fa146924f6833ee5375b7cfb2ad97f66 extends 
OS.DataTypes.GenericRecordList {
static getItemType() {
return OutSystemsChartsModel.ST_80a54fdc5a44237df505b3e5b63ad0feStructure;
}

}

tradershubModel.RL_fa146924f6833ee5375b7cfb2ad97f66 = RL_fa146924f6833ee5375b7cfb2ad97f66;

});

define("tradershub.model$RL_fa6777019e2dac1120f9271e79b32cf7", ["exports", "@outsystems/runtime-core-js", "tradershub.model", "tradershub.model$RC_2e794e9950648fb781740aa3223ba10d"], function (exports, OSRuntimeCore, tradershubModel) {
var OS = OSRuntimeCore;
class RL_fa6777019e2dac1120f9271e79b32cf7 extends 
OS.DataTypes.GenericRecordList {
static getItemType() {
return tradershubModel.RC_2e794e9950648fb781740aa3223ba10d;
}

}

tradershubModel.RL_fa6777019e2dac1120f9271e79b32cf7 = RL_fa6777019e2dac1120f9271e79b32cf7;

});

define("tradershub.model$RL_fbb2fb86c40f3e5602392d2ab7885f06", ["exports", "@outsystems/runtime-core-js", "RESTAPIWebsocket.model", "tradershub.model", "RESTAPIWebsocket.model$ST_b47d3155c531939aabdd10ec3a99049dStructure", "tradershub.referencesHealth", "tradershub.referencesHealth$RESTAPIWebsocket"], function (exports, OSRuntimeCore, RESTAPIWebsocketModel, tradershubModel) {
var OS = OSRuntimeCore;
class RL_fbb2fb86c40f3e5602392d2ab7885f06 extends 
OS.DataTypes.GenericRecordList {
static getItemType() {
return RESTAPIWebsocketModel.ST_b47d3155c531939aabdd10ec3a99049dStructure;
}

}

tradershubModel.RL_fbb2fb86c40f3e5602392d2ab7885f06 = RL_fbb2fb86c40f3e5602392d2ab7885f06;

});

define("tradershub.model$RL_fbc9fc52e3cef45822e06efc69df5a4a", ["exports", "@outsystems/runtime-core-js", "tradershub.model", "tradershub.model$RC_f61c868ef053db94121ce89ee15a14fe"], function (exports, OSRuntimeCore, tradershubModel) {
var OS = OSRuntimeCore;
class RL_fbc9fc52e3cef45822e06efc69df5a4a extends 
OS.DataTypes.GenericRecordList {
static getItemType() {
return tradershubModel.RC_f61c868ef053db94121ce89ee15a14fe;
}

}

tradershubModel.RL_fbc9fc52e3cef45822e06efc69df5a4a = RL_fbc9fc52e3cef45822e06efc69df5a4a;

});

define("tradershub.model$RL_fc144e04b60a1ff1da29c01dfb2812e3", ["exports", "@outsystems/runtime-core-js", "OutSystemsMaps.model", "tradershub.model", "OutSystemsMaps.model$ST_7f8762cb0c77867d9f9e3b82fd927c7bStructure", "tradershub.referencesHealth", "tradershub.referencesHealth$OutSystemsMaps"], function (exports, OSRuntimeCore, OutSystemsMapsModel, tradershubModel) {
var OS = OSRuntimeCore;
class RL_fc144e04b60a1ff1da29c01dfb2812e3 extends 
OS.DataTypes.GenericRecordList {
static getItemType() {
return OutSystemsMapsModel.ST_7f8762cb0c77867d9f9e3b82fd927c7bStructure;
}

}

tradershubModel.RL_fc144e04b60a1ff1da29c01dfb2812e3 = RL_fc144e04b60a1ff1da29c01dfb2812e3;

});

define("tradershub.model$RL_fc38e6f89351720db0f337cc300634ad", ["exports", "@outsystems/runtime-core-js", "tradershub.model", "tradershub.model$RC_e1514a5df394d2318b57f04b73e74172"], function (exports, OSRuntimeCore, tradershubModel) {
var OS = OSRuntimeCore;
class RL_fc38e6f89351720db0f337cc300634ad extends 
OS.DataTypes.GenericRecordList {
static getItemType() {
return tradershubModel.RC_e1514a5df394d2318b57f04b73e74172;
}

}

tradershubModel.RL_fc38e6f89351720db0f337cc300634ad = RL_fc38e6f89351720db0f337cc300634ad;

});

define("tradershub.model$RL_fc9a0541e530960ed38d7662d5b2141b", ["exports", "@outsystems/runtime-core-js", "System_.model", "tradershub.model", "System_.model$ChangePasswordResultRec", "tradershub.referencesHealth", "tradershub.referencesHealth$System_"], function (exports, OSRuntimeCore, System_Model, tradershubModel) {
var OS = OSRuntimeCore;
class RL_fc9a0541e530960ed38d7662d5b2141b extends 
OS.DataTypes.GenericRecordList {
static getItemType() {
return OS.SystemStructures.ChangePasswordResultRec;
}

}

tradershubModel.RL_fc9a0541e530960ed38d7662d5b2141b = RL_fc9a0541e530960ed38d7662d5b2141b;

});

define("tradershub.model$RL_fca3607c6d54863878369f2fe3a05b5b", ["exports", "@outsystems/runtime-core-js", "tradershub.model", "tradershub.model$RC_f92c9dfdeaaba0d06f3a62c3b604cf58"], function (exports, OSRuntimeCore, tradershubModel) {
var OS = OSRuntimeCore;
class RL_fca3607c6d54863878369f2fe3a05b5b extends 
OS.DataTypes.GenericRecordList {
static getItemType() {
return tradershubModel.RC_f92c9dfdeaaba0d06f3a62c3b604cf58;
}

}

tradershubModel.RL_fca3607c6d54863878369f2fe3a05b5b = RL_fca3607c6d54863878369f2fe3a05b5b;

});

define("tradershub.model$RL_fced28719a91c598d8625322837974e1", ["exports", "@outsystems/runtime-core-js", "tradershub.model", "tradershub.model$RC_a9755f38b0542dfb6acdd8617637c169"], function (exports, OSRuntimeCore, tradershubModel) {
var OS = OSRuntimeCore;
class RL_fced28719a91c598d8625322837974e1 extends 
OS.DataTypes.GenericRecordList {
static getItemType() {
return tradershubModel.RC_a9755f38b0542dfb6acdd8617637c169;
}

}

tradershubModel.RL_fced28719a91c598d8625322837974e1 = RL_fced28719a91c598d8625322837974e1;

});

define("tradershub.model$RL_fea339219699b0d78ea5a0c4450d0c70", ["exports", "@outsystems/runtime-core-js", "OutSystemsUI.model", "tradershub.model", "OutSystemsUI.model$ST_4e53cb8815b86020ced1d2f2652c9b1dStructure", "tradershub.referencesHealth", "tradershub.referencesHealth$OutSystemsUI"], function (exports, OSRuntimeCore, OutSystemsUIModel, tradershubModel) {
var OS = OSRuntimeCore;
class RL_fea339219699b0d78ea5a0c4450d0c70 extends 
OS.DataTypes.GenericRecordList {
static getItemType() {
return OutSystemsUIModel.ST_4e53cb8815b86020ced1d2f2652c9b1dStructure;
}

}

tradershubModel.RL_fea339219699b0d78ea5a0c4450d0c70 = RL_fea339219699b0d78ea5a0c4450d0c70;

});

define("tradershub.model$RL_ff2a65fc15922fd22d079e4030327d06", ["exports", "@outsystems/runtime-core-js", "tradershub.model", "tradershub.model$EN_09277b6b86cf80f882c3c457ae17c01aEntityRecord"], function (exports, OSRuntimeCore, tradershubModel) {
var OS = OSRuntimeCore;
class RL_ff2a65fc15922fd22d079e4030327d06 extends 
OS.DataTypes.GenericRecordList {
static getItemType() {
return tradershubModel.EN_09277b6b86cf80f882c3c457ae17c01aEntityRecord;
}

}

tradershubModel.RL_ff2a65fc15922fd22d079e4030327d06 = RL_ff2a65fc15922fd22d079e4030327d06;

});

define("tradershub.model$RL_ff39d89ca5658ac626216dd239a672b6", ["exports", "@outsystems/runtime-core-js", "tradershub.model", "tradershub.model$RC_6e1f0438d22a91c1efeed32ff818a6bb"], function (exports, OSRuntimeCore, tradershubModel) {
var OS = OSRuntimeCore;
class RL_ff39d89ca5658ac626216dd239a672b6 extends 
OS.DataTypes.GenericRecordList {
static getItemType() {
return tradershubModel.RC_6e1f0438d22a91c1efeed32ff818a6bb;
}

}

tradershubModel.RL_ff39d89ca5658ac626216dd239a672b6 = RL_ff39d89ca5658ac626216dd239a672b6;

});

define("tradershub.model$RL_ff5ba20b0d42d4170d7b63779346dc5d", ["exports", "@outsystems/runtime-core-js", "tradershub.model", "tradershub.model$RC_3d7c5be4055c8fe2c227afc40d8dee2f"], function (exports, OSRuntimeCore, tradershubModel) {
var OS = OSRuntimeCore;
class RL_ff5ba20b0d42d4170d7b63779346dc5d extends 
OS.DataTypes.GenericRecordList {
static getItemType() {
return tradershubModel.RC_3d7c5be4055c8fe2c227afc40d8dee2f;
}

}

tradershubModel.RL_ff5ba20b0d42d4170d7b63779346dc5d = RL_ff5ba20b0d42d4170d7b63779346dc5d;

});

define("tradershub.model$RL_ff60386df61c0cf148061629ea7f9b78", ["exports", "@outsystems/runtime-core-js", "tradershub.model", "tradershub.model$RC_2d331d34aa02e5b2741655b3ecf842bf"], function (exports, OSRuntimeCore, tradershubModel) {
var OS = OSRuntimeCore;
class RL_ff60386df61c0cf148061629ea7f9b78 extends 
OS.DataTypes.GenericRecordList {
static getItemType() {
return tradershubModel.RC_2d331d34aa02e5b2741655b3ecf842bf;
}

}

tradershubModel.RL_ff60386df61c0cf148061629ea7f9b78 = RL_ff60386df61c0cf148061629ea7f9b78;

});

define("tradershub.model$RL_ff93ddb23ad1a28af46fae42cf98bb8c", ["exports", "@outsystems/runtime-core-js", "tradershub.model", "tradershub.model$RC_59608f6fdf263bd270d8edd0a1db0f3c"], function (exports, OSRuntimeCore, tradershubModel) {
var OS = OSRuntimeCore;
class RL_ff93ddb23ad1a28af46fae42cf98bb8c extends 
OS.DataTypes.GenericRecordList {
static getItemType() {
return tradershubModel.RC_59608f6fdf263bd270d8edd0a1db0f3c;
}

}

tradershubModel.RL_ff93ddb23ad1a28af46fae42cf98bb8c = RL_ff93ddb23ad1a28af46fae42cf98bb8c;

});

define("tradershub.model$RL_fff77ec615be0e1e441a98afc10c6f02", ["exports", "@outsystems/runtime-core-js", "tradershub.model", "tradershub.model$RC_d509bf89cda09ba78055eb96d496078b"], function (exports, OSRuntimeCore, tradershubModel) {
var OS = OSRuntimeCore;
class RL_fff77ec615be0e1e441a98afc10c6f02 extends 
OS.DataTypes.GenericRecordList {
static getItemType() {
return tradershubModel.RC_d509bf89cda09ba78055eb96d496078b;
}

}

tradershubModel.RL_fff77ec615be0e1e441a98afc10c6f02 = RL_fff77ec615be0e1e441a98afc10c6f02;

});

define("tradershub.model", ["exports", "@outsystems/runtime-core-js"], function (exports, OSRuntimeCore) {
var OS = OSRuntimeCore;
var tradershubModel = exports;
Object.defineProperty(tradershubModel, "module", {
get: function () {
return OS.ApplicationInfo.getModules()["2ad446d5-32d7-4fbf-959d-82d8325bcfbc"];
}
});

tradershubModel.staticEntities = {};
tradershubModel.staticEntities.educationlevel = {};
var getEducationlevelRecord = function (record) {
return tradershubModel.module.staticEntities["07c05b80-34b5-4d14-b7df-6ef507982115"][record];
};
Object.defineProperty(tradershubModel.staticEntities.educationlevel, "tertiary", {
get: function () {
return 3;
}
});

Object.defineProperty(tradershubModel.staticEntities.educationlevel, "primary", {
get: function () {
return 1;
}
});

Object.defineProperty(tradershubModel.staticEntities.educationlevel, "secondary", {
get: function () {
return 2;
}
});

tradershubModel.staticEntities.anticipatedannualturnover = {};
var getAnticipatedannualturnoverRecord = function (record) {
return tradershubModel.module.staticEntities["2c751117-ef82-4917-8439-1569eee23ea8"][record];
};
Object.defineProperty(tradershubModel.staticEntities.anticipatedannualturnover, "record3", {
get: function () {
return 3;
}
});

Object.defineProperty(tradershubModel.staticEntities.anticipatedannualturnover, "record5", {
get: function () {
return 5;
}
});

Object.defineProperty(tradershubModel.staticEntities.anticipatedannualturnover, "record1", {
get: function () {
return 1;
}
});

Object.defineProperty(tradershubModel.staticEntities.anticipatedannualturnover, "record2", {
get: function () {
return 2;
}
});

Object.defineProperty(tradershubModel.staticEntities.anticipatedannualturnover, "record4", {
get: function () {
return 4;
}
});

tradershubModel.staticEntities.employmentStatus = {};
var getEmploymentStatusRecord = function (record) {
return tradershubModel.module.staticEntities["446346ac-ff58-4797-b640-b791310516df"][record];
};
Object.defineProperty(tradershubModel.staticEntities.employmentStatus, "unemployed", {
get: function () {
return "unemployed";
}
});

Object.defineProperty(tradershubModel.staticEntities.employmentStatus, "pensioner", {
get: function () {
return "pensioner";
}
});

Object.defineProperty(tradershubModel.staticEntities.employmentStatus, "student", {
get: function () {
return "student";
}
});

Object.defineProperty(tradershubModel.staticEntities.employmentStatus, "selfEmployed", {
get: function () {
return "self-employed";
}
});

Object.defineProperty(tradershubModel.staticEntities.employmentStatus, "employed", {
get: function () {
return "employed";
}
});

tradershubModel.staticEntities.currencies = {};
var getCurrenciesRecord = function (record) {
return tradershubModel.module.staticEntities["55b1540e-4d5d-4539-adef-3e73c947985a"][record];
};
Object.defineProperty(tradershubModel.staticEntities.currencies, "bitcoin", {
get: function () {
return 2;
}
});

Object.defineProperty(tradershubModel.staticEntities.currencies, "uSDCoin", {
get: function () {
return 7;
}
});

Object.defineProperty(tradershubModel.staticEntities.currencies, "litecoin", {
get: function () {
return 6;
}
});

Object.defineProperty(tradershubModel.staticEntities.currencies, "poundSterling", {
get: function () {
return 4;
}
});

Object.defineProperty(tradershubModel.staticEntities.currencies, "ethereum", {
get: function () {
return 5;
}
});

Object.defineProperty(tradershubModel.staticEntities.currencies, "rippleXRP", {
get: function () {
return 10;
}
});

Object.defineProperty(tradershubModel.staticEntities.currencies, "uSD", {
get: function () {
return 1;
}
});

Object.defineProperty(tradershubModel.staticEntities.currencies, "euro", {
get: function () {
return 3;
}
});

Object.defineProperty(tradershubModel.staticEntities.currencies, "tetherERC20", {
get: function () {
return 8;
}
});

Object.defineProperty(tradershubModel.staticEntities.currencies, "tetherTRC20", {
get: function () {
return 9;
}
});

tradershubModel.staticEntities.employmentIndustry = {};
var getEmploymentIndustryRecord = function (record) {
return tradershubModel.module.staticEntities["5e5309a1-1374-4e3a-ab8d-35b8f08f176e"][record];
};
Object.defineProperty(tradershubModel.staticEntities.employmentIndustry, "finance", {
get: function () {
return 3;
}
});

Object.defineProperty(tradershubModel.staticEntities.employmentIndustry, "tourism", {
get: function () {
return 5;
}
});

Object.defineProperty(tradershubModel.staticEntities.employmentIndustry, "realEstate", {
get: function () {
return 10;
}
});

Object.defineProperty(tradershubModel.staticEntities.employmentIndustry, "legal", {
get: function () {
return 8;
}
});

Object.defineProperty(tradershubModel.staticEntities.employmentIndustry, "education", {
get: function () {
return 2;
}
});

Object.defineProperty(tradershubModel.staticEntities.employmentIndustry, "informationCommunicationsTechnology", {
get: function () {
return 6;
}
});

Object.defineProperty(tradershubModel.staticEntities.employmentIndustry, "health", {
get: function () {
return 4;
}
});

Object.defineProperty(tradershubModel.staticEntities.employmentIndustry, "scienceEngineering", {
get: function () {
return 7;
}
});

Object.defineProperty(tradershubModel.staticEntities.employmentIndustry, "socialCultural", {
get: function () {
return 9;
}
});

Object.defineProperty(tradershubModel.staticEntities.employmentIndustry, "manufacturing", {
get: function () {
return 11;
}
});

Object.defineProperty(tradershubModel.staticEntities.employmentIndustry, "unemployed", {
get: function () {
return 12;
}
});

Object.defineProperty(tradershubModel.staticEntities.employmentIndustry, "construction", {
get: function () {
return 1;
}
});

tradershubModel.staticEntities.netannualincome = {};
var getNetannualincomeRecord = function (record) {
return tradershubModel.module.staticEntities["66e3fd00-954a-49f5-b631-555ef5789a13"][record];
};
Object.defineProperty(tradershubModel.staticEntities.netannualincome, "twentyfive", {
get: function () {
return 2;
}
});

Object.defineProperty(tradershubModel.staticEntities.netannualincome, "record2", {
get: function () {
return 4;
}
});

Object.defineProperty(tradershubModel.staticEntities.netannualincome, "record3", {
get: function () {
return 5;
}
});

Object.defineProperty(tradershubModel.staticEntities.netannualincome, "record1", {
get: function () {
return 3;
}
});

Object.defineProperty(tradershubModel.staticEntities.netannualincome, "lessthan_25_000", {
get: function () {
return 1;
}
});

tradershubModel.staticEntities.estimatednetworth = {};
var getEstimatednetworthRecord = function (record) {
return tradershubModel.module.staticEntities["687c474c-d300-4484-ae6d-17a477332ce0"][record];
};
Object.defineProperty(tradershubModel.staticEntities.estimatednetworth, "record4", {
get: function () {
return 4;
}
});

Object.defineProperty(tradershubModel.staticEntities.estimatednetworth, "record1", {
get: function () {
return 1;
}
});

Object.defineProperty(tradershubModel.staticEntities.estimatednetworth, "record3", {
get: function () {
return 3;
}
});

Object.defineProperty(tradershubModel.staticEntities.estimatednetworth, "record5", {
get: function () {
return 5;
}
});

Object.defineProperty(tradershubModel.staticEntities.estimatednetworth, "record2", {
get: function () {
return 2;
}
});

tradershubModel.staticEntities.documentTypes = {};
var getDocumentTypesRecord = function (record) {
return tradershubModel.module.staticEntities["9b52493d-9bbb-4061-876c-f35885ed4466"][record];
};
Object.defineProperty(tradershubModel.staticEntities.documentTypes, "corporate", {
get: function () {
return 2;
}
});

Object.defineProperty(tradershubModel.staticEntities.documentTypes, "driverLicence", {
get: function () {
return 3;
}
});

Object.defineProperty(tradershubModel.staticEntities.documentTypes, "passport", {
get: function () {
return 1;
}
});

Object.defineProperty(tradershubModel.staticEntities.documentTypes, "nationID", {
get: function () {
return 4;
}
});

Object.defineProperty(tradershubModel.staticEntities.documentTypes, "nationalIDSlip", {
get: function () {
return 5;
}
});

tradershubModel.staticEntities.occupation = {};
var getOccupationRecord = function (record) {
return tradershubModel.module.staticEntities["9eda33c3-0ddd-4a67-b350-d154bc1c6706"][record];
};
Object.defineProperty(tradershubModel.staticEntities.occupation, "students", {
get: function () {
return 13;
}
});

Object.defineProperty(tradershubModel.staticEntities.occupation, "craft_Metal_ElectricalandElectronicsWorkers", {
get: function () {
return 8;
}
});

Object.defineProperty(tradershubModel.staticEntities.occupation, "professionals", {
get: function () {
return 4;
}
});

Object.defineProperty(tradershubModel.staticEntities.occupation, "cleanersandHelpers", {
get: function () {
return 10;
}
});

Object.defineProperty(tradershubModel.staticEntities.occupation, "armedForces", {
get: function () {
return 12;
}
});

Object.defineProperty(tradershubModel.staticEntities.occupation, "cLevel", {
get: function () {
return 2;
}
});

Object.defineProperty(tradershubModel.staticEntities.occupation, "plantandMachineOperatorsandAssemblers", {
get: function () {
return 9;
}
});

Object.defineProperty(tradershubModel.staticEntities.occupation, "agricultural_ForestryandFisheryWorkers", {
get: function () {
return 7;
}
});

Object.defineProperty(tradershubModel.staticEntities.occupation, "clerks", {
get: function () {
return 5;
}
});

Object.defineProperty(tradershubModel.staticEntities.occupation, "personalCare_SalesandServiceWorkers", {
get: function () {
return 6;
}
});

Object.defineProperty(tradershubModel.staticEntities.occupation, "managers", {
get: function () {
return 3;
}
});

Object.defineProperty(tradershubModel.staticEntities.occupation, "mining_Construction_ManufacturingandTransportWorke", {
get: function () {
return 11;
}
});

tradershubModel.staticEntities.sourceOfIncome = {};
var getSourceOfIncomeRecord = function (record) {
return tradershubModel.module.staticEntities["a0145b27-a701-4f9c-a880-a1a10c839644"][record];
};
Object.defineProperty(tradershubModel.staticEntities.sourceOfIncome, "pension", {
get: function () {
return 4;
}
});

Object.defineProperty(tradershubModel.staticEntities.sourceOfIncome, "investmentsAndDividends", {
get: function () {
return 3;
}
});

Object.defineProperty(tradershubModel.staticEntities.sourceOfIncome, "selfEmployed", {
get: function () {
return 2;
}
});

Object.defineProperty(tradershubModel.staticEntities.sourceOfIncome, "savingsAndInheritance", {
get: function () {
return 6;
}
});

Object.defineProperty(tradershubModel.staticEntities.sourceOfIncome, "stateBenefits", {
get: function () {
return 5;
}
});

Object.defineProperty(tradershubModel.staticEntities.sourceOfIncome, "salariesEmployee", {
get: function () {
return 1;
}
});

tradershubModel.staticEntities.sourceofwealth = {};
var getSourceofwealthRecord = function (record) {
return tradershubModel.module.staticEntities["f93c5058-8004-46b9-8bdc-11908b0d9632"][record];
};
Object.defineProperty(tradershubModel.staticEntities.sourceofwealth, "cashbusiness", {
get: function () {
return 2;
}
});

Object.defineProperty(tradershubModel.staticEntities.sourceofwealth, "inheritance", {
get: function () {
return 5;
}
});

Object.defineProperty(tradershubModel.staticEntities.sourceofwealth, "accumulationofincome_Savings", {
get: function () {
return 1;
}
});

Object.defineProperty(tradershubModel.staticEntities.sourceofwealth, "companyownership", {
get: function () {
return 3;
}
});

Object.defineProperty(tradershubModel.staticEntities.sourceofwealth, "divorcesettlement", {
get: function () {
return 4;
}
});

Object.defineProperty(tradershubModel.staticEntities.sourceofwealth, "saleofproperty", {
get: function () {
return 7;
}
});

Object.defineProperty(tradershubModel.staticEntities.sourceofwealth, "investmentincome", {
get: function () {
return 6;
}
});

tradershubModel.staticEntities.stackingType_v1 = {};
var getStackingType_v1Record = function (record) {
return OS.ApplicationInfo.getModules()["38b70e23-50fc-4710-80cf-3682a9dc998a"].staticEntities["1aaafcbe-99a5-4857-83f2-e4754e65edcf"][record];
};
Object.defineProperty(tradershubModel.staticEntities.stackingType_v1, "stacked100Percent", {
get: function () {
return 3;
}
});

Object.defineProperty(tradershubModel.staticEntities.stackingType_v1, "noStacking", {
get: function () {
return 1;
}
});

Object.defineProperty(tradershubModel.staticEntities.stackingType_v1, "stacked", {
get: function () {
return 2;
}
});

tradershubModel.staticEntities.legendPosition_v1 = {};
var getLegendPosition_v1Record = function (record) {
return OS.ApplicationInfo.getModules()["38b70e23-50fc-4710-80cf-3682a9dc998a"].staticEntities["6f55558f-9a5c-49bb-bc32-8180c0ac0d73"][record];
};
Object.defineProperty(tradershubModel.staticEntities.legendPosition_v1, "bottom", {
get: function () {
return "Bottom";
}
});

Object.defineProperty(tradershubModel.staticEntities.legendPosition_v1, "right", {
get: function () {
return "Right";
}
});

Object.defineProperty(tradershubModel.staticEntities.legendPosition_v1, "inside", {
get: function () {
return "Inside";
}
});

Object.defineProperty(tradershubModel.staticEntities.legendPosition_v1, "left", {
get: function () {
return "Left";
}
});

Object.defineProperty(tradershubModel.staticEntities.legendPosition_v1, "hidden", {
get: function () {
return "Hidden";
}
});

Object.defineProperty(tradershubModel.staticEntities.legendPosition_v1, "top", {
get: function () {
return "Top";
}
});

tradershubModel.staticEntities.xAxisValuesType_v1 = {};
var getXAxisValuesType_v1Record = function (record) {
return OS.ApplicationInfo.getModules()["38b70e23-50fc-4710-80cf-3682a9dc998a"].staticEntities["e24bffa0-82f5-4cd2-9d43-97b142649f77"][record];
};
Object.defineProperty(tradershubModel.staticEntities.xAxisValuesType_v1, "text", {
get: function () {
return 3;
}
});

Object.defineProperty(tradershubModel.staticEntities.xAxisValuesType_v1, "auto", {
get: function () {
return 4;
}
});

tradershubModel.staticEntities.consoleErrorType2 = {};
var getConsoleErrorType2Record = function (record) {
return OS.ApplicationInfo.getModules()["7f7c3cd2-279d-4fb8-b978-c1ee91ff0d4f"].staticEntities["18eef253-4376-4287-8f3a-dedb635f5e6d"][record];
};
Object.defineProperty(tradershubModel.staticEntities.consoleErrorType2, "error", {
get: function () {
return 2;
}
});

Object.defineProperty(tradershubModel.staticEntities.consoleErrorType2, "warning", {
get: function () {
return 1;
}
});

Object.defineProperty(tradershubModel.staticEntities.consoleErrorType2, "information", {
get: function () {
return 0;
}
});

tradershubModel.staticEntities.animationType = {};
var getAnimationTypeRecord = function (record) {
return OS.ApplicationInfo.getModules()["8be17f2a-431c-4958-b894-c77b988a7271"].staticEntities["0463d449-6834-40d5-817b-3d74d1a71bb2"][record];
};
Object.defineProperty(tradershubModel.staticEntities.animationType, "topToBottom", {
get: function () {
return "top-to-bottom";
}
});

Object.defineProperty(tradershubModel.staticEntities.animationType, "bounce", {
get: function () {
return "bounce";
}
});

Object.defineProperty(tradershubModel.staticEntities.animationType, "fadeIn", {
get: function () {
return "fade-in";
}
});

Object.defineProperty(tradershubModel.staticEntities.animationType, "scaleDown", {
get: function () {
return "scale-down";
}
});

Object.defineProperty(tradershubModel.staticEntities.animationType, "scale", {
get: function () {
return "scale";
}
});

Object.defineProperty(tradershubModel.staticEntities.animationType, "spinner", {
get: function () {
return "spinner";
}
});

Object.defineProperty(tradershubModel.staticEntities.animationType, "bottomToTop", {
get: function () {
return "bottom-to-top";
}
});

Object.defineProperty(tradershubModel.staticEntities.animationType, "rightToLeft", {
get: function () {
return "right-to-left";
}
});

Object.defineProperty(tradershubModel.staticEntities.animationType, "leftToRight", {
get: function () {
return "left-to-right";
}
});

tradershubModel.staticEntities.speed = {};
var getSpeedRecord = function (record) {
return OS.ApplicationInfo.getModules()["8be17f2a-431c-4958-b894-c77b988a7271"].staticEntities["0a5cc4ae-b54f-4ea3-9ace-9f49c7724606"][record];
};
Object.defineProperty(tradershubModel.staticEntities.speed, "fast", {
get: function () {
return "fast";
}
});

Object.defineProperty(tradershubModel.staticEntities.speed, "normal", {
get: function () {
return "normal";
}
});

Object.defineProperty(tradershubModel.staticEntities.speed, "slow", {
get: function () {
return "slow";
}
});

tradershubModel.staticEntities.sideMenuBehavior = {};
var getSideMenuBehaviorRecord = function (record) {
return OS.ApplicationInfo.getModules()["8be17f2a-431c-4958-b894-c77b988a7271"].staticEntities["11a5937b-e94d-4250-99a8-9c8358d3d965"][record];
};
Object.defineProperty(tradershubModel.staticEntities.sideMenuBehavior, "visible", {
get: function () {
return "aside-visible";
}
});

Object.defineProperty(tradershubModel.staticEntities.sideMenuBehavior, "expandable", {
get: function () {
return "aside-expandable";
}
});

Object.defineProperty(tradershubModel.staticEntities.sideMenuBehavior, "overlay", {
get: function () {
return "aside-overlay";
}
});

tradershubModel.staticEntities.size = {};
var getSizeRecord = function (record) {
return OS.ApplicationInfo.getModules()["8be17f2a-431c-4958-b894-c77b988a7271"].staticEntities["1ac110b4-8964-470b-a6b2-81ae4a6b5bde"][record];
};
Object.defineProperty(tradershubModel.staticEntities.size, "medium", {
get: function () {
return "medium";
}
});

Object.defineProperty(tradershubModel.staticEntities.size, "small", {
get: function () {
return "small";
}
});

tradershubModel.staticEntities.deviceResponsive = {};
var getDeviceResponsiveRecord = function (record) {
return OS.ApplicationInfo.getModules()["8be17f2a-431c-4958-b894-c77b988a7271"].staticEntities["29468e1d-a25a-42c3-bf53-b232accc150d"][record];
};
Object.defineProperty(tradershubModel.staticEntities.deviceResponsive, "desktopAndTablet", {
get: function () {
return "DesktopAndTablet";
}
});

Object.defineProperty(tradershubModel.staticEntities.deviceResponsive, "tabletOnly", {
get: function () {
return "TabletOnly";
}
});

Object.defineProperty(tradershubModel.staticEntities.deviceResponsive, "allDevices", {
get: function () {
return "AllDevices";
}
});

Object.defineProperty(tradershubModel.staticEntities.deviceResponsive, "phoneOnly", {
get: function () {
return "PhoneOnly";
}
});

Object.defineProperty(tradershubModel.staticEntities.deviceResponsive, "tabletAndPhone", {
get: function () {
return "TabletAndPhone";
}
});

Object.defineProperty(tradershubModel.staticEntities.deviceResponsive, "desktopOnly", {
get: function () {
return "DesktopOnly";
}
});

tradershubModel.staticEntities.gutterSize = {};
var getGutterSizeRecord = function (record) {
return OS.ApplicationInfo.getModules()["8be17f2a-431c-4958-b894-c77b988a7271"].staticEntities["2e81a1e8-4fa4-4bd0-a945-65352999b0be"][record];
};
Object.defineProperty(tradershubModel.staticEntities.gutterSize, "xXLarge", {
get: function () {
return "gutter-xxl";
}
});

Object.defineProperty(tradershubModel.staticEntities.gutterSize, "medium", {
get: function () {
return "gutter-m";
}
});

Object.defineProperty(tradershubModel.staticEntities.gutterSize, "none", {
get: function () {
return "gutter-none";
}
});

Object.defineProperty(tradershubModel.staticEntities.gutterSize, "extraLarge", {
get: function () {
return "gutter-xl";
}
});

Object.defineProperty(tradershubModel.staticEntities.gutterSize, "small", {
get: function () {
return "gutter-s";
}
});

Object.defineProperty(tradershubModel.staticEntities.gutterSize, "large", {
get: function () {
return "gutter-l";
}
});

Object.defineProperty(tradershubModel.staticEntities.gutterSize, "base", {
get: function () {
return "gutter-base";
}
});

Object.defineProperty(tradershubModel.staticEntities.gutterSize, "extraSmall", {
get: function () {
return "gutter-xs";
}
});

tradershubModel.staticEntities.month = {};
var getMonthRecord = function (record) {
return OS.ApplicationInfo.getModules()["8be17f2a-431c-4958-b894-c77b988a7271"].staticEntities["33d9b724-a0b1-4b0a-91fb-272143c44a85"][record];
};
Object.defineProperty(tradershubModel.staticEntities.month, "june", {
get: function () {
return "June";
}
});

Object.defineProperty(tradershubModel.staticEntities.month, "march", {
get: function () {
return "March";
}
});

Object.defineProperty(tradershubModel.staticEntities.month, "december", {
get: function () {
return "December";
}
});

Object.defineProperty(tradershubModel.staticEntities.month, "february", {
get: function () {
return "February";
}
});

Object.defineProperty(tradershubModel.staticEntities.month, "may", {
get: function () {
return "May";
}
});

Object.defineProperty(tradershubModel.staticEntities.month, "april", {
get: function () {
return "April";
}
});

Object.defineProperty(tradershubModel.staticEntities.month, "november", {
get: function () {
return "November";
}
});

Object.defineProperty(tradershubModel.staticEntities.month, "august", {
get: function () {
return "August";
}
});

Object.defineProperty(tradershubModel.staticEntities.month, "january", {
get: function () {
return "January";
}
});

Object.defineProperty(tradershubModel.staticEntities.month, "july", {
get: function () {
return "July";
}
});

Object.defineProperty(tradershubModel.staticEntities.month, "september", {
get: function () {
return "September";
}
});

Object.defineProperty(tradershubModel.staticEntities.month, "october", {
get: function () {
return "October";
}
});

tradershubModel.staticEntities.datePickerLanguage = {};
var getDatePickerLanguageRecord = function (record) {
return OS.ApplicationInfo.getModules()["8be17f2a-431c-4958-b894-c77b988a7271"].staticEntities["45402ee4-73bf-42a2-b5f8-371ae940bf4f"][record];
};
Object.defineProperty(tradershubModel.staticEntities.datePickerLanguage, "japanese", {
get: function () {
return "ja";
}
});

Object.defineProperty(tradershubModel.staticEntities.datePickerLanguage, "dutchFlemish", {
get: function () {
return "nl";
}
});

Object.defineProperty(tradershubModel.staticEntities.datePickerLanguage, "czech", {
get: function () {
return "cs";
}
});

Object.defineProperty(tradershubModel.staticEntities.datePickerLanguage, "indonesian", {
get: function () {
return "id";
}
});

Object.defineProperty(tradershubModel.staticEntities.datePickerLanguage, "punjabiPanjabi", {
get: function () {
return "pa";
}
});

Object.defineProperty(tradershubModel.staticEntities.datePickerLanguage, "latvian", {
get: function () {
return "lv";
}
});

Object.defineProperty(tradershubModel.staticEntities.datePickerLanguage, "chinese", {
get: function () {
return "zh";
}
});

Object.defineProperty(tradershubModel.staticEntities.datePickerLanguage, "polish", {
get: function () {
return "pl";
}
});

Object.defineProperty(tradershubModel.staticEntities.datePickerLanguage, "estonian", {
get: function () {
return "et";
}
});

Object.defineProperty(tradershubModel.staticEntities.datePickerLanguage, "catalanValencian", {
get: function () {
return "ca";
}
});

Object.defineProperty(tradershubModel.staticEntities.datePickerLanguage, "malay", {
get: function () {
return "ms";
}
});

Object.defineProperty(tradershubModel.staticEntities.datePickerLanguage, "slovak", {
get: function () {
return "sk";
}
});

Object.defineProperty(tradershubModel.staticEntities.datePickerLanguage, "sinhalaSinhalese", {
get: function () {
return "si";
}
});

Object.defineProperty(tradershubModel.staticEntities.datePickerLanguage, "danish", {
get: function () {
return "da";
}
});

Object.defineProperty(tradershubModel.staticEntities.datePickerLanguage, "english", {
get: function () {
return "en";
}
});

Object.defineProperty(tradershubModel.staticEntities.datePickerLanguage, "hungarian", {
get: function () {
return "hu";
}
});

Object.defineProperty(tradershubModel.staticEntities.datePickerLanguage, "norwegianNynorsk", {
get: function () {
return "nn";
}
});

Object.defineProperty(tradershubModel.staticEntities.datePickerLanguage, "norwegianBokmal", {
get: function () {
return "nb";
}
});

Object.defineProperty(tradershubModel.staticEntities.datePickerLanguage, "arabic", {
get: function () {
return "ar";
}
});

Object.defineProperty(tradershubModel.staticEntities.datePickerLanguage, "faroese", {
get: function () {
return "fo";
}
});

Object.defineProperty(tradershubModel.staticEntities.datePickerLanguage, "centralKhmer", {
get: function () {
return "km";
}
});

Object.defineProperty(tradershubModel.staticEntities.datePickerLanguage, "romanianMoldavianMoldovan", {
get: function () {
return "ro";
}
});

Object.defineProperty(tradershubModel.staticEntities.datePickerLanguage, "chineseTraditional", {
get: function () {
return "zh_tw";
}
});

Object.defineProperty(tradershubModel.staticEntities.datePickerLanguage, "norwegian", {
get: function () {
return "no";
}
});

Object.defineProperty(tradershubModel.staticEntities.datePickerLanguage, "esperanto", {
get: function () {
return "eo";
}
});

Object.defineProperty(tradershubModel.staticEntities.datePickerLanguage, "croatian", {
get: function () {
return "hr";
}
});

Object.defineProperty(tradershubModel.staticEntities.datePickerLanguage, "albanian", {
get: function () {
return "sq";
}
});

Object.defineProperty(tradershubModel.staticEntities.datePickerLanguage, "korean", {
get: function () {
return "ko";
}
});

Object.defineProperty(tradershubModel.staticEntities.datePickerLanguage, "thai", {
get: function () {
return "th";
}
});

Object.defineProperty(tradershubModel.staticEntities.datePickerLanguage, "mongolian", {
get: function () {
return "mn";
}
});

Object.defineProperty(tradershubModel.staticEntities.datePickerLanguage, "spanishCastilian", {
get: function () {
return "es";
}
});

Object.defineProperty(tradershubModel.staticEntities.datePickerLanguage, "slovenian", {
get: function () {
return "sl";
}
});

Object.defineProperty(tradershubModel.staticEntities.datePickerLanguage, "vietnamese", {
get: function () {
return "vi";
}
});

Object.defineProperty(tradershubModel.staticEntities.datePickerLanguage, "bosnian", {
get: function () {
return "bs";
}
});

Object.defineProperty(tradershubModel.staticEntities.datePickerLanguage, "french", {
get: function () {
return "fr";
}
});

Object.defineProperty(tradershubModel.staticEntities.datePickerLanguage, "turkish", {
get: function () {
return "tr";
}
});

Object.defineProperty(tradershubModel.staticEntities.datePickerLanguage, "russian", {
get: function () {
return "ru";
}
});

Object.defineProperty(tradershubModel.staticEntities.datePickerLanguage, "serbian", {
get: function () {
return "sr";
}
});

Object.defineProperty(tradershubModel.staticEntities.datePickerLanguage, "lithuanian", {
get: function () {
return "lt";
}
});

Object.defineProperty(tradershubModel.staticEntities.datePickerLanguage, "portuguese", {
get: function () {
return "pt";
}
});

Object.defineProperty(tradershubModel.staticEntities.datePickerLanguage, "hebrew", {
get: function () {
return "he";
}
});

Object.defineProperty(tradershubModel.staticEntities.datePickerLanguage, "uzbek", {
get: function () {
return "uz";
}
});

Object.defineProperty(tradershubModel.staticEntities.datePickerLanguage, "burmese", {
get: function () {
return "my";
}
});

Object.defineProperty(tradershubModel.staticEntities.datePickerLanguage, "italian", {
get: function () {
return "it";
}
});

Object.defineProperty(tradershubModel.staticEntities.datePickerLanguage, "georgian", {
get: function () {
return "ka";
}
});

Object.defineProperty(tradershubModel.staticEntities.datePickerLanguage, "swedish", {
get: function () {
return "sv";
}
});

Object.defineProperty(tradershubModel.staticEntities.datePickerLanguage, "azerbaijani", {
get: function () {
return "az";
}
});

Object.defineProperty(tradershubModel.staticEntities.datePickerLanguage, "hindi", {
get: function () {
return "hi";
}
});

Object.defineProperty(tradershubModel.staticEntities.datePickerLanguage, "bulgarian", {
get: function () {
return "bg";
}
});

Object.defineProperty(tradershubModel.staticEntities.datePickerLanguage, "finnish", {
get: function () {
return "fi";
}
});

Object.defineProperty(tradershubModel.staticEntities.datePickerLanguage, "persian", {
get: function () {
return "fa";
}
});

Object.defineProperty(tradershubModel.staticEntities.datePickerLanguage, "armenian", {
get: function () {
return "hy";
}
});

Object.defineProperty(tradershubModel.staticEntities.datePickerLanguage, "german", {
get: function () {
return "de";
}
});

Object.defineProperty(tradershubModel.staticEntities.datePickerLanguage, "belarusian", {
get: function () {
return "be";
}
});

Object.defineProperty(tradershubModel.staticEntities.datePickerLanguage, "welsh", {
get: function () {
return "cy";
}
});

Object.defineProperty(tradershubModel.staticEntities.datePickerLanguage, "ukrainian", {
get: function () {
return "uk";
}
});

Object.defineProperty(tradershubModel.staticEntities.datePickerLanguage, "bengali", {
get: function () {
return "bn";
}
});

Object.defineProperty(tradershubModel.staticEntities.datePickerLanguage, "macedonian", {
get: function () {
return "mk";
}
});

tradershubModel.staticEntities.orientation = {};
var getOrientationRecord = function (record) {
return OS.ApplicationInfo.getModules()["8be17f2a-431c-4958-b894-c77b988a7271"].staticEntities["4d71f824-a563-4f63-8c76-626e4e0bdddb"][record];
};
Object.defineProperty(tradershubModel.staticEntities.orientation, "horizontal", {
get: function () {
return "horizontal";
}
});

Object.defineProperty(tradershubModel.staticEntities.orientation, "vertical", {
get: function () {
return "vertical";
}
});

tradershubModel.staticEntities.datePickerTimeFormat = {};
var getDatePickerTimeFormatRecord = function (record) {
return OS.ApplicationInfo.getModules()["8be17f2a-431c-4958-b894-c77b988a7271"].staticEntities["55e54b1a-0efe-4bef-ae10-c2769129634d"][record];
};
Object.defineProperty(tradershubModel.staticEntities.datePickerTimeFormat, "disabled", {
get: function () {
return "disabled";
}
});

Object.defineProperty(tradershubModel.staticEntities.datePickerTimeFormat, "time24hFormat", {
get: function () {
return "24";
}
});

Object.defineProperty(tradershubModel.staticEntities.datePickerTimeFormat, "time12hFormat", {
get: function () {
return "12";
}
});

tradershubModel.staticEntities.accordionIconType = {};
var getAccordionIconTypeRecord = function (record) {
return OS.ApplicationInfo.getModules()["8be17f2a-431c-4958-b894-c77b988a7271"].staticEntities["635cc1de-f6de-4b65-baf1-c661bc518266"][record];
};
Object.defineProperty(tradershubModel.staticEntities.accordionIconType, "custom", {
get: function () {
return "Custom";
}
});

Object.defineProperty(tradershubModel.staticEntities.accordionIconType, "plusMinus", {
get: function () {
return "PlusMinus";
}
});

Object.defineProperty(tradershubModel.staticEntities.accordionIconType, "caret", {
get: function () {
return "Caret";
}
});

tradershubModel.staticEntities.direction = {};
var getDirectionRecord = function (record) {
return OS.ApplicationInfo.getModules()["8be17f2a-431c-4958-b894-c77b988a7271"].staticEntities["67628086-7f8b-4f84-a978-a9d3f547969c"][record];
};
Object.defineProperty(tradershubModel.staticEntities.direction, "left", {
get: function () {
return "left";
}
});

Object.defineProperty(tradershubModel.staticEntities.direction, "right", {
get: function () {
return "right";
}
});

tradershubModel.staticEntities.breakColumns = {};
var getBreakColumnsRecord = function (record) {
return OS.ApplicationInfo.getModules()["8be17f2a-431c-4958-b894-c77b988a7271"].staticEntities["68f74593-a5c4-4e65-858b-f44211eaf122"][record];
};
Object.defineProperty(tradershubModel.staticEntities.breakColumns, "none", {
get: function () {
return "break-none";
}
});

Object.defineProperty(tradershubModel.staticEntities.breakColumns, "first", {
get: function () {
return "break-first";
}
});

Object.defineProperty(tradershubModel.staticEntities.breakColumns, "all", {
get: function () {
return "break-all";
}
});

Object.defineProperty(tradershubModel.staticEntities.breakColumns, "middle", {
get: function () {
return "break-middle";
}
});

Object.defineProperty(tradershubModel.staticEntities.breakColumns, "last", {
get: function () {
return "break-last";
}
});

tradershubModel.staticEntities.shape = {};
var getShapeRecord = function (record) {
return OS.ApplicationInfo.getModules()["8be17f2a-431c-4958-b894-c77b988a7271"].staticEntities["6fe168a9-c16d-4cdb-9b6f-a9e6c6b79326"][record];
};
Object.defineProperty(tradershubModel.staticEntities.shape, "sharp", {
get: function () {
return "none";
}
});

Object.defineProperty(tradershubModel.staticEntities.shape, "softRounded", {
get: function () {
return "soft";
}
});

Object.defineProperty(tradershubModel.staticEntities.shape, "rounded", {
get: function () {
return "rounded";
}
});

tradershubModel.staticEntities.stackedCardsPosition = {};
var getStackedCardsPositionRecord = function (record) {
return OS.ApplicationInfo.getModules()["8be17f2a-431c-4958-b894-c77b988a7271"].staticEntities["71865eb4-55fe-40a5-bc7f-45b005a3a0b5"][record];
};
Object.defineProperty(tradershubModel.staticEntities.stackedCardsPosition, "bottom", {
get: function () {
return "Bottom";
}
});

Object.defineProperty(tradershubModel.staticEntities.stackedCardsPosition, "top", {
get: function () {
return "Top";
}
});

Object.defineProperty(tradershubModel.staticEntities.stackedCardsPosition, "none", {
get: function () {
return "None";
}
});

tradershubModel.staticEntities.carouselDirection = {};
var getCarouselDirectionRecord = function (record) {
return OS.ApplicationInfo.getModules()["8be17f2a-431c-4958-b894-c77b988a7271"].staticEntities["71cbe266-f7c5-42fb-beae-76bc325d99ea"][record];
};
Object.defineProperty(tradershubModel.staticEntities.carouselDirection, "rightToLeft", {
get: function () {
return "RightToLeft";
}
});

Object.defineProperty(tradershubModel.staticEntities.carouselDirection, "leftToRight", {
get: function () {
return "LeftToRight";
}
});

tradershubModel.staticEntities.autoplay = {};
var getAutoplayRecord = function (record) {
return OS.ApplicationInfo.getModules()["8be17f2a-431c-4958-b894-c77b988a7271"].staticEntities["82aa58b4-8bbb-4d19-92b6-2944affad02c"][record];
};
Object.defineProperty(tradershubModel.staticEntities.autoplay, "disabled", {
get: function () {
return "disabled";
}
});

Object.defineProperty(tradershubModel.staticEntities.autoplay, "slow", {
get: function () {
return "slow";
}
});

Object.defineProperty(tradershubModel.staticEntities.autoplay, "fast", {
get: function () {
return "fast";
}
});

Object.defineProperty(tradershubModel.staticEntities.autoplay, "normal", {
get: function () {
return "normal";
}
});

tradershubModel.staticEntities.position = {};
var getPositionRecord = function (record) {
return OS.ApplicationInfo.getModules()["8be17f2a-431c-4958-b894-c77b988a7271"].staticEntities["83c073e8-bac2-4122-9772-aa6e122a5d36"][record];
};
Object.defineProperty(tradershubModel.staticEntities.position, "top", {
get: function () {
return "top";
}
});

Object.defineProperty(tradershubModel.staticEntities.position, "left", {
get: function () {
return "left";
}
});

Object.defineProperty(tradershubModel.staticEntities.position, "bottomRight", {
get: function () {
return "bottom-right";
}
});

Object.defineProperty(tradershubModel.staticEntities.position, "bottomLeft", {
get: function () {
return "bottom-left";
}
});

Object.defineProperty(tradershubModel.staticEntities.position, "right", {
get: function () {
return "right";
}
});

Object.defineProperty(tradershubModel.staticEntities.position, "topLeft", {
get: function () {
return "top-left";
}
});

Object.defineProperty(tradershubModel.staticEntities.position, "topRight", {
get: function () {
return "top-right";
}
});

Object.defineProperty(tradershubModel.staticEntities.position, "center", {
get: function () {
return "center";
}
});

Object.defineProperty(tradershubModel.staticEntities.position, "bottom", {
get: function () {
return "bottom";
}
});

tradershubModel.staticEntities.identityProvider = {};
var getIdentityProviderRecord = function (record) {
return OS.ApplicationInfo.getModules()["8be17f2a-431c-4958-b894-c77b988a7271"].staticEntities["8ad07004-49d8-42d6-93d1-73727c698b14"][record];
};
Object.defineProperty(tradershubModel.staticEntities.identityProvider, "facebook", {
get: function () {
return "facebook";
}
});

Object.defineProperty(tradershubModel.staticEntities.identityProvider, "google", {
get: function () {
return "google";
}
});

Object.defineProperty(tradershubModel.staticEntities.identityProvider, "apple", {
get: function () {
return "apple";
}
});

tradershubModel.staticEntities.trigger = {};
var getTriggerRecord = function (record) {
return OS.ApplicationInfo.getModules()["8be17f2a-431c-4958-b894-c77b988a7271"].staticEntities["8f0912ba-c626-4795-90a6-5311e2b970cb"][record];
};
Object.defineProperty(tradershubModel.staticEntities.trigger, "onClick", {
get: function () {
return "onclick";
}
});

Object.defineProperty(tradershubModel.staticEntities.trigger, "onHover", {
get: function () {
return "onhover";
}
});

tradershubModel.staticEntities.space = {};
var getSpaceRecord = function (record) {
return OS.ApplicationInfo.getModules()["8be17f2a-431c-4958-b894-c77b988a7271"].staticEntities["8fb3d471-82a4-439c-9cc1-0555dfa91451"][record];
};
Object.defineProperty(tradershubModel.staticEntities.space, "large", {
get: function () {
return "l";
}
});

Object.defineProperty(tradershubModel.staticEntities.space, "medium", {
get: function () {
return "m";
}
});

Object.defineProperty(tradershubModel.staticEntities.space, "xXLarge", {
get: function () {
return "xxl";
}
});

Object.defineProperty(tradershubModel.staticEntities.space, "extraSmall", {
get: function () {
return "xs";
}
});

Object.defineProperty(tradershubModel.staticEntities.space, "small", {
get: function () {
return "s";
}
});

Object.defineProperty(tradershubModel.staticEntities.space, "base", {
get: function () {
return "base";
}
});

Object.defineProperty(tradershubModel.staticEntities.space, "extraLarge", {
get: function () {
return "xl";
}
});

Object.defineProperty(tradershubModel.staticEntities.space, "none", {
get: function () {
return "none";
}
});

tradershubModel.staticEntities.alert = {};
var getAlertRecord = function (record) {
return OS.ApplicationInfo.getModules()["8be17f2a-431c-4958-b894-c77b988a7271"].staticEntities["924486c0-dd9a-46ea-ad74-2cf9ac0c84d9"][record];
};
Object.defineProperty(tradershubModel.staticEntities.alert, "success", {
get: function () {
return "alert-success";
}
});

Object.defineProperty(tradershubModel.staticEntities.alert, "error", {
get: function () {
return "alert-error";
}
});

Object.defineProperty(tradershubModel.staticEntities.alert, "info", {
get: function () {
return "alert-info";
}
});

Object.defineProperty(tradershubModel.staticEntities.alert, "warning", {
get: function () {
return "alert-warning";
}
});

tradershubModel.staticEntities.floatingPosition = {};
var getFloatingPositionRecord = function (record) {
return OS.ApplicationInfo.getModules()["8be17f2a-431c-4958-b894-c77b988a7271"].staticEntities["926b8b2a-0906-4e6f-8ef5-e18fdce4b5af"][record];
};
Object.defineProperty(tradershubModel.staticEntities.floatingPosition, "leftStart", {
get: function () {
return "left-start";
}
});

Object.defineProperty(tradershubModel.staticEntities.floatingPosition, "topEnd", {
get: function () {
return "top-end";
}
});

Object.defineProperty(tradershubModel.staticEntities.floatingPosition, "right", {
get: function () {
return "right";
}
});

Object.defineProperty(tradershubModel.staticEntities.floatingPosition, "top", {
get: function () {
return "top";
}
});

Object.defineProperty(tradershubModel.staticEntities.floatingPosition, "bottomEnd", {
get: function () {
return "bottom-end";
}
});

Object.defineProperty(tradershubModel.staticEntities.floatingPosition, "auto", {
get: function () {
return "auto";
}
});

Object.defineProperty(tradershubModel.staticEntities.floatingPosition, "leftEnd", {
get: function () {
return "left-end";
}
});

Object.defineProperty(tradershubModel.staticEntities.floatingPosition, "bottomStart", {
get: function () {
return "bottom-start";
}
});

Object.defineProperty(tradershubModel.staticEntities.floatingPosition, "rightEnd", {
get: function () {
return "right-end";
}
});

Object.defineProperty(tradershubModel.staticEntities.floatingPosition, "topStart", {
get: function () {
return "top-start";
}
});

Object.defineProperty(tradershubModel.staticEntities.floatingPosition, "left", {
get: function () {
return "left";
}
});

Object.defineProperty(tradershubModel.staticEntities.floatingPosition, "rightStart", {
get: function () {
return "right-start";
}
});

Object.defineProperty(tradershubModel.staticEntities.floatingPosition, "center", {
get: function () {
return "center";
}
});

Object.defineProperty(tradershubModel.staticEntities.floatingPosition, "bottom", {
get: function () {
return "bottom";
}
});

tradershubModel.staticEntities.booleanTypes = {};
var getBooleanTypesRecord = function (record) {
return OS.ApplicationInfo.getModules()["8be17f2a-431c-4958-b894-c77b988a7271"].staticEntities["9882c8fc-0dd6-492e-b6b9-7a68059ecc06"][record];
};
Object.defineProperty(tradershubModel.staticEntities.booleanTypes, "true", {
get: function () {
return "true";
}
});

Object.defineProperty(tradershubModel.staticEntities.booleanTypes, "unset", {
get: function () {
return "unset";
}
});

Object.defineProperty(tradershubModel.staticEntities.booleanTypes, "false", {
get: function () {
return "false";
}
});

tradershubModel.staticEntities.menuAction = {};
var getMenuActionRecord = function (record) {
return OS.ApplicationInfo.getModules()["8be17f2a-431c-4958-b894-c77b988a7271"].staticEntities["9cc12883-06ab-4cf0-9997-ede7c6c02d67"][record];
};
Object.defineProperty(tradershubModel.staticEntities.menuAction, "menu", {
get: function () {
return "Menu";
}
});

Object.defineProperty(tradershubModel.staticEntities.menuAction, "auto", {
get: function () {
return "Auto";
}
});

Object.defineProperty(tradershubModel.staticEntities.menuAction, "hidden", {
get: function () {
return "Hidden";
}
});

Object.defineProperty(tradershubModel.staticEntities.menuAction, "back", {
get: function () {
return "Back";
}
});

tradershubModel.staticEntities.accordionIconPosition = {};
var getAccordionIconPositionRecord = function (record) {
return OS.ApplicationInfo.getModules()["8be17f2a-431c-4958-b894-c77b988a7271"].staticEntities["a848db2d-fe6c-4df1-8c10-8bdb3c2e948a"][record];
};
Object.defineProperty(tradershubModel.staticEntities.accordionIconPosition, "left", {
get: function () {
return "left";
}
});

Object.defineProperty(tradershubModel.staticEntities.accordionIconPosition, "right", {
get: function () {
return "right";
}
});

tradershubModel.staticEntities.messageStatus = {};
var getMessageStatusRecord = function (record) {
return OS.ApplicationInfo.getModules()["8be17f2a-431c-4958-b894-c77b988a7271"].staticEntities["c1015fc0-c81c-40cc-a046-bf99cf21a280"][record];
};
Object.defineProperty(tradershubModel.staticEntities.messageStatus, "hidden", {
get: function () {
return "Hidden";
}
});

Object.defineProperty(tradershubModel.staticEntities.messageStatus, "read", {
get: function () {
return "Read";
}
});

Object.defineProperty(tradershubModel.staticEntities.messageStatus, "sent", {
get: function () {
return "Sent";
}
});

Object.defineProperty(tradershubModel.staticEntities.messageStatus, "received", {
get: function () {
return "Received";
}
});

tradershubModel.staticEntities.scrollbarStyle = {};
var getScrollbarStyleRecord = function (record) {
return OS.ApplicationInfo.getModules()["8be17f2a-431c-4958-b894-c77b988a7271"].staticEntities["c3d6dfea-6da2-468a-80e4-5ce668d43f70"][record];
};
Object.defineProperty(tradershubModel.staticEntities.scrollbarStyle, "none", {
get: function () {
return "none";
}
});

Object.defineProperty(tradershubModel.staticEntities.scrollbarStyle, "default", {
get: function () {
return "default";
}
});

Object.defineProperty(tradershubModel.staticEntities.scrollbarStyle, "compact", {
get: function () {
return "compact";
}
});

tradershubModel.staticEntities.color = {};
var getColorRecord = function (record) {
return OS.ApplicationInfo.getModules()["8be17f2a-431c-4958-b894-c77b988a7271"].staticEntities["cb6d1da7-26d4-45d9-bc22-9a4c482e6ce2"][record];
};
Object.defineProperty(tradershubModel.staticEntities.color, "neutral9", {
get: function () {
return "neutral-9";
}
});

Object.defineProperty(tradershubModel.staticEntities.color, "grape", {
get: function () {
return "grape";
}
});

Object.defineProperty(tradershubModel.staticEntities.color, "neutral7", {
get: function () {
return "neutral-7";
}
});

Object.defineProperty(tradershubModel.staticEntities.color, "neutral10", {
get: function () {
return "neutral-10";
}
});

Object.defineProperty(tradershubModel.staticEntities.color, "teal", {
get: function () {
return "teal";
}
});

Object.defineProperty(tradershubModel.staticEntities.color, "primary", {
get: function () {
return "primary";
}
});

Object.defineProperty(tradershubModel.staticEntities.color, "neutral4", {
get: function () {
return "neutral-4";
}
});

Object.defineProperty(tradershubModel.staticEntities.color, "neutral8", {
get: function () {
return "neutral-8";
}
});

Object.defineProperty(tradershubModel.staticEntities.color, "indigo", {
get: function () {
return "indigo";
}
});

Object.defineProperty(tradershubModel.staticEntities.color, "orange", {
get: function () {
return "orange";
}
});

Object.defineProperty(tradershubModel.staticEntities.color, "lime", {
get: function () {
return "lime";
}
});

Object.defineProperty(tradershubModel.staticEntities.color, "cyan", {
get: function () {
return "cyan";
}
});

Object.defineProperty(tradershubModel.staticEntities.color, "secondary", {
get: function () {
return "secondary";
}
});

Object.defineProperty(tradershubModel.staticEntities.color, "neutral6", {
get: function () {
return "neutral-6";
}
});

Object.defineProperty(tradershubModel.staticEntities.color, "yellow", {
get: function () {
return "yellow";
}
});

Object.defineProperty(tradershubModel.staticEntities.color, "neutral2", {
get: function () {
return "neutral-2";
}
});

Object.defineProperty(tradershubModel.staticEntities.color, "neutral1", {
get: function () {
return "neutral-1";
}
});

Object.defineProperty(tradershubModel.staticEntities.color, "neutral3", {
get: function () {
return "neutral-3";
}
});

Object.defineProperty(tradershubModel.staticEntities.color, "transparent", {
get: function () {
return "transparent";
}
});

Object.defineProperty(tradershubModel.staticEntities.color, "violet", {
get: function () {
return "violet";
}
});

Object.defineProperty(tradershubModel.staticEntities.color, "blue", {
get: function () {
return "blue";
}
});

Object.defineProperty(tradershubModel.staticEntities.color, "neutral5", {
get: function () {
return "neutral-5";
}
});

Object.defineProperty(tradershubModel.staticEntities.color, "red", {
get: function () {
return "red";
}
});

Object.defineProperty(tradershubModel.staticEntities.color, "pink", {
get: function () {
return "pink";
}
});

Object.defineProperty(tradershubModel.staticEntities.color, "green", {
get: function () {
return "green";
}
});

Object.defineProperty(tradershubModel.staticEntities.color, "neutral0", {
get: function () {
return "neutral-0";
}
});

tradershubModel.staticEntities.columnBreak = {};
var getColumnBreakRecord = function (record) {
return OS.ApplicationInfo.getModules()["8be17f2a-431c-4958-b894-c77b988a7271"].staticEntities["cce6ac21-942a-492f-8b46-64c5e6ea057b"][record];
};
Object.defineProperty(tradershubModel.staticEntities.columnBreak, "breakMiddle", {
get: function () {
return "break-middle";
}
});

Object.defineProperty(tradershubModel.staticEntities.columnBreak, "breakAll", {
get: function () {
return "break-all";
}
});

Object.defineProperty(tradershubModel.staticEntities.columnBreak, "breakNone", {
get: function () {
return "break-none";
}
});

Object.defineProperty(tradershubModel.staticEntities.columnBreak, "breakLast", {
get: function () {
return "break-last";
}
});

Object.defineProperty(tradershubModel.staticEntities.columnBreak, "breakFirst", {
get: function () {
return "break-first";
}
});

tradershubModel.staticEntities.steps = {};
var getStepsRecord = function (record) {
return OS.ApplicationInfo.getModules()["8be17f2a-431c-4958-b894-c77b988a7271"].staticEntities["e4dd8e9f-a620-4df5-b619-9b8a771be5a3"][record];
};
Object.defineProperty(tradershubModel.staticEntities.steps, "next", {
get: function () {
return "next";
}
});

Object.defineProperty(tradershubModel.staticEntities.steps, "past", {
get: function () {
return "past";
}
});

Object.defineProperty(tradershubModel.staticEntities.steps, "active", {
get: function () {
return "active";
}
});

tradershubModel.staticEntities.carouselNavigation = {};
var getCarouselNavigationRecord = function (record) {
return OS.ApplicationInfo.getModules()["8be17f2a-431c-4958-b894-c77b988a7271"].staticEntities["ee3aefc9-e437-49fb-86a2-0c2d0656ed43"][record];
};
Object.defineProperty(tradershubModel.staticEntities.carouselNavigation, "dots", {
get: function () {
return "dots";
}
});

Object.defineProperty(tradershubModel.staticEntities.carouselNavigation, "none", {
get: function () {
return "none";
}
});

Object.defineProperty(tradershubModel.staticEntities.carouselNavigation, "arrows", {
get: function () {
return "arrows";
}
});

Object.defineProperty(tradershubModel.staticEntities.carouselNavigation, "both", {
get: function () {
return "both";
}
});

tradershubModel.staticEntities.videoState = {};
var getVideoStateRecord = function (record) {
return OS.ApplicationInfo.getModules()["8be17f2a-431c-4958-b894-c77b988a7271"].staticEntities["f1508f37-01a7-456d-9dd0-64dff62f6d39"][record];
};
Object.defineProperty(tradershubModel.staticEntities.videoState, "unstarted", {
get: function () {
return "Unstarted";
}
});

Object.defineProperty(tradershubModel.staticEntities.videoState, "paused", {
get: function () {
return "Paused";
}
});

Object.defineProperty(tradershubModel.staticEntities.videoState, "ended", {
get: function () {
return "Ended";
}
});

Object.defineProperty(tradershubModel.staticEntities.videoState, "playing", {
get: function () {
return "Playing";
}
});

tradershubModel.staticEntities.datePickerWeekDay = {};
var getDatePickerWeekDayRecord = function (record) {
return OS.ApplicationInfo.getModules()["8be17f2a-431c-4958-b894-c77b988a7271"].staticEntities["fd4ed0ba-1ab9-4a3e-a2b1-18f41793be2d"][record];
};
Object.defineProperty(tradershubModel.staticEntities.datePickerWeekDay, "monday", {
get: function () {
return 1;
}
});

Object.defineProperty(tradershubModel.staticEntities.datePickerWeekDay, "saturday", {
get: function () {
return 6;
}
});

Object.defineProperty(tradershubModel.staticEntities.datePickerWeekDay, "sunday", {
get: function () {
return 0;
}
});

Object.defineProperty(tradershubModel.staticEntities.datePickerWeekDay, "friday", {
get: function () {
return 5;
}
});

Object.defineProperty(tradershubModel.staticEntities.datePickerWeekDay, "tuesday", {
get: function () {
return 2;
}
});

Object.defineProperty(tradershubModel.staticEntities.datePickerWeekDay, "thursday", {
get: function () {
return 4;
}
});

Object.defineProperty(tradershubModel.staticEntities.datePickerWeekDay, "wednesday", {
get: function () {
return 3;
}
});

tradershubModel.staticEntities.mapErrors = {};
var getMapErrorsRecord = function (record) {
return OS.ApplicationInfo.getModules()["95bb31d1-f079-4fd6-ab2e-5c8326855aaa"].staticEntities["0ae015e4-c953-4e33-aec0-91674d05cbf5"][record];
};
Object.defineProperty(tradershubModel.staticEntities.mapErrors, "cFG_CantChangeParamsStaticMap", {
get: function () {
return "MAPS-CFG-02002";
}
});

Object.defineProperty(tradershubModel.staticEntities.mapErrors, "gEN_ToolTypeAlreadyExists", {
get: function () {
return "MAPS-GEN-06004";
}
});

Object.defineProperty(tradershubModel.staticEntities.mapErrors, "aPI_FailedGettingShapeRadius", {
get: function () {
return "MAPS-API-05004";
}
});

Object.defineProperty(tradershubModel.staticEntities.mapErrors, "lIB_FailedGeocodingLeafletShapeLocations", {
get: function () {
return "MAPS-LIB-05002";
}
});

Object.defineProperty(tradershubModel.staticEntities.mapErrors, "lIB_FailedSetDirections", {
get: function () {
return "MAPS-LIB-04001";
}
});

Object.defineProperty(tradershubModel.staticEntities.mapErrors, "aPI_FailedUnsubscribeMarkerEvent", {
get: function () {
return "MAPS-API-09006";
}
});

Object.defineProperty(tradershubModel.staticEntities.mapErrors, "cFG_InvalidMapId", {
get: function () {
return "MAPS-CFG-10005";
}
});

Object.defineProperty(tradershubModel.staticEntities.mapErrors, "lIB_FailedGeocodingMarker", {
get: function () {
return "MAPS-LIB-03001";
}
});

Object.defineProperty(tradershubModel.staticEntities.mapErrors, "aPI_FailedNoPluginDirections", {
get: function () {
return "MAPS-API-04003";
}
});

Object.defineProperty(tradershubModel.staticEntities.mapErrors, "cFG_APIKeyAlreadySetStaticMap", {
get: function () {
return "MAPS-CFG-02001";
}
});

Object.defineProperty(tradershubModel.staticEntities.mapErrors, "cFG_APIKeyDiffersFromPlacesToMaps", {
get: function () {
return "MAPS-CFG-01002";
}
});

Object.defineProperty(tradershubModel.staticEntities.mapErrors, "aPI_FailedCreateMarker", {
get: function () {
return "MAPS-API-09002";
}
});

Object.defineProperty(tradershubModel.staticEntities.mapErrors, "lIB_InvalidApiKeyStaticMap", {
get: function () {
return "MAPS-LIB-02001";
}
});

Object.defineProperty(tradershubModel.staticEntities.mapErrors, "aPI_FailedGettingCenterCoordinates", {
get: function () {
return "MAPS-API-01001";
}
});

Object.defineProperty(tradershubModel.staticEntities.mapErrors, "lIB_FailedGeocodingLeafletMarker", {
get: function () {
return "MAPS-LIB-03002";
}
});

Object.defineProperty(tradershubModel.staticEntities.mapErrors, "gEN_InvalidChangePropertyShape", {
get: function () {
return "MAPS-GEN-05001";
}
});

Object.defineProperty(tradershubModel.staticEntities.mapErrors, "gEN_UnsupportedEventShape", {
get: function () {
return "MAPS-GEN-05002";
}
});

Object.defineProperty(tradershubModel.staticEntities.mapErrors, "gEN_UnsupportedEventMap", {
get: function () {
return "MAPS-GEN-01002";
}
});

Object.defineProperty(tradershubModel.staticEntities.mapErrors, "gEN_UnsupportedEventDrawingTools", {
get: function () {
return "MAPS-GEN-06003";
}
});

Object.defineProperty(tradershubModel.staticEntities.mapErrors, "gEN_InvalidChangePropertyMap", {
get: function () {
return "MAPS-GEN-01001";
}
});

Object.defineProperty(tradershubModel.staticEntities.mapErrors, "cFG_InvalidCircleShapeCenter", {
get: function () {
return "MAPS-CFG-05003";
}
});

Object.defineProperty(tradershubModel.staticEntities.mapErrors, "gEN_InvalidChangePropertyDrawingTools", {
get: function () {
return "MAPS-GEN-06001";
}
});

Object.defineProperty(tradershubModel.staticEntities.mapErrors, "gEN_InvalidChangePropertyHeatmapLayer", {
get: function () {
return "MAPS-GEN-08001";
}
});

Object.defineProperty(tradershubModel.staticEntities.mapErrors, "gEN_InvalidChangePropertyMarker", {
get: function () {
return "MAPS-GEN-03001";
}
});

Object.defineProperty(tradershubModel.staticEntities.mapErrors, "cFG_InvalidPolylineShapeLocations", {
get: function () {
return "MAPS-CFG-05001";
}
});

Object.defineProperty(tradershubModel.staticEntities.mapErrors, "aPI_FailedRemoveDirections", {
get: function () {
return "MAPS-API-03001";
}
});

Object.defineProperty(tradershubModel.staticEntities.mapErrors, "cFG_InvalidRectangleShapeBounds", {
get: function () {
return "MAPS-CFG-05004";
}
});

Object.defineProperty(tradershubModel.staticEntities.mapErrors, "lIB_FailedGeocodingShapeLocations", {
get: function () {
return "MAPS-LIB-05001";
}
});

Object.defineProperty(tradershubModel.staticEntities.mapErrors, "aPI_FailedGettingShapePath", {
get: function () {
return "MAPS-API-05001";
}
});

Object.defineProperty(tradershubModel.staticEntities.mapErrors, "gEN_InvalidChangePropertyTools", {
get: function () {
return "MAPS-GEN-06002";
}
});

Object.defineProperty(tradershubModel.staticEntities.mapErrors, "aPI_PolylineUnsupported", {
get: function () {
return "MAPS-GEN-01003";
}
});

Object.defineProperty(tradershubModel.staticEntities.mapErrors, "aPI_FailedGettingShapeCenter", {
get: function () {
return "MAPS-API-05003";
}
});

Object.defineProperty(tradershubModel.staticEntities.mapErrors, "cFG_APIKeyAlreadySetMap", {
get: function () {
return "MAPS-CFG-01001";
}
});

Object.defineProperty(tradershubModel.staticEntities.mapErrors, "cFG_InvalidDrawingToolsPosition", {
get: function () {
return "MAPS-CFG-06001";
}
});

Object.defineProperty(tradershubModel.staticEntities.mapErrors, "gEN_UnsupportedEventMarker", {
get: function () {
return "MAPS-GEN-03002";
}
});

Object.defineProperty(tradershubModel.staticEntities.mapErrors, "aPI_FailedGettingCircleShape", {
get: function () {
return "MAPS-API-05002";
}
});

Object.defineProperty(tradershubModel.staticEntities.mapErrors, "gEN_InvalidChangePropertyMarkerClusterer", {
get: function () {
return "MAPS-GEN-09001";
}
});

Object.defineProperty(tradershubModel.staticEntities.mapErrors, "gEN_NoPluginDirectionsNeeded", {
get: function () {
return "MAPS-GEN-04001";
}
});

Object.defineProperty(tradershubModel.staticEntities.mapErrors, "aPI_FailedSubscribeMarkerEvent", {
get: function () {
return "MAPS-API-09005";
}
});

Object.defineProperty(tradershubModel.staticEntities.mapErrors, "aPI_FailedRemoveMarker", {
get: function () {
return "MAPS-API-09003";
}
});

Object.defineProperty(tradershubModel.staticEntities.mapErrors, "cFG_InvalidPolygonShapeLocations", {
get: function () {
return "MAPS-CFG-05002";
}
});

Object.defineProperty(tradershubModel.staticEntities.mapErrors, "lIB_InvalidApiKeyMap", {
get: function () {
return "MAPS-LIB-01001";
}
});

Object.defineProperty(tradershubModel.staticEntities.mapErrors, "aPI_FailedContainsLocation", {
get: function () {
return "MAPS-API-05005";
}
});

Object.defineProperty(tradershubModel.staticEntities.mapErrors, "lIB_FailedGeocodingMap", {
get: function () {
return "MAPS-LIB-01002";
}
});

Object.defineProperty(tradershubModel.staticEntities.mapErrors, "cFG_InvalidTravelMode", {
get: function () {
return "MAPS-CFG-04001";
}
});

Object.defineProperty(tradershubModel.staticEntities.mapErrors, "lIB_FailedGeocodingLeafletMap", {
get: function () {
return "MAPS-LIB-11001";
}
});

Object.defineProperty(tradershubModel.staticEntities.mapErrors, "gEN_InvalidChangePropertyFileLayer", {
get: function () {
return "MAPS-GEN-07001";
}
});

Object.defineProperty(tradershubModel.staticEntities.mapErrors, "aPI_FailedRemoveMarkers", {
get: function () {
return "MAPS-API-09004";
}
});

Object.defineProperty(tradershubModel.staticEntities.mapErrors, "aPI_FailedLoadingPlugin", {
get: function () {
return "MAPS-API-04002";
}
});

tradershubModel.staticEntities.type = {};
var getTypeRecord = function (record) {
return OS.ApplicationInfo.getModules()["95bb31d1-f079-4fd6-ab2e-5c8326855aaa"].staticEntities["321464c3-cb26-412f-b60a-1c7140dc8c1b"][record];
};
Object.defineProperty(tradershubModel.staticEntities.type, "hybrid", {
get: function () {
return "hybrid";
}
});

Object.defineProperty(tradershubModel.staticEntities.type, "terrain", {
get: function () {
return "terrain";
}
});

Object.defineProperty(tradershubModel.staticEntities.type, "roadmap", {
get: function () {
return "roadmap";
}
});

Object.defineProperty(tradershubModel.staticEntities.type, "satellite", {
get: function () {
return "satellite";
}
});

tradershubModel.staticEntities.mapEventTriggered = {};
var getMapEventTriggeredRecord = function (record) {
return OS.ApplicationInfo.getModules()["95bb31d1-f079-4fd6-ab2e-5c8326855aaa"].staticEntities["7cf2a964-5ef8-4901-abe6-e84cb6616a62"][record];
};
Object.defineProperty(tradershubModel.staticEntities.mapEventTriggered, "dragEnd", {
get: function () {
return "dragend";
}
});

Object.defineProperty(tradershubModel.staticEntities.mapEventTriggered, "rightClick", {
get: function () {
return "contextmenu";
}
});

Object.defineProperty(tradershubModel.staticEntities.mapEventTriggered, "doubleClick", {
get: function () {
return "dblclick";
}
});

Object.defineProperty(tradershubModel.staticEntities.mapEventTriggered, "click", {
get: function () {
return "click";
}
});

Object.defineProperty(tradershubModel.staticEntities.mapEventTriggered, "zoomChanged", {
get: function () {
return "zoom_changed";
}
});

tradershubModel.staticEntities.searchTypes = {};
var getSearchTypesRecord = function (record) {
return OS.ApplicationInfo.getModules()["95bb31d1-f079-4fd6-ab2e-5c8326855aaa"].staticEntities["874caddc-a7e7-422a-ad8b-0267067bc563"][record];
};
Object.defineProperty(tradershubModel.staticEntities.searchTypes, "addresses", {
get: function () {
return "Addresses";
}
});

Object.defineProperty(tradershubModel.staticEntities.searchTypes, "establishments", {
get: function () {
return "Establishments";
}
});

Object.defineProperty(tradershubModel.staticEntities.searchTypes, "cities", {
get: function () {
return "Cities";
}
});

Object.defineProperty(tradershubModel.staticEntities.searchTypes, "regions", {
get: function () {
return "Regions";
}
});

Object.defineProperty(tradershubModel.staticEntities.searchTypes, "geocodes", {
get: function () {
return "Geocodes";
}
});

tradershubModel.staticEntities.drawingToolsPosition = {};
var getDrawingToolsPositionRecord = function (record) {
return OS.ApplicationInfo.getModules()["95bb31d1-f079-4fd6-ab2e-5c8326855aaa"].staticEntities["950fddcc-2412-4248-a864-399a0fd9b469"][record];
};
Object.defineProperty(tradershubModel.staticEntities.drawingToolsPosition, "top_Right", {
get: function () {
return "TOP_RIGHT";
}
});

Object.defineProperty(tradershubModel.staticEntities.drawingToolsPosition, "top_Center", {
get: function () {
return "TOP_CENTER";
}
});

Object.defineProperty(tradershubModel.staticEntities.drawingToolsPosition, "right_Center", {
get: function () {
return "RIGHT_CENTER";
}
});

Object.defineProperty(tradershubModel.staticEntities.drawingToolsPosition, "top_Left", {
get: function () {
return "TOP_LEFT";
}
});

Object.defineProperty(tradershubModel.staticEntities.drawingToolsPosition, "bottom_Center", {
get: function () {
return "BOTTOM_CENTER";
}
});

Object.defineProperty(tradershubModel.staticEntities.drawingToolsPosition, "right_Top", {
get: function () {
return "RIGHT_TOP";
}
});

Object.defineProperty(tradershubModel.staticEntities.drawingToolsPosition, "bottom_Right", {
get: function () {
return "BOTTOM_RIGHT";
}
});

Object.defineProperty(tradershubModel.staticEntities.drawingToolsPosition, "bottom_Left", {
get: function () {
return "BOTTOM_LEFT";
}
});

Object.defineProperty(tradershubModel.staticEntities.drawingToolsPosition, "right_Bottom", {
get: function () {
return "RIGHT_BOTTOM";
}
});

Object.defineProperty(tradershubModel.staticEntities.drawingToolsPosition, "left_Center", {
get: function () {
return "LEFT_CENTER";
}
});

Object.defineProperty(tradershubModel.staticEntities.drawingToolsPosition, "left_Top", {
get: function () {
return "LEFT_TOP";
}
});

Object.defineProperty(tradershubModel.staticEntities.drawingToolsPosition, "left_Bottom", {
get: function () {
return "LEFT_BOTTOM";
}
});

tradershubModel.staticEntities.style = {};
var getStyleRecord = function (record) {
return OS.ApplicationInfo.getModules()["95bb31d1-f079-4fd6-ab2e-5c8326855aaa"].staticEntities["a0adb83b-e208-4039-bc92-91d01b8e2081"][record];
};
Object.defineProperty(tradershubModel.staticEntities.style, "silver", {
get: function () {
return 2;
}
});

Object.defineProperty(tradershubModel.staticEntities.style, "standard", {
get: function () {
return 1;
}
});

Object.defineProperty(tradershubModel.staticEntities.style, "dark", {
get: function () {
return 4;
}
});

Object.defineProperty(tradershubModel.staticEntities.style, "night", {
get: function () {
return 5;
}
});

Object.defineProperty(tradershubModel.staticEntities.style, "aubergine", {
get: function () {
return 6;
}
});

Object.defineProperty(tradershubModel.staticEntities.style, "retro", {
get: function () {
return 3;
}
});

tradershubModel.staticEntities.zoom = {};
var getZoomRecord = function (record) {
return OS.ApplicationInfo.getModules()["95bb31d1-f079-4fd6-ab2e-5c8326855aaa"].staticEntities["e4acf07c-b38a-4871-a7c2-4017eaabe95c"][record];
};
Object.defineProperty(tradershubModel.staticEntities.zoom, "zoom13", {
get: function () {
return 13;
}
});

Object.defineProperty(tradershubModel.staticEntities.zoom, "zoom9", {
get: function () {
return 9;
}
});

Object.defineProperty(tradershubModel.staticEntities.zoom, "zoom10_City", {
get: function () {
return 10;
}
});

Object.defineProperty(tradershubModel.staticEntities.zoom, "zoom3", {
get: function () {
return 3;
}
});

Object.defineProperty(tradershubModel.staticEntities.zoom, "zoom15_Streets", {
get: function () {
return 15;
}
});

Object.defineProperty(tradershubModel.staticEntities.zoom, "zoom20_Buildings", {
get: function () {
return 20;
}
});

Object.defineProperty(tradershubModel.staticEntities.zoom, "zoom19", {
get: function () {
return 19;
}
});

Object.defineProperty(tradershubModel.staticEntities.zoom, "zoom7", {
get: function () {
return 7;
}
});

Object.defineProperty(tradershubModel.staticEntities.zoom, "zoom4", {
get: function () {
return 4;
}
});

Object.defineProperty(tradershubModel.staticEntities.zoom, "zoom16", {
get: function () {
return 16;
}
});

Object.defineProperty(tradershubModel.staticEntities.zoom, "zoom5_Continent", {
get: function () {
return 5;
}
});

Object.defineProperty(tradershubModel.staticEntities.zoom, "zoom18", {
get: function () {
return 18;
}
});

Object.defineProperty(tradershubModel.staticEntities.zoom, "zoom11", {
get: function () {
return 11;
}
});

Object.defineProperty(tradershubModel.staticEntities.zoom, "zoom1_World", {
get: function () {
return 1;
}
});

Object.defineProperty(tradershubModel.staticEntities.zoom, "zoom8", {
get: function () {
return 8;
}
});

Object.defineProperty(tradershubModel.staticEntities.zoom, "zoom2", {
get: function () {
return 2;
}
});

Object.defineProperty(tradershubModel.staticEntities.zoom, "zoom6", {
get: function () {
return 6;
}
});

Object.defineProperty(tradershubModel.staticEntities.zoom, "zoom17", {
get: function () {
return 17;
}
});

Object.defineProperty(tradershubModel.staticEntities.zoom, "zoom12", {
get: function () {
return 12;
}
});

Object.defineProperty(tradershubModel.staticEntities.zoom, "zoom14", {
get: function () {
return 14;
}
});

Object.defineProperty(tradershubModel.staticEntities.zoom, "auto", {
get: function () {
return 0;
}
});

tradershubModel.staticEntities.shapeEventTriggered = {};
var getShapeEventTriggeredRecord = function (record) {
return OS.ApplicationInfo.getModules()["95bb31d1-f079-4fd6-ab2e-5c8326855aaa"].staticEntities["ecd875a9-9c28-48b3-8693-d77fa52bfcb9"][record];
};
Object.defineProperty(tradershubModel.staticEntities.shapeEventTriggered, "dragEnd", {
get: function () {
return "dragend";
}
});

Object.defineProperty(tradershubModel.staticEntities.shapeEventTriggered, "shapeChanged", {
get: function () {
return "shape_changed";
}
});

});

