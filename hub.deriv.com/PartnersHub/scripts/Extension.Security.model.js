define("Extension.Security.model$CustomClaimRec", ["exports", "@outsystems/runtime-core-js", "Extension.Security.model"], function(exports, OSRuntimeCore, Extension_SecurityModel) {
    var OS = OSRuntimeCore; {
        class CustomClaimRecInner extends
        OS.DataTypes.GenericRecord {
            static attributesToDeclare() {
                return [
                    this.attr("Name", "nameAttr", "Name", true, false, OS.DataTypes.DataTypes.Text, function() {
                        return "";
                    }, true),
                    this.attr("Value", "valueAttr", "Value", true, false, OS.DataTypes.DataTypes.Text, function() {
                        return "";
                    }, true)
                ].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
            }

        }

        Extension_SecurityModel.CustomClaimRec = CustomClaimRecInner;

        var CustomClaimRec = CustomClaimRecInner;
        CustomClaimRec.init();
    }
});

define("Extension.Security.model$RLCustomClaimList", ["exports", "@outsystems/runtime-core-js", "Extension.Security.model", "Extension.Security.model$CustomClaimRec"], function(exports, OSRuntimeCore, Extension_SecurityModel) {
    var OS = OSRuntimeCore;
    class RLCustomClaimList extends
    OS.DataTypes.GenericRecordList {
        static getItemType() {
            return Extension_SecurityModel.CustomClaimRec;
        }

    }

    Extension_SecurityModel.RLCustomClaimList = RLCustomClaimList;

});

define("Extension.Security.model$RCCustomClaimRecord", ["exports", "@outsystems/runtime-core-js", "Extension.Security.model", "Extension.Security.model$CustomClaimRec"], function(exports, OSRuntimeCore, Extension_SecurityModel) {
    var OS = OSRuntimeCore; {
        class RCCustomClaimRecordInner extends
        OS.DataTypes.GenericRecord {
            static attributesToDeclare() {
                return [
                    this.attr("CustomClaim", "customClaimAttr", "CustomClaim", false, false, OS.DataTypes.DataTypes.Record, function() {
                        return OS.DataTypes.ImmutableBase.getData(new Extension_SecurityModel.CustomClaimRec());
                    }, true, Extension_SecurityModel.CustomClaimRec)
                ].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
            }

            static fromStructure(str) {
                return new RCCustomClaimRecord(new RCCustomClaimRecord.RecordClass({
                    customClaimAttr: OS.DataTypes.ImmutableBase.getData(str)
                }));
            }

        }

        Extension_SecurityModel.RCCustomClaimRecord = RCCustomClaimRecordInner;

        RCCustomClaimRecordInner._isAnonymousRecord = true;
        RCCustomClaimRecordInner.UniqueId = "c606daa9-e66b-18c3-22fe-2092d1cf32a1";
        var RCCustomClaimRecord = RCCustomClaimRecordInner;
        RCCustomClaimRecord.init();
    }
});

define("Extension.Security.model$RLCustomClaimRecordList", ["exports", "@outsystems/runtime-core-js", "Extension.Security.model", "Extension.Security.model$RCCustomClaimRecord"], function(exports, OSRuntimeCore, Extension_SecurityModel) {
    var OS = OSRuntimeCore;
    class RLCustomClaimRecordList extends
    OS.DataTypes.GenericRecordList {
        static getItemType() {
            return Extension_SecurityModel.RCCustomClaimRecord;
        }

    }

    Extension_SecurityModel.RLCustomClaimRecordList = RLCustomClaimRecordList;

});

