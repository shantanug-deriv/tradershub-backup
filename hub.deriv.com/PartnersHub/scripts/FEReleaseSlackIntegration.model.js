define("FEReleaseSlackIntegration.model$ST_ff6fa4367123aaf1ab10608dcb16ba43Structure", ["exports", "@outsystems/runtime-core-js", "FEReleaseSlackIntegration.model"], function(exports, OSRuntimeCore, FEReleaseSlackIntegrationModel) {
    var OS = OSRuntimeCore; {
        class ST_ff6fa4367123aaf1ab10608dcb16ba43StructureInner extends
        OS.DataTypes.GenericRecord {
            static attributesToDeclare() {
                return [
                    this.attr("Value", "valueAttr", "value", false, false, OS.DataTypes.DataTypes.Text, function() {
                        return "";
                    }, true),
                    this.attr("Creator", "creatorAttr", "creator", false, false, OS.DataTypes.DataTypes.Text, function() {
                        return "";
                    }, true),
                    this.attr("Last_set", "last_setAttr", "last_set", false, false, OS.DataTypes.DataTypes.LongInteger, function() {
                        return OS.DataTypes.LongInteger.defaultValue;
                    }, true)
                ].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
            }

        }

        FEReleaseSlackIntegrationModel.ST_ff6fa4367123aaf1ab10608dcb16ba43Structure = ST_ff6fa4367123aaf1ab10608dcb16ba43StructureInner;

        var ST_ff6fa4367123aaf1ab10608dcb16ba43Structure = ST_ff6fa4367123aaf1ab10608dcb16ba43StructureInner;
        ST_ff6fa4367123aaf1ab10608dcb16ba43Structure.init();
    }
});

define("FEReleaseSlackIntegration.model$RL_04d46e2886f2b55aae00a9596448295c", ["exports", "@outsystems/runtime-core-js", "FEReleaseSlackIntegration.model", "FEReleaseSlackIntegration.model$ST_ff6fa4367123aaf1ab10608dcb16ba43Structure"], function(exports, OSRuntimeCore, FEReleaseSlackIntegrationModel) {
    var OS = OSRuntimeCore;
    class RL_04d46e2886f2b55aae00a9596448295c extends
    OS.DataTypes.GenericRecordList {
        static getItemType() {
            return FEReleaseSlackIntegrationModel.ST_ff6fa4367123aaf1ab10608dcb16ba43Structure;
        }

    }

    FEReleaseSlackIntegrationModel.RL_04d46e2886f2b55aae00a9596448295c = RL_04d46e2886f2b55aae00a9596448295c;

});

define("FEReleaseSlackIntegration.model$ST_074de63327cc6281abd591a06ac7a3ebStructure", ["exports", "@outsystems/runtime-core-js", "FEReleaseSlackIntegration.model"], function(exports, OSRuntimeCore, FEReleaseSlackIntegrationModel) {
    var OS = OSRuntimeCore; {
        class ST_074de63327cc6281abd591a06ac7a3ebStructureInner extends
        OS.DataTypes.GenericRecord {
            static attributesToDeclare() {
                return [
                    this.attr("Version", "versionAttr", "version", false, false, OS.DataTypes.DataTypes.Text, function() {
                        return "";
                    }, true),
                    this.attr("App_name", "app_nameAttr", "app_name", false, false, OS.DataTypes.DataTypes.Text, function() {
                        return "";
                    }, true)
                ].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
            }

        }

        FEReleaseSlackIntegrationModel.ST_074de63327cc6281abd591a06ac7a3ebStructure = ST_074de63327cc6281abd591a06ac7a3ebStructureInner;

        var ST_074de63327cc6281abd591a06ac7a3ebStructure = ST_074de63327cc6281abd591a06ac7a3ebStructureInner;
        ST_074de63327cc6281abd591a06ac7a3ebStructure.init();
    }
});

define("FEReleaseSlackIntegration.model$ST_3782d35f5f28ff9dd18fb6881ab471a9Structure", ["exports", "@outsystems/runtime-core-js", "FEReleaseSlackIntegration.model"], function(exports, OSRuntimeCore, FEReleaseSlackIntegrationModel) {
    var OS = OSRuntimeCore; {
        class ST_3782d35f5f28ff9dd18fb6881ab471a9StructureInner extends
        OS.DataTypes.GenericRecord {
            static attributesToDeclare() {
                return [
                    this.attr("Type", "typeAttr", "type", false, false, OS.DataTypes.DataTypes.Text, function() {
                        return "";
                    }, true),
                    this.attr("Subtype", "subtypeAttr", "subtype", false, false, OS.DataTypes.DataTypes.Text, function() {
                        return "";
                    }, true),
                    this.attr("Text", "textAttr", "text", false, false, OS.DataTypes.DataTypes.Text, function() {
                        return "";
                    }, true),
                    this.attr("Ts", "tsAttr", "ts", false, false, OS.DataTypes.DataTypes.Text, function() {
                        return "";
                    }, true),
                    this.attr("Bot_id", "bot_idAttr", "bot_id", false, false, OS.DataTypes.DataTypes.Text, function() {
                        return "";
                    }, true),
                    this.attr("User", "userAttr", "user", false, false, OS.DataTypes.DataTypes.Text, function() {
                        return "";
                    }, true),
                    this.attr("Bot_link", "bot_linkAttr", "bot_link", false, false, OS.DataTypes.DataTypes.Text, function() {
                        return "";
                    }, true)
                ].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
            }

        }

        FEReleaseSlackIntegrationModel.ST_3782d35f5f28ff9dd18fb6881ab471a9Structure = ST_3782d35f5f28ff9dd18fb6881ab471a9StructureInner;

        var ST_3782d35f5f28ff9dd18fb6881ab471a9Structure = ST_3782d35f5f28ff9dd18fb6881ab471a9StructureInner;
        ST_3782d35f5f28ff9dd18fb6881ab471a9Structure.init();
    }
});

define("FEReleaseSlackIntegration.model$RL_7674e0699bf7786228f1b11887afe770", ["exports", "@outsystems/runtime-core-js", "FEReleaseSlackIntegration.model", "FEReleaseSlackIntegration.model$ST_3782d35f5f28ff9dd18fb6881ab471a9Structure"], function(exports, OSRuntimeCore, FEReleaseSlackIntegrationModel) {
    var OS = OSRuntimeCore;
    class RL_7674e0699bf7786228f1b11887afe770 extends
    OS.DataTypes.GenericRecordList {
        static getItemType() {
            return FEReleaseSlackIntegrationModel.ST_3782d35f5f28ff9dd18fb6881ab471a9Structure;
        }

    }

    FEReleaseSlackIntegrationModel.RL_7674e0699bf7786228f1b11887afe770 = RL_7674e0699bf7786228f1b11887afe770;

});

define("FEReleaseSlackIntegration.model$ST_0a66c582c77592abee52988e6d0524e2Structure", ["exports", "@outsystems/runtime-core-js", "FEReleaseSlackIntegration.model", "FEReleaseSlackIntegration.model$ST_3782d35f5f28ff9dd18fb6881ab471a9Structure", "FEReleaseSlackIntegration.model$RL_7674e0699bf7786228f1b11887afe770"], function(exports, OSRuntimeCore, FEReleaseSlackIntegrationModel) {
    var OS = OSRuntimeCore; {
        class ST_0a66c582c77592abee52988e6d0524e2StructureInner extends
        OS.DataTypes.GenericRecord {
            static attributesToDeclare() {
                return [
                    this.attr("Ok", "okAttr", "ok", false, false, OS.DataTypes.DataTypes.Boolean, function() {
                        return false;
                    }, true),
                    this.attr("Messages", "messagesAttr", "messages", false, false, OS.DataTypes.DataTypes.RecordList, function() {
                        return OS.DataTypes.ImmutableBase.getData(new FEReleaseSlackIntegrationModel.RL_7674e0699bf7786228f1b11887afe770());
                    }, true, FEReleaseSlackIntegrationModel.RL_7674e0699bf7786228f1b11887afe770),
                    this.attr("Has_more", "has_moreAttr", "has_more", false, false, OS.DataTypes.DataTypes.Boolean, function() {
                        return false;
                    }, true)
                ].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
            }

        }

        FEReleaseSlackIntegrationModel.ST_0a66c582c77592abee52988e6d0524e2Structure = ST_0a66c582c77592abee52988e6d0524e2StructureInner;

        var ST_0a66c582c77592abee52988e6d0524e2Structure = ST_0a66c582c77592abee52988e6d0524e2StructureInner;
        ST_0a66c582c77592abee52988e6d0524e2Structure.init();
    }
});

define("FEReleaseSlackIntegration.model$BasicTypeList<Text>", ["exports", "@outsystems/runtime-core-js", "FEReleaseSlackIntegration.model"], function(exports, OSRuntimeCore, FEReleaseSlackIntegrationModel) {
    var OS = OSRuntimeCore;
    class TextList extends
    OS.DataTypes.GenericRecordList {
        static getItemType() {
            return OS.DataTypes.DataTypes.Text;
        }

    }

    FEReleaseSlackIntegrationModel.TextList = TextList;

});

