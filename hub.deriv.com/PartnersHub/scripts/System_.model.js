define("System_.model$ENEntityEntityRecord", ["exports", "@outsystems/runtime-core-js", "System_.model"], function(exports, OSRuntimeCore, System_Model) {
    var OS = OSRuntimeCore; {
        class ENEntityEntityRecordInner extends
        OS.DataTypes.GenericRecord {
            static attributesToDeclare() {
                return [
                    this.attr("Id", "idAttr", "Id", true, false, OS.DataTypes.DataTypes.Text, function() {
                        return "";
                    }, true),
                    this.attr("Name", "nameAttr", "Name", true, false, OS.DataTypes.DataTypes.Text, function() {
                        return "";
                    }, true),
                    this.attr("ApplicationId", "applicationIdAttr", "ApplicationId", false, false, OS.DataTypes.DataTypes.Text, function() {
                        return "";
                    }, true),
                    this.attr("IsStatic", "isStaticAttr", "IsStatic", true, false, OS.DataTypes.DataTypes.Boolean, function() {
                        return false;
                    }, true),
                    this.attr("PrimaryKeyAttribute", "primaryKeyAttributeAttr", "PrimaryKeyAttribute", false, false, OS.DataTypes.DataTypes.Text, function() {
                        return "";
                    }, true)
                ].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
            }

        }

        System_Model.ENEntityEntityRecord = ENEntityEntityRecordInner;

        var ENEntityEntityRecord = ENEntityEntityRecordInner;
        ENEntityEntityRecord.init();
    }
});

define("System_.model$RLEntityList", ["exports", "@outsystems/runtime-core-js", "System_.model", "System_.model$ENEntityEntityRecord"], function(exports, OSRuntimeCore, System_Model) {
    var OS = OSRuntimeCore;
    class RLEntityList extends
    OS.DataTypes.GenericRecordList {
        static getItemType() {
            return System_Model.ENEntityEntityRecord;
        }

    }

    System_Model.RLEntityList = RLEntityList;

});

define("System_.model$RC_05f199cf8f734662fa6eaa91568947ff", ["exports", "@outsystems/runtime-core-js", "System_.model", "System_.model$ENEntityEntityRecord"], function(exports, OSRuntimeCore, System_Model) {
    var OS = OSRuntimeCore; {
        class RC_05f199cf8f734662fa6eaa91568947ffInner extends
        OS.DataTypes.GenericRecord {
            static attributesToDeclare() {
                return [
                    this.attr("Entity", "entityAttr", "Entity", false, false, OS.DataTypes.DataTypes.Record, function() {
                        return OS.DataTypes.ImmutableBase.getData(new System_Model.ENEntityEntityRecord());
                    }, true, System_Model.ENEntityEntityRecord)
                ].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
            }

            static fromStructure(str) {
                return new RC_05f199cf8f734662fa6eaa91568947ff(new RC_05f199cf8f734662fa6eaa91568947ff.RecordClass({
                    entityAttr: OS.DataTypes.ImmutableBase.getData(str)
                }));
            }

        }

        System_Model.RC_05f199cf8f734662fa6eaa91568947ff = RC_05f199cf8f734662fa6eaa91568947ffInner;

        RC_05f199cf8f734662fa6eaa91568947ffInner._isAnonymousRecord = true;
        RC_05f199cf8f734662fa6eaa91568947ffInner.UniqueId = "05f199cf-8f73-4662-fa6e-aa91568947ff";
        var RC_05f199cf8f734662fa6eaa91568947ff = RC_05f199cf8f734662fa6eaa91568947ffInner;
        RC_05f199cf8f734662fa6eaa91568947ff.init();
    }
});

define("System_.model$PasswordComplexityPolicyRec", ["exports", "@outsystems/runtime-core-js", "System_.model"], function(exports, OSRuntimeCore, System_Model) {
    var OS = OSRuntimeCore; {
        class PasswordComplexityPolicyRecInner extends
        OS.DataTypes.GenericRecord {
            static attributesToDeclare() {
                return [
                    this.attr("MinimumLength", "minimumLengthAttr", "MinimumLength", false, false, OS.DataTypes.DataTypes.Integer, function() {
                        return 0;
                    }, true),
                    this.attr("UpperCaseLetterRequired", "upperCaseLetterRequiredAttr", "UpperCaseLetterRequired", false, false, OS.DataTypes.DataTypes.Boolean, function() {
                        return false;
                    }, true),
                    this.attr("LowerCaseLetterRequired", "lowerCaseLetterRequiredAttr", "LowerCaseLetterRequired", false, false, OS.DataTypes.DataTypes.Boolean, function() {
                        return false;
                    }, true),
                    this.attr("NumberRequired", "numberRequiredAttr", "NumberRequired", false, false, OS.DataTypes.DataTypes.Boolean, function() {
                        return false;
                    }, true),
                    this.attr("SpecialCharacterRequired", "specialCharacterRequiredAttr", "SpecialCharacterRequired", false, false, OS.DataTypes.DataTypes.Boolean, function() {
                        return false;
                    }, true)
                ].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
            }

        }

        System_Model.PasswordComplexityPolicyRec = PasswordComplexityPolicyRecInner;

        var PasswordComplexityPolicyRec = PasswordComplexityPolicyRecInner;
        PasswordComplexityPolicyRec.init();
    }
});

define("System_.model$StartUserRegistrationFailureReasonRec", ["exports", "@outsystems/runtime-core-js", "System_.model"], function(exports, OSRuntimeCore, System_Model) {
    var OS = OSRuntimeCore; {
        class StartUserRegistrationFailureReasonRecInner extends
        OS.DataTypes.GenericRecord {
            static attributesToDeclare() {
                return [
                    this.attr("InvalidEmail", "invalidEmailAttr", "InvalidEmail", false, false, OS.DataTypes.DataTypes.Boolean, function() {
                        return false;
                    }, true),
                    this.attr("InvalidName", "invalidNameAttr", "InvalidName", false, false, OS.DataTypes.DataTypes.Boolean, function() {
                        return false;
                    }, true),
                    this.attr("UserAlreadyRegistered", "userAlreadyRegisteredAttr", "UserAlreadyRegistered", false, false, OS.DataTypes.DataTypes.Boolean, function() {
                        return false;
                    }, true)
                ].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
            }

        }

        System_Model.StartUserRegistrationFailureReasonRec = StartUserRegistrationFailureReasonRecInner;

        var StartUserRegistrationFailureReasonRec = StartUserRegistrationFailureReasonRecInner;
        StartUserRegistrationFailureReasonRec.init();
    }
});

define("System_.model$RC_3c619bc2cefd7ed268d81977413e1480", ["exports", "@outsystems/runtime-core-js", "System_.model", "System_.model$StartUserRegistrationFailureReasonRec"], function(exports, OSRuntimeCore, System_Model) {
    var OS = OSRuntimeCore; {
        class RC_3c619bc2cefd7ed268d81977413e1480Inner extends
        OS.DataTypes.GenericRecord {
            static attributesToDeclare() {
                return [
                    this.attr("StartUserRegistrationFailureReason", "startUserRegistrationFailureReasonAttr", "StartUserRegistrationFailureReason", false, false, OS.DataTypes.DataTypes.Record, function() {
                        return OS.DataTypes.ImmutableBase.getData(new OS.SystemStructures.StartUserRegistrationFailureReasonRec());
                    }, true, OS.SystemStructures.StartUserRegistrationFailureReasonRec)
                ].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
            }

            static fromStructure(str) {
                return new RC_3c619bc2cefd7ed268d81977413e1480(new RC_3c619bc2cefd7ed268d81977413e1480.RecordClass({
                    startUserRegistrationFailureReasonAttr: OS.DataTypes.ImmutableBase.getData(str)
                }));
            }

        }

        System_Model.RC_3c619bc2cefd7ed268d81977413e1480 = RC_3c619bc2cefd7ed268d81977413e1480Inner;

        RC_3c619bc2cefd7ed268d81977413e1480Inner._isAnonymousRecord = true;
        RC_3c619bc2cefd7ed268d81977413e1480Inner.UniqueId = "3c619bc2-cefd-7ed2-68d8-1977413e1480";
        var RC_3c619bc2cefd7ed268d81977413e1480 = RC_3c619bc2cefd7ed268d81977413e1480Inner;
        RC_3c619bc2cefd7ed268d81977413e1480.init();
    }
});

define("System_.model$RL_089f77c93d3ce6afa3f16b6014987fb9", ["exports", "@outsystems/runtime-core-js", "System_.model", "System_.model$RC_3c619bc2cefd7ed268d81977413e1480"], function(exports, OSRuntimeCore, System_Model) {
    var OS = OSRuntimeCore;
    class RL_089f77c93d3ce6afa3f16b6014987fb9 extends
    OS.DataTypes.GenericRecordList {
        static getItemType() {
            return System_Model.RC_3c619bc2cefd7ed268d81977413e1480;
        }

    }

    System_Model.RL_089f77c93d3ce6afa3f16b6014987fb9 = RL_089f77c93d3ce6afa3f16b6014987fb9;

});

define("System_.model$ENRoleEntityRecord", ["exports", "@outsystems/runtime-core-js", "System_.model"], function(exports, OSRuntimeCore, System_Model) {
    var OS = OSRuntimeCore; {
        class ENRoleEntityRecordInner extends
        OS.DataTypes.GenericRecord {
            static attributesToDeclare() {
                return [
                    this.attr("Id", "idAttr", "Id", true, false, OS.DataTypes.DataTypes.Text, function() {
                        return "";
                    }, true),
                    this.attr("Key", "keyAttr", "Key", true, false, OS.DataTypes.DataTypes.Text, function() {
                        return "";
                    }, true),
                    this.attr("Name", "nameAttr", "Name", true, false, OS.DataTypes.DataTypes.Text, function() {
                        return "";
                    }, true),
                    this.attr("Description", "descriptionAttr", "Description", false, false, OS.DataTypes.DataTypes.Text, function() {
                        return "";
                    }, true),
                    this.attr("ApplicationId", "applicationIdAttr", "ApplicationId", true, false, OS.DataTypes.DataTypes.Text, function() {
                        return "";
                    }, true)
                ].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
            }

        }

        System_Model.ENRoleEntityRecord = ENRoleEntityRecordInner;

        var ENRoleEntityRecord = ENRoleEntityRecordInner;
        ENRoleEntityRecord.init();
    }
});

define("System_.model$ENActivityOutputEntityRecord", ["exports", "@outsystems/runtime-core-js", "System_.model"], function(exports, OSRuntimeCore, System_Model) {
    var OS = OSRuntimeCore; {
        class ENActivityOutputEntityRecordInner extends
        OS.DataTypes.GenericRecord {
            static attributesToDeclare() {
                return [
                    this.attr("Id", "idAttr", "Id", true, false, OS.DataTypes.DataTypes.LongInteger, function() {
                        return OS.DataTypes.LongInteger.defaultValue;
                    }, true),
                    this.attr("ActivityId", "activityIdAttr", "ActivityId", false, false, OS.DataTypes.DataTypes.LongInteger, function() {
                        return OS.DataTypes.LongInteger.defaultValue;
                    }, true),
                    this.attr("OutputDefinitionId", "outputDefinitionIdAttr", "OutputDefinitionId", true, false, OS.DataTypes.DataTypes.Text, function() {
                        return "";
                    }, true),
                    this.attr("OutputDefinitionKey", "outputDefinitionKeyAttr", "OutputDefinitionKey", true, false, OS.DataTypes.DataTypes.Text, function() {
                        return "";
                    }, true),
                    this.attr("Name", "nameAttr", "Name", true, false, OS.DataTypes.DataTypes.Text, function() {
                        return "";
                    }, true),
                    this.attr("DataType", "dataTypeAttr", "DataType", true, false, OS.DataTypes.DataTypes.Text, function() {
                        return "";
                    }, true),
                    this.attr("OutputValue", "outputValueAttr", "OutputValue", false, false, OS.DataTypes.DataTypes.Text, function() {
                        return "";
                    }, true),
                    this.attr("ForeignKeyEntityId", "foreignKeyEntityIdAttr", "ForeignKeyEntityId", false, false, OS.DataTypes.DataTypes.Text, function() {
                        return "";
                    }, true)
                ].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
            }

        }

        System_Model.ENActivityOutputEntityRecord = ENActivityOutputEntityRecordInner;

        var ENActivityOutputEntityRecord = ENActivityOutputEntityRecordInner;
        ENActivityOutputEntityRecord.init();
    }
});

define("System_.model$ENTenantEntityRecord", ["exports", "@outsystems/runtime-core-js", "System_.model"], function(exports, OSRuntimeCore, System_Model) {
    var OS = OSRuntimeCore; {
        class ENTenantEntityRecordInner extends
        OS.DataTypes.GenericRecord {
            static attributesToDeclare() {
                return [
                    this.attr("Id", "idAttr", "Id", true, false, OS.DataTypes.DataTypes.LongInteger, function() {
                        return OS.DataTypes.LongInteger.defaultValue;
                    }, true),
                    this.attr("Name", "nameAttr", "Name", true, false, OS.DataTypes.DataTypes.Text, function() {
                        return "";
                    }, true)
                ].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
            }

        }

        System_Model.ENTenantEntityRecord = ENTenantEntityRecordInner;

        var ENTenantEntityRecord = ENTenantEntityRecordInner;
        ENTenantEntityRecord.init();
    }
});

define("System_.model$RC_40d0f5c5ba630b105850cead15ae2223", ["exports", "@outsystems/runtime-core-js", "System_.model", "System_.model$ENTenantEntityRecord"], function(exports, OSRuntimeCore, System_Model) {
    var OS = OSRuntimeCore; {
        class RC_40d0f5c5ba630b105850cead15ae2223Inner extends
        OS.DataTypes.GenericRecord {
            static attributesToDeclare() {
                return [
                    this.attr("Tenant", "tenantAttr", "Tenant", false, false, OS.DataTypes.DataTypes.Record, function() {
                        return OS.DataTypes.ImmutableBase.getData(new System_Model.ENTenantEntityRecord());
                    }, true, System_Model.ENTenantEntityRecord)
                ].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
            }

            static fromStructure(str) {
                return new RC_40d0f5c5ba630b105850cead15ae2223(new RC_40d0f5c5ba630b105850cead15ae2223.RecordClass({
                    tenantAttr: OS.DataTypes.ImmutableBase.getData(str)
                }));
            }

        }

        System_Model.RC_40d0f5c5ba630b105850cead15ae2223 = RC_40d0f5c5ba630b105850cead15ae2223Inner;

        RC_40d0f5c5ba630b105850cead15ae2223Inner._isAnonymousRecord = true;
        RC_40d0f5c5ba630b105850cead15ae2223Inner.UniqueId = "40d0f5c5-ba63-0b10-5850-cead15ae2223";
        var RC_40d0f5c5ba630b105850cead15ae2223 = RC_40d0f5c5ba630b105850cead15ae2223Inner;
        RC_40d0f5c5ba630b105850cead15ae2223.init();
    }
});

define("System_.model$RL_1021a34c12afbc1ae6d31ca4929b6091", ["exports", "@outsystems/runtime-core-js", "System_.model", "System_.model$RC_40d0f5c5ba630b105850cead15ae2223"], function(exports, OSRuntimeCore, System_Model) {
    var OS = OSRuntimeCore;
    class RL_1021a34c12afbc1ae6d31ca4929b6091 extends
    OS.DataTypes.GenericRecordList {
        static getItemType() {
            return System_Model.RC_40d0f5c5ba630b105850cead15ae2223;
        }

    }

    System_Model.RL_1021a34c12afbc1ae6d31ca4929b6091 = RL_1021a34c12afbc1ae6d31ca4929b6091;

});

define("System_.model$ENActivityKindEntityRecord", ["exports", "@outsystems/runtime-core-js", "System_.model"], function(exports, OSRuntimeCore, System_Model) {
    var OS = OSRuntimeCore; {
        class ENActivityKindEntityRecordInner extends
        OS.DataTypes.GenericRecord {
            static attributesToDeclare() {
                return [
                    this.attr("Id", "idAttr", "Id", true, false, OS.DataTypes.DataTypes.LongInteger, function() {
                        return OS.DataTypes.LongInteger.defaultValue;
                    }, true),
                    this.attr("Name", "nameAttr", "Name", true, false, OS.DataTypes.DataTypes.Text, function() {
                        return "";
                    }, true)
                ].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
            }

        }

        System_Model.ENActivityKindEntityRecord = ENActivityKindEntityRecordInner;

        var ENActivityKindEntityRecord = ENActivityKindEntityRecordInner;
        ENActivityKindEntityRecord.init();
    }
});

define("System_.model$RC_99e7afb0bae555fcf70d1cd06f23ae14", ["exports", "@outsystems/runtime-core-js", "System_.model", "System_.model$ENActivityKindEntityRecord"], function(exports, OSRuntimeCore, System_Model) {
    var OS = OSRuntimeCore; {
        class RC_99e7afb0bae555fcf70d1cd06f23ae14Inner extends
        OS.DataTypes.GenericRecord {
            static attributesToDeclare() {
                return [
                    this.attr("ActivityKind", "activityKindAttr", "ActivityKind", false, false, OS.DataTypes.DataTypes.Record, function() {
                        return OS.DataTypes.ImmutableBase.getData(new System_Model.ENActivityKindEntityRecord());
                    }, true, System_Model.ENActivityKindEntityRecord)
                ].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
            }

            static fromStructure(str) {
                return new RC_99e7afb0bae555fcf70d1cd06f23ae14(new RC_99e7afb0bae555fcf70d1cd06f23ae14.RecordClass({
                    activityKindAttr: OS.DataTypes.ImmutableBase.getData(str)
                }));
            }

        }

        System_Model.RC_99e7afb0bae555fcf70d1cd06f23ae14 = RC_99e7afb0bae555fcf70d1cd06f23ae14Inner;

        RC_99e7afb0bae555fcf70d1cd06f23ae14Inner._isAnonymousRecord = true;
        RC_99e7afb0bae555fcf70d1cd06f23ae14Inner.UniqueId = "99e7afb0-bae5-55fc-f70d-1cd06f23ae14";
        var RC_99e7afb0bae555fcf70d1cd06f23ae14 = RC_99e7afb0bae555fcf70d1cd06f23ae14Inner;
        RC_99e7afb0bae555fcf70d1cd06f23ae14.init();
    }
});

define("System_.model$RL_12438f333dd1f8c1a50e2396d5890dd1", ["exports", "@outsystems/runtime-core-js", "System_.model", "System_.model$RC_99e7afb0bae555fcf70d1cd06f23ae14"], function(exports, OSRuntimeCore, System_Model) {
    var OS = OSRuntimeCore;
    class RL_12438f333dd1f8c1a50e2396d5890dd1 extends
    OS.DataTypes.GenericRecordList {
        static getItemType() {
            return System_Model.RC_99e7afb0bae555fcf70d1cd06f23ae14;
        }

    }

    System_Model.RL_12438f333dd1f8c1a50e2396d5890dd1 = RL_12438f333dd1f8c1a50e2396d5890dd1;

});

define("System_.model$RC_13630884b629a3a59e929e1cdea42eb1", ["exports", "@outsystems/runtime-core-js", "System_.model", "System_.model$ENRoleEntityRecord"], function(exports, OSRuntimeCore, System_Model) {
    var OS = OSRuntimeCore; {
        class RC_13630884b629a3a59e929e1cdea42eb1Inner extends
        OS.DataTypes.GenericRecord {
            static attributesToDeclare() {
                return [
                    this.attr("Role", "roleAttr", "Role", false, false, OS.DataTypes.DataTypes.Record, function() {
                        return OS.DataTypes.ImmutableBase.getData(new System_Model.ENRoleEntityRecord());
                    }, true, System_Model.ENRoleEntityRecord)
                ].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
            }

            static fromStructure(str) {
                return new RC_13630884b629a3a59e929e1cdea42eb1(new RC_13630884b629a3a59e929e1cdea42eb1.RecordClass({
                    roleAttr: OS.DataTypes.ImmutableBase.getData(str)
                }));
            }

        }

        System_Model.RC_13630884b629a3a59e929e1cdea42eb1 = RC_13630884b629a3a59e929e1cdea42eb1Inner;

        RC_13630884b629a3a59e929e1cdea42eb1Inner._isAnonymousRecord = true;
        RC_13630884b629a3a59e929e1cdea42eb1Inner.UniqueId = "13630884-b629-a3a5-9e92-9e1cdea42eb1";
        var RC_13630884b629a3a59e929e1cdea42eb1 = RC_13630884b629a3a59e929e1cdea42eb1Inner;
        RC_13630884b629a3a59e929e1cdea42eb1.init();
    }
});

define("System_.model$UserLoginFailureReasonRec", ["exports", "@outsystems/runtime-core-js", "System_.model"], function(exports, OSRuntimeCore, System_Model) {
    var OS = OSRuntimeCore; {
        class UserLoginFailureReasonRecInner extends
        OS.DataTypes.GenericRecord {
            static attributesToDeclare() {
                return [
                    this.attr("InvalidCredentials", "invalidCredentialsAttr", "InvalidCredentials", false, false, OS.DataTypes.DataTypes.Boolean, function() {
                        return false;
                    }, true),
                    this.attr("TooManyFailedLoginAttempts", "tooManyFailedLoginAttemptsAttr", "TooManyFailedLoginAttempts", false, false, OS.DataTypes.DataTypes.Boolean, function() {
                        return false;
                    }, true)
                ].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
            }

        }

        System_Model.UserLoginFailureReasonRec = UserLoginFailureReasonRecInner;

        var UserLoginFailureReasonRec = UserLoginFailureReasonRecInner;
        UserLoginFailureReasonRec.init();
    }
});

define("System_.model$UserLoginResultRec", ["exports", "@outsystems/runtime-core-js", "System_.model", "System_.model$UserLoginFailureReasonRec"], function(exports, OSRuntimeCore, System_Model) {
    var OS = OSRuntimeCore; {
        class UserLoginResultRecInner extends
        OS.DataTypes.GenericRecord {
            static attributesToDeclare() {
                return [
                    this.attr("RetryAfterSeconds", "retryAfterSecondsAttr", "RetryAfterSeconds", false, false, OS.DataTypes.DataTypes.Integer, function() {
                        return 0;
                    }, true),
                    this.attr("Success", "successAttr", "Success", false, false, OS.DataTypes.DataTypes.Boolean, function() {
                        return false;
                    }, true),
                    this.attr("UserId", "userIdAttr", "UserId", false, false, OS.DataTypes.DataTypes.Text, function() {
                        return "";
                    }, true),
                    this.attr("UserLoginFailureReason", "userLoginFailureReasonAttr", "UserLoginFailureReason", false, false, OS.DataTypes.DataTypes.Record, function() {
                        return OS.DataTypes.ImmutableBase.getData(new OS.SystemStructures.UserLoginFailureReasonRec());
                    }, true, OS.SystemStructures.UserLoginFailureReasonRec)
                ].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
            }

        }

        System_Model.UserLoginResultRec = UserLoginResultRecInner;

        var UserLoginResultRec = UserLoginResultRecInner;
        UserLoginResultRec.init();
    }
});