define("Extension.Security.model$TokenPayloadRec", ["exports", "@outsystems/runtime-core-js", "Extension.Security.model", "Extension.Security.model$RCCustomClaimRecord", "Extension.Security.model$RLCustomClaimRecordList"], function(exports, OSRuntimeCore, Extension_SecurityModel) {
    var OS = OSRuntimeCore; {
        class TokenPayloadRecInner extends
        OS.DataTypes.GenericRecord {
            static attributesToDeclare() {
                return [
                    this.attr("Issuer", "issuerAttr", "Issuer", true, false, OS.DataTypes.DataTypes.Text, function() {
                        return "";
                    }, true),
                    this.attr("Subject", "subjectAttr", "Subject", true, false, OS.DataTypes.DataTypes.Text, function() {
                        return "";
                    }, true),
                    this.attr("Audience", "audienceAttr", "Audience", true, false, OS.DataTypes.DataTypes.Text, function() {
                        return "";
                    }, true),
                    this.attr("ExpirationTime", "expirationTimeAttr", "ExpirationTime", true, false, OS.DataTypes.DataTypes.DateTime, function() {
                        return OS.DataTypes.DateTime.defaultValue;
                    }, true),
                    this.attr("NotBefore", "notBeforeAttr", "NotBefore", true, false, OS.DataTypes.DataTypes.DateTime, function() {
                        return OS.DataTypes.DateTime.defaultValue;
                    }, true),
                    this.attr("IssuedAt", "issuedAtAttr", "IssuedAt", true, false, OS.DataTypes.DataTypes.DateTime, function() {
                        return OS.DataTypes.DateTime.defaultValue;
                    }, true),
                    this.attr("JWTId", "jWTIdAttr", "JWTId", true, false, OS.DataTypes.DataTypes.Text, function() {
                        return "";
                    }, true),
                    this.attr("CustomClaims", "customClaimsAttr", "CustomClaims", true, false, OS.DataTypes.DataTypes.RecordList, function() {
                        return OS.DataTypes.ImmutableBase.getData(new Extension_SecurityModel.RLCustomClaimRecordList());
                    }, true, Extension_SecurityModel.RLCustomClaimRecordList)
                ].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
            }

        }

        Extension_SecurityModel.TokenPayloadRec = TokenPayloadRecInner;

        var TokenPayloadRec = TokenPayloadRecInner;
        TokenPayloadRec.init();
    }
});

define("Extension.Security.model$RCTokenPayloadRecord", ["exports", "@outsystems/runtime-core-js", "Extension.Security.model", "Extension.Security.model$TokenPayloadRec"], function(exports, OSRuntimeCore, Extension_SecurityModel) {
    var OS = OSRuntimeCore; {
        class RCTokenPayloadRecordInner extends
        OS.DataTypes.GenericRecord {
            static attributesToDeclare() {
                return [
                    this.attr("TokenPayload", "tokenPayloadAttr", "TokenPayload", false, false, OS.DataTypes.DataTypes.Record, function() {
                        return OS.DataTypes.ImmutableBase.getData(new Extension_SecurityModel.TokenPayloadRec());
                    }, true, Extension_SecurityModel.TokenPayloadRec)
                ].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
            }

            static fromStructure(str) {
                return new RCTokenPayloadRecord(new RCTokenPayloadRecord.RecordClass({
                    tokenPayloadAttr: OS.DataTypes.ImmutableBase.getData(str)
                }));
            }

        }

        Extension_SecurityModel.RCTokenPayloadRecord = RCTokenPayloadRecordInner;

        RCTokenPayloadRecordInner._isAnonymousRecord = true;
        RCTokenPayloadRecordInner.UniqueId = "0d4e0192-69c5-942e-41c0-fd9bd4bc6b35";
        var RCTokenPayloadRecord = RCTokenPayloadRecordInner;
        RCTokenPayloadRecord.init();
    }
});

define("Extension.Security.model$ValidationParametersRec", ["exports", "@outsystems/runtime-core-js", "Extension.Security.model"], function(exports, OSRuntimeCore, Extension_SecurityModel) {
    var OS = OSRuntimeCore; {
        class ValidationParametersRecInner extends
        OS.DataTypes.GenericRecord {
            static attributesToDeclare() {
                return [
                    this.attr("ValidateLifetime", "validateLifetimeAttr", "ValidateLifetime", true, false, OS.DataTypes.DataTypes.Boolean, function() {
                        return false;
                    }, true),
                    this.attr("ValidateAudience", "validateAudienceAttr", "ValidateAudience", true, false, OS.DataTypes.DataTypes.Boolean, function() {
                        return false;
                    }, true),
                    this.attr("ValidateIssuer", "validateIssuerAttr", "ValidateIssuer", true, false, OS.DataTypes.DataTypes.Boolean, function() {
                        return false;
                    }, true),
                    this.attr("ValidAudience", "validAudienceAttr", "ValidAudience", true, false, OS.DataTypes.DataTypes.Text, function() {
                        return "";
                    }, true),
                    this.attr("ValidIssuer", "validIssuerAttr", "ValidIssuer", true, false, OS.DataTypes.DataTypes.Text, function() {
                        return "";
                    }, true),
                    this.attr("IssuerSigningJWK", "issuerSigningJWKAttr", "IssuerSigningJWK", true, false, OS.DataTypes.DataTypes.Text, function() {
                        return "";
                    }, true)
                ].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
            }

        }

        Extension_SecurityModel.ValidationParametersRec = ValidationParametersRecInner;

        var ValidationParametersRec = ValidationParametersRecInner;
        ValidationParametersRec.init();
    }
});