define("FEReleaseSlackIntegration.model$ST_a7c2d4fb0a81e8416c70379886c39274Structure", ["exports", "@outsystems/runtime-core-js", "FEReleaseSlackIntegration.model", "FEReleaseSlackIntegration.model$ST_3782d35f5f28ff9dd18fb6881ab471a9Structure", "FEReleaseSlackIntegration.model$ST_ff6fa4367123aaf1ab10608dcb16ba43Structure"], function(exports, OSRuntimeCore, FEReleaseSlackIntegrationModel) {
    var OS = OSRuntimeCore; {
        class ST_a7c2d4fb0a81e8416c70379886c39274StructureInner extends
        OS.DataTypes.GenericRecord {
            static attributesToDeclare() {
                return [
                    this.attr("Id", "idAttr", "id", false, false, OS.DataTypes.DataTypes.Text, function() {
                        return "";
                    }, true),
                    this.attr("Name", "nameAttr", "name", false, false, OS.DataTypes.DataTypes.Text, function() {
                        return "";
                    }, true),
                    this.attr("Is_channel", "is_channelAttr", "is_channel", false, false, OS.DataTypes.DataTypes.Boolean, function() {
                        return false;
                    }, true),
                    this.attr("Created", "createdAttr", "created", false, false, OS.DataTypes.DataTypes.LongInteger, function() {
                        return OS.DataTypes.LongInteger.defaultValue;
                    }, true),
                    this.attr("Is_archived", "is_archivedAttr", "is_archived", false, false, OS.DataTypes.DataTypes.Boolean, function() {
                        return false;
                    }, true),
                    this.attr("Is_general", "is_generalAttr", "is_general", false, false, OS.DataTypes.DataTypes.Boolean, function() {
                        return false;
                    }, true),
                    this.attr("Unlinked", "unlinkedAttr", "unlinked", false, false, OS.DataTypes.DataTypes.LongInteger, function() {
                        return OS.DataTypes.LongInteger.defaultValue;
                    }, true),
                    this.attr("Creator", "creatorAttr", "creator", false, false, OS.DataTypes.DataTypes.Text, function() {
                        return "";
                    }, true),
                    this.attr("Name_normalized", "name_normalizedAttr", "name_normalized", false, false, OS.DataTypes.DataTypes.Text, function() {
                        return "";
                    }, true),
                    this.attr("Is_shared", "is_sharedAttr", "is_shared", false, false, OS.DataTypes.DataTypes.Boolean, function() {
                        return false;
                    }, true),
                    this.attr("Is_org_shared", "is_org_sharedAttr", "is_org_shared", false, false, OS.DataTypes.DataTypes.Boolean, function() {
                        return false;
                    }, true),
                    this.attr("Is_member", "is_memberAttr", "is_member", false, false, OS.DataTypes.DataTypes.Boolean, function() {
                        return false;
                    }, true),
                    this.attr("Is_private", "is_privateAttr", "is_private", false, false, OS.DataTypes.DataTypes.Boolean, function() {
                        return false;
                    }, true),
                    this.attr("Is_mpim", "is_mpimAttr", "is_mpim", false, false, OS.DataTypes.DataTypes.Boolean, function() {
                        return false;
                    }, true),
                    this.attr("Last_read", "last_readAttr", "last_read", false, false, OS.DataTypes.DataTypes.Text, function() {
                        return "";
                    }, true),
                    this.attr("Latest", "latestAttr", "latest", false, false, OS.DataTypes.DataTypes.Record, function() {
                        return OS.DataTypes.ImmutableBase.getData(new FEReleaseSlackIntegrationModel.ST_3782d35f5f28ff9dd18fb6881ab471a9Structure());
                    }, true, FEReleaseSlackIntegrationModel.ST_3782d35f5f28ff9dd18fb6881ab471a9Structure),
                    this.attr("Unread_count", "unread_countAttr", "unread_count", false, false, OS.DataTypes.DataTypes.LongInteger, function() {
                        return OS.DataTypes.LongInteger.defaultValue;
                    }, true),
                    this.attr("Unread_count_display", "unread_count_displayAttr", "unread_count_display", false, false, OS.DataTypes.DataTypes.LongInteger, function() {
                        return OS.DataTypes.LongInteger.defaultValue;
                    }, true),
                    this.attr("Members", "membersAttr", "members", false, false, OS.DataTypes.DataTypes.RecordList, function() {
                        return OS.DataTypes.ImmutableBase.getData(new OS.DataTypes.TextList());
                    }, true, OS.DataTypes.TextList),
                    this.attr("Topic", "topicAttr", "topic", false, false, OS.DataTypes.DataTypes.Record, function() {
                        return OS.DataTypes.ImmutableBase.getData(new FEReleaseSlackIntegrationModel.ST_ff6fa4367123aaf1ab10608dcb16ba43Structure());
                    }, true, FEReleaseSlackIntegrationModel.ST_ff6fa4367123aaf1ab10608dcb16ba43Structure),
                    this.attr("Purpose", "purposeAttr", "purpose", false, false, OS.DataTypes.DataTypes.Record, function() {
                        return OS.DataTypes.ImmutableBase.getData(new FEReleaseSlackIntegrationModel.ST_ff6fa4367123aaf1ab10608dcb16ba43Structure());
                    }, true, FEReleaseSlackIntegrationModel.ST_ff6fa4367123aaf1ab10608dcb16ba43Structure)
                ].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
            }

        }

        FEReleaseSlackIntegrationModel.ST_a7c2d4fb0a81e8416c70379886c39274Structure = ST_a7c2d4fb0a81e8416c70379886c39274StructureInner;

        var ST_a7c2d4fb0a81e8416c70379886c39274Structure = ST_a7c2d4fb0a81e8416c70379886c39274StructureInner;
        ST_a7c2d4fb0a81e8416c70379886c39274Structure.init();
    }
});

define("FEReleaseSlackIntegration.model$RL_0aa9e930032976c41db5078db1705487", ["exports", "@outsystems/runtime-core-js", "FEReleaseSlackIntegration.model", "FEReleaseSlackIntegration.model$ST_a7c2d4fb0a81e8416c70379886c39274Structure"], function(exports, OSRuntimeCore, FEReleaseSlackIntegrationModel) {
    var OS = OSRuntimeCore;
    class RL_0aa9e930032976c41db5078db1705487 extends
    OS.DataTypes.GenericRecordList {
        static getItemType() {
            return FEReleaseSlackIntegrationModel.ST_a7c2d4fb0a81e8416c70379886c39274Structure;
        }

    }

    FEReleaseSlackIntegrationModel.RL_0aa9e930032976c41db5078db1705487 = RL_0aa9e930032976c41db5078db1705487;

});

define("FEReleaseSlackIntegration.model$ST_a01186a03a6c4b831d48748ff6ff136bStructure", ["exports", "@outsystems/runtime-core-js", "FEReleaseSlackIntegration.model", "FEReleaseSlackIntegration.model$ST_a7c2d4fb0a81e8416c70379886c39274Structure"], function(exports, OSRuntimeCore, FEReleaseSlackIntegrationModel) {
    var OS = OSRuntimeCore; {
        class ST_a01186a03a6c4b831d48748ff6ff136bStructureInner extends
        OS.DataTypes.GenericRecord {
            static attributesToDeclare() {
                return [
                    this.attr("Ok", "okAttr", "ok", false, false, OS.DataTypes.DataTypes.Boolean, function() {
                        return false;
                    }, true),
                    this.attr("Channel", "channelAttr", "channel", false, false, OS.DataTypes.DataTypes.Record, function() {
                        return OS.DataTypes.ImmutableBase.getData(new FEReleaseSlackIntegrationModel.ST_a7c2d4fb0a81e8416c70379886c39274Structure());
                    }, true, FEReleaseSlackIntegrationModel.ST_a7c2d4fb0a81e8416c70379886c39274Structure)
                ].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
            }

        }

        FEReleaseSlackIntegrationModel.ST_a01186a03a6c4b831d48748ff6ff136bStructure = ST_a01186a03a6c4b831d48748ff6ff136bStructureInner;

        var ST_a01186a03a6c4b831d48748ff6ff136bStructure = ST_a01186a03a6c4b831d48748ff6ff136bStructureInner;
        ST_a01186a03a6c4b831d48748ff6ff136bStructure.init();
    }
});

define("FEReleaseSlackIntegration.model$RC_e3b64ee76991773d7381701280e3c6d4", ["exports", "@outsystems/runtime-core-js", "FEReleaseSlackIntegration.model", "FEReleaseSlackIntegration.model$ST_a01186a03a6c4b831d48748ff6ff136bStructure"], function(exports, OSRuntimeCore, FEReleaseSlackIntegrationModel) {
    var OS = OSRuntimeCore; {
        class RC_e3b64ee76991773d7381701280e3c6d4Inner extends
        OS.DataTypes.GenericRecord {
            static attributesToDeclare() {
                return [
                    this.attr("GetChannelInfoResponse", "getChannelInfoResponseAttr", "GetChannelInfoResponse", false, false, OS.DataTypes.DataTypes.Record, function() {
                        return OS.DataTypes.ImmutableBase.getData(new FEReleaseSlackIntegrationModel.ST_a01186a03a6c4b831d48748ff6ff136bStructure());
                    }, true, FEReleaseSlackIntegrationModel.ST_a01186a03a6c4b831d48748ff6ff136bStructure)
                ].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
            }

            static fromStructure(str) {
                return new RC_e3b64ee76991773d7381701280e3c6d4(new RC_e3b64ee76991773d7381701280e3c6d4.RecordClass({
                    getChannelInfoResponseAttr: OS.DataTypes.ImmutableBase.getData(str)
                }));
            }

        }

        FEReleaseSlackIntegrationModel.RC_e3b64ee76991773d7381701280e3c6d4 = RC_e3b64ee76991773d7381701280e3c6d4Inner;

        RC_e3b64ee76991773d7381701280e3c6d4Inner._isAnonymousRecord = true;
        RC_e3b64ee76991773d7381701280e3c6d4Inner.UniqueId = "e3b64ee7-6991-773d-7381-701280e3c6d4";
        var RC_e3b64ee76991773d7381701280e3c6d4 = RC_e3b64ee76991773d7381701280e3c6d4Inner;
        RC_e3b64ee76991773d7381701280e3c6d4.init();
    }
});

define("FEReleaseSlackIntegration.model$RL_11d5fc250d09046167baedb6f3c2fb4b", ["exports", "@outsystems/runtime-core-js", "FEReleaseSlackIntegration.model", "FEReleaseSlackIntegration.model$RC_e3b64ee76991773d7381701280e3c6d4"], function(exports, OSRuntimeCore, FEReleaseSlackIntegrationModel) {
    var OS = OSRuntimeCore;
    class RL_11d5fc250d09046167baedb6f3c2fb4b extends
    OS.DataTypes.GenericRecordList {
        static getItemType() {
            return FEReleaseSlackIntegrationModel.RC_e3b64ee76991773d7381701280e3c6d4;
        }

    }

    FEReleaseSlackIntegrationModel.RL_11d5fc250d09046167baedb6f3c2fb4b = RL_11d5fc250d09046167baedb6f3c2fb4b;

});

define("FEReleaseSlackIntegration.model$RC_f9a589fe5b81c3bda7db0e574d5d11fb", ["exports", "@outsystems/runtime-core-js", "System_.model", "FEReleaseSlackIntegration.model", "System_.model$UserLoginResultRec", "FEReleaseSlackIntegration.referencesHealth", "FEReleaseSlackIntegration.referencesHealth$System_"], function(exports, OSRuntimeCore, System_Model, FEReleaseSlackIntegrationModel) {
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

        FEReleaseSlackIntegrationModel.RC_f9a589fe5b81c3bda7db0e574d5d11fb = RC_f9a589fe5b81c3bda7db0e574d5d11fbInner;

        RC_f9a589fe5b81c3bda7db0e574d5d11fbInner._isAnonymousRecord = true;
        RC_f9a589fe5b81c3bda7db0e574d5d11fbInner.UniqueId = "f9a589fe-5b81-c3bd-a7db-0e574d5d11fb";
        var RC_f9a589fe5b81c3bda7db0e574d5d11fb = RC_f9a589fe5b81c3bda7db0e574d5d11fbInner;
        RC_f9a589fe5b81c3bda7db0e574d5d11fb.init();
    }
});

define("FEReleaseSlackIntegration.model$RL_137c1fde2390fc7845ae92a0265be990", ["exports", "@outsystems/runtime-core-js", "FEReleaseSlackIntegration.model", "FEReleaseSlackIntegration.model$RC_f9a589fe5b81c3bda7db0e574d5d11fb"], function(exports, OSRuntimeCore, FEReleaseSlackIntegrationModel) {
    var OS = OSRuntimeCore;
    class RL_137c1fde2390fc7845ae92a0265be990 extends
    OS.DataTypes.GenericRecordList {
        static getItemType() {
            return FEReleaseSlackIntegrationModel.RC_f9a589fe5b81c3bda7db0e574d5d11fb;
        }

    }

    FEReleaseSlackIntegrationModel.RL_137c1fde2390fc7845ae92a0265be990 = RL_137c1fde2390fc7845ae92a0265be990;

});

define("FEReleaseSlackIntegration.model$RC_79f003baa030e546826ed42c3962f582", ["exports", "@outsystems/runtime-core-js", "System_.model", "FEReleaseSlackIntegration.model", "System_.model$UserInfoRec", "FEReleaseSlackIntegration.referencesHealth", "FEReleaseSlackIntegration.referencesHealth$System_"], function(exports, OSRuntimeCore, System_Model, FEReleaseSlackIntegrationModel) {
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

        FEReleaseSlackIntegrationModel.RC_79f003baa030e546826ed42c3962f582 = RC_79f003baa030e546826ed42c3962f582Inner;

        RC_79f003baa030e546826ed42c3962f582Inner._isAnonymousRecord = true;
        RC_79f003baa030e546826ed42c3962f582Inner.UniqueId = "79f003ba-a030-e546-826e-d42c3962f582";
        var RC_79f003baa030e546826ed42c3962f582 = RC_79f003baa030e546826ed42c3962f582Inner;
        RC_79f003baa030e546826ed42c3962f582.init();
    }
});