define("System_.model$RC_f9a589fe5b81c3bda7db0e574d5d11fb", ["exports", "@outsystems/runtime-core-js", "System_.model", "System_.model$UserLoginResultRec"], function(exports, OSRuntimeCore, System_Model) {
    var OS = OSRuntimeCore; {
        class RC_f9a589fe5b81c3bda7db0e574d5d11fbInner extends
        OS.DataTypes.GenericRecord {
            static attributesToDeclare() {
                return [
                    this.attr("UserLoginResult", "userLoginResultAttr", "UserLoginResult", false, false, OS.DataTypes.DataTypes.Record, function() {
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

        System_Model.RC_f9a589fe5b81c3bda7db0e574d5d11fb = RC_f9a589fe5b81c3bda7db0e574d5d11fbInner;

        RC_f9a589fe5b81c3bda7db0e574d5d11fbInner._isAnonymousRecord = true;
        RC_f9a589fe5b81c3bda7db0e574d5d11fbInner.UniqueId = "f9a589fe-5b81-c3bd-a7db-0e574d5d11fb";
        var RC_f9a589fe5b81c3bda7db0e574d5d11fb = RC_f9a589fe5b81c3bda7db0e574d5d11fbInner;
        RC_f9a589fe5b81c3bda7db0e574d5d11fb.init();
    }
});

define("System_.model$RL_137c1fde2390fc7845ae92a0265be990", ["exports", "@outsystems/runtime-core-js", "System_.model", "System_.model$RC_f9a589fe5b81c3bda7db0e574d5d11fb"], function(exports, OSRuntimeCore, System_Model) {
    var OS = OSRuntimeCore;
    class RL_137c1fde2390fc7845ae92a0265be990 extends
    OS.DataTypes.GenericRecordList {
        static getItemType() {
            return System_Model.RC_f9a589fe5b81c3bda7db0e574d5d11fb;
        }

    }

    System_Model.RL_137c1fde2390fc7845ae92a0265be990 = RL_137c1fde2390fc7845ae92a0265be990;

});

define("System_.model$RLActivityOutputList", ["exports", "@outsystems/runtime-core-js", "System_.model", "System_.model$ENActivityOutputEntityRecord"], function(exports, OSRuntimeCore, System_Model) {
    var OS = OSRuntimeCore;
    class RLActivityOutputList extends
    OS.DataTypes.GenericRecordList {
        static getItemType() {
            return System_Model.ENActivityOutputEntityRecord;
        }

    }

    System_Model.RLActivityOutputList = RLActivityOutputList;

});

define("System_.model$UserInfoRec", ["exports", "@outsystems/runtime-core-js", "System_.model"], function(exports, OSRuntimeCore, System_Model) {
    var OS = OSRuntimeCore; {
        class UserInfoRecInner extends
        OS.DataTypes.GenericRecord {
            static attributesToDeclare() {
                return [
                    this.attr("Name", "nameAttr", "Name", false, false, OS.DataTypes.DataTypes.Text, function() {
                        return "";
                    }, true),
                    this.attr("Email", "emailAttr", "Email", false, false, OS.DataTypes.DataTypes.Email, function() {
                        return "";
                    }, true),
                    this.attr("PhotoURL", "photoURLAttr", "PhotoURL", false, false, OS.DataTypes.DataTypes.Text, function() {
                        return "";
                    }, true)
                ].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
            }

        }

        System_Model.UserInfoRec = UserInfoRecInner;

        var UserInfoRec = UserInfoRecInner;
        UserInfoRec.init();
    }
});

define("System_.model$RC_79f003baa030e546826ed42c3962f582", ["exports", "@outsystems/runtime-core-js", "System_.model", "System_.model$UserInfoRec"], function(exports, OSRuntimeCore, System_Model) {
    var OS = OSRuntimeCore; {
        class RC_79f003baa030e546826ed42c3962f582Inner extends
        OS.DataTypes.GenericRecord {
            static attributesToDeclare() {
                return [
                    this.attr("UserInfo", "userInfoAttr", "UserInfo", false, false, OS.DataTypes.DataTypes.Record, function() {
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

        System_Model.RC_79f003baa030e546826ed42c3962f582 = RC_79f003baa030e546826ed42c3962f582Inner;

        RC_79f003baa030e546826ed42c3962f582Inner._isAnonymousRecord = true;
        RC_79f003baa030e546826ed42c3962f582Inner.UniqueId = "79f003ba-a030-e546-826e-d42c3962f582";
        var RC_79f003baa030e546826ed42c3962f582 = RC_79f003baa030e546826ed42c3962f582Inner;
        RC_79f003baa030e546826ed42c3962f582.init();
    }
});

define("System_.model$RL_1503951706c05a1675ae923dc239c757", ["exports", "@outsystems/runtime-core-js", "System_.model", "System_.model$RC_79f003baa030e546826ed42c3962f582"], function(exports, OSRuntimeCore, System_Model) {
    var OS = OSRuntimeCore;
    class RL_1503951706c05a1675ae923dc239c757 extends
    OS.DataTypes.GenericRecordList {
        static getItemType() {
            return System_Model.RC_79f003baa030e546826ed42c3962f582;
        }

    }

    System_Model.RL_1503951706c05a1675ae923dc239c757 = RL_1503951706c05a1675ae923dc239c757;

});

define("System_.model$FinishResetPasswordFailureReasonRec", ["exports", "@outsystems/runtime-core-js", "System_.model"], function(exports, OSRuntimeCore, System_Model) {
    var OS = OSRuntimeCore; {
        class FinishResetPasswordFailureReasonRecInner extends
        OS.DataTypes.GenericRecord {
            static attributesToDeclare() {
                return [
                    this.attr("PasswordComplexityPolicyFailed", "passwordComplexityPolicyFailedAttr", "PasswordComplexityPolicyFailed", false, false, OS.DataTypes.DataTypes.Boolean, function() {
                        return false;
                    }, true),
                    this.attr("InvalidVerificationCode", "invalidVerificationCodeAttr", "InvalidVerificationCode", false, false, OS.DataTypes.DataTypes.Boolean, function() {
                        return false;
                    }, true),
                    this.attr("InvalidEmail", "invalidEmailAttr", "InvalidEmail", false, false, OS.DataTypes.DataTypes.Boolean, function() {
                        return false;
                    }, true)
                ].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
            }

        }

        System_Model.FinishResetPasswordFailureReasonRec = FinishResetPasswordFailureReasonRecInner;

        var FinishResetPasswordFailureReasonRec = FinishResetPasswordFailureReasonRecInner;
        FinishResetPasswordFailureReasonRec.init();
    }
});

define("System_.model$RC_1ba3db8c7175cd095b4f1a36c3a1e53d", ["exports", "@outsystems/runtime-core-js", "System_.model", "System_.model$FinishResetPasswordFailureReasonRec"], function(exports, OSRuntimeCore, System_Model) {
    var OS = OSRuntimeCore; {
        class RC_1ba3db8c7175cd095b4f1a36c3a1e53dInner extends
        OS.DataTypes.GenericRecord {
            static attributesToDeclare() {
                return [
                    this.attr("FinishResetPasswordFailureReason", "finishResetPasswordFailureReasonAttr", "FinishResetPasswordFailureReason", false, false, OS.DataTypes.DataTypes.Record, function() {
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

        System_Model.RC_1ba3db8c7175cd095b4f1a36c3a1e53d = RC_1ba3db8c7175cd095b4f1a36c3a1e53dInner;

        RC_1ba3db8c7175cd095b4f1a36c3a1e53dInner._isAnonymousRecord = true;
        RC_1ba3db8c7175cd095b4f1a36c3a1e53dInner.UniqueId = "1ba3db8c-7175-cd09-5b4f-1a36c3a1e53d";
        var RC_1ba3db8c7175cd095b4f1a36c3a1e53d = RC_1ba3db8c7175cd095b4f1a36c3a1e53dInner;
        RC_1ba3db8c7175cd095b4f1a36c3a1e53d.init();
    }
});

define("System_.model$UpdateUserFailureReasonRec", ["exports", "@outsystems/runtime-core-js", "System_.model"], function(exports, OSRuntimeCore, System_Model) {
    var OS = OSRuntimeCore; {
        class UpdateUserFailureReasonRecInner extends
        OS.DataTypes.GenericRecord {
            static attributesToDeclare() {
                return [
                    this.attr("InvalidCredentials", "invalidCredentialsAttr", "InvalidCredentials", false, false, OS.DataTypes.DataTypes.Boolean, function() {
                        return false;
                    }, true),
                    this.attr("InvalidName", "invalidNameAttr", "InvalidName", false, false, OS.DataTypes.DataTypes.Boolean, function() {
                        return false;
                    }, true),
                    this.attr("InvalidPhotoURL", "invalidPhotoURLAttr", "InvalidPhotoURL", false, false, OS.DataTypes.DataTypes.Boolean, function() {
                        return false;
                    }, true)
                ].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
            }

        }

        System_Model.UpdateUserFailureReasonRec = UpdateUserFailureReasonRecInner;

        var UpdateUserFailureReasonRec = UpdateUserFailureReasonRecInner;
        UpdateUserFailureReasonRec.init();
    }
});

define("System_.model$UpdateUserResultRec", ["exports", "@outsystems/runtime-core-js", "System_.model", "System_.model$UpdateUserFailureReasonRec"], function(exports, OSRuntimeCore, System_Model) {
    var OS = OSRuntimeCore; {
        class UpdateUserResultRecInner extends
        OS.DataTypes.GenericRecord {
            static attributesToDeclare() {
                return [
                    this.attr("Success", "successAttr", "Success", false, false, OS.DataTypes.DataTypes.Boolean, function() {
                        return false;
                    }, true),
                    this.attr("UserPhotoURL", "userPhotoURLAttr", "UserPhotoURL", false, false, OS.DataTypes.DataTypes.Text, function() {
                        return "";
                    }, true),
                    this.attr("UpdateUserFailureReason", "updateUserFailureReasonAttr", "UpdateUserFailureReason", false, false, OS.DataTypes.DataTypes.Record, function() {
                        return OS.DataTypes.ImmutableBase.getData(new OS.SystemStructures.UpdateUserFailureReasonRec());
                    }, true, OS.SystemStructures.UpdateUserFailureReasonRec)
                ].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
            }

        }

        System_Model.UpdateUserResultRec = UpdateUserResultRecInner;

        var UpdateUserResultRec = UpdateUserResultRecInner;
        UpdateUserResultRec.init();
    }
});

define("System_.model$RC_bd573fb2cb521691dc6a8c4b02eeb054", ["exports", "@outsystems/runtime-core-js", "System_.model", "System_.model$UpdateUserResultRec"], function(exports, OSRuntimeCore, System_Model) {
    var OS = OSRuntimeCore; {
        class RC_bd573fb2cb521691dc6a8c4b02eeb054Inner extends
        OS.DataTypes.GenericRecord {
            static attributesToDeclare() {
                return [
                    this.attr("UpdateUserResult", "updateUserResultAttr", "UpdateUserResult", false, false, OS.DataTypes.DataTypes.Record, function() {
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

        System_Model.RC_bd573fb2cb521691dc6a8c4b02eeb054 = RC_bd573fb2cb521691dc6a8c4b02eeb054Inner;

        RC_bd573fb2cb521691dc6a8c4b02eeb054Inner._isAnonymousRecord = true;
        RC_bd573fb2cb521691dc6a8c4b02eeb054Inner.UniqueId = "bd573fb2-cb52-1691-dc6a-8c4b02eeb054";
        var RC_bd573fb2cb521691dc6a8c4b02eeb054 = RC_bd573fb2cb521691dc6a8c4b02eeb054Inner;
        RC_bd573fb2cb521691dc6a8c4b02eeb054.init();
    }
});

define("System_.model$RL_201410915258bdd92387bbd4bec2a7bb", ["exports", "@outsystems/runtime-core-js", "System_.model", "System_.model$RC_bd573fb2cb521691dc6a8c4b02eeb054"], function(exports, OSRuntimeCore, System_Model) {
    var OS = OSRuntimeCore;
    class RL_201410915258bdd92387bbd4bec2a7bb extends
    OS.DataTypes.GenericRecordList {
        static getItemType() {
            return System_Model.RC_bd573fb2cb521691dc6a8c4b02eeb054;
        }

    }

    System_Model.RL_201410915258bdd92387bbd4bec2a7bb = RL_201410915258bdd92387bbd4bec2a7bb;

});

define("System_.model$ENActivityStatusEntityRecord", ["exports", "@outsystems/runtime-core-js", "System_.model"], function(exports, OSRuntimeCore, System_Model) {
    var OS = OSRuntimeCore; {
        class ENActivityStatusEntityRecordInner extends
        OS.DataTypes.GenericRecord {
            static attributesToDeclare() {
                return [
                    this.attr("Id", "idAttr", "Id", true, false, OS.DataTypes.DataTypes.LongInteger, function() {
                        return OS.DataTypes.LongInteger.defaultValue;
                    }, true),
                    this.attr("Name", "nameAttr", "Name", true, false, OS.DataTypes.DataTypes.Text, function() {
                        return "";
                    }, true)
                ].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
            }

        }

        System_Model.ENActivityStatusEntityRecord = ENActivityStatusEntityRecordInner;

        var ENActivityStatusEntityRecord = ENActivityStatusEntityRecordInner;
        ENActivityStatusEntityRecord.init();
    }
});

define("System_.model$RC_36a7d48575a55c39ace8b7f6b0cd3ac4", ["exports", "@outsystems/runtime-core-js", "System_.model", "System_.model$ENActivityStatusEntityRecord"], function(exports, OSRuntimeCore, System_Model) {
    var OS = OSRuntimeCore; {
        class RC_36a7d48575a55c39ace8b7f6b0cd3ac4Inner extends
        OS.DataTypes.GenericRecord {
            static attributesToDeclare() {
                return [
                    this.attr("ActivityStatus", "activityStatusAttr", "ActivityStatus", false, false, OS.DataTypes.DataTypes.Record, function() {
                        return OS.DataTypes.ImmutableBase.getData(new System_Model.ENActivityStatusEntityRecord());
                    }, true, System_Model.ENActivityStatusEntityRecord)
                ].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
            }

            static fromStructure(str) {
                return new RC_36a7d48575a55c39ace8b7f6b0cd3ac4(new RC_36a7d48575a55c39ace8b7f6b0cd3ac4.RecordClass({
                    activityStatusAttr: OS.DataTypes.ImmutableBase.getData(str)
                }));
            }

        }

        System_Model.RC_36a7d48575a55c39ace8b7f6b0cd3ac4 = RC_36a7d48575a55c39ace8b7f6b0cd3ac4Inner;

        RC_36a7d48575a55c39ace8b7f6b0cd3ac4Inner._isAnonymousRecord = true;
        RC_36a7d48575a55c39ace8b7f6b0cd3ac4Inner.UniqueId = "36a7d485-75a5-5c39-ace8-b7f6b0cd3ac4";
        var RC_36a7d48575a55c39ace8b7f6b0cd3ac4 = RC_36a7d48575a55c39ace8b7f6b0cd3ac4Inner;
        RC_36a7d48575a55c39ace8b7f6b0cd3ac4.init();
    }
});

define("System_.model$RL_20bf822013f9723d57d50b23f1a33f26", ["exports", "@outsystems/runtime-core-js", "System_.model", "System_.model$RC_36a7d48575a55c39ace8b7f6b0cd3ac4"], function(exports, OSRuntimeCore, System_Model) {
    var OS = OSRuntimeCore;
    class RL_20bf822013f9723d57d50b23f1a33f26 extends
    OS.DataTypes.GenericRecordList {
        static getItemType() {
            return System_Model.RC_36a7d48575a55c39ace8b7f6b0cd3ac4;
        }

    }

    System_Model.RL_20bf822013f9723d57d50b23f1a33f26 = RL_20bf822013f9723d57d50b23f1a33f26;

});

define("System_.model$ENActivityOutputDefinitionEntityRecord", ["exports", "@outsystems/runtime-core-js", "System_.model"], function(exports, OSRuntimeCore, System_Model) {
    var OS = OSRuntimeCore; {
        class ENActivityOutputDefinitionEntityRecordInner extends
        OS.DataTypes.GenericRecord {
            static attributesToDeclare() {
                return [
                    this.attr("Id", "idAttr", "Id", true, false, OS.DataTypes.DataTypes.Text, function() {
                        return "";
                    }, true),
                    this.attr("Key", "keyAttr", "Key", true, false, OS.DataTypes.DataTypes.Text, function() {
                        return "";
                    }, true),
                    this.attr("Name", "nameAttr", "Name", true, false, OS.DataTypes.DataTypes.Text, function() {
                        return "";
                    }, true),
                    this.attr("Description", "descriptionAttr", "Description", false, false, OS.DataTypes.DataTypes.Text, function() {
                        return "";
                    }, true),
                    this.attr("ActivityDefinitionId", "activityDefinitionIdAttr", "ActivityDefinitionId", true, false, OS.DataTypes.DataTypes.Integer, function() {
                        return 0;
                    }, true),
                    this.attr("IsActive", "isActiveAttr", "IsActive", true, false, OS.DataTypes.DataTypes.Boolean, function() {
                        return false;
                    }, true),
                    this.attr("DataType", "dataTypeAttr", "DataType", true, false, OS.DataTypes.DataTypes.Text, function() {
                        return "";
                    }, true),
                    this.attr("IsInput", "isInputAttr", "IsInput", true, false, OS.DataTypes.DataTypes.Boolean, function() {
                        return false;
                    }, true),
                    this.attr("IsMandatory", "isMandatoryAttr", "IsMandatory", true, false, OS.DataTypes.DataTypes.Boolean, function() {
                        return false;
                    }, true),
                    this.attr("DefaultValue", "defaultValueAttr", "DefaultValue", false, false, OS.DataTypes.DataTypes.Text, function() {
                        return "";
                    }, true),
                    this.attr("ForeignKeyEntityId", "foreignKeyEntityIdAttr", "ForeignKeyEntityId", false, false, OS.DataTypes.DataTypes.Text, function() {
                        return "";
                    }, true)
                ].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
            }

        }

        System_Model.ENActivityOutputDefinitionEntityRecord = ENActivityOutputDefinitionEntityRecordInner;

        var ENActivityOutputDefinitionEntityRecord = ENActivityOutputDefinitionEntityRecordInner;
        ENActivityOutputDefinitionEntityRecord.init();
    }
});

define("System_.model$RLActivityOutputDefinitionList", ["exports", "@outsystems/runtime-core-js", "System_.model", "System_.model$ENActivityOutputDefinitionEntityRecord"], function(exports, OSRuntimeCore, System_Model) {
    var OS = OSRuntimeCore;
    class RLActivityOutputDefinitionList extends
    OS.DataTypes.GenericRecordList {
        static getItemType() {
            return System_Model.ENActivityOutputDefinitionEntityRecord;
        }

    }

    System_Model.RLActivityOutputDefinitionList = RLActivityOutputDefinitionList;

});

define("System_.model$ENProcessInstanceEntityRecord", ["exports", "@outsystems/runtime-core-js", "System_.model"], function(exports, OSRuntimeCore, System_Model) {
    var OS = OSRuntimeCore; {
        class ENProcessInstanceEntityRecordInner extends
        OS.DataTypes.GenericRecord {
            static attributesToDeclare() {
                return [
                    this.attr("Id", "idAttr", "Id", true, false, OS.DataTypes.DataTypes.LongInteger, function() {
                        return OS.DataTypes.LongInteger.defaultValue;
                    }, true),
                    this.attr("ProcessDefinitionId", "processDefinitionIdAttr", "ProcessDefinitionId", true, false, OS.DataTypes.DataTypes.Integer, function() {
                        return 0;
                    }, true),
                    this.attr("Status", "statusAttr", "Status", true, false, OS.DataTypes.DataTypes.LongInteger, function() {
                        return OS.DataTypes.LongInteger.defaultValue;
                    }, true),
                    this.attr("StartedOn", "startedOnAttr", "StartedOn", false, false, OS.DataTypes.DataTypes.DateTime, function() {
                        return OS.DataTypes.DateTime.defaultValue;
                    }, true),
                    this.attr("LastModifiedOn", "lastModifiedOnAttr", "LastModifiedOn", false, false, OS.DataTypes.DataTypes.DateTime, function() {
                        return OS.DataTypes.DateTime.defaultValue;
                    }, true)
                ].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
            }

        }

        System_Model.ENProcessInstanceEntityRecord = ENProcessInstanceEntityRecordInner;

        var ENProcessInstanceEntityRecord = ENProcessInstanceEntityRecordInner;
        ENProcessInstanceEntityRecord.init();
    }
});

define("System_.model$RC_c2c51a49c601586c1a143904ac6893f9", ["exports", "@outsystems/runtime-core-js", "System_.model", "System_.model$ENProcessInstanceEntityRecord"], function(exports, OSRuntimeCore, System_Model) {
    var OS = OSRuntimeCore; {
        class RC_c2c51a49c601586c1a143904ac6893f9Inner extends
        OS.DataTypes.GenericRecord {
            static attributesToDeclare() {
                return [
                    this.attr("ProcessInstance", "processInstanceAttr", "ProcessInstance", false, false, OS.DataTypes.DataTypes.Record, function() {
                        return OS.DataTypes.ImmutableBase.getData(new System_Model.ENProcessInstanceEntityRecord());
                    }, true, System_Model.ENProcessInstanceEntityRecord)
                ].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
            }

            static fromStructure(str) {
                return new RC_c2c51a49c601586c1a143904ac6893f9(new RC_c2c51a49c601586c1a143904ac6893f9.RecordClass({
                    processInstanceAttr: OS.DataTypes.ImmutableBase.getData(str)
                }));
            }

        }

        System_Model.RC_c2c51a49c601586c1a143904ac6893f9 = RC_c2c51a49c601586c1a143904ac6893f9Inner;

        RC_c2c51a49c601586c1a143904ac6893f9Inner._isAnonymousRecord = true;
        RC_c2c51a49c601586c1a143904ac6893f9Inner.UniqueId = "c2c51a49-c601-586c-1a14-3904ac6893f9";
        var RC_c2c51a49c601586c1a143904ac6893f9 = RC_c2c51a49c601586c1a143904ac6893f9Inner;
        RC_c2c51a49c601586c1a143904ac6893f9.init();
    }
});

define("System_.model$RL_247a9c7809b4893cc7a21d0914d69e61", ["exports", "@outsystems/runtime-core-js", "System_.model", "System_.model$RC_c2c51a49c601586c1a143904ac6893f9"], function(exports, OSRuntimeCore, System_Model) {
    var OS = OSRuntimeCore;
    class RL_247a9c7809b4893cc7a21d0914d69e61 extends
    OS.DataTypes.GenericRecordList {
        static getItemType() {
            return System_Model.RC_c2c51a49c601586c1a143904ac6893f9;
        }

    }

    System_Model.RL_247a9c7809b4893cc7a21d0914d69e61 = RL_247a9c7809b4893cc7a21d0914d69e61;

});

define("System_.model$RC_24e87e1f1de297ca8a691099e40c22ed", ["exports", "@outsystems/runtime-core-js", "System_.model", "System_.model$ENActivityOutputEntityRecord"], function(exports, OSRuntimeCore, System_Model) {
    var OS = OSRuntimeCore; {
        class RC_24e87e1f1de297ca8a691099e40c22edInner extends
        OS.DataTypes.GenericRecord {
            static attributesToDeclare() {
                return [
                    this.attr("ActivityOutput", "activityOutputAttr", "ActivityOutput", false, false, OS.DataTypes.DataTypes.Record, function() {
                        return OS.DataTypes.ImmutableBase.getData(new System_Model.ENActivityOutputEntityRecord());
                    }, true, System_Model.ENActivityOutputEntityRecord)
                ].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
            }

            static fromStructure(str) {
                return new RC_24e87e1f1de297ca8a691099e40c22ed(new RC_24e87e1f1de297ca8a691099e40c22ed.RecordClass({
                    activityOutputAttr: OS.DataTypes.ImmutableBase.getData(str)
                }));
            }

        }

        System_Model.RC_24e87e1f1de297ca8a691099e40c22ed = RC_24e87e1f1de297ca8a691099e40c22edInner;

        RC_24e87e1f1de297ca8a691099e40c22edInner._isAnonymousRecord = true;
        RC_24e87e1f1de297ca8a691099e40c22edInner.UniqueId = "24e87e1f-1de2-97ca-8a69-1099e40c22ed";
        var RC_24e87e1f1de297ca8a691099e40c22ed = RC_24e87e1f1de297ca8a691099e40c22edInner;
        RC_24e87e1f1de297ca8a691099e40c22ed.init();
    }
});

define("System_.model$ENActivityDefinitionRoleEntityRecord", ["exports", "@outsystems/runtime-core-js", "System_.model"], function(exports, OSRuntimeCore, System_Model) {
    var OS = OSRuntimeCore; {
        class ENActivityDefinitionRoleEntityRecordInner extends
        OS.DataTypes.GenericRecord {
            static attributesToDeclare() {
                return [
                    this.attr("Id", "idAttr", "Id", true, false, OS.DataTypes.DataTypes.LongInteger, function() {
                        return OS.DataTypes.LongInteger.defaultValue;
                    }, true),
                    this.attr("RoleId", "roleIdAttr", "RoleId", true, false, OS.DataTypes.DataTypes.Text, function() {
                        return "";
                    }, true),
                    this.attr("ActivityDefinitionId", "activityDefinitionIdAttr", "ActivityDefinitionId", true, false, OS.DataTypes.DataTypes.Integer, function() {
                        return 0;
                    }, true)
                ].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
            }

        }

        System_Model.ENActivityDefinitionRoleEntityRecord = ENActivityDefinitionRoleEntityRecordInner;

        var ENActivityDefinitionRoleEntityRecord = ENActivityDefinitionRoleEntityRecordInner;
        ENActivityDefinitionRoleEntityRecord.init();
    }
});

define("System_.model$RLActivityDefinitionRoleList", ["exports", "@outsystems/runtime-core-js", "System_.model", "System_.model$ENActivityDefinitionRoleEntityRecord"], function(exports, OSRuntimeCore, System_Model) {
    var OS = OSRuntimeCore;
    class RLActivityDefinitionRoleList extends
    OS.DataTypes.GenericRecordList {
        static getItemType() {
            return System_Model.ENActivityDefinitionRoleEntityRecord;
        }

    }

    System_Model.RLActivityDefinitionRoleList = RLActivityDefinitionRoleList;

});

define("System_.model$RL_28fc2381cbc1135b5eb41ae627dcd287", ["exports", "@outsystems/runtime-core-js", "System_.model", "System_.model$RC_24e87e1f1de297ca8a691099e40c22ed"], function(exports, OSRuntimeCore, System_Model) {
    var OS = OSRuntimeCore;
    class RL_28fc2381cbc1135b5eb41ae627dcd287 extends
    OS.DataTypes.GenericRecordList {
        static getItemType() {
            return System_Model.RC_24e87e1f1de297ca8a691099e40c22ed;
        }

    }

    System_Model.RL_28fc2381cbc1135b5eb41ae627dcd287 = RL_28fc2381cbc1135b5eb41ae627dcd287;

});

define("System_.model$ENEntityAttributeEntityRecord", ["exports", "@outsystems/runtime-core-js", "System_.model"], function(exports, OSRuntimeCore, System_Model) {
    var OS = OSRuntimeCore; {
        class ENEntityAttributeEntityRecordInner extends
        OS.DataTypes.GenericRecord {
            static attributesToDeclare() {
                return [
                    this.attr("Id", "idAttr", "Id", true, false, OS.DataTypes.DataTypes.Text, function() {
                        return "";
                    }, true),
                    this.attr("Name", "nameAttr", "Name", true, false, OS.DataTypes.DataTypes.Text, function() {
                        return "";
                    }, true),
                    this.attr("EntityId", "entityIdAttr", "EntityId", true, false, OS.DataTypes.DataTypes.Text, function() {
                        return "";
                    }, true),
                    this.attr("DataType", "dataTypeAttr", "DataType", true, false, OS.DataTypes.DataTypes.Text, function() {
                        return "";
                    }, true),
                    this.attr("Length", "lengthAttr", "Length", false, false, OS.DataTypes.DataTypes.Integer, function() {
                        return 0;
                    }, true),
                    this.attr("Decimals", "decimalsAttr", "Decimals", false, false, OS.DataTypes.DataTypes.Integer, function() {
                        return 0;
                    }, true),
                    this.attr("IsMandatory", "isMandatoryAttr", "IsMandatory", true, false, OS.DataTypes.DataTypes.Boolean, function() {
                        return false;
                    }, true),
                    this.attr("IsAutoGenerated", "isAutoGeneratedAttr", "IsAutoGenerated", true, false, OS.DataTypes.DataTypes.Boolean, function() {
                        return false;
                    }, true),
                    this.attr("Label", "labelAttr", "Label", true, false, OS.DataTypes.DataTypes.Text, function() {
                        return "";
                    }, true),
                    this.attr("OrderNumber", "orderNumberAttr", "OrderNumber", true, false, OS.DataTypes.DataTypes.Integer, function() {
                        return 0;
                    }, true),
                    this.attr("ForeignKeyEntityId", "foreignKeyEntityIdAttr", "ForeignKeyEntityId", false, false, OS.DataTypes.DataTypes.Text, function() {
                        return "";
                    }, true)
                ].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
            }

        }

        System_Model.ENEntityAttributeEntityRecord = ENEntityAttributeEntityRecordInner;

        var ENEntityAttributeEntityRecord = ENEntityAttributeEntityRecordInner;
        ENEntityAttributeEntityRecord.init();
    }
});

define("System_.model$RC_2efffbee03fccc31484e893e007e6c9a", ["exports", "@outsystems/runtime-core-js", "System_.model", "System_.model$ENEntityAttributeEntityRecord"], function(exports, OSRuntimeCore, System_Model) {
    var OS = OSRuntimeCore; {
        class RC_2efffbee03fccc31484e893e007e6c9aInner extends
        OS.DataTypes.GenericRecord {
            static attributesToDeclare() {
                return [
                    this.attr("EntityAttribute", "entityAttributeAttr", "EntityAttribute", false, false, OS.DataTypes.DataTypes.Record, function() {
                        return OS.DataTypes.ImmutableBase.getData(new System_Model.ENEntityAttributeEntityRecord());
                    }, true, System_Model.ENEntityAttributeEntityRecord)
                ].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
            }

            static fromStructure(str) {
                return new RC_2efffbee03fccc31484e893e007e6c9a(new RC_2efffbee03fccc31484e893e007e6c9a.RecordClass({
                    entityAttributeAttr: OS.DataTypes.ImmutableBase.getData(str)
                }));
            }

        }

        System_Model.RC_2efffbee03fccc31484e893e007e6c9a = RC_2efffbee03fccc31484e893e007e6c9aInner;

        RC_2efffbee03fccc31484e893e007e6c9aInner._isAnonymousRecord = true;
        RC_2efffbee03fccc31484e893e007e6c9aInner.UniqueId = "2efffbee-03fc-cc31-484e-893e007e6c9a";
        var RC_2efffbee03fccc31484e893e007e6c9a = RC_2efffbee03fccc31484e893e007e6c9aInner;
        RC_2efffbee03fccc31484e893e007e6c9a.init();
    }
});

define("System_.model$ENProcessStatusEntityRecord", ["exports", "@outsystems/runtime-core-js", "System_.model"], function(exports, OSRuntimeCore, System_Model) {
    var OS = OSRuntimeCore; {
        class ENProcessStatusEntityRecordInner extends
        OS.DataTypes.GenericRecord {
            static attributesToDeclare() {
                return [
                    this.attr("Id", "idAttr", "Id", true, false, OS.DataTypes.DataTypes.LongInteger, function() {
                        return OS.DataTypes.LongInteger.defaultValue;
                    }, true),
                    this.attr("Name", "nameAttr", "Name", true, false, OS.DataTypes.DataTypes.Text, function() {
                        return "";
                    }, true)
                ].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
            }

        }

        System_Model.ENProcessStatusEntityRecord = ENProcessStatusEntityRecordInner;

        var ENProcessStatusEntityRecord = ENProcessStatusEntityRecordInner;
        ENProcessStatusEntityRecord.init();
    }
});

define("System_.model$RLProcessStatusList", ["exports", "@outsystems/runtime-core-js", "System_.model", "System_.model$ENProcessStatusEntityRecord"], function(exports, OSRuntimeCore, System_Model) {
    var OS = OSRuntimeCore;
    class RLProcessStatusList extends
    OS.DataTypes.GenericRecordList {
        static getItemType() {
            return System_Model.ENProcessStatusEntityRecord;
        }

    }

    System_Model.RLProcessStatusList = RLProcessStatusList;

});

define("System_.model$RL_31d7615454c0155a64f826d4e0cf4cb5", ["exports", "@outsystems/runtime-core-js", "System_.model", "System_.model$FinishResetPasswordFailureReasonRec"], function(exports, OSRuntimeCore, System_Model) {
    var OS = OSRuntimeCore;
    class RL_31d7615454c0155a64f826d4e0cf4cb5 extends
    OS.DataTypes.GenericRecordList {
        static getItemType() {
            return OS.SystemStructures.FinishResetPasswordFailureReasonRec;
        }

    }

    System_Model.RL_31d7615454c0155a64f826d4e0cf4cb5 = RL_31d7615454c0155a64f826d4e0cf4cb5;

});

define("System_.model$ENRuntimeTypeEntityRecord", ["exports", "@outsystems/runtime-core-js", "System_.model"], function(exports, OSRuntimeCore, System_Model) {
    var OS = OSRuntimeCore; {
        class ENRuntimeTypeEntityRecordInner extends
        OS.DataTypes.GenericRecord {
            static attributesToDeclare() {
                return [
                    this.attr("Id", "idAttr", "Id", true, false, OS.DataTypes.DataTypes.Text, function() {
                        return "";
                    }, true),
                    this.attr("Label", "labelAttr", "Label", true, false, OS.DataTypes.DataTypes.Text, function() {
                        return "";
                    }, true),
                    this.attr("Order", "orderAttr", "Order", true, false, OS.DataTypes.DataTypes.Integer, function() {
                        return 0;
                    }, true),
                    this.attr("IsActive", "isActiveAttr", "IsActive", true, false, OS.DataTypes.DataTypes.Boolean, function() {
                        return false;
                    }, true)
                ].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
            }

        }

        System_Model.ENRuntimeTypeEntityRecord = ENRuntimeTypeEntityRecordInner;

        var ENRuntimeTypeEntityRecord = ENRuntimeTypeEntityRecordInner;
        ENRuntimeTypeEntityRecord.init();
    }
});

define("System_.model$RC_3251af6c799b185d408b7cad31be3454", ["exports", "@outsystems/runtime-core-js", "System_.model", "System_.model$ENRuntimeTypeEntityRecord"], function(exports, OSRuntimeCore, System_Model) {
    var OS = OSRuntimeCore; {
        class RC_3251af6c799b185d408b7cad31be3454Inner extends
        OS.DataTypes.GenericRecord {
            static attributesToDeclare() {
                return [
                    this.attr("RuntimeType", "runtimeTypeAttr", "RuntimeType", true, false, OS.DataTypes.DataTypes.Record, function() {
                        return OS.DataTypes.ImmutableBase.getData(new System_Model.ENRuntimeTypeEntityRecord());
                    }, true, System_Model.ENRuntimeTypeEntityRecord)
                ].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
            }

            static fromStructure(str) {
                return new RC_3251af6c799b185d408b7cad31be3454(new RC_3251af6c799b185d408b7cad31be3454.RecordClass({
                    runtimeTypeAttr: OS.DataTypes.ImmutableBase.getData(str)
                }));
            }

        }

        System_Model.RC_3251af6c799b185d408b7cad31be3454 = RC_3251af6c799b185d408b7cad31be3454Inner;

        RC_3251af6c799b185d408b7cad31be3454Inner._isAnonymousRecord = true;
        RC_3251af6c799b185d408b7cad31be3454Inner.UniqueId = "3251af6c-799b-185d-408b-7cad31be3454";
        var RC_3251af6c799b185d408b7cad31be3454 = RC_3251af6c799b185d408b7cad31be3454Inner;
        RC_3251af6c799b185d408b7cad31be3454.init();
    }
});

define("System_.model$ENEmailEntityRecord", ["exports", "@outsystems/runtime-core-js", "System_.model"], function(exports, OSRuntimeCore, System_Model) {
    var OS = OSRuntimeCore; {
        class ENEmailEntityRecordInner extends
        OS.DataTypes.GenericRecord {
            static attributesToDeclare() {
                return [
                    this.attr("Id", "idAttr", "Id", true, false, OS.DataTypes.DataTypes.LongInteger, function() {
                        return OS.DataTypes.LongInteger.defaultValue;
                    }, true),
                    this.attr("Size", "sizeAttr", "Size", false, false, OS.DataTypes.DataTypes.Integer, function() {
                        return 0;
                    }, true)
                ].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
            }

        }

        System_Model.ENEmailEntityRecord = ENEmailEntityRecordInner;

        var ENEmailEntityRecord = ENEmailEntityRecordInner;
        ENEmailEntityRecord.init();
    }
});

define("System_.model$RLEmailList", ["exports", "@outsystems/runtime-core-js", "System_.model", "System_.model$ENEmailEntityRecord"], function(exports, OSRuntimeCore, System_Model) {
    var OS = OSRuntimeCore;
    class RLEmailList extends
    OS.DataTypes.GenericRecordList {
        static getItemType() {
            return System_Model.ENEmailEntityRecord;
        }

    }

    System_Model.RLEmailList = RLEmailList;

});

define("System_.model$ENProcessDefinitionEntityRecord", ["exports", "@outsystems/runtime-core-js", "System_.model"], function(exports, OSRuntimeCore, System_Model) {
    var OS = OSRuntimeCore; {
        class ENProcessDefinitionEntityRecordInner extends
        OS.DataTypes.GenericRecord {
            static attributesToDeclare() {
                return [
                    this.attr("Id", "idAttr", "Id", true, false, OS.DataTypes.DataTypes.Integer, function() {
                        return 0;
                    }, true),
                    this.attr("Key", "keyAttr", "Key", false, false, OS.DataTypes.DataTypes.Text, function() {
                        return "";
                    }, true),
                    this.attr("Name", "nameAttr", "Name", true, false, OS.DataTypes.DataTypes.Text, function() {
                        return "";
                    }, true),
                    this.attr("Revision", "revisionAttr", "Revision", false, false, OS.DataTypes.DataTypes.Integer, function() {
                        return 0;
                    }, true)
                ].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
            }

        }

        System_Model.ENProcessDefinitionEntityRecord = ENProcessDefinitionEntityRecordInner;

        var ENProcessDefinitionEntityRecord = ENProcessDefinitionEntityRecordInner;
        ENProcessDefinitionEntityRecord.init();
    }
});

define("System_.model$RLRuntimeTypeList", ["exports", "@outsystems/runtime-core-js", "System_.model", "System_.model$ENRuntimeTypeEntityRecord"], function(exports, OSRuntimeCore, System_Model) {
    var OS = OSRuntimeCore;
    class RLRuntimeTypeList extends
    OS.DataTypes.GenericRecordList {
        static getItemType() {
            return System_Model.ENRuntimeTypeEntityRecord;
        }

    }

    System_Model.RLRuntimeTypeList = RLRuntimeTypeList;

});

define("System_.model$ChangePasswordFailureReasonRec", ["exports", "@outsystems/runtime-core-js", "System_.model"], function(exports, OSRuntimeCore, System_Model) {
    var OS = OSRuntimeCore; {
        class ChangePasswordFailureReasonRecInner extends
        OS.DataTypes.GenericRecord {
            static attributesToDeclare() {
                return [
                    this.attr("PasswordComplexityPolicyFailed", "passwordComplexityPolicyFailedAttr", "PasswordComplexityPolicyFailed", false, false, OS.DataTypes.DataTypes.Boolean, function() {
                        return false;
                    }, true),
                    this.attr("InvalidCredentials", "invalidCredentialsAttr", "InvalidCredentials", false, false, OS.DataTypes.DataTypes.Boolean, function() {
                        return false;
                    }, true),
                    this.attr("TooManyFailedAttempts", "tooManyFailedAttemptsAttr", "TooManyFailedAttempts", false, false, OS.DataTypes.DataTypes.Boolean, function() {
                        return false;
                    }, true)
                ].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
            }

        }

        System_Model.ChangePasswordFailureReasonRec = ChangePasswordFailureReasonRecInner;

        var ChangePasswordFailureReasonRec = ChangePasswordFailureReasonRecInner;
        ChangePasswordFailureReasonRec.init();
    }
});

define("System_.model$ChangePasswordResultRec", ["exports", "@outsystems/runtime-core-js", "System_.model", "System_.model$ChangePasswordFailureReasonRec"], function(exports, OSRuntimeCore, System_Model) {
    var OS = OSRuntimeCore; {
        class ChangePasswordResultRecInner extends
        OS.DataTypes.GenericRecord {
            static attributesToDeclare() {
                return [
                    this.attr("Success", "successAttr", "Success", false, false, OS.DataTypes.DataTypes.Boolean, function() {
                        return false;
                    }, true),
                    this.attr("ChangePasswordFailureReason", "changePasswordFailureReasonAttr", "ChangePasswordFailureReason", false, false, OS.DataTypes.DataTypes.Record, function() {
                        return OS.DataTypes.ImmutableBase.getData(new OS.SystemStructures.ChangePasswordFailureReasonRec());
                    }, true, OS.SystemStructures.ChangePasswordFailureReasonRec)
                ].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
            }

        }

        System_Model.ChangePasswordResultRec = ChangePasswordResultRecInner;

        var ChangePasswordResultRec = ChangePasswordResultRecInner;
        ChangePasswordResultRec.init();
    }
});

define("System_.model$RL_36d4d7e2109bafadf398450826580bed", ["exports", "@outsystems/runtime-core-js", "System_.model", "System_.model$UpdateUserResultRec"], function(exports, OSRuntimeCore, System_Model) {
    var OS = OSRuntimeCore;
    class RL_36d4d7e2109bafadf398450826580bed extends
    OS.DataTypes.GenericRecordList {
        static getItemType() {
            return OS.SystemStructures.UpdateUserResultRec;
        }

    }

    System_Model.RL_36d4d7e2109bafadf398450826580bed = RL_36d4d7e2109bafadf398450826580bed;

});

define("System_.model$ENActivityDefinitionLinkEntityRecord", ["exports", "@outsystems/runtime-core-js", "System_.model"], function(exports, OSRuntimeCore, System_Model) {
    var OS = OSRuntimeCore; {
        class ENActivityDefinitionLinkEntityRecordInner extends
        OS.DataTypes.GenericRecord {
            static attributesToDeclare() {
                return [
                    this.attr("Id", "idAttr", "Id", true, false, OS.DataTypes.DataTypes.Text, function() {
                        return "";
                    }, true),
                    this.attr("SourceActivityDefinitionId", "sourceActivityDefinitionIdAttr", "SourceActivityDefinitionId", true, false, OS.DataTypes.DataTypes.Integer, function() {
                        return 0;
                    }, true),
                    this.attr("TargetActivityDefinitionId", "targetActivityDefinitionIdAttr", "TargetActivityDefinitionId", true, false, OS.DataTypes.DataTypes.Integer, function() {
                        return 0;
                    }, true),
                    this.attr("IsActive", "isActiveAttr", "IsActive", true, false, OS.DataTypes.DataTypes.Boolean, function() {
                        return false;
                    }, true),
                    this.attr("Outcome", "outcomeAttr", "Outcome", false, false, OS.DataTypes.DataTypes.Text, function() {
                        return "";
                    }, true)
                ].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
            }

        }

        System_Model.ENActivityDefinitionLinkEntityRecord = ENActivityDefinitionLinkEntityRecordInner;

        var ENActivityDefinitionLinkEntityRecord = ENActivityDefinitionLinkEntityRecordInner;
        ENActivityDefinitionLinkEntityRecord.init();
    }
});

define("System_.model$RLActivityDefinitionLinkList", ["exports", "@outsystems/runtime-core-js", "System_.model", "System_.model$ENActivityDefinitionLinkEntityRecord"], function(exports, OSRuntimeCore, System_Model) {
    var OS = OSRuntimeCore;
    class RLActivityDefinitionLinkList extends
    OS.DataTypes.GenericRecordList {
        static getItemType() {
            return System_Model.ENActivityDefinitionLinkEntityRecord;
        }

    }

    System_Model.RLActivityDefinitionLinkList = RLActivityDefinitionLinkList;

});

define("System_.model$StartUserRegistrationResultRec", ["exports", "@outsystems/runtime-core-js", "System_.model", "System_.model$StartUserRegistrationFailureReasonRec"], function(exports, OSRuntimeCore, System_Model) {
    var OS = OSRuntimeCore; {
        class StartUserRegistrationResultRecInner extends
        OS.DataTypes.GenericRecord {
            static attributesToDeclare() {
                return [
                    this.attr("Success", "successAttr", "Success", false, false, OS.DataTypes.DataTypes.Boolean, function() {
                        return false;
                    }, true),
                    this.attr("StartUserRegistrationFailureReason", "startUserRegistrationFailureReasonAttr", "StartUserRegistrationFailureReason", false, false, OS.DataTypes.DataTypes.Record, function() {
                        return OS.DataTypes.ImmutableBase.getData(new OS.SystemStructures.StartUserRegistrationFailureReasonRec());
                    }, true, OS.SystemStructures.StartUserRegistrationFailureReasonRec),
                    this.attr("VerificationCode", "verificationCodeAttr", "VerificationCode", false, false, OS.DataTypes.DataTypes.Text, function() {
                        return "";
                    }, true),
                    this.attr("UserId", "userIdAttr", "UserId", false, false, OS.DataTypes.DataTypes.Text, function() {
                        return "";
                    }, true)
                ].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
            }

        }

        System_Model.StartUserRegistrationResultRec = StartUserRegistrationResultRecInner;

        var StartUserRegistrationResultRec = StartUserRegistrationResultRecInner;
        StartUserRegistrationResultRec.init();
    }
});

define("System_.model$RC_37cfc11aad68902b9d78f57915b7ae79", ["exports", "@outsystems/runtime-core-js", "System_.model", "System_.model$StartUserRegistrationResultRec"], function(exports, OSRuntimeCore, System_Model) {
    var OS = OSRuntimeCore; {
        class RC_37cfc11aad68902b9d78f57915b7ae79Inner extends
        OS.DataTypes.GenericRecord {
            static attributesToDeclare() {
                return [
                    this.attr("StartUserRegistrationResult", "startUserRegistrationResultAttr", "StartUserRegistrationResult", false, false, OS.DataTypes.DataTypes.Record, function() {
                        return OS.DataTypes.ImmutableBase.getData(new OS.SystemStructures.StartUserRegistrationResultRec());
                    }, true, OS.SystemStructures.StartUserRegistrationResultRec)
                ].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
            }

            static fromStructure(str) {
                return new RC_37cfc11aad68902b9d78f57915b7ae79(new RC_37cfc11aad68902b9d78f57915b7ae79.RecordClass({
                    startUserRegistrationResultAttr: OS.DataTypes.ImmutableBase.getData(str)
                }));
            }

        }

        System_Model.RC_37cfc11aad68902b9d78f57915b7ae79 = RC_37cfc11aad68902b9d78f57915b7ae79Inner;

        RC_37cfc11aad68902b9d78f57915b7ae79Inner._isAnonymousRecord = true;
        RC_37cfc11aad68902b9d78f57915b7ae79Inner.UniqueId = "37cfc11a-ad68-902b-9d78-f57915b7ae79";
        var RC_37cfc11aad68902b9d78f57915b7ae79 = RC_37cfc11aad68902b9d78f57915b7ae79Inner;
        RC_37cfc11aad68902b9d78f57915b7ae79.init();
    }
});

define("System_.model$RC_8535fa70cf0bfd6fa50f69a53d3b4ae1", ["exports", "@outsystems/runtime-core-js", "System_.model", "System_.model$ENActivityOutputDefinitionEntityRecord"], function(exports, OSRuntimeCore, System_Model) {
    var OS = OSRuntimeCore; {
        class RC_8535fa70cf0bfd6fa50f69a53d3b4ae1Inner extends
        OS.DataTypes.GenericRecord {
            static attributesToDeclare() {
                return [
                    this.attr("ActivityOutputDefinition", "activityOutputDefinitionAttr", "ActivityOutputDefinition", false, false, OS.DataTypes.DataTypes.Record, function() {
                        return OS.DataTypes.ImmutableBase.getData(new System_Model.ENActivityOutputDefinitionEntityRecord());
                    }, true, System_Model.ENActivityOutputDefinitionEntityRecord)
                ].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
            }

            static fromStructure(str) {
                return new RC_8535fa70cf0bfd6fa50f69a53d3b4ae1(new RC_8535fa70cf0bfd6fa50f69a53d3b4ae1.RecordClass({
                    activityOutputDefinitionAttr: OS.DataTypes.ImmutableBase.getData(str)
                }));
            }

        }

        System_Model.RC_8535fa70cf0bfd6fa50f69a53d3b4ae1 = RC_8535fa70cf0bfd6fa50f69a53d3b4ae1Inner;

        RC_8535fa70cf0bfd6fa50f69a53d3b4ae1Inner._isAnonymousRecord = true;
        RC_8535fa70cf0bfd6fa50f69a53d3b4ae1Inner.UniqueId = "8535fa70-cf0b-fd6f-a50f-69a53d3b4ae1";
        var RC_8535fa70cf0bfd6fa50f69a53d3b4ae1 = RC_8535fa70cf0bfd6fa50f69a53d3b4ae1Inner;
        RC_8535fa70cf0bfd6fa50f69a53d3b4ae1.init();
    }
});

define("System_.model$RL_382066feb08849f8e2adc5062ac75efa", ["exports", "@outsystems/runtime-core-js", "System_.model", "System_.model$RC_8535fa70cf0bfd6fa50f69a53d3b4ae1"], function(exports, OSRuntimeCore, System_Model) {
    var OS = OSRuntimeCore;
    class RL_382066feb08849f8e2adc5062ac75efa extends
    OS.DataTypes.GenericRecordList {
        static getItemType() {
            return System_Model.RC_8535fa70cf0bfd6fa50f69a53d3b4ae1;
        }

    }

    System_Model.RL_382066feb08849f8e2adc5062ac75efa = RL_382066feb08849f8e2adc5062ac75efa;

});

define("System_.model$RL_3b8feaa11cc930133dbb7eecb085b527", ["exports", "@outsystems/runtime-core-js", "System_.model", "System_.model$UserLoginFailureReasonRec"], function(exports, OSRuntimeCore, System_Model) {
    var OS = OSRuntimeCore;
    class RL_3b8feaa11cc930133dbb7eecb085b527 extends
    OS.DataTypes.GenericRecordList {
        static getItemType() {
            return OS.SystemStructures.UserLoginFailureReasonRec;
        }

    }

    System_Model.RL_3b8feaa11cc930133dbb7eecb085b527 = RL_3b8feaa11cc930133dbb7eecb085b527;

});

define("System_.model$ENApplicationEntityRecord", ["exports", "@outsystems/runtime-core-js", "System_.model"], function(exports, OSRuntimeCore, System_Model) {
    var OS = OSRuntimeCore; {
        class ENApplicationEntityRecordInner extends
        OS.DataTypes.GenericRecord {
            static attributesToDeclare() {
                return [
                    this.attr("Id", "idAttr", "Id", true, false, OS.DataTypes.DataTypes.Text, function() {
                        return "";
                    }, true),
                    this.attr("Name", "nameAttr", "Name", true, false, OS.DataTypes.DataTypes.Text, function() {
                        return "";
                    }, true),
                    this.attr("Type", "typeAttr", "Type", false, false, OS.DataTypes.DataTypes.Text, function() {
                        return "";
                    }, true)
                ].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
            }

        }

        System_Model.ENApplicationEntityRecord = ENApplicationEntityRecordInner;

        var ENApplicationEntityRecord = ENApplicationEntityRecordInner;
        ENApplicationEntityRecord.init();
    }
});

define("System_.model$ENActivityDefinitionEntityRecord", ["exports", "@outsystems/runtime-core-js", "System_.model"], function(exports, OSRuntimeCore, System_Model) {
    var OS = OSRuntimeCore; {
        class ENActivityDefinitionEntityRecordInner extends
        OS.DataTypes.GenericRecord {
            static attributesToDeclare() {
                return [
                    this.attr("Id", "idAttr", "Id", true, false, OS.DataTypes.DataTypes.Integer, function() {
                        return 0;
                    }, true),
                    this.attr("Key", "keyAttr", "Key", false, false, OS.DataTypes.DataTypes.Text, function() {
                        return "";
                    }, true),
                    this.attr("ProcessDefinitionId", "processDefinitionIdAttr", "ProcessDefinitionId", true, false, OS.DataTypes.DataTypes.Integer, function() {
                        return 0;
                    }, true),
                    this.attr("Name", "nameAttr", "Name", false, false, OS.DataTypes.DataTypes.Text, function() {
                        return "";
                    }, true),
                    this.attr("Kind", "kindAttr", "Kind", true, false, OS.DataTypes.DataTypes.LongInteger, function() {
                        return OS.DataTypes.LongInteger.defaultValue;
                    }, true)
                ].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
            }

        }

        System_Model.ENActivityDefinitionEntityRecord = ENActivityDefinitionEntityRecordInner;

        var ENActivityDefinitionEntityRecord = ENActivityDefinitionEntityRecordInner;
        ENActivityDefinitionEntityRecord.init();
    }
});

define("System_.model$RC_a04f94cfd410c813b8dee156f64b6537", ["exports", "@outsystems/runtime-core-js", "System_.model", "System_.model$ENActivityDefinitionEntityRecord"], function(exports, OSRuntimeCore, System_Model) {
    var OS = OSRuntimeCore; {
        class RC_a04f94cfd410c813b8dee156f64b6537Inner extends
        OS.DataTypes.GenericRecord {
            static attributesToDeclare() {
                return [
                    this.attr("ActivityDefinition", "activityDefinitionAttr", "ActivityDefinition", false, false, OS.DataTypes.DataTypes.Record, function() {
                        return OS.DataTypes.ImmutableBase.getData(new System_Model.ENActivityDefinitionEntityRecord());
                    }, true, System_Model.ENActivityDefinitionEntityRecord)
                ].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
            }

            static fromStructure(str) {
                return new RC_a04f94cfd410c813b8dee156f64b6537(new RC_a04f94cfd410c813b8dee156f64b6537.RecordClass({
                    activityDefinitionAttr: OS.DataTypes.ImmutableBase.getData(str)
                }));
            }

        }

        System_Model.RC_a04f94cfd410c813b8dee156f64b6537 = RC_a04f94cfd410c813b8dee156f64b6537Inner;

        RC_a04f94cfd410c813b8dee156f64b6537Inner._isAnonymousRecord = true;
        RC_a04f94cfd410c813b8dee156f64b6537Inner.UniqueId = "a04f94cf-d410-c813-b8de-e156f64b6537";
        var RC_a04f94cfd410c813b8dee156f64b6537 = RC_a04f94cfd410c813b8dee156f64b6537Inner;
        RC_a04f94cfd410c813b8dee156f64b6537.init();
    }
});

define("System_.model$RL_3e3c312f4b244ea01713a0fa4a15518a", ["exports", "@outsystems/runtime-core-js", "System_.model", "System_.model$RC_a04f94cfd410c813b8dee156f64b6537"], function(exports, OSRuntimeCore, System_Model) {
    var OS = OSRuntimeCore;
    class RL_3e3c312f4b244ea01713a0fa4a15518a extends
    OS.DataTypes.GenericRecordList {
        static getItemType() {
            return System_Model.RC_a04f94cfd410c813b8dee156f64b6537;
        }

    }

    System_Model.RL_3e3c312f4b244ea01713a0fa4a15518a = RL_3e3c312f4b244ea01713a0fa4a15518a;

});

define("System_.model$FinishResetPasswordResultRec", ["exports", "@outsystems/runtime-core-js", "System_.model", "System_.model$FinishResetPasswordFailureReasonRec"], function(exports, OSRuntimeCore, System_Model) {
    var OS = OSRuntimeCore; {
        class FinishResetPasswordResultRecInner extends
        OS.DataTypes.GenericRecord {
            static attributesToDeclare() {
                return [
                    this.attr("Success", "successAttr", "Success", false, false, OS.DataTypes.DataTypes.Boolean, function() {
                        return false;
                    }, true),
                    this.attr("FinishResetPasswordFailureReason", "finishResetPasswordFailureReasonAttr", "FinishResetPasswordFailureReason", false, false, OS.DataTypes.DataTypes.Record, function() {
                        return OS.DataTypes.ImmutableBase.getData(new OS.SystemStructures.FinishResetPasswordFailureReasonRec());
                    }, true, OS.SystemStructures.FinishResetPasswordFailureReasonRec)
                ].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
            }

        }

        System_Model.FinishResetPasswordResultRec = FinishResetPasswordResultRecInner;

        var FinishResetPasswordResultRec = FinishResetPasswordResultRecInner;
        FinishResetPasswordResultRec.init();
    }
});

define("System_.model$RC_9817a5747e4b09aa3a6a7eb35ce9f66e", ["exports", "@outsystems/runtime-core-js", "System_.model", "System_.model$FinishResetPasswordResultRec"], function(exports, OSRuntimeCore, System_Model) {
    var OS = OSRuntimeCore; {
        class RC_9817a5747e4b09aa3a6a7eb35ce9f66eInner extends
        OS.DataTypes.GenericRecord {
            static attributesToDeclare() {
                return [
                    this.attr("FinishResetPasswordResult", "finishResetPasswordResultAttr", "FinishResetPasswordResult", false, false, OS.DataTypes.DataTypes.Record, function() {
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

        System_Model.RC_9817a5747e4b09aa3a6a7eb35ce9f66e = RC_9817a5747e4b09aa3a6a7eb35ce9f66eInner;

        RC_9817a5747e4b09aa3a6a7eb35ce9f66eInner._isAnonymousRecord = true;
        RC_9817a5747e4b09aa3a6a7eb35ce9f66eInner.UniqueId = "9817a574-7e4b-09aa-3a6a-7eb35ce9f66e";
        var RC_9817a5747e4b09aa3a6a7eb35ce9f66e = RC_9817a5747e4b09aa3a6a7eb35ce9f66eInner;
        RC_9817a5747e4b09aa3a6a7eb35ce9f66e.init();
    }
});

define("System_.model$RL_3f7b36d8bbcf12054b7e2f49497f214f", ["exports", "@outsystems/runtime-core-js", "System_.model", "System_.model$RC_9817a5747e4b09aa3a6a7eb35ce9f66e"], function(exports, OSRuntimeCore, System_Model) {
    var OS = OSRuntimeCore;
    class RL_3f7b36d8bbcf12054b7e2f49497f214f extends
    OS.DataTypes.GenericRecordList {
        static getItemType() {
            return System_Model.RC_9817a5747e4b09aa3a6a7eb35ce9f66e;
        }

    }

    System_Model.RL_3f7b36d8bbcf12054b7e2f49497f214f = RL_3f7b36d8bbcf12054b7e2f49497f214f;

});

define("System_.model$ENActivityDefinitionLanguageEntityRecord", ["exports", "@outsystems/runtime-core-js", "System_.model"], function(exports, OSRuntimeCore, System_Model) {
    var OS = OSRuntimeCore; {
        class ENActivityDefinitionLanguageEntityRecordInner extends
        OS.DataTypes.GenericRecord {
            static attributesToDeclare() {
                return [
                    this.attr("Id", "idAttr", "Id", true, false, OS.DataTypes.DataTypes.LongInteger, function() {
                        return OS.DataTypes.LongInteger.defaultValue;
                    }, true),
                    this.attr("ActivityDefinitionId", "activityDefinitionIdAttr", "ActivityDefinitionId", false, false, OS.DataTypes.DataTypes.Integer, function() {
                        return 0;
                    }, true),
                    this.attr("Locale", "localeAttr", "Locale", false, false, OS.DataTypes.DataTypes.Text, function() {
                        return "";
                    }, true),
                    this.attr("Label", "labelAttr", "Label", false, false, OS.DataTypes.DataTypes.Text, function() {
                        return "";
                    }, true),
                    this.attr("InboxInstructions", "inboxInstructionsAttr", "InboxInstructions", false, false, OS.DataTypes.DataTypes.Text, function() {
                        return "";
                    }, true)
                ].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
            }

        }

        System_Model.ENActivityDefinitionLanguageEntityRecord = ENActivityDefinitionLanguageEntityRecordInner;

        var ENActivityDefinitionLanguageEntityRecord = ENActivityDefinitionLanguageEntityRecordInner;
        ENActivityDefinitionLanguageEntityRecord.init();
    }
});

define("System_.model$RLActivityDefinitionLanguageList", ["exports", "@outsystems/runtime-core-js", "System_.model", "System_.model$ENActivityDefinitionLanguageEntityRecord"], function(exports, OSRuntimeCore, System_Model) {
    var OS = OSRuntimeCore;
    class RLActivityDefinitionLanguageList extends
    OS.DataTypes.GenericRecordList {
        static getItemType() {
            return System_Model.ENActivityDefinitionLanguageEntityRecord;
        }

    }

    System_Model.RLActivityDefinitionLanguageList = RLActivityDefinitionLanguageList;

});

define("System_.model$ENProcessInputEntityRecord", ["exports", "@outsystems/runtime-core-js", "System_.model"], function(exports, OSRuntimeCore, System_Model) {
    var OS = OSRuntimeCore; {
        class ENProcessInputEntityRecordInner extends
        OS.DataTypes.GenericRecord {
            static attributesToDeclare() {
                return [
                    this.attr("Id", "idAttr", "Id", true, false, OS.DataTypes.DataTypes.LongInteger, function() {
                        return OS.DataTypes.LongInteger.defaultValue;
                    }, true),
                    this.attr("ProcessId", "processIdAttr", "ProcessId", true, false, OS.DataTypes.DataTypes.LongInteger, function() {
                        return OS.DataTypes.LongInteger.defaultValue;
                    }, true),
                    this.attr("InputDefinitionId", "inputDefinitionIdAttr", "InputDefinitionId", true, false, OS.DataTypes.DataTypes.Text, function() {
                        return "";
                    }, true),
                    this.attr("InputDefinitionKey", "inputDefinitionKeyAttr", "InputDefinitionKey", true, false, OS.DataTypes.DataTypes.Text, function() {
                        return "";
                    }, true),
                    this.attr("Name", "nameAttr", "Name", true, false, OS.DataTypes.DataTypes.Text, function() {
                        return "";
                    }, true),
                    this.attr("DataType", "dataTypeAttr", "DataType", true, false, OS.DataTypes.DataTypes.Text, function() {
                        return "";
                    }, true),
                    this.attr("InputValue", "inputValueAttr", "InputValue", false, false, OS.DataTypes.DataTypes.Text, function() {
                        return "";
                    }, true),
                    this.attr("ForeignKeyEntityId", "foreignKeyEntityIdAttr", "ForeignKeyEntityId", true, false, OS.DataTypes.DataTypes.Text, function() {
                        return "";
                    }, true)
                ].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
            }

        }

        System_Model.ENProcessInputEntityRecord = ENProcessInputEntityRecordInner;

        var ENProcessInputEntityRecord = ENProcessInputEntityRecordInner;
        ENProcessInputEntityRecord.init();
    }
});

define("System_.model$RLProcessInputList", ["exports", "@outsystems/runtime-core-js", "System_.model", "System_.model$ENProcessInputEntityRecord"], function(exports, OSRuntimeCore, System_Model) {
    var OS = OSRuntimeCore;
    class RLProcessInputList extends
    OS.DataTypes.GenericRecordList {
        static getItemType() {
            return System_Model.ENProcessInputEntityRecord;
        }

    }

    System_Model.RLProcessInputList = RLProcessInputList;

});

define("System_.model$RL_47595c6744be14d2bd677fd05324180f", ["exports", "@outsystems/runtime-core-js", "System_.model", "System_.model$RC_1ba3db8c7175cd095b4f1a36c3a1e53d"], function(exports, OSRuntimeCore, System_Model) {
    var OS = OSRuntimeCore;
    class RL_47595c6744be14d2bd677fd05324180f extends
    OS.DataTypes.GenericRecordList {
        static getItemType() {
            return System_Model.RC_1ba3db8c7175cd095b4f1a36c3a1e53d;
        }

    }

    System_Model.RL_47595c6744be14d2bd677fd05324180f = RL_47595c6744be14d2bd677fd05324180f;

});

define("System_.model$ENProcessDefinitionLanguageEntityRecord", ["exports", "@outsystems/runtime-core-js", "System_.model"], function(exports, OSRuntimeCore, System_Model) {
    var OS = OSRuntimeCore; {
        class ENProcessDefinitionLanguageEntityRecordInner extends
        OS.DataTypes.GenericRecord {
            static attributesToDeclare() {
                return [
                    this.attr("Id", "idAttr", "Id", true, false, OS.DataTypes.DataTypes.LongInteger, function() {
                        return OS.DataTypes.LongInteger.defaultValue;
                    }, true),
                    this.attr("ProcessDefinitionId", "processDefinitionIdAttr", "ProcessDefinitionId", true, false, OS.DataTypes.DataTypes.Integer, function() {
                        return 0;
                    }, true),
                    this.attr("Locale", "localeAttr", "Locale", false, false, OS.DataTypes.DataTypes.Text, function() {
                        return "";
                    }, true),
                    this.attr("Label", "labelAttr", "Label", false, false, OS.DataTypes.DataTypes.Text, function() {
                        return "";
                    }, true)
                ].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
            }

        }

        System_Model.ENProcessDefinitionLanguageEntityRecord = ENProcessDefinitionLanguageEntityRecordInner;

        var ENProcessDefinitionLanguageEntityRecord = ENProcessDefinitionLanguageEntityRecordInner;
        ENProcessDefinitionLanguageEntityRecord.init();
    }
});

define("System_.model$RC_b1f889a35d23518bfa5ab890a96efb52", ["exports", "@outsystems/runtime-core-js", "System_.model", "System_.model$ENProcessDefinitionLanguageEntityRecord"], function(exports, OSRuntimeCore, System_Model) {
    var OS = OSRuntimeCore; {
        class RC_b1f889a35d23518bfa5ab890a96efb52Inner extends
        OS.DataTypes.GenericRecord {
            static attributesToDeclare() {
                return [
                    this.attr("ProcessDefinitionLanguage", "processDefinitionLanguageAttr", "ProcessDefinitionLanguage", false, false, OS.DataTypes.DataTypes.Record, function() {
                        return OS.DataTypes.ImmutableBase.getData(new System_Model.ENProcessDefinitionLanguageEntityRecord());
                    }, true, System_Model.ENProcessDefinitionLanguageEntityRecord)
                ].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
            }

            static fromStructure(str) {
                return new RC_b1f889a35d23518bfa5ab890a96efb52(new RC_b1f889a35d23518bfa5ab890a96efb52.RecordClass({
                    processDefinitionLanguageAttr: OS.DataTypes.ImmutableBase.getData(str)
                }));
            }

        }

        System_Model.RC_b1f889a35d23518bfa5ab890a96efb52 = RC_b1f889a35d23518bfa5ab890a96efb52Inner;

        RC_b1f889a35d23518bfa5ab890a96efb52Inner._isAnonymousRecord = true;
        RC_b1f889a35d23518bfa5ab890a96efb52Inner.UniqueId = "b1f889a3-5d23-518b-fa5a-b890a96efb52";
        var RC_b1f889a35d23518bfa5ab890a96efb52 = RC_b1f889a35d23518bfa5ab890a96efb52Inner;
        RC_b1f889a35d23518bfa5ab890a96efb52.init();
    }
});

define("System_.model$RL_4bc987bb2bbc5a9c083569aa81631f7e", ["exports", "@outsystems/runtime-core-js", "System_.model", "System_.model$RC_b1f889a35d23518bfa5ab890a96efb52"], function(exports, OSRuntimeCore, System_Model) {
    var OS = OSRuntimeCore;
    class RL_4bc987bb2bbc5a9c083569aa81631f7e extends
    OS.DataTypes.GenericRecordList {
        static getItemType() {
            return System_Model.RC_b1f889a35d23518bfa5ab890a96efb52;
        }

    }

    System_Model.RL_4bc987bb2bbc5a9c083569aa81631f7e = RL_4bc987bb2bbc5a9c083569aa81631f7e;

});

define("System_.model$RC_4d77cfdd567b208680377834fc8205a2", ["exports", "@outsystems/runtime-core-js", "System_.model", "System_.model$PasswordComplexityPolicyRec"], function(exports, OSRuntimeCore, System_Model) {
    var OS = OSRuntimeCore; {
        class RC_4d77cfdd567b208680377834fc8205a2Inner extends
        OS.DataTypes.GenericRecord {
            static attributesToDeclare() {
                return [
                    this.attr("PasswordComplexityPolicy", "passwordComplexityPolicyAttr", "PasswordComplexityPolicy", false, false, OS.DataTypes.DataTypes.Record, function() {
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

        System_Model.RC_4d77cfdd567b208680377834fc8205a2 = RC_4d77cfdd567b208680377834fc8205a2Inner;

        RC_4d77cfdd567b208680377834fc8205a2Inner._isAnonymousRecord = true;
        RC_4d77cfdd567b208680377834fc8205a2Inner.UniqueId = "4d77cfdd-567b-2086-8037-7834fc8205a2";
        var RC_4d77cfdd567b208680377834fc8205a2 = RC_4d77cfdd567b208680377834fc8205a2Inner;
        RC_4d77cfdd567b208680377834fc8205a2.init();
    }
});

define("System_.model$StartResetPasswordResultRec", ["exports", "@outsystems/runtime-core-js", "System_.model"], function(exports, OSRuntimeCore, System_Model) {
    var OS = OSRuntimeCore; {
        class StartResetPasswordResultRecInner extends
        OS.DataTypes.GenericRecord {
            static attributesToDeclare() {
                return [
                    this.attr("Success", "successAttr", "Success", true, false, OS.DataTypes.DataTypes.Boolean, function() {
                        return false;
                    }, true),
                    this.attr("VerificationCode", "verificationCodeAttr", "VerificationCode", false, false, OS.DataTypes.DataTypes.Text, function() {
                        return "";
                    }, true)
                ].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
            }

        }

        System_Model.StartResetPasswordResultRec = StartResetPasswordResultRecInner;

        var StartResetPasswordResultRec = StartResetPasswordResultRecInner;
        StartResetPasswordResultRec.init();
    }
});

define("System_.model$RL_4e4931d865c8789e9e6ef1d8540ae228", ["exports", "@outsystems/runtime-core-js", "System_.model", "System_.model$StartResetPasswordResultRec"], function(exports, OSRuntimeCore, System_Model) {
    var OS = OSRuntimeCore;
    class RL_4e4931d865c8789e9e6ef1d8540ae228 extends
    OS.DataTypes.GenericRecordList {
        static getItemType() {
            return OS.SystemStructures.StartResetPasswordResultRec;
        }

    }

    System_Model.RL_4e4931d865c8789e9e6ef1d8540ae228 = RL_4e4931d865c8789e9e6ef1d8540ae228;

});

define("System_.model$RLActivityDefinitionList", ["exports", "@outsystems/runtime-core-js", "System_.model", "System_.model$ENActivityDefinitionEntityRecord"], function(exports, OSRuntimeCore, System_Model) {
    var OS = OSRuntimeCore;
    class RLActivityDefinitionList extends
    OS.DataTypes.GenericRecordList {
        static getItemType() {
            return System_Model.ENActivityDefinitionEntityRecord;
        }

    }

    System_Model.RLActivityDefinitionList = RLActivityDefinitionList;

});

define("System_.model$ENProcessOutputDefinitionEntityRecord", ["exports", "@outsystems/runtime-core-js", "System_.model"], function(exports, OSRuntimeCore, System_Model) {
    var OS = OSRuntimeCore; {
        class ENProcessOutputDefinitionEntityRecordInner extends
        OS.DataTypes.GenericRecord {
            static attributesToDeclare() {
                return [
                    this.attr("Id", "idAttr", "Id", true, false, OS.DataTypes.DataTypes.Text, function() {
                        return "";
                    }, true),
                    this.attr("Name", "nameAttr", "Name", true, false, OS.DataTypes.DataTypes.Text, function() {
                        return "";
                    }, true),
                    this.attr("Description", "descriptionAttr", "Description", false, false, OS.DataTypes.DataTypes.Text, function() {
                        return "";
                    }, true),
                    this.attr("ProcessDefinitionId", "processDefinitionIdAttr", "ProcessDefinitionId", true, false, OS.DataTypes.DataTypes.Integer, function() {
                        return 0;
                    }, true),
                    this.attr("IsActive", "isActiveAttr", "IsActive", true, false, OS.DataTypes.DataTypes.Boolean, function() {
                        return false;
                    }, true),
                    this.attr("DataType", "dataTypeAttr", "DataType", true, false, OS.DataTypes.DataTypes.Text, function() {
                        return "";
                    }, true),
                    this.attr("DefaultValue", "defaultValueAttr", "DefaultValue", false, false, OS.DataTypes.DataTypes.Text, function() {
                        return "";
                    }, true),
                    this.attr("ForeignKeyEntityId", "foreignKeyEntityIdAttr", "ForeignKeyEntityId", true, false, OS.DataTypes.DataTypes.Text, function() {
                        return "";
                    }, true)
                ].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
            }

        }

        System_Model.ENProcessOutputDefinitionEntityRecord = ENProcessOutputDefinitionEntityRecordInner;

        var ENProcessOutputDefinitionEntityRecord = ENProcessOutputDefinitionEntityRecordInner;
        ENProcessOutputDefinitionEntityRecord.init();
    }
});

define("System_.model$RC_fd7c0ec5e9d4fd6a4a9a332d3e175dd4", ["exports", "@outsystems/runtime-core-js", "System_.model", "System_.model$ENProcessOutputDefinitionEntityRecord"], function(exports, OSRuntimeCore, System_Model) {
    var OS = OSRuntimeCore; {
        class RC_fd7c0ec5e9d4fd6a4a9a332d3e175dd4Inner extends
        OS.DataTypes.GenericRecord {
            static attributesToDeclare() {
                return [
                    this.attr("ProcessOutputDefinition", "processOutputDefinitionAttr", "ProcessOutputDefinition", false, false, OS.DataTypes.DataTypes.Record, function() {
                        return OS.DataTypes.ImmutableBase.getData(new System_Model.ENProcessOutputDefinitionEntityRecord());
                    }, true, System_Model.ENProcessOutputDefinitionEntityRecord)
                ].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
            }

            static fromStructure(str) {
                return new RC_fd7c0ec5e9d4fd6a4a9a332d3e175dd4(new RC_fd7c0ec5e9d4fd6a4a9a332d3e175dd4.RecordClass({
                    processOutputDefinitionAttr: OS.DataTypes.ImmutableBase.getData(str)
                }));
            }

        }

        System_Model.RC_fd7c0ec5e9d4fd6a4a9a332d3e175dd4 = RC_fd7c0ec5e9d4fd6a4a9a332d3e175dd4Inner;

        RC_fd7c0ec5e9d4fd6a4a9a332d3e175dd4Inner._isAnonymousRecord = true;
        RC_fd7c0ec5e9d4fd6a4a9a332d3e175dd4Inner.UniqueId = "fd7c0ec5-e9d4-fd6a-4a9a-332d3e175dd4";
        var RC_fd7c0ec5e9d4fd6a4a9a332d3e175dd4 = RC_fd7c0ec5e9d4fd6a4a9a332d3e175dd4Inner;
        RC_fd7c0ec5e9d4fd6a4a9a332d3e175dd4.init();
    }
});

define("System_.model$RL_52acedf8b6208b104cbd689064facc6a", ["exports", "@outsystems/runtime-core-js", "System_.model", "System_.model$RC_fd7c0ec5e9d4fd6a4a9a332d3e175dd4"], function(exports, OSRuntimeCore, System_Model) {
    var OS = OSRuntimeCore;
    class RL_52acedf8b6208b104cbd689064facc6a extends
    OS.DataTypes.GenericRecordList {
        static getItemType() {
            return System_Model.RC_fd7c0ec5e9d4fd6a4a9a332d3e175dd4;
        }

    }

    System_Model.RL_52acedf8b6208b104cbd689064facc6a = RL_52acedf8b6208b104cbd689064facc6a;

});

define("System_.model$RC_53d491417faf149f9fb8a0dda9c12d06", ["exports", "@outsystems/runtime-core-js", "System_.model", "System_.model$ChangePasswordResultRec"], function(exports, OSRuntimeCore, System_Model) {
    var OS = OSRuntimeCore; {
        class RC_53d491417faf149f9fb8a0dda9c12d06Inner extends
        OS.DataTypes.GenericRecord {
            static attributesToDeclare() {
                return [
                    this.attr("ChangePasswordResult", "changePasswordResultAttr", "ChangePasswordResult", false, false, OS.DataTypes.DataTypes.Record, function() {
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

        System_Model.RC_53d491417faf149f9fb8a0dda9c12d06 = RC_53d491417faf149f9fb8a0dda9c12d06Inner;

        RC_53d491417faf149f9fb8a0dda9c12d06Inner._isAnonymousRecord = true;
        RC_53d491417faf149f9fb8a0dda9c12d06Inner.UniqueId = "53d49141-7faf-149f-9fb8-a0dda9c12d06";
        var RC_53d491417faf149f9fb8a0dda9c12d06 = RC_53d491417faf149f9fb8a0dda9c12d06Inner;
        RC_53d491417faf149f9fb8a0dda9c12d06.init();
    }
});

define("System_.model$RL_54fab648630d41e343fad35c1143481d", ["exports", "@outsystems/runtime-core-js", "System_.model", "System_.model$UserInfoRec"], function(exports, OSRuntimeCore, System_Model) {
    var OS = OSRuntimeCore;
    class RL_54fab648630d41e343fad35c1143481d extends
    OS.DataTypes.GenericRecordList {
        static getItemType() {
            return OS.SystemStructures.UserInfoRec;
        }

    }

    System_Model.RL_54fab648630d41e343fad35c1143481d = RL_54fab648630d41e343fad35c1143481d;

});

define("System_.model$RLActivityKindList", ["exports", "@outsystems/runtime-core-js", "System_.model", "System_.model$ENActivityKindEntityRecord"], function(exports, OSRuntimeCore, System_Model) {
    var OS = OSRuntimeCore;
    class RLActivityKindList extends
    OS.DataTypes.GenericRecordList {
        static getItemType() {
            return System_Model.ENActivityKindEntityRecord;
        }

    }

    System_Model.RLActivityKindList = RLActivityKindList;

});

define("System_.model$RL_582b59adcb0660dd0915958cbaffea77", ["exports", "@outsystems/runtime-core-js", "System_.model", "System_.model$RC_2efffbee03fccc31484e893e007e6c9a"], function(exports, OSRuntimeCore, System_Model) {
    var OS = OSRuntimeCore;
    class RL_582b59adcb0660dd0915958cbaffea77 extends
    OS.DataTypes.GenericRecordList {
        static getItemType() {
            return System_Model.RC_2efffbee03fccc31484e893e007e6c9a;
        }

    }

    System_Model.RL_582b59adcb0660dd0915958cbaffea77 = RL_582b59adcb0660dd0915958cbaffea77;

});

define("System_.model$RL_599ab6c06883c99851f6aa769853530c", ["exports", "@outsystems/runtime-core-js", "System_.model", "System_.model$RC_3251af6c799b185d408b7cad31be3454"], function(exports, OSRuntimeCore, System_Model) {
    var OS = OSRuntimeCore;
    class RL_599ab6c06883c99851f6aa769853530c extends
    OS.DataTypes.GenericRecordList {
        static getItemType() {
            return System_Model.RC_3251af6c799b185d408b7cad31be3454;
        }

    }

    System_Model.RL_599ab6c06883c99851f6aa769853530c = RL_599ab6c06883c99851f6aa769853530c;

});

define("System_.model$RC_5d4c0a98b9773e489e7e27bfe5360793", ["exports", "@outsystems/runtime-core-js", "System_.model", "System_.model$UpdateUserFailureReasonRec"], function(exports, OSRuntimeCore, System_Model) {
    var OS = OSRuntimeCore; {
        class RC_5d4c0a98b9773e489e7e27bfe5360793Inner extends
        OS.DataTypes.GenericRecord {
            static attributesToDeclare() {
                return [
                    this.attr("UpdateUserFailureReason", "updateUserFailureReasonAttr", "UpdateUserFailureReason", false, false, OS.DataTypes.DataTypes.Record, function() {
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

        System_Model.RC_5d4c0a98b9773e489e7e27bfe5360793 = RC_5d4c0a98b9773e489e7e27bfe5360793Inner;

        RC_5d4c0a98b9773e489e7e27bfe5360793Inner._isAnonymousRecord = true;
        RC_5d4c0a98b9773e489e7e27bfe5360793Inner.UniqueId = "5d4c0a98-b977-3e48-9e7e-27bfe5360793";
        var RC_5d4c0a98b9773e489e7e27bfe5360793 = RC_5d4c0a98b9773e489e7e27bfe5360793Inner;
        RC_5d4c0a98b9773e489e7e27bfe5360793.init();
    }
});

define("System_.model$ENProcessOutputEntityRecord", ["exports", "@outsystems/runtime-core-js", "System_.model"], function(exports, OSRuntimeCore, System_Model) {
    var OS = OSRuntimeCore; {
        class ENProcessOutputEntityRecordInner extends
        OS.DataTypes.GenericRecord {
            static attributesToDeclare() {
                return [
                    this.attr("Id", "idAttr", "Id", true, false, OS.DataTypes.DataTypes.LongInteger, function() {
                        return OS.DataTypes.LongInteger.defaultValue;
                    }, true),
                    this.attr("ProcessId", "processIdAttr", "ProcessId", false, false, OS.DataTypes.DataTypes.LongInteger, function() {
                        return OS.DataTypes.LongInteger.defaultValue;
                    }, true),
                    this.attr("OutputDefinitionId", "outputDefinitionIdAttr", "OutputDefinitionId", true, false, OS.DataTypes.DataTypes.Text, function() {
                        return "";
                    }, true),
                    this.attr("OutputDefinitionKey", "outputDefinitionKeyAttr", "OutputDefinitionKey", true, false, OS.DataTypes.DataTypes.Text, function() {
                        return "";
                    }, true),
                    this.attr("Name", "nameAttr", "Name", true, false, OS.DataTypes.DataTypes.Text, function() {
                        return "";
                    }, true),
                    this.attr("DataType", "dataTypeAttr", "DataType", true, false, OS.DataTypes.DataTypes.Text, function() {
                        return "";
                    }, true),
                    this.attr("OutputValue", "outputValueAttr", "OutputValue", false, false, OS.DataTypes.DataTypes.Text, function() {
                        return "";
                    }, true),
                    this.attr("ForeignKeyEntityId", "foreignKeyEntityIdAttr", "ForeignKeyEntityId", true, false, OS.DataTypes.DataTypes.Text, function() {
                        return "";
                    }, true)
                ].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
            }

        }

        System_Model.ENProcessOutputEntityRecord = ENProcessOutputEntityRecordInner;

        var ENProcessOutputEntityRecord = ENProcessOutputEntityRecordInner;
        ENProcessOutputEntityRecord.init();
    }
});

define("System_.model$RLProcessOutputList", ["exports", "@outsystems/runtime-core-js", "System_.model", "System_.model$ENProcessOutputEntityRecord"], function(exports, OSRuntimeCore, System_Model) {
    var OS = OSRuntimeCore;
    class RLProcessOutputList extends
    OS.DataTypes.GenericRecordList {
        static getItemType() {
            return System_Model.ENProcessOutputEntityRecord;
        }

    }

    System_Model.RLProcessOutputList = RLProcessOutputList;

});

define("System_.model$FinishUserRegistrationFailureReasonRec", ["exports", "@outsystems/runtime-core-js", "System_.model"], function(exports, OSRuntimeCore, System_Model) {
    var OS = OSRuntimeCore; {
        class FinishUserRegistrationFailureReasonRecInner extends
        OS.DataTypes.GenericRecord {
            static attributesToDeclare() {
                return [
                    this.attr("InvalidVerificationCode", "invalidVerificationCodeAttr", "InvalidVerificationCode", false, false, OS.DataTypes.DataTypes.Boolean, function() {
                        return false;
                    }, true),
                    this.attr("PasswordComplexityPolicyFailed", "passwordComplexityPolicyFailedAttr", "PasswordComplexityPolicyFailed", false, false, OS.DataTypes.DataTypes.Boolean, function() {
                        return false;
                    }, true),
                    this.attr("InvalidEmail", "invalidEmailAttr", "InvalidEmail", false, false, OS.DataTypes.DataTypes.Boolean, function() {
                        return false;
                    }, true)
                ].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
            }

        }

        System_Model.FinishUserRegistrationFailureReasonRec = FinishUserRegistrationFailureReasonRecInner;

        var FinishUserRegistrationFailureReasonRec = FinishUserRegistrationFailureReasonRecInner;
        FinishUserRegistrationFailureReasonRec.init();
    }
});

define("System_.model$RLApplicationList", ["exports", "@outsystems/runtime-core-js", "System_.model", "System_.model$ENApplicationEntityRecord"], function(exports, OSRuntimeCore, System_Model) {
    var OS = OSRuntimeCore;
    class RLApplicationList extends
    OS.DataTypes.GenericRecordList {
        static getItemType() {
            return System_Model.ENApplicationEntityRecord;
        }

    }

    System_Model.RLApplicationList = RLApplicationList;

});

define("System_.model$RL_68be9dd68c0e161ac2c65c1092c999e6", ["exports", "@outsystems/runtime-core-js", "System_.model", "System_.model$FinishResetPasswordResultRec"], function(exports, OSRuntimeCore, System_Model) {
    var OS = OSRuntimeCore;
    class RL_68be9dd68c0e161ac2c65c1092c999e6 extends
    OS.DataTypes.GenericRecordList {
        static getItemType() {
            return OS.SystemStructures.FinishResetPasswordResultRec;
        }

    }

    System_Model.RL_68be9dd68c0e161ac2c65c1092c999e6 = RL_68be9dd68c0e161ac2c65c1092c999e6;

});

define("System_.model$RLProcessDefinitionList", ["exports", "@outsystems/runtime-core-js", "System_.model", "System_.model$ENProcessDefinitionEntityRecord"], function(exports, OSRuntimeCore, System_Model) {
    var OS = OSRuntimeCore;
    class RLProcessDefinitionList extends
    OS.DataTypes.GenericRecordList {
        static getItemType() {
            return System_Model.ENProcessDefinitionEntityRecord;
        }

    }

    System_Model.RLProcessDefinitionList = RLProcessDefinitionList;

});

define("System_.model$ENUserEntityRecord", ["exports", "@outsystems/runtime-core-js", "System_.model"], function(exports, OSRuntimeCore, System_Model) {
    var OS = OSRuntimeCore; {
        class ENUserEntityRecordInner extends
        OS.DataTypes.GenericRecord {
            static attributesToDeclare() {
                return [
                    this.attr("Id", "idAttr", "Id", true, false, OS.DataTypes.DataTypes.Text, function() {
                        return "";
                    }, true),
                    this.attr("Name", "nameAttr", "Name", false, false, OS.DataTypes.DataTypes.Text, function() {
                        return "";
                    }, true),
                    this.attr("Email", "emailAttr", "Email", false, false, OS.DataTypes.DataTypes.Email, function() {
                        return "";
                    }, true),
                    this.attr("PhotoUrl", "photoUrlAttr", "PhotoUrl", false, false, OS.DataTypes.DataTypes.Text, function() {
                        return "";
                    }, true)
                ].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
            }

        }

        System_Model.ENUserEntityRecord = ENUserEntityRecordInner;

        var ENUserEntityRecord = ENUserEntityRecordInner;
        ENUserEntityRecord.init();
    }
});

define("System_.model$FinishUserRegistrationResultRec", ["exports", "@outsystems/runtime-core-js", "System_.model", "System_.model$FinishUserRegistrationFailureReasonRec"], function(exports, OSRuntimeCore, System_Model) {
    var OS = OSRuntimeCore; {
        class FinishUserRegistrationResultRecInner extends
        OS.DataTypes.GenericRecord {
            static attributesToDeclare() {
                return [
                    this.attr("Success", "successAttr", "Success", false, false, OS.DataTypes.DataTypes.Boolean, function() {
                        return false;
                    }, true),
                    this.attr("UserId", "userIdAttr", "UserId", false, false, OS.DataTypes.DataTypes.Text, function() {
                        return "";
                    }, true),
                    this.attr("FinishUserRegistrationFailureReason", "finishUserRegistrationFailureReasonAttr", "FinishUserRegistrationFailureReason", false, false, OS.DataTypes.DataTypes.Record, function() {
                        return OS.DataTypes.ImmutableBase.getData(new OS.SystemStructures.FinishUserRegistrationFailureReasonRec());
                    }, true, OS.SystemStructures.FinishUserRegistrationFailureReasonRec)
                ].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
            }

        }

        System_Model.FinishUserRegistrationResultRec = FinishUserRegistrationResultRecInner;

        var FinishUserRegistrationResultRec = FinishUserRegistrationResultRecInner;
        FinishUserRegistrationResultRec.init();
    }
});

define("System_.model$RLActivityStatusList", ["exports", "@outsystems/runtime-core-js", "System_.model", "System_.model$ENActivityStatusEntityRecord"], function(exports, OSRuntimeCore, System_Model) {
    var OS = OSRuntimeCore;
    class RLActivityStatusList extends
    OS.DataTypes.GenericRecordList {
        static getItemType() {
            return System_Model.ENActivityStatusEntityRecord;
        }

    }

    System_Model.RLActivityStatusList = RLActivityStatusList;

});

define("System_.model$RLProcessInstanceList", ["exports", "@outsystems/runtime-core-js", "System_.model", "System_.model$ENProcessInstanceEntityRecord"], function(exports, OSRuntimeCore, System_Model) {
    var OS = OSRuntimeCore;
    class RLProcessInstanceList extends
    OS.DataTypes.GenericRecordList {
        static getItemType() {
            return System_Model.ENProcessInstanceEntityRecord;
        }

    }

    System_Model.RLProcessInstanceList = RLProcessInstanceList;

});

define("System_.model$RLTenantList", ["exports", "@outsystems/runtime-core-js", "System_.model", "System_.model$ENTenantEntityRecord"], function(exports, OSRuntimeCore, System_Model) {
    var OS = OSRuntimeCore;
    class RLTenantList extends
    OS.DataTypes.GenericRecordList {
        static getItemType() {
            return System_Model.ENTenantEntityRecord;
        }

    }

    System_Model.RLTenantList = RLTenantList;

});

define("System_.model$RLProcessDefinitionLanguageList", ["exports", "@outsystems/runtime-core-js", "System_.model", "System_.model$ENProcessDefinitionLanguageEntityRecord"], function(exports, OSRuntimeCore, System_Model) {
    var OS = OSRuntimeCore;
    class RLProcessDefinitionLanguageList extends
    OS.DataTypes.GenericRecordList {
        static getItemType() {
            return System_Model.ENProcessDefinitionLanguageEntityRecord;
        }

    }

    System_Model.RLProcessDefinitionLanguageList = RLProcessDefinitionLanguageList;

});

define("System_.model$RC_a702e171772a9b89c17e2544ab6d1d29", ["exports", "@outsystems/runtime-core-js", "System_.model", "System_.model$ENApplicationEntityRecord"], function(exports, OSRuntimeCore, System_Model) {
    var OS = OSRuntimeCore; {
        class RC_a702e171772a9b89c17e2544ab6d1d29Inner extends
        OS.DataTypes.GenericRecord {
            static attributesToDeclare() {
                return [
                    this.attr("Application", "applicationAttr", "Application", false, false, OS.DataTypes.DataTypes.Record, function() {
                        return OS.DataTypes.ImmutableBase.getData(new System_Model.ENApplicationEntityRecord());
                    }, true, System_Model.ENApplicationEntityRecord)
                ].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
            }

            static fromStructure(str) {
                return new RC_a702e171772a9b89c17e2544ab6d1d29(new RC_a702e171772a9b89c17e2544ab6d1d29.RecordClass({
                    applicationAttr: OS.DataTypes.ImmutableBase.getData(str)
                }));
            }

        }

        System_Model.RC_a702e171772a9b89c17e2544ab6d1d29 = RC_a702e171772a9b89c17e2544ab6d1d29Inner;

        RC_a702e171772a9b89c17e2544ab6d1d29Inner._isAnonymousRecord = true;
        RC_a702e171772a9b89c17e2544ab6d1d29Inner.UniqueId = "a702e171-772a-9b89-c17e-2544ab6d1d29";
        var RC_a702e171772a9b89c17e2544ab6d1d29 = RC_a702e171772a9b89c17e2544ab6d1d29Inner;
        RC_a702e171772a9b89c17e2544ab6d1d29.init();
    }
});

define("System_.model$RL_77de0cb9f6a169c5c7917faf23aa1522", ["exports", "@outsystems/runtime-core-js", "System_.model", "System_.model$RC_a702e171772a9b89c17e2544ab6d1d29"], function(exports, OSRuntimeCore, System_Model) {
    var OS = OSRuntimeCore;
    class RL_77de0cb9f6a169c5c7917faf23aa1522 extends
    OS.DataTypes.GenericRecordList {
        static getItemType() {
            return System_Model.RC_a702e171772a9b89c17e2544ab6d1d29;
        }

    }

    System_Model.RL_77de0cb9f6a169c5c7917faf23aa1522 = RL_77de0cb9f6a169c5c7917faf23aa1522;

});

define("System_.model$ENActivityInstanceEntityRecord", ["exports", "@outsystems/runtime-core-js", "System_.model"], function(exports, OSRuntimeCore, System_Model) {
    var OS = OSRuntimeCore; {
        class ENActivityInstanceEntityRecordInner extends
        OS.DataTypes.GenericRecord {
            static attributesToDeclare() {
                return [
                    this.attr("Id", "idAttr", "Id", true, false, OS.DataTypes.DataTypes.LongInteger, function() {
                        return OS.DataTypes.LongInteger.defaultValue;
                    }, true),
                    this.attr("ActivityDefinitionId", "activityDefinitionIdAttr", "ActivityDefinitionId", true, false, OS.DataTypes.DataTypes.Integer, function() {
                        return 0;
                    }, true),
                    this.attr("ProcessInstanceId", "processInstanceIdAttr", "ProcessInstanceId", true, false, OS.DataTypes.DataTypes.LongInteger, function() {
                        return OS.DataTypes.LongInteger.defaultValue;
                    }, true),
                    this.attr("ProcessDefinitionId", "processDefinitionIdAttr", "ProcessDefinitionId", false, false, OS.DataTypes.DataTypes.Integer, function() {
                        return 0;
                    }, true),
                    this.attr("Status", "statusAttr", "Status", true, false, OS.DataTypes.DataTypes.LongInteger, function() {
                        return OS.DataTypes.LongInteger.defaultValue;
                    }, true),
                    this.attr("StartedOn", "startedOnAttr", "StartedOn", false, false, OS.DataTypes.DataTypes.DateTime, function() {
                        return OS.DataTypes.DateTime.defaultValue;
                    }, true),
                    this.attr("LastModifiedOn", "lastModifiedOnAttr", "LastModifiedOn", false, false, OS.DataTypes.DataTypes.DateTime, function() {
                        return OS.DataTypes.DateTime.defaultValue;
                    }, true)
                ].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
            }

        }

        System_Model.ENActivityInstanceEntityRecord = ENActivityInstanceEntityRecordInner;

        var ENActivityInstanceEntityRecord = ENActivityInstanceEntityRecordInner;
        ENActivityInstanceEntityRecord.init();
    }
});

define("System_.model$RLActivityInstanceList", ["exports", "@outsystems/runtime-core-js", "System_.model", "System_.model$ENActivityInstanceEntityRecord"], function(exports, OSRuntimeCore, System_Model) {
    var OS = OSRuntimeCore;
    class RLActivityInstanceList extends
    OS.DataTypes.GenericRecordList {
        static getItemType() {
            return System_Model.ENActivityInstanceEntityRecord;
        }

    }

    System_Model.RLActivityInstanceList = RLActivityInstanceList;

});

define("System_.model$RC_78fc3f34c3c68c7b3604ba4da3920682", ["exports", "@outsystems/runtime-core-js", "System_.model", "System_.model$FinishUserRegistrationFailureReasonRec"], function(exports, OSRuntimeCore, System_Model) {
    var OS = OSRuntimeCore; {
        class RC_78fc3f34c3c68c7b3604ba4da3920682Inner extends
        OS.DataTypes.GenericRecord {
            static attributesToDeclare() {
                return [
                    this.attr("FinishUserRegistrationFailureReason", "finishUserRegistrationFailureReasonAttr", "FinishUserRegistrationFailureReason", false, false, OS.DataTypes.DataTypes.Record, function() {
                        return OS.DataTypes.ImmutableBase.getData(new OS.SystemStructures.FinishUserRegistrationFailureReasonRec());
                    }, true, OS.SystemStructures.FinishUserRegistrationFailureReasonRec)
                ].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
            }

            static fromStructure(str) {
                return new RC_78fc3f34c3c68c7b3604ba4da3920682(new RC_78fc3f34c3c68c7b3604ba4da3920682.RecordClass({
                    finishUserRegistrationFailureReasonAttr: OS.DataTypes.ImmutableBase.getData(str)
                }));
            }

        }

        System_Model.RC_78fc3f34c3c68c7b3604ba4da3920682 = RC_78fc3f34c3c68c7b3604ba4da3920682Inner;

        RC_78fc3f34c3c68c7b3604ba4da3920682Inner._isAnonymousRecord = true;
        RC_78fc3f34c3c68c7b3604ba4da3920682Inner.UniqueId = "78fc3f34-c3c6-8c7b-3604-ba4da3920682";
        var RC_78fc3f34c3c68c7b3604ba4da3920682 = RC_78fc3f34c3c68c7b3604ba4da3920682Inner;
        RC_78fc3f34c3c68c7b3604ba4da3920682.init();
    }
});

define("System_.model$ENProcessInputDefinitionEntityRecord", ["exports", "@outsystems/runtime-core-js", "System_.model"], function(exports, OSRuntimeCore, System_Model) {
    var OS = OSRuntimeCore; {
        class ENProcessInputDefinitionEntityRecordInner extends
        OS.DataTypes.GenericRecord {
            static attributesToDeclare() {
                return [
                    this.attr("Id", "idAttr", "Id", true, false, OS.DataTypes.DataTypes.Text, function() {
                        return "";
                    }, true),
                    this.attr("Key", "keyAttr", "Key", true, false, OS.DataTypes.DataTypes.Text, function() {
                        return "";
                    }, true),
                    this.attr("Name", "nameAttr", "Name", true, false, OS.DataTypes.DataTypes.Text, function() {
                        return "";
                    }, true),
                    this.attr("Description", "descriptionAttr", "Description", false, false, OS.DataTypes.DataTypes.Text, function() {
                        return "";
                    }, true),
                    this.attr("ProcessDefinitionId", "processDefinitionIdAttr", "ProcessDefinitionId", true, false, OS.DataTypes.DataTypes.Integer, function() {
                        return 0;
                    }, true),
                    this.attr("IsActive", "isActiveAttr", "IsActive", true, false, OS.DataTypes.DataTypes.Boolean, function() {
                        return false;
                    }, true),
                    this.attr("DataType", "dataTypeAttr", "DataType", true, false, OS.DataTypes.DataTypes.Text, function() {
                        return "";
                    }, true),
                    this.attr("DefaultValue", "defaultValueAttr", "DefaultValue", false, false, OS.DataTypes.DataTypes.Text, function() {
                        return "";
                    }, true),
                    this.attr("IsMandatory", "isMandatoryAttr", "IsMandatory", true, false, OS.DataTypes.DataTypes.Boolean, function() {
                        return false;
                    }, true),
                    this.attr("ForeignKeyEntityId", "foreignKeyEntityIdAttr", "ForeignKeyEntityId", true, false, OS.DataTypes.DataTypes.Text, function() {
                        return "";
                    }, true)
                ].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
            }

        }

        System_Model.ENProcessInputDefinitionEntityRecord = ENProcessInputDefinitionEntityRecordInner;

        var ENProcessInputDefinitionEntityRecord = ENProcessInputDefinitionEntityRecordInner;
        ENProcessInputDefinitionEntityRecord.init();
    }
});

define("System_.model$RC_cbc07de8251245064bd8f80b6b35c7f6", ["exports", "@outsystems/runtime-core-js", "System_.model", "System_.model$ENProcessInputDefinitionEntityRecord"], function(exports, OSRuntimeCore, System_Model) {
    var OS = OSRuntimeCore; {
        class RC_cbc07de8251245064bd8f80b6b35c7f6Inner extends
        OS.DataTypes.GenericRecord {
            static attributesToDeclare() {
                return [
                    this.attr("ProcessInputDefinition", "processInputDefinitionAttr", "ProcessInputDefinition", false, false, OS.DataTypes.DataTypes.Record, function() {
                        return OS.DataTypes.ImmutableBase.getData(new System_Model.ENProcessInputDefinitionEntityRecord());
                    }, true, System_Model.ENProcessInputDefinitionEntityRecord)
                ].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
            }

            static fromStructure(str) {
                return new RC_cbc07de8251245064bd8f80b6b35c7f6(new RC_cbc07de8251245064bd8f80b6b35c7f6.RecordClass({
                    processInputDefinitionAttr: OS.DataTypes.ImmutableBase.getData(str)
                }));
            }

        }

        System_Model.RC_cbc07de8251245064bd8f80b6b35c7f6 = RC_cbc07de8251245064bd8f80b6b35c7f6Inner;

        RC_cbc07de8251245064bd8f80b6b35c7f6Inner._isAnonymousRecord = true;
        RC_cbc07de8251245064bd8f80b6b35c7f6Inner.UniqueId = "cbc07de8-2512-4506-4bd8-f80b6b35c7f6";
        var RC_cbc07de8251245064bd8f80b6b35c7f6 = RC_cbc07de8251245064bd8f80b6b35c7f6Inner;
        RC_cbc07de8251245064bd8f80b6b35c7f6.init();
    }
});

define("System_.model$RL_7a20bba9a4dcbce87cc868fa1eaca840", ["exports", "@outsystems/runtime-core-js", "System_.model", "System_.model$RC_cbc07de8251245064bd8f80b6b35c7f6"], function(exports, OSRuntimeCore, System_Model) {
    var OS = OSRuntimeCore;
    class RL_7a20bba9a4dcbce87cc868fa1eaca840 extends
    OS.DataTypes.GenericRecordList {
        static getItemType() {
            return System_Model.RC_cbc07de8251245064bd8f80b6b35c7f6;
        }

    }

    System_Model.RL_7a20bba9a4dcbce87cc868fa1eaca840 = RL_7a20bba9a4dcbce87cc868fa1eaca840;

});

define("System_.model$RC_80c865ccf1b0df95391817b0ddc45e18", ["exports", "@outsystems/runtime-core-js", "System_.model", "System_.model$ENProcessDefinitionEntityRecord"], function(exports, OSRuntimeCore, System_Model) {
    var OS = OSRuntimeCore; {
        class RC_80c865ccf1b0df95391817b0ddc45e18Inner extends
        OS.DataTypes.GenericRecord {
            static attributesToDeclare() {
                return [
                    this.attr("ProcessDefinition", "processDefinitionAttr", "ProcessDefinition", false, false, OS.DataTypes.DataTypes.Record, function() {
                        return OS.DataTypes.ImmutableBase.getData(new System_Model.ENProcessDefinitionEntityRecord());
                    }, true, System_Model.ENProcessDefinitionEntityRecord)
                ].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
            }

            static fromStructure(str) {
                return new RC_80c865ccf1b0df95391817b0ddc45e18(new RC_80c865ccf1b0df95391817b0ddc45e18.RecordClass({
                    processDefinitionAttr: OS.DataTypes.ImmutableBase.getData(str)
                }));
            }

        }

        System_Model.RC_80c865ccf1b0df95391817b0ddc45e18 = RC_80c865ccf1b0df95391817b0ddc45e18Inner;

        RC_80c865ccf1b0df95391817b0ddc45e18Inner._isAnonymousRecord = true;
        RC_80c865ccf1b0df95391817b0ddc45e18Inner.UniqueId = "80c865cc-f1b0-df95-3918-17b0ddc45e18";
        var RC_80c865ccf1b0df95391817b0ddc45e18 = RC_80c865ccf1b0df95391817b0ddc45e18Inner;
        RC_80c865ccf1b0df95391817b0ddc45e18.init();
    }
});

define("System_.model$RC_ced013358a82a813f1d9a5108f17ce79", ["exports", "@outsystems/runtime-core-js", "System_.model", "System_.model$ENUserEntityRecord"], function(exports, OSRuntimeCore, System_Model) {
    var OS = OSRuntimeCore; {
        class RC_ced013358a82a813f1d9a5108f17ce79Inner extends
        OS.DataTypes.GenericRecord {
            static attributesToDeclare() {
                return [
                    this.attr("User", "userAttr", "User", false, false, OS.DataTypes.DataTypes.Record, function() {
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

        System_Model.RC_ced013358a82a813f1d9a5108f17ce79 = RC_ced013358a82a813f1d9a5108f17ce79Inner;

        RC_ced013358a82a813f1d9a5108f17ce79Inner._isAnonymousRecord = true;
        RC_ced013358a82a813f1d9a5108f17ce79Inner.UniqueId = "ced01335-8a82-a813-f1d9-a5108f17ce79";
        var RC_ced013358a82a813f1d9a5108f17ce79 = RC_ced013358a82a813f1d9a5108f17ce79Inner;
        RC_ced013358a82a813f1d9a5108f17ce79.init();
    }
});

define("System_.model$RL_8430333e95ceffc00def96d8abb01f75", ["exports", "@outsystems/runtime-core-js", "System_.model", "System_.model$RC_ced013358a82a813f1d9a5108f17ce79"], function(exports, OSRuntimeCore, System_Model) {
    var OS = OSRuntimeCore;
    class RL_8430333e95ceffc00def96d8abb01f75 extends
    OS.DataTypes.GenericRecordList {
        static getItemType() {
            return System_Model.RC_ced013358a82a813f1d9a5108f17ce79;
        }

    }

    System_Model.RL_8430333e95ceffc00def96d8abb01f75 = RL_8430333e95ceffc00def96d8abb01f75;

});

define("System_.model$RC_eb90da5b34724818e84008409205001c", ["exports", "@outsystems/runtime-core-js", "System_.model", "System_.model$ENActivityDefinitionLanguageEntityRecord"], function(exports, OSRuntimeCore, System_Model) {
    var OS = OSRuntimeCore; {
        class RC_eb90da5b34724818e84008409205001cInner extends
        OS.DataTypes.GenericRecord {
            static attributesToDeclare() {
                return [
                    this.attr("ActivityDefinitionLanguage", "activityDefinitionLanguageAttr", "ActivityDefinitionLanguage", false, false, OS.DataTypes.DataTypes.Record, function() {
                        return OS.DataTypes.ImmutableBase.getData(new System_Model.ENActivityDefinitionLanguageEntityRecord());
                    }, true, System_Model.ENActivityDefinitionLanguageEntityRecord)
                ].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
            }

            static fromStructure(str) {
                return new RC_eb90da5b34724818e84008409205001c(new RC_eb90da5b34724818e84008409205001c.RecordClass({
                    activityDefinitionLanguageAttr: OS.DataTypes.ImmutableBase.getData(str)
                }));
            }

        }

        System_Model.RC_eb90da5b34724818e84008409205001c = RC_eb90da5b34724818e84008409205001cInner;

        RC_eb90da5b34724818e84008409205001cInner._isAnonymousRecord = true;
        RC_eb90da5b34724818e84008409205001cInner.UniqueId = "eb90da5b-3472-4818-e840-08409205001c";
        var RC_eb90da5b34724818e84008409205001c = RC_eb90da5b34724818e84008409205001cInner;
        RC_eb90da5b34724818e84008409205001c.init();
    }
});

define("System_.model$RL_84cf1463cd1d81cde9e2c5c4a48cc763", ["exports", "@outsystems/runtime-core-js", "System_.model", "System_.model$RC_eb90da5b34724818e84008409205001c"], function(exports, OSRuntimeCore, System_Model) {
    var OS = OSRuntimeCore;
    class RL_84cf1463cd1d81cde9e2c5c4a48cc763 extends
    OS.DataTypes.GenericRecordList {
        static getItemType() {
            return System_Model.RC_eb90da5b34724818e84008409205001c;
        }

    }

    System_Model.RL_84cf1463cd1d81cde9e2c5c4a48cc763 = RL_84cf1463cd1d81cde9e2c5c4a48cc763;

});

define("System_.model$RLRoleList", ["exports", "@outsystems/runtime-core-js", "System_.model", "System_.model$ENRoleEntityRecord"], function(exports, OSRuntimeCore, System_Model) {
    var OS = OSRuntimeCore;
    class RLRoleList extends
    OS.DataTypes.GenericRecordList {
        static getItemType() {
            return System_Model.ENRoleEntityRecord;
        }

    }

    System_Model.RLRoleList = RLRoleList;

});

define("System_.model$ENHumanActivityInstanceEntityRecord", ["exports", "@outsystems/runtime-core-js", "System_.model"], function(exports, OSRuntimeCore, System_Model) {
    var OS = OSRuntimeCore; {
        class ENHumanActivityInstanceEntityRecordInner extends
        OS.DataTypes.GenericRecord {
            static attributesToDeclare() {
                return [
                    this.attr("ActivityInstanceId", "activityInstanceIdAttr", "ActivityInstanceId", true, false, OS.DataTypes.DataTypes.LongInteger, function() {
                        return OS.DataTypes.LongInteger.defaultValue;
                    }, true),
                    this.attr("AssignedUserId", "assignedUserIdAttr", "AssignedUserId", false, false, OS.DataTypes.DataTypes.Text, function() {
                        return "";
                    }, true),
                    this.attr("Message", "messageAttr", "Message", false, false, OS.DataTypes.DataTypes.Text, function() {
                        return "";
                    }, true),
                    this.attr("URL", "uRLAttr", "URL", false, false, OS.DataTypes.DataTypes.Text, function() {
                        return "";
                    }, true)
                ].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
            }

        }

        System_Model.ENHumanActivityInstanceEntityRecord = ENHumanActivityInstanceEntityRecordInner;

        var ENHumanActivityInstanceEntityRecord = ENHumanActivityInstanceEntityRecordInner;
        ENHumanActivityInstanceEntityRecord.init();
    }
});

define("System_.model$RC_880f0b08a77c1575f19f408e1fddc8c6", ["exports", "@outsystems/runtime-core-js", "System_.model", "System_.model$ENHumanActivityInstanceEntityRecord"], function(exports, OSRuntimeCore, System_Model) {
    var OS = OSRuntimeCore; {
        class RC_880f0b08a77c1575f19f408e1fddc8c6Inner extends
        OS.DataTypes.GenericRecord {
            static attributesToDeclare() {
                return [
                    this.attr("HumanActivityInstance", "humanActivityInstanceAttr", "HumanActivityInstance", false, false, OS.DataTypes.DataTypes.Record, function() {
                        return OS.DataTypes.ImmutableBase.getData(new System_Model.ENHumanActivityInstanceEntityRecord());
                    }, true, System_Model.ENHumanActivityInstanceEntityRecord)
                ].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
            }

            static fromStructure(str) {
                return new RC_880f0b08a77c1575f19f408e1fddc8c6(new RC_880f0b08a77c1575f19f408e1fddc8c6.RecordClass({
                    humanActivityInstanceAttr: OS.DataTypes.ImmutableBase.getData(str)
                }));
            }

        }

        System_Model.RC_880f0b08a77c1575f19f408e1fddc8c6 = RC_880f0b08a77c1575f19f408e1fddc8c6Inner;

        RC_880f0b08a77c1575f19f408e1fddc8c6Inner._isAnonymousRecord = true;
        RC_880f0b08a77c1575f19f408e1fddc8c6Inner.UniqueId = "880f0b08-a77c-1575-f19f-408e1fddc8c6";
        var RC_880f0b08a77c1575f19f408e1fddc8c6 = RC_880f0b08a77c1575f19f408e1fddc8c6Inner;
        RC_880f0b08a77c1575f19f408e1fddc8c6.init();
    }
});

define("System_.model$RC_8a5dc374bf936f41e6af63789db6143f", ["exports", "@outsystems/runtime-core-js", "System_.model", "System_.model$FinishUserRegistrationResultRec"], function(exports, OSRuntimeCore, System_Model) {
    var OS = OSRuntimeCore; {
        class RC_8a5dc374bf936f41e6af63789db6143fInner extends
        OS.DataTypes.GenericRecord {
            static attributesToDeclare() {
                return [
                    this.attr("FinishUserRegistrationResult", "finishUserRegistrationResultAttr", "FinishUserRegistrationResult", false, false, OS.DataTypes.DataTypes.Record, function() {
                        return OS.DataTypes.ImmutableBase.getData(new OS.SystemStructures.FinishUserRegistrationResultRec());
                    }, true, OS.SystemStructures.FinishUserRegistrationResultRec)
                ].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
            }

            static fromStructure(str) {
                return new RC_8a5dc374bf936f41e6af63789db6143f(new RC_8a5dc374bf936f41e6af63789db6143f.RecordClass({
                    finishUserRegistrationResultAttr: OS.DataTypes.ImmutableBase.getData(str)
                }));
            }

        }

        System_Model.RC_8a5dc374bf936f41e6af63789db6143f = RC_8a5dc374bf936f41e6af63789db6143fInner;

        RC_8a5dc374bf936f41e6af63789db6143fInner._isAnonymousRecord = true;
        RC_8a5dc374bf936f41e6af63789db6143fInner.UniqueId = "8a5dc374-bf93-6f41-e6af-63789db6143f";
        var RC_8a5dc374bf936f41e6af63789db6143f = RC_8a5dc374bf936f41e6af63789db6143fInner;
        RC_8a5dc374bf936f41e6af63789db6143f.init();
    }
});

define("System_.model$RL_8b34cec2d3a4e3170e329009c7e2bef8", ["exports", "@outsystems/runtime-core-js", "System_.model", "System_.model$UpdateUserFailureReasonRec"], function(exports, OSRuntimeCore, System_Model) {
    var OS = OSRuntimeCore;
    class RL_8b34cec2d3a4e3170e329009c7e2bef8 extends
    OS.DataTypes.GenericRecordList {
        static getItemType() {
            return OS.SystemStructures.UpdateUserFailureReasonRec;
        }

    }

    System_Model.RL_8b34cec2d3a4e3170e329009c7e2bef8 = RL_8b34cec2d3a4e3170e329009c7e2bef8;

});

define("System_.model$RC_8f8c9b77bcc0996564febb7d38ea930a", ["exports", "@outsystems/runtime-core-js", "System_.model", "System_.model$StartResetPasswordResultRec"], function(exports, OSRuntimeCore, System_Model) {
    var OS = OSRuntimeCore; {
        class RC_8f8c9b77bcc0996564febb7d38ea930aInner extends
        OS.DataTypes.GenericRecord {
            static attributesToDeclare() {
                return [
                    this.attr("StartResetPasswordResult", "startResetPasswordResultAttr", "StartResetPasswordResult", false, false, OS.DataTypes.DataTypes.Record, function() {
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

        System_Model.RC_8f8c9b77bcc0996564febb7d38ea930a = RC_8f8c9b77bcc0996564febb7d38ea930aInner;

        RC_8f8c9b77bcc0996564febb7d38ea930aInner._isAnonymousRecord = true;
        RC_8f8c9b77bcc0996564febb7d38ea930aInner.UniqueId = "8f8c9b77-bcc0-9965-64fe-bb7d38ea930a";
        var RC_8f8c9b77bcc0996564febb7d38ea930a = RC_8f8c9b77bcc0996564febb7d38ea930aInner;
        RC_8f8c9b77bcc0996564febb7d38ea930a.init();
    }
});

define("System_.model$RL_8c6f3d2b086b4a75242a7e7c084f1692", ["exports", "@outsystems/runtime-core-js", "System_.model", "System_.model$RC_8f8c9b77bcc0996564febb7d38ea930a"], function(exports, OSRuntimeCore, System_Model) {
    var OS = OSRuntimeCore;
    class RL_8c6f3d2b086b4a75242a7e7c084f1692 extends
    OS.DataTypes.GenericRecordList {
        static getItemType() {
            return System_Model.RC_8f8c9b77bcc0996564febb7d38ea930a;
        }

    }

    System_Model.RL_8c6f3d2b086b4a75242a7e7c084f1692 = RL_8c6f3d2b086b4a75242a7e7c084f1692;

});

define("System_.model$RL_919d8bc896529858c8cc8f0f3e5cb019", ["exports", "@outsystems/runtime-core-js", "System_.model", "System_.model$RC_4d77cfdd567b208680377834fc8205a2"], function(exports, OSRuntimeCore, System_Model) {
    var OS = OSRuntimeCore;
    class RL_919d8bc896529858c8cc8f0f3e5cb019 extends
    OS.DataTypes.GenericRecordList {
        static getItemType() {
            return System_Model.RC_4d77cfdd567b208680377834fc8205a2;
        }

    }

    System_Model.RL_919d8bc896529858c8cc8f0f3e5cb019 = RL_919d8bc896529858c8cc8f0f3e5cb019;

});

define("System_.model$RC_c97a9c0cb896c874168b02efa3e48866", ["exports", "@outsystems/runtime-core-js", "System_.model", "System_.model$ENActivityDefinitionLinkEntityRecord"], function(exports, OSRuntimeCore, System_Model) {
    var OS = OSRuntimeCore; {
        class RC_c97a9c0cb896c874168b02efa3e48866Inner extends
        OS.DataTypes.GenericRecord {
            static attributesToDeclare() {
                return [
                    this.attr("ActivityDefinitionLink", "activityDefinitionLinkAttr", "ActivityDefinitionLink", false, false, OS.DataTypes.DataTypes.Record, function() {
                        return OS.DataTypes.ImmutableBase.getData(new System_Model.ENActivityDefinitionLinkEntityRecord());
                    }, true, System_Model.ENActivityDefinitionLinkEntityRecord)
                ].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
            }

            static fromStructure(str) {
                return new RC_c97a9c0cb896c874168b02efa3e48866(new RC_c97a9c0cb896c874168b02efa3e48866.RecordClass({
                    activityDefinitionLinkAttr: OS.DataTypes.ImmutableBase.getData(str)
                }));
            }

        }

        System_Model.RC_c97a9c0cb896c874168b02efa3e48866 = RC_c97a9c0cb896c874168b02efa3e48866Inner;

        RC_c97a9c0cb896c874168b02efa3e48866Inner._isAnonymousRecord = true;
        RC_c97a9c0cb896c874168b02efa3e48866Inner.UniqueId = "c97a9c0c-b896-c874-168b-02efa3e48866";
        var RC_c97a9c0cb896c874168b02efa3e48866 = RC_c97a9c0cb896c874168b02efa3e48866Inner;
        RC_c97a9c0cb896c874168b02efa3e48866.init();
    }
});

define("System_.model$RL_9587436fe4e8f406175a43d163260035", ["exports", "@outsystems/runtime-core-js", "System_.model", "System_.model$RC_c97a9c0cb896c874168b02efa3e48866"], function(exports, OSRuntimeCore, System_Model) {
    var OS = OSRuntimeCore;
    class RL_9587436fe4e8f406175a43d163260035 extends
    OS.DataTypes.GenericRecordList {
        static getItemType() {
            return System_Model.RC_c97a9c0cb896c874168b02efa3e48866;
        }

    }

    System_Model.RL_9587436fe4e8f406175a43d163260035 = RL_9587436fe4e8f406175a43d163260035;

});

define("System_.model$RLHumanActivityInstanceList", ["exports", "@outsystems/runtime-core-js", "System_.model", "System_.model$ENHumanActivityInstanceEntityRecord"], function(exports, OSRuntimeCore, System_Model) {
    var OS = OSRuntimeCore;
    class RLHumanActivityInstanceList extends
    OS.DataTypes.GenericRecordList {
        static getItemType() {
            return System_Model.ENHumanActivityInstanceEntityRecord;
        }

    }

    System_Model.RLHumanActivityInstanceList = RLHumanActivityInstanceList;

});

define("System_.model$RC_e6ef33ef6256e74a2c6e9f5dbfecc6ae", ["exports", "@outsystems/runtime-core-js", "System_.model", "System_.model$ENActivityDefinitionRoleEntityRecord"], function(exports, OSRuntimeCore, System_Model) {
    var OS = OSRuntimeCore; {
        class RC_e6ef33ef6256e74a2c6e9f5dbfecc6aeInner extends
        OS.DataTypes.GenericRecord {
            static attributesToDeclare() {
                return [
                    this.attr("ActivityDefinitionRole", "activityDefinitionRoleAttr", "ActivityDefinitionRole", false, false, OS.DataTypes.DataTypes.Record, function() {
                        return OS.DataTypes.ImmutableBase.getData(new System_Model.ENActivityDefinitionRoleEntityRecord());
                    }, true, System_Model.ENActivityDefinitionRoleEntityRecord)
                ].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
            }

            static fromStructure(str) {
                return new RC_e6ef33ef6256e74a2c6e9f5dbfecc6ae(new RC_e6ef33ef6256e74a2c6e9f5dbfecc6ae.RecordClass({
                    activityDefinitionRoleAttr: OS.DataTypes.ImmutableBase.getData(str)
                }));
            }

        }

        System_Model.RC_e6ef33ef6256e74a2c6e9f5dbfecc6ae = RC_e6ef33ef6256e74a2c6e9f5dbfecc6aeInner;

        RC_e6ef33ef6256e74a2c6e9f5dbfecc6aeInner._isAnonymousRecord = true;
        RC_e6ef33ef6256e74a2c6e9f5dbfecc6aeInner.UniqueId = "e6ef33ef-6256-e74a-2c6e-9f5dbfecc6ae";
        var RC_e6ef33ef6256e74a2c6e9f5dbfecc6ae = RC_e6ef33ef6256e74a2c6e9f5dbfecc6aeInner;
        RC_e6ef33ef6256e74a2c6e9f5dbfecc6ae.init();
    }
});

define("System_.model$RL_998b7e962bf7fec9cf03c9baf25fb2da", ["exports", "@outsystems/runtime-core-js", "System_.model", "System_.model$RC_e6ef33ef6256e74a2c6e9f5dbfecc6ae"], function(exports, OSRuntimeCore, System_Model) {
    var OS = OSRuntimeCore;
    class RL_998b7e962bf7fec9cf03c9baf25fb2da extends
    OS.DataTypes.GenericRecordList {
        static getItemType() {
            return System_Model.RC_e6ef33ef6256e74a2c6e9f5dbfecc6ae;
        }

    }

    System_Model.RL_998b7e962bf7fec9cf03c9baf25fb2da = RL_998b7e962bf7fec9cf03c9baf25fb2da;

});

define("System_.model$UserUpdateInfoRec", ["exports", "@outsystems/runtime-core-js", "System_.model"], function(exports, OSRuntimeCore, System_Model) {
    var OS = OSRuntimeCore; {
        class UserUpdateInfoRecInner extends
        OS.DataTypes.GenericRecord {
            static attributesToDeclare() {
                return [
                    this.attr("Name", "nameAttr", "Name", false, false, OS.DataTypes.DataTypes.Text, function() {
                        return "";
                    }, true),
                    this.attr("PhotoURL", "photoURLAttr", "PhotoURL", false, false, OS.DataTypes.DataTypes.Text, function() {
                        return "";
                    }, true)
                ].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
            }

        }

        System_Model.UserUpdateInfoRec = UserUpdateInfoRecInner;

        var UserUpdateInfoRec = UserUpdateInfoRecInner;
        UserUpdateInfoRec.init();
    }
});

define("System_.model$RL_9ab59cf1963fbe94eddb7ebb18232c35", ["exports", "@outsystems/runtime-core-js", "System_.model", "System_.model$UserUpdateInfoRec"], function(exports, OSRuntimeCore, System_Model) {
    var OS = OSRuntimeCore;
    class RL_9ab59cf1963fbe94eddb7ebb18232c35 extends
    OS.DataTypes.GenericRecordList {
        static getItemType() {
            return OS.SystemStructures.UserUpdateInfoRec;
        }

    }

    System_Model.RL_9ab59cf1963fbe94eddb7ebb18232c35 = RL_9ab59cf1963fbe94eddb7ebb18232c35;

});

define("System_.model$RL_9bba1220f91628d35d17687902f382ad", ["exports", "@outsystems/runtime-core-js", "System_.model", "System_.model$RC_5d4c0a98b9773e489e7e27bfe5360793"], function(exports, OSRuntimeCore, System_Model) {
    var OS = OSRuntimeCore;
    class RL_9bba1220f91628d35d17687902f382ad extends
    OS.DataTypes.GenericRecordList {
        static getItemType() {
            return System_Model.RC_5d4c0a98b9773e489e7e27bfe5360793;
        }

    }

    System_Model.RL_9bba1220f91628d35d17687902f382ad = RL_9bba1220f91628d35d17687902f382ad;

});

define("System_.model$RL_9cf7ac5f0e0e6764a1fd30a6b5272901", ["exports", "@outsystems/runtime-core-js", "System_.model", "System_.model$RC_78fc3f34c3c68c7b3604ba4da3920682"], function(exports, OSRuntimeCore, System_Model) {
    var OS = OSRuntimeCore;
    class RL_9cf7ac5f0e0e6764a1fd30a6b5272901 extends
    OS.DataTypes.GenericRecordList {
        static getItemType() {
            return System_Model.RC_78fc3f34c3c68c7b3604ba4da3920682;
        }

    }

    System_Model.RL_9cf7ac5f0e0e6764a1fd30a6b5272901 = RL_9cf7ac5f0e0e6764a1fd30a6b5272901;

});

define("System_.model$RL_9eba70ecf7dd38d3ed1fcfec91b187a8", ["exports", "@outsystems/runtime-core-js", "System_.model", "System_.model$FinishUserRegistrationResultRec"], function(exports, OSRuntimeCore, System_Model) {
    var OS = OSRuntimeCore;
    class RL_9eba70ecf7dd38d3ed1fcfec91b187a8 extends
    OS.DataTypes.GenericRecordList {
        static getItemType() {
            return OS.SystemStructures.FinishUserRegistrationResultRec;
        }

    }

    System_Model.RL_9eba70ecf7dd38d3ed1fcfec91b187a8 = RL_9eba70ecf7dd38d3ed1fcfec91b187a8;

});

define("System_.model$RC_a582d84634a30a3a3b1e61cbfd3db9de", ["exports", "@outsystems/runtime-core-js", "System_.model", "System_.model$UserUpdateInfoRec"], function(exports, OSRuntimeCore, System_Model) {
    var OS = OSRuntimeCore; {
        class RC_a582d84634a30a3a3b1e61cbfd3db9deInner extends
        OS.DataTypes.GenericRecord {
            static attributesToDeclare() {
                return [
                    this.attr("UserUpdateInfo", "userUpdateInfoAttr", "UserUpdateInfo", false, false, OS.DataTypes.DataTypes.Record, function() {
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

        System_Model.RC_a582d84634a30a3a3b1e61cbfd3db9de = RC_a582d84634a30a3a3b1e61cbfd3db9deInner;

        RC_a582d84634a30a3a3b1e61cbfd3db9deInner._isAnonymousRecord = true;
        RC_a582d84634a30a3a3b1e61cbfd3db9deInner.UniqueId = "a582d846-34a3-0a3a-3b1e-61cbfd3db9de";
        var RC_a582d84634a30a3a3b1e61cbfd3db9de = RC_a582d84634a30a3a3b1e61cbfd3db9deInner;
        RC_a582d84634a30a3a3b1e61cbfd3db9de.init();
    }
});

define("System_.model$RL_a5b6b975942e234f0350205b728240be", ["exports", "@outsystems/runtime-core-js", "System_.model", "System_.model$RC_a582d84634a30a3a3b1e61cbfd3db9de"], function(exports, OSRuntimeCore, System_Model) {
    var OS = OSRuntimeCore;
    class RL_a5b6b975942e234f0350205b728240be extends
    OS.DataTypes.GenericRecordList {
        static getItemType() {
            return System_Model.RC_a582d84634a30a3a3b1e61cbfd3db9de;
        }

    }

    System_Model.RL_a5b6b975942e234f0350205b728240be = RL_a5b6b975942e234f0350205b728240be;

});

define("System_.model$RL_a60626c1780bfe250dcef75d5dfa5fd1", ["exports", "@outsystems/runtime-core-js", "System_.model", "System_.model$ChangePasswordFailureReasonRec"], function(exports, OSRuntimeCore, System_Model) {
    var OS = OSRuntimeCore;
    class RL_a60626c1780bfe250dcef75d5dfa5fd1 extends
    OS.DataTypes.GenericRecordList {
        static getItemType() {
            return OS.SystemStructures.ChangePasswordFailureReasonRec;
        }

    }

    System_Model.RL_a60626c1780bfe250dcef75d5dfa5fd1 = RL_a60626c1780bfe250dcef75d5dfa5fd1;

});

define("System_.model$RC_a7be5795c4af08fa8098110e55d36aff", ["exports", "@outsystems/runtime-core-js", "System_.model", "System_.model$ENProcessStatusEntityRecord"], function(exports, OSRuntimeCore, System_Model) {
    var OS = OSRuntimeCore; {
        class RC_a7be5795c4af08fa8098110e55d36affInner extends
        OS.DataTypes.GenericRecord {
            static attributesToDeclare() {
                return [
                    this.attr("ProcessStatus", "processStatusAttr", "ProcessStatus", false, false, OS.DataTypes.DataTypes.Record, function() {
                        return OS.DataTypes.ImmutableBase.getData(new System_Model.ENProcessStatusEntityRecord());
                    }, true, System_Model.ENProcessStatusEntityRecord)
                ].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
            }

            static fromStructure(str) {
                return new RC_a7be5795c4af08fa8098110e55d36aff(new RC_a7be5795c4af08fa8098110e55d36aff.RecordClass({
                    processStatusAttr: OS.DataTypes.ImmutableBase.getData(str)
                }));
            }

        }

        System_Model.RC_a7be5795c4af08fa8098110e55d36aff = RC_a7be5795c4af08fa8098110e55d36affInner;

        RC_a7be5795c4af08fa8098110e55d36affInner._isAnonymousRecord = true;
        RC_a7be5795c4af08fa8098110e55d36affInner.UniqueId = "a7be5795-c4af-08fa-8098-110e55d36aff";
        var RC_a7be5795c4af08fa8098110e55d36aff = RC_a7be5795c4af08fa8098110e55d36affInner;
        RC_a7be5795c4af08fa8098110e55d36aff.init();
    }
});

define("System_.model$RL_a7ed37c4ad7efcace07e2b019a1eb3fb", ["exports", "@outsystems/runtime-core-js", "System_.model", "System_.model$RC_8a5dc374bf936f41e6af63789db6143f"], function(exports, OSRuntimeCore, System_Model) {
    var OS = OSRuntimeCore;
    class RL_a7ed37c4ad7efcace07e2b019a1eb3fb extends
    OS.DataTypes.GenericRecordList {
        static getItemType() {
            return System_Model.RC_8a5dc374bf936f41e6af63789db6143f;
        }

    }

    System_Model.RL_a7ed37c4ad7efcace07e2b019a1eb3fb = RL_a7ed37c4ad7efcace07e2b019a1eb3fb;

});

define("System_.model$RL_aad032b1e33509d2ba60156a32583c0e", ["exports", "@outsystems/runtime-core-js", "System_.model", "System_.model$StartUserRegistrationFailureReasonRec"], function(exports, OSRuntimeCore, System_Model) {
    var OS = OSRuntimeCore;
    class RL_aad032b1e33509d2ba60156a32583c0e extends
    OS.DataTypes.GenericRecordList {
        static getItemType() {
            return OS.SystemStructures.StartUserRegistrationFailureReasonRec;
        }

    }

    System_Model.RL_aad032b1e33509d2ba60156a32583c0e = RL_aad032b1e33509d2ba60156a32583c0e;

});

define("System_.model$RL_b1951e6718fee0cfdfe159a4bfc6a006", ["exports", "@outsystems/runtime-core-js", "System_.model", "System_.model$RC_880f0b08a77c1575f19f408e1fddc8c6"], function(exports, OSRuntimeCore, System_Model) {
    var OS = OSRuntimeCore;
    class RL_b1951e6718fee0cfdfe159a4bfc6a006 extends
    OS.DataTypes.GenericRecordList {
        static getItemType() {
            return System_Model.RC_880f0b08a77c1575f19f408e1fddc8c6;
        }

    }

    System_Model.RL_b1951e6718fee0cfdfe159a4bfc6a006 = RL_b1951e6718fee0cfdfe159a4bfc6a006;

});

define("System_.model$PasswordValidationResultRec", ["exports", "@outsystems/runtime-core-js", "System_.model"], function(exports, OSRuntimeCore, System_Model) {
    var OS = OSRuntimeCore; {
        class PasswordValidationResultRecInner extends
        OS.DataTypes.GenericRecord {
            static attributesToDeclare() {
                return [
                    this.attr("IsValid", "isValidAttr", "IsValid", false, false, OS.DataTypes.DataTypes.Boolean, function() {
                        return false;
                    }, true),
                    this.attr("MissingLowerCaseLetter", "missingLowerCaseLetterAttr", "MissingLowerCaseLetter", false, false, OS.DataTypes.DataTypes.Boolean, function() {
                        return false;
                    }, true),
                    this.attr("MissingMinimumLength", "missingMinimumLengthAttr", "MissingMinimumLength", false, false, OS.DataTypes.DataTypes.Boolean, function() {
                        return false;
                    }, true),
                    this.attr("MissingUpperCaseLetter", "missingUpperCaseLetterAttr", "MissingUpperCaseLetter", false, false, OS.DataTypes.DataTypes.Boolean, function() {
                        return false;
                    }, true),
                    this.attr("MissingNumber", "missingNumberAttr", "MissingNumber", false, false, OS.DataTypes.DataTypes.Boolean, function() {
                        return false;
                    }, true),
                    this.attr("MissingSpecialCharacter", "missingSpecialCharacterAttr", "MissingSpecialCharacter", false, false, OS.DataTypes.DataTypes.Boolean, function() {
                        return false;
                    }, true)
                ].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
            }

        }

        System_Model.PasswordValidationResultRec = PasswordValidationResultRecInner;

        var PasswordValidationResultRec = PasswordValidationResultRecInner;
        PasswordValidationResultRec.init();
    }
});

define("System_.model$RC_b27f0b968b0f7cea61506ac9d6ee7c27", ["exports", "@outsystems/runtime-core-js", "System_.model", "System_.model$PasswordValidationResultRec"], function(exports, OSRuntimeCore, System_Model) {
    var OS = OSRuntimeCore; {
        class RC_b27f0b968b0f7cea61506ac9d6ee7c27Inner extends
        OS.DataTypes.GenericRecord {
            static attributesToDeclare() {
                return [
                    this.attr("PasswordValidationResult", "passwordValidationResultAttr", "PasswordValidationResult", false, false, OS.DataTypes.DataTypes.Record, function() {
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

        System_Model.RC_b27f0b968b0f7cea61506ac9d6ee7c27 = RC_b27f0b968b0f7cea61506ac9d6ee7c27Inner;

        RC_b27f0b968b0f7cea61506ac9d6ee7c27Inner._isAnonymousRecord = true;
        RC_b27f0b968b0f7cea61506ac9d6ee7c27Inner.UniqueId = "b27f0b96-8b0f-7cea-6150-6ac9d6ee7c27";
        var RC_b27f0b968b0f7cea61506ac9d6ee7c27 = RC_b27f0b968b0f7cea61506ac9d6ee7c27Inner;
        RC_b27f0b968b0f7cea61506ac9d6ee7c27.init();
    }
});

define("System_.model$RC_e5c662d406f83f7f791bd7e5c8b0c543", ["exports", "@outsystems/runtime-core-js", "System_.model", "System_.model$ChangePasswordFailureReasonRec"], function(exports, OSRuntimeCore, System_Model) {
    var OS = OSRuntimeCore; {
        class RC_e5c662d406f83f7f791bd7e5c8b0c543Inner extends
        OS.DataTypes.GenericRecord {
            static attributesToDeclare() {
                return [
                    this.attr("ChangePasswordFailureReason", "changePasswordFailureReasonAttr", "ChangePasswordFailureReason", false, false, OS.DataTypes.DataTypes.Record, function() {
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

        System_Model.RC_e5c662d406f83f7f791bd7e5c8b0c543 = RC_e5c662d406f83f7f791bd7e5c8b0c543Inner;

        RC_e5c662d406f83f7f791bd7e5c8b0c543Inner._isAnonymousRecord = true;
        RC_e5c662d406f83f7f791bd7e5c8b0c543Inner.UniqueId = "e5c662d4-06f8-3f7f-791b-d7e5c8b0c543";
        var RC_e5c662d406f83f7f791bd7e5c8b0c543 = RC_e5c662d406f83f7f791bd7e5c8b0c543Inner;
        RC_e5c662d406f83f7f791bd7e5c8b0c543.init();
    }
});

define("System_.model$RL_b6f4bbf36a4770c53788c60d2b555d3c", ["exports", "@outsystems/runtime-core-js", "System_.model", "System_.model$RC_e5c662d406f83f7f791bd7e5c8b0c543"], function(exports, OSRuntimeCore, System_Model) {
    var OS = OSRuntimeCore;
    class RL_b6f4bbf36a4770c53788c60d2b555d3c extends
    OS.DataTypes.GenericRecordList {
        static getItemType() {
            return System_Model.RC_e5c662d406f83f7f791bd7e5c8b0c543;
        }

    }

    System_Model.RL_b6f4bbf36a4770c53788c60d2b555d3c = RL_b6f4bbf36a4770c53788c60d2b555d3c;

});

define("System_.model$RLEntityAttributeList", ["exports", "@outsystems/runtime-core-js", "System_.model", "System_.model$ENEntityAttributeEntityRecord"], function(exports, OSRuntimeCore, System_Model) {
    var OS = OSRuntimeCore;
    class RLEntityAttributeList extends
    OS.DataTypes.GenericRecordList {
        static getItemType() {
            return System_Model.ENEntityAttributeEntityRecord;
        }

    }

    System_Model.RLEntityAttributeList = RLEntityAttributeList;

});

define("System_.model$RC_d5e6f13d187b5006f9f88b20f576700b", ["exports", "@outsystems/runtime-core-js", "System_.model", "System_.model$ENProcessOutputEntityRecord"], function(exports, OSRuntimeCore, System_Model) {
    var OS = OSRuntimeCore; {
        class RC_d5e6f13d187b5006f9f88b20f576700bInner extends
        OS.DataTypes.GenericRecord {
            static attributesToDeclare() {
                return [
                    this.attr("ProcessOutput", "processOutputAttr", "ProcessOutput", false, false, OS.DataTypes.DataTypes.Record, function() {
                        return OS.DataTypes.ImmutableBase.getData(new System_Model.ENProcessOutputEntityRecord());
                    }, true, System_Model.ENProcessOutputEntityRecord)
                ].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
            }

            static fromStructure(str) {
                return new RC_d5e6f13d187b5006f9f88b20f576700b(new RC_d5e6f13d187b5006f9f88b20f576700b.RecordClass({
                    processOutputAttr: OS.DataTypes.ImmutableBase.getData(str)
                }));
            }

        }

        System_Model.RC_d5e6f13d187b5006f9f88b20f576700b = RC_d5e6f13d187b5006f9f88b20f576700bInner;

        RC_d5e6f13d187b5006f9f88b20f576700bInner._isAnonymousRecord = true;
        RC_d5e6f13d187b5006f9f88b20f576700bInner.UniqueId = "d5e6f13d-187b-5006-f9f8-8b20f576700b";
        var RC_d5e6f13d187b5006f9f88b20f576700b = RC_d5e6f13d187b5006f9f88b20f576700bInner;
        RC_d5e6f13d187b5006f9f88b20f576700b.init();
    }
});

define("System_.model$RL_bc43d11ed6e576c35db6fd694bd47a1e", ["exports", "@outsystems/runtime-core-js", "System_.model", "System_.model$RC_d5e6f13d187b5006f9f88b20f576700b"], function(exports, OSRuntimeCore, System_Model) {
    var OS = OSRuntimeCore;
    class RL_bc43d11ed6e576c35db6fd694bd47a1e extends
    OS.DataTypes.GenericRecordList {
        static getItemType() {
            return System_Model.RC_d5e6f13d187b5006f9f88b20f576700b;
        }

    }

    System_Model.RL_bc43d11ed6e576c35db6fd694bd47a1e = RL_bc43d11ed6e576c35db6fd694bd47a1e;

});

define("System_.model$RL_bfe5e088b2f6df6ae697d4a263069bca", ["exports", "@outsystems/runtime-core-js", "System_.model", "System_.model$UserLoginResultRec"], function(exports, OSRuntimeCore, System_Model) {
    var OS = OSRuntimeCore;
    class RL_bfe5e088b2f6df6ae697d4a263069bca extends
    OS.DataTypes.GenericRecordList {
        static getItemType() {
            return OS.SystemStructures.UserLoginResultRec;
        }

    }

    System_Model.RL_bfe5e088b2f6df6ae697d4a263069bca = RL_bfe5e088b2f6df6ae697d4a263069bca;

});

define("System_.model$RC_c25115a84bc21f80350d8ea6536353ed", ["exports", "@outsystems/runtime-core-js", "System_.model", "System_.model$ENEmailEntityRecord"], function(exports, OSRuntimeCore, System_Model) {
    var OS = OSRuntimeCore; {
        class RC_c25115a84bc21f80350d8ea6536353edInner extends
        OS.DataTypes.GenericRecord {
            static attributesToDeclare() {
                return [
                    this.attr("Email", "emailAttr", "Email", false, false, OS.DataTypes.DataTypes.Record, function() {
                        return OS.DataTypes.ImmutableBase.getData(new System_Model.ENEmailEntityRecord());
                    }, true, System_Model.ENEmailEntityRecord)
                ].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
            }

            static fromStructure(str) {
                return new RC_c25115a84bc21f80350d8ea6536353ed(new RC_c25115a84bc21f80350d8ea6536353ed.RecordClass({
                    emailAttr: OS.DataTypes.ImmutableBase.getData(str)
                }));
            }

        }

        System_Model.RC_c25115a84bc21f80350d8ea6536353ed = RC_c25115a84bc21f80350d8ea6536353edInner;

        RC_c25115a84bc21f80350d8ea6536353edInner._isAnonymousRecord = true;
        RC_c25115a84bc21f80350d8ea6536353edInner.UniqueId = "c25115a8-4bc2-1f80-350d-8ea6536353ed";
        var RC_c25115a84bc21f80350d8ea6536353ed = RC_c25115a84bc21f80350d8ea6536353edInner;
        RC_c25115a84bc21f80350d8ea6536353ed.init();
    }
});

define("System_.model$RL_ca4befaa7d5de5d9bbcd4bf59c44b15c", ["exports", "@outsystems/runtime-core-js", "System_.model", "System_.model$RC_b27f0b968b0f7cea61506ac9d6ee7c27"], function(exports, OSRuntimeCore, System_Model) {
    var OS = OSRuntimeCore;
    class RL_ca4befaa7d5de5d9bbcd4bf59c44b15c extends
    OS.DataTypes.GenericRecordList {
        static getItemType() {
            return System_Model.RC_b27f0b968b0f7cea61506ac9d6ee7c27;
        }

    }

    System_Model.RL_ca4befaa7d5de5d9bbcd4bf59c44b15c = RL_ca4befaa7d5de5d9bbcd4bf59c44b15c;

});

define("System_.model$RL_cc1e5a7165115293b327c74187de23a0", ["exports", "@outsystems/runtime-core-js", "System_.model", "System_.model$RC_37cfc11aad68902b9d78f57915b7ae79"], function(exports, OSRuntimeCore, System_Model) {
    var OS = OSRuntimeCore;
    class RL_cc1e5a7165115293b327c74187de23a0 extends
    OS.DataTypes.GenericRecordList {
        static getItemType() {
            return System_Model.RC_37cfc11aad68902b9d78f57915b7ae79;
        }

    }

    System_Model.RL_cc1e5a7165115293b327c74187de23a0 = RL_cc1e5a7165115293b327c74187de23a0;

});

define("System_.model$RLProcessOutputDefinitionList", ["exports", "@outsystems/runtime-core-js", "System_.model", "System_.model$ENProcessOutputDefinitionEntityRecord"], function(exports, OSRuntimeCore, System_Model) {
    var OS = OSRuntimeCore;
    class RLProcessOutputDefinitionList extends
    OS.DataTypes.GenericRecordList {
        static getItemType() {
            return System_Model.ENProcessOutputDefinitionEntityRecord;
        }

    }

    System_Model.RLProcessOutputDefinitionList = RLProcessOutputDefinitionList;

});

define("System_.model$RC_d43fed74d1678e954ae3786a22cd1029", ["exports", "@outsystems/runtime-core-js", "System_.model", "System_.model$ENProcessInputEntityRecord"], function(exports, OSRuntimeCore, System_Model) {
    var OS = OSRuntimeCore; {
        class RC_d43fed74d1678e954ae3786a22cd1029Inner extends
        OS.DataTypes.GenericRecord {
            static attributesToDeclare() {
                return [
                    this.attr("ProcessInput", "processInputAttr", "ProcessInput", false, false, OS.DataTypes.DataTypes.Record, function() {
                        return OS.DataTypes.ImmutableBase.getData(new System_Model.ENProcessInputEntityRecord());
                    }, true, System_Model.ENProcessInputEntityRecord)
                ].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
            }

            static fromStructure(str) {
                return new RC_d43fed74d1678e954ae3786a22cd1029(new RC_d43fed74d1678e954ae3786a22cd1029.RecordClass({
                    processInputAttr: OS.DataTypes.ImmutableBase.getData(str)
                }));
            }

        }

        System_Model.RC_d43fed74d1678e954ae3786a22cd1029 = RC_d43fed74d1678e954ae3786a22cd1029Inner;

        RC_d43fed74d1678e954ae3786a22cd1029Inner._isAnonymousRecord = true;
        RC_d43fed74d1678e954ae3786a22cd1029Inner.UniqueId = "d43fed74-d167-8e95-4ae3-786a22cd1029";
        var RC_d43fed74d1678e954ae3786a22cd1029 = RC_d43fed74d1678e954ae3786a22cd1029Inner;
        RC_d43fed74d1678e954ae3786a22cd1029.init();
    }
});

define("System_.model$RL_d3784dc8f20ed95f2aa0989c41c24312", ["exports", "@outsystems/runtime-core-js", "System_.model", "System_.model$RC_d43fed74d1678e954ae3786a22cd1029"], function(exports, OSRuntimeCore, System_Model) {
    var OS = OSRuntimeCore;
    class RL_d3784dc8f20ed95f2aa0989c41c24312 extends
    OS.DataTypes.GenericRecordList {
        static getItemType() {
            return System_Model.RC_d43fed74d1678e954ae3786a22cd1029;
        }

    }

    System_Model.RL_d3784dc8f20ed95f2aa0989c41c24312 = RL_d3784dc8f20ed95f2aa0989c41c24312;

});

define("System_.model$RL_d68e5346549cf39dd97c26423ec75146", ["exports", "@outsystems/runtime-core-js", "System_.model", "System_.model$RC_80c865ccf1b0df95391817b0ddc45e18"], function(exports, OSRuntimeCore, System_Model) {
    var OS = OSRuntimeCore;
    class RL_d68e5346549cf39dd97c26423ec75146 extends
    OS.DataTypes.GenericRecordList {
        static getItemType() {
            return System_Model.RC_80c865ccf1b0df95391817b0ddc45e18;
        }

    }

    System_Model.RL_d68e5346549cf39dd97c26423ec75146 = RL_d68e5346549cf39dd97c26423ec75146;

});

define("System_.model$RL_db06c2b916049d1c72db56f953d2667f", ["exports", "@outsystems/runtime-core-js", "System_.model", "System_.model$RC_13630884b629a3a59e929e1cdea42eb1"], function(exports, OSRuntimeCore, System_Model) {
    var OS = OSRuntimeCore;
    class RL_db06c2b916049d1c72db56f953d2667f extends
    OS.DataTypes.GenericRecordList {
        static getItemType() {
            return System_Model.RC_13630884b629a3a59e929e1cdea42eb1;
        }

    }

    System_Model.RL_db06c2b916049d1c72db56f953d2667f = RL_db06c2b916049d1c72db56f953d2667f;

});

define("System_.model$RL_e03caeb3051b63201fbde73f1c69f75b", ["exports", "@outsystems/runtime-core-js", "System_.model", "System_.model$StartUserRegistrationResultRec"], function(exports, OSRuntimeCore, System_Model) {
    var OS = OSRuntimeCore;
    class RL_e03caeb3051b63201fbde73f1c69f75b extends
    OS.DataTypes.GenericRecordList {
        static getItemType() {
            return OS.SystemStructures.StartUserRegistrationResultRec;
        }

    }

    System_Model.RL_e03caeb3051b63201fbde73f1c69f75b = RL_e03caeb3051b63201fbde73f1c69f75b;

});

define("System_.model$RC_faf38c2d2aeee71f293ad23cd32fa7e2", ["exports", "@outsystems/runtime-core-js", "System_.model", "System_.model$ENActivityInstanceEntityRecord"], function(exports, OSRuntimeCore, System_Model) {
    var OS = OSRuntimeCore; {
        class RC_faf38c2d2aeee71f293ad23cd32fa7e2Inner extends
        OS.DataTypes.GenericRecord {
            static attributesToDeclare() {
                return [
                    this.attr("ActivityInstance", "activityInstanceAttr", "ActivityInstance", false, false, OS.DataTypes.DataTypes.Record, function() {
                        return OS.DataTypes.ImmutableBase.getData(new System_Model.ENActivityInstanceEntityRecord());
                    }, true, System_Model.ENActivityInstanceEntityRecord)
                ].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
            }

            static fromStructure(str) {
                return new RC_faf38c2d2aeee71f293ad23cd32fa7e2(new RC_faf38c2d2aeee71f293ad23cd32fa7e2.RecordClass({
                    activityInstanceAttr: OS.DataTypes.ImmutableBase.getData(str)
                }));
            }

        }

        System_Model.RC_faf38c2d2aeee71f293ad23cd32fa7e2 = RC_faf38c2d2aeee71f293ad23cd32fa7e2Inner;

        RC_faf38c2d2aeee71f293ad23cd32fa7e2Inner._isAnonymousRecord = true;
        RC_faf38c2d2aeee71f293ad23cd32fa7e2Inner.UniqueId = "faf38c2d-2aee-e71f-293a-d23cd32fa7e2";
        var RC_faf38c2d2aeee71f293ad23cd32fa7e2 = RC_faf38c2d2aeee71f293ad23cd32fa7e2Inner;
        RC_faf38c2d2aeee71f293ad23cd32fa7e2.init();
    }
});

define("System_.model$RL_e4683611f40e200d3ecdb101fca93d6d", ["exports", "@outsystems/runtime-core-js", "System_.model", "System_.model$RC_faf38c2d2aeee71f293ad23cd32fa7e2"], function(exports, OSRuntimeCore, System_Model) {
    var OS = OSRuntimeCore;
    class RL_e4683611f40e200d3ecdb101fca93d6d extends
    OS.DataTypes.GenericRecordList {
        static getItemType() {
            return System_Model.RC_faf38c2d2aeee71f293ad23cd32fa7e2;
        }

    }

    System_Model.RL_e4683611f40e200d3ecdb101fca93d6d = RL_e4683611f40e200d3ecdb101fca93d6d;

});

define("System_.model$RL_e57523dcca7e6d3766c4721a0ef109ee", ["exports", "@outsystems/runtime-core-js", "System_.model", "System_.model$PasswordValidationResultRec"], function(exports, OSRuntimeCore, System_Model) {
    var OS = OSRuntimeCore;
    class RL_e57523dcca7e6d3766c4721a0ef109ee extends
    OS.DataTypes.GenericRecordList {
        static getItemType() {
            return OS.SystemStructures.PasswordValidationResultRec;
        }

    }

    System_Model.RL_e57523dcca7e6d3766c4721a0ef109ee = RL_e57523dcca7e6d3766c4721a0ef109ee;

});

define("System_.model$RLProcessInputDefinitionList", ["exports", "@outsystems/runtime-core-js", "System_.model", "System_.model$ENProcessInputDefinitionEntityRecord"], function(exports, OSRuntimeCore, System_Model) {
    var OS = OSRuntimeCore;
    class RLProcessInputDefinitionList extends
    OS.DataTypes.GenericRecordList {
        static getItemType() {
            return System_Model.ENProcessInputDefinitionEntityRecord;
        }

    }

    System_Model.RLProcessInputDefinitionList = RLProcessInputDefinitionList;

});

define("System_.model$RL_eba0e3b376adecb3137463bf4c64acb3", ["exports", "@outsystems/runtime-core-js", "System_.model", "System_.model$RC_05f199cf8f734662fa6eaa91568947ff"], function(exports, OSRuntimeCore, System_Model) {
    var OS = OSRuntimeCore;
    class RL_eba0e3b376adecb3137463bf4c64acb3 extends
    OS.DataTypes.GenericRecordList {
        static getItemType() {
            return System_Model.RC_05f199cf8f734662fa6eaa91568947ff;
        }

    }

    System_Model.RL_eba0e3b376adecb3137463bf4c64acb3 = RL_eba0e3b376adecb3137463bf4c64acb3;

});

define("System_.model$RL_f07d4ee6d8af2ad822d0947b26fdf6f3", ["exports", "@outsystems/runtime-core-js", "System_.model", "System_.model$RC_53d491417faf149f9fb8a0dda9c12d06"], function(exports, OSRuntimeCore, System_Model) {
    var OS = OSRuntimeCore;
    class RL_f07d4ee6d8af2ad822d0947b26fdf6f3 extends
    OS.DataTypes.GenericRecordList {
        static getItemType() {
            return System_Model.RC_53d491417faf149f9fb8a0dda9c12d06;
        }

    }

    System_Model.RL_f07d4ee6d8af2ad822d0947b26fdf6f3 = RL_f07d4ee6d8af2ad822d0947b26fdf6f3;

});

define("System_.model$RL_f1cba7c926c1338911619f0bbdd18e16", ["exports", "@outsystems/runtime-core-js", "System_.model", "System_.model$FinishUserRegistrationFailureReasonRec"], function(exports, OSRuntimeCore, System_Model) {
    var OS = OSRuntimeCore;
    class RL_f1cba7c926c1338911619f0bbdd18e16 extends
    OS.DataTypes.GenericRecordList {
        static getItemType() {
            return OS.SystemStructures.FinishUserRegistrationFailureReasonRec;
        }

    }

    System_Model.RL_f1cba7c926c1338911619f0bbdd18e16 = RL_f1cba7c926c1338911619f0bbdd18e16;

});

define("System_.model$RLUserList", ["exports", "@outsystems/runtime-core-js", "System_.model", "System_.model$ENUserEntityRecord"], function(exports, OSRuntimeCore, System_Model) {
    var OS = OSRuntimeCore;
    class RLUserList extends
    OS.DataTypes.GenericRecordList {
        static getItemType() {
            return System_Model.ENUserEntityRecord;
        }

    }

    System_Model.RLUserList = RLUserList;

});

define("System_.model$RL_f50879d0da007880fcd304f3378f0a9e", ["exports", "@outsystems/runtime-core-js", "System_.model", "System_.model$PasswordComplexityPolicyRec"], function(exports, OSRuntimeCore, System_Model) {
    var OS = OSRuntimeCore;
    class RL_f50879d0da007880fcd304f3378f0a9e extends
    OS.DataTypes.GenericRecordList {
        static getItemType() {
            return OS.SystemStructures.PasswordComplexityPolicyRec;
        }

    }

    System_Model.RL_f50879d0da007880fcd304f3378f0a9e = RL_f50879d0da007880fcd304f3378f0a9e;

});

define("System_.model$RC_f61c868ef053db94121ce89ee15a14fe", ["exports", "@outsystems/runtime-core-js", "System_.model", "System_.model$UserLoginFailureReasonRec"], function(exports, OSRuntimeCore, System_Model) {
    var OS = OSRuntimeCore; {
        class RC_f61c868ef053db94121ce89ee15a14feInner extends
        OS.DataTypes.GenericRecord {
            static attributesToDeclare() {
                return [
                    this.attr("UserLoginFailureReason", "userLoginFailureReasonAttr", "UserLoginFailureReason", false, false, OS.DataTypes.DataTypes.Record, function() {
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

        System_Model.RC_f61c868ef053db94121ce89ee15a14fe = RC_f61c868ef053db94121ce89ee15a14feInner;

        RC_f61c868ef053db94121ce89ee15a14feInner._isAnonymousRecord = true;
        RC_f61c868ef053db94121ce89ee15a14feInner.UniqueId = "f61c868e-f053-db94-121c-e89ee15a14fe";
        var RC_f61c868ef053db94121ce89ee15a14fe = RC_f61c868ef053db94121ce89ee15a14feInner;
        RC_f61c868ef053db94121ce89ee15a14fe.init();
    }
});

define("System_.model$RL_fbc9fc52e3cef45822e06efc69df5a4a", ["exports", "@outsystems/runtime-core-js", "System_.model", "System_.model$RC_f61c868ef053db94121ce89ee15a14fe"], function(exports, OSRuntimeCore, System_Model) {
    var OS = OSRuntimeCore;
    class RL_fbc9fc52e3cef45822e06efc69df5a4a extends
    OS.DataTypes.GenericRecordList {
        static getItemType() {
            return System_Model.RC_f61c868ef053db94121ce89ee15a14fe;
        }

    }

    System_Model.RL_fbc9fc52e3cef45822e06efc69df5a4a = RL_fbc9fc52e3cef45822e06efc69df5a4a;

});

define("System_.model$RL_fc9a0541e530960ed38d7662d5b2141b", ["exports", "@outsystems/runtime-core-js", "System_.model", "System_.model$ChangePasswordResultRec"], function(exports, OSRuntimeCore, System_Model) {
    var OS = OSRuntimeCore;
    class RL_fc9a0541e530960ed38d7662d5b2141b extends
    OS.DataTypes.GenericRecordList {
        static getItemType() {
            return OS.SystemStructures.ChangePasswordResultRec;
        }

    }

    System_Model.RL_fc9a0541e530960ed38d7662d5b2141b = RL_fc9a0541e530960ed38d7662d5b2141b;

});

define("System_.model$RL_fd604259751c80eed887a8f5a0f5dc23", ["exports", "@outsystems/runtime-core-js", "System_.model", "System_.model$RC_c25115a84bc21f80350d8ea6536353ed"], function(exports, OSRuntimeCore, System_Model) {
    var OS = OSRuntimeCore;
    class RL_fd604259751c80eed887a8f5a0f5dc23 extends
    OS.DataTypes.GenericRecordList {
        static getItemType() {
            return System_Model.RC_c25115a84bc21f80350d8ea6536353ed;
        }

    }

    System_Model.RL_fd604259751c80eed887a8f5a0f5dc23 = RL_fd604259751c80eed887a8f5a0f5dc23;

});

define("System_.model$RL_fdf787b37ceb8d49d68d7ae5649f3b09", ["exports", "@outsystems/runtime-core-js", "System_.model", "System_.model$RC_a7be5795c4af08fa8098110e55d36aff"], function(exports, OSRuntimeCore, System_Model) {
    var OS = OSRuntimeCore;
    class RL_fdf787b37ceb8d49d68d7ae5649f3b09 extends
    OS.DataTypes.GenericRecordList {
        static getItemType() {
            return System_Model.RC_a7be5795c4af08fa8098110e55d36aff;
        }

    }

    System_Model.RL_fdf787b37ceb8d49d68d7ae5649f3b09 = RL_fdf787b37ceb8d49d68d7ae5649f3b09;

});

define("System_.model", ["exports", "@outsystems/runtime-core-js"], function(exports, OSRuntimeCore) {
    var OS = OSRuntimeCore;
    var System_Model = exports;
    Object.defineProperty(System_Model, "module", {
        get: function() {
            return OS.ApplicationInfo.getModules()["478870b9-2d60-4f73-9eb3-7cd8b994a737"];
        }
    });

    System_Model.staticEntities = {};
    System_Model.staticEntities.runtimeType = {};
    var getRuntimeTypeRecord = function(record) {
        return System_Model.module.staticEntities["070281eb-7979-4bc1-b152-15a5d546e4e0"][record];
    };
    Object.defineProperty(System_Model.staticEntities.runtimeType, "mobile", {
        get: function() {
            return "Mobile";
        }
    });

    Object.defineProperty(System_Model.staticEntities.runtimeType, "mobileLibrary", {
        get: function() {
            return "MobileLibrary";
        }
    });

    Object.defineProperty(System_Model.staticEntities.runtimeType, "service", {
        get: function() {
            return "Service";
        }
    });

    Object.defineProperty(System_Model.staticEntities.runtimeType, "reactive", {
        get: function() {
            return "Reactive";
        }
    });

    Object.defineProperty(System_Model.staticEntities.runtimeType, "unknown", {
        get: function() {
            return "Unknown";
        }
    });

    Object.defineProperty(System_Model.staticEntities.runtimeType, "reactiveLibrary", {
        get: function() {
            return "ReactiveLibrary";
        }
    });

    System_Model.staticEntities.processStatus = {};
    var getProcessStatusRecord = function(record) {
        return System_Model.module.staticEntities["315545a5-629a-986c-2082-c4074451815c"][record];
    };
    Object.defineProperty(System_Model.staticEntities.processStatus, "active", {
        get: function() {
            return OS.BuiltinFunctions.integerToLongInteger(1);
        }
    });

    Object.defineProperty(System_Model.staticEntities.processStatus, "activeWithErrors", {
        get: function() {
            return OS.BuiltinFunctions.integerToLongInteger(2);
        }
    });

    Object.defineProperty(System_Model.staticEntities.processStatus, "terminated", {
        get: function() {
            return OS.BuiltinFunctions.integerToLongInteger(4);
        }
    });

    Object.defineProperty(System_Model.staticEntities.processStatus, "done", {
        get: function() {
            return OS.BuiltinFunctions.integerToLongInteger(3);
        }
    });

    System_Model.staticEntities.activityStatus = {};
    var getActivityStatusRecord = function(record) {
        return System_Model.module.staticEntities["438329de-5552-ca64-09a4-64376002d08e"][record];
    };
    Object.defineProperty(System_Model.staticEntities.activityStatus, "running", {
        get: function() {
            return OS.BuiltinFunctions.integerToLongInteger(2);
        }
    });

    Object.defineProperty(System_Model.staticEntities.activityStatus, "terminated", {
        get: function() {
            return OS.BuiltinFunctions.integerToLongInteger(4);
        }
    });

    Object.defineProperty(System_Model.staticEntities.activityStatus, "waiting", {
        get: function() {
            return OS.BuiltinFunctions.integerToLongInteger(1);
        }
    });

    Object.defineProperty(System_Model.staticEntities.activityStatus, "open", {
        get: function() {
            return OS.BuiltinFunctions.integerToLongInteger(6);
        }
    });

    Object.defineProperty(System_Model.staticEntities.activityStatus, "error", {
        get: function() {
            return OS.BuiltinFunctions.integerToLongInteger(5);
        }
    });

    Object.defineProperty(System_Model.staticEntities.activityStatus, "completed", {
        get: function() {
            return OS.BuiltinFunctions.integerToLongInteger(3);
        }
    });

    System_Model.staticEntities.activityKind = {};
    var getActivityKindRecord = function(record) {
        return System_Model.module.staticEntities["d9b70551-21f0-8afd-57cd-ef2ebb4d7795"][record];
    };
    Object.defineProperty(System_Model.staticEntities.activityKind, "end", {
        get: function() {
            return OS.BuiltinFunctions.integerToLongInteger(5);
        }
    });

    Object.defineProperty(System_Model.staticEntities.activityKind, "decision", {
        get: function() {
            return OS.BuiltinFunctions.integerToLongInteger(4);
        }
    });

    Object.defineProperty(System_Model.staticEntities.activityKind, "humanActivity", {
        get: function() {
            return OS.BuiltinFunctions.integerToLongInteger(3);
        }
    });

    Object.defineProperty(System_Model.staticEntities.activityKind, "automaticActivity", {
        get: function() {
            return OS.BuiltinFunctions.integerToLongInteger(2);
        }
    });

    Object.defineProperty(System_Model.staticEntities.activityKind, "start", {
        get: function() {
            return OS.BuiltinFunctions.integerToLongInteger(1);
        }
    });

});