define("Extension.Security.model$RCValidationParametersRecord", ["exports", "@outsystems/runtime-core-js", "Extension.Security.model", "Extension.Security.model$ValidationParametersRec"], function(exports, OSRuntimeCore, Extension_SecurityModel) {
    var OS = OSRuntimeCore; {
        class RCValidationParametersRecordInner extends
        OS.DataTypes.GenericRecord {
            static attributesToDeclare() {
                return [
                    this.attr("ValidationParameters", "validationParametersAttr", "ValidationParameters", false, false, OS.DataTypes.DataTypes.Record, function() {
                        return OS.DataTypes.ImmutableBase.getData(new Extension_SecurityModel.ValidationParametersRec());
                    }, true, Extension_SecurityModel.ValidationParametersRec)
                ].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
            }

            static fromStructure(str) {
                return new RCValidationParametersRecord(new RCValidationParametersRecord.RecordClass({
                    validationParametersAttr: OS.DataTypes.ImmutableBase.getData(str)
                }));
            }

        }

        Extension_SecurityModel.RCValidationParametersRecord = RCValidationParametersRecordInner;

        RCValidationParametersRecordInner._isAnonymousRecord = true;
        RCValidationParametersRecordInner.UniqueId = "0e05433d-4106-cdc6-373c-cdf0568c2230";
        var RCValidationParametersRecord = RCValidationParametersRecordInner;
        RCValidationParametersRecord.init();
    }
});

define("Extension.Security.model$RLValidationParametersRecordList", ["exports", "@outsystems/runtime-core-js", "Extension.Security.model", "Extension.Security.model$RCValidationParametersRecord"], function(exports, OSRuntimeCore, Extension_SecurityModel) {
    var OS = OSRuntimeCore;
    class RLValidationParametersRecordList extends
    OS.DataTypes.GenericRecordList {
        static getItemType() {
            return Extension_SecurityModel.RCValidationParametersRecord;
        }

    }

    Extension_SecurityModel.RLValidationParametersRecordList = RLValidationParametersRecordList;

});

define("Extension.Security.model$RLTokenPayloadRecordList", ["exports", "@outsystems/runtime-core-js", "Extension.Security.model", "Extension.Security.model$RCTokenPayloadRecord"], function(exports, OSRuntimeCore, Extension_SecurityModel) {
    var OS = OSRuntimeCore;
    class RLTokenPayloadRecordList extends
    OS.DataTypes.GenericRecordList {
        static getItemType() {
            return Extension_SecurityModel.RCTokenPayloadRecord;
        }

    }

    Extension_SecurityModel.RLTokenPayloadRecordList = RLTokenPayloadRecordList;

});

define("Extension.Security.model$RLTokenPayloadList", ["exports", "@outsystems/runtime-core-js", "Extension.Security.model", "Extension.Security.model$TokenPayloadRec"], function(exports, OSRuntimeCore, Extension_SecurityModel) {
    var OS = OSRuntimeCore;
    class RLTokenPayloadList extends
    OS.DataTypes.GenericRecordList {
        static getItemType() {
            return Extension_SecurityModel.TokenPayloadRec;
        }

    }

    Extension_SecurityModel.RLTokenPayloadList = RLTokenPayloadList;

});

define("Extension.Security.model$RLValidationParametersList", ["exports", "@outsystems/runtime-core-js", "Extension.Security.model", "Extension.Security.model$ValidationParametersRec"], function(exports, OSRuntimeCore, Extension_SecurityModel) {
    var OS = OSRuntimeCore;
    class RLValidationParametersList extends
    OS.DataTypes.GenericRecordList {
        static getItemType() {
            return Extension_SecurityModel.ValidationParametersRec;
        }

    }

    Extension_SecurityModel.RLValidationParametersList = RLValidationParametersList;

});

define("Extension.Security.model", ["exports", "@outsystems/runtime-core-js"], function(exports, OSRuntimeCore) {
    var OS = OSRuntimeCore;
    var Extension_SecurityModel = exports;
});