define("FEReleaseSlackIntegration.model$RL_1503951706c05a1675ae923dc239c757", ["exports", "@outsystems/runtime-core-js", "FEReleaseSlackIntegration.model", "FEReleaseSlackIntegration.model$RC_79f003baa030e546826ed42c3962f582"], function(exports, OSRuntimeCore, FEReleaseSlackIntegrationModel) {
    var OS = OSRuntimeCore;
    class RL_1503951706c05a1675ae923dc239c757 extends
    OS.DataTypes.GenericRecordList {
        static getItemType() {
            return FEReleaseSlackIntegrationModel.RC_79f003baa030e546826ed42c3962f582;
        }

    }

    FEReleaseSlackIntegrationModel.RL_1503951706c05a1675ae923dc239c757 = RL_1503951706c05a1675ae923dc239c757;

});

define("FEReleaseSlackIntegration.model$RC_1ba3db8c7175cd095b4f1a36c3a1e53d", ["exports", "@outsystems/runtime-core-js", "System_.model", "FEReleaseSlackIntegration.model", "System_.model$FinishResetPasswordFailureReasonRec", "FEReleaseSlackIntegration.referencesHealth", "FEReleaseSlackIntegration.referencesHealth$System_"], function(exports, OSRuntimeCore, System_Model, FEReleaseSlackIntegrationModel) {
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

        FEReleaseSlackIntegrationModel.RC_1ba3db8c7175cd095b4f1a36c3a1e53d = RC_1ba3db8c7175cd095b4f1a36c3a1e53dInner;

        RC_1ba3db8c7175cd095b4f1a36c3a1e53dInner._isAnonymousRecord = true;
        RC_1ba3db8c7175cd095b4f1a36c3a1e53dInner.UniqueId = "1ba3db8c-7175-cd09-5b4f-1a36c3a1e53d";
        var RC_1ba3db8c7175cd095b4f1a36c3a1e53d = RC_1ba3db8c7175cd095b4f1a36c3a1e53dInner;
        RC_1ba3db8c7175cd095b4f1a36c3a1e53d.init();
    }
});

define("FEReleaseSlackIntegration.model$RC_bd573fb2cb521691dc6a8c4b02eeb054", ["exports", "@outsystems/runtime-core-js", "System_.model", "FEReleaseSlackIntegration.model", "System_.model$UpdateUserResultRec", "FEReleaseSlackIntegration.referencesHealth", "FEReleaseSlackIntegration.referencesHealth$System_"], function(exports, OSRuntimeCore, System_Model, FEReleaseSlackIntegrationModel) {
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

        FEReleaseSlackIntegrationModel.RC_bd573fb2cb521691dc6a8c4b02eeb054 = RC_bd573fb2cb521691dc6a8c4b02eeb054Inner;

        RC_bd573fb2cb521691dc6a8c4b02eeb054Inner._isAnonymousRecord = true;
        RC_bd573fb2cb521691dc6a8c4b02eeb054Inner.UniqueId = "bd573fb2-cb52-1691-dc6a-8c4b02eeb054";
        var RC_bd573fb2cb521691dc6a8c4b02eeb054 = RC_bd573fb2cb521691dc6a8c4b02eeb054Inner;
        RC_bd573fb2cb521691dc6a8c4b02eeb054.init();
    }
});

define("FEReleaseSlackIntegration.model$RL_201410915258bdd92387bbd4bec2a7bb", ["exports", "@outsystems/runtime-core-js", "FEReleaseSlackIntegration.model", "FEReleaseSlackIntegration.model$RC_bd573fb2cb521691dc6a8c4b02eeb054"], function(exports, OSRuntimeCore, FEReleaseSlackIntegrationModel) {
    var OS = OSRuntimeCore;
    class RL_201410915258bdd92387bbd4bec2a7bb extends
    OS.DataTypes.GenericRecordList {
        static getItemType() {
            return FEReleaseSlackIntegrationModel.RC_bd573fb2cb521691dc6a8c4b02eeb054;
        }

    }

    FEReleaseSlackIntegrationModel.RL_201410915258bdd92387bbd4bec2a7bb = RL_201410915258bdd92387bbd4bec2a7bb;

});

define("FEReleaseSlackIntegration.model$ST_29a5f7e0895363cf669089952b2fb1edStructure", ["exports", "@outsystems/runtime-core-js", "FEReleaseSlackIntegration.model"], function(exports, OSRuntimeCore, FEReleaseSlackIntegrationModel) {
    var OS = OSRuntimeCore; {
        class ST_29a5f7e0895363cf669089952b2fb1edStructureInner extends
        OS.DataTypes.GenericRecord {
            static attributesToDeclare() {
                return [
                    this.attr("Ok", "okAttr", "ok", false, false, OS.DataTypes.DataTypes.Boolean, function() {
                        return false;
                    }, true)
                ].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
            }

            static fromStructure(str) {
                return new ST_29a5f7e0895363cf669089952b2fb1edStructure(new ST_29a5f7e0895363cf669089952b2fb1edStructure.RecordClass({
                    okAttr: OS.DataTypes.ImmutableBase.getData(str)
                }));
            }

        }

        FEReleaseSlackIntegrationModel.ST_29a5f7e0895363cf669089952b2fb1edStructure = ST_29a5f7e0895363cf669089952b2fb1edStructureInner;

        var ST_29a5f7e0895363cf669089952b2fb1edStructure = ST_29a5f7e0895363cf669089952b2fb1edStructureInner;
        ST_29a5f7e0895363cf669089952b2fb1edStructure.init();
    }
});

define("FEReleaseSlackIntegration.model$RL_31d7615454c0155a64f826d4e0cf4cb5", ["exports", "@outsystems/runtime-core-js", "System_.model", "FEReleaseSlackIntegration.model", "System_.model$FinishResetPasswordFailureReasonRec", "FEReleaseSlackIntegration.referencesHealth", "FEReleaseSlackIntegration.referencesHealth$System_"], function(exports, OSRuntimeCore, System_Model, FEReleaseSlackIntegrationModel) {
    var OS = OSRuntimeCore;
    class RL_31d7615454c0155a64f826d4e0cf4cb5 extends
    OS.DataTypes.GenericRecordList {
        static getItemType() {
            return OS.SystemStructures.FinishResetPasswordFailureReasonRec;
        }

    }

    FEReleaseSlackIntegrationModel.RL_31d7615454c0155a64f826d4e0cf4cb5 = RL_31d7615454c0155a64f826d4e0cf4cb5;

});

define("FEReleaseSlackIntegration.model$RC_3375dbdf42120d4cd74942f1cc4f9d88", ["exports", "@outsystems/runtime-core-js", "FEReleaseSlackIntegration.model", "FEReleaseSlackIntegration.model$ST_0a66c582c77592abee52988e6d0524e2Structure"], function(exports, OSRuntimeCore, FEReleaseSlackIntegrationModel) {
    var OS = OSRuntimeCore; {
        class RC_3375dbdf42120d4cd74942f1cc4f9d88Inner extends
        OS.DataTypes.GenericRecord {
            static attributesToDeclare() {
                return [
                    this.attr("GetChannelsHistoryResponse", "getChannelsHistoryResponseAttr", "GetChannelsHistoryResponse", false, false, OS.DataTypes.DataTypes.Record, function() {
                        return OS.DataTypes.ImmutableBase.getData(new FEReleaseSlackIntegrationModel.ST_0a66c582c77592abee52988e6d0524e2Structure());
                    }, true, FEReleaseSlackIntegrationModel.ST_0a66c582c77592abee52988e6d0524e2Structure)
                ].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
            }

            static fromStructure(str) {
                return new RC_3375dbdf42120d4cd74942f1cc4f9d88(new RC_3375dbdf42120d4cd74942f1cc4f9d88.RecordClass({
                    getChannelsHistoryResponseAttr: OS.DataTypes.ImmutableBase.getData(str)
                }));
            }

        }

        FEReleaseSlackIntegrationModel.RC_3375dbdf42120d4cd74942f1cc4f9d88 = RC_3375dbdf42120d4cd74942f1cc4f9d88Inner;

        RC_3375dbdf42120d4cd74942f1cc4f9d88Inner._isAnonymousRecord = true;
        RC_3375dbdf42120d4cd74942f1cc4f9d88Inner.UniqueId = "3375dbdf-4212-0d4c-d749-42f1cc4f9d88";
        var RC_3375dbdf42120d4cd74942f1cc4f9d88 = RC_3375dbdf42120d4cd74942f1cc4f9d88Inner;
        RC_3375dbdf42120d4cd74942f1cc4f9d88.init();
    }
});

define("FEReleaseSlackIntegration.model$RC_3391a407605c2903e72042e67177aeae", ["exports", "@outsystems/runtime-core-js", "FEReleaseSlackIntegration.model", "FEReleaseSlackIntegration.model$ST_ff6fa4367123aaf1ab10608dcb16ba43Structure"], function(exports, OSRuntimeCore, FEReleaseSlackIntegrationModel) {
    var OS = OSRuntimeCore; {
        class RC_3391a407605c2903e72042e67177aeaeInner extends
        OS.DataTypes.GenericRecord {
            static attributesToDeclare() {
                return [
                    this.attr("Topic", "topicAttr", "Topic", false, false, OS.DataTypes.DataTypes.Record, function() {
                        return OS.DataTypes.ImmutableBase.getData(new FEReleaseSlackIntegrationModel.ST_ff6fa4367123aaf1ab10608dcb16ba43Structure());
                    }, true, FEReleaseSlackIntegrationModel.ST_ff6fa4367123aaf1ab10608dcb16ba43Structure)
                ].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
            }

            static fromStructure(str) {
                return new RC_3391a407605c2903e72042e67177aeae(new RC_3391a407605c2903e72042e67177aeae.RecordClass({
                    topicAttr: OS.DataTypes.ImmutableBase.getData(str)
                }));
            }

        }

        FEReleaseSlackIntegrationModel.RC_3391a407605c2903e72042e67177aeae = RC_3391a407605c2903e72042e67177aeaeInner;

        RC_3391a407605c2903e72042e67177aeaeInner._isAnonymousRecord = true;
        RC_3391a407605c2903e72042e67177aeaeInner.UniqueId = "3391a407-605c-2903-e720-42e67177aeae";
        var RC_3391a407605c2903e72042e67177aeae = RC_3391a407605c2903e72042e67177aeaeInner;
        RC_3391a407605c2903e72042e67177aeae.init();
    }
});

define("FEReleaseSlackIntegration.model$RL_36d4d7e2109bafadf398450826580bed", ["exports", "@outsystems/runtime-core-js", "System_.model", "FEReleaseSlackIntegration.model", "System_.model$UpdateUserResultRec", "FEReleaseSlackIntegration.referencesHealth", "FEReleaseSlackIntegration.referencesHealth$System_"], function(exports, OSRuntimeCore, System_Model, FEReleaseSlackIntegrationModel) {
    var OS = OSRuntimeCore;
    class RL_36d4d7e2109bafadf398450826580bed extends
    OS.DataTypes.GenericRecordList {
        static getItemType() {
            return OS.SystemStructures.UpdateUserResultRec;
        }

    }

    FEReleaseSlackIntegrationModel.RL_36d4d7e2109bafadf398450826580bed = RL_36d4d7e2109bafadf398450826580bed;

});

define("FEReleaseSlackIntegration.model$RL_3b8feaa11cc930133dbb7eecb085b527", ["exports", "@outsystems/runtime-core-js", "System_.model", "FEReleaseSlackIntegration.model", "System_.model$UserLoginFailureReasonRec", "FEReleaseSlackIntegration.referencesHealth", "FEReleaseSlackIntegration.referencesHealth$System_"], function(exports, OSRuntimeCore, System_Model, FEReleaseSlackIntegrationModel) {
    var OS = OSRuntimeCore;
    class RL_3b8feaa11cc930133dbb7eecb085b527 extends
    OS.DataTypes.GenericRecordList {
        static getItemType() {
            return OS.SystemStructures.UserLoginFailureReasonRec;
        }

    }

    FEReleaseSlackIntegrationModel.RL_3b8feaa11cc930133dbb7eecb085b527 = RL_3b8feaa11cc930133dbb7eecb085b527;

});

define("FEReleaseSlackIntegration.model$RC_9817a5747e4b09aa3a6a7eb35ce9f66e", ["exports", "@outsystems/runtime-core-js", "System_.model", "FEReleaseSlackIntegration.model", "System_.model$FinishResetPasswordResultRec", "FEReleaseSlackIntegration.referencesHealth", "FEReleaseSlackIntegration.referencesHealth$System_"], function(exports, OSRuntimeCore, System_Model, FEReleaseSlackIntegrationModel) {
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

        FEReleaseSlackIntegrationModel.RC_9817a5747e4b09aa3a6a7eb35ce9f66e = RC_9817a5747e4b09aa3a6a7eb35ce9f66eInner;

        RC_9817a5747e4b09aa3a6a7eb35ce9f66eInner._isAnonymousRecord = true;
        RC_9817a5747e4b09aa3a6a7eb35ce9f66eInner.UniqueId = "9817a574-7e4b-09aa-3a6a-7eb35ce9f66e";
        var RC_9817a5747e4b09aa3a6a7eb35ce9f66e = RC_9817a5747e4b09aa3a6a7eb35ce9f66eInner;
        RC_9817a5747e4b09aa3a6a7eb35ce9f66e.init();
    }
});

define("FEReleaseSlackIntegration.model$RL_3f7b36d8bbcf12054b7e2f49497f214f", ["exports", "@outsystems/runtime-core-js", "FEReleaseSlackIntegration.model", "FEReleaseSlackIntegration.model$RC_9817a5747e4b09aa3a6a7eb35ce9f66e"], function(exports, OSRuntimeCore, FEReleaseSlackIntegrationModel) {
    var OS = OSRuntimeCore;
    class RL_3f7b36d8bbcf12054b7e2f49497f214f extends
    OS.DataTypes.GenericRecordList {
        static getItemType() {
            return FEReleaseSlackIntegrationModel.RC_9817a5747e4b09aa3a6a7eb35ce9f66e;
        }

    }

    FEReleaseSlackIntegrationModel.RL_3f7b36d8bbcf12054b7e2f49497f214f = RL_3f7b36d8bbcf12054b7e2f49497f214f;

});

define("FEReleaseSlackIntegration.model$EN_59cbb1e0f8f4f8703edc130b04d7ed9bEntityRecord", ["exports", "@outsystems/runtime-core-js", "FEReleaseSlackIntegration.model"], function(exports, OSRuntimeCore, FEReleaseSlackIntegrationModel) {
    var OS = OSRuntimeCore; {
        class EN_59cbb1e0f8f4f8703edc130b04d7ed9bEntityRecordInner extends
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
                    this.attr("Is_Active", "is_ActiveAttr", "Is_Active", true, false, OS.DataTypes.DataTypes.Boolean, function() {
                        return false;
                    }, true)
                ].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
            }

        }

        FEReleaseSlackIntegrationModel.EN_59cbb1e0f8f4f8703edc130b04d7ed9bEntityRecord = EN_59cbb1e0f8f4f8703edc130b04d7ed9bEntityRecordInner;

        var EN_59cbb1e0f8f4f8703edc130b04d7ed9bEntityRecord = EN_59cbb1e0f8f4f8703edc130b04d7ed9bEntityRecordInner;
        EN_59cbb1e0f8f4f8703edc130b04d7ed9bEntityRecord.init();
    }
});

define("FEReleaseSlackIntegration.model$RC_46c6b5bdd731651b9786fe924a54842b", ["exports", "@outsystems/runtime-core-js", "FEReleaseSlackIntegration.model", "FEReleaseSlackIntegration.model$EN_59cbb1e0f8f4f8703edc130b04d7ed9bEntityRecord"], function(exports, OSRuntimeCore, FEReleaseSlackIntegrationModel) {
    var OS = OSRuntimeCore; {
        class RC_46c6b5bdd731651b9786fe924a54842bInner extends
        OS.DataTypes.GenericRecord {
            static attributesToDeclare() {
                return [
                    this.attr("SlackResponse", "slackResponseAttr", "SlackResponse", false, false, OS.DataTypes.DataTypes.Record, function() {
                        return OS.DataTypes.ImmutableBase.getData(new FEReleaseSlackIntegrationModel.EN_59cbb1e0f8f4f8703edc130b04d7ed9bEntityRecord());
                    }, true, FEReleaseSlackIntegrationModel.EN_59cbb1e0f8f4f8703edc130b04d7ed9bEntityRecord)
                ].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
            }

            static fromStructure(str) {
                return new RC_46c6b5bdd731651b9786fe924a54842b(new RC_46c6b5bdd731651b9786fe924a54842b.RecordClass({
                    slackResponseAttr: OS.DataTypes.ImmutableBase.getData(str)
                }));
            }

        }

        FEReleaseSlackIntegrationModel.RC_46c6b5bdd731651b9786fe924a54842b = RC_46c6b5bdd731651b9786fe924a54842bInner;

        RC_46c6b5bdd731651b9786fe924a54842bInner._isAnonymousRecord = true;
        RC_46c6b5bdd731651b9786fe924a54842bInner.UniqueId = "46c6b5bd-d731-651b-9786-fe924a54842b";
        var RC_46c6b5bdd731651b9786fe924a54842b = RC_46c6b5bdd731651b9786fe924a54842bInner;
        RC_46c6b5bdd731651b9786fe924a54842b.init();
    }
});

define("FEReleaseSlackIntegration.model$RL_47595c6744be14d2bd677fd05324180f", ["exports", "@outsystems/runtime-core-js", "FEReleaseSlackIntegration.model", "FEReleaseSlackIntegration.model$RC_1ba3db8c7175cd095b4f1a36c3a1e53d"], function(exports, OSRuntimeCore, FEReleaseSlackIntegrationModel) {
    var OS = OSRuntimeCore;
    class RL_47595c6744be14d2bd677fd05324180f extends
    OS.DataTypes.GenericRecordList {
        static getItemType() {
            return FEReleaseSlackIntegrationModel.RC_1ba3db8c7175cd095b4f1a36c3a1e53d;
        }

    }

    FEReleaseSlackIntegrationModel.RL_47595c6744be14d2bd677fd05324180f = RL_47595c6744be14d2bd677fd05324180f;

});

define("FEReleaseSlackIntegration.model$RC_9bd05b4ddb4909b9d4caa679f6e81971", ["exports", "@outsystems/runtime-core-js", "FEReleaseSlackIntegration.model", "FEReleaseSlackIntegration.model$ST_a7c2d4fb0a81e8416c70379886c39274Structure"], function(exports, OSRuntimeCore, FEReleaseSlackIntegrationModel) {
    var OS = OSRuntimeCore; {
        class RC_9bd05b4ddb4909b9d4caa679f6e81971Inner extends
        OS.DataTypes.GenericRecord {
            static attributesToDeclare() {
                return [
                    this.attr("Channel", "channelAttr", "Channel", false, false, OS.DataTypes.DataTypes.Record, function() {
                        return OS.DataTypes.ImmutableBase.getData(new FEReleaseSlackIntegrationModel.ST_a7c2d4fb0a81e8416c70379886c39274Structure());
                    }, true, FEReleaseSlackIntegrationModel.ST_a7c2d4fb0a81e8416c70379886c39274Structure)
                ].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
            }

            static fromStructure(str) {
                return new RC_9bd05b4ddb4909b9d4caa679f6e81971(new RC_9bd05b4ddb4909b9d4caa679f6e81971.RecordClass({
                    channelAttr: OS.DataTypes.ImmutableBase.getData(str)
                }));
            }

        }

        FEReleaseSlackIntegrationModel.RC_9bd05b4ddb4909b9d4caa679f6e81971 = RC_9bd05b4ddb4909b9d4caa679f6e81971Inner;

        RC_9bd05b4ddb4909b9d4caa679f6e81971Inner._isAnonymousRecord = true;
        RC_9bd05b4ddb4909b9d4caa679f6e81971Inner.UniqueId = "9bd05b4d-db49-09b9-d4ca-a679f6e81971";
        var RC_9bd05b4ddb4909b9d4caa679f6e81971 = RC_9bd05b4ddb4909b9d4caa679f6e81971Inner;
        RC_9bd05b4ddb4909b9d4caa679f6e81971.init();
    }
});

define("FEReleaseSlackIntegration.model$RL_47e7c934a3575d224a082efe32355ab7", ["exports", "@outsystems/runtime-core-js", "FEReleaseSlackIntegration.model", "FEReleaseSlackIntegration.model$RC_9bd05b4ddb4909b9d4caa679f6e81971"], function(exports, OSRuntimeCore, FEReleaseSlackIntegrationModel) {
    var OS = OSRuntimeCore;
    class RL_47e7c934a3575d224a082efe32355ab7 extends
    OS.DataTypes.GenericRecordList {
        static getItemType() {
            return FEReleaseSlackIntegrationModel.RC_9bd05b4ddb4909b9d4caa679f6e81971;
        }

    }

    FEReleaseSlackIntegrationModel.RL_47e7c934a3575d224a082efe32355ab7 = RL_47e7c934a3575d224a082efe32355ab7;

});

define("FEReleaseSlackIntegration.model$RC_4bcbc21404fd7a9dc5a38b7c1900a113", ["exports", "@outsystems/runtime-core-js", "FEReleaseSlackIntegration.model", "FEReleaseSlackIntegration.model$ST_29a5f7e0895363cf669089952b2fb1edStructure"], function(exports, OSRuntimeCore, FEReleaseSlackIntegrationModel) {
    var OS = OSRuntimeCore; {
        class RC_4bcbc21404fd7a9dc5a38b7c1900a113Inner extends
        OS.DataTypes.GenericRecord {
            static attributesToDeclare() {
                return [
                    this.attr("ReleaseFrontendResponse", "releaseFrontendResponseAttr", "ReleaseFrontendResponse", false, false, OS.DataTypes.DataTypes.Record, function() {
                        return OS.DataTypes.ImmutableBase.getData(new FEReleaseSlackIntegrationModel.ST_29a5f7e0895363cf669089952b2fb1edStructure());
                    }, true, FEReleaseSlackIntegrationModel.ST_29a5f7e0895363cf669089952b2fb1edStructure)
                ].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
            }

            static fromStructure(str) {
                return new RC_4bcbc21404fd7a9dc5a38b7c1900a113(new RC_4bcbc21404fd7a9dc5a38b7c1900a113.RecordClass({
                    releaseFrontendResponseAttr: OS.DataTypes.ImmutableBase.getData(str)
                }));
            }

        }

        FEReleaseSlackIntegrationModel.RC_4bcbc21404fd7a9dc5a38b7c1900a113 = RC_4bcbc21404fd7a9dc5a38b7c1900a113Inner;

        RC_4bcbc21404fd7a9dc5a38b7c1900a113Inner._isAnonymousRecord = true;
        RC_4bcbc21404fd7a9dc5a38b7c1900a113Inner.UniqueId = "4bcbc214-04fd-7a9d-c5a3-8b7c1900a113";
        var RC_4bcbc21404fd7a9dc5a38b7c1900a113 = RC_4bcbc21404fd7a9dc5a38b7c1900a113Inner;
        RC_4bcbc21404fd7a9dc5a38b7c1900a113.init();
    }
});

define("FEReleaseSlackIntegration.model$RC_4d77cfdd567b208680377834fc8205a2", ["exports", "@outsystems/runtime-core-js", "System_.model", "FEReleaseSlackIntegration.model", "System_.model$PasswordComplexityPolicyRec", "FEReleaseSlackIntegration.referencesHealth", "FEReleaseSlackIntegration.referencesHealth$System_"], function(exports, OSRuntimeCore, System_Model, FEReleaseSlackIntegrationModel) {
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

        FEReleaseSlackIntegrationModel.RC_4d77cfdd567b208680377834fc8205a2 = RC_4d77cfdd567b208680377834fc8205a2Inner;

        RC_4d77cfdd567b208680377834fc8205a2Inner._isAnonymousRecord = true;
        RC_4d77cfdd567b208680377834fc8205a2Inner.UniqueId = "4d77cfdd-567b-2086-8037-7834fc8205a2";
        var RC_4d77cfdd567b208680377834fc8205a2 = RC_4d77cfdd567b208680377834fc8205a2Inner;
        RC_4d77cfdd567b208680377834fc8205a2.init();
    }
});

define("FEReleaseSlackIntegration.model$RC_4e0347af69e49e93f28b4b0de4bcad85", ["exports", "@outsystems/runtime-core-js", "FEReleaseSlackIntegration.model", "FEReleaseSlackIntegration.model$ST_074de63327cc6281abd591a06ac7a3ebStructure"], function(exports, OSRuntimeCore, FEReleaseSlackIntegrationModel) {
    var OS = OSRuntimeCore; {
        class RC_4e0347af69e49e93f28b4b0de4bcad85Inner extends
        OS.DataTypes.GenericRecord {
            static attributesToDeclare() {
                return [
                    this.attr("ReleaseFrontendRequest", "releaseFrontendRequestAttr", "ReleaseFrontendRequest", false, false, OS.DataTypes.DataTypes.Record, function() {
                        return OS.DataTypes.ImmutableBase.getData(new FEReleaseSlackIntegrationModel.ST_074de63327cc6281abd591a06ac7a3ebStructure());
                    }, true, FEReleaseSlackIntegrationModel.ST_074de63327cc6281abd591a06ac7a3ebStructure)
                ].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
            }

            static fromStructure(str) {
                return new RC_4e0347af69e49e93f28b4b0de4bcad85(new RC_4e0347af69e49e93f28b4b0de4bcad85.RecordClass({
                    releaseFrontendRequestAttr: OS.DataTypes.ImmutableBase.getData(str)
                }));
            }

        }

        FEReleaseSlackIntegrationModel.RC_4e0347af69e49e93f28b4b0de4bcad85 = RC_4e0347af69e49e93f28b4b0de4bcad85Inner;

        RC_4e0347af69e49e93f28b4b0de4bcad85Inner._isAnonymousRecord = true;
        RC_4e0347af69e49e93f28b4b0de4bcad85Inner.UniqueId = "4e0347af-69e4-9e93-f28b-4b0de4bcad85";
        var RC_4e0347af69e49e93f28b4b0de4bcad85 = RC_4e0347af69e49e93f28b4b0de4bcad85Inner;
        RC_4e0347af69e49e93f28b4b0de4bcad85.init();
    }
});

define("FEReleaseSlackIntegration.model$RL_4e4931d865c8789e9e6ef1d8540ae228", ["exports", "@outsystems/runtime-core-js", "System_.model", "FEReleaseSlackIntegration.model", "System_.model$StartResetPasswordResultRec", "FEReleaseSlackIntegration.referencesHealth", "FEReleaseSlackIntegration.referencesHealth$System_"], function(exports, OSRuntimeCore, System_Model, FEReleaseSlackIntegrationModel) {
    var OS = OSRuntimeCore;
    class RL_4e4931d865c8789e9e6ef1d8540ae228 extends
    OS.DataTypes.GenericRecordList {
        static getItemType() {
            return OS.SystemStructures.StartResetPasswordResultRec;
        }

    }

    FEReleaseSlackIntegrationModel.RL_4e4931d865c8789e9e6ef1d8540ae228 = RL_4e4931d865c8789e9e6ef1d8540ae228;

});

define("FEReleaseSlackIntegration.model$ST_92400cc7724ed583cb86d67e1fc7e7c5Structure", ["exports", "@outsystems/runtime-core-js", "FEReleaseSlackIntegration.model"], function(exports, OSRuntimeCore, FEReleaseSlackIntegrationModel) {
    var OS = OSRuntimeCore; {
        class ST_92400cc7724ed583cb86d67e1fc7e7c5StructureInner extends
        OS.DataTypes.GenericRecord {
            static attributesToDeclare() {
                return [
                    this.attr("Text", "textAttr", "text", false, false, OS.DataTypes.DataTypes.Text, function() {
                        return "";
                    }, true)
                ].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
            }

            static fromStructure(str) {
                return new ST_92400cc7724ed583cb86d67e1fc7e7c5Structure(new ST_92400cc7724ed583cb86d67e1fc7e7c5Structure.RecordClass({
                    textAttr: OS.DataTypes.ImmutableBase.getData(str)
                }));
            }

        }

        FEReleaseSlackIntegrationModel.ST_92400cc7724ed583cb86d67e1fc7e7c5Structure = ST_92400cc7724ed583cb86d67e1fc7e7c5StructureInner;

        var ST_92400cc7724ed583cb86d67e1fc7e7c5Structure = ST_92400cc7724ed583cb86d67e1fc7e7c5StructureInner;
        ST_92400cc7724ed583cb86d67e1fc7e7c5Structure.init();
    }
});

define("FEReleaseSlackIntegration.model$RL_4ffd9ff6b5fa667b88d79ba8f3c6640e", ["exports", "@outsystems/runtime-core-js", "FEReleaseSlackIntegration.model", "FEReleaseSlackIntegration.model$ST_92400cc7724ed583cb86d67e1fc7e7c5Structure"], function(exports, OSRuntimeCore, FEReleaseSlackIntegrationModel) {
    var OS = OSRuntimeCore;
    class RL_4ffd9ff6b5fa667b88d79ba8f3c6640e extends
    OS.DataTypes.GenericRecordList {
        static getItemType() {
            return FEReleaseSlackIntegrationModel.ST_92400cc7724ed583cb86d67e1fc7e7c5Structure;
        }

    }

    FEReleaseSlackIntegrationModel.RL_4ffd9ff6b5fa667b88d79ba8f3c6640e = RL_4ffd9ff6b5fa667b88d79ba8f3c6640e;

});

define("FEReleaseSlackIntegration.model$RC_53d491417faf149f9fb8a0dda9c12d06", ["exports", "@outsystems/runtime-core-js", "System_.model", "FEReleaseSlackIntegration.model", "System_.model$ChangePasswordResultRec", "FEReleaseSlackIntegration.referencesHealth", "FEReleaseSlackIntegration.referencesHealth$System_"], function(exports, OSRuntimeCore, System_Model, FEReleaseSlackIntegrationModel) {
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

        FEReleaseSlackIntegrationModel.RC_53d491417faf149f9fb8a0dda9c12d06 = RC_53d491417faf149f9fb8a0dda9c12d06Inner;

        RC_53d491417faf149f9fb8a0dda9c12d06Inner._isAnonymousRecord = true;
        RC_53d491417faf149f9fb8a0dda9c12d06Inner.UniqueId = "53d49141-7faf-149f-9fb8-a0dda9c12d06";
        var RC_53d491417faf149f9fb8a0dda9c12d06 = RC_53d491417faf149f9fb8a0dda9c12d06Inner;
        RC_53d491417faf149f9fb8a0dda9c12d06.init();
    }
});

define("FEReleaseSlackIntegration.model$RL_54fab648630d41e343fad35c1143481d", ["exports", "@outsystems/runtime-core-js", "System_.model", "FEReleaseSlackIntegration.model", "System_.model$UserInfoRec", "FEReleaseSlackIntegration.referencesHealth", "FEReleaseSlackIntegration.referencesHealth$System_"], function(exports, OSRuntimeCore, System_Model, FEReleaseSlackIntegrationModel) {
    var OS = OSRuntimeCore;
    class RL_54fab648630d41e343fad35c1143481d extends
    OS.DataTypes.GenericRecordList {
        static getItemType() {
            return OS.SystemStructures.UserInfoRec;
        }

    }

    FEReleaseSlackIntegrationModel.RL_54fab648630d41e343fad35c1143481d = RL_54fab648630d41e343fad35c1143481d;

});

define("FEReleaseSlackIntegration.model$RC_5d4c0a98b9773e489e7e27bfe5360793", ["exports", "@outsystems/runtime-core-js", "System_.model", "FEReleaseSlackIntegration.model", "System_.model$UpdateUserFailureReasonRec", "FEReleaseSlackIntegration.referencesHealth", "FEReleaseSlackIntegration.referencesHealth$System_"], function(exports, OSRuntimeCore, System_Model, FEReleaseSlackIntegrationModel) {
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

        FEReleaseSlackIntegrationModel.RC_5d4c0a98b9773e489e7e27bfe5360793 = RC_5d4c0a98b9773e489e7e27bfe5360793Inner;

        RC_5d4c0a98b9773e489e7e27bfe5360793Inner._isAnonymousRecord = true;
        RC_5d4c0a98b9773e489e7e27bfe5360793Inner.UniqueId = "5d4c0a98-b977-3e48-9e7e-27bfe5360793";
        var RC_5d4c0a98b9773e489e7e27bfe5360793 = RC_5d4c0a98b9773e489e7e27bfe5360793Inner;
        RC_5d4c0a98b9773e489e7e27bfe5360793.init();
    }
});

define("FEReleaseSlackIntegration.model$RC_645e6d99c62950d533c673c938aae9c2", ["exports", "@outsystems/runtime-core-js", "FEReleaseSlackIntegration.model", "FEReleaseSlackIntegration.model$ST_92400cc7724ed583cb86d67e1fc7e7c5Structure"], function(exports, OSRuntimeCore, FEReleaseSlackIntegrationModel) {
    var OS = OSRuntimeCore; {
        class RC_645e6d99c62950d533c673c938aae9c2Inner extends
        OS.DataTypes.GenericRecord {
            static attributesToDeclare() {
                return [
                    this.attr("PostMessageRequest", "postMessageRequestAttr", "PostMessageRequest", false, false, OS.DataTypes.DataTypes.Record, function() {
                        return OS.DataTypes.ImmutableBase.getData(new FEReleaseSlackIntegrationModel.ST_92400cc7724ed583cb86d67e1fc7e7c5Structure());
                    }, true, FEReleaseSlackIntegrationModel.ST_92400cc7724ed583cb86d67e1fc7e7c5Structure)
                ].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
            }

            static fromStructure(str) {
                return new RC_645e6d99c62950d533c673c938aae9c2(new RC_645e6d99c62950d533c673c938aae9c2.RecordClass({
                    postMessageRequestAttr: OS.DataTypes.ImmutableBase.getData(str)
                }));
            }

        }

        FEReleaseSlackIntegrationModel.RC_645e6d99c62950d533c673c938aae9c2 = RC_645e6d99c62950d533c673c938aae9c2Inner;

        RC_645e6d99c62950d533c673c938aae9c2Inner._isAnonymousRecord = true;
        RC_645e6d99c62950d533c673c938aae9c2Inner.UniqueId = "645e6d99-c629-50d5-33c6-73c938aae9c2";
        var RC_645e6d99c62950d533c673c938aae9c2 = RC_645e6d99c62950d533c673c938aae9c2Inner;
        RC_645e6d99c62950d533c673c938aae9c2.init();
    }
});

define("FEReleaseSlackIntegration.model$RL_68be9dd68c0e161ac2c65c1092c999e6", ["exports", "@outsystems/runtime-core-js", "System_.model", "FEReleaseSlackIntegration.model", "System_.model$FinishResetPasswordResultRec", "FEReleaseSlackIntegration.referencesHealth", "FEReleaseSlackIntegration.referencesHealth$System_"], function(exports, OSRuntimeCore, System_Model, FEReleaseSlackIntegrationModel) {
    var OS = OSRuntimeCore;
    class RL_68be9dd68c0e161ac2c65c1092c999e6 extends
    OS.DataTypes.GenericRecordList {
        static getItemType() {
            return OS.SystemStructures.FinishResetPasswordResultRec;
        }

    }

    FEReleaseSlackIntegrationModel.RL_68be9dd68c0e161ac2c65c1092c999e6 = RL_68be9dd68c0e161ac2c65c1092c999e6;

});

define("FEReleaseSlackIntegration.model$RL_77b748cb693aab53dc1311908e347276", ["exports", "@outsystems/runtime-core-js", "FEReleaseSlackIntegration.model", "FEReleaseSlackIntegration.model$RC_4bcbc21404fd7a9dc5a38b7c1900a113"], function(exports, OSRuntimeCore, FEReleaseSlackIntegrationModel) {
    var OS = OSRuntimeCore;
    class RL_77b748cb693aab53dc1311908e347276 extends
    OS.DataTypes.GenericRecordList {
        static getItemType() {
            return FEReleaseSlackIntegrationModel.RC_4bcbc21404fd7a9dc5a38b7c1900a113;
        }

    }

    FEReleaseSlackIntegrationModel.RL_77b748cb693aab53dc1311908e347276 = RL_77b748cb693aab53dc1311908e347276;

});

define("FEReleaseSlackIntegration.model$RL_84ed4ab43e43700652f52759302cd452", ["exports", "@outsystems/runtime-core-js", "FEReleaseSlackIntegration.model", "FEReleaseSlackIntegration.model$RC_46c6b5bdd731651b9786fe924a54842b"], function(exports, OSRuntimeCore, FEReleaseSlackIntegrationModel) {
    var OS = OSRuntimeCore;
    class RL_84ed4ab43e43700652f52759302cd452 extends
    OS.DataTypes.GenericRecordList {
        static getItemType() {
            return FEReleaseSlackIntegrationModel.RC_46c6b5bdd731651b9786fe924a54842b;
        }

    }

    FEReleaseSlackIntegrationModel.RL_84ed4ab43e43700652f52759302cd452 = RL_84ed4ab43e43700652f52759302cd452;

});

define("FEReleaseSlackIntegration.model$RL_875b321486a40627f7580de2ed881b7d", ["exports", "@outsystems/runtime-core-js", "FEReleaseSlackIntegration.model", "FEReleaseSlackIntegration.model$ST_074de63327cc6281abd591a06ac7a3ebStructure"], function(exports, OSRuntimeCore, FEReleaseSlackIntegrationModel) {
    var OS = OSRuntimeCore;
    class RL_875b321486a40627f7580de2ed881b7d extends
    OS.DataTypes.GenericRecordList {
        static getItemType() {
            return FEReleaseSlackIntegrationModel.ST_074de63327cc6281abd591a06ac7a3ebStructure;
        }

    }

    FEReleaseSlackIntegrationModel.RL_875b321486a40627f7580de2ed881b7d = RL_875b321486a40627f7580de2ed881b7d;

});

define("FEReleaseSlackIntegration.model$RL_8b34cec2d3a4e3170e329009c7e2bef8", ["exports", "@outsystems/runtime-core-js", "System_.model", "FEReleaseSlackIntegration.model", "System_.model$UpdateUserFailureReasonRec", "FEReleaseSlackIntegration.referencesHealth", "FEReleaseSlackIntegration.referencesHealth$System_"], function(exports, OSRuntimeCore, System_Model, FEReleaseSlackIntegrationModel) {
    var OS = OSRuntimeCore;
    class RL_8b34cec2d3a4e3170e329009c7e2bef8 extends
    OS.DataTypes.GenericRecordList {
        static getItemType() {
            return OS.SystemStructures.UpdateUserFailureReasonRec;
        }

    }

    FEReleaseSlackIntegrationModel.RL_8b34cec2d3a4e3170e329009c7e2bef8 = RL_8b34cec2d3a4e3170e329009c7e2bef8;

});

define("FEReleaseSlackIntegration.model$RC_8f8c9b77bcc0996564febb7d38ea930a", ["exports", "@outsystems/runtime-core-js", "System_.model", "FEReleaseSlackIntegration.model", "System_.model$StartResetPasswordResultRec", "FEReleaseSlackIntegration.referencesHealth", "FEReleaseSlackIntegration.referencesHealth$System_"], function(exports, OSRuntimeCore, System_Model, FEReleaseSlackIntegrationModel) {
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

        FEReleaseSlackIntegrationModel.RC_8f8c9b77bcc0996564febb7d38ea930a = RC_8f8c9b77bcc0996564febb7d38ea930aInner;

        RC_8f8c9b77bcc0996564febb7d38ea930aInner._isAnonymousRecord = true;
        RC_8f8c9b77bcc0996564febb7d38ea930aInner.UniqueId = "8f8c9b77-bcc0-9965-64fe-bb7d38ea930a";
        var RC_8f8c9b77bcc0996564febb7d38ea930a = RC_8f8c9b77bcc0996564febb7d38ea930aInner;
        RC_8f8c9b77bcc0996564febb7d38ea930a.init();
    }
});

define("FEReleaseSlackIntegration.model$RL_8c6f3d2b086b4a75242a7e7c084f1692", ["exports", "@outsystems/runtime-core-js", "FEReleaseSlackIntegration.model", "FEReleaseSlackIntegration.model$RC_8f8c9b77bcc0996564febb7d38ea930a"], function(exports, OSRuntimeCore, FEReleaseSlackIntegrationModel) {
    var OS = OSRuntimeCore;
    class RL_8c6f3d2b086b4a75242a7e7c084f1692 extends
    OS.DataTypes.GenericRecordList {
        static getItemType() {
            return FEReleaseSlackIntegrationModel.RC_8f8c9b77bcc0996564febb7d38ea930a;
        }

    }

    FEReleaseSlackIntegrationModel.RL_8c6f3d2b086b4a75242a7e7c084f1692 = RL_8c6f3d2b086b4a75242a7e7c084f1692;

});

define("FEReleaseSlackIntegration.model$RL_919d8bc896529858c8cc8f0f3e5cb019", ["exports", "@outsystems/runtime-core-js", "FEReleaseSlackIntegration.model", "FEReleaseSlackIntegration.model$RC_4d77cfdd567b208680377834fc8205a2"], function(exports, OSRuntimeCore, FEReleaseSlackIntegrationModel) {
    var OS = OSRuntimeCore;
    class RL_919d8bc896529858c8cc8f0f3e5cb019 extends
    OS.DataTypes.GenericRecordList {
        static getItemType() {
            return FEReleaseSlackIntegrationModel.RC_4d77cfdd567b208680377834fc8205a2;
        }

    }

    FEReleaseSlackIntegrationModel.RL_919d8bc896529858c8cc8f0f3e5cb019 = RL_919d8bc896529858c8cc8f0f3e5cb019;

});

define("FEReleaseSlackIntegration.model$RL_962cf0371c958f3149af000f463cc1c8", ["exports", "@outsystems/runtime-core-js", "FEReleaseSlackIntegration.model", "FEReleaseSlackIntegration.model$RC_3391a407605c2903e72042e67177aeae"], function(exports, OSRuntimeCore, FEReleaseSlackIntegrationModel) {
    var OS = OSRuntimeCore;
    class RL_962cf0371c958f3149af000f463cc1c8 extends
    OS.DataTypes.GenericRecordList {
        static getItemType() {
            return FEReleaseSlackIntegrationModel.RC_3391a407605c2903e72042e67177aeae;
        }

    }

    FEReleaseSlackIntegrationModel.RL_962cf0371c958f3149af000f463cc1c8 = RL_962cf0371c958f3149af000f463cc1c8;

});

define("FEReleaseSlackIntegration.model$RL_9635a3e1743352b2172de2b697e7b083", ["exports", "@outsystems/runtime-core-js", "FEReleaseSlackIntegration.model", "FEReleaseSlackIntegration.model$RC_4e0347af69e49e93f28b4b0de4bcad85"], function(exports, OSRuntimeCore, FEReleaseSlackIntegrationModel) {
    var OS = OSRuntimeCore;
    class RL_9635a3e1743352b2172de2b697e7b083 extends
    OS.DataTypes.GenericRecordList {
        static getItemType() {
            return FEReleaseSlackIntegrationModel.RC_4e0347af69e49e93f28b4b0de4bcad85;
        }

    }

    FEReleaseSlackIntegrationModel.RL_9635a3e1743352b2172de2b697e7b083 = RL_9635a3e1743352b2172de2b697e7b083;

});

define("FEReleaseSlackIntegration.model$RL_9ab59cf1963fbe94eddb7ebb18232c35", ["exports", "@outsystems/runtime-core-js", "System_.model", "FEReleaseSlackIntegration.model", "System_.model$UserUpdateInfoRec", "FEReleaseSlackIntegration.referencesHealth", "FEReleaseSlackIntegration.referencesHealth$System_"], function(exports, OSRuntimeCore, System_Model, FEReleaseSlackIntegrationModel) {
    var OS = OSRuntimeCore;
    class RL_9ab59cf1963fbe94eddb7ebb18232c35 extends
    OS.DataTypes.GenericRecordList {
        static getItemType() {
            return OS.SystemStructures.UserUpdateInfoRec;
        }

    }

    FEReleaseSlackIntegrationModel.RL_9ab59cf1963fbe94eddb7ebb18232c35 = RL_9ab59cf1963fbe94eddb7ebb18232c35;

});

define("FEReleaseSlackIntegration.model$RL_9bba1220f91628d35d17687902f382ad", ["exports", "@outsystems/runtime-core-js", "FEReleaseSlackIntegration.model", "FEReleaseSlackIntegration.model$RC_5d4c0a98b9773e489e7e27bfe5360793"], function(exports, OSRuntimeCore, FEReleaseSlackIntegrationModel) {
    var OS = OSRuntimeCore;
    class RL_9bba1220f91628d35d17687902f382ad extends
    OS.DataTypes.GenericRecordList {
        static getItemType() {
            return FEReleaseSlackIntegrationModel.RC_5d4c0a98b9773e489e7e27bfe5360793;
        }

    }

    FEReleaseSlackIntegrationModel.RL_9bba1220f91628d35d17687902f382ad = RL_9bba1220f91628d35d17687902f382ad;

});

define("FEReleaseSlackIntegration.model$RL_9cb7bfaaafb49f2d821d7361f41fe71b", ["exports", "@outsystems/runtime-core-js", "FEReleaseSlackIntegration.model", "FEReleaseSlackIntegration.model$RC_645e6d99c62950d533c673c938aae9c2"], function(exports, OSRuntimeCore, FEReleaseSlackIntegrationModel) {
    var OS = OSRuntimeCore;
    class RL_9cb7bfaaafb49f2d821d7361f41fe71b extends
    OS.DataTypes.GenericRecordList {
        static getItemType() {
            return FEReleaseSlackIntegrationModel.RC_645e6d99c62950d533c673c938aae9c2;
        }

    }

    FEReleaseSlackIntegrationModel.RL_9cb7bfaaafb49f2d821d7361f41fe71b = RL_9cb7bfaaafb49f2d821d7361f41fe71b;

});

define("FEReleaseSlackIntegration.model$RC_a582d84634a30a3a3b1e61cbfd3db9de", ["exports", "@outsystems/runtime-core-js", "System_.model", "FEReleaseSlackIntegration.model", "System_.model$UserUpdateInfoRec", "FEReleaseSlackIntegration.referencesHealth", "FEReleaseSlackIntegration.referencesHealth$System_"], function(exports, OSRuntimeCore, System_Model, FEReleaseSlackIntegrationModel) {
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

        FEReleaseSlackIntegrationModel.RC_a582d84634a30a3a3b1e61cbfd3db9de = RC_a582d84634a30a3a3b1e61cbfd3db9deInner;

        RC_a582d84634a30a3a3b1e61cbfd3db9deInner._isAnonymousRecord = true;
        RC_a582d84634a30a3a3b1e61cbfd3db9deInner.UniqueId = "a582d846-34a3-0a3a-3b1e-61cbfd3db9de";
        var RC_a582d84634a30a3a3b1e61cbfd3db9de = RC_a582d84634a30a3a3b1e61cbfd3db9deInner;
        RC_a582d84634a30a3a3b1e61cbfd3db9de.init();
    }
});

define("FEReleaseSlackIntegration.model$RL_a5b6b975942e234f0350205b728240be", ["exports", "@outsystems/runtime-core-js", "FEReleaseSlackIntegration.model", "FEReleaseSlackIntegration.model$RC_a582d84634a30a3a3b1e61cbfd3db9de"], function(exports, OSRuntimeCore, FEReleaseSlackIntegrationModel) {
    var OS = OSRuntimeCore;
    class RL_a5b6b975942e234f0350205b728240be extends
    OS.DataTypes.GenericRecordList {
        static getItemType() {
            return FEReleaseSlackIntegrationModel.RC_a582d84634a30a3a3b1e61cbfd3db9de;
        }

    }

    FEReleaseSlackIntegrationModel.RL_a5b6b975942e234f0350205b728240be = RL_a5b6b975942e234f0350205b728240be;

});

define("FEReleaseSlackIntegration.model$RL_a60626c1780bfe250dcef75d5dfa5fd1", ["exports", "@outsystems/runtime-core-js", "System_.model", "FEReleaseSlackIntegration.model", "System_.model$ChangePasswordFailureReasonRec", "FEReleaseSlackIntegration.referencesHealth", "FEReleaseSlackIntegration.referencesHealth$System_"], function(exports, OSRuntimeCore, System_Model, FEReleaseSlackIntegrationModel) {
    var OS = OSRuntimeCore;
    class RL_a60626c1780bfe250dcef75d5dfa5fd1 extends
    OS.DataTypes.GenericRecordList {
        static getItemType() {
            return OS.SystemStructures.ChangePasswordFailureReasonRec;
        }

    }

    FEReleaseSlackIntegrationModel.RL_a60626c1780bfe250dcef75d5dfa5fd1 = RL_a60626c1780bfe250dcef75d5dfa5fd1;

});

define("FEReleaseSlackIntegration.model$RC_b27f0b968b0f7cea61506ac9d6ee7c27", ["exports", "@outsystems/runtime-core-js", "System_.model", "FEReleaseSlackIntegration.model", "System_.model$PasswordValidationResultRec", "FEReleaseSlackIntegration.referencesHealth", "FEReleaseSlackIntegration.referencesHealth$System_"], function(exports, OSRuntimeCore, System_Model, FEReleaseSlackIntegrationModel) {
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

        FEReleaseSlackIntegrationModel.RC_b27f0b968b0f7cea61506ac9d6ee7c27 = RC_b27f0b968b0f7cea61506ac9d6ee7c27Inner;

        RC_b27f0b968b0f7cea61506ac9d6ee7c27Inner._isAnonymousRecord = true;
        RC_b27f0b968b0f7cea61506ac9d6ee7c27Inner.UniqueId = "b27f0b96-8b0f-7cea-6150-6ac9d6ee7c27";
        var RC_b27f0b968b0f7cea61506ac9d6ee7c27 = RC_b27f0b968b0f7cea61506ac9d6ee7c27Inner;
        RC_b27f0b968b0f7cea61506ac9d6ee7c27.init();
    }
});

define("FEReleaseSlackIntegration.model$RC_e5c662d406f83f7f791bd7e5c8b0c543", ["exports", "@outsystems/runtime-core-js", "System_.model", "FEReleaseSlackIntegration.model", "System_.model$ChangePasswordFailureReasonRec", "FEReleaseSlackIntegration.referencesHealth", "FEReleaseSlackIntegration.referencesHealth$System_"], function(exports, OSRuntimeCore, System_Model, FEReleaseSlackIntegrationModel) {
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

        FEReleaseSlackIntegrationModel.RC_e5c662d406f83f7f791bd7e5c8b0c543 = RC_e5c662d406f83f7f791bd7e5c8b0c543Inner;

        RC_e5c662d406f83f7f791bd7e5c8b0c543Inner._isAnonymousRecord = true;
        RC_e5c662d406f83f7f791bd7e5c8b0c543Inner.UniqueId = "e5c662d4-06f8-3f7f-791b-d7e5c8b0c543";
        var RC_e5c662d406f83f7f791bd7e5c8b0c543 = RC_e5c662d406f83f7f791bd7e5c8b0c543Inner;
        RC_e5c662d406f83f7f791bd7e5c8b0c543.init();
    }
});

define("FEReleaseSlackIntegration.model$RL_b6f4bbf36a4770c53788c60d2b555d3c", ["exports", "@outsystems/runtime-core-js", "FEReleaseSlackIntegration.model", "FEReleaseSlackIntegration.model$RC_e5c662d406f83f7f791bd7e5c8b0c543"], function(exports, OSRuntimeCore, FEReleaseSlackIntegrationModel) {
    var OS = OSRuntimeCore;
    class RL_b6f4bbf36a4770c53788c60d2b555d3c extends
    OS.DataTypes.GenericRecordList {
        static getItemType() {
            return FEReleaseSlackIntegrationModel.RC_e5c662d406f83f7f791bd7e5c8b0c543;
        }

    }

    FEReleaseSlackIntegrationModel.RL_b6f4bbf36a4770c53788c60d2b555d3c = RL_b6f4bbf36a4770c53788c60d2b555d3c;

});

define("FEReleaseSlackIntegration.model$RC_d4817385d3db168633301f8c73e2d828", ["exports", "@outsystems/runtime-core-js", "FEReleaseSlackIntegration.model", "FEReleaseSlackIntegration.model$ST_3782d35f5f28ff9dd18fb6881ab471a9Structure"], function(exports, OSRuntimeCore, FEReleaseSlackIntegrationModel) {
    var OS = OSRuntimeCore; {
        class RC_d4817385d3db168633301f8c73e2d828Inner extends
        OS.DataTypes.GenericRecord {
            static attributesToDeclare() {
                return [
                    this.attr("Message", "messageAttr", "Message", false, false, OS.DataTypes.DataTypes.Record, function() {
                        return OS.DataTypes.ImmutableBase.getData(new FEReleaseSlackIntegrationModel.ST_3782d35f5f28ff9dd18fb6881ab471a9Structure());
                    }, true, FEReleaseSlackIntegrationModel.ST_3782d35f5f28ff9dd18fb6881ab471a9Structure)
                ].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
            }

            static fromStructure(str) {
                return new RC_d4817385d3db168633301f8c73e2d828(new RC_d4817385d3db168633301f8c73e2d828.RecordClass({
                    messageAttr: OS.DataTypes.ImmutableBase.getData(str)
                }));
            }

        }

        FEReleaseSlackIntegrationModel.RC_d4817385d3db168633301f8c73e2d828 = RC_d4817385d3db168633301f8c73e2d828Inner;

        RC_d4817385d3db168633301f8c73e2d828Inner._isAnonymousRecord = true;
        RC_d4817385d3db168633301f8c73e2d828Inner.UniqueId = "d4817385-d3db-1686-3330-1f8c73e2d828";
        var RC_d4817385d3db168633301f8c73e2d828 = RC_d4817385d3db168633301f8c73e2d828Inner;
        RC_d4817385d3db168633301f8c73e2d828.init();
    }
});

define("FEReleaseSlackIntegration.model$RL_b7ce76296993c7fe1a92e2eeb8b1ed65", ["exports", "@outsystems/runtime-core-js", "FEReleaseSlackIntegration.model", "FEReleaseSlackIntegration.model$RC_d4817385d3db168633301f8c73e2d828"], function(exports, OSRuntimeCore, FEReleaseSlackIntegrationModel) {
    var OS = OSRuntimeCore;
    class RL_b7ce76296993c7fe1a92e2eeb8b1ed65 extends
    OS.DataTypes.GenericRecordList {
        static getItemType() {
            return FEReleaseSlackIntegrationModel.RC_d4817385d3db168633301f8c73e2d828;
        }

    }

    FEReleaseSlackIntegrationModel.RL_b7ce76296993c7fe1a92e2eeb8b1ed65 = RL_b7ce76296993c7fe1a92e2eeb8b1ed65;

});

define("FEReleaseSlackIntegration.model$RL_bfe5e088b2f6df6ae697d4a263069bca", ["exports", "@outsystems/runtime-core-js", "System_.model", "FEReleaseSlackIntegration.model", "System_.model$UserLoginResultRec", "FEReleaseSlackIntegration.referencesHealth", "FEReleaseSlackIntegration.referencesHealth$System_"], function(exports, OSRuntimeCore, System_Model, FEReleaseSlackIntegrationModel) {
    var OS = OSRuntimeCore;
    class RL_bfe5e088b2f6df6ae697d4a263069bca extends
    OS.DataTypes.GenericRecordList {
        static getItemType() {
            return OS.SystemStructures.UserLoginResultRec;
        }

    }

    FEReleaseSlackIntegrationModel.RL_bfe5e088b2f6df6ae697d4a263069bca = RL_bfe5e088b2f6df6ae697d4a263069bca;

});

define("FEReleaseSlackIntegration.model$RL_ca4befaa7d5de5d9bbcd4bf59c44b15c", ["exports", "@outsystems/runtime-core-js", "FEReleaseSlackIntegration.model", "FEReleaseSlackIntegration.model$RC_b27f0b968b0f7cea61506ac9d6ee7c27"], function(exports, OSRuntimeCore, FEReleaseSlackIntegrationModel) {
    var OS = OSRuntimeCore;
    class RL_ca4befaa7d5de5d9bbcd4bf59c44b15c extends
    OS.DataTypes.GenericRecordList {
        static getItemType() {
            return FEReleaseSlackIntegrationModel.RC_b27f0b968b0f7cea61506ac9d6ee7c27;
        }

    }

    FEReleaseSlackIntegrationModel.RL_ca4befaa7d5de5d9bbcd4bf59c44b15c = RL_ca4befaa7d5de5d9bbcd4bf59c44b15c;

});

define("FEReleaseSlackIntegration.model$RL_e57523dcca7e6d3766c4721a0ef109ee", ["exports", "@outsystems/runtime-core-js", "System_.model", "FEReleaseSlackIntegration.model", "System_.model$PasswordValidationResultRec", "FEReleaseSlackIntegration.referencesHealth", "FEReleaseSlackIntegration.referencesHealth$System_"], function(exports, OSRuntimeCore, System_Model, FEReleaseSlackIntegrationModel) {
    var OS = OSRuntimeCore;
    class RL_e57523dcca7e6d3766c4721a0ef109ee extends
    OS.DataTypes.GenericRecordList {
        static getItemType() {
            return OS.SystemStructures.PasswordValidationResultRec;
        }

    }

    FEReleaseSlackIntegrationModel.RL_e57523dcca7e6d3766c4721a0ef109ee = RL_e57523dcca7e6d3766c4721a0ef109ee;

});

define("FEReleaseSlackIntegration.model$RL_e93cd992078676b88f68d6ad18fca2eb", ["exports", "@outsystems/runtime-core-js", "FEReleaseSlackIntegration.model", "FEReleaseSlackIntegration.model$EN_59cbb1e0f8f4f8703edc130b04d7ed9bEntityRecord"], function(exports, OSRuntimeCore, FEReleaseSlackIntegrationModel) {
    var OS = OSRuntimeCore;
    class RL_e93cd992078676b88f68d6ad18fca2eb extends
    OS.DataTypes.GenericRecordList {
        static getItemType() {
            return FEReleaseSlackIntegrationModel.EN_59cbb1e0f8f4f8703edc130b04d7ed9bEntityRecord;
        }

    }

    FEReleaseSlackIntegrationModel.RL_e93cd992078676b88f68d6ad18fca2eb = RL_e93cd992078676b88f68d6ad18fca2eb;

});

define("FEReleaseSlackIntegration.model$RL_ef15c0d597df53b7b8648a57b9e97d87", ["exports", "@outsystems/runtime-core-js", "FEReleaseSlackIntegration.model", "FEReleaseSlackIntegration.model$ST_0a66c582c77592abee52988e6d0524e2Structure"], function(exports, OSRuntimeCore, FEReleaseSlackIntegrationModel) {
    var OS = OSRuntimeCore;
    class RL_ef15c0d597df53b7b8648a57b9e97d87 extends
    OS.DataTypes.GenericRecordList {
        static getItemType() {
            return FEReleaseSlackIntegrationModel.ST_0a66c582c77592abee52988e6d0524e2Structure;
        }

    }

    FEReleaseSlackIntegrationModel.RL_ef15c0d597df53b7b8648a57b9e97d87 = RL_ef15c0d597df53b7b8648a57b9e97d87;

});

define("FEReleaseSlackIntegration.model$RL_f07d4ee6d8af2ad822d0947b26fdf6f3", ["exports", "@outsystems/runtime-core-js", "FEReleaseSlackIntegration.model", "FEReleaseSlackIntegration.model$RC_53d491417faf149f9fb8a0dda9c12d06"], function(exports, OSRuntimeCore, FEReleaseSlackIntegrationModel) {
    var OS = OSRuntimeCore;
    class RL_f07d4ee6d8af2ad822d0947b26fdf6f3 extends
    OS.DataTypes.GenericRecordList {
        static getItemType() {
            return FEReleaseSlackIntegrationModel.RC_53d491417faf149f9fb8a0dda9c12d06;
        }

    }

    FEReleaseSlackIntegrationModel.RL_f07d4ee6d8af2ad822d0947b26fdf6f3 = RL_f07d4ee6d8af2ad822d0947b26fdf6f3;

});

define("FEReleaseSlackIntegration.model$RL_f1196bd579546c29194106cace86bf26", ["exports", "@outsystems/runtime-core-js", "FEReleaseSlackIntegration.model", "FEReleaseSlackIntegration.model$RC_3375dbdf42120d4cd74942f1cc4f9d88"], function(exports, OSRuntimeCore, FEReleaseSlackIntegrationModel) {
    var OS = OSRuntimeCore;
    class RL_f1196bd579546c29194106cace86bf26 extends
    OS.DataTypes.GenericRecordList {
        static getItemType() {
            return FEReleaseSlackIntegrationModel.RC_3375dbdf42120d4cd74942f1cc4f9d88;
        }

    }

    FEReleaseSlackIntegrationModel.RL_f1196bd579546c29194106cace86bf26 = RL_f1196bd579546c29194106cace86bf26;

});

define("FEReleaseSlackIntegration.model$RL_f50879d0da007880fcd304f3378f0a9e", ["exports", "@outsystems/runtime-core-js", "System_.model", "FEReleaseSlackIntegration.model", "System_.model$PasswordComplexityPolicyRec", "FEReleaseSlackIntegration.referencesHealth", "FEReleaseSlackIntegration.referencesHealth$System_"], function(exports, OSRuntimeCore, System_Model, FEReleaseSlackIntegrationModel) {
    var OS = OSRuntimeCore;
    class RL_f50879d0da007880fcd304f3378f0a9e extends
    OS.DataTypes.GenericRecordList {
        static getItemType() {
            return OS.SystemStructures.PasswordComplexityPolicyRec;
        }

    }

    FEReleaseSlackIntegrationModel.RL_f50879d0da007880fcd304f3378f0a9e = RL_f50879d0da007880fcd304f3378f0a9e;

});

define("FEReleaseSlackIntegration.model$RC_f61c868ef053db94121ce89ee15a14fe", ["exports", "@outsystems/runtime-core-js", "System_.model", "FEReleaseSlackIntegration.model", "System_.model$UserLoginFailureReasonRec", "FEReleaseSlackIntegration.referencesHealth", "FEReleaseSlackIntegration.referencesHealth$System_"], function(exports, OSRuntimeCore, System_Model, FEReleaseSlackIntegrationModel) {
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

        FEReleaseSlackIntegrationModel.RC_f61c868ef053db94121ce89ee15a14fe = RC_f61c868ef053db94121ce89ee15a14feInner;

        RC_f61c868ef053db94121ce89ee15a14feInner._isAnonymousRecord = true;
        RC_f61c868ef053db94121ce89ee15a14feInner.UniqueId = "f61c868e-f053-db94-121c-e89ee15a14fe";
        var RC_f61c868ef053db94121ce89ee15a14fe = RC_f61c868ef053db94121ce89ee15a14feInner;
        RC_f61c868ef053db94121ce89ee15a14fe.init();
    }
});

define("FEReleaseSlackIntegration.model$RL_f8521ed9345aebcc5291d9af7419ba46", ["exports", "@outsystems/runtime-core-js", "FEReleaseSlackIntegration.model", "FEReleaseSlackIntegration.model$ST_29a5f7e0895363cf669089952b2fb1edStructure"], function(exports, OSRuntimeCore, FEReleaseSlackIntegrationModel) {
    var OS = OSRuntimeCore;
    class RL_f8521ed9345aebcc5291d9af7419ba46 extends
    OS.DataTypes.GenericRecordList {
        static getItemType() {
            return FEReleaseSlackIntegrationModel.ST_29a5f7e0895363cf669089952b2fb1edStructure;
        }

    }

    FEReleaseSlackIntegrationModel.RL_f8521ed9345aebcc5291d9af7419ba46 = RL_f8521ed9345aebcc5291d9af7419ba46;

});

define("FEReleaseSlackIntegration.model$RL_fa1cf4d41a97ccd464505d7fd43080f2", ["exports", "@outsystems/runtime-core-js", "FEReleaseSlackIntegration.model", "FEReleaseSlackIntegration.model$ST_a01186a03a6c4b831d48748ff6ff136bStructure"], function(exports, OSRuntimeCore, FEReleaseSlackIntegrationModel) {
    var OS = OSRuntimeCore;
    class RL_fa1cf4d41a97ccd464505d7fd43080f2 extends
    OS.DataTypes.GenericRecordList {
        static getItemType() {
            return FEReleaseSlackIntegrationModel.ST_a01186a03a6c4b831d48748ff6ff136bStructure;
        }

    }

    FEReleaseSlackIntegrationModel.RL_fa1cf4d41a97ccd464505d7fd43080f2 = RL_fa1cf4d41a97ccd464505d7fd43080f2;

});

define("FEReleaseSlackIntegration.model$RL_fbc9fc52e3cef45822e06efc69df5a4a", ["exports", "@outsystems/runtime-core-js", "FEReleaseSlackIntegration.model", "FEReleaseSlackIntegration.model$RC_f61c868ef053db94121ce89ee15a14fe"], function(exports, OSRuntimeCore, FEReleaseSlackIntegrationModel) {
    var OS = OSRuntimeCore;
    class RL_fbc9fc52e3cef45822e06efc69df5a4a extends
    OS.DataTypes.GenericRecordList {
        static getItemType() {
            return FEReleaseSlackIntegrationModel.RC_f61c868ef053db94121ce89ee15a14fe;
        }

    }

    FEReleaseSlackIntegrationModel.RL_fbc9fc52e3cef45822e06efc69df5a4a = RL_fbc9fc52e3cef45822e06efc69df5a4a;

});

define("FEReleaseSlackIntegration.model$RL_fc9a0541e530960ed38d7662d5b2141b", ["exports", "@outsystems/runtime-core-js", "System_.model", "FEReleaseSlackIntegration.model", "System_.model$ChangePasswordResultRec", "FEReleaseSlackIntegration.referencesHealth", "FEReleaseSlackIntegration.referencesHealth$System_"], function(exports, OSRuntimeCore, System_Model, FEReleaseSlackIntegrationModel) {
    var OS = OSRuntimeCore;
    class RL_fc9a0541e530960ed38d7662d5b2141b extends
    OS.DataTypes.GenericRecordList {
        static getItemType() {
            return OS.SystemStructures.ChangePasswordResultRec;
        }

    }

    FEReleaseSlackIntegrationModel.RL_fc9a0541e530960ed38d7662d5b2141b = RL_fc9a0541e530960ed38d7662d5b2141b;

});

define("FEReleaseSlackIntegration.model", ["exports", "@outsystems/runtime-core-js"], function(exports, OSRuntimeCore) {
    var OS = OSRuntimeCore;
    var FEReleaseSlackIntegrationModel = exports;
    Object.defineProperty(FEReleaseSlackIntegrationModel, "module", {
        get: function() {
            return OS.ApplicationInfo.getModules()["a2d61d89-2946-438d-b8c1-955f6fecdf83"];
        }
    });

    FEReleaseSlackIntegrationModel.staticEntities = {};
    FEReleaseSlackIntegrationModel.staticEntities.slackResponse = {};
    var getSlackResponseRecord = function(record) {
        return FEReleaseSlackIntegrationModel.module.staticEntities["41afc5ca-7331-49c5-8f55-f58298425328"][record];
    };
    Object.defineProperty(FEReleaseSlackIntegrationModel.staticEntities.slackResponse, "ok", {
        get: function() {
            return "ok";
        }
    });

    Object.defineProperty(FEReleaseSlackIntegrationModel.staticEntities.slackResponse, "error", {
        get: function() {
            return "error";
        }
    });